#!/usr/bin/env python3
"""Prepare or publish HIP Psychology markdown blog drafts to WordPress.

Defaults are deliberately safe:
- Dry run by default, no writes happen unless --execute is passed.
- Post status defaults to draft.
- Falls back to credentials embedded in tmp/hip_publish_posts.py when env vars are unset.

Supported draft format:
- H1 title on the first line
- metadata bullets before "## Article", for example:
  - **Slug:** example-slug
  - **Meta title:** Example Meta Title
  - **Meta description:** Example meta description.
  - **Excerpt:** Short excerpt.
  - **Category:** School Wellbeing
  - **Categories:** School Wellbeing, Another Category
- article body under "## Article"
- optional "## Internal link suggestions" section, which is parsed for reporting only

Examples:
  python3 tmp/hip_wp_markdown_batch.py
  python3 tmp/hip_wp_markdown_batch.py --execute --status publish
  python3 tmp/hip_wp_markdown_batch.py --execute --status publish --category "School Wellbeing:school-wellbeing"
  python3 tmp/hip_wp_markdown_batch.py --execute --status draft \
      --meta-title-key _yoast_wpseo_title \
      --meta-description-key _yoast_wpseo_metadesc
"""

from __future__ import annotations

import argparse
import base64
import importlib.util
import json
import re
import subprocess
import sys
import urllib.parse
import urllib.request
from dataclasses import dataclass, field
from pathlib import Path
from typing import Iterable
from urllib.error import HTTPError

WORKSPACE = Path("/Users/philsagent/.openclaw/workspace")
DEFAULT_DRAFT_DIR = WORKSPACE / "projects/clients/hip-psychology/blog-drafts"
DEFAULT_HELPER_PATH = WORKSPACE / "tmp/hip_publish_posts.py"
DEFAULT_REPORT_PATH = WORKSPACE / "tmp/hip_wp_markdown_batch_report.json"
DEFAULT_CATEGORY_SPEC = "School Wellbeing:school-wellbeing"
DEFAULT_API_BASE = "https://hippsychology.com/wp-json/wp/v2"
DEFAULT_DRAFT_FILES = [
    "educational-psychologist-northern-ireland.md",
    "emotionally-based-school-avoidance.md",
    "mental-health-in-schools.md",
    "staff-wellbeing-in-schools.md",
]
TOKEN_ALIAS_TO_SLUG = {
    "WELLBEING_URL": "wellbeing-workshops-for-schools",
    "ANTI_BULLY_URL": "anti-bullying-workshops-schools",
    "TRANSITION_URL": "year-8-transition-support",
    "ANXIETY_URL": "student-anxiety-in-schools",
}
META_LINE_RE = re.compile(r"^-\s+\*\*(.+?)\*\*\s*(.*?)\s*$")
TOKEN_RE = re.compile(r"\{\{([A-Z0-9_]+)\}\}")


@dataclass
class CategorySpec:
    name: str
    slug: str


@dataclass
class InternalLinkSuggestion:
    label: str
    link_to: str | None = None
    suggested_anchor: str | None = None


@dataclass
class DraftPost:
    source_path: str
    title: str
    slug: str
    target_keyword: str | None
    meta_title: str | None
    meta_description: str | None
    excerpt: str | None
    categories: list[CategorySpec]
    article_markdown: str
    article_html: str
    internal_link_suggestions: list[InternalLinkSuggestion] = field(default_factory=list)
    tokens_found: list[str] = field(default_factory=list)


