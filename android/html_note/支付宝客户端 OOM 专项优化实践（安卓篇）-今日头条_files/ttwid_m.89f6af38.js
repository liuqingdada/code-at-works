(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"22b8bf9bbceb55813f91":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n("3728d582ece884309736").__exportStar(n("8ba6d7f3e94fbdcba923"),t)},"37005433e347dd273a51":function(e,t,n){"use strict";var r,i=n("3728d582ece884309736"),o=n("609908bad2b1c3397072"),a=n("693e6a8d1022f786a988");
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function s(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)r[i]=o[a];return r}
/**
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
 */var c,u=[];!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(c||(c={}));var f,l={debug:c.DEBUG,verbose:c.VERBOSE,info:c.INFO,warn:c.WARN,error:c.ERROR,silent:c.SILENT},h=c.INFO,d=((r={})[c.DEBUG]="log",r[c.VERBOSE]="log",r[c.INFO]="info",r[c.WARN]="warn",r[c.ERROR]="error",r),p=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(t<e.logLevel)){var i=(new Date).toISOString(),o=d[t];if(!o)throw new Error("Attempted to log a message with an invalid logType (value: "+t+")");console[o].apply(console,s(["["+i+"]  "+e.name+":"],n))}},v=function(){function e(e){this.name=e,this._logLevel=h,this._logHandler=p,this._userLogHandler=null,u.push(this)}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in c))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),e.prototype.setLogLevel=function(e){this._logLevel="string"==typeof e?l[e]:e},Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,s([this,c.DEBUG],e)),this._logHandler.apply(this,s([this,c.DEBUG],e))},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,s([this,c.VERBOSE],e)),this._logHandler.apply(this,s([this,c.VERBOSE],e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,s([this,c.INFO],e)),this._logHandler.apply(this,s([this,c.INFO],e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,s([this,c.WARN],e)),this._logHandler.apply(this,s([this,c.WARN],e))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,s([this,c.ERROR],e)),this._logHandler.apply(this,s([this,c.ERROR],e))},e}();function b(e){u.forEach((function(t){t.setLogLevel(e)}))}var g,_=((f={})["no-app"]="No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",f["bad-app-name"]="Illegal App name: '{$appName}",f["duplicate-app"]="Firebase App named '{$appName}' already exists",f["app-deleted"]="Firebase App named '{$appName}' already deleted",f["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a Firebase App instance.",f["invalid-log-argument"]="First argument to `onLog` must be null or a function.",f),m=new o.b("app","Firebase",_),y=((g={})["@firebase/app"]="fire-core",g["@firebase/analytics"]="fire-analytics",g["@firebase/app-check"]="fire-app-check",g["@firebase/auth"]="fire-auth",g["@firebase/database"]="fire-rtdb",g["@firebase/functions"]="fire-fn",g["@firebase/installations"]="fire-iid",g["@firebase/messaging"]="fire-fcm",g["@firebase/performance"]="fire-perf",g["@firebase/remote-config"]="fire-rc",g["@firebase/storage"]="fire-gcs",g["@firebase/firestore"]="fire-fst",g["fire-js"]="fire-js",g["firebase-wrapper"]="fire-js-all",g),w=new v("@firebase/app"),O=function(){function e(e,t,n){var r=this;this.firebase_=n,this.isDeleted_=!1,this.name_=t.name,this.automaticDataCollectionEnabled_=t.automaticDataCollectionEnabled||!1,this.options_=Object(o.f)(e),this.container=new a.b(t.name),this._addComponent(new a.a("app",(function(){return r}),"PUBLIC")),this.firebase_.INTERNAL.components.forEach((function(e){return r._addComponent(e)}))}return Object.defineProperty(e.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed_(),this.automaticDataCollectionEnabled_},set:function(e){this.checkDestroyed_(),this.automaticDataCollectionEnabled_=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this.checkDestroyed_(),this.name_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"options",{get:function(){return this.checkDestroyed_(),this.options_},enumerable:!1,configurable:!0}),e.prototype.delete=function(){var e=this;return new Promise((function(t){e.checkDestroyed_(),t()})).then((function(){return e.firebase_.INTERNAL.removeApp(e.name_),Promise.all(e.container.getProviders().map((function(e){return e.delete()})))})).then((function(){e.isDeleted_=!0}))},e.prototype._getService=function(e,t){return void 0===t&&(t="[DEFAULT]"),this.checkDestroyed_(),this.container.getProvider(e).getImmediate({identifier:t})},e.prototype._removeServiceInstance=function(e,t){void 0===t&&(t="[DEFAULT]"),this.container.getProvider(e).clearInstance(t)},e.prototype._addComponent=function(e){try{this.container.addComponent(e)}catch(t){w.debug("Component "+e.name+" failed to register with FirebaseApp "+this.name,t)}},e.prototype._addOrOverwriteComponent=function(e){this.container.addOrOverwriteComponent(e)},e.prototype.toJSON=function(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}},e.prototype.checkDestroyed_=function(){if(this.isDeleted_)throw m.create("app-deleted",{appName:this.name_})},e}();O.prototype.name&&O.prototype.options||O.prototype.delete||console.log("dc");
