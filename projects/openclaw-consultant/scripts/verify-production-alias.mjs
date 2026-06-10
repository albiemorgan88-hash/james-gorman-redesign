#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const manifest = JSON.parse(fs.readFileSync(path.join(root, "production-manifest.json"), "utf8"));
const base = `https://${manifest.domain}`;

function fail(message) {
  console.error(`❌ ${message}`);
  process.exitCode = 1;
}

function pass(message) {
  console.log(`✅ ${message}`);
}

let inspect = "";
try {
  inspect = execFileSync("sh", ["-lc", `npx vercel inspect ${manifest.domain} 2>&1`], {
    cwd: root,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });
} catch (error) {
  fail(`could not inspect Vercel alias: ${error.stdout || error.stderr || error.message}`);
}

if (inspect.includes(manifest.knownGoodDeployment)) {
  pass(`${manifest.domain} points to known-good deployment ${manifest.knownGoodDeployment}`);
} else {
  fail(`${manifest.domain} does not point to known-good deployment ${manifest.knownGoodDeployment}`);
  const urlLine = inspect.split("\n").find((line) => line.trim().startsWith("url"));
  if (urlLine) console.error(`   ${urlLine.trim()}`);
}

function visibleText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

async function checkRoute(route) {
  const url = `${base}${route.path}`;
  const res = await fetch(url, { redirect: "follow" });
  const body = await res.text();
  const text = visibleText(body);
  const searchable = `${body}\n${text}`;
  const failures = [];
  if (res.status !== 200) failures.push(`expected 200, got ${res.status}`);
  for (const marker of route.markers) {
    if (!searchable.includes(marker)) failures.push(`missing marker: ${marker}`);
  }
  if (failures.length) {
    fail(`${route.path} failed: ${failures.join("; ")}`);
  } else {
    pass(`${route.path} returned 200 with expected markers`);
  }
  return body;
}

let homepage = "";
for (const route of manifest.criticalRoutes) {
  const body = await checkRoute(route);
  if (route.path === "/") homepage = body;
}

for (const marker of manifest.bannedHomepageMarkers) {
  if (homepage.includes(marker)) fail(`homepage contains banned/restored-wrong marker: ${marker}`);
}

if (manifest.visualLock?.requiredHomepageMarkers?.length) {
  const missingVisualMarkers = manifest.visualLock.requiredHomepageMarkers.filter((marker) => !homepage.includes(marker));
  if (missingVisualMarkers.length) {
    fail(`homepage visual lock failed: missing ${missingVisualMarkers.join(", ")}`);
  } else {
    pass("homepage visual lock required markers are present");
  }
}

if (manifest.visualLock?.bannedHomepageMarkers?.length) {
  const presentBannedMarkers = manifest.visualLock.bannedHomepageMarkers.filter((marker) => homepage.includes(marker));
  if (presentBannedMarkers.length) {
    fail(`homepage visual lock failed: drift markers present ${presentBannedMarkers.join(", ")}`);
  } else {
    pass("homepage visual lock drift markers are absent");
  }
}

if (!process.exitCode) console.log("\nOCC production alias and route checks passed.");
process.exit(process.exitCode || 0);