class WordPressClient:
    def __init__(self, base_url: str, user: str, password: str):
        self.base_url = base_url.rstrip("/")
        auth = base64.b64encode(f"{user}:{password}".encode()).decode()
        self.headers = {
            "Authorization": f"Basic {auth}",
            "Content-Type": "application/json",
            "Accept": "application/json",
        }

    @property
    def site_root(self) -> str:
        return self.base_url.removesuffix("/wp-json/wp/v2")

    def api(self, method: str, path: str, data: dict | None = None, params: dict | None = None):
        url = f"{self.base_url}{path}"
        if params:
            clean_params = {}
            for key, value in params.items():
                if value is None:
                    continue
                if isinstance(value, (list, tuple)):
                    clean_params[key] = ",".join(str(item) for item in value)
                else:
                    clean_params[key] = value
            if clean_params:
                url += "?" + urllib.parse.urlencode(clean_params, doseq=True)
        payload = None if data is None else json.dumps(data).encode("utf-8")
        request = urllib.request.Request(url, data=payload, method=method, headers=self.headers)
        try:
            with urllib.request.urlopen(request, timeout=60) as response:
                raw = response.read().decode("utf-8")
                return json.loads(raw) if raw else None
        except HTTPError as exc:
            raw = exc.read().decode("utf-8", errors="replace")
            try:
                detail = json.loads(raw)
            except Exception:
                detail = {"status": exc.code, "raw": raw}
            raise RuntimeError(f"API {method} {path} failed: {detail}") from exc

    def find_post_by_slug(self, slug: str) -> dict | None:
        items = self.api(
            "GET",
            "/posts",
            params={
                "slug": slug,
                "per_page": 1,
                "context": "edit",
                "status": ["publish", "draft", "pending", "future", "private"],
                "_fields": "id,slug,link,status,categories",
            },
        )
        return items[0] if items else None

    def find_post_link_by_slug(self, slug: str) -> str | None:
        item = self.find_post_by_slug(slug)
        return item["link"] if item else None

    def find_category(self, slug: str) -> dict | None:
        items = self.api(
            "GET",
            "/categories",
            params={
                "slug": slug,
                "per_page": 1,
                "hide_empty": "false",
                "context": "edit",
                "_fields": "id,name,slug",
            },
        )
        return items[0] if items else None

    def ensure_category(self, category: CategorySpec) -> dict:
        existing = self.find_category(category.slug)
        if existing:
            return existing
        created = self.api("POST", "/categories", {"name": category.name, "slug": category.slug})
        return {"id": created["id"], "name": created["name"], "slug": created["slug"]}

    def create_post(self, payload: dict) -> dict:
        return self.api("POST", "/posts", payload)

    def update_post(self, post_id: int, payload: dict) -> dict:
        return self.api("POST", f"/posts/{post_id}", payload)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("paths", nargs="*", help="Specific markdown draft files to process")
    parser.add_argument("--draft-dir", default=str(DEFAULT_DRAFT_DIR), help="Directory to scan when no paths are given")
    parser.add_argument("--helper-path", default=str(DEFAULT_HELPER_PATH), help="Legacy helper file to read embedded creds from")
    parser.add_argument("--base-url", default=None, help="WordPress REST API base, for example https://hippsychology.com/wp-json/wp/v2")
    parser.add_argument("--user", default=None, help="WordPress API username")
    parser.add_argument("--password", default=None, help="WordPress application password")
    parser.add_argument("--category", action="append", default=[], help="Default category name or name:slug. Repeatable.")
    parser.add_argument("--status", default="draft", choices=["draft", "publish", "pending", "future", "private"], help="WordPress status to apply")
    parser.add_argument("--meta-title-key", default=None, help="Optional REST meta key for SEO title")
    parser.add_argument("--meta-description-key", default=None, help="Optional REST meta key for SEO description")
    parser.add_argument("--execute", action="store_true", help="Actually create or update categories and posts")
    parser.add_argument("--report-path", default=str(DEFAULT_REPORT_PATH), help="Where to write the JSON report")
    parser.add_argument("--stdout-json", action="store_true", help="Also print the JSON report to stdout")
    return parser.parse_args()


def slugify(value: str) -> str:
    slug = re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")
    return re.sub(r"-{2,}", "-", slug)


def parse_category_spec(raw: str) -> CategorySpec:
    value = raw.strip()
    if not value:
        raise ValueError("Category spec cannot be empty")
    if ":" in value:
        name, slug = value.split(":", 1)
        name = name.strip()
        slug = slug.strip() or slugify(name)
        return CategorySpec(name=name, slug=slug)
    return CategorySpec(name=value, slug=slugify(value))


