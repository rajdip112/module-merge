(function(m,g){typeof exports=="object"&&typeof module<"u"?g(require("react")):typeof define=="function"&&define.amd?define(["react"],g):(m=typeof globalThis<"u"?globalThis:m||self,g(m.React))})(this,function(m){"use strict";var g={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X;function Oe(){if(X)return g;X=1;var V=m,j=Symbol.for("react.element"),M=Symbol.for("react.fragment"),T=Object.prototype.hasOwnProperty,F=V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,A={key:!0,ref:!0,__self:!0,__source:!0};function x(y,l,O){var v,h={},_=null,I=null;O!==void 0&&(_=""+O),l.key!==void 0&&(_=""+l.key),l.ref!==void 0&&(I=l.ref);for(v in l)T.call(l,v)&&!A.hasOwnProperty(v)&&(h[v]=l[v]);if(y&&y.defaultProps)for(v in l=y.defaultProps,l)h[v]===void 0&&(h[v]=l[v]);return{$$typeof:j,type:y,key:_,ref:I,props:h,_owner:F.current}}return g.Fragment=M,g.jsx=x,g.jsxs=x,g}var w={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z;function Ce(){return Z||(Z=1,process.env.NODE_ENV!=="production"&&function(){var V=m,j=Symbol.for("react.element"),M=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),y=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),v=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),I=Symbol.for("react.offscreen"),Q=Symbol.iterator,Pe="@@iterator";function Se(e){if(e===null||typeof e!="object")return null;var r=Q&&e[Q]||e[Pe];return typeof r=="function"?r:null}var C=V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function c(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];we("error",e,t)}}function we(e,r,t){{var n=C.ReactDebugCurrentFrame,o=n.getStackAddendum();o!==""&&(r+="%s",t=t.concat([o]));var u=t.map(function(i){return String(i)});u.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,u)}}var je=!1,xe=!1,ke=!1,De=!1,Fe=!1,ee;ee=Symbol.for("react.module.reference");function Ae(e){return!!(typeof e=="string"||typeof e=="function"||e===T||e===A||Fe||e===F||e===O||e===v||De||e===I||je||xe||ke||typeof e=="object"&&e!==null&&(e.$$typeof===_||e.$$typeof===h||e.$$typeof===x||e.$$typeof===y||e.$$typeof===l||e.$$typeof===ee||e.getModuleId!==void 0))}function Ie(e,r,t){var n=e.displayName;if(n)return n;var o=r.displayName||r.name||"";return o!==""?t+"("+o+")":t}function re(e){return e.displayName||"Context"}function b(e){if(e==null)return null;if(typeof e.tag=="number"&&c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case M:return"Portal";case A:return"Profiler";case F:return"StrictMode";case O:return"Suspense";case v:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case y:var r=e;return re(r)+".Consumer";case x:var t=e;return re(t._context)+".Provider";case l:return Ie(e,e.render,"ForwardRef");case h:var n=e.displayName||null;return n!==null?n:b(e.type)||"Memo";case _:{var o=e,u=o._payload,i=o._init;try{return b(i(u))}catch{return null}}}return null}var R=Object.assign,k=0,te,ne,ae,ie,oe,ue,fe;function se(){}se.__reactDisabledLog=!0;function We(){{if(k===0){te=console.log,ne=console.info,ae=console.warn,ie=console.error,oe=console.group,ue=console.groupCollapsed,fe=console.groupEnd;var e={configurable:!0,enumerable:!0,value:se,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}k++}}function Ye(){{if(k--,k===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:R({},e,{value:te}),info:R({},e,{value:ne}),warn:R({},e,{value:ae}),error:R({},e,{value:ie}),group:R({},e,{value:oe}),groupCollapsed:R({},e,{value:ue}),groupEnd:R({},e,{value:fe})})}k<0&&c("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var U=C.ReactCurrentDispatcher,B;function W(e,r,t){{if(B===void 0)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);B=n&&n[1]||""}return`
`+B+e}}var q=!1,Y;{var $e=typeof WeakMap=="function"?WeakMap:Map;Y=new $e}function le(e,r){if(!e||q)return"";{var t=Y.get(e);if(t!==void 0)return t}var n;q=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=U.current,U.current=null,We();try{if(r){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(E){n=E}Reflect.construct(e,[],i)}else{try{i.call()}catch(E){n=E}e.call(i.prototype)}}else{try{throw Error()}catch(E){n=E}e()}}catch(E){if(E&&n&&typeof E.stack=="string"){for(var a=E.stack.split(`
`),d=n.stack.split(`
`),f=a.length-1,s=d.length-1;f>=1&&s>=0&&a[f]!==d[s];)s--;for(;f>=1&&s>=0;f--,s--)if(a[f]!==d[s]){if(f!==1||s!==1)do if(f--,s--,s<0||a[f]!==d[s]){var p=`
`+a[f].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),typeof e=="function"&&Y.set(e,p),p}while(f>=1&&s>=0);break}}}finally{q=!1,U.current=u,Ye(),Error.prepareStackTrace=o}var S=e?e.displayName||e.name:"",Te=S?W(S):"";return typeof e=="function"&&Y.set(e,Te),Te}function Le(e,r,t){return le(e,!1)}function Ne(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function $(e,r,t){if(e==null)return"";if(typeof e=="function")return le(e,Ne(e));if(typeof e=="string")return W(e);switch(e){case O:return W("Suspense");case v:return W("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case l:return Le(e.render);case h:return $(e.type,r,t);case _:{var n=e,o=n._payload,u=n._init;try{return $(u(o),r,t)}catch{}}}return""}var L=Object.prototype.hasOwnProperty,ce={},de=C.ReactDebugCurrentFrame;function N(e){if(e){var r=e._owner,t=$(e.type,e._source,r?r.type:null);de.setExtraStackFrame(t)}else de.setExtraStackFrame(null)}function Ve(e,r,t,n,o){{var u=Function.call.bind(L);for(var i in e)if(u(e,i)){var a=void 0;try{if(typeof e[i]!="function"){var d=Error((n||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}a=e[i](r,i,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(f){a=f}a&&!(a instanceof Error)&&(N(o),c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,i,typeof a),N(null)),a instanceof Error&&!(a.message in ce)&&(ce[a.message]=!0,N(o),c("Failed %s type: %s",t,a.message),N(null))}}}var Me=Array.isArray;function J(e){return Me(e)}function Ue(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function Be(e){try{return ve(e),!1}catch{return!0}}function ve(e){return""+e}function pe(e){if(Be(e))return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Ue(e)),ve(e)}var D=C.ReactCurrentOwner,qe={key:!0,ref:!0,__self:!0,__source:!0},ge,he,G;G={};function Je(e){if(L.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function Ge(e){if(L.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function ze(e,r){if(typeof e.ref=="string"&&D.current&&r&&D.current.stateNode!==r){var t=b(D.current.type);G[t]||(c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',b(D.current.type),e.ref),G[t]=!0)}}function Ke(e,r){{var t=function(){ge||(ge=!0,c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function He(e,r){{var t=function(){he||(he=!0,c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var Xe=function(e,r,t,n,o,u,i){var a={$$typeof:j,type:e,key:r,ref:t,props:i,_owner:u};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function Ze(e,r,t,n,o){{var u,i={},a=null,d=null;t!==void 0&&(pe(t),a=""+t),Ge(r)&&(pe(r.key),a=""+r.key),Je(r)&&(d=r.ref,ze(r,o));for(u in r)L.call(r,u)&&!qe.hasOwnProperty(u)&&(i[u]=r[u]);if(e&&e.defaultProps){var f=e.defaultProps;for(u in f)i[u]===void 0&&(i[u]=f[u])}if(a||d){var s=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&Ke(i,s),d&&He(i,s)}return Xe(e,a,d,o,n,D.current,i)}}var z=C.ReactCurrentOwner,be=C.ReactDebugCurrentFrame;function P(e){if(e){var r=e._owner,t=$(e.type,e._source,r?r.type:null);be.setExtraStackFrame(t)}else be.setExtraStackFrame(null)}var K;K=!1;function H(e){return typeof e=="object"&&e!==null&&e.$$typeof===j}function Ee(){{if(z.current){var e=b(z.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function Qe(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var ye={};function er(e){{var r=Ee();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function _e(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=er(r);if(ye[t])return;ye[t]=!0;var n="";e&&e._owner&&e._owner!==z.current&&(n=" It was passed a child from "+b(e._owner.type)+"."),P(e),c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),P(null)}}function Re(e,r){{if(typeof e!="object")return;if(J(e))for(var t=0;t<e.length;t++){var n=e[t];H(n)&&_e(n,r)}else if(H(e))e._store&&(e._store.validated=!0);else if(e){var o=Se(e);if(typeof o=="function"&&o!==e.entries)for(var u=o.call(e),i;!(i=u.next()).done;)H(i.value)&&_e(i.value,r)}}}function rr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===l||r.$$typeof===h))t=r.propTypes;else return;if(t){var n=b(r);Ve(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!K){K=!0;var o=b(r);c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",o||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function tr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){P(e),c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),P(null);break}}e.ref!==null&&(P(e),c("Invalid attribute `ref` supplied to `React.Fragment`."),P(null))}}function me(e,r,t,n,o,u){{var i=Ae(e);if(!i){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var d=Qe(o);d?a+=d:a+=Ee();var f;e===null?f="null":J(e)?f="array":e!==void 0&&e.$$typeof===j?(f="<"+(b(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):f=typeof e,c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",f,a)}var s=Ze(e,r,t,o,u);if(s==null)return s;if(i){var p=r.children;if(p!==void 0)if(n)if(J(p)){for(var S=0;S<p.length;S++)Re(p[S],e);Object.freeze&&Object.freeze(p)}else c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Re(p,e)}return e===T?tr(s):rr(s),s}}function nr(e,r,t){return me(e,r,t,!0)}function ar(e,r,t){return me(e,r,t,!1)}var ir=ar,or=nr;w.Fragment=T,w.jsx=ir,w.jsxs=or}()),w}process.env.NODE_ENV==="production"?Oe():Ce()});