/**
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
 */
function I(e){var t={},n=new Map,r={__esModule:!0,initializeApp:function(n,i){void 0===i&&(i={});if("object"!=typeof i||null===i){i={name:i}}var a=i;void 0===a.name&&(a.name="[DEFAULT]");var s=a.name;if("string"!=typeof s||!s)throw m.create("bad-app-name",{appName:String(s)});if(Object(o.d)(t,s))throw m.create("duplicate-app",{appName:s});var c=new e(n,a,r);return t[s]=c,c},app:i,registerVersion:function(e,t,n){var r,i=null!==(r=y[e])&&void 0!==r?r:e;n&&(i+="-"+n);var o=i.match(/\s|\//),c=t.match(/\s|\//);if(o||c){var u=['Unable to register library "'+i+'" with version "'+t+'":'];return o&&u.push('library name "'+i+'" contains illegal characters (whitespace or "/")'),o&&c&&u.push("and"),c&&u.push('version name "'+t+'" contains illegal characters (whitespace or "/")'),void w.warn(u.join(" "))}s(new a.a(i+"-version",(function(){return{library:i,version:t}}),"VERSION"))},setLogLevel:b,onLog:function(e,t){if(null!==e&&"function"!=typeof e)throw m.create("invalid-log-argument");!function(e,t){for(var n=function(n){var r=null;t&&t.level&&(r=l[t.level]),n.userLogHandler=null===e?null:function(t,n){for(var i=[],o=2;o<arguments.length;o++)i[o-2]=arguments[o];var a=i.map((function(e){if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((function(e){return e})).join(" ");n>=(null!=r?r:t.logLevel)&&e({level:c[n].toLowerCase(),message:a,args:i,type:t.name})}},r=0,i=u;r<i.length;r++){n(i[r])}}
/**
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
 */(e,t)},apps:null,SDK_VERSION:"8.5.0",INTERNAL:{registerComponent:s,removeApp:function(e){delete t[e]},components:n,useAsService:function(e,t){if("serverAuth"===t)return null;return t}}};function i(e){if(e=e||"[DEFAULT]",!Object(o.d)(t,e))throw m.create("no-app",{appName:e});return t[e]}function s(a){var s=a.name;if(n.has(s))return w.debug("There were multiple attempts to register component "+s+"."),"PUBLIC"===a.type?r[s]:null;if(n.set(s,a),"PUBLIC"===a.type){var c=function(e){if(void 0===e&&(e=i()),"function"!=typeof e[s])throw m.create("invalid-app-argument",{appName:s});return e[s]()};void 0!==a.serviceProps&&Object(o.g)(c,a.serviceProps),r[s]=c,e.prototype[s]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=this._getService.bind(this,s);return n.apply(this,a.multipleInstances?e:[])}}for(var u=0,f=Object.keys(t);u<f.length;u++){var l=f[u];t[l]._addComponent(a)}return"PUBLIC"===a.type?r[s]:null}return r.default=r,Object.defineProperty(r,"apps",{get:function(){return Object.keys(t).map((function(e){return t[e]}))}}),i.App=e,r}
/**
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
 */var E=function e(){var t=I(O);return t.INTERNAL=Object(i.__assign)(Object(i.__assign)({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){Object(o.g)(t,e)},createSubscribe:o.e,ErrorFactory:o.b,deepExtend:o.g}),t}(),j=function(){function e(e){this.container=e}return e.prototype.getPlatformInfoString=function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}
/**
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
 */(e)){var t=e.getImmediate();return t.library+"/"+t.version}return null})).filter((function(e){return e})).join(" ")},e}();
/**
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
 */
/**
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
 */
if(Object(o.h)()&&void 0!==self.firebase){w.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");var C=self.firebase.SDK_VERSION;C&&C.indexOf("LITE")>=0&&w.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}var S=E.initializeApp;E.initializeApp=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return Object(o.i)()&&w.warn('\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the @rollup/plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/@rollup/plugin-node-resolve\n      '),S.apply(void 0,e)};var k,A,T=E;(k=T).INTERNAL.registerComponent(new a.a("platform-logger",(function(e){return new j(e)}),"PRIVATE")),k.registerVersion("@firebase/app","0.6.21",A),k.registerVersion("fire-js","");t.a=T},"609908bad2b1c3397072":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return v})),n.d(t,"f",(function(){return o})),n.d(t,"g",(function(){return a})),n.d(t,"h",(function(){return u})),n.d(t,"i",(function(){return c}));var r=n("3728d582ece884309736"),i=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t};
/**
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
 */
/**
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
 */
function o(e){return a(void 0,e)}function a(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=a(e[n],t[n]));return e}
/**
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
 */
var s=function(){function e(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n}))}return e.prototype.wrapCallback=function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}},e}();
/**
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
 */function c(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(t){return!1}}function u(){return"object"==typeof self&&self.self===self}