def load_credentials(args: argparse.Namespace) -> tuple[str, str, str]:
    base_url = args.base_url
    user = args.user
    password = args.password

    env_map = {
        "base_url": ["HIP_WP_BASE", "WP_BASE", "WORDPRESS_BASE_URL"],
        "user": ["HIP_WP_USER", "WP_USER", "WORDPRESS_USER"],
        "password": ["HIP_WP_APP_PASSWORD", "WP_APP_PASSWORD", "WORDPRESS_APP_PASSWORD"],
    }

    for key, names in env_map.items():
        if locals()[key]:
            continue
        for name in names:
            value = __import__("os").environ.get(name)
            if value:
                if key == "base_url":
                    base_url = value
                elif key == "user":
                    user = value
                else:
                    password = value
                break

    if base_url and user and password:
        return base_url, user, password

    helper_path = Path(args.helper_path)
    if helper_path.exists():
        spec = importlib.util.spec_from_file_location("hip_publish_helper", helper_path)
        if spec and spec.loader:
            module = importlib.util.module_from_spec(spec)
            spec.loader.exec_module(module)
            base_url = base_url or getattr(module, "BASE", DEFAULT_API_BASE)
            user = user or getattr(module, "USER", None)
            password = password or getattr(module, "PASSWORD", None)

    if not base_url:
        base_url = DEFAULT_API_BASE

    if not user or not password:
        raise SystemExit(
            "Missing WordPress credentials. Set HIP_WP_BASE/HIP_WP_USER/HIP_WP_APP_PASSWORD, "
            "pass --base-url/--user/--password, or keep tmp/hip_publish_posts.py available for fallback creds."
        )
    return base_url, user, password


def discover_paths(args: argparse.Namespace) -> list[Path]:
    if args.paths:
        paths = [Path(path).expanduser().resolve() for path in args.paths]
    else:
        draft_dir = Path(args.draft_dir).expanduser().resolve()
        paths = [draft_dir / name for name in DEFAULT_DRAFT_FILES]
    missing = [str(path) for path in paths if not path.exists()]
    if missing:
        raise SystemExit(f"Missing markdown draft files: {missing}")
    return paths


def parse_internal_link_suggestions(lines: list[str]) -> list[InternalLinkSuggestion]:
    suggestions: list[InternalLinkSuggestion] = []
    current: InternalLinkSuggestion | None = None
    for raw_line in lines:
        line = raw_line.strip()
        if not line:
            continue
        numbered_match = re.match(r"^\d+\.\s+\*\*(.+?)\*\*\s*$", line)
        if numbered_match:
            if current:
                suggestions.append(current)
            current = InternalLinkSuggestion(label=numbered_match.group(1).strip())
            continue
        if current is None:
            continue
        if line.lower().startswith("link to:"):
            current.link_to = line.split(":", 1)[1].strip()
        elif line.lower().startswith("suggested anchor:"):
            current.suggested_anchor = line.split(":", 1)[1].strip().strip("`")
    if current:
        suggestions.append(current)
    return suggestions


def convert_markdown_to_html(markdown_text: str) -> str:
    try:
        completed = subprocess.run(
            ["pandoc", "-f", "markdown", "-t", "html"],
            input=markdown_text,
            text=True,
            capture_output=True,
            check=True,
        )
    except FileNotFoundError as exc:
        raise SystemExit("pandoc is required but was not found on PATH") from exc
    except subprocess.CalledProcessError as exc:
        raise SystemExit(f"pandoc conversion failed: {exc.stderr.strip()}") from exc
    return completed.stdout.strip()


def normalise_meta_key(label: str) -> str:
    return re.sub(r"[^a-z0-9]+", "_", label.lower()).strip("_")


