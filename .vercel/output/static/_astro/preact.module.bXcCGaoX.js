var N,d,Q,le,x,G,X,$,j,R,B,Y,U={},Z=[],ie=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,H=Array.isArray;function w(_,e){for(var t in e)_[t]=e[t];return _}function ee(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function se(_,e,t){var r,n,l,i={};for(l in e)l=="key"?r=e[l]:l=="ref"?n=e[l]:i[l]=e[l];if(arguments.length>2&&(i.children=arguments.length>3?N.call(arguments,2):t),typeof _=="function"&&_.defaultProps!=null)for(l in _.defaultProps)i[l]===void 0&&(i[l]=_.defaultProps[l]);return W(_,i,r,n,null)}function W(_,e,t,r,n){var l={type:_,props:e,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:n??++Q,__i:-1,__u:0};return n==null&&d.vnode!=null&&d.vnode(l),l}function I(_){return _.children}function E(_,e){this.props=_,this.context=e}function C(_,e){if(e==null)return _.__?C(_.__,_.__i+1):null;for(var t;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null)return t.__e;return typeof _.type=="function"?C(_):null}function _e(_){var e,t;if((_=_.__)!=null&&_.__c!=null){for(_.__e=_.__c.base=null,e=0;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null){_.__e=_.__c.base=t.__e;break}return _e(_)}}function O(_){(!_.__d&&(_.__d=!0)&&x.push(_)&&!F.__r++||G!==d.debounceRendering)&&((G=d.debounceRendering)||X)(F)}function F(){var _,e,t,r,n,l,i,s;for(x.sort($);_=x.shift();)_.__d&&(e=x.length,r=void 0,l=(n=(t=_).__v).__e,i=[],s=[],t.__P&&((r=w({},n)).__v=n.__v+1,d.vnode&&d.vnode(r),z(t.__P,r,n,t.__n,t.__P.namespaceURI,32&n.__u?[l]:null,i,l??C(n),!!(32&n.__u),s),r.__v=n.__v,r.__.__k[r.__i]=r,oe(i,r,s),r.__e!=l&&_e(r)),x.length>e&&x.sort($));F.__r=0}function te(_,e,t,r,n,l,i,s,f,u,p){var o,m,c,v,g,y=r&&r.__k||Z,a=e.length;for(t.__d=f,ue(t,e,y),f=t.__d,o=0;o<a;o++)(c=t.__k[o])!=null&&(m=c.__i===-1?U:y[c.__i]||U,c.__i=o,z(_,c,m,n,l,i,s,f,u,p),v=c.__e,c.ref&&m.ref!=c.ref&&(m.ref&&V(m.ref,null,c),p.push(c.ref,c.__c||v,c)),g==null&&v!=null&&(g=v),65536&c.__u||m.__k===c.__k?f=ne(c,f,_):typeof c.type=="function"&&c.__d!==void 0?f=c.__d:v&&(f=v.nextSibling),c.__d=void 0,c.__u&=-196609);t.__d=f,t.__e=g}function ue(_,e,t){var r,n,l,i,s,f=e.length,u=t.length,p=u,o=0;for(_.__k=[],r=0;r<f;r++)(n=e[r])!=null&&typeof n!="boolean"&&typeof n!="function"?(i=r+o,(n=_.__k[r]=typeof n=="string"||typeof n=="number"||typeof n=="bigint"||n.constructor==String?W(null,n,null,null,null):H(n)?W(I,{children:n},null,null,null):n.constructor===void 0&&n.__b>0?W(n.type,n.props,n.key,n.ref?n.ref:null,n.__v):n).__=_,n.__b=_.__b+1,l=null,(s=n.__i=fe(n,t,i,p))!==-1&&(p--,(l=t[s])&&(l.__u|=131072)),l==null||l.__v===null?(s==-1&&o--,typeof n.type!="function"&&(n.__u|=65536)):s!==i&&(s==i-1?o--:s==i+1?o++:(s>i?o--:o++,n.__u|=65536))):n=_.__k[r]=null;if(p)for(r=0;r<u;r++)(l=t[r])!=null&&!(131072&l.__u)&&(l.__e==_.__d&&(_.__d=C(l)),re(l,l))}function ne(_,e,t){var r,n;if(typeof _.type=="function"){for(r=_.__k,n=0;r&&n<r.length;n++)r[n]&&(r[n].__=_,e=ne(r[n],e,t));return e}_.__e!=e&&(e&&_.type&&!t.contains(e)&&(e=C(_)),t.insertBefore(_.__e,e||null),e=_.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function ce(_,e){return e=e||[],_==null||typeof _=="boolean"||(H(_)?_.some(function(t){ce(t,e)}):e.push(_)),e}function fe(_,e,t,r){var n=_.key,l=_.type,i=t-1,s=t+1,f=e[t];if(f===null||f&&n==f.key&&l===f.type&&!(131072&f.__u))return t;if(r>(f!=null&&!(131072&f.__u)?1:0))for(;i>=0||s<e.length;){if(i>=0){if((f=e[i])&&!(131072&f.__u)&&n==f.key&&l===f.type)return i;i--}if(s<e.length){if((f=e[s])&&!(131072&f.__u)&&n==f.key&&l===f.type)return s;s++}}return-1}function J(_,e,t){e[0]==="-"?_.setProperty(e,t??""):_[e]=t==null?"":typeof t!="number"||ie.test(e)?t:t+"px"}function L(_,e,t,r,n){var l;e:if(e==="style")if(typeof t=="string")_.style.cssText=t;else{if(typeof r=="string"&&(_.style.cssText=r=""),r)for(e in r)t&&e in t||J(_.style,e,"");if(t)for(e in t)r&&t[e]===r[e]||J(_.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")l=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in _||e==="onFocusOut"||e==="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),_.l||(_.l={}),_.l[e+l]=t,t?r?t.u=r.u:(t.u=j,_.addEventListener(e,l?B:R,l)):_.removeEventListener(e,l?B:R,l);else{if(n=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in _)try{_[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!=="-"?_.removeAttribute(e):_.setAttribute(e,e=="popover"&&t==1?"":t))}}function K(_){return function(e){if(this.l){var t=this.l[e.type+_];if(e.t==null)e.t=j++;else if(e.t<t.u)return;return t(d.event?d.event(e):e)}}}function z(_,e,t,r,n,l,i,s,f,u){var p,o,m,c,v,g,y,a,h,S,k,T,P,q,M,A,b=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(f=!!(32&t.__u),l=[s=e.__e=t.__e]),(p=d.__b)&&p(e);e:if(typeof b=="function")try{if(a=e.props,h="prototype"in b&&b.prototype.render,S=(p=b.contextType)&&r[p.__c],k=p?S?S.props.value:p.__:r,t.__c?y=(o=e.__c=t.__c).__=o.__E:(h?e.__c=o=new b(a,k):(e.__c=o=new E(a,k),o.constructor=b,o.render=ae),S&&S.sub(o),o.props=a,o.state||(o.state={}),o.context=k,o.__n=r,m=o.__d=!0,o.__h=[],o._sb=[]),h&&o.__s==null&&(o.__s=o.state),h&&b.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=w({},o.__s)),w(o.__s,b.getDerivedStateFromProps(a,o.__s))),c=o.props,v=o.state,o.__v=e,m)h&&b.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),h&&o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if(h&&b.getDerivedStateFromProps==null&&a!==c&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(a,k),!o.__e&&(o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(a,o.__s,k)===!1||e.__v===t.__v)){for(e.__v!==t.__v&&(o.props=a,o.state=o.__s,o.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(D){D&&(D.__=e)}),T=0;T<o._sb.length;T++)o.__h.push(o._sb[T]);o._sb=[],o.__h.length&&i.push(o);break e}o.componentWillUpdate!=null&&o.componentWillUpdate(a,o.__s,k),h&&o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(c,v,g)})}if(o.context=k,o.props=a,o.__P=_,o.__e=!1,P=d.__r,q=0,h){for(o.state=o.__s,o.__d=!1,P&&P(e),p=o.render(o.props,o.state,o.context),M=0;M<o._sb.length;M++)o.__h.push(o._sb[M]);o._sb=[]}else do o.__d=!1,P&&P(e),p=o.render(o.props,o.state,o.context),o.state=o.__s;while(o.__d&&++q<25);o.state=o.__s,o.getChildContext!=null&&(r=w(w({},r),o.getChildContext())),h&&!m&&o.getSnapshotBeforeUpdate!=null&&(g=o.getSnapshotBeforeUpdate(c,v)),te(_,H(A=p!=null&&p.type===I&&p.key==null?p.props.children:p)?A:[A],e,t,r,n,l,i,s,f,u),o.base=e.__e,e.__u&=-161,o.__h.length&&i.push(o),y&&(o.__E=o.__=null)}catch(D){if(e.__v=null,f||l!=null){for(e.__u|=f?160:128;s&&s.nodeType===8&&s.nextSibling;)s=s.nextSibling;l[l.indexOf(s)]=null,e.__e=s}else e.__e=t.__e,e.__k=t.__k;d.__e(D,e,t)}else l==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=pe(t.__e,e,t,r,n,l,i,f,u);(p=d.diffed)&&p(e)}function oe(_,e,t){e.__d=void 0;for(var r=0;r<t.length;r++)V(t[r],t[++r],t[++r]);d.__c&&d.__c(e,_),_.some(function(n){try{_=n.__h,n.__h=[],_.some(function(l){l.call(n)})}catch(l){d.__e(l,n.__v)}})}function pe(_,e,t,r,n,l,i,s,f){var u,p,o,m,c,v,g,y=t.props,a=e.props,h=e.type;if(h==="svg"?n="http://www.w3.org/2000/svg":h==="math"?n="http://www.w3.org/1998/Math/MathML":n||(n="http://www.w3.org/1999/xhtml"),l!=null){for(u=0;u<l.length;u++)if((c=l[u])&&"setAttribute"in c==!!h&&(h?c.localName===h:c.nodeType===3)){_=c,l[u]=null;break}}if(_==null){if(h===null)return document.createTextNode(a);_=document.createElementNS(n,h,a.is&&a),s&&(d.__m&&d.__m(e,l),s=!1),l=null}if(h===null)y===a||s&&_.data===a||(_.data=a);else{if(l=l&&N.call(_.childNodes),y=t.props||U,!s&&l!=null)for(y={},u=0;u<_.attributes.length;u++)y[(c=_.attributes[u]).name]=c.value;for(u in y)if(c=y[u],u!="children"){if(u=="dangerouslySetInnerHTML")o=c;else if(!(u in a)){if(u=="value"&&"defaultValue"in a||u=="checked"&&"defaultChecked"in a)continue;L(_,u,null,c,n)}}for(u in a)c=a[u],u=="children"?m=c:u=="dangerouslySetInnerHTML"?p=c:u=="value"?v=c:u=="checked"?g=c:s&&typeof c!="function"||y[u]===c||L(_,u,c,y[u],n);if(p)s||o&&(p.__html===o.__html||p.__html===_.innerHTML)||(_.innerHTML=p.__html),e.__k=[];else if(o&&(_.innerHTML=""),te(_,H(m)?m:[m],e,t,r,h==="foreignObject"?"http://www.w3.org/1999/xhtml":n,l,i,l?l[0]:t.__k&&C(t,0),s,f),l!=null)for(u=l.length;u--;)ee(l[u]);s||(u="value",h==="progress"&&v==null?_.removeAttribute("value"):v!==void 0&&(v!==_[u]||h==="progress"&&!v||h==="option"&&v!==y[u])&&L(_,u,v,y[u],n),u="checked",g!==void 0&&g!==_[u]&&L(_,u,g,y[u],n))}return _}function V(_,e,t){try{if(typeof _=="function"){var r=typeof _.__u=="function";r&&_.__u(),r&&e==null||(_.__u=_(e))}else _.current=e}catch(n){d.__e(n,t)}}function re(_,e,t){var r,n;if(d.unmount&&d.unmount(_),(r=_.ref)&&(r.current&&r.current!==_.__e||V(r,null,e)),(r=_.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(l){d.__e(l,e)}r.base=r.__P=null}if(r=_.__k)for(n=0;n<r.length;n++)r[n]&&re(r[n],e,t||typeof _.type!="function");t||ee(_.__e),_.__c=_.__=_.__e=_.__d=void 0}function ae(_,e,t){return this.constructor(_,t)}function de(_,e,t){var r,n,l,i;d.__&&d.__(_,e),n=(r=typeof t=="function")?null:t&&t.__k||e.__k,l=[],i=[],z(e,_=(!r&&t||e).__k=se(I,null,[_]),n||U,U,e.namespaceURI,!r&&t?[t]:n?null:e.firstChild?N.call(e.childNodes):null,l,!r&&t?t:n?n.__e:e.firstChild,r,i),oe(l,_,i)}function he(_,e){de(_,e,he)}function ve(_,e){var t={__c:e="__cC"+Y++,__:_,Consumer:function(r,n){return r.children(n)},Provider:function(r){var n,l;return this.getChildContext||(n=new Set,(l={})[e]=this,this.getChildContext=function(){return l},this.componentWillUnmount=function(){n=null},this.shouldComponentUpdate=function(i){this.props.value!==i.value&&n.forEach(function(s){s.__e=!0,O(s)})},this.sub=function(i){n.add(i);var s=i.componentWillUnmount;i.componentWillUnmount=function(){n&&n.delete(i),s&&s.call(i)}}),r.children}};return t.Provider.__=t.Consumer.contextType=t}N=Z.slice,d={__e:function(_,e,t,r){for(var n,l,i;e=e.__;)if((n=e.__c)&&!n.__)try{if((l=n.constructor)&&l.getDerivedStateFromError!=null&&(n.setState(l.getDerivedStateFromError(_)),i=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(_,r||{}),i=n.__d),i)return n.__E=n}catch(s){_=s}throw _}},Q=0,le=function(_){return _!=null&&_.constructor==null},E.prototype.setState=function(_,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=w({},this.state),typeof _=="function"&&(_=_(w({},t),this.props)),_&&w(t,_),_!=null&&this.__v&&(e&&this._sb.push(e),O(this))},E.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),O(this))},E.prototype.render=I,x=[],X=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,$=function(_,e){return _.__v.__b-e.__v.__b},F.__r=0,j=0,R=K(!1),B=K(!0),Y=0;export{de as B,he as D,ve as G,ce as H,se as _,I as b,E as k,d as l,le as t};
