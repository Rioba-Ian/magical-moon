import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_rfaTP0Xi.mjs';
import { manifest } from './manifest_Bt3KfQSg.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/crew.astro.mjs');
const _page2 = () => import('./pages/design-system.astro.mjs');
const _page3 = () => import('./pages/destination.astro.mjs');
const _page4 = () => import('./pages/technology.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.16.10_rollup@4.25.0_typescript@5.5.4/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/crew.astro", _page1],
    ["src/pages/design-system.astro", _page2],
    ["src/pages/destination.astro", _page3],
    ["src/pages/technology.astro", _page4],
    ["src/pages/index.astro", _page5]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "202ee53c-d304-4e24-97ba-46a95026ed61",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
