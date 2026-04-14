import { ApplicationDataService as d } from "./editor-platform-application-data-service-chunk-min-CD6IWN4l.mjs";
import { D as g } from "./editor-platform-dependencies-chunk-min-lnuTFbnH.mjs";
import { inject as m } from "./editor-platform-injection-infra-chunk-min-BhILhWfd.mjs";
import "./vendors-edicore-core-C7cXeJQ5.mjs";
var f = function(i, e, t, n) {
  var r = arguments.length, a = r < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, t) : n, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(i, e, t, n);
  else for (var c = i.length - 1; c >= 0; c--) (o = i[c]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, t, a) : o(e, t)) || a);
  return r > 3 && a && Object.defineProperty(e, t, a), a;
}, l = function(i, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(i, e);
}, p = function(i, e) {
  return function(t, n) {
    e(t, n, i);
  };
};
let u = class {
  documentManagement;
  applicationDataService;
  static namespace = "ComponentsPrivateService";
  constructor(e, t) {
    this.documentManagement = e, this.applicationDataService = t;
  }
  get data() {
    return {
      get: this.documentManagement.components.data.get
    };
  }
  get getPage() {
    return this.documentManagement.components.getPage;
  }
  get getChildren() {
    return this.documentManagement.components.getChildren;
  }
  get layout() {
    return {
      get: this.documentManagement.components.layout.get,
      update: this.documentManagement.components.layout.update
    };
  }
  extractExtensionId = (e) => {
    const t = e?.settings, n = t ? JSON.parse(t) : void 0;
    return e?.widgetId || n?.devCenterWidgetId || n?.componentId;
  };
  getPageDataByComponentId = (e, t) => !t || !e?.components ? void 0 : e.components.find((r) => r.data?.content?.widgets?.some((o) => o.widgetGuid === t))?.data;
  // TODO: remove (#EP-6110)
  // eslint-disable-next-line complexity
  isComponentEssential = (e, t, n, r) => {
    const o = this.applicationDataService.getPageFromAppData(t, r)?.content?.widgets?.find((s) => s.widgetGuid === e);
    return n && o?.essential !== void 0 && o?.essential !== null ? o.essential : !!t.components?.find((s) => s.componentId === e)?.data?.installation?.base?.essential;
  };
  getComponentById = (e, t) => this.documentManagement.components.get.byId(e, t);
  getType = (e) => this.documentManagement.components.getType(e);
};
u = f([
  p(0, m(g)),
  p(1, m(d)),
  l("design:paramtypes", [Object, d])
], u);
const P = {
  EXTERNAL_UNIFIED_COMPONENT: "externalUnifiedComponents"
};
export {
  P as APP_SCHEMA_VERSIONS,
  u as ComponentsPrivateService
};
//# sourceMappingURL=editor-platform-components-private-service-chunk-min-CsBXatI6.mjs.map
