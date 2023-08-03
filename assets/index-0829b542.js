var hy=Object.defineProperty;var dy=(n,e,t)=>e in n?hy(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Ga=(n,e,t)=>(dy(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function z(){}const mu=n=>n;function gf(n){return n()}function fh(){return Object.create(null)}function Kr(n){n.forEach(gf)}function Ho(n){return typeof n=="function"}function kt(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function fy(n){return Object.keys(n).length===0}const _f=typeof window<"u";let yf=_f?()=>window.performance.now():()=>Date.now(),pu=_f?n=>requestAnimationFrame(n):z;const vr=new Set;function If(n){vr.forEach(e=>{e.c(n)||(vr.delete(e),e.f())}),vr.size!==0&&pu(If)}function vf(n){let e;return vr.size===0&&pu(If),{promise:new Promise(t=>{vr.add(e={c:n,f:t})}),abort(){vr.delete(e)}}}function Gt(n,e){n.appendChild(e)}function wf(n){if(!n)return document;const e=n.getRootNode?n.getRootNode():n.ownerDocument;return e&&e.host?e:n.ownerDocument}function my(n){const e=gt("style");return e.textContent="/* empty */",py(wf(n),e),e.sheet}function py(n,e){return Gt(n.head||n,e),e.sheet}function Ze(n,e,t){n.insertBefore(e,t||null)}function je(n){n.parentNode&&n.parentNode.removeChild(n)}function gt(n){return document.createElement(n)}function gu(n){return document.createTextNode(n)}function ar(){return gu(" ")}function Ef(){return gu("")}function Qe(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function gy(n){return Array.from(n.childNodes)}function _y(n,e){e=""+e,n.data!==e&&(n.data=e)}function yy(n,e,{bubbles:t=!1,cancelable:r=!1}={}){return new CustomEvent(n,{detail:e,bubbles:t,cancelable:r})}const _o=new Map;let yo=0;function Iy(n){let e=5381,t=n.length;for(;t--;)e=(e<<5)-e^n.charCodeAt(t);return e>>>0}function vy(n,e){const t={stylesheet:my(e),rules:{}};return _o.set(n,t),t}function Tf(n,e,t,r,i,s,o,a=0){const c=16.666/r;let u=`{
`;for(let v=0;v<=1;v+=c){const E=e+(t-e)*s(v);u+=v*100+`%{${o(E,1-E)}}
`}const l=u+`100% {${o(t,1-t)}}
}`,h=`__svelte_${Iy(l)}_${a}`,d=wf(n),{stylesheet:f,rules:y}=_o.get(d)||vy(d,n);y[h]||(y[h]=!0,f.insertRule(`@keyframes ${h} ${l}`,f.cssRules.length));const _=n.style.animation||"";return n.style.animation=`${_?`${_}, `:""}${h} ${r}ms linear ${i}ms 1 both`,yo+=1,h}function _c(n,e){const t=(n.style.animation||"").split(", "),r=t.filter(e?s=>s.indexOf(e)<0:s=>s.indexOf("__svelte")===-1),i=t.length-r.length;i&&(n.style.animation=r.join(", "),yo-=i,yo||wy())}function wy(){pu(()=>{yo||(_o.forEach(n=>{const{ownerNode:e}=n.stylesheet;e&&je(e)}),_o.clear())})}let _u;function Ci(n){_u=n}const mr=[],mh=[];let wr=[];const ph=[],Ey=Promise.resolve();let yc=!1;function Ty(){yc||(yc=!0,Ey.then(Af))}function kr(n){wr.push(n)}const ja=new Set;let cr=0;function Af(){if(cr!==0)return;const n=_u;do{try{for(;cr<mr.length;){const e=mr[cr];cr++,Ci(e),Ay(e.$$)}}catch(e){throw mr.length=0,cr=0,e}for(Ci(null),mr.length=0,cr=0;mh.length;)mh.pop()();for(let e=0;e<wr.length;e+=1){const t=wr[e];ja.has(t)||(ja.add(t),t())}wr.length=0}while(mr.length);for(;ph.length;)ph.pop()();yc=!1,ja.clear(),Ci(n)}function Ay(n){if(n.fragment!==null){n.update(),Kr(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(kr)}}function Ry(n){const e=[],t=[];wr.forEach(r=>n.indexOf(r)===-1?e.push(r):t.push(r)),t.forEach(r=>r()),wr=e}let ui;function Rf(){return ui||(ui=Promise.resolve(),ui.then(()=>{ui=null})),ui}function Io(n,e,t){n.dispatchEvent(yy(`${e?"intro":"outro"}${t}`))}const ro=new Set;let Kt;function by(){Kt={r:0,c:[],p:Kt}}function Py(){Kt.r||Kr(Kt.c),Kt=Kt.p}function Je(n,e){n&&n.i&&(ro.delete(n),n.i(e))}function wt(n,e,t,r){if(n&&n.o){if(ro.has(n))return;ro.add(n),Kt.c.push(()=>{ro.delete(n),r&&(t&&n.d(1),r())}),n.o(e)}else r&&r()}const bf={duration:0};function Sy(n,e,t){const r={direction:"in"};let i=e(n,t,r),s=!1,o,a,c=0;function u(){o&&_c(n,o)}function l(){const{delay:d=0,duration:f=300,easing:y=mu,tick:_=z,css:v}=i||bf;v&&(o=Tf(n,0,1,f,d,y,v,c++)),_(0,1);const E=yf()+d,k=E+f;a&&a.abort(),s=!0,kr(()=>Io(n,!0,"start")),a=vf(D=>{if(s){if(D>=k)return _(1,0),Io(n,!0,"end"),u(),s=!1;if(D>=E){const $=y((D-E)/f);_($,1-$)}}return s})}let h=!1;return{start(){h||(h=!0,_c(n),Ho(i)?(i=i(r),Rf().then(l)):l())},invalidate(){h=!1},end(){s&&(u(),s=!1)}}}function Cy(n,e,t){const r={direction:"out"};let i=e(n,t,r),s=!0,o;const a=Kt;a.r+=1;let c;function u(){const{delay:l=0,duration:h=300,easing:d=mu,tick:f=z,css:y}=i||bf;y&&(o=Tf(n,1,0,h,l,d,y));const _=yf()+l,v=_+h;kr(()=>Io(n,!1,"start")),"inert"in n&&(c=n.inert,n.inert=!0),vf(E=>{if(s){if(E>=v)return f(0,1),Io(n,!1,"end"),--a.r||Kr(a.c),!1;if(E>=_){const k=d((E-_)/h);f(1-k,k)}}return s})}return Ho(i)?Rf().then(()=>{i=i(r),u()}):u(),{end(l){l&&"inert"in n&&(n.inert=c),l&&i.tick&&i.tick(1,0),s&&(o&&_c(n,o),s=!1)}}}function wn(n){n&&n.c()}function $t(n,e,t){const{fragment:r,after_update:i}=n.$$;r&&r.m(e,t),kr(()=>{const s=n.$$.on_mount.map(gf).filter(Ho);n.$$.on_destroy?n.$$.on_destroy.push(...s):Kr(s),n.$$.on_mount=[]}),i.forEach(kr)}function qt(n,e){const t=n.$$;t.fragment!==null&&(Ry(t.after_update),Kr(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function ky(n,e){n.$$.dirty[0]===-1&&(mr.push(n),Ty(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function hn(n,e,t,r,i,s,o,a=[-1]){const c=_u;Ci(n);const u=n.$$={fragment:null,ctx:[],props:s,update:z,not_equal:i,bound:fh(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:fh(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(u.root);let l=!1;if(u.ctx=t?t(n,e.props||{},(h,d,...f)=>{const y=f.length?f[0]:d;return u.ctx&&i(u.ctx[h],u.ctx[h]=y)&&(!u.skip_bound&&u.bound[h]&&u.bound[h](y),l&&ky(n,h)),d}):[],u.update(),l=!0,Kr(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){const h=gy(e.target);u.fragment&&u.fragment.l(h),h.forEach(je)}else u.fragment&&u.fragment.c();e.intro&&Je(n.$$.fragment),$t(n,e.target,e.anchor),Af()}Ci(c)}class dn{constructor(){Ga(this,"$$");Ga(this,"$$set")}$destroy(){qt(this,1),this.$destroy=z}$on(e,t){if(!Ho(t))return z;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const i=r.indexOf(t);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!fy(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Dy="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Dy);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Vy=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Sf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,u=c?n[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(t[l],t[h],t[d],t[f])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Pf(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Vy(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new Ny;const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ny extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xy=function(n){const e=Pf(n);return Sf.encodeByteArray(e,!0)},vo=function(n){return xy(n).replace(/\./g,"")},Cf=function(n){try{return Sf.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function wo(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Oy(t)||(n[t]=wo(n[t],e[t]));return n}function Oy(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ly(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const My=()=>Ly().__FIREBASE_DEFAULTS__,Fy=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Uy=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Cf(n[1]);return e&&JSON.parse(e)},yu=()=>{try{return My()||Fy()||Uy()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},kf=()=>{var n;return(n=yu())===null||n===void 0?void 0:n.config},By=n=>{var e;return(e=yu())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[vo(JSON.stringify(t)),vo(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Z())}function Iu(){var n;const e=(n=yu())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jy(){return typeof self=="object"&&self.self===self}function Df(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function vu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Vf(){const n=Z();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function zy(){return!Iu()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Bi(){try{return typeof indexedDB=="object"}catch{return!1}}function Ky(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy="FirebaseError";class Ne extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Wy,Object.setPrototypeOf(this,Ne.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zn.prototype.create)}}class Zn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Hy(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ne(i,a,r)}}function Hy(n,e){return n.replace(Qy,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Qy=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Yy(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ic(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(_h(s)&&_h(o)){if(!Ic(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function _h(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function yr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function wi(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Nf(n,e){const t=new Jy(n,e);return t.subscribe.bind(t)}class Jy{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Xy(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=za),i.error===void 0&&(i.error=za),i.complete===void 0&&(i.complete=za);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Xy(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function za(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(n){return n&&n._delegate?n._delegate:n}class _t{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new $y;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tI(e))try{this.getOrInitializeService({instanceIdentifier:Tn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Tn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Tn){return this.instances.has(e)}getOptions(e=Tn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:eI(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Tn){return this.component?this.component.multipleInstances?e:Tn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function eI(n){return n===Tn?void 0:n}function tI(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Zy(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu=[];var M;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(M||(M={}));const xf={debug:M.DEBUG,verbose:M.VERBOSE,info:M.INFO,warn:M.WARN,error:M.ERROR,silent:M.SILENT},rI=M.INFO,iI={[M.DEBUG]:"log",[M.VERBOSE]:"log",[M.INFO]:"info",[M.WARN]:"warn",[M.ERROR]:"error"},sI=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=iI[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qo{constructor(e){this.name=e,this._logLevel=rI,this._logHandler=sI,this._userLogHandler=null,wu.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in M))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,M.DEBUG,...e),this._logHandler(this,M.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,M.VERBOSE,...e),this._logHandler(this,M.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,M.INFO,...e),this._logHandler(this,M.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,M.WARN,...e),this._logHandler(this,M.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,M.ERROR,...e),this._logHandler(this,M.ERROR,...e)}}function oI(n){wu.forEach(e=>{e.setLogLevel(n)})}function aI(n,e){for(const t of wu){let r=null;e&&e.level&&(r=xf[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(i,s,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");s>=(r??i.logLevel)&&n({level:M[s].toLowerCase(),message:a,args:o,type:i.name})}}}const cI=(n,e)=>e.some(t=>n instanceof t);let yh,Ih;function uI(){return yh||(yh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lI(){return Ih||(Ih=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Of=new WeakMap,vc=new WeakMap,Lf=new WeakMap,Ka=new WeakMap,Eu=new WeakMap;function hI(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Qt(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Of.set(t,n)}).catch(()=>{}),Eu.set(e,n),e}function dI(n){if(vc.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});vc.set(n,e)}let wc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return vc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Lf.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Qt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function fI(n){wc=n(wc)}function mI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Wa(this),e,...t);return Lf.set(r,e.sort?e.sort():[e]),Qt(r)}:lI().includes(n)?function(...e){return n.apply(Wa(this),e),Qt(Of.get(this))}:function(...e){return Qt(n.apply(Wa(this),e))}}function pI(n){return typeof n=="function"?mI(n):(n instanceof IDBTransaction&&dI(n),cI(n,uI())?new Proxy(n,wc):n)}function Qt(n){if(n instanceof IDBRequest)return hI(n);if(Ka.has(n))return Ka.get(n);const e=pI(n);return e!==n&&(Ka.set(n,e),Eu.set(e,n)),e}const Wa=n=>Eu.get(n);function gI(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=Qt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Qt(o.result),c.oldVersion,c.newVersion,Qt(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const _I=["get","getKey","getAll","getAllKeys","count"],yI=["put","add","delete","clear"],Ha=new Map;function vh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ha.get(e))return Ha.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=yI.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||_I.includes(t)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),i&&c.done]))[0]};return Ha.set(e,s),s}fI(n=>({...n,get:(e,t,r)=>vh(e,t)||n.get(e,t,r),has:(e,t)=>!!vh(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(vI(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function vI(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ec="@firebase/app",wh="0.9.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=new Qo("@firebase/app"),wI="@firebase/app-compat",EI="@firebase/analytics-compat",TI="@firebase/analytics",AI="@firebase/app-check-compat",RI="@firebase/app-check",bI="@firebase/auth",PI="@firebase/auth-compat",SI="@firebase/database",CI="@firebase/database-compat",kI="@firebase/functions",DI="@firebase/functions-compat",VI="@firebase/installations",NI="@firebase/installations-compat",xI="@firebase/messaging",OI="@firebase/messaging-compat",LI="@firebase/performance",MI="@firebase/performance-compat",FI="@firebase/remote-config",UI="@firebase/remote-config-compat",BI="@firebase/storage",$I="@firebase/storage-compat",qI="@firebase/firestore",GI="@firebase/firestore-compat",jI="firebase",zI="10.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt="[DEFAULT]",KI={[Ec]:"fire-core",[wI]:"fire-core-compat",[TI]:"fire-analytics",[EI]:"fire-analytics-compat",[RI]:"fire-app-check",[AI]:"fire-app-check-compat",[bI]:"fire-auth",[PI]:"fire-auth-compat",[SI]:"fire-rtdb",[CI]:"fire-rtdb-compat",[kI]:"fire-fn",[DI]:"fire-fn-compat",[VI]:"fire-iid",[NI]:"fire-iid-compat",[xI]:"fire-fcm",[OI]:"fire-fcm-compat",[LI]:"fire-perf",[MI]:"fire-perf-compat",[FI]:"fire-rc",[UI]:"fire-rc-compat",[BI]:"fire-gcs",[$I]:"fire-gcs-compat",[qI]:"fire-fst",[GI]:"fire-fst-compat","fire-js":"fire-js",[jI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt=new Map,$i=new Map;function Eo(n,e){try{n.container.addComponent(e)}catch(t){Bn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Mf(n,e){n.container.addOrOverwriteComponent(e)}function Zt(n){const e=n.name;if($i.has(e))return Bn.debug(`There were multiple attempts to register component ${e}.`),!1;$i.set(e,n);for(const t of Xt.values())Eo(t,n);return!0}function Ff(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function WI(n,e,t=Jt){Ff(n,e).clearInstance(t)}function HI(){$i.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Rt=new Zn("app","Firebase",QI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let YI=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _t("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rt.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn=zI;function Tu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Jt,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Rt.create("bad-app-name",{appName:String(i)});if(t||(t=kf()),!t)throw Rt.create("no-options");const s=Xt.get(i);if(s){if(Ic(t,s.options)&&Ic(r,s.config))return s;throw Rt.create("duplicate-app",{appName:i})}const o=new nI(i);for(const c of $i.values())o.addComponent(c);const a=new YI(t,r,o);return Xt.set(i,a),a}function JI(n=Jt){const e=Xt.get(n);if(!e&&n===Jt&&kf())return Tu();if(!e)throw Rt.create("no-app",{appName:n});return e}function XI(){return Array.from(Xt.values())}async function Uf(n){const e=n.name;Xt.has(e)&&(Xt.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function mt(n,e,t){var r;let i=(r=KI[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bn.warn(a.join(" "));return}Zt(new _t(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Bf(n,e){if(n!==null&&typeof n!="function")throw Rt.create("invalid-log-argument");aI(n,e)}function $f(n){oI(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI="firebase-heartbeat-database",ev=1,qi="firebase-heartbeat-store";let Qa=null;function qf(){return Qa||(Qa=gI(ZI,ev,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(qi)}}}).catch(n=>{throw Rt.create("idb-open",{originalErrorMessage:n.message})})),Qa}async function tv(n){try{return await(await qf()).transaction(qi).objectStore(qi).get(Gf(n))}catch(e){if(e instanceof Ne)Bn.warn(e.message);else{const t=Rt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Bn.warn(t.message)}}}async function Eh(n,e){try{const r=(await qf()).transaction(qi,"readwrite");await r.objectStore(qi).put(e,Gf(n)),await r.done}catch(t){if(t instanceof Ne)Bn.warn(t.message);else{const r=Rt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Bn.warn(r.message)}}}function Gf(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv=1024,rv=30*24*60*60*1e3;class iv{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ov(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Th();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=rv}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Th(),{heartbeatsToSend:t,unsentEntries:r}=sv(this._heartbeatsCache.heartbeats),i=vo(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Th(){return new Date().toISOString().substring(0,10)}function sv(n,e=nv){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ah(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Ah(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class ov{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bi()?Ky().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await tv(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Eh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Eh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ah(n){return vo(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function av(n){Zt(new _t("platform-logger",e=>new II(e),"PRIVATE")),Zt(new _t("heartbeat",e=>new iv(e),"PRIVATE")),mt(Ec,wh,n),mt(Ec,wh,"esm2017"),mt("fire-js","")}av("");const cv=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Ne,SDK_VERSION:fn,_DEFAULT_ENTRY_NAME:Jt,_addComponent:Eo,_addOrOverwriteComponent:Mf,_apps:Xt,_clearComponents:HI,_components:$i,_getProvider:Ff,_registerComponent:Zt,_removeServiceInstance:WI,deleteApp:Uf,getApp:JI,getApps:XI,initializeApp:Tu,onLog:Bf,registerVersion:mt,setLogLevel:$f},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(e,t){this._delegate=e,this.firebase=t,Eo(e,new _t("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Uf(this._delegate)))}_getService(e,t=Jt){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=Jt){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Eo(this._delegate,e)}_addOrOverwriteComponent(e){Mf(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Rh=new Zn("app-compat","Firebase",lv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(n){const e={},t={__esModule:!0,initializeApp:s,app:i,registerVersion:mt,setLogLevel:$f,onLog:Bf,apps:null,SDK_VERSION:fn,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:cv}};t.default=t,Object.defineProperty(t,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||Jt,!gh(e,u))throw Rh.create("no-app",{appName:u});return e[u]}i.App=n;function s(u,l={}){const h=Tu(u,l);if(gh(e,h.name))return e[h.name];const d=new n(h,t);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const l=u.name,h=l.replace("-compat","");if(Zt(u)&&u.type==="PUBLIC"){const d=(f=i())=>{if(typeof f[h]!="function")throw Rh.create("invalid-app-argument",{appName:l});return f[h]()};u.serviceProps!==void 0&&wo(d,u.serviceProps),t[h]=d,n.prototype[h]=function(...f){return this._getService.bind(this,l).apply(this,u.multipleInstances?f:[])}}return u.type==="PUBLIC"?t[h]:null}function c(u,l){return l==="serverAuth"?null:l}return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jf(){const n=hv(uv);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:jf,extendNamespace:e,createSubscribe:Nf,ErrorFactory:Zn,deepExtend:wo});function e(t){wo(n,t)}return n}const dv=jf();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh=new Qo("@firebase/app-compat"),fv="@firebase/app-compat",mv="0.2.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(n){mt(fv,mv,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(jy()&&self.firebase!==void 0){bh.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&bh.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Ce=dv;pv();var gv="firebase",_v="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ce.registerVersion(gv,_v,"app-compat");function Au(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}const li={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},ur={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yv(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend."}}function zf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Iv=yv,vv=zf,Kf=new Zn("auth","Firebase",zf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To=new Qo("@firebase/auth");function wv(n,...e){To.logLevel<=M.WARN&&To.warn(`Auth (${fn}): ${n}`,...e)}function io(n,...e){To.logLevel<=M.ERROR&&To.error(`Auth (${fn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(n,...e){throw Ru(n,...e)}function Te(n,...e){return Ru(n,...e)}function Wf(n,e,t){const r=Object.assign(Object.assign({},vv()),{[e]:t});return new Zn("auth","Firebase",r).create(e,{appName:n.name})}function Hr(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Re(n,"argument-error"),Wf(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ru(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Kf.create(n,...e)}function w(n,e,...t){if(!n)throw Ru(e,...t)}function ut(n){const e="INTERNAL ASSERTION FAILED: "+n;throw io(e),new Error(e)}function et(n,e){n||ut(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function bu(){return Ph()==="http:"||Ph()==="https:"}function Ph(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ev(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bu()||Df()||"connection"in navigator)?navigator.onLine:!0}function Tv(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,t){this.shortDelay=e,this.longDelay=t,et(t>e,"Short delay should be less than long delay!"),this.isMobile=Gy()||vu()}get(){return Ev()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(n,e){et(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv=new ps(3e4,6e4);function ue(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function he(n,e,t,r,i={}){return Qf(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Wr(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),Hf.fetch()(Yf(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Qf(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Av),e);try{const i=new bv(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ei(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ei(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ei(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ei(n,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Wf(n,l,u);Re(n,l)}}catch(i){if(i instanceof Ne)throw i;Re(n,"network-request-failed",{message:String(i)})}}async function Dt(n,e,t,r,i={}){const s=await he(n,e,t,r,i);return"mfaPendingCredential"in s&&Re(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Yf(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Pu(n.config,i):`${n.config.apiScheme}://${i}`}class bv{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Te(this.auth,"network-request-failed")),Rv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ei(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Te(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pv(n,e){return he(n,"POST","/v1/accounts:delete",e)}async function Sv(n,e){return he(n,"POST","/v1/accounts:update",e)}async function Cv(n,e){return he(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kv(n,e=!1){const t=C(n),r=await t.getIdToken(e),i=Yo(r);w(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ki(Ya(i.auth_time)),issuedAtTime:ki(Ya(i.iat)),expirationTime:ki(Ya(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ya(n){return Number(n)*1e3}function Yo(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return io("JWT malformed, contained fewer than 3 sections"),null;try{const i=Cf(t);return i?JSON.parse(i):(io("Failed to decode base64 JWT payload"),null)}catch(i){return io("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Dv(n){const e=Yo(n);return w(e,"internal-error"),w(typeof e.exp<"u","internal-error"),w(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pt(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ne&&Vv(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Vv({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ki(this.lastLoginAt),this.creationTime=ki(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ji(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Pt(n,Cv(t,{idToken:r}));w(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Lv(s.providerUserInfo):[],a=Ov(n.providerData,o),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Jf(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(n,h)}async function xv(n){const e=C(n);await ji(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ov(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Lv(n){return n.map(e=>{var{providerId:t}=e,r=Au(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mv(n,e){const t=await Qf(n,{},async()=>{const r=Wr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=Yf(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Hf.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){w(e.idToken,"internal-error"),w(typeof e.idToken<"u","internal-error"),w(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Dv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return w(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await Mv(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new zi;return r&&(w(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(w(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(w(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zi,this.toJSON())}_performRefresh(){return ut("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(n,e){w(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class On{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Au(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Nv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Jf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Pt(this,this.stsTokenManager.getToken(this.auth,e));return w(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return kv(this,e)}reload(){return xv(this)}_assign(e){this!==e&&(w(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new On(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ji(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Pt(this,Pv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,c,u,l;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,f=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=t.photoURL)!==null&&o!==void 0?o:void 0,_=(a=t.tenantId)!==null&&a!==void 0?a:void 0,v=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,E=(u=t.createdAt)!==null&&u!==void 0?u:void 0,k=(l=t.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:D,emailVerified:$,isAnonymous:q,providerData:U,stsTokenManager:Ie}=t;w(D&&Ie,e,"internal-error");const Lt=zi.fromJSON(this.name,Ie);w(typeof D=="string",e,"internal-error"),Mt(h,e.name),Mt(d,e.name),w(typeof $=="boolean",e,"internal-error"),w(typeof q=="boolean",e,"internal-error"),Mt(f,e.name),Mt(y,e.name),Mt(_,e.name),Mt(v,e.name),Mt(E,e.name),Mt(k,e.name);const ci=new On({uid:D,auth:e,email:d,emailVerified:$,displayName:h,isAnonymous:q,photoURL:y,phoneNumber:f,tenantId:_,stsTokenManager:Lt,createdAt:E,lastLoginAt:k});return U&&Array.isArray(U)&&(ci.providerData=U.map(qs=>Object.assign({},qs))),v&&(ci._redirectEventId=v),ci}static async _fromIdTokenResponse(e,t,r=!1){const i=new zi;i.updateFromServerResponse(t);const s=new On({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ji(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh=new Map;function Ge(n){et(n instanceof Function,"Expected a class definition");let e=Sh.get(n);return e?(et(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Sh.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Xf.type="NONE";const Dr=Xf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(n,e,t){return`firebase:${n}:${e}:${t}`}class Er{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ln(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ln("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?On._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Er(Ge(Dr),e,r);const i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ge(Dr);const o=Ln(r,e.config.apiKey,e.name);let a=null;for(const u of t)try{const l=await u._get(o);if(l){const h=On._fromJSON(e,l);u!==s&&(a=h),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Er(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Er(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(tm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Zf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(nm(e))return"Blackberry";if(rm(e))return"Webos";if(Su(e))return"Safari";if((e.includes("chrome/")||em(e))&&!e.includes("edge/"))return"Chrome";if(gs(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Zf(n=Z()){return/firefox\//i.test(n)}function Su(n=Z()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function em(n=Z()){return/crios\//i.test(n)}function tm(n=Z()){return/iemobile/i.test(n)}function gs(n=Z()){return/android/i.test(n)}function nm(n=Z()){return/blackberry/i.test(n)}function rm(n=Z()){return/webos/i.test(n)}function Qr(n=Z()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Fv(n=Z()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function Uv(n=Z()){var e;return Qr(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Bv(){return Vf()&&document.documentMode===10}function im(n=Z()){return Qr(n)||gs(n)||rm(n)||nm(n)||/windows phone/i.test(n)||tm(n)}function $v(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(n,e=[]){let t;switch(n){case"Browser":t=Ch(Z());break;case"Worker":t=`${Ch(Z())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${fn}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qv(n){return(await he(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function om(n,e){return he(n,"GET","/v2/recaptchaConfig",ue(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(n){return n!==void 0&&n.getResponse!==void 0}function Dh(n){return n!==void 0&&n.enterprise!==void 0}class am{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gv(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Cu(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Te("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",Gv().appendChild(r)})}function cm(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const jv="https://www.google.com/recaptcha/enterprise.js?render=",zv="recaptcha-enterprise",Kv="NO_RECAPTCHA";class um{constructor(e){this.type=zv,this.auth=oe(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{om(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new am(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;Dh(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(Kv)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&Dh(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Cu(jv+a).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function en(n,e,t,r=!1){const i=new um(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vh(this),this.idTokenSubscription=new Vh(this),this.beforeStateQueue=new Wv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ge(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Er.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ji(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Tv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?C(e):null;return t&&w(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&w(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ge(e))})}async initializeRecaptchaConfig(){const e=await om(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new am(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new um(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Zn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ge(e)||this._popupRedirectResolver;w(t,this,"argument-error"),this.redirectPersistenceManager=await Er.create(this,[Ge(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return w(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,r,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&wv(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function oe(n){return C(n)}class Vh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Nf(t=>this.observer=t)}get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Qv(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ge);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Yv(n,e,t){const r=oe(n);w(r._canInitEmulator,r,"emulator-config-failed"),w(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=lm(e),{host:o,port:a}=Jv(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Xv()}function lm(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Jv(n){const e=lm(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Nh(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Nh(o)}}}function Nh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Xv(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ut("not implemented")}_getIdTokenResponse(e){return ut("not implemented")}_linkToIdToken(e,t){return ut("not implemented")}_getReauthenticationResolver(e){return ut("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hm(n,e){return he(n,"POST","/v1/accounts:resetPassword",ue(n,e))}async function dm(n,e){return he(n,"POST","/v1/accounts:update",e)}async function Zv(n,e){return he(n,"POST","/v1/accounts:update",ue(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ja(n,e){return Dt(n,"POST","/v1/accounts:signInWithPassword",ue(n,e))}async function Jo(n,e){return he(n,"POST","/v1/accounts:sendOobCode",ue(n,e))}async function ew(n,e){return Jo(n,e)}async function Xa(n,e){return Jo(n,e)}async function Za(n,e){return Jo(n,e)}async function tw(n,e){return Jo(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nw(n,e){return Dt(n,"POST","/v1/accounts:signInWithEmailLink",ue(n,e))}async function rw(n,e){return Dt(n,"POST","/v1/accounts:signInWithEmailLink",ue(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki extends Yr{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Ki(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Ki(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((t=e._getRecaptchaConfig())===null||t===void 0)&&t.emailPasswordEnabled){const i=await en(e,r,"signInWithPassword");return Ja(e,i)}else return Ja(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await en(e,r,"signInWithPassword");return Ja(e,s)}else return Promise.reject(i)});case"emailLink":return nw(e,{email:this._email,oobCode:this._password});default:Re(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return dm(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return rw(e,{idToken:t,email:this._email,oobCode:this._password});default:Re(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bt(n,e){return Dt(n,"POST","/v1/accounts:signInWithIdp",ue(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw="http://localhost";class yt extends Yr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new yt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Re("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Au(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new yt(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return bt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,bt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,bt(e,t)}buildRequest(){const e={requestUri:iw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Wr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sw(n,e){return he(n,"POST","/v1/accounts:sendVerificationCode",ue(n,e))}async function ow(n,e){return Dt(n,"POST","/v1/accounts:signInWithPhoneNumber",ue(n,e))}async function aw(n,e){const t=await Dt(n,"POST","/v1/accounts:signInWithPhoneNumber",ue(n,e));if(t.temporaryProof)throw Ei(n,"account-exists-with-different-credential",t);return t}const cw={USER_NOT_FOUND:"user-not-found"};async function uw(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Dt(n,"POST","/v1/accounts:signInWithPhoneNumber",ue(n,t),cw)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends Yr{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Mn({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Mn({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return ow(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return aw(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return uw(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new Mn({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lw(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function hw(n){const e=yr(wi(n)).link,t=e?yr(wi(e)).deep_link_id:null,r=yr(wi(n)).deep_link_id;return(r?yr(wi(r)).link:null)||r||t||e||n}class Xo{constructor(e){var t,r,i,s,o,a;const c=yr(wi(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=lw((i=c.mode)!==null&&i!==void 0?i:null);w(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=hw(e);try{return new Xo(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(){this.providerId=mn.PROVIDER_ID}static credential(e,t){return Ki._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Xo.parseLink(t);return w(r,"argument-error"),Ki._fromEmailAndCode(e,r.code,r.tenantId)}}mn.PROVIDER_ID="password";mn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";mn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr extends Vt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Tr extends Jr{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return w("providerId"in t&&"signInMethod"in t,"argument-error"),yt._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return w(e.idToken||e.accessToken,"argument-error"),yt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Tr.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Tr.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!t&&!s||!a)return null;try{return new Tr(a)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends Jr{constructor(){super("facebook.com")}static credential(e){return yt._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return it.credential(e.oauthAccessToken)}catch{return null}}}it.FACEBOOK_SIGN_IN_METHOD="facebook.com";it.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends Jr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return yt._fromParams({providerId:st.PROVIDER_ID,signInMethod:st.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return st.credentialFromTaggedObject(e)}static credentialFromError(e){return st.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return st.credential(t,r)}catch{return null}}}st.GOOGLE_SIGN_IN_METHOD="google.com";st.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends Jr{constructor(){super("github.com")}static credential(e){return yt._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ot.credential(e.oauthAccessToken)}catch{return null}}}ot.GITHUB_SIGN_IN_METHOD="github.com";ot.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw="http://localhost";class Vr extends Yr{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return bt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,bt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,bt(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=t;return!r||!i||!s||r!==i?null:new Vr(r,s)}static _create(e,t){return new Vr(e,t)}buildRequest(){return{requestUri:dw,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw="saml.";class Ao extends Vt{constructor(e){w(e.startsWith(fw),"argument-error"),super(e)}static credentialFromResult(e){return Ao.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Ao.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Vr.fromJSON(e);return w(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return Vr._create(r,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends Jr{constructor(){super("twitter.com")}static credential(e,t){return yt._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return at.credential(t,r)}catch{return null}}}at.TWITTER_SIGN_IN_METHOD="twitter.com";at.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function so(n,e){return Dt(n,"POST","/v1/accounts:signUp",ue(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await On._fromIdTokenResponse(e,r,i),o=xh(r);return new Ye({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=xh(r);return new Ye({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function xh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mw(n){var e;const t=oe(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Ye({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await so(t,{returnSecureToken:!0}),i=await Ye._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro extends Ne{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ro.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Ro(e,t,r,i)}}function fm(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ro._fromErrorAndOperation(n,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mm(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pw(n,e){const t=C(n);await Zo(!0,t,e);const{providerUserInfo:r}=await Sv(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),i=mm(r||[]);return t.providerData=t.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function ku(n,e,t=!1){const r=await Pt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ye._forOperation(n,"link",r)}async function Zo(n,e,t){await ji(e);const r=mm(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";w(r.has(t)===n,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pm(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await Pt(n,fm(r,i,e,n),t);w(s.idToken,r,"internal-error");const o=Yo(s.idToken);w(o,r,"internal-error");const{sub:a}=o;return w(n.uid===a,r,"user-mismatch"),Ye._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Re(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gm(n,e,t=!1){const r="signIn",i=await fm(n,r,e),s=await Ye._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function ea(n,e){return gm(oe(n),e)}async function _m(n,e){const t=C(n);return await Zo(!1,t,e.providerId),ku(t,e)}async function ym(n,e){return pm(C(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gw(n,e){return Dt(n,"POST","/v1/accounts:signInWithCustomToken",ue(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _w(n,e){const t=oe(n),r=await gw(t,{token:e,returnSecureToken:!0}),i=await Ye._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Du._fromServerResponse(e,t):"totpInfo"in t?Vu._fromServerResponse(e,t):Re(e,"internal-error")}}class Du extends _s{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Du(t)}}class Vu extends _s{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new Vu(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(n,e,t){var r;w(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),w(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(w(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(w(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yw(n,e,t){var r;const i=oe(n),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await en(i,s,"getOobCode",!0);t&&Ar(i,o,t),await Xa(i,o)}else t&&Ar(i,s,t),await Xa(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await en(i,s,"getOobCode",!0);t&&Ar(i,a,t),await Xa(i,a)}else return Promise.reject(o)})}async function Iw(n,e,t){await hm(C(n),{oobCode:e,newPassword:t})}async function vw(n,e){await Zv(C(n),{oobCode:e})}async function Im(n,e){const t=C(n),r=await hm(t,{oobCode:e}),i=r.requestType;switch(w(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":w(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":w(r.mfaInfo,t,"internal-error");default:w(r.email,t,"internal-error")}let s=null;return r.mfaInfo&&(s=_s._fromServerResponse(oe(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function ww(n,e){const{data:t}=await Im(C(n),e);return t.email}async function Ew(n,e,t){var r;const i=oe(n),s={returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await en(i,s,"signUpPassword");o=so(i,u)}else o=so(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const l=await en(i,s,"signUpPassword");return so(i,l)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),c=await Ye._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function Tw(n,e,t){return ea(C(n),mn.credential(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aw(n,e,t){var r;const i=oe(n),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,c){w(c.handleCodeInApp,i,"argument-error"),c&&Ar(i,a,c)}if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await en(i,s,"getOobCode",!0);o(a,t),await Za(i,a)}else o(s,t),await Za(i,s).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const c=await en(i,s,"getOobCode",!0);o(c,t),await Za(i,c)}else return Promise.reject(a)})}function Rw(n,e){const t=Xo.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function bw(n,e,t){const r=C(n),i=mn.credentialWithLink(e,t||Gi());return w(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),ea(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pw(n,e){return he(n,"POST","/v1/accounts:createAuthUri",ue(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sw(n,e){const t=bu()?Gi():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:i}=await Pw(C(n),r);return i||[]}async function Cw(n,e){const t=C(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&Ar(t.auth,i,e);const{email:s}=await ew(t.auth,i);s!==n.email&&await n.reload()}async function kw(n,e,t){const r=C(n),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&Ar(r.auth,s,t);const{email:o}=await tw(r.auth,s);o!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dw(n,e){return he(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vw(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=C(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Pt(r,Dw(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Nw(n,e){return vm(C(n),e,null)}function xw(n,e){return vm(C(n),null,e)}async function vm(n,e,t){const{auth:r}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=await Pt(n,dm(r,s));await n._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ow(n){var e,t;if(!n)return null;const{providerId:r}=n,i=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},s=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n!=null&&n.idToken)){const o=(t=(e=Yo(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Rr(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new Lw(s,i);case"github.com":return new Mw(s,i);case"google.com":return new Fw(s,i);case"twitter.com":return new Uw(s,i,n.screenName||null);case"custom":case"anonymous":return new Rr(s,null);default:return new Rr(s,r,i)}}class Rr{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class wm extends Rr{constructor(e,t,r,i){super(e,t,r),this.username=i}}class Lw extends Rr{constructor(e,t){super(e,"facebook.com",t)}}class Mw extends wm{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class Fw extends Rr{constructor(e,t){super(e,"google.com",t)}}class Uw extends wm{constructor(e,t,r){super(e,"twitter.com",t,r)}}function Bw(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:Ow(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,t,r){this.type=e,this.credential=t,this.user=r}static _fromIdtoken(e,t){return new kn("enroll",e,t)}static _fromMfaPendingCredential(e){return new kn("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return kn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return kn._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=oe(e),i=t.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>_s._fromServerResponse(r,a));w(i.mfaPendingCredential,r,"internal-error");const o=kn._fromMfaPendingCredential(i.mfaPendingCredential);return new Nu(o,s,async a=>{const c=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:c.idToken,refreshToken:c.refreshToken});switch(t.operationType){case"signIn":const l=await Ye._fromIdTokenResponse(r,t.operationType,u);return await r._updateCurrentUser(l.user),l;case"reauthenticate":return w(t.user,r,"internal-error"),Ye._forOperation(t.user,t.operationType,u);default:Re(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function $w(n,e){var t;const r=C(n),i=e;return w(e.customData.operationType,r,"argument-error"),w((t=i.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),Nu._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qw(n,e){return he(n,"POST","/v2/accounts/mfaEnrollment:start",ue(n,e))}function Gw(n,e){return he(n,"POST","/v2/accounts/mfaEnrollment:finalize",ue(n,e))}function jw(n,e){return he(n,"POST","/v2/accounts/mfaEnrollment:withdraw",ue(n,e))}class xu{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>_s._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new xu(e)}async getSession(){return kn._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const r=e,i=await this.getSession(),s=await Pt(this.user,r._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Pt(this.user,jw(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==t),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const ec=new WeakMap;function zw(n){const e=C(n);return ec.has(e)||ec.set(e,xu._fromUser(e)),ec.get(e)}const bo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(bo,"1"),this.storage.removeItem(bo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kw(){const n=Z();return Su(n)||Qr(n)}const Ww=1e3,Hw=10;class Tm extends Em{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Kw()&&$v(),this.fallbackToPolling=im(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Bv()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Hw):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Ww)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Tm.type="LOCAL";const Ou=Tm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am extends Em{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Am.type="SESSION";const $n=Am;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qw(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new ta(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(t.origin,s)),c=await Qw(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ta.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=ys("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(){return window}function Jw(n){ce().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(){return typeof ce().WorkerGlobalScope<"u"&&typeof ce().importScripts=="function"}async function Xw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Zw(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function eE(){return Lu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm="firebaseLocalStorageDb",tE=1,Po="firebaseLocalStorage",bm="fbase_key";class Is{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function na(n,e){return n.transaction([Po],e?"readwrite":"readonly").objectStore(Po)}function nE(){const n=indexedDB.deleteDatabase(Rm);return new Is(n).toPromise()}function Tc(){const n=indexedDB.open(Rm,tE);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Po,{keyPath:bm})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Po)?e(r):(r.close(),await nE(),e(await Tc()))})})}async function Oh(n,e,t){const r=na(n,!0).put({[bm]:e,value:t});return new Is(r).toPromise()}async function rE(n,e){const t=na(n,!1).get(e),r=await new Is(t).toPromise();return r===void 0?null:r.value}function Lh(n,e){const t=na(n,!0).delete(e);return new Is(t).toPromise()}const iE=800,sE=3;class Pm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Tc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>sE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Lu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ta._getInstance(eE()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Xw(),!this.activeServiceWorker)return;this.sender=new Yw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Zw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Tc();return await Oh(e,bo,"1"),await Lh(e,bo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Oh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>rE(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Lh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=na(i,!1).getAll();return new Is(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),iE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pm.type="LOCAL";const Wi=Pm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oE(n,e){return he(n,"POST","/v2/accounts/mfaSignIn:start",ue(n,e))}function aE(n,e){return he(n,"POST","/v2/accounts/mfaSignIn:finalize",ue(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE=500,uE=6e4,Gs=1e12;class lE{constructor(e){this.auth=e,this.counter=Gs,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new hE(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||Gs;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||Gs;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||Gs;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class hE{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;w(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=dE(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},uE)},cE))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function dE(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc=cm("rcb"),fE=new ps(3e4,6e4),mE="https://www.google.com/recaptcha/api.js?";class pE{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=ce().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return w(gE(t),e,"argument-error"),this.shouldResolveImmediately(t)&&kh(ce().grecaptcha)?Promise.resolve(ce().grecaptcha):new Promise((r,i)=>{const s=ce().setTimeout(()=>{i(Te(e,"network-request-failed"))},fE.get());ce()[tc]=()=>{ce().clearTimeout(s),delete ce()[tc];const a=ce().grecaptcha;if(!a||!kh(a)){i(Te(e,"internal-error"));return}const c=a.render;a.render=(u,l)=>{const h=c(u,l);return this.counter++,h},this.hostLanguage=t,r(a)};const o=`${mE}?${Wr({onload:tc,render:"explicit",hl:t})}`;Cu(o).catch(()=>{clearTimeout(s),i(Te(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=ce().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function gE(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class _E{async load(e){return new lE(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm="recaptcha",yE={theme:"light",type:"image"};let IE=class{constructor(e,t,r=Object.assign({},yE)){this.parameters=r,this.type=Sm,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=oe(e),this.isInvisible=this.parameters.size==="invisible",w(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof t=="string"?document.getElementById(t):t;w(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new _E:new pE,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){w(!this.parameters.sitekey,this.auth,"argument-error"),w(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),w(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=ce()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){w(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){w(bu()&&!Lu(),this.auth,"internal-error"),await vE(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await qv(this.auth);w(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return w(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function vE(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Mn._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function wE(n,e,t){const r=oe(n),i=await ra(r,e,C(t));return new Mu(i,s=>ea(r,s))}async function EE(n,e,t){const r=C(n);await Zo(!1,r,"phone");const i=await ra(r.auth,e,C(t));return new Mu(i,s=>_m(r,s))}async function TE(n,e,t){const r=C(n),i=await ra(r.auth,e,C(t));return new Mu(i,s=>ym(r,s))}async function ra(n,e,t){var r;const i=await t.verify();try{w(typeof i=="string",n,"argument-error"),w(t.type===Sm,n,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return w(o.type==="enroll",n,"internal-error"),(await qw(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{w(o.type==="signin",n,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return w(a,n,"missing-multi-factor-info"),(await oE(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await sw(n,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{t._reset()}}async function AE(n,e){await ku(C(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qn=class oo{constructor(e){this.providerId=oo.PROVIDER_ID,this.auth=oe(e)}verifyPhoneNumber(e,t){return ra(this.auth,e,C(t))}static credential(e,t){return Mn._fromVerification(e,t)}static credentialFromResult(e){const t=e;return oo.credentialFromTaggedObject(t)}static credentialFromError(e){return oo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?Mn._fromTokenResponse(t,r):null}};qn.PROVIDER_ID="phone";qn.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(n,e){return e?Ge(e):(w(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu extends Yr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return bt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return bt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function RE(n){return gm(n.auth,new Fu(n),n.bypassAuthState)}function bE(n){const{auth:e,user:t}=n;return w(t,e,"internal-error"),pm(t,new Fu(n),n.bypassAuthState)}async function PE(n){const{auth:e,user:t}=n;return w(t,e,"internal-error"),ku(t,new Fu(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return RE;case"linkViaPopup":case"linkViaRedirect":return PE;case"reauthViaPopup":case"reauthViaRedirect":return bE;default:Re(this.auth,"internal-error")}}resolve(e){et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE=new ps(2e3,1e4);async function CE(n,e,t){const r=oe(n);Hr(n,e,Vt);const i=er(r,t);return new Et(r,"signInViaPopup",e,i).executeNotNull()}async function kE(n,e,t){const r=C(n);Hr(r.auth,e,Vt);const i=er(r.auth,t);return new Et(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function DE(n,e,t){const r=C(n);Hr(r.auth,e,Vt);const i=er(r.auth,t);return new Et(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Et extends Cm{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Et.currentPopupAction&&Et.currentPopupAction.cancel(),Et.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return w(e,this.auth,"internal-error"),e}async onExecution(){et(this.filter.length===1,"Popup operations only handle one event");const e=ys();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Te(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Te(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Et.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Te(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,SE.get())};e()}}Et.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE="pendingRedirect",Di=new Map;class NE extends Cm{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Di.get(this.auth._key());if(!e){try{const r=await xE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Di.set(this.auth._key(),e)}return this.bypassAuthState||Di.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xE(n,e){const t=Dm(e),r=km(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}async function Uu(n,e){return km(n)._set(Dm(e),"true")}function OE(){Di.clear()}function Bu(n,e){Di.set(n._key(),e)}function km(n){return Ge(n._redirectPersistence)}function Dm(n){return Ln(VE,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE(n,e,t){return ME(n,e,t)}async function ME(n,e,t){const r=oe(n);Hr(n,e,Vt),await r._initializationPromise;const i=er(r,t);return await Uu(i,r),i._openRedirect(r,e,"signInViaRedirect")}function FE(n,e,t){return UE(n,e,t)}async function UE(n,e,t){const r=C(n);Hr(r.auth,e,Vt),await r.auth._initializationPromise;const i=er(r.auth,t);await Uu(i,r.auth);const s=await Vm(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function BE(n,e,t){return $E(n,e,t)}async function $E(n,e,t){const r=C(n);Hr(r.auth,e,Vt),await r.auth._initializationPromise;const i=er(r.auth,t);await Zo(!1,r,e.providerId),await Uu(i,r.auth);const s=await Vm(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function qE(n,e){return await oe(n)._initializationPromise,ia(n,e,!1)}async function ia(n,e,t=!1){const r=oe(n),i=er(r,e),o=await new NE(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function Vm(n){const e=ys(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE=10*60*1e3;class Nm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!xm(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Te(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=GE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mh(e))}saveEventToCache(e){this.cachedEventUids.add(Mh(e)),this.lastProcessedEventTime=Date.now()}}function Mh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function xm({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jE(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xm(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Om(n,e={}){return he(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,KE=/^https?/;async function WE(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Om(n);for(const t of e)try{if(HE(t))return}catch{}Re(n,"unauthorized-domain")}function HE(n){const e=Gi(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!KE.test(t))return!1;if(zE.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE=new ps(3e4,6e4);function Fh(){const n=ce().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function YE(n){return new Promise((e,t)=>{var r,i,s;function o(){Fh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fh(),t(Te(n,"network-request-failed"))},timeout:QE.get()})}if(!((i=(r=ce().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ce().gapi)===null||s===void 0)&&s.load)o();else{const a=cm("iframefcb");return ce()[a]=()=>{gapi.load?o():t(Te(n,"network-request-failed"))},Cu(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw ao=null,e})}let ao=null;function JE(n){return ao=ao||YE(n),ao}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE=new ps(5e3,15e3),ZE="__/auth/iframe",eT="emulator/auth/iframe",tT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rT(n){const e=n.config;w(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Pu(e,eT):`https://${n.config.authDomain}/${ZE}`,r={apiKey:e.apiKey,appName:n.name,v:fn},i=nT.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Wr(r).slice(1)}`}async function iT(n){const e=await JE(n),t=ce().gapi;return w(t,n,"internal-error"),e.open({where:document.body,url:rT(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tT,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Te(n,"network-request-failed"),a=ce().setTimeout(()=>{s(o)},XE.get());function c(){ce().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},oT=500,aT=600,cT="_blank",uT="http://localhost";class Uh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lT(n,e,t,r=oT,i=aT){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},sT),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Z().toLowerCase();t&&(a=em(u)?cT:t),Zf(u)&&(e=e||uT,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[f,y])=>`${d}${f}=${y},`,"");if(Uv(u)&&a!=="_self")return hT(e||"",a),new Uh(null);const h=window.open(e||"",a,l);w(h,n,"popup-blocked");try{h.focus()}catch{}return new Uh(h)}function hT(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT="__/auth/handler",fT="emulator/auth/handler",mT=encodeURIComponent("fac");async function Ac(n,e,t,r,i,s){w(n.config.authDomain,n,"auth-domain-config-required"),w(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:fn,eventId:i};if(e instanceof Vt){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Yy(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,h]of Object.entries(s||{}))o[l]=h}if(e instanceof Jr){const l=e.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await n._getAppCheckToken(),u=c?`#${mT}=${encodeURIComponent(c)}`:"";return`${pT(n)}?${Wr(a).slice(1)}${u}`}function pT({config:n}){return n.emulator?Pu(n,fT):`https://${n.authDomain}/${dT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc="webStorageSupport";class gT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$n,this._completeRedirectFn=ia,this._overrideRedirectResult=Bu}async _openPopup(e,t,r,i){var s;et((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Ac(e,t,r,Gi(),i);return lT(e,o,ys())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Ac(e,t,r,Gi(),i);return Jw(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(et(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await iT(e),r=new Nm(e);return t.register("authEvent",i=>(w(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(nc,{type:nc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[nc];o!==void 0&&t(!!o),Re(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=WE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return im()||Su()||Qr()}}const _T=gT;class yT{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return ut("unexpected MultiFactorSessionType")}}}class $u extends yT{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new $u(e)}_finalizeEnroll(e,t,r){return Gw(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return aE(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Lm{constructor(){}static assertion(e){return $u._fromCredential(e)}}Lm.FACTOR_ID="phone";var Bh="@firebase/auth",$h="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vT(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function wT(n){Zt(new _t("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;w(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sm(n)},u=new Hv(r,i,s,c);return Qv(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Zt(new _t("auth-internal",e=>{const t=oe(e.getProvider("auth").getImmediate());return(r=>new IT(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),mt(Bh,$h,vT(n)),mt(Bh,$h,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET=5*60;By("authIdTokenMaxAge");wT("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT=2e3;async function AT(n,e,t){var r;const{BuildInfo:i}=Gn();et(e.sessionId,"AuthEvent did not contain a session ID");const s=await CT(e.sessionId),o={};return Qr()?o.ibi=i.packageName:gs()?o.apn=i.packageName:Re(n,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Ac(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function RT(n){const{BuildInfo:e}=Gn(),t={};Qr()?t.iosBundleId=e.packageName:gs()?t.androidPackageName=e.packageName:Re(n,"operation-not-supported-in-this-environment"),await Om(n,t)}function bT(n){const{cordova:e}=Gn();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(n):i=e.InAppBrowser.open(n,Fv()?"_blank":"_system","location=yes"),t(i)})})}async function PT(n,e,t){const{cordova:r}=Gn();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function u(){a||(a=window.setTimeout(()=>{o(Te(n,"redirect-cancelled-by-user"))},TT))}function l(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(c),document.addEventListener("resume",u,!1),gs()&&document.addEventListener("visibilitychange",l,!1),i=()=>{e.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{i()}}function ST(n){var e,t,r,i,s,o,a,c,u,l;const h=Gn();w(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),w(typeof((t=h==null?void 0:h.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),w(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),w(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),w(typeof((l=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||l===void 0?void 0:l.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function CT(n){const e=kT(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function kT(n){if(et(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT=20;class VT extends Nm{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function NT(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:LT(),postBody:null,tenantId:n.tenantId,error:Te(n,"no-auth-event")}}function xT(n,e){return Rc()._set(bc(n),e)}async function qh(n){const e=await Rc()._get(bc(n));return e&&await Rc()._remove(bc(n)),e}function OT(n,e){var t,r;const i=FT(e);if(i.includes("/__/auth/callback")){const s=co(i),o=s.firebaseError?MT(decodeURIComponent(s.firebaseError)):null,a=(r=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],c=a?Te(a):null;return c?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:i,postBody:null}}return null}function LT(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<DT;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function Rc(){return Ge(Ou)}function bc(n){return Ln("authEvent",n.config.apiKey,n.name)}function MT(n){try{return JSON.parse(n)}catch{return null}}function FT(n){const e=co(n),t=e.link?decodeURIComponent(e.link):void 0,r=co(t).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return co(i).link||i||r||t||n}function co(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return yr(t.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT=500;class BT{constructor(){this._redirectPersistence=$n,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=ia,this._overrideRedirectResult=Bu}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new VT(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Re(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,i){ST(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),OE(),await this._originValidation(e);const o=NT(e,r,i);await xT(e,o);const a=await AT(e,o,t),c=await bT(a);return PT(e,s,c)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=RT(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Gn(),o=setTimeout(async()=>{await qh(e),t.onEvent(Gh())},UT),a=async l=>{clearTimeout(o);const h=await qh(e);let d=null;h&&(l!=null&&l.url)&&(d=OT(h,l.url)),t.onEvent(d||Gh())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const c=i,u=`${s.packageName.toLowerCase()}://`;Gn().handleOpenURL=async l=>{if(l.toLowerCase().startsWith(u)&&a({url:l}),typeof c=="function")try{c(l)}catch(h){console.error(h)}}}}const $T=BT;function Gh(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Te("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qT(n,e){oe(n)._logFramework(e)}var GT="@firebase/auth-compat",jT="0.4.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT=1e3;function Vi(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function KT(){return Vi()==="http:"||Vi()==="https:"}function Mm(n=Z()){return!!((Vi()==="file:"||Vi()==="ionic:"||Vi()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function WT(){return vu()||Iu()}function HT(){return Vf()&&(document==null?void 0:document.documentMode)===11}function QT(n=Z()){return/Edge\/\d+/.test(n)}function YT(n=Z()){return HT()||QT(n)}function Fm(){try{const n=self.localStorage,e=ys();if(n)return n.setItem(e,"1"),n.removeItem(e),YT()?Bi():!0}catch{return qu()&&Bi()}return!1}function qu(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function rc(){return(KT()||Df()||Mm())&&!WT()&&Fm()&&!qu()}function Um(){return Mm()&&typeof document<"u"}async function JT(){return Um()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},zT);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function XT(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe={LOCAL:"local",NONE:"none",SESSION:"session"},hi=w,Bm="persistence";function ZT(n,e){if(hi(Object.values(qe).includes(e),n,"invalid-persistence-type"),vu()){hi(e!==qe.SESSION,n,"unsupported-persistence-type");return}if(Iu()){hi(e===qe.NONE,n,"unsupported-persistence-type");return}if(qu()){hi(e===qe.NONE||e===qe.LOCAL&&Bi(),n,"unsupported-persistence-type");return}hi(e===qe.NONE||Fm(),n,"unsupported-persistence-type")}async function Pc(n){await n._initializationPromise;const e=$m(),t=Ln(Bm,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function eA(n,e){const t=$m();if(!t)return[];const r=Ln(Bm,n,e);switch(t.getItem(r)){case qe.NONE:return[Dr];case qe.LOCAL:return[Wi,$n];case qe.SESSION:return[$n];default:return[]}}function $m(){var n;try{return((n=XT())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA=w;class Wt{constructor(){this.browserResolver=Ge(_T),this.cordovaResolver=Ge($T),this.underlyingResolver=null,this._redirectPersistence=$n,this._completeRedirectFn=ia,this._overrideRedirectResult=Bu}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,i)}async _openRedirect(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Um()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return tA(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await JT();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(n){return n.unwrap()}function nA(n){return n.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rA(n){return Gm(n)}function iA(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new sA(n,$w(n,e))}else if(r){const i=Gm(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function Gm(n){const{_tokenResponse:e}=n instanceof Ne?n.customData:n;if(!e)return null;if(!(n instanceof Ne)&&"temporaryProof"in e&&"phoneNumber"in e)return qn.credentialFromResult(n);const t=e.providerId;if(!t||t===li.PASSWORD)return null;let r;switch(t){case li.GOOGLE:r=st;break;case li.FACEBOOK:r=it;break;case li.GITHUB:r=ot;break;case li.TWITTER:r=at;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!s&&!o&&!i&&!a?null:a?t.startsWith("saml.")?Vr._create(t,a):yt._fromParams({providerId:t,signInMethod:t,pendingToken:a,idToken:i,accessToken:s}):new Tr(t).credential({idToken:i,accessToken:s,rawNonce:c})}return n instanceof Ne?r.credentialFromError(n):r.credentialFromResult(n)}function Le(n,e){return e.catch(t=>{throw t instanceof Ne&&iA(n,t),t}).then(t=>{const r=t.operationType,i=t.user;return{operationType:r,credential:rA(t),additionalUserInfo:Bw(t),user:sa.getOrCreate(i)}})}async function Sc(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>Le(n,t.confirm(r))}}class sA{constructor(e,t){this.resolver=t,this.auth=nA(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Le(qm(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sa=class Ti{constructor(e){this._delegate=e,this.multiFactor=zw(e)}static getOrCreate(e){return Ti.USER_MAP.has(e)||Ti.USER_MAP.set(e,new Ti(e)),Ti.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Le(this.auth,_m(this._delegate,e))}async linkWithPhoneNumber(e,t){return Sc(this.auth,EE(this._delegate,e,t))}async linkWithPopup(e){return Le(this.auth,DE(this._delegate,e,Wt))}async linkWithRedirect(e){return await Pc(oe(this.auth)),BE(this._delegate,e,Wt)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Le(this.auth,ym(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return Sc(this.auth,TE(this._delegate,e,t))}reauthenticateWithPopup(e){return Le(this.auth,kE(this._delegate,e,Wt))}async reauthenticateWithRedirect(e){return await Pc(oe(this.auth)),FE(this._delegate,e,Wt)}sendEmailVerification(e){return Cw(this._delegate,e)}async unlink(e){return await pw(this._delegate,e),this}updateEmail(e){return Nw(this._delegate,e)}updatePassword(e){return xw(this._delegate,e)}updatePhoneNumber(e){return AE(this._delegate,e)}updateProfile(e){return Vw(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return kw(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};sa.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di=w;class Cc{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;di(r,"invalid-api-key",{appName:e.name}),di(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Wt:void 0;this._delegate=t.initialize({options:{persistence:oA(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(Iv),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?sa.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){Yv(this._delegate,e,t)}applyActionCode(e){return vw(this._delegate,e)}checkActionCode(e){return Im(this._delegate,e)}confirmPasswordReset(e,t){return Iw(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Le(this._delegate,Ew(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return Sw(this._delegate,e)}isSignInWithEmailLink(e){return Rw(this._delegate,e)}async getRedirectResult(){di(rc(),this._delegate,"operation-not-supported-in-this-environment");const e=await qE(this._delegate,Wt);return e?Le(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){qT(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:i,error:s,complete:o}=jh(e,t,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,t,r){const{next:i,error:s,complete:o}=jh(e,t,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,t){return Aw(this._delegate,e,t)}sendPasswordResetEmail(e,t){return yw(this._delegate,e,t||void 0)}async setPersistence(e){ZT(this._delegate,e);let t;switch(e){case qe.SESSION:t=$n;break;case qe.LOCAL:t=await Ge(Wi)._isAvailable()?Wi:Ou;break;case qe.NONE:t=Dr;break;default:return Re("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Le(this._delegate,mw(this._delegate))}signInWithCredential(e){return Le(this._delegate,ea(this._delegate,e))}signInWithCustomToken(e){return Le(this._delegate,_w(this._delegate,e))}signInWithEmailAndPassword(e,t){return Le(this._delegate,Tw(this._delegate,e,t))}signInWithEmailLink(e,t){return Le(this._delegate,bw(this._delegate,e,t))}signInWithPhoneNumber(e,t){return Sc(this._delegate,wE(this._delegate,e,t))}async signInWithPopup(e){return di(rc(),this._delegate,"operation-not-supported-in-this-environment"),Le(this._delegate,CE(this._delegate,e,Wt))}async signInWithRedirect(e){return di(rc(),this._delegate,"operation-not-supported-in-this-environment"),await Pc(this._delegate),LE(this._delegate,e,Wt)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return ww(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Cc.Persistence=qe;function jh(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const i=r;return{next:o=>i(o&&sa.getOrCreate(o)),error:e,complete:t}}function oA(n,e){const t=eA(n,e);if(typeof self<"u"&&!t.includes(Wi)&&t.push(Wi),typeof window<"u")for(const r of[Ou,$n])t.includes(r)||t.push(r);return t.includes(Dr)||t.push(Dr),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(){this.providerId="phone",this._delegate=new qn(qm(Ce.auth()))}static credential(e,t){return qn.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}Gu.PHONE_SIGN_IN_METHOD=qn.PHONE_SIGN_IN_METHOD;Gu.PROVIDER_ID=qn.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA=w;class cA{constructor(e,t,r=Ce.app()){var i;aA((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new IE(r.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA="auth-compat";function lA(n){n.INTERNAL.registerComponent(new _t(uA,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Cc(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:ur.EMAIL_SIGNIN,PASSWORD_RESET:ur.PASSWORD_RESET,RECOVER_EMAIL:ur.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:ur.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:ur.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:ur.VERIFY_EMAIL}},EmailAuthProvider:mn,FacebookAuthProvider:it,GithubAuthProvider:ot,GoogleAuthProvider:st,OAuthProvider:Tr,SAMLAuthProvider:Ao,PhoneAuthProvider:Gu,PhoneMultiFactorGenerator:Lm,RecaptchaVerifier:cA,TwitterAuthProvider:at,Auth:Cc,AuthCredential:Yr,Error:Ne}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(GT,jT)}lA(Ce);var hA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},R,ju=ju||{},V=hA||self;function oa(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function vs(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function dA(n){return Object.prototype.hasOwnProperty.call(n,ic)&&n[ic]||(n[ic]=++fA)}var ic="closure_uid_"+(1e9*Math.random()>>>0),fA=0;function mA(n,e,t){return n.call.apply(n.bind,arguments)}function pA(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function Pe(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Pe=mA:Pe=pA,Pe.apply(null,arguments)}function js(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function ge(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function pn(){this.s=this.s,this.o=this.o}var gA=0;pn.prototype.s=!1;pn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),gA!=0)&&dA(this)};pn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const jm=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function zu(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function zh(n,e){for(let t=1;t<arguments.length;t++){const r=arguments[t];if(oa(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function Se(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}Se.prototype.h=function(){this.defaultPrevented=!0};var _A=function(){if(!V.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{V.addEventListener("test",()=>{},e),V.removeEventListener("test",()=>{},e)}catch{}return n}();function Hi(n){return/^[\s\xa0]*$/.test(n)}function aa(){var n=V.navigator;return n&&(n=n.userAgent)?n:""}function ct(n){return aa().indexOf(n)!=-1}function Ku(n){return Ku[" "](n),n}Ku[" "]=function(){};function yA(n,e){var t=lR;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:t[n]=e(n)}var IA=ct("Opera"),Nr=ct("Trident")||ct("MSIE"),zm=ct("Edge"),kc=zm||Nr,Km=ct("Gecko")&&!(aa().toLowerCase().indexOf("webkit")!=-1&&!ct("Edge"))&&!(ct("Trident")||ct("MSIE"))&&!ct("Edge"),vA=aa().toLowerCase().indexOf("webkit")!=-1&&!ct("Edge");function Wm(){var n=V.document;return n?n.documentMode:void 0}var Dc;e:{var sc="",oc=function(){var n=aa();if(Km)return/rv:([^\);]+)(\)|;)/.exec(n);if(zm)return/Edge\/([\d\.]+)/.exec(n);if(Nr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(vA)return/WebKit\/(\S+)/.exec(n);if(IA)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(oc&&(sc=oc?oc[1]:""),Nr){var ac=Wm();if(ac!=null&&ac>parseFloat(sc)){Dc=String(ac);break e}}Dc=sc}var Vc;if(V.document&&Nr){var Kh=Wm();Vc=Kh||parseInt(Dc,10)||void 0}else Vc=void 0;var wA=Vc;function Qi(n,e){if(Se.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Km){e:{try{Ku(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:EA[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Qi.$.h.call(this)}}ge(Qi,Se);var EA={2:"touch",3:"pen",4:"mouse"};Qi.prototype.h=function(){Qi.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var ws="closure_listenable_"+(1e6*Math.random()|0),TA=0;function AA(n,e,t,r,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.la=i,this.key=++TA,this.fa=this.ia=!1}function ca(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function Wu(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function RA(n,e){for(const t in n)e.call(void 0,n[t],t,n)}function Hm(n){const e={};for(const t in n)e[t]=n[t];return e}const Wh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Qm(n,e){let t,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(t in r)n[t]=r[t];for(let s=0;s<Wh.length;s++)t=Wh[s],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function ua(n){this.src=n,this.g={},this.h=0}ua.prototype.add=function(n,e,t,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=xc(n,e,r,i);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new AA(e,this.src,s,!!r,i),e.ia=t,n.push(e)),e};function Nc(n,e){var t=e.type;if(t in n.g){var r=n.g[t],i=jm(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(ca(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function xc(n,e,t,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==e&&s.capture==!!t&&s.la==r)return i}return-1}var Hu="closure_lm_"+(1e6*Math.random()|0),cc={};function Ym(n,e,t,r,i){if(r&&r.once)return Xm(n,e,t,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Ym(n,e[s],t,r,i);return null}return t=Ju(t),n&&n[ws]?n.O(e,t,vs(r)?!!r.capture:!!r,i):Jm(n,e,t,!1,r,i)}function Jm(n,e,t,r,i,s){if(!e)throw Error("Invalid event type");var o=vs(i)?!!i.capture:!!i,a=Yu(n);if(a||(n[Hu]=a=new ua(n)),t=a.add(e,t,r,o,s),t.proxy)return t;if(r=bA(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)_A||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),r,i);else if(n.attachEvent)n.attachEvent(ep(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function bA(){function n(t){return e.call(n.src,n.listener,t)}const e=PA;return n}function Xm(n,e,t,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Xm(n,e[s],t,r,i);return null}return t=Ju(t),n&&n[ws]?n.P(e,t,vs(r)?!!r.capture:!!r,i):Jm(n,e,t,!0,r,i)}function Zm(n,e,t,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Zm(n,e[s],t,r,i);else r=vs(r)?!!r.capture:!!r,t=Ju(t),n&&n[ws]?(n=n.i,e=String(e).toString(),e in n.g&&(s=n.g[e],t=xc(s,t,r,i),-1<t&&(ca(s[t]),Array.prototype.splice.call(s,t,1),s.length==0&&(delete n.g[e],n.h--)))):n&&(n=Yu(n))&&(e=n.g[e.toString()],n=-1,e&&(n=xc(e,t,r,i)),(t=-1<n?e[n]:null)&&Qu(t))}function Qu(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[ws])Nc(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(ep(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=Yu(e))?(Nc(t,n),t.h==0&&(t.src=null,e[Hu]=null)):ca(n)}}}function ep(n){return n in cc?cc[n]:cc[n]="on"+n}function PA(n,e){if(n.fa)n=!0;else{e=new Qi(e,this);var t=n.listener,r=n.la||n.src;n.ia&&Qu(n),n=t.call(r,e)}return n}function Yu(n){return n=n[Hu],n instanceof ua?n:null}var uc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ju(n){return typeof n=="function"?n:(n[uc]||(n[uc]=function(e){return n.handleEvent(e)}),n[uc])}function pe(){pn.call(this),this.i=new ua(this),this.S=this,this.J=null}ge(pe,pn);pe.prototype[ws]=!0;pe.prototype.removeEventListener=function(n,e,t,r){Zm(this,n,e,t,r)};function Ae(n,e){var t,r=n.J;if(r)for(t=[];r;r=r.J)t.push(r);if(n=n.S,r=e.type||e,typeof e=="string")e=new Se(e,n);else if(e instanceof Se)e.target=e.target||n;else{var i=e;e=new Se(r,n),Qm(e,i)}if(i=!0,t)for(var s=t.length-1;0<=s;s--){var o=e.g=t[s];i=zs(o,r,!0,e)&&i}if(o=e.g=n,i=zs(o,r,!0,e)&&i,i=zs(o,r,!1,e)&&i,t)for(s=0;s<t.length;s++)o=e.g=t[s],i=zs(o,r,!1,e)&&i}pe.prototype.N=function(){if(pe.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)ca(t[r]);delete n.g[e],n.h--}}this.J=null};pe.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};pe.prototype.P=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function zs(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==t){var a=o.listener,c=o.la||o.src;o.ia&&Nc(n.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var Xu=V.JSON.stringify;class SA{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function CA(){var n=Zu;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class kA{constructor(){this.h=this.g=null}add(e,t){const r=tp.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var tp=new SA(()=>new DA,n=>n.reset());class DA{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function VA(n){var e=1;n=n.split(":");const t=[];for(;0<e&&n.length;)t.push(n.shift()),e--;return n.length&&t.push(n.join(":")),t}function NA(n){V.setTimeout(()=>{throw n},0)}let Yi,Ji=!1,Zu=new kA,np=()=>{const n=V.Promise.resolve(void 0);Yi=()=>{n.then(xA)}};var xA=()=>{for(var n;n=CA();){try{n.h.call(n.g)}catch(t){NA(t)}var e=tp;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}Ji=!1};function la(n,e){pe.call(this),this.h=n||1,this.g=e||V,this.j=Pe(this.qb,this),this.l=Date.now()}ge(la,pe);R=la.prototype;R.ga=!1;R.T=null;R.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ae(this,"tick"),this.ga&&(el(this),this.start()))}};R.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function el(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}R.N=function(){la.$.N.call(this),el(this),delete this.g};function tl(n,e,t){if(typeof n=="function")t&&(n=Pe(n,t));else if(n&&typeof n.handleEvent=="function")n=Pe(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:V.setTimeout(n,e||0)}function rp(n){n.g=tl(()=>{n.g=null,n.i&&(n.i=!1,rp(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class OA extends pn{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:rp(this)}N(){super.N(),this.g&&(V.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xi(n){pn.call(this),this.h=n,this.g={}}ge(Xi,pn);var Hh=[];function ip(n,e,t,r){Array.isArray(t)||(t&&(Hh[0]=t.toString()),t=Hh);for(var i=0;i<t.length;i++){var s=Ym(e,t[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function sp(n){Wu(n.g,function(e,t){this.g.hasOwnProperty(t)&&Qu(e)},n),n.g={}}Xi.prototype.N=function(){Xi.$.N.call(this),sp(this)};Xi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ha(){this.g=!0}ha.prototype.Ea=function(){this.g=!1};function LA(n,e,t,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function MA(n,e,t,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+t+`
`+s+" "+o})}function Ir(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+UA(n,t)+(r?" "+r:"")})}function FA(n,e){n.info(function(){return"TIMEOUT: "+e})}ha.prototype.info=function(){};function UA(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Xu(t)}catch{return e}}var tr={},Qh=null;function da(){return Qh=Qh||new pe}tr.Ta="serverreachability";function op(n){Se.call(this,tr.Ta,n)}ge(op,Se);function Zi(n){const e=da();Ae(e,new op(e))}tr.STAT_EVENT="statevent";function ap(n,e){Se.call(this,tr.STAT_EVENT,n),this.stat=e}ge(ap,Se);function Ve(n){const e=da();Ae(e,new ap(e,n))}tr.Ua="timingevent";function cp(n,e){Se.call(this,tr.Ua,n),this.size=e}ge(cp,Se);function Es(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return V.setTimeout(function(){n()},e)}var fa={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},up={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function nl(){}nl.prototype.h=null;function Yh(n){return n.h||(n.h=n.i())}function lp(){}var Ts={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function rl(){Se.call(this,"d")}ge(rl,Se);function il(){Se.call(this,"c")}ge(il,Se);var Oc;function ma(){}ge(ma,nl);ma.prototype.g=function(){return new XMLHttpRequest};ma.prototype.i=function(){return{}};Oc=new ma;function As(n,e,t,r){this.l=n,this.j=e,this.m=t,this.W=r||1,this.U=new Xi(this),this.P=BA,n=kc?125:void 0,this.V=new la(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new hp}function hp(){this.i=null,this.g="",this.h=!1}var BA=45e3,Lc={},So={};R=As.prototype;R.setTimeout=function(n){this.P=n};function Mc(n,e,t){n.L=1,n.v=ga(St(e)),n.s=t,n.S=!0,dp(n,null)}function dp(n,e){n.G=Date.now(),Rs(n),n.A=St(n.v);var t=n.A,r=n.W;Array.isArray(r)||(r=[String(r)]),vp(t.i,"t",r),n.C=0,t=n.l.J,n.h=new hp,n.g=$p(n.l,t?e:null,!n.s),0<n.O&&(n.M=new OA(Pe(n.Pa,n,n.g),n.O)),ip(n.U,n.g,"readystatechange",n.nb),e=n.I?Hm(n.I):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,e)):(n.u="GET",n.g.ha(n.A,n.u,null,e)),Zi(),LA(n.j,n.u,n.A,n.m,n.W,n.s)}R.nb=function(n){n=n.target;const e=this.M;e&&lt(n)==3?e.l():this.Pa(n)};R.Pa=function(n){try{if(n==this.g)e:{const l=lt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||kc||this.g&&(this.h.h||this.g.ja()||ed(this.g)))){this.J||l!=4||e==7||(e==8||0>=h?Zi(3):Zi(2)),pa(this);var t=this.g.da();this.ca=t;t:if(fp(this)){var r=ed(this.g);n="";var i=r.length,s=lt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Dn(this),Ni(this);var o="";break t}this.h.i=new V.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,MA(this.j,this.u,this.A,this.m,this.W,l,t),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Hi(a)){var u=a;break t}}u=null}if(t=u)Ir(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fc(this,t);else{this.i=!1,this.o=3,Ve(12),Dn(this),Ni(this);break e}}this.S?(mp(this,l,o),kc&&this.i&&l==3&&(ip(this.U,this.V,"tick",this.mb),this.V.start())):(Ir(this.j,this.m,o,null),Fc(this,o)),l==4&&Dn(this),this.i&&!this.J&&(l==4?Mp(this.l,this):(this.i=!1,Rs(this)))}else aR(this.g),t==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ve(12)):(this.o=0,Ve(13)),Dn(this),Ni(this)}}}catch{}finally{}};function fp(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function mp(n,e,t){let r=!0,i;for(;!n.J&&n.C<t.length;)if(i=$A(n,t),i==So){e==4&&(n.o=4,Ve(14),r=!1),Ir(n.j,n.m,null,"[Incomplete Response]");break}else if(i==Lc){n.o=4,Ve(15),Ir(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else Ir(n.j,n.m,i,null),Fc(n,i);fp(n)&&i!=So&&i!=Lc&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,Ve(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.ba&&(n.ba=!0,e=n.l,e.g==n&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),ll(e),e.M=!0,Ve(11))):(Ir(n.j,n.m,t,"[Invalid Chunked Response]"),Dn(n),Ni(n))}R.mb=function(){if(this.g){var n=lt(this.g),e=this.g.ja();this.C<e.length&&(pa(this),mp(this,n,e),this.i&&n!=4&&Rs(this))}};function $A(n,e){var t=n.C,r=e.indexOf(`
`,t);return r==-1?So:(t=Number(e.substring(t,r)),isNaN(t)?Lc:(r+=1,r+t>e.length?So:(e=e.slice(r,r+t),n.C=r+t,e)))}R.cancel=function(){this.J=!0,Dn(this)};function Rs(n){n.Y=Date.now()+n.P,pp(n,n.P)}function pp(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Es(Pe(n.lb,n),e)}function pa(n){n.B&&(V.clearTimeout(n.B),n.B=null)}R.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(FA(this.j,this.A),this.L!=2&&(Zi(),Ve(17)),Dn(this),this.o=2,Ni(this)):pp(this,this.Y-n)};function Ni(n){n.l.H==0||n.J||Mp(n.l,n)}function Dn(n){pa(n);var e=n.M;e&&typeof e.sa=="function"&&e.sa(),n.M=null,el(n.V),sp(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.sa())}function Fc(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||Uc(t.i,n))){if(!n.K&&Uc(t.i,n)&&t.H==3){try{var r=t.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)Do(t),Ia(t);else break e;ul(t),Ve(18)}}else t.Fa=i[1],0<t.Fa-t.V&&37500>i[2]&&t.G&&t.A==0&&!t.v&&(t.v=Es(Pe(t.ib,t),6e3));if(1>=Tp(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else Vn(t,11)}else if((n.K||t.g==n)&&Do(t),!Hi(e))for(i=t.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(t.V=u[0],u=u[1],t.H==2)if(u[0]=="c"){t.K=u[1],t.pa=u[2];const l=u[3];l!=null&&(t.ra=l,t.l.info("VER="+t.ra));const h=u[4];h!=null&&(t.Ga=h,t.l.info("SVER="+t.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,t.L=r,t.l.info("backChannelRequestTimeoutMs_="+r)),r=t;const f=n.g;if(f){const y=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(sl(s,s.h),s.h=null))}if(r.F){const _=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,W(r.I,r.F,_))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-n.G,t.l.info("Handshake RTT: "+t.S+"ms")),r=t;var o=n;if(r.wa=Bp(r,r.J?r.pa:null,r.Y),o.K){Ap(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(pa(a),Rs(a)),r.g=o}else Op(r);0<t.j.length&&va(t)}else u[0]!="stop"&&u[0]!="close"||Vn(t,7);else t.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Vn(t,7):cl(t):u[0]!="noop"&&t.h&&t.h.Aa(u),t.A=0)}}Zi(4)}catch{}}function qA(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(oa(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function GA(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(oa(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const r in n)e[t++]=r;return e}}}function gp(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(oa(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=GA(n),r=qA(n),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],t&&t[s],n)}var _p=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jA(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),i=null;if(0<=r){var s=n[t].substring(0,r);i=n[t].substring(r+1)}else s=n[t];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Fn(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof Fn){this.h=n.h,Co(this,n.j),this.s=n.s,this.g=n.g,ko(this,n.m),this.l=n.l;var e=n.i,t=new es;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),Jh(this,t),this.o=n.o}else n&&(e=String(n).match(_p))?(this.h=!1,Co(this,e[1]||"",!0),this.s=Ai(e[2]||""),this.g=Ai(e[3]||"",!0),ko(this,e[4]),this.l=Ai(e[5]||"",!0),Jh(this,e[6]||"",!0),this.o=Ai(e[7]||"")):(this.h=!1,this.i=new es(null,this.h))}Fn.prototype.toString=function(){var n=[],e=this.j;e&&n.push(Ri(e,Xh,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(Ri(e,Xh,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(Ri(t,t.charAt(0)=="/"?WA:KA,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",Ri(t,QA)),n.join("")};function St(n){return new Fn(n)}function Co(n,e,t){n.j=t?Ai(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function ko(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function Jh(n,e,t){e instanceof es?(n.i=e,YA(n.i,n.h)):(t||(e=Ri(e,HA)),n.i=new es(e,n.h))}function W(n,e,t){n.i.set(e,t)}function ga(n){return W(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Ai(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Ri(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,zA),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function zA(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Xh=/[#\/\?@]/g,KA=/[#\?:]/g,WA=/[#\?]/g,HA=/[#\?@]/g,QA=/#/g;function es(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function gn(n){n.g||(n.g=new Map,n.h=0,n.i&&jA(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}R=es.prototype;R.add=function(n,e){gn(this),this.i=null,n=Xr(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function yp(n,e){gn(n),e=Xr(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function Ip(n,e){return gn(n),e=Xr(n,e),n.g.has(e)}R.forEach=function(n,e){gn(this),this.g.forEach(function(t,r){t.forEach(function(i){n.call(e,i,r,this)},this)},this)};R.ta=function(){gn(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let r=0;r<e.length;r++){const i=n[r];for(let s=0;s<i.length;s++)t.push(e[r])}return t};R.Z=function(n){gn(this);let e=[];if(typeof n=="string")Ip(this,n)&&(e=e.concat(this.g.get(Xr(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};R.set=function(n,e){return gn(this),this.i=null,n=Xr(this,n),Ip(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};R.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function vp(n,e,t){yp(n,e),0<t.length&&(n.i=null,n.g.set(Xr(n,e),zu(t)),n.h+=t.length)}R.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var r=e[t];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function Xr(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function YA(n,e){e&&!n.j&&(gn(n),n.i=null,n.g.forEach(function(t,r){var i=r.toLowerCase();r!=i&&(yp(this,r),vp(this,i,t))},n)),n.j=e}var JA=class{constructor(n,e){this.g=n,this.map=e}};function wp(n){this.l=n||XA,V.PerformanceNavigationTiming?(n=V.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(V.g&&V.g.Ka&&V.g.Ka()&&V.g.Ka().ec),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var XA=10;function Ep(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Tp(n){return n.h?1:n.g?n.g.size:0}function Uc(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function sl(n,e){n.g?n.g.add(e):n.h=e}function Ap(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}wp.prototype.cancel=function(){if(this.i=Rp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Rp(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return zu(n.i)}var ZA=class{stringify(n){return V.JSON.stringify(n,void 0)}parse(n){return V.JSON.parse(n,void 0)}};function eR(){this.g=new ZA}function tR(n,e,t){const r=t||"";try{gp(n,function(i,s){let o=i;vs(i)&&(o=Xu(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function nR(n,e){const t=new ha;if(V.Image){const r=new Image;r.onload=js(Ks,t,r,"TestLoadImage: loaded",!0,e),r.onerror=js(Ks,t,r,"TestLoadImage: error",!1,e),r.onabort=js(Ks,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=js(Ks,t,r,"TestLoadImage: timeout",!1,e),V.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function Ks(n,e,t,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function bs(n){this.l=n.fc||null,this.j=n.ob||!1}ge(bs,nl);bs.prototype.g=function(){return new _a(this.l,this.j)};bs.prototype.i=function(n){return function(){return n}}({});function _a(n,e){pe.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=ol,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ge(_a,pe);var ol=0;R=_a.prototype;R.open=function(n,e){if(this.readyState!=ol)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,ts(this)};R.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||V).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};R.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ps(this)),this.readyState=ol};R.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,ts(this)),this.g&&(this.readyState=3,ts(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof V.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;bp(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function bp(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}R.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Ps(this):ts(this),this.readyState==3&&bp(this)}};R.Za=function(n){this.g&&(this.response=this.responseText=n,Ps(this))};R.Ya=function(n){this.g&&(this.response=n,Ps(this))};R.ka=function(){this.g&&Ps(this)};function Ps(n){n.readyState=4,n.l=null,n.j=null,n.A=null,ts(n)}R.setRequestHeader=function(n,e){this.v.append(n,e)};R.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};R.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function ts(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(_a.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var rR=V.JSON.parse;function te(n){pe.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Pp,this.L=this.M=!1}ge(te,pe);var Pp="",iR=/^https?$/i,sR=["POST","PUT"];R=te.prototype;R.Oa=function(n){this.M=n};R.ha=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Oc.g(),this.C=this.u?Yh(this.u):Yh(Oc),this.g.onreadystatechange=Pe(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(s){Zh(this,s);return}if(n=t||"",t=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)t.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())t.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(t.keys()).find(s=>s.toLowerCase()=="content-type"),i=V.FormData&&n instanceof V.FormData,!(0<=jm(sR,e))||r||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of t)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{kp(this),0<this.B&&((this.L=oR(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Pe(this.ua,this)):this.A=tl(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){Zh(this,s)}};function oR(n){return Nr&&typeof n.timeout=="number"&&n.ontimeout!==void 0}R.ua=function(){typeof ju<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ae(this,"timeout"),this.abort(8))};function Zh(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,Sp(n),ya(n)}function Sp(n){n.F||(n.F=!0,Ae(n,"complete"),Ae(n,"error"))}R.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,Ae(this,"complete"),Ae(this,"abort"),ya(this))};R.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ya(this,!0)),te.$.N.call(this)};R.La=function(){this.s||(this.G||this.v||this.l?Cp(this):this.kb())};R.kb=function(){Cp(this)};function Cp(n){if(n.h&&typeof ju<"u"&&(!n.C[1]||lt(n)!=4||n.da()!=2)){if(n.v&&lt(n)==4)tl(n.La,0,n);else if(Ae(n,"readystatechange"),lt(n)==4){n.h=!1;try{const o=n.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=o===0){var i=String(n.I).match(_p)[1]||null;!i&&V.self&&V.self.location&&(i=V.self.location.protocol.slice(0,-1)),r=!iR.test(i?i.toLowerCase():"")}t=r}if(t)Ae(n,"complete"),Ae(n,"success");else{n.m=6;try{var s=2<lt(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",Sp(n)}}finally{ya(n)}}}}function ya(n,e){if(n.g){kp(n);const t=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,e||Ae(n,"ready");try{t.onreadystatechange=r}catch{}}}function kp(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(V.clearTimeout(n.A),n.A=null)}R.isActive=function(){return!!this.g};function lt(n){return n.g?n.g.readyState:0}R.da=function(){try{return 2<lt(this)?this.g.status:-1}catch{return-1}};R.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};R.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),rR(e)}};function ed(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case Pp:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function aR(n){const e={};n=(n.g&&2<=lt(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(Hi(n[r]))continue;var t=VA(n[r]);const i=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const s=e[i]||[];e[i]=s,s.push(t)}RA(e,function(r){return r.join(", ")})}R.Ia=function(){return this.m};R.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Dp(n){let e="";return Wu(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function al(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=Dp(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):W(n,e,t))}function fi(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Vp(n){this.Ga=0,this.j=[],this.l=new ha,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=fi("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=fi("baseRetryDelayMs",5e3,n),this.hb=fi("retryDelaySeedMs",1e4,n),this.eb=fi("forwardChannelMaxRetries",2,n),this.xa=fi("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.dc||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new wp(n&&n.concurrentRequestLimit),this.Ja=new eR,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}R=Vp.prototype;R.ra=8;R.H=1;function cl(n){if(Np(n),n.H==3){var e=n.W++,t=St(n.I);if(W(t,"SID",n.K),W(t,"RID",e),W(t,"TYPE","terminate"),Ss(n,t),e=new As(n,n.l,e),e.L=2,e.v=ga(St(t)),t=!1,V.navigator&&V.navigator.sendBeacon)try{t=V.navigator.sendBeacon(e.v.toString(),"")}catch{}!t&&V.Image&&(new Image().src=e.v,t=!0),t||(e.g=$p(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Rs(e)}Up(n)}function Ia(n){n.g&&(ll(n),n.g.cancel(),n.g=null)}function Np(n){Ia(n),n.u&&(V.clearTimeout(n.u),n.u=null),Do(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&V.clearTimeout(n.m),n.m=null)}function va(n){if(!Ep(n.i)&&!n.m){n.m=!0;var e=n.Na;Yi||np(),Ji||(Yi(),Ji=!0),Zu.add(e,n),n.C=0}}function cR(n,e){return Tp(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=e.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=Es(Pe(n.Na,n,e),Fp(n,n.C)),n.C++,!0)}R.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new As(this,this.l,n);let s=this.s;if(this.U&&(s?(s=Hm(s),Qm(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){t:{var r=this.j[t];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=xp(this,i,e),t=St(this.I),W(t,"RID",n),W(t,"CVER",22),this.F&&W(t,"X-HTTP-Session-Id",this.F),Ss(this,t),s&&(this.O?e="headers="+encodeURIComponent(String(Dp(s)))+"&"+e:this.o&&al(t,this.o,s)),sl(this.i,i),this.bb&&W(t,"TYPE","init"),this.P?(W(t,"$req",e),W(t,"SID","null"),i.aa=!0,Mc(i,t,null)):Mc(i,t,e),this.H=2}}else this.H==3&&(n?td(this,n):this.j.length==0||Ep(this.i)||td(this))};function td(n,e){var t;e?t=e.m:t=n.W++;const r=St(n.I);W(r,"SID",n.K),W(r,"RID",t),W(r,"AID",n.V),Ss(n,r),n.o&&n.s&&al(r,n.o,n.s),t=new As(n,n.l,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.j=e.F.concat(n.j)),e=xp(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),sl(n.i,t),Mc(t,r,e)}function Ss(n,e){n.na&&Wu(n.na,function(t,r){W(e,r,t)}),n.h&&gp({},function(t,r){W(e,r,t)})}function xp(n,e,t){t=Math.min(n.j.length,t);var r=n.h?Pe(n.h.Va,n.h,n):null;e:{var i=n.j;let s=-1;for(;;){const o=["count="+t];s==-1?0<t?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<t;c++){let u=i[c].g;const l=i[c].map;if(u-=s,0>u)s=Math.max(0,i[c].g-100),a=!1;else try{tR(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return n=n.j.splice(0,t),e.F=n,r}function Op(n){if(!n.g&&!n.u){n.ba=1;var e=n.Ma;Yi||np(),Ji||(Yi(),Ji=!0),Zu.add(e,n),n.A=0}}function ul(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=Es(Pe(n.Ma,n),Fp(n,n.A)),n.A++,!0)}R.Ma=function(){if(this.u=null,Lp(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=Es(Pe(this.jb,this),n)}};R.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ve(10),Ia(this),Lp(this))};function ll(n){n.B!=null&&(V.clearTimeout(n.B),n.B=null)}function Lp(n){n.g=new As(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=St(n.wa);W(e,"RID","rpc"),W(e,"SID",n.K),W(e,"AID",n.V),W(e,"CI",n.G?"0":"1"),!n.G&&n.qa&&W(e,"TO",n.qa),W(e,"TYPE","xmlhttp"),Ss(n,e),n.o&&n.s&&al(e,n.o,n.s),n.L&&n.g.setTimeout(n.L);var t=n.g;n=n.pa,t.L=1,t.v=ga(St(e)),t.s=null,t.S=!0,dp(t,n)}R.ib=function(){this.v!=null&&(this.v=null,Ia(this),ul(this),Ve(19))};function Do(n){n.v!=null&&(V.clearTimeout(n.v),n.v=null)}function Mp(n,e){var t=null;if(n.g==e){Do(n),ll(n),n.g=null;var r=2}else if(Uc(n.i,e))t=e.F,Ap(n.i,e),r=1;else return;if(n.H!=0){if(e.i)if(r==1){t=e.s?e.s.length:0,e=Date.now()-e.G;var i=n.C;r=da(),Ae(r,new cp(r,t)),va(n)}else Op(n);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&cR(n,e)||r==2&&ul(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),i){case 1:Vn(n,5);break;case 4:Vn(n,10);break;case 3:Vn(n,6);break;default:Vn(n,2)}}}function Fp(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(t*=2),t*e}function Vn(n,e){if(n.l.info("Error code "+e),e==2){var t=null;n.h&&(t=null);var r=Pe(n.pb,n);t||(t=new Fn("//www.google.com/images/cleardot.gif"),V.location&&V.location.protocol=="http"||Co(t,"https"),ga(t)),nR(t.toString(),r)}else Ve(2);n.H=0,n.h&&n.h.za(e),Up(n),Np(n)}R.pb=function(n){n?(this.l.info("Successfully pinged google.com"),Ve(2)):(this.l.info("Failed to ping google.com"),Ve(1))};function Up(n){if(n.H=0,n.ma=[],n.h){const e=Rp(n.i);(e.length!=0||n.j.length!=0)&&(zh(n.ma,e),zh(n.ma,n.j),n.i.i.length=0,zu(n.j),n.j.length=0),n.h.ya()}}function Bp(n,e,t){var r=t instanceof Fn?St(t):new Fn(t);if(r.g!="")e&&(r.g=e+"."+r.g),ko(r,r.m);else{var i=V.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Fn(null);r&&Co(s,r),e&&(s.g=e),i&&ko(s,i),t&&(s.l=t),r=s}return t=n.F,e=n.Da,t&&e&&W(r,t,e),W(r,"VER",n.ra),Ss(n,r),r}function $p(n,e,t){if(e&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ha&&!n.va?new te(new bs({ob:!0})):new te(n.va),e.Oa(n.J),e}R.isActive=function(){return!!this.h&&this.h.isActive(this)};function qp(){}R=qp.prototype;R.Ba=function(){};R.Aa=function(){};R.za=function(){};R.ya=function(){};R.isActive=function(){return!0};R.Va=function(){};function Vo(){if(Nr&&!(10<=Number(wA)))throw Error("Environmental error: no available transport.")}Vo.prototype.g=function(n,e){return new ze(n,e)};function ze(n,e){pe.call(this),this.g=new Vp(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!Hi(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Hi(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Zr(this)}ge(ze,pe);ze.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,e=this.l,t=this.h||void 0;Ve(0),n.Y=e,n.na=t||{},n.G=n.aa,n.I=Bp(n,null,n.Y),va(n)};ze.prototype.close=function(){cl(this.g)};ze.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=Xu(n),n=t);e.j.push(new JA(e.fb++,n)),e.H==3&&va(e)};ze.prototype.N=function(){this.g.h=null,delete this.j,cl(this.g),delete this.g,ze.$.N.call(this)};function Gp(n){rl.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}ge(Gp,rl);function jp(){il.call(this),this.status=1}ge(jp,il);function Zr(n){this.g=n}ge(Zr,qp);Zr.prototype.Ba=function(){Ae(this.g,"a")};Zr.prototype.Aa=function(n){Ae(this.g,new Gp(n))};Zr.prototype.za=function(n){Ae(this.g,new jp)};Zr.prototype.ya=function(){Ae(this.g,"b")};function uR(){this.blockSize=-1}function tt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ge(tt,uR);tt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function lc(n,e,t){t||(t=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(i=0;16>i;++i)r[i]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],i=n.g[2];var s=n.g[3],o=e+(s^t&(i^s))+r[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[3]+3250441966&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[7]+4249261313&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[11]+2304563134&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[15]+1236535329&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(t^i))+r[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[0]+3921069994&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[4]+3889429448&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[8]+1163531501&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[12]+2368359562&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(t^i^s)+r[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[14]+4259657740&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[10]+3200236656&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[6]+76029189&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[2]+3299628645&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(i^(t|~s))+r[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[5]+4237533241&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[1]+2240044497&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[13]+1309151649&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}tt.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=t;)lc(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<e;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){lc(this,r),i=0;break}}else for(;s<e;)if(r[i++]=n[s++],i==this.blockSize){lc(this,r),i=0;break}}this.h=i,this.i+=e};tt.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var r=0;32>r;r+=8)n[t++]=this.g[e]>>>r&255;return n};function j(n,e){this.h=e;for(var t=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==e||(t[i]=s,r=!1)}this.g=t}var lR={};function hl(n){return-128<=n&&128>n?yA(n,function(e){return new j([e|0],0>e?-1:0)}):new j([n|0],0>n?-1:0)}function ht(n){if(isNaN(n)||!isFinite(n))return br;if(0>n)return we(ht(-n));for(var e=[],t=1,r=0;n>=t;r++)e[r]=n/t|0,t*=Bc;return new j(e,0)}function zp(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return we(zp(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=ht(Math.pow(e,8)),r=br,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),e);8>s?(s=ht(Math.pow(e,s)),r=r.R(s).add(ht(o))):(r=r.R(t),r=r.add(ht(o)))}return r}var Bc=4294967296,br=hl(0),$c=hl(1),nd=hl(16777216);R=j.prototype;R.ea=function(){if(We(this))return-we(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var r=this.D(t);n+=(0<=r?r:Bc+r)*e,e*=Bc}return n};R.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(Tt(this))return"0";if(We(this))return"-"+we(this).toString(n);for(var e=ht(Math.pow(n,6)),t=this,r="";;){var i=xo(t,e).g;t=No(t,i.R(e));var s=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=i,Tt(t))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};R.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function Tt(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function We(n){return n.h==-1}R.X=function(n){return n=No(this,n),We(n)?-1:Tt(n)?0:1};function we(n){for(var e=n.g.length,t=[],r=0;r<e;r++)t[r]=~n.g[r];return new j(t,~n.h).add($c)}R.abs=function(){return We(this)?we(this):this};R.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,t[i]=o<<16|s}return new j(t,t[t.length-1]&-2147483648?-1:0)};function No(n,e){return n.add(we(e))}R.R=function(n){if(Tt(this)||Tt(n))return br;if(We(this))return We(n)?we(this).R(we(n)):we(we(this).R(n));if(We(n))return we(this.R(we(n)));if(0>this.X(nd)&&0>n.X(nd))return ht(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],r=0;r<2*e;r++)t[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,c=n.D(i)&65535;t[2*r+2*i]+=o*c,Ws(t,2*r+2*i),t[2*r+2*i+1]+=s*c,Ws(t,2*r+2*i+1),t[2*r+2*i+1]+=o*a,Ws(t,2*r+2*i+1),t[2*r+2*i+2]+=s*a,Ws(t,2*r+2*i+2)}for(r=0;r<e;r++)t[r]=t[2*r+1]<<16|t[2*r];for(r=e;r<2*e;r++)t[r]=0;return new j(t,0)};function Ws(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function mi(n,e){this.g=n,this.h=e}function xo(n,e){if(Tt(e))throw Error("division by zero");if(Tt(n))return new mi(br,br);if(We(n))return e=xo(we(n),e),new mi(we(e.g),we(e.h));if(We(e))return e=xo(n,we(e)),new mi(we(e.g),e.h);if(30<n.g.length){if(We(n)||We(e))throw Error("slowDivide_ only works with positive integers.");for(var t=$c,r=e;0>=r.X(n);)t=rd(t),r=rd(r);var i=lr(t,1),s=lr(r,1);for(r=lr(r,2),t=lr(t,2);!Tt(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(t),s=o),r=lr(r,1),t=lr(t,1)}return e=No(n,i.R(e)),new mi(i,e)}for(i=br;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),r=Math.ceil(Math.log(t)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=ht(t),o=s.R(e);We(o)||0<o.X(n);)t-=r,s=ht(t),o=s.R(e);Tt(s)&&(s=$c),i=i.add(s),n=No(n,o)}return new mi(i,n)}R.gb=function(n){return xo(this,n).h};R.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)&n.D(r);return new j(t,this.h&n.h)};R.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)|n.D(r);return new j(t,this.h|n.h)};R.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)^n.D(r);return new j(t,this.h^n.h)};function rd(n){for(var e=n.g.length+1,t=[],r=0;r<e;r++)t[r]=n.D(r)<<1|n.D(r-1)>>>31;return new j(t,n.h)}function lr(n,e){var t=e>>5;e%=32;for(var r=n.g.length-t,i=[],s=0;s<r;s++)i[s]=0<e?n.D(s+t)>>>e|n.D(s+t+1)<<32-e:n.D(s+t);return new j(i,n.h)}Vo.prototype.createWebChannel=Vo.prototype.g;ze.prototype.send=ze.prototype.u;ze.prototype.open=ze.prototype.m;ze.prototype.close=ze.prototype.close;fa.NO_ERROR=0;fa.TIMEOUT=8;fa.HTTP_ERROR=6;up.COMPLETE="complete";lp.EventType=Ts;Ts.OPEN="a";Ts.CLOSE="b";Ts.ERROR="c";Ts.MESSAGE="d";pe.prototype.listen=pe.prototype.O;te.prototype.listenOnce=te.prototype.P;te.prototype.getLastError=te.prototype.Sa;te.prototype.getLastErrorCode=te.prototype.Ia;te.prototype.getStatus=te.prototype.da;te.prototype.getResponseJson=te.prototype.Wa;te.prototype.getResponseText=te.prototype.ja;te.prototype.send=te.prototype.ha;te.prototype.setWithCredentials=te.prototype.Oa;tt.prototype.digest=tt.prototype.l;tt.prototype.reset=tt.prototype.reset;tt.prototype.update=tt.prototype.j;j.prototype.add=j.prototype.add;j.prototype.multiply=j.prototype.R;j.prototype.modulo=j.prototype.gb;j.prototype.compare=j.prototype.X;j.prototype.toNumber=j.prototype.ea;j.prototype.toString=j.prototype.toString;j.prototype.getBits=j.prototype.D;j.fromNumber=ht;j.fromString=zp;var hR=function(){return new Vo},dR=function(){return da()},hc=fa,fR=up,mR=tr,id={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},pR=bs,Hs=lp,gR=te,_R=tt,Pr=j;const sd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}fe.UNAUTHENTICATED=new fe(null),fe.GOOGLE_CREDENTIALS=new fe("google-credentials-uid"),fe.FIRST_PARTY=new fe("first-party-uid"),fe.MOCK_USER=new fe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ei="10.1.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn=new Qo("@firebase/firestore");function qc(){return tn.logLevel}function yR(n){tn.setLogLevel(n)}function I(n,...e){if(tn.logLevel<=M.DEBUG){const t=e.map(dl);tn.debug(`Firestore (${ei}): ${n}`,...t)}}function re(n,...e){if(tn.logLevel<=M.ERROR){const t=e.map(dl);tn.error(`Firestore (${ei}): ${n}`,...t)}}function nt(n,...e){if(tn.logLevel<=M.WARN){const t=e.map(dl);tn.warn(`Firestore (${ei}): ${n}`,...t)}}function dl(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(n="Unexpected state"){const e=`FIRESTORE (${ei}) INTERNAL ASSERTION FAILED: `+n;throw re(e),new Error(e)}function S(n,e){n||b()}function IR(n,e){n||b()}function A(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class g extends Ne{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class vR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(fe.UNAUTHENTICATED))}shutdown(){}}class wR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class ER{constructor(e){this.t=e,this.currentUser=fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new me;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new me,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{I("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(I("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new me)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(I("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(S(typeof r.accessToken=="string"),new Kp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return S(e===null||typeof e=="string"),new fe(e)}}class TR{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=fe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class AR{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new TR(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(fe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class RR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=s=>{s.error!=null&&I("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,I("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{I("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):I("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(S(typeof t.token=="string"),this.R=t.token,new RR(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PR(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=PR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function N(n,e){return n<e?-1:n>e?1:0}function xr(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function Hp(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new g(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new g(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new g(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new g(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return J.fromMillis(Date.now())}static fromDate(e){return J.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new J(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?N(this.nanoseconds,e.nanoseconds):N(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.timestamp=e}static fromTimestamp(e){return new P(e)}static min(){return new P(new J(0,0))}static max(){return new P(new J(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,t,r){t===void 0?t=0:t>e.length&&b(),r===void 0?r=e.length-t:r>e.length-t&&b(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ns.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ns?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class F extends ns{construct(e,t,r){return new F(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new g(p.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new F(t)}static emptyPath(){return new F([])}}const SR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ie extends ns{construct(e,t,r){return new ie(e,t,r)}static isValidIdentifier(e){return SR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ie.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ie(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new g(p.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new g(p.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new g(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new g(p.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ie(t)}static emptyPath(){return new ie([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){this.path=e}static fromPath(e){return new T(F.fromString(e))}static fromName(e){return new T(F.fromString(e).popFirst(5))}static empty(){return new T(F.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&F.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return F.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new T(new F(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function Gc(n){return n.fields.find(e=>e.kind===2)}function An(n){return n.fields.filter(e=>e.kind!==2)}Qp.UNKNOWN_ID=-1;class CR{constructor(e,t){this.fieldPath=e,this.kind=t}}class Oo{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Oo(0,Ke.min())}}function Yp(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=P.fromTimestamp(r===1e9?new J(t+1,0):new J(t,r));return new Ke(i,T.empty(),e)}function Jp(n){return new Ke(n.readTime,n.key,-1)}class Ke{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ke(P.min(),T.empty(),-1)}static max(){return new Ke(P.max(),T.empty(),-1)}}function fl(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=T.comparator(n.documentKey,e.documentKey),t!==0?t:N(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Zp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _n(n){if(n.code!==p.FAILED_PRECONDITION||n.message!==Xp)throw n;I("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&b(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new m((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof m?t:m.resolve(t)}catch(t){return m.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):m.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):m.reject(t)}static resolve(e){return new m((t,r)=>{t(e)})}static reject(e){return new m((t,r)=>{r(e)})}static waitFor(e){return new m((t,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},c=>r(c))}),o=!0,s===i&&t()})}static or(e){let t=m.resolve(!1);for(const r of e)t=t.next(i=>i?m.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new m((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;t(e[u]).next(l=>{o[u]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(e,t){return new m((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.m=new me,this.transaction.oncomplete=()=>{this.m.resolve()},this.transaction.onabort=()=>{t.error?this.m.reject(new xi(e,t.error)):this.m.resolve()},this.transaction.onerror=r=>{const i=ml(r.target.error);this.m.reject(new xi(e,i))}}static open(e,t,r,i){try{return new wa(t,e.transaction(i,r))}catch(s){throw new xi(t,s)}}get g(){return this.m.promise}abort(e){e&&this.m.reject(e),this.aborted||(I("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}p(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new DR(t)}}class Xe{constructor(e,t,r){this.name=e,this.version=t,this.S=r,Xe.D(Z())===12.2&&re("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return I("SimpleDb","Removing database:",e),Rn(window.indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!Bi())return!1;if(Xe.C())return!0;const e=Z(),t=Xe.D(e),r=0<t&&t<10,i=Xe.F(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.M)==="YES"}static O(e,t){return e.store(t)}static D(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static F(e){const t=e.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async N(e){return this.db||(I("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new xi(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new g(p.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new g(p.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new xi(e,o))},i.onupgradeneeded=s=>{I("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.S.B(o,i.transaction,s.oldVersion,this.version).next(()=>{I("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=t=>this.L(t)),this.db}k(e){this.L=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.N(e);const a=wa.open(this.db,e,s?"readonly":"readwrite",r),c=i(a).next(u=>(a.p(),u)).catch(u=>(a.abort(u),m.reject(u))).toPromise();return c.catch(()=>{}),await a.g,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(I("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class kR{constructor(e){this.q=e,this.K=!1,this.$=null}get isDone(){return this.K}get U(){return this.$}set cursor(e){this.q=e}done(){this.K=!0}W(e){this.$=e}delete(){return Rn(this.q.delete())}}class xi extends g{constructor(e,t){super(p.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function yn(n){return n.name==="IndexedDbTransactionError"}class DR{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(I("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(I("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Rn(r)}add(e){return I("SimpleDb","ADD",this.store.name,e,e),Rn(this.store.add(e))}get(e){return Rn(this.store.get(e)).next(t=>(t===void 0&&(t=null),I("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return I("SimpleDb","DELETE",this.store.name,e),Rn(this.store.delete(e))}count(){return I("SimpleDb","COUNT",this.store.name),Rn(this.store.count())}G(e,t){const r=this.options(e,t);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.j(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new m((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}H(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new m((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}J(e,t){I("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.Y=!1;const i=this.cursor(r);return this.j(i,(s,o,a)=>a.delete())}Z(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.j(i,t)}X(e){const t=this.cursor({});return new m((r,i)=>{t.onerror=s=>{const o=ml(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}j(e,t){const r=[];return new m((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new kR(a),u=t(a.primaryKey,a.value,c);if(u instanceof m){const l=u.catch(h=>(c.done(),m.reject(h)));r.push(l)}c.isDone?i():c.U===null?a.continue():a.continue(c.U)}}).next(()=>m.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Rn(n){return new m((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=ml(r.target.error);t(i)}})}let od=!1;function ml(n){const e=Xe.D(Z());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new g("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return od||(od=!0,setTimeout(()=>{throw r},0)),r}}return n}class VR{constructor(e,t){this.asyncQueue=e,this.ee=t,this.task=null}start(){this.te(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}te(e){I("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{I("IndexBackiller",`Documents written: ${await this.ee.ne()}`)}catch(t){yn(t)?I("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await _n(t)}await this.te(6e4)})}}class NR{constructor(e,t){this.localStore=e,this.persistence=t}async ne(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.re(t,e))}re(e,t){const r=new Set;let i=t,s=!0;return m.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return I("IndexBackiller",`Processing collection: ${o}`),this.ie(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>t-i)}ie(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.se(i,s)).next(a=>(I("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}se(e,t){let r=e;return t.changes.forEach((i,s)=>{const o=Jp(s);fl(o,r)>0&&(r=o)}),new Ke(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.oe(r),this._e=r=>t.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Fe.ae=-1;function Cs(n){return n==null}function rs(n){return n===0&&1/n==-1/0}function eg(n){return typeof n=="number"&&Number.isInteger(n)&&!rs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=ad(e)),e=xR(n.get(t),e);return ad(e)}function xR(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function ad(n){return n+""}function dt(n){const e=n.length;if(S(e>=2),e===2)return S(n.charAt(0)===""&&n.charAt(1)===""),F.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf("",s);switch((o<0||o>t)&&b(),n.charAt(o+1)){case"":const a=n.substring(s,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),r.push(c);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:b()}s=o+2}return new F(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(n,e){return[n,xe(e)]}function tg(n,e,t){return[n,xe(e),t]}const OR={},LR=["prefixPath","collectionGroup","readTime","documentId"],MR=["prefixPath","collectionGroup","documentId"],FR=["collectionGroup","readTime","prefixPath","documentId"],UR=["canonicalId","targetId"],BR=["targetId","path"],$R=["path","targetId"],qR=["collectionId","parent"],GR=["indexId","uid"],jR=["uid","sequenceNumber"],zR=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],KR=["indexId","uid","orderedDocumentKey"],WR=["userId","collectionPath","documentId"],HR=["userId","collectionPath","largestBatchId"],QR=["userId","collectionGroup","largestBatchId"],ng=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],YR=[...ng,"documentOverlays"],rg=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],ig=rg,JR=[...ig,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc extends Zp{constructor(e,t){super(),this.ue=e,this.currentSequenceNumber=t}}function _e(n,e){const t=A(n);return Xe.O(t.ue,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function nr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function sg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e,t){this.comparator=e,this.root=t||ve.EMPTY}insert(e,t){return new K(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ve.BLACK,null,null))}remove(e){return new K(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ve.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Qs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Qs(this.root,e,this.comparator,!1)}getReverseIterator(){return new Qs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Qs(this.root,e,this.comparator,!0)}}class Qs{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ve{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??ve.RED,this.left=i??ve.EMPTY,this.right=s??ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new ve(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ve.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw b();const e=this.left.check();if(e!==this.right.check())throw b();return e+(this.isRed()?0:1)}}ve.EMPTY=null,ve.RED=!0,ve.BLACK=!1;ve.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(e,t,r,i,s){return this}insert(e,t,r){return new ve(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.comparator=e,this.data=new K(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ld(this.data.getIterator())}getIteratorFrom(e){return new ld(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Q)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Q(this.comparator);return t.data=e,t}}class ld{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function hr(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.fields=e,e.sort(ie.comparator)}static empty(){return new Ue([])}unionWith(e){let t=new Q(ie.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ue(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return xr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XR(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new og("Invalid base64 string: "+s):s}}(e);return new le(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new le(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return N(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}le.EMPTY_BYTE_STRING=new le("");const ZR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function nn(n){if(S(!!n),typeof n=="string"){let e=0;const t=ZR.exec(n);if(S(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ee(n.seconds),nanos:ee(n.nanos)}}function ee(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function rn(n){return typeof n=="string"?le.fromBase64String(n):le.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function pl(n){const e=n.mapValue.fields.__previous_value__;return Ea(e)?pl(e):e}function is(n){const e=nn(n.mapValue.fields.__local_write_time__.timestampValue);return new J(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e,t,r,i,s,o,a,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class sn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new sn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof sn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},lo={nullValue:"NULL_VALUE"};function jn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ea(n)?4:ag(n)?9007199254740991:10:b()}function It(n,e){if(n===e)return!0;const t=jn(n);if(t!==jn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return is(n).isEqual(is(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=nn(i.timestampValue),a=nn(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return rn(i.bytesValue).isEqual(rn(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return ee(i.geoPointValue.latitude)===ee(s.geoPointValue.latitude)&&ee(i.geoPointValue.longitude)===ee(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ee(i.integerValue)===ee(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ee(i.doubleValue),a=ee(s.doubleValue);return o===a?rs(o)===rs(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return xr(n.arrayValue.values||[],e.arrayValue.values||[],It);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(ud(o)!==ud(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!It(o[c],a[c])))return!1;return!0}(n,e);default:return b()}}function ss(n,e){return(n.values||[]).find(t=>It(t,e))!==void 0}function on(n,e){if(n===e)return 0;const t=jn(n),r=jn(e);if(t!==r)return N(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return N(n.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ee(s.integerValue||s.doubleValue),c=ee(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,e);case 3:return hd(n.timestampValue,e.timestampValue);case 4:return hd(is(n),is(e));case 5:return N(n.stringValue,e.stringValue);case 6:return function(s,o){const a=rn(s),c=rn(o);return a.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const l=N(a[u],c[u]);if(l!==0)return l}return N(a.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const a=N(ee(s.latitude),ee(o.latitude));return a!==0?a:N(ee(s.longitude),ee(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],c=o.values||[];for(let u=0;u<a.length&&u<c.length;++u){const l=on(a[u],c[u]);if(l)return l}return N(a.length,c.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Ht.mapValue&&o===Ht.mapValue)return 0;if(s===Ht.mapValue)return 1;if(o===Ht.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),u=o.fields||{},l=Object.keys(u);c.sort(),l.sort();for(let h=0;h<c.length&&h<l.length;++h){const d=N(c[h],l[h]);if(d!==0)return d;const f=on(a[c[h]],u[l[h]]);if(f!==0)return f}return N(c.length,l.length)}(n.mapValue,e.mapValue);default:throw b()}}function hd(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return N(n,e);const t=nn(n),r=nn(e),i=N(t.seconds,r.seconds);return i!==0?i:N(t.nanos,r.nanos)}function Or(n){return zc(n)}function zc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=nn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return rn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return T.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=zc(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${zc(t.fields[o])}`;return i+"}"}(n.mapValue):b()}function zn(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Kc(n){return!!n&&"integerValue"in n}function os(n){return!!n&&"arrayValue"in n}function dd(n){return!!n&&"nullValue"in n}function fd(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ho(n){return!!n&&"mapValue"in n}function Oi(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return nr(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Oi(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Oi(n.arrayValue.values[t]);return e}return Object.assign({},n)}function ag(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function tb(n){return"nullValue"in n?lo:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?zn(sn.empty(),T.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:b()}function nb(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?zn(sn.empty(),T.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?Ht:b()}function md(n,e){const t=on(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function pd(n,e){const t=on(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.value=e}static empty(){return new Ee({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ho(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Oi(t)}setAll(e){let t=ie.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=Oi(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());ho(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return It(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];ho(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){nr(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ee(Oi(this.value))}}function cg(n){const e=[];return nr(n.fields,(t,r)=>{const i=new ie([t]);if(ho(r)){const s=cg(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ue(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new H(e,0,P.min(),P.min(),P.min(),Ee.empty(),0)}static newFoundDocument(e,t,r,i){return new H(e,1,t,P.min(),r,i,0)}static newNoDocument(e,t){return new H(e,2,t,P.min(),P.min(),Ee.empty(),0)}static newUnknownDocument(e,t){return new H(e,3,t,P.min(),P.min(),Ee.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(P.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ee.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ee.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=P.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof H&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new H(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,t){this.position=e,this.inclusive=t}}function gd(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=T.comparator(T.fromName(o.referenceValue),t.key):r=on(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function _d(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!It(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,t="asc"){this.field=e,this.dir=t}}function rb(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{}class O extends ug{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new ib(e,t,r):t==="array-contains"?new ab(e,r):t==="in"?new pg(e,r):t==="not-in"?new cb(e,r):t==="array-contains-any"?new ub(e,r):new O(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new sb(e,r):new ob(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(on(t,this.value)):t!==null&&jn(this.value)===jn(t)&&this.matchesComparison(on(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return b()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class G extends ug{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new G(e,t)}matches(e){return Lr(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(t=>t.isInequality());return e!==null?e.field:null}le(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Lr(n){return n.op==="and"}function Wc(n){return n.op==="or"}function gl(n){return lg(n)&&Lr(n)}function lg(n){for(const e of n.filters)if(e instanceof G)return!1;return!0}function Hc(n){if(n instanceof O)return n.field.canonicalString()+n.op.toString()+Or(n.value);if(gl(n))return n.filters.map(e=>Hc(e)).join(",");{const e=n.filters.map(t=>Hc(t)).join(",");return`${n.op}(${e})`}}function hg(n,e){return n instanceof O?function(r,i){return i instanceof O&&r.op===i.op&&r.field.isEqual(i.field)&&It(r.value,i.value)}(n,e):n instanceof G?function(r,i){return i instanceof G&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&hg(o,i.filters[a]),!0):!1}(n,e):void b()}function dg(n,e){const t=n.filters.concat(e);return G.create(t,n.op)}function fg(n){return n instanceof O?function(t){return`${t.field.canonicalString()} ${t.op} ${Or(t.value)}`}(n):n instanceof G?function(t){return t.op.toString()+" {"+t.getFilters().map(fg).join(" ,")+"}"}(n):"Filter"}class ib extends O{constructor(e,t,r){super(e,t,r),this.key=T.fromName(r.referenceValue)}matches(e){const t=T.comparator(e.key,this.key);return this.matchesComparison(t)}}class sb extends O{constructor(e,t){super(e,"in",t),this.keys=mg("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ob extends O{constructor(e,t){super(e,"not-in",t),this.keys=mg("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function mg(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>T.fromName(r.referenceValue))}class ab extends O{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return os(t)&&ss(t.arrayValue,this.value)}}class pg extends O{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ss(this.value.arrayValue,t)}}class cb extends O{constructor(e,t){super(e,"not-in",t)}matches(e){if(ss(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ss(this.value.arrayValue,t)}}class ub extends O{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!os(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>ss(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function Qc(n,e=null,t=[],r=[],i=null,s=null,o=null){return new lb(n,e,t,r,i,s,o)}function Kn(n){const e=A(n);if(e.he===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Hc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Cs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Or(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Or(r)).join(",")),e.he=t}return e.he}function ks(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!rb(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!hg(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!_d(n.startAt,e.startAt)&&_d(n.endAt,e.endAt)}function Lo(n){return T.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Mo(n,e){return n.filters.filter(t=>t instanceof O&&t.field.isEqual(e))}function yd(n,e,t){let r=lo,i=!0;for(const s of Mo(n,e)){let o=lo,a=!0;switch(s.op){case"<":case"<=":o=tb(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=lo}md({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];md({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function Id(n,e,t){let r=Ht,i=!0;for(const s of Mo(n,e)){let o=Ht,a=!0;switch(s.op){case">=":case">":o=nb(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Ht}pd({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];pd({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function gg(n,e,t,r,i,s,o,a){return new Nt(n,e,t,r,i,s,o,a)}function ti(n){return new Nt(n)}function vd(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function _l(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function Ta(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function yl(n){return n.collectionGroup!==null}function Un(n){const e=A(n);if(e.Pe===null){e.Pe=[];const t=Ta(e),r=_l(e);if(t!==null&&r===null)t.isKeyField()||e.Pe.push(new Sr(t)),e.Pe.push(new Sr(ie.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Sr(ie.keyField(),s))}}}return e.Pe}function $e(n){const e=A(n);if(!e.Ie)if(e.limitType==="F")e.Ie=Qc(e.path,e.collectionGroup,Un(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of Un(e)){const o=s.dir==="desc"?"asc":"desc";t.push(new Sr(s.field,o))}const r=e.endAt?new an(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new an(e.startAt.position,e.startAt.inclusive):null;e.Ie=Qc(e.path,e.collectionGroup,t,e.filters,e.limit,r,i)}return e.Ie}function Yc(n,e){e.getFirstInequalityField(),Ta(n);const t=n.filters.concat([e]);return new Nt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Fo(n,e,t){return new Nt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ds(n,e){return ks($e(n),$e(e))&&n.limitType===e.limitType}function _g(n){return`${Kn($e(n))}|lt:${n.limitType}`}function Jc(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>fg(i)).join(", ")}]`),Cs(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Or(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Or(i)).join(",")),`Target(${r})`}($e(n))}; limitType=${n.limitType})`}function Vs(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):T.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of Un(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,a,c){const u=gd(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,Un(r),i)||r.endAt&&!function(o,a,c){const u=gd(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,Un(r),i))}(n,e)}function yg(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Ig(n){return(e,t)=>{let r=!1;for(const i of Un(n)){const s=hb(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function hb(n,e,t){const r=n.field.isKeyField()?T.comparator(e.key,t.key):function(s,o,a){const c=o.data.field(s),u=a.data.field(s);return c!==null&&u!==null?on(c,u):b()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return b()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){nr(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return sg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db=new K(T.comparator);function Be(){return db}const vg=new K(T.comparator);function bi(...n){let e=vg;for(const t of n)e=e.insert(t.key,t);return e}function wg(n){let e=vg;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function ft(){return Li()}function Eg(){return Li()}function Li(){return new In(n=>n.toString(),(n,e)=>n.isEqual(e))}const fb=new K(T.comparator),mb=new Q(T.comparator);function x(...n){let e=mb;for(const t of n)e=e.add(t);return e}const pb=new Q(N);function Il(){return pb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rs(e)?"-0":e}}function Ag(n){return{integerValue:""+n}}function Rg(n,e){return eg(e)?Ag(e):Tg(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(){this._=void 0}}function gb(n,e,t){return n instanceof Mr?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ea(s)&&(s=pl(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):n instanceof Wn?Pg(n,e):n instanceof Hn?Sg(n,e):function(i,s){const o=bg(i,s),a=wd(o)+wd(i.Te);return Kc(o)&&Kc(i.Te)?Ag(a):Tg(i.serializer,a)}(n,e)}function _b(n,e,t){return n instanceof Wn?Pg(n,e):n instanceof Hn?Sg(n,e):t}function bg(n,e){return n instanceof Fr?function(r){return Kc(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Mr extends Aa{}class Wn extends Aa{constructor(e){super(),this.elements=e}}function Pg(n,e){const t=Cg(e);for(const r of n.elements)t.some(i=>It(i,r))||t.push(r);return{arrayValue:{values:t}}}class Hn extends Aa{constructor(e){super(),this.elements=e}}function Sg(n,e){let t=Cg(e);for(const r of n.elements)t=t.filter(i=>!It(i,r));return{arrayValue:{values:t}}}class Fr extends Aa{constructor(e,t){super(),this.serializer=e,this.Te=t}}function wd(n){return ee(n.integerValue||n.doubleValue)}function Cg(n){return os(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,t){this.field=e,this.transform=t}}function yb(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Wn&&i instanceof Wn||r instanceof Hn&&i instanceof Hn?xr(r.elements,i.elements,It):r instanceof Fr&&i instanceof Fr?It(r.Te,i.Te):r instanceof Mr&&i instanceof Mr}(n.transform,e.transform)}class Ib{constructor(e,t){this.version=e,this.transformResults=t}}class Y{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Y}static exists(e){return new Y(void 0,e)}static updateTime(e){return new Y(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ra{}function kg(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ri(n.key,Y.none()):new ni(n.key,n.data,Y.none());{const t=n.data,r=Ee.empty();let i=new Q(ie.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new xt(n.key,r,new Ue(i.toArray()),Y.none())}}function vb(n,e,t){n instanceof ni?function(i,s,o){const a=i.value.clone(),c=Td(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof xt?function(i,s,o){if(!fo(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Td(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(Dg(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Mi(n,e,t,r){return n instanceof ni?function(s,o,a,c){if(!fo(s.precondition,o))return a;const u=s.value.clone(),l=Ad(s.fieldTransforms,c,o);return u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,r):n instanceof xt?function(s,o,a,c){if(!fo(s.precondition,o))return a;const u=Ad(s.fieldTransforms,c,o),l=o.data;return l.setAll(Dg(s)),l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(n,e,t,r):function(s,o,a){return fo(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function wb(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=bg(r.transform,i||null);s!=null&&(t===null&&(t=Ee.empty()),t.set(r.field,s))}return t||null}function Ed(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&xr(r,i,(s,o)=>yb(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ni extends Ra{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class xt extends Ra{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Dg(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Td(n,e,t){const r=new Map;S(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,_b(o,a,t[i]))}return r}function Ad(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,gb(s,o,e))}return r}class ri extends Ra{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vl extends Ra{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&vb(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Mi(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Mi(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Eg();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const c=kg(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(P.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),x())}isEqual(e){return this.batchId===e.batchId&&xr(this.mutations,e.mutations,(t,r)=>Ed(t,r))&&xr(this.baseMutations,e.baseMutations,(t,r)=>Ed(t,r))}}class El{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){S(e.mutations.length===r.length);let i=function(){return fb}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new El(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae,L;function Vg(n){switch(n){default:return b();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function Ng(n){if(n===void 0)return re("GRPC error has no .code"),p.UNKNOWN;switch(n){case ae.OK:return p.OK;case ae.CANCELLED:return p.CANCELLED;case ae.UNKNOWN:return p.UNKNOWN;case ae.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case ae.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case ae.INTERNAL:return p.INTERNAL;case ae.UNAVAILABLE:return p.UNAVAILABLE;case ae.UNAUTHENTICATED:return p.UNAUTHENTICATED;case ae.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case ae.NOT_FOUND:return p.NOT_FOUND;case ae.ALREADY_EXISTS:return p.ALREADY_EXISTS;case ae.PERMISSION_DENIED:return p.PERMISSION_DENIED;case ae.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case ae.ABORTED:return p.ABORTED;case ae.OUT_OF_RANGE:return p.OUT_OF_RANGE;case ae.UNIMPLEMENTED:return p.UNIMPLEMENTED;case ae.DATA_LOSS:return p.DATA_LOSS;default:return b()}}(L=ae||(ae={}))[L.OK=0]="OK",L[L.CANCELLED=1]="CANCELLED",L[L.UNKNOWN=2]="UNKNOWN",L[L.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",L[L.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",L[L.NOT_FOUND=5]="NOT_FOUND",L[L.ALREADY_EXISTS=6]="ALREADY_EXISTS",L[L.PERMISSION_DENIED=7]="PERMISSION_DENIED",L[L.UNAUTHENTICATED=16]="UNAUTHENTICATED",L[L.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",L[L.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",L[L.ABORTED=10]="ABORTED",L[L.OUT_OF_RANGE=11]="OUT_OF_RANGE",L[L.UNIMPLEMENTED=12]="UNIMPLEMENTED",L[L.INTERNAL=13]="INTERNAL",L[L.UNAVAILABLE=14]="UNAVAILABLE",L[L.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ys}static getOrCreateInstance(){return Ys===null&&(Ys=new Al),Ys}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let Ys=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb=new Pr([4294967295,4294967295],0);function Rd(n){const e=xg().encode(n),t=new _R;return t.update(e),new Uint8Array(t.digest())}function bd(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Pr([t,r],0),new Pr([i,s],0)]}class Rl{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Pi(`Invalid padding: ${t}`);if(r<0)throw new Pi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Pi(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Pi(`Invalid padding when bitmap length is 0: ${t}`);this.de=8*e.length-t,this.Ae=Pr.fromNumber(this.de)}Re(e,t,r){let i=e.add(t.multiply(Pr.fromNumber(r)));return i.compare(Tb)===1&&(i=new Pr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const t=Rd(e),[r,i]=bd(t);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);if(!this.Ve(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Rl(s,i,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const t=Rd(e),[r,i]=bd(t);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);this.me(o)}}me(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Pi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Os.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new xs(P.min(),i,new K(N),Be(),x())}}class Os{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Os(r,t,x(),x(),x())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,t,r,i){this.fe=e,this.removedTargetIds=t,this.key=r,this.ge=i}}class Og{constructor(e,t){this.targetId=e,this.pe=t}}class Lg{constructor(e,t,r=le.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Pd{constructor(){this.ye=0,this.we=Cd(),this.Se=le.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=x(),t=x(),r=x();return this.we.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:b()}}),new Os(this.Se,this.be,e,t,r)}xe(){this.De=!1,this.we=Cd()}Oe(e,t){this.De=!0,this.we=this.we.insert(e,t)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class Ab{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=Be(),this.$e=Sd(),this.Ue=new K(N)}We(e){for(const t of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(t,e.ge):this.ze(t,e.key,e.ge);for(const t of e.removedTargetIds)this.ze(t,e.key,e.ge)}je(e){this.forEachTarget(e,t=>{const r=this.He(t);switch(e.state){case 0:this.Je(t)&&r.Fe(e.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(e.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(t);break;case 3:this.Je(t)&&(r.ke(),r.Fe(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),r.Fe(e.resumeToken));break;default:b()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qe.forEach((r,i)=>{this.Je(i)&&t(i)})}Ze(e){var t,r;const i=e.targetId,s=e.pe.count,o=this.Xe(i);if(o){const a=o.target;if(Lo(a))if(s===0){const c=new T(a.path);this.ze(i,c,H.newNoDocument(c,P.min()))}else S(s===1);else{const c=this.et(i);if(c!==s){const u=this.tt(e,c);if(u.status!==0){this.Ye(i);const l=u.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,l)}(t=Al.instance)===null||t===void 0||t.notifyOnExistenceFilterMismatch(function(h,d,f,y){var _,v,E,k,D,$;const q={localCacheCount:f,existenceFilterCount:y.count},U=y.unchangedNames;return U&&(q.bloomFilter={applied:h===0,hashCount:(_=U==null?void 0:U.hashCount)!==null&&_!==void 0?_:0,bitmapLength:(k=(E=(v=U==null?void 0:U.bits)===null||v===void 0?void 0:v.bitmap)===null||E===void 0?void 0:E.length)!==null&&k!==void 0?k:0,padding:($=(D=U==null?void 0:U.bits)===null||D===void 0?void 0:D.padding)!==null&&$!==void 0?$:0},d&&(q.bloomFilter.mightContain=d)),q}(u.status,(r=u.nt)!==null&&r!==void 0?r:null,c,e.pe))}}}}tt(e,t){const{unchangedNames:r,count:i}=e.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let c,u;try{c=rn(s).toUint8Array()}catch(h){if(h instanceof og)return nt("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{u=new Rl(c,o,a)}catch(h){return nt(h instanceof Pi?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const l=h=>{const d=this.qe.rt();return u.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return u.de===0?{status:1}:{status:i===t-this.it(e.targetId,l)?0:2,nt:l}}it(e,t){const r=this.qe.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{t(s.path.canonicalString())||(this.ze(e,s,null),i++)}),i}st(e){const t=new Map;this.Qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&Lo(a.target)){const c=new T(a.target.path);this.Ke.get(c)!==null||this.ot(o,c)||this.ze(o,c,H.newNoDocument(c,e))}s.Ce&&(t.set(o,s.Me()),s.xe())}});let r=x();this.$e.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Xe(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ke.forEach((s,o)=>o.setReadTime(e));const i=new xs(e,t,this.Ue,this.Ke,r);return this.Ke=Be(),this.$e=Sd(),this.Ue=new K(N),i}Ge(e,t){if(!this.Je(e))return;const r=this.ot(e,t.key)?2:0;this.He(e).Oe(t.key,r),this.Ke=this.Ke.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e))}ze(e,t,r){if(!this.Je(e))return;const i=this.He(e);this.ot(e,t)?i.Oe(t,1):i.Ne(t),this.$e=this.$e.insert(t,this._t(t).delete(e)),r&&(this.Ke=this.Ke.insert(t,r))}removeTarget(e){this.Qe.delete(e)}et(e){const t=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let t=this.Qe.get(e);return t||(t=new Pd,this.Qe.set(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new Q(N),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||I("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.Qe.get(e);return t&&t.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new Pd),this.qe.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ot(e,t){return this.qe.getRemoteKeysForTarget(e).has(t)}}function Sd(){return new K(T.comparator)}function Cd(){return new K(T.comparator)}const Rb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),bb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Pb=(()=>({and:"AND",or:"OR"}))();class Sb{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Xc(n,e){return n.useProto3Json||Cs(e)?e:{value:e}}function Ur(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Mg(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Cb(n,e){return Ur(n,e.toTimestamp())}function se(n){return S(!!n),P.fromTimestamp(function(t){const r=nn(t);return new J(r.seconds,r.nanos)}(n))}function bl(n,e){return function(r){return new F(["projects",r.projectId,"databases",r.database])}(n).child("documents").child(e).canonicalString()}function Fg(n){const e=F.fromString(n);return S(Wg(e)),e}function as(n,e){return bl(n.databaseId,e.path)}function pt(n,e){const t=Fg(e);if(t.get(1)!==n.databaseId.projectId)throw new g(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new g(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new T(Bg(t))}function Zc(n,e){return bl(n.databaseId,e)}function Ug(n){const e=Fg(n);return e.length===4?F.emptyPath():Bg(e)}function cs(n){return new F(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Bg(n){return S(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function kd(n,e,t){return{name:as(n,e),fields:t.value.mapValue.fields}}function $g(n,e,t){const r=pt(n,e.name),i=se(e.updateTime),s=e.createTime?se(e.createTime):P.min(),o=new Ee({mapValue:{fields:e.fields}}),a=H.newFoundDocument(r,i,s,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function kb(n,e){return"found"in e?function(r,i){S(!!i.found),i.found.name,i.found.updateTime;const s=pt(r,i.found.name),o=se(i.found.updateTime),a=i.found.createTime?se(i.found.createTime):P.min(),c=new Ee({mapValue:{fields:i.found.fields}});return H.newFoundDocument(s,o,a,c)}(n,e):"missing"in e?function(r,i){S(!!i.missing),S(!!i.readTime);const s=pt(r,i.missing),o=se(i.readTime);return H.newNoDocument(s,o)}(n,e):b()}function Db(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:b()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,l){return u.useProto3Json?(S(l===void 0||typeof l=="string"),le.fromBase64String(l||"")):(S(l===void 0||l instanceof Uint8Array),le.fromUint8Array(l||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?p.UNKNOWN:Ng(u.code);return new g(l,u.message||"")}(o);t=new Lg(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=pt(n,r.document.name),s=se(r.document.updateTime),o=r.document.createTime?se(r.document.createTime):P.min(),a=new Ee({mapValue:{fields:r.document.fields}}),c=H.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];t=new mo(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=pt(n,r.document),s=r.readTime?se(r.readTime):P.min(),o=H.newNoDocument(i,s),a=r.removedTargetIds||[];t=new mo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=pt(n,r.document),s=r.removedTargetIds||[];t=new mo([],s,i,null)}else{if(!("filter"in e))return b();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Eb(i,s),a=r.targetId;t=new Og(a,o)}}return t}function us(n,e){let t;if(e instanceof ni)t={update:kd(n,e.key,e.value)};else if(e instanceof ri)t={delete:as(n,e.key)};else if(e instanceof xt)t={update:kd(n,e.key,e.data),updateMask:Mb(e.fieldMask)};else{if(!(e instanceof vl))return b();t={verify:as(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Mr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Wn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Hn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Fr)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw b()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Cb(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:b()}(n,e.precondition)),t}function eu(n,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?Y.updateTime(se(s.updateTime)):s.exists!==void 0?Y.exists(s.exists):Y.none()}(e.currentDocument):Y.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let c=null;if("setToServerValue"in a)S(a.setToServerValue==="REQUEST_TIME"),c=new Mr;else if("appendMissingElements"in a){const l=a.appendMissingElements.values||[];c=new Wn(l)}else if("removeAllFromArray"in a){const l=a.removeAllFromArray.values||[];c=new Hn(l)}else"increment"in a?c=new Fr(o,a.increment):b();const u=ie.fromServerFormat(a.fieldPath);return new Ns(u,c)}(n,i)):[];if(e.update){e.update.name;const i=pt(n,e.update.name),s=new Ee({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(c){const u=c.fieldPaths||[];return new Ue(u.map(l=>ie.fromServerFormat(l)))}(e.updateMask);return new xt(i,s,o,t,r)}return new ni(i,s,t,r)}if(e.delete){const i=pt(n,e.delete);return new ri(i,t)}if(e.verify){const i=pt(n,e.verify);return new vl(i,t)}return b()}function Vb(n,e){return n&&n.length>0?(S(e!==void 0),n.map(t=>function(i,s){let o=i.updateTime?se(i.updateTime):se(s);return o.isEqual(P.min())&&(o=se(s)),new Ib(o,i.transformResults||[])}(t,e))):[]}function qg(n,e){return{documents:[Zc(n,e.path)]}}function Gg(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=Zc(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Zc(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return Kg(G.create(c,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:pr(h.field),direction:xb(h.dir)}}(u))}(e.orderBy);s&&(t.structuredQuery.orderBy=s);const o=Xc(n,e.limit);return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function jg(n){let e=Ug(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){S(r===1);const l=t.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let s=[];t.where&&(s=function(h){const d=zg(h);return d instanceof G&&gl(d)?d.getFilters():[d]}(t.where));let o=[];t.orderBy&&(o=function(h){return h.map(d=>function(y){return new Sr(gr(y.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(t.orderBy));let a=null;t.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Cs(d)?null:d}(t.limit));let c=null;t.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new an(f,d)}(t.startAt));let u=null;return t.endAt&&(u=function(h){const d=!h.before,f=h.values||[];return new an(f,d)}(t.endAt)),gg(e,i,o,s,a,"F",c,u)}function Nb(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return b()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function zg(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=gr(t.unaryFilter.field);return O.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=gr(t.unaryFilter.field);return O.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=gr(t.unaryFilter.field);return O.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=gr(t.unaryFilter.field);return O.create(o,"!=",{nullValue:"NULL_VALUE"});default:return b()}}(n):n.fieldFilter!==void 0?function(t){return O.create(gr(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return b()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return G.create(t.compositeFilter.filters.map(r=>zg(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return b()}}(t.compositeFilter.op))}(n):b()}function xb(n){return Rb[n]}function Ob(n){return bb[n]}function Lb(n){return Pb[n]}function pr(n){return{fieldPath:n.canonicalString()}}function gr(n){return ie.fromServerFormat(n.fieldPath)}function Kg(n){return n instanceof O?function(t){if(t.op==="=="){if(fd(t.value))return{unaryFilter:{field:pr(t.field),op:"IS_NAN"}};if(dd(t.value))return{unaryFilter:{field:pr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(fd(t.value))return{unaryFilter:{field:pr(t.field),op:"IS_NOT_NAN"}};if(dd(t.value))return{unaryFilter:{field:pr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pr(t.field),op:Ob(t.op),value:t.value}}}(n):n instanceof G?function(t){const r=t.getFilters().map(i=>Kg(i));return r.length===1?r[0]:{compositeFilter:{op:Lb(t.op),filters:r}}}(n):b()}function Mb(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Wg(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,t,r,i,s=P.min(),o=P.min(),a=le.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new At(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new At(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new At(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new At(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e){this.ct=e}}function Fb(n,e){let t;if(e.document)t=$g(n.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=T.fromSegments(e.noDocument.path),i=Yn(e.noDocument.readTime);t=H.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return b();{const r=T.fromSegments(e.unknownDocument.path),i=Yn(e.unknownDocument.version);t=H.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(i){const s=new J(i[0],i[1]);return P.fromTimestamp(s)}(e.readTime)),t}function Dd(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Uo(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:as(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Ur(s,o.version.toTimestamp()),createTime:Ur(s,o.createTime.toTimestamp())}}(n.ct,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Qn(e.version)};else{if(!e.isUnknownDocument())return b();r.unknownDocument={path:t.path.toArray(),version:Qn(e.version)}}return r}function Uo(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Qn(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Yn(n){const e=new J(n.seconds,n.nanoseconds);return P.fromTimestamp(e)}function bn(n,e){const t=(e.baseMutations||[]).map(s=>eu(n.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>eu(n.ct,s)),i=J.fromMillis(e.localWriteTimeMs);return new wl(e.batchId,i,t,r)}function Si(n){const e=Yn(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Yn(n.lastLimboFreeSnapshotVersion):P.min();let r;return r=function(s){return s.documents!==void 0}(n.query)?function(s){return S(s.documents.length===1),$e(ti(Ug(s.documents[0])))}(n.query):function(s){return $e(jg(s))}(n.query),new At(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,le.fromBase64String(n.resumeToken))}function Qg(n,e){const t=Qn(e.snapshotVersion),r=Qn(e.lastLimboFreeSnapshotVersion);let i;i=Lo(e.target)?qg(n.ct,e.target):Gg(n.ct,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Kn(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Pl(n){const e=jg({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Fo(e,e.limit,"L"):e}function dc(n,e){return new Tl(e.largestBatchId,eu(n.ct,e.overlayMutation))}function Vd(n,e){const t=e.path.lastSegment();return[n,xe(e.path.popLast()),t]}function Nd(n,e,t,r){return{indexId:n,uid:e.uid||"",sequenceNumber:t,readTime:Qn(r.readTime),documentKey:xe(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{getBundleMetadata(e,t){return xd(e).get(t).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Yn(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,t){return xd(e).put(function(i){return{bundleId:i.id,createTime:Qn(se(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return Od(e).get(t).next(r=>{if(r)return function(s){return{name:s.name,query:Pl(s.bundledQuery),readTime:Yn(s.readTime)}}(r)})}saveNamedQuery(e,t){return Od(e).put(function(i){return{name:i.name,readTime:Qn(se(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function xd(n){return _e(n,"bundles")}function Od(n){return _e(n,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const r=t.uid||"";return new ba(e,r)}getOverlay(e,t){return pi(e).get(Vd(this.userId,t)).next(r=>r?dc(this.serializer,r):null)}getOverlays(e,t){const r=ft();return m.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((s,o)=>{const a=new Tl(t,o);i.push(this.ht(e,a))}),m.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(o=>i.add(xe(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(pi(e).J("collectionPathOverlayIndex",a))}),m.waitFor(s)}getOverlaysForCollection(e,t,r){const i=ft(),s=xe(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return pi(e).G("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=dc(this.serializer,c);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=ft();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return pi(e).Z({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=dc(this.serializer,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>s)}ht(e,t){return pi(e).put(function(i,s,o){const[a,c,u]=Vd(s,o.mutation.key);return{userId:s,collectionPath:c,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:us(i.ct,o.mutation)}}(this.serializer,this.userId,t))}}function pi(n){return _e(n,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(){}Pt(e,t){this.It(e,t),t.Tt()}It(e,t){if("nullValue"in e)this.Et(t,5);else if("booleanValue"in e)this.Et(t,10),t.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(t,15),t.dt(ee(e.integerValue));else if("doubleValue"in e){const r=ee(e.doubleValue);isNaN(r)?this.Et(t,13):(this.Et(t,15),rs(r)?t.dt(0):t.dt(r))}else if("timestampValue"in e){const r=e.timestampValue;this.Et(t,20),typeof r=="string"?t.At(r):(t.At(`${r.seconds||""}`),t.dt(r.nanos||0))}else if("stringValue"in e)this.Rt(e.stringValue,t),this.Vt(t);else if("bytesValue"in e)this.Et(t,30),t.ft(rn(e.bytesValue)),this.Vt(t);else if("referenceValue"in e)this.gt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.Et(t,45),t.dt(r.latitude||0),t.dt(r.longitude||0)}else"mapValue"in e?ag(e)?this.Et(t,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,t),this.Vt(t)):"arrayValue"in e?(this.wt(e.arrayValue,t),this.Vt(t)):b()}Rt(e,t){this.Et(t,25),this.St(e,t)}St(e,t){t.At(e)}yt(e,t){const r=e.fields||{};this.Et(t,55);for(const i of Object.keys(r))this.Rt(i,t),this.It(r[i],t)}wt(e,t){const r=e.values||[];this.Et(t,50);for(const i of r)this.It(i,t)}gt(e,t){this.Et(t,37),T.fromName(e).path.forEach(r=>{this.Et(t,60),this.St(r,t)})}Et(e,t){e.dt(t)}Vt(e){e.dt(2)}}Pn.bt=new Pn;function Bb(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function Ld(n){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=Bb(255&r[s]);if(i+=o,o!==8)break}return i}(n);return Math.ceil(e/8)}class $b{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.vt(r.value),r=t.next();this.Ct()}Ft(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Mt(r.value),r=t.next();this.xt()}Ot(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.vt(r);else if(r<2048)this.vt(960|r>>>6),this.vt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.vt(480|r>>>12),this.vt(128|63&r>>>6),this.vt(128|63&r);else{const i=t.codePointAt(0);this.vt(240|i>>>18),this.vt(128|63&i>>>12),this.vt(128|63&i>>>6),this.vt(128|63&i)}}this.Ct()}Nt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Mt(r);else if(r<2048)this.Mt(960|r>>>6),this.Mt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Mt(480|r>>>12),this.Mt(128|63&r>>>6),this.Mt(128|63&r);else{const i=t.codePointAt(0);this.Mt(240|i>>>18),this.Mt(128|63&i>>>12),this.Mt(128|63&i>>>6),this.Mt(128|63&i)}}this.xt()}Bt(e){const t=this.Lt(e),r=Ld(t);this.kt(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}qt(e){const t=this.Lt(e),r=Ld(t);this.kt(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(e){this.kt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Wt(){return this.buffer.slice(0,this.position)}Lt(e){const t=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}vt(e){const t=255&e;t===0?(this.Kt(0),this.Kt(255)):t===255?(this.Kt(255),this.Kt(0)):this.Kt(t)}Mt(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(e)}Ct(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(e){this.kt(1),this.buffer[this.position++]=e}Ut(e){this.kt(1),this.buffer[this.position++]=~e}kt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class qb{constructor(e){this.Gt=e}ft(e){this.Gt.Dt(e)}At(e){this.Gt.Ot(e)}dt(e){this.Gt.Bt(e)}Tt(){this.Gt.Qt()}}class Gb{constructor(e){this.Gt=e}ft(e){this.Gt.Ft(e)}At(e){this.Gt.Nt(e)}dt(e){this.Gt.qt(e)}Tt(){this.Gt.$t()}}class gi{constructor(){this.Gt=new $b,this.zt=new qb(this.Gt),this.jt=new Gb(this.Gt)}seed(e){this.Gt.seed(e)}Ht(e){return e===0?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,t,r,i){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=i}Jt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Sn(this.indexId,this.documentKey,this.arrayValue,r)}}function Ft(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Md(n.arrayValue,e.arrayValue),t!==0?t:(t=Md(n.directionalValue,e.directionalValue),t!==0?t:T.comparator(n.documentKey,e.documentKey)))}function Md(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Yt=e.orderBy,this.Zt=[];for(const t of e.filters){const r=t;r.isInequality()?this.Xt=r:this.Zt.push(r)}}en(e){S(e.collectionGroup===this.collectionId);const t=Gc(e);if(t!==void 0&&!this.tn(t))return!1;const r=An(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.tn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Xt!==void 0){if(!i.has(this.Xt.field.canonicalString())){const a=r[s];if(!this.nn(this.Xt,a)||!this.rn(this.Yt[o++],a))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Yt.length||!this.rn(this.Yt[o++],a))return!1}return!0}tn(e){for(const t of this.Zt)if(this.nn(t,e))return!0;return!1}nn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}rn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yg(n){var e,t;if(S(n instanceof O||n instanceof G),n instanceof O){if(n instanceof pg){const i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>O.create(n.field,"==",s)))||[];return G.create(i,"or")}return n}const r=n.filters.map(i=>Yg(i));return G.create(r,n.op)}function zb(n){if(n.getFilters().length===0)return[];const e=ru(Yg(n));return S(Jg(e)),tu(e)||nu(e)?[e]:e.getFilters()}function tu(n){return n instanceof O}function nu(n){return n instanceof G&&gl(n)}function Jg(n){return tu(n)||nu(n)||function(t){if(t instanceof G&&Wc(t)){for(const r of t.getFilters())if(!tu(r)&&!nu(r))return!1;return!0}return!1}(n)}function ru(n){if(S(n instanceof O||n instanceof G),n instanceof O)return n;if(n.filters.length===1)return ru(n.filters[0]);const e=n.filters.map(r=>ru(r));let t=G.create(e,n.op);return t=Bo(t),Jg(t)?t:(S(t instanceof G),S(Lr(t)),S(t.filters.length>1),t.filters.reduce((r,i)=>Sl(r,i)))}function Sl(n,e){let t;return S(n instanceof O||n instanceof G),S(e instanceof O||e instanceof G),t=n instanceof O?e instanceof O?function(i,s){return G.create([i,s],"and")}(n,e):Fd(n,e):e instanceof O?Fd(e,n):function(i,s){if(S(i.filters.length>0&&s.filters.length>0),Lr(i)&&Lr(s))return dg(i,s.getFilters());const o=Wc(i)?i:s,a=Wc(i)?s:i,c=o.filters.map(u=>Sl(u,a));return G.create(c,"or")}(n,e),Bo(t)}function Fd(n,e){if(Lr(e))return dg(e,n.getFilters());{const t=e.filters.map(r=>Sl(n,r));return G.create(t,"or")}}function Bo(n){if(S(n instanceof O||n instanceof G),n instanceof O)return n;const e=n.getFilters();if(e.length===1)return Bo(e[0]);if(lg(n))return n;const t=e.map(i=>Bo(i)),r=[];return t.forEach(i=>{i instanceof O?r.push(i):i instanceof G&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:G.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(){this.sn=new Cl}addToCollectionParentIndex(e,t){return this.sn.add(t),m.resolve()}getCollectionParents(e,t){return m.resolve(this.sn.getEntries(t))}addFieldIndex(e,t){return m.resolve()}deleteFieldIndex(e,t){return m.resolve()}getDocumentsMatchingTarget(e,t){return m.resolve(null)}getIndexType(e,t){return m.resolve(0)}getFieldIndexes(e,t){return m.resolve([])}getNextCollectionGroupToUpdate(e){return m.resolve(null)}getMinOffset(e,t){return m.resolve(Ke.min())}getMinOffsetFromCollectionGroup(e,t){return m.resolve(Ke.min())}updateCollectionGroup(e,t,r){return m.resolve()}updateIndexEntries(e,t){return m.resolve()}}class Cl{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Q(F.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Q(F.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js=new Uint8Array(0);class Wb{constructor(e,t){this.user=e,this.databaseId=t,this.on=new Cl,this._n=new In(r=>Kn(r),(r,i)=>ks(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.on.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.on.add(t)});const s={collectionId:r,parent:xe(i)};return Ud(e).put(s)}return m.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[Hp(t),""],!1,!0);return Ud(e).G(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;r.push(dt(o.parent))}return r})}addFieldIndex(e,t){const r=Xs(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=yi(e);return s.next(a=>{o.put(Nd(a,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const r=Xs(e),i=yi(e),s=_i(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const r=_i(e);let i=!0;const s=new Map;return m.forEach(this.an(t),o=>this.un(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=x();const a=[];return m.forEach(s,(c,u)=>{I("IndexedDbIndexManager",`Using index ${function(D){return`id=${D.indexId}|cg=${D.collectionGroup}|f=${D.fields.map($=>`${$.fieldPath}:${$.kind}`).join(",")}`}(c)} to execute ${Kn(t)}`);const l=function(D,$){const q=Gc($);if(q===void 0)return null;for(const U of Mo(D,q.fieldPath))switch(U.op){case"array-contains-any":return U.value.arrayValue.values||[];case"array-contains":return[U.value]}return null}(u,c),h=function(D,$){const q=new Map;for(const U of An($))for(const Ie of Mo(D,U.fieldPath))switch(Ie.op){case"==":case"in":q.set(U.fieldPath.canonicalString(),Ie.value);break;case"not-in":case"!=":return q.set(U.fieldPath.canonicalString(),Ie.value),Array.from(q.values())}return null}(u,c),d=function(D,$){const q=[];let U=!0;for(const Ie of An($)){const Lt=Ie.kind===0?yd(D,Ie.fieldPath,D.startAt):Id(D,Ie.fieldPath,D.startAt);q.push(Lt.value),U&&(U=Lt.inclusive)}return new an(q,U)}(u,c),f=function(D,$){const q=[];let U=!0;for(const Ie of An($)){const Lt=Ie.kind===0?Id(D,Ie.fieldPath,D.endAt):yd(D,Ie.fieldPath,D.endAt);q.push(Lt.value),U&&(U=Lt.inclusive)}return new an(q,U)}(u,c),y=this.cn(c,u,d),_=this.cn(c,u,f),v=this.ln(c,u,h),E=this.hn(c.indexId,l,y,d.inclusive,_,f.inclusive,v);return m.forEach(E,k=>r.H(k,t.limit).next(D=>{D.forEach($=>{const q=T.fromSegments($.documentKey);o.has(q)||(o=o.add(q),a.push(q))})}))}).next(()=>a)}return m.resolve(null)})}an(e){let t=this._n.get(e);return t||(e.filters.length===0?t=[e]:t=zb(G.create(e.filters,"and")).map(r=>Qc(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this._n.set(e,t),t)}hn(e,t,r,i,s,o,a){const c=(t!=null?t.length:1)*Math.max(r.length,s.length),u=c/(t!=null?t.length:1),l=[];for(let h=0;h<c;++h){const d=t?this.Pn(t[h/u]):Js,f=this.In(e,d,r[h%u],i),y=this.Tn(e,d,s[h%u],o),_=a.map(v=>this.In(e,d,v,!0));l.push(...this.createRange(f,y,_))}return l}In(e,t,r,i){const s=new Sn(e,T.empty(),t,r);return i?s:s.Jt()}Tn(e,t,r,i){const s=new Sn(e,T.empty(),t,r);return i?s.Jt():s}un(e,t){const r=new jb(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.en(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const i=this.an(t);return m.forEach(i,s=>this.un(e,s).next(o=>{o?r!==0&&o.fields.length<function(c){let u=new Q(ie.comparator),l=!1;for(const h of c.filters)for(const d of h.getFlattenedFilters())d.field.isKeyField()||(d.op==="array-contains"||d.op==="array-contains-any"?l=!0:u=u.add(d.field));for(const h of c.orderBy)h.field.isKeyField()||(u=u.add(h.field));return u.size+(l?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&i.length>1&&r===2?1:r)}En(e,t){const r=new gi;for(const i of An(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.Ht(i.kind);Pn.bt.Pt(s,o)}return r.Wt()}Pn(e){const t=new gi;return Pn.bt.Pt(e,t.Ht(0)),t.Wt()}dn(e,t){const r=new gi;return Pn.bt.Pt(zn(this.databaseId,t),r.Ht(function(s){const o=An(s);return o.length===0?0:o[o.length-1].kind}(e))),r.Wt()}ln(e,t,r){if(r===null)return[];let i=[];i.push(new gi);let s=0;for(const o of An(e)){const a=r[s++];for(const c of i)if(this.An(t,o.fieldPath)&&os(a))i=this.Rn(i,o,a);else{const u=c.Ht(o.kind);Pn.bt.Pt(a,u)}}return this.Vn(i)}cn(e,t,r){return this.ln(e,t,r.position)}Vn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].Wt();return t}Rn(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const c=new gi;c.seed(a.Wt()),Pn.bt.Pt(o,c.Ht(t.kind)),s.push(c)}return s}An(e,t){return!!e.filters.find(r=>r instanceof O&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=Xs(e),i=yi(e);return(t?r.G("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.G()).next(s=>{const o=[];return m.forEach(s,a=>i.get([a.indexId,this.uid]).next(c=>{o.push(function(l,h){const d=h?new Oo(h.sequenceNumber,new Ke(Yn(h.readTime),new T(dt(h.documentKey)),h.largestBatchId)):Oo.empty(),f=l.fields.map(([y,_])=>new CR(ie.fromServerFormat(y),_));return new Qp(l.indexId,l.collectionGroup,f,d)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:N(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=Xs(e),s=yi(e);return this.mn(e).next(o=>i.G("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>m.forEach(a,c=>s.put(Nd(c.indexId,this.user,o,r)))))}updateIndexEntries(e,t){const r=new Map;return m.forEach(t,(i,s)=>{const o=r.get(i.collectionGroup);return(o?m.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),m.forEach(a,c=>this.fn(e,i,c).next(u=>{const l=this.gn(s,c);return u.isEqual(l)?m.resolve():this.pn(e,s,c,u,l)}))))})}yn(e,t,r,i){return _i(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.dn(r,t.key),documentKey:t.key.path.toArray()})}wn(e,t,r,i){return _i(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.dn(r,t.key),t.key.path.toArray()])}fn(e,t,r){const i=_i(e);let s=new Q(Ft);return i.Z({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.dn(r,t)])},(o,a)=>{s=s.add(new Sn(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>s)}gn(e,t){let r=new Q(Ft);const i=this.En(t,e);if(i==null)return r;const s=Gc(t);if(s!=null){const o=e.data.field(s.fieldPath);if(os(o))for(const a of o.arrayValue.values||[])r=r.add(new Sn(t.indexId,e.key,this.Pn(a),i))}else r=r.add(new Sn(t.indexId,e.key,Js,i));return r}pn(e,t,r,i,s){I("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(c,u,l,h,d){const f=c.getIterator(),y=u.getIterator();let _=hr(f),v=hr(y);for(;_||v;){let E=!1,k=!1;if(_&&v){const D=l(_,v);D<0?k=!0:D>0&&(E=!0)}else _!=null?k=!0:E=!0;E?(h(v),v=hr(y)):k?(d(_),_=hr(f)):(_=hr(f),v=hr(y))}}(i,s,Ft,a=>{o.push(this.yn(e,t,r,a))},a=>{o.push(this.wn(e,t,r,a))}),m.waitFor(o)}mn(e){let t=1;return yi(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>Ft(o,a)).filter((o,a,c)=>!a||Ft(o,c[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Ft(o,e),c=Ft(o,t);if(a===0)i[0]=e.Jt();else if(a>0&&c<0)i.push(o),i.push(o.Jt());else if(c>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.Sn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Js,[]],c=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Js,[]];s.push(IDBKeyRange.bound(a,c))}return s}Sn(e,t){return Ft(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Bd)}getMinOffset(e,t){return m.mapArray(this.an(t),r=>this.un(e,r).next(i=>i||b())).next(Bd)}}function Ud(n){return _e(n,"collectionParents")}function _i(n){return _e(n,"indexEntries")}function Xs(n){return _e(n,"indexConfiguration")}function yi(n){return _e(n,"indexState")}function Bd(n){S(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;fl(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new Ke(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Me{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Me(e,Me.DEFAULT_COLLECTION_PERCENTILE,Me.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(n,e,t){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=r.Z({range:o},(l,h,d)=>(a++,d.delete()));s.push(c.next(()=>{S(a===1)}));const u=[];for(const l of t.mutations){const h=tg(e,l.key.path,t.batchId);s.push(i.delete(h)),u.push(l.key)}return m.waitFor(s).next(()=>u)}function $o(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw b();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Me.DEFAULT_COLLECTION_PERCENTILE=10,Me.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Me.DEFAULT=new Me(41943040,Me.DEFAULT_COLLECTION_PERCENTILE,Me.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Me.DISABLED=new Me(-1,0,0);class Pa{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.bn={}}static lt(e,t,r,i){S(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Pa(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Ut(e).Z({index:"userMutationsIndex",range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=_r(e),o=Ut(e);return o.add({}).next(a=>{S(typeof a=="number");const c=new wl(a,t,r,i),u=function(f,y,_){const v=_.baseMutations.map(k=>us(f.ct,k)),E=_.mutations.map(k=>us(f.ct,k));return{userId:y,batchId:_.batchId,localWriteTimeMs:_.localWriteTime.toMillis(),baseMutations:v,mutations:E}}(this.serializer,this.userId,c),l=[];let h=new Q((d,f)=>N(d.canonicalString(),f.canonicalString()));for(const d of i){const f=tg(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(s.put(f,OR))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.bn[a]=c.keys()}),m.waitFor(l).next(()=>c)})}lookupMutationBatch(e,t){return Ut(e).get(t).next(r=>r?(S(r.userId===this.userId),bn(this.serializer,r)):null)}Dn(e,t){return this.bn[t]?m.resolve(this.bn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.bn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Ut(e).Z({index:"userMutationsIndex",range:i},(o,a,c)=>{a.userId===this.userId&&(S(a.batchId>=r),s=bn(this.serializer,a)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Ut(e).Z({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Ut(e).G("userMutationsIndex",t).next(r=>r.map(i=>bn(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=uo(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return _r(e).Z({range:i},(o,a,c)=>{const[u,l,h]=o,d=dt(l);if(u===this.userId&&t.path.isEqual(d))return Ut(e).get(h).next(f=>{if(!f)throw b();S(f.userId===this.userId),s.push(bn(this.serializer,f))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Q(N);const i=[];return t.forEach(s=>{const o=uo(this.userId,s.path),a=IDBKeyRange.lowerBound(o),c=_r(e).Z({range:a},(u,l,h)=>{const[d,f,y]=u,_=dt(f);d===this.userId&&s.path.isEqual(_)?r=r.add(y):h.done()});i.push(c)}),m.waitFor(i).next(()=>this.vn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=uo(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new Q(N);return _r(e).Z({range:o},(c,u,l)=>{const[h,d,f]=c,y=dt(d);h===this.userId&&r.isPrefixOf(y)?y.length===i&&(a=a.add(f)):l.done()}).next(()=>this.vn(e,a))}vn(e,t){const r=[],i=[];return t.forEach(s=>{i.push(Ut(e).get(s).next(o=>{if(o===null)throw b();S(o.userId===this.userId),r.push(bn(this.serializer,o))}))}),m.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return Xg(e.ue,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.Cn(t.batchId)}),m.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Cn(e){delete this.bn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return m.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return _r(e).Z({range:r},(s,o,a)=>{if(s[0]===this.userId){const c=dt(s[1]);i.push(c)}else a.done()}).next(()=>{S(i.length===0)})})}containsKey(e,t){return Zg(e,this.userId,t)}Fn(e){return e_(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Zg(n,e,t){const r=uo(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return _r(n).Z({range:s,Y:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function Ut(n){return _e(n,"mutations")}function _r(n){return _e(n,"documentMutations")}function e_(n){return _e(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new Jn(0)}static On(){return new Jn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Nn(e).next(t=>{const r=new Jn(t.highestTargetId);return t.highestTargetId=r.next(),this.Bn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Nn(e).next(t=>P.fromTimestamp(new J(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Nn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.Nn(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Bn(e,i)))}addTargetData(e,t){return this.Ln(e,t).next(()=>this.Nn(e).next(r=>(r.targetCount+=1,this.kn(t,r),this.Bn(e,r))))}updateTargetData(e,t){return this.Ln(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>dr(e).delete(t.targetId)).next(()=>this.Nn(e)).next(r=>(S(r.targetCount>0),r.targetCount-=1,this.Bn(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return dr(e).Z((o,a)=>{const c=Si(a);c.sequenceNumber<=t&&r.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>m.waitFor(s)).next(()=>i)}forEachTarget(e,t){return dr(e).Z((r,i)=>{const s=Si(i);t(s)})}Nn(e){return qd(e).get("targetGlobalKey").next(t=>(S(t!==null),t))}Bn(e,t){return qd(e).put("targetGlobalKey",t)}Ln(e,t){return dr(e).put(Qg(this.serializer,t))}kn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Nn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=Kn(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return dr(e).Z({range:i,index:"queryTargetsIndex"},(o,a,c)=>{const u=Si(a);ks(t,u.target)&&(s=u,c.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=jt(e);return t.forEach(o=>{const a=xe(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),m.waitFor(i)}removeMatchingKeys(e,t,r){const i=jt(e);return m.forEach(t,s=>{const o=xe(s.path);return m.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=jt(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=jt(e);let s=x();return i.Z({range:r,Y:!0},(o,a,c)=>{const u=dt(o[1]),l=new T(u);s=s.add(l)}).next(()=>s)}containsKey(e,t){const r=xe(t.path),i=IDBKeyRange.bound([r],[Hp(r)],!1,!0);let s=0;return jt(e).Z({index:"documentTargetsIndex",Y:!0,range:i},([o,a],c,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}ut(e,t){return dr(e).get(t).next(r=>r?Si(r):null)}}function dr(n){return _e(n,"targets")}function qd(n){return _e(n,"targetGlobal")}function jt(n){return _e(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd([n,e],[t,r]){const i=N(n,t);return i===0?N(e,r):i}class Qb{constructor(e){this.qn=e,this.buffer=new Q(Gd),this.Qn=0}Kn(){return++this.Qn}$n(e){const t=[e,this.Kn()];if(this.buffer.size<this.qn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Gd(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Yb{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Un=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Wn(6e4)}stop(){this.Un&&(this.Un.cancel(),this.Un=null)}get started(){return this.Un!==null}Wn(e){I("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Un=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Un=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){yn(t)?I("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await _n(t)}await this.Wn(3e5)})}}class Jb{constructor(e,t){this.Gn=e,this.params=t}calculateTargetCount(e,t){return this.Gn.zn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return m.resolve(Fe.ae);const r=new Qb(t);return this.Gn.forEachTarget(e,i=>r.$n(i.sequenceNumber)).next(()=>this.Gn.jn(e,i=>r.$n(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Gn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Gn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(I("LruGarbageCollector","Garbage collection skipped; disabled"),m.resolve($d)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(I("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),$d):this.Hn(e,t))}getCacheSize(e){return this.Gn.getCacheSize(e)}Hn(e,t){let r,i,s,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(I("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,t))).next(h=>(s=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),qc()<=M.DEBUG&&I("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),m.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function Xb(n,e){return new Jb(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e,t){this.db=e,this.garbageCollector=Xb(this,t)}zn(e){const t=this.Jn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}Jn(e){let t=0;return this.jn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}jn(e,t){return this.Yn(e,(r,i)=>t(i))}addReference(e,t,r){return Zs(e,r)}removeReference(e,t,r){return Zs(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return Zs(e,t)}Zn(e,t){return function(i,s){let o=!1;return e_(i).X(a=>Zg(i,a,s).next(c=>(c&&(o=!0),m.resolve(!c)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Yn(e,(o,a)=>{if(a<=t){const c=this.Zn(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,P.min()),jt(e).delete(function(h){return[0,xe(h.path)]}(o))))});i.push(c)}}).next(()=>m.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return Zs(e,t)}Yn(e,t){const r=jt(e);let i,s=Fe.ae;return r.Z({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(s!==Fe.ae&&t(new T(dt(i)),s),s=u,i=c):s=Fe.ae}).next(()=>{s!==Fe.ae&&t(new T(dt(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Zs(n,e){return jt(n).put(function(r,i){return{targetId:0,path:xe(r.path),sequenceNumber:i}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(){this.changes=new In(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,H.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?m.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return En(e).put(r)}removeEntry(e,t,r){return En(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Uo(o),a[a.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.Xn(e,r)))}getEntry(e,t){let r=H.newInvalidDocument(t);return En(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Ii(t))},(i,s)=>{r=this.er(t,s)}).next(()=>r)}tr(e,t){let r={size:0,document:H.newInvalidDocument(t)};return En(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Ii(t))},(i,s)=>{r={document:this.er(t,s),size:$o(s)}}).next(()=>r)}getEntries(e,t){let r=Be();return this.nr(e,t,(i,s)=>{const o=this.er(i,s);r=r.insert(i,o)}).next(()=>r)}rr(e,t){let r=Be(),i=new K(T.comparator);return this.nr(e,t,(s,o)=>{const a=this.er(s,o);r=r.insert(s,a),i=i.insert(s,$o(o))}).next(()=>({documents:r,ir:i}))}nr(e,t,r){if(t.isEmpty())return m.resolve();let i=new Q(Kd);t.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(Ii(i.first()),Ii(i.last())),o=i.getIterator();let a=o.getNext();return En(e).Z({index:"documentKeyIndex",range:s},(c,u,l)=>{const h=T.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&Kd(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.W(Ii(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i){const s=t.path,o=[s.popLast().toArray(),s.lastSegment(),Uo(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return En(e).G(IDBKeyRange.bound(o,a,!0)).next(c=>{let u=Be();for(const l of c){const h=this.er(T.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);h.isFoundDocument()&&(Vs(t,h)||i.has(h.key))&&(u=u.insert(h.key,h))}return u})}getAllFromCollectionGroup(e,t,r,i){let s=Be();const o=zd(t,r),a=zd(t,Ke.max());return En(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.er(T.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&l.done()}).next(()=>s)}newChangeBuffer(e){return new t0(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return jd(e).get("remoteDocumentGlobalKey").next(t=>(S(!!t),t))}Xn(e,t){return jd(e).put("remoteDocumentGlobalKey",t)}er(e,t){if(t){const r=Fb(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(P.min())))return r}return H.newInvalidDocument(e)}}function n_(n){return new e0(n)}class t0 extends t_{constructor(e,t){super(),this.sr=e,this.trackRemovals=t,this._r=new In(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new Q((s,o)=>N(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this._r.get(s);if(t.push(this.sr.removeEntry(e,s,a.readTime)),o.isValidDocument()){const c=Dd(this.sr.serializer,o);i=i.add(s.path.popLast());const u=$o(c);r+=u-a.size,t.push(this.sr.addEntry(e,s,c))}else if(r-=a.size,this.trackRemovals){const c=Dd(this.sr.serializer,o.convertToNoDocument(P.min()));t.push(this.sr.addEntry(e,s,c))}}),i.forEach(s=>{t.push(this.sr.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.sr.updateMetadata(e,r)),m.waitFor(t)}getFromCache(e,t){return this.sr.tr(e,t).next(r=>(this._r.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.sr.rr(e,t).next(({documents:r,ir:i})=>(i.forEach((s,o)=>{this._r.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function jd(n){return _e(n,"remoteDocumentGlobal")}function En(n){return _e(n,"remoteDocumentsV14")}function Ii(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function zd(n,e){const t=e.documentKey.path.toArray();return[n,Uo(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Kd(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=N(t[s],r[s]),i)return i;return i=N(t.length,r.length),i||(i=N(t[t.length-2],r[r.length-2]),i||N(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Mi(r.mutation,i,Ue.empty(),J.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,x()).next(()=>r))}getLocalViewOfDocuments(e,t,r=x()){const i=ft();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=bi();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=ft();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,x()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=Be();const o=Li(),a=function(){return Li()}();return t.forEach((c,u)=>{const l=r.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof xt)?s=s.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),Mi(l.mutation,u,l.mutation.getFieldMask(),J.now())):o.set(u.key,Ue.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,l)=>o.set(u,l)),t.forEach((u,l)=>{var h;return a.set(u,new n0(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const r=Li();let i=new K((o,a)=>o-a),s=x();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let l=r.get(c)||Ue.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(i.get(a.batchId)||x()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=Eg();l.forEach(d=>{if(!s.has(d)){const f=kg(t.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return m.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r){return function(s){return T.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):yl(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r):this.getDocumentsMatchingCollectionQuery(e,t,r)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):m.resolve(ft());let a=-1,c=s;return o.next(u=>m.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?m.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,x())).next(l=>({batchId:a,changes:wg(l)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new T(t)).next(r=>{let i=bi();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r){const i=t.collectionGroup;let s=bi();return this.indexManager.getCollectionParents(e,i).next(o=>m.forEach(o,a=>{const c=function(l,h){return new Nt(h,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(t,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(u=>{u.forEach((l,h)=>{s=s.insert(l,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i))).next(s=>{i.forEach((a,c)=>{const u=c.getKey();s.get(u)===null&&(s=s.insert(u,H.newInvalidDocument(u)))});let o=bi();return s.forEach((a,c)=>{const u=i.get(a);u!==void 0&&Mi(u.mutation,c,Ue.empty(),J.now()),Vs(t,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,t){return m.resolve(this.ar.get(t))}saveBundleMetadata(e,t){return this.ar.set(t.id,function(i){return{id:i.id,version:i.version,createTime:se(i.createTime)}}(t)),m.resolve()}getNamedQuery(e,t){return m.resolve(this.ur.get(t))}saveNamedQuery(e,t){return this.ur.set(t.name,function(i){return{name:i.name,query:Pl(i.bundledQuery),readTime:se(i.readTime)}}(t)),m.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(){this.overlays=new K(T.comparator),this.cr=new Map}getOverlay(e,t){return m.resolve(this.overlays.get(t))}getOverlays(e,t){const r=ft();return m.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),m.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.cr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.cr.delete(r)),m.resolve()}getOverlaysForCollection(e,t,r){const i=ft(),s=t.length+1,o=new T(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return m.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new K((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let l=s.get(u.largestBatchId);l===null&&(l=ft(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=ft(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return m.resolve(a)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(r.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Tl(t,r));let s=this.cr.get(t);s===void 0&&(s=x(),this.cr.set(t,s)),this.cr.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(){this.lr=new Q(de.hr),this.Pr=new Q(de.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,t){const r=new de(e,t);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Er(new de(e,t))}dr(e,t){e.forEach(r=>this.removeReference(r,t))}Ar(e){const t=new T(new F([])),r=new de(t,e),i=new de(t,e+1),s=[];return this.Pr.forEachInRange([r,i],o=>{this.Er(o),s.push(o.key)}),s}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const t=new T(new F([])),r=new de(t,e),i=new de(t,e+1);let s=x();return this.Pr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new de(e,0),r=this.lr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class de{constructor(e,t){this.key=e,this.mr=t}static hr(e,t){return T.comparator(e.key,t.key)||N(e.mr,t.mr)}static Ir(e,t){return N(e.mr,t.mr)||T.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.gr=1,this.pr=new Q(de.hr)}checkEmpty(e){return m.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new wl(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new de(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return m.resolve(o)}lookupMutationBatch(e,t){return m.resolve(this.yr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.wr(r),s=i<0?0:i;return m.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return m.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return m.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new de(t,0),i=new de(t,Number.POSITIVE_INFINITY),s=[];return this.pr.forEachInRange([r,i],o=>{const a=this.yr(o.mr);s.push(a)}),m.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Q(N);return t.forEach(i=>{const s=new de(i,0),o=new de(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([s,o],a=>{r=r.add(a.mr)})}),m.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;T.isDocumentKey(s)||(s=s.child(""));const o=new de(new T(s),0);let a=new Q(N);return this.pr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.mr)),!0)},o),m.resolve(this.Sr(a))}Sr(e){const t=[];return e.forEach(r=>{const i=this.yr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){S(this.br(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return m.forEach(t.mutations,i=>{const s=new de(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.pr=r})}Cn(e){}containsKey(e,t){const r=new de(t,0),i=this.pr.firstAfterOrEqual(r);return m.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,m.resolve()}br(e,t){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const t=this.wr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(e){this.Dr=e,this.docs=function(){return new K(T.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Dr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return m.resolve(r?r.document.mutableCopy():H.newInvalidDocument(t))}getEntries(e,t){let r=Be();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():H.newInvalidDocument(i))}),m.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Be();const o=t.path,a=new T(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||fl(Jp(l),r)<=0||(i.has(l.key)||Vs(t,l))&&(s=s.insert(l.key,l.mutableCopy()))}return m.resolve(s)}getAllFromCollectionGroup(e,t,r,i){b()}vr(e,t){return m.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new a0(this)}getSize(e){return m.resolve(this.size)}}class a0 extends t_{constructor(e){super(),this.sr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.sr.addEntry(e,i)):this.sr.removeEntry(r)}),m.waitFor(t)}getFromCache(e,t){return this.sr.getEntry(e,t)}getAllFromCache(e,t){return this.sr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e){this.persistence=e,this.Cr=new In(t=>Kn(t),ks),this.lastRemoteSnapshotVersion=P.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new kl,this.targetCount=0,this.Or=Jn.xn()}forEachTarget(e,t){return this.Cr.forEach((r,i)=>t(i)),m.resolve()}getLastRemoteSnapshotVersion(e){return m.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return m.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),m.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Fr&&(this.Fr=t),m.resolve()}Ln(e){this.Cr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Or=new Jn(t),this.highestTargetId=t),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,t){return this.Ln(t),this.targetCount+=1,m.resolve()}updateTargetData(e,t){return this.Ln(t),m.resolve()}removeTargetData(e,t){return this.Cr.delete(t.target),this.Mr.Ar(t.targetId),this.targetCount-=1,m.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Cr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),m.waitFor(s).next(()=>i)}getTargetCount(e){return m.resolve(this.targetCount)}getTargetData(e,t){const r=this.Cr.get(t)||null;return m.resolve(r)}addMatchingKeys(e,t,r){return this.Mr.Tr(t,r),m.resolve()}removeMatchingKeys(e,t,r){this.Mr.dr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),m.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Mr.Ar(t),m.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Mr.Vr(t);return m.resolve(r)}containsKey(e,t){return m.resolve(this.Mr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e,t){this.Nr={},this.overlays={},this.Br=new Fe(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new c0(this),this.indexManager=new Kb,this.remoteDocumentCache=function(i){return new o0(i)}(r=>this.referenceDelegate.qr(r)),this.serializer=new Hg(t),this.Qr=new r0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new i0,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Nr[e.toKey()];return r||(r=new s0(t,this.referenceDelegate),this.Nr[e.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,t,r){I("MemoryPersistence","Starting transaction:",e);const i=new u0(this.Br.next());return this.referenceDelegate.Kr(),r(i).next(s=>this.referenceDelegate.$r(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ur(e,t){return m.or(Object.values(this.Nr).map(r=>()=>r.containsKey(e,t)))}}class u0 extends Zp{constructor(e){super(),this.currentSequenceNumber=e}}class Sa{constructor(e){this.persistence=e,this.Wr=new kl,this.Gr=null}static zr(e){return new Sa(e)}get jr(){if(this.Gr)return this.Gr;throw b()}addReference(e,t,r){return this.Wr.addReference(r,t),this.jr.delete(r.toString()),m.resolve()}removeReference(e,t,r){return this.Wr.removeReference(r,t),this.jr.add(r.toString()),m.resolve()}markPotentiallyOrphaned(e,t){return this.jr.add(t.toString()),m.resolve()}removeTarget(e,t){this.Wr.Ar(t.targetId).forEach(i=>this.jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.jr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Kr(){this.Gr=new Set}$r(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return m.forEach(this.jr,r=>{const i=T.fromPath(r);return this.Hr(e,i).next(s=>{s||t.removeEntry(i,P.min())})}).next(()=>(this.Gr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Hr(e,t).next(r=>{r?this.jr.delete(t.toString()):this.jr.add(t.toString())})}qr(e){return 0}Hr(e,t){return m.or([()=>m.resolve(this.Wr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ur(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e){this.serializer=e}B(e,t,r,i){const s=new wa("createOrUpgrade",t);r<1&&i>=1&&(function(c){c.createObjectStore("owner")}(e),function(c){c.createObjectStore("mutationQueues",{keyPath:"userId"}),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",cd,{unique:!0}),c.createObjectStore("documentMutations")}(e),Wd(e),function(c){c.createObjectStore("remoteDocuments")}(e));let o=m.resolve();return r<3&&i>=3&&(r!==0&&(function(c){c.deleteObjectStore("targetDocuments"),c.deleteObjectStore("targets"),c.deleteObjectStore("targetGlobal")}(e),Wd(e)),o=o.next(()=>function(c){const u=c.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:P.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",l)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(c,u){return u.store("mutations").G().next(l=>{c.deleteObjectStore("mutations"),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",cd,{unique:!0});const h=u.store("mutations"),d=l.map(f=>h.put(f));return m.waitFor(d)})}(e,s))),o=o.next(()=>{(function(c){c.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Yr(s))),r<6&&i>=6&&(o=o.next(()=>(function(c){c.createObjectStore("remoteDocumentGlobal")}(e),this.Zr(s)))),r<7&&i>=7&&(o=o.next(()=>this.Xr(s))),r<8&&i>=8&&(o=o.next(()=>this.ei(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ti(s))),r<11&&i>=11&&(o=o.next(()=>{(function(c){c.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(c){c.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(c){const u=c.createObjectStore("documentOverlays",{keyPath:WR});u.createIndex("collectionPathOverlayIndex",HR,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",QR,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(c){const u=c.createObjectStore("remoteDocumentsV14",{keyPath:LR});u.createIndex("documentKeyIndex",MR),u.createIndex("collectionGroupIndex",FR)}(e)).next(()=>this.ni(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ri(e,s))),r<15&&i>=15&&(o=o.next(()=>function(c){c.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),c.createObjectStore("indexState",{keyPath:GR}).createIndex("sequenceNumberIndex",jR,{unique:!1}),c.createObjectStore("indexEntries",{keyPath:zR}).createIndex("documentKeyIndex",KR,{unique:!1})}(e))),o}Zr(e){let t=0;return e.store("remoteDocuments").Z((r,i)=>{t+=$o(i)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Yr(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.G().next(i=>m.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.G("userMutationsIndex",o).next(a=>m.forEach(a,c=>{S(c.userId===s.userId);const u=bn(this.serializer,c);return Xg(e,s.userId,u).next(()=>{})}))}))}Xr(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Z((o,a)=>{const c=new F(o),u=function(h){return[0,xe(h)]}(c);s.push(t.get(u).next(l=>l?m.resolve():(h=>t.put({targetId:0,path:xe(h),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>m.waitFor(s))})}ei(e,t){e.createObjectStore("collectionParents",{keyPath:qR});const r=t.store("collectionParents"),i=new Cl,s=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:xe(c)})}};return t.store("remoteDocuments").Z({Y:!0},(o,a)=>{const c=new F(o);return s(c.popLast())}).next(()=>t.store("documentMutations").Z({Y:!0},([o,a,c],u)=>{const l=dt(a);return s(l.popLast())}))}ti(e){const t=e.store("targets");return t.Z((r,i)=>{const s=Si(i),o=Qg(this.serializer,s);return t.put(o)})}ni(e,t){const r=t.store("remoteDocuments"),i=[];return r.Z((s,o)=>{const a=t.store("remoteDocumentsV14"),c=function(h){return h.document?new T(F.fromString(h.document.name).popFirst(5)):h.noDocument?T.fromSegments(h.noDocument.path):h.unknownDocument?T.fromSegments(h.unknownDocument.path):b()}(o).path.toArray(),u={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>m.waitFor(i))}ri(e,t){const r=t.store("mutations"),i=n_(this.serializer),s=new i_(Sa.zr,this.serializer.ct);return r.G().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:x();bn(this.serializer,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),m.forEach(a,(c,u)=>{const l=new fe(u),h=ba.lt(this.serializer,l),d=s.getIndexManager(l),f=Pa.lt(l,this.serializer,d,s.referenceDelegate);return new r_(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new jc(t,Fe.ae),c).next()})})}}function Wd(n){n.createObjectStore("targetDocuments",{keyPath:BR}).createIndex("documentTargetsIndex",$R,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",UR,{unique:!0}),n.createObjectStore("targetGlobal")}const fc="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Dl{constructor(e,t,r,i,s,o,a,c,u,l,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.ii=s,this.window=o,this.document=a,this.si=u,this.oi=l,this._i=h,this.Br=null,this.Lr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ai=null,this.inForeground=!1,this.ui=null,this.ci=null,this.li=Number.NEGATIVE_INFINITY,this.hi=d=>Promise.resolve(),!Dl.v())throw new g(p.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Zb(this,i),this.Pi=t+"main",this.serializer=new Hg(c),this.Ii=new Xe(this.Pi,this._i,new l0(this.serializer)),this.kr=new Hb(this.referenceDelegate,this.serializer),this.remoteDocumentCache=n_(this.serializer),this.Qr=new Ub,this.window&&this.window.localStorage?this.Ti=this.window.localStorage:(this.Ti=null,l===!1&&re("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ei().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new g(p.FAILED_PRECONDITION,fc);return this.di(),this.Ai(),this.Ri(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.kr.getHighestSequenceNumber(e))}).then(e=>{this.Br=new Fe(e,this.si)}).then(()=>{this.Lr=!0}).catch(e=>(this.Ii&&this.Ii.close(),Promise.reject(e)))}Vi(e){return this.hi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ii.k(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ii.enqueueAndForget(async()=>{this.started&&await this.Ei()}))}Ei(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>eo(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.mi(e).next(t=>{t||(this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.hi(!1)))})}).next(()=>this.fi(e)).next(t=>this.isPrimary&&!t?this.gi(e).next(()=>!1):!!t&&this.pi(e).next(()=>!0))).catch(e=>{if(yn(e))return I("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return I("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ii.enqueueRetryable(()=>this.hi(e)),this.isPrimary=e})}mi(e){return vi(e).get("owner").next(t=>m.resolve(this.yi(t)))}wi(e){return eo(e).delete(this.clientId)}async Si(){if(this.isPrimary&&!this.bi(this.li,18e5)){this.li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=_e(t,"clientMetadata");return r.G().next(i=>{const s=this.Di(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return m.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ti)for(const t of e)this.Ti.removeItem(this.vi(t.clientId))}}Ri(){this.ci=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ei().then(()=>this.Si()).then(()=>this.Ri()))}yi(e){return!!e&&e.ownerId===this.clientId}fi(e){return this.oi?m.resolve(!0):vi(e).get("owner").next(t=>{if(t!==null&&this.bi(t.leaseTimestampMs,5e3)&&!this.Ci(t.ownerId)){if(this.yi(t)&&this.networkEnabled)return!0;if(!this.yi(t)){if(!t.allowTabSynchronization)throw new g(p.FAILED_PRECONDITION,fc);return!1}}return!(!this.networkEnabled||!this.inForeground)||eo(e).G().next(r=>this.Di(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&I("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Lr=!1,this.Fi(),this.ci&&(this.ci.cancel(),this.ci=null),this.Mi(),this.xi(),await this.Ii.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new jc(e,Fe.ae);return this.gi(t).next(()=>this.wi(t))}),this.Ii.close(),this.Oi()}Di(e,t){return e.filter(r=>this.bi(r.updateTimeMs,t)&&!this.Ci(r.clientId))}Ni(){return this.runTransaction("getActiveClients","readonly",e=>eo(e).G().next(t=>this.Di(t,18e5).map(r=>r.clientId)))}get started(){return this.Lr}getMutationQueue(e,t){return Pa.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Wb(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return ba.lt(this.serializer,e)}getBundleCache(){return this.Qr}runTransaction(e,t,r){I("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=function(c){return c===15?JR:c===14?ig:c===13?rg:c===12?YR:c===11?ng:void b()}(this._i);let o;return this.Ii.runTransaction(e,i,s,a=>(o=new jc(a,this.Br?this.Br.next():Fe.ae),t==="readwrite-primary"?this.mi(o).next(c=>!!c||this.fi(o)).next(c=>{if(!c)throw re(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.hi(!1)),new g(p.FAILED_PRECONDITION,Xp);return r(o)}).next(c=>this.pi(o).next(()=>c)):this.Bi(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Bi(e){return vi(e).get("owner").next(t=>{if(t!==null&&this.bi(t.leaseTimestampMs,5e3)&&!this.Ci(t.ownerId)&&!this.yi(t)&&!(this.oi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new g(p.FAILED_PRECONDITION,fc)})}pi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return vi(e).put("owner",t)}static v(){return Xe.v()}gi(e){const t=vi(e);return t.get("owner").next(r=>this.yi(r)?(I("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):m.resolve())}bi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(re(`Detected an update time that is in the future: ${e} > ${r}`),!1))}di(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ui=()=>{this.ii.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ei()))},this.document.addEventListener("visibilitychange",this.ui),this.inForeground=this.document.visibilityState==="visible")}Mi(){this.ui&&(this.document.removeEventListener("visibilitychange",this.ui),this.ui=null)}Ai(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ai=()=>{this.Fi();const t=/(?:Version|Mobile)\/1[456]/;zy()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ai))}xi(){this.ai&&(this.window.removeEventListener("pagehide",this.ai),this.ai=null)}Ci(e){var t;try{const r=((t=this.Ti)===null||t===void 0?void 0:t.getItem(this.vi(e)))!==null;return I("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return re("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Fi(){if(this.Ti)try{this.Ti.setItem(this.vi(this.clientId),String(Date.now()))}catch(e){re("Failed to set zombie client id.",e)}}Oi(){if(this.Ti)try{this.Ti.removeItem(this.vi(this.clientId))}catch{}}vi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function vi(n){return _e(n,"owner")}function eo(n){return _e(n,"clientMetadata")}function Vl(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Li=r,this.ki=i}static qi(e,t){let r=x(),i=x();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Nl(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(){this.Qi=!1}initialize(e,t){this.Ki=e,this.indexManager=t,this.Qi=!0}getDocumentsMatchingQuery(e,t,r,i){return this.$i(e,t).next(s=>s||this.Ui(e,t,i,r)).next(s=>s||this.Wi(e,t))}$i(e,t){if(vd(t))return m.resolve(null);let r=$e(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Fo(t,null,"F"),r=$e(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=x(...s);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Gi(t,a);return this.zi(t,u,o,c.readTime)?this.$i(e,Fo(t,null,"F")):this.ji(e,u,t,c)}))})))}Ui(e,t,r,i){return vd(t)||i.isEqual(P.min())?this.Wi(e,t):this.Ki.getDocuments(e,r).next(s=>{const o=this.Gi(t,s);return this.zi(t,o,r,i)?this.Wi(e,t):(qc()<=M.DEBUG&&I("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Jc(t)),this.ji(e,o,t,Yp(i,-1)))})}Gi(e,t){let r=new Q(Ig(e));return t.forEach((i,s)=>{Vs(e,s)&&(r=r.add(s))}),r}zi(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Wi(e,t){return qc()<=M.DEBUG&&I("QueryEngine","Using full collection scan to execute query:",Jc(t)),this.Ki.getDocumentsMatchingQuery(e,t,Ke.min())}ji(e,t,r,i){return this.Ki.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e,t,r,i){this.persistence=e,this.Hi=t,this.serializer=i,this.Ji=new K(N),this.Yi=new In(s=>Kn(s),ks),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(r)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new r_(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ji))}}function o_(n,e,t,r){return new h0(n,e,t,r)}async function a_(n,e){const t=A(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.es(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=x();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of s){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return t.localDocuments.getDocuments(r,c).next(u=>({ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function d0(n,e){const t=A(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.Xi.newChangeBuffer({trackRemovals:!0});return function(a,c,u,l){const h=u.batch,d=h.keys();let f=m.resolve();return d.forEach(y=>{f=f.next(()=>l.getEntry(c,y)).next(_=>{const v=u.docVersions.get(y);S(v!==null),_.version.compareTo(v)<0&&(h.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),l.addEntry(_)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=x();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function c_(n){const e=A(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.kr.getLastRemoteSnapshotVersion(t))}function f0(n,e){const t=A(n),r=e.snapshotVersion;let i=t.Ji;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.Xi.newChangeBuffer({trackRemovals:!0});i=t.Ji;const a=[];e.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(t.kr.removeMatchingKeys(s,l.removedDocuments,h).next(()=>t.kr.addMatchingKeys(s,l.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(le.EMPTY_BYTE_STRING,P.min()).withLastLimboFreeSnapshotVersion(P.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),i=i.insert(h,f),function(_,v,E){return _.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,f,l)&&a.push(t.kr.updateTargetData(s,f))});let c=Be(),u=x();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(u_(s,o,e.documentUpdates).next(l=>{c=l.ns,u=l.rs})),!r.isEqual(P.min())){const l=t.kr.getLastRemoteSnapshotVersion(s).next(h=>t.kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return m.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(t.Ji=i,s))}function u_(n,e,t){let r=x(),i=x();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=Be();return t.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(P.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):I("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{ns:o,rs:i}})}function m0(n,e){const t=A(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Br(n,e){const t=A(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.kr.getTargetData(r,e).next(s=>s?(i=s,m.resolve(i)):t.kr.allocateTargetId(r).next(o=>(i=new At(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ji=t.Ji.insert(r.targetId,r),t.Yi.set(e,r.targetId)),r})}async function $r(n,e,t){const r=A(n),i=r.Ji.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!yn(o))throw o;I("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function qo(n,e,t){const r=A(n);let i=P.min(),s=x();return r.persistence.runTransaction("Execute query","readonly",o=>function(c,u,l){const h=A(c),d=h.Yi.get(l);return d!==void 0?m.resolve(h.Ji.get(d)):h.kr.getTargetData(u,l)}(r,o,$e(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,t?i:P.min(),t?s:x())).next(a=>(d_(r,yg(e),a),{documents:a,ss:s})))}function l_(n,e){const t=A(n),r=A(t.kr),i=t.Ji.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>r.ut(s,e).next(o=>o?o.target:null))}function h_(n,e){const t=A(n),r=t.Zi.get(e)||P.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.Xi.getAllFromCollectionGroup(i,e,Yp(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(d_(t,e,i),i))}function d_(n,e,t){let r=n.Zi.get(e)||P.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Zi.set(e,r)}async function p0(n,e,t,r){const i=A(n);let s=x(),o=Be();for(const u of t){const l=e.os(u.metadata.name);u.document&&(s=s.add(l));const h=e._s(u);h.setReadTime(e.us(u.metadata.readTime)),o=o.insert(l,h)}const a=i.Xi.newChangeBuffer({trackRemovals:!0}),c=await Br(i,function(l){return $e(ti(F.fromString(`__bundle__/docs/${l}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>u_(u,a,o).next(l=>(a.apply(u),l)).next(l=>i.kr.removeMatchingKeysForTargetId(u,c.targetId).next(()=>i.kr.addMatchingKeys(u,s,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,l.ns,l.rs)).next(()=>l.ns)))}async function g0(n,e,t=x()){const r=await Br(n,$e(Pl(e.bundledQuery))),i=A(n);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=se(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Qr.saveNamedQuery(s,e);const a=r.withResumeToken(le.EMPTY_BYTE_STRING,o);return i.Ji=i.Ji.insert(a.targetId,a),i.kr.updateTargetData(s,a).next(()=>i.kr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.kr.addMatchingKeys(s,t,r.targetId)).next(()=>i.Qr.saveNamedQuery(s,e))})}function Hd(n,e){return`firestore_clients_${n}_${e}`}function Qd(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function mc(n,e){return`firestore_targets_${n}_${e}`}class Go{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static cs(e,t,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new g(i.error.code,i.error.message))),o?new Go(e,t,i.state,s):(re("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}ls(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Fi{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static cs(e,t){const r=JSON.parse(t);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new g(r.error.code,r.error.message))),s?new Fi(e,r.state,i):(re("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}ls(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class jo{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static cs(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Il();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=eg(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new jo(e,s):(re("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class xl{constructor(e,t){this.clientId=e,this.onlineState=t}static cs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new xl(t.clientId,t.onlineState):(re("SharedClientState",`Failed to parse online state: ${e}`),null)}}class iu{constructor(){this.activeTargetIds=Il()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class pc{constructor(e,t,r,i,s){this.window=e,this.ii=t,this.persistenceKey=r,this.Is=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Ts=this.Es.bind(this),this.ds=new K(N),this.started=!1,this.As=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Rs=Hd(this.persistenceKey,this.Is),this.Vs=function(c){return`firestore_sequence_number_${c}`}(this.persistenceKey),this.ds=this.ds.insert(this.Is,new iu),this.fs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.gs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.ps=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.ys=function(c){return`firestore_online_state_${c}`}(this.persistenceKey),this.ws=function(c){return`firestore_bundle_loaded_v2_${c}`}(this.persistenceKey),this.window.addEventListener("storage",this.Ts)}static v(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ni();for(const r of e){if(r===this.Is)continue;const i=this.getItem(Hd(this.persistenceKey,r));if(i){const s=jo.cs(r,i);s&&(this.ds=this.ds.insert(s.clientId,s))}}this.Ss();const t=this.storage.getItem(this.ys);if(t){const r=this.bs(t);r&&this.Ds(r)}for(const r of this.As)this.Es(r);this.As=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.vs(this.ds)}isActiveQueryTarget(e){let t=!1;return this.ds.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Cs(e,"pending")}updateMutationState(e,t,r){this.Cs(e,t,r),this.Fs(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(mc(this.persistenceKey,e));if(r){const i=Fi.cs(e,r);i&&(t=i.state)}}return this.Ms.hs(e),this.Ss(),t}removeLocalQueryTarget(e){this.Ms.Ps(e),this.Ss()}isLocalQueryTarget(e){return this.Ms.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(mc(this.persistenceKey,e))}updateQueryState(e,t,r){this.xs(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.Fs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Os(e)}notifyBundleLoaded(e){this.Ns(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Ts),this.removeItem(this.Rs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return I("SharedClientState","READ",e,t),t}setItem(e,t){I("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){I("SharedClientState","REMOVE",e),this.storage.removeItem(e)}Es(e){const t=e;if(t.storageArea===this.storage){if(I("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Rs)return void re("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ii.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.fs.test(t.key)){if(t.newValue==null){const r=this.Bs(t.key);return this.Ls(r,null)}{const r=this.ks(t.key,t.newValue);if(r)return this.Ls(r.clientId,r)}}else if(this.gs.test(t.key)){if(t.newValue!==null){const r=this.qs(t.key,t.newValue);if(r)return this.Qs(r)}}else if(this.ps.test(t.key)){if(t.newValue!==null){const r=this.Ks(t.key,t.newValue);if(r)return this.$s(r)}}else if(t.key===this.ys){if(t.newValue!==null){const r=this.bs(t.newValue);if(r)return this.Ds(r)}}else if(t.key===this.Vs){const r=function(s){let o=Fe.ae;if(s!=null)try{const a=JSON.parse(s);S(typeof a=="number"),o=a}catch(a){re("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(t.newValue);r!==Fe.ae&&this.sequenceNumberHandler(r)}else if(t.key===this.ws){const r=this.Us(t.newValue);await Promise.all(r.map(i=>this.syncEngine.Ws(i)))}}}else this.As.push(t)})}}get Ms(){return this.ds.get(this.Is)}Ss(){this.setItem(this.Rs,this.Ms.ls())}Cs(e,t,r){const i=new Go(this.currentUser,e,t,r),s=Qd(this.persistenceKey,this.currentUser,e);this.setItem(s,i.ls())}Fs(e){const t=Qd(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Os(e){const t={clientId:this.Is,onlineState:e};this.storage.setItem(this.ys,JSON.stringify(t))}xs(e,t,r){const i=mc(this.persistenceKey,e),s=new Fi(e,t,r);this.setItem(i,s.ls())}Ns(e){const t=JSON.stringify(Array.from(e));this.setItem(this.ws,t)}Bs(e){const t=this.fs.exec(e);return t?t[1]:null}ks(e,t){const r=this.Bs(e);return jo.cs(r,t)}qs(e,t){const r=this.gs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Go.cs(new fe(s),i,t)}Ks(e,t){const r=this.ps.exec(e),i=Number(r[1]);return Fi.cs(i,t)}bs(e){return xl.cs(e)}Us(e){return JSON.parse(e)}async Qs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Gs(e.batchId,e.state,e.error);I("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}$s(e){return this.syncEngine.zs(e.targetId,e.state,e.error)}Ls(e,t){const r=t?this.ds.insert(e,t):this.ds.remove(e),i=this.vs(this.ds),s=this.vs(r),o=[],a=[];return s.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{s.has(c)||a.push(c)}),this.syncEngine.js(o,a).then(()=>{this.ds=r})}Ds(e){this.ds.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}vs(e){let t=Il();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class f_{constructor(){this.Hs=new iu,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,t,r){this.Js[e]=t}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new iu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{Ys(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){I("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){I("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let to=null;function gc(){return to===null?to=function(){return 268435456+Math.round(2147483648*Math.random())}():to++,"0x"+to.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be="WebChannelConnection";class v0 extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.To=r+"://"+t.host,this.Eo=`projects/${i}/databases/${s}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Ro(){return!1}Vo(t,r,i,s,o){const a=gc(),c=this.mo(t,r);I("RestConnection",`Sending RPC '${t}' ${a}:`,c,i);const u={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(u,s,o),this.po(t,c,u,i).then(l=>(I("RestConnection",`Received RPC '${t}' ${a}: `,l),l),l=>{throw nt("RestConnection",`RPC '${t}' ${a} failed with error: `,l,"url: ",c,"request:",i),l})}yo(t,r,i,s,o,a){return this.Vo(t,r,i,s,o)}fo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ei}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}mo(t,r){const i=y0[t];return`${this.To}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,t,r,i){const s=gc();return new Promise((o,a)=>{const c=new gR;c.setWithCredentials(!0),c.listenOnce(fR.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case hc.NO_ERROR:const l=c.getResponseJson();I(be,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(l)),o(l);break;case hc.TIMEOUT:I(be,`RPC '${e}' ${s} timed out`),a(new g(p.DEADLINE_EXCEEDED,"Request time out"));break;case hc.HTTP_ERROR:const h=c.getStatus();if(I(be,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const y=function(v){const E=v.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(E)>=0?E:p.UNKNOWN}(f.status);a(new g(y,f.message))}else a(new g(p.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new g(p.UNAVAILABLE,"Connection failed."));break;default:b()}}finally{I(be,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);I(be,`RPC '${e}' ${s} sending request:`,i),c.send(t,"POST",u,r,15)})}wo(e,t,r){const i=gc(),s=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=hR(),a=dR(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new pR({})),this.fo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const l=s.join("");I(be,`Creating RPC '${e}' stream ${i}: ${l}`,c);const h=o.createWebChannel(l,c);let d=!1,f=!1;const y=new I0({so:v=>{f?I(be,`Not sending because RPC '${e}' stream ${i} is closed:`,v):(d||(I(be,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),I(be,`RPC '${e}' stream ${i} sending:`,v),h.send(v))},oo:()=>h.close()}),_=(v,E,k)=>{v.listen(E,D=>{try{k(D)}catch($){setTimeout(()=>{throw $},0)}})};return _(h,Hs.EventType.OPEN,()=>{f||I(be,`RPC '${e}' stream ${i} transport opened.`)}),_(h,Hs.EventType.CLOSE,()=>{f||(f=!0,I(be,`RPC '${e}' stream ${i} transport closed`),y.Po())}),_(h,Hs.EventType.ERROR,v=>{f||(f=!0,nt(be,`RPC '${e}' stream ${i} transport errored:`,v),y.Po(new g(p.UNAVAILABLE,"The operation could not be completed")))}),_(h,Hs.EventType.MESSAGE,v=>{var E;if(!f){const k=v.data[0];S(!!k);const D=k,$=D.error||((E=D[0])===null||E===void 0?void 0:E.error);if($){I(be,`RPC '${e}' stream ${i} received error:`,$);const q=$.status;let U=function(ci){const qs=ae[ci];if(qs!==void 0)return Ng(qs)}(q),Ie=$.message;U===void 0&&(U=p.INTERNAL,Ie="Unknown error status: "+q+" with message "+$.message),f=!0,y.Po(new g(U,Ie)),h.close()}else I(be,`RPC '${e}' stream ${i} received:`,k),y.Io(k)}}),_(a,mR.STAT_EVENT,v=>{v.stat===id.PROXY?I(be,`RPC '${e}' stream ${i} detected buffering proxy`):v.stat===id.NOPROXY&&I(be,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.ho()},0),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(){return typeof window<"u"?window:null}function po(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(n){return new Sb(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=t,this.So=r,this.bo=i,this.Do=s,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const t=Math.floor(this.vo+this.Oo()),r=Math.max(0,Date.now()-this.Fo),i=Math.max(0,t-r);i>0&&I("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.vo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Fo=Date.now(),e())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e,t,r,i,s,o,a,c){this.ii=e,this.Bo=r,this.Lo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new Ol(e,t)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,t){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,e!==4?this.Ko.reset():t&&t.code===p.RESOURCE_EXHAUSTED?(re(t.toString()),re("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):t&&t.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(t)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),t=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.ko===t&&this.e_(r,i)},r=>{e(()=>{const i=new g(p.UNKNOWN,"Fetching auth token failed: "+r.message);return this.t_(i)})})}e_(e,t){const r=this.Xo(this.ko);this.stream=this.n_(e,t),this.stream._o(()=>{r(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{r(()=>this.t_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(e){return I("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget(()=>this.ko===e?t():(I("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class w0 extends p_{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}n_(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.Ko.reset();const t=Db(this.serializer,e),r=function(s){if(!("targetChange"in s))return P.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?P.min():o.readTime?se(o.readTime):P.min()}(e);return this.listener.r_(t,r)}i_(e){const t={};t.database=cs(this.serializer),t.addTarget=function(s,o){let a;const c=o.target;if(a=Lo(c)?{documents:qg(s,c)}:{query:Gg(s,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Mg(s,o.resumeToken);const u=Xc(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(P.min())>0){a.readTime=Ur(s,o.snapshotVersion.toTimestamp());const u=Xc(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=Nb(this.serializer,e);r&&(t.labels=r),this.Ho(t)}s_(e){const t={};t.database=cs(this.serializer),t.removeTarget=e,this.Ho(t)}}class E0 extends p_{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(S(!!e.streamToken),this.lastStreamToken=e.streamToken,this.o_){this.Ko.reset();const t=Vb(e.writeResults,e.commitTime),r=se(e.commitTime);return this.listener.u_(r,t)}return S(!e.writeResults||e.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const e={};e.database=cs(this.serializer),this.Ho(e)}a_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>us(this.serializer,r))};this.Ho(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0 extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.h_=!1}P_(){if(this.h_)throw new g(p.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,t,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Vo(e,t,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new g(p.UNKNOWN,i.toString())})}yo(e,t,r,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.yo(e,t,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new g(p.UNKNOWN,s.toString())})}terminate(){this.h_=!0}}class A0{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(e){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,e==="Online"&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(re(t),this.d_=!1):I("OnlineStateTracker",t)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=s,this.S_.Ys(o=>{r.enqueueAndForget(async()=>{vn(this)&&(I("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=A(c);u.y_.add(4),await ii(u),u.b_.set("Unknown"),u.y_.delete(4),await Ms(u)}(this))})}),this.b_=new A0(r,i)}}async function Ms(n){if(vn(n))for(const e of n.w_)await e(!0)}async function ii(n){for(const e of n.w_)await e(!1)}function Ca(n,e){const t=A(n);t.p_.has(e.targetId)||(t.p_.set(e.targetId,e),Fl(t)?Ml(t):oi(t).Uo()&&Ll(t,e))}function ls(n,e){const t=A(n),r=oi(t);t.p_.delete(e),r.Uo()&&g_(t,e),t.p_.size===0&&(r.Uo()?r.zo():vn(t)&&t.b_.set("Unknown"))}function Ll(n,e){if(n.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(P.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}oi(n).i_(e)}function g_(n,e){n.D_.Be(e),oi(n).s_(e)}function Ml(n){n.D_=new Ab({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.p_.get(e)||null,rt:()=>n.datastore.serializer.databaseId}),oi(n).start(),n.b_.A_()}function Fl(n){return vn(n)&&!oi(n).$o()&&n.p_.size>0}function vn(n){return A(n).y_.size===0}function __(n){n.D_=void 0}async function b0(n){n.p_.forEach((e,t)=>{Ll(n,e)})}async function P0(n,e){__(n),Fl(n)?(n.b_.m_(e),Ml(n)):n.b_.set("Unknown")}async function S0(n,e,t){if(n.b_.set("Online"),e instanceof Lg&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.p_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.p_.delete(a),i.D_.removeTarget(a))}(n,e)}catch(r){I("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await zo(n,r)}else if(e instanceof mo?n.D_.We(e):e instanceof Og?n.D_.Ze(e):n.D_.je(e),!t.isEqual(P.min()))try{const r=await c_(n.localStore);t.compareTo(r)>=0&&await function(s,o){const a=s.D_.st(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const l=s.p_.get(u);l&&s.p_.set(u,l.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const l=s.p_.get(c);if(!l)return;s.p_.set(c,l.withResumeToken(le.EMPTY_BYTE_STRING,l.snapshotVersion)),g_(s,c);const h=new At(l.target,c,u,l.sequenceNumber);Ll(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(r){I("RemoteStore","Failed to raise snapshot:",r),await zo(n,r)}}async function zo(n,e,t){if(!yn(e))throw e;n.y_.add(1),await ii(n),n.b_.set("Offline"),t||(t=()=>c_(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{I("RemoteStore","Retrying IndexedDB access"),await t(),n.y_.delete(1),await Ms(n)})}function y_(n,e){return e().catch(t=>zo(n,t,e))}async function si(n){const e=A(n),t=cn(e);let r=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;C0(e);)try{const i=await m0(e.localStore,r);if(i===null){e.g_.length===0&&t.zo();break}r=i.batchId,k0(e,i)}catch(i){await zo(e,i)}I_(e)&&v_(e)}function C0(n){return vn(n)&&n.g_.length<10}function k0(n,e){n.g_.push(e);const t=cn(n);t.Uo()&&t.__&&t.a_(e.mutations)}function I_(n){return vn(n)&&!cn(n).$o()&&n.g_.length>0}function v_(n){cn(n).start()}async function D0(n){cn(n).l_()}async function V0(n){const e=cn(n);for(const t of n.g_)e.a_(t.mutations)}async function N0(n,e,t){const r=n.g_.shift(),i=El.from(r,e,t);await y_(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await si(n)}async function x0(n,e){e&&cn(n).__&&await async function(r,i){if(function(o){return Vg(o)&&o!==p.ABORTED}(i.code)){const s=r.g_.shift();cn(r).Go(),await y_(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await si(r)}}(n,e),I_(n)&&v_(n)}async function Jd(n,e){const t=A(n);t.asyncQueue.verifyOperationInProgress(),I("RemoteStore","RemoteStore received new credentials");const r=vn(t);t.y_.add(3),await ii(t),r&&t.b_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.y_.delete(3),await Ms(t)}async function su(n,e){const t=A(n);e?(t.y_.delete(2),await Ms(t)):e||(t.y_.add(2),await ii(t),t.b_.set("Unknown"))}function oi(n){return n.v_||(n.v_=function(t,r,i){const s=A(t);return s.P_(),new w0(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{_o:b0.bind(null,n),uo:P0.bind(null,n),r_:S0.bind(null,n)}),n.w_.push(async e=>{e?(n.v_.Go(),Fl(n)?Ml(n):n.b_.set("Unknown")):(await n.v_.stop(),__(n))})),n.v_}function cn(n){return n.C_||(n.C_=function(t,r,i){const s=A(t);return s.P_(),new E0(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{_o:D0.bind(null,n),uo:x0.bind(null,n),c_:V0.bind(null,n),u_:N0.bind(null,n)}),n.w_.push(async e=>{e?(n.C_.Go(),await si(n)):(await n.C_.stop(),n.g_.length>0&&(I("RemoteStore",`Stopping write stream with ${n.g_.length} pending writes`),n.g_=[]))})),n.C_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new me,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new Ul(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new g(p.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ai(n,e){if(re("AsyncQueue",`${e}: ${n}`),yn(n))return new g(p.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e){this.comparator=e?(t,r)=>e(t,r)||T.comparator(t.key,r.key):(t,r)=>T.comparator(t.key,r.key),this.keyedMap=bi(),this.sortedSet=new K(this.comparator)}static emptySet(e){return new Cr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Cr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Cr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(){this.F_=new K(T.comparator)}track(e){const t=e.doc.key,r=this.F_.get(t);r?e.type!==0&&r.type===3?this.F_=this.F_.insert(t,e):e.type===3&&r.type!==1?this.F_=this.F_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.F_=this.F_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.F_=this.F_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.F_=this.F_.remove(t):e.type===1&&r.type===2?this.F_=this.F_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.F_=this.F_.insert(t,{type:2,doc:e.doc}):b():this.F_=this.F_.insert(t,e)}M_(){const e=[];return this.F_.inorderTraversal((t,r)=>{e.push(r)}),e}}class qr{constructor(e,t,r,i,s,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new qr(e,t,Cr.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ds(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(){this.x_=void 0,this.listeners=[]}}class L0{constructor(){this.queries=new In(e=>_g(e),Ds),this.onlineState="Unknown",this.O_=new Set}}async function Bl(n,e){const t=A(n),r=e.query;let i=!1,s=t.queries.get(r);if(s||(i=!0,s=new O0),i)try{s.x_=await t.onListen(r)}catch(o){const a=ai(o,`Initialization of query '${Jc(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,s),s.listeners.push(e),e.N_(t.onlineState),s.x_&&e.B_(s.x_)&&ql(t)}async function $l(n,e){const t=A(n),r=e.query;let i=!1;const s=t.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return t.queries.delete(r),t.onUnlisten(r)}function M0(n,e){const t=A(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.listeners)a.B_(i)&&(r=!0);o.x_=i}}r&&ql(t)}function F0(n,e,t){const r=A(n),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(t);r.queries.delete(e)}function ql(n){n.O_.forEach(e=>{e.next()})}class Gl{constructor(e,t,r){this.query=e,this.L_=t,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=r||{}}B_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new qr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),t=!0):this.K_(e,this.onlineState)&&(this.U_(e),t=!0),this.q_=e,t}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let t=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),t=!0),t}K_(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.W_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Q_(e){if(e.docChanges.length>0)return!0;const t=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}U_(e){e=qr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e,t){this.G_=e,this.byteLength=t}z_(){return"metadata"in this.G_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e){this.serializer=e}os(e){return pt(this.serializer,e)}_s(e){return e.metadata.exists?$g(this.serializer,e.document,!1):H.newNoDocument(this.os(e.metadata.name),this.us(e.metadata.readTime))}us(e){return se(e)}}class B0{constructor(e,t,r){this.j_=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=w_(e)}H_(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.G_.namedQuery)this.queries.push(e.G_.namedQuery);else if(e.G_.documentMetadata){this.documents.push({metadata:e.G_.documentMetadata}),e.G_.documentMetadata.exists||++t;const r=F.fromString(e.G_.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.G_.document&&(this.documents[this.documents.length-1].document=e.G_.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}J_(e){const t=new Map,r=new Zd(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.os(i.metadata.name);for(const o of i.metadata.queries){const a=(t.get(o)||x()).add(s);t.set(o,a)}}return t}async complete(){const e=await p0(this.localStore,new Zd(this.serializer),this.documents,this.j_.id),t=this.J_(this.documents);for(const r of this.queries)await g0(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Y_:this.collectionGroups,Z_:e}}}function w_(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e){this.key=e}}class T_{constructor(e){this.key=e}}class A_{constructor(e,t){this.query=e,this.X_=t,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=x(),this.mutatedKeys=x(),this.na=Ig(e),this.ra=new Cr(this.na)}get ia(){return this.X_}sa(e,t){const r=t?t.oa:new Xd,i=t?t.ra:this.ra;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const d=i.get(l),f=Vs(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),_=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let v=!1;d&&f?d.data.isEqual(f.data)?y!==_&&(r.track({type:3,doc:f}),v=!0):this._a(d,f)||(r.track({type:2,doc:f}),v=!0,(c&&this.na(f,c)>0||u&&this.na(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),v=!0):d&&!f&&(r.track({type:1,doc:d}),v=!0,(c||u)&&(a=!0)),v&&(f?(o=o.add(f),s=_?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{ra:o,oa:r,zi:a,mutatedKeys:s}}_a(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){const i=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const s=e.oa.M_();s.sort((u,l)=>function(d,f){const y=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return b()}};return y(d)-y(f)}(u.type,l.type)||this.na(u.doc,l.doc)),this.aa(r);const o=t?this.ua():[],a=this.ta.size===0&&this.current?1:0,c=a!==this.ea;return this.ea=a,s.length!==0||c?{snapshot:new qr(this.query,e.ra,i,s,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new Xd,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach(t=>this.X_=this.X_.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.X_=this.X_.delete(t)),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=x(),this.ra.forEach(r=>{this.la(r.key)&&(this.ta=this.ta.add(r.key))});const t=[];return e.forEach(r=>{this.ta.has(r)||t.push(new T_(r))}),this.ta.forEach(r=>{e.has(r)||t.push(new E_(r))}),t}ha(e){this.X_=e.ss,this.ta=x();const t=this.sa(e.documents);return this.applyChanges(t,!0)}Pa(){return qr.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class $0{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class q0{constructor(e){this.key=e,this.Ia=!1}}class G0{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new In(a=>_g(a),Ds),this.da=new Map,this.Aa=new Set,this.Ra=new K(T.comparator),this.Va=new Map,this.ma=new kl,this.fa={},this.ga=new Map,this.pa=Jn.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function j0(n,e){const t=Hl(n);let r,i;const s=t.Ea.get(e);if(s)r=s.targetId,t.sharedClientState.addLocalQueryTarget(r),i=s.view.Pa();else{const o=await Br(t.localStore,$e(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await jl(t,e,r,a==="current",o.resumeToken),t.isPrimaryClient&&Ca(t.remoteStore,o)}return i}async function jl(n,e,t,r,i){n.wa=(h,d,f)=>async function(_,v,E,k){let D=v.view.sa(E);D.zi&&(D=await qo(_.localStore,v.query,!1).then(({documents:U})=>v.view.sa(U,D)));const $=k&&k.targetChanges.get(v.targetId),q=v.view.applyChanges(D,_.isPrimaryClient,$);return ou(_,v.targetId,q.ca),q.snapshot}(n,h,d,f);const s=await qo(n.localStore,e,!0),o=new A_(e,s.ss),a=o.sa(s.documents),c=Os.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,c);ou(n,t,u.ca);const l=new $0(e,t,o);return n.Ea.set(e,l),n.da.has(t)?n.da.get(t).push(e):n.da.set(t,[e]),u.snapshot}async function z0(n,e){const t=A(n),r=t.Ea.get(e),i=t.da.get(r.targetId);if(i.length>1)return t.da.set(r.targetId,i.filter(s=>!Ds(s,e))),void t.Ea.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await $r(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),ls(t.remoteStore,r.targetId),Gr(t,r.targetId)}).catch(_n)):(Gr(t,r.targetId),await $r(t.localStore,r.targetId,!0))}async function K0(n,e,t){const r=Ql(n);try{const i=await function(o,a){const c=A(o),u=J.now(),l=a.reduce((f,y)=>f.add(y.key),x());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let y=Be(),_=x();return c.Xi.getEntries(f,l).next(v=>{y=v,y.forEach((E,k)=>{k.isValidDocument()||(_=_.add(E))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,y)).next(v=>{h=v;const E=[];for(const k of a){const D=wb(k,h.get(k.key).overlayedDocument);D!=null&&E.push(new xt(k.key,D,cg(D.value.mapValue),Y.exists(!0)))}return c.mutationQueue.addMutationBatch(f,u,E,a)}).next(v=>{d=v;const E=v.applyToLocalDocumentSet(h,_);return c.documentOverlayCache.saveOverlays(f,v.batchId,E)})}).then(()=>({batchId:d.batchId,changes:wg(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let u=o.fa[o.currentUser.toKey()];u||(u=new K(N)),u=u.insert(a,c),o.fa[o.currentUser.toKey()]=u}(r,i.batchId,t),await Ot(r,i.changes),await si(r.remoteStore)}catch(i){const s=ai(i,"Failed to persist write");t.reject(s)}}async function R_(n,e){const t=A(n);try{const r=await f0(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Va.get(s);o&&(S(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ia=!0:i.modifiedDocuments.size>0?S(o.Ia):i.removedDocuments.size>0&&(S(o.Ia),o.Ia=!1))}),await Ot(t,r,e)}catch(r){await _n(r)}}function ef(n,e,t){const r=A(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Ea.forEach((s,o)=>{const a=o.view.N_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=A(o);c.onlineState=a;let u=!1;c.queries.forEach((l,h)=>{for(const d of h.listeners)d.N_(a)&&(u=!0)}),u&&ql(c)}(r.eventManager,e),i.length&&r.Ta.r_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function W0(n,e,t){const r=A(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Va.get(e),s=i&&i.key;if(s){let o=new K(T.comparator);o=o.insert(s,H.newNoDocument(s,P.min()));const a=x().add(s),c=new xs(P.min(),new Map,new K(N),o,a);await R_(r,c),r.Ra=r.Ra.remove(s),r.Va.delete(e),Wl(r)}else await $r(r.localStore,e,!1).then(()=>Gr(r,e,t)).catch(_n)}async function H0(n,e){const t=A(n),r=e.batch.batchId;try{const i=await d0(t.localStore,e);Kl(t,r,null),zl(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ot(t,i)}catch(i){await _n(i)}}async function Q0(n,e,t){const r=A(n);try{const i=await function(o,a){const c=A(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return c.mutationQueue.lookupMutationBatch(u,a).next(h=>(S(h!==null),l=h.keys(),c.mutationQueue.removeMutationBatch(u,h))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,l,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>c.localDocuments.getDocuments(u,l))})}(r.localStore,e);Kl(r,e,t),zl(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ot(r,i)}catch(i){await _n(i)}}async function Y0(n,e){const t=A(n);vn(t.remoteStore)||I("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=A(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",c=>a.mutationQueue.getHighestUnacknowledgedBatchId(c))}(t.localStore);if(r===-1)return void e.resolve();const i=t.ga.get(r)||[];i.push(e),t.ga.set(r,i)}catch(r){const i=ai(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function zl(n,e){(n.ga.get(e)||[]).forEach(t=>{t.resolve()}),n.ga.delete(e)}function Kl(n,e,t){const r=A(n);let i=r.fa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.fa[r.currentUser.toKey()]=i}}function Gr(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.da.get(e))n.Ea.delete(r),t&&n.Ta.Sa(r,t);n.da.delete(e),n.isPrimaryClient&&n.ma.Ar(e).forEach(r=>{n.ma.containsKey(r)||b_(n,r)})}function b_(n,e){n.Aa.delete(e.path.canonicalString());const t=n.Ra.get(e);t!==null&&(ls(n.remoteStore,t),n.Ra=n.Ra.remove(e),n.Va.delete(t),Wl(n))}function ou(n,e,t){for(const r of t)r instanceof E_?(n.ma.addReference(r.key,e),J0(n,r)):r instanceof T_?(I("SyncEngine","Document no longer in limbo: "+r.key),n.ma.removeReference(r.key,e),n.ma.containsKey(r.key)||b_(n,r.key)):b()}function J0(n,e){const t=e.key,r=t.path.canonicalString();n.Ra.get(t)||n.Aa.has(r)||(I("SyncEngine","New document in limbo: "+t),n.Aa.add(r),Wl(n))}function Wl(n){for(;n.Aa.size>0&&n.Ra.size<n.maxConcurrentLimboResolutions;){const e=n.Aa.values().next().value;n.Aa.delete(e);const t=new T(F.fromString(e)),r=n.pa.next();n.Va.set(r,new q0(t)),n.Ra=n.Ra.insert(t,r),Ca(n.remoteStore,new At($e(ti(t.path)),r,"TargetPurposeLimboResolution",Fe.ae))}}async function Ot(n,e,t){const r=A(n),i=[],s=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach((a,c)=>{o.push(r.wa(c,e,t).then(u=>{if((u||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=Nl.qi(c.targetId,u);s.push(l)}}))}),await Promise.all(o),r.Ta.r_(i),await async function(c,u){const l=A(c);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>m.forEach(u,d=>m.forEach(d.Li,f=>l.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>m.forEach(d.ki,f=>l.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!yn(h))throw h;I("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const f=l.Ji.get(d),y=f.snapshotVersion,_=f.withLastLimboFreeSnapshotVersion(y);l.Ji=l.Ji.insert(d,_)}}}(r.localStore,s))}async function X0(n,e){const t=A(n);if(!t.currentUser.isEqual(e)){I("SyncEngine","User change. New user:",e.toKey());const r=await a_(t.localStore,e);t.currentUser=e,function(s,o){s.ga.forEach(a=>{a.forEach(c=>{c.reject(new g(p.CANCELLED,o))})}),s.ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ot(t,r.ts)}}function Z0(n,e){const t=A(n),r=t.Va.get(e);if(r&&r.Ia)return x().add(r.key);{let i=x();const s=t.da.get(e);if(!s)return i;for(const o of s){const a=t.Ea.get(o);i=i.unionWith(a.view.ia)}return i}}async function eP(n,e){const t=A(n),r=await qo(t.localStore,e.query,!0),i=e.view.ha(r);return t.isPrimaryClient&&ou(t,e.targetId,i.ca),i}async function tP(n,e){const t=A(n);return h_(t.localStore,e).then(r=>Ot(t,r))}async function nP(n,e,t,r){const i=A(n),s=await function(a,c){const u=A(a),l=A(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",h=>l.Dn(h,c).next(d=>d?u.localDocuments.getDocuments(h,d):m.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await si(i.remoteStore):t==="acknowledged"||t==="rejected"?(Kl(i,e,r||null),zl(i,e),function(a,c){A(A(a).mutationQueue).Cn(c)}(i.localStore,e)):b(),await Ot(i,s)):I("SyncEngine","Cannot apply mutation batch with id: "+e)}async function rP(n,e){const t=A(n);if(Hl(t),Ql(t),e===!0&&t.ya!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=await tf(t,r.toArray());t.ya=!0,await su(t.remoteStore,!0);for(const s of i)Ca(t.remoteStore,s)}else if(e===!1&&t.ya!==!1){const r=[];let i=Promise.resolve();t.da.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Gr(t,o),$r(t.localStore,o,!0))),ls(t.remoteStore,o)}),await i,await tf(t,r),function(o){const a=A(o);a.Va.forEach((c,u)=>{ls(a.remoteStore,u)}),a.ma.Rr(),a.Va=new Map,a.Ra=new K(T.comparator)}(t),t.ya=!1,await su(t.remoteStore,!1)}}async function tf(n,e,t){const r=A(n),i=[],s=[];for(const o of e){let a;const c=r.da.get(o);if(c&&c.length!==0){a=await Br(r.localStore,$e(c[0]));for(const u of c){const l=r.Ea.get(u),h=await eP(r,l);h.snapshot&&s.push(h.snapshot)}}else{const u=await l_(r.localStore,o);a=await Br(r.localStore,u),await jl(r,P_(u),o,!1,a.resumeToken)}i.push(a)}return r.Ta.r_(s),i}function P_(n){return gg(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function iP(n){return function(t){return A(A(t).persistence).Ni()}(A(n).localStore)}async function sP(n,e,t,r){const i=A(n);if(i.ya)return void I("SyncEngine","Ignoring unexpected query state notification.");const s=i.da.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await h_(i.localStore,yg(s[0])),a=xs.createSynthesizedRemoteEventForCurrentChange(e,t==="current",le.EMPTY_BYTE_STRING);await Ot(i,o,a);break}case"rejected":await $r(i.localStore,e,!0),Gr(i,e,r);break;default:b()}}async function oP(n,e,t){const r=Hl(n);if(r.ya){for(const i of e){if(r.da.has(i)){I("SyncEngine","Adding an already active target "+i);continue}const s=await l_(r.localStore,i),o=await Br(r.localStore,s);await jl(r,P_(s),o.targetId,!1,o.resumeToken),Ca(r.remoteStore,o)}for(const i of t)r.da.has(i)&&await $r(r.localStore,i,!1).then(()=>{ls(r.remoteStore,i),Gr(r,i)}).catch(_n)}}function Hl(n){const e=A(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=R_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Z0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=W0.bind(null,e),e.Ta.r_=M0.bind(null,e.eventManager),e.Ta.Sa=F0.bind(null,e.eventManager),e}function Ql(n){const e=A(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=H0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Q0.bind(null,e),e}function aP(n,e,t){const r=A(n);(async function(s,o,a){try{const c=await o.getMetadata();if(await function(f,y){const _=A(f),v=se(y.createTime);return _.persistence.runTransaction("hasNewerBundle","readonly",E=>_.Qr.getBundleMetadata(E,y.id)).then(E=>!!E&&E.createTime.compareTo(v)>=0)}(s.localStore,c))return await o.close(),a._completeWith(function(f){return{taskState:"Success",documentsLoaded:f.totalDocuments,bytesLoaded:f.totalBytes,totalDocuments:f.totalDocuments,totalBytes:f.totalBytes}}(c)),Promise.resolve(new Set);a._updateProgress(w_(c));const u=new B0(c,s.localStore,o.serializer);let l=await o.ba();for(;l;){const d=await u.H_(l);d&&a._updateProgress(d),l=await o.ba()}const h=await u.complete();return await Ot(s,h.Z_,void 0),await function(f,y){const _=A(f);return _.persistence.runTransaction("Save bundle","readwrite",v=>_.Qr.saveBundleMetadata(v,y))}(s.localStore,c),a._completeWith(h.progress),Promise.resolve(h.Y_)}catch(c){return nt("SyncEngine",`Loading bundle failed with ${c}`),a._failWith(c),Promise.resolve(new Set)}})(r,e,t).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class au{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ls(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return o_(this.persistence,new s_,e.initialUser,this.serializer)}createPersistence(e){return new i_(Sa.zr,this.serializer)}createSharedClientState(e){return new f_}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class S_ extends au{constructor(e,t,r){super(),this.Da=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Da.initialize(this,e),await Ql(this.Da.syncEngine),await si(this.Da.remoteStore),await this.persistence.Vi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return o_(this.persistence,new s_,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new Yb(r,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const r=new NR(t,this.persistence);return new VR(e.asyncQueue,r)}createPersistence(e){const t=Vl(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Me.withCacheSize(this.cacheSizeBytes):Me.DEFAULT;return new Dl(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,m_(),po(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new f_}}class cP extends S_{constructor(e,t){super(e,t,!1),this.Da=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Da.syncEngine;this.sharedClientState instanceof pc&&(this.sharedClientState.syncEngine={Gs:nP.bind(null,t),zs:sP.bind(null,t),js:oP.bind(null,t),Ni:iP.bind(null,t),Ws:tP.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Vi(async r=>{await rP(this.Da.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const t=m_();if(!pc.v(t))throw new g(p.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Vl(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new pc(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Yl{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ef(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=X0.bind(null,this.syncEngine),await su(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new L0}()}createDatastore(e){const t=Ls(e.databaseInfo.databaseId),r=function(s){return new v0(s)}(e.databaseInfo);return function(s,o,a,c){return new T0(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,a){return new R0(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>ef(this.syncEngine,t,0),function(){return Yd.v()?new Yd:new _0}())}createSyncEngine(e,t){return function(i,s,o,a,c,u,l){const h=new G0(i,s,o,a,c,u);return l&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(t){const r=A(t);I("RemoteStore","RemoteStore shutting down."),r.y_.add(5),await ii(r),r.S_.shutdown(),r.b_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):re("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(e,t){this.Fa=e,this.serializer=t,this.metadata=new me,this.buffer=new Uint8Array,this.Ma=function(){return new TextDecoder("utf-8")}(),this.xa().then(r=>{r&&r.z_()?this.metadata.resolve(r.G_.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.G_)}`))},r=>this.metadata.reject(r))}close(){return this.Fa.cancel()}async getMetadata(){return this.metadata.promise}async ba(){return await this.getMetadata(),this.xa()}async xa(){const e=await this.Oa();if(e===null)return null;const t=this.Ma.decode(e),r=Number(t);isNaN(r)&&this.Na(`length string (${t}) is not valid number`);const i=await this.Ba(r);return new U0(JSON.parse(i),e.length+r)}La(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Oa(){for(;this.La()<0&&!await this.ka(););if(this.buffer.length===0)return null;const e=this.La();e<0&&this.Na("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Ba(e){for(;this.buffer.length<e;)await this.ka()&&this.Na("Reached the end of bundle when more is expected.");const t=this.Ma.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Na(e){throw this.Fa.cancel(),new Error(`Invalid bundle format: ${e}`)}async ka(){const e=await this.Fa.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new g(p.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(i,s){const o=A(i),a=cs(o.serializer)+"/documents",c={documents:s.map(d=>as(o.serializer,d))},u=await o.yo("BatchGetDocuments",a,c,s.length),l=new Map;u.forEach(d=>{const f=kb(o.serializer,d);l.set(f.key.toString(),f)});const h=[];return s.forEach(d=>{const f=l.get(d.toString());S(!!f),h.push(f)}),h}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new ri(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const i=T.fromPath(r);this.mutations.push(new vl(i,this.precondition(i)))}),await async function(r,i){const s=A(r),o=cs(s.serializer)+"/documents",a={writes:i.map(c=>us(s.serializer,c))};await s.Vo("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw b();t=P.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new g(p.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(P.min())?Y.exists(!1):Y.updateTime(t):Y.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(P.min()))throw new g(p.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Y.updateTime(t)}return Y.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this.qa=r.maxAttempts,this.Ko=new Ol(this.asyncQueue,"transaction_retry")}run(){this.qa-=1,this.Qa()}Qa(){this.Ko.xo(async()=>{const e=new lP(this.datastore),t=this.Ka(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.$a(i)}))}).catch(r=>{this.$a(r)})})}Ka(e){try{const t=this.updateFunction(e);return!Cs(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}$a(e){this.qa>0&&this.Ua(e)?(this.qa-=1,this.asyncQueue.enqueueAndForget(()=>(this.Qa(),Promise.resolve()))):this.deferred.reject(e)}Ua(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!Vg(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=fe.UNAUTHENTICATED,this.clientId=Wp.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{I("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(I("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new g(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new me;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ai(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function go(n,e){n.asyncQueue.verifyOperationInProgress(),I("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await a_(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function cu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Jl(n);I("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(i=>Jd(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>Jd(e.remoteStore,s)),n._onlineComponents=e}function C_(n){return n.name==="FirebaseError"?n.code===p.FAILED_PRECONDITION||n.code===p.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Jl(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){I("FirestoreClient","Using user provided OfflineComponentProvider");try{await go(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!C_(t))throw t;nt("Error using user provided cache. Falling back to memory cache: "+t),await go(n,new au)}}else I("FirestoreClient","Using default OfflineComponentProvider"),await go(n,new au);return n._offlineComponents}async function Da(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(I("FirestoreClient","Using user provided OnlineComponentProvider"),await cu(n,n._uninitializedComponentsProvider._online)):(I("FirestoreClient","Using default OnlineComponentProvider"),await cu(n,new Yl))),n._onlineComponents}function k_(n){return Jl(n).then(e=>e.persistence)}function Xl(n){return Jl(n).then(e=>e.localStore)}function D_(n){return Da(n).then(e=>e.remoteStore)}function Zl(n){return Da(n).then(e=>e.syncEngine)}function fP(n){return Da(n).then(e=>e.datastore)}async function jr(n){const e=await Da(n),t=e.eventManager;return t.onListen=j0.bind(null,e.syncEngine),t.onUnlisten=z0.bind(null,e.syncEngine),t}function mP(n){return n.asyncQueue.enqueue(async()=>{const e=await k_(n),t=await D_(n);return e.setNetworkEnabled(!0),function(i){const s=A(i);return s.y_.delete(0),Ms(s)}(t)})}function pP(n){return n.asyncQueue.enqueue(async()=>{const e=await k_(n),t=await D_(n);return e.setNetworkEnabled(!1),async function(i){const s=A(i);s.y_.add(0),await ii(s),s.b_.set("Offline")}(t)})}function gP(n,e){const t=new me;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(u,l){const h=A(u);return h.persistence.runTransaction("read document","readonly",d=>h.localDocuments.getDocument(d,l))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new g(p.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const c=ai(a,`Failed to get document '${s} from cache`);o.reject(c)}}(await Xl(n),e,t)),t.promise}function V_(n,e,t={}){const r=new me;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const l=new ka({next:d=>{o.enqueueAndForget(()=>$l(s,h));const f=d.docs.has(a);!f&&d.fromCache?u.reject(new g(p.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&c&&c.source==="server"?u.reject(new g(p.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new Gl(ti(a.path),l,{includeMetadataChanges:!0,W_:!0});return Bl(s,h)}(await jr(n),n.asyncQueue,e,t,r)),r.promise}function _P(n,e){const t=new me;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await qo(i,s,!0),c=new A_(s,a.ss),u=c.sa(a.documents),l=c.applyChanges(u,!1);o.resolve(l.snapshot)}catch(a){const c=ai(a,`Failed to execute query '${s} against cache`);o.reject(c)}}(await Xl(n),e,t)),t.promise}function N_(n,e,t={}){const r=new me;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const l=new ka({next:d=>{o.enqueueAndForget(()=>$l(s,h)),d.fromCache&&c.source==="server"?u.reject(new g(p.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new Gl(a,l,{includeMetadataChanges:!0,W_:!0});return Bl(s,h)}(await jr(n),n.asyncQueue,e,t,r)),r.promise}function yP(n,e){const t=new ka(e);return n.asyncQueue.enqueueAndForget(async()=>function(i,s){A(i).O_.add(s),s.next()}(await jr(n),t)),()=>{t.Ca(),n.asyncQueue.enqueueAndForget(async()=>function(i,s){A(i).O_.delete(s)}(await jr(n),t))}}function IP(n,e,t,r){const i=function(o,a){let c;return c=typeof o=="string"?xg().encode(o):o,function(l,h){return new uP(l,h)}(function(l,h){if(l instanceof Uint8Array)return nf(l,h);if(l instanceof ArrayBuffer)return nf(new Uint8Array(l),h);if(l instanceof ReadableStream)return l.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(c),a)}(t,Ls(e));n.asyncQueue.enqueueAndForget(async()=>{aP(await Zl(n),i,r)})}function vP(n,e){return n.asyncQueue.enqueue(async()=>function(r,i){const s=A(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.Qr.getNamedQuery(o,i))}(await Xl(n),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(n,e,t){if(!t)throw new g(p.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function O_(n,e,t,r){if(e===!0&&r===!0)throw new g(p.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function sf(n){if(!T.isDocumentKey(n))throw new g(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function of(n){if(T.isDocumentKey(n))throw new g(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Va(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":b()}function B(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new g(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Va(n);throw new g(p.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function L_(n,e){if(e<=0)throw new g(p.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new g(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new g(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}O_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=x_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new g(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new g(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new g(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Fs{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new af({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new g(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new g(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new af(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new vR;switch(r.type){case"firstParty":return new AR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new g(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=rf.get(t);r&&(I("ComponentProvider","Removing Datastore"),rf.delete(t),r.terminate())}(this),Promise.resolve()}}function wP(n,e,t,r={}){var i;const s=(n=B(n,Fs))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&nt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=fe.MOCK_USER;else{a=qy(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new g(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new fe(u)}n._authCredentials=new wR(new Kp(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oe=class M_{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new M_(this.firestore,e,this._query)}},X=class F_{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new F_(this.firestore,e,this._key)}},Yt=class U_ extends Oe{constructor(e,t,r){super(e,t,ti(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new X(this.firestore,null,new T(e))}withConverter(e){return new U_(this.firestore,e,this._path)}};function B_(n,e,...t){if(n=C(n),eh("collection","path",e),n instanceof Fs){const r=F.fromString(e,...t);return of(r),new Yt(n,null,r)}{if(!(n instanceof X||n instanceof Yt))throw new g(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(F.fromString(e,...t));return of(r),new Yt(n.firestore,null,r)}}function EP(n,e){if(n=B(n,Fs),eh("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new g(p.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Oe(n,null,function(r){return new Nt(F.emptyPath(),r)}(e))}function Ko(n,e,...t){if(n=C(n),arguments.length===1&&(e=Wp.V()),eh("doc","path",e),n instanceof Fs){const r=F.fromString(e,...t);return sf(r),new X(n,null,new T(r))}{if(!(n instanceof X||n instanceof Yt))throw new g(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(F.fromString(e,...t));return sf(r),new X(n.firestore,n instanceof Yt?n.converter:null,new T(r))}}function $_(n,e){return n=C(n),e=C(e),(n instanceof X||n instanceof Yt)&&(e instanceof X||e instanceof Yt)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function q_(n,e){return n=C(n),e=C(e),n instanceof Oe&&e instanceof Oe&&n.firestore===e.firestore&&Ds(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new Ol(this,"async_queue_retry"),this.Xa=()=>{const t=po();t&&I("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Ko.No()};const e=po();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const t=po();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise(()=>{});const t=new me;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ga.push(e),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!yn(e))throw e;I("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(e){const t=this.Wa.then(()=>(this.Ja=!0,e().catch(r=>{this.Ha=r,this.Ja=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw re("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ja=!1,r))));return this.Wa=t,t}enqueueAfterDelay(e,t,r){this.eu(),this.Za.indexOf(e)>-1&&(t=0);const i=Ul.createAndSchedule(this,e,t,r,s=>this.ru(s));return this.ja.push(i),i}eu(){this.Ha&&b()}verifyOperationInProgress(){}async iu(){let e;do e=this.Wa,await e;while(e!==this.Wa)}su(e){for(const t of this.ja)if(t.timerId===e)return!0;return!1}ou(e){return this.iu().then(()=>{this.ja.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.ja)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.iu()})}_u(e){this.Za.push(e)}ru(e){const t=this.ja.indexOf(e);this.ja.splice(t,1)}}function uu(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class AP{constructor(){this._progressObserver={},this._taskCompletionResolver=new me,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP=-1;let ne=class extends Fs{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=function(){return new TP}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||G_(this),this._firestoreClient.terminate()}};function ye(n){return n._firestoreClient||G_(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function G_(n){var e,t,r;const i=n._freezeSettings(),s=function(a,c,u,l){return new eb(a,c,u,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,x_(l.experimentalLongPollingOptions),l.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new dP(n._authCredentials,n._appCheckCredentials,n._queue,s),!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function bP(n,e){z_(n=B(n,ne));const t=ye(n);if(t._uninitializedComponentsProvider)throw new g(p.FAILED_PRECONDITION,"SDK cache is already specified.");nt("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=n._freezeSettings(),i=new Yl;return j_(t,i,new S_(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function PP(n){z_(n=B(n,ne));const e=ye(n);if(e._uninitializedComponentsProvider)throw new g(p.FAILED_PRECONDITION,"SDK cache is already specified.");nt("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings(),r=new Yl;return j_(e,r,new cP(r,t.cacheSizeBytes))}function j_(n,e,t){const r=new me;return n.asyncQueue.enqueue(async()=>{try{await go(n,t),await cu(n,e),r.resolve()}catch(i){const s=i;if(!C_(s))throw s;nt("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function SP(n){if(n._initialized&&!n._terminated)throw new g(p.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new me;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!Xe.v())return Promise.resolve();const i=r+"main";await Xe.delete(i)}(Vl(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function CP(n){return function(t){const r=new me;return t.asyncQueue.enqueueAndForget(async()=>Y0(await Zl(t),r)),r.promise}(ye(n=B(n,ne)))}function kP(n){return mP(ye(n=B(n,ne)))}function DP(n){return pP(ye(n=B(n,ne)))}function VP(n,e){const t=ye(n=B(n,ne)),r=new AP;return IP(t,n._databaseId,e,r),r}function NP(n,e){return vP(ye(n=B(n,ne)),e).then(t=>t?new Oe(n,null,t.query):null)}function z_(n){if(n._initialized||n._terminated)throw new g(p.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vt(le.fromBase64String(e))}catch(t){throw new g(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new vt(le.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let un=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new g(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ie(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rr=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new g(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new g(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return N(this._lat,e._lat)||N(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xP=/^__.*__$/;class OP{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new xt(e,this.data,this.fieldMask,t,this.fieldTransforms):new ni(e,this.data,t,this.fieldTransforms)}}class K_{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new xt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function W_(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b()}}class xa{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.au(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new xa(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.cu({path:r,hu:!1});return i.Pu(e),i}Iu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.cu({path:r,hu:!1});return i.au(),i}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return Wo(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(e.length===0)throw this.Eu("Document fields must not be empty");if(W_(this.uu)&&xP.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class LP{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ls(e)}Ru(e,t,r,i=!1){return new xa({uu:e,methodName:t,Au:r,path:ie.emptyPath(),hu:!1,du:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ir(n){const e=n._freezeSettings(),t=Ls(n._databaseId);return new LP(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Oa(n,e,t,r,i,s={}){const o=n.Ru(s.merge||s.mergeFields?2:0,e,t,i);ih("Data must be an object, but it was:",o,r);const a=Y_(r,o);let c,u;if(s.merge)c=new Ue(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=lu(e,h,t);if(!o.contains(d))throw new g(p.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);X_(l,d)||l.push(d)}c=new Ue(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new OP(new Ee(a),c,u)}class Us extends rr{_toFieldTransform(e){if(e.uu!==2)throw e.uu===1?e.Eu(`${this._methodName}() can only appear at the top level of your update data`):e.Eu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Us}}function H_(n,e,t){return new xa({uu:3,Au:e.settings.Au,methodName:n._methodName,hu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class th extends rr{_toFieldTransform(e){return new Ns(e.path,new Mr)}isEqual(e){return e instanceof th}}class MP extends rr{constructor(e,t){super(e),this.Vu=t}_toFieldTransform(e){const t=H_(this,e,!0),r=this.Vu.map(s=>sr(s,t)),i=new Wn(r);return new Ns(e.path,i)}isEqual(e){return this===e}}class FP extends rr{constructor(e,t){super(e),this.Vu=t}_toFieldTransform(e){const t=H_(this,e,!0),r=this.Vu.map(s=>sr(s,t)),i=new Hn(r);return new Ns(e.path,i)}isEqual(e){return this===e}}class UP extends rr{constructor(e,t){super(e),this.mu=t}_toFieldTransform(e){const t=new Fr(e.serializer,Rg(e.serializer,this.mu));return new Ns(e.path,t)}isEqual(e){return this===e}}function nh(n,e,t,r){const i=n.Ru(1,e,t);ih("Data must be an object, but it was:",i,r);const s=[],o=Ee.empty();nr(r,(c,u)=>{const l=sh(e,c,t);u=C(u);const h=i.Iu(l);if(u instanceof Us)s.push(l);else{const d=sr(u,h);d!=null&&(s.push(l),o.set(l,d))}});const a=new Ue(s);return new K_(o,a,i.fieldTransforms)}function rh(n,e,t,r,i,s){const o=n.Ru(1,e,t),a=[lu(e,r,t)],c=[i];if(s.length%2!=0)throw new g(p.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(lu(e,s[d])),c.push(s[d+1]);const u=[],l=Ee.empty();for(let d=a.length-1;d>=0;--d)if(!X_(u,a[d])){const f=a[d];let y=c[d];y=C(y);const _=o.Iu(f);if(y instanceof Us)u.push(f);else{const v=sr(y,_);v!=null&&(u.push(f),l.set(f,v))}}const h=new Ue(u);return new K_(l,h,o.fieldTransforms)}function Q_(n,e,t,r=!1){return sr(t,n.Ru(r?4:3,e))}function sr(n,e){if(J_(n=C(n)))return ih("Unsupported field value:",e,n),Y_(n,e);if(n instanceof rr)return function(r,i){if(!W_(i.uu))throw i.Eu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Eu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.hu&&e.uu!==4)throw e.Eu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=sr(a,i.Tu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=C(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Rg(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=J.fromDate(r);return{timestampValue:Ur(i.serializer,s)}}if(r instanceof J){const s=new J(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ur(i.serializer,s)}}if(r instanceof Na)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof vt)return{bytesValue:Mg(i.serializer,r._byteString)};if(r instanceof X){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:bl(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Eu(`Unsupported field value: ${Va(r)}`)}(n,e)}function Y_(n,e){const t={};return sg(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):nr(n,(r,i)=>{const s=sr(i,e.lu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function J_(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof J||n instanceof Na||n instanceof vt||n instanceof X||n instanceof rr)}function ih(n,e,t){if(!J_(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Va(t);throw r==="an object"?e.Eu(n+" a custom object"):e.Eu(n+" "+r)}}function lu(n,e,t){if((e=C(e))instanceof un)return e._internalPath;if(typeof e=="string")return sh(n,e);throw Wo("Field path arguments must be of type string or ",n,!1,void 0,t)}const BP=new RegExp("[~\\*/\\[\\]]");function sh(n,e,t){if(e.search(BP)>=0)throw Wo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new un(...e.split("."))._internalPath}catch{throw Wo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Wo(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new g(p.INVALID_ARGUMENT,a+n+c)}function X_(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new X(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new $P(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(La("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class $P extends hs{data(){return super.data()}}function La(n,e){return typeof e=="string"?sh(n,e):e instanceof un?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z_(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new g(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class oh{}class Bs extends oh{}function Bt(n,e,...t){let r=[];e instanceof oh&&r.push(e),r=r.concat(t),function(s){const o=s.filter(c=>c instanceof ah).length,a=s.filter(c=>c instanceof Ma).length;if(o>1||o>0&&a>0)throw new g(p.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Ma extends Bs{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Ma(e,t,r)}_apply(e){const t=this._parse(e);return ty(e._query,t),new Oe(e.firestore,e.converter,Yc(e._query,t))}_parse(e){const t=ir(e.firestore);return function(s,o,a,c,u,l,h){let d;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new g(p.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){uf(h,l);const f=[];for(const y of h)f.push(cf(c,s,y));d={arrayValue:{values:f}}}else d=cf(c,s,h)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||uf(h,l),d=Q_(a,o,h,l==="in"||l==="not-in");return O.create(u,l,d)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function qP(n,e,t){const r=e,i=La("where",n);return Ma._create(i,r,t)}class ah extends oh{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ah(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:G.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const c of a)ty(o,c),o=Yc(o,c)}(e._query,t),new Oe(e.firestore,e.converter,Yc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ch extends Bs{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new ch(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new g(p.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new g(p.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new Sr(s,o);return function(u,l){if(_l(u)===null){const h=Ta(u);h!==null&&ny(u,h,l.field)}}(i,a),a}(e._query,this._field,this._direction);return new Oe(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Nt(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function GP(n,e="asc"){const t=e,r=La("orderBy",n);return ch._create(r,t)}class Fa extends Bs{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Fa(e,t,r)}_apply(e){return new Oe(e.firestore,e.converter,Fo(e._query,this._limit,this._limitType))}}function jP(n){return L_("limit",n),Fa._create("limit",n,"F")}function zP(n){return L_("limitToLast",n),Fa._create("limitToLast",n,"L")}class Ua extends Bs{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Ua(e,t,r)}_apply(e){const t=ey(e,this.type,this._docOrFields,this._inclusive);return new Oe(e.firestore,e.converter,function(i,s){return new Nt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,t))}}function KP(...n){return Ua._create("startAt",n,!0)}function WP(...n){return Ua._create("startAfter",n,!1)}class Ba extends Bs{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Ba(e,t,r)}_apply(e){const t=ey(e,this.type,this._docOrFields,this._inclusive);return new Oe(e.firestore,e.converter,function(i,s){return new Nt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,t))}}function HP(...n){return Ba._create("endBefore",n,!1)}function QP(...n){return Ba._create("endAt",n,!0)}function ey(n,e,t,r){if(t[0]=C(t[0]),t[0]instanceof hs)return function(s,o,a,c,u){if(!c)throw new g(p.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const l=[];for(const h of Un(s))if(h.field.isKeyField())l.push(zn(o,c.key));else{const d=c.data.field(h.field);if(Ea(d))throw new g(p.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const f=h.field.canonicalString();throw new g(p.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}l.push(d)}return new an(l,u)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=ir(n.firestore);return function(o,a,c,u,l,h){const d=o.explicitOrderBy;if(l.length>d.length)throw new g(p.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let y=0;y<l.length;y++){const _=l[y];if(d[y].field.isKeyField()){if(typeof _!="string")throw new g(p.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof _}`);if(!yl(o)&&_.indexOf("/")!==-1)throw new g(p.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${_}' contains a slash.`);const v=o.path.child(F.fromString(_));if(!T.isDocumentKey(v))throw new g(p.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${v}' is not because it contains an odd number of segments.`);const E=new T(v);f.push(zn(a,E))}else{const v=Q_(c,u,_);f.push(v)}}return new an(f,h)}(n._query,n.firestore._databaseId,i,e,t,r)}}function cf(n,e,t){if(typeof(t=C(t))=="string"){if(t==="")throw new g(p.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!yl(e)&&t.indexOf("/")!==-1)throw new g(p.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(F.fromString(t));if(!T.isDocumentKey(r))throw new g(p.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return zn(n,new T(r))}if(t instanceof X)return zn(n,t._key);throw new g(p.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Va(t)}.`)}function uf(n,e){if(!Array.isArray(n)||n.length===0)throw new g(p.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ty(n,e){if(e.isInequality()){const r=Ta(n),i=e.field;if(r!==null&&!r.isEqual(i))throw new g(p.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=_l(n);s!==null&&ny(n,i,s)}const t=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new g(p.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new g(p.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function ny(n,e,t){if(!t.isEqual(e))throw new g(p.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}class uh{convertValue(e,t="none"){switch(jn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ee(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(rn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw b()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return nr(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new Na(ee(e.latitude),ee(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=pl(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(is(e));default:return null}}convertTimestamp(e){const t=nn(e);return new J(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=F.fromString(e);S(Wg(r));const i=new sn(r.get(1),r.get(3)),s=new T(r.popFirst(5));return i.isEqual(t)||re(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $a(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class YP extends uh{constructor(e){super(),this.firestore=e}convertBytes(e){return new vt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new X(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let Ct=class extends hs{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ui(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(La("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},Ui=class extends Ct{data(e={}){return super.data(e)}},ln=class{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Nn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Ui(this._firestore,this._userDataWriter,r.key,r,new Nn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new g(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new Ui(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Nn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new Ui(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Nn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,l=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:JP(a.type),doc:c,oldIndex:u,newIndex:l}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function JP(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return b()}}function ry(n,e){return n instanceof Ct&&e instanceof Ct?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof ln&&e instanceof ln&&n._firestore===e._firestore&&q_(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XP(n){n=B(n,X);const e=B(n.firestore,ne);return V_(ye(e),n._key).then(t=>lh(e,n,t))}class or extends uh{constructor(e){super(),this.firestore=e}convertBytes(e){return new vt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new X(this.firestore,null,t)}}function ZP(n){n=B(n,X);const e=B(n.firestore,ne),t=ye(e),r=new or(e);return gP(t,n._key).then(i=>new Ct(e,r,n._key,i,new Nn(i!==null&&i.hasLocalMutations,!0),n.converter))}function eS(n){n=B(n,X);const e=B(n.firestore,ne);return V_(ye(e),n._key,{source:"server"}).then(t=>lh(e,n,t))}function tS(n){n=B(n,Oe);const e=B(n.firestore,ne),t=ye(e),r=new or(e);return Z_(n._query),N_(t,n._query).then(i=>new ln(e,r,n,i))}function nS(n){n=B(n,Oe);const e=B(n.firestore,ne),t=ye(e),r=new or(e);return _P(t,n._query).then(i=>new ln(e,r,n,i))}function rS(n){n=B(n,Oe);const e=B(n.firestore,ne),t=ye(e),r=new or(e);return N_(t,n._query,{source:"server"}).then(i=>new ln(e,r,n,i))}function lf(n,e,t){n=B(n,X);const r=B(n.firestore,ne),i=$a(n.converter,e,t);return $s(r,[Oa(ir(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Y.none())])}function hf(n,e,t,...r){n=B(n,X);const i=B(n.firestore,ne),s=ir(i);let o;return o=typeof(e=C(e))=="string"||e instanceof un?rh(s,"updateDoc",n._key,e,t,r):nh(s,"updateDoc",n._key,e),$s(i,[o.toMutation(n._key,Y.exists(!0))])}function iS(n){return $s(B(n.firestore,ne),[new ri(n._key,Y.none())])}function sS(n,e){const t=B(n.firestore,ne),r=Ko(n),i=$a(n.converter,e);return $s(t,[Oa(ir(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Y.exists(!1))]).then(()=>r)}function iy(n,...e){var t,r,i;n=C(n);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||uu(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(uu(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(n instanceof X)u=B(n.firestore,ne),l=ti(n._key.path),c={next:h=>{e[o]&&e[o](lh(u,n,h))},error:e[o+1],complete:e[o+2]};else{const h=B(n,Oe);u=B(h.firestore,ne),l=h._query;const d=new or(u);c={next:f=>{e[o]&&e[o](new ln(u,d,h,f))},error:e[o+1],complete:e[o+2]},Z_(n._query)}return function(d,f,y,_){const v=new ka(_),E=new Gl(f,v,y);return d.asyncQueue.enqueueAndForget(async()=>Bl(await jr(d),E)),()=>{v.Ca(),d.asyncQueue.enqueueAndForget(async()=>$l(await jr(d),E))}}(ye(u),l,a,c)}function oS(n,e){return yP(ye(n=B(n,ne)),uu(e)?e:{next:e})}function $s(n,e){return function(r,i){const s=new me;return r.asyncQueue.enqueueAndForget(async()=>K0(await Zl(r),i,s)),s.promise}(ye(n),e)}function lh(n,e,t){const r=t.docs.get(e._key),i=new or(n);return new Ct(n,i,e._key,r,new Nn(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cS=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=ir(e)}set(e,t,r){this._verifyNotCommitted();const i=zt(e,this._firestore),s=$a(i.converter,t,r),o=Oa(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Y.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=zt(e,this._firestore);let o;return o=typeof(t=C(t))=="string"||t instanceof un?rh(this._dataReader,"WriteBatch.update",s._key,t,r,i):nh(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,Y.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=zt(e,this._firestore);return this._mutations=this._mutations.concat(new ri(t._key,Y.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new g(p.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function zt(n,e){if((n=C(n)).firestore!==e)throw new g(p.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uS=class extends class{constructor(t,r){this._firestore=t,this._transaction=r,this._dataReader=ir(t)}get(t){const r=zt(t,this._firestore),i=new YP(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return b();const o=s[0];if(o.isFoundDocument())return new hs(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new hs(this._firestore,i,r._key,null,r.converter);throw b()})}set(t,r,i){const s=zt(t,this._firestore),o=$a(s.converter,r,i),a=Oa(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(t,r,i,...s){const o=zt(t,this._firestore);let a;return a=typeof(r=C(r))=="string"||r instanceof un?rh(this._dataReader,"Transaction.update",o._key,r,i,s):nh(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(t){const r=zt(t,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=zt(e,this._firestore),r=new or(this._firestore);return super.get(e).then(i=>new Ct(this._firestore,r,t._key,i._document,new Nn(!1,!1),t.converter))}};function lS(n,e,t){n=B(n,ne);const r=Object.assign(Object.assign({},aS),t);return function(s){if(s.maxAttempts<1)throw new g(p.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const c=new me;return s.asyncQueue.enqueueAndForget(async()=>{const u=await fP(s);new hP(s.asyncQueue,u,a,o,c).run()}),c.promise}(ye(n),i=>e(new uS(n,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hS(){return new Us("deleteField")}function dS(){return new th("serverTimestamp")}function fS(...n){return new MP("arrayUnion",n)}function mS(...n){return new FP("arrayRemove",n)}function pS(n){return new UP("increment",n)}(function(e,t=!0){(function(i){ei=i})(fn),Zt(new _t("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new ne(new ER(r.getProvider("auth-internal")),new bR(r.getProvider("app-check-internal")),function(u,l){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new g(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sn(u.options.projectId,l)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),mt(sd,"4.1.0",e),mt(sd,"4.1.0","esm2017")})();const gS="@firebase/firestore-compat",_S="0.3.14";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new g("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function df(){if(typeof Uint8Array>"u")throw new g("unimplemented","Uint8Arrays are not available in this environment.")}function ff(){if(!XR())throw new g("unimplemented","Blobs are unavailable in Firestore in this environment.")}class ds{constructor(e){this._delegate=e}static fromBase64String(e){return ff(),new ds(vt.fromBase64String(e))}static fromUint8Array(e){return df(),new ds(vt.fromUint8Array(e))}toBase64(){return ff(),this._delegate.toBase64()}toUint8Array(){return df(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(n){return yS(n,["next","error","complete"])}function yS(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{enableIndexedDbPersistence(e,t){return bP(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return PP(e._delegate)}clearIndexedDbPersistence(e){return SP(e._delegate)}}class sy{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof sn||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&nt("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){wP(this._delegate,e,t,r)}enableNetwork(){return kP(this._delegate)}disableNetwork(){return DP(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,O_("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return CP(this._delegate)}onSnapshotsInSync(e){return oS(this._delegate,e)}get app(){if(!this._appCompat)throw new g("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new zr(this,B_(this._delegate,e))}catch(t){throw De(t,"collection()","Firestore.collection()")}}doc(e){try{return new He(this,Ko(this._delegate,e))}catch(t){throw De(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new ke(this,EP(this._delegate,e))}catch(t){throw De(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return lS(this._delegate,t=>e(new oy(this,t)))}batch(){return ye(this._delegate),new ay(new cS(this._delegate,e=>$s(this._delegate,e)))}loadBundle(e){return VP(this._delegate,e)}namedQuery(e){return NP(this._delegate,e).then(t=>t?new ke(this,t):null)}}class qa extends uh{constructor(e){super(),this.firestore=e}convertBytes(e){return new ds(new vt(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return He.forKey(t,this.firestore,null)}}function vS(n){yR(n)}class oy{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new qa(e)}get(e){const t=xn(e);return this._delegate.get(t).then(r=>new fs(this._firestore,new Ct(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const i=xn(e);return r?(hh("Transaction.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=xn(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=xn(e);return this._delegate.delete(t),this}}class ay{constructor(e){this._delegate=e}set(e,t,r){const i=xn(e);return r?(hh("WriteBatch.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=xn(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=xn(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Xn{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new Ui(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new ms(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=Xn.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(t);return s||(s=new Xn(e,new qa(e),t),i.set(t,s)),s}}Xn.INSTANCES=new WeakMap;class He{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new qa(e)}static forPath(e,t,r){if(e.length%2!==0)throw new g("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new He(t,new X(t._delegate,r,new T(e)))}static forKey(e,t,r){return new He(t,new X(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new zr(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new zr(this.firestore,B_(this._delegate,e))}catch(t){throw De(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=C(e),e instanceof X?$_(this._delegate,e):!1}set(e,t){t=hh("DocumentReference.set",t);try{return t?lf(this._delegate,e,t):lf(this._delegate,e)}catch(r){throw De(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?hf(this._delegate,e):hf(this._delegate,e,t,...r)}catch(i){throw De(i,"updateDoc()","DocumentReference.update()")}}delete(){return iS(this._delegate)}onSnapshot(...e){const t=cy(e),r=uy(e,i=>new fs(this.firestore,new Ct(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return iy(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=ZP(this._delegate):(e==null?void 0:e.source)==="server"?t=eS(this._delegate):t=XP(this._delegate),t.then(r=>new fs(this.firestore,new Ct(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new He(this.firestore,e?this._delegate.withConverter(Xn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function De(n,e,t){return n.message=n.message.replace(e,t),n}function cy(n){for(const e of n)if(typeof e=="object"&&!hu(e))return e;return{}}function uy(n,e){var t,r;let i;return hu(n[0])?i=n[0]:hu(n[1])?i=n[1]:typeof n[0]=="function"?i={next:n[0],error:n[1],complete:n[2]}:i={next:n[1],error:n[2],complete:n[3]},{next:s=>{i.next&&i.next(e(s))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class fs{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new He(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return ry(this._delegate,e._delegate)}}class ms extends fs{data(e){const t=this._delegate.data(e);return IR(t!==void 0),t}}class ke{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new qa(e)}where(e,t,r){try{return new ke(this.firestore,Bt(this._delegate,qP(e,t,r)))}catch(i){throw De(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new ke(this.firestore,Bt(this._delegate,GP(e,t)))}catch(r){throw De(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new ke(this.firestore,Bt(this._delegate,jP(e)))}catch(t){throw De(t,"limit()","Query.limit()")}}limitToLast(e){try{return new ke(this.firestore,Bt(this._delegate,zP(e)))}catch(t){throw De(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new ke(this.firestore,Bt(this._delegate,KP(...e)))}catch(t){throw De(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new ke(this.firestore,Bt(this._delegate,WP(...e)))}catch(t){throw De(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new ke(this.firestore,Bt(this._delegate,HP(...e)))}catch(t){throw De(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new ke(this.firestore,Bt(this._delegate,QP(...e)))}catch(t){throw De(t,"endAt()","Query.endAt()")}}isEqual(e){return q_(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=nS(this._delegate):(e==null?void 0:e.source)==="server"?t=rS(this._delegate):t=tS(this._delegate),t.then(r=>new du(this.firestore,new ln(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=cy(e),r=uy(e,i=>new du(this.firestore,new ln(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return iy(this._delegate,t,r)}withConverter(e){return new ke(this.firestore,e?this._delegate.withConverter(Xn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class wS{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new ms(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class du{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new ke(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new ms(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new wS(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new ms(this._firestore,r))})}isEqual(e){return ry(this._delegate,e._delegate)}}class zr extends ke{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new He(this.firestore,e):null}doc(e){try{return e===void 0?new He(this.firestore,Ko(this._delegate)):new He(this.firestore,Ko(this._delegate,e))}catch(t){throw De(t,"doc()","CollectionReference.doc()")}}add(e){return sS(this._delegate,e).then(t=>new He(this.firestore,t))}isEqual(e){return $_(this._delegate,e._delegate)}withConverter(e){return new zr(this.firestore,e?this._delegate.withConverter(Xn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function xn(n){return B(n,X)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(...e){this._delegate=new un(...e)}static documentId(){return new dh(ie.keyField().canonicalString())}isEqual(e){return e=C(e),e instanceof un?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this._delegate=e}static serverTimestamp(){const e=dS();return e._methodName="FieldValue.serverTimestamp",new Cn(e)}static delete(){const e=hS();return e._methodName="FieldValue.delete",new Cn(e)}static arrayUnion(...e){const t=fS(...e);return t._methodName="FieldValue.arrayUnion",new Cn(t)}static arrayRemove(...e){const t=mS(...e);return t._methodName="FieldValue.arrayRemove",new Cn(t)}static increment(e){const t=pS(e);return t._methodName="FieldValue.increment",new Cn(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES={Firestore:sy,GeoPoint:Na,Timestamp:J,Blob:ds,Transaction:oy,WriteBatch:ay,DocumentReference:He,DocumentSnapshot:fs,Query:ke,QueryDocumentSnapshot:ms,QuerySnapshot:du,CollectionReference:zr,FieldPath:dh,FieldValue:Cn,setLogLevel:vS,CACHE_SIZE_UNLIMITED:RP};function TS(n,e){n.INTERNAL.registerComponent(new _t("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},ES)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AS(n){TS(n,(e,t)=>new sy(e,t,new IS)),n.registerVersion(gS,_S)}AS(Ce);const RS={apiKey:"AIzaSyD3y-57uze139gYvq8uagnKt9F7IY34jUM",authDomain:"exercise-log-8a9b4.firebaseapp.com",projectId:"exercise-log-8a9b4",storageBucket:"exercise-log-8a9b4.appspot.com",messagingSenderId:"323872244593",appId:"1:323872244593:web:8faa7dbb2c60dab7132cd0"};function bS(n){let e;return{c(){e=gt("div"),e.innerHTML='<span class="top-bar-title svelte-l80s8e">LOCAL</span>',Qe(e,"id","top-bar"),Qe(e,"class","pulse svelte-l80s8e")},m(t,r){Ze(t,e,r)},d(t){t&&je(e)}}}function PS(n){let e,t=n[0]&&bS();return{c(){t&&t.c(),e=Ef()},m(r,i){t&&t.m(r,i),Ze(r,e,i)},p:z,i:z,o:z,d(r){r&&je(e),t&&t.d(r)}}}function SS(n){return[window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.hostname==="192.168.0.56"]}class CS extends dn{constructor(e){super(),hn(this,e,SS,PS,kt,{})}}class no{constructor(e,t=null,r=!1,i=!1){this.name=e,this.timestamp=t||this.generateRandomTimestamp(),this.paused=r,this.up=i}generateRandomTimestamp(){const e=new Date().getTime(),t=e-7*24*60*60*1e3;return new Date(t+Math.random()*(e-t))}updateTimestamp(){this.timestamp=new Date}}function kS(n){let e;return{c(){e=gt("div"),e.innerHTML='<p><span id="logged-in-status"></span> <a href="#" id="logout-link">Log out</a></p>',Qe(e,"class","info-bar")},m(t,r){Ze(t,e,r)},p:z,i:z,o:z,d(t){t&&je(e)}}}class DS extends dn{constructor(e){super(),hn(this,e,null,kS,kt,{})}}function VS(n){let e;return{c(){e=gt("div"),e.innerHTML='<div><h2>Register</h2> <form id="register-form" class="flex"><input id="register-email" type="email" placeholder="Email" required=""/> <input id="register-password" type="password" placeholder="Password" required=""/> <button type="submit" class="register-button">Register</button></form></div> <div><h2>Log in</h2> <form id="login-form" class="flex"><input id="login-email" type="email" placeholder="Email" required=""/> <input id="login-password" type="password" placeholder="Password" required=""/> <button type="submit" class="login-button">Log in</button></form></div>',Qe(e,"id","auth")},m(t,r){Ze(t,e,r)},p:z,i:z,o:z,d(t){t&&je(e)}}}class NS extends dn{constructor(e){super(),hn(this,e,null,VS,kt,{})}}function xS(n){let e;return{c(){e=gt("div"),e.innerHTML='<form id="new-exercise-form" class="flex"><input id="new-exercise-name" type="text" placeholder="New exercise" required=""/> <button type="submit" class="add-exercise-button" style="margin-left: 15px;">Add Exercise</button></form>',Qe(e,"class","grid")},m(t,r){Ze(t,e,r)},p:z,i:z,o:z,d(t){t&&je(e)}}}class OS extends dn{constructor(e){super(),hn(this,e,null,xS,kt,{})}}function LS(n){let e;return{c(){e=gt("div"),e.innerHTML='<h2>Today&#39;s Exercise Plan</h2> <div class="loading"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>loading</title><path d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"></path></svg></div> <ul id="today-exercise-plan-list"></ul> <h2>Available Exercises for Today</h2> <div class="loading"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>loading</title><path d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"></path></svg></div> <ul id="available-exercises"></ul> <h2>Recent Exercises for Rest and Recovery</h2> <div class="loading"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>loading</title><path d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"></path></svg></div> <ul id="exercise-list"></ul> <h2>Paused</h2> <ul id="paused-exercise-list"></ul> <template id="exercise-template"><li><input class="name" type="text" readonly=""/> <input class="tags" type="text" value="Add tags" readonly=""/> <input class="timestamp" type="text" readonly=""/> <button class="up"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><title>arrow-up</title><path d="M10 5H12V6H13V7H14V8H15V9H16V11H14V10H13V9H12V18H10V9H9V10H8V11H6V9H7V8H8V7H9V6H10"></path></svg></button> <button class="done"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check-bold</title><path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"></path></svg></button> <button class="pause"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pause</title><path d="M14,19H18V5H14M6,19H10V5H6V19Z"></path></svg></button> <button class="delete"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>trash-can</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z"></path></svg></button></li></template>',Qe(e,"class","exercise-lists")},m(t,r){Ze(t,e,r)},p:z,i:z,o:z,d(t){t&&je(e)}}}class MS extends dn{constructor(e){super(),hn(this,e,null,LS,kt,{})}}function FS(n){let e;return{c(){e=gt("button"),e.textContent="Import from clipboard",Qe(e,"type","submit"),Qe(e,"id","import-button")},m(t,r){Ze(t,e,r)},p:z,i:z,o:z,d(t){t&&je(e)}}}class US extends dn{constructor(e){super(),hn(this,e,null,FS,kt,{})}}const fr=[];function BS(n,e=z){let t;const r=new Set;function i(a){if(kt(n,a)&&(n=a,t)){const c=!fr.length;for(const u of r)u[1](),fr.push(u,n);if(c){for(let u=0;u<fr.length;u+=2)fr[u][0](fr[u+1]);fr.length=0}}}function s(a){i(a(n))}function o(a,c=z){const u=[a,c];return r.add(u),r.size===1&&(t=e(i,s)||z),a(n),()=>{r.delete(u),r.size===0&&t&&(t(),t=null)}}return{set:i,update:s,subscribe:o}}const ly={message:"",type:""},fu=BS(ly);function rt(n,e="success"){fu.set({message:n,type:e}),setTimeout(()=>{fu.set(ly)},3e3)}function mf(n,{delay:e=0,duration:t=400,easing:r=mu}={}){const i=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:r,css:s=>`opacity: ${s*i}`}}function pf(n){let e,t=n[0].message+"",r,i,s,o,a;return{c(){e=gt("div"),r=gu(t),Qe(e,"class",i="notification-bar "+n[0].type+" svelte-kvkt40")},m(c,u){Ze(c,e,u),Gt(e,r),a=!0},p(c,u){(!a||u&1)&&t!==(t=c[0].message+"")&&_y(r,t),(!a||u&1&&i!==(i="notification-bar "+c[0].type+" svelte-kvkt40"))&&Qe(e,"class",i)},i(c){a||(c&&kr(()=>{a&&(o&&o.end(1),s=Sy(e,mf,{duration:200}),s.start())}),a=!0)},o(c){s&&s.invalidate(),c&&(o=Cy(e,mf,{duration:200})),a=!1},d(c){c&&je(e),c&&o&&o.end()}}}function $S(n){let e,t=n[0].message&&pf(n);return{c(){t&&t.c(),e=Ef()},m(r,i){t&&t.m(r,i),Ze(r,e,i)},p(r,[i]){r[0].message?t?(t.p(r,i),i&1&&Je(t,1)):(t=pf(r),t.c(),Je(t,1),t.m(e.parentNode,e)):t&&(by(),wt(t,1,1,()=>{t=null}),Py())},i(r){Je(t)},o(r){wt(t)},d(r){r&&je(e),t&&t.d(r)}}}function qS(n,e,t){let r={message:"",type:""};return fu.subscribe(i=>{t(0,r=i)}),[r]}class GS extends dn{constructor(e){super(),hn(this,e,qS,$S,kt,{})}}function jS(n){let e,t,r,i,s,o,a,c,u,l,h,d,f,y,_,v;return e=new CS({}),i=new DS({}),o=new GS({}),c=new NS({}),h=new OS({}),f=new MS({}),_=new US({}),{c(){wn(e.$$.fragment),t=ar(),r=gt("div"),wn(i.$$.fragment),s=ar(),wn(o.$$.fragment),a=ar(),wn(c.$$.fragment),u=ar(),l=gt("div"),wn(h.$$.fragment),d=ar(),wn(f.$$.fragment),y=ar(),wn(_.$$.fragment),Qe(l,"id","dashboard"),Qe(r,"class","site-wrap")},m(E,k){$t(e,E,k),Ze(E,t,k),Ze(E,r,k),$t(i,r,null),Gt(r,s),$t(o,r,null),Gt(r,a),$t(c,r,null),Gt(r,u),Gt(r,l),$t(h,l,null),Gt(l,d),$t(f,l,null),Gt(l,y),$t(_,l,null),v=!0},p:z,i(E){v||(Je(e.$$.fragment,E),Je(i.$$.fragment,E),Je(o.$$.fragment,E),Je(c.$$.fragment,E),Je(h.$$.fragment,E),Je(f.$$.fragment,E),Je(_.$$.fragment,E),v=!0)},o(E){wt(e.$$.fragment,E),wt(i.$$.fragment,E),wt(o.$$.fragment,E),wt(c.$$.fragment,E),wt(h.$$.fragment,E),wt(f.$$.fragment,E),wt(_.$$.fragment,E),v=!1},d(E){E&&(je(t),je(r)),qt(e,E),qt(i),qt(o),qt(c),qt(h),qt(f),qt(_)}}}function zS(n){Ce.apps.length?Ce.app():Ce.initializeApp(RS);const e=Ce.firestore();let t=[];document.addEventListener("DOMContentLoaded",()=>{document.getElementById("logout-link").addEventListener("click",o=>{o.preventDefault(),Ce.auth().signOut().then(()=>{alert("User signed out successfully.");const a=document.getElementById("dashboard");a.style.display="none"}).catch(a=>{a.code;var c=a.message;alert(c)})})}),document.addEventListener("DOMContentLoaded",()=>{document.getElementById("register-form").addEventListener("submit",o=>{o.preventDefault();const a=document.getElementById("register-email"),c=document.getElementById("register-password"),u=a.value,l=c.value;Ce.auth().createUserWithEmailAndPassword(u,l).then(h=>{h.user,alert("User registered successfully.")}).catch(h=>{h.code;var d=h.message;alert(d)})})}),document.addEventListener("DOMContentLoaded",()=>{document.getElementById("login-form").addEventListener("submit",o=>{o.preventDefault();const a=document.getElementById("login-email"),c=document.getElementById("login-password"),u=a.value,l=c.value;Ce.auth().signInWithEmailAndPassword(u,l).then(h=>{h.user,alert("User logged in successfully.");const d=document.getElementById("auth");d.style.display="none"}).catch(h=>{h.code;var d=h.message;alert(d)})})}),document.addEventListener("DOMContentLoaded",()=>{Ce.auth().onAuthStateChanged(s=>{const o=document.getElementById("logged-in-status");if(s){o.textContent=`${s.email} is signed in`;const a=document.getElementById("dashboard");a.style.display="block",console.log("user",s),r()}else{o.textContent="No user is signed in";const a=document.getElementById("auth");a.style.display="block",console.log("no user")}})});const r=()=>{let s=Ce.auth().currentUser;if(s){let o=s.uid;e.collection("users").doc(o).collection("exercises").doc("exerciseData").get().then(a=>{if(a.exists){let c=a.data(),u=[];for(let l in c)u.push(c[l]);t=u.map(l=>new no(l.name,new Date(l.timestamp),l.paused,l.up)),i()}else console.log("No exercises document!"),t.length||(t=["exercise 1","exercise 2","exercise 3"].map(c=>new no(c))),i()}).catch(a=>{console.log("Error getting exercises document:",a)})}else console.log("No user is signed in.")},i=()=>{const s=document.getElementById("exercise-list"),o=document.getElementById("paused-exercise-list"),a=document.getElementById("today-exercise-plan-list");s.innerHTML="",o.innerHTML="",a.innerHTML="",t.sort((l,h)=>l.timestamp-h.timestamp).forEach((l,h)=>{const f=document.getElementById("exercise-template").content.cloneNode(!0),y=f.querySelector("li");y.id=`li-${h}`;const _=f.querySelector(".name");_.id=`name-${h}`,_.value=l.name,_.addEventListener("click",()=>editExercise(h));const v=l.timestamp.toLocaleDateString("en-US",{year:"numeric",month:"2-digit",day:"2-digit"}),E=f.querySelector(".timestamp");E.id=`timestamp-${h}`,E.value=v,E.addEventListener("click",()=>editExercise(h)),f.querySelector(".up").onclick=()=>moveUp(l.name),f.querySelector(".done").onclick=()=>markAsDone(l.name);const k=f.querySelector(".pause");k.onclick=()=>togglePause(l.name),f.querySelector(".delete").onclick=()=>deleteExercise(h),l.paused?(y.classList.add("paused"),o.appendChild(f)):l.up?a.appendChild(f):s.appendChild(f)}),document.querySelectorAll(".loading").forEach(l=>{l.style.display="none"})};return document.addEventListener("DOMContentLoaded",()=>{window.moveUp=u=>{const l=t.find(h=>h.name===u);l&&(l.up=!l.up,localStorage.setItem("exercises",JSON.stringify(t)),i()),rt("Exercise moved","success"),o()},window.markAsDone=u=>{const l=t.find(h=>h.name===u);l&&(l.updateTimestamp(),l.up=!1,localStorage.setItem("exercises",JSON.stringify(t)),i()),rt("Exercise completed","success"),o()},window.togglePause=u=>{const l=t.find(d=>d.name===u);l&&(l.paused=!l.paused,localStorage.setItem("exercises",JSON.stringify(t)),i()),o();const h=l.paused?"Exercise paused":"Exercise unpaused";rt(h,"success")},window.editExercise=u=>{document.getElementById(`name-${u}`).readOnly=!1,document.getElementById(`timestamp-${u}`).readOnly=!1,document.getElementById(`li-${u}`).classList.add("edit-mode"),document.getElementById(`name-${u}`).addEventListener("keypress",l=>{l.key==="Enter"&&(saveExercise(u),rt("Exercise updated","success"))}),document.getElementById(`timestamp-${u}`).addEventListener("keypress",l=>{l.key==="Enter"&&(saveExercise(u),rt("Exercise updated","success"))})},window.saveExercise=u=>{let l=document.getElementById(`name-${u}`).value,h=new Date(document.getElementById(`timestamp-${u}`).value);t[u].name=l,t[u].timestamp=h,localStorage.setItem("exercises",JSON.stringify(t)),i(),o()},window.deleteExercise=u=>{confirm("Are you sure you want to delete this exercise?")&&(t.splice(u,1),localStorage.setItem("exercises",JSON.stringify(t)),i(),rt("Exercise deleted","success"),o())},document.getElementById("new-exercise-form").addEventListener("submit",u=>{u.preventDefault();const l=document.getElementById("new-exercise-name"),h=l.value.trim();h&&(t.push(new no(h)),localStorage.setItem("exercises",JSON.stringify(t)),l.value="",i(),rt("Exercise added","success"),o())}),window.formatTimestamp=u=>{const l={weekday:"short",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"};return new Intl.DateTimeFormat("en-US",l).format(u)};const o=()=>{console.log("Saving exercises to Firestore");let u=Ce.auth().currentUser;if(u){let l=u.uid,h={};JSON.parse(localStorage.getItem("exercises")||"[]").forEach((f,y)=>{h[y]=f}),e.collection("users").doc(l).collection("exercises").doc("exerciseData").set(h).then(()=>{console.log("Exercises document successfully written!")}).catch(f=>{console.error("Error writing exercises document: ",f)})}else console.log("No user is signed in.")},a=()=>{navigator.clipboard.readText().then(u=>{try{t=JSON.parse(u).map(h=>new no(h.name,new Date(h.timestamp),h.paused,h.up)),localStorage.setItem("exercises",JSON.stringify(t)),i(),o(),rt("Exercises imported successfully","success")}catch{rt("Invalid data in clipboard","error")}}).catch(u=>{rt("Error reading from clipboard","error")})};document.getElementById("import-button").addEventListener("click",a)}),[]}class KS extends dn{constructor(e){super(),hn(this,e,zS,jS,kt,{})}}new KS({target:document.body});