def parse_draft(path: Path, default_categories: list[CategorySpec]) -> DraftPost:
    text = path.read_text(encoding="utf-8")
    lines = text.splitlines()
    if not lines or not lines[0].startswith("# "):
        raise SystemExit(f"{path} is missing an H1 title on the first line")

    title = lines[0][2:].strip()
    article_index = None
    internal_index = None
    for idx, line in enumerate(lines):
        if line.strip() == "## Article":
            article_index = idx
        elif line.strip() == "## Internal link suggestions":
            internal_index = idx
    if article_index is None:
        raise SystemExit(f"{path} is missing a '## Article' section")

    meta: dict[str, str] = {}
    for line in lines[1:article_index]:
        stripped = line.strip()
        match = META_LINE_RE.match(stripped)
        if not match:
            continue
        key_text = match.group(1).strip()
        value_text = match.group(2).strip()
        if key_text.endswith(":"):
            key_text = key_text[:-1].strip()
        elif value_text.startswith(":"):
            value_text = value_text[1:].strip()
        meta[normalise_meta_key(key_text)] = value_text

    article_end = internal_index if internal_index is not None else len(lines)
    article_markdown = "\n".join(lines[article_index + 1 : article_end]).strip()
    if not article_markdown:
        raise SystemExit(f"{path} has an empty article body")

    internal_link_suggestions = []
    if internal_index is not None:
        internal_link_suggestions = parse_internal_link_suggestions(lines[internal_index + 1 :])

    category_values = []
    for field_name in ("categories", "category"):
        if meta.get(field_name):
            category_values.extend(part.strip() for part in meta[field_name].split(",") if part.strip())
    categories = [parse_category_spec(item) for item in category_values] if category_values else list(default_categories)

    slug = meta.get("slug") or slugify(title)
    article_html = convert_markdown_to_html(article_markdown)
    tokens_found = sorted(set(TOKEN_RE.findall(article_html)))

    return DraftPost(
        source_path=str(path),
        title=title,
        slug=slug,
        target_keyword=meta.get("target_keyword"),
        meta_title=meta.get("meta_title"),
        meta_description=meta.get("meta_description"),
        excerpt=meta.get("excerpt"),
        categories=categories,
        article_markdown=article_markdown,
        article_html=article_html,
        internal_link_suggestions=internal_link_suggestions,
        tokens_found=tokens_found,
    )


def canonical_link(site_root: str, slug: str) -> str:
    return f"{site_root.rstrip('/')}/{slug}/"


def derived_token_name(slug: str) -> str:
    return re.sub(r"[^A-Z0-9]+", "_", slug.upper()).strip("_") + "_URL"


def replace_tokens(html: str, token_map: dict[str, str]) -> tuple[str, list[dict[str, str]]]:
    replacements: list[dict[str, str]] = []
    for token_name in sorted(set(TOKEN_RE.findall(html))):
        full_token = "{{" + token_name + "}}"
        target = token_map.get(token_name)
        if not target:
            continue
        if full_token in html:
            html = html.replace(full_token, target)
            replacements.append({"token": full_token, "url": target})
    return html, replacements


def build_token_map(client: WordPressClient, drafts: Iterable[DraftPost]) -> dict[str, str]:
    drafts = list(drafts)
    slug_to_link: dict[str, str] = {}

    batch_slugs = {draft.slug for draft in drafts}
    for slug in batch_slugs:
        slug_to_link[slug] = canonical_link(client.site_root, slug)

    for slug in set(TOKEN_ALIAS_TO_SLUG.values()):
        if slug in slug_to_link:
            continue
        slug_to_link[slug] = client.find_post_link_by_slug(slug) or canonical_link(client.site_root, slug)

    token_map: dict[str, str] = {}
    for slug, link in slug_to_link.items():
        token_map[derived_token_name(slug)] = link
    for alias, slug in TOKEN_ALIAS_TO_SLUG.items():
        link = slug_to_link.get(slug)
        if link:
            token_map[alias] = link
    return token_map