/**
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
 */
var f=function(e){function t(n,r,i){var o=e.call(this,r)||this;return o.code=n,o.customData=i,o.name="FirebaseError",Object.setPrototypeOf(o,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(o,l.prototype.create),o}return Object(r.__extends)(t,e),t}(Error),l=function(){function e(e,t,n){this.service=e,this.serviceName=t,this.errors=n}return e.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=t[0]||{},i=this.service+"/"+e,o=this.errors[e],a=o?h(o,r):"Error",s=this.serviceName+": "+a+" ("+i+").",c=new f(i,s,r);return c},e}();function h(e,t){return e.replace(d,(function(e,n){var r=t[n];return null!=r?String(r):"<"+n+"?>"}))}var d=/\{\$([^}]+)}/g;
/**
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
 */
/**
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
 */
function p(e,t){return Object.prototype.hasOwnProperty.call(e,t)}
/**
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
 */
!function(){function e(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}e.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},e.prototype.compress_=function(e,t){t||(t=0);var n=this.W_;if("string"==typeof e)for(var r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(r=16;r<80;r++){var i=n[r-3]^n[r-8]^n[r-14]^n[r-16];n[r]=4294967295&(i<<1|i>>>31)}var o,a,s=this.chain_[0],c=this.chain_[1],u=this.chain_[2],f=this.chain_[3],l=this.chain_[4];for(r=0;r<80;r++){r<40?r<20?(o=f^c&(u^f),a=1518500249):(o=c^u^f,a=1859775393):r<60?(o=c&u|f&(c|u),a=2400959708):(o=c^u^f,a=3395469782);i=(s<<5|s>>>27)+o+l+a+n[r]&4294967295;l=f,f=u,u=4294967295&(c<<30|c>>>2),c=s,s=i}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295},e.prototype.update=function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=0,i=this.buf_,o=this.inbuf_;r<t;){if(0===o)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[o]=e.charCodeAt(r),++r,++o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<t;)if(i[o]=e[r],++r,++o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}},e.prototype.digest=function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);var r=0;for(n=0;n<5;n++)for(var i=24;i>=0;i-=8)e[r]=this.chain_[n]>>i&255,++r;return e}}();function v(e,t){var n=new b(e,t);return n.subscribe.bind(n)}var b=function(){function e(e,t){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((function(){e(n)})).catch((function(e){n.error(e)}))}return e.prototype.next=function(e){this.forEachObserver((function(t){t.next(e)}))},e.prototype.error=function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)},e.prototype.complete=function(){this.forEachObserver((function(e){e.complete()})),this.close()},e.prototype.subscribe=function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;for(var n=0,r=t;n<r.length;n++){var i=r[n];if(i in e&&"function"==typeof e[i])return!0}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=g),void 0===r.error&&(r.error=g),void 0===r.complete&&(r.complete=g);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),o},e.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},e.prototype.sendOne=function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(r){"undefined"!=typeof console&&console.error&&console.error(r)}}))},e.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))},e}();function g(){}
/**
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
 */}).call(this,n("fd62a254c065d2a17c3d"))},"693e6a8d1022f786a988":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s}));var r=n("3728d582ece884309736"),i=n("609908bad2b1c3397072"),o=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},e}(),a=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.onInitCallbacks=new Set}return e.prototype.get=function(e){void 0===e&&(e="[DEFAULT]");var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new i.a;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(o){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t=Object(r.__assign)({identifier:"[DEFAULT]",optional:!1},e),n=t.identifier,i=t.optional,o=this.normalizeInstanceIdentifier(n);if(!this.isInitialized(o)&&!this.shouldAutoInitialize()){if(i)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:o})}catch(a){if(i)return null;throw a}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(l){}try{for(var i=Object(r.__values)(this.instancesDeferred.entries()),o=i.next();!o.done;o=i.next()){var a=Object(r.__read)(o.value,2),s=a[0],c=a[1],u=this.normalizeInstanceIdentifier(s);try{var f=this.getOrInitializeService({instanceIdentifier:u});c.resolve(f)}catch(l){}}}catch(h){t={error:h}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}}},e.prototype.clearInstance=function(e){void 0===e&&(e="[DEFAULT]"),this.instancesDeferred.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return Object(r.__awaiter)(this,void 0,void 0,(function(){var e;return Object(r.__generator)(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(Object(r.__spreadArray)(Object(r.__spreadArray)([],Object(r.__read)(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))),Object(r.__read)(e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.isInitialized=function(e){return void 0===e&&(e="[DEFAULT]"),this.instances.has(e)},e.prototype.initialize=function(e){var t,n;void 0===e&&(e={});var i=e.instanceIdentifier,o=void 0===i?"[DEFAULT]":i,a=e.options,s=void 0===a?{}:a,c=this.normalizeInstanceIdentifier(o);if(this.isInitialized(c))throw Error(this.name+"("+c+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var u=this.getOrInitializeService({instanceIdentifier:c,options:s});try{for(var f=Object(r.__values)(this.instancesDeferred.entries()),l=f.next();!l.done;l=f.next()){var h=Object(r.__read)(l.value,2),d=h[0],p=h[1];c===this.normalizeInstanceIdentifier(d)&&p.resolve(u)}}catch(v){t={error:v}}finally{try{l&&!l.done&&(n=f.return)&&n.call(f)}finally{if(t)throw t.error}}return this.invokeOnInitCallbacks(u,c),u},e.prototype.onInit=function(e){var t=this;return this.onInitCallbacks.add(e),function(){t.onInitCallbacks.delete(e)}},e.prototype.invokeOnInitCallbacks=function(e,t){var n,i;try{for(var o=Object(r.__values)(this.onInitCallbacks),a=o.next();!a.done;a=o.next()){var s=a.value;try{s(e,t)}catch(c){}}}catch(u){n={error:u}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(n)throw n.error}}},e.prototype.getOrInitializeService=function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,o=this.instances.get(n);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,"[DEFAULT]"===t?void 0:t),options:i}),this.instances.set(n,o),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,o)}catch(a){}return o||null},e.prototype.normalizeInstanceIdentifier=function(e){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e},e.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},e}();var s=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new a(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}()},"8096554fdd23aa16cdbd":function(e,t,n){"use strict";n.r(t);var r,i=n("37005433e347dd273a51"),o=n("693e6a8d1022f786a988"),a=n("3728d582ece884309736"),s=n("609908bad2b1c3397072"),c=n("68b209594d76f316b4ce"),u=((r={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',r["not-registered"]="Firebase Installation is not registered.",r["installation-not-found"]="Firebase Installation not found.",r["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',r["app-offline"]="Could not process request. Application offline.",r["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",r),f=new s.b("installations","Installations",u);function l(e){return e instanceof s.c&&e.code.includes("request-failed")}
/**
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
 */function h(e){return"https://firebaseinstallations.googleapis.com/v1/projects/"+e.projectId+"/installations"}function d(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}function p(e,t){return Object(a.__awaiter)(this,void 0,void 0,(function(){var n,r;return Object(a.__generator)(this,(function(i){switch(i.label){case 0:return[4,t.json()];case 1:return n=i.sent(),r=n.error,[2,f.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})]}}))}))}function v(e){var t=e.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function b(e,t){var n=t.refreshToken,r=v(e);return r.append("Authorization",function(e){return"FIS_v2 "+e}
/**
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
 */(n)),r}function g(e){return Object(a.__awaiter)(this,void 0,void 0,(function(){var t;return Object(a.__generator)(this,(function(n){switch(n.label){case 0:return[4,e()];case 1:return(t=n.sent()).status>=500&&t.status<600?[2,e()]:[2,t]}}))}))}function _(e,t){var n=t.fid;return Object(a.__awaiter)(this,void 0,void 0,(function(){var t,r,i,o,s,c;return Object(a.__generator)(this,(function(a){switch(a.label){case 0:return t=h(e),r=v(e),i={fid:n,authVersion:"FIS_v2",appId:e.appId,sdkVersion:"w:0.4.26"},o={method:"POST",headers:r,body:JSON.stringify(i)},[4,g((function(){return fetch(t,o)}))];case 1:return(s=a.sent()).ok?[4,s.json()]:[3,3];case 2:return c=a.sent(),[2,{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:d(c.authToken)}];case 3:return[4,p("Create Installation",s)];case 4:throw a.sent()}}))}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(e){return new Promise((function(t){setTimeout(t,e)}))}
/**
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
 */
/**
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
 */
var y=/^[cdef][\w-]{21}$/;function w(){try{var e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;var t=function(e){return(t=e,btoa(String.fromCharCode.apply(String,Object(a.__spreadArray)([],Object(a.__read)(t)))).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}
/**
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
 */(e);return y.test(t)?t:""}catch(n){return""}}function O(e){return e.appName+"!"+e.appId}
/**
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
 */var I=new Map;function E(e,t){var n=O(e);j(n,t),function(e,t){var n=S();n&&n.postMessage({key:e,fid:t});k()}(n,t)}function j(e,t){var n,r,i=I.get(e);if(i)try{for(var o=Object(a.__values)(i),s=o.next();!s.done;s=o.next()){(0,s.value)(t)}}catch(c){n={error:c}}finally{try{s&&!s.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}}var C=null;function S(){return!C&&"BroadcastChannel"in self&&((C=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(e){j(e.data.key,e.data.fid)}),C}function k(){0===I.size&&C&&(C.close(),C=null)}
/**
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
 */var A,T="firebase-installations-store",D=null;function L(){return D||(D=Object(c.openDb)("firebase-installations-database",1,(function(e){switch(e.oldVersion){case 0:e.createObjectStore(T)}}))),D}function N(e,t){return Object(a.__awaiter)(this,void 0,void 0,(function(){var n,r,i,o,s;return Object(a.__generator)(this,(function(a){switch(a.label){case 0:return n=O(e),[4,L()];case 1:return r=a.sent(),i=r.transaction(T,"readwrite"),[4,(o=i.objectStore(T)).get(n)];case 2:return s=a.sent(),[4,o.put(t,n)];case 3:return a.sent(),[4,i.complete];case 4:return a.sent(),s&&s.fid===t.fid||E(e,t.fid),[2,t]}}))}))}function R(e){return Object(a.__awaiter)(this,void 0,void 0,(function(){var t,n,r;return Object(a.__generator)(this,(function(i){switch(i.label){case 0:return t=O(e),[4,L()];case 1:return n=i.sent(),[4,(r=n.transaction(T,"readwrite")).objectStore(T).delete(t)];case 2:return i.sent(),[4,r.complete];case 3:return i.sent(),[2]}}))}))}function F(e,t){return Object(a.__awaiter)(this,void 0,void 0,(function(){var n,r,i,o,s,c;return Object(a.__generator)(this,(function(a){switch(a.label){case 0:return n=O(e),[4,L()];case 1:return r=a.sent(),i=r.transaction(T,"readwrite"),[4,(o=i.objectStore(T)).get(n)];case 2:return s=a.sent(),void 0!==(c=t(s))?[3,4]:[4,o.delete(n)];case 3:return a.sent(),[3,6];case 4:return[4,o.put(c,n)];case 5:a.sent(),a.label=6;case 6:return[4,i.complete];case 7:return a.sent(),!c||s&&s.fid===c.fid||E(e,c.fid),[2,c]}}))}))}
/**
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
 */function P(e){return Object(a.__awaiter)(this,void 0,void 0,(function(){var t,n,r;return Object(a.__generator)(this,(function(i){switch(i.label){case 0:return[4,F(e,(function(n){var r=function(e){return x(e||{fid:w(),registrationStatus:0})}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){var n=Promise.reject(f.create("app-offline"));return{installationEntry:t,registrationPromise:n}}var r={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=function(e,t){return Object(a.__awaiter)(this,void 0,void 0,(function(){var n,r;return Object(a.__generator)(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,7]),[4,_(e,t)];case 1:return n=i.sent(),[2,N(e,n)];case 2:return l(r=i.sent())&&409===r.customData.serverCode?[4,R(e)]:[3,4];case 3:return i.sent(),[3,6];case 4:return[4,N(e,{fid:t.fid,registrationStatus:0})];case 5:i.sent(),i.label=6;case 6:throw r;case 7:return[2]}}))}))}(e,r);return{installationEntry:r,registrationPromise:i}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:z(e)}:{installationEntry:t}}(e,r);return t=i.registrationPromise,i.installationEntry}))];case 1:return""!==(n=i.sent()).fid?[3,3]:(r={},[4,t]);case 2:return[2,(r.installationEntry=i.sent(),r)];case 3:return[2,{installationEntry:n,registrationPromise:t}]}}))}))}function z(e){return Object(a.__awaiter)(this,void 0,void 0,(function(){var t,n,r,i;return Object(a.__generator)(this,(function(o){switch(o.label){case 0:return[4,U(e)];case 1:t=o.sent(),o.label=2;case 2:return 1!==t.registrationStatus?[3,5]:[4,m(100)];case 3:return o.sent(),[4,U(e)];case 4:return t=o.sent(),[3,2];case 5:return 0!==t.registrationStatus?[3,7]:[4,P(e)];case 6:return n=o.sent(),r=n.installationEntry,(i=n.registrationPromise)?[2,i]:[2,r];case 7:return[2,t]}}))}))}function U(e){return F(e,(function(e){if(!e)throw f.create("installation-not-found");return x(e)}))}function x(e){return 1===(t=e).registrationStatus&&t.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
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
 */}function H(e,t){var n=e.appConfig,r=e.platformLoggerProvider;return Object(a.__awaiter)(this,void 0,void 0,(function(){var e,i,o,s,c,u,f;return Object(a.__generator)(this,(function(a){switch(a.label){case 0:return e=function(e,t){var n=t.fid;return h(e)+"/"+n+"/authTokens:generate"}
/**
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
 */(n,t),i=b(n,t),(o=r.getImmediate({optional:!0}))&&i.append("x-firebase-client",o.getPlatformInfoString()),s={installation:{sdkVersion:"w:0.4.26"}},c={method:"POST",headers:i,body:JSON.stringify(s)},[4,g((function(){return fetch(e,c)}))];case 1:return(u=a.sent()).ok?[4,u.json()]:[3,3];case 2:return f=a.sent(),[2,d(f)];case 3:return[4,p("Generate Auth Token",u)];case 4:throw a.sent()}}))}))}function M(e,t){return void 0===t&&(t=!1),Object(a.__awaiter)(this,void 0,void 0,(function(){var n,r,i;return Object(a.__generator)(this,(function(o){switch(o.label){case 0:return[4,F(e.appConfig,(function(r){if(!V(r))throw f.create("not-registered");var i=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(e)}(i))return r;if(1===i.requestStatus)return n=function(e,t){return Object(a.__awaiter)(this,void 0,void 0,(function(){var n,r;return Object(a.__generator)(this,(function(i){switch(i.label){case 0:return[4,q(e.appConfig)];case 1:n=i.sent(),i.label=2;case 2:return 1!==n.authToken.requestStatus?[3,5]:[4,m(100)];case 3:return i.sent(),[4,q(e.appConfig)];case 4:return n=i.sent(),[3,2];case 5:return 0===(r=n.authToken).requestStatus?[2,M(e,t)]:[2,r]}}))}))}(e,t),r;if(!navigator.onLine)throw f.create("app-offline");var o=function(e){var t={requestStatus:1,requestTime:Date.now()};return Object(a.__assign)(Object(a.__assign)({},e),{authToken:t})}(r);return n=function(e,t){return Object(a.__awaiter)(this,void 0,void 0,(function(){var n,r,i;return Object(a.__generator)(this,(function(o){switch(o.label){case 0:return o.trys.push([0,3,,8]),[4,H(e,t)];case 1:return n=o.sent(),i=Object(a.__assign)(Object(a.__assign)({},t),{authToken:n}),[4,N(e.appConfig,i)];case 2:return o.sent(),[2,n];case 3:return!l(r=o.sent())||401!==r.customData.serverCode&&404!==r.customData.serverCode?[3,5]:[4,R(e.appConfig)];case 4:return o.sent(),[3,7];case 5:return i=Object(a.__assign)(Object(a.__assign)({},t),{authToken:{requestStatus:0}}),[4,N(e.appConfig,i)];case 6:o.sent(),o.label=7;case 7:throw r;case 8:return[2]}}))}))}(e,o),o}))];case 1:return r=o.sent(),n?[4,n]:[3,3];case 2:return i=o.sent(),[3,4];case 3:i=r.authToken,o.label=4;case 4:return[2,i]}}))}))}function q(e){return F(e,(function(e){if(!V(e))throw f.create("not-registered");var t,n=e.authToken;return 1===(t=n).requestStatus&&t.requestTime+1e4<Date.now()?Object(a.__assign)(Object(a.__assign)({},e),{authToken:{requestStatus:0}}):e}))}function V(e){return void 0!==e&&2===e.registrationStatus}function W(e){return Object(a.__awaiter)(this,void 0,void 0,(function(){var t;return Object(a.__generator)(this,(function(n){switch(n.label){case 0:return[4,P(e)];case 1:return(t=n.sent().registrationPromise)?[4,t]:[3,3];case 2:n.sent(),n.label=3;case 3:return[2]}}))}))}
