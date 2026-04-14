import { AppManifestService as P } from "./editor-platform-app-manifest-service-chunk-min-BCvyLo8L.mjs";
import { ApplicationDataService as m } from "./editor-platform-application-data-service-chunk-min-CD6IWN4l.mjs";
import { BIService as D } from "./editor-platform-bi-service-chunk-min-Bawg5Ds7.mjs";
import { D as b } from "./editor-platform-dependencies-chunk-min-lnuTFbnH.mjs";
import { inject as f } from "./editor-platform-injection-infra-chunk-min-BhILhWfd.mjs";
import "./vendors-edicore-core-C7cXeJQ5.mjs";
import { PagesService as E } from "./editor-platform-pages-service-chunk-min-C3H0jxLx.mjs";
import { RoutersService as w } from "./editor-platform-routers-service-chunk-min-C3AniGzx.mjs";
import { omit as N, invert as T } from "lodash";
const I = {
  VARIANT_PAGE_ADDED: 134,
  VARIANT_RULE_UPDATE: 133
}, B = "create", C = "edit";
function d(n, e) {
  return Object.keys(n).find((t) => n[t] === e);
}
var R;
(function(n) {
  n.REPLACER = "replacer", n.VARIANT = "variant";
})(R || (R = {}));
function A(n, e, t, r, a, i) {
  const o = n.getByRef(e);
  if (!o)
    throw new Error("router data is not available for ref");
  const c = d(o.pages, t.id);
  if (!c)
    throw new Error("connectPage failed, pageRole is not found");
  const s = M(c, o.pages, a, i);
  return n.connectPageToRouter(e, r, [s], {}), s;
}
function M(n, e, t, r) {
  const a = Object.keys(e).reduce((o, c) => {
    const s = Number(c.split(`_${r}`).pop()?.split("-")[0] ?? 0);
    return c.startsWith(`${n}_${r}`) ? Math.max(s + 1, o) : o;
  }, 1), i = t ? `-${t}` : "";
  return `${n}_${r}${a}${i}`;
}
function V(n) {
  return JSON.parse(n)?.replacers || {};
}
function _(n, e) {
  return V(n)[e] || [];
}
function O(n, e, t) {
  const r = V(n), a = d(e, t.id);
  if (a && r)
    return Object.values(r).flat().find((i) => i.role === a);
}
function S(n) {
  return typeof n.config == "string" ? JSON.parse(n.config) : JSON.parse(JSON.stringify(n.config));
}
function j(n, e) {
  const r = (JSON.parse(n)?.roleVariations || {})[e] || [], a = JSON.parse(n)?.rules || {};
  return r.map((i) => a[i].pageRole);
}
function F(n, e, t) {
  const r = d(e, t.id);
  return r && JSON.parse(n)?.rules ? !!Object.values(JSON.parse(n).rules).find((i) => i.pageRole === r) : !1;
}
function x(n, e) {
  const t = d(n.pages, e.id), a = S(n).rules, i = Object.keys(a).find((o) => a[o].pageRole === t);
  if (!i)
    throw new Error(`pageId: '${e.id}' does not contain a rule`);
  return i;
}
var U = function(n, e, t, r) {
  var a = arguments.length, i = a < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, t) : r, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") i = Reflect.decorate(n, e, t, r);
  else for (var c = n.length - 1; c >= 0; c--) (o = n[c]) && (i = (a < 3 ? o(i) : a > 3 ? o(e, t, i) : o(e, t)) || i);
  return a > 3 && i && Object.defineProperty(e, t, i), i;
}, $ = function(n, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(n, e);
}, h = function(n, e) {
  return function(t, r) {
    e(t, r, n);
  };
};
let y = class {
  documentManagement;
  routersService;
  applicationDataService;
  pagesService;
  biService;
  appManifestService;
  static namespace = "PageReplaceDataService";
  constructor(e, t, r, a, i, o) {
    this.documentManagement = e, this.routersService = t, this.applicationDataService = r, this.pagesService = a, this.biService = i, this.appManifestService = o;
  }
  getUpdatedRoleVariations(e, t, r) {
    const a = e.roleVariations ?? {};
    return a[r] ? a[r].push(t) : a[r] = [t], a;
  }
  addRule(e, t, r, a) {
    const i = e.rules ?? {}, o = { ...r, pageRole: a };
    return { ...i, [t]: o };
  }
  generateUUID() {
    return new Array(2).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(4)).join("-");
  }
  updateRouterConfig(e, t, r, a, i, o) {
    let c, s;
    const p = JSON.parse(e), g = p.replacers ?? {};
    let u;
    i && o && (u = this.generateUUID(), s = this.addRule(p, u, i, o), c = this.getUpdatedRoleVariations(p, u, r));
    const l = JSON.stringify({
      ...p,
      ...a && {
        replacers: {
          ...g,
          [r]: a
        }
      },
      ...i && { rules: s },
      ...i && { roleVariations: c }
    });
    return this.routersService.update(t, { config: l }), u;
  }
  getVariantPageRule(e) {
    const t = this.routersService.getRouterDataForPageIfExist(e.id);
    if (!t)
      throw new Error(`pageId: '${e.id}' is not connected to any router`);
    const r = d(t.pages, e.id), a = S(t), o = Object.values(a?.rules).find((s) => s?.pageRole === r);
    if (!o)
      throw new Error(`pageId: '${e.id}' does not contain a rule`);
    return N({ ...o }, "pageRole");
  }
  updateVariantPageRule({ biFlowId: e, updatedRule: t, variantPageRef: r }) {
    const a = this.routersService.getRouterRefByPage(r);
    if (!a)
      throw new Error(`pageId: '${r.id}' is not connected to any router`);
    const i = this.routersService.getByRef(a);
    if (!i)
      throw new Error(`router data is not available for pageId: '${r.id}'`);
    const o = d(i.pages, r.id), c = S(i), s = x(i, r);
    c.rules[s] = { ...t, pageRole: o };
    const p = JSON.stringify({
      ...c
    });
    this.routersService.update(a, { config: p }), this.biService.reportBi(I.VARIANT_RULE_UPDATE, {
      action: C,
      app_id: i.appDefinitionId,
      flow_id: e,
      page_id: r.id,
      rule_id: s
    });
  }
  setReplacerPage(e, t, r) {
    if (!e?.id || !t?.id)
      return;
    const a = this.routersService.getRouterRefByPage(e);
    if (!a)
      throw new Error("target page is not connected to router");
    const i = this.routersService.getRouterDataForPageIfExist(t.id);
    if (!i)
      A(this.routersService, a, e, t, void 0, R.REPLACER);
    else if (!d(i.pages, e.id))
      throw new Error("replacing page is already in use within another router");
    this.documentManagement.waitForChangesApplied(() => {
      const o = this.routersService.getByRef(a);
      if (!o)
        throw new Error("router data is not available for ref");
      const c = JSON.stringify(o.config), s = d(o.pages, e.id);
      if (!s)
        throw new Error("pageRole is not found");
      const p = d(o.pages, t.id);
      if (!p)
        throw new Error("replacerPageRole is not found");
      let g;
      const u = s === p;
      if (r)
        if (u) {
          const l = _(c, s).find((v) => v.active);
          g = l && [
            { active: !1, role: l.role }
          ];
        } else
          g = [
            {
              active: r,
              role: p
            }
          ];
      else u || (g = [{ active: r, role: p }]);
      g && this.updateRouterConfig(c, a, s, g);
    });
  }
  async addVariantToPage(e, t, r, a, i) {
    let o;
    if (o = this.routersService.getRouterRefByPage(e), !o && !this.isRouterExistForPage(e) && (o = await this.routersService.createRouterByPage(e), await this.connectPageToRouter(o, e), !o))
      throw new Error("could not create router");
    const c = A(this.routersService, o, e, t, a, R.VARIANT), s = this.routersService.getByRef(o);
    if (!s)
      throw new Error("router data is not available for ref");
    const p = d(s.pages, e.id);
    if (!p)
      throw new Error("connectVariant failed - pageRole is not found");
    this.documentManagement.waitForChangesApplied(() => {
      const g = JSON.stringify(s.config), u = this.updateRouterConfig(g, o, p, void 0, r, c);
      this.biService.reportBi(I.VARIANT_RULE_UPDATE, {
        action: B,
        app_id: s.appDefinitionId,
        flow_id: i,
        page_id: t.id,
        rule_id: u
      });
      const l = this.getPageInfo(e), v = this.getPageInfo(t);
      this.biService.reportBi(I.VARIANT_PAGE_ADDED, {
        app_id: s.appDefinitionId,
        page_id: t.id,
        page_name: v.pageTitle,
        target_id: e.id,
        target_name: l.pageTitle
      });
    }, !1);
  }
  getPageInfo(e) {
    if (!e.id)
      throw new Error("Could not get page info because of missing page id");
    const t = this.routersService.getRouterDataForPageIfExist(e.id);
    if (!t)
      throw new Error(`pageId: '${e.id}' is not connected to any router`);
    const r = this.applicationDataService.getAppDataByAppDefId(t.appDefinitionId);
    if (!r?.appDefinitionName)
      throw new Error("routerData connected to an app without app data or the app is not installed");
    const a = this.pagesService.data.get(e.id);
    return {
      hostAppDefinitionId: r.appDefinitionId,
      hostAppName: r.appDefinitionName,
      isCustomPage: !a?.managingAppDefId,
      managingAppDefId: a?.managingAppDefId,
      pageTitle: a?.title
    };
  }
  isRouterExistForPage = (e) => !!this.routersService.getRouterDataForPageIfExist(e.id);
  connectPageToRouter = (e, t) => {
    const { appDefinitionId: r, managingAppDefId: a, tpaPageId: i } = this.pagesService.data.get(t.id), o = r ?? a, c = this.getPageReplaceOptions(o, t);
    if (!i)
      throw new Error("tpaPageId is missing in connectPageToRouter");
    return this.routersService.connectPageToRouter(e, t, [i], c?.slug ? { innerRoute: c.slug } : {}), new Promise((s) => {
      this.documentManagement.waitForChangesApplied(() => s(!0));
    });
  };
  getPageVariations(e) {
    if (!e.id)
      throw new Error("pageRef must have an id");
    const t = this.routersService.getRouterDataForPageIfExist(e.id);
    if (t) {
      const r = Object.keys(t.pages).find((s) => t.pages[s] === e.id), i = _(t.config, r).map((s) => t.pages[s.role]), c = j(t.config, r).map((s) => t.pages[s]);
      return { replacers: i, variants: c };
    }
  }
  getPageReplaceOptions = (e, t) => {
    const r = this.appManifestService.getAppManifest(e), a = this.pagesService.data.get(t.id);
    if (a?.tpaPageId)
      return r?.pages?.applicationSettings?.default?.pageReplace?.[a.tpaPageId];
  };
  isReplaceable(e, t) {
    return !!this.getPageReplaceOptions(e, t)?.replaceable;
  }
  // TODO: remove (#EP-6110)
  // eslint-disable-next-line complexity
  getPageAvailableVariants(e, t) {
    const r = this.getPageReplaceOptions(e, t), a = r?.variantsData?.variants, i = this.routersService.getRouterRefByPage(t);
    if (!i)
      return a;
    const o = this.routersService.getByRef(i);
    if (!o)
      throw new Error("router data is not available for ref");
    return r?.variantsData?.variantsPanelOptions?.hideAddedVariants ?? !0 ? a?.filter((s) => {
      const p = s?.id;
      return !Object.keys(o.pages).some((u) => u.includes(p));
    }) : a;
  }
  isReplacer(e) {
    const t = this.routersService.getRouterDataForPageIfExist(e.id);
    return t ? !!O(t.config, t.pages, e) : !1;
  }
  isVariant(e) {
    const t = this.routersService.getRouterDataForPageIfExist(e.id);
    return t ? F(t.config, t.pages, e) : !1;
  }
  isReplacerActive(e) {
    const t = this.routersService.getRouterDataForPageIfExist(e.id);
    return t ? !!O(t.config, t.pages, e)?.active : !1;
  }
  isAppWithReplacerPage(e) {
    return this.pagesService.getPagesData().filter((r) => r?.managingAppDefId === e).some((r) => {
      if (!r?.id)
        return !1;
      const a = this.pagesService.getPageRefById(r.id);
      return a ? this.isReplacerActive(a) : !1;
    });
  }
  getOriginalPageRef(e) {
    const t = this.routersService.getRouterDataForPageIfExist(e.id);
    if (t) {
      const a = T(t.pages)[e.id], i = /(.+)_[replacer|variant]+/.exec(a)?.[1], o = i && t.pages?.[i];
      if (o)
        return { ...e, id: o, pageId: o };
    }
  }
  getPlatformPageInnerRoutes(e, t) {
    const r = this.pagesService.getPageRefById(e);
    if (!r)
      return Promise.resolve([]);
    const i = this.getOriginalPageRef(r)?.id ?? e;
    return this.routersService.getPlatformPageInnerRoutes(i, t);
  }
};
y = U([
  h(0, f(b)),
  h(1, f(w)),
  h(2, f(m)),
  h(3, f(E)),
  h(4, f(D)),
  h(5, f(P)),
  $("design:paramtypes", [
    Object,
    w,
    m,
    E,
    D,
    P
  ])
], y);
export {
  y as PageReplaceDataService
};
//# sourceMappingURL=editor-platform-page-replace-data-service-chunk-min-BJIvQHdB.mjs.map
