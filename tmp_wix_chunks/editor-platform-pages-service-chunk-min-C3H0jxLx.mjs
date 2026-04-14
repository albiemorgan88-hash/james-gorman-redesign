import { ApplicationDataService as u } from "./editor-platform-application-data-service-chunk-min-CD6IWN4l.mjs";
import { ComponentsPrivateService as c } from "./editor-platform-components-private-service-chunk-min-CsBXatI6.mjs";
import { D as P, a as f } from "./editor-platform-dependencies-chunk-min-lnuTFbnH.mjs";
import { inject as o } from "./editor-platform-injection-infra-chunk-min-BhILhWfd.mjs";
import "./vendors-edicore-core-C7cXeJQ5.mjs";
import { C as d } from "./ambassador-devcenter-components-v1-component-chunk-min-uDoGVLGD.mjs";
var h = function(r, e, t, a) {
  var n = arguments.length, g = n < 3 ? e : a === null ? a = Object.getOwnPropertyDescriptor(e, t) : a, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") g = Reflect.decorate(r, e, t, a);
  else for (var i = r.length - 1; i >= 0; i--) (s = r[i]) && (g = (n < 3 ? s(g) : n > 3 ? s(e, t, g) : s(e, t)) || g);
  return n > 3 && g && Object.defineProperty(e, t, g), g;
}, I = function(r, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(r, e);
}, p = function(r, e) {
  return function(t, a) {
    e(t, a, r);
  };
};
let m = class {
  documentManagement;
  componentsPrivateService;
  applicationDataService;
  documentOverridesAPI;
  static namespace = "PagesService";
  constructor(e, t, a, n) {
    this.documentManagement = e, this.componentsPrivateService = t, this.applicationDataService = a, this.documentOverridesAPI = n;
  }
  get data() {
    return {
      get: this.documentManagement.pages.data.get,
      update: this.documentManagement.pages.data.update
    };
  }
  get wixCode() {
    return {
      getFileId: this.documentManagement.wixCode.pages.getFileId
    };
  }
  get popupPages() {
    return {
      getDataList: this.documentManagement.pages.popupPages.getDataList
    };
  }
  get getPageTitle() {
    return this.documentManagement.pages.getPageTitle;
  }
  get getPageAnchors() {
    return this.documentManagement.pages.anchors.getPageAnchors;
  }
  get getPagesData() {
    return this.documentManagement.pages.getPagesData;
  }
  get isPageMarkedAsHideFromMenu() {
    return this.documentManagement.tpa.isPageMarkedAsHideFromMenu;
  }
  get getFocusedPage() {
    return this.documentManagement.pages.getFocusedPage;
  }
  get getHomePageId() {
    return this.documentManagement.homePage.get();
  }
  getTpaPageIdByWidgetCompRef = (e) => {
    const t = this.componentsPrivateService.getPage(e);
    return this.data.get(t?.id)?.tpaPageId;
  };
  getPageRefById(e) {
    const t = this.documentManagement.pages.getReference(e);
    if (t)
      return { ...t, pageId: t.id };
  }
  isPopup(e) {
    return this.documentManagement.pages.popupPages.isPopup(e);
  }
  get getFocusedPageId() {
    return this.documentManagement.pages.getFocusedPageId;
  }
  get getSubPages() {
    return this.documentManagement.tpa.page.getSubPages;
  }
  get navigateTo() {
    return this.documentOverridesAPI.pages.navigateTo;
  }
  get getRootNavigationInfo() {
    return this.documentManagement.pages.getRootNavigationInfo;
  }
  getTpaPageIdByComponent(e) {
    switch (e.type) {
      case d.PAGE_OUT_OF_IFRAME:
        return e.name;
      case d.UNIFIED_LIGHTBOX:
        return e.componentId;
      case d.UNIFIED_PAGE:
        return e?.data?.base?.id;
      default:
        return;
    }
  }
  getTpaPageId(e, t) {
    const a = e.widgets?.[t];
    if (a?.appPage?.id)
      return a.appPage.id;
    const n = e.components.find(({ componentId: g }) => g === t);
    if (n)
      return this.getTpaPageIdByComponent(n);
  }
  getPageIdByExtensionId(e, t) {
    const a = this.applicationDataService.getInstalledApps().find((i) => i.appDefinitionId === e);
    if (!a)
      return;
    const n = this.getTpaPageId(a, t);
    return n ? [
      ...this.getPagesData(),
      ...this.popupPages.getDataList()
    ].find((i) => i.tpaPageId === n && (i?.managingAppDefId === e || i?.appDefinitionId === e))?.id : void 0;
  }
  getPageRefByExtensionId(e, t) {
    const a = this.getPageIdByExtensionId(e, t);
    if (a)
      return this.getPageRefById(a);
  }
  getFirstAppCompPageId(e, t) {
    return this.documentManagement.tpa.app.getFirstAppCompPageId(e, t);
  }
  getAppPages(e) {
    const t = this.getPagesData(), a = this.popupPages.getDataList();
    return [...t, ...a].filter((n) => n.managingAppDefId === e || n.appDefinitionId === e).map((n) => n.id).filter((n) => typeof n == "string");
  }
  get getCurrentPage() {
    return this.documentManagement.pages.getCurrentPage;
  }
};
m = h([
  p(0, o(P)),
  p(1, o(c)),
  p(2, o(u)),
  p(3, o(f)),
  I("design:paramtypes", [
    Object,
    c,
    u,
    Object
  ])
], m);
export {
  m as PagesService
};
//# sourceMappingURL=editor-platform-pages-service-chunk-min-C3H0jxLx.mjs.map
