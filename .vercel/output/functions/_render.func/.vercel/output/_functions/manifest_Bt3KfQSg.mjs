import { g as decodeKey } from './chunks/astro/server_0Z4Wj_cN.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DWsabQWr.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/digitap/Documents/FrontendMentor/space-tourism-website/magical-moon/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"crew/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/crew","isIndex":false,"type":"page","pattern":"^\\/crew\\/?$","segments":[[{"content":"crew","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/crew.astro","pathname":"/crew","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"design-system/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/design-system","isIndex":false,"type":"page","pattern":"^\\/design-system\\/?$","segments":[[{"content":"design-system","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/design-system.astro","pathname":"/design-system","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"destination/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/destination","isIndex":false,"type":"page","pattern":"^\\/destination\\/?$","segments":[[{"content":"destination","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/destination.astro","pathname":"/destination","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"technology/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/technology","isIndex":false,"type":"page","pattern":"^\\/technology\\/?$","segments":[[{"content":"technology","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/technology.astro","pathname":"/technology","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.16.10_rollup@4.25.0_typescript@5.5.4/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/digitap/Documents/FrontendMentor/space-tourism-website/magical-moon/src/components/Header.astro",{"propagation":"in-tree","containsHead":false}],["/Users/digitap/Documents/FrontendMentor/space-tourism-website/magical-moon/src/pages/crew.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/crew@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/digitap/Documents/FrontendMentor/space-tourism-website/magical-moon/src/pages/destination.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/destination@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/digitap/Documents/FrontendMentor/space-tourism-website/magical-moon/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/digitap/Documents/FrontendMentor/space-tourism-website/magical-moon/src/pages/technology.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/technology@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/digitap/Documents/FrontendMentor/space-tourism-website/magical-moon/src/pages/design-system.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/crew@_@astro":"pages/crew.astro.mjs","\u0000@astro-page:src/pages/technology@_@astro":"pages/technology.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/design-system@_@astro":"pages/design-system.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/destination@_@astro":"pages/destination.astro.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.16.10_rollup@4.25.0_typescript@5.5.4/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/Users/digitap/Documents/FrontendMentor/space-tourism-website/magical-moon/node_modules/.pnpm/astro@4.16.10_rollup@4.25.0_typescript@5.5.4/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_Bt3KfQSg.mjs","/Users/digitap/Documents/FrontendMentor/space-tourism-website/magical-moon/src/components/preact/DestinationTab":"_astro/DestinationTab.Cn4MpUz9.js","/Users/digitap/Documents/FrontendMentor/space-tourism-website/magical-moon/src/components/preact/PlanetTesimal":"_astro/PlanetTesimal.Q3UIY1wN.js","@astrojs/preact/client.js":"_astro/client.DENVvMB3.js","/astro/hoisted.js?q=0":"_astro/hoisted.2daoxv0f.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/crew.BzELTAVS.css","/favicon.svg","/_astro/DestinationTab.Cn4MpUz9.js","/_astro/PlanetTesimal.Q3UIY1wN.js","/_astro/PlanetTesimalLayout.Du7jgsJd.js","/_astro/client.DENVvMB3.js","/_astro/crew.86434c4c.l0sNRNKZ.js","/_astro/hoisted.2daoxv0f.js","/_astro/preact.module.bXcCGaoX.js","/_astro/signals.module.B_Edq5uU.js","/assets/favicon-32x32.png","/assets/crew/background-crew-desktop.jpg","/assets/crew/background-crew-mobile.jpg","/assets/crew/background-crew-tablet.jpg","/assets/crew/image-anousheh-ansari.png","/assets/crew/image-anousheh-ansari.webp","/assets/crew/image-douglas-hurley.png","/assets/crew/image-douglas-hurley.webp","/assets/crew/image-mark-shuttleworth.png","/assets/crew/image-mark-shuttleworth.webp","/assets/crew/image-victor-glover.png","/assets/crew/image-victor-glover.webp","/assets/destination/background-destination-desktop.jpg","/assets/destination/background-destination-mobile.jpg","/assets/destination/background-destination-tablet.jpg","/assets/destination/image-europa.png","/assets/destination/image-europa.webp","/assets/destination/image-mars.png","/assets/destination/image-mars.webp","/assets/destination/image-moon.png","/assets/destination/image-moon.webp","/assets/destination/image-titan.png","/assets/destination/image-titan.webp","/assets/home/background-home-desktop.jpg","/assets/home/background-home-mobile.jpg","/assets/home/background-home-tablet.jpg","/assets/shared/icon-close.svg","/assets/shared/icon-hamburger.svg","/assets/shared/logo.svg","/assets/technology/background-technology-desktop.jpg","/assets/technology/background-technology-mobile.jpg","/assets/technology/background-technology-tablet.jpg","/assets/technology/image-launch-vehicle-landscape.jpg","/assets/technology/image-launch-vehicle-portrait.jpg","/assets/technology/image-space-capsule-landscape.jpg","/assets/technology/image-space-capsule-portrait.jpg","/assets/technology/image-spaceport-landscape.jpg","/assets/technology/image-spaceport-portrait.jpg","/crew/index.html","/design-system/index.html","/destination/index.html","/technology/index.html","/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"67uOo2qg65A3rhStNENkxVULVKFoRRHAW3JylYs795o=","experimentalEnvGetSecretEnabled":false});

export { manifest };
