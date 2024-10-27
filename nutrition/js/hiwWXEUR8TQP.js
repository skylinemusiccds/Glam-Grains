/* HouseHold ImplementationValidator LegacyLayer SignalsAbs SignalsBsc SignalsIds SignalsTvp SignalsVlp */
(()=>{var bt=Object.defineProperty,Te=Object.defineProperties,Re=Object.getOwnPropertyDescriptor,Ae=Object.getOwnPropertyDescriptors;var Kt=Object.getOwnPropertySymbols;var ye=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable;var vt=(o,t,e)=>t in o?bt(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,ft=(o,t)=>{for(var e in t||(t={}))ye.call(t,e)&&vt(o,e,t[e]);if(Kt)for(var e of Kt(t))_e.call(t,e)&&vt(o,e,t[e]);return o},Pt=(o,t)=>Te(o,Ae(t)),i=(o,t)=>bt(o,"name",{value:t,configurable:!0});var a=(o,t,e,r)=>{for(var n=r>1?void 0:r?Re(t,e):t,g=o.length-1,c;g>=0;g--)(c=o[g])&&(n=(r?c(t,e,n):c(n))||n);return r&&n&&bt(t,e,n),n};var s=(o,t,e)=>(vt(o,typeof t!="symbol"?t+"":t,e),e);var S=(o,t,e)=>new Promise((r,n)=>{var g=m=>{try{p(e.next(m))}catch(h){n(h)}},c=m=>{try{p(e.throw(m))}catch(h){n(h)}},p=m=>m.done?r(m.value):Promise.resolve(m.value).then(g,c);p((e=e.apply(o,t)).next())});var l={"4788":{adServerId:24,customTracking:{c1:{type:"targeting",key:"k1"}},adPositionKey:"pos"}};var Ut={queueAdRequest:o=>{var t;try{(t=o.callback)==null||t.call(o),o.callback=null}catch(e){}},defineSlot:(o,t)=>{},adRendered:(o,t)=>{},adRemoved:o=>{},getTargeting:o=>({}),addEventListener:(o,t)=>{},removeEventListener:(o,t)=>{},toggleDebugMode:()=>{console.log("%c[UT-DEBUG]%c Debug mode is not available for this tag.","color: red","color: intial")},onSlotVisibleForTime:(o,t,e)=>{}};var xt=class xt{constructor(){s(this,"isEntryModule",!0)}};i(xt,"EntryModule");var _=xt;var St=class St{constructor(t){s(this,"_error");s(this,"_message","unknown");s(this,"_trace",[]);if(t instanceof St)return t;t instanceof Error&&(this._error=t,this._message=t.message)}get error(){return this._error}get message(){return this._message}get trace(){return this._trace}addToTrace(t){this.trace.unshift(t)}};i(St,"TracedError");var X=St;var Ct=class Ct{constructor(t,e){s(this,"window");s(this,"dvtag");s(this,"modules",new Map);s(this,"errorHandlers",[]);s(this,"errors",[]);var r;this.window=e,this.window.dvtag=(r=this.window.dvtag)!=null?r:{},this.dvtag=this.window.dvtag,this.dvtag._core=this;for(let[n,g]of Object.entries(Ut))this.dvtag[n]=g;for(let n of t)this.createModule(n);for(let n of this.modules.values())this.applyModuleDecoration(n);for(let n of this.modules.values())this.applyErrorDecoration(n);for(let n of this.modules.values())this.applyPluginDecoration(n);for(let n of this.modules.values())this.applyApiDecoration(n);for(let n of this.modules.values())this.applyExecuteDecoration(n)}get moduleList(){return[...this.modules.keys()].map(t=>t.name)}get entryModuleList(){return[...this.modules.entries()].filter(([t,e])=>e instanceof _).map(([t,e])=>t.name)}get(t){return this.getModule(t).gateway}getByName(t){let e=[...this.modules.keys()].find(r=>r.name===t);return e!=null?this.get(e):null}getModule(t){let e=this.modules.get(t);if(e==null)throw new Error(`module not in core: ${t.name}`);return e}createModule(t){if(t.prototype.moduleConfig==null)throw new Error(`not a module: ${t.name}`);let e=new t;e.core=this,e.gateway={module:e},this.modules.set(t,e)}applyModuleDecoration(t){var n,g,c,p,m,h;let e=t.constructor.prototype.moduleConfig,r=t.constructor.name;for(let{method:T}of e){let k=t[T].bind(t),H=(c=(g=(n=this.dvtag._hooks)==null?void 0:n.interceptModule)==null?void 0:g[r])==null?void 0:c[T],v=H==null?k:H.bind(t),Q=(h=(m=(p=this.dvtag._hooks)==null?void 0:p.inspectModule)==null?void 0:m[r])==null?void 0:h[T],Et=Q==null?v:(...it)=>{let W=v(...it);return Q(it,W),W},Se=i((...it)=>{let W;try{W=Et(...it)}catch(ut){throw this.traceMethodError(t,T,it,ut)}return W instanceof Promise?W.then(ut=>ut,ut=>{throw this.traceMethodError(t,T,it,ut)}):W},"traced");t.gateway[T]=Se}if(t.plugins!=null){t.pluginFunctions={};for(let T of Object.keys(t.plugins)){t.pluginFunctions[T]=[];let k=t.pluginFunctions[T];t.plugins[T]=(...H)=>{let v=[];for(let Q of k)try{v.push(Q(...H))}catch(Et){this.tracePluginError(t,T,Et)}return v}}}}traceMethodError(t,e,r,n){let g=new X(n);return g.addToTrace(`${t.constructor.name}.${e}(${r.map(c=>typeof c).join(",")})`),g}traceExecuteError(t){let e=new X(t);return e.addToTrace("@execute"),this.handleSevereError(e),e}tracePluginError(t,e,r){let n=new X(r);return n.addToTrace(`@plugin(${t.constructor.name}, '${e}')`),this.handleSevereError(n),n}traceApiError(t,e){let r=new X(e);return r.addToTrace(`@api('${t}')`),this.handleSevereError(r),r}handleSevereError(t){for(let e of this.errorHandlers)try{e(t)}catch(r){}this.errors.length>10||this.errors.push({message:t.message,trace:t.trace})}applyErrorDecoration(t){var r;let e=(r=t.constructor.prototype.errorConfig)!=null?r:[];for(let{method:n}of e)this.errorHandlers.push(t.gateway[n])}applyPluginDecoration(t){var r;let e=(r=t.constructor.prototype.pluginConfig)!=null?r:[];for(let{PluggableClass:n,category:g,method:c}of e)this.getModule(n).pluginFunctions[g].push(t.gateway[c])}applyApiDecoration(t){var r;let e=(r=t.constructor.prototype.apiConfig)!=null?r:[];for(let{api:n,method:g}of e)Object.defineProperty(this.dvtag,n,{value:(...c)=>{var p,m;try{return t.gateway[g](...c)}catch(h){return this.traceApiError(n,h),(m=(p=Ut)[n])==null?void 0:m.call(p,...c)}},writable:!1})}applyExecuteDecoration(t){return S(this,null,function*(){var r;let e=(r=t.constructor.prototype.executeConfig)!=null?r:[];for(let{method:n}of e)try{yield t.gateway[n]()}catch(g){this.traceExecuteError(g)}})}};i(Ct,"Core");var ct=Ct;var wt=[],qt=wt;var d=i(o=>{let t=o.prototype,e=Object.getOwnPropertyNames(t).filter(r=>{var n;return r!=="constructor"&&((n=Object.getOwnPropertyDescriptor(t,r))==null?void 0:n.value)instanceof Function});t.moduleConfig=e.map(r=>({method:r})),wt.push(o)},"moduleClass"),J=i(o=>t=>{},"attachModule"),O=i((o,t)=>{var e;o.executeConfig=(e=o.executeConfig)!=null?e:[],o.executeConfig.push({method:t})},"executeMethod"),f=i((o,t)=>(e,r)=>{var n;e.pluginConfig=(n=e.pluginConfig)!=null?n:[],e.pluginConfig.push({PluggableClass:o,category:t,method:r})},"pluginMethod"),st=i(o=>(t,e)=>{var r;t.apiConfig=(r=t.apiConfig)!=null?r:[],t.apiConfig.push({api:o,method:e})},"apiMethod"),Bt=i((o,t)=>{var e;o.errorConfig=(e=o.errorConfig)!=null?e:[],o.errorConfig.push({method:t})},"errorMethod");var at=i(o=>{if(o==null)return[];let t=Yt(o);return t!=null?[t]:Array.isArray(o)?o.map(Yt).filter(e=>e!=null):[]},"parseSlotSizes"),Yt=i(o=>{if(o==null)return null;if(typeof o=="string")return{label:o};if(Array.isArray(o)){if(o.length===1&&typeof o[0]=="string")return{label:o[0]};if(o.length===2&&typeof o[0]=="number"&&typeof o[1]=="number")return{width:o[0],height:o[1]}}if(typeof o=="object"){let{label:t,width:e,height:r}=o;if(typeof e=="number"&&typeof r=="number")return{width:e,height:r};if(typeof t=="string")return{label:t}}return null},"parseSlotSize");var Vt=i(o=>{try{return o.getSizes()}catch(t){return[]}},"getGptSlotSizesSafe");var $t=i(o=>{let t=o.split("/").map(n=>n.trim()).filter(n=>n.length>0);if(t.length<2)return;let e=t[0].split(",",1)[0],r=Number(e);return Number.isNaN(r)?void 0:`${r}`},"getNetworkCodeFromAdUnit");var Ht=i((o,t)=>{let e=o.getAdUnitPath(),r=$t(e);return{id:e,network:r,sizes:at(Vt(o)),position:o.getTargeting(t)[0]}},"gptSlotToAdUnit");var Wt=i((o,t)=>({getTargeting:e=>[...new Set([...t(e),...o.getTargeting(e)])],setTargeting:(e,r)=>{o.setTargeting(e,r)}}),"gptSlotToTargetable");var Ot="dvp_spos";var F=class{_getAdServers(){try{return l}catch(t){return{}}}isAdServerConfigured(t){return t!=null&&t in this._getAdServers()}getAdServerConfig(t){var e;return this.isAdServerConfigured(t)?(e=this._getAdServers()[t])!=null?e:{}:{}}getAdServerCustomTracking(t){var e;return this.isAdServerConfigured(t)?(e=this._getAdServers()[t].customTracking)!=null?e:{}:{}}getAdServerId(t){return this.isAdServerConfigured(t)?this._getAdServers()[t].adServerId:null}getAdPositionKey(t){var e,r;return t==null?Ot:(r=(e=this._getAdServers()[t])==null?void 0:e.adPositionKey)!=null?r:Ot}};i(F,"AdServers"),F=a([d],F);var Tt,ve=new Uint8Array(16);function Dt(){if(!Tt&&(Tt=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Tt))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Tt(ve)}i(Dt,"rng");var E=[];for(let o=0;o<256;++o)E.push((o+256).toString(16).slice(1));function Xt(o,t=0){return E[o[t+0]]+E[o[t+1]]+E[o[t+2]]+E[o[t+3]]+"-"+E[o[t+4]]+E[o[t+5]]+"-"+E[o[t+6]]+E[o[t+7]]+"-"+E[o[t+8]]+E[o[t+9]]+"-"+E[o[t+10]]+E[o[t+11]]+E[o[t+12]]+E[o[t+13]]+E[o[t+14]]+E[o[t+15]]}i(Xt,"unsafeStringify");var be=typeof crypto!="undefined"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Mt={randomUUID:be};function Pe(o,t,e){if(Mt.randomUUID&&!t&&!o)return Mt.randomUUID();o=o||{};let r=o.random||(o.rng||Dt)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){e=e||0;for(let n=0;n<16;++n)t[e+n]=r[n];return t}return Xt(r)}i(Pe,"v4");var kt=Pe;var j=i(()=>kt(),"uuid");var It=class It{constructor(t,e,r,n,g){this._slotStore=t;this.source=e;this.elementId=r;this.adUnit=n;this._targetable=g;s(this,"uuid");s(this,"_variables",new Map);s(this,"_targeting",{});s(this,"_flushedTargeting",{});this.uuid=j()}setVariable(t,e){this._variables.set(t,e)}getVariable(t){return this._variables.get(t)}clearVariable(t){this._variables.delete(t)}getUptTargetingKeys(){return[...new Set([...Object.keys(this._targeting),...this._slotStore.getUptPageTargetingKeys()])]}getUptTargetingForKey(t){var e;return[...new Set([...(e=this._targeting[t])!=null?e:[],...this._slotStore.getUptPageTargetingForKey(t)])]}getUptTargeting(){let t={};for(let e of this.getUptTargetingKeys())t[e]=this.getUptTargetingForKey(e);return t}setUptSlotTargeting(t){for(let[e,r]of Object.entries(t))this._targeting[e]=[...new Set(r)],this.flushUptTargetingToAdServer(e)}addUptSlotTargeting(t){var e;for(let[r,n]of Object.entries(t))this._targeting[r]=[...new Set([...(e=this._targeting[r])!=null?e:[],...n])],this.flushUptTargetingToAdServer(r)}getAdServerTargeting(t){var e,r;return(r=(e=this._targetable)==null?void 0:e.getTargeting(t))!=null?r:[]}flushUptTargetingToAdServer(t){var n;if(this._targetable==null)return;let e=(n=this._flushedTargeting[t])!=null?n:[],r=this.getUptTargetingForKey(t);(e.length!==r.length||r.sort().some((g,c)=>e[c]!==g))&&(this._targetable.setTargeting(t,this.getUptTargetingForKey(t)),this._flushedTargeting[t]=r)}forceFlushAllUptTargetingToAdServer(){this._targetable!=null&&(this._flushedTargeting={},this.getUptTargetingKeys().forEach(t=>this.flushUptTargetingToAdServer(t)))}validateAdServerTargeting(){let t=2;for(let e of this.getUptTargetingKeys()){let r=this.getUptTargetingForKey(e),n=this.getAdServerTargeting(e);if(r.length>n.length||r.some(g=>!n.includes(g)))return 0;n.length>r.length&&(t=1)}return t}};i(It,"Slot");var dt=It;var y=class{constructor(){s(this,"plugins",{slotDiscovered:(t,e)=>[],slotDestroyed:t=>[]});s(this,"_slots",{});s(this,"_pageTargeting",{})}getSlot(t,e){var r;return(r=this._slots[t])==null?void 0:r[e]}getSlots(t){var e;if(t==null){let r=[];for(let n of Object.values(this._slots))r.push(...Object.values(n));return r}return Object.values((e=this._slots[t])!=null?e:{})}createSlot(t,e,r,n,g,c){var h,T;let p=this.getSlot(t,r);p!=null&&this.plugins.slotDestroyed(p);let m=new dt(this,t,r,n,g);(T=(h=this._slots)[t])!=null||(h[t]={}),this._slots[t][r]=m;for(let k of Object.keys(this._pageTargeting))m.flushUptTargetingToAdServer(k);return c==null||c(m),this.plugins.slotDiscovered(m,e),m}getUptPageTargetingKeys(){return Object.keys(this._pageTargeting)}getUptPageTargetingForKey(t){var e;return(e=this._pageTargeting[t])!=null?e:[]}getUptPageTargeting(){let t={};for(let[e,r]of Object.entries(this._pageTargeting))t[e]=[...r];return t}setUptPageTargeting(t){for(let[e,r]of Object.entries(t))this._pageTargeting[e]=[...new Set(r)];this._flushUptPageTargetingToAdServer(Object.keys(t))}addUptPageTargeting(t){var e;for(let[r,n]of Object.entries(t))this._pageTargeting[r]=[...new Set([...(e=this._pageTargeting[r])!=null?e:[],...n])];this._flushUptPageTargetingToAdServer(Object.keys(t))}_flushUptPageTargetingToAdServer(t){for(let e of Object.values(this._slots))for(let r of Object.values(e))for(let n of t)r==null||r.flushUptTargetingToAdServer(n)}};i(y,"SlotStore"),y=a([d],y);var Nt=class Nt{constructor(){s(this,"pending",[]);s(this,"flushing",!1)}push(t){this.pending.push(t),this.flush()}flush(){return S(this,null,function*(){var e;if(this.flushing)return;this.flushing=!0;let t=this.pending.shift();for(;t!=null;){try{yield t.promise}catch(r){}try{(e=t.callback)==null||e.call(t)}catch(r){}t=this.pending.shift()}this.flushing=!1})}};i(Nt,"AsyncQueue");var Rt=Nt;var R=class{constructor(){s(this,"plugins",{adRequestQueued:t=>[],adRequestTimedOut:t=>[],adRequestBeforeRelease:t=>[],adRequestCompleted:t=>[]});s(this,"queue",new Rt);s(this,"adRequestCounter",0)}_queueAdRequest(t={}){var g,c;let e={index:this.adRequestCounter++,status:"queued",timeoutValue:(g=t.timeout)!=null?g:0,onDvtagReadyCalled:(c=t.timestamp)!=null?c:0,waitingStarted:new Date().getTime(),internal:t.internal};this.plugins.adRequestQueued(e);let r=t.callback;r===void 0?t.callback=()=>{}:r===null?e.status="tag-timeout":t.callback=()=>{e.status="queue-timeout",e.callbackCalled=new Date().getTime(),t.callback=null,this.plugins.adRequestTimedOut(e);try{r()}catch(p){}};let n=i(()=>{if(t.callback!=null){t.callback=null,e.status="success",e.callbackCalled=new Date().getTime(),this.plugins.adRequestBeforeRelease(e);try{r==null||r()}catch(p){}}else this.plugins.adRequestBeforeRelease(e);e.waitingEnded=new Date().getTime(),this.plugins.adRequestCompleted(e)},"onAsyncOperationsCompleted");this.queue.push({callback:n,adRequest:e})}delayAdRequests(t){this.queue.push({promise:t})}};i(R,"AdRequestQueue"),a([st("queueAdRequest")],R.prototype,"_queueAdRequest",1),R=a([d],R);var xe=[[/((\?)|&)(?:amp_lite|fr=operanews)/g,"$2"],[/(^https?:\/\/)(www\.)/g,"$1"],[/(((\?)|&|%3F|%26|;)(?:utm_campaign|utm_source|utm_content|utm_term|utm_viral|utm_medium|utm_identifier|utm_key|fb_source|referrer|referer|ref|rand|rnd|randid|\.?rand|\.?partner|cb|count|adid|session|sessionid|session_redirect|param\d|userinfo|uid|refresh|ocid|ncid|clickenc|fbclid|amp_js_v|amp_gsa|ns_source|ns_campaign|ns_mchanel|ns_mchannel|ns_linkname|ns_fee|src|ex_cid|usqp|source|xid|trkid|utm_social-type|mbid|utm_brand|__twitter_impression|utm_referrer|CMP|cmp|_cmp|cq_cmp)=[^&]*)/g,"$3"],[/[/.]amp(?:\/[?&]*)?$/g,""],[/((\?)|&)(?:outputType|isFollow|suppressMediaBar|cid|ICID|icid|bdk|wtu_id_h|utm_placement|intcmp|_native_ads|traffic_source|entry|\.tsrc|autoplay|autostart|dc_data|influencer|pubdate|utm_hp_ref|redirect|service|refresh_ce|refresh_cens|xcmg|target_id|_amp)=[^&]*/g,"$2"],[/(\?|&)(?:amp)(?:&|$|=[^&]*)/g,"$1"]],Ce=[[/(?:\/|\/\?|\?|&|\/\$0|#[\s\S]*)+$/g,""],[/(?:\/|\/\?|\?|&|\/\$0|#[\s\S]*)+$/g,""]],Jt=i((o,t)=>{for(let[e,r]of o)t=t.replace(e,r);return t},"replaceByRules"),Zt=i(o=>{let t=Jt(xe,o);return Jt(Ce,t)},"normalizeUrl");var te=i(o=>o.split("?",1)[0].split("#",1)[0],"stripUrlQuery");var ee=i((o,t)=>{try{let e=new URLSearchParams(o),r=e.get("ctx"),n=e.get("cmp");if(r!=null&&n!=null)return{ctx:r,cmp:n,prefetch:t,legacy:!0}}catch(e){}return null},"parseInfo"),re=i(o=>{var t;return o.pathname!=="/signals/pub.js"?null:(t=ee(o.search,!0))!=null?t:ee(o.hash.substring(1),!1)},"parseLegacyPagetagUrl");var we=/^\/dvtag\/([^/]+)\/([^/]+)\/pub\.js$/,b=class{constructor(){s(this,"visitUuid",j());s(this,"tagInfo");s(this,"normalizedUrl")}_initialize(){this.getTagInfo()}getTagInfo(){var t;if(this.tagInfo==null){try{this.tagInfo=this._parseTagInfo()}catch(e){}(t=this.tagInfo)!=null||(this.tagInfo={ctx:"unknown",cmp:"unknown"})}return this.tagInfo}getVisitUuid(){return this.visitUuid}_parseTagInfo(){let t=this.getCurrentScriptSrc();if(t==null)return null;let e=new URL(t,"https://pub.doubleverify.com"),r=e.pathname,n=we.exec(r);if(n!=null){let[,g,c]=n;return{ctx:g,cmp:c}}return re(e)}getCurrentScriptSrc(){var t,e;return(e=(t=this.core.window.document.currentScript)==null?void 0:t.getAttribute("src"))!=null?e:null}getStrippedPageUrl(){return te(this.core.window.location.href)}getNormalizedPageUrl(){var e;let t=this.getStrippedPageUrl();return((e=this.normalizedUrl)==null?void 0:e.stripped)!==t&&(this.normalizedUrl={stripped:t,normalized:Zt(this.core.window.location.href)}),this.normalizedUrl.normalized}};i(b,"Context"),a([O],b.prototype,"_initialize",1),b=a([d],b);var I=class{getShortCommitId(){return"c17ea96"}getBuildTimestamp(){return 1730008833941}getAuthToken(){return"WyOMaynLR4AMPqi+zwenTYegVJ9kzMH5I+EHNiXaGTgWXSXWFUjUsc1Y1wEwUKhTi7Gw1cCea8gtT6VpKFcHnfSplRb+soW3htkJEjo96ILZN8P8ojTIqWfmbXjCj7VWRCf6mr0KKKZLbl9zdQLVphFeIYmO2mM="}};i(I,"DefinedVariables"),I=a([d],I);var U=class{constructor(){s(this,"cache",{})}_performFetchJson(t,e){return S(this,null,function*(){let r=t;if(e!=null&&e.authToken){let c=this.core.get(I).getAuthToken(),p=new URL(t);p.searchParams.set("token",c),r=p.href}let n=yield this.core.window.fetch(r);return{json:yield n.json(),headers:n.headers}})}fetchJson(t,e){return S(this,null,function*(){let r=this.cache[t];return r==null&&(r=this._performFetchJson(t,e).then(n=>n.json),this.cache[t]=r),r})}};i(U,"Fetch"),U=a([d],U);var pt=["BSC","ABS","CCT"],Lt=["IDS"],mt=["VLP","TVP"],jn=[...pt,...Lt,...mt],zn=[...pt,...Lt,...mt].filter(o=>o!=="CCT");var oe=i(o=>mt.includes(o.toUpperCase()),"isSlotSignal"),ne=i(o=>Lt.includes(o.toUpperCase()),"isUserSignal"),ie=i(o=>pt.includes(o.toUpperCase()),"isPageSignal");var At=i(o=>o==null?"":`@${o}`,"getPositionSuffix");var qe=/^(\d+)x(\d+)$/,se=i(o=>o==="all"?[]:o.split(",").map(t=>{let e=t.match(qe);return e==null?{label:t}:{width:parseInt(e[1],10),height:parseInt(e[2],10)}}),"stringToSlotSizes"),Gt=i(o=>o.length===0?"all":o.map(({width:t,height:e,label:r})=>r!=null?r:`${t}x${e}`).join(","),"slotSizesToString"),ae=i(o=>o==null?"":o.length>0&&o.every(({label:r})=>r==null)?Gt(o):"","slotSizesToStringIfSpecific");var Oe="https://pub.doubleverify.com/dvtag/signals/",x=class{_getBaseUrl(t){let e=this.core.get(b),{ctx:r,cmp:n}=e.getTagInfo(),g=e.getNormalizedPageUrl();try{g=new URL(g).origin}catch(p){}let c=new URL(t,Oe);return c.searchParams.set("ctx",r),c.searchParams.set("cmp",n),c.searchParams.set("url",g),c}getUserTargetingUrl(t){let e=this._getBaseUrl("ids/pub.json");return t.includes("IDS")&&e.searchParams.set("ids","1"),e.href}getPageTargetingUrl(t,e){let r=this._getBaseUrl("bsc/pub.json");return r.searchParams.set("url",e),t.includes("BSC")&&r.searchParams.set("bsc","1"),t.includes("ABS")&&r.searchParams.set("abs","1"),t.includes("CCT")&&r.searchParams.set("cct","1"),r.href}getSlotTargetingUrl(t,e){var g;let r=this._getBaseUrl("vlp/pub.json");t.includes("VLP")&&r.searchParams.set("vlp","1"),t.includes("TVP")&&r.searchParams.set("tvp","1");let n=0;for(let c of e){let{id:p,position:m,sizes:h}=(g=c.adUnit)!=null?g:{},T=p+At(m);r.searchParams.set(`slot-${n++}-${T}`,ae(h))}return r.href}};i(x,"SignalsUrlBuilder"),x=a([d],x);var z=class{constructor(){s(this,"cache",{})}_fetchFreshSignals(t,e){return S(this,null,function*(){if(!e.some(ie))return{};let r=this.core.get(x).getPageTargetingUrl(e,t),n;try{n=yield this.core.get(U).fetchJson(r,{authToken:!0})}catch(g){return{}}return n instanceof Object?n:{}})}fetchSignals(t,e=3){return S(this,null,function*(){let r=this.core.get(b),n=r.getNormalizedPageUrl(),g=r.getStrippedPageUrl();this.cache[g]==null&&(this.cache[g]=this._fetchFreshSignals(n,t));let c=yield this.cache[g];return this.core.get(b).getStrippedPageUrl()!==g&&e>0?this.fetchSignals(t,e-1):c})}};i(z,"PageSignals"),z=a([d],z);var K=class{constructor(){s(this,"cache",{});s(this,"pendingSlots",[]);s(this,"pendingBulkRequest",null)}_scheduleBulkRequest(t){return S(this,null,function*(){yield Promise.resolve();let e=this.core.get(x).getSlotTargetingUrl(t,this.pendingSlots);this.pendingSlots=[],this.pendingBulkRequest=null;let r;try{r=yield this.core.get(U).fetchJson(e,{authToken:!0})}catch(n){return[]}return r})}_fetchFreshSignals(t,e){return S(this,null,function*(){if(!e.some(oe))return{};let r=this.pendingSlots.push(t)-1;this.pendingBulkRequest==null&&(this.pendingBulkRequest=this._scheduleBulkRequest(e));let g=(yield this.pendingBulkRequest)[r];return g instanceof Object?g:{}})}_getCacheKey(t){var p,m;let{id:e,position:r,sizes:n}=(p=t.adUnit)!=null?p:{},g=e+At(r),c=(m=n==null?void 0:n.map(h=>{var T;return(T=h.label)!=null?T:`${h.width}x${h.height}`}).sort().join(","))!=null?m:"";return`${g}#${c}`}fetchSignals(t,e){return S(this,null,function*(){let r=this._getCacheKey(t);return this.cache[r]==null&&(this.cache[r]=this._fetchFreshSignals(t,e)),this.cache[r]})}};i(K,"SlotSignals"),K=a([d],K);var B=class{constructor(){s(this,"cache")}_fetchFreshSignals(t){return S(this,null,function*(){if(!t.some(ne))return{};let e=this.core.get(x).getUserTargetingUrl(t),r;try{r=yield this.core.get(U).fetchJson(e,{authToken:!0})}catch(n){return{}}return r instanceof Object?r:{}})}fetchSignals(t){return S(this,null,function*(){return this.cache==null&&(this.cache=this._fetchFreshSignals(t)),this.cache})}};i(B,"UserSignals"),B=a([d],B);var A=class{constructor(){s(this,"plugins",{getEnabledSignals:()=>[],userTargetingUpdated:t=>[],pageTargetingUpdated:t=>[],slotTargetingUpdated:(t,e)=>[]});s(this,"dataForMigrationTracking",{userTargeting:{},pageTargeting:{},slotTargeting:new Map})}getEnabledSignals(){return this.plugins.getEnabledSignals()}getDataForMigrationTracking(){return this.dataForMigrationTracking}_initialize(){this.getUserTargeting(),this.getPageTargeting()}_onAdRequestQueued(){this.getPageTargeting()}_onSlotDiscovered(t){this.getSlotTargeting(t)}getUserTargeting(){return S(this,null,function*(){let t=this._fetchUserTargeting();return this.core.get(R).delayAdRequests(t),t})}getPageTargeting(){return S(this,null,function*(){let t=this._fetchPageTargeting();return this.core.get(R).delayAdRequests(t),t})}getSlotTargeting(t){return S(this,null,function*(){let e=this._fetchSlotTargeting(t);return this.core.get(R).delayAdRequests(e),e})}_fetchUserTargeting(){return S(this,null,function*(){let t=this.core.get(y),e=yield this.core.get(B).fetchSignals(this.getEnabledSignals());return t.setUptPageTargeting(e),this.dataForMigrationTracking.userTargeting=e,this.plugins.userTargetingUpdated(e),e})}_fetchPageTargeting(){return S(this,null,function*(){let t=this.core.get(y),e=yield this.core.get(z).fetchSignals(this.getEnabledSignals());return t.setUptPageTargeting(e),this.dataForMigrationTracking.pageTargeting=e,this.plugins.pageTargetingUpdated(e),e})}_fetchSlotTargeting(t){return S(this,null,function*(){let e=yield this.core.get(K).fetchSignals(t,this.getEnabledSignals());return t.setUptSlotTargeting(e),this.dataForMigrationTracking.slotTargeting.set(t,e),this.plugins.slotTargetingUpdated(t,e),e})}};i(A,"Signals"),a([O],A.prototype,"_initialize",1),a([f(R,"adRequestQueued")],A.prototype,"_onAdRequestQueued",1),a([f(y,"slotDiscovered")],A.prototype,"_onSlotDiscovered",1),A=a([d],A);var C=class{constructor(){s(this,"pq",null)}getPq(){return this.pq==null&&(this.pq=this._initialize()),this.pq}getPts(){return this.getPq().PTS}setApi(t){let e=this.getPq();e!=null&&(e.init=()=>{},e.loadSignals=t.loadSignals,e.loadSignalsForSlots=t.loadSignalsForSlots,e.getTargeting=t.getTargeting)}_pushToDvtagCmd(...t){var e;this.core.dvtag.cmd=(e=this.core.dvtag.cmd)!=null?e:[],this.core.dvtag.cmd.push(...t)}_initialize(){var r,n;this.core.window.PQ=(r=this.core.window.PQ)!=null?r:{};let t=this.core.window.PQ;if(t.loaded)return{cmd:[],PTS:{}};t.loaded=!0,t.PTS=(n=t.PTS)!=null?n:{};let e=t.cmd;return t.cmd={push:g=>this._pushToDvtagCmd(g)},Array.isArray(e)&&this._pushToDvtagCmd(...e),t}};i(C,"LegacyPq"),C=a([d],C);var ge=i(o=>{var r,n,g;let t=j(),e={id:(n=(r=o.adUnitPath)!=null?r:o.invCode)!=null?n:o.tagId,sizes:at(se((g=o.sizes)!=null?g:"all")),position:o.position};return{elementId:t,adUnit:e}},"parseLegacyAdUnit");var le=i((o,t)=>{var n;let e=(n=o.IDS)==null?void 0:n[0];if(e==null)return;let r=parseInt(e);isNaN(r)||(t.IDS=r)},"setUserTargetingOnPts"),ue=i((o,t)=>{for(let e of pt)o[e]!=null&&(t[e]=o[e])},"setPageTargetingOnPts"),ce=i((o,t,e)=>{var p,m,h,T,k,H;let{adUnit:r}=o;if((r==null?void 0:r.id)==null)return;let n=r.id,g=Gt((p=r.sizes)!=null?p:[]),c=r.position;for(let v of mt){let Q=t[v];Q!=null&&((m=e[v])!=null||(e[v]={}),(T=(h=e[v])[n])!=null||(h[n]={}),e[v][n][g]=Q[0],c!=null&&((H=(k=e[v][n])[c])!=null||(k[c]={}),e[v][n][c][g]=Q[0]))}},"setSlotTargetingOnPts");var De="legacy-api",de="gpt",N=class extends _{_initialize(){this.core.get(C).setApi({loadSignals:this.loadSignals.bind(this),loadSignalsForSlots:this.loadSignalsForSlots.bind(this),getTargeting:this.getTargeting.bind(this)})}_setUserTargetingOnPts(t){let e=this.core.get(C).getPts();le(t,e)}_setPageTargetingOnPts(t){let e=this.core.get(C).getPts();ue(t,e)}_setSlotTargetingOnPts(t,e){let r=this.core.get(C).getPts();ce(t,e,r)}loadSignals(t,e){return S(this,null,function*(){yield this._onDvtagReady("loadSignals",e)})}loadSignalsForSlots(t,e,r){return S(this,null,function*(){let n=this.core.get(A),g=this.core.get(y);for(let p of t){let m=p.getSlotElementId(),h=g.getSlot(de,m);if(h==null){let T=this.core.get(F).getAdPositionKey(p.getAdUnitPath());h=g.createSlot(de,0,m,Ht(p,T),Wt(p,k=>this._getPubAdsTargeting(k)))}n.getSlotTargeting(h)}let c=typeof e=="function"?e:r;yield this._onDvtagReady("loadSignalsForSlots",c)})}getTargeting(t,e){return S(this,null,function*(){var c;let r=this.core.get(A),n=this.core.get(y);for(let p of(c=t.adUnits)!=null?c:[]){let{elementId:m,adUnit:h}=ge(p),T=n.createSlot(De,0,m,h);r.getSlotTargeting(T)}let g=i(()=>e==null?void 0:e(void 0,this.core.get(C).getPts()),"callback");yield this._onDvtagReady("getTargeting",g)})}_getPubAdsTargeting(t){var e,r,n;return(n=(r=(e=this.core.window.googletag)==null?void 0:e.pubads)==null?void 0:r.call(e).getTargeting(t))!=null?n:[]}_onDvtagReady(t,e){return S(this,null,function*(){yield new Promise(r=>{this.core.window.dvtag.queueAdRequest({callback:()=>{try{e==null||e()}catch(n){}r()},timestamp:new Date().getTime(),timeout:750,internal:!0})})})}};i(N,"LegacyLayer"),a([O],N.prototype,"_initialize",1),a([f(A,"userTargetingUpdated")],N.prototype,"_setUserTargetingOnPts",1),a([f(A,"pageTargetingUpdated")],N.prototype,"_setPageTargetingOnPts",1),a([f(A,"slotTargetingUpdated")],N.prototype,"_setSlotTargetingOnPts",1),N=a([d],N);var Z=class extends _{_getEnabledSignals(){return"IDS"}};i(Z,"SignalsIds"),a([f(A,"getEnabledSignals")],Z.prototype,"_getEnabledSignals",1),Z=a([d],Z);var tt=class extends _{_getEnabledSignals(){return"BSC"}};i(tt,"SignalsBsc"),a([f(A,"getEnabledSignals")],tt.prototype,"_getEnabledSignals",1),tt=a([d],tt);var et=class extends _{_getEnabledSignals(){return"VLP"}};i(et,"SignalsVlp"),a([f(A,"getEnabledSignals")],et.prototype,"_getEnabledSignals",1),et=a([d],et);var rt=class extends _{_getEnabledSignals(){return"TVP"}};i(rt,"SignalsTvp"),a([f(A,"getEnabledSignals")],rt.prototype,"_getEnabledSignals",1),rt=a([d],rt);var ot=class extends _{_getEnabledSignals(){return"ABS"}};i(ot,"SignalsAbs"),a([f(A,"getEnabledSignals")],ot.prototype,"_getEnabledSignals",1),ot=a([d],ot);var Y=class{getWindow(){return this.core.window}getDocument(){return this.getWindow().document}getUserAgent(){var t,e;return(e=(t=this.getWindow().navigator)==null?void 0:t.userAgent)!=null?e:""}getPageUrl(){var t,e;return(e=(t=this.getWindow().location)==null?void 0:t.href)!=null?e:""}getHostname(){return new URL(this.getPageUrl()).hostname}getNavigator(){return this.getWindow().navigator}getPerformance(){var t;return(t=this.getWindow().performance)!=null?t:{}}getPerformanceTimeMs(){var t,e,r;return Math.floor((r=(e=(t=this.getPerformance()).now)==null?void 0:e.call(t))!=null?r:null)}isInQuirksMode(){return this.getDocument().compatMode==="BackCompat"}};i(Y,"Environment"),Y=a([d],Y);var Me="https://vtrk.doubleverify.com",me="dvtag",ke=1,Ie=1,w=class{constructor(){s(this,"sharedDataPoints")}_onAdRequestCompleted(t){if(t.index!==0)return;let{timeoutValue:e,onDvtagReadyCalled:r,callbackCalled:n}=t,g=n!=null?n-r:e;this.fireEvent("ad-request",{cd111:t.status,cm106:t.index,cm107:g,cd112:t.internal?"legacy":"modern"},{sampleInterval:Ie})}_handleError(t){this.fireEvent("log",{cd111:"error",cd112:t.message,cd113:t.trace.join("=>")},{sampleInterval:ke})}_getSharedDataPoints(){if(this.sharedDataPoints==null){let t=this.core.get(b),e=this.core.get(I),r=this.core.get(Y),{ctx:n,cmp:g,legacy:c}=t.getTagInfo(),p=r.getHostname(),m=t.getVisitUuid(),h=e.getShortCommitId();this.sharedDataPoints={cd102:h,cd103:"",cd107:m,cd109:c?"legacy":"modern",cd108:"",cd105:n,cd106:g,cd104:p}}return this.sharedDataPoints}fireEvent(t,e,{sampleInterval:r=1,trackerUuid:n=j(),spoofWrapperId:g=!1}={}){if(Math.random()>=1/r)return;e=Pt(ft(ft({},e),this._getSharedDataPoints()),{cd101:t,cm101:r});let c=Pt(ft({ec:me,ea:e.cd101,ctx:g?me:e.cd105,cmp:e.cd106},e),{cid:n,t:"event",v:1,z:n,cd160:n}),p=new URL(Me);for(let[m,h]of Object.entries(c))h!=null&&p.searchParams.set(m,`${h}`);this._sendBeacon(p.href)}_sendBeacon(t){try{typeof(navigator==null?void 0:navigator.sendBeacon)=="function"?navigator.sendBeacon(t):new Image().src=t}catch(e){}}};i(w,"Events"),a([f(R,"adRequestCompleted")],w.prototype,"_onAdRequestCompleted",1),a([Bt],w.prototype,"_handleError",1),w=a([d],w);var he="pts_pid";var Ne=he,D=class{constructor(){s(this,"restoreCount",0)}getRestoreCount(){return this.restoreCount}_restoreTargeting(){for(let t of this.core.get(y).getSlots())t.getAdServerTargeting(Ne).length===0&&(t.forceFlushAllUptTargetingToAdServer(),this.restoreCount+=1)}};i(D,"TargetingRestorer"),a([f(R,"adRequestQueued")],D.prototype,"_restoreTargeting",1),D=a([d],D);var Qt=class Qt{constructor(){s(this,"total",0);s(this,"dataPoints",0)}push(t){return this.total+=t,this.dataPoints+=1,this}get(){return this.total/this.dataPoints}getRounded(){return Math.round(this.get())}};i(Qt,"Average");var ht=Qt;var V=i(()=>{var o,t,e;return Math.floor((e=(t=(o=window.performance)==null?void 0:o.now)==null?void 0:t.call(o))!=null?e:Date.now())},"perfNowOrDateNow");var Ft=class Ft{set(t,e){t.setVariable(this,e)}get(t){return t.getVariable(this)}delete(t){t.clearVariable(this)}};i(Ft,"SlotVariable");var nt=Ft;var M=class{constructor(){s(this,"adEmpty",new nt);s(this,"plugins",{adRequested:t=>[],adRendered:(t,e)=>[],adRemoved:t=>[]})}setAdRequested(t){this.plugins.adRequested(t)}setAdRendered(t,e){this.setAdRemoved(t),this.adEmpty.set(t,!1),this.plugins.adRendered(t,e)}setAdRemoved(t){this.adEmpty.get(t)===!1&&(this.adEmpty.set(t,!0),this.plugins.adRemoved(t))}};i(M,"AdServerHub"),M=a([d],M);var jt=class jt{constructor(){s(this,"_firstQueuedAdRequest",1/0);s(this,"_lastQueuedAdRequest",-1/0);s(this,"_firstReleasedAdRequest",1/0);s(this,"_lastReleasedAdRequest",-1/0);s(this,"_lastReleasedAdRequestTime",null)}setAdRequestQueued(t){this._firstQueuedAdRequest=Math.min(this._firstQueuedAdRequest,t),this._lastQueuedAdRequest=Math.max(this._lastQueuedAdRequest,t)}setAdRequestReleased(t){this._firstReleasedAdRequest=Math.min(this._firstReleasedAdRequest,t),this._lastReleasedAdRequest=Math.max(this._lastReleasedAdRequest,t),this._lastReleasedAdRequestTime=V()}getLastQueuedAdRequest(){return Number.isFinite(this._lastQueuedAdRequest)?this._lastQueuedAdRequest:null}getLastReleasedAdRequest(){return Number.isFinite(this._lastReleasedAdRequest)?this._lastReleasedAdRequest:null}getLastReleasedAdRequestTime(){return this._lastReleasedAdRequestTime}getLastSuccessfulAdRequest(){let t=Math.max(this._firstQueuedAdRequest,this._firstReleasedAdRequest),e=Math.min(this._lastQueuedAdRequest,this._lastReleasedAdRequest);return e<t?null:e}};i(jt,"SlotAdRequestTracker");var yt=jt;var _t=(c=>(c.UNKNOWN="UNKNOWN",c.SEEN="SEEN",c.NOT_READY="NOT_READY",c.POSSIBLE_TIMEOUT="POSSIBLE_TIMEOUT",c.PREV_READY="PREV_READY",c.READY="READY",c))(_t||{});var zt="dv_upt_slot_ready",Le=["https://securepubads.g.doubleclick.net/gampad/ads?","https://pagead2.googlesyndication.com/gampad/ads?"],P=class{constructor(){s(this,"plugins",{onSlotRequested:()=>[],onSlotRequestValidated:()=>[]});s(this,"validateAdRequests",!1);s(this,"lastAdRequestQueued",null);s(this,"lastAdRequestReleased",null);s(this,"state",{adRequestTracker:new nt,triggered:new nt})}_getSlotAdRequestTracker(t){let e=this.state.adRequestTracker.get(t);return e==null&&(e=new yt,this.state.adRequestTracker.set(t,e)),e}_onAdRequestQueued({index:t}){this.lastAdRequestQueued=t;for(let e of this.core.get(y).getSlots())this._getSlotAdRequestTracker(e).setAdRequestQueued(t),this.state.triggered.set(e,!1)}_onAdRequestBeforeRelease({index:t}){this.lastAdRequestReleased=t;for(let e of this.core.get(y).getSlots())this._getSlotAdRequestTracker(e).setAdRequestReleased(t),this.validateAdRequests&&e.setUptSlotTargeting({[zt]:["1"]})}_onSlotDiscovered(t,e){var r;e===0&&this._getSlotAdRequestTracker(t).setAdRequestQueued((r=this.lastAdRequestQueued)!=null?r:0)}_determineReadyState(t){let e=this._getSlotAdRequestTracker(t),r=e.getLastQueuedAdRequest(),n=e.getLastReleasedAdRequest(),g=e.getLastSuccessfulAdRequest();return r==null&&n==null?"UNKNOWN":this.lastAdRequestQueued==null?g==null?"SEEN":"PREV_READY":this.lastAdRequestReleased==null||this.lastAdRequestReleased<this.lastAdRequestQueued?g==null?"NOT_READY":"PREV_READY":"READY"}getSlotReadyStateOnAdServerAdRequest(t){let e=this._determineReadyState(t);if(e==="READY"){if(this.state.triggered.get(t)===!0)return{readyState:"PREV_READY"};this.state.triggered.set(t,!0);let r=this._getSlotAdRequestTracker(t).getLastReleasedAdRequestTime();return{readyState:e,readyFor:V()-r}}return{readyState:e}}_onSlotRequested(t){let{readyState:e,readyFor:r}=this.getSlotReadyStateOnAdServerAdRequest(t);this.validateAdRequests&&t.setUptSlotTargeting({[zt]:["0"]}),this.plugins.onSlotRequested(t,e,r)}enableAdRequestValidation(){if(!this.validateAdRequests)try{let t=this._processResourceRequest.bind(this);new PerformanceObserver(r=>r.getEntries().forEach(t)).observe({type:"resource"}),this.validateAdRequests=!0}catch(t){}}_processResourceRequest(t){var e,r,n;try{if(Le.every(p=>!t.name.startsWith(p)))return;let c=(r=(e=new URL(t.name).searchParams.get("prev_scp"))==null?void 0:e.split("|"))!=null?r:[];for(let p of c){let h=((n=new URLSearchParams(p).get(zt))==null?void 0:n[0])==="1";this.plugins.onSlotRequestValidated(h)}}catch(g){}}};i(P,"SlotReadinessTracker"),a([f(R,"adRequestQueued")],P.prototype,"_onAdRequestQueued",1),a([f(R,"adRequestBeforeRelease"),f(R,"adRequestTimedOut")],P.prototype,"_onAdRequestBeforeRelease",1),a([f(y,"slotDiscovered")],P.prototype,"_onSlotDiscovered",1),a([f(M,"adRequested")],P.prototype,"_onSlotRequested",1),P=a([d],P);var Ge="implcheck",Qe=1e-4,Fe=5e3,je=5,q=class{constructor(){s(this,"enabled",!1);s(this,"totalInternalAdRequestQueuedCount",0);s(this,"totalAdRequestsCompletedCount",0);s(this,"totalSlotsRequestedCount",0);s(this,"totalSlotsRequestedOkCount",0);s(this,"totalTimeoutCount",0);s(this,"trackersSent",0);s(this,"totalValidatedAdServerRequests",{ok:0,notOk:0});s(this,"lastOnDvtagReadyCall",NaN);s(this,"slotReqAvgTimeSinceCall",new ht);s(this,"slotReqAvgTimeSinceDone",new ht);s(this,"batch",null)}isDebugForceEnabled(){return!1}_initialize(){this.enabled=this.core.get(q).isDebugForceEnabled()||Math.random()<Qe,this.enabled&&this.core.get(P).enableAdRequestValidation()}_onAdRequestQueued(t){this.enabled&&(this.lastOnDvtagReadyCall=V(),t.internal&&(this.totalInternalAdRequestQueuedCount+=1))}_onAdRequestCompleted(t){this.enabled&&(this.totalAdRequestsCompletedCount+=1,(t.status==="tag-timeout"||t.status==="queue-timeout")&&(this.totalTimeoutCount+=1))}_onSlotRequested(t,e,r){if(!this.enabled)return;let n=this._getOrStartBatch();this.totalSlotsRequestedCount+=1,e==="READY"&&(this.totalSlotsRequestedOkCount+=1),n.slots[e].push(t.elementId),r!=null&&(this.slotReqAvgTimeSinceDone.push(r),this.slotReqAvgTimeSinceCall.push(V()-this.lastOnDvtagReadyCall));let g=t.validateAdServerTargeting();g===1?n.targeting.extendedCount+=1:g===0&&(n.targeting.reducedCount+=1)}_onSlotRequestValidated(t){t?this.totalValidatedAdServerRequests.ok+=1:this.totalValidatedAdServerRequests.notOk+=1}_sendTracker(){let t=this.core.get(D).getRestoreCount(),{slots:e,targeting:r,start:n}=this._getOrStartBatch(),g={cd110:e.READY.join(),cd111:e.PREV_READY.join(),cd112:e.SEEN.join(),cd113:e.NOT_READY.join(),cd114:e.UNKNOWN.join(),cd115:e.POSSIBLE_TIMEOUT.join(),cm106:this.trackersSent,cm107:n,cm109:this.totalTimeoutCount,cm110:this.slotReqAvgTimeSinceCall.getRounded(),cm111:this.slotReqAvgTimeSinceDone.getRounded(),cm112:this.totalSlotsRequestedOkCount,cm113:this.totalValidatedAdServerRequests.ok,cm114:this.totalValidatedAdServerRequests.notOk,cm115:t,cm116:this.totalAdRequestsCompletedCount,cm117:this.totalInternalAdRequestQueuedCount,cm118:this.totalSlotsRequestedCount,cm119:r.reducedCount,cm120:r.extendedCount};this.core.get(w).fireEvent(Ge,g),this.batch=null,this.trackersSent+=1,this.trackersSent>=je&&(this.enabled=!1)}_getOrStartBatch(){return this.batch==null&&(this.batch={start:V(),slots:Object.fromEntries(Object.values(_t).map(t=>[t,[]])),targeting:{extendedCount:0,reducedCount:0}},setTimeout(()=>this._sendTracker(),Fe)),this.batch}};i(q,"ImplementationValidator"),a([O],q.prototype,"_initialize",1),a([f(R,"adRequestQueued")],q.prototype,"_onAdRequestQueued",1),a([f(R,"adRequestCompleted")],q.prototype,"_onAdRequestCompleted",1),a([f(P,"onSlotRequested")],q.prototype,"_onSlotRequested",1),a([f(P,"onSlotRequestValidated")],q.prototype,"_onSlotRequestValidated",1),q=a([d],q);var fe=i(o=>{if(typeof o=="string"||Array.isArray(o)&&o.length===2&&o.every(t=>typeof t=="number"))return o},"cleanSizeInput");var $=i(o=>{if(typeof o=="string")return o;if(typeof o=="number")return`${o}`},"cleanStringInput");var L=class{_defineSlot(t,e={}){if(typeof t!="string"||e==null||typeof e!="object")return;let r={id:$(e.id),network:$(e.network),sizes:e.sizes!=null?at(e.sizes):void 0,position:$(e.position)};this.core.get(y).createSlot("custom",0,t,r)}_adRendered(t,e){if(typeof t!="string"||e==null||typeof e!="object")return;let r=this.core.get(y).getSlot("custom",t);if(r==null)return;let n={advertiserId:$(e.advertiserId),campaignId:$(e.campaignId),creativeId:$(e.creativeId),lineItemId:$(e.lineItemId),renderedSize:fe(e.renderedSize)};this.core.get(M).setAdRendered(r,n)}_adRemoved(t){if(typeof t!="string")return;let e=this.core.get(y).getSlot("custom",t);e!=null&&this.core.get(M).setAdRemoved(e)}_getTargeting(t){let e=this.core.get(y);if(typeof t!="string")return e.getUptPageTargeting();let r=e.getSlot("custom",t);return r==null?e.getUptPageTargeting():r.getUptTargeting()}};i(L,"CustomAdServer"),a([st("defineSlot")],L.prototype,"_defineSlot",1),a([st("getTargeting")],L.prototype,"_getTargeting",1),L=a([d],L);var G=class{constructor(){s(this,"initialized",!1);s(this,"size",0)}_initialize(){return S(this,null,function*(){if(yield Promise.resolve(),this.initialized)return;this.initialized=!0,this.core.dvtag.cmd instanceof Array||(this.core.dvtag.cmd=[]);let t=this.core.dvtag.cmd;this.core.dvtag.cmd={push:(...e)=>{for(let r of e)try{r()}catch(n){}return this.size+=e.length,this.size}},this.core.dvtag.cmd.push(...t)})}};i(G,"CommandBuffer"),a([O],G.prototype,"_initialize",1),G=a([d],G);var lt=class{};i(lt,"HouseHold"),lt=a([d,J(R),J(G),J(w),J(L),J(D)],lt);if(window.dvtag==null||window.dvtag._core==null)try{new ct(qt,window)}catch(o){}})();
