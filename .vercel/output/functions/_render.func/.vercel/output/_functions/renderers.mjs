import { options, h as h$1, Fragment, Component } from 'preact';

var r=/[\s\n\\/='"\0<>]/,o=/^(xlink|xmlns|xml)([A-Z])/,i=/^accessK|^auto[A-Z]|^cell|^ch|^col|cont|cross|dateT|encT|form[A-Z]|frame|hrefL|inputM|maxL|minL|noV|playsI|popoverT|readO|rowS|src[A-Z]|tabI|useM|item[A-Z]/,a=/^ac|^ali|arabic|basel|cap|clipPath$|clipRule$|color|dominant|enable|fill|flood|font|glyph[^R]|horiz|image|letter|lighting|marker[^WUH]|overline|panose|pointe|paint|rendering|shape|stop|strikethrough|stroke|text[^L]|transform|underline|unicode|units|^v[^i]|^w|^xH/,c=new Set(["draggable","spellcheck"]),s=/["&<]/;function l(e){if(0===e.length||!1===s.test(e))return e;for(var t=0,n=0,r="",o="";n<e.length;n++){switch(e.charCodeAt(n)){case 34:o="&quot;";break;case 38:o="&amp;";break;case 60:o="&lt;";break;default:continue}n!==t&&(r+=e.slice(t,n)),r+=o,t=n+1;}return n!==t&&(r+=e.slice(t,n)),r}var u={},f=new Set(["animation-iteration-count","border-image-outset","border-image-slice","border-image-width","box-flex","box-flex-group","box-ordinal-group","column-count","fill-opacity","flex","flex-grow","flex-negative","flex-order","flex-positive","flex-shrink","flood-opacity","font-weight","grid-column","grid-row","line-clamp","line-height","opacity","order","orphans","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-miterlimit","stroke-opacity","stroke-width","tab-size","widows","z-index","zoom"]),p=/[A-Z]/g;function h(e){var t="";for(var n in e){var r=e[n];if(null!=r&&""!==r){var o="-"==n[0]?n:u[n]||(u[n]=n.replace(p,"-$&").toLowerCase()),i=";";"number"!=typeof r||o.startsWith("--")||f.has(o)||(i="px;"),t=t+o+":"+r+i;}}return t||void 0}function d(){this.__d=!0;}function _(e,t){return {__v:e,context:t,props:e.props,setState:d,forceUpdate:d,__d:!0,__h:new Array(0)}}function v(e,t,n){if(!e.s){if(n instanceof m){if(!n.s)return void(n.o=v.bind(null,e,t));1&t&&(t=n.s),n=n.v;}if(n&&n.then)return void n.then(v.bind(null,e,t),v.bind(null,e,2));e.s=t,e.v=n;const r=e.o;r&&r(e);}}var m=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(t,n){var r=new e,o=this.s;if(o){var i=1&o?t:n;if(i){try{v(r,1,i(this.v));}catch(e){v(r,2,e);}return r}return this}return this.o=function(e){try{var o=e.v;1&e.s?v(r,1,t?t(o):o):n?v(r,1,n(o)):v(r,2,o);}catch(e){v(r,2,e);}},r},e}();function y(e){return e instanceof m&&1&e.s}function g(e,t,n){for(var r;;){var o=e();if(y(o)&&(o=o.v),!o)return i;if(o.then){r=0;break}var i=n();if(i&&i.then){if(!y(i)){r=1;break}i=i.s;}var a; }var c=new m,s=v.bind(null,c,2);return (0===r?o.then(u):1===r?i.then(l):a.then(f)).then(void 0,s),c;function l(r){i=r;do{if(!(o=e())||y(o)&&!o.v)return void v(c,1,i);if(o.then)return void o.then(u).then(void 0,s);y(i=n())&&(i=i.v);}while(!i||!i.then);i.then(l).then(void 0,s);}function u(e){e?(i=n())&&i.then?i.then(l).then(void 0,s):l(i):v(c,1,i);}function f(){(o=e())?o.then?o.then(u).then(void 0,s):u(o):v(c,1,i);}}function b(e,t){try{var n=e();}catch(e){return t(!0,e)}return n&&n.then?n.then(t.bind(null,!1),t.bind(null,!0)):t(!1,n)}var k,w,x,C,S=function(r,o){try{var i=options.__s;options.__s=!0,k=options.__b,w=options.diffed,x=options.__r,C=options.unmount;var a=h$1(Fragment,null);return a.__k=[r],Promise.resolve(b(function(){return Promise.resolve(U(r,o||A,!1,void 0,a,!0,void 0)).then(function(e){var t,n=function(){if(E(e)){var n=function(){var e=o.join(j);return t=1,e},r=0,o=e,i=g(function(){return !!o.some(function(e){return e&&"function"==typeof e.then})&&r++<25},void 0,function(){return Promise.resolve(Promise.all(o)).then(function(e){o=e.flat();})});return i&&i.then?i.then(n):n()}}();return n&&n.then?n.then(function(n){return t?n:e}):t?n:e})},function(t,n){if(options.__c&&options.__c(r,L),options.__s=i,L.length=0,t)throw n;return n}))}catch(e){return Promise.reject(e)}},A={},L=[],E=Array.isArray,T=Object.assign,j="";function P(e,t){var n,r=e.type,o=!0;return e.__c?(o=!1,(n=e.__c).state=n.__s):n=new r(e.props,t),e.__c=n,n.__v=e,n.props=e.props,n.context=t,n.__d=!0,null==n.state&&(n.state=A),null==n.__s&&(n.__s=n.state),r.getDerivedStateFromProps?n.state=T({},n.state,r.getDerivedStateFromProps(n.props,n.state)):o&&n.componentWillMount?(n.componentWillMount(),n.state=n.__s!==n.state?n.__s:n.state):!o&&n.componentWillUpdate&&n.componentWillUpdate(),x&&x(e),n.render(n.props,n.state,t)}function U(t,s,u,f,p,d,v){if(null==t||!0===t||!1===t||t===j)return j;var m=typeof t;if("object"!=m)return "function"==m?j:"string"==m?l(t):t+j;if(E(t)){var y,g=j;p.__k=t;for(var b=0;b<t.length;b++){var S=t[b];if(null!=S&&"boolean"!=typeof S){var L,D=U(S,s,u,f,p,d,v);"string"==typeof D?g+=D:(y||(y=[]),g&&y.push(g),g=j,E(D)?(L=y).push.apply(L,D):y.push(D));}}return y?(g&&y.push(g),y):g}if(void 0!==t.constructor)return j;t.__=p,k&&k(t);var F=t.type,M=t.props;if("function"==typeof F){var W,$,z,H=s;if(F===Fragment){if("tpl"in M){for(var N=j,q=0;q<M.tpl.length;q++)if(N+=M.tpl[q],M.exprs&&q<M.exprs.length){var B=M.exprs[q];if(null==B)continue;"object"!=typeof B||void 0!==B.constructor&&!E(B)?N+=B:N+=U(B,s,u,f,t,d,v);}return N}if("UNSTABLE_comment"in M)return "\x3c!--"+l(M.UNSTABLE_comment)+"--\x3e";$=M.children;}else {if(null!=(W=F.contextType)){var I=s[W.__c];H=I?I.props.value:W.__;}var O=F.prototype&&"function"==typeof F.prototype.render;if(O)$=P(t,H),z=t.__c;else {t.__c=z=_(t,H);for(var R=0;z.__d&&R++<25;)z.__d=!1,x&&x(t),$=F.call(z,M,H);z.__d=!0;}if(null!=z.getChildContext&&(s=T({},s,z.getChildContext())),O&&options.errorBoundaries&&(F.getDerivedStateFromError||z.componentDidCatch)){$=null!=$&&$.type===Fragment&&null==$.key&&null==$.props.tpl?$.props.children:$;try{return U($,s,u,f,t,d,v)}catch(e){return F.getDerivedStateFromError&&(z.__s=F.getDerivedStateFromError(e)),z.componentDidCatch&&z.componentDidCatch(e,A),z.__d?($=P(t,s),null!=(z=t.__c).getChildContext&&(s=T({},s,z.getChildContext())),U($=null!=$&&$.type===Fragment&&null==$.key&&null==$.props.tpl?$.props.children:$,s,u,f,t,d,v)):j}finally{w&&w(t),t.__=null,C&&C(t);}}}$=null!=$&&$.type===Fragment&&null==$.key&&null==$.props.tpl?$.props.children:$;try{var V=U($,s,u,f,t,d,v);return w&&w(t),t.__=null,options.unmount&&options.unmount(t),V}catch(n){if(!n||"function"!=typeof n.then)throw n;return n.then(function e(){try{return U($,s,u,f,t,d,v)}catch(n){if(!n||"function"!=typeof n.then)throw n;return n.then(function(){return U($,s,u,f,t,d,v)},e)}})}}var J,Q="<"+F,X=j;for(var Y in M){var ee=M[Y];if("function"!=typeof ee||"class"===Y||"className"===Y){switch(Y){case"children":J=ee;continue;case"key":case"ref":case"__self":case"__source":continue;case"htmlFor":if("for"in M)continue;Y="for";break;case"className":if("class"in M)continue;Y="class";break;case"defaultChecked":Y="checked";break;case"defaultSelected":Y="selected";break;case"defaultValue":case"value":switch(Y="value",F){case"textarea":J=ee;continue;case"select":f=ee;continue;case"option":f!=ee||"selected"in M||(Q+=" selected");}break;case"dangerouslySetInnerHTML":X=ee&&ee.__html;continue;case"style":"object"==typeof ee&&(ee=h(ee));break;case"acceptCharset":Y="accept-charset";break;case"httpEquiv":Y="http-equiv";break;default:if(o.test(Y))Y=Y.replace(o,"$1:$2").toLowerCase();else {if(r.test(Y))continue;"-"!==Y[4]&&!c.has(Y)||null==ee?u?a.test(Y)&&(Y="panose1"===Y?"panose-1":Y.replace(/([A-Z])/g,"-$1").toLowerCase()):i.test(Y)&&(Y=Y.toLowerCase()):ee+=j;}}null!=ee&&!1!==ee&&(Q=!0===ee||ee===j?Q+" "+Y:Q+" "+Y+'="'+("string"==typeof ee?l(ee):ee+j)+'"');}}if(r.test(F))throw new Error(F+" is not a valid HTML tag name in "+Q+">");if(X||("string"==typeof J?X=l(J):null!=J&&!1!==J&&!0!==J&&(X=U(J,s,"svg"===F||"foreignObject"!==F&&u,f,t,d,v))),w&&w(t),t.__=null,C&&C(t),!X&&Z.has(F))return Q+"/>";var te="</"+F+">",ne=Q+">";return E(X)?[ne].concat(X,[te]):"string"!=typeof X?[ne,X,te]:ne+X+te}var Z=new Set(["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"]);

const contexts = /* @__PURE__ */ new WeakMap();
function getContext(result) {
  if (contexts.has(result)) {
    return contexts.get(result);
  }
  let ctx = {
    c: 0,
    get id() {
      return "p" + this.c.toString();
    },
    signals: /* @__PURE__ */ new Map(),
    propsToSignals: /* @__PURE__ */ new Map()
  };
  contexts.set(result, ctx);
  return ctx;
}
function incrementId(ctx) {
  let id = ctx.id;
  ctx.c++;
  return id;
}

function isSignal(x) {
  return x != null && typeof x === "object" && typeof x.peek === "function" && "value" in x;
}
function restoreSignalsOnProps(ctx, props) {
  let propMap;
  if (ctx.propsToSignals.has(props)) {
    propMap = ctx.propsToSignals.get(props);
  } else {
    propMap = /* @__PURE__ */ new Map();
    ctx.propsToSignals.set(props, propMap);
  }
  for (const [key, signal] of propMap) {
    props[key] = signal;
  }
  return propMap;
}
function serializeSignals(ctx, props, attrs, map) {
  const signals = {};
  for (const [key, value] of Object.entries(props)) {
    const isPropArray = Array.isArray(value);
    const isPropObject = !isSignal(value) && typeof props[key] === "object" && props[key] !== null && !isPropArray;
    if (isPropObject || isPropArray) {
      const values = isPropObject ? Object.keys(props[key]) : value;
      values.forEach((valueKey, valueIndex) => {
        const signal = isPropObject ? props[key][valueKey] : valueKey;
        if (isSignal(signal)) {
          const keyOrIndex = isPropObject ? valueKey.toString() : valueIndex;
          props[key] = isPropObject ? Object.assign({}, props[key], { [keyOrIndex]: signal.peek() }) : props[key].map(
            (v, i) => i === valueIndex ? [signal.peek(), i] : v
          );
          const currentMap = map.get(key) || [];
          map.set(key, [...currentMap, [signal, keyOrIndex]]);
          const currentSignals = signals[key] || [];
          signals[key] = [...currentSignals, [getSignalId(ctx, signal), keyOrIndex]];
        }
      });
    } else if (isSignal(value)) {
      props[key] = value.peek();
      map.set(key, value);
      signals[key] = getSignalId(ctx, value);
    }
  }
  if (Object.keys(signals).length) {
    attrs["data-preact-signals"] = JSON.stringify(signals);
  }
}
function getSignalId(ctx, item) {
  let id = ctx.signals.get(item);
  if (!id) {
    id = incrementId(ctx);
    ctx.signals.set(item, id);
  }
  return id;
}

const StaticHtml = ({ value, name, hydrate = true }) => {
  if (!value) return null;
  const tagName = hydrate ? "astro-slot" : "astro-static-slot";
  return h$1(tagName, { name, dangerouslySetInnerHTML: { __html: value } });
};
StaticHtml.shouldComponentUpdate = () => false;
var static_html_default = StaticHtml;

const slotName = (str) => str.trim().replace(/[-_]([a-z])/g, (_, w) => w.toUpperCase());
let originalConsoleError;
let consoleFilterRefs = 0;
async function check(Component$1, props, children) {
  if (typeof Component$1 !== "function") return false;
  if (Component$1.name === "QwikComponent") return false;
  if (Component$1.prototype != null && typeof Component$1.prototype.render === "function") {
    return Component.isPrototypeOf(Component$1);
  }
  useConsoleFilter();
  try {
    const { html } = await renderToStaticMarkup.call(this, Component$1, props, children, void 0);
    if (typeof html !== "string") {
      return false;
    }
    return html == "" ? false : !html.includes("<undefined>");
  } catch {
    return false;
  } finally {
    finishUsingConsoleFilter();
  }
}
function shouldHydrate(metadata) {
  return metadata?.astroStaticSlot ? !!metadata.hydrate : true;
}
async function renderToStaticMarkup(Component, props, { default: children, ...slotted }, metadata) {
  const ctx = getContext(this.result);
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = h$1(static_html_default, {
      hydrate: shouldHydrate(metadata),
      value,
      name
    });
  }
  let propsMap = restoreSignalsOnProps(ctx, props);
  const newProps = { ...props, ...slots };
  const attrs = {};
  serializeSignals(ctx, props, attrs, propsMap);
  const vNode = h$1(
    Component,
    newProps,
    children != null ? h$1(static_html_default, {
      hydrate: shouldHydrate(metadata),
      value: children
    }) : children
  );
  const html = await S(vNode);
  return { attrs, html };
}
function useConsoleFilter() {
  consoleFilterRefs++;
  if (!originalConsoleError) {
    originalConsoleError = console.error;
    try {
      console.error = filteredConsoleError;
    } catch {
    }
  }
}
function finishUsingConsoleFilter() {
  consoleFilterRefs--;
}
function filteredConsoleError(msg, ...rest) {
  if (consoleFilterRefs > 0 && typeof msg === "string") {
    const isKnownReactHookError = msg.includes("Warning: Invalid hook call.") && msg.includes("https://reactjs.org/link/invalid-hook-call");
    if (isKnownReactHookError) return;
  }
  originalConsoleError(msg, ...rest);
}
const renderer = {
  name: "@astrojs/preact",
  check,
  renderToStaticMarkup,
  supportsAstroStaticSlot: true
};
var server_default = renderer;

const renderers = [Object.assign({"name":"@astrojs/preact","clientEntrypoint":"@astrojs/preact/client.js","serverEntrypoint":"@astrojs/preact/server.js"}, { ssr: server_default }),];

export { renderers };