/**
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
 */function B(e,t){return Object(a.__awaiter)(this,void 0,void 0,(function(){var n,r,i,o;return Object(a.__generator)(this,(function(a){switch(a.label){case 0:return n=function(e,t){var n=t.fid;return h(e)+"/"+n}
/**
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
 */(e,t),r=b(e,t),i={method:"DELETE",headers:r},[4,g((function(){return fetch(n,i)}))];case 1:return(o=a.sent()).ok?[3,3]:[4,p("Delete Installation",o)];case 2:throw a.sent();case 3:return[2]}}))}))}
/**
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
 */
function K(e,t){var n=e.appConfig;return function(e,t){S();var n=O(e),r=I.get(n);r||(r=new Set,I.set(n,r)),r.add(t)}(n,t),function(){!function(e,t){var n=O(e),r=I.get(n);r&&(r.delete(t),0===r.size&&I.delete(n),k())}(n,t)}}
/**
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
 */function $(e){return f.create("missing-app-config-values",{valueName:e})}
/**
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
 */(A=i.a).INTERNAL.registerComponent(new o.a("installations",(function(e){var t=e.getProvider("app").getImmediate(),n={appConfig:function(e){var t,n;if(!e||!e.options)throw $("App Configuration");if(!e.name)throw $("App Name");try{for(var r=Object(a.__values)(["projectId","apiKey","appId"]),i=r.next();!i.done;i=r.next()){var o=i.value;if(!e.options[o])throw $(o)}}catch(s){t={error:s}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),platformLoggerProvider:e.getProvider("platform-logger")};return{app:t,getId:function(){
/**
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
 */return function(e){return Object(a.__awaiter)(this,void 0,void 0,(function(){var t,n,r;return Object(a.__generator)(this,(function(i){switch(i.label){case 0:return[4,P(e.appConfig)];case 1:return t=i.sent(),n=t.installationEntry,(r=t.registrationPromise)?r.catch(console.error):M(e).catch(console.error),[2,n.fid]}}))}))}
/**
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
 */(n)},getToken:function(e){return function(e,t){return void 0===t&&(t=!1),Object(a.__awaiter)(this,void 0,void 0,(function(){return Object(a.__generator)(this,(function(n){switch(n.label){case 0:return[4,W(e.appConfig)];case 1:return n.sent(),[4,M(e,t)];case 2:return[2,n.sent().token]}}))}))}(n,e)},delete:function(){return function(e){return Object(a.__awaiter)(this,void 0,void 0,(function(){var t,n;return Object(a.__generator)(this,(function(r){switch(r.label){case 0:return[4,F(t=e.appConfig,(function(e){if(!e||0!==e.registrationStatus)return e}))];case 1:if(!(n=r.sent()))return[3,6];if(1!==n.registrationStatus)return[3,2];throw f.create("delete-pending-registration");case 2:if(2!==n.registrationStatus)return[3,6];if(navigator.onLine)return[3,3];throw f.create("app-offline");case 3:return[4,B(t,n)];case 4:return r.sent(),[4,R(t)];case 5:r.sent(),r.label=6;case 6:return[2]}}))}))}(n)},onIdChange:function(e){return K(n,e)}}}),"PUBLIC")),A.registerVersion("@firebase/installations","0.4.26")},"8ba6d7f3e94fbdcba923":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("3728d582ece884309736"),i=r.__importDefault(n("cb7038122279a5693db6")),o=r.__importStar(n("9d2bebf479f0488b96f7")),a={timeout:3e3,withCredentials:!0,headers:{"content-type":"application/x-www-form-urlencoded"}};t.collectFingerprintInfo=function(){return r.__awaiter(void 0,void 0,void 0,(function(){var e,t,n;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,o.get()];case 1:return e=r.sent(),t={},n=o.hashComponents(e),Object.keys(e).forEach((function(n){t[n]=e[n].value||""})),[2,{info:t,id:n}]}}))}))};t.reportFingerprintInfo=function(e){var n;n=function(){!function(e){r.__awaiter(void 0,void 0,void 0,(function(){var n,o,s,c,u,f,l,h;return r.__generator(this,(function(r){switch(r.label){case 0:n=e.aid,o=e.host,s=void 0===o?"":o,r.label=1;case 1:return r.trys.push([1,5,,6]),[4,t.collectFingerprintInfo()];case 2:return c=r.sent(),u=c.info,(f=c.id)&&u?[4,i.default.post(s+"/ttwid/report_fingerprint/",{aid:n,fingerprint_values:u,fingerprint_id:f},a)]:[3,4];case 3:if(0!==(l=r.sent()).data.status_code)throw new Error(l.data.message);return[2,l.data||l];case 4:throw new Error("\u83b7\u53d6\u6307\u7eb9\u4fe1\u606f\u5931\u8d25");case 5:throw h=r.sent(),console.error(h),h;case 6:return[2]}}))}))}(e)},"undefined"!=typeof window&&window.requestIdleCallback?window.requestIdleCallback(n):setTimeout(n,50)}},"913d0edaed637f440a74":function(e,t,n){"use strict";n.r(t);var r=n("37005433e347dd273a51");n.d(t,"default",(function(){return r.a}));
/**
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
 */
r.a.registerVersion("firebase","8.5.0","app")},ad37e75f509b7e4944c6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.COOKIE_READ_DEFAULT=0]="COOKIE_READ_DEFAULT",e[e.COOKIE_READ_TEA_PRIOR=1]="COOKIE_READ_TEA_PRIOR"}(t.CookieReadConfigEnum||(t.CookieReadConfigEnum={}))},e3cb0887020ffeef7482:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n("92143242934b219f9dc0").__importDefault(n("050189f59d8444c80fb1")).default.polyfill();var r=n("f7f9f6aae0c9ce3793b3");t.TtWid=r.TtWid},f7f9f6aae0c9ce3793b3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("92143242934b219f9dc0"),i=r.__importDefault(n("3b6da333073325e45942")),o=n("22b8bf9bbceb55813f91"),a=n("ad37e75f509b7e4944c6"),s={timeout:3e3,withCredentials:!0,headers:{"content-type":"application/x-www-form-urlencoded"}},c={apiKey:"AIzaSyCuM3x-qGZoez2mBUq1_RcNrRFysHdRxfY",authDomain:"byted-ucenter.firebaseapp.com",databaseURL:"https://byted-ucenter.firebaseio.com",projectId:"byted-ucenter",storageBucket:"byted-ucenter.appspot.com",messagingSenderId:"995120244681",appId:"1:995120244681:web:d175caeb43de4353deea18"},u=function(){function e(e){var t=this;this.host="",this.installations=null,this.fid="",this.autoReportFingerprint=!1,void 0===e.union&&(e.union=!0),void 0===e.needFid&&(e.needFid=!0),e.host&&(this.host=e.host),e&&e.headers&&(e.headers["content-type"]="application/x-www-form-urlencoded",s.headers=e.headers,delete e.headers),this.autoReportFingerprint=e.autoReportFingerprint||!1,e&&e.timeout&&(s.timeout=e.timeout,delete e.timeout),this.options=e;try{if(e.needFid){var r=n("913d0edaed637f440a74");n("8096554fdd23aa16cdbd");var i=r.initializeApp(c,"byted-webapp-register").installations();i&&(this.installations=i,i.getId().then((function(e){void 0===e&&(e=""),t.fid=e})))}}catch(o){}}return e.prototype.checkWebId=function(e){return r.__awaiter(this,void 0,void 0,(function(){var t,n,o,c,u,f,l,h,d;return r.__generator(this,(function(p){switch(p.label){case 0:return p.trys.push([0,12,,13]),t=e||a.CookieReadConfigEnum.COOKIE_READ_DEFAULT,n="",this.options.needFid?(o=this.fid)?[3,2]:[4,this.getInstanceId()]:[3,3];case 1:o=p.sent(),p.label=2;case 2:n=o,p.label=3;case 3:return[4,i.default.post(this.host+"/ttwid/check/",r.__assign(r.__assign({},this.options),{fid:n,migrate_priority:t}),s)];case 4:if(c=p.sent(),u=c.data,l=(f=void 0===u?null:u)||c,!(f&&f.status_code>1001))return[3,11];h=f.migrate_info,p.label=5;case 5:return p.trys.push([5,10,,11]),this.options.union?[4,this.registerUnionWebId({migrate_info:h,fid:n})]:[3,7];case 6:return d=p.sent(),l=d,[3,9];case 7:return[4,this.registerOpenWebId({migrate_info:h,fid:n})];case 8:d=p.sent(),l=d,p.label=9;case 9:return[3,11];case 10:return p.sent(),[2,f||c];case 11:return this.autoReportFingerprint&&this.reportFingerprintInfo(),[2,l];case 12:throw p.sent();case 13:return[2]}}))}))},e.prototype.checkWebIdFromTea=function(){return r.__awaiter(this,void 0,void 0,(function(){var e,t,n,i,o;return r.__generator(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),e=localStorage&&localStorage.getItem("__tea_cache_tokens_"+this.options.aid)||"",t=e&&JSON.parse(e)||{},n=t.web_id,(i=void 0===n?"":n)&&(o=new Date(Date.now()+864e5).toUTCString(),document.cookie="_tea_web_id="+i+"; expires="+o+"; path=/;"),[4,this.checkWebId(a.CookieReadConfigEnum.COOKIE_READ_TEA_PRIOR)];case 1:return[2,r.sent()];case 2:throw r.sent();case 3:return[2]}}))}))},e.prototype.registerUnionWebId=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var n,o,a,c,u,f,l,h,d,p,v,b;return r.__generator(this,(function(g){switch(g.label){case 0:return g.trys.push([0,6,,7]),n=this.options,o=n.unionHost,a=void 0===o?"":o,c=n.cbUrlProtocol,u=void 0===c?"":c,[4,i.default.post(a+"/ttwid/union/register/",r.__assign(r.__assign({},this.options),e),s)];case 1:if(f=g.sent(),l=f.data,!(h=void 0===l?null:l)||!h.redirect_url)return[3,5];g.label=2;case 2:return g.trys.push([2,4,,5]),d=h.redirect_url,u&&d&&(d=d.replace(/^https?/,u)),[4,i.default.get(d,s)];case 3:return p=g.sent(),t?[2,t(null,p.data||{})]:[2,p.data||{}];case 4:return v=g.sent(),t?[2,t(v,h||{})]:[2,h];case 5:if(t)return[2,t(new Error("ttwid union register error"))];throw new Error("ttwid union register error");case 6:if(b=g.sent(),t)return[2,t(b)];throw b;case 7:return[2]}}))}))},e.prototype.registerOpenWebId=function(e){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,i.default.post(this.host+"/ttwid/register/",r.__assign(r.__assign({},this.options),e),s)];case 1:return[2,t.sent().data];case 2:throw t.sent();case 3:return[2]}}))}))},e.prototype.getInstanceId=function(){return r.__awaiter(this,void 0,void 0,(function(){var e=this;return r.__generator(this,(function(t){return this.installations?[2,new Promise((function(t,n){return r.__awaiter(e,void 0,void 0,(function(){var e,n;return r.__generator(this,(function(r){switch(r.label){case 0:setTimeout((function(){t("")}),2e3),r.label=1;case 1:return r.trys.push([1,3,,4]),[4,this.installations.getId()];case 2:return e=r.sent(),this.fid=e||"",t(e||""),[3,4];case 3:throw n=r.sent(),this.fid="",n;case 4:return[2]}}))}))}))]:[2,""]}))}))},e.prototype.deleteInstallation=function(){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(e){try{this.installations&&this.installations.delete()}catch(t){throw t}return[2]}))}))},e.prototype.collectFingerprintInfo=function(){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(e){switch(e.label){case 0:return[4,o.collectFingerprintInfo()];case 1:return[2,e.sent()]}}))}))},e.prototype.reportFingerprintInfo=function(){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(e){switch(e.label){case 0:return[4,o.reportFingerprintInfo({aid:this.options.aid,host:this.host})];case 1:return[2,e.sent()]}}))}))},e}();t.TtWid=u}}]);
//# sourceMappingURL=ttwid_m.89f6af38.js.map