def build_post_payload(
    draft: DraftPost,
    category_ids: list[int],
    status: str,
    meta_title_key: str | None,
    meta_description_key: str | None,
    token_map: dict[str, str],
) -> tuple[dict, list[dict[str, str]]]:
    html, replacements = replace_tokens(draft.article_html, token_map)
    payload = {
        "title": draft.title,
        "slug": draft.slug,
        "content": html,
        "status": status,
        "categories": category_ids,
    }
    if draft.excerpt:
        payload["excerpt"] = draft.excerpt

    meta_payload = {}
    if meta_title_key and draft.meta_title:
        meta_payload[meta_title_key] = draft.meta_title
    if meta_description_key and draft.meta_description:
        meta_payload[meta_description_key] = draft.meta_description
    if meta_payload:
        payload["meta"] = meta_payload

    return payload, replacements


def main() -> int:
    args = parse_args()
    default_categories = [parse_category_spec(spec) for spec in (args.category or [DEFAULT_CATEGORY_SPEC])]
    paths = discover_paths(args)
    base_url, user, password = load_credentials(args)
    client = WordPressClient(base_url=base_url, user=user, password=password)

    drafts = [parse_draft(path, default_categories) for path in paths]
    token_map = build_token_map(client, drafts)

    report = {
        "execute": args.execute,
        "status": args.status,
        "base_url": client.base_url,
        "site_root": client.site_root,
        "draft_count": len(drafts),
        "paths": [str(path) for path in paths],
        "meta_keys_used": {
            "title": args.meta_title_key,
            "description": args.meta_description_key,
        },
        "default_categories": [{"name": cat.name, "slug": cat.slug} for cat in default_categories],
        "token_map": token_map,
        "posts": [],
    }

    category_cache: dict[str, dict] = {}
    for draft in drafts:
        resolved_categories = []
        category_ids = []
        for category in draft.categories:
            cached = category_cache.get(category.slug)
            if not cached:
                existing = client.find_category(category.slug)
                if existing:
                    cached = {"id": existing["id"], "name": existing["name"], "slug": existing["slug"], "action": "existing"}
                elif args.execute:
                    created = client.ensure_category(category)
                    cached = {"id": created["id"], "name": created["name"], "slug": created["slug"], "action": "created"}
                else:
                    cached = {"id": None, "name": category.name, "slug": category.slug, "action": "would_create"}
                category_cache[category.slug] = cached
            resolved_categories.append(cached)
            if cached["id"] is not None:
                category_ids.append(cached["id"])

        payload, replacements = build_post_payload(
            draft=draft,
            category_ids=category_ids,
            status=args.status,
            meta_title_key=args.meta_title_key,
            meta_description_key=args.meta_description_key,
            token_map=token_map,
        )
        existing_post = client.find_post_by_slug(draft.slug)
        action = "update" if existing_post else "create"
        result = None
        if args.execute:
            if existing_post:
                result = client.update_post(existing_post["id"], payload)
            else:
                result = client.create_post(payload)
            token_map[derived_token_name(draft.slug)] = result["link"]

        report["posts"].append(
            {
                "source_path": draft.source_path,
                "title": draft.title,
                "slug": draft.slug,
                "target_keyword": draft.target_keyword,
                "meta_title": draft.meta_title,
                "meta_description": draft.meta_description,
                "excerpt": draft.excerpt,
                "category_resolution": resolved_categories,
                "tokens_found": draft.tokens_found,
                "token_replacements_applied": replacements,
                "internal_link_suggestions": [
                    {
                        "label": item.label,
                        "link_to": item.link_to,
                        "suggested_anchor": item.suggested_anchor,
                    }
                    for item in draft.internal_link_suggestions
                ],
                "action": action if not args.execute else f"{action}d",
                "existing_post": existing_post,
                "result": None
                if result is None
                else {
                    "id": result["id"],
                    "slug": result["slug"],
                    "status": result["status"],
                    "link": result["link"],
                },
                "payload_preview": payload,
            }
        )

    report_path = Path(args.report_path).expanduser().resolve()
    report_path.write_text(json.dumps(report, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

    if args.stdout_json:
        print(json.dumps(report, indent=2, ensure_ascii=False))
    else:
        print(f"Wrote report to {report_path}")
        print(f"Prepared {len(drafts)} post payload(s); execute={args.execute}; status={args.status}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
