(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
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
 */const Dd=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},g_=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Vd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,u=c?n[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(t[l],t[h],t[d],t[f])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Dd(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):g_(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new __;const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const I=u<<6&192|h;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class __ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const y_=function(n){const e=Dd(n);return Vd.encodeByteArray(e,!0)},Ws=function(n){return y_(n).replace(/\./g,"")},Nd=function(n){try{return Vd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Hs(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!I_(t)||(n[t]=Hs(n[t],e[t]));return n}function I_(n){return n!=="__proto__"}/**
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
 */function v_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const E_=()=>v_().__FIREBASE_DEFAULTS__,w_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},T_=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Nd(n[1]);return e&&JSON.parse(e)},Lc=()=>{try{return E_()||w_()||T_()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},xd=()=>{var n;return(n=Lc())===null||n===void 0?void 0:n.config},A_=n=>{var e;return(e=Lc())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class R_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function b_(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Ws(JSON.stringify(t)),Ws(JSON.stringify(o)),a].join(".")}/**
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
 */function X(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function P_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(X())}function Fc(){var n;const e=(n=Lc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function S_(){return typeof self=="object"&&self.self===self}function Od(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Uc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Md(){const n=X();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function C_(){return!Fc()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _i(){try{return typeof indexedDB=="object"}catch{return!1}}function k_(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const D_="FirebaseError";class Ve extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=D_,Object.setPrototypeOf(this,Ve.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Un.prototype.create)}}class Un{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?V_(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ve(i,a,r)}}function V_(n,e){return n.replace(N_,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const N_=/\{\$([^}]+)}/g;/**
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
 */function Vl(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function x_(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ga(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Nl(s)&&Nl(o)){if(!Ga(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Nl(n){return n!==null&&typeof n=="object"}/**
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
 */function br(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function tr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Zr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Ld(n,e){const t=new O_(n,e);return t.subscribe.bind(t)}class O_{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");M_(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=_a),i.error===void 0&&(i.error=_a),i.complete===void 0&&(i.complete=_a);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function M_(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function _a(){}/**
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
 */function S(n){return n&&n._delegate?n._delegate:n}class ht{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const un="[DEFAULT]";/**
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
 */class L_{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new R_;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(U_(e))try{this.getOrInitializeService({instanceIdentifier:un})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=un){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=un){return this.instances.has(e)}getOptions(e=un){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:F_(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=un){return this.component?this.component.multipleInstances?e:un:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function F_(n){return n===un?void 0:n}function U_(n){return n.instantiationMode==="EAGER"}/**
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
 */class B_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new L_(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Bc=[];var L;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(L||(L={}));const Fd={debug:L.DEBUG,verbose:L.VERBOSE,info:L.INFO,warn:L.WARN,error:L.ERROR,silent:L.SILENT},q_=L.INFO,$_={[L.DEBUG]:"log",[L.VERBOSE]:"log",[L.INFO]:"info",[L.WARN]:"warn",[L.ERROR]:"error"},G_=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=$_[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class To{constructor(e){this.name=e,this._logLevel=q_,this._logHandler=G_,this._userLogHandler=null,Bc.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in L))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Fd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,L.DEBUG,...e),this._logHandler(this,L.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,L.VERBOSE,...e),this._logHandler(this,L.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,L.INFO,...e),this._logHandler(this,L.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,L.WARN,...e),this._logHandler(this,L.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,L.ERROR,...e),this._logHandler(this,L.ERROR,...e)}}function j_(n){Bc.forEach(e=>{e.setLogLevel(n)})}function z_(n,e){for(const t of Bc){let r=null;e&&e.level&&(r=Fd[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(i,s,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");s>=(r??i.logLevel)&&n({level:L[s].toLowerCase(),message:a,args:o,type:i.name})}}}const K_=(n,e)=>e.some(t=>n instanceof t);let xl,Ol;function W_(){return xl||(xl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function H_(){return Ol||(Ol=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ud=new WeakMap,ja=new WeakMap,Bd=new WeakMap,ya=new WeakMap,qc=new WeakMap;function Q_(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Ft(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Ud.set(t,n)}).catch(()=>{}),qc.set(e,n),e}function Y_(n){if(ja.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});ja.set(n,e)}let za={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ja.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Bd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ft(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function J_(n){za=n(za)}function X_(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ia(this),e,...t);return Bd.set(r,e.sort?e.sort():[e]),Ft(r)}:H_().includes(n)?function(...e){return n.apply(Ia(this),e),Ft(Ud.get(this))}:function(...e){return Ft(n.apply(Ia(this),e))}}function Z_(n){return typeof n=="function"?X_(n):(n instanceof IDBTransaction&&Y_(n),K_(n,W_())?new Proxy(n,za):n)}function Ft(n){if(n instanceof IDBRequest)return Q_(n);if(ya.has(n))return ya.get(n);const e=Z_(n);return e!==n&&(ya.set(n,e),qc.set(e,n)),e}const Ia=n=>qc.get(n);function ey(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=Ft(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ft(o.result),c.oldVersion,c.newVersion,Ft(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const ty=["get","getKey","getAll","getAllKeys","count"],ny=["put","add","delete","clear"],va=new Map;function Ml(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(va.get(e))return va.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=ny.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ty.includes(t)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),i&&c.done]))[0]};return va.set(e,s),s}J_(n=>({...n,get:(e,t,r)=>Ml(e,t)||n.get(e,t,r),has:(e,t)=>!!Ml(e,t)||n.has(e,t)}));/**
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
 */class ry{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(iy(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function iy(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ka="@firebase/app",Ll="0.9.15";/**
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
 */const bn=new To("@firebase/app"),sy="@firebase/app-compat",oy="@firebase/analytics-compat",ay="@firebase/analytics",cy="@firebase/app-check-compat",uy="@firebase/app-check",ly="@firebase/auth",hy="@firebase/auth-compat",dy="@firebase/database",fy="@firebase/database-compat",my="@firebase/functions",py="@firebase/functions-compat",gy="@firebase/installations",_y="@firebase/installations-compat",yy="@firebase/messaging",Iy="@firebase/messaging-compat",vy="@firebase/performance",Ey="@firebase/performance-compat",wy="@firebase/remote-config",Ty="@firebase/remote-config-compat",Ay="@firebase/storage",Ry="@firebase/storage-compat",by="@firebase/firestore",Py="@firebase/firestore-compat",Sy="firebase",Cy="10.1.0";/**
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
 */const Bt="[DEFAULT]",ky={[Ka]:"fire-core",[sy]:"fire-core-compat",[ay]:"fire-analytics",[oy]:"fire-analytics-compat",[uy]:"fire-app-check",[cy]:"fire-app-check-compat",[ly]:"fire-auth",[hy]:"fire-auth-compat",[dy]:"fire-rtdb",[fy]:"fire-rtdb-compat",[my]:"fire-fn",[py]:"fire-fn-compat",[gy]:"fire-iid",[_y]:"fire-iid-compat",[yy]:"fire-fcm",[Iy]:"fire-fcm-compat",[vy]:"fire-perf",[Ey]:"fire-perf-compat",[wy]:"fire-rc",[Ty]:"fire-rc-compat",[Ay]:"fire-gcs",[Ry]:"fire-gcs-compat",[by]:"fire-fst",[Py]:"fire-fst-compat","fire-js":"fire-js",[Sy]:"fire-js-all"};/**
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
 */const qt=new Map,yi=new Map;function Qs(n,e){try{n.container.addComponent(e)}catch(t){bn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function qd(n,e){n.container.addOrOverwriteComponent(e)}function $t(n){const e=n.name;if(yi.has(e))return bn.debug(`There were multiple attempts to register component ${e}.`),!1;yi.set(e,n);for(const t of qt.values())Qs(t,n);return!0}function $d(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Dy(n,e,t=Bt){$d(n,e).clearInstance(t)}function Vy(){yi.clear()}/**
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
 */const Ny={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},yt=new Un("app","Firebase",Ny);/**
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
 */let xy=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ht("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yt.create("app-deleted",{appName:this._name})}};/**
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
 */const Zt=Cy;function $c(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Bt,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw yt.create("bad-app-name",{appName:String(i)});if(t||(t=xd()),!t)throw yt.create("no-options");const s=qt.get(i);if(s){if(Ga(t,s.options)&&Ga(r,s.config))return s;throw yt.create("duplicate-app",{appName:i})}const o=new B_(i);for(const c of yi.values())o.addComponent(c);const a=new xy(t,r,o);return qt.set(i,a),a}function Oy(n=Bt){const e=qt.get(n);if(!e&&n===Bt&&xd())return $c();if(!e)throw yt.create("no-app",{appName:n});return e}function My(){return Array.from(qt.values())}async function Gd(n){const e=n.name;qt.has(e)&&(qt.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function ut(n,e,t){var r;let i=(r=ky[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bn.warn(a.join(" "));return}$t(new ht(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function jd(n,e){if(n!==null&&typeof n!="function")throw yt.create("invalid-log-argument");z_(n,e)}function zd(n){j_(n)}/**
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
 */const Ly="firebase-heartbeat-database",Fy=1,Ii="firebase-heartbeat-store";let Ea=null;function Kd(){return Ea||(Ea=ey(Ly,Fy,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ii)}}}).catch(n=>{throw yt.create("idb-open",{originalErrorMessage:n.message})})),Ea}async function Uy(n){try{return await(await Kd()).transaction(Ii).objectStore(Ii).get(Wd(n))}catch(e){if(e instanceof Ve)bn.warn(e.message);else{const t=yt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});bn.warn(t.message)}}}async function Fl(n,e){try{const r=(await Kd()).transaction(Ii,"readwrite");await r.objectStore(Ii).put(e,Wd(n)),await r.done}catch(t){if(t instanceof Ve)bn.warn(t.message);else{const r=yt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});bn.warn(r.message)}}}function Wd(n){return`${n.name}!${n.options.appId}`}/**
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
 */const By=1024,qy=30*24*60*60*1e3;class $y{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new jy(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ul();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=qy}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ul(),{heartbeatsToSend:t,unsentEntries:r}=Gy(this._heartbeatsCache.heartbeats),i=Ws(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ul(){return new Date().toISOString().substring(0,10)}function Gy(n,e=By){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Bl(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Bl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class jy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _i()?k_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Uy(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Bl(n){return Ws(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function zy(n){$t(new ht("platform-logger",e=>new ry(e),"PRIVATE")),$t(new ht("heartbeat",e=>new $y(e),"PRIVATE")),ut(Ka,Ll,n),ut(Ka,Ll,"esm2017"),ut("fire-js","")}zy("");const Ky=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Ve,SDK_VERSION:Zt,_DEFAULT_ENTRY_NAME:Bt,_addComponent:Qs,_addOrOverwriteComponent:qd,_apps:qt,_clearComponents:Vy,_components:yi,_getProvider:$d,_registerComponent:$t,_removeServiceInstance:Dy,deleteApp:Gd,getApp:Oy,getApps:My,initializeApp:$c,onLog:jd,registerVersion:ut,setLogLevel:zd},Symbol.toStringTag,{value:"Module"}));/**
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
 */class Wy{constructor(e,t){this._delegate=e,this.firebase=t,Qs(e,new ht("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Gd(this._delegate)))}_getService(e,t=Bt){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=Bt){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Qs(this._delegate,e)}_addOrOverwriteComponent(e){qd(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const Hy={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},ql=new Un("app-compat","Firebase",Hy);/**
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
 */function Qy(n){const e={},t={__esModule:!0,initializeApp:s,app:i,registerVersion:ut,setLogLevel:zd,onLog:jd,apps:null,SDK_VERSION:Zt,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:Ky}};t.default=t,Object.defineProperty(t,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||Bt,!Vl(e,u))throw ql.create("no-app",{appName:u});return e[u]}i.App=n;function s(u,l={}){const h=$c(u,l);if(Vl(e,h.name))return e[h.name];const d=new n(h,t);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const l=u.name,h=l.replace("-compat","");if($t(u)&&u.type==="PUBLIC"){const d=(f=i())=>{if(typeof f[h]!="function")throw ql.create("invalid-app-argument",{appName:l});return f[h]()};u.serviceProps!==void 0&&Hs(d,u.serviceProps),t[h]=d,n.prototype[h]=function(...f){return this._getService.bind(this,l).apply(this,u.multipleInstances?f:[])}}return u.type==="PUBLIC"?t[h]:null}function c(u,l){return l==="serverAuth"?null:l}return t}/**
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
 */function Hd(){const n=Qy(Wy);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:Hd,extendNamespace:e,createSubscribe:Ld,ErrorFactory:Un,deepExtend:Hs});function e(t){Hs(n,t)}return n}const Yy=Hd();/**
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
 */const $l=new To("@firebase/app-compat"),Jy="@firebase/app-compat",Xy="0.2.15";/**
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
 */function Zy(n){ut(Jy,Xy,n)}/**
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
 */if(S_()&&self.firebase!==void 0){$l.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&$l.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Ne=Yy;Zy();var eI="firebase",tI="10.1.0";/**
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
 */Ne.registerVersion(eI,tI,"app-compat");function Gc(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}const $r={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Hn={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function nI(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend."}}function Qd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rI=nI,iI=Qd,Yd=new Un("auth","Firebase",Qd());/**
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
 */const Ys=new To("@firebase/auth");function sI(n,...e){Ys.logLevel<=L.WARN&&Ys.warn(`Auth (${Zt}): ${n}`,...e)}function xs(n,...e){Ys.logLevel<=L.ERROR&&Ys.error(`Auth (${Zt}): ${n}`,...e)}/**
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
 */function Re(n,...e){throw jc(n,...e)}function Te(n,...e){return jc(n,...e)}function Jd(n,e,t){const r=Object.assign(Object.assign({},iI()),{[e]:t});return new Un("auth","Firebase",r).create(e,{appName:n.name})}function Pr(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Re(n,"argument-error"),Jd(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function jc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Yd.create(n,...e)}function y(n,e,...t){if(!n)throw jc(e,...t)}function it(n){const e="INTERNAL ASSERTION FAILED: "+n;throw xs(e),new Error(e)}function Ye(n,e){n||it(e)}/**
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
 */function vi(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function zc(){return Gl()==="http:"||Gl()==="https:"}function Gl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function oI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zc()||Od()||"connection"in navigator)?navigator.onLine:!0}function aI(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Ki{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ye(t>e,"Short delay should be less than long delay!"),this.isMobile=P_()||Uc()}get(){return oI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Kc(n,e){Ye(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Xd{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;it("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;it("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;it("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const cI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const uI=new Ki(3e4,6e4);function ue(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function he(n,e,t,r,i={}){return Zd(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=br(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),Xd.fetch()(ef(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Zd(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},cI),e);try{const i=new lI(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ei(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ei(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ei(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw ei(n,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Jd(n,l,u);Re(n,l)}}catch(i){if(i instanceof Ve)throw i;Re(n,"network-request-failed",{message:String(i)})}}async function At(n,e,t,r,i={}){const s=await he(n,e,t,r,i);return"mfaPendingCredential"in s&&Re(n,"multi-factor-auth-required",{_serverResponse:s}),s}function ef(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Kc(n.config,i):`${n.config.apiScheme}://${i}`}class lI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Te(this.auth,"network-request-failed")),uI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ei(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Te(n,e,r);return i.customData._tokenResponse=t,i}/**
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
 */async function hI(n,e){return he(n,"POST","/v1/accounts:delete",e)}async function dI(n,e){return he(n,"POST","/v1/accounts:update",e)}async function fI(n,e){return he(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function ai(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mI(n,e=!1){const t=S(n),r=await t.getIdToken(e),i=Ao(r);y(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ai(wa(i.auth_time)),issuedAtTime:ai(wa(i.iat)),expirationTime:ai(wa(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function wa(n){return Number(n)*1e3}function Ao(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return xs("JWT malformed, contained fewer than 3 sections"),null;try{const i=Nd(t);return i?JSON.parse(i):(xs("Failed to decode base64 JWT payload"),null)}catch(i){return xs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function pI(n){const e=Ao(n);return y(e,"internal-error"),y(typeof e.exp<"u","internal-error"),y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function vt(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ve&&gI(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function gI({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class _I{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class tf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ai(this.lastLoginAt),this.creationTime=ai(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ei(n){var e;const t=n.auth,r=await n.getIdToken(),i=await vt(n,fI(t,{idToken:r}));y(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?vI(s.providerUserInfo):[],a=II(n.providerData,o),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new tf(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(n,h)}async function yI(n){const e=S(n);await Ei(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function II(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function vI(n){return n.map(e=>{var{providerId:t}=e,r=Gc(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function EI(n,e){const t=await Zd(n,{},async()=>{const r=br({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=ef(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Xd.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
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
 */class wi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y(typeof e.idToken<"u","internal-error"),y(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):pI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return y(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await EI(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new wi;return r&&(y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wi,this.toJSON())}_performRefresh(){return it("not implemented")}}/**
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
 */function kt(n,e){y(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class En{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Gc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _I(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new tf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await vt(this,this.stsTokenManager.getToken(this.auth,e));return y(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return mI(this,e)}reload(){return yI(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new En(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ei(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await vt(this,hI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,c,u,l;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,f=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,I=(o=t.photoURL)!==null&&o!==void 0?o:void 0,v=(a=t.tenantId)!==null&&a!==void 0?a:void 0,E=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,C=(u=t.createdAt)!==null&&u!==void 0?u:void 0,x=(l=t.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:D,emailVerified:q,isAnonymous:$,providerData:U,stsTokenManager:Ie}=t;y(D&&Ie,e,"internal-error");const Ct=wi.fromJSON(this.name,Ie);y(typeof D=="string",e,"internal-error"),kt(h,e.name),kt(d,e.name),y(typeof q=="boolean",e,"internal-error"),y(typeof $=="boolean",e,"internal-error"),kt(f,e.name),kt(I,e.name),kt(v,e.name),kt(E,e.name),kt(C,e.name),kt(x,e.name);const qr=new En({uid:D,auth:e,email:d,emailVerified:q,displayName:h,isAnonymous:$,photoURL:I,phoneNumber:f,tenantId:v,stsTokenManager:Ct,createdAt:C,lastLoginAt:x});return U&&Array.isArray(U)&&(qr.providerData=U.map(Is=>Object.assign({},Is))),E&&(qr._redirectEventId=E),qr}static async _fromIdTokenResponse(e,t,r=!1){const i=new wi;i.updateFromServerResponse(t);const s=new En({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ei(s),s}}/**
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
 */const jl=new Map;function Ge(n){Ye(n instanceof Function,"Expected a class definition");let e=jl.get(n);return e?(Ye(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,jl.set(n,e),e)}/**
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
 */class nf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}nf.type="NONE";const hr=nf;/**
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
 */function wn(n,e,t){return`firebase:${n}:${e}:${t}`}class rr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=wn(this.userKey,i.apiKey,s),this.fullPersistenceKey=wn("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?En._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new rr(Ge(hr),e,r);const i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ge(hr);const o=wn(r,e.config.apiKey,e.name);let a=null;for(const u of t)try{const l=await u._get(o);if(l){const h=En._fromJSON(e,l);u!==s&&(a=h),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new rr(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new rr(s,e,r))}}/**
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
 */function zl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(of(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(af(e))return"Blackberry";if(cf(e))return"Webos";if(Wc(e))return"Safari";if((e.includes("chrome/")||sf(e))&&!e.includes("edge/"))return"Chrome";if(Wi(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function rf(n=X()){return/firefox\//i.test(n)}function Wc(n=X()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function sf(n=X()){return/crios\//i.test(n)}function of(n=X()){return/iemobile/i.test(n)}function Wi(n=X()){return/android/i.test(n)}function af(n=X()){return/blackberry/i.test(n)}function cf(n=X()){return/webos/i.test(n)}function Sr(n=X()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function wI(n=X()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function TI(n=X()){var e;return Sr(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function AI(){return Md()&&document.documentMode===10}function uf(n=X()){return Sr(n)||Wi(n)||cf(n)||af(n)||/windows phone/i.test(n)||of(n)}function RI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function lf(n,e=[]){let t;switch(n){case"Browser":t=zl(X());break;case"Worker":t=`${zl(X())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Zt}/${r}`}/**
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
 */async function bI(n){return(await he(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function hf(n,e){return he(n,"GET","/v2/recaptchaConfig",ue(n,e))}/**
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
 */function Kl(n){return n!==void 0&&n.getResponse!==void 0}function Wl(n){return n!==void 0&&n.enterprise!==void 0}class df{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
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
 */function PI(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Hc(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Te("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",PI().appendChild(r)})}function ff(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const SI="https://www.google.com/recaptcha/enterprise.js?render=",CI="recaptcha-enterprise",kI="NO_RECAPTCHA";class mf{constructor(e){this.type=CI,this.auth=se(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{hf(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new df(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;Wl(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(kI)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&Wl(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Hc(SI+a).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Gt(n,e,t,r=!1){const i=new mf(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class DI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class VI{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hl(this),this.idTokenSubscription=new Hl(this),this.beforeStateQueue=new DI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ge(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await rr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ei(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=aI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?S(e):null;return t&&y(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ge(e))})}async initializeRecaptchaConfig(){const e=await hf(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new df(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new mf(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Un("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ge(e)||this._popupRedirectResolver;y(t,this,"argument-error"),this.redirectPersistenceManager=await rr.create(this,[Ge(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return y(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,r,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=lf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&sI(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function se(n){return S(n)}class Hl{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ld(t=>this.observer=t)}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function NI(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ge);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function xI(n,e,t){const r=se(n);y(r._canInitEmulator,r,"emulator-config-failed"),y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=pf(e),{host:o,port:a}=OI(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||MI()}function pf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function OI(n){const e=pf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ql(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ql(o)}}}function Ql(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function MI(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Cr{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return it("not implemented")}_getIdTokenResponse(e){return it("not implemented")}_linkToIdToken(e,t){return it("not implemented")}_getReauthenticationResolver(e){return it("not implemented")}}/**
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
 */async function gf(n,e){return he(n,"POST","/v1/accounts:resetPassword",ue(n,e))}async function _f(n,e){return he(n,"POST","/v1/accounts:update",e)}async function LI(n,e){return he(n,"POST","/v1/accounts:update",ue(n,e))}/**
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
 */async function Ta(n,e){return At(n,"POST","/v1/accounts:signInWithPassword",ue(n,e))}async function Ro(n,e){return he(n,"POST","/v1/accounts:sendOobCode",ue(n,e))}async function FI(n,e){return Ro(n,e)}async function Aa(n,e){return Ro(n,e)}async function Ra(n,e){return Ro(n,e)}async function UI(n,e){return Ro(n,e)}/**
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
 */async function BI(n,e){return At(n,"POST","/v1/accounts:signInWithEmailLink",ue(n,e))}async function qI(n,e){return At(n,"POST","/v1/accounts:signInWithEmailLink",ue(n,e))}/**
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
 */class Ti extends Cr{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Ti(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Ti(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((t=e._getRecaptchaConfig())===null||t===void 0)&&t.emailPasswordEnabled){const i=await Gt(e,r,"signInWithPassword");return Ta(e,i)}else return Ta(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Gt(e,r,"signInWithPassword");return Ta(e,s)}else return Promise.reject(i)});case"emailLink":return BI(e,{email:this._email,oobCode:this._password});default:Re(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return _f(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return qI(e,{idToken:t,email:this._email,oobCode:this._password});default:Re(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function It(n,e){return At(n,"POST","/v1/accounts:signInWithIdp",ue(n,e))}/**
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
 */const $I="http://localhost";class dt extends Cr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new dt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Re("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Gc(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new dt(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return It(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,It(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,It(e,t)}buildRequest(){const e={requestUri:$I,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=br(t)}return e}}/**
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
 */async function GI(n,e){return he(n,"POST","/v1/accounts:sendVerificationCode",ue(n,e))}async function jI(n,e){return At(n,"POST","/v1/accounts:signInWithPhoneNumber",ue(n,e))}async function zI(n,e){const t=await At(n,"POST","/v1/accounts:signInWithPhoneNumber",ue(n,e));if(t.temporaryProof)throw ei(n,"account-exists-with-different-credential",t);return t}const KI={USER_NOT_FOUND:"user-not-found"};async function WI(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return At(n,"POST","/v1/accounts:signInWithPhoneNumber",ue(n,t),KI)}/**
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
 */class Tn extends Cr{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Tn({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Tn({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return jI(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return zI(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return WI(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new Tn({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function HI(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function QI(n){const e=tr(Zr(n)).link,t=e?tr(Zr(e)).deep_link_id:null,r=tr(Zr(n)).deep_link_id;return(r?tr(Zr(r)).link:null)||r||t||e||n}class bo{constructor(e){var t,r,i,s,o,a;const c=tr(Zr(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=HI((i=c.mode)!==null&&i!==void 0?i:null);y(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=QI(e);try{return new bo(t)}catch{return null}}}/**
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
 */class en{constructor(){this.providerId=en.PROVIDER_ID}static credential(e,t){return Ti._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=bo.parseLink(t);return y(r,"argument-error"),Ti._fromEmailAndCode(e,r.code,r.tenantId)}}en.PROVIDER_ID="password";en.EMAIL_PASSWORD_SIGN_IN_METHOD="password";en.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Rt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class kr extends Rt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ir extends kr{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return y("providerId"in t&&"signInMethod"in t,"argument-error"),dt._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return y(e.idToken||e.accessToken,"argument-error"),dt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return ir.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ir.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!t&&!s||!a)return null;try{return new ir(a)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class Ze extends kr{constructor(){super("facebook.com")}static credential(e){return dt._fromParams({providerId:Ze.PROVIDER_ID,signInMethod:Ze.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ze.credentialFromTaggedObject(e)}static credentialFromError(e){return Ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ze.credential(e.oauthAccessToken)}catch{return null}}}Ze.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ze.PROVIDER_ID="facebook.com";/**
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
 */class et extends kr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return dt._fromParams({providerId:et.PROVIDER_ID,signInMethod:et.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return et.credentialFromTaggedObject(e)}static credentialFromError(e){return et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return et.credential(t,r)}catch{return null}}}et.GOOGLE_SIGN_IN_METHOD="google.com";et.PROVIDER_ID="google.com";/**
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
 */class tt extends kr{constructor(){super("github.com")}static credential(e){return dt._fromParams({providerId:tt.PROVIDER_ID,signInMethod:tt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tt.credentialFromTaggedObject(e)}static credentialFromError(e){return tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tt.credential(e.oauthAccessToken)}catch{return null}}}tt.GITHUB_SIGN_IN_METHOD="github.com";tt.PROVIDER_ID="github.com";/**
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
 */const YI="http://localhost";class dr extends Cr{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return It(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,It(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,It(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=t;return!r||!i||!s||r!==i?null:new dr(r,s)}static _create(e,t){return new dr(e,t)}buildRequest(){return{requestUri:YI,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const JI="saml.";class Js extends Rt{constructor(e){y(e.startsWith(JI),"argument-error"),super(e)}static credentialFromResult(e){return Js.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Js.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=dr.fromJSON(e);return y(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return dr._create(r,t)}catch{return null}}}/**
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
 */class nt extends kr{constructor(){super("twitter.com")}static credential(e,t){return dt._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return nt.credential(t,r)}catch{return null}}}nt.TWITTER_SIGN_IN_METHOD="twitter.com";nt.PROVIDER_ID="twitter.com";/**
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
 */async function Os(n,e){return At(n,"POST","/v1/accounts:signUp",ue(n,e))}/**
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
 */class He{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await En._fromIdTokenResponse(e,r,i),o=Yl(r);return new He({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Yl(r);return new He({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Yl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function XI(n){var e;const t=se(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new He({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await Os(t,{returnSecureToken:!0}),i=await He._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}/**
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
 */class Xs extends Ve{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Xs.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Xs(e,t,r,i)}}function yf(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Xs._fromErrorAndOperation(n,s,e,r):s})}/**
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
 */function If(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function ZI(n,e){const t=S(n);await Po(!0,t,e);const{providerUserInfo:r}=await dI(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),i=If(r||[]);return t.providerData=t.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function Qc(n,e,t=!1){const r=await vt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return He._forOperation(n,"link",r)}async function Po(n,e,t){await Ei(e);const r=If(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";y(r.has(t)===n,e.auth,i)}/**
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
 */async function vf(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await vt(n,yf(r,i,e,n),t);y(s.idToken,r,"internal-error");const o=Ao(s.idToken);y(o,r,"internal-error");const{sub:a}=o;return y(n.uid===a,r,"user-mismatch"),He._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Re(r,"user-mismatch"),s}}/**
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
 */async function Ef(n,e,t=!1){const r="signIn",i=await yf(n,r,e),s=await He._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function So(n,e){return Ef(se(n),e)}async function wf(n,e){const t=S(n);return await Po(!1,t,e.providerId),Qc(t,e)}async function Tf(n,e){return vf(S(n),e)}/**
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
 */async function ev(n,e){return At(n,"POST","/v1/accounts:signInWithCustomToken",ue(n,e))}/**
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
 */async function tv(n,e){const t=se(n),r=await ev(t,{token:e,returnSecureToken:!0}),i=await He._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(i.user),i}/**
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
 */class Hi{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Yc._fromServerResponse(e,t):"totpInfo"in t?Jc._fromServerResponse(e,t):Re(e,"internal-error")}}class Yc extends Hi{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Yc(t)}}class Jc extends Hi{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new Jc(t)}}/**
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
 */function sr(n,e,t){var r;y(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),y(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(y(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(y(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function nv(n,e,t){var r;const i=se(n),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await Gt(i,s,"getOobCode",!0);t&&sr(i,o,t),await Aa(i,o)}else t&&sr(i,s,t),await Aa(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await Gt(i,s,"getOobCode",!0);t&&sr(i,a,t),await Aa(i,a)}else return Promise.reject(o)})}async function rv(n,e,t){await gf(S(n),{oobCode:e,newPassword:t})}async function iv(n,e){await LI(S(n),{oobCode:e})}async function Af(n,e){const t=S(n),r=await gf(t,{oobCode:e}),i=r.requestType;switch(y(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":y(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":y(r.mfaInfo,t,"internal-error");default:y(r.email,t,"internal-error")}let s=null;return r.mfaInfo&&(s=Hi._fromServerResponse(se(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function sv(n,e){const{data:t}=await Af(S(n),e);return t.email}async function ov(n,e,t){var r;const i=se(n),s={returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await Gt(i,s,"signUpPassword");o=Os(i,u)}else o=Os(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const l=await Gt(i,s,"signUpPassword");return Os(i,l)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),c=await He._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function av(n,e,t){return So(S(n),en.credential(e,t))}/**
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
 */async function cv(n,e,t){var r;const i=se(n),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,c){y(c.handleCodeInApp,i,"argument-error"),c&&sr(i,a,c)}if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await Gt(i,s,"getOobCode",!0);o(a,t),await Ra(i,a)}else o(s,t),await Ra(i,s).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const c=await Gt(i,s,"getOobCode",!0);o(c,t),await Ra(i,c)}else return Promise.reject(a)})}function uv(n,e){const t=bo.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function lv(n,e,t){const r=S(n),i=en.credentialWithLink(e,t||vi());return y(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),So(r,i)}/**
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
 */async function hv(n,e){return he(n,"POST","/v1/accounts:createAuthUri",ue(n,e))}/**
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
 */async function dv(n,e){const t=zc()?vi():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:i}=await hv(S(n),r);return i||[]}async function fv(n,e){const t=S(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&sr(t.auth,i,e);const{email:s}=await FI(t.auth,i);s!==n.email&&await n.reload()}async function mv(n,e,t){const r=S(n),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&sr(r.auth,s,t);const{email:o}=await UI(r.auth,s);o!==n.email&&await n.reload()}/**
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
 */async function pv(n,e){return he(n,"POST","/v1/accounts:update",e)}/**
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
 */async function gv(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=S(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await vt(r,pv(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function _v(n,e){return Rf(S(n),e,null)}function yv(n,e){return Rf(S(n),null,e)}async function Rf(n,e,t){const{auth:r}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=await vt(n,_f(r,s));await n._updateTokensIfNecessary(o,!0)}/**
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
 */function Iv(n){var e,t;if(!n)return null;const{providerId:r}=n,i=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},s=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n!=null&&n.idToken)){const o=(t=(e=Ao(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new or(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new vv(s,i);case"github.com":return new Ev(s,i);case"google.com":return new wv(s,i);case"twitter.com":return new Tv(s,i,n.screenName||null);case"custom":case"anonymous":return new or(s,null);default:return new or(s,r,i)}}class or{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class bf extends or{constructor(e,t,r,i){super(e,t,r),this.username=i}}class vv extends or{constructor(e,t){super(e,"facebook.com",t)}}class Ev extends bf{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class wv extends or{constructor(e,t){super(e,"google.com",t)}}class Tv extends bf{constructor(e,t,r){super(e,"twitter.com",t,r)}}function Av(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:Iv(t)}/**
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
 */class gn{constructor(e,t,r){this.type=e,this.credential=t,this.user=r}static _fromIdtoken(e,t){return new gn("enroll",e,t)}static _fromMfaPendingCredential(e){return new gn("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return gn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return gn._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Xc{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=se(e),i=t.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Hi._fromServerResponse(r,a));y(i.mfaPendingCredential,r,"internal-error");const o=gn._fromMfaPendingCredential(i.mfaPendingCredential);return new Xc(o,s,async a=>{const c=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:c.idToken,refreshToken:c.refreshToken});switch(t.operationType){case"signIn":const l=await He._fromIdTokenResponse(r,t.operationType,u);return await r._updateCurrentUser(l.user),l;case"reauthenticate":return y(t.user,r,"internal-error"),He._forOperation(t.user,t.operationType,u);default:Re(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function Rv(n,e){var t;const r=S(n),i=e;return y(e.customData.operationType,r,"argument-error"),y((t=i.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),Xc._fromError(r,i)}/**
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
 */function bv(n,e){return he(n,"POST","/v2/accounts/mfaEnrollment:start",ue(n,e))}function Pv(n,e){return he(n,"POST","/v2/accounts/mfaEnrollment:finalize",ue(n,e))}function Sv(n,e){return he(n,"POST","/v2/accounts/mfaEnrollment:withdraw",ue(n,e))}class Zc{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>Hi._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Zc(e)}async getSession(){return gn._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const r=e,i=await this.getSession(),s=await vt(this.user,r._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await vt(this.user,Sv(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==t),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const ba=new WeakMap;function Cv(n){const e=S(n);return ba.has(e)||ba.set(e,Zc._fromUser(e)),ba.get(e)}const Zs="__sak";/**
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
 */class Pf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Zs,"1"),this.storage.removeItem(Zs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function kv(){const n=X();return Wc(n)||Sr(n)}const Dv=1e3,Vv=10;class Sf extends Pf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=kv()&&RI(),this.fallbackToPolling=uf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);AI()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Vv):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Dv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Sf.type="LOCAL";const eu=Sf;/**
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
 */class Cf extends Pf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Cf.type="SESSION";const Pn=Cf;/**
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
 */function Nv(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Co{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Co(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(t.origin,s)),c=await Nv(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Co.receivers=[];/**
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
 */function Qi(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class xv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=Qi("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ae(){return window}function Ov(n){ae().location.href=n}/**
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
 */function tu(){return typeof ae().WorkerGlobalScope<"u"&&typeof ae().importScripts=="function"}async function Mv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Lv(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Fv(){return tu()?self:null}/**
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
 */const kf="firebaseLocalStorageDb",Uv=1,eo="firebaseLocalStorage",Df="fbase_key";class Yi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ko(n,e){return n.transaction([eo],e?"readwrite":"readonly").objectStore(eo)}function Bv(){const n=indexedDB.deleteDatabase(kf);return new Yi(n).toPromise()}function Wa(){const n=indexedDB.open(kf,Uv);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(eo,{keyPath:Df})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(eo)?e(r):(r.close(),await Bv(),e(await Wa()))})})}async function Jl(n,e,t){const r=ko(n,!0).put({[Df]:e,value:t});return new Yi(r).toPromise()}async function qv(n,e){const t=ko(n,!1).get(e),r=await new Yi(t).toPromise();return r===void 0?null:r.value}function Xl(n,e){const t=ko(n,!0).delete(e);return new Yi(t).toPromise()}const $v=800,Gv=3;class Vf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wa(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Gv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Co._getInstance(Fv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Mv(),!this.activeServiceWorker)return;this.sender=new xv(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Lv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wa();return await Jl(e,Zs,"1"),await Xl(e,Zs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Jl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>qv(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Xl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ko(i,!1).getAll();return new Yi(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$v)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vf.type="LOCAL";const Ai=Vf;/**
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
 */function jv(n,e){return he(n,"POST","/v2/accounts/mfaSignIn:start",ue(n,e))}function zv(n,e){return he(n,"POST","/v2/accounts/mfaSignIn:finalize",ue(n,e))}/**
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
 */const Kv=500,Wv=6e4,vs=1e12;class Hv{constructor(e){this.auth=e,this.counter=vs,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new Qv(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||vs;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||vs;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||vs;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class Qv{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;y(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Yv(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},Wv)},Kv))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Yv(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
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
 */const Pa=ff("rcb"),Jv=new Ki(3e4,6e4),Xv="https://www.google.com/recaptcha/api.js?";class Zv{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=ae().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return y(eE(t),e,"argument-error"),this.shouldResolveImmediately(t)&&Kl(ae().grecaptcha)?Promise.resolve(ae().grecaptcha):new Promise((r,i)=>{const s=ae().setTimeout(()=>{i(Te(e,"network-request-failed"))},Jv.get());ae()[Pa]=()=>{ae().clearTimeout(s),delete ae()[Pa];const a=ae().grecaptcha;if(!a||!Kl(a)){i(Te(e,"internal-error"));return}const c=a.render;a.render=(u,l)=>{const h=c(u,l);return this.counter++,h},this.hostLanguage=t,r(a)};const o=`${Xv}?${br({onload:Pa,render:"explicit",hl:t})}`;Hc(o).catch(()=>{clearTimeout(s),i(Te(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=ae().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function eE(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class tE{async load(e){return new Hv(e)}clearedOneInstance(){}}/**
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
 */const Nf="recaptcha",nE={theme:"light",type:"image"};let rE=class{constructor(e,t,r=Object.assign({},nE)){this.parameters=r,this.type=Nf,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=se(e),this.isInvisible=this.parameters.size==="invisible",y(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof t=="string"?document.getElementById(t):t;y(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new tE:new Zv,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){y(!this.parameters.sitekey,this.auth,"argument-error"),y(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),y(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=ae()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){y(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){y(zc()&&!tu(),this.auth,"internal-error"),await iE(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await bI(this.auth);y(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return y(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function iE(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
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
 */class nu{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Tn._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function sE(n,e,t){const r=se(n),i=await Do(r,e,S(t));return new nu(i,s=>So(r,s))}async function oE(n,e,t){const r=S(n);await Po(!1,r,"phone");const i=await Do(r.auth,e,S(t));return new nu(i,s=>wf(r,s))}async function aE(n,e,t){const r=S(n),i=await Do(r.auth,e,S(t));return new nu(i,s=>Tf(r,s))}async function Do(n,e,t){var r;const i=await t.verify();try{y(typeof i=="string",n,"argument-error"),y(t.type===Nf,n,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return y(o.type==="enroll",n,"internal-error"),(await bv(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{y(o.type==="signin",n,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return y(a,n,"missing-multi-factor-info"),(await jv(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await GI(n,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{t._reset()}}async function cE(n,e){await Qc(S(n),e)}/**
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
 */let Sn=class Ms{constructor(e){this.providerId=Ms.PROVIDER_ID,this.auth=se(e)}verifyPhoneNumber(e,t){return Do(this.auth,e,S(t))}static credential(e,t){return Tn._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Ms.credentialFromTaggedObject(t)}static credentialFromError(e){return Ms.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?Tn._fromTokenResponse(t,r):null}};Sn.PROVIDER_ID="phone";Sn.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Bn(n,e){return e?Ge(e):(y(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class ru extends Cr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return It(e,this._buildIdpRequest())}_linkToIdToken(e,t){return It(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return It(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function uE(n){return Ef(n.auth,new ru(n),n.bypassAuthState)}function lE(n){const{auth:e,user:t}=n;return y(t,e,"internal-error"),vf(t,new ru(n),n.bypassAuthState)}async function hE(n){const{auth:e,user:t}=n;return y(t,e,"internal-error"),Qc(t,new ru(n),n.bypassAuthState)}/**
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
 */class xf{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return uE;case"linkViaPopup":case"linkViaRedirect":return hE;case"reauthViaPopup":case"reauthViaRedirect":return lE;default:Re(this.auth,"internal-error")}}resolve(e){Ye(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ye(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const dE=new Ki(2e3,1e4);async function fE(n,e,t){const r=se(n);Pr(n,e,Rt);const i=Bn(r,t);return new pt(r,"signInViaPopup",e,i).executeNotNull()}async function mE(n,e,t){const r=S(n);Pr(r.auth,e,Rt);const i=Bn(r.auth,t);return new pt(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function pE(n,e,t){const r=S(n);Pr(r.auth,e,Rt);const i=Bn(r.auth,t);return new pt(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class pt extends xf{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,pt.currentPopupAction&&pt.currentPopupAction.cancel(),pt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){Ye(this.filter.length===1,"Popup operations only handle one event");const e=Qi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Te(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Te(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Te(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,dE.get())};e()}}pt.currentPopupAction=null;/**
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
 */const gE="pendingRedirect",ci=new Map;class _E extends xf{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ci.get(this.auth._key());if(!e){try{const r=await yE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ci.set(this.auth._key(),e)}return this.bypassAuthState||ci.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yE(n,e){const t=Mf(e),r=Of(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}async function iu(n,e){return Of(n)._set(Mf(e),"true")}function IE(){ci.clear()}function su(n,e){ci.set(n._key(),e)}function Of(n){return Ge(n._redirectPersistence)}function Mf(n){return wn(gE,n.config.apiKey,n.name)}/**
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
 */function vE(n,e,t){return EE(n,e,t)}async function EE(n,e,t){const r=se(n);Pr(n,e,Rt),await r._initializationPromise;const i=Bn(r,t);return await iu(i,r),i._openRedirect(r,e,"signInViaRedirect")}function wE(n,e,t){return TE(n,e,t)}async function TE(n,e,t){const r=S(n);Pr(r.auth,e,Rt),await r.auth._initializationPromise;const i=Bn(r.auth,t);await iu(i,r.auth);const s=await Lf(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function AE(n,e,t){return RE(n,e,t)}async function RE(n,e,t){const r=S(n);Pr(r.auth,e,Rt),await r.auth._initializationPromise;const i=Bn(r.auth,t);await Po(!1,r,e.providerId),await iu(i,r.auth);const s=await Lf(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function bE(n,e){return await se(n)._initializationPromise,Vo(n,e,!1)}async function Vo(n,e,t=!1){const r=se(n),i=Bn(r,e),o=await new _E(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function Lf(n){const e=Qi(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
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
 */const PE=10*60*1e3;class Ff{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!SE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Uf(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Te(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=PE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zl(e))}saveEventToCache(e){this.cachedEventUids.add(Zl(e)),this.lastProcessedEventTime=Date.now()}}function Zl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Uf({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function SE(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Uf(n);default:return!1}}/**
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
 */async function Bf(n,e={}){return he(n,"GET","/v1/projects",e)}/**
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
 */const CE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kE=/^https?/;async function DE(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Bf(n);for(const t of e)try{if(VE(t))return}catch{}Re(n,"unauthorized-domain")}function VE(n){const e=vi(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!kE.test(t))return!1;if(CE.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const NE=new Ki(3e4,6e4);function eh(){const n=ae().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function xE(n){return new Promise((e,t)=>{var r,i,s;function o(){eh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{eh(),t(Te(n,"network-request-failed"))},timeout:NE.get()})}if(!((i=(r=ae().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ae().gapi)===null||s===void 0)&&s.load)o();else{const a=ff("iframefcb");return ae()[a]=()=>{gapi.load?o():t(Te(n,"network-request-failed"))},Hc(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw Ls=null,e})}let Ls=null;function OE(n){return Ls=Ls||xE(n),Ls}/**
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
 */const ME=new Ki(5e3,15e3),LE="__/auth/iframe",FE="emulator/auth/iframe",UE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},BE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qE(n){const e=n.config;y(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Kc(e,FE):`https://${n.config.authDomain}/${LE}`,r={apiKey:e.apiKey,appName:n.name,v:Zt},i=BE.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${br(r).slice(1)}`}async function $E(n){const e=await OE(n),t=ae().gapi;return y(t,n,"internal-error"),e.open({where:document.body,url:qE(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:UE,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Te(n,"network-request-failed"),a=ae().setTimeout(()=>{s(o)},ME.get());function c(){ae().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const GE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jE=500,zE=600,KE="_blank",WE="http://localhost";class th{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function HE(n,e,t,r=jE,i=zE){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},GE),{width:r.toString(),height:i.toString(),top:s,left:o}),u=X().toLowerCase();t&&(a=sf(u)?KE:t),rf(u)&&(e=e||WE,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[f,I])=>`${d}${f}=${I},`,"");if(TI(u)&&a!=="_self")return QE(e||"",a),new th(null);const h=window.open(e||"",a,l);y(h,n,"popup-blocked");try{h.focus()}catch{}return new th(h)}function QE(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const YE="__/auth/handler",JE="emulator/auth/handler",XE=encodeURIComponent("fac");async function Ha(n,e,t,r,i,s){y(n.config.authDomain,n,"auth-domain-config-required"),y(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Zt,eventId:i};if(e instanceof Rt){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",x_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,h]of Object.entries(s||{}))o[l]=h}if(e instanceof kr){const l=e.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await n._getAppCheckToken(),u=c?`#${XE}=${encodeURIComponent(c)}`:"";return`${ZE(n)}?${br(a).slice(1)}${u}`}function ZE({config:n}){return n.emulator?Kc(n,JE):`https://${n.authDomain}/${YE}`}/**
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
 */const Sa="webStorageSupport";class ew{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pn,this._completeRedirectFn=Vo,this._overrideRedirectResult=su}async _openPopup(e,t,r,i){var s;Ye((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Ha(e,t,r,vi(),i);return HE(e,o,Qi())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Ha(e,t,r,vi(),i);return Ov(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Ye(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await $E(e),r=new Ff(e);return t.register("authEvent",i=>(y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Sa,{type:Sa},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Sa];o!==void 0&&t(!!o),Re(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=DE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return uf()||Wc()||Sr()}}const tw=ew;class nw{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return it("unexpected MultiFactorSessionType")}}}class ou extends nw{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new ou(e)}_finalizeEnroll(e,t,r){return Pv(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return zv(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class qf{constructor(){}static assertion(e){return ou._fromCredential(e)}}qf.FACTOR_ID="phone";var nh="@firebase/auth",rh="1.1.0";/**
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
 */class rw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function iw(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function sw(n){$t(new ht("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lf(n)},u=new VI(r,i,s,c);return NI(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),$t(new ht("auth-internal",e=>{const t=se(e.getProvider("auth").getImmediate());return(r=>new rw(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ut(nh,rh,iw(n)),ut(nh,rh,"esm2017")}/**
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
 */const ow=5*60;A_("authIdTokenMaxAge");sw("Browser");/**
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
 */function Cn(){return window}/**
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
 */const aw=2e3;async function cw(n,e,t){var r;const{BuildInfo:i}=Cn();Ye(e.sessionId,"AuthEvent did not contain a session ID");const s=await fw(e.sessionId),o={};return Sr()?o.ibi=i.packageName:Wi()?o.apn=i.packageName:Re(n,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Ha(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function uw(n){const{BuildInfo:e}=Cn(),t={};Sr()?t.iosBundleId=e.packageName:Wi()?t.androidPackageName=e.packageName:Re(n,"operation-not-supported-in-this-environment"),await Bf(n,t)}function lw(n){const{cordova:e}=Cn();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(n):i=e.InAppBrowser.open(n,wI()?"_blank":"_system","location=yes"),t(i)})})}async function hw(n,e,t){const{cordova:r}=Cn();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function u(){a||(a=window.setTimeout(()=>{o(Te(n,"redirect-cancelled-by-user"))},aw))}function l(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(c),document.addEventListener("resume",u,!1),Wi()&&document.addEventListener("visibilitychange",l,!1),i=()=>{e.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{i()}}function dw(n){var e,t,r,i,s,o,a,c,u,l;const h=Cn();y(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),y(typeof((t=h==null?void 0:h.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),y(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),y(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),y(typeof((l=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||l===void 0?void 0:l.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function fw(n){const e=mw(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function mw(n){if(Ye(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
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
 */const pw=20;class gw extends Ff{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function _w(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:vw(),postBody:null,tenantId:n.tenantId,error:Te(n,"no-auth-event")}}function yw(n,e){return Qa()._set(Ya(n),e)}async function ih(n){const e=await Qa()._get(Ya(n));return e&&await Qa()._remove(Ya(n)),e}function Iw(n,e){var t,r;const i=ww(e);if(i.includes("/__/auth/callback")){const s=Fs(i),o=s.firebaseError?Ew(decodeURIComponent(s.firebaseError)):null,a=(r=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],c=a?Te(a):null;return c?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:i,postBody:null}}return null}function vw(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<pw;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function Qa(){return Ge(eu)}function Ya(n){return wn("authEvent",n.config.apiKey,n.name)}function Ew(n){try{return JSON.parse(n)}catch{return null}}function ww(n){const e=Fs(n),t=e.link?decodeURIComponent(e.link):void 0,r=Fs(t).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Fs(i).link||i||r||t||n}function Fs(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return tr(t.join("?"))}/**
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
 */const Tw=500;class Aw{constructor(){this._redirectPersistence=Pn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Vo,this._overrideRedirectResult=su}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new gw(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Re(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,i){dw(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),IE(),await this._originValidation(e);const o=_w(e,r,i);await yw(e,o);const a=await cw(e,o,t),c=await lw(a);return hw(e,s,c)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=uw(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Cn(),o=setTimeout(async()=>{await ih(e),t.onEvent(sh())},Tw),a=async l=>{clearTimeout(o);const h=await ih(e);let d=null;h&&(l!=null&&l.url)&&(d=Iw(h,l.url)),t.onEvent(d||sh())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const c=i,u=`${s.packageName.toLowerCase()}://`;Cn().handleOpenURL=async l=>{if(l.toLowerCase().startsWith(u)&&a({url:l}),typeof c=="function")try{c(l)}catch(h){console.error(h)}}}}const Rw=Aw;function sh(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Te("no-auth-event")}}/**
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
 */function bw(n,e){se(n)._logFramework(e)}var Pw="@firebase/auth-compat",Sw="0.4.4";/**
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
 */const Cw=1e3;function ui(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function kw(){return ui()==="http:"||ui()==="https:"}function $f(n=X()){return!!((ui()==="file:"||ui()==="ionic:"||ui()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function Dw(){return Uc()||Fc()}function Vw(){return Md()&&(document==null?void 0:document.documentMode)===11}function Nw(n=X()){return/Edge\/\d+/.test(n)}function xw(n=X()){return Vw()||Nw(n)}function Gf(){try{const n=self.localStorage,e=Qi();if(n)return n.setItem(e,"1"),n.removeItem(e),xw()?_i():!0}catch{return au()&&_i()}return!1}function au(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Ca(){return(kw()||Od()||$f())&&!Dw()&&Gf()&&!au()}function jf(){return $f()&&typeof document<"u"}async function Ow(){return jf()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},Cw);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function Mw(){return typeof window<"u"?window:null}/**
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
 */const $e={LOCAL:"local",NONE:"none",SESSION:"session"},Gr=y,zf="persistence";function Lw(n,e){if(Gr(Object.values($e).includes(e),n,"invalid-persistence-type"),Uc()){Gr(e!==$e.SESSION,n,"unsupported-persistence-type");return}if(Fc()){Gr(e===$e.NONE,n,"unsupported-persistence-type");return}if(au()){Gr(e===$e.NONE||e===$e.LOCAL&&_i(),n,"unsupported-persistence-type");return}Gr(e===$e.NONE||Gf(),n,"unsupported-persistence-type")}async function Ja(n){await n._initializationPromise;const e=Kf(),t=wn(zf,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function Fw(n,e){const t=Kf();if(!t)return[];const r=wn(zf,n,e);switch(t.getItem(r)){case $e.NONE:return[hr];case $e.LOCAL:return[Ai,Pn];case $e.SESSION:return[Pn];default:return[]}}function Kf(){var n;try{return((n=Mw())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
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
 */const Uw=y;class Mt{constructor(){this.browserResolver=Ge(tw),this.cordovaResolver=Ge(Rw),this.underlyingResolver=null,this._redirectPersistence=Pn,this._completeRedirectFn=Vo,this._overrideRedirectResult=su}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,i)}async _openRedirect(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return jf()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return Uw(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await Ow();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function Wf(n){return n.unwrap()}function Bw(n){return n.wrapped()}/**
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
 */function qw(n){return Hf(n)}function $w(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new Gw(n,Rv(n,e))}else if(r){const i=Hf(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function Hf(n){const{_tokenResponse:e}=n instanceof Ve?n.customData:n;if(!e)return null;if(!(n instanceof Ve)&&"temporaryProof"in e&&"phoneNumber"in e)return Sn.credentialFromResult(n);const t=e.providerId;if(!t||t===$r.PASSWORD)return null;let r;switch(t){case $r.GOOGLE:r=et;break;case $r.FACEBOOK:r=Ze;break;case $r.GITHUB:r=tt;break;case $r.TWITTER:r=nt;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!s&&!o&&!i&&!a?null:a?t.startsWith("saml.")?dr._create(t,a):dt._fromParams({providerId:t,signInMethod:t,pendingToken:a,idToken:i,accessToken:s}):new ir(t).credential({idToken:i,accessToken:s,rawNonce:c})}return n instanceof Ve?r.credentialFromError(n):r.credentialFromResult(n)}function Me(n,e){return e.catch(t=>{throw t instanceof Ve&&$w(n,t),t}).then(t=>{const r=t.operationType,i=t.user;return{operationType:r,credential:qw(t),additionalUserInfo:Av(t),user:No.getOrCreate(i)}})}async function Xa(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>Me(n,t.confirm(r))}}class Gw{constructor(e,t){this.resolver=t,this.auth=Bw(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Me(Wf(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */let No=class ti{constructor(e){this._delegate=e,this.multiFactor=Cv(e)}static getOrCreate(e){return ti.USER_MAP.has(e)||ti.USER_MAP.set(e,new ti(e)),ti.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Me(this.auth,wf(this._delegate,e))}async linkWithPhoneNumber(e,t){return Xa(this.auth,oE(this._delegate,e,t))}async linkWithPopup(e){return Me(this.auth,pE(this._delegate,e,Mt))}async linkWithRedirect(e){return await Ja(se(this.auth)),AE(this._delegate,e,Mt)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Me(this.auth,Tf(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return Xa(this.auth,aE(this._delegate,e,t))}reauthenticateWithPopup(e){return Me(this.auth,mE(this._delegate,e,Mt))}async reauthenticateWithRedirect(e){return await Ja(se(this.auth)),wE(this._delegate,e,Mt)}sendEmailVerification(e){return fv(this._delegate,e)}async unlink(e){return await ZI(this._delegate,e),this}updateEmail(e){return _v(this._delegate,e)}updatePassword(e){return yv(this._delegate,e)}updatePhoneNumber(e){return cE(this._delegate,e)}updateProfile(e){return gv(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return mv(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};No.USER_MAP=new WeakMap;/**
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
 */const jr=y;class Za{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;jr(r,"invalid-api-key",{appName:e.name}),jr(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Mt:void 0;this._delegate=t.initialize({options:{persistence:jw(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(rI),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?No.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){xI(this._delegate,e,t)}applyActionCode(e){return iv(this._delegate,e)}checkActionCode(e){return Af(this._delegate,e)}confirmPasswordReset(e,t){return rv(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Me(this._delegate,ov(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return dv(this._delegate,e)}isSignInWithEmailLink(e){return uv(this._delegate,e)}async getRedirectResult(){jr(Ca(),this._delegate,"operation-not-supported-in-this-environment");const e=await bE(this._delegate,Mt);return e?Me(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){bw(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:i,error:s,complete:o}=oh(e,t,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,t,r){const{next:i,error:s,complete:o}=oh(e,t,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,t){return cv(this._delegate,e,t)}sendPasswordResetEmail(e,t){return nv(this._delegate,e,t||void 0)}async setPersistence(e){Lw(this._delegate,e);let t;switch(e){case $e.SESSION:t=Pn;break;case $e.LOCAL:t=await Ge(Ai)._isAvailable()?Ai:eu;break;case $e.NONE:t=hr;break;default:return Re("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Me(this._delegate,XI(this._delegate))}signInWithCredential(e){return Me(this._delegate,So(this._delegate,e))}signInWithCustomToken(e){return Me(this._delegate,tv(this._delegate,e))}signInWithEmailAndPassword(e,t){return Me(this._delegate,av(this._delegate,e,t))}signInWithEmailLink(e,t){return Me(this._delegate,lv(this._delegate,e,t))}signInWithPhoneNumber(e,t){return Xa(this._delegate,sE(this._delegate,e,t))}async signInWithPopup(e){return jr(Ca(),this._delegate,"operation-not-supported-in-this-environment"),Me(this._delegate,fE(this._delegate,e,Mt))}async signInWithRedirect(e){return jr(Ca(),this._delegate,"operation-not-supported-in-this-environment"),await Ja(this._delegate),vE(this._delegate,e,Mt)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return sv(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Za.Persistence=$e;function oh(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const i=r;return{next:o=>i(o&&No.getOrCreate(o)),error:e,complete:t}}function jw(n,e){const t=Fw(n,e);if(typeof self<"u"&&!t.includes(Ai)&&t.push(Ai),typeof window<"u")for(const r of[eu,Pn])t.includes(r)||t.push(r);return t.includes(hr)||t.push(hr),t}/**
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
 */class cu{constructor(){this.providerId="phone",this._delegate=new Sn(Wf(Ne.auth()))}static credential(e,t){return Sn.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}cu.PHONE_SIGN_IN_METHOD=Sn.PHONE_SIGN_IN_METHOD;cu.PROVIDER_ID=Sn.PROVIDER_ID;/**
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
 */const zw=y;class Kw{constructor(e,t,r=Ne.app()){var i;zw((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new rE(r.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const Ww="auth-compat";function Hw(n){n.INTERNAL.registerComponent(new ht(Ww,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Za(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Hn.EMAIL_SIGNIN,PASSWORD_RESET:Hn.PASSWORD_RESET,RECOVER_EMAIL:Hn.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Hn.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Hn.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Hn.VERIFY_EMAIL}},EmailAuthProvider:en,FacebookAuthProvider:Ze,GithubAuthProvider:tt,GoogleAuthProvider:et,OAuthProvider:ir,SAMLAuthProvider:Js,PhoneAuthProvider:cu,PhoneMultiFactorGenerator:qf,RecaptchaVerifier:Kw,TwitterAuthProvider:nt,Auth:Za,AuthCredential:Cr,Error:Ve}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(Pw,Sw)}Hw(Ne);var Qw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},A,uu=uu||{},k=Qw||self;function xo(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function Ji(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function Yw(n){return Object.prototype.hasOwnProperty.call(n,ka)&&n[ka]||(n[ka]=++Jw)}var ka="closure_uid_"+(1e9*Math.random()>>>0),Jw=0;function Xw(n,e,t){return n.call.apply(n.bind,arguments)}function Zw(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function Pe(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Pe=Xw:Pe=Zw,Pe.apply(null,arguments)}function Es(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function ge(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function tn(){this.s=this.s,this.o=this.o}var eT=0;tn.prototype.s=!1;tn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),eT!=0)&&Yw(this)};tn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Qf=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function lu(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function ah(n,e){for(let t=1;t<arguments.length;t++){const r=arguments[t];if(xo(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function Se(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}Se.prototype.h=function(){this.defaultPrevented=!0};var tT=function(){if(!k.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{k.addEventListener("test",()=>{},e),k.removeEventListener("test",()=>{},e)}catch{}return n}();function Ri(n){return/^[\s\xa0]*$/.test(n)}function Oo(){var n=k.navigator;return n&&(n=n.userAgent)?n:""}function rt(n){return Oo().indexOf(n)!=-1}function hu(n){return hu[" "](n),n}hu[" "]=function(){};function nT(n,e){var t=HT;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:t[n]=e(n)}var rT=rt("Opera"),fr=rt("Trident")||rt("MSIE"),Yf=rt("Edge"),ec=Yf||fr,Jf=rt("Gecko")&&!(Oo().toLowerCase().indexOf("webkit")!=-1&&!rt("Edge"))&&!(rt("Trident")||rt("MSIE"))&&!rt("Edge"),iT=Oo().toLowerCase().indexOf("webkit")!=-1&&!rt("Edge");function Xf(){var n=k.document;return n?n.documentMode:void 0}var tc;e:{var Da="",Va=function(){var n=Oo();if(Jf)return/rv:([^\);]+)(\)|;)/.exec(n);if(Yf)return/Edge\/([\d\.]+)/.exec(n);if(fr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(iT)return/WebKit\/(\S+)/.exec(n);if(rT)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Va&&(Da=Va?Va[1]:""),fr){var Na=Xf();if(Na!=null&&Na>parseFloat(Da)){tc=String(Na);break e}}tc=Da}var nc;if(k.document&&fr){var ch=Xf();nc=ch||parseInt(tc,10)||void 0}else nc=void 0;var sT=nc;function bi(n,e){if(Se.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Jf){e:{try{hu(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:oT[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&bi.$.h.call(this)}}ge(bi,Se);var oT={2:"touch",3:"pen",4:"mouse"};bi.prototype.h=function(){bi.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Xi="closure_listenable_"+(1e6*Math.random()|0),aT=0;function cT(n,e,t,r,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.la=i,this.key=++aT,this.fa=this.ia=!1}function Mo(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function du(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function uT(n,e){for(const t in n)e.call(void 0,n[t],t,n)}function Zf(n){const e={};for(const t in n)e[t]=n[t];return e}const uh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function em(n,e){let t,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(t in r)n[t]=r[t];for(let s=0;s<uh.length;s++)t=uh[s],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function Lo(n){this.src=n,this.g={},this.h=0}Lo.prototype.add=function(n,e,t,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=ic(n,e,r,i);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new cT(e,this.src,s,!!r,i),e.ia=t,n.push(e)),e};function rc(n,e){var t=e.type;if(t in n.g){var r=n.g[t],i=Qf(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Mo(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function ic(n,e,t,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==e&&s.capture==!!t&&s.la==r)return i}return-1}var fu="closure_lm_"+(1e6*Math.random()|0),xa={};function tm(n,e,t,r,i){if(r&&r.once)return rm(n,e,t,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)tm(n,e[s],t,r,i);return null}return t=gu(t),n&&n[Xi]?n.O(e,t,Ji(r)?!!r.capture:!!r,i):nm(n,e,t,!1,r,i)}function nm(n,e,t,r,i,s){if(!e)throw Error("Invalid event type");var o=Ji(i)?!!i.capture:!!i,a=pu(n);if(a||(n[fu]=a=new Lo(n)),t=a.add(e,t,r,o,s),t.proxy)return t;if(r=lT(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)tT||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),r,i);else if(n.attachEvent)n.attachEvent(sm(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function lT(){function n(t){return e.call(n.src,n.listener,t)}const e=hT;return n}function rm(n,e,t,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)rm(n,e[s],t,r,i);return null}return t=gu(t),n&&n[Xi]?n.P(e,t,Ji(r)?!!r.capture:!!r,i):nm(n,e,t,!0,r,i)}function im(n,e,t,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)im(n,e[s],t,r,i);else r=Ji(r)?!!r.capture:!!r,t=gu(t),n&&n[Xi]?(n=n.i,e=String(e).toString(),e in n.g&&(s=n.g[e],t=ic(s,t,r,i),-1<t&&(Mo(s[t]),Array.prototype.splice.call(s,t,1),s.length==0&&(delete n.g[e],n.h--)))):n&&(n=pu(n))&&(e=n.g[e.toString()],n=-1,e&&(n=ic(e,t,r,i)),(t=-1<n?e[n]:null)&&mu(t))}function mu(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[Xi])rc(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(sm(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=pu(e))?(rc(t,n),t.h==0&&(t.src=null,e[fu]=null)):Mo(n)}}}function sm(n){return n in xa?xa[n]:xa[n]="on"+n}function hT(n,e){if(n.fa)n=!0;else{e=new bi(e,this);var t=n.listener,r=n.la||n.src;n.ia&&mu(n),n=t.call(r,e)}return n}function pu(n){return n=n[fu],n instanceof Lo?n:null}var Oa="__closure_events_fn_"+(1e9*Math.random()>>>0);function gu(n){return typeof n=="function"?n:(n[Oa]||(n[Oa]=function(e){return n.handleEvent(e)}),n[Oa])}function pe(){tn.call(this),this.i=new Lo(this),this.S=this,this.J=null}ge(pe,tn);pe.prototype[Xi]=!0;pe.prototype.removeEventListener=function(n,e,t,r){im(this,n,e,t,r)};function Ae(n,e){var t,r=n.J;if(r)for(t=[];r;r=r.J)t.push(r);if(n=n.S,r=e.type||e,typeof e=="string")e=new Se(e,n);else if(e instanceof Se)e.target=e.target||n;else{var i=e;e=new Se(r,n),em(e,i)}if(i=!0,t)for(var s=t.length-1;0<=s;s--){var o=e.g=t[s];i=ws(o,r,!0,e)&&i}if(o=e.g=n,i=ws(o,r,!0,e)&&i,i=ws(o,r,!1,e)&&i,t)for(s=0;s<t.length;s++)o=e.g=t[s],i=ws(o,r,!1,e)&&i}pe.prototype.N=function(){if(pe.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)Mo(t[r]);delete n.g[e],n.h--}}this.J=null};pe.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};pe.prototype.P=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function ws(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==t){var a=o.listener,c=o.la||o.src;o.ia&&rc(n.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var _u=k.JSON.stringify;class dT{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function fT(){var n=yu;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class mT{constructor(){this.h=this.g=null}add(e,t){const r=om.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var om=new dT(()=>new pT,n=>n.reset());class pT{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function gT(n){var e=1;n=n.split(":");const t=[];for(;0<e&&n.length;)t.push(n.shift()),e--;return n.length&&t.push(n.join(":")),t}function _T(n){k.setTimeout(()=>{throw n},0)}let Pi,Si=!1,yu=new mT,am=()=>{const n=k.Promise.resolve(void 0);Pi=()=>{n.then(yT)}};var yT=()=>{for(var n;n=fT();){try{n.h.call(n.g)}catch(t){_T(t)}var e=om;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}Si=!1};function Fo(n,e){pe.call(this),this.h=n||1,this.g=e||k,this.j=Pe(this.qb,this),this.l=Date.now()}ge(Fo,pe);A=Fo.prototype;A.ga=!1;A.T=null;A.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ae(this,"tick"),this.ga&&(Iu(this),this.start()))}};A.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Iu(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}A.N=function(){Fo.$.N.call(this),Iu(this),delete this.g};function vu(n,e,t){if(typeof n=="function")t&&(n=Pe(n,t));else if(n&&typeof n.handleEvent=="function")n=Pe(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:k.setTimeout(n,e||0)}function cm(n){n.g=vu(()=>{n.g=null,n.i&&(n.i=!1,cm(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class IT extends tn{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:cm(this)}N(){super.N(),this.g&&(k.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ci(n){tn.call(this),this.h=n,this.g={}}ge(Ci,tn);var lh=[];function um(n,e,t,r){Array.isArray(t)||(t&&(lh[0]=t.toString()),t=lh);for(var i=0;i<t.length;i++){var s=tm(e,t[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function lm(n){du(n.g,function(e,t){this.g.hasOwnProperty(t)&&mu(e)},n),n.g={}}Ci.prototype.N=function(){Ci.$.N.call(this),lm(this)};Ci.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Uo(){this.g=!0}Uo.prototype.Ea=function(){this.g=!1};function vT(n,e,t,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function ET(n,e,t,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+t+`
`+s+" "+o})}function nr(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+TT(n,t)+(r?" "+r:"")})}function wT(n,e){n.info(function(){return"TIMEOUT: "+e})}Uo.prototype.info=function(){};function TT(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return _u(t)}catch{return e}}var qn={},hh=null;function Bo(){return hh=hh||new pe}qn.Ta="serverreachability";function hm(n){Se.call(this,qn.Ta,n)}ge(hm,Se);function ki(n){const e=Bo();Ae(e,new hm(e))}qn.STAT_EVENT="statevent";function dm(n,e){Se.call(this,qn.STAT_EVENT,n),this.stat=e}ge(dm,Se);function De(n){const e=Bo();Ae(e,new dm(e,n))}qn.Ua="timingevent";function fm(n,e){Se.call(this,qn.Ua,n),this.size=e}ge(fm,Se);function Zi(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return k.setTimeout(function(){n()},e)}var qo={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},mm={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Eu(){}Eu.prototype.h=null;function dh(n){return n.h||(n.h=n.i())}function pm(){}var es={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function wu(){Se.call(this,"d")}ge(wu,Se);function Tu(){Se.call(this,"c")}ge(Tu,Se);var sc;function $o(){}ge($o,Eu);$o.prototype.g=function(){return new XMLHttpRequest};$o.prototype.i=function(){return{}};sc=new $o;function ts(n,e,t,r){this.l=n,this.j=e,this.m=t,this.W=r||1,this.U=new Ci(this),this.P=AT,n=ec?125:void 0,this.V=new Fo(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new gm}function gm(){this.i=null,this.g="",this.h=!1}var AT=45e3,oc={},to={};A=ts.prototype;A.setTimeout=function(n){this.P=n};function ac(n,e,t){n.L=1,n.v=jo(Et(e)),n.s=t,n.S=!0,_m(n,null)}function _m(n,e){n.G=Date.now(),ns(n),n.A=Et(n.v);var t=n.A,r=n.W;Array.isArray(r)||(r=[String(r)]),Rm(t.i,"t",r),n.C=0,t=n.l.J,n.h=new gm,n.g=Km(n.l,t?e:null,!n.s),0<n.O&&(n.M=new IT(Pe(n.Pa,n,n.g),n.O)),um(n.U,n.g,"readystatechange",n.nb),e=n.I?Zf(n.I):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,e)):(n.u="GET",n.g.ha(n.A,n.u,null,e)),ki(),vT(n.j,n.u,n.A,n.m,n.W,n.s)}A.nb=function(n){n=n.target;const e=this.M;e&&st(n)==3?e.l():this.Pa(n)};A.Pa=function(n){try{if(n==this.g)e:{const l=st(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||ec||this.g&&(this.h.h||this.g.ja()||gh(this.g)))){this.J||l!=4||e==7||(e==8||0>=h?ki(3):ki(2)),Go(this);var t=this.g.da();this.ca=t;t:if(ym(this)){var r=gh(this.g);n="";var i=r.length,s=st(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){_n(this),li(this);var o="";break t}this.h.i=new k.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,ET(this.j,this.u,this.A,this.m,this.W,l,t),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ri(a)){var u=a;break t}}u=null}if(t=u)nr(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,cc(this,t);else{this.i=!1,this.o=3,De(12),_n(this),li(this);break e}}this.S?(Im(this,l,o),ec&&this.i&&l==3&&(um(this.U,this.V,"tick",this.mb),this.V.start())):(nr(this.j,this.m,o,null),cc(this,o)),l==4&&_n(this),this.i&&!this.J&&(l==4?$m(this.l,this):(this.i=!1,ns(this)))}else zT(this.g),t==400&&0<o.indexOf("Unknown SID")?(this.o=3,De(12)):(this.o=0,De(13)),_n(this),li(this)}}}catch{}finally{}};function ym(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function Im(n,e,t){let r=!0,i;for(;!n.J&&n.C<t.length;)if(i=RT(n,t),i==to){e==4&&(n.o=4,De(14),r=!1),nr(n.j,n.m,null,"[Incomplete Response]");break}else if(i==oc){n.o=4,De(15),nr(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else nr(n.j,n.m,i,null),cc(n,i);ym(n)&&i!=to&&i!=oc&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,De(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.ba&&(n.ba=!0,e=n.l,e.g==n&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),Cu(e),e.M=!0,De(11))):(nr(n.j,n.m,t,"[Invalid Chunked Response]"),_n(n),li(n))}A.mb=function(){if(this.g){var n=st(this.g),e=this.g.ja();this.C<e.length&&(Go(this),Im(this,n,e),this.i&&n!=4&&ns(this))}};function RT(n,e){var t=n.C,r=e.indexOf(`
`,t);return r==-1?to:(t=Number(e.substring(t,r)),isNaN(t)?oc:(r+=1,r+t>e.length?to:(e=e.slice(r,r+t),n.C=r+t,e)))}A.cancel=function(){this.J=!0,_n(this)};function ns(n){n.Y=Date.now()+n.P,vm(n,n.P)}function vm(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Zi(Pe(n.lb,n),e)}function Go(n){n.B&&(k.clearTimeout(n.B),n.B=null)}A.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(wT(this.j,this.A),this.L!=2&&(ki(),De(17)),_n(this),this.o=2,li(this)):vm(this,this.Y-n)};function li(n){n.l.H==0||n.J||$m(n.l,n)}function _n(n){Go(n);var e=n.M;e&&typeof e.sa=="function"&&e.sa(),n.M=null,Iu(n.V),lm(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.sa())}function cc(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||uc(t.i,n))){if(!n.K&&uc(t.i,n)&&t.H==3){try{var r=t.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)io(t),Wo(t);else break e;Su(t),De(18)}}else t.Fa=i[1],0<t.Fa-t.V&&37500>i[2]&&t.G&&t.A==0&&!t.v&&(t.v=Zi(Pe(t.ib,t),6e3));if(1>=Sm(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else yn(t,11)}else if((n.K||t.g==n)&&io(t),!Ri(e))for(i=t.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(t.V=u[0],u=u[1],t.H==2)if(u[0]=="c"){t.K=u[1],t.pa=u[2];const l=u[3];l!=null&&(t.ra=l,t.l.info("VER="+t.ra));const h=u[4];h!=null&&(t.Ga=h,t.l.info("SVER="+t.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,t.L=r,t.l.info("backChannelRequestTimeoutMs_="+r)),r=t;const f=n.g;if(f){const I=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(I){var s=r.i;s.g||I.indexOf("spdy")==-1&&I.indexOf("quic")==-1&&I.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Au(s,s.h),s.h=null))}if(r.F){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,K(r.I,r.F,v))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-n.G,t.l.info("Handshake RTT: "+t.S+"ms")),r=t;var o=n;if(r.wa=zm(r,r.J?r.pa:null,r.Y),o.K){Cm(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Go(a),ns(a)),r.g=o}else Bm(r);0<t.j.length&&Ho(t)}else u[0]!="stop"&&u[0]!="close"||yn(t,7);else t.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?yn(t,7):Pu(t):u[0]!="noop"&&t.h&&t.h.Aa(u),t.A=0)}}ki(4)}catch{}}function bT(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(xo(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function PT(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(xo(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const r in n)e[t++]=r;return e}}}function Em(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(xo(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=PT(n),r=bT(n),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],t&&t[s],n)}var wm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ST(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),i=null;if(0<=r){var s=n[t].substring(0,r);i=n[t].substring(r+1)}else s=n[t];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function An(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof An){this.h=n.h,no(this,n.j),this.s=n.s,this.g=n.g,ro(this,n.m),this.l=n.l;var e=n.i,t=new Di;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),fh(this,t),this.o=n.o}else n&&(e=String(n).match(wm))?(this.h=!1,no(this,e[1]||"",!0),this.s=ni(e[2]||""),this.g=ni(e[3]||"",!0),ro(this,e[4]),this.l=ni(e[5]||"",!0),fh(this,e[6]||"",!0),this.o=ni(e[7]||"")):(this.h=!1,this.i=new Di(null,this.h))}An.prototype.toString=function(){var n=[],e=this.j;e&&n.push(ri(e,mh,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(ri(e,mh,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(ri(t,t.charAt(0)=="/"?DT:kT,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",ri(t,NT)),n.join("")};function Et(n){return new An(n)}function no(n,e,t){n.j=t?ni(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function ro(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function fh(n,e,t){e instanceof Di?(n.i=e,xT(n.i,n.h)):(t||(e=ri(e,VT)),n.i=new Di(e,n.h))}function K(n,e,t){n.i.set(e,t)}function jo(n){return K(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function ni(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function ri(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,CT),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function CT(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var mh=/[#\/\?@]/g,kT=/[#\?:]/g,DT=/[#\?]/g,VT=/[#\?@]/g,NT=/#/g;function Di(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function nn(n){n.g||(n.g=new Map,n.h=0,n.i&&ST(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}A=Di.prototype;A.add=function(n,e){nn(this),this.i=null,n=Dr(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function Tm(n,e){nn(n),e=Dr(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function Am(n,e){return nn(n),e=Dr(n,e),n.g.has(e)}A.forEach=function(n,e){nn(this),this.g.forEach(function(t,r){t.forEach(function(i){n.call(e,i,r,this)},this)},this)};A.ta=function(){nn(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let r=0;r<e.length;r++){const i=n[r];for(let s=0;s<i.length;s++)t.push(e[r])}return t};A.Z=function(n){nn(this);let e=[];if(typeof n=="string")Am(this,n)&&(e=e.concat(this.g.get(Dr(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};A.set=function(n,e){return nn(this),this.i=null,n=Dr(this,n),Am(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};A.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function Rm(n,e,t){Tm(n,e),0<t.length&&(n.i=null,n.g.set(Dr(n,e),lu(t)),n.h+=t.length)}A.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var r=e[t];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function Dr(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function xT(n,e){e&&!n.j&&(nn(n),n.i=null,n.g.forEach(function(t,r){var i=r.toLowerCase();r!=i&&(Tm(this,r),Rm(this,i,t))},n)),n.j=e}var OT=class{constructor(n,e){this.g=n,this.map=e}};function bm(n){this.l=n||MT,k.PerformanceNavigationTiming?(n=k.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(k.g&&k.g.Ka&&k.g.Ka()&&k.g.Ka().ec),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var MT=10;function Pm(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Sm(n){return n.h?1:n.g?n.g.size:0}function uc(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function Au(n,e){n.g?n.g.add(e):n.h=e}function Cm(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}bm.prototype.cancel=function(){if(this.i=km(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function km(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return lu(n.i)}var LT=class{stringify(n){return k.JSON.stringify(n,void 0)}parse(n){return k.JSON.parse(n,void 0)}};function FT(){this.g=new LT}function UT(n,e,t){const r=t||"";try{Em(n,function(i,s){let o=i;Ji(i)&&(o=_u(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function BT(n,e){const t=new Uo;if(k.Image){const r=new Image;r.onload=Es(Ts,t,r,"TestLoadImage: loaded",!0,e),r.onerror=Es(Ts,t,r,"TestLoadImage: error",!1,e),r.onabort=Es(Ts,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=Es(Ts,t,r,"TestLoadImage: timeout",!1,e),k.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function Ts(n,e,t,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function rs(n){this.l=n.fc||null,this.j=n.ob||!1}ge(rs,Eu);rs.prototype.g=function(){return new zo(this.l,this.j)};rs.prototype.i=function(n){return function(){return n}}({});function zo(n,e){pe.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=Ru,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ge(zo,pe);var Ru=0;A=zo.prototype;A.open=function(n,e){if(this.readyState!=Ru)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Vi(this)};A.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||k).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};A.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,is(this)),this.readyState=Ru};A.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Vi(this)),this.g&&(this.readyState=3,Vi(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof k.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Dm(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function Dm(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}A.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?is(this):Vi(this),this.readyState==3&&Dm(this)}};A.Za=function(n){this.g&&(this.response=this.responseText=n,is(this))};A.Ya=function(n){this.g&&(this.response=n,is(this))};A.ka=function(){this.g&&is(this)};function is(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Vi(n)}A.setRequestHeader=function(n,e){this.v.append(n,e)};A.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};A.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Vi(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(zo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var qT=k.JSON.parse;function ee(n){pe.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Vm,this.L=this.M=!1}ge(ee,pe);var Vm="",$T=/^https?$/i,GT=["POST","PUT"];A=ee.prototype;A.Oa=function(n){this.M=n};A.ha=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():sc.g(),this.C=this.u?dh(this.u):dh(sc),this.g.onreadystatechange=Pe(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(s){ph(this,s);return}if(n=t||"",t=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)t.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())t.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(t.keys()).find(s=>s.toLowerCase()=="content-type"),i=k.FormData&&n instanceof k.FormData,!(0<=Qf(GT,e))||r||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of t)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Om(this),0<this.B&&((this.L=jT(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Pe(this.ua,this)):this.A=vu(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){ph(this,s)}};function jT(n){return fr&&typeof n.timeout=="number"&&n.ontimeout!==void 0}A.ua=function(){typeof uu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ae(this,"timeout"),this.abort(8))};function ph(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,Nm(n),Ko(n)}function Nm(n){n.F||(n.F=!0,Ae(n,"complete"),Ae(n,"error"))}A.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,Ae(this,"complete"),Ae(this,"abort"),Ko(this))};A.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ko(this,!0)),ee.$.N.call(this)};A.La=function(){this.s||(this.G||this.v||this.l?xm(this):this.kb())};A.kb=function(){xm(this)};function xm(n){if(n.h&&typeof uu<"u"&&(!n.C[1]||st(n)!=4||n.da()!=2)){if(n.v&&st(n)==4)vu(n.La,0,n);else if(Ae(n,"readystatechange"),st(n)==4){n.h=!1;try{const o=n.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=o===0){var i=String(n.I).match(wm)[1]||null;!i&&k.self&&k.self.location&&(i=k.self.location.protocol.slice(0,-1)),r=!$T.test(i?i.toLowerCase():"")}t=r}if(t)Ae(n,"complete"),Ae(n,"success");else{n.m=6;try{var s=2<st(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",Nm(n)}}finally{Ko(n)}}}}function Ko(n,e){if(n.g){Om(n);const t=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,e||Ae(n,"ready");try{t.onreadystatechange=r}catch{}}}function Om(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(k.clearTimeout(n.A),n.A=null)}A.isActive=function(){return!!this.g};function st(n){return n.g?n.g.readyState:0}A.da=function(){try{return 2<st(this)?this.g.status:-1}catch{return-1}};A.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};A.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),qT(e)}};function gh(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case Vm:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function zT(n){const e={};n=(n.g&&2<=st(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(Ri(n[r]))continue;var t=gT(n[r]);const i=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const s=e[i]||[];e[i]=s,s.push(t)}uT(e,function(r){return r.join(", ")})}A.Ia=function(){return this.m};A.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Mm(n){let e="";return du(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function bu(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=Mm(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):K(n,e,t))}function zr(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Lm(n){this.Ga=0,this.j=[],this.l=new Uo,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=zr("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=zr("baseRetryDelayMs",5e3,n),this.hb=zr("retryDelaySeedMs",1e4,n),this.eb=zr("forwardChannelMaxRetries",2,n),this.xa=zr("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.dc||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new bm(n&&n.concurrentRequestLimit),this.Ja=new FT,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}A=Lm.prototype;A.ra=8;A.H=1;function Pu(n){if(Fm(n),n.H==3){var e=n.W++,t=Et(n.I);if(K(t,"SID",n.K),K(t,"RID",e),K(t,"TYPE","terminate"),ss(n,t),e=new ts(n,n.l,e),e.L=2,e.v=jo(Et(t)),t=!1,k.navigator&&k.navigator.sendBeacon)try{t=k.navigator.sendBeacon(e.v.toString(),"")}catch{}!t&&k.Image&&(new Image().src=e.v,t=!0),t||(e.g=Km(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ns(e)}jm(n)}function Wo(n){n.g&&(Cu(n),n.g.cancel(),n.g=null)}function Fm(n){Wo(n),n.u&&(k.clearTimeout(n.u),n.u=null),io(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&k.clearTimeout(n.m),n.m=null)}function Ho(n){if(!Pm(n.i)&&!n.m){n.m=!0;var e=n.Na;Pi||am(),Si||(Pi(),Si=!0),yu.add(e,n),n.C=0}}function KT(n,e){return Sm(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=e.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=Zi(Pe(n.Na,n,e),Gm(n,n.C)),n.C++,!0)}A.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new ts(this,this.l,n);let s=this.s;if(this.U&&(s?(s=Zf(s),em(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){t:{var r=this.j[t];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=Um(this,i,e),t=Et(this.I),K(t,"RID",n),K(t,"CVER",22),this.F&&K(t,"X-HTTP-Session-Id",this.F),ss(this,t),s&&(this.O?e="headers="+encodeURIComponent(String(Mm(s)))+"&"+e:this.o&&bu(t,this.o,s)),Au(this.i,i),this.bb&&K(t,"TYPE","init"),this.P?(K(t,"$req",e),K(t,"SID","null"),i.aa=!0,ac(i,t,null)):ac(i,t,e),this.H=2}}else this.H==3&&(n?_h(this,n):this.j.length==0||Pm(this.i)||_h(this))};function _h(n,e){var t;e?t=e.m:t=n.W++;const r=Et(n.I);K(r,"SID",n.K),K(r,"RID",t),K(r,"AID",n.V),ss(n,r),n.o&&n.s&&bu(r,n.o,n.s),t=new ts(n,n.l,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.j=e.F.concat(n.j)),e=Um(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),Au(n.i,t),ac(t,r,e)}function ss(n,e){n.na&&du(n.na,function(t,r){K(e,r,t)}),n.h&&Em({},function(t,r){K(e,r,t)})}function Um(n,e,t){t=Math.min(n.j.length,t);var r=n.h?Pe(n.h.Va,n.h,n):null;e:{var i=n.j;let s=-1;for(;;){const o=["count="+t];s==-1?0<t?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<t;c++){let u=i[c].g;const l=i[c].map;if(u-=s,0>u)s=Math.max(0,i[c].g-100),a=!1;else try{UT(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return n=n.j.splice(0,t),e.F=n,r}function Bm(n){if(!n.g&&!n.u){n.ba=1;var e=n.Ma;Pi||am(),Si||(Pi(),Si=!0),yu.add(e,n),n.A=0}}function Su(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=Zi(Pe(n.Ma,n),Gm(n,n.A)),n.A++,!0)}A.Ma=function(){if(this.u=null,qm(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=Zi(Pe(this.jb,this),n)}};A.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,De(10),Wo(this),qm(this))};function Cu(n){n.B!=null&&(k.clearTimeout(n.B),n.B=null)}function qm(n){n.g=new ts(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=Et(n.wa);K(e,"RID","rpc"),K(e,"SID",n.K),K(e,"AID",n.V),K(e,"CI",n.G?"0":"1"),!n.G&&n.qa&&K(e,"TO",n.qa),K(e,"TYPE","xmlhttp"),ss(n,e),n.o&&n.s&&bu(e,n.o,n.s),n.L&&n.g.setTimeout(n.L);var t=n.g;n=n.pa,t.L=1,t.v=jo(Et(e)),t.s=null,t.S=!0,_m(t,n)}A.ib=function(){this.v!=null&&(this.v=null,Wo(this),Su(this),De(19))};function io(n){n.v!=null&&(k.clearTimeout(n.v),n.v=null)}function $m(n,e){var t=null;if(n.g==e){io(n),Cu(n),n.g=null;var r=2}else if(uc(n.i,e))t=e.F,Cm(n.i,e),r=1;else return;if(n.H!=0){if(e.i)if(r==1){t=e.s?e.s.length:0,e=Date.now()-e.G;var i=n.C;r=Bo(),Ae(r,new fm(r,t)),Ho(n)}else Bm(n);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&KT(n,e)||r==2&&Su(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),i){case 1:yn(n,5);break;case 4:yn(n,10);break;case 3:yn(n,6);break;default:yn(n,2)}}}function Gm(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(t*=2),t*e}function yn(n,e){if(n.l.info("Error code "+e),e==2){var t=null;n.h&&(t=null);var r=Pe(n.pb,n);t||(t=new An("//www.google.com/images/cleardot.gif"),k.location&&k.location.protocol=="http"||no(t,"https"),jo(t)),BT(t.toString(),r)}else De(2);n.H=0,n.h&&n.h.za(e),jm(n),Fm(n)}A.pb=function(n){n?(this.l.info("Successfully pinged google.com"),De(2)):(this.l.info("Failed to ping google.com"),De(1))};function jm(n){if(n.H=0,n.ma=[],n.h){const e=km(n.i);(e.length!=0||n.j.length!=0)&&(ah(n.ma,e),ah(n.ma,n.j),n.i.i.length=0,lu(n.j),n.j.length=0),n.h.ya()}}function zm(n,e,t){var r=t instanceof An?Et(t):new An(t);if(r.g!="")e&&(r.g=e+"."+r.g),ro(r,r.m);else{var i=k.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new An(null);r&&no(s,r),e&&(s.g=e),i&&ro(s,i),t&&(s.l=t),r=s}return t=n.F,e=n.Da,t&&e&&K(r,t,e),K(r,"VER",n.ra),ss(n,r),r}function Km(n,e,t){if(e&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ha&&!n.va?new ee(new rs({ob:!0})):new ee(n.va),e.Oa(n.J),e}A.isActive=function(){return!!this.h&&this.h.isActive(this)};function Wm(){}A=Wm.prototype;A.Ba=function(){};A.Aa=function(){};A.za=function(){};A.ya=function(){};A.isActive=function(){return!0};A.Va=function(){};function so(){if(fr&&!(10<=Number(sT)))throw Error("Environmental error: no available transport.")}so.prototype.g=function(n,e){return new je(n,e)};function je(n,e){pe.call(this),this.g=new Lm(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!Ri(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ri(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Vr(this)}ge(je,pe);je.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,e=this.l,t=this.h||void 0;De(0),n.Y=e,n.na=t||{},n.G=n.aa,n.I=zm(n,null,n.Y),Ho(n)};je.prototype.close=function(){Pu(this.g)};je.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=_u(n),n=t);e.j.push(new OT(e.fb++,n)),e.H==3&&Ho(e)};je.prototype.N=function(){this.g.h=null,delete this.j,Pu(this.g),delete this.g,je.$.N.call(this)};function Hm(n){wu.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}ge(Hm,wu);function Qm(){Tu.call(this),this.status=1}ge(Qm,Tu);function Vr(n){this.g=n}ge(Vr,Wm);Vr.prototype.Ba=function(){Ae(this.g,"a")};Vr.prototype.Aa=function(n){Ae(this.g,new Hm(n))};Vr.prototype.za=function(n){Ae(this.g,new Qm)};Vr.prototype.ya=function(){Ae(this.g,"b")};function WT(){this.blockSize=-1}function Je(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ge(Je,WT);Je.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ma(n,e,t){t||(t=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(i=0;16>i;++i)r[i]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],i=n.g[2];var s=n.g[3],o=e+(s^t&(i^s))+r[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[3]+3250441966&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[7]+4249261313&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[11]+2304563134&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[15]+1236535329&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(t^i))+r[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[0]+3921069994&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[4]+3889429448&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[8]+1163531501&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[12]+2368359562&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(t^i^s)+r[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[14]+4259657740&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[10]+3200236656&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[6]+76029189&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[2]+3299628645&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(i^(t|~s))+r[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[5]+4237533241&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[1]+2240044497&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[13]+1309151649&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}Je.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=t;)Ma(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<e;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){Ma(this,r),i=0;break}}else for(;s<e;)if(r[i++]=n[s++],i==this.blockSize){Ma(this,r),i=0;break}}this.h=i,this.i+=e};Je.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var r=0;32>r;r+=8)n[t++]=this.g[e]>>>r&255;return n};function j(n,e){this.h=e;for(var t=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==e||(t[i]=s,r=!1)}this.g=t}var HT={};function ku(n){return-128<=n&&128>n?nT(n,function(e){return new j([e|0],0>e?-1:0)}):new j([n|0],0>n?-1:0)}function ot(n){if(isNaN(n)||!isFinite(n))return ar;if(0>n)return Ee(ot(-n));for(var e=[],t=1,r=0;n>=t;r++)e[r]=n/t|0,t*=lc;return new j(e,0)}function Ym(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return Ee(Ym(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=ot(Math.pow(e,8)),r=ar,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),e);8>s?(s=ot(Math.pow(e,s)),r=r.R(s).add(ot(o))):(r=r.R(t),r=r.add(ot(o)))}return r}var lc=4294967296,ar=ku(0),hc=ku(1),yh=ku(16777216);A=j.prototype;A.ea=function(){if(Ke(this))return-Ee(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var r=this.D(t);n+=(0<=r?r:lc+r)*e,e*=lc}return n};A.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(gt(this))return"0";if(Ke(this))return"-"+Ee(this).toString(n);for(var e=ot(Math.pow(n,6)),t=this,r="";;){var i=ao(t,e).g;t=oo(t,i.R(e));var s=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=i,gt(t))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};A.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function gt(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function Ke(n){return n.h==-1}A.X=function(n){return n=oo(this,n),Ke(n)?-1:gt(n)?0:1};function Ee(n){for(var e=n.g.length,t=[],r=0;r<e;r++)t[r]=~n.g[r];return new j(t,~n.h).add(hc)}A.abs=function(){return Ke(this)?Ee(this):this};A.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,t[i]=o<<16|s}return new j(t,t[t.length-1]&-2147483648?-1:0)};function oo(n,e){return n.add(Ee(e))}A.R=function(n){if(gt(this)||gt(n))return ar;if(Ke(this))return Ke(n)?Ee(this).R(Ee(n)):Ee(Ee(this).R(n));if(Ke(n))return Ee(this.R(Ee(n)));if(0>this.X(yh)&&0>n.X(yh))return ot(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],r=0;r<2*e;r++)t[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,c=n.D(i)&65535;t[2*r+2*i]+=o*c,As(t,2*r+2*i),t[2*r+2*i+1]+=s*c,As(t,2*r+2*i+1),t[2*r+2*i+1]+=o*a,As(t,2*r+2*i+1),t[2*r+2*i+2]+=s*a,As(t,2*r+2*i+2)}for(r=0;r<e;r++)t[r]=t[2*r+1]<<16|t[2*r];for(r=e;r<2*e;r++)t[r]=0;return new j(t,0)};function As(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function Kr(n,e){this.g=n,this.h=e}function ao(n,e){if(gt(e))throw Error("division by zero");if(gt(n))return new Kr(ar,ar);if(Ke(n))return e=ao(Ee(n),e),new Kr(Ee(e.g),Ee(e.h));if(Ke(e))return e=ao(n,Ee(e)),new Kr(Ee(e.g),e.h);if(30<n.g.length){if(Ke(n)||Ke(e))throw Error("slowDivide_ only works with positive integers.");for(var t=hc,r=e;0>=r.X(n);)t=Ih(t),r=Ih(r);var i=Qn(t,1),s=Qn(r,1);for(r=Qn(r,2),t=Qn(t,2);!gt(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(t),s=o),r=Qn(r,1),t=Qn(t,1)}return e=oo(n,i.R(e)),new Kr(i,e)}for(i=ar;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),r=Math.ceil(Math.log(t)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=ot(t),o=s.R(e);Ke(o)||0<o.X(n);)t-=r,s=ot(t),o=s.R(e);gt(s)&&(s=hc),i=i.add(s),n=oo(n,o)}return new Kr(i,n)}A.gb=function(n){return ao(this,n).h};A.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)&n.D(r);return new j(t,this.h&n.h)};A.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)|n.D(r);return new j(t,this.h|n.h)};A.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)^n.D(r);return new j(t,this.h^n.h)};function Ih(n){for(var e=n.g.length+1,t=[],r=0;r<e;r++)t[r]=n.D(r)<<1|n.D(r-1)>>>31;return new j(t,n.h)}function Qn(n,e){var t=e>>5;e%=32;for(var r=n.g.length-t,i=[],s=0;s<r;s++)i[s]=0<e?n.D(s+t)>>>e|n.D(s+t+1)<<32-e:n.D(s+t);return new j(i,n.h)}so.prototype.createWebChannel=so.prototype.g;je.prototype.send=je.prototype.u;je.prototype.open=je.prototype.m;je.prototype.close=je.prototype.close;qo.NO_ERROR=0;qo.TIMEOUT=8;qo.HTTP_ERROR=6;mm.COMPLETE="complete";pm.EventType=es;es.OPEN="a";es.CLOSE="b";es.ERROR="c";es.MESSAGE="d";pe.prototype.listen=pe.prototype.O;ee.prototype.listenOnce=ee.prototype.P;ee.prototype.getLastError=ee.prototype.Sa;ee.prototype.getLastErrorCode=ee.prototype.Ia;ee.prototype.getStatus=ee.prototype.da;ee.prototype.getResponseJson=ee.prototype.Wa;ee.prototype.getResponseText=ee.prototype.ja;ee.prototype.send=ee.prototype.ha;ee.prototype.setWithCredentials=ee.prototype.Oa;Je.prototype.digest=Je.prototype.l;Je.prototype.reset=Je.prototype.reset;Je.prototype.update=Je.prototype.j;j.prototype.add=j.prototype.add;j.prototype.multiply=j.prototype.R;j.prototype.modulo=j.prototype.gb;j.prototype.compare=j.prototype.X;j.prototype.toNumber=j.prototype.ea;j.prototype.toString=j.prototype.toString;j.prototype.getBits=j.prototype.D;j.fromNumber=ot;j.fromString=Ym;var QT=function(){return new so},YT=function(){return Bo()},La=qo,JT=mm,XT=qn,vh={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},ZT=rs,Rs=pm,eA=ee,tA=Je,cr=j;const Eh="@firebase/firestore";/**
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
 */let Nr="10.1.0";/**
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
 */const jt=new To("@firebase/firestore");function dc(){return jt.logLevel}function nA(n){jt.setLogLevel(n)}function _(n,...e){if(jt.logLevel<=L.DEBUG){const t=e.map(Du);jt.debug(`Firestore (${Nr}): ${n}`,...t)}}function ne(n,...e){if(jt.logLevel<=L.ERROR){const t=e.map(Du);jt.error(`Firestore (${Nr}): ${n}`,...t)}}function Xe(n,...e){if(jt.logLevel<=L.WARN){const t=e.map(Du);jt.warn(`Firestore (${Nr}): ${n}`,...t)}}function Du(n){if(typeof n=="string")return n;try{/**
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
 */function R(n="Unexpected state"){const e=`FIRESTORE (${Nr}) INTERNAL ASSERTION FAILED: `+n;throw ne(e),new Error(e)}function P(n,e){n||R()}function rA(n,e){n||R()}function T(n,e){return n}/**
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
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class g extends Ve{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Jm{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class iA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(fe.UNAUTHENTICATED))}shutdown(){}}class sA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class oA{constructor(e){this.t=e,this.currentUser=fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new me;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new me,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new me)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(P(typeof r.accessToken=="string"),new Jm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return P(e===null||typeof e=="string"),new fe(e)}}class aA{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=fe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class cA{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new aA(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(fe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class uA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=s=>{s.error!=null&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,_("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(P(typeof t.token=="string"),this.R=t.token,new uA(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function hA(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Xm{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=hA(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function V(n,e){return n<e?-1:n>e?1:0}function mr(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function Zm(n){return n+"\0"}/**
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
 */class Y{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new g(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new g(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new g(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new g(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Y.fromMillis(Date.now())}static fromDate(e){return Y.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Y(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?V(this.nanoseconds,e.nanoseconds):V(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class b{constructor(e){this.timestamp=e}static fromTimestamp(e){return new b(e)}static min(){return new b(new Y(0,0))}static max(){return new b(new Y(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ni{constructor(e,t,r){t===void 0?t=0:t>e.length&&R(),r===void 0?r=e.length-t:r>e.length-t&&R(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ni.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ni?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class F extends Ni{construct(e,t,r){return new F(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new g(p.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new F(t)}static emptyPath(){return new F([])}}const dA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class re extends Ni{construct(e,t,r){return new re(e,t,r)}static isValidIdentifier(e){return dA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),re.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new re(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new g(p.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new g(p.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new g(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new g(p.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new re(t)}static emptyPath(){return new re([])}}/**
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
 */class w{constructor(e){this.path=e}static fromPath(e){return new w(F.fromString(e))}static fromName(e){return new w(F.fromString(e).popFirst(5))}static empty(){return new w(F.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&F.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return F.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new w(new F(e.slice()))}}/**
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
 */class ep{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function fc(n){return n.fields.find(e=>e.kind===2)}function ln(n){return n.fields.filter(e=>e.kind!==2)}ep.UNKNOWN_ID=-1;class fA{constructor(e,t){this.fieldPath=e,this.kind=t}}class co{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new co(0,ze.min())}}function tp(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=b.fromTimestamp(r===1e9?new Y(t+1,0):new Y(t,r));return new ze(i,w.empty(),e)}function np(n){return new ze(n.readTime,n.key,-1)}class ze{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new ze(b.min(),w.empty(),-1)}static max(){return new ze(b.max(),w.empty(),-1)}}function Vu(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=w.comparator(n.documentKey,e.documentKey),t!==0?t:V(n.largestBatchId,e.largestBatchId))}/**
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
 */const rp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ip{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function rn(n){if(n.code!==p.FAILED_PRECONDITION||n.message!==rp)throw n;_("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class m{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&R(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new m((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof m?t:m.resolve(t)}catch(t){return m.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):m.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):m.reject(t)}static resolve(e){return new m((t,r)=>{t(e)})}static reject(e){return new m((t,r)=>{r(e)})}static waitFor(e){return new m((t,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},c=>r(c))}),o=!0,s===i&&t()})}static or(e){let t=m.resolve(!1);for(const r of e)t=t.next(i=>i?m.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new m((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;t(e[u]).next(l=>{o[u]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(e,t){return new m((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}/**
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
 */class Qo{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.m=new me,this.transaction.oncomplete=()=>{this.m.resolve()},this.transaction.onabort=()=>{t.error?this.m.reject(new hi(e,t.error)):this.m.resolve()},this.transaction.onerror=r=>{const i=Nu(r.target.error);this.m.reject(new hi(e,i))}}static open(e,t,r,i){try{return new Qo(t,e.transaction(i,r))}catch(s){throw new hi(t,s)}}get g(){return this.m.promise}abort(e){e&&this.m.reject(e),this.aborted||(_("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}p(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new pA(t)}}class Qe{constructor(e,t,r){this.name=e,this.version=t,this.S=r,Qe.D(X())===12.2&&ne("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return _("SimpleDb","Removing database:",e),hn(window.indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!_i())return!1;if(Qe.C())return!0;const e=X(),t=Qe.D(e),r=0<t&&t<10,i=Qe.F(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.M)==="YES"}static O(e,t){return e.store(t)}static D(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static F(e){const t=e.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async N(e){return this.db||(_("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new hi(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new g(p.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new g(p.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new hi(e,o))},i.onupgradeneeded=s=>{_("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.S.B(o,i.transaction,s.oldVersion,this.version).next(()=>{_("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=t=>this.L(t)),this.db}k(e){this.L=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.N(e);const a=Qo.open(this.db,e,s?"readonly":"readwrite",r),c=i(a).next(u=>(a.p(),u)).catch(u=>(a.abort(u),m.reject(u))).toPromise();return c.catch(()=>{}),await a.g,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(_("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class mA{constructor(e){this.q=e,this.K=!1,this.$=null}get isDone(){return this.K}get U(){return this.$}set cursor(e){this.q=e}done(){this.K=!0}W(e){this.$=e}delete(){return hn(this.q.delete())}}class hi extends g{constructor(e,t){super(p.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function sn(n){return n.name==="IndexedDbTransactionError"}class pA{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(_("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(_("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),hn(r)}add(e){return _("SimpleDb","ADD",this.store.name,e,e),hn(this.store.add(e))}get(e){return hn(this.store.get(e)).next(t=>(t===void 0&&(t=null),_("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return _("SimpleDb","DELETE",this.store.name,e),hn(this.store.delete(e))}count(){return _("SimpleDb","COUNT",this.store.name),hn(this.store.count())}G(e,t){const r=this.options(e,t);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.j(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new m((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}H(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new m((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}J(e,t){_("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.Y=!1;const i=this.cursor(r);return this.j(i,(s,o,a)=>a.delete())}Z(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.j(i,t)}X(e){const t=this.cursor({});return new m((r,i)=>{t.onerror=s=>{const o=Nu(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}j(e,t){const r=[];return new m((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new mA(a),u=t(a.primaryKey,a.value,c);if(u instanceof m){const l=u.catch(h=>(c.done(),m.reject(h)));r.push(l)}c.isDone?i():c.U===null?a.continue():a.continue(c.U)}}).next(()=>m.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function hn(n){return new m((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=Nu(r.target.error);t(i)}})}let wh=!1;function Nu(n){const e=Qe.D(X());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new g("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return wh||(wh=!0,setTimeout(()=>{throw r},0)),r}}return n}class gA{constructor(e,t){this.asyncQueue=e,this.ee=t,this.task=null}start(){this.te(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}te(e){_("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{_("IndexBackiller",`Documents written: ${await this.ee.ne()}`)}catch(t){sn(t)?_("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await rn(t)}await this.te(6e4)})}}class _A{constructor(e,t){this.localStore=e,this.persistence=t}async ne(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.re(t,e))}re(e,t){const r=new Set;let i=t,s=!0;return m.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return _("IndexBackiller",`Processing collection: ${o}`),this.ie(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>t-i)}ie(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.se(i,s)).next(a=>(_("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}se(e,t){let r=e;return t.changes.forEach((i,s)=>{const o=np(s);Vu(o,r)>0&&(r=o)}),new ze(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class Fe{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.oe(r),this._e=r=>t.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Fe.ae=-1;function os(n){return n==null}function xi(n){return n===0&&1/n==-1/0}function sp(n){return typeof n=="number"&&Number.isInteger(n)&&!xi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function xe(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Th(e)),e=yA(n.get(t),e);return Th(e)}function yA(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function Th(n){return n+""}function at(n){const e=n.length;if(P(e>=2),e===2)return P(n.charAt(0)===""&&n.charAt(1)===""),F.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf("",s);switch((o<0||o>t)&&R(),n.charAt(o+1)){case"":const a=n.substring(s,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),r.push(c);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:R()}s=o+2}return new F(r)}/**
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
 */const Ah=["userId","batchId"];/**
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
 */function Us(n,e){return[n,xe(e)]}function op(n,e,t){return[n,xe(e),t]}const IA={},vA=["prefixPath","collectionGroup","readTime","documentId"],EA=["prefixPath","collectionGroup","documentId"],wA=["collectionGroup","readTime","prefixPath","documentId"],TA=["canonicalId","targetId"],AA=["targetId","path"],RA=["path","targetId"],bA=["collectionId","parent"],PA=["indexId","uid"],SA=["uid","sequenceNumber"],CA=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],kA=["indexId","uid","orderedDocumentKey"],DA=["userId","collectionPath","documentId"],VA=["userId","collectionPath","largestBatchId"],NA=["userId","collectionGroup","largestBatchId"],ap=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],xA=[...ap,"documentOverlays"],cp=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],up=cp,OA=[...up,"indexConfiguration","indexState","indexEntries"];/**
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
 */class mc extends ip{constructor(e,t){super(),this.ue=e,this.currentSequenceNumber=t}}function _e(n,e){const t=T(n);return Qe.O(t.ue,e)}/**
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
 */function Rh(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function $n(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function lp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class z{constructor(e,t){this.comparator=e,this.root=t||ve.EMPTY}insert(e,t){return new z(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ve.BLACK,null,null))}remove(e){return new z(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ve.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new bs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new bs(this.root,e,this.comparator,!1)}getReverseIterator(){return new bs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new bs(this.root,e,this.comparator,!0)}}class bs{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ve{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??ve.RED,this.left=i??ve.EMPTY,this.right=s??ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new ve(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ve.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw R();const e=this.left.check();if(e!==this.right.check())throw R();return e+(this.isRed()?0:1)}}ve.EMPTY=null,ve.RED=!0,ve.BLACK=!1;ve.EMPTY=new class{constructor(){this.size=0}get key(){throw R()}get value(){throw R()}get color(){throw R()}get left(){throw R()}get right(){throw R()}copy(e,t,r,i,s){return this}insert(e,t,r){return new ve(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class H{constructor(e){this.comparator=e,this.data=new z(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new bh(this.data.getIterator())}getIteratorFrom(e){return new bh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof H)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new H(this.comparator);return t.data=e,t}}class bh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Yn(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class Ue{constructor(e){this.fields=e,e.sort(re.comparator)}static empty(){return new Ue([])}unionWith(e){let t=new H(re.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ue(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return mr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class hp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function MA(){return typeof atob<"u"}/**
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
 */class le{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new hp("Invalid base64 string: "+s):s}}(e);return new le(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new le(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return V(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}le.EMPTY_BYTE_STRING=new le("");const LA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zt(n){if(P(!!n),typeof n=="string"){let e=0;const t=LA.exec(n);if(P(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Z(n.seconds),nanos:Z(n.nanos)}}function Z(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Kt(n){return typeof n=="string"?le.fromBase64String(n):le.fromUint8Array(n)}/**
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
 */function Yo(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function xu(n){const e=n.mapValue.fields.__previous_value__;return Yo(e)?xu(e):e}function Oi(n){const e=zt(n.mapValue.fields.__local_write_time__.timestampValue);return new Y(e.seconds,e.nanos)}/**
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
 */class FA{constructor(e,t,r,i,s,o,a,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class Wt{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Wt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Wt&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Lt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Bs={nullValue:"NULL_VALUE"};function kn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Yo(n)?4:dp(n)?9007199254740991:10:R()}function ft(n,e){if(n===e)return!0;const t=kn(n);if(t!==kn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Oi(n).isEqual(Oi(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=zt(i.timestampValue),a=zt(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Kt(i.bytesValue).isEqual(Kt(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return Z(i.geoPointValue.latitude)===Z(s.geoPointValue.latitude)&&Z(i.geoPointValue.longitude)===Z(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Z(i.integerValue)===Z(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Z(i.doubleValue),a=Z(s.doubleValue);return o===a?xi(o)===xi(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return mr(n.arrayValue.values||[],e.arrayValue.values||[],ft);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Rh(o)!==Rh(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!ft(o[c],a[c])))return!1;return!0}(n,e);default:return R()}}function Mi(n,e){return(n.values||[]).find(t=>ft(t,e))!==void 0}function Ht(n,e){if(n===e)return 0;const t=kn(n),r=kn(e);if(t!==r)return V(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return V(n.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Z(s.integerValue||s.doubleValue),c=Z(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,e);case 3:return Ph(n.timestampValue,e.timestampValue);case 4:return Ph(Oi(n),Oi(e));case 5:return V(n.stringValue,e.stringValue);case 6:return function(s,o){const a=Kt(s),c=Kt(o);return a.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const l=V(a[u],c[u]);if(l!==0)return l}return V(a.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const a=V(Z(s.latitude),Z(o.latitude));return a!==0?a:V(Z(s.longitude),Z(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],c=o.values||[];for(let u=0;u<a.length&&u<c.length;++u){const l=Ht(a[u],c[u]);if(l)return l}return V(a.length,c.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Lt.mapValue&&o===Lt.mapValue)return 0;if(s===Lt.mapValue)return 1;if(o===Lt.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),u=o.fields||{},l=Object.keys(u);c.sort(),l.sort();for(let h=0;h<c.length&&h<l.length;++h){const d=V(c[h],l[h]);if(d!==0)return d;const f=Ht(a[c[h]],u[l[h]]);if(f!==0)return f}return V(c.length,l.length)}(n.mapValue,e.mapValue);default:throw R()}}function Ph(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return V(n,e);const t=zt(n),r=zt(e),i=V(t.seconds,r.seconds);return i!==0?i:V(t.nanos,r.nanos)}function pr(n){return pc(n)}function pc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=zt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Kt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return w.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=pc(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${pc(t.fields[o])}`;return i+"}"}(n.mapValue):R()}function Dn(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function gc(n){return!!n&&"integerValue"in n}function Li(n){return!!n&&"arrayValue"in n}function Sh(n){return!!n&&"nullValue"in n}function Ch(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function qs(n){return!!n&&"mapValue"in n}function di(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return $n(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=di(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=di(n.arrayValue.values[t]);return e}return Object.assign({},n)}function dp(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function UA(n){return"nullValue"in n?Bs:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Dn(Wt.empty(),w.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:R()}function BA(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Dn(Wt.empty(),w.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?Lt:R()}function kh(n,e){const t=Ht(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Dh(n,e){const t=Ht(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class we{constructor(e){this.value=e}static empty(){return new we({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!qs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=di(t)}setAll(e){let t=re.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=di(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());qs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ft(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];qs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){$n(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new we(di(this.value))}}function fp(n){const e=[];return $n(n.fields,(t,r)=>{const i=new re([t]);if(qs(r)){const s=fp(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ue(e)}/**
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
 */class W{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new W(e,0,b.min(),b.min(),b.min(),we.empty(),0)}static newFoundDocument(e,t,r,i){return new W(e,1,t,b.min(),r,i,0)}static newNoDocument(e,t){return new W(e,2,t,b.min(),b.min(),we.empty(),0)}static newUnknownDocument(e,t){return new W(e,3,t,b.min(),b.min(),we.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(b.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=we.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=we.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=b.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof W&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new W(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Qt{constructor(e,t){this.position=e,this.inclusive=t}}function Vh(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=w.comparator(w.fromName(o.referenceValue),t.key):r=Ht(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Nh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ft(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ur{constructor(e,t="asc"){this.field=e,this.dir=t}}function qA(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class mp{}class O extends mp{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new $A(e,t,r):t==="array-contains"?new zA(e,r):t==="in"?new vp(e,r):t==="not-in"?new KA(e,r):t==="array-contains-any"?new WA(e,r):new O(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new GA(e,r):new jA(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Ht(t,this.value)):t!==null&&kn(this.value)===kn(t)&&this.matchesComparison(Ht(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return R()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class G extends mp{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new G(e,t)}matches(e){return gr(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(t=>t.isInequality());return e!==null?e.field:null}le(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function gr(n){return n.op==="and"}function _c(n){return n.op==="or"}function Ou(n){return pp(n)&&gr(n)}function pp(n){for(const e of n.filters)if(e instanceof G)return!1;return!0}function yc(n){if(n instanceof O)return n.field.canonicalString()+n.op.toString()+pr(n.value);if(Ou(n))return n.filters.map(e=>yc(e)).join(",");{const e=n.filters.map(t=>yc(t)).join(",");return`${n.op}(${e})`}}function gp(n,e){return n instanceof O?function(r,i){return i instanceof O&&r.op===i.op&&r.field.isEqual(i.field)&&ft(r.value,i.value)}(n,e):n instanceof G?function(r,i){return i instanceof G&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&gp(o,i.filters[a]),!0):!1}(n,e):void R()}function _p(n,e){const t=n.filters.concat(e);return G.create(t,n.op)}function yp(n){return n instanceof O?function(t){return`${t.field.canonicalString()} ${t.op} ${pr(t.value)}`}(n):n instanceof G?function(t){return t.op.toString()+" {"+t.getFilters().map(yp).join(" ,")+"}"}(n):"Filter"}class $A extends O{constructor(e,t,r){super(e,t,r),this.key=w.fromName(r.referenceValue)}matches(e){const t=w.comparator(e.key,this.key);return this.matchesComparison(t)}}class GA extends O{constructor(e,t){super(e,"in",t),this.keys=Ip("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class jA extends O{constructor(e,t){super(e,"not-in",t),this.keys=Ip("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ip(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>w.fromName(r.referenceValue))}class zA extends O{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Li(t)&&Mi(t.arrayValue,this.value)}}class vp extends O{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Mi(this.value.arrayValue,t)}}class KA extends O{constructor(e,t){super(e,"not-in",t)}matches(e){if(Mi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Mi(this.value.arrayValue,t)}}class WA extends O{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Li(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Mi(this.value.arrayValue,r))}}/**
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
 */class HA{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function Ic(n,e=null,t=[],r=[],i=null,s=null,o=null){return new HA(n,e,t,r,i,s,o)}function Vn(n){const e=T(n);if(e.he===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>yc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),os(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>pr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>pr(r)).join(",")),e.he=t}return e.he}function as(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!qA(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!gp(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Nh(n.startAt,e.startAt)&&Nh(n.endAt,e.endAt)}function uo(n){return w.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function lo(n,e){return n.filters.filter(t=>t instanceof O&&t.field.isEqual(e))}function xh(n,e,t){let r=Bs,i=!0;for(const s of lo(n,e)){let o=Bs,a=!0;switch(s.op){case"<":case"<=":o=UA(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Bs}kh({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];kh({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function Oh(n,e,t){let r=Lt,i=!0;for(const s of lo(n,e)){let o=Lt,a=!0;switch(s.op){case">=":case">":o=BA(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Lt}Dh({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];Dh({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class bt{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function Ep(n,e,t,r,i,s,o,a){return new bt(n,e,t,r,i,s,o,a)}function xr(n){return new bt(n)}function Mh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Mu(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function Jo(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function Lu(n){return n.collectionGroup!==null}function Rn(n){const e=T(n);if(e.Pe===null){e.Pe=[];const t=Jo(e),r=Mu(e);if(t!==null&&r===null)t.isKeyField()||e.Pe.push(new ur(t)),e.Pe.push(new ur(re.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new ur(re.keyField(),s))}}}return e.Pe}function qe(n){const e=T(n);if(!e.Ie)if(e.limitType==="F")e.Ie=Ic(e.path,e.collectionGroup,Rn(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of Rn(e)){const o=s.dir==="desc"?"asc":"desc";t.push(new ur(s.field,o))}const r=e.endAt?new Qt(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Qt(e.startAt.position,e.startAt.inclusive):null;e.Ie=Ic(e.path,e.collectionGroup,t,e.filters,e.limit,r,i)}return e.Ie}function vc(n,e){e.getFirstInequalityField(),Jo(n);const t=n.filters.concat([e]);return new bt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function ho(n,e,t){return new bt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function cs(n,e){return as(qe(n),qe(e))&&n.limitType===e.limitType}function wp(n){return`${Vn(qe(n))}|lt:${n.limitType}`}function Ec(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>yp(i)).join(", ")}]`),os(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>pr(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>pr(i)).join(",")),`Target(${r})`}(qe(n))}; limitType=${n.limitType})`}function us(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):w.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of Rn(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,a,c){const u=Vh(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,Rn(r),i)||r.endAt&&!function(o,a,c){const u=Vh(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,Rn(r),i))}(n,e)}function Tp(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Ap(n){return(e,t)=>{let r=!1;for(const i of Rn(n)){const s=QA(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function QA(n,e,t){const r=n.field.isKeyField()?w.comparator(e.key,t.key):function(s,o,a){const c=o.data.field(s),u=a.data.field(s);return c!==null&&u!==null?Ht(c,u):R()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return R()}}/**
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
 */class on{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){$n(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return lp(this.inner)}size(){return this.innerSize}}/**
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
 */const YA=new z(w.comparator);function Be(){return YA}const Rp=new z(w.comparator);function ii(...n){let e=Rp;for(const t of n)e=e.insert(t.key,t);return e}function bp(n){let e=Rp;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function ct(){return fi()}function Pp(){return fi()}function fi(){return new on(n=>n.toString(),(n,e)=>n.isEqual(e))}const JA=new z(w.comparator),XA=new H(w.comparator);function N(...n){let e=XA;for(const t of n)e=e.add(t);return e}const ZA=new H(V);function Fu(){return ZA}/**
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
 */function Sp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xi(e)?"-0":e}}function Cp(n){return{integerValue:""+n}}function kp(n,e){return sp(e)?Cp(e):Sp(n,e)}/**
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
 */class Xo{constructor(){this._=void 0}}function eR(n,e,t){return n instanceof _r?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Yo(s)&&(s=xu(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):n instanceof Nn?Vp(n,e):n instanceof xn?Np(n,e):function(i,s){const o=Dp(i,s),a=Lh(o)+Lh(i.Te);return gc(o)&&gc(i.Te)?Cp(a):Sp(i.serializer,a)}(n,e)}function tR(n,e,t){return n instanceof Nn?Vp(n,e):n instanceof xn?Np(n,e):t}function Dp(n,e){return n instanceof yr?function(r){return gc(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class _r extends Xo{}class Nn extends Xo{constructor(e){super(),this.elements=e}}function Vp(n,e){const t=xp(e);for(const r of n.elements)t.some(i=>ft(i,r))||t.push(r);return{arrayValue:{values:t}}}class xn extends Xo{constructor(e){super(),this.elements=e}}function Np(n,e){let t=xp(e);for(const r of n.elements)t=t.filter(i=>!ft(i,r));return{arrayValue:{values:t}}}class yr extends Xo{constructor(e,t){super(),this.serializer=e,this.Te=t}}function Lh(n){return Z(n.integerValue||n.doubleValue)}function xp(n){return Li(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class ls{constructor(e,t){this.field=e,this.transform=t}}function nR(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Nn&&i instanceof Nn||r instanceof xn&&i instanceof xn?mr(r.elements,i.elements,ft):r instanceof yr&&i instanceof yr?ft(r.Te,i.Te):r instanceof _r&&i instanceof _r}(n.transform,e.transform)}class rR{constructor(e,t){this.version=e,this.transformResults=t}}class Q{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Q}static exists(e){return new Q(void 0,e)}static updateTime(e){return new Q(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $s(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Zo{}function Op(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Mr(n.key,Q.none()):new Or(n.key,n.data,Q.none());{const t=n.data,r=we.empty();let i=new H(re.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Pt(n.key,r,new Ue(i.toArray()),Q.none())}}function iR(n,e,t){n instanceof Or?function(i,s,o){const a=i.value.clone(),c=Uh(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof Pt?function(i,s,o){if(!$s(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Uh(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(Mp(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function mi(n,e,t,r){return n instanceof Or?function(s,o,a,c){if(!$s(s.precondition,o))return a;const u=s.value.clone(),l=Bh(s.fieldTransforms,c,o);return u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,r):n instanceof Pt?function(s,o,a,c){if(!$s(s.precondition,o))return a;const u=Bh(s.fieldTransforms,c,o),l=o.data;return l.setAll(Mp(s)),l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(n,e,t,r):function(s,o,a){return $s(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function sR(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=Dp(r.transform,i||null);s!=null&&(t===null&&(t=we.empty()),t.set(r.field,s))}return t||null}function Fh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&mr(r,i,(s,o)=>nR(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Or extends Zo{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Pt extends Zo{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Mp(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Uh(n,e,t){const r=new Map;P(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,tR(o,a,t[i]))}return r}function Bh(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,eR(s,o,e))}return r}class Mr extends Zo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Uu extends Zo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Bu{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&iR(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=mi(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=mi(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Pp();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const c=Op(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(b.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),N())}isEqual(e){return this.batchId===e.batchId&&mr(this.mutations,e.mutations,(t,r)=>Fh(t,r))&&mr(this.baseMutations,e.baseMutations,(t,r)=>Fh(t,r))}}class qu{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){P(e.mutations.length===r.length);let i=function(){return JA}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new qu(e,t,r,i)}}/**
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
 */class $u{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class oR{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var oe,M;function Lp(n){switch(n){default:return R();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function Fp(n){if(n===void 0)return ne("GRPC error has no .code"),p.UNKNOWN;switch(n){case oe.OK:return p.OK;case oe.CANCELLED:return p.CANCELLED;case oe.UNKNOWN:return p.UNKNOWN;case oe.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case oe.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case oe.INTERNAL:return p.INTERNAL;case oe.UNAVAILABLE:return p.UNAVAILABLE;case oe.UNAUTHENTICATED:return p.UNAUTHENTICATED;case oe.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case oe.NOT_FOUND:return p.NOT_FOUND;case oe.ALREADY_EXISTS:return p.ALREADY_EXISTS;case oe.PERMISSION_DENIED:return p.PERMISSION_DENIED;case oe.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case oe.ABORTED:return p.ABORTED;case oe.OUT_OF_RANGE:return p.OUT_OF_RANGE;case oe.UNIMPLEMENTED:return p.UNIMPLEMENTED;case oe.DATA_LOSS:return p.DATA_LOSS;default:return R()}}(M=oe||(oe={}))[M.OK=0]="OK",M[M.CANCELLED=1]="CANCELLED",M[M.UNKNOWN=2]="UNKNOWN",M[M.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",M[M.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",M[M.NOT_FOUND=5]="NOT_FOUND",M[M.ALREADY_EXISTS=6]="ALREADY_EXISTS",M[M.PERMISSION_DENIED=7]="PERMISSION_DENIED",M[M.UNAUTHENTICATED=16]="UNAUTHENTICATED",M[M.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",M[M.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",M[M.ABORTED=10]="ABORTED",M[M.OUT_OF_RANGE=11]="OUT_OF_RANGE",M[M.UNIMPLEMENTED=12]="UNIMPLEMENTED",M[M.INTERNAL=13]="INTERNAL",M[M.UNAVAILABLE=14]="UNAVAILABLE",M[M.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Gu{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ps}static getOrCreateInstance(){return Ps===null&&(Ps=new Gu),Ps}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let Ps=null;/**
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
 */function Up(){return new TextEncoder}/**
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
 */const aR=new cr([4294967295,4294967295],0);function qh(n){const e=Up().encode(n),t=new tA;return t.update(e),new Uint8Array(t.digest())}function $h(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new cr([t,r],0),new cr([i,s],0)]}class ju{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new si(`Invalid padding: ${t}`);if(r<0)throw new si(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new si(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new si(`Invalid padding when bitmap length is 0: ${t}`);this.de=8*e.length-t,this.Ae=cr.fromNumber(this.de)}Re(e,t,r){let i=e.add(t.multiply(cr.fromNumber(r)));return i.compare(aR)===1&&(i=new cr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const t=qh(e),[r,i]=$h(t);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);if(!this.Ve(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new ju(s,i,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const t=qh(e),[r,i]=$h(t);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);this.me(o)}}me(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class si extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class hs{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,ds.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new hs(b.min(),i,new z(V),Be(),N())}}class ds{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ds(r,t,N(),N(),N())}}/**
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
 */class Gs{constructor(e,t,r,i){this.fe=e,this.removedTargetIds=t,this.key=r,this.ge=i}}class Bp{constructor(e,t){this.targetId=e,this.pe=t}}class qp{constructor(e,t,r=le.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Gh{constructor(){this.ye=0,this.we=zh(),this.Se=le.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=N(),t=N(),r=N();return this.we.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:R()}}),new ds(this.Se,this.be,e,t,r)}xe(){this.De=!1,this.we=zh()}Oe(e,t){this.De=!0,this.we=this.we.insert(e,t)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class cR{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=Be(),this.$e=jh(),this.Ue=new z(V)}We(e){for(const t of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(t,e.ge):this.ze(t,e.key,e.ge);for(const t of e.removedTargetIds)this.ze(t,e.key,e.ge)}je(e){this.forEachTarget(e,t=>{const r=this.He(t);switch(e.state){case 0:this.Je(t)&&r.Fe(e.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(e.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(t);break;case 3:this.Je(t)&&(r.ke(),r.Fe(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),r.Fe(e.resumeToken));break;default:R()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qe.forEach((r,i)=>{this.Je(i)&&t(i)})}Ze(e){var t,r;const i=e.targetId,s=e.pe.count,o=this.Xe(i);if(o){const a=o.target;if(uo(a))if(s===0){const c=new w(a.path);this.ze(i,c,W.newNoDocument(c,b.min()))}else P(s===1);else{const c=this.et(i);if(c!==s){const u=this.tt(e,c);if(u.status!==0){this.Ye(i);const l=u.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,l)}(t=Gu.instance)===null||t===void 0||t.notifyOnExistenceFilterMismatch(function(h,d,f,I){var v,E,C,x,D,q;const $={localCacheCount:f,existenceFilterCount:I.count},U=I.unchangedNames;return U&&($.bloomFilter={applied:h===0,hashCount:(v=U==null?void 0:U.hashCount)!==null&&v!==void 0?v:0,bitmapLength:(x=(C=(E=U==null?void 0:U.bits)===null||E===void 0?void 0:E.bitmap)===null||C===void 0?void 0:C.length)!==null&&x!==void 0?x:0,padding:(q=(D=U==null?void 0:U.bits)===null||D===void 0?void 0:D.padding)!==null&&q!==void 0?q:0},d&&($.bloomFilter.mightContain=d)),$}(u.status,(r=u.nt)!==null&&r!==void 0?r:null,c,e.pe))}}}}tt(e,t){const{unchangedNames:r,count:i}=e.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let c,u;try{c=Kt(s).toUint8Array()}catch(h){if(h instanceof hp)return Xe("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{u=new ju(c,o,a)}catch(h){return Xe(h instanceof si?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const l=h=>{const d=this.qe.rt();return u.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return u.de===0?{status:1}:{status:i===t-this.it(e.targetId,l)?0:2,nt:l}}it(e,t){const r=this.qe.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{t(s.path.canonicalString())||(this.ze(e,s,null),i++)}),i}st(e){const t=new Map;this.Qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&uo(a.target)){const c=new w(a.target.path);this.Ke.get(c)!==null||this.ot(o,c)||this.ze(o,c,W.newNoDocument(c,e))}s.Ce&&(t.set(o,s.Me()),s.xe())}});let r=N();this.$e.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Xe(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ke.forEach((s,o)=>o.setReadTime(e));const i=new hs(e,t,this.Ue,this.Ke,r);return this.Ke=Be(),this.$e=jh(),this.Ue=new z(V),i}Ge(e,t){if(!this.Je(e))return;const r=this.ot(e,t.key)?2:0;this.He(e).Oe(t.key,r),this.Ke=this.Ke.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e))}ze(e,t,r){if(!this.Je(e))return;const i=this.He(e);this.ot(e,t)?i.Oe(t,1):i.Ne(t),this.$e=this.$e.insert(t,this._t(t).delete(e)),r&&(this.Ke=this.Ke.insert(t,r))}removeTarget(e){this.Qe.delete(e)}et(e){const t=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let t=this.Qe.get(e);return t||(t=new Gh,this.Qe.set(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new H(V),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||_("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.Qe.get(e);return t&&t.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new Gh),this.qe.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ot(e,t){return this.qe.getRemoteKeysForTarget(e).has(t)}}function jh(){return new z(w.comparator)}function zh(){return new z(w.comparator)}const uR=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),lR=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),hR=(()=>({and:"AND",or:"OR"}))();class dR{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function wc(n,e){return n.useProto3Json||os(e)?e:{value:e}}function Ir(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $p(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function fR(n,e){return Ir(n,e.toTimestamp())}function ie(n){return P(!!n),b.fromTimestamp(function(t){const r=zt(t);return new Y(r.seconds,r.nanos)}(n))}function zu(n,e){return function(r){return new F(["projects",r.projectId,"databases",r.database])}(n).child("documents").child(e).canonicalString()}function Gp(n){const e=F.fromString(n);return P(Xp(e)),e}function Fi(n,e){return zu(n.databaseId,e.path)}function lt(n,e){const t=Gp(e);if(t.get(1)!==n.databaseId.projectId)throw new g(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new g(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new w(zp(t))}function Tc(n,e){return zu(n.databaseId,e)}function jp(n){const e=Gp(n);return e.length===4?F.emptyPath():zp(e)}function Ui(n){return new F(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function zp(n){return P(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Kh(n,e,t){return{name:Fi(n,e),fields:t.value.mapValue.fields}}function Kp(n,e,t){const r=lt(n,e.name),i=ie(e.updateTime),s=e.createTime?ie(e.createTime):b.min(),o=new we({mapValue:{fields:e.fields}}),a=W.newFoundDocument(r,i,s,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function mR(n,e){return"found"in e?function(r,i){P(!!i.found),i.found.name,i.found.updateTime;const s=lt(r,i.found.name),o=ie(i.found.updateTime),a=i.found.createTime?ie(i.found.createTime):b.min(),c=new we({mapValue:{fields:i.found.fields}});return W.newFoundDocument(s,o,a,c)}(n,e):"missing"in e?function(r,i){P(!!i.missing),P(!!i.readTime);const s=lt(r,i.missing),o=ie(i.readTime);return W.newNoDocument(s,o)}(n,e):R()}function pR(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:R()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,l){return u.useProto3Json?(P(l===void 0||typeof l=="string"),le.fromBase64String(l||"")):(P(l===void 0||l instanceof Uint8Array),le.fromUint8Array(l||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?p.UNKNOWN:Fp(u.code);return new g(l,u.message||"")}(o);t=new qp(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=lt(n,r.document.name),s=ie(r.document.updateTime),o=r.document.createTime?ie(r.document.createTime):b.min(),a=new we({mapValue:{fields:r.document.fields}}),c=W.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];t=new Gs(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=lt(n,r.document),s=r.readTime?ie(r.readTime):b.min(),o=W.newNoDocument(i,s),a=r.removedTargetIds||[];t=new Gs([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=lt(n,r.document),s=r.removedTargetIds||[];t=new Gs([],s,i,null)}else{if(!("filter"in e))return R();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new oR(i,s),a=r.targetId;t=new Bp(a,o)}}return t}function Bi(n,e){let t;if(e instanceof Or)t={update:Kh(n,e.key,e.value)};else if(e instanceof Mr)t={delete:Fi(n,e.key)};else if(e instanceof Pt)t={update:Kh(n,e.key,e.data),updateMask:ER(e.fieldMask)};else{if(!(e instanceof Uu))return R();t={verify:Fi(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof _r)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Nn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof xn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof yr)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw R()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:fR(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:R()}(n,e.precondition)),t}function Ac(n,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?Q.updateTime(ie(s.updateTime)):s.exists!==void 0?Q.exists(s.exists):Q.none()}(e.currentDocument):Q.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let c=null;if("setToServerValue"in a)P(a.setToServerValue==="REQUEST_TIME"),c=new _r;else if("appendMissingElements"in a){const l=a.appendMissingElements.values||[];c=new Nn(l)}else if("removeAllFromArray"in a){const l=a.removeAllFromArray.values||[];c=new xn(l)}else"increment"in a?c=new yr(o,a.increment):R();const u=re.fromServerFormat(a.fieldPath);return new ls(u,c)}(n,i)):[];if(e.update){e.update.name;const i=lt(n,e.update.name),s=new we({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(c){const u=c.fieldPaths||[];return new Ue(u.map(l=>re.fromServerFormat(l)))}(e.updateMask);return new Pt(i,s,o,t,r)}return new Or(i,s,t,r)}if(e.delete){const i=lt(n,e.delete);return new Mr(i,t)}if(e.verify){const i=lt(n,e.verify);return new Uu(i,t)}return R()}function gR(n,e){return n&&n.length>0?(P(e!==void 0),n.map(t=>function(i,s){let o=i.updateTime?ie(i.updateTime):ie(s);return o.isEqual(b.min())&&(o=ie(s)),new rR(o,i.transformResults||[])}(t,e))):[]}function Wp(n,e){return{documents:[Tc(n,e.path)]}}function Hp(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=Tc(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Tc(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return Jp(G.create(c,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:Xn(h.field),direction:yR(h.dir)}}(u))}(e.orderBy);s&&(t.structuredQuery.orderBy=s);const o=wc(n,e.limit);return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function Qp(n){let e=jp(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){P(r===1);const l=t.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let s=[];t.where&&(s=function(h){const d=Yp(h);return d instanceof G&&Ou(d)?d.getFilters():[d]}(t.where));let o=[];t.orderBy&&(o=function(h){return h.map(d=>function(I){return new ur(Zn(I.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(d))}(t.orderBy));let a=null;t.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,os(d)?null:d}(t.limit));let c=null;t.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new Qt(f,d)}(t.startAt));let u=null;return t.endAt&&(u=function(h){const d=!h.before,f=h.values||[];return new Qt(f,d)}(t.endAt)),Ep(e,i,o,s,a,"F",c,u)}function _R(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return R()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Yp(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Zn(t.unaryFilter.field);return O.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Zn(t.unaryFilter.field);return O.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Zn(t.unaryFilter.field);return O.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Zn(t.unaryFilter.field);return O.create(o,"!=",{nullValue:"NULL_VALUE"});default:return R()}}(n):n.fieldFilter!==void 0?function(t){return O.create(Zn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return R()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return G.create(t.compositeFilter.filters.map(r=>Yp(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return R()}}(t.compositeFilter.op))}(n):R()}function yR(n){return uR[n]}function IR(n){return lR[n]}function vR(n){return hR[n]}function Xn(n){return{fieldPath:n.canonicalString()}}function Zn(n){return re.fromServerFormat(n.fieldPath)}function Jp(n){return n instanceof O?function(t){if(t.op==="=="){if(Ch(t.value))return{unaryFilter:{field:Xn(t.field),op:"IS_NAN"}};if(Sh(t.value))return{unaryFilter:{field:Xn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ch(t.value))return{unaryFilter:{field:Xn(t.field),op:"IS_NOT_NAN"}};if(Sh(t.value))return{unaryFilter:{field:Xn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xn(t.field),op:IR(t.op),value:t.value}}}(n):n instanceof G?function(t){const r=t.getFilters().map(i=>Jp(i));return r.length===1?r[0]:{compositeFilter:{op:vR(t.op),filters:r}}}(n):R()}function ER(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Xp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class _t{constructor(e,t,r,i,s=b.min(),o=b.min(),a=le.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new _t(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new _t(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new _t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new _t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Zp{constructor(e){this.ct=e}}function wR(n,e){let t;if(e.document)t=Kp(n.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=w.fromSegments(e.noDocument.path),i=Mn(e.noDocument.readTime);t=W.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return R();{const r=w.fromSegments(e.unknownDocument.path),i=Mn(e.unknownDocument.version);t=W.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(i){const s=new Y(i[0],i[1]);return b.fromTimestamp(s)}(e.readTime)),t}function Wh(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:fo(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:Fi(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Ir(s,o.version.toTimestamp()),createTime:Ir(s,o.createTime.toTimestamp())}}(n.ct,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:On(e.version)};else{if(!e.isUnknownDocument())return R();r.unknownDocument={path:t.path.toArray(),version:On(e.version)}}return r}function fo(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function On(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Mn(n){const e=new Y(n.seconds,n.nanoseconds);return b.fromTimestamp(e)}function dn(n,e){const t=(e.baseMutations||[]).map(s=>Ac(n.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Ac(n.ct,s)),i=Y.fromMillis(e.localWriteTimeMs);return new Bu(e.batchId,i,t,r)}function oi(n){const e=Mn(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Mn(n.lastLimboFreeSnapshotVersion):b.min();let r;return r=function(s){return s.documents!==void 0}(n.query)?function(s){return P(s.documents.length===1),qe(xr(jp(s.documents[0])))}(n.query):function(s){return qe(Qp(s))}(n.query),new _t(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,le.fromBase64String(n.resumeToken))}function eg(n,e){const t=On(e.snapshotVersion),r=On(e.lastLimboFreeSnapshotVersion);let i;i=uo(e.target)?Wp(n.ct,e.target):Hp(n.ct,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Vn(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Ku(n){const e=Qp({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ho(e,e.limit,"L"):e}function Fa(n,e){return new $u(e.largestBatchId,Ac(n.ct,e.overlayMutation))}function Hh(n,e){const t=e.path.lastSegment();return[n,xe(e.path.popLast()),t]}function Qh(n,e,t,r){return{indexId:n,uid:e.uid||"",sequenceNumber:t,readTime:On(r.readTime),documentKey:xe(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class TR{getBundleMetadata(e,t){return Yh(e).get(t).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Mn(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,t){return Yh(e).put(function(i){return{bundleId:i.id,createTime:On(ie(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return Jh(e).get(t).next(r=>{if(r)return function(s){return{name:s.name,query:Ku(s.bundledQuery),readTime:Mn(s.readTime)}}(r)})}saveNamedQuery(e,t){return Jh(e).put(function(i){return{name:i.name,readTime:On(ie(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function Yh(n){return _e(n,"bundles")}function Jh(n){return _e(n,"namedQueries")}/**
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
 */class ea{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const r=t.uid||"";return new ea(e,r)}getOverlay(e,t){return Wr(e).get(Hh(this.userId,t)).next(r=>r?Fa(this.serializer,r):null)}getOverlays(e,t){const r=ct();return m.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((s,o)=>{const a=new $u(t,o);i.push(this.ht(e,a))}),m.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(o=>i.add(xe(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Wr(e).J("collectionPathOverlayIndex",a))}),m.waitFor(s)}getOverlaysForCollection(e,t,r){const i=ct(),s=xe(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Wr(e).G("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=Fa(this.serializer,c);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=ct();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Wr(e).Z({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=Fa(this.serializer,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>s)}ht(e,t){return Wr(e).put(function(i,s,o){const[a,c,u]=Hh(s,o.mutation.key);return{userId:s,collectionPath:c,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Bi(i.ct,o.mutation)}}(this.serializer,this.userId,t))}}function Wr(n){return _e(n,"documentOverlays")}/**
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
 */class fn{constructor(){}Pt(e,t){this.It(e,t),t.Tt()}It(e,t){if("nullValue"in e)this.Et(t,5);else if("booleanValue"in e)this.Et(t,10),t.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(t,15),t.dt(Z(e.integerValue));else if("doubleValue"in e){const r=Z(e.doubleValue);isNaN(r)?this.Et(t,13):(this.Et(t,15),xi(r)?t.dt(0):t.dt(r))}else if("timestampValue"in e){const r=e.timestampValue;this.Et(t,20),typeof r=="string"?t.At(r):(t.At(`${r.seconds||""}`),t.dt(r.nanos||0))}else if("stringValue"in e)this.Rt(e.stringValue,t),this.Vt(t);else if("bytesValue"in e)this.Et(t,30),t.ft(Kt(e.bytesValue)),this.Vt(t);else if("referenceValue"in e)this.gt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.Et(t,45),t.dt(r.latitude||0),t.dt(r.longitude||0)}else"mapValue"in e?dp(e)?this.Et(t,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,t),this.Vt(t)):"arrayValue"in e?(this.wt(e.arrayValue,t),this.Vt(t)):R()}Rt(e,t){this.Et(t,25),this.St(e,t)}St(e,t){t.At(e)}yt(e,t){const r=e.fields||{};this.Et(t,55);for(const i of Object.keys(r))this.Rt(i,t),this.It(r[i],t)}wt(e,t){const r=e.values||[];this.Et(t,50);for(const i of r)this.It(i,t)}gt(e,t){this.Et(t,37),w.fromName(e).path.forEach(r=>{this.Et(t,60),this.St(r,t)})}Et(e,t){e.dt(t)}Vt(e){e.dt(2)}}fn.bt=new fn;function AR(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function Xh(n){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=AR(255&r[s]);if(i+=o,o!==8)break}return i}(n);return Math.ceil(e/8)}class RR{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.vt(r.value),r=t.next();this.Ct()}Ft(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Mt(r.value),r=t.next();this.xt()}Ot(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.vt(r);else if(r<2048)this.vt(960|r>>>6),this.vt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.vt(480|r>>>12),this.vt(128|63&r>>>6),this.vt(128|63&r);else{const i=t.codePointAt(0);this.vt(240|i>>>18),this.vt(128|63&i>>>12),this.vt(128|63&i>>>6),this.vt(128|63&i)}}this.Ct()}Nt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Mt(r);else if(r<2048)this.Mt(960|r>>>6),this.Mt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Mt(480|r>>>12),this.Mt(128|63&r>>>6),this.Mt(128|63&r);else{const i=t.codePointAt(0);this.Mt(240|i>>>18),this.Mt(128|63&i>>>12),this.Mt(128|63&i>>>6),this.Mt(128|63&i)}}this.xt()}Bt(e){const t=this.Lt(e),r=Xh(t);this.kt(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}qt(e){const t=this.Lt(e),r=Xh(t);this.kt(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(e){this.kt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Wt(){return this.buffer.slice(0,this.position)}Lt(e){const t=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}vt(e){const t=255&e;t===0?(this.Kt(0),this.Kt(255)):t===255?(this.Kt(255),this.Kt(0)):this.Kt(t)}Mt(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(e)}Ct(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(e){this.kt(1),this.buffer[this.position++]=e}Ut(e){this.kt(1),this.buffer[this.position++]=~e}kt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class bR{constructor(e){this.Gt=e}ft(e){this.Gt.Dt(e)}At(e){this.Gt.Ot(e)}dt(e){this.Gt.Bt(e)}Tt(){this.Gt.Qt()}}class PR{constructor(e){this.Gt=e}ft(e){this.Gt.Ft(e)}At(e){this.Gt.Nt(e)}dt(e){this.Gt.qt(e)}Tt(){this.Gt.$t()}}class Hr{constructor(){this.Gt=new RR,this.zt=new bR(this.Gt),this.jt=new PR(this.Gt)}seed(e){this.Gt.seed(e)}Ht(e){return e===0?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}}/**
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
 */class mn{constructor(e,t,r,i){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=i}Jt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new mn(this.indexId,this.documentKey,this.arrayValue,r)}}function Dt(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Zh(n.arrayValue,e.arrayValue),t!==0?t:(t=Zh(n.directionalValue,e.directionalValue),t!==0?t:w.comparator(n.documentKey,e.documentKey)))}function Zh(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
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
 */class SR{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Yt=e.orderBy,this.Zt=[];for(const t of e.filters){const r=t;r.isInequality()?this.Xt=r:this.Zt.push(r)}}en(e){P(e.collectionGroup===this.collectionId);const t=fc(e);if(t!==void 0&&!this.tn(t))return!1;const r=ln(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.tn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Xt!==void 0){if(!i.has(this.Xt.field.canonicalString())){const a=r[s];if(!this.nn(this.Xt,a)||!this.rn(this.Yt[o++],a))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Yt.length||!this.rn(this.Yt[o++],a))return!1}return!0}tn(e){for(const t of this.Zt)if(this.nn(t,e))return!0;return!1}nn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}rn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function tg(n){var e,t;if(P(n instanceof O||n instanceof G),n instanceof O){if(n instanceof vp){const i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>O.create(n.field,"==",s)))||[];return G.create(i,"or")}return n}const r=n.filters.map(i=>tg(i));return G.create(r,n.op)}function CR(n){if(n.getFilters().length===0)return[];const e=Pc(tg(n));return P(ng(e)),Rc(e)||bc(e)?[e]:e.getFilters()}function Rc(n){return n instanceof O}function bc(n){return n instanceof G&&Ou(n)}function ng(n){return Rc(n)||bc(n)||function(t){if(t instanceof G&&_c(t)){for(const r of t.getFilters())if(!Rc(r)&&!bc(r))return!1;return!0}return!1}(n)}function Pc(n){if(P(n instanceof O||n instanceof G),n instanceof O)return n;if(n.filters.length===1)return Pc(n.filters[0]);const e=n.filters.map(r=>Pc(r));let t=G.create(e,n.op);return t=mo(t),ng(t)?t:(P(t instanceof G),P(gr(t)),P(t.filters.length>1),t.filters.reduce((r,i)=>Wu(r,i)))}function Wu(n,e){let t;return P(n instanceof O||n instanceof G),P(e instanceof O||e instanceof G),t=n instanceof O?e instanceof O?function(i,s){return G.create([i,s],"and")}(n,e):ed(n,e):e instanceof O?ed(e,n):function(i,s){if(P(i.filters.length>0&&s.filters.length>0),gr(i)&&gr(s))return _p(i,s.getFilters());const o=_c(i)?i:s,a=_c(i)?s:i,c=o.filters.map(u=>Wu(u,a));return G.create(c,"or")}(n,e),mo(t)}function ed(n,e){if(gr(e))return _p(e,n.getFilters());{const t=e.filters.map(r=>Wu(n,r));return G.create(t,"or")}}function mo(n){if(P(n instanceof O||n instanceof G),n instanceof O)return n;const e=n.getFilters();if(e.length===1)return mo(e[0]);if(pp(n))return n;const t=e.map(i=>mo(i)),r=[];return t.forEach(i=>{i instanceof O?r.push(i):i instanceof G&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:G.create(r,n.op)}/**
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
 */class kR{constructor(){this.sn=new Hu}addToCollectionParentIndex(e,t){return this.sn.add(t),m.resolve()}getCollectionParents(e,t){return m.resolve(this.sn.getEntries(t))}addFieldIndex(e,t){return m.resolve()}deleteFieldIndex(e,t){return m.resolve()}getDocumentsMatchingTarget(e,t){return m.resolve(null)}getIndexType(e,t){return m.resolve(0)}getFieldIndexes(e,t){return m.resolve([])}getNextCollectionGroupToUpdate(e){return m.resolve(null)}getMinOffset(e,t){return m.resolve(ze.min())}getMinOffsetFromCollectionGroup(e,t){return m.resolve(ze.min())}updateCollectionGroup(e,t,r){return m.resolve()}updateIndexEntries(e,t){return m.resolve()}}class Hu{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new H(F.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new H(F.comparator)).toArray()}}/**
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
 */const Ss=new Uint8Array(0);class DR{constructor(e,t){this.user=e,this.databaseId=t,this.on=new Hu,this._n=new on(r=>Vn(r),(r,i)=>as(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.on.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.on.add(t)});const s={collectionId:r,parent:xe(i)};return td(e).put(s)}return m.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[Zm(t),""],!1,!0);return td(e).G(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;r.push(at(o.parent))}return r})}addFieldIndex(e,t){const r=Cs(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=Yr(e);return s.next(a=>{o.put(Qh(a,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const r=Cs(e),i=Yr(e),s=Qr(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const r=Qr(e);let i=!0;const s=new Map;return m.forEach(this.an(t),o=>this.un(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=N();const a=[];return m.forEach(s,(c,u)=>{_("IndexedDbIndexManager",`Using index ${function(D){return`id=${D.indexId}|cg=${D.collectionGroup}|f=${D.fields.map(q=>`${q.fieldPath}:${q.kind}`).join(",")}`}(c)} to execute ${Vn(t)}`);const l=function(D,q){const $=fc(q);if($===void 0)return null;for(const U of lo(D,$.fieldPath))switch(U.op){case"array-contains-any":return U.value.arrayValue.values||[];case"array-contains":return[U.value]}return null}(u,c),h=function(D,q){const $=new Map;for(const U of ln(q))for(const Ie of lo(D,U.fieldPath))switch(Ie.op){case"==":case"in":$.set(U.fieldPath.canonicalString(),Ie.value);break;case"not-in":case"!=":return $.set(U.fieldPath.canonicalString(),Ie.value),Array.from($.values())}return null}(u,c),d=function(D,q){const $=[];let U=!0;for(const Ie of ln(q)){const Ct=Ie.kind===0?xh(D,Ie.fieldPath,D.startAt):Oh(D,Ie.fieldPath,D.startAt);$.push(Ct.value),U&&(U=Ct.inclusive)}return new Qt($,U)}(u,c),f=function(D,q){const $=[];let U=!0;for(const Ie of ln(q)){const Ct=Ie.kind===0?Oh(D,Ie.fieldPath,D.endAt):xh(D,Ie.fieldPath,D.endAt);$.push(Ct.value),U&&(U=Ct.inclusive)}return new Qt($,U)}(u,c),I=this.cn(c,u,d),v=this.cn(c,u,f),E=this.ln(c,u,h),C=this.hn(c.indexId,l,I,d.inclusive,v,f.inclusive,E);return m.forEach(C,x=>r.H(x,t.limit).next(D=>{D.forEach(q=>{const $=w.fromSegments(q.documentKey);o.has($)||(o=o.add($),a.push($))})}))}).next(()=>a)}return m.resolve(null)})}an(e){let t=this._n.get(e);return t||(e.filters.length===0?t=[e]:t=CR(G.create(e.filters,"and")).map(r=>Ic(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this._n.set(e,t),t)}hn(e,t,r,i,s,o,a){const c=(t!=null?t.length:1)*Math.max(r.length,s.length),u=c/(t!=null?t.length:1),l=[];for(let h=0;h<c;++h){const d=t?this.Pn(t[h/u]):Ss,f=this.In(e,d,r[h%u],i),I=this.Tn(e,d,s[h%u],o),v=a.map(E=>this.In(e,d,E,!0));l.push(...this.createRange(f,I,v))}return l}In(e,t,r,i){const s=new mn(e,w.empty(),t,r);return i?s:s.Jt()}Tn(e,t,r,i){const s=new mn(e,w.empty(),t,r);return i?s.Jt():s}un(e,t){const r=new SR(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.en(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const i=this.an(t);return m.forEach(i,s=>this.un(e,s).next(o=>{o?r!==0&&o.fields.length<function(c){let u=new H(re.comparator),l=!1;for(const h of c.filters)for(const d of h.getFlattenedFilters())d.field.isKeyField()||(d.op==="array-contains"||d.op==="array-contains-any"?l=!0:u=u.add(d.field));for(const h of c.orderBy)h.field.isKeyField()||(u=u.add(h.field));return u.size+(l?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&i.length>1&&r===2?1:r)}En(e,t){const r=new Hr;for(const i of ln(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.Ht(i.kind);fn.bt.Pt(s,o)}return r.Wt()}Pn(e){const t=new Hr;return fn.bt.Pt(e,t.Ht(0)),t.Wt()}dn(e,t){const r=new Hr;return fn.bt.Pt(Dn(this.databaseId,t),r.Ht(function(s){const o=ln(s);return o.length===0?0:o[o.length-1].kind}(e))),r.Wt()}ln(e,t,r){if(r===null)return[];let i=[];i.push(new Hr);let s=0;for(const o of ln(e)){const a=r[s++];for(const c of i)if(this.An(t,o.fieldPath)&&Li(a))i=this.Rn(i,o,a);else{const u=c.Ht(o.kind);fn.bt.Pt(a,u)}}return this.Vn(i)}cn(e,t,r){return this.ln(e,t,r.position)}Vn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].Wt();return t}Rn(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const c=new Hr;c.seed(a.Wt()),fn.bt.Pt(o,c.Ht(t.kind)),s.push(c)}return s}An(e,t){return!!e.filters.find(r=>r instanceof O&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=Cs(e),i=Yr(e);return(t?r.G("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.G()).next(s=>{const o=[];return m.forEach(s,a=>i.get([a.indexId,this.uid]).next(c=>{o.push(function(l,h){const d=h?new co(h.sequenceNumber,new ze(Mn(h.readTime),new w(at(h.documentKey)),h.largestBatchId)):co.empty(),f=l.fields.map(([I,v])=>new fA(re.fromServerFormat(I),v));return new ep(l.indexId,l.collectionGroup,f,d)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:V(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=Cs(e),s=Yr(e);return this.mn(e).next(o=>i.G("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>m.forEach(a,c=>s.put(Qh(c.indexId,this.user,o,r)))))}updateIndexEntries(e,t){const r=new Map;return m.forEach(t,(i,s)=>{const o=r.get(i.collectionGroup);return(o?m.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),m.forEach(a,c=>this.fn(e,i,c).next(u=>{const l=this.gn(s,c);return u.isEqual(l)?m.resolve():this.pn(e,s,c,u,l)}))))})}yn(e,t,r,i){return Qr(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.dn(r,t.key),documentKey:t.key.path.toArray()})}wn(e,t,r,i){return Qr(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.dn(r,t.key),t.key.path.toArray()])}fn(e,t,r){const i=Qr(e);let s=new H(Dt);return i.Z({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.dn(r,t)])},(o,a)=>{s=s.add(new mn(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>s)}gn(e,t){let r=new H(Dt);const i=this.En(t,e);if(i==null)return r;const s=fc(t);if(s!=null){const o=e.data.field(s.fieldPath);if(Li(o))for(const a of o.arrayValue.values||[])r=r.add(new mn(t.indexId,e.key,this.Pn(a),i))}else r=r.add(new mn(t.indexId,e.key,Ss,i));return r}pn(e,t,r,i,s){_("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(c,u,l,h,d){const f=c.getIterator(),I=u.getIterator();let v=Yn(f),E=Yn(I);for(;v||E;){let C=!1,x=!1;if(v&&E){const D=l(v,E);D<0?x=!0:D>0&&(C=!0)}else v!=null?x=!0:C=!0;C?(h(E),E=Yn(I)):x?(d(v),v=Yn(f)):(v=Yn(f),E=Yn(I))}}(i,s,Dt,a=>{o.push(this.yn(e,t,r,a))},a=>{o.push(this.wn(e,t,r,a))}),m.waitFor(o)}mn(e){let t=1;return Yr(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>Dt(o,a)).filter((o,a,c)=>!a||Dt(o,c[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Dt(o,e),c=Dt(o,t);if(a===0)i[0]=e.Jt();else if(a>0&&c<0)i.push(o),i.push(o.Jt());else if(c>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.Sn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Ss,[]],c=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Ss,[]];s.push(IDBKeyRange.bound(a,c))}return s}Sn(e,t){return Dt(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(nd)}getMinOffset(e,t){return m.mapArray(this.an(t),r=>this.un(e,r).next(i=>i||R())).next(nd)}}function td(n){return _e(n,"collectionParents")}function Qr(n){return _e(n,"indexEntries")}function Cs(n){return _e(n,"indexConfiguration")}function Yr(n){return _e(n,"indexState")}function nd(n){P(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;Vu(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new ze(e.readTime,e.documentKey,t)}/**
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
 */const rd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Le{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Le(e,Le.DEFAULT_COLLECTION_PERCENTILE,Le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function rg(n,e,t){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=r.Z({range:o},(l,h,d)=>(a++,d.delete()));s.push(c.next(()=>{P(a===1)}));const u=[];for(const l of t.mutations){const h=op(e,l.key.path,t.batchId);s.push(i.delete(h)),u.push(l.key)}return m.waitFor(s).next(()=>u)}function po(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw R();e=n.noDocument}return JSON.stringify(e).length}/**
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
 */Le.DEFAULT_COLLECTION_PERCENTILE=10,Le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Le.DEFAULT=new Le(41943040,Le.DEFAULT_COLLECTION_PERCENTILE,Le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Le.DISABLED=new Le(-1,0,0);class ta{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.bn={}}static lt(e,t,r,i){P(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new ta(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Vt(e).Z({index:"userMutationsIndex",range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=er(e),o=Vt(e);return o.add({}).next(a=>{P(typeof a=="number");const c=new Bu(a,t,r,i),u=function(f,I,v){const E=v.baseMutations.map(x=>Bi(f.ct,x)),C=v.mutations.map(x=>Bi(f.ct,x));return{userId:I,batchId:v.batchId,localWriteTimeMs:v.localWriteTime.toMillis(),baseMutations:E,mutations:C}}(this.serializer,this.userId,c),l=[];let h=new H((d,f)=>V(d.canonicalString(),f.canonicalString()));for(const d of i){const f=op(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(s.put(f,IA))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.bn[a]=c.keys()}),m.waitFor(l).next(()=>c)})}lookupMutationBatch(e,t){return Vt(e).get(t).next(r=>r?(P(r.userId===this.userId),dn(this.serializer,r)):null)}Dn(e,t){return this.bn[t]?m.resolve(this.bn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.bn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Vt(e).Z({index:"userMutationsIndex",range:i},(o,a,c)=>{a.userId===this.userId&&(P(a.batchId>=r),s=dn(this.serializer,a)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Vt(e).Z({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Vt(e).G("userMutationsIndex",t).next(r=>r.map(i=>dn(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=Us(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return er(e).Z({range:i},(o,a,c)=>{const[u,l,h]=o,d=at(l);if(u===this.userId&&t.path.isEqual(d))return Vt(e).get(h).next(f=>{if(!f)throw R();P(f.userId===this.userId),s.push(dn(this.serializer,f))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new H(V);const i=[];return t.forEach(s=>{const o=Us(this.userId,s.path),a=IDBKeyRange.lowerBound(o),c=er(e).Z({range:a},(u,l,h)=>{const[d,f,I]=u,v=at(f);d===this.userId&&s.path.isEqual(v)?r=r.add(I):h.done()});i.push(c)}),m.waitFor(i).next(()=>this.vn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=Us(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new H(V);return er(e).Z({range:o},(c,u,l)=>{const[h,d,f]=c,I=at(d);h===this.userId&&r.isPrefixOf(I)?I.length===i&&(a=a.add(f)):l.done()}).next(()=>this.vn(e,a))}vn(e,t){const r=[],i=[];return t.forEach(s=>{i.push(Vt(e).get(s).next(o=>{if(o===null)throw R();P(o.userId===this.userId),r.push(dn(this.serializer,o))}))}),m.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return rg(e.ue,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.Cn(t.batchId)}),m.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Cn(e){delete this.bn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return m.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return er(e).Z({range:r},(s,o,a)=>{if(s[0]===this.userId){const c=at(s[1]);i.push(c)}else a.done()}).next(()=>{P(i.length===0)})})}containsKey(e,t){return ig(e,this.userId,t)}Fn(e){return sg(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function ig(n,e,t){const r=Us(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return er(n).Z({range:s,Y:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function Vt(n){return _e(n,"mutations")}function er(n){return _e(n,"documentMutations")}function sg(n){return _e(n,"mutationQueues")}/**
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
 */class Ln{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new Ln(0)}static On(){return new Ln(-1)}}/**
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
 */class VR{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Nn(e).next(t=>{const r=new Ln(t.highestTargetId);return t.highestTargetId=r.next(),this.Bn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Nn(e).next(t=>b.fromTimestamp(new Y(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Nn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.Nn(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Bn(e,i)))}addTargetData(e,t){return this.Ln(e,t).next(()=>this.Nn(e).next(r=>(r.targetCount+=1,this.kn(t,r),this.Bn(e,r))))}updateTargetData(e,t){return this.Ln(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Jn(e).delete(t.targetId)).next(()=>this.Nn(e)).next(r=>(P(r.targetCount>0),r.targetCount-=1,this.Bn(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return Jn(e).Z((o,a)=>{const c=oi(a);c.sequenceNumber<=t&&r.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>m.waitFor(s)).next(()=>i)}forEachTarget(e,t){return Jn(e).Z((r,i)=>{const s=oi(i);t(s)})}Nn(e){return id(e).get("targetGlobalKey").next(t=>(P(t!==null),t))}Bn(e,t){return id(e).put("targetGlobalKey",t)}Ln(e,t){return Jn(e).put(eg(this.serializer,t))}kn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Nn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=Vn(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Jn(e).Z({range:i,index:"queryTargetsIndex"},(o,a,c)=>{const u=oi(a);as(t,u.target)&&(s=u,c.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=xt(e);return t.forEach(o=>{const a=xe(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),m.waitFor(i)}removeMatchingKeys(e,t,r){const i=xt(e);return m.forEach(t,s=>{const o=xe(s.path);return m.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=xt(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=xt(e);let s=N();return i.Z({range:r,Y:!0},(o,a,c)=>{const u=at(o[1]),l=new w(u);s=s.add(l)}).next(()=>s)}containsKey(e,t){const r=xe(t.path),i=IDBKeyRange.bound([r],[Zm(r)],!1,!0);let s=0;return xt(e).Z({index:"documentTargetsIndex",Y:!0,range:i},([o,a],c,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}ut(e,t){return Jn(e).get(t).next(r=>r?oi(r):null)}}function Jn(n){return _e(n,"targets")}function id(n){return _e(n,"targetGlobal")}function xt(n){return _e(n,"targetDocuments")}/**
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
 */function sd([n,e],[t,r]){const i=V(n,t);return i===0?V(e,r):i}class NR{constructor(e){this.qn=e,this.buffer=new H(sd),this.Qn=0}Kn(){return++this.Qn}$n(e){const t=[e,this.Kn()];if(this.buffer.size<this.qn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();sd(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class xR{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Un=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Wn(6e4)}stop(){this.Un&&(this.Un.cancel(),this.Un=null)}get started(){return this.Un!==null}Wn(e){_("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Un=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Un=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){sn(t)?_("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await rn(t)}await this.Wn(3e5)})}}class OR{constructor(e,t){this.Gn=e,this.params=t}calculateTargetCount(e,t){return this.Gn.zn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return m.resolve(Fe.ae);const r=new NR(t);return this.Gn.forEachTarget(e,i=>r.$n(i.sequenceNumber)).next(()=>this.Gn.jn(e,i=>r.$n(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Gn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Gn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(_("LruGarbageCollector","Garbage collection skipped; disabled"),m.resolve(rd)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(_("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),rd):this.Hn(e,t))}getCacheSize(e){return this.Gn.getCacheSize(e)}Hn(e,t){let r,i,s,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(_("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,t))).next(h=>(s=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),dc()<=L.DEBUG&&_("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),m.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function MR(n,e){return new OR(n,e)}/**
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
 */class LR{constructor(e,t){this.db=e,this.garbageCollector=MR(this,t)}zn(e){const t=this.Jn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}Jn(e){let t=0;return this.jn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}jn(e,t){return this.Yn(e,(r,i)=>t(i))}addReference(e,t,r){return ks(e,r)}removeReference(e,t,r){return ks(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return ks(e,t)}Zn(e,t){return function(i,s){let o=!1;return sg(i).X(a=>ig(i,a,s).next(c=>(c&&(o=!0),m.resolve(!c)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Yn(e,(o,a)=>{if(a<=t){const c=this.Zn(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,b.min()),xt(e).delete(function(h){return[0,xe(h.path)]}(o))))});i.push(c)}}).next(()=>m.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return ks(e,t)}Yn(e,t){const r=xt(e);let i,s=Fe.ae;return r.Z({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(s!==Fe.ae&&t(new w(at(i)),s),s=u,i=c):s=Fe.ae}).next(()=>{s!==Fe.ae&&t(new w(at(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function ks(n,e){return xt(n).put(function(r,i){return{targetId:0,path:xe(r.path),sequenceNumber:i}}(e,n.currentSequenceNumber))}/**
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
 */class og{constructor(){this.changes=new on(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,W.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?m.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class FR{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return cn(e).put(r)}removeEntry(e,t,r){return cn(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],fo(o),a[a.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.Xn(e,r)))}getEntry(e,t){let r=W.newInvalidDocument(t);return cn(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Jr(t))},(i,s)=>{r=this.er(t,s)}).next(()=>r)}tr(e,t){let r={size:0,document:W.newInvalidDocument(t)};return cn(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Jr(t))},(i,s)=>{r={document:this.er(t,s),size:po(s)}}).next(()=>r)}getEntries(e,t){let r=Be();return this.nr(e,t,(i,s)=>{const o=this.er(i,s);r=r.insert(i,o)}).next(()=>r)}rr(e,t){let r=Be(),i=new z(w.comparator);return this.nr(e,t,(s,o)=>{const a=this.er(s,o);r=r.insert(s,a),i=i.insert(s,po(o))}).next(()=>({documents:r,ir:i}))}nr(e,t,r){if(t.isEmpty())return m.resolve();let i=new H(cd);t.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(Jr(i.first()),Jr(i.last())),o=i.getIterator();let a=o.getNext();return cn(e).Z({index:"documentKeyIndex",range:s},(c,u,l)=>{const h=w.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&cd(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.W(Jr(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i){const s=t.path,o=[s.popLast().toArray(),s.lastSegment(),fo(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return cn(e).G(IDBKeyRange.bound(o,a,!0)).next(c=>{let u=Be();for(const l of c){const h=this.er(w.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);h.isFoundDocument()&&(us(t,h)||i.has(h.key))&&(u=u.insert(h.key,h))}return u})}getAllFromCollectionGroup(e,t,r,i){let s=Be();const o=ad(t,r),a=ad(t,ze.max());return cn(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.er(w.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&l.done()}).next(()=>s)}newChangeBuffer(e){return new UR(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return od(e).get("remoteDocumentGlobalKey").next(t=>(P(!!t),t))}Xn(e,t){return od(e).put("remoteDocumentGlobalKey",t)}er(e,t){if(t){const r=wR(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(b.min())))return r}return W.newInvalidDocument(e)}}function ag(n){return new FR(n)}class UR extends og{constructor(e,t){super(),this.sr=e,this.trackRemovals=t,this._r=new on(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new H((s,o)=>V(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this._r.get(s);if(t.push(this.sr.removeEntry(e,s,a.readTime)),o.isValidDocument()){const c=Wh(this.sr.serializer,o);i=i.add(s.path.popLast());const u=po(c);r+=u-a.size,t.push(this.sr.addEntry(e,s,c))}else if(r-=a.size,this.trackRemovals){const c=Wh(this.sr.serializer,o.convertToNoDocument(b.min()));t.push(this.sr.addEntry(e,s,c))}}),i.forEach(s=>{t.push(this.sr.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.sr.updateMetadata(e,r)),m.waitFor(t)}getFromCache(e,t){return this.sr.tr(e,t).next(r=>(this._r.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.sr.rr(e,t).next(({documents:r,ir:i})=>(i.forEach((s,o)=>{this._r.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function od(n){return _e(n,"remoteDocumentGlobal")}function cn(n){return _e(n,"remoteDocumentsV14")}function Jr(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function ad(n,e){const t=e.documentKey.path.toArray();return[n,fo(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function cd(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=V(t[s],r[s]),i)return i;return i=V(t.length,r.length),i||(i=V(t[t.length-2],r[r.length-2]),i||V(t[t.length-1],r[r.length-1]))}/**
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
 */class BR{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class cg{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&mi(r.mutation,i,Ue.empty(),Y.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,N()).next(()=>r))}getLocalViewOfDocuments(e,t,r=N()){const i=ct();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=ii();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=ct();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,N()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=Be();const o=fi(),a=function(){return fi()}();return t.forEach((c,u)=>{const l=r.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof Pt)?s=s.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),mi(l.mutation,u,l.mutation.getFieldMask(),Y.now())):o.set(u.key,Ue.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,l)=>o.set(u,l)),t.forEach((u,l)=>{var h;return a.set(u,new BR(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const r=fi();let i=new z((o,a)=>o-a),s=N();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let l=r.get(c)||Ue.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(i.get(a.batchId)||N()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=Pp();l.forEach(d=>{if(!s.has(d)){const f=Op(t.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return m.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r){return function(s){return w.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Lu(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r):this.getDocumentsMatchingCollectionQuery(e,t,r)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):m.resolve(ct());let a=-1,c=s;return o.next(u=>m.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?m.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,N())).next(l=>({batchId:a,changes:bp(l)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new w(t)).next(r=>{let i=ii();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r){const i=t.collectionGroup;let s=ii();return this.indexManager.getCollectionParents(e,i).next(o=>m.forEach(o,a=>{const c=function(l,h){return new bt(h,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(t,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(u=>{u.forEach((l,h)=>{s=s.insert(l,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i))).next(s=>{i.forEach((a,c)=>{const u=c.getKey();s.get(u)===null&&(s=s.insert(u,W.newInvalidDocument(u)))});let o=ii();return s.forEach((a,c)=>{const u=i.get(a);u!==void 0&&mi(u.mutation,c,Ue.empty(),Y.now()),us(t,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class qR{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,t){return m.resolve(this.ar.get(t))}saveBundleMetadata(e,t){return this.ar.set(t.id,function(i){return{id:i.id,version:i.version,createTime:ie(i.createTime)}}(t)),m.resolve()}getNamedQuery(e,t){return m.resolve(this.ur.get(t))}saveNamedQuery(e,t){return this.ur.set(t.name,function(i){return{name:i.name,query:Ku(i.bundledQuery),readTime:ie(i.readTime)}}(t)),m.resolve()}}/**
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
 */class $R{constructor(){this.overlays=new z(w.comparator),this.cr=new Map}getOverlay(e,t){return m.resolve(this.overlays.get(t))}getOverlays(e,t){const r=ct();return m.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),m.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.cr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.cr.delete(r)),m.resolve()}getOverlaysForCollection(e,t,r){const i=ct(),s=t.length+1,o=new w(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return m.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new z((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let l=s.get(u.largestBatchId);l===null&&(l=ct(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=ct(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return m.resolve(a)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(r.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new $u(t,r));let s=this.cr.get(t);s===void 0&&(s=N(),this.cr.set(t,s)),this.cr.set(t,s.add(r.key))}}/**
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
 */class Qu{constructor(){this.lr=new H(de.hr),this.Pr=new H(de.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,t){const r=new de(e,t);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Er(new de(e,t))}dr(e,t){e.forEach(r=>this.removeReference(r,t))}Ar(e){const t=new w(new F([])),r=new de(t,e),i=new de(t,e+1),s=[];return this.Pr.forEachInRange([r,i],o=>{this.Er(o),s.push(o.key)}),s}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const t=new w(new F([])),r=new de(t,e),i=new de(t,e+1);let s=N();return this.Pr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new de(e,0),r=this.lr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class de{constructor(e,t){this.key=e,this.mr=t}static hr(e,t){return w.comparator(e.key,t.key)||V(e.mr,t.mr)}static Ir(e,t){return V(e.mr,t.mr)||w.comparator(e.key,t.key)}}/**
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
 */class GR{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.gr=1,this.pr=new H(de.hr)}checkEmpty(e){return m.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Bu(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new de(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return m.resolve(o)}lookupMutationBatch(e,t){return m.resolve(this.yr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.wr(r),s=i<0?0:i;return m.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return m.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return m.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new de(t,0),i=new de(t,Number.POSITIVE_INFINITY),s=[];return this.pr.forEachInRange([r,i],o=>{const a=this.yr(o.mr);s.push(a)}),m.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new H(V);return t.forEach(i=>{const s=new de(i,0),o=new de(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([s,o],a=>{r=r.add(a.mr)})}),m.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;w.isDocumentKey(s)||(s=s.child(""));const o=new de(new w(s),0);let a=new H(V);return this.pr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.mr)),!0)},o),m.resolve(this.Sr(a))}Sr(e){const t=[];return e.forEach(r=>{const i=this.yr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){P(this.br(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return m.forEach(t.mutations,i=>{const s=new de(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.pr=r})}Cn(e){}containsKey(e,t){const r=new de(t,0),i=this.pr.firstAfterOrEqual(r);return m.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,m.resolve()}br(e,t){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const t=this.wr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class jR{constructor(e){this.Dr=e,this.docs=function(){return new z(w.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Dr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return m.resolve(r?r.document.mutableCopy():W.newInvalidDocument(t))}getEntries(e,t){let r=Be();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():W.newInvalidDocument(i))}),m.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Be();const o=t.path,a=new w(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Vu(np(l),r)<=0||(i.has(l.key)||us(t,l))&&(s=s.insert(l.key,l.mutableCopy()))}return m.resolve(s)}getAllFromCollectionGroup(e,t,r,i){R()}vr(e,t){return m.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new zR(this)}getSize(e){return m.resolve(this.size)}}class zR extends og{constructor(e){super(),this.sr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.sr.addEntry(e,i)):this.sr.removeEntry(r)}),m.waitFor(t)}getFromCache(e,t){return this.sr.getEntry(e,t)}getAllFromCache(e,t){return this.sr.getEntries(e,t)}}/**
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
 */class KR{constructor(e){this.persistence=e,this.Cr=new on(t=>Vn(t),as),this.lastRemoteSnapshotVersion=b.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new Qu,this.targetCount=0,this.Or=Ln.xn()}forEachTarget(e,t){return this.Cr.forEach((r,i)=>t(i)),m.resolve()}getLastRemoteSnapshotVersion(e){return m.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return m.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),m.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Fr&&(this.Fr=t),m.resolve()}Ln(e){this.Cr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Or=new Ln(t),this.highestTargetId=t),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,t){return this.Ln(t),this.targetCount+=1,m.resolve()}updateTargetData(e,t){return this.Ln(t),m.resolve()}removeTargetData(e,t){return this.Cr.delete(t.target),this.Mr.Ar(t.targetId),this.targetCount-=1,m.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Cr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),m.waitFor(s).next(()=>i)}getTargetCount(e){return m.resolve(this.targetCount)}getTargetData(e,t){const r=this.Cr.get(t)||null;return m.resolve(r)}addMatchingKeys(e,t,r){return this.Mr.Tr(t,r),m.resolve()}removeMatchingKeys(e,t,r){this.Mr.dr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),m.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Mr.Ar(t),m.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Mr.Vr(t);return m.resolve(r)}containsKey(e,t){return m.resolve(this.Mr.containsKey(t))}}/**
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
 */class ug{constructor(e,t){this.Nr={},this.overlays={},this.Br=new Fe(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new KR(this),this.indexManager=new kR,this.remoteDocumentCache=function(i){return new jR(i)}(r=>this.referenceDelegate.qr(r)),this.serializer=new Zp(t),this.Qr=new qR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new $R,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Nr[e.toKey()];return r||(r=new GR(t,this.referenceDelegate),this.Nr[e.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,t,r){_("MemoryPersistence","Starting transaction:",e);const i=new WR(this.Br.next());return this.referenceDelegate.Kr(),r(i).next(s=>this.referenceDelegate.$r(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ur(e,t){return m.or(Object.values(this.Nr).map(r=>()=>r.containsKey(e,t)))}}class WR extends ip{constructor(e){super(),this.currentSequenceNumber=e}}class na{constructor(e){this.persistence=e,this.Wr=new Qu,this.Gr=null}static zr(e){return new na(e)}get jr(){if(this.Gr)return this.Gr;throw R()}addReference(e,t,r){return this.Wr.addReference(r,t),this.jr.delete(r.toString()),m.resolve()}removeReference(e,t,r){return this.Wr.removeReference(r,t),this.jr.add(r.toString()),m.resolve()}markPotentiallyOrphaned(e,t){return this.jr.add(t.toString()),m.resolve()}removeTarget(e,t){this.Wr.Ar(t.targetId).forEach(i=>this.jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.jr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Kr(){this.Gr=new Set}$r(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return m.forEach(this.jr,r=>{const i=w.fromPath(r);return this.Hr(e,i).next(s=>{s||t.removeEntry(i,b.min())})}).next(()=>(this.Gr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Hr(e,t).next(r=>{r?this.jr.delete(t.toString()):this.jr.add(t.toString())})}qr(e){return 0}Hr(e,t){return m.or([()=>m.resolve(this.Wr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ur(e,t)])}}/**
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
 */class HR{constructor(e){this.serializer=e}B(e,t,r,i){const s=new Qo("createOrUpgrade",t);r<1&&i>=1&&(function(c){c.createObjectStore("owner")}(e),function(c){c.createObjectStore("mutationQueues",{keyPath:"userId"}),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Ah,{unique:!0}),c.createObjectStore("documentMutations")}(e),ud(e),function(c){c.createObjectStore("remoteDocuments")}(e));let o=m.resolve();return r<3&&i>=3&&(r!==0&&(function(c){c.deleteObjectStore("targetDocuments"),c.deleteObjectStore("targets"),c.deleteObjectStore("targetGlobal")}(e),ud(e)),o=o.next(()=>function(c){const u=c.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:b.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",l)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(c,u){return u.store("mutations").G().next(l=>{c.deleteObjectStore("mutations"),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Ah,{unique:!0});const h=u.store("mutations"),d=l.map(f=>h.put(f));return m.waitFor(d)})}(e,s))),o=o.next(()=>{(function(c){c.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Yr(s))),r<6&&i>=6&&(o=o.next(()=>(function(c){c.createObjectStore("remoteDocumentGlobal")}(e),this.Zr(s)))),r<7&&i>=7&&(o=o.next(()=>this.Xr(s))),r<8&&i>=8&&(o=o.next(()=>this.ei(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ti(s))),r<11&&i>=11&&(o=o.next(()=>{(function(c){c.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(c){c.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(c){const u=c.createObjectStore("documentOverlays",{keyPath:DA});u.createIndex("collectionPathOverlayIndex",VA,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",NA,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(c){const u=c.createObjectStore("remoteDocumentsV14",{keyPath:vA});u.createIndex("documentKeyIndex",EA),u.createIndex("collectionGroupIndex",wA)}(e)).next(()=>this.ni(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ri(e,s))),r<15&&i>=15&&(o=o.next(()=>function(c){c.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),c.createObjectStore("indexState",{keyPath:PA}).createIndex("sequenceNumberIndex",SA,{unique:!1}),c.createObjectStore("indexEntries",{keyPath:CA}).createIndex("documentKeyIndex",kA,{unique:!1})}(e))),o}Zr(e){let t=0;return e.store("remoteDocuments").Z((r,i)=>{t+=po(i)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Yr(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.G().next(i=>m.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.G("userMutationsIndex",o).next(a=>m.forEach(a,c=>{P(c.userId===s.userId);const u=dn(this.serializer,c);return rg(e,s.userId,u).next(()=>{})}))}))}Xr(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Z((o,a)=>{const c=new F(o),u=function(h){return[0,xe(h)]}(c);s.push(t.get(u).next(l=>l?m.resolve():(h=>t.put({targetId:0,path:xe(h),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>m.waitFor(s))})}ei(e,t){e.createObjectStore("collectionParents",{keyPath:bA});const r=t.store("collectionParents"),i=new Hu,s=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:xe(c)})}};return t.store("remoteDocuments").Z({Y:!0},(o,a)=>{const c=new F(o);return s(c.popLast())}).next(()=>t.store("documentMutations").Z({Y:!0},([o,a,c],u)=>{const l=at(a);return s(l.popLast())}))}ti(e){const t=e.store("targets");return t.Z((r,i)=>{const s=oi(i),o=eg(this.serializer,s);return t.put(o)})}ni(e,t){const r=t.store("remoteDocuments"),i=[];return r.Z((s,o)=>{const a=t.store("remoteDocumentsV14"),c=function(h){return h.document?new w(F.fromString(h.document.name).popFirst(5)):h.noDocument?w.fromSegments(h.noDocument.path):h.unknownDocument?w.fromSegments(h.unknownDocument.path):R()}(o).path.toArray(),u={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>m.waitFor(i))}ri(e,t){const r=t.store("mutations"),i=ag(this.serializer),s=new ug(na.zr,this.serializer.ct);return r.G().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:N();dn(this.serializer,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),m.forEach(a,(c,u)=>{const l=new fe(u),h=ea.lt(this.serializer,l),d=s.getIndexManager(l),f=ta.lt(l,this.serializer,d,s.referenceDelegate);return new cg(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new mc(t,Fe.ae),c).next()})})}}function ud(n){n.createObjectStore("targetDocuments",{keyPath:AA}).createIndex("documentTargetsIndex",RA,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",TA,{unique:!0}),n.createObjectStore("targetGlobal")}const Ua="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Yu{constructor(e,t,r,i,s,o,a,c,u,l,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.ii=s,this.window=o,this.document=a,this.si=u,this.oi=l,this._i=h,this.Br=null,this.Lr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ai=null,this.inForeground=!1,this.ui=null,this.ci=null,this.li=Number.NEGATIVE_INFINITY,this.hi=d=>Promise.resolve(),!Yu.v())throw new g(p.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new LR(this,i),this.Pi=t+"main",this.serializer=new Zp(c),this.Ii=new Qe(this.Pi,this._i,new HR(this.serializer)),this.kr=new VR(this.referenceDelegate,this.serializer),this.remoteDocumentCache=ag(this.serializer),this.Qr=new TR,this.window&&this.window.localStorage?this.Ti=this.window.localStorage:(this.Ti=null,l===!1&&ne("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ei().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new g(p.FAILED_PRECONDITION,Ua);return this.di(),this.Ai(),this.Ri(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.kr.getHighestSequenceNumber(e))}).then(e=>{this.Br=new Fe(e,this.si)}).then(()=>{this.Lr=!0}).catch(e=>(this.Ii&&this.Ii.close(),Promise.reject(e)))}Vi(e){return this.hi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ii.k(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ii.enqueueAndForget(async()=>{this.started&&await this.Ei()}))}Ei(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Ds(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.mi(e).next(t=>{t||(this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.hi(!1)))})}).next(()=>this.fi(e)).next(t=>this.isPrimary&&!t?this.gi(e).next(()=>!1):!!t&&this.pi(e).next(()=>!0))).catch(e=>{if(sn(e))return _("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return _("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ii.enqueueRetryable(()=>this.hi(e)),this.isPrimary=e})}mi(e){return Xr(e).get("owner").next(t=>m.resolve(this.yi(t)))}wi(e){return Ds(e).delete(this.clientId)}async Si(){if(this.isPrimary&&!this.bi(this.li,18e5)){this.li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=_e(t,"clientMetadata");return r.G().next(i=>{const s=this.Di(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return m.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ti)for(const t of e)this.Ti.removeItem(this.vi(t.clientId))}}Ri(){this.ci=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ei().then(()=>this.Si()).then(()=>this.Ri()))}yi(e){return!!e&&e.ownerId===this.clientId}fi(e){return this.oi?m.resolve(!0):Xr(e).get("owner").next(t=>{if(t!==null&&this.bi(t.leaseTimestampMs,5e3)&&!this.Ci(t.ownerId)){if(this.yi(t)&&this.networkEnabled)return!0;if(!this.yi(t)){if(!t.allowTabSynchronization)throw new g(p.FAILED_PRECONDITION,Ua);return!1}}return!(!this.networkEnabled||!this.inForeground)||Ds(e).G().next(r=>this.Di(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&_("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Lr=!1,this.Fi(),this.ci&&(this.ci.cancel(),this.ci=null),this.Mi(),this.xi(),await this.Ii.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new mc(e,Fe.ae);return this.gi(t).next(()=>this.wi(t))}),this.Ii.close(),this.Oi()}Di(e,t){return e.filter(r=>this.bi(r.updateTimeMs,t)&&!this.Ci(r.clientId))}Ni(){return this.runTransaction("getActiveClients","readonly",e=>Ds(e).G().next(t=>this.Di(t,18e5).map(r=>r.clientId)))}get started(){return this.Lr}getMutationQueue(e,t){return ta.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new DR(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return ea.lt(this.serializer,e)}getBundleCache(){return this.Qr}runTransaction(e,t,r){_("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=function(c){return c===15?OA:c===14?up:c===13?cp:c===12?xA:c===11?ap:void R()}(this._i);let o;return this.Ii.runTransaction(e,i,s,a=>(o=new mc(a,this.Br?this.Br.next():Fe.ae),t==="readwrite-primary"?this.mi(o).next(c=>!!c||this.fi(o)).next(c=>{if(!c)throw ne(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.hi(!1)),new g(p.FAILED_PRECONDITION,rp);return r(o)}).next(c=>this.pi(o).next(()=>c)):this.Bi(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Bi(e){return Xr(e).get("owner").next(t=>{if(t!==null&&this.bi(t.leaseTimestampMs,5e3)&&!this.Ci(t.ownerId)&&!this.yi(t)&&!(this.oi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new g(p.FAILED_PRECONDITION,Ua)})}pi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Xr(e).put("owner",t)}static v(){return Qe.v()}gi(e){const t=Xr(e);return t.get("owner").next(r=>this.yi(r)?(_("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):m.resolve())}bi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(ne(`Detected an update time that is in the future: ${e} > ${r}`),!1))}di(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ui=()=>{this.ii.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ei()))},this.document.addEventListener("visibilitychange",this.ui),this.inForeground=this.document.visibilityState==="visible")}Mi(){this.ui&&(this.document.removeEventListener("visibilitychange",this.ui),this.ui=null)}Ai(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ai=()=>{this.Fi();const t=/(?:Version|Mobile)\/1[456]/;C_()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ai))}xi(){this.ai&&(this.window.removeEventListener("pagehide",this.ai),this.ai=null)}Ci(e){var t;try{const r=((t=this.Ti)===null||t===void 0?void 0:t.getItem(this.vi(e)))!==null;return _("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return ne("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Fi(){if(this.Ti)try{this.Ti.setItem(this.vi(this.clientId),String(Date.now()))}catch(e){ne("Failed to set zombie client id.",e)}}Oi(){if(this.Ti)try{this.Ti.removeItem(this.vi(this.clientId))}catch{}}vi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Xr(n){return _e(n,"owner")}function Ds(n){return _e(n,"clientMetadata")}function Ju(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class Xu{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Li=r,this.ki=i}static qi(e,t){let r=N(),i=N();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Xu(e,t.fromCache,r,i)}}/**
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
 */class lg{constructor(){this.Qi=!1}initialize(e,t){this.Ki=e,this.indexManager=t,this.Qi=!0}getDocumentsMatchingQuery(e,t,r,i){return this.$i(e,t).next(s=>s||this.Ui(e,t,i,r)).next(s=>s||this.Wi(e,t))}$i(e,t){if(Mh(t))return m.resolve(null);let r=qe(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=ho(t,null,"F"),r=qe(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=N(...s);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Gi(t,a);return this.zi(t,u,o,c.readTime)?this.$i(e,ho(t,null,"F")):this.ji(e,u,t,c)}))})))}Ui(e,t,r,i){return Mh(t)||i.isEqual(b.min())?this.Wi(e,t):this.Ki.getDocuments(e,r).next(s=>{const o=this.Gi(t,s);return this.zi(t,o,r,i)?this.Wi(e,t):(dc()<=L.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ec(t)),this.ji(e,o,t,tp(i,-1)))})}Gi(e,t){let r=new H(Ap(e));return t.forEach((i,s)=>{us(e,s)&&(r=r.add(s))}),r}zi(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Wi(e,t){return dc()<=L.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",Ec(t)),this.Ki.getDocumentsMatchingQuery(e,t,ze.min())}ji(e,t,r,i){return this.Ki.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class QR{constructor(e,t,r,i){this.persistence=e,this.Hi=t,this.serializer=i,this.Ji=new z(V),this.Yi=new on(s=>Vn(s),as),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(r)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new cg(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ji))}}function hg(n,e,t,r){return new QR(n,e,t,r)}async function dg(n,e){const t=T(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.es(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=N();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of s){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return t.localDocuments.getDocuments(r,c).next(u=>({ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function YR(n,e){const t=T(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.Xi.newChangeBuffer({trackRemovals:!0});return function(a,c,u,l){const h=u.batch,d=h.keys();let f=m.resolve();return d.forEach(I=>{f=f.next(()=>l.getEntry(c,I)).next(v=>{const E=u.docVersions.get(I);P(E!==null),v.version.compareTo(E)<0&&(h.applyToRemoteDocument(v,u),v.isValidDocument()&&(v.setReadTime(u.commitVersion),l.addEntry(v)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=N();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function fg(n){const e=T(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.kr.getLastRemoteSnapshotVersion(t))}function JR(n,e){const t=T(n),r=e.snapshotVersion;let i=t.Ji;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.Xi.newChangeBuffer({trackRemovals:!0});i=t.Ji;const a=[];e.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(t.kr.removeMatchingKeys(s,l.removedDocuments,h).next(()=>t.kr.addMatchingKeys(s,l.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(le.EMPTY_BYTE_STRING,b.min()).withLastLimboFreeSnapshotVersion(b.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),i=i.insert(h,f),function(v,E,C){return v.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(d,f,l)&&a.push(t.kr.updateTargetData(s,f))});let c=Be(),u=N();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(mg(s,o,e.documentUpdates).next(l=>{c=l.ns,u=l.rs})),!r.isEqual(b.min())){const l=t.kr.getLastRemoteSnapshotVersion(s).next(h=>t.kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return m.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(t.Ji=i,s))}function mg(n,e,t){let r=N(),i=N();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=Be();return t.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(b.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):_("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{ns:o,rs:i}})}function XR(n,e){const t=T(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function vr(n,e){const t=T(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.kr.getTargetData(r,e).next(s=>s?(i=s,m.resolve(i)):t.kr.allocateTargetId(r).next(o=>(i=new _t(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ji=t.Ji.insert(r.targetId,r),t.Yi.set(e,r.targetId)),r})}async function Er(n,e,t){const r=T(n),i=r.Ji.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!sn(o))throw o;_("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function go(n,e,t){const r=T(n);let i=b.min(),s=N();return r.persistence.runTransaction("Execute query","readonly",o=>function(c,u,l){const h=T(c),d=h.Yi.get(l);return d!==void 0?m.resolve(h.Ji.get(d)):h.kr.getTargetData(u,l)}(r,o,qe(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,t?i:b.min(),t?s:N())).next(a=>(_g(r,Tp(e),a),{documents:a,ss:s})))}function pg(n,e){const t=T(n),r=T(t.kr),i=t.Ji.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>r.ut(s,e).next(o=>o?o.target:null))}function gg(n,e){const t=T(n),r=t.Zi.get(e)||b.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.Xi.getAllFromCollectionGroup(i,e,tp(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(_g(t,e,i),i))}function _g(n,e,t){let r=n.Zi.get(e)||b.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Zi.set(e,r)}async function ZR(n,e,t,r){const i=T(n);let s=N(),o=Be();for(const u of t){const l=e.os(u.metadata.name);u.document&&(s=s.add(l));const h=e._s(u);h.setReadTime(e.us(u.metadata.readTime)),o=o.insert(l,h)}const a=i.Xi.newChangeBuffer({trackRemovals:!0}),c=await vr(i,function(l){return qe(xr(F.fromString(`__bundle__/docs/${l}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>mg(u,a,o).next(l=>(a.apply(u),l)).next(l=>i.kr.removeMatchingKeysForTargetId(u,c.targetId).next(()=>i.kr.addMatchingKeys(u,s,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,l.ns,l.rs)).next(()=>l.ns)))}async function eb(n,e,t=N()){const r=await vr(n,qe(Ku(e.bundledQuery))),i=T(n);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=ie(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Qr.saveNamedQuery(s,e);const a=r.withResumeToken(le.EMPTY_BYTE_STRING,o);return i.Ji=i.Ji.insert(a.targetId,a),i.kr.updateTargetData(s,a).next(()=>i.kr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.kr.addMatchingKeys(s,t,r.targetId)).next(()=>i.Qr.saveNamedQuery(s,e))})}function ld(n,e){return`firestore_clients_${n}_${e}`}function hd(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Ba(n,e){return`firestore_targets_${n}_${e}`}class _o{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static cs(e,t,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new g(i.error.code,i.error.message))),o?new _o(e,t,i.state,s):(ne("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}ls(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class pi{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static cs(e,t){const r=JSON.parse(t);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new g(r.error.code,r.error.message))),s?new pi(e,r.state,i):(ne("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}ls(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class yo{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static cs(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Fu();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=sp(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new yo(e,s):(ne("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Zu{constructor(e,t){this.clientId=e,this.onlineState=t}static cs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Zu(t.clientId,t.onlineState):(ne("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Sc{constructor(){this.activeTargetIds=Fu()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class qa{constructor(e,t,r,i,s){this.window=e,this.ii=t,this.persistenceKey=r,this.Is=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Ts=this.Es.bind(this),this.ds=new z(V),this.started=!1,this.As=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Rs=ld(this.persistenceKey,this.Is),this.Vs=function(c){return`firestore_sequence_number_${c}`}(this.persistenceKey),this.ds=this.ds.insert(this.Is,new Sc),this.fs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.gs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.ps=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.ys=function(c){return`firestore_online_state_${c}`}(this.persistenceKey),this.ws=function(c){return`firestore_bundle_loaded_v2_${c}`}(this.persistenceKey),this.window.addEventListener("storage",this.Ts)}static v(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ni();for(const r of e){if(r===this.Is)continue;const i=this.getItem(ld(this.persistenceKey,r));if(i){const s=yo.cs(r,i);s&&(this.ds=this.ds.insert(s.clientId,s))}}this.Ss();const t=this.storage.getItem(this.ys);if(t){const r=this.bs(t);r&&this.Ds(r)}for(const r of this.As)this.Es(r);this.As=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.vs(this.ds)}isActiveQueryTarget(e){let t=!1;return this.ds.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Cs(e,"pending")}updateMutationState(e,t,r){this.Cs(e,t,r),this.Fs(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Ba(this.persistenceKey,e));if(r){const i=pi.cs(e,r);i&&(t=i.state)}}return this.Ms.hs(e),this.Ss(),t}removeLocalQueryTarget(e){this.Ms.Ps(e),this.Ss()}isLocalQueryTarget(e){return this.Ms.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Ba(this.persistenceKey,e))}updateQueryState(e,t,r){this.xs(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.Fs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Os(e)}notifyBundleLoaded(e){this.Ns(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Ts),this.removeItem(this.Rs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return _("SharedClientState","READ",e,t),t}setItem(e,t){_("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){_("SharedClientState","REMOVE",e),this.storage.removeItem(e)}Es(e){const t=e;if(t.storageArea===this.storage){if(_("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Rs)return void ne("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ii.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.fs.test(t.key)){if(t.newValue==null){const r=this.Bs(t.key);return this.Ls(r,null)}{const r=this.ks(t.key,t.newValue);if(r)return this.Ls(r.clientId,r)}}else if(this.gs.test(t.key)){if(t.newValue!==null){const r=this.qs(t.key,t.newValue);if(r)return this.Qs(r)}}else if(this.ps.test(t.key)){if(t.newValue!==null){const r=this.Ks(t.key,t.newValue);if(r)return this.$s(r)}}else if(t.key===this.ys){if(t.newValue!==null){const r=this.bs(t.newValue);if(r)return this.Ds(r)}}else if(t.key===this.Vs){const r=function(s){let o=Fe.ae;if(s!=null)try{const a=JSON.parse(s);P(typeof a=="number"),o=a}catch(a){ne("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(t.newValue);r!==Fe.ae&&this.sequenceNumberHandler(r)}else if(t.key===this.ws){const r=this.Us(t.newValue);await Promise.all(r.map(i=>this.syncEngine.Ws(i)))}}}else this.As.push(t)})}}get Ms(){return this.ds.get(this.Is)}Ss(){this.setItem(this.Rs,this.Ms.ls())}Cs(e,t,r){const i=new _o(this.currentUser,e,t,r),s=hd(this.persistenceKey,this.currentUser,e);this.setItem(s,i.ls())}Fs(e){const t=hd(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Os(e){const t={clientId:this.Is,onlineState:e};this.storage.setItem(this.ys,JSON.stringify(t))}xs(e,t,r){const i=Ba(this.persistenceKey,e),s=new pi(e,t,r);this.setItem(i,s.ls())}Ns(e){const t=JSON.stringify(Array.from(e));this.setItem(this.ws,t)}Bs(e){const t=this.fs.exec(e);return t?t[1]:null}ks(e,t){const r=this.Bs(e);return yo.cs(r,t)}qs(e,t){const r=this.gs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return _o.cs(new fe(s),i,t)}Ks(e,t){const r=this.ps.exec(e),i=Number(r[1]);return pi.cs(i,t)}bs(e){return Zu.cs(e)}Us(e){return JSON.parse(e)}async Qs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Gs(e.batchId,e.state,e.error);_("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}$s(e){return this.syncEngine.zs(e.targetId,e.state,e.error)}Ls(e,t){const r=t?this.ds.insert(e,t):this.ds.remove(e),i=this.vs(this.ds),s=this.vs(r),o=[],a=[];return s.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{s.has(c)||a.push(c)}),this.syncEngine.js(o,a).then(()=>{this.ds=r})}Ds(e){this.ds.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}vs(e){let t=Fu();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class yg{constructor(){this.Hs=new Sc,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,t,r){this.Js[e]=t}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new Sc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class tb{Ys(e){}shutdown(){}}/**
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
 */class dd{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){_("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){_("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Vs=null;function $a(){return Vs===null?Vs=function(){return 268435456+Math.round(2147483648*Math.random())}():Vs++,"0x"+Vs.toString(16)}/**
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
 */const nb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class rb{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
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
 */const be="WebChannelConnection";class ib extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.To=r+"://"+t.host,this.Eo=`projects/${i}/databases/${s}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Ro(){return!1}Vo(t,r,i,s,o){const a=$a(),c=this.mo(t,r);_("RestConnection",`Sending RPC '${t}' ${a}:`,c,i);const u={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(u,s,o),this.po(t,c,u,i).then(l=>(_("RestConnection",`Received RPC '${t}' ${a}: `,l),l),l=>{throw Xe("RestConnection",`RPC '${t}' ${a} failed with error: `,l,"url: ",c,"request:",i),l})}yo(t,r,i,s,o,a){return this.Vo(t,r,i,s,o)}fo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Nr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}mo(t,r){const i=nb[t];return`${this.To}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,t,r,i){const s=$a();return new Promise((o,a)=>{const c=new eA;c.setWithCredentials(!0),c.listenOnce(JT.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case La.NO_ERROR:const l=c.getResponseJson();_(be,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(l)),o(l);break;case La.TIMEOUT:_(be,`RPC '${e}' ${s} timed out`),a(new g(p.DEADLINE_EXCEEDED,"Request time out"));break;case La.HTTP_ERROR:const h=c.getStatus();if(_(be,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const I=function(E){const C=E.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(C)>=0?C:p.UNKNOWN}(f.status);a(new g(I,f.message))}else a(new g(p.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new g(p.UNAVAILABLE,"Connection failed."));break;default:R()}}finally{_(be,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);_(be,`RPC '${e}' ${s} sending request:`,i),c.send(t,"POST",u,r,15)})}wo(e,t,r){const i=$a(),s=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=QT(),a=YT(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new ZT({})),this.fo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const l=s.join("");_(be,`Creating RPC '${e}' stream ${i}: ${l}`,c);const h=o.createWebChannel(l,c);let d=!1,f=!1;const I=new rb({so:E=>{f?_(be,`Not sending because RPC '${e}' stream ${i} is closed:`,E):(d||(_(be,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),_(be,`RPC '${e}' stream ${i} sending:`,E),h.send(E))},oo:()=>h.close()}),v=(E,C,x)=>{E.listen(C,D=>{try{x(D)}catch(q){setTimeout(()=>{throw q},0)}})};return v(h,Rs.EventType.OPEN,()=>{f||_(be,`RPC '${e}' stream ${i} transport opened.`)}),v(h,Rs.EventType.CLOSE,()=>{f||(f=!0,_(be,`RPC '${e}' stream ${i} transport closed`),I.Po())}),v(h,Rs.EventType.ERROR,E=>{f||(f=!0,Xe(be,`RPC '${e}' stream ${i} transport errored:`,E),I.Po(new g(p.UNAVAILABLE,"The operation could not be completed")))}),v(h,Rs.EventType.MESSAGE,E=>{var C;if(!f){const x=E.data[0];P(!!x);const D=x,q=D.error||((C=D[0])===null||C===void 0?void 0:C.error);if(q){_(be,`RPC '${e}' stream ${i} received error:`,q);const $=q.status;let U=function(qr){const Is=oe[qr];if(Is!==void 0)return Fp(Is)}($),Ie=q.message;U===void 0&&(U=p.INTERNAL,Ie="Unknown error status: "+$+" with message "+q.message),f=!0,I.Po(new g(U,Ie)),h.close()}else _(be,`RPC '${e}' stream ${i} received:`,x),I.Io(x)}}),v(a,XT.STAT_EVENT,E=>{E.stat===vh.PROXY?_(be,`RPC '${e}' stream ${i} detected buffering proxy`):E.stat===vh.NOPROXY&&_(be,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{I.ho()},0),I}}/**
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
 */function Ig(){return typeof window<"u"?window:null}function js(){return typeof document<"u"?document:null}/**
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
 */function fs(n){return new dR(n,!0)}/**
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
 */class el{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=t,this.So=r,this.bo=i,this.Do=s,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const t=Math.floor(this.vo+this.Oo()),r=Math.max(0,Date.now()-this.Fo),i=Math.max(0,t-r);i>0&&_("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.vo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Fo=Date.now(),e())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
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
 */class vg{constructor(e,t,r,i,s,o,a,c){this.ii=e,this.Bo=r,this.Lo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new el(e,t)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,t){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,e!==4?this.Ko.reset():t&&t.code===p.RESOURCE_EXHAUSTED?(ne(t.toString()),ne("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):t&&t.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(t)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),t=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.ko===t&&this.e_(r,i)},r=>{e(()=>{const i=new g(p.UNKNOWN,"Fetching auth token failed: "+r.message);return this.t_(i)})})}e_(e,t){const r=this.Xo(this.ko);this.stream=this.n_(e,t),this.stream._o(()=>{r(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{r(()=>this.t_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(e){return _("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget(()=>this.ko===e?t():(_("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sb extends vg{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}n_(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.Ko.reset();const t=pR(this.serializer,e),r=function(s){if(!("targetChange"in s))return b.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?b.min():o.readTime?ie(o.readTime):b.min()}(e);return this.listener.r_(t,r)}i_(e){const t={};t.database=Ui(this.serializer),t.addTarget=function(s,o){let a;const c=o.target;if(a=uo(c)?{documents:Wp(s,c)}:{query:Hp(s,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=$p(s,o.resumeToken);const u=wc(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(b.min())>0){a.readTime=Ir(s,o.snapshotVersion.toTimestamp());const u=wc(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=_R(this.serializer,e);r&&(t.labels=r),this.Ho(t)}s_(e){const t={};t.database=Ui(this.serializer),t.removeTarget=e,this.Ho(t)}}class ob extends vg{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(P(!!e.streamToken),this.lastStreamToken=e.streamToken,this.o_){this.Ko.reset();const t=gR(e.writeResults,e.commitTime),r=ie(e.commitTime);return this.listener.u_(r,t)}return P(!e.writeResults||e.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const e={};e.database=Ui(this.serializer),this.Ho(e)}a_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Bi(this.serializer,r))};this.Ho(t)}}/**
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
 */class ab extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.h_=!1}P_(){if(this.h_)throw new g(p.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,t,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Vo(e,t,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new g(p.UNKNOWN,i.toString())})}yo(e,t,r,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.yo(e,t,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new g(p.UNKNOWN,s.toString())})}terminate(){this.h_=!0}}class cb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(e){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,e==="Online"&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(ne(t),this.d_=!1):_("OnlineStateTracker",t)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
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
 */class ub{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=s,this.S_.Ys(o=>{r.enqueueAndForget(async()=>{an(this)&&(_("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=T(c);u.y_.add(4),await Lr(u),u.b_.set("Unknown"),u.y_.delete(4),await ms(u)}(this))})}),this.b_=new cb(r,i)}}async function ms(n){if(an(n))for(const e of n.w_)await e(!0)}async function Lr(n){for(const e of n.w_)await e(!1)}function ra(n,e){const t=T(n);t.p_.has(e.targetId)||(t.p_.set(e.targetId,e),rl(t)?nl(t):Ur(t).Uo()&&tl(t,e))}function qi(n,e){const t=T(n),r=Ur(t);t.p_.delete(e),r.Uo()&&Eg(t,e),t.p_.size===0&&(r.Uo()?r.zo():an(t)&&t.b_.set("Unknown"))}function tl(n,e){if(n.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(b.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ur(n).i_(e)}function Eg(n,e){n.D_.Be(e),Ur(n).s_(e)}function nl(n){n.D_=new cR({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.p_.get(e)||null,rt:()=>n.datastore.serializer.databaseId}),Ur(n).start(),n.b_.A_()}function rl(n){return an(n)&&!Ur(n).$o()&&n.p_.size>0}function an(n){return T(n).y_.size===0}function wg(n){n.D_=void 0}async function lb(n){n.p_.forEach((e,t)=>{tl(n,e)})}async function hb(n,e){wg(n),rl(n)?(n.b_.m_(e),nl(n)):n.b_.set("Unknown")}async function db(n,e,t){if(n.b_.set("Online"),e instanceof qp&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.p_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.p_.delete(a),i.D_.removeTarget(a))}(n,e)}catch(r){_("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Io(n,r)}else if(e instanceof Gs?n.D_.We(e):e instanceof Bp?n.D_.Ze(e):n.D_.je(e),!t.isEqual(b.min()))try{const r=await fg(n.localStore);t.compareTo(r)>=0&&await function(s,o){const a=s.D_.st(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const l=s.p_.get(u);l&&s.p_.set(u,l.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const l=s.p_.get(c);if(!l)return;s.p_.set(c,l.withResumeToken(le.EMPTY_BYTE_STRING,l.snapshotVersion)),Eg(s,c);const h=new _t(l.target,c,u,l.sequenceNumber);tl(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(r){_("RemoteStore","Failed to raise snapshot:",r),await Io(n,r)}}async function Io(n,e,t){if(!sn(e))throw e;n.y_.add(1),await Lr(n),n.b_.set("Offline"),t||(t=()=>fg(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{_("RemoteStore","Retrying IndexedDB access"),await t(),n.y_.delete(1),await ms(n)})}function Tg(n,e){return e().catch(t=>Io(n,t,e))}async function Fr(n){const e=T(n),t=Yt(e);let r=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;fb(e);)try{const i=await XR(e.localStore,r);if(i===null){e.g_.length===0&&t.zo();break}r=i.batchId,mb(e,i)}catch(i){await Io(e,i)}Ag(e)&&Rg(e)}function fb(n){return an(n)&&n.g_.length<10}function mb(n,e){n.g_.push(e);const t=Yt(n);t.Uo()&&t.__&&t.a_(e.mutations)}function Ag(n){return an(n)&&!Yt(n).$o()&&n.g_.length>0}function Rg(n){Yt(n).start()}async function pb(n){Yt(n).l_()}async function gb(n){const e=Yt(n);for(const t of n.g_)e.a_(t.mutations)}async function _b(n,e,t){const r=n.g_.shift(),i=qu.from(r,e,t);await Tg(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Fr(n)}async function yb(n,e){e&&Yt(n).__&&await async function(r,i){if(function(o){return Lp(o)&&o!==p.ABORTED}(i.code)){const s=r.g_.shift();Yt(r).Go(),await Tg(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Fr(r)}}(n,e),Ag(n)&&Rg(n)}async function fd(n,e){const t=T(n);t.asyncQueue.verifyOperationInProgress(),_("RemoteStore","RemoteStore received new credentials");const r=an(t);t.y_.add(3),await Lr(t),r&&t.b_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.y_.delete(3),await ms(t)}async function Cc(n,e){const t=T(n);e?(t.y_.delete(2),await ms(t)):e||(t.y_.add(2),await Lr(t),t.b_.set("Unknown"))}function Ur(n){return n.v_||(n.v_=function(t,r,i){const s=T(t);return s.P_(),new sb(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{_o:lb.bind(null,n),uo:hb.bind(null,n),r_:db.bind(null,n)}),n.w_.push(async e=>{e?(n.v_.Go(),rl(n)?nl(n):n.b_.set("Unknown")):(await n.v_.stop(),wg(n))})),n.v_}function Yt(n){return n.C_||(n.C_=function(t,r,i){const s=T(t);return s.P_(),new ob(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{_o:pb.bind(null,n),uo:yb.bind(null,n),c_:gb.bind(null,n),u_:_b.bind(null,n)}),n.w_.push(async e=>{e?(n.C_.Go(),await Fr(n)):(await n.C_.stop(),n.g_.length>0&&(_("RemoteStore",`Stopping write stream with ${n.g_.length} pending writes`),n.g_=[]))})),n.C_}/**
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
 */class il{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new me,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new il(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new g(p.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Br(n,e){if(ne("AsyncQueue",`${e}: ${n}`),sn(n))return new g(p.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class lr{constructor(e){this.comparator=e?(t,r)=>e(t,r)||w.comparator(t.key,r.key):(t,r)=>w.comparator(t.key,r.key),this.keyedMap=ii(),this.sortedSet=new z(this.comparator)}static emptySet(e){return new lr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof lr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new lr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class md{constructor(){this.F_=new z(w.comparator)}track(e){const t=e.doc.key,r=this.F_.get(t);r?e.type!==0&&r.type===3?this.F_=this.F_.insert(t,e):e.type===3&&r.type!==1?this.F_=this.F_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.F_=this.F_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.F_=this.F_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.F_=this.F_.remove(t):e.type===1&&r.type===2?this.F_=this.F_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.F_=this.F_.insert(t,{type:2,doc:e.doc}):R():this.F_=this.F_.insert(t,e)}M_(){const e=[];return this.F_.inorderTraversal((t,r)=>{e.push(r)}),e}}class wr{constructor(e,t,r,i,s,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new wr(e,t,lr.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&cs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Ib{constructor(){this.x_=void 0,this.listeners=[]}}class vb{constructor(){this.queries=new on(e=>wp(e),cs),this.onlineState="Unknown",this.O_=new Set}}async function sl(n,e){const t=T(n),r=e.query;let i=!1,s=t.queries.get(r);if(s||(i=!0,s=new Ib),i)try{s.x_=await t.onListen(r)}catch(o){const a=Br(o,`Initialization of query '${Ec(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,s),s.listeners.push(e),e.N_(t.onlineState),s.x_&&e.B_(s.x_)&&al(t)}async function ol(n,e){const t=T(n),r=e.query;let i=!1;const s=t.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return t.queries.delete(r),t.onUnlisten(r)}function Eb(n,e){const t=T(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.listeners)a.B_(i)&&(r=!0);o.x_=i}}r&&al(t)}function wb(n,e,t){const r=T(n),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(t);r.queries.delete(e)}function al(n){n.O_.forEach(e=>{e.next()})}class cl{constructor(e,t,r){this.query=e,this.L_=t,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=r||{}}B_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new wr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),t=!0):this.K_(e,this.onlineState)&&(this.U_(e),t=!0),this.q_=e,t}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let t=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),t=!0),t}K_(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.W_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Q_(e){if(e.docChanges.length>0)return!0;const t=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}U_(e){e=wr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}/**
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
 */class Tb{constructor(e,t){this.G_=e,this.byteLength=t}z_(){return"metadata"in this.G_}}/**
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
 */class pd{constructor(e){this.serializer=e}os(e){return lt(this.serializer,e)}_s(e){return e.metadata.exists?Kp(this.serializer,e.document,!1):W.newNoDocument(this.os(e.metadata.name),this.us(e.metadata.readTime))}us(e){return ie(e)}}class Ab{constructor(e,t,r){this.j_=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=bg(e)}H_(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.G_.namedQuery)this.queries.push(e.G_.namedQuery);else if(e.G_.documentMetadata){this.documents.push({metadata:e.G_.documentMetadata}),e.G_.documentMetadata.exists||++t;const r=F.fromString(e.G_.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.G_.document&&(this.documents[this.documents.length-1].document=e.G_.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}J_(e){const t=new Map,r=new pd(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.os(i.metadata.name);for(const o of i.metadata.queries){const a=(t.get(o)||N()).add(s);t.set(o,a)}}return t}async complete(){const e=await ZR(this.localStore,new pd(this.serializer),this.documents,this.j_.id),t=this.J_(this.documents);for(const r of this.queries)await eb(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Y_:this.collectionGroups,Z_:e}}}function bg(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
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
 */class Pg{constructor(e){this.key=e}}class Sg{constructor(e){this.key=e}}class Cg{constructor(e,t){this.query=e,this.X_=t,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=N(),this.mutatedKeys=N(),this.na=Ap(e),this.ra=new lr(this.na)}get ia(){return this.X_}sa(e,t){const r=t?t.oa:new md,i=t?t.ra:this.ra;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const d=i.get(l),f=us(this.query,h)?h:null,I=!!d&&this.mutatedKeys.has(d.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let E=!1;d&&f?d.data.isEqual(f.data)?I!==v&&(r.track({type:3,doc:f}),E=!0):this._a(d,f)||(r.track({type:2,doc:f}),E=!0,(c&&this.na(f,c)>0||u&&this.na(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),E=!0):d&&!f&&(r.track({type:1,doc:d}),E=!0,(c||u)&&(a=!0)),E&&(f?(o=o.add(f),s=v?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{ra:o,oa:r,zi:a,mutatedKeys:s}}_a(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){const i=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const s=e.oa.M_();s.sort((u,l)=>function(d,f){const I=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return R()}};return I(d)-I(f)}(u.type,l.type)||this.na(u.doc,l.doc)),this.aa(r);const o=t?this.ua():[],a=this.ta.size===0&&this.current?1:0,c=a!==this.ea;return this.ea=a,s.length!==0||c?{snapshot:new wr(this.query,e.ra,i,s,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new md,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach(t=>this.X_=this.X_.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.X_=this.X_.delete(t)),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=N(),this.ra.forEach(r=>{this.la(r.key)&&(this.ta=this.ta.add(r.key))});const t=[];return e.forEach(r=>{this.ta.has(r)||t.push(new Sg(r))}),this.ta.forEach(r=>{e.has(r)||t.push(new Pg(r))}),t}ha(e){this.X_=e.ss,this.ta=N();const t=this.sa(e.documents);return this.applyChanges(t,!0)}Pa(){return wr.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class Rb{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class bb{constructor(e){this.key=e,this.Ia=!1}}class Pb{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new on(a=>wp(a),cs),this.da=new Map,this.Aa=new Set,this.Ra=new z(w.comparator),this.Va=new Map,this.ma=new Qu,this.fa={},this.ga=new Map,this.pa=Ln.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function Sb(n,e){const t=fl(n);let r,i;const s=t.Ea.get(e);if(s)r=s.targetId,t.sharedClientState.addLocalQueryTarget(r),i=s.view.Pa();else{const o=await vr(t.localStore,qe(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await ul(t,e,r,a==="current",o.resumeToken),t.isPrimaryClient&&ra(t.remoteStore,o)}return i}async function ul(n,e,t,r,i){n.wa=(h,d,f)=>async function(v,E,C,x){let D=E.view.sa(C);D.zi&&(D=await go(v.localStore,E.query,!1).then(({documents:U})=>E.view.sa(U,D)));const q=x&&x.targetChanges.get(E.targetId),$=E.view.applyChanges(D,v.isPrimaryClient,q);return kc(v,E.targetId,$.ca),$.snapshot}(n,h,d,f);const s=await go(n.localStore,e,!0),o=new Cg(e,s.ss),a=o.sa(s.documents),c=ds.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,c);kc(n,t,u.ca);const l=new Rb(e,t,o);return n.Ea.set(e,l),n.da.has(t)?n.da.get(t).push(e):n.da.set(t,[e]),u.snapshot}async function Cb(n,e){const t=T(n),r=t.Ea.get(e),i=t.da.get(r.targetId);if(i.length>1)return t.da.set(r.targetId,i.filter(s=>!cs(s,e))),void t.Ea.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await Er(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),qi(t.remoteStore,r.targetId),Tr(t,r.targetId)}).catch(rn)):(Tr(t,r.targetId),await Er(t.localStore,r.targetId,!0))}async function kb(n,e,t){const r=ml(n);try{const i=await function(o,a){const c=T(o),u=Y.now(),l=a.reduce((f,I)=>f.add(I.key),N());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let I=Be(),v=N();return c.Xi.getEntries(f,l).next(E=>{I=E,I.forEach((C,x)=>{x.isValidDocument()||(v=v.add(C))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,I)).next(E=>{h=E;const C=[];for(const x of a){const D=sR(x,h.get(x.key).overlayedDocument);D!=null&&C.push(new Pt(x.key,D,fp(D.value.mapValue),Q.exists(!0)))}return c.mutationQueue.addMutationBatch(f,u,C,a)}).next(E=>{d=E;const C=E.applyToLocalDocumentSet(h,v);return c.documentOverlayCache.saveOverlays(f,E.batchId,C)})}).then(()=>({batchId:d.batchId,changes:bp(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let u=o.fa[o.currentUser.toKey()];u||(u=new z(V)),u=u.insert(a,c),o.fa[o.currentUser.toKey()]=u}(r,i.batchId,t),await St(r,i.changes),await Fr(r.remoteStore)}catch(i){const s=Br(i,"Failed to persist write");t.reject(s)}}async function kg(n,e){const t=T(n);try{const r=await JR(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Va.get(s);o&&(P(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ia=!0:i.modifiedDocuments.size>0?P(o.Ia):i.removedDocuments.size>0&&(P(o.Ia),o.Ia=!1))}),await St(t,r,e)}catch(r){await rn(r)}}function gd(n,e,t){const r=T(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Ea.forEach((s,o)=>{const a=o.view.N_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=T(o);c.onlineState=a;let u=!1;c.queries.forEach((l,h)=>{for(const d of h.listeners)d.N_(a)&&(u=!0)}),u&&al(c)}(r.eventManager,e),i.length&&r.Ta.r_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Db(n,e,t){const r=T(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Va.get(e),s=i&&i.key;if(s){let o=new z(w.comparator);o=o.insert(s,W.newNoDocument(s,b.min()));const a=N().add(s),c=new hs(b.min(),new Map,new z(V),o,a);await kg(r,c),r.Ra=r.Ra.remove(s),r.Va.delete(e),dl(r)}else await Er(r.localStore,e,!1).then(()=>Tr(r,e,t)).catch(rn)}async function Vb(n,e){const t=T(n),r=e.batch.batchId;try{const i=await YR(t.localStore,e);hl(t,r,null),ll(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await St(t,i)}catch(i){await rn(i)}}async function Nb(n,e,t){const r=T(n);try{const i=await function(o,a){const c=T(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return c.mutationQueue.lookupMutationBatch(u,a).next(h=>(P(h!==null),l=h.keys(),c.mutationQueue.removeMutationBatch(u,h))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,l,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>c.localDocuments.getDocuments(u,l))})}(r.localStore,e);hl(r,e,t),ll(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await St(r,i)}catch(i){await rn(i)}}async function xb(n,e){const t=T(n);an(t.remoteStore)||_("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=T(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",c=>a.mutationQueue.getHighestUnacknowledgedBatchId(c))}(t.localStore);if(r===-1)return void e.resolve();const i=t.ga.get(r)||[];i.push(e),t.ga.set(r,i)}catch(r){const i=Br(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function ll(n,e){(n.ga.get(e)||[]).forEach(t=>{t.resolve()}),n.ga.delete(e)}function hl(n,e,t){const r=T(n);let i=r.fa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.fa[r.currentUser.toKey()]=i}}function Tr(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.da.get(e))n.Ea.delete(r),t&&n.Ta.Sa(r,t);n.da.delete(e),n.isPrimaryClient&&n.ma.Ar(e).forEach(r=>{n.ma.containsKey(r)||Dg(n,r)})}function Dg(n,e){n.Aa.delete(e.path.canonicalString());const t=n.Ra.get(e);t!==null&&(qi(n.remoteStore,t),n.Ra=n.Ra.remove(e),n.Va.delete(t),dl(n))}function kc(n,e,t){for(const r of t)r instanceof Pg?(n.ma.addReference(r.key,e),Ob(n,r)):r instanceof Sg?(_("SyncEngine","Document no longer in limbo: "+r.key),n.ma.removeReference(r.key,e),n.ma.containsKey(r.key)||Dg(n,r.key)):R()}function Ob(n,e){const t=e.key,r=t.path.canonicalString();n.Ra.get(t)||n.Aa.has(r)||(_("SyncEngine","New document in limbo: "+t),n.Aa.add(r),dl(n))}function dl(n){for(;n.Aa.size>0&&n.Ra.size<n.maxConcurrentLimboResolutions;){const e=n.Aa.values().next().value;n.Aa.delete(e);const t=new w(F.fromString(e)),r=n.pa.next();n.Va.set(r,new bb(t)),n.Ra=n.Ra.insert(t,r),ra(n.remoteStore,new _t(qe(xr(t.path)),r,"TargetPurposeLimboResolution",Fe.ae))}}async function St(n,e,t){const r=T(n),i=[],s=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach((a,c)=>{o.push(r.wa(c,e,t).then(u=>{if((u||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=Xu.qi(c.targetId,u);s.push(l)}}))}),await Promise.all(o),r.Ta.r_(i),await async function(c,u){const l=T(c);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>m.forEach(u,d=>m.forEach(d.Li,f=>l.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>m.forEach(d.ki,f=>l.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!sn(h))throw h;_("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const f=l.Ji.get(d),I=f.snapshotVersion,v=f.withLastLimboFreeSnapshotVersion(I);l.Ji=l.Ji.insert(d,v)}}}(r.localStore,s))}async function Mb(n,e){const t=T(n);if(!t.currentUser.isEqual(e)){_("SyncEngine","User change. New user:",e.toKey());const r=await dg(t.localStore,e);t.currentUser=e,function(s,o){s.ga.forEach(a=>{a.forEach(c=>{c.reject(new g(p.CANCELLED,o))})}),s.ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await St(t,r.ts)}}function Lb(n,e){const t=T(n),r=t.Va.get(e);if(r&&r.Ia)return N().add(r.key);{let i=N();const s=t.da.get(e);if(!s)return i;for(const o of s){const a=t.Ea.get(o);i=i.unionWith(a.view.ia)}return i}}async function Fb(n,e){const t=T(n),r=await go(t.localStore,e.query,!0),i=e.view.ha(r);return t.isPrimaryClient&&kc(t,e.targetId,i.ca),i}async function Ub(n,e){const t=T(n);return gg(t.localStore,e).then(r=>St(t,r))}async function Bb(n,e,t,r){const i=T(n),s=await function(a,c){const u=T(a),l=T(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",h=>l.Dn(h,c).next(d=>d?u.localDocuments.getDocuments(h,d):m.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await Fr(i.remoteStore):t==="acknowledged"||t==="rejected"?(hl(i,e,r||null),ll(i,e),function(a,c){T(T(a).mutationQueue).Cn(c)}(i.localStore,e)):R(),await St(i,s)):_("SyncEngine","Cannot apply mutation batch with id: "+e)}async function qb(n,e){const t=T(n);if(fl(t),ml(t),e===!0&&t.ya!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=await _d(t,r.toArray());t.ya=!0,await Cc(t.remoteStore,!0);for(const s of i)ra(t.remoteStore,s)}else if(e===!1&&t.ya!==!1){const r=[];let i=Promise.resolve();t.da.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Tr(t,o),Er(t.localStore,o,!0))),qi(t.remoteStore,o)}),await i,await _d(t,r),function(o){const a=T(o);a.Va.forEach((c,u)=>{qi(a.remoteStore,u)}),a.ma.Rr(),a.Va=new Map,a.Ra=new z(w.comparator)}(t),t.ya=!1,await Cc(t.remoteStore,!1)}}async function _d(n,e,t){const r=T(n),i=[],s=[];for(const o of e){let a;const c=r.da.get(o);if(c&&c.length!==0){a=await vr(r.localStore,qe(c[0]));for(const u of c){const l=r.Ea.get(u),h=await Fb(r,l);h.snapshot&&s.push(h.snapshot)}}else{const u=await pg(r.localStore,o);a=await vr(r.localStore,u),await ul(r,Vg(u),o,!1,a.resumeToken)}i.push(a)}return r.Ta.r_(s),i}function Vg(n){return Ep(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function $b(n){return function(t){return T(T(t).persistence).Ni()}(T(n).localStore)}async function Gb(n,e,t,r){const i=T(n);if(i.ya)return void _("SyncEngine","Ignoring unexpected query state notification.");const s=i.da.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await gg(i.localStore,Tp(s[0])),a=hs.createSynthesizedRemoteEventForCurrentChange(e,t==="current",le.EMPTY_BYTE_STRING);await St(i,o,a);break}case"rejected":await Er(i.localStore,e,!0),Tr(i,e,r);break;default:R()}}async function jb(n,e,t){const r=fl(n);if(r.ya){for(const i of e){if(r.da.has(i)){_("SyncEngine","Adding an already active target "+i);continue}const s=await pg(r.localStore,i),o=await vr(r.localStore,s);await ul(r,Vg(s),o.targetId,!1,o.resumeToken),ra(r.remoteStore,o)}for(const i of t)r.da.has(i)&&await Er(r.localStore,i,!1).then(()=>{qi(r.remoteStore,i),Tr(r,i)}).catch(rn)}}function fl(n){const e=T(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=kg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Lb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Db.bind(null,e),e.Ta.r_=Eb.bind(null,e.eventManager),e.Ta.Sa=wb.bind(null,e.eventManager),e}function ml(n){const e=T(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Vb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Nb.bind(null,e),e}function zb(n,e,t){const r=T(n);(async function(s,o,a){try{const c=await o.getMetadata();if(await function(f,I){const v=T(f),E=ie(I.createTime);return v.persistence.runTransaction("hasNewerBundle","readonly",C=>v.Qr.getBundleMetadata(C,I.id)).then(C=>!!C&&C.createTime.compareTo(E)>=0)}(s.localStore,c))return await o.close(),a._completeWith(function(f){return{taskState:"Success",documentsLoaded:f.totalDocuments,bytesLoaded:f.totalBytes,totalDocuments:f.totalDocuments,totalBytes:f.totalBytes}}(c)),Promise.resolve(new Set);a._updateProgress(bg(c));const u=new Ab(c,s.localStore,o.serializer);let l=await o.ba();for(;l;){const d=await u.H_(l);d&&a._updateProgress(d),l=await o.ba()}const h=await u.complete();return await St(s,h.Z_,void 0),await function(f,I){const v=T(f);return v.persistence.runTransaction("Save bundle","readwrite",E=>v.Qr.saveBundleMetadata(E,I))}(s.localStore,c),a._completeWith(h.progress),Promise.resolve(h.Y_)}catch(c){return Xe("SyncEngine",`Loading bundle failed with ${c}`),a._failWith(c),Promise.resolve(new Set)}})(r,e,t).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Dc{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=fs(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return hg(this.persistence,new lg,e.initialUser,this.serializer)}createPersistence(e){return new ug(na.zr,this.serializer)}createSharedClientState(e){return new yg}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ng extends Dc{constructor(e,t,r){super(),this.Da=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Da.initialize(this,e),await ml(this.Da.syncEngine),await Fr(this.Da.remoteStore),await this.persistence.Vi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return hg(this.persistence,new lg,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new xR(r,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const r=new _A(t,this.persistence);return new gA(e.asyncQueue,r)}createPersistence(e){const t=Ju(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Le.withCacheSize(this.cacheSizeBytes):Le.DEFAULT;return new Yu(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,Ig(),js(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new yg}}class Kb extends Ng{constructor(e,t){super(e,t,!1),this.Da=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Da.syncEngine;this.sharedClientState instanceof qa&&(this.sharedClientState.syncEngine={Gs:Bb.bind(null,t),zs:Gb.bind(null,t),js:jb.bind(null,t),Ni:$b.bind(null,t),Ws:Ub.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Vi(async r=>{await qb(this.Da.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const t=Ig();if(!qa.v(t))throw new g(p.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Ju(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new qa(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class pl{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>gd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Mb.bind(null,this.syncEngine),await Cc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new vb}()}createDatastore(e){const t=fs(e.databaseInfo.databaseId),r=function(s){return new ib(s)}(e.databaseInfo);return function(s,o,a,c){return new ab(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,a){return new ub(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>gd(this.syncEngine,t,0),function(){return dd.v()?new dd:new tb}())}createSyncEngine(e,t){return function(i,s,o,a,c,u,l){const h=new Pb(i,s,o,a,c,u);return l&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(t){const r=T(t);_("RemoteStore","RemoteStore shutting down."),r.y_.add(5),await Lr(r),r.S_.shutdown(),r.b_.set("Unknown")}(this.remoteStore)}}/**
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
 */function yd(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class ia{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):ne("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class Wb{constructor(e,t){this.Fa=e,this.serializer=t,this.metadata=new me,this.buffer=new Uint8Array,this.Ma=function(){return new TextDecoder("utf-8")}(),this.xa().then(r=>{r&&r.z_()?this.metadata.resolve(r.G_.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.G_)}`))},r=>this.metadata.reject(r))}close(){return this.Fa.cancel()}async getMetadata(){return this.metadata.promise}async ba(){return await this.getMetadata(),this.xa()}async xa(){const e=await this.Oa();if(e===null)return null;const t=this.Ma.decode(e),r=Number(t);isNaN(r)&&this.Na(`length string (${t}) is not valid number`);const i=await this.Ba(r);return new Tb(JSON.parse(i),e.length+r)}La(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Oa(){for(;this.La()<0&&!await this.ka(););if(this.buffer.length===0)return null;const e=this.La();e<0&&this.Na("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Ba(e){for(;this.buffer.length<e;)await this.ka()&&this.Na("Reached the end of bundle when more is expected.");const t=this.Ma.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Na(e){throw this.Fa.cancel(),new Error(`Invalid bundle format: ${e}`)}async ka(){const e=await this.Fa.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class Hb{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new g(p.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(i,s){const o=T(i),a=Ui(o.serializer)+"/documents",c={documents:s.map(d=>Fi(o.serializer,d))},u=await o.yo("BatchGetDocuments",a,c,s.length),l=new Map;u.forEach(d=>{const f=mR(o.serializer,d);l.set(f.key.toString(),f)});const h=[];return s.forEach(d=>{const f=l.get(d.toString());P(!!f),h.push(f)}),h}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Mr(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const i=w.fromPath(r);this.mutations.push(new Uu(i,this.precondition(i)))}),await async function(r,i){const s=T(r),o=Ui(s.serializer)+"/documents",a={writes:i.map(c=>Bi(s.serializer,c))};await s.Vo("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw R();t=b.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new g(p.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(b.min())?Q.exists(!1):Q.updateTime(t):Q.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(b.min()))throw new g(p.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Q.updateTime(t)}return Q.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class Qb{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this.qa=r.maxAttempts,this.Ko=new el(this.asyncQueue,"transaction_retry")}run(){this.qa-=1,this.Qa()}Qa(){this.Ko.xo(async()=>{const e=new Hb(this.datastore),t=this.Ka(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.$a(i)}))}).catch(r=>{this.$a(r)})})}Ka(e){try{const t=this.updateFunction(e);return!os(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}$a(e){this.qa>0&&this.Ua(e)?(this.qa-=1,this.asyncQueue.enqueueAndForget(()=>(this.Qa(),Promise.resolve()))):this.deferred.reject(e)}Ua(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!Lp(t)}return!1}}/**
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
 */class Yb{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=fe.UNAUTHENTICATED,this.clientId=Xm.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{_("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(_("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new g(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new me;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Br(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function zs(n,e){n.asyncQueue.verifyOperationInProgress(),_("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await dg(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Vc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await gl(n);_("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(i=>fd(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>fd(e.remoteStore,s)),n._onlineComponents=e}function xg(n){return n.name==="FirebaseError"?n.code===p.FAILED_PRECONDITION||n.code===p.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function gl(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){_("FirestoreClient","Using user provided OfflineComponentProvider");try{await zs(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!xg(t))throw t;Xe("Error using user provided cache. Falling back to memory cache: "+t),await zs(n,new Dc)}}else _("FirestoreClient","Using default OfflineComponentProvider"),await zs(n,new Dc);return n._offlineComponents}async function sa(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(_("FirestoreClient","Using user provided OnlineComponentProvider"),await Vc(n,n._uninitializedComponentsProvider._online)):(_("FirestoreClient","Using default OnlineComponentProvider"),await Vc(n,new pl))),n._onlineComponents}function Og(n){return gl(n).then(e=>e.persistence)}function _l(n){return gl(n).then(e=>e.localStore)}function Mg(n){return sa(n).then(e=>e.remoteStore)}function yl(n){return sa(n).then(e=>e.syncEngine)}function Jb(n){return sa(n).then(e=>e.datastore)}async function Ar(n){const e=await sa(n),t=e.eventManager;return t.onListen=Sb.bind(null,e.syncEngine),t.onUnlisten=Cb.bind(null,e.syncEngine),t}function Xb(n){return n.asyncQueue.enqueue(async()=>{const e=await Og(n),t=await Mg(n);return e.setNetworkEnabled(!0),function(i){const s=T(i);return s.y_.delete(0),ms(s)}(t)})}function Zb(n){return n.asyncQueue.enqueue(async()=>{const e=await Og(n),t=await Mg(n);return e.setNetworkEnabled(!1),async function(i){const s=T(i);s.y_.add(0),await Lr(s),s.b_.set("Offline")}(t)})}function eP(n,e){const t=new me;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(u,l){const h=T(u);return h.persistence.runTransaction("read document","readonly",d=>h.localDocuments.getDocument(d,l))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new g(p.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const c=Br(a,`Failed to get document '${s} from cache`);o.reject(c)}}(await _l(n),e,t)),t.promise}function Lg(n,e,t={}){const r=new me;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const l=new ia({next:d=>{o.enqueueAndForget(()=>ol(s,h));const f=d.docs.has(a);!f&&d.fromCache?u.reject(new g(p.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&c&&c.source==="server"?u.reject(new g(p.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new cl(xr(a.path),l,{includeMetadataChanges:!0,W_:!0});return sl(s,h)}(await Ar(n),n.asyncQueue,e,t,r)),r.promise}function tP(n,e){const t=new me;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await go(i,s,!0),c=new Cg(s,a.ss),u=c.sa(a.documents),l=c.applyChanges(u,!1);o.resolve(l.snapshot)}catch(a){const c=Br(a,`Failed to execute query '${s} against cache`);o.reject(c)}}(await _l(n),e,t)),t.promise}function Fg(n,e,t={}){const r=new me;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const l=new ia({next:d=>{o.enqueueAndForget(()=>ol(s,h)),d.fromCache&&c.source==="server"?u.reject(new g(p.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new cl(a,l,{includeMetadataChanges:!0,W_:!0});return sl(s,h)}(await Ar(n),n.asyncQueue,e,t,r)),r.promise}function nP(n,e){const t=new ia(e);return n.asyncQueue.enqueueAndForget(async()=>function(i,s){T(i).O_.add(s),s.next()}(await Ar(n),t)),()=>{t.Ca(),n.asyncQueue.enqueueAndForget(async()=>function(i,s){T(i).O_.delete(s)}(await Ar(n),t))}}function rP(n,e,t,r){const i=function(o,a){let c;return c=typeof o=="string"?Up().encode(o):o,function(l,h){return new Wb(l,h)}(function(l,h){if(l instanceof Uint8Array)return yd(l,h);if(l instanceof ArrayBuffer)return yd(new Uint8Array(l),h);if(l instanceof ReadableStream)return l.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(c),a)}(t,fs(e));n.asyncQueue.enqueueAndForget(async()=>{zb(await yl(n),i,r)})}function iP(n,e){return n.asyncQueue.enqueue(async()=>function(r,i){const s=T(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.Qr.getNamedQuery(o,i))}(await _l(n),e))}/**
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
 */function Ug(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Id=new Map;/**
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
 */function Il(n,e,t){if(!t)throw new g(p.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Bg(n,e,t,r){if(e===!0&&r===!0)throw new g(p.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function vd(n){if(!w.isDocumentKey(n))throw new g(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ed(n){if(w.isDocumentKey(n))throw new g(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function oa(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":R()}function B(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new g(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=oa(n);throw new g(p.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function qg(n,e){if(e<=0)throw new g(p.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */class wd{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new g(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new g(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Bg("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ug((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new g(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new g(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new g(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ps{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new g(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new g(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wd(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new iA;switch(r.type){case"firstParty":return new cA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new g(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Id.get(t);r&&(_("ComponentProvider","Removing Datastore"),Id.delete(t),r.terminate())}(this),Promise.resolve()}}function sP(n,e,t,r={}){var i;const s=(n=B(n,ps))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Xe("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=fe.MOCK_USER;else{a=b_(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new g(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new fe(u)}n._authCredentials=new sA(new Jm(a,c))}}/**
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
 */let Oe=class $g{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new $g(this.firestore,e,this._query)}},J=class Gg{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ut(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Gg(this.firestore,e,this._key)}},Ut=class jg extends Oe{constructor(e,t,r){super(e,t,xr(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new J(this.firestore,null,new w(e))}withConverter(e){return new jg(this.firestore,e,this._path)}};function zg(n,e,...t){if(n=S(n),Il("collection","path",e),n instanceof ps){const r=F.fromString(e,...t);return Ed(r),new Ut(n,null,r)}{if(!(n instanceof J||n instanceof Ut))throw new g(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(F.fromString(e,...t));return Ed(r),new Ut(n.firestore,null,r)}}function oP(n,e){if(n=B(n,ps),Il("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new g(p.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Oe(n,null,function(r){return new bt(F.emptyPath(),r)}(e))}function vo(n,e,...t){if(n=S(n),arguments.length===1&&(e=Xm.V()),Il("doc","path",e),n instanceof ps){const r=F.fromString(e,...t);return vd(r),new J(n,null,new w(r))}{if(!(n instanceof J||n instanceof Ut))throw new g(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(F.fromString(e,...t));return vd(r),new J(n.firestore,n instanceof Ut?n.converter:null,new w(r))}}function Kg(n,e){return n=S(n),e=S(e),(n instanceof J||n instanceof Ut)&&(e instanceof J||e instanceof Ut)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function Wg(n,e){return n=S(n),e=S(e),n instanceof Oe&&e instanceof Oe&&n.firestore===e.firestore&&cs(n._query,e._query)&&n.converter===e.converter}/**
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
 */class aP{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new el(this,"async_queue_retry"),this.Xa=()=>{const t=js();t&&_("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Ko.No()};const e=js();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const t=js();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise(()=>{});const t=new me;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ga.push(e),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!sn(e))throw e;_("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(e){const t=this.Wa.then(()=>(this.Ja=!0,e().catch(r=>{this.Ha=r,this.Ja=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw ne("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ja=!1,r))));return this.Wa=t,t}enqueueAfterDelay(e,t,r){this.eu(),this.Za.indexOf(e)>-1&&(t=0);const i=il.createAndSchedule(this,e,t,r,s=>this.ru(s));return this.ja.push(i),i}eu(){this.Ha&&R()}verifyOperationInProgress(){}async iu(){let e;do e=this.Wa,await e;while(e!==this.Wa)}su(e){for(const t of this.ja)if(t.timerId===e)return!0;return!1}ou(e){return this.iu().then(()=>{this.ja.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.ja)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.iu()})}_u(e){this.Za.push(e)}ru(e){const t=this.ja.indexOf(e);this.ja.splice(t,1)}}function Nc(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class cP{constructor(){this._progressObserver={},this._taskCompletionResolver=new me,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const uP=-1;let te=class extends ps{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=function(){return new aP}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Hg(this),this._firestoreClient.terminate()}};function ye(n){return n._firestoreClient||Hg(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Hg(n){var e,t,r;const i=n._freezeSettings(),s=function(a,c,u,l){return new FA(a,c,u,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Ug(l.experimentalLongPollingOptions),l.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new Yb(n._authCredentials,n._appCheckCredentials,n._queue,s),!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function lP(n,e){Yg(n=B(n,te));const t=ye(n);if(t._uninitializedComponentsProvider)throw new g(p.FAILED_PRECONDITION,"SDK cache is already specified.");Xe("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=n._freezeSettings(),i=new pl;return Qg(t,i,new Ng(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function hP(n){Yg(n=B(n,te));const e=ye(n);if(e._uninitializedComponentsProvider)throw new g(p.FAILED_PRECONDITION,"SDK cache is already specified.");Xe("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings(),r=new pl;return Qg(e,r,new Kb(r,t.cacheSizeBytes))}function Qg(n,e,t){const r=new me;return n.asyncQueue.enqueue(async()=>{try{await zs(n,t),await Vc(n,e),r.resolve()}catch(i){const s=i;if(!xg(s))throw s;Xe("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function dP(n){if(n._initialized&&!n._terminated)throw new g(p.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new me;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!Qe.v())return Promise.resolve();const i=r+"main";await Qe.delete(i)}(Ju(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function fP(n){return function(t){const r=new me;return t.asyncQueue.enqueueAndForget(async()=>xb(await yl(t),r)),r.promise}(ye(n=B(n,te)))}function mP(n){return Xb(ye(n=B(n,te)))}function pP(n){return Zb(ye(n=B(n,te)))}function gP(n,e){const t=ye(n=B(n,te)),r=new cP;return rP(t,n._databaseId,e,r),r}function _P(n,e){return iP(ye(n=B(n,te)),e).then(t=>t?new Oe(n,null,t.query):null)}function Yg(n){if(n._initialized||n._terminated)throw new g(p.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class mt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new mt(le.fromBase64String(e))}catch(t){throw new g(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new mt(le.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */let Jt=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new g(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new re(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
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
 */let Gn=class{constructor(e){this._methodName=e}};/**
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
 */class aa{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new g(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new g(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return V(this._lat,e._lat)||V(this._long,e._long)}}/**
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
 */const yP=/^__.*__$/;class IP{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Pt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Or(e,this.data,t,this.fieldTransforms)}}class Jg{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Pt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Xg(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw R()}}class ca{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.au(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new ca(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.cu({path:r,hu:!1});return i.Pu(e),i}Iu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.cu({path:r,hu:!1});return i.au(),i}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return Eo(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(e.length===0)throw this.Eu("Document fields must not be empty");if(Xg(this.uu)&&yP.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class vP{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||fs(e)}Ru(e,t,r,i=!1){return new ca({uu:e,methodName:t,Au:r,path:re.emptyPath(),hu:!1,du:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jn(n){const e=n._freezeSettings(),t=fs(n._databaseId);return new vP(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ua(n,e,t,r,i,s={}){const o=n.Ru(s.merge||s.mergeFields?2:0,e,t,i);Tl("Data must be an object, but it was:",o,r);const a=t_(r,o);let c,u;if(s.merge)c=new Ue(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=xc(e,h,t);if(!o.contains(d))throw new g(p.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);r_(l,d)||l.push(d)}c=new Ue(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new IP(new we(a),c,u)}class gs extends Gn{_toFieldTransform(e){if(e.uu!==2)throw e.uu===1?e.Eu(`${this._methodName}() can only appear at the top level of your update data`):e.Eu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof gs}}function Zg(n,e,t){return new ca({uu:3,Au:e.settings.Au,methodName:n._methodName,hu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class vl extends Gn{_toFieldTransform(e){return new ls(e.path,new _r)}isEqual(e){return e instanceof vl}}class EP extends Gn{constructor(e,t){super(e),this.Vu=t}_toFieldTransform(e){const t=Zg(this,e,!0),r=this.Vu.map(s=>zn(s,t)),i=new Nn(r);return new ls(e.path,i)}isEqual(e){return this===e}}class wP extends Gn{constructor(e,t){super(e),this.Vu=t}_toFieldTransform(e){const t=Zg(this,e,!0),r=this.Vu.map(s=>zn(s,t)),i=new xn(r);return new ls(e.path,i)}isEqual(e){return this===e}}class TP extends Gn{constructor(e,t){super(e),this.mu=t}_toFieldTransform(e){const t=new yr(e.serializer,kp(e.serializer,this.mu));return new ls(e.path,t)}isEqual(e){return this===e}}function El(n,e,t,r){const i=n.Ru(1,e,t);Tl("Data must be an object, but it was:",i,r);const s=[],o=we.empty();$n(r,(c,u)=>{const l=Al(e,c,t);u=S(u);const h=i.Iu(l);if(u instanceof gs)s.push(l);else{const d=zn(u,h);d!=null&&(s.push(l),o.set(l,d))}});const a=new Ue(s);return new Jg(o,a,i.fieldTransforms)}function wl(n,e,t,r,i,s){const o=n.Ru(1,e,t),a=[xc(e,r,t)],c=[i];if(s.length%2!=0)throw new g(p.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(xc(e,s[d])),c.push(s[d+1]);const u=[],l=we.empty();for(let d=a.length-1;d>=0;--d)if(!r_(u,a[d])){const f=a[d];let I=c[d];I=S(I);const v=o.Iu(f);if(I instanceof gs)u.push(f);else{const E=zn(I,v);E!=null&&(u.push(f),l.set(f,E))}}const h=new Ue(u);return new Jg(l,h,o.fieldTransforms)}function e_(n,e,t,r=!1){return zn(t,n.Ru(r?4:3,e))}function zn(n,e){if(n_(n=S(n)))return Tl("Unsupported field value:",e,n),t_(n,e);if(n instanceof Gn)return function(r,i){if(!Xg(i.uu))throw i.Eu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Eu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.hu&&e.uu!==4)throw e.Eu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=zn(a,i.Tu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=S(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return kp(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Y.fromDate(r);return{timestampValue:Ir(i.serializer,s)}}if(r instanceof Y){const s=new Y(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ir(i.serializer,s)}}if(r instanceof aa)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof mt)return{bytesValue:$p(i.serializer,r._byteString)};if(r instanceof J){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:zu(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Eu(`Unsupported field value: ${oa(r)}`)}(n,e)}function t_(n,e){const t={};return lp(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$n(n,(r,i)=>{const s=zn(i,e.lu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function n_(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Y||n instanceof aa||n instanceof mt||n instanceof J||n instanceof Gn)}function Tl(n,e,t){if(!n_(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=oa(t);throw r==="an object"?e.Eu(n+" a custom object"):e.Eu(n+" "+r)}}function xc(n,e,t){if((e=S(e))instanceof Jt)return e._internalPath;if(typeof e=="string")return Al(n,e);throw Eo("Field path arguments must be of type string or ",n,!1,void 0,t)}const AP=new RegExp("[~\\*/\\[\\]]");function Al(n,e,t){if(e.search(AP)>=0)throw Eo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Jt(...e.split("."))._internalPath}catch{throw Eo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Eo(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new g(p.INVALID_ARGUMENT,a+n+c)}function r_(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class $i{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new J(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new RP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(la("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class RP extends $i{data(){return super.data()}}function la(n,e){return typeof e=="string"?Al(n,e):e instanceof Jt?e._internalPath:e._delegate._internalPath}/**
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
 */function i_(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new g(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Rl{}class _s extends Rl{}function Nt(n,e,...t){let r=[];e instanceof Rl&&r.push(e),r=r.concat(t),function(s){const o=s.filter(c=>c instanceof bl).length,a=s.filter(c=>c instanceof ha).length;if(o>1||o>0&&a>0)throw new g(p.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class ha extends _s{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ha(e,t,r)}_apply(e){const t=this._parse(e);return o_(e._query,t),new Oe(e.firestore,e.converter,vc(e._query,t))}_parse(e){const t=jn(e.firestore);return function(s,o,a,c,u,l,h){let d;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new g(p.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Ad(h,l);const f=[];for(const I of h)f.push(Td(c,s,I));d={arrayValue:{values:f}}}else d=Td(c,s,h)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Ad(h,l),d=e_(a,o,h,l==="in"||l==="not-in");return O.create(u,l,d)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function bP(n,e,t){const r=e,i=la("where",n);return ha._create(i,r,t)}class bl extends Rl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new bl(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:G.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const c of a)o_(o,c),o=vc(o,c)}(e._query,t),new Oe(e.firestore,e.converter,vc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Pl extends _s{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Pl(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new g(p.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new g(p.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new ur(s,o);return function(u,l){if(Mu(u)===null){const h=Jo(u);h!==null&&a_(u,h,l.field)}}(i,a),a}(e._query,this._field,this._direction);return new Oe(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new bt(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function PP(n,e="asc"){const t=e,r=la("orderBy",n);return Pl._create(r,t)}class da extends _s{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new da(e,t,r)}_apply(e){return new Oe(e.firestore,e.converter,ho(e._query,this._limit,this._limitType))}}function SP(n){return qg("limit",n),da._create("limit",n,"F")}function CP(n){return qg("limitToLast",n),da._create("limitToLast",n,"L")}class fa extends _s{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new fa(e,t,r)}_apply(e){const t=s_(e,this.type,this._docOrFields,this._inclusive);return new Oe(e.firestore,e.converter,function(i,s){return new bt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,t))}}function kP(...n){return fa._create("startAt",n,!0)}function DP(...n){return fa._create("startAfter",n,!1)}class ma extends _s{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new ma(e,t,r)}_apply(e){const t=s_(e,this.type,this._docOrFields,this._inclusive);return new Oe(e.firestore,e.converter,function(i,s){return new bt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,t))}}function VP(...n){return ma._create("endBefore",n,!1)}function NP(...n){return ma._create("endAt",n,!0)}function s_(n,e,t,r){if(t[0]=S(t[0]),t[0]instanceof $i)return function(s,o,a,c,u){if(!c)throw new g(p.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const l=[];for(const h of Rn(s))if(h.field.isKeyField())l.push(Dn(o,c.key));else{const d=c.data.field(h.field);if(Yo(d))throw new g(p.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const f=h.field.canonicalString();throw new g(p.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}l.push(d)}return new Qt(l,u)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=jn(n.firestore);return function(o,a,c,u,l,h){const d=o.explicitOrderBy;if(l.length>d.length)throw new g(p.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let I=0;I<l.length;I++){const v=l[I];if(d[I].field.isKeyField()){if(typeof v!="string")throw new g(p.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof v}`);if(!Lu(o)&&v.indexOf("/")!==-1)throw new g(p.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${v}' contains a slash.`);const E=o.path.child(F.fromString(v));if(!w.isDocumentKey(E))throw new g(p.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${E}' is not because it contains an odd number of segments.`);const C=new w(E);f.push(Dn(a,C))}else{const E=e_(c,u,v);f.push(E)}}return new Qt(f,h)}(n._query,n.firestore._databaseId,i,e,t,r)}}function Td(n,e,t){if(typeof(t=S(t))=="string"){if(t==="")throw new g(p.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Lu(e)&&t.indexOf("/")!==-1)throw new g(p.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(F.fromString(t));if(!w.isDocumentKey(r))throw new g(p.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Dn(n,new w(r))}if(t instanceof J)return Dn(n,t._key);throw new g(p.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${oa(t)}.`)}function Ad(n,e){if(!Array.isArray(n)||n.length===0)throw new g(p.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function o_(n,e){if(e.isInequality()){const r=Jo(n),i=e.field;if(r!==null&&!r.isEqual(i))throw new g(p.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=Mu(n);s!==null&&a_(n,i,s)}const t=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new g(p.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new g(p.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function a_(n,e,t){if(!t.isEqual(e))throw new g(p.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}class Sl{convertValue(e,t="none"){switch(kn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Z(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Kt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw R()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return $n(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new aa(Z(e.latitude),Z(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=xu(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Oi(e));default:return null}}convertTimestamp(e){const t=zt(e);return new Y(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=F.fromString(e);P(Xp(r));const i=new Wt(r.get(1),r.get(3)),s=new w(r.popFirst(5));return i.isEqual(t)||ne(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function pa(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class xP extends Sl{constructor(e){super(),this.firestore=e}convertBytes(e){return new mt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new J(this.firestore,null,t)}}/**
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
 */class In{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let wt=class extends $i{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new gi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(la("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},gi=class extends wt{data(e={}){return super.data(e)}},Xt=class{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new In(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new gi(this._firestore,this._userDataWriter,r.key,r,new In(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new g(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new gi(i._firestore,i._userDataWriter,a.doc.key,a.doc,new In(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new gi(i._firestore,i._userDataWriter,a.doc.key,a.doc,new In(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,l=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:OP(a.type),doc:c,oldIndex:u,newIndex:l}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function OP(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return R()}}function c_(n,e){return n instanceof wt&&e instanceof wt?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof Xt&&e instanceof Xt&&n._firestore===e._firestore&&Wg(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
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
 */function MP(n){n=B(n,J);const e=B(n.firestore,te);return Lg(ye(e),n._key).then(t=>Cl(e,n,t))}class Kn extends Sl{constructor(e){super(),this.firestore=e}convertBytes(e){return new mt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new J(this.firestore,null,t)}}function LP(n){n=B(n,J);const e=B(n.firestore,te),t=ye(e),r=new Kn(e);return eP(t,n._key).then(i=>new wt(e,r,n._key,i,new In(i!==null&&i.hasLocalMutations,!0),n.converter))}function FP(n){n=B(n,J);const e=B(n.firestore,te);return Lg(ye(e),n._key,{source:"server"}).then(t=>Cl(e,n,t))}function UP(n){n=B(n,Oe);const e=B(n.firestore,te),t=ye(e),r=new Kn(e);return i_(n._query),Fg(t,n._query).then(i=>new Xt(e,r,n,i))}function BP(n){n=B(n,Oe);const e=B(n.firestore,te),t=ye(e),r=new Kn(e);return tP(t,n._query).then(i=>new Xt(e,r,n,i))}function qP(n){n=B(n,Oe);const e=B(n.firestore,te),t=ye(e),r=new Kn(e);return Fg(t,n._query,{source:"server"}).then(i=>new Xt(e,r,n,i))}function Rd(n,e,t){n=B(n,J);const r=B(n.firestore,te),i=pa(n.converter,e,t);return ys(r,[ua(jn(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Q.none())])}function bd(n,e,t,...r){n=B(n,J);const i=B(n.firestore,te),s=jn(i);let o;return o=typeof(e=S(e))=="string"||e instanceof Jt?wl(s,"updateDoc",n._key,e,t,r):El(s,"updateDoc",n._key,e),ys(i,[o.toMutation(n._key,Q.exists(!0))])}function $P(n){return ys(B(n.firestore,te),[new Mr(n._key,Q.none())])}function GP(n,e){const t=B(n.firestore,te),r=vo(n),i=pa(n.converter,e);return ys(t,[ua(jn(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Q.exists(!1))]).then(()=>r)}function u_(n,...e){var t,r,i;n=S(n);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Nc(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Nc(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(n instanceof J)u=B(n.firestore,te),l=xr(n._key.path),c={next:h=>{e[o]&&e[o](Cl(u,n,h))},error:e[o+1],complete:e[o+2]};else{const h=B(n,Oe);u=B(h.firestore,te),l=h._query;const d=new Kn(u);c={next:f=>{e[o]&&e[o](new Xt(u,d,h,f))},error:e[o+1],complete:e[o+2]},i_(n._query)}return function(d,f,I,v){const E=new ia(v),C=new cl(f,E,I);return d.asyncQueue.enqueueAndForget(async()=>sl(await Ar(d),C)),()=>{E.Ca(),d.asyncQueue.enqueueAndForget(async()=>ol(await Ar(d),C))}}(ye(u),l,a,c)}function jP(n,e){return nP(ye(n=B(n,te)),Nc(e)?e:{next:e})}function ys(n,e){return function(r,i){const s=new me;return r.asyncQueue.enqueueAndForget(async()=>kb(await yl(r),i,s)),s.promise}(ye(n),e)}function Cl(n,e,t){const r=t.docs.get(e._key),i=new Kn(n);return new wt(n,i,e._key,r,new In(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */const zP={maxAttempts:5};/**
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
 */let KP=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=jn(e)}set(e,t,r){this._verifyNotCommitted();const i=Ot(e,this._firestore),s=pa(i.converter,t,r),o=ua(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Q.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=Ot(e,this._firestore);let o;return o=typeof(t=S(t))=="string"||t instanceof Jt?wl(this._dataReader,"WriteBatch.update",s._key,t,r,i):El(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,Q.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Ot(e,this._firestore);return this._mutations=this._mutations.concat(new Mr(t._key,Q.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new g(p.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Ot(n,e){if((n=S(n)).firestore!==e)throw new g(p.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */let WP=class extends class{constructor(t,r){this._firestore=t,this._transaction=r,this._dataReader=jn(t)}get(t){const r=Ot(t,this._firestore),i=new xP(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return R();const o=s[0];if(o.isFoundDocument())return new $i(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new $i(this._firestore,i,r._key,null,r.converter);throw R()})}set(t,r,i){const s=Ot(t,this._firestore),o=pa(s.converter,r,i),a=ua(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(t,r,i,...s){const o=Ot(t,this._firestore);let a;return a=typeof(r=S(r))=="string"||r instanceof Jt?wl(this._dataReader,"Transaction.update",o._key,r,i,s):El(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(t){const r=Ot(t,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Ot(e,this._firestore),r=new Kn(this._firestore);return super.get(e).then(i=>new wt(this._firestore,r,t._key,i._document,new In(!1,!1),t.converter))}};function HP(n,e,t){n=B(n,te);const r=Object.assign(Object.assign({},zP),t);return function(s){if(s.maxAttempts<1)throw new g(p.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const c=new me;return s.asyncQueue.enqueueAndForget(async()=>{const u=await Jb(s);new Qb(s.asyncQueue,u,a,o,c).run()}),c.promise}(ye(n),i=>e(new WP(n,i)),r)}/**
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
 */function QP(){return new gs("deleteField")}function YP(){return new vl("serverTimestamp")}function JP(...n){return new EP("arrayUnion",n)}function XP(...n){return new wP("arrayRemove",n)}function ZP(n){return new TP("increment",n)}(function(e,t=!0){(function(i){Nr=i})(Zt),$t(new ht("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new te(new oA(r.getProvider("auth-internal")),new lA(r.getProvider("app-check-internal")),function(u,l){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new g(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wt(u.options.projectId,l)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),ut(Eh,"4.1.0",e),ut(Eh,"4.1.0","esm2017")})();const eS="@firebase/firestore-compat",tS="0.3.14";/**
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
 */function kl(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new g("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function Pd(){if(typeof Uint8Array>"u")throw new g("unimplemented","Uint8Arrays are not available in this environment.")}function Sd(){if(!MA())throw new g("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Gi{constructor(e){this._delegate=e}static fromBase64String(e){return Sd(),new Gi(mt.fromBase64String(e))}static fromUint8Array(e){return Pd(),new Gi(mt.fromUint8Array(e))}toBase64(){return Sd(),this._delegate.toBase64()}toUint8Array(){return Pd(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function Oc(n){return nS(n,["next","error","complete"])}function nS(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
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
 */class rS{enableIndexedDbPersistence(e,t){return lP(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return hP(e._delegate)}clearIndexedDbPersistence(e){return dP(e._delegate)}}class l_{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Wt||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&Xe("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){sP(this._delegate,e,t,r)}enableNetwork(){return mP(this._delegate)}disableNetwork(){return pP(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,Bg("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return fP(this._delegate)}onSnapshotsInSync(e){return jP(this._delegate,e)}get app(){if(!this._appCompat)throw new g("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Rr(this,zg(this._delegate,e))}catch(t){throw ke(t,"collection()","Firestore.collection()")}}doc(e){try{return new We(this,vo(this._delegate,e))}catch(t){throw ke(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Ce(this,oP(this._delegate,e))}catch(t){throw ke(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return HP(this._delegate,t=>e(new h_(this,t)))}batch(){return ye(this._delegate),new d_(new KP(this._delegate,e=>ys(this._delegate,e)))}loadBundle(e){return gP(this._delegate,e)}namedQuery(e){return _P(this._delegate,e).then(t=>t?new Ce(this,t):null)}}class ga extends Sl{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gi(new mt(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return We.forKey(t,this.firestore,null)}}function iS(n){nA(n)}class h_{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new ga(e)}get(e){const t=vn(e);return this._delegate.get(t).then(r=>new ji(this._firestore,new wt(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const i=vn(e);return r?(kl("Transaction.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=vn(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=vn(e);return this._delegate.delete(t),this}}class d_{constructor(e){this._delegate=e}set(e,t,r){const i=vn(e);return r?(kl("WriteBatch.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=vn(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=vn(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Fn{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new gi(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new zi(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=Fn.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(t);return s||(s=new Fn(e,new ga(e),t),i.set(t,s)),s}}Fn.INSTANCES=new WeakMap;class We{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new ga(e)}static forPath(e,t,r){if(e.length%2!==0)throw new g("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new We(t,new J(t._delegate,r,new w(e)))}static forKey(e,t,r){return new We(t,new J(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Rr(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Rr(this.firestore,zg(this._delegate,e))}catch(t){throw ke(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=S(e),e instanceof J?Kg(this._delegate,e):!1}set(e,t){t=kl("DocumentReference.set",t);try{return t?Rd(this._delegate,e,t):Rd(this._delegate,e)}catch(r){throw ke(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?bd(this._delegate,e):bd(this._delegate,e,t,...r)}catch(i){throw ke(i,"updateDoc()","DocumentReference.update()")}}delete(){return $P(this._delegate)}onSnapshot(...e){const t=f_(e),r=m_(e,i=>new ji(this.firestore,new wt(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return u_(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=LP(this._delegate):(e==null?void 0:e.source)==="server"?t=FP(this._delegate):t=MP(this._delegate),t.then(r=>new ji(this.firestore,new wt(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new We(this.firestore,e?this._delegate.withConverter(Fn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ke(n,e,t){return n.message=n.message.replace(e,t),n}function f_(n){for(const e of n)if(typeof e=="object"&&!Oc(e))return e;return{}}function m_(n,e){var t,r;let i;return Oc(n[0])?i=n[0]:Oc(n[1])?i=n[1]:typeof n[0]=="function"?i={next:n[0],error:n[1],complete:n[2]}:i={next:n[1],error:n[2],complete:n[3]},{next:s=>{i.next&&i.next(e(s))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class ji{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new We(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return c_(this._delegate,e._delegate)}}class zi extends ji{data(e){const t=this._delegate.data(e);return rA(t!==void 0),t}}class Ce{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new ga(e)}where(e,t,r){try{return new Ce(this.firestore,Nt(this._delegate,bP(e,t,r)))}catch(i){throw ke(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Ce(this.firestore,Nt(this._delegate,PP(e,t)))}catch(r){throw ke(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Ce(this.firestore,Nt(this._delegate,SP(e)))}catch(t){throw ke(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Ce(this.firestore,Nt(this._delegate,CP(e)))}catch(t){throw ke(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Ce(this.firestore,Nt(this._delegate,kP(...e)))}catch(t){throw ke(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Ce(this.firestore,Nt(this._delegate,DP(...e)))}catch(t){throw ke(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Ce(this.firestore,Nt(this._delegate,VP(...e)))}catch(t){throw ke(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Ce(this.firestore,Nt(this._delegate,NP(...e)))}catch(t){throw ke(t,"endAt()","Query.endAt()")}}isEqual(e){return Wg(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=BP(this._delegate):(e==null?void 0:e.source)==="server"?t=qP(this._delegate):t=UP(this._delegate),t.then(r=>new Mc(this.firestore,new Xt(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=f_(e),r=m_(e,i=>new Mc(this.firestore,new Xt(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return u_(this._delegate,t,r)}withConverter(e){return new Ce(this.firestore,e?this._delegate.withConverter(Fn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class sS{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new zi(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Mc{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Ce(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new zi(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new sS(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new zi(this._firestore,r))})}isEqual(e){return c_(this._delegate,e._delegate)}}class Rr extends Ce{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new We(this.firestore,e):null}doc(e){try{return e===void 0?new We(this.firestore,vo(this._delegate)):new We(this.firestore,vo(this._delegate,e))}catch(t){throw ke(t,"doc()","CollectionReference.doc()")}}add(e){return GP(this._delegate,e).then(t=>new We(this.firestore,t))}isEqual(e){return Kg(this._delegate,e._delegate)}withConverter(e){return new Rr(this.firestore,e?this._delegate.withConverter(Fn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function vn(n){return B(n,J)}/**
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
 */class Dl{constructor(...e){this._delegate=new Jt(...e)}static documentId(){return new Dl(re.keyField().canonicalString())}isEqual(e){return e=S(e),e instanceof Jt?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class pn{constructor(e){this._delegate=e}static serverTimestamp(){const e=YP();return e._methodName="FieldValue.serverTimestamp",new pn(e)}static delete(){const e=QP();return e._methodName="FieldValue.delete",new pn(e)}static arrayUnion(...e){const t=JP(...e);return t._methodName="FieldValue.arrayUnion",new pn(t)}static arrayRemove(...e){const t=XP(...e);return t._methodName="FieldValue.arrayRemove",new pn(t)}static increment(e){const t=ZP(e);return t._methodName="FieldValue.increment",new pn(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const oS={Firestore:l_,GeoPoint:aa,Timestamp:Y,Blob:Gi,Transaction:h_,WriteBatch:d_,DocumentReference:We,DocumentSnapshot:ji,Query:Ce,QueryDocumentSnapshot:zi,QuerySnapshot:Mc,CollectionReference:Rr,FieldPath:Dl,FieldValue:pn,setLogLevel:iS,CACHE_SIZE_UNLIMITED:uP};function aS(n,e){n.INTERNAL.registerComponent(new ht("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},oS)))}/**
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
 */function cS(n){aS(n,(e,t)=>new l_(e,t,new rS)),n.registerVersion(eS,tS)}cS(Ne);const uS={apiKey:"AIzaSyD3y-57uze139gYvq8uagnKt9F7IY34jUM",authDomain:"exercise-log-8a9b4.firebaseapp.com",projectId:"exercise-log-8a9b4",storageBucket:"exercise-log-8a9b4.appspot.com",messagingSenderId:"323872244593",appId:"1:323872244593:web:8faa7dbb2c60dab7132cd0"};Ne.apps.length?Ne.app():Ne.initializeApp(uS);const p_=Ne.firestore();let ce=[];const lS=()=>{const n=document.getElementById("top-bar");(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1")&&(n.style.display="block")};lS();const hS=document.getElementById("register-form");hS.addEventListener("submit",n=>{n.preventDefault();const e=document.getElementById("register-email"),t=document.getElementById("register-password"),r=e.value,i=t.value;Ne.auth().createUserWithEmailAndPassword(r,i).then(s=>{s.user,alert("User registered successfully.")}).catch(s=>{s.code;var o=s.message;alert(o)})});const dS=document.getElementById("login-form");dS.addEventListener("submit",n=>{n.preventDefault();const e=document.getElementById("login-email"),t=document.getElementById("login-password"),r=e.value,i=t.value;Ne.auth().signInWithEmailAndPassword(r,i).then(s=>{s.user,alert("User logged in successfully.")}).catch(s=>{s.code;var o=s.message;alert(o)})});const fS=document.getElementById("logout-button");fS.addEventListener("click",()=>{Ne.auth().signOut().then(()=>{alert("User signed out successfully.")}).catch(n=>{n.code;var e=n.message;alert(e)})});Ne.auth().onAuthStateChanged(n=>{const e=document.getElementById("logged-in-status");n?(e.textContent=`${n.email} is signed in`,mS()):e.textContent="No user is signed in"});const mS=()=>{let n=Ne.auth().currentUser;if(n){let e=n.uid;p_.collection("users").doc(e).collection("exercises").doc("exerciseData").get().then(t=>{if(t.exists){console.log("Exercises document data:",t.data());let r=t.data(),i=[];for(let s in r)i.push(r[s]);ce=i.map(s=>new wo(s.name,new Date(s.timestamp),s.paused,s.up)),Tt(),Cd()}else console.log("No exercises document!"),ce.length||(ce=["exercise 1","exercise 2","exercise 3"].map(r=>new wo(r))),Tt(),Cd()}).catch(t=>{console.log("Error getting exercises document:",t)})}else console.log("No user is signed in.")};class wo{constructor(e,t=null,r=!1,i=!1){this.name=e,this.timestamp=t||this.generateRandomTimestamp(),this.paused=r,this.up=i}generateRandomTimestamp(){const e=new Date().getTime(),t=e-7*24*60*60*1e3;return new Date(t+Math.random()*(e-t))}updateTimestamp(){this.timestamp=new Date}}const Cd=()=>{const n=document.querySelector("#last-updated"),e=localStorage.getItem("last-updated");e&&(n.textContent=e)},Wn=()=>{const e=gS(new Date);document.querySelector("#last-updated").textContent=e,localStorage.setItem("last-updated",e)},Tt=()=>{const n=document.getElementById("exercise-list"),e=document.getElementById("paused-exercise-list"),t=document.getElementById("today-exercise-plan-list");n.innerHTML="",e.innerHTML="",t.innerHTML="",ce.sort((i,s)=>i.timestamp-s.timestamp).forEach((i,s)=>{const a=document.getElementById("exercise-template").content.cloneNode(!0),c=a.querySelector("li");c.id=`li-${s}`;const u=a.querySelector(".name");u.id=`name-${s}`,u.value=i.name,u.addEventListener("click",()=>kd(s));const l=i.timestamp.toLocaleDateString("en-US",{year:"numeric",month:"2-digit",day:"2-digit"}),h=a.querySelector(".timestamp");h.id=`timestamp-${s}`,h.value=l,h.addEventListener("click",()=>kd(s)),a.querySelector(".up").onclick=()=>moveUp(i.name),a.querySelector(".done").onclick=()=>markAsDone(i.name);const d=a.querySelector(".pause");d.onclick=()=>togglePause(i.name),d.textContent=i.paused?"UNPAUSE":"PAUSE",a.querySelector(".delete").onclick=()=>deleteExercise(s),i.paused?(c.classList.add("paused"),e.appendChild(a)):i.up?t.appendChild(a):n.appendChild(a)})};window.moveUp=n=>{const e=ce.find(t=>t.name===n);e&&(e.up=!e.up,localStorage.setItem("exercises",JSON.stringify(ce)),Tt()),Wn()};window.markAsDone=n=>{const e=ce.find(t=>t.name===n);e&&(e.updateTimestamp(),e.up=!1,localStorage.setItem("exercises",JSON.stringify(ce)),Tt()),Wn()};window.togglePause=n=>{const e=ce.find(t=>t.name===n);e&&(e.paused=!e.paused,localStorage.setItem("exercises",JSON.stringify(ce)),Tt()),Wn()};const kd=n=>{document.getElementById(`name-${n}`).readOnly=!1,document.getElementById(`timestamp-${n}`).readOnly=!1,document.getElementById(`li-${n}`).classList.add("edit-mode"),document.getElementById(`name-${n}`).addEventListener("keypress",e=>{e.key==="Enter"&&saveExercise(n)}),document.getElementById(`timestamp-${n}`).addEventListener("keypress",e=>{e.key==="Enter"&&saveExercise(n)})};window.saveExercise=n=>{let e=document.getElementById(`name-${n}`).value,t=new Date(document.getElementById(`timestamp-${n}`).value);ce[n].name=e,ce[n].timestamp=t,localStorage.setItem("exercises",JSON.stringify(ce)),Wn(),Tt(),IS()};window.deleteExercise=n=>{confirm("Are you sure you want to delete this exercise?")&&(ce.splice(n,1),localStorage.setItem("exercises",JSON.stringify(ce)),Tt(),Wn())};const pS=document.getElementById("new-exercise-form");pS.addEventListener("submit",n=>{n.preventDefault();const e=document.getElementById("new-exercise-name"),t=e.value.trim();t&&(ce.push(new wo(t)),localStorage.setItem("exercises",JSON.stringify(ce)),e.value="",Tt(),Wn())});const gS=n=>{const e={weekday:"short",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"};return new Intl.DateTimeFormat("en-US",e).format(n)},Ns=document.getElementById("notification-bar"),Ks=(n,e="success")=>{Ns.textContent=n,Ns.classList.add(e,"show"),setTimeout(()=>{Ns.textContent="",Ns.classList.remove(e,"show")},3e3)},_S=()=>{const n=JSON.stringify(ce);navigator.clipboard.writeText(n),Ks("Copied to clipboard","success")},yS=document.getElementById("save-button");yS.addEventListener("click",_S);const IS=()=>{let n=Ne.auth().currentUser;if(n){let e=n.uid,t={};JSON.parse(localStorage.getItem("exercises")||"[]").forEach((i,s)=>{t[s]=i}),p_.collection("users").doc(e).collection("exercises").doc("exerciseData").set(t).then(()=>{console.log("Exercises document successfully written!")}).catch(i=>{console.error("Error writing exercises document: ",i)})}else console.log("No user is signed in.")},vS=()=>{navigator.clipboard.readText().then(n=>{try{ce=JSON.parse(n).map(t=>new wo(t.name,new Date(t.timestamp),t.paused,t.up)),localStorage.setItem("exercises",JSON.stringify(ce)),Tt(),Wn(),Ks("Exercises imported successfully","success")}catch{Ks("Invalid data in clipboard","error")}}).catch(n=>{Ks("Error reading from clipboard","error")})},ES=document.getElementById("import-button");ES.addEventListener("click",vS);
