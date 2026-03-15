var Yf=Object.defineProperty;var Gf=Object.getPrototypeOf;var Qf=Reflect.get;var Vc=t=>{throw TypeError(t)};var zf=(t,e,i)=>e in t?Yf(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var qc=(t,e,i)=>zf(t,typeof e!="symbol"?e+"":e,i),vl=(t,e,i)=>e.has(t)||Vc("Cannot "+i);var k=(t,e,i)=>(vl(t,e,"read from private field"),i?i.call(t):e.get(t)),Fe=(t,e,i)=>e.has(t)?Vc("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),ot=(t,e,i,a)=>(vl(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),lt=(t,e,i)=>(vl(t,e,"access private method"),i);var $n=(t,e,i)=>Qf(Gf(t),i,e);import{R as vn,r as fn}from"./index-_ebjIanr.js";import{H as Zf}from"./hls-DrU42sTK.js";import{C as Un,M as jf}from"./mixin-C_e69MQf.js";var Xf=Object.create,wm=Object.defineProperty,Jf=Object.getOwnPropertyDescriptor,eE=Object.getOwnPropertyNames,tE=Object.getPrototypeOf,iE=Object.prototype.hasOwnProperty,Im=function(t,e){return function(){return t&&(e=t(t=0)),e}},Ye=function(t,e){return function(){return e||t((e={exports:{}}).exports,e),e.exports}},aE=function(t,e,i,a){if(e&&typeof e=="object"||typeof e=="function")for(var r=eE(e),n=0,s=r.length,o;n<s;n++)o=r[n],!iE.call(t,o)&&o!==i&&wm(t,o,{get:(function(l){return e[l]}).bind(null,o),enumerable:!(a=Jf(e,o))||a.enumerable});return t},rt=function(t,e,i){return i=t!=null?Xf(tE(t)):{},aE(!t||!t.__esModule?wm(i,"default",{value:t,enumerable:!0}):i,t)},Ct=Ye(function(t,e){var i;typeof window<"u"?i=window:typeof global<"u"?i=global:typeof self<"u"?i=self:i={},e.exports=i});function fa(t,e){return e!=null&&typeof Symbol<"u"&&e[Symbol.hasInstance]?!!e[Symbol.hasInstance](t):fa(t,e)}var Ea=Im(function(){Ea()});function Rm(t){"@swc/helpers - typeof";return t&&typeof Symbol<"u"&&t.constructor===Symbol?"symbol":typeof t}var Cm=Im(function(){}),Lm=Ye(function(t,e){var i=Array.prototype.slice;e.exports=a;function a(r,n){for(("length"in r)||(r=[r]),r=i.call(r);r.length;){var s=r.shift(),o=n(s);if(o)return o;s.childNodes&&s.childNodes.length&&(r=i.call(s.childNodes).concat(r))}}}),rE=Ye(function(t,e){Ea(),e.exports=i;function i(a,r){if(!fa(this,i))return new i(a,r);this.data=a,this.nodeValue=a,this.length=a.length,this.ownerDocument=r||null}i.prototype.nodeType=8,i.prototype.nodeName="#comment",i.prototype.toString=function(){return"[object Comment]"}}),nE=Ye(function(t,e){Ea(),e.exports=i;function i(a,r){if(!fa(this,i))return new i(a);this.data=a||"",this.length=this.data.length,this.ownerDocument=r||null}i.prototype.type="DOMTextNode",i.prototype.nodeType=3,i.prototype.nodeName="#text",i.prototype.toString=function(){return this.data},i.prototype.replaceData=function(a,r,n){var s=this.data,o=s.substring(0,a),l=s.substring(a+r,s.length);this.data=o+n+l,this.length=this.data.length}}),Dm=Ye(function(t,e){e.exports=i;function i(a){var r=this,n=a.type;a.target||(a.target=r),r.listeners||(r.listeners={});var s=r.listeners[n];if(s)return s.forEach(function(o){a.currentTarget=r,typeof o=="function"?o(a):o.handleEvent(a)});r.parentNode&&r.parentNode.dispatchEvent(a)}}),Mm=Ye(function(t,e){e.exports=i;function i(a,r){var n=this;n.listeners||(n.listeners={}),n.listeners[a]||(n.listeners[a]=[]),n.listeners[a].indexOf(r)===-1&&n.listeners[a].push(r)}}),xm=Ye(function(t,e){e.exports=i;function i(a,r){var n=this;if(n.listeners&&n.listeners[a]){var s=n.listeners[a],o=s.indexOf(r);o!==-1&&s.splice(o,1)}}}),sE=Ye(function(t,e){Cm(),e.exports=a;var i=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"];function a(h){switch(h.nodeType){case 3:return p(h.data);case 8:return"<!--"+h.data+"-->";default:return r(h)}}function r(h){var d=[],v=h.tagName;return h.namespaceURI==="http://www.w3.org/1999/xhtml"&&(v=v.toLowerCase()),d.push("<"+v+u(h)+o(h)),i.indexOf(v)>-1?d.push(" />"):(d.push(">"),h.childNodes.length?d.push.apply(d,h.childNodes.map(a)):h.textContent||h.innerText?d.push(p(h.textContent||h.innerText)):h.innerHTML&&d.push(h.innerHTML),d.push("</"+v+">")),d.join("")}function n(h,d){var v=Rm(h[d]);return d==="style"&&Object.keys(h.style).length>0?!0:h.hasOwnProperty(d)&&(v==="string"||v==="boolean"||v==="number")&&d!=="nodeName"&&d!=="className"&&d!=="tagName"&&d!=="textContent"&&d!=="innerText"&&d!=="namespaceURI"&&d!=="innerHTML"}function s(h){if(typeof h=="string")return h;var d="";return Object.keys(h).forEach(function(v){var f=h[v];v=v.replace(/[A-Z]/g,function(g){return"-"+g.toLowerCase()}),d+=v+":"+f+";"}),d}function o(h){var d=h.dataset,v=[];for(var f in d)v.push({name:"data-"+f,value:d[f]});return v.length?l(v):""}function l(h){var d=[];return h.forEach(function(v){var f=v.name,g=v.value;f==="style"&&(g=s(g)),d.push(f+'="'+m(g)+'"')}),d.length?" "+d.join(" "):""}function u(h){var d=[];for(var v in h)n(h,v)&&d.push({name:v,value:h[v]});for(var f in h._attributes)for(var g in h._attributes[f]){var _=h._attributes[f][g],T=(_.prefix?_.prefix+":":"")+g;d.push({name:T,value:_.value})}return h.className&&d.push({name:"class",value:h.className}),d.length?l(d):""}function p(h){var d="";return typeof h=="string"?d=h:h&&(d=h.toString()),d.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function m(h){return p(h).replace(/"/g,"&quot;")}}),Om=Ye(function(t,e){Ea();var i=Lm(),a=Dm(),r=Mm(),n=xm(),s=sE(),o="http://www.w3.org/1999/xhtml";e.exports=l;function l(u,p,m){if(!fa(this,l))return new l(u);var h=m===void 0?o:m||null;this.tagName=h===o?String(u).toUpperCase():u,this.nodeName=this.tagName,this.className="",this.dataset={},this.childNodes=[],this.parentNode=null,this.style={},this.ownerDocument=p||null,this.namespaceURI=h,this._attributes={},this.tagName==="INPUT"&&(this.type="text")}l.prototype.type="DOMElement",l.prototype.nodeType=1,l.prototype.appendChild=function(u){return u.parentNode&&u.parentNode.removeChild(u),this.childNodes.push(u),u.parentNode=this,u},l.prototype.replaceChild=function(u,p){u.parentNode&&u.parentNode.removeChild(u);var m=this.childNodes.indexOf(p);return p.parentNode=null,this.childNodes[m]=u,u.parentNode=this,p},l.prototype.removeChild=function(u){var p=this.childNodes.indexOf(u);return this.childNodes.splice(p,1),u.parentNode=null,u},l.prototype.insertBefore=function(u,p){u.parentNode&&u.parentNode.removeChild(u);var m=p==null?-1:this.childNodes.indexOf(p);return m>-1?this.childNodes.splice(m,0,u):this.childNodes.push(u),u.parentNode=this,u},l.prototype.setAttributeNS=function(u,p,m){var h=null,d=p,v=p.indexOf(":");if(v>-1&&(h=p.substr(0,v),d=p.substr(v+1)),this.tagName==="INPUT"&&p==="type")this.type=m;else{var f=this._attributes[u]||(this._attributes[u]={});f[d]={value:m,prefix:h}}},l.prototype.getAttributeNS=function(u,p){var m=this._attributes[u],h=m&&m[p]&&m[p].value;return this.tagName==="INPUT"&&p==="type"?this.type:typeof h!="string"?null:h},l.prototype.removeAttributeNS=function(u,p){var m=this._attributes[u];m&&delete m[p]},l.prototype.hasAttributeNS=function(u,p){var m=this._attributes[u];return!!m&&p in m},l.prototype.setAttribute=function(u,p){return this.setAttributeNS(null,u,p)},l.prototype.getAttribute=function(u){return this.getAttributeNS(null,u)},l.prototype.removeAttribute=function(u){return this.removeAttributeNS(null,u)},l.prototype.hasAttribute=function(u){return this.hasAttributeNS(null,u)},l.prototype.removeEventListener=n,l.prototype.addEventListener=r,l.prototype.dispatchEvent=a,l.prototype.focus=function(){},l.prototype.toString=function(){return s(this)},l.prototype.getElementsByClassName=function(u){var p=u.split(" "),m=[];return i(this,function(h){if(h.nodeType===1){var d=h.className||"",v=d.split(" ");p.every(function(f){return v.indexOf(f)!==-1})&&m.push(h)}}),m},l.prototype.getElementsByTagName=function(u){u=u.toLowerCase();var p=[];return i(this.childNodes,function(m){m.nodeType===1&&(u==="*"||m.tagName.toLowerCase()===u)&&p.push(m)}),p},l.prototype.contains=function(u){return i(this,function(p){return u===p})||!1}}),oE=Ye(function(t,e){Ea();var i=Om();e.exports=a;function a(r){if(!fa(this,a))return new a;this.childNodes=[],this.parentNode=null,this.ownerDocument=r||null}a.prototype.type="DocumentFragment",a.prototype.nodeType=11,a.prototype.nodeName="#document-fragment",a.prototype.appendChild=i.prototype.appendChild,a.prototype.replaceChild=i.prototype.replaceChild,a.prototype.removeChild=i.prototype.removeChild,a.prototype.toString=function(){return this.childNodes.map(function(r){return String(r)}).join("")}}),lE=Ye(function(t,e){e.exports=i;function i(a){}i.prototype.initEvent=function(a,r,n){this.type=a,this.bubbles=r,this.cancelable=n},i.prototype.preventDefault=function(){}}),dE=Ye(function(t,e){Ea();var i=Lm(),a=rE(),r=nE(),n=Om(),s=oE(),o=lE(),l=Dm(),u=Mm(),p=xm();e.exports=m;function m(){if(!fa(this,m))return new m;this.head=this.createElement("head"),this.body=this.createElement("body"),this.documentElement=this.createElement("html"),this.documentElement.appendChild(this.head),this.documentElement.appendChild(this.body),this.childNodes=[this.documentElement],this.nodeType=9}var h=m.prototype;h.createTextNode=function(d){return new r(d,this)},h.createElementNS=function(d,v){var f=d===null?null:String(d);return new n(v,this,f)},h.createElement=function(d){return new n(d,this)},h.createDocumentFragment=function(){return new s(this)},h.createEvent=function(d){return new o(d)},h.createComment=function(d){return new a(d,this)},h.getElementById=function(d){d=String(d);var v=i(this.childNodes,function(f){if(String(f.id)===d)return f});return v||null},h.getElementsByClassName=n.prototype.getElementsByClassName,h.getElementsByTagName=n.prototype.getElementsByTagName,h.contains=n.prototype.contains,h.removeEventListener=p,h.addEventListener=u,h.dispatchEvent=l}),uE=Ye(function(t,e){var i=dE();e.exports=new i}),Nm=Ye(function(t,e){var i=typeof global<"u"?global:typeof window<"u"?window:{},a=uE(),r;typeof document<"u"?r=document:(r=i["__GLOBAL_DOCUMENT_CACHE@4"],r||(r=i["__GLOBAL_DOCUMENT_CACHE@4"]=a)),e.exports=r});function cE(t){if(Array.isArray(t))return t}function hE(t,e){var i=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(i!=null){var a=[],r=!0,n=!1,s,o;try{for(i=i.call(t);!(r=(s=i.next()).done)&&(a.push(s.value),!(e&&a.length===e));r=!0);}catch(l){n=!0,o=l}finally{try{!r&&i.return!=null&&i.return()}finally{if(n)throw o}}return a}}function mE(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bl(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,a=new Array(e);i<e;i++)a[i]=t[i];return a}function Pm(t,e){if(t){if(typeof t=="string")return Bl(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);if(i==="Object"&&t.constructor&&(i=t.constructor.name),i==="Map"||i==="Set")return Array.from(i);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Bl(t,e)}}function hi(t,e){return cE(t)||hE(t,e)||Pm(t,e)||mE()}var nn=rt(Ct()),Yc=rt(Ct()),pE=rt(Ct()),vE={now:function(){var t=pE.default.performance,e=t&&t.timing,i=e&&e.navigationStart,a=typeof i=="number"&&typeof t.now=="function"?i+t.now():Date.now();return Math.round(a)}},Ae=vE,En=function(){var t,e,i;if(typeof((t=Yc.default.crypto)===null||t===void 0?void 0:t.getRandomValues)=="function"){i=new Uint8Array(32),Yc.default.crypto.getRandomValues(i);for(var a=0;a<32;a++)i[a]=i[a]%16}else{i=[];for(var r=0;r<32;r++)i[r]=Math.random()*16|0}var n=0;e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(l){var u=l==="x"?i[n]:i[n]&3|8;return n++,u.toString(16)});var s=Ae.now(),o=s==null?void 0:s.toString(16).substring(3);return o?e.substring(0,28)+o:e},$m=function(){return("000000"+(Math.random()*Math.pow(36,6)<<0).toString(36)).slice(-6)},gt=function(t){if(t&&typeof t.nodeName<"u")return t.muxId||(t.muxId=$m()),t.muxId;var e;try{e=document.querySelector(t)}catch{}return e&&!e.muxId&&(e.muxId=t),(e==null?void 0:e.muxId)||t},vo=function(t){var e;t&&typeof t.nodeName<"u"?(e=t,t=gt(e)):e=document.querySelector(t);var i=e&&e.nodeName?e.nodeName.toLowerCase():"";return[e,t,i]};function fE(t){if(Array.isArray(t))return Bl(t)}function EE(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function _E(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yt(t){return fE(t)||EE(t)||Pm(t)||_E()}var Xi={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},bE=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:3,i,a,r,n,s,o=[console,t],l=(i=console.trace).bind.apply(i,yt(o)),u=(a=console.info).bind.apply(a,yt(o)),p=(r=console.debug).bind.apply(r,yt(o)),m=(n=console.warn).bind.apply(n,yt(o)),h=(s=console.error).bind.apply(s,yt(o)),d=e;return{trace:function(){for(var v=arguments.length,f=new Array(v),g=0;g<v;g++)f[g]=arguments[g];if(!(d>Xi.TRACE))return l.apply(void 0,yt(f))},debug:function(){for(var v=arguments.length,f=new Array(v),g=0;g<v;g++)f[g]=arguments[g];if(!(d>Xi.DEBUG))return p.apply(void 0,yt(f))},info:function(){for(var v=arguments.length,f=new Array(v),g=0;g<v;g++)f[g]=arguments[g];if(!(d>Xi.INFO))return u.apply(void 0,yt(f))},warn:function(){for(var v=arguments.length,f=new Array(v),g=0;g<v;g++)f[g]=arguments[g];if(!(d>Xi.WARN))return m.apply(void 0,yt(f))},error:function(){for(var v=arguments.length,f=new Array(v),g=0;g<v;g++)f[g]=arguments[g];if(!(d>Xi.ERROR))return h.apply(void 0,yt(f))},get level(){return d},set level(v){v!==this.level&&(d=v??e)}}},ae=bE("[mux]"),fl=rt(Ct());function Wl(){var t=fl.default.doNotTrack||fl.default.navigator&&fl.default.navigator.doNotTrack;return t==="1"}function $(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}Ea();function Me(t,e){if(!fa(t,e))throw new TypeError("Cannot call a class as a function")}function gE(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function ti(t,e,i){return e&&gE(t.prototype,e),t}function I(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function ur(t){return ur=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},ur(t)}function yE(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&(t=ur(t),t!==null););return t}function rs(t,e,i){return typeof Reflect<"u"&&Reflect.get?rs=Reflect.get:rs=function(a,r,n){var s=yE(a,r);if(s){var o=Object.getOwnPropertyDescriptor(s,r);return o.get?o.get.call(n||a):o.value}},rs(t,e,i||t)}function Fl(t,e){return Fl=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},Fl(t,e)}function TE(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Fl(t,e)}function AE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}Cm();function kE(t,e){return e&&(Rm(e)==="object"||typeof e=="function")?e:$(t)}function SE(t){var e=AE();return function(){var i=ur(t),a;if(e){var r=ur(this).constructor;a=Reflect.construct(i,arguments,r)}else a=i.apply(this,arguments);return kE(this,a)}}var wt=function(t){return _n(t)[0]},_n=function(t){if(typeof t!="string"||t==="")return["localhost"];var e=/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,i=t.match(e)||[],a=i[4],r;return a&&(r=(a.match(/[^\.]+\.[^\.]+$/)||[])[0]),[a,r]},El=rt(Ct()),wE={exists:function(){var t=El.default.performance,e=t&&t.timing;return e!==void 0},domContentLoadedEventEnd:function(){var t=El.default.performance,e=t&&t.timing;return e&&e.domContentLoadedEventEnd},navigationStart:function(){var t=El.default.performance,e=t&&t.timing;return e&&e.navigationStart}},fo=wE;function Te(t,e,i){i=i===void 0?1:i,t[e]=t[e]||0,t[e]+=i}function Eo(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{},a=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable}))),a.forEach(function(r){I(t,r,i[r])})}return t}function IE(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);i.push.apply(i,a)}return i}function su(t,e){return e=e??{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):IE(Object(e)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))}),t}var RE=["x-cdn","content-type"],Um=["x-request-id","cf-ray","x-amz-cf-id","x-akamai-request-id"],CE=RE.concat(Um);function ou(t){t=t||"";var e={},i=t.trim().split(/[\r\n]+/);return i.forEach(function(a){if(a){var r=a.split(": "),n=r.shift();n&&(CE.indexOf(n.toLowerCase())>=0||n.toLowerCase().indexOf("x-litix-")===0)&&(e[n]=r.join(": "))}}),e}function _o(t){if(t){var e=Um.find(function(i){return t[i]!==void 0});return e?t[e]:void 0}}var LE=function(t){var e={};for(var i in t){var a=t[i],r=a["DATA-ID"].search("io.litix.data.");if(r!==-1){var n=a["DATA-ID"].replace("io.litix.data.","");e[n]=a.VALUE}}return e},Hm=LE,Hn=function(t){if(!t)return{};var e=fo.navigationStart(),i=t.loading,a=i?i.start:t.trequest,r=i?i.first:t.tfirst,n=i?i.end:t.tload;return{bytesLoaded:t.total,requestStart:Math.round(e+a),responseStart:Math.round(e+r),responseEnd:Math.round(e+n)}},Ar=function(t){if(!(!t||typeof t.getAllResponseHeaders!="function"))return ou(t.getAllResponseHeaders())},DE=function(t,e,i){var a=arguments.length>4?arguments[4]:void 0,r=t.log,n=t.utils.secondsToMs,s=function(g){var _=parseInt(a.version),T;return _===1&&g.programDateTime!==null&&(T=g.programDateTime),_===0&&g.pdt!==null&&(T=g.pdt),T};if(!fo.exists()){r.warn("performance timing not supported. Not tracking HLS.js.");return}var o=function(g,_){return t.emit(e,g,_)},l=function(g,_){var T=_.levels,b=_.audioTracks,w=_.url,L=_.stats,P=_.networkDetails,H=_.sessionData,z={},ie={};T.forEach(function(fe,Be){z[Be]={width:fe.width,height:fe.height,bitrate:fe.bitrate,attrs:fe.attrs}}),b.forEach(function(fe,Be){ie[Be]={name:fe.name,language:fe.lang,bitrate:fe.bitrate}});var V=Hn(L),U=V.bytesLoaded,Pe=V.requestStart,Ge=V.responseStart,Qe=V.responseEnd;o("requestcompleted",su(Eo({},Hm(H)),{request_event_type:g,request_bytes_loaded:U,request_start:Pe,request_response_start:Ge,request_response_end:Qe,request_type:"manifest",request_hostname:wt(w),request_response_headers:Ar(P),request_rendition_lists:{media:z,audio:ie,video:{}}}))};i.on(a.Events.MANIFEST_LOADED,l);var u=function(g,_){var T=_.details,b=_.level,w=_.networkDetails,L=_.stats,P=Hn(L),H=P.bytesLoaded,z=P.requestStart,ie=P.responseStart,V=P.responseEnd,U=T.fragments[T.fragments.length-1],Pe=s(U)+n(U.duration);o("requestcompleted",{request_event_type:g,request_bytes_loaded:H,request_start:z,request_response_start:ie,request_response_end:V,request_current_level:b,request_type:"manifest",request_hostname:wt(T.url),request_response_headers:Ar(w),video_holdback:T.holdBack&&n(T.holdBack),video_part_holdback:T.partHoldBack&&n(T.partHoldBack),video_part_target_duration:T.partTarget&&n(T.partTarget),video_target_duration:T.targetduration&&n(T.targetduration),video_source_is_live:T.live,player_manifest_newest_program_time:isNaN(Pe)?void 0:Pe})};i.on(a.Events.LEVEL_LOADED,u);var p=function(g,_){var T=_.details,b=_.networkDetails,w=_.stats,L=Hn(w),P=L.bytesLoaded,H=L.requestStart,z=L.responseStart,ie=L.responseEnd;o("requestcompleted",{request_event_type:g,request_bytes_loaded:P,request_start:H,request_response_start:z,request_response_end:ie,request_type:"manifest",request_hostname:wt(T.url),request_response_headers:Ar(b)})};i.on(a.Events.AUDIO_TRACK_LOADED,p);var m=function(g,_){var T=_.stats,b=_.networkDetails,w=_.frag;T=T||w.stats;var L=Hn(T),P=L.bytesLoaded,H=L.requestStart,z=L.responseStart,ie=L.responseEnd,V=b?Ar(b):void 0,U={request_event_type:g,request_bytes_loaded:P,request_start:H,request_response_start:z,request_response_end:ie,request_hostname:b?wt(b.responseURL):void 0,request_id:V?_o(V):void 0,request_response_headers:V,request_media_duration:w.duration,request_url:b==null?void 0:b.responseURL};w.type==="main"?(U.request_type="media",U.request_current_level=w.level,U.request_video_width=(i.levels[w.level]||{}).width,U.request_video_height=(i.levels[w.level]||{}).height,U.request_labeled_bitrate=(i.levels[w.level]||{}).bitrate):U.request_type=w.type,o("requestcompleted",U)};i.on(a.Events.FRAG_LOADED,m);var h=function(g,_){var T=_.frag,b=T.start,w=s(T),L={currentFragmentPDT:w,currentFragmentStart:n(b)};o("fragmentchange",L)};i.on(a.Events.FRAG_CHANGED,h);var d=function(g,_){var T=_.type,b=_.details,w=_.response,L=_.fatal,P=_.frag,H=_.networkDetails,z=(P==null?void 0:P.url)||_.url||"",ie=H?Ar(H):void 0;if((b===a.ErrorDetails.MANIFEST_LOAD_ERROR||b===a.ErrorDetails.MANIFEST_LOAD_TIMEOUT||b===a.ErrorDetails.FRAG_LOAD_ERROR||b===a.ErrorDetails.FRAG_LOAD_TIMEOUT||b===a.ErrorDetails.LEVEL_LOAD_ERROR||b===a.ErrorDetails.LEVEL_LOAD_TIMEOUT||b===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||b===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT||b===a.ErrorDetails.SUBTITLE_LOAD_ERROR||b===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT||b===a.ErrorDetails.KEY_LOAD_ERROR||b===a.ErrorDetails.KEY_LOAD_TIMEOUT)&&o("requestfailed",{request_error:b,request_url:z,request_hostname:wt(z),request_id:ie?_o(ie):void 0,request_type:b===a.ErrorDetails.FRAG_LOAD_ERROR||b===a.ErrorDetails.FRAG_LOAD_TIMEOUT?"media":b===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||b===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT?"audio":b===a.ErrorDetails.SUBTITLE_LOAD_ERROR||b===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT?"subtitle":b===a.ErrorDetails.KEY_LOAD_ERROR||b===a.ErrorDetails.KEY_LOAD_TIMEOUT?"encryption":"manifest",request_error_code:w==null?void 0:w.code,request_error_text:w==null?void 0:w.text}),L){var V,U="".concat(z?"url: ".concat(z,`
`):"")+"".concat(w&&(w.code||w.text)?"response: ".concat(w.code,", ").concat(w.text,`
`):"")+"".concat(_.reason?"failure reason: ".concat(_.reason,`
`):"")+"".concat(_.level?"level: ".concat(_.level,`
`):"")+"".concat(_.parent?"parent stream controller: ".concat(_.parent,`
`):"")+"".concat(_.buffer?"buffer length: ".concat(_.buffer,`
`):"")+"".concat(_.error?"error: ".concat(_.error,`
`):"")+"".concat(_.event?"event: ".concat(_.event,`
`):"")+"".concat(_.err?"error message: ".concat((V=_.err)===null||V===void 0?void 0:V.message,`
`):"");o("error",{player_error_code:T,player_error_message:b,player_error_context:U})}};i.on(a.Events.ERROR,d);var v=function(g,_){var T=_.frag,b=T&&T._url||"";o("requestcanceled",{request_event_type:g,request_url:b,request_type:"media",request_hostname:wt(b)})};i.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,v);var f=function(g,_){var T=_.level,b=i.levels[T];if(b&&b.attrs&&b.attrs.BANDWIDTH){var w=b.attrs.BANDWIDTH,L,P=parseFloat(b.attrs["FRAME-RATE"]);isNaN(P)||(L=P),w?o("renditionchange",{video_source_fps:L,video_source_bitrate:w,video_source_width:b.width,video_source_height:b.height,video_source_rendition_name:b.name,video_source_codec:b==null?void 0:b.videoCodec}):r.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")}};i.on(a.Events.LEVEL_SWITCHED,f),i._stopMuxMonitor=function(){i.off(a.Events.MANIFEST_LOADED,l),i.off(a.Events.LEVEL_LOADED,u),i.off(a.Events.AUDIO_TRACK_LOADED,p),i.off(a.Events.FRAG_LOADED,m),i.off(a.Events.FRAG_CHANGED,h),i.off(a.Events.ERROR,d),i.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,v),i.off(a.Events.LEVEL_SWITCHED,f),i.off(a.Events.DESTROYING,i._stopMuxMonitor),delete i._stopMuxMonitor},i.on(a.Events.DESTROYING,i._stopMuxMonitor)},ME=function(t){t&&typeof t._stopMuxMonitor=="function"&&t._stopMuxMonitor()},Gc=function(t,e){if(!t||!t.requestEndDate)return{};var i=wt(t.url),a=t.url,r=t.bytesLoaded,n=new Date(t.requestStartDate).getTime(),s=new Date(t.firstByteDate).getTime(),o=new Date(t.requestEndDate).getTime(),l=isNaN(t.duration)?0:t.duration,u=typeof e.getMetricsFor=="function"?e.getMetricsFor(t.mediaType).HttpList:e.getDashMetrics().getHttpRequests(t.mediaType),p;u.length>0&&(p=ou(u[u.length-1]._responseHeaders||""));var m=p?_o(p):void 0;return{requestStart:n,requestResponseStart:s,requestResponseEnd:o,requestBytesLoaded:r,requestResponseHeaders:p,requestMediaDuration:l,requestHostname:i,requestUrl:a,requestId:m}},xE=function(t,e){var i=e.getQualityFor(t),a=e.getCurrentTrackFor(t).bitrateList;return a?{currentLevel:i,renditionWidth:a[i].width||null,renditionHeight:a[i].height||null,renditionBitrate:a[i].bandwidth}:{}},OE=function(t){var e;return(e=t.match(/.*codecs\*?="(.*)"/))===null||e===void 0?void 0:e[1]},NE=function(t){try{var e,i,a=(i=t.getVersion)===null||i===void 0||(e=i.call(t))===null||e===void 0?void 0:e.split(".").map(function(r){return parseInt(r)})[0];return a}catch{return!1}},PE=function(t,e,i){var a=t.log;if(!i||!i.on){a.warn("Invalid dash.js player reference. Monitoring blocked.");return}var r=NE(i),n=function(T,b){return t.emit(e,T,b)},s=function(T){var b=T.type,w=T.data,L=(w||{}).url;n("requestcompleted",{request_event_type:b,request_start:0,request_response_start:0,request_response_end:0,request_bytes_loaded:-1,request_type:"manifest",request_hostname:wt(L),request_url:L})};i.on("manifestLoaded",s);var o={},l=function(T){if(typeof T.getRequests!="function")return null;var b=T.getRequests({state:"executed"});return b.length===0?null:b[b.length-1]},u=function(T){var b=T.type,w=T.fragmentModel,L=T.chunk,P=l(w);p({type:b,request:P,chunk:L})},p=function(T){var b=T.type,w=T.chunk,L=T.request,P=(w||{}).mediaInfo,H=P||{},z=H.type,ie=H.bitrateList;ie=ie||[];var V={};ie.forEach(function(ze,Re){V[Re]={},V[Re].width=ze.width,V[Re].height=ze.height,V[Re].bitrate=ze.bandwidth,V[Re].attrs={}}),z==="video"?o.video=V:z==="audio"?o.audio=V:o.media=V;var U=Gc(L,i),Pe=U.requestStart,Ge=U.requestResponseStart,Qe=U.requestResponseEnd,fe=U.requestResponseHeaders,Be=U.requestMediaDuration,Lt=U.requestHostname,We=U.requestUrl,Et=U.requestId;n("requestcompleted",{request_event_type:b,request_start:Pe,request_response_start:Ge,request_response_end:Qe,request_bytes_loaded:-1,request_type:z+"_init",request_response_headers:fe,request_hostname:Lt,request_id:Et,request_url:We,request_media_duration:Be,request_rendition_lists:o})};r>=4?i.on("initFragmentLoaded",p):i.on("initFragmentLoaded",u);var m=function(T){var b=T.type,w=T.fragmentModel,L=T.chunk,P=l(w);h({type:b,request:P,chunk:L})},h=function(T){var b=T.type,w=T.chunk,L=T.request,P=w||{},H=P.mediaInfo,z=P.start,ie=H||{},V=ie.type,U=Gc(L,i),Pe=U.requestStart,Ge=U.requestResponseStart,Qe=U.requestResponseEnd,fe=U.requestBytesLoaded,Be=U.requestResponseHeaders,Lt=U.requestMediaDuration,We=U.requestHostname,Et=U.requestUrl,ze=U.requestId,Re=xE(V,i),$e=Re.currentLevel,st=Re.renditionWidth,_a=Re.renditionHeight,Nn=Re.renditionBitrate;n("requestcompleted",{request_event_type:b,request_start:Pe,request_response_start:Ge,request_response_end:Qe,request_bytes_loaded:fe,request_type:V,request_response_headers:Be,request_hostname:We,request_id:ze,request_url:Et,request_media_start_time:z,request_media_duration:Lt,request_current_level:$e,request_labeled_bitrate:Nn,request_video_width:st,request_video_height:_a})};r>=4?i.on("mediaFragmentLoaded",h):i.on("mediaFragmentLoaded",m);var d={video:void 0,audio:void 0,totalBitrate:void 0},v=function(){if(d.video&&typeof d.video.bitrate=="number"){if(!(d.video.width&&d.video.height)){a.warn("have bitrate info for video but missing width/height");return}var T=d.video.bitrate;if(d.audio&&typeof d.audio.bitrate=="number"&&(T+=d.audio.bitrate),T!==d.totalBitrate)return d.totalBitrate=T,{video_source_bitrate:T,video_source_height:d.video.height,video_source_width:d.video.width,video_source_codec:OE(d.video.codec)}}},f=function(T,b,w){if(typeof T.newQuality!="number"){a.warn("missing evt.newQuality in qualityChangeRendered event",T);return}var L=T.mediaType;if(L==="audio"||L==="video"){var P=i.getBitrateInfoListFor(L).find(function(z){var ie=z.qualityIndex;return ie===T.newQuality});if(!(P&&typeof P.bitrate=="number")){a.warn("missing bitrate info for ".concat(L));return}d[L]=su(Eo({},P),{codec:i.getCurrentTrackFor(L).codec});var H=v();H&&n("renditionchange",H)}};i.on("qualityChangeRendered",f);var g=function(T){var b=T.request,w=T.mediaType;b=b||{},n("requestcanceled",{request_event_type:b.type+"_"+b.action,request_url:b.url,request_type:w,request_hostname:wt(b.url)})};i.on("fragmentLoadingAbandoned",g);var _=function(T){var b=T.error,w,L,P=(b==null||(w=b.data)===null||w===void 0?void 0:w.request)||{},H=(b==null||(L=b.data)===null||L===void 0?void 0:L.response)||{};(b==null?void 0:b.code)===27&&n("requestfailed",{request_error:P.type+"_"+P.action,request_url:P.url,request_hostname:wt(P.url),request_type:P.mediaType,request_error_code:H.status,request_error_text:H.statusText});var z="".concat(P!=null&&P.url?"url: ".concat(P.url,`
`):"")+"".concat(H!=null&&H.status||H!=null&&H.statusText?"response: ".concat(H==null?void 0:H.status,", ").concat(H==null?void 0:H.statusText,`
`):"");n("error",{player_error_code:b==null?void 0:b.code,player_error_message:b==null?void 0:b.message,player_error_context:z})};i.on("error",_),i._stopMuxMonitor=function(){i.off("manifestLoaded",s),i.off("initFragmentLoaded",p),i.off("mediaFragmentLoaded",h),i.off("qualityChangeRendered",f),i.off("error",_),i.off("fragmentLoadingAbandoned",g),delete i._stopMuxMonitor}},$E=function(t){t&&typeof t._stopMuxMonitor=="function"&&t._stopMuxMonitor()},Qc=0,UE=function(){function t(){Me(this,t),I(this,"_listeners",void 0)}return ti(t,[{key:"on",value:function(e,i,a){return i._eventEmitterGuid=i._eventEmitterGuid||++Qc,this._listeners=this._listeners||{},this._listeners[e]=this._listeners[e]||[],a&&(i=i.bind(a)),this._listeners[e].push(i),i}},{key:"off",value:function(e,i){var a=this._listeners&&this._listeners[e];a&&a.forEach(function(r,n){r._eventEmitterGuid===i._eventEmitterGuid&&a.splice(n,1)})}},{key:"one",value:function(e,i,a){var r=this;i._eventEmitterGuid=i._eventEmitterGuid||++Qc;var n=function(){r.off(e,n),i.apply(a||this,arguments)};n._eventEmitterGuid=i._eventEmitterGuid,this.on(e,n)}},{key:"emit",value:function(e,i){var a=this;if(this._listeners){i=i||{};var r=this._listeners["before*"]||[],n=this._listeners[e]||[],s=this._listeners["after"+e]||[],o=function(l,u){l=l.slice(),l.forEach(function(p){p.call(a,{type:e},u)})};o(r,i),o(n,i),o(s,i)}}}]),t}(),HE=UE,_l=rt(Ct()),BE=function(){function t(e){var i=this;Me(this,t),I(this,"_playbackHeartbeatInterval",void 0),I(this,"_playheadShouldBeProgressing",void 0),I(this,"pm",void 0),this.pm=e,this._playbackHeartbeatInterval=null,this._playheadShouldBeProgressing=!1,e.on("playing",function(){i._playheadShouldBeProgressing=!0}),e.on("play",this._startPlaybackHeartbeatInterval.bind(this)),e.on("playing",this._startPlaybackHeartbeatInterval.bind(this)),e.on("adbreakstart",this._startPlaybackHeartbeatInterval.bind(this)),e.on("adplay",this._startPlaybackHeartbeatInterval.bind(this)),e.on("adplaying",this._startPlaybackHeartbeatInterval.bind(this)),e.on("devicewake",this._startPlaybackHeartbeatInterval.bind(this)),e.on("viewstart",this._startPlaybackHeartbeatInterval.bind(this)),e.on("rebufferstart",this._startPlaybackHeartbeatInterval.bind(this)),e.on("pause",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("ended",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("viewend",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("error",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("aderror",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("adpause",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("adended",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("adbreakend",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("seeked",function(){e.data.player_is_paused?i._stopPlaybackHeartbeatInterval():i._startPlaybackHeartbeatInterval()}),e.on("timeupdate",function(){i._playbackHeartbeatInterval!==null&&e.emit("playbackheartbeat")}),e.on("devicesleep",function(a,r){i._playbackHeartbeatInterval!==null&&(_l.default.clearInterval(i._playbackHeartbeatInterval),e.emit("playbackheartbeatend",{viewer_time:r.viewer_time}),i._playbackHeartbeatInterval=null)})}return ti(t,[{key:"_startPlaybackHeartbeatInterval",value:function(){var e=this;this._playbackHeartbeatInterval===null&&(this.pm.emit("playbackheartbeat"),this._playbackHeartbeatInterval=_l.default.setInterval(function(){e.pm.emit("playbackheartbeat")},this.pm.playbackHeartbeatTime))}},{key:"_stopPlaybackHeartbeatInterval",value:function(){this._playheadShouldBeProgressing=!1,this._playbackHeartbeatInterval!==null&&(_l.default.clearInterval(this._playbackHeartbeatInterval),this.pm.emit("playbackheartbeatend"),this._playbackHeartbeatInterval=null)}}]),t}(),WE=BE,FE=function t(e){var i=this;Me(this,t),I(this,"viewErrored",void 0),e.on("viewinit",function(){i.viewErrored=!1}),e.on("error",function(a,r){try{var n=e.errorTranslator({player_error_code:r.player_error_code,player_error_message:r.player_error_message,player_error_context:r.player_error_context,player_error_severity:r.player_error_severity,player_error_business_exception:r.player_error_business_exception});n&&(e.data.player_error_code=n.player_error_code||r.player_error_code,e.data.player_error_message=n.player_error_message||r.player_error_message,e.data.player_error_context=n.player_error_context||r.player_error_context,e.data.player_error_severity=n.player_error_severity||r.player_error_severity,e.data.player_error_business_exception=n.player_error_business_exception||r.player_error_business_exception,i.viewErrored=!0)}catch(s){e.mux.log.warn("Exception in error translator callback.",s),i.viewErrored=!0}}),e.on("aftererror",function(){var a,r,n,s,o;(a=e.data)===null||a===void 0||delete a.player_error_code,(r=e.data)===null||r===void 0||delete r.player_error_message,(n=e.data)===null||n===void 0||delete n.player_error_context,(s=e.data)===null||s===void 0||delete s.player_error_severity,(o=e.data)===null||o===void 0||delete o.player_error_business_exception})},KE=FE,VE=function(){function t(e){Me(this,t),I(this,"_watchTimeTrackerLastCheckedTime",void 0),I(this,"pm",void 0),this.pm=e,this._watchTimeTrackerLastCheckedTime=null,e.on("playbackheartbeat",this._updateWatchTime.bind(this)),e.on("playbackheartbeatend",this._clearWatchTimeState.bind(this))}return ti(t,[{key:"_updateWatchTime",value:function(e,i){var a=i.viewer_time;this._watchTimeTrackerLastCheckedTime===null&&(this._watchTimeTrackerLastCheckedTime=a),Te(this.pm.data,"view_watch_time",a-this._watchTimeTrackerLastCheckedTime),this._watchTimeTrackerLastCheckedTime=a}},{key:"_clearWatchTimeState",value:function(e,i){this._updateWatchTime(e,i),this._watchTimeTrackerLastCheckedTime=null}}]),t}(),qE=VE,YE=function(){function t(e){var i=this;Me(this,t),I(this,"_playbackTimeTrackerLastPlayheadPosition",void 0),I(this,"_lastTime",void 0),I(this,"_isAdPlaying",void 0),I(this,"_callbackUpdatePlaybackTime",void 0),I(this,"pm",void 0),this.pm=e,this._playbackTimeTrackerLastPlayheadPosition=-1,this._lastTime=Ae.now(),this._isAdPlaying=!1,this._callbackUpdatePlaybackTime=null;var a=this._startPlaybackTimeTracking.bind(this);e.on("playing",a),e.on("adplaying",a),e.on("seeked",a);var r=this._stopPlaybackTimeTracking.bind(this);e.on("playbackheartbeatend",r),e.on("seeking",r),e.on("adplaying",function(){i._isAdPlaying=!0}),e.on("adended",function(){i._isAdPlaying=!1}),e.on("adpause",function(){i._isAdPlaying=!1}),e.on("adbreakstart",function(){i._isAdPlaying=!1}),e.on("adbreakend",function(){i._isAdPlaying=!1}),e.on("adplay",function(){i._isAdPlaying=!1}),e.on("viewinit",function(){i._playbackTimeTrackerLastPlayheadPosition=-1,i._lastTime=Ae.now(),i._isAdPlaying=!1,i._callbackUpdatePlaybackTime=null})}return ti(t,[{key:"_startPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime===null&&(this._callbackUpdatePlaybackTime=this._updatePlaybackTime.bind(this),this._playbackTimeTrackerLastPlayheadPosition=this.pm.data.player_playhead_time,this.pm.on("playbackheartbeat",this._callbackUpdatePlaybackTime))}},{key:"_stopPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime&&(this._updatePlaybackTime(),this.pm.off("playbackheartbeat",this._callbackUpdatePlaybackTime),this._callbackUpdatePlaybackTime=null,this._playbackTimeTrackerLastPlayheadPosition=-1)}},{key:"_updatePlaybackTime",value:function(){var e=this.pm.data.player_playhead_time,i=Ae.now(),a=-1;this._playbackTimeTrackerLastPlayheadPosition>=0&&e>this._playbackTimeTrackerLastPlayheadPosition?a=e-this._playbackTimeTrackerLastPlayheadPosition:this._isAdPlaying&&(a=i-this._lastTime),a>0&&a<=1e3&&Te(this.pm.data,"view_content_playback_time",a),this._playbackTimeTrackerLastPlayheadPosition=e,this._lastTime=i}}]),t}(),GE=YE,QE=function(){function t(e){Me(this,t),I(this,"pm",void 0),this.pm=e;var i=this._updatePlayheadTime.bind(this);e.on("playbackheartbeat",i),e.on("playbackheartbeatend",i),e.on("timeupdate",i),e.on("destroy",function(){e.off("timeupdate",i)})}return ti(t,[{key:"_updateMaxPlayheadPosition",value:function(){this.pm.data.view_max_playhead_position=typeof this.pm.data.view_max_playhead_position>"u"?this.pm.data.player_playhead_time:Math.max(this.pm.data.view_max_playhead_position,this.pm.data.player_playhead_time)}},{key:"_updatePlayheadTime",value:function(e,i){var a=this,r=function(){a.pm.currentFragmentPDT&&a.pm.currentFragmentStart&&(a.pm.data.player_program_time=a.pm.currentFragmentPDT+a.pm.data.player_playhead_time-a.pm.currentFragmentStart)};if(i&&i.player_playhead_time)this.pm.data.player_playhead_time=i.player_playhead_time,r(),this._updateMaxPlayheadPosition();else if(this.pm.getPlayheadTime){var n=this.pm.getPlayheadTime();typeof n<"u"&&(this.pm.data.player_playhead_time=n,r(),this._updateMaxPlayheadPosition())}}}]),t}(),zE=QE,zc=5*60*1e3,ZE=function t(e){if(Me(this,t),!e.disableRebufferTracking){var i,a=function(n,s){r(s),i=void 0},r=function(n){if(i){var s=n.viewer_time-i;Te(e.data,"view_rebuffer_duration",s),i=n.viewer_time,e.data.view_rebuffer_duration>zc&&(e.emit("viewend"),e.send("viewend"),e.mux.log.warn("Ending view after rebuffering for longer than ".concat(zc,"ms, future events will be ignored unless a programchange or videochange occurs.")))}e.data.view_watch_time>=0&&e.data.view_rebuffer_count>0&&(e.data.view_rebuffer_frequency=e.data.view_rebuffer_count/e.data.view_watch_time,e.data.view_rebuffer_percentage=e.data.view_rebuffer_duration/e.data.view_watch_time)};e.on("playbackheartbeat",function(n,s){return r(s)}),e.on("rebufferstart",function(n,s){i||(Te(e.data,"view_rebuffer_count",1),i=s.viewer_time,e.one("rebufferend",a))}),e.on("viewinit",function(){i=void 0,e.off("rebufferend",a)})}},jE=ZE,XE=function(){function t(e){var i=this;Me(this,t),I(this,"_lastCheckedTime",void 0),I(this,"_lastPlayheadTime",void 0),I(this,"_lastPlayheadTimeUpdatedTime",void 0),I(this,"_rebuffering",void 0),I(this,"pm",void 0),this.pm=e,!(e.disableRebufferTracking||e.disablePlayheadRebufferTracking)&&(this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null,e.on("playbackheartbeat",this._checkIfRebuffering.bind(this)),e.on("playbackheartbeatend",this._cleanupRebufferTracker.bind(this)),e.on("seeking",function(){i._cleanupRebufferTracker(null,{viewer_time:Ae.now()})}))}return ti(t,[{key:"_checkIfRebuffering",value:function(e,i){if(this.pm.seekingTracker.isSeeking||this.pm.adTracker.isAdBreak||!this.pm.playbackHeartbeat._playheadShouldBeProgressing){this._cleanupRebufferTracker(e,i);return}if(this._lastCheckedTime===null){this._prepareRebufferTrackerState(i.viewer_time);return}if(this._lastPlayheadTime!==this.pm.data.player_playhead_time){this._cleanupRebufferTracker(e,i,!0);return}var a=i.viewer_time-this._lastPlayheadTimeUpdatedTime;typeof this.pm.sustainedRebufferThreshold=="number"&&a>=this.pm.sustainedRebufferThreshold&&(this._rebuffering||(this._rebuffering=!0,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}))),this._lastCheckedTime=i.viewer_time}},{key:"_clearRebufferTrackerState",value:function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null}},{key:"_prepareRebufferTrackerState",value:function(e){this._lastCheckedTime=e,this._lastPlayheadTime=this.pm.data.player_playhead_time,this._lastPlayheadTimeUpdatedTime=e}},{key:"_cleanupRebufferTracker",value:function(e,i){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(this._rebuffering)this._rebuffering=!1,this.pm.emit("rebufferend",{viewer_time:i.viewer_time});else{if(this._lastCheckedTime===null)return;var r=this.pm.data.player_playhead_time-this._lastPlayheadTime,n=i.viewer_time-this._lastPlayheadTimeUpdatedTime;typeof this.pm.minimumRebufferDuration=="number"&&r>0&&n-r>this.pm.minimumRebufferDuration&&(this._lastCheckedTime=null,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}),this.pm.emit("rebufferend",{viewer_time:this._lastPlayheadTimeUpdatedTime+n-r}))}a?this._prepareRebufferTrackerState(i.viewer_time):this._clearRebufferTrackerState()}}]),t}(),JE=XE,e_=function(){function t(e){var i=this;Me(this,t),I(this,"NAVIGATION_START",void 0),I(this,"pm",void 0),this.pm=e,e.on("viewinit",function(){var a=e.data,r=a.view_id;if(!a.view_program_changed){var n=function(s,o){var l=o.viewer_time;(s.type==="playing"&&typeof e.data.view_time_to_first_frame>"u"||s.type==="adplaying"&&(typeof e.data.view_time_to_first_frame>"u"||i._inPrerollPosition()))&&i.calculateTimeToFirstFrame(l||Ae.now(),r)};e.one("playing",n),e.one("adplaying",n),e.one("viewend",function(){e.off("playing",n),e.off("adplaying",n)})}})}return ti(t,[{key:"_inPrerollPosition",value:function(){return typeof this.pm.data.view_content_playback_time>"u"||this.pm.data.view_content_playback_time<=1e3}},{key:"calculateTimeToFirstFrame",value:function(e,i){i===this.pm.data.view_id&&(this.pm.watchTimeTracker._updateWatchTime(null,{viewer_time:e}),this.pm.data.view_time_to_first_frame=this.pm.data.view_watch_time,(this.pm.data.player_autoplay_on||this.pm.data.video_is_autoplay)&&this.NAVIGATION_START&&(this.pm.data.view_aggregate_startup_time=this.pm.data.view_start+this.pm.data.view_watch_time-this.NAVIGATION_START))}}]),t}(),t_=e_,i_=function t(e){var i=this;Me(this,t),I(this,"_lastPlayerHeight",void 0),I(this,"_lastPlayerWidth",void 0),I(this,"_lastPlayheadPosition",void 0),I(this,"_lastSourceHeight",void 0),I(this,"_lastSourceWidth",void 0),e.on("viewinit",function(){i._lastPlayheadPosition=-1});var a=["pause","rebufferstart","seeking","error","adbreakstart","hb","renditionchange","orientationchange","viewend"],r=["playing","hb","renditionchange","orientationchange"];a.forEach(function(n){e.on(n,function(){if(i._lastPlayheadPosition>=0&&e.data.player_playhead_time>=0&&i._lastPlayerWidth>=0&&i._lastSourceWidth>0&&i._lastPlayerHeight>=0&&i._lastSourceHeight>0){var s=e.data.player_playhead_time-i._lastPlayheadPosition;if(s<0){i._lastPlayheadPosition=-1;return}var o=Math.min(i._lastPlayerWidth/i._lastSourceWidth,i._lastPlayerHeight/i._lastSourceHeight),l=Math.max(0,o-1),u=Math.max(0,1-o);e.data.view_max_upscale_percentage=Math.max(e.data.view_max_upscale_percentage||0,l),e.data.view_max_downscale_percentage=Math.max(e.data.view_max_downscale_percentage||0,u),Te(e.data,"view_total_content_playback_time",s),Te(e.data,"view_total_upscaling",l*s),Te(e.data,"view_total_downscaling",u*s)}i._lastPlayheadPosition=-1})}),r.forEach(function(n){e.on(n,function(){i._lastPlayheadPosition=e.data.player_playhead_time,i._lastPlayerWidth=e.data.player_width,i._lastPlayerHeight=e.data.player_height,i._lastSourceWidth=e.data.video_source_width,i._lastSourceHeight=e.data.video_source_height})})},a_=i_,r_=2e3,n_=function t(e){var i=this;Me(this,t),I(this,"isSeeking",void 0),this.isSeeking=!1;var a=-1,r=function(){var n=Ae.now(),s=(e.data.viewer_time||n)-(a||n);Te(e.data,"view_seek_duration",s),e.data.view_max_seek_time=Math.max(e.data.view_max_seek_time||0,s),i.isSeeking=!1,a=-1};e.on("seeking",function(n,s){if(Object.assign(e.data,s),i.isSeeking&&s.viewer_time-a<=r_){a=s.viewer_time;return}i.isSeeking&&r(),i.isSeeking=!0,a=s.viewer_time,Te(e.data,"view_seek_count",1),e.send("seeking")}),e.on("seeked",function(){r()}),e.on("viewend",function(){i.isSeeking&&(r(),e.send("seeked")),i.isSeeking=!1,a=-1})},s_=n_,Zc=function(t,e){t.push(e),t.sort(function(i,a){return i.viewer_time-a.viewer_time})},o_=["adbreakstart","adrequest","adresponse","adplay","adplaying","adpause","adended","adbreakend","aderror","adclicked","adskipped"],l_=function(){function t(e){var i=this;Me(this,t),I(this,"_adHasPlayed",void 0),I(this,"_adRequests",void 0),I(this,"_adResponses",void 0),I(this,"_currentAdRequestNumber",void 0),I(this,"_currentAdResponseNumber",void 0),I(this,"_prerollPlayTime",void 0),I(this,"_wouldBeNewAdPlay",void 0),I(this,"isAdBreak",void 0),I(this,"pm",void 0),this.pm=e,e.on("viewinit",function(){i.isAdBreak=!1,i._currentAdRequestNumber=0,i._currentAdResponseNumber=0,i._adRequests=[],i._adResponses=[],i._adHasPlayed=!1,i._wouldBeNewAdPlay=!0,i._prerollPlayTime=void 0}),o_.forEach(function(r){return e.on(r,i._updateAdData.bind(i))});var a=function(){i.isAdBreak=!1};e.on("adbreakstart",function(){i.isAdBreak=!0}),e.on("play",a),e.on("playing",a),e.on("viewend",a),e.on("adrequest",function(r,n){n=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdRequestNumber++},n),Zc(i._adRequests,n),Te(e.data,"view_ad_request_count"),i.inPrerollPosition()&&(e.data.view_preroll_requested=!0,i._adHasPlayed||Te(e.data,"view_preroll_request_count"))}),e.on("adresponse",function(r,n){n=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdResponseNumber++},n),Zc(i._adResponses,n);var s=i.findAdRequest(n.ad_request_id);s&&Te(e.data,"view_ad_request_time",Math.max(0,n.viewer_time-s.viewer_time))}),e.on("adplay",function(r,n){i._adHasPlayed=!0,i._wouldBeNewAdPlay&&(i._wouldBeNewAdPlay=!1,Te(e.data,"view_ad_played_count")),i.inPrerollPosition()&&!e.data.view_preroll_played&&(e.data.view_preroll_played=!0,i._adRequests.length>0&&(e.data.view_preroll_request_time=Math.max(0,n.viewer_time-i._adRequests[0].viewer_time)),e.data.view_start&&(e.data.view_startup_preroll_request_time=Math.max(0,n.viewer_time-e.data.view_start)),i._prerollPlayTime=n.viewer_time)}),e.on("adplaying",function(r,n){i.inPrerollPosition()&&typeof e.data.view_preroll_load_time>"u"&&typeof i._prerollPlayTime<"u"&&(e.data.view_preroll_load_time=n.viewer_time-i._prerollPlayTime,e.data.view_startup_preroll_load_time=n.viewer_time-i._prerollPlayTime)}),e.on("adclicked",function(r,n){i._wouldBeNewAdPlay||Te(e.data,"view_ad_clicked_count")}),e.on("adskipped",function(r,n){i._wouldBeNewAdPlay||Te(e.data,"view_ad_skipped_count")}),e.on("adended",function(){i._wouldBeNewAdPlay=!0}),e.on("aderror",function(){i._wouldBeNewAdPlay=!0})}return ti(t,[{key:"inPrerollPosition",value:function(){return typeof this.pm.data.view_content_playback_time>"u"||this.pm.data.view_content_playback_time<=1e3}},{key:"findAdRequest",value:function(e){for(var i=0;i<this._adRequests.length;i++)if(this._adRequests[i].ad_request_id===e)return this._adRequests[i]}},{key:"_updateAdData",value:function(e,i){if(this.inPrerollPosition()){if(!this.pm.data.view_preroll_ad_tag_hostname&&i.ad_tag_url){var a=hi(_n(i.ad_tag_url),2),r=a[0],n=a[1];this.pm.data.view_preroll_ad_tag_domain=n,this.pm.data.view_preroll_ad_tag_hostname=r}if(!this.pm.data.view_preroll_ad_asset_hostname&&i.ad_asset_url){var s=hi(_n(i.ad_asset_url),2),o=s[0],l=s[1];this.pm.data.view_preroll_ad_asset_domain=l,this.pm.data.view_preroll_ad_asset_hostname=o}}this.pm.data.ad_asset_url=i==null?void 0:i.ad_asset_url,this.pm.data.ad_tag_url=i==null?void 0:i.ad_tag_url,this.pm.data.ad_creative_id=i==null?void 0:i.ad_creative_id,this.pm.data.ad_id=i==null?void 0:i.ad_id,this.pm.data.ad_universal_id=i==null?void 0:i.ad_universal_id}}]),t}(),d_=l_,jc=rt(Ct()),u_=function t(e){Me(this,t);var i,a,r=function(){e.disableRebufferTracking||(Te(e.data,"view_waiting_rebuffer_count",1),i=Ae.now(),a=jc.default.setInterval(function(){if(i){var u=Ae.now();Te(e.data,"view_waiting_rebuffer_duration",u-i),i=u}},250))},n=function(){e.disableRebufferTracking||i&&(Te(e.data,"view_waiting_rebuffer_duration",Ae.now()-i),i=!1,jc.default.clearInterval(a))},s=!1,o=function(){s=!0},l=function(){s=!1,n()};e.on("waiting",function(){s&&r()}),e.on("playing",function(){n(),o()}),e.on("pause",l),e.on("seeking",l)},c_=u_,h_=function t(e){var i=this;Me(this,t),I(this,"lastWallClockTime",void 0);var a=function(){i.lastWallClockTime=Ae.now(),e.on("before*",r)},r=function(n){var s=Ae.now(),o=i.lastWallClockTime;i.lastWallClockTime=s,s-o>3e4&&(e.emit("devicesleep",{viewer_time:o}),Object.assign(e.data,{viewer_time:o}),e.send("devicesleep"),e.emit("devicewake",{viewer_time:s}),Object.assign(e.data,{viewer_time:s}),e.send("devicewake"))};e.one("playbackheartbeat",a),e.on("playbackheartbeatend",function(){e.off("before*",r),e.one("playbackheartbeat",a)})},m_=h_,bl=rt(Ct()),Bm=function(t){return t()}(function(){var t=function(){for(var i=0,a={};i<arguments.length;i++){var r=arguments[i];for(var n in r)a[n]=r[n]}return a};function e(i){function a(r,n,s){var o;if(typeof document<"u"){if(arguments.length>1){if(s=t({path:"/"},a.defaults,s),typeof s.expires=="number"){var l=new Date;l.setMilliseconds(l.getMilliseconds()+s.expires*864e5),s.expires=l}try{o=JSON.stringify(n),/^[\{\[]/.test(o)&&(n=o)}catch{}return i.write?n=i.write(n,r):n=encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),r=encodeURIComponent(String(r)),r=r.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),r=r.replace(/[\(\)]/g,escape),document.cookie=[r,"=",n,s.expires?"; expires="+s.expires.toUTCString():"",s.path?"; path="+s.path:"",s.domain?"; domain="+s.domain:"",s.secure?"; secure":""].join("")}r||(o={});for(var u=document.cookie?document.cookie.split("; "):[],p=/(%[0-9A-Z]{2})+/g,m=0;m<u.length;m++){var h=u[m].split("="),d=h.slice(1).join("=");d.charAt(0)==='"'&&(d=d.slice(1,-1));try{var v=h[0].replace(p,decodeURIComponent);if(d=i.read?i.read(d,v):i(d,v)||d.replace(p,decodeURIComponent),this.json)try{d=JSON.parse(d)}catch{}if(r===v){o=d;break}r||(o[v]=d)}catch{}}return o}}return a.set=a,a.get=function(r){return a.call(a,r)},a.getJSON=function(){return a.apply({json:!0},[].slice.call(arguments))},a.defaults={},a.remove=function(r,n){a(r,"",t(n,{expires:-1}))},a.withConverter=e,a}return e(function(){})}),Wm="muxData",p_=function(t){return Object.entries(t).map(function(e){var i=hi(e,2),a=i[0],r=i[1];return"".concat(a,"=").concat(r)}).join("&")},v_=function(t){return t.split("&").reduce(function(e,i){var a=hi(i.split("="),2),r=a[0],n=a[1],s=+n,o=n&&s==n?s:n;return e[r]=o,e},{})},Fm=function(){var t;try{t=v_(Bm.get(Wm)||"")}catch{t={}}return t},Km=function(t){try{Bm.set(Wm,p_(t),{expires:365})}catch{}},f_=function(){var t=Fm();return t.mux_viewer_id=t.mux_viewer_id||En(),t.msn=t.msn||Math.random(),Km(t),{mux_viewer_id:t.mux_viewer_id,mux_sample_number:t.msn}},E_=function(){var t=Fm(),e=Ae.now();return t.session_start&&(t.sst=t.session_start,delete t.session_start),t.session_id&&(t.sid=t.session_id,delete t.session_id),t.session_expires&&(t.sex=t.session_expires,delete t.session_expires),(!t.sex||t.sex<e)&&(t.sid=En(),t.sst=e),t.sex=e+25*60*1e3,Km(t),{session_id:t.sid,session_start:t.sst,session_expires:t.sex}};function __(t,e){var i=e.beaconCollectionDomain,a=e.beaconDomain;if(i)return"https://"+i;t=t||"inferred";var r=a||"litix.io";return t.match(/^[a-z0-9]+$/)?"https://"+t+"."+r:"https://img.litix.io/a.gif"}var b_=rt(Ct()),Vm=function(){var t;switch(qm()){case"cellular":t="cellular";break;case"ethernet":t="wired";break;case"wifi":t="wifi";break;case void 0:break;default:t="other"}return t},qm=function(){var t=b_.default.navigator,e=t&&(t.connection||t.mozConnection||t.webkitConnection);return e&&e.type};Vm.getConnectionFromAPI=qm;var g_=Vm,y_={a:"env",b:"beacon",c:"custom",d:"ad",e:"event",f:"experiment",i:"internal",m:"mux",n:"response",p:"player",q:"request",r:"retry",s:"session",t:"timestamp",u:"viewer",v:"video",w:"page",x:"view",y:"sub"},T_=Ym(y_),A_={ad:"ad",af:"affiliate",ag:"aggregate",ap:"api",al:"application",ao:"audio",ar:"architecture",as:"asset",au:"autoplay",av:"average",bi:"bitrate",bn:"brand",br:"break",bw:"browser",by:"bytes",bz:"business",ca:"cached",cb:"cancel",cc:"codec",cd:"code",cg:"category",ch:"changed",ci:"client",ck:"clicked",cl:"canceled",cn:"config",co:"count",ce:"counter",cp:"complete",cq:"creator",cr:"creative",cs:"captions",ct:"content",cu:"current",cx:"connection",cz:"context",dg:"downscaling",dm:"domain",dn:"cdn",do:"downscale",dr:"drm",dp:"dropped",du:"duration",dv:"device",dy:"dynamic",eb:"enabled",ec:"encoding",ed:"edge",en:"end",eg:"engine",em:"embed",er:"error",ep:"experiments",es:"errorcode",et:"errortext",ee:"event",ev:"events",ex:"expires",ez:"exception",fa:"failed",fi:"first",fm:"family",ft:"format",fp:"fps",fq:"frequency",fr:"frame",fs:"fullscreen",ha:"has",hb:"holdback",he:"headers",ho:"host",hn:"hostname",ht:"height",id:"id",ii:"init",in:"instance",ip:"ip",is:"is",ke:"key",la:"language",lb:"labeled",le:"level",li:"live",ld:"loaded",lo:"load",ls:"lists",lt:"latency",ma:"max",md:"media",me:"message",mf:"manifest",mi:"mime",ml:"midroll",mm:"min",mn:"manufacturer",mo:"model",mx:"mux",ne:"newest",nm:"name",no:"number",on:"on",or:"origin",os:"os",pa:"paused",pb:"playback",pd:"producer",pe:"percentage",pf:"played",pg:"program",ph:"playhead",pi:"plugin",pl:"preroll",pn:"playing",po:"poster",pp:"pip",pr:"preload",ps:"position",pt:"part",py:"property",px:"pop",pz:"plan",ra:"rate",rd:"requested",re:"rebuffer",rf:"rendition",rg:"range",rm:"remote",ro:"ratio",rp:"response",rq:"request",rs:"requests",sa:"sample",sd:"skipped",se:"session",sh:"shift",sk:"seek",sm:"stream",so:"source",sq:"sequence",sr:"series",ss:"status",st:"start",su:"startup",sv:"server",sw:"software",sy:"severity",ta:"tag",tc:"tech",te:"text",tg:"target",th:"throughput",ti:"time",tl:"total",to:"to",tt:"title",ty:"type",ug:"upscaling",un:"universal",up:"upscale",ur:"url",us:"user",va:"variant",vd:"viewed",vi:"video",ve:"version",vw:"view",vr:"viewer",wd:"width",wa:"watch",wt:"waiting"},Xc=Ym(A_);function Ym(t){var e={};for(var i in t)t.hasOwnProperty(i)&&(e[t[i]]=i);return e}function Kl(t){var e={},i={};return Object.keys(t).forEach(function(a){var r=!1;if(t.hasOwnProperty(a)&&t[a]!==void 0){var n=a.split("_"),s=n[0],o=T_[s];o||(ae.info("Data key word `"+n[0]+"` not expected in "+a),o=s+"_"),n.splice(1).forEach(function(l){l==="url"&&(r=!0),Xc[l]?o+=Xc[l]:Number.isInteger(Number(l))?o+=l:(ae.info("Data key word `"+l+"` not expected in "+a),o+="_"+l+"_")}),r?i[o]=t[a]:e[o]=t[a]}}),Object.assign(e,i)}var ea=rt(Ct()),k_=rt(Nm()),S_={maxBeaconSize:300,maxQueueLength:3600,baseTimeBetweenBeacons:1e4,maxPayloadKBSize:500},w_=56*1024,I_=["hb","requestcompleted","requestfailed","requestcanceled"],R_="https://img.litix.io",pi=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this._beaconUrl=t||R_,this._eventQueue=[],this._postInFlight=!1,this._resendAfterPost=!1,this._failureCount=0,this._sendTimeout=!1,this._options=Object.assign({},S_,e)};pi.prototype.queueEvent=function(t,e){var i=Object.assign({},e);return this._eventQueue.length<=this._options.maxQueueLength||t==="eventrateexceeded"?(this._eventQueue.push(i),this._sendTimeout||this._startBeaconSending(),this._eventQueue.length<=this._options.maxQueueLength):!1};pi.prototype.flushEvents=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(t&&this._eventQueue.length===1){this._eventQueue.pop();return}this._eventQueue.length&&this._sendBeaconQueue(),this._startBeaconSending()};pi.prototype.destroy=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;this.destroyed=!0,t?this._clearBeaconQueue():this.flushEvents(),ea.default.clearTimeout(this._sendTimeout)};pi.prototype._clearBeaconQueue=function(){var t=this._eventQueue.length>this._options.maxBeaconSize?this._eventQueue.length-this._options.maxBeaconSize:0,e=this._eventQueue.slice(t);t>0&&Object.assign(e[e.length-1],Kl({mux_view_message:"event queue truncated"}));var i=this._createPayload(e);Gm(this._beaconUrl,i,!0,function(){})};pi.prototype._sendBeaconQueue=function(){var t=this;if(this._postInFlight){this._resendAfterPost=!0;return}var e=this._eventQueue.slice(0,this._options.maxBeaconSize);this._eventQueue=this._eventQueue.slice(this._options.maxBeaconSize),this._postInFlight=!0;var i=this._createPayload(e),a=Ae.now();Gm(this._beaconUrl,i,!1,function(r,n){n?(t._eventQueue=e.concat(t._eventQueue),t._failureCount+=1,ae.info("Error sending beacon: "+n)):t._failureCount=0,t._roundTripTime=Ae.now()-a,t._postInFlight=!1,t._resendAfterPost&&(t._resendAfterPost=!1,t._eventQueue.length>0&&t._sendBeaconQueue())})};pi.prototype._getNextBeaconTime=function(){if(!this._failureCount)return this._options.baseTimeBetweenBeacons;var t=Math.pow(2,this._failureCount-1);return t=t*Math.random(),(1+t)*this._options.baseTimeBetweenBeacons};pi.prototype._startBeaconSending=function(){var t=this;ea.default.clearTimeout(this._sendTimeout),!this.destroyed&&(this._sendTimeout=ea.default.setTimeout(function(){t._eventQueue.length&&t._sendBeaconQueue(),t._startBeaconSending()},this._getNextBeaconTime()))};pi.prototype._createPayload=function(t){var e=this,i={transmission_timestamp:Math.round(Ae.now())};this._roundTripTime&&(i.rtt_ms=Math.round(this._roundTripTime));var a,r,n,s=function(){a=JSON.stringify({metadata:i,events:r||t}),n=a.length/1024},o=function(){return n<=e._options.maxPayloadKBSize};return s(),o()||(ae.info("Payload size is too big ("+n+" kb). Removing unnecessary events."),r=t.filter(function(l){return I_.indexOf(l.e)===-1}),s()),o()||(ae.info("Payload size still too big ("+n+" kb). Cropping fields.."),r.forEach(function(l){for(var u in l){var p=l[u],m=50*1024;typeof p=="string"&&p.length>m&&(l[u]=p.substring(0,m))}}),s()),a};var C_=typeof k_.default.exitPictureInPicture=="function"?function(t){return t.length<=w_}:function(t){return!1},Gm=function(t,e,i,a){if(i&&navigator&&navigator.sendBeacon&&navigator.sendBeacon(t,e)){a();return}if(ea.default.fetch){ea.default.fetch(t,{method:"POST",body:e,headers:{"Content-Type":"text/plain"},keepalive:C_(e)}).then(function(n){return a(null,n.ok?null:"Error")}).catch(function(n){return a(null,n)});return}if(ea.default.XMLHttpRequest){var r=new ea.default.XMLHttpRequest;r.onreadystatechange=function(){if(r.readyState===4)return a(null,r.status!==200?"error":void 0)},r.open("POST",t),r.setRequestHeader("Content-Type","text/plain"),r.send(e);return}a()},L_=pi,D_=["env_key","view_id","view_sequence_number","player_sequence_number","beacon_domain","player_playhead_time","viewer_time","mux_api_version","event","video_id","player_instance_id","player_error_code","player_error_message","player_error_context","player_error_severity","player_error_business_exception"],M_=["adplay","adplaying","adpause","adfirstquartile","admidpoint","adthirdquartile","adended","adresponse","adrequest"],x_=["ad_id","ad_creative_id","ad_universal_id"],O_=["viewstart","error","ended","viewend"],N_=10*60*1e3,P_=function(){function t(e,i){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};Me(this,t);var r,n,s,o,l,u,p,m,h,d,v,f;I(this,"mux",void 0),I(this,"envKey",void 0),I(this,"options",void 0),I(this,"eventQueue",void 0),I(this,"sampleRate",void 0),I(this,"disableCookies",void 0),I(this,"respectDoNotTrack",void 0),I(this,"previousBeaconData",void 0),I(this,"lastEventTime",void 0),I(this,"rateLimited",void 0),I(this,"pageLevelData",void 0),I(this,"viewerData",void 0),this.mux=e,this.envKey=i,this.options=a,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.eventQueue=new L_(__(this.envKey,this.options));var g;this.sampleRate=(g=this.options.sampleRate)!==null&&g!==void 0?g:1;var _;this.disableCookies=(_=this.options.disableCookies)!==null&&_!==void 0?_:!1;var T;this.respectDoNotTrack=(T=this.options.respectDoNotTrack)!==null&&T!==void 0?T:!1,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.pageLevelData={mux_api_version:this.mux.API_VERSION,mux_embed:this.mux.NAME,mux_embed_version:this.mux.VERSION,viewer_application_name:(r=this.options.platform)===null||r===void 0?void 0:r.name,viewer_application_version:(n=this.options.platform)===null||n===void 0?void 0:n.version,viewer_application_engine:(s=this.options.platform)===null||s===void 0?void 0:s.layout,viewer_device_name:(o=this.options.platform)===null||o===void 0?void 0:o.product,viewer_device_category:"",viewer_device_manufacturer:(l=this.options.platform)===null||l===void 0?void 0:l.manufacturer,viewer_os_family:(p=this.options.platform)===null||p===void 0||(u=p.os)===null||u===void 0?void 0:u.family,viewer_os_architecture:(h=this.options.platform)===null||h===void 0||(m=h.os)===null||m===void 0?void 0:m.architecture,viewer_os_version:(v=this.options.platform)===null||v===void 0||(d=v.os)===null||d===void 0?void 0:d.version,viewer_connection_type:g_(),page_url:bl.default===null||bl.default===void 0||(f=bl.default.location)===null||f===void 0?void 0:f.href},this.viewerData=this.disableCookies?{}:f_()}return ti(t,[{key:"send",value:function(e,i){if(!(!e||!(i!=null&&i.view_id))){if(this.respectDoNotTrack&&Wl())return ae.info("Not sending `"+e+"` because Do Not Track is enabled");if(!i||typeof i!="object")return ae.error("A data object was expected in send() but was not provided");var a=this.disableCookies?{}:E_(),r=su(Eo({},this.pageLevelData,i,a,this.viewerData),{event:e,env_key:this.envKey});r.user_id&&(r.viewer_user_id=r.user_id,delete r.user_id);var n,s=((n=r.mux_sample_number)!==null&&n!==void 0?n:0)>=this.sampleRate,o=this._deduplicateBeaconData(e,r),l=Kl(o);if(this.lastEventTime=this.mux.utils.now(),s)return ae.info("Not sending event due to sample rate restriction",e,r,l);if(this.envKey||ae.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",e,r,l),!this.rateLimited){if(ae.info("Sending event",e,r,l),this.rateLimited=!this.eventQueue.queueEvent(e,l),this.mux.WINDOW_UNLOADING&&e==="viewend")this.eventQueue.destroy(!0);else if(this.mux.WINDOW_HIDDEN&&e==="hb"?this.eventQueue.flushEvents(!0):O_.indexOf(e)>=0&&this.eventQueue.flushEvents(),this.rateLimited)return r.event="eventrateexceeded",l=Kl(r),this.eventQueue.queueEvent(r.event,l),ae.error("Beaconing disabled due to rate limit.")}}}},{key:"destroy",value:function(){this.eventQueue.destroy(!1)}},{key:"_deduplicateBeaconData",value:function(e,i){var a=this,r={},n=i.view_id;if(n==="-1"||e==="viewstart"||e==="viewend"||!this.previousBeaconData||this.mux.utils.now()-this.lastEventTime>=N_)r=Eo({},i),n&&(this.previousBeaconData=r),n&&e==="viewend"&&(this.previousBeaconData=null);else{var s=e.indexOf("request")===0;Object.entries(i).forEach(function(o){var l=hi(o,2),u=l[0],p=l[1];a.previousBeaconData&&(p!==a.previousBeaconData[u]||D_.indexOf(u)>-1||a.objectHasChanged(s,u,p,a.previousBeaconData[u])||a.eventRequiresKey(e,u))&&(r[u]=p,a.previousBeaconData[u]=p)})}return r}},{key:"objectHasChanged",value:function(e,i,a,r){return!e||i.indexOf("request_")!==0?!1:i==="request_response_headers"||typeof a!="object"||typeof r!="object"?!0:Object.keys(a||{}).length!==Object.keys(r||{}).length}},{key:"eventRequiresKey",value:function(e,i){return!!(e==="renditionchange"&&i.indexOf("video_source_")===0||x_.includes(i)&&M_.includes(e))}}]),t}(),$_=function t(e){Me(this,t);var i=0,a=0,r=0,n=0,s=0,o=0,l=0,u=function(h,d){var v=d.request_start,f=d.request_response_start,g=d.request_response_end,_=d.request_bytes_loaded;n++;var T,b;if(f?(T=f-(v??0),b=(g??0)-f):b=(g??0)-(v??0),b>0&&_&&_>0){var w=_/b*8e3;s++,a+=_,r+=b,e.data.view_min_request_throughput=Math.min(e.data.view_min_request_throughput||1/0,w),e.data.view_average_request_throughput=a/r*8e3,e.data.view_request_count=n,T>0&&(i+=T,e.data.view_max_request_latency=Math.max(e.data.view_max_request_latency||0,T),e.data.view_average_request_latency=i/s)}},p=function(h,d){n++,o++,e.data.view_request_count=n,e.data.view_request_failed_count=o},m=function(h,d){n++,l++,e.data.view_request_count=n,e.data.view_request_canceled_count=l};e.on("requestcompleted",u),e.on("requestfailed",p),e.on("requestcanceled",m)},U_=$_,H_=60*60*1e3,B_=function t(e){var i=this;Me(this,t),I(this,"_lastEventTime",void 0),e.on("before*",function(a,r){var n=r.viewer_time,s=Ae.now(),o=i._lastEventTime;if(i._lastEventTime=s,o&&s-o>H_){var l=Object.keys(e.data).reduce(function(p,m){return m.indexOf("video_")===0?Object.assign(p,I({},m,e.data[m])):p},{});e.mux.log.info("Received event after at least an hour inactivity, creating a new view");var u=e.playbackHeartbeat._playheadShouldBeProgressing;e._resetView(Object.assign({viewer_time:n},l)),e.playbackHeartbeat._playheadShouldBeProgressing=u,e.playbackHeartbeat._playheadShouldBeProgressing&&a.type!=="play"&&a.type!=="adbreakstart"&&(e.emit("play",{viewer_time:n}),a.type!=="playing"&&e.emit("playing",{viewer_time:n}))}})},W_=B_,F_=["viewstart","ended","loadstart","pause","play","playing","ratechange","waiting","adplay","adpause","adended","aderror","adplaying","adrequest","adresponse","adbreakstart","adbreakend","adfirstquartile","admidpoint","adthirdquartile","rebufferstart","rebufferend","seeked","error","hb","requestcompleted","requestfailed","requestcanceled","renditionchange"],K_=new Set(["requestcompleted","requestfailed","requestcanceled"]),V_=function(t){TE(i,t);var e=SE(i);function i(a,r,n){Me(this,i);var s;s=e.call(this),I($(s),"DOM_CONTENT_LOADED_EVENT_END",void 0),I($(s),"NAVIGATION_START",void 0),I($(s),"_destroyed",void 0),I($(s),"_heartBeatTimeout",void 0),I($(s),"adTracker",void 0),I($(s),"dashjs",void 0),I($(s),"data",void 0),I($(s),"disablePlayheadRebufferTracking",void 0),I($(s),"disableRebufferTracking",void 0),I($(s),"errorTracker",void 0),I($(s),"errorTranslator",void 0),I($(s),"emitTranslator",void 0),I($(s),"getAdData",void 0),I($(s),"getPlayheadTime",void 0),I($(s),"getStateData",void 0),I($(s),"stateDataTranslator",void 0),I($(s),"hlsjs",void 0),I($(s),"id",void 0),I($(s),"longResumeTracker",void 0),I($(s),"minimumRebufferDuration",void 0),I($(s),"mux",void 0),I($(s),"playbackEventDispatcher",void 0),I($(s),"playbackHeartbeat",void 0),I($(s),"playbackHeartbeatTime",void 0),I($(s),"playheadTime",void 0),I($(s),"seekingTracker",void 0),I($(s),"sustainedRebufferThreshold",void 0),I($(s),"watchTimeTracker",void 0),I($(s),"currentFragmentPDT",void 0),I($(s),"currentFragmentStart",void 0),s.DOM_CONTENT_LOADED_EVENT_END=fo.domContentLoadedEventEnd(),s.NAVIGATION_START=fo.navigationStart();var o={debug:!1,minimumRebufferDuration:250,sustainedRebufferThreshold:1e3,playbackHeartbeatTime:25,beaconDomain:"litix.io",sampleRate:1,disableCookies:!1,respectDoNotTrack:!1,disableRebufferTracking:!1,disablePlayheadRebufferTracking:!1,errorTranslator:function(h){return h},emitTranslator:function(){for(var h=arguments.length,d=new Array(h),v=0;v<h;v++)d[v]=arguments[v];return d},stateDataTranslator:function(h){return h}};s.mux=a,s.id=r,n!=null&&n.beaconDomain&&s.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."),n=Object.assign(o,n),n.data=n.data||{},n.data.property_key&&(n.data.env_key=n.data.property_key,delete n.data.property_key),ae.level=n.debug?Xi.DEBUG:Xi.WARN,s.getPlayheadTime=n.getPlayheadTime,s.getStateData=n.getStateData||function(){return{}},s.getAdData=n.getAdData||function(){},s.minimumRebufferDuration=n.minimumRebufferDuration,s.sustainedRebufferThreshold=n.sustainedRebufferThreshold,s.playbackHeartbeatTime=n.playbackHeartbeatTime,s.disableRebufferTracking=n.disableRebufferTracking,s.disableRebufferTracking&&s.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."),s.disablePlayheadRebufferTracking=n.disablePlayheadRebufferTracking,s.errorTranslator=n.errorTranslator,s.emitTranslator=n.emitTranslator,s.stateDataTranslator=n.stateDataTranslator,s.playbackEventDispatcher=new P_(a,n.data.env_key,n),s.data={player_instance_id:En(),mux_sample_rate:n.sampleRate,beacon_domain:n.beaconCollectionDomain||n.beaconDomain},s.data.view_sequence_number=1,s.data.player_sequence_number=1;var l=(function(){typeof this.data.view_start>"u"&&(this.data.view_start=this.mux.utils.now(),this.emit("viewstart"))}).bind($(s));if(s.on("viewinit",function(h,d){this._resetVideoData(),this._resetViewData(),this._resetErrorData(),this._updateStateData(),Object.assign(this.data,d),this._initializeViewData(),this.one("play",l),this.one("adbreakstart",l)}),s.on("videochange",function(h,d){this._resetView(d)}),s.on("programchange",function(h,d){this.data.player_is_paused&&this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."),this._resetView(Object.assign(d,{view_program_changed:!0})),l(),this.emit("play"),this.emit("playing")}),s.on("fragmentchange",function(h,d){this.currentFragmentPDT=d.currentFragmentPDT,this.currentFragmentStart=d.currentFragmentStart}),s.on("destroy",s.destroy),typeof window<"u"&&typeof window.addEventListener=="function"&&typeof window.removeEventListener=="function"){var u=function(){var h=typeof s.data.view_start<"u";s.mux.WINDOW_HIDDEN=document.visibilityState==="hidden",h&&s.mux.WINDOW_HIDDEN&&(s.data.player_is_paused||s.emit("hb"))};window.addEventListener("visibilitychange",u,!1);var p=function(h){h.persisted||s.destroy()};window.addEventListener("pagehide",p,!1),s.on("destroy",function(){window.removeEventListener("visibilitychange",u),window.removeEventListener("pagehide",p)})}s.on("playerready",function(h,d){Object.assign(this.data,d)}),F_.forEach(function(h){s.on(h,function(d,v){h.indexOf("ad")!==0&&this._updateStateData(),Object.assign(this.data,v),this._sanitizeData()}),s.on("after"+h,function(){(h!=="error"||this.errorTracker.viewErrored)&&this.send(h)})}),s.on("viewend",function(h,d){Object.assign(s.data,d)});var m=function(h){var d=this.mux.utils.now();this.data.player_init_time&&(this.data.player_startup_time=d-this.data.player_init_time),!this.mux.PLAYER_TRACKED&&this.NAVIGATION_START&&(this.mux.PLAYER_TRACKED=!0,(this.data.player_init_time||this.DOM_CONTENT_LOADED_EVENT_END)&&(this.data.page_load_time=Math.min(this.data.player_init_time||1/0,this.DOM_CONTENT_LOADED_EVENT_END||1/0)-this.NAVIGATION_START)),this.send("playerready"),delete this.data.player_startup_time,delete this.data.page_load_time};return s.one("playerready",m),s.longResumeTracker=new W_($(s)),s.errorTracker=new KE($(s)),new m_($(s)),s.seekingTracker=new s_($(s)),s.playheadTime=new zE($(s)),s.playbackHeartbeat=new WE($(s)),new a_($(s)),s.watchTimeTracker=new qE($(s)),new GE($(s)),s.adTracker=new d_($(s)),new JE($(s)),new jE($(s)),new t_($(s)),new c_($(s)),new U_($(s)),n.hlsjs&&s.addHLSJS(n),n.dashjs&&s.addDashJS(n),s.emit("viewinit",n.data),s}return ti(i,[{key:"emit",value:function(a,r){var n,s=Object.assign({viewer_time:this.mux.utils.now()},r),o=[a,s];if(this.emitTranslator)try{o=this.emitTranslator(a,s)}catch(l){this.mux.log.warn("Exception in emit translator callback.",l)}o!=null&&o.length&&(n=rs(ur(i.prototype),"emit",this)).call.apply(n,[this].concat(yt(o)))}},{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,typeof this.data.view_start<"u"&&(this.emit("viewend"),this.send("viewend")),this.playbackEventDispatcher.destroy(),this.removeHLSJS(),this.removeDashJS(),window.clearTimeout(this._heartBeatTimeout))}},{key:"send",value:function(a){if(this.data.view_id){var r=Object.assign({},this.data),n=["player_program_time","player_manifest_newest_program_time","player_live_edge_program_time","player_program_time","video_holdback","video_part_holdback","video_target_duration","video_part_target_duration"];if(r.video_source_is_live===void 0&&(r.player_source_duration===1/0||r.video_source_duration===1/0?r.video_source_is_live=!0:(r.player_source_duration>0||r.video_source_duration>0)&&(r.video_source_is_live=!1)),r.video_source_is_live||n.forEach(function(u){r[u]=void 0}),r.video_source_url=r.video_source_url||r.player_source_url,r.video_source_url){var s=hi(_n(r.video_source_url),2),o=s[0],l=s[1];r.video_source_domain=l,r.video_source_hostname=o}delete r.ad_request_id,this.playbackEventDispatcher.send(a,r),this.data.view_sequence_number++,this.data.player_sequence_number++,K_.has(a)||this._restartHeartBeat(),a==="viewend"&&delete this.data.view_id}}},{key:"_resetView",value:function(a){this.emit("viewend"),this.send("viewend"),this.emit("viewinit",a)}},{key:"_updateStateData",value:function(){var a=this.getStateData();if(typeof this.stateDataTranslator=="function")try{a=this.stateDataTranslator(a)}catch(r){this.mux.log.warn("Exception in stateDataTranslator translator callback.",r)}Object.assign(this.data,a),this.playheadTime._updatePlayheadTime(),this._sanitizeData()}},{key:"_sanitizeData",value:function(){var a=this,r=["player_width","player_height","video_source_width","video_source_height","player_playhead_time","video_source_bitrate"];r.forEach(function(s){var o=parseInt(a.data[s],10);a.data[s]=isNaN(o)?void 0:o});var n=["player_source_url","video_source_url"];n.forEach(function(s){if(a.data[s]){var o=a.data[s].toLowerCase();(o.indexOf("data:")===0||o.indexOf("blob:")===0)&&(a.data[s]="MSE style URL")}})}},{key:"_resetVideoData",value:function(){var a=this;Object.keys(this.data).forEach(function(r){r.indexOf("video_")===0&&delete a.data[r]})}},{key:"_resetViewData",value:function(){var a=this;Object.keys(this.data).forEach(function(r){r.indexOf("view_")===0&&delete a.data[r]}),this.data.view_sequence_number=1}},{key:"_resetErrorData",value:function(){delete this.data.player_error_code,delete this.data.player_error_message,delete this.data.player_error_context,delete this.data.player_error_severity,delete this.data.player_error_business_exception}},{key:"_initializeViewData",value:function(){var a=this,r=this.data.view_id=En(),n=function(){r===a.data.view_id&&Te(a.data,"player_view_count",1)};this.data.player_is_paused?this.one("play",n):n()}},{key:"_restartHeartBeat",value:function(){var a=this;window.clearTimeout(this._heartBeatTimeout),this._heartBeatTimeout=window.setTimeout(function(){a.data.player_is_paused||a.emit("hb")},1e4)}},{key:"addHLSJS",value:function(a){if(!a.hlsjs){this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.");return}if(this.hlsjs){this.mux.log.warn("An instance of HLS.js is already being monitored for this player.");return}this.hlsjs=a.hlsjs,DE(this.mux,this.id,a.hlsjs,{},a.Hls||window.Hls)}},{key:"removeHLSJS",value:function(){this.hlsjs&&(ME(this.hlsjs),this.hlsjs=void 0)}},{key:"addDashJS",value:function(a){if(!a.dashjs){this.mux.log.warn("You must pass a valid dashjs instance in order to track it.");return}if(this.dashjs){this.mux.log.warn("An instance of Dash.js is already being monitored for this player.");return}this.dashjs=a.dashjs,PE(this.mux,this.id,a.dashjs)}},{key:"removeDashJS",value:function(){this.dashjs&&($E(this.dashjs),this.dashjs=void 0)}}]),i}(HE),q_=V_,kr=rt(Nm());function Y_(){return kr.default&&!!(kr.default.fullscreenElement||kr.default.webkitFullscreenElement||kr.default.mozFullScreenElement||kr.default.msFullscreenElement)}var G_=["loadstart","pause","play","playing","seeking","seeked","timeupdate","ratechange","stalled","waiting","error","ended"],Q_={1:"MEDIA_ERR_ABORTED",2:"MEDIA_ERR_NETWORK",3:"MEDIA_ERR_DECODE",4:"MEDIA_ERR_SRC_NOT_SUPPORTED"};function z_(t,e,i){var a=hi(vo(e),3),r=a[0],n=a[1],s=a[2],o=t.log,l=t.utils.getComputedStyle,u=t.utils.secondsToMs,p={automaticErrorTracking:!0};if(r){if(s!=="video"&&s!=="audio")return o.error("The element of `"+n+"` was not a media element.")}else return o.error("No element was found with the `"+n+"` query selector.");r.mux&&(r.mux.destroy(),delete r.mux,o.warn("Already monitoring this video element, replacing existing event listeners"));var m={getPlayheadTime:function(){return u(r.currentTime)},getStateData:function(){var d,v,f,g=((d=(v=this).getPlayheadTime)===null||d===void 0?void 0:d.call(v))||u(r.currentTime),_=this.hlsjs&&this.hlsjs.url,T=this.dashjs&&typeof this.dashjs.getSource=="function"&&this.dashjs.getSource(),b={player_is_paused:r.paused,player_width:parseInt(l(r,"width")),player_height:parseInt(l(r,"height")),player_autoplay_on:r.autoplay,player_preload_on:r.preload,player_language_code:r.lang,player_is_fullscreen:Y_(),video_poster_url:r.poster,video_source_url:_||T||r.currentSrc,video_source_duration:u(r.duration),video_source_height:r.videoHeight,video_source_width:r.videoWidth,view_dropped_frame_count:r==null||(f=r.getVideoPlaybackQuality)===null||f===void 0?void 0:f.call(r).droppedVideoFrames};if(r.getStartDate&&g>0){var w=r.getStartDate();if(w&&typeof w.getTime=="function"&&w.getTime()){var L=w.getTime();if(b.player_program_time=L+g,r.seekable.length>0){var P=L+r.seekable.end(r.seekable.length-1);b.player_live_edge_program_time=P}}}return b}};i=Object.assign(p,i,m),i.data=Object.assign({player_software:"HTML5 Video Element",player_mux_plugin_name:"VideoElementMonitor",player_mux_plugin_version:t.VERSION},i.data),r.mux=r.mux||{},r.mux.deleted=!1,r.mux.emit=function(d,v){t.emit(n,d,v)},r.mux.updateData=function(d){r.mux.emit("hb",d)};var h=function(){o.error("The monitor for this video element has already been destroyed.")};r.mux.destroy=function(){Object.keys(r.mux.listeners).forEach(function(d){r.removeEventListener(d,r.mux.listeners[d],!1)}),delete r.mux.listeners,r.mux.destroy=h,r.mux.swapElement=h,r.mux.emit=h,r.mux.addHLSJS=h,r.mux.addDashJS=h,r.mux.removeHLSJS=h,r.mux.removeDashJS=h,r.mux.updateData=h,r.mux.setEmitTranslator=h,r.mux.setStateDataTranslator=h,r.mux.setGetPlayheadTime=h,r.mux.deleted=!0,t.emit(n,"destroy")},r.mux.swapElement=function(d){var v=hi(vo(d),3),f=v[0],g=v[1],_=v[2];if(f){if(_!=="video"&&_!=="audio")return t.log.error("The element of `"+g+"` was not a media element.")}else return t.log.error("No element was found with the `"+g+"` query selector.");f.muxId=r.muxId,delete r.muxId,f.mux=f.mux||{},f.mux.listeners=Object.assign({},r.mux.listeners),delete r.mux.listeners,Object.keys(f.mux.listeners).forEach(function(T){r.removeEventListener(T,f.mux.listeners[T],!1),f.addEventListener(T,f.mux.listeners[T],!1)}),f.mux.swapElement=r.mux.swapElement,f.mux.destroy=r.mux.destroy,delete r.mux,r=f},r.mux.addHLSJS=function(d){t.addHLSJS(n,d)},r.mux.addDashJS=function(d){t.addDashJS(n,d)},r.mux.removeHLSJS=function(){t.removeHLSJS(n)},r.mux.removeDashJS=function(){t.removeDashJS(n)},r.mux.setEmitTranslator=function(d){t.setEmitTranslator(n,d)},r.mux.setStateDataTranslator=function(d){t.setStateDataTranslator(n,d)},r.mux.setGetPlayheadTime=function(d){d||(d=i.getPlayheadTime),t.setGetPlayheadTime(n,d)},t.init(n,i),t.emit(n,"playerready"),r.paused||(t.emit(n,"play"),r.readyState>2&&t.emit(n,"playing")),r.mux.listeners={},G_.forEach(function(d){d==="error"&&!i.automaticErrorTracking||(r.mux.listeners[d]=function(){var v={};if(d==="error"){if(!r.error||r.error.code===1)return;v.player_error_code=r.error.code,v.player_error_message=Q_[r.error.code]||r.error.message}t.emit(n,d,v)},r.addEventListener(d,r.mux.listeners[d],!1))})}function Z_(t,e,i,a){var r=a;if(t&&typeof t[e]=="function")try{r=t[e].apply(t,i)}catch(n){ae.info("safeCall error",n)}return r}var sn=rt(Ct()),Ia;sn.default&&sn.default.WeakMap&&(Ia=new WeakMap);function j_(t,e){if(!t||!e||!sn.default||typeof sn.default.getComputedStyle!="function")return"";var i;return Ia&&Ia.has(t)&&(i=Ia.get(t)),i||(i=sn.default.getComputedStyle(t,null),Ia&&Ia.set(t,i)),i.getPropertyValue(e)}function X_(t){return Math.floor(t*1e3)}var Ui={TARGET_DURATION:"#EXT-X-TARGETDURATION",PART_INF:"#EXT-X-PART-INF",SERVER_CONTROL:"#EXT-X-SERVER-CONTROL",INF:"#EXTINF",PROGRAM_DATE_TIME:"#EXT-X-PROGRAM-DATE-TIME",VERSION:"#EXT-X-VERSION",SESSION_DATA:"#EXT-X-SESSION-DATA"},Yo=function(t){return this.buffer="",this.manifest={segments:[],serverControl:{},sessionData:{}},this.currentUri={},this.process(t),this.manifest};Yo.prototype.process=function(t){var e;for(this.buffer+=t,e=this.buffer.indexOf(`
`);e>-1;e=this.buffer.indexOf(`
`))this.processLine(this.buffer.substring(0,e)),this.buffer=this.buffer.substring(e+1)};Yo.prototype.processLine=function(t){var e=t.indexOf(":"),i=ib(t,e),a=i[0],r=i.length===2?lu(i[1]):void 0;if(a[0]!=="#")this.currentUri.uri=a,this.manifest.segments.push(this.currentUri),this.manifest.targetDuration&&!("duration"in this.currentUri)&&(this.currentUri.duration=this.manifest.targetDuration),this.currentUri={};else switch(a){case Ui.TARGET_DURATION:{if(!isFinite(r)||r<0)return;this.manifest.targetDuration=r,this.setHoldBack();break}case Ui.PART_INF:{gl(this.manifest,i),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),this.setHoldBack();break}case Ui.SERVER_CONTROL:{gl(this.manifest,i),this.setHoldBack();break}case Ui.INF:{r===0?this.currentUri.duration=.01:r>0&&(this.currentUri.duration=r);break}case Ui.PROGRAM_DATE_TIME:{var n=r,s=new Date(n);this.manifest.dateTimeString||(this.manifest.dateTimeString=n,this.manifest.dateTimeObject=s),this.currentUri.dateTimeString=n,this.currentUri.dateTimeObject=s;break}case Ui.VERSION:{gl(this.manifest,i);break}case Ui.SESSION_DATA:{var o=ab(i[1]),l=Hm(o);Object.assign(this.manifest.sessionData,l)}}};Yo.prototype.setHoldBack=function(){var t=this.manifest,e=t.serverControl,i=t.targetDuration,a=t.partTargetDuration;if(e){var r="holdBack",n="partHoldBack",s=i&&i*3,o=a&&a*2;i&&!e.hasOwnProperty(r)&&(e[r]=s),s&&e[r]<s&&(e[r]=s),a&&!e.hasOwnProperty(n)&&(e[n]=a*3),a&&e[n]<o&&(e[n]=o)}};var gl=function(t,e){var i=Qm(e[0].replace("#EXT-X-","")),a;tb(e[1])?(a={},a=Object.assign(eb(e[1]),a)):a=lu(e[1]),t[i]=a},Qm=function(t){return t.toLowerCase().replace(/-(\w)/g,function(e){return e[1].toUpperCase()})},lu=function(t){if(t.toLowerCase()==="yes"||t.toLowerCase()==="no")return t.toLowerCase()==="yes";var e=t.indexOf(":")!==-1?t:parseFloat(t);return isNaN(e)?t:e},J_=function(t){var e={},i=t.split("=");if(i.length>1){var a=Qm(i[0]);e[a]=lu(i[1])}return e},eb=function(t){for(var e=t.split(","),i={},a=0;e.length>a;a++){var r=e[a],n=J_(r);i=Object.assign(n,i)}return i},tb=function(t){return t.indexOf("=")>-1},ib=function(t,e){return e===-1?[t]:[t.substring(0,e),t.substring(e+1)]},ab=function(t){var e={};if(t){var i=t.search(","),a=t.slice(0,i),r=t.slice(i+1),n=[a,r];return n.forEach(function(s,o){for(var l=s.replace(/['"]+/g,"").split("="),u=0;u<l.length;u++)l[u]==="DATA-ID"&&(e["DATA-ID"]=l[1-u]),l[u]==="VALUE"&&(e.VALUE=l[1-u])}),{data:e}}},rb=Yo,nb={safeCall:Z_,safeIncrement:Te,getComputedStyle:j_,secondsToMs:X_,assign:Object.assign,headersStringToObject:ou,cdnHeadersToRequestId:_o,extractHostnameAndDomain:_n,extractHostname:wt,manifestParser:rb,generateShortID:$m,generateUUID:En,now:Ae.now,findMediaElement:vo},sb=nb,ob={PLAYER_READY:"playerready",VIEW_INIT:"viewinit",VIDEO_CHANGE:"videochange",PLAY:"play",PAUSE:"pause",PLAYING:"playing",TIME_UPDATE:"timeupdate",SEEKING:"seeking",SEEKED:"seeked",REBUFFER_START:"rebufferstart",REBUFFER_END:"rebufferend",ERROR:"error",ENDED:"ended",RENDITION_CHANGE:"renditionchange",ORIENTATION_CHANGE:"orientationchange",AD_REQUEST:"adrequest",AD_RESPONSE:"adresponse",AD_BREAK_START:"adbreakstart",AD_PLAY:"adplay",AD_PLAYING:"adplaying",AD_PAUSE:"adpause",AD_FIRST_QUARTILE:"adfirstquartile",AD_MID_POINT:"admidpoint",AD_THIRD_QUARTILE:"adthirdquartile",AD_ENDED:"adended",AD_BREAK_END:"adbreakend",AD_ERROR:"aderror",REQUEST_COMPLETED:"requestcompleted",REQUEST_FAILED:"requestfailed",REQUEST_CANCELLED:"requestcanceled",HEARTBEAT:"hb",DESTROY:"destroy"},lb=ob,db="mux-embed",ub="5.9.0",cb="2.1",_e={},xi=function(t){var e=arguments;typeof t=="string"?xi.hasOwnProperty(t)?nn.default.setTimeout(function(){e=Array.prototype.splice.call(e,1),xi[t].apply(null,e)},0):ae.warn("`"+t+"` is an unknown task"):typeof t=="function"?nn.default.setTimeout(function(){t(xi)},0):ae.warn("`"+t+"` is invalid.")},hb={loaded:Ae.now(),NAME:db,VERSION:ub,API_VERSION:cb,PLAYER_TRACKED:!1,monitor:function(t,e){return z_(xi,t,e)},destroyMonitor:function(t){var e=hi(vo(t),1),i=e[0];i&&i.mux&&typeof i.mux.destroy=="function"?i.mux.destroy():ae.error("A video element monitor for `"+t+"` has not been initialized via `mux.monitor`.")},addHLSJS:function(t,e){var i=gt(t);_e[i]?_e[i].addHLSJS(e):ae.error("A monitor for `"+i+"` has not been initialized.")},addDashJS:function(t,e){var i=gt(t);_e[i]?_e[i].addDashJS(e):ae.error("A monitor for `"+i+"` has not been initialized.")},removeHLSJS:function(t){var e=gt(t);_e[e]?_e[e].removeHLSJS():ae.error("A monitor for `"+e+"` has not been initialized.")},removeDashJS:function(t){var e=gt(t);_e[e]?_e[e].removeDashJS():ae.error("A monitor for `"+e+"` has not been initialized.")},init:function(t,e){Wl()&&e&&e.respectDoNotTrack&&ae.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");var i=gt(t);_e[i]=new q_(xi,i,e)},emit:function(t,e,i){var a=gt(t);_e[a]?(_e[a].emit(e,i),e==="destroy"&&delete _e[a]):ae.error("A monitor for `"+a+"` has not been initialized.")},updateData:function(t,e){var i=gt(t);_e[i]?_e[i].emit("hb",e):ae.error("A monitor for `"+i+"` has not been initialized.")},setEmitTranslator:function(t,e){var i=gt(t);_e[i]?_e[i].emitTranslator=e:ae.error("A monitor for `"+i+"` has not been initialized.")},setStateDataTranslator:function(t,e){var i=gt(t);_e[i]?_e[i].stateDataTranslator=e:ae.error("A monitor for `"+i+"` has not been initialized.")},setGetPlayheadTime:function(t,e){var i=gt(t);_e[i]?_e[i].getPlayheadTime=e:ae.error("A monitor for `"+i+"` has not been initialized.")},checkDoNotTrack:Wl,log:ae,utils:sb,events:lb,WINDOW_HIDDEN:!1,WINDOW_UNLOADING:!1};Object.assign(xi,hb);typeof nn.default<"u"&&typeof nn.default.addEventListener=="function"&&nn.default.addEventListener("pagehide",function(t){t.persisted||(xi.WINDOW_UNLOADING=!0)},!1);var du=xi;/*!
* JavaScript Cookie v2.1.3
* https://github.com/js-cookie/js-cookie
*
* Copyright 2006, 2015 Klaus Hartl & Fagner Brack
* Released under the MIT license
*/var W=Zf,re={VIDEO:"video",THUMBNAIL:"thumbnail",STORYBOARD:"storyboard",DRM:"drm"},O={NOT_AN_ERROR:0,NETWORK_OFFLINE:2000002,NETWORK_UNKNOWN_ERROR:2e6,NETWORK_NO_STATUS:2000001,NETWORK_INVALID_URL:24e5,NETWORK_NOT_FOUND:2404e3,NETWORK_NOT_READY:2412e3,NETWORK_GENERIC_SERVER_FAIL:25e5,NETWORK_TOKEN_MISSING:2403201,NETWORK_TOKEN_MALFORMED:2412202,NETWORK_TOKEN_EXPIRED:2403210,NETWORK_TOKEN_AUD_MISSING:2403221,NETWORK_TOKEN_AUD_MISMATCH:2403222,NETWORK_TOKEN_SUB_MISMATCH:2403232,ENCRYPTED_ERROR:5e6,ENCRYPTED_UNSUPPORTED_KEY_SYSTEM:5000001,ENCRYPTED_GENERATE_REQUEST_FAILED:5000002,ENCRYPTED_UPDATE_LICENSE_FAILED:5000003,ENCRYPTED_UPDATE_SERVER_CERT_FAILED:5000004,ENCRYPTED_CDM_ERROR:5000005,ENCRYPTED_OUTPUT_RESTRICTED:5000006,ENCRYPTED_MISSING_TOKEN:5000002},Go=t=>t===re.VIDEO?"playback":t,gi=class Nr extends Error{constructor(e,i=Nr.MEDIA_ERR_CUSTOM,a,r){var n;super(e),this.name="MediaError",this.code=i,this.context=r,this.fatal=a??(i>=Nr.MEDIA_ERR_NETWORK&&i<=Nr.MEDIA_ERR_ENCRYPTED),this.message||(this.message=(n=Nr.defaultMessages[this.code])!=null?n:"")}};gi.MEDIA_ERR_ABORTED=1,gi.MEDIA_ERR_NETWORK=2,gi.MEDIA_ERR_DECODE=3,gi.MEDIA_ERR_SRC_NOT_SUPPORTED=4,gi.MEDIA_ERR_ENCRYPTED=5,gi.MEDIA_ERR_CUSTOM=100,gi.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var C=gi,mb=t=>t==null,uu=(t,e)=>mb(e)?!1:t in e,Vl={ANY:"any",MUTED:"muted"},j={ON_DEMAND:"on-demand",LIVE:"live",UNKNOWN:"unknown"},Zt={MSE:"mse",NATIVE:"native"},Pr={HEADER:"header",QUERY:"query",NONE:"none"},bo=Object.values(Pr),ui={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},Jc={HLS:ui.M3U8};[...Object.values(ui)];var pk={upTo720p:"720p",upTo1080p:"1080p",upTo1440p:"1440p",upTo2160p:"2160p"},vk={noLessThan480p:"480p",noLessThan540p:"540p",noLessThan720p:"720p",noLessThan1080p:"1080p",noLessThan1440p:"1440p",noLessThan2160p:"2160p"},fk={DESCENDING:"desc"},pb="en",ql={code:pb},ge=(t,e,i,a,r=t)=>{r.addEventListener(e,i,a),t.addEventListener("teardown",()=>{r.removeEventListener(e,i)},{once:!0})};function vb(t,e,i){e&&i>e&&(i=e);for(let a=0;a<t.length;a++)if(t.start(a)<=i&&t.end(a)>=i)return!0;return!1}var cu=t=>{let e=t.indexOf("?");if(e<0)return[t];let i=t.slice(0,e),a=t.slice(e);return[i,a]},Qo=t=>{let{type:e}=t;if(e){let i=e.toUpperCase();return uu(i,Jc)?Jc[i]:e}return fb(t)},zm=t=>t==="VOD"?j.ON_DEMAND:j.LIVE,Zm=t=>t==="EVENT"?Number.POSITIVE_INFINITY:t==="VOD"?Number.NaN:0,fb=t=>{let{src:e}=t;if(!e)return"";let i="";try{i=new URL(e).pathname}catch{console.error("invalid url")}let a=i.lastIndexOf(".");if(a<0)return _b(t)?ui.M3U8:"";let r=i.slice(a+1).toUpperCase();return uu(r,ui)?ui[r]:""},Eb="mux.com",_b=({src:t,customDomain:e=Eb})=>{let i;try{i=new URL(`${t}`)}catch{return!1}let a=i.protocol==="https:",r=i.hostname===`stream.${e}`.toLowerCase(),n=i.pathname.split("/"),s=n.length===2,o=!(n!=null&&n[1].includes("."));return a&&r&&s&&o},tr=t=>{let e=(t??"").split(".")[1];if(e)try{let i=e.replace(/-/g,"+").replace(/_/g,"/"),a=decodeURIComponent(atob(i).split("").map(function(r){return"%"+("00"+r.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(a)}catch{return}},bb=({exp:t},e=Date.now())=>!t||t*1e3<e,gb=({sub:t},e)=>t!==e,yb=({aud:t},e)=>!t,Tb=({aud:t},e)=>t!==e,jm="en";function M(t,e=!0){var i,a;let r=e&&(a=(i=ql)==null?void 0:i[t])!=null?a:t,n=e?ql.code:jm;return new Ab(r,n)}var Ab=class{constructor(t,e=(i=>(i=ql)!=null?i:jm)()){this.message=t,this.locale=e}format(t){return this.message.replace(/\{(\w+)\}/g,(e,i)=>{var a;return(a=t[i])!=null?a:""})}toString(){return this.message}},kb=Object.values(Vl),eh=t=>typeof t=="boolean"||typeof t=="string"&&kb.includes(t),Sb=(t,e,i)=>{let{autoplay:a}=t,r=!1,n=!1,s=eh(a)?a:!!a,o=()=>{r||ge(e,"playing",()=>{r=!0},{once:!0})};if(o(),ge(e,"loadstart",()=>{r=!1,o(),yl(e,s)},{once:!0}),ge(e,"loadstart",()=>{i||(t.streamType&&t.streamType!==j.UNKNOWN?n=t.streamType===j.LIVE:n=!Number.isFinite(e.duration)),yl(e,s)},{once:!0}),i&&i.once(W.Events.LEVEL_LOADED,(l,u)=>{var p;t.streamType&&t.streamType!==j.UNKNOWN?n=t.streamType===j.LIVE:n=(p=u.details.live)!=null?p:!1}),!s){let l=()=>{!n||Number.isFinite(t.startTime)||(i!=null&&i.liveSyncPosition?e.currentTime=i.liveSyncPosition:Number.isFinite(e.seekable.end(0))&&(e.currentTime=e.seekable.end(0)))};i&&ge(e,"play",()=>{e.preload==="metadata"?i.once(W.Events.LEVEL_UPDATED,l):l()},{once:!0})}return l=>{r||(s=eh(l)?l:!!l,yl(e,s))}},yl=(t,e)=>{if(!e)return;let i=t.muted,a=()=>t.muted=i;switch(e){case Vl.ANY:t.play().catch(()=>{t.muted=!0,t.play().catch(a)});break;case Vl.MUTED:t.muted=!0,t.play().catch(a);break;default:t.play().catch(()=>{});break}},wb=({preload:t,src:e},i,a)=>{let r=m=>{m!=null&&["","none","metadata","auto"].includes(m)?i.setAttribute("preload",m):i.removeAttribute("preload")};if(!a)return r(t),r;let n=!1,s=!1,o=a.config.maxBufferLength,l=a.config.maxBufferSize,u=m=>{r(m);let h=m??i.preload;s||h==="none"||(h==="metadata"?(a.config.maxBufferLength=1,a.config.maxBufferSize=1):(a.config.maxBufferLength=o,a.config.maxBufferSize=l),p())},p=()=>{!n&&e&&(n=!0,a.loadSource(e))};return ge(i,"play",()=>{s=!0,a.config.maxBufferLength=o,a.config.maxBufferSize=l,p()},{once:!0}),u(t),u};function Ib(t,e){var i;if(!("videoTracks"in t))return;let a=new WeakMap;e.on(W.Events.MANIFEST_PARSED,function(l,u){o();let p=t.addVideoTrack("main");p.selected=!0;for(let[m,h]of u.levels.entries()){let d=p.addRendition(h.url[0],h.width,h.height,h.videoCodec,h.bitrate);a.set(h,`${m}`),d.id=`${m}`}}),e.on(W.Events.AUDIO_TRACKS_UPDATED,function(l,u){s();for(let p of u.audioTracks){let m=p.default?"main":"alternative",h=t.addAudioTrack(m,p.name,p.lang);h.id=`${p.id}`,p.default&&(h.enabled=!0)}}),t.audioTracks.addEventListener("change",()=>{var l;let u=+((l=[...t.audioTracks].find(m=>m.enabled))==null?void 0:l.id),p=e.audioTracks.map(m=>m.id);u!=e.audioTrack&&p.includes(u)&&(e.audioTrack=u)}),e.on(W.Events.LEVELS_UPDATED,function(l,u){var p;let m=t.videoTracks[(p=t.videoTracks.selectedIndex)!=null?p:0];if(!m)return;let h=u.levels.map(d=>a.get(d));for(let d of t.videoRenditions)d.id&&!h.includes(d.id)&&m.removeRendition(d)});let r=l=>{let u=l.target.selectedIndex;u!=e.nextLevel&&(e.nextLevel=u)};(i=t.videoRenditions)==null||i.addEventListener("change",r);let n=()=>{for(let l of t.videoTracks)t.removeVideoTrack(l)},s=()=>{for(let l of t.audioTracks)t.removeAudioTrack(l)},o=()=>{n(),s()};e.once(W.Events.DESTROYING,o)}var Tl=t=>"time"in t?t.time:t.startTime;function Rb(t,e){e.on(W.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(r,{tracks:n})=>{n.forEach(s=>{var o,l;let u=(o=s.subtitleTrack)!=null?o:s.closedCaptions,p=e.subtitleTracks.findIndex(({lang:h,name:d,type:v})=>h==(u==null?void 0:u.lang)&&d===s.label&&v.toLowerCase()===s.kind),m=((l=s._id)!=null?l:s.default)?"default":`${s.kind}${p}`;hu(t,s.kind,s.label,u==null?void 0:u.lang,m,s.default)})});let i=()=>{if(!e.subtitleTracks.length)return;let r=Array.from(t.textTracks).find(o=>o.id&&o.mode==="showing"&&["subtitles","captions"].includes(o.kind));if(!r)return;let n=e.subtitleTracks[e.subtitleTrack],s=n?n.default?"default":`${e.subtitleTracks[e.subtitleTrack].type.toLowerCase()}${e.subtitleTrack}`:void 0;if(e.subtitleTrack<0||(r==null?void 0:r.id)!==s){let o=e.subtitleTracks.findIndex(({lang:l,name:u,type:p,default:m})=>r.id==="default"&&m||l==r.language&&u===r.label&&p.toLowerCase()===r.kind);e.subtitleTrack=o}(r==null?void 0:r.id)===s&&r.cues&&Array.from(r.cues).forEach(o=>{r.addCue(o)})};t.textTracks.addEventListener("change",i),e.on(W.Events.CUES_PARSED,(r,{track:n,cues:s})=>{let o=t.textTracks.getTrackById(n);if(!o)return;let l=o.mode==="disabled";l&&(o.mode="hidden"),s.forEach(u=>{var p;(p=o.cues)!=null&&p.getCueById(u.id)||o.addCue(u)}),l&&(o.mode="disabled")}),e.once(W.Events.DESTROYING,()=>{t.textTracks.removeEventListener("change",i),t.querySelectorAll("track[data-removeondestroy]").forEach(r=>{r.remove()})});let a=()=>{Array.from(t.textTracks).forEach(r=>{var n,s;if(!["subtitles","caption"].includes(r.kind)&&(r.label==="thumbnails"||r.kind==="chapters")){if(!((n=r.cues)!=null&&n.length)){let o="track";r.kind&&(o+=`[kind="${r.kind}"]`),r.label&&(o+=`[label="${r.label}"]`);let l=t.querySelector(o),u=(s=l==null?void 0:l.getAttribute("src"))!=null?s:"";l==null||l.removeAttribute("src"),setTimeout(()=>{l==null||l.setAttribute("src",u)},0)}r.mode!=="hidden"&&(r.mode="hidden")}})};e.once(W.Events.MANIFEST_LOADED,a),e.once(W.Events.MEDIA_ATTACHED,a)}function hu(t,e,i,a,r,n){let s=document.createElement("track");return s.kind=e,s.label=i,a&&(s.srclang=a),r&&(s.id=r),n&&(s.default=!0),s.track.mode=["subtitles","captions"].includes(e)?"disabled":"hidden",s.setAttribute("data-removeondestroy",""),t.append(s),s.track}function Cb(t,e){let i=Array.prototype.find.call(t.querySelectorAll("track"),a=>a.track===e);i==null||i.remove()}function On(t,e,i){var a;return(a=Array.from(t.querySelectorAll("track")).find(r=>r.track.label===e&&r.track.kind===i))==null?void 0:a.track}async function Xm(t,e,i,a){let r=On(t,i,a);return r||(r=hu(t,a,i),r.mode="hidden",await new Promise(n=>setTimeout(()=>n(void 0),0))),r.mode!=="hidden"&&(r.mode="hidden"),[...e].sort((n,s)=>Tl(s)-Tl(n)).forEach(n=>{var s,o;let l=n.value,u=Tl(n);if("endTime"in n&&n.endTime!=null)r==null||r.addCue(new VTTCue(u,n.endTime,a==="chapters"?l:JSON.stringify(l??null)));else{let p=Array.prototype.findIndex.call(r==null?void 0:r.cues,v=>v.startTime>=u),m=(s=r==null?void 0:r.cues)==null?void 0:s[p],h=m?m.startTime:Number.isFinite(t.duration)?t.duration:Number.MAX_SAFE_INTEGER,d=(o=r==null?void 0:r.cues)==null?void 0:o[p-1];d&&(d.endTime=u),r==null||r.addCue(new VTTCue(u,h,a==="chapters"?l:JSON.stringify(l??null)))}}),t.textTracks.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),r}var mu="cuepoints",Jm=Object.freeze({label:mu});async function ep(t,e,i=Jm){return Xm(t,e,i.label,"metadata")}var Yl=t=>({time:t.startTime,value:JSON.parse(t.text)});function Lb(t,e={label:mu}){let i=On(t,e.label,"metadata");return i!=null&&i.cues?Array.from(i.cues,a=>Yl(a)):[]}function tp(t,e={label:mu}){var i,a;let r=On(t,e.label,"metadata");if(!((i=r==null?void 0:r.activeCues)!=null&&i.length))return;if(r.activeCues.length===1)return Yl(r.activeCues[0]);let{currentTime:n}=t,s=Array.prototype.find.call((a=r.activeCues)!=null?a:[],({startTime:o,endTime:l})=>o<=n&&l>n);return Yl(s||r.activeCues[0])}async function Db(t,e=Jm){return new Promise(i=>{ge(t,"loadstart",async()=>{let a=await ep(t,[],e);ge(t,"cuechange",()=>{let r=tp(t);if(r){let n=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:r});t.dispatchEvent(n)}},{},a),i(a)})})}var pu="chapters",ip=Object.freeze({label:pu}),Gl=t=>({startTime:t.startTime,endTime:t.endTime,value:t.text});async function ap(t,e,i=ip){return Xm(t,e,i.label,"chapters")}function Mb(t,e={label:pu}){var i;let a=On(t,e.label,"chapters");return(i=a==null?void 0:a.cues)!=null&&i.length?Array.from(a.cues,r=>Gl(r)):[]}function rp(t,e={label:pu}){var i,a;let r=On(t,e.label,"chapters");if(!((i=r==null?void 0:r.activeCues)!=null&&i.length))return;if(r.activeCues.length===1)return Gl(r.activeCues[0]);let{currentTime:n}=t,s=Array.prototype.find.call((a=r.activeCues)!=null?a:[],({startTime:o,endTime:l})=>o<=n&&l>n);return Gl(s||r.activeCues[0])}async function xb(t,e=ip){return new Promise(i=>{ge(t,"loadstart",async()=>{let a=await ap(t,[],e);ge(t,"cuechange",()=>{let r=rp(t);if(r){let n=new CustomEvent("chapterchange",{composed:!0,bubbles:!0,detail:r});t.dispatchEvent(n)}},{},a),i(a)})})}function Ob(t,e){if(e){let i=e.playingDate;if(i!=null)return new Date(i.getTime()-t.currentTime*1e3)}return typeof t.getStartDate=="function"?t.getStartDate():new Date(NaN)}function Nb(t,e){if(e&&e.playingDate)return e.playingDate;if(typeof t.getStartDate=="function"){let i=t.getStartDate();return new Date(i.getTime()+t.currentTime*1e3)}return new Date(NaN)}var on={VIDEO:"v",THUMBNAIL:"t",STORYBOARD:"s",DRM:"d"},Pb=t=>{if(t===re.VIDEO)return on.VIDEO;if(t===re.DRM)return on.DRM},$b=(t,e)=>{var i,a;let r=Go(t),n=`${r}Token`;return(i=e.tokens)!=null&&i[r]?(a=e.tokens)==null?void 0:a[r]:uu(n,e)?e[n]:void 0},go=(t,e,i,a,r=!1,n=!(s=>(s=globalThis.navigator)==null?void 0:s.onLine)())=>{var s,o;if(n){let _=M("Your device appears to be offline",r),T,b=C.MEDIA_ERR_NETWORK,w=new C(_,b,!1,T);return w.errorCategory=e,w.muxCode=O.NETWORK_OFFLINE,w.data=t,w}let l="status"in t?t.status:t.code,u=Date.now(),p=C.MEDIA_ERR_NETWORK;if(l===200)return;let m=Go(e),h=$b(e,i),d=Pb(e),[v]=cu((s=i.playbackId)!=null?s:"");if(!l||!v)return;let f=tr(h);if(h&&!f){let _=M("The {tokenNamePrefix}-token provided is invalid or malformed.",r).format({tokenNamePrefix:m}),T=M("Compact JWT string: {token}",r).format({token:h}),b=new C(_,p,!0,T);return b.errorCategory=e,b.muxCode=O.NETWORK_TOKEN_MALFORMED,b.data=t,b}if(l>=500){let _=new C("",p,a??!0);return _.errorCategory=e,_.muxCode=O.NETWORK_UNKNOWN_ERROR,_}if(l===403)if(f){if(bb(f,u)){let _={timeStyle:"medium",dateStyle:"medium"},T=M("The video’s secured {tokenNamePrefix}-token has expired.",r).format({tokenNamePrefix:m}),b=M("Expired at: {expiredDate}. Current time: {currentDate}.",r).format({expiredDate:new Intl.DateTimeFormat("en",_).format((o=f.exp)!=null?o:0*1e3),currentDate:new Intl.DateTimeFormat("en",_).format(u)}),w=new C(T,p,!0,b);return w.errorCategory=e,w.muxCode=O.NETWORK_TOKEN_EXPIRED,w.data=t,w}if(gb(f,v)){let _=M("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",r).format({tokenNamePrefix:m}),T=M("Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}",r).format({tokenNamePrefix:m,playbackId:v,tokenPlaybackId:f.sub}),b=new C(_,p,!0,T);return b.errorCategory=e,b.muxCode=O.NETWORK_TOKEN_SUB_MISMATCH,b.data=t,b}if(yb(f)){let _=M("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:m}),T=M("The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.",r).format({tokenNamePrefix:m,expectedAud:d}),b=new C(_,p,!0,T);return b.errorCategory=e,b.muxCode=O.NETWORK_TOKEN_AUD_MISSING,b.data=t,b}if(Tb(f,d)){let _=M("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:m}),T=M("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.",r).format({tokenNamePrefix:m,expectedAud:d,aud:f.aud}),b=new C(_,p,!0,T);return b.errorCategory=e,b.muxCode=O.NETWORK_TOKEN_AUD_MISMATCH,b.data=t,b}}else{let _=M("Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.",r).format({tokenNamePrefix:m,category:e}),T=M("Specified playback ID: {playbackId}",r).format({playbackId:v}),b=new C(_,p,a??!0,T);return b.errorCategory=e,b.muxCode=O.NETWORK_TOKEN_MISSING,b.data=t,b}if(l===412){let _=M("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",r),T=M("Specified playback ID: {playbackId}",r).format({playbackId:v}),b=new C(_,p,a??!0,T);return b.errorCategory=e,b.muxCode=O.NETWORK_NOT_READY,b.streamType=i.streamType===j.LIVE?"live":i.streamType===j.ON_DEMAND?"on-demand":"unknown",b.data=t,b}if(l===404){let _=M("This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",r),T=M("Specified playback ID: {playbackId}",r).format({playbackId:v}),b=new C(_,p,a??!0,T);return b.errorCategory=e,b.muxCode=O.NETWORK_NOT_FOUND,b.data=t,b}if(l===400){let _=M("The URL or playback-id was invalid. You may have used an invalid value as a playback-id."),T=M("Specified playback ID: {playbackId}",r).format({playbackId:v}),b=new C(_,p,a??!0,T);return b.errorCategory=e,b.muxCode=O.NETWORK_INVALID_URL,b.data=t,b}let g=new C("",p,a??!0);return g.errorCategory=e,g.muxCode=O.NETWORK_UNKNOWN_ERROR,g.data=t,g},th=W.DefaultConfig.capLevelController,Ub={"720p":921600,"1080p":2073600,"1440p":4194304,"2160p":8294400};function Hb(t){let e=t.toLowerCase().trim();return Ub[e]}var Ql=class $r extends th{constructor(e){super(e)}static setMaxAutoResolution(e,i){i?$r.maxAutoResolution.set(e,i):$r.maxAutoResolution.delete(e)}getMaxAutoResolution(){var e;let i=this.hls;return(e=$r.maxAutoResolution.get(i))!=null?e:void 0}get levels(){var e;return(e=this.hls.levels)!=null?e:[]}getValidLevels(e){return this.levels.filter((i,a)=>this.isLevelAllowed(i)&&a<=e)}getMaxLevelCapped(e){let i=this.getValidLevels(e),a=this.getMaxAutoResolution();if(!a)return super.getMaxLevel(e);let r=Hb(a);if(!r)return super.getMaxLevel(e);let n=i.filter(l=>l.width*l.height<=r),s=n.findIndex(l=>l.width*l.height===r);if(s!==-1){let l=n[s];return i.findIndex(u=>u===l)}if(n.length===0)return 0;let o=n[n.length-1];return i.findIndex(l=>l===o)}getMaxLevel(e){if(this.getMaxAutoResolution()!==void 0)return this.getMaxLevelCapped(e);let i=super.getMaxLevel(e),a=this.getValidLevels(e);if(!a[i])return i;let r=Math.min(a[i].width,a[i].height),n=$r.minMaxResolution;return r>=n?i:th.getMaxLevelByMediaSize(a,n*(16/9),n)}};Ql.minMaxResolution=720,Ql.maxAutoResolution=new WeakMap;var Bb=Ql,Al=Bb,ns={FAIRPLAY:"fairplay",PLAYREADY:"playready",WIDEVINE:"widevine"},Wb=t=>{if(t.includes("fps"))return ns.FAIRPLAY;if(t.includes("playready"))return ns.PLAYREADY;if(t.includes("widevine"))return ns.WIDEVINE},Fb=t=>{let e=t.split(`
`).find((i,a,r)=>a&&r[a-1].startsWith("#EXT-X-STREAM-INF"));return fetch(e).then(i=>i.status!==200?Promise.reject(i):i.text())},Kb=t=>{let e=t.split(`
`).filter(a=>a.startsWith("#EXT-X-SESSION-DATA"));if(!e.length)return{};let i={};for(let a of e){let r=qb(a),n=r["DATA-ID"];n&&(i[n]={...r})}return{sessionData:i}},Vb=/([A-Z0-9-]+)="?(.*?)"?(?:,|$)/g;function qb(t){let e=[...t.matchAll(Vb)];return Object.fromEntries(e.map(([,i,a])=>[i,a]))}var Yb=t=>{var e,i,a;let r=t.split(`
`),n=(i=((e=r.find(u=>u.startsWith("#EXT-X-PLAYLIST-TYPE")))!=null?e:"").split(":")[1])==null?void 0:i.trim(),s=zm(n),o=Zm(n),l;if(s===j.LIVE){let u=r.find(p=>p.startsWith("#EXT-X-PART-INF"));if(u)l=+u.split(":")[1].split("=")[1]*2;else{let p=r.find(h=>h.startsWith("#EXT-X-TARGETDURATION")),m=(a=p==null?void 0:p.split(":"))==null?void 0:a[1];l=+(m??6)*3}}return{streamType:s,targetLiveWindow:o,liveEdgeStartOffset:l}},Gb=async(t,e)=>{if(e===ui.MP4)return{streamType:j.ON_DEMAND,targetLiveWindow:Number.NaN,liveEdgeStartOffset:void 0,sessionData:void 0};if(e===ui.M3U8){let i=await fetch(t);if(!i.ok)return Promise.reject(i);let a=await i.text(),r=await Fb(a);return{...Kb(a),...Yb(r)}}return console.error(`Media type ${e} is an unrecognized or unsupported type for src ${t}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0,sessionData:void 0}},Qb=async(t,e,i=Qo({src:t}))=>{var a,r,n,s;let{streamType:o,targetLiveWindow:l,liveEdgeStartOffset:u,sessionData:p}=await Gb(t,i),m=p==null?void 0:p["com.apple.hls.chapters"];(m!=null&&m.URI||m!=null&&m.VALUE.toLocaleLowerCase().startsWith("http"))&&vu((a=m.URI)!=null?a:m.VALUE,e),((r=me.get(e))!=null?r:{}).liveEdgeStartOffset=u,((n=me.get(e))!=null?n:{}).targetLiveWindow=l,e.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),((s=me.get(e))!=null?s:{}).streamType=o,e.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},vu=async(t,e)=>{var i,a;try{let r=await fetch(t);if(!r.ok)throw new Error(`Failed to fetch Mux metadata: ${r.status} ${r.statusText}`);let n=await r.json(),s={};if(!((i=n==null?void 0:n[0])!=null&&i.metadata))return;for(let l of n[0].metadata)l.key&&l.value&&(s[l.key]=l.value);((a=me.get(e))!=null?a:{}).metadata=s;let o=new CustomEvent("muxmetadata");e.dispatchEvent(o)}catch(r){console.error(r)}},zb=t=>{var e;let i=t.type,a=zm(i),r=Zm(i),n,s=!!((e=t.partList)!=null&&e.length);return a===j.LIVE&&(n=s?t.partTarget*2:t.targetduration*3),{streamType:a,targetLiveWindow:r,liveEdgeStartOffset:n,lowLatency:s}},Zb=(t,e,i)=>{var a,r,n,s,o,l,u,p;let{streamType:m,targetLiveWindow:h,liveEdgeStartOffset:d,lowLatency:v}=zb(t);if(m===j.LIVE){v?(i.config.backBufferLength=(a=i.userConfig.backBufferLength)!=null?a:4,i.config.maxFragLookUpTolerance=(r=i.userConfig.maxFragLookUpTolerance)!=null?r:.001,i.config.abrBandWidthUpFactor=(n=i.userConfig.abrBandWidthUpFactor)!=null?n:i.config.abrBandWidthFactor):i.config.backBufferLength=(s=i.userConfig.backBufferLength)!=null?s:8;let f=Object.freeze({get length(){return e.seekable.length},start(g){return e.seekable.start(g)},end(g){var _;return g>this.length||g<0||Number.isFinite(e.duration)?e.seekable.end(g):(_=i.liveSyncPosition)!=null?_:e.seekable.end(g)}});((o=me.get(e))!=null?o:{}).seekable=f}((l=me.get(e))!=null?l:{}).liveEdgeStartOffset=d,((u=me.get(e))!=null?u:{}).targetLiveWindow=h,e.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),((p=me.get(e))!=null?p:{}).streamType=m,e.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},ih,ah,np=(ah=(ih=globalThis==null?void 0:globalThis.navigator)==null?void 0:ih.userAgent)!=null?ah:"",rh,nh,sh,jb=(sh=(nh=(rh=globalThis==null?void 0:globalThis.navigator)==null?void 0:rh.userAgentData)==null?void 0:nh.platform)!=null?sh:"",Xb=np.toLowerCase().includes("android")||["x11","android"].some(t=>jb.toLowerCase().includes(t)),Jb=t=>/^((?!chrome|android).)*safari/i.test(np)&&!!t.canPlayType("application/vnd.apple.mpegurl"),me=new WeakMap,ci="mux.com",oh,lh,sp=(lh=(oh=W).isSupported)==null?void 0:lh.call(oh),e0=t=>Xb||!Jb(t),fu=()=>{if(typeof window<"u")return du.utils.now()},t0=du.utils.generateUUID,zl=({playbackId:t,customDomain:e=ci,maxResolution:i,minResolution:a,renditionOrder:r,programStartTime:n,programEndTime:s,assetStartTime:o,assetEndTime:l,playbackToken:u,tokens:{playback:p=u}={},extraSourceParams:m={}}={})=>{if(!t)return;let[h,d=""]=cu(t),v=new URL(`https://stream.${e}/${h}.m3u8${d}`);return p||v.searchParams.has("token")?(v.searchParams.forEach((f,g)=>{g!="token"&&v.searchParams.delete(g)}),p&&v.searchParams.set("token",p)):(i&&v.searchParams.set("max_resolution",i),a&&(v.searchParams.set("min_resolution",a),i&&+i.slice(0,-1)<+a.slice(0,-1)&&console.error("minResolution must be <= maxResolution","minResolution",a,"maxResolution",i)),r&&v.searchParams.set("rendition_order",r),n&&v.searchParams.set("program_start_time",`${n}`),s&&v.searchParams.set("program_end_time",`${s}`),o&&v.searchParams.set("asset_start_time",`${o}`),l&&v.searchParams.set("asset_end_time",`${l}`),Object.entries(m).forEach(([f,g])=>{g!=null&&v.searchParams.set(f,g)})),v.toString()},zo=t=>{if(!t)return;let[e]=t.split("?");return e||void 0},Eu=t=>{if(!t||!t.startsWith("https://stream."))return;let[e]=new URL(t).pathname.slice(1).split(/\.m3u8|\//);return e||void 0},i0=t=>{var e,i,a;return(e=t==null?void 0:t.metadata)!=null&&e.video_id?t.metadata.video_id:pp(t)&&(a=(i=zo(t.playbackId))!=null?i:Eu(t.src))!=null?a:t.src},op=t=>{var e;return(e=me.get(t))==null?void 0:e.error},a0=t=>{var e;return(e=me.get(t))==null?void 0:e.metadata},Zl=t=>{var e,i;return(i=(e=me.get(t))==null?void 0:e.streamType)!=null?i:j.UNKNOWN},r0=t=>{var e,i;return(i=(e=me.get(t))==null?void 0:e.targetLiveWindow)!=null?i:Number.NaN},_u=t=>{var e,i;return(i=(e=me.get(t))==null?void 0:e.seekable)!=null?i:t.seekable},n0=t=>{var e;let i=(e=me.get(t))==null?void 0:e.liveEdgeStartOffset;if(typeof i!="number")return Number.NaN;let a=_u(t);return a.length?a.end(a.length-1)-i:Number.NaN},bu=.034,s0=(t,e,i=bu)=>Math.abs(t-e)<=i,lp=(t,e,i=bu)=>t>e||s0(t,e,i),o0=(t,e=bu)=>t.paused&&lp(t.currentTime,t.duration,e),dp=(t,e)=>{var i,a,r;if(!e||!t.buffered.length)return;if(t.readyState>2)return!1;let n=e.currentLevel>=0?(a=(i=e.levels)==null?void 0:i[e.currentLevel])==null?void 0:a.details:(r=e.levels.find(m=>!!m.details))==null?void 0:r.details;if(!n||n.live)return;let{fragments:s}=n;if(!(s!=null&&s.length))return;if(t.currentTime<t.duration-(n.targetduration+.5))return!1;let o=s[s.length-1];if(t.currentTime<=o.start)return!1;let l=o.start+o.duration/2,u=t.buffered.start(t.buffered.length-1),p=t.buffered.end(t.buffered.length-1);return l>u&&l<p},up=(t,e)=>t.ended||t.loop?t.ended:e&&dp(t,e)?!0:o0(t),l0=(t,e,i)=>{cp(e,i,t);let{metadata:a={}}=t,{view_session_id:r=t0()}=a,n=i0(t);a.view_session_id=r,a.video_id=n,t.metadata=a;let s=p=>{var m;(m=e.mux)==null||m.emit("hb",{view_drm_type:p})};t.drmTypeCb=s,me.set(e,{retryCount:0});let o=d0(t,e),l=wb(t,e,o);t!=null&&t.muxDataKeepSession&&e!=null&&e.mux&&!e.mux.deleted?o&&e.mux.addHLSJS({hlsjs:o,Hls:o?W:void 0}):v0(t,e,o),f0(t,e,o),Db(e),xb(e);let u=Sb(t,e,o);return{engine:o,setAutoplay:u,setPreload:l}},cp=(t,e,i)=>{let a=e==null?void 0:e.engine;t!=null&&t.mux&&!t.mux.deleted&&(i!=null&&i.muxDataKeepSession?a&&t.mux.removeHLSJS():(t.mux.destroy(),delete t.mux)),a&&(a.detachMedia(),a.destroy()),t&&(t.hasAttribute("src")&&(t.removeAttribute("src"),t.load()),t.removeEventListener("error",fp),t.removeEventListener("error",jl),t.removeEventListener("durationchange",vp),me.delete(t),t.dispatchEvent(new Event("teardown")))};function hp(t,e){var i;let a=Qo(t);if(a!==ui.M3U8)return!0;let r=!a||((i=e.canPlayType(a))!=null?i:!0),{preferPlayback:n}=t,s=n===Zt.MSE,o=n===Zt.NATIVE,l=sp&&(s||e0(e));return r&&(o||!l)}var d0=(t,e)=>{let{debug:i,streamType:a,startTime:r=-1,metadata:n,preferCmcd:s,_hlsConfig:o={},maxAutoResolution:l}=t,u=Qo(t)===ui.M3U8,p=hp(t,e);if(u&&!p&&sp){let m={backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelToPlayerSize:!0,capLevelOnFPSDrop:!0},h=u0(a),d=c0(t),v=[Pr.QUERY,Pr.HEADER].includes(s)?{useHeaders:s===Pr.HEADER,sessionId:n==null?void 0:n.view_session_id,contentId:n==null?void 0:n.video_id}:void 0,f=o.capLevelToPlayerSize==null?{capLevelController:Al}:{},g=new W({debug:i,startPosition:r,cmcd:v,xhrSetup:(_,T)=>{var b,w;if(s&&s!==Pr.QUERY)return;let L=new URL(T);if(!L.searchParams.has("CMCD"))return;let P=((w=(b=L.searchParams.get("CMCD"))==null?void 0:b.split(","))!=null?w:[]).filter(H=>H.startsWith("sid")||H.startsWith("cid")).join(",");L.searchParams.set("CMCD",P),_.open("GET",L)},...f,...m,...h,...d,...o});return f.capLevelController===Al&&l!==void 0&&Al.setMaxAutoResolution(g,l),g.on(W.Events.MANIFEST_PARSED,async function(_,T){var b,w;let L=(b=T.sessionData)==null?void 0:b["com.apple.hls.chapters"];(L!=null&&L.URI||L!=null&&L.VALUE.toLocaleLowerCase().startsWith("http"))&&vu((w=L==null?void 0:L.URI)!=null?w:L==null?void 0:L.VALUE,e)}),g}},u0=t=>t===j.LIVE?{backBufferLength:8}:{},c0=t=>{let{tokens:{drm:e}={},playbackId:i,drmTypeCb:a}=t,r=zo(i);return!e||!r?{}:{emeEnabled:!0,drmSystems:{"com.apple.fps":{licenseUrl:ss(t,"fairplay"),serverCertificateUrl:mp(t,"fairplay")},"com.widevine.alpha":{licenseUrl:ss(t,"widevine")},"com.microsoft.playready":{licenseUrl:ss(t,"playready")}},requestMediaKeySystemAccessFunc:(n,s)=>(n==="com.widevine.alpha"&&(s=[...s.map(o=>{var l;let u=(l=o.videoCapabilities)==null?void 0:l.map(p=>({...p,robustness:"HW_SECURE_ALL"}));return{...o,videoCapabilities:u}}),...s]),navigator.requestMediaKeySystemAccess(n,s).then(o=>{let l=Wb(n);return a==null||a(l),o}))}},h0=async t=>{let e=await fetch(t);return e.status!==200?Promise.reject(e):await e.arrayBuffer()},m0=async(t,e)=>{let i=await fetch(e,{method:"POST",headers:{"Content-type":"application/octet-stream"},body:t});if(i.status!==200)return Promise.reject(i);let a=await i.arrayBuffer();return new Uint8Array(a)},p0=(t,e)=>{let i=async n=>{let s=await navigator.requestMediaKeySystemAccess("com.apple.fps",[{initDataTypes:[n],videoCapabilities:[{contentType:"application/vnd.apple.mpegurl",robustness:""}],distinctiveIdentifier:"not-allowed",persistentState:"not-allowed",sessionTypes:["temporary"]}]).then(l=>{var u;return(u=t.drmTypeCb)==null||u.call(t,ns.FAIRPLAY),l}).catch(()=>{let l=M("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),u=new C(l,C.MEDIA_ERR_ENCRYPTED,!0);u.errorCategory=re.DRM,u.muxCode=O.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM,at(e,u)});if(!s)return;let o=await s.createMediaKeys();try{let l=await h0(mp(t,"fairplay")).catch(u=>{if(u instanceof Response){let p=go(u,re.DRM,t);return console.error("mediaError",p==null?void 0:p.message,p==null?void 0:p.context),p?Promise.reject(p):Promise.reject(new Error("Unexpected error in app cert request"))}return Promise.reject(u)});await o.setServerCertificate(l).catch(()=>{let u=M("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),p=new C(u,C.MEDIA_ERR_ENCRYPTED,!0);return p.errorCategory=re.DRM,p.muxCode=O.ENCRYPTED_UPDATE_SERVER_CERT_FAILED,Promise.reject(p)})}catch(l){at(e,l);return}await e.setMediaKeys(o)},a=n=>{let s;if(n==="internal-error"){let o=M("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser.");s=new C(o,C.MEDIA_ERR_ENCRYPTED,!0),s.errorCategory=re.DRM,s.muxCode=O.ENCRYPTED_CDM_ERROR}else if(n==="output-restricted"||n==="output-downscaled"){let o=M("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.");s=new C(o,C.MEDIA_ERR_ENCRYPTED,!1),s.errorCategory=re.DRM,s.muxCode=O.ENCRYPTED_OUTPUT_RESTRICTED}s&&at(e,s)},r=async(n,s)=>{let o=e.mediaKeys.createSession(),l=()=>{o.keyStatuses.forEach(p=>a(p))},u=async p=>{let m=p.message;try{let h=await m0(m,ss(t,"fairplay"));try{await o.update(h)}catch{let d=M("Failed to update DRM license. This may be an issue with the player or your protected content."),v=new C(d,C.MEDIA_ERR_ENCRYPTED,!0);v.errorCategory=re.DRM,v.muxCode=O.ENCRYPTED_UPDATE_LICENSE_FAILED,at(e,v)}}catch(h){if(h instanceof Response){let d=go(h,re.DRM,t);if(console.error("mediaError",d==null?void 0:d.message,d==null?void 0:d.context),d){at(e,d);return}console.error("Unexpected error in license key request",h);return}console.error(h)}};o.addEventListener("keystatuseschange",l),o.addEventListener("message",u),e.addEventListener("teardown",()=>{o.removeEventListener("keystatuseschange",l),o.removeEventListener("message",u),o.close()},{once:!0}),await o.generateRequest(n,s).catch(p=>{console.error("Failed to generate license request",p);let m=M("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),h=new C(m,C.MEDIA_ERR_ENCRYPTED,!0);return h.errorCategory=re.DRM,h.muxCode=O.ENCRYPTED_GENERATE_REQUEST_FAILED,Promise.reject(h)})};ge(e,"encrypted",async n=>{try{let s=n.initDataType;if(s!=="skd"){console.error(`Received unexpected initialization data type "${s}"`);return}e.mediaKeys||await i(s);let o=n.initData;if(o==null){console.error(`Could not start encrypted playback due to missing initData in ${n.type} event`);return}await r(s,o)}catch(s){at(e,s);return}})},ss=({playbackId:t,tokens:{drm:e}={},customDomain:i=ci},a)=>{let r=zo(t);return`https://license.${i.toLocaleLowerCase().endsWith(ci)?i:ci}/license/${a}/${r}?token=${e}`},mp=({playbackId:t,tokens:{drm:e}={},customDomain:i=ci},a)=>{let r=zo(t);return`https://license.${i.toLocaleLowerCase().endsWith(ci)?i:ci}/appcert/${a}/${r}?token=${e}`},pp=({playbackId:t,src:e,customDomain:i})=>{if(t)return!0;if(typeof e!="string")return!1;let a=window==null?void 0:window.location.href,r=new URL(e,a).hostname.toLocaleLowerCase();return r.includes(ci)||!!i&&r.includes(i.toLocaleLowerCase())},v0=(t,e,i)=>{var a;let{envKey:r,disableTracking:n,muxDataSDK:s=du,muxDataSDKOptions:o={}}=t,l=pp(t);if(!n&&(r||l)){let{playerInitTime:u,playerSoftwareName:p,playerSoftwareVersion:m,beaconCollectionDomain:h,debug:d,disableCookies:v}=t,f={...t.metadata,video_title:((a=t==null?void 0:t.metadata)==null?void 0:a.video_title)||void 0},g=_=>typeof _.player_error_code=="string"?!1:typeof t.errorTranslator=="function"?t.errorTranslator(_):_;s.monitor(e,{debug:d,beaconCollectionDomain:h,hlsjs:i,Hls:i?W:void 0,automaticErrorTracking:!1,errorTranslator:g,disableCookies:v,...o,data:{...r?{env_key:r}:{},player_software_name:p,player_software:p,player_software_version:m,player_init_time:u,...f}})}},f0=(t,e,i)=>{var a,r;let n=hp(t,e),{src:s,customDomain:o=ci}=t,l=()=>{e.ended||t.disablePseudoEnded||!up(e,i)||(dp(e,i)?e.currentTime=e.buffered.end(e.buffered.length-1):e.dispatchEvent(new Event("ended")))},u,p,m=()=>{let h=_u(e),d,v;h.length>0&&(d=h.start(0),v=h.end(0)),(p!==v||u!==d)&&e.dispatchEvent(new CustomEvent("seekablechange",{composed:!0})),u=d,p=v};if(ge(e,"durationchange",m),e&&n){let h=Qo(t);if(typeof s=="string"){if(s.endsWith(".mp4")&&s.includes(o)){let f=Eu(s),g=new URL(`https://stream.${o}/${f}/metadata.json`);vu(g.toString(),e)}let d=()=>{if(Zl(e)!==j.LIVE||Number.isFinite(e.duration))return;let f=setInterval(m,1e3);e.addEventListener("teardown",()=>{clearInterval(f)},{once:!0}),ge(e,"durationchange",()=>{Number.isFinite(e.duration)&&clearInterval(f)})},v=async()=>Qb(s,e,h).then(d).catch(f=>{if(f instanceof Response){let g=go(f,re.VIDEO,t);if(g){at(e,g);return}}});if(e.preload==="none"){let f=()=>{v(),e.removeEventListener("loadedmetadata",g)},g=()=>{v(),e.removeEventListener("play",f)};ge(e,"play",f,{once:!0}),ge(e,"loadedmetadata",g,{once:!0})}else v();(a=t.tokens)!=null&&a.drm?p0(t,e):ge(e,"encrypted",()=>{let f=M("Attempting to play DRM-protected content without providing a DRM token."),g=new C(f,C.MEDIA_ERR_ENCRYPTED,!0);g.errorCategory=re.DRM,g.muxCode=O.ENCRYPTED_MISSING_TOKEN,at(e,g)},{once:!0}),e.setAttribute("src",s),t.startTime&&(((r=me.get(e))!=null?r:{}).startTime=t.startTime,e.addEventListener("durationchange",vp,{once:!0}))}else e.removeAttribute("src");e.addEventListener("error",fp),e.addEventListener("error",jl),e.addEventListener("emptied",()=>{e.querySelectorAll("track[data-removeondestroy]").forEach(d=>{d.remove()})},{once:!0}),ge(e,"pause",l),ge(e,"seeked",l),ge(e,"play",()=>{e.ended||lp(e.currentTime,e.duration)&&(e.currentTime=e.seekable.length?e.seekable.start(0):0)})}else i&&s?(i.once(W.Events.LEVEL_LOADED,(h,d)=>{Zb(d.details,e,i),m(),Zl(e)===j.LIVE&&!Number.isFinite(e.duration)&&(i.on(W.Events.LEVEL_UPDATED,m),ge(e,"durationchange",()=>{Number.isFinite(e.duration)&&i.off(W.Events.LEVELS_UPDATED,m)}))}),i.on(W.Events.ERROR,(h,d)=>{var v,f;let g=E0(d,t);if(g.muxCode===O.NETWORK_NOT_READY){let _=(v=me.get(e))!=null?v:{},T=(f=_.retryCount)!=null?f:0;if(T<6){let b=T===0?5e3:6e4,w=new C(`Retrying in ${b/1e3} seconds...`,g.code,g.fatal);Object.assign(w,g),at(e,w),setTimeout(()=>{_.retryCount=T+1,d.details==="manifestLoadError"&&d.url&&i.loadSource(d.url)},b);return}else{_.retryCount=0;let b=new C('Try again later or <a href="#" onclick="window.location.reload(); return false;" style="color: #4a90e2;">click here to retry</a>',g.code,g.fatal);Object.assign(b,g),at(e,b);return}}at(e,g)}),i.on(W.Events.MANIFEST_LOADED,()=>{let h=me.get(e);h&&h.error&&(h.error=null,h.retryCount=0,e.dispatchEvent(new Event("emptied")),e.dispatchEvent(new Event("loadstart")))}),e.addEventListener("error",jl),ge(e,"waiting",l),Ib(t,i),Rb(e,i),i.attachMedia(e)):console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")};function vp(t){var e;let i=t.target,a=(e=me.get(i))==null?void 0:e.startTime;if(a&&vb(i.seekable,i.duration,a)){let r=i.preload==="auto";r&&(i.preload="none"),i.currentTime=a,r&&(i.preload="auto")}}async function fp(t){if(!t.isTrusted)return;t.stopImmediatePropagation();let e=t.target;if(!(e!=null&&e.error))return;let{message:i,code:a}=e.error,r=new C(i,a);if(e.src&&a===C.MEDIA_ERR_SRC_NOT_SUPPORTED&&e.readyState===HTMLMediaElement.HAVE_NOTHING){setTimeout(()=>{var n;let s=(n=op(e))!=null?n:e.error;(s==null?void 0:s.code)===C.MEDIA_ERR_SRC_NOT_SUPPORTED&&at(e,r)},500);return}if(e.src&&(a!==C.MEDIA_ERR_DECODE||a!==void 0))try{let{status:n}=await fetch(e.src);r.data={response:{code:n}}}catch{}at(e,r)}function at(t,e){var i;e.fatal&&(((i=me.get(t))!=null?i:{}).error=e,t.dispatchEvent(new CustomEvent("error",{detail:e})))}function jl(t){var e,i;if(!(t instanceof CustomEvent)||!(t.detail instanceof C))return;let a=t.target,r=t.detail;!r||!r.fatal||(((e=me.get(a))!=null?e:{}).error=r,(i=a.mux)==null||i.emit("error",{player_error_code:r.code,player_error_message:r.message,player_error_context:r.context}))}var E0=(t,e)=>{var i,a,r;t.fatal?console.error("getErrorFromHlsErrorData()",t):e.debug&&console.warn("getErrorFromHlsErrorData() (non-fatal)",t);let n={[W.ErrorTypes.NETWORK_ERROR]:C.MEDIA_ERR_NETWORK,[W.ErrorTypes.MEDIA_ERROR]:C.MEDIA_ERR_DECODE,[W.ErrorTypes.KEY_SYSTEM_ERROR]:C.MEDIA_ERR_ENCRYPTED},s=p=>[W.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,W.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED].includes(p.details)?C.MEDIA_ERR_NETWORK:n[p.type],o=p=>{if(p.type===W.ErrorTypes.KEY_SYSTEM_ERROR)return re.DRM;if(p.type===W.ErrorTypes.NETWORK_ERROR)return re.VIDEO},l,u=s(t);if(u===C.MEDIA_ERR_NETWORK&&t.response){let p=(i=o(t))!=null?i:re.VIDEO;l=(a=go(t.response,p,e,t.fatal))!=null?a:new C("",u,t.fatal)}else if(u===C.MEDIA_ERR_ENCRYPTED)if(t.details===W.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE){let p=M("Attempting to play DRM-protected content without providing a DRM token.");l=new C(p,C.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=re.DRM,l.muxCode=O.ENCRYPTED_MISSING_TOKEN}else if(t.details===W.ErrorDetails.KEY_SYSTEM_NO_ACCESS){let p=M("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.");l=new C(p,C.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=re.DRM,l.muxCode=O.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM}else if(t.details===W.ErrorDetails.KEY_SYSTEM_NO_SESSION){let p=M("Failed to generate a DRM license request. This may be an issue with the player or your protected content.");l=new C(p,C.MEDIA_ERR_ENCRYPTED,!0),l.errorCategory=re.DRM,l.muxCode=O.ENCRYPTED_GENERATE_REQUEST_FAILED}else if(t.details===W.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED){let p=M("Failed to update DRM license. This may be an issue with the player or your protected content.");l=new C(p,C.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=re.DRM,l.muxCode=O.ENCRYPTED_UPDATE_LICENSE_FAILED}else if(t.details===W.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED){let p=M("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate.");l=new C(p,C.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=re.DRM,l.muxCode=O.ENCRYPTED_UPDATE_SERVER_CERT_FAILED}else if(t.details===W.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR){let p=M("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser.");l=new C(p,C.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=re.DRM,l.muxCode=O.ENCRYPTED_CDM_ERROR}else if(t.details===W.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED){let p=M("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.");l=new C(p,C.MEDIA_ERR_ENCRYPTED,!1),l.errorCategory=re.DRM,l.muxCode=O.ENCRYPTED_OUTPUT_RESTRICTED}else l=new C(t.error.message,C.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=re.DRM,l.muxCode=O.ENCRYPTED_ERROR;else l=new C("",u,t.fatal);return l.context||(l.context=`${t.url?`url: ${t.url}
`:""}${t.response&&(t.response.code||t.response.text)?`response: ${t.response.code}, ${t.response.text}
`:""}${t.reason?`failure reason: ${t.reason}
`:""}${t.level?`level: ${t.level}
`:""}${t.parent?`parent stream controller: ${t.parent}
`:""}${t.buffer?`buffer length: ${t.buffer}
`:""}${t.error?`error: ${t.error}
`:""}${t.event?`event: ${t.event}
`:""}${t.err?`error message: ${(r=t.err)==null?void 0:r.message}
`:""}`),l.data=t,l},Ep=t=>{throw TypeError(t)},gu=(t,e,i)=>e.has(t)||Ep("Cannot "+i),Ne=(t,e,i)=>(gu(t,e,"read from private field"),i?i.call(t):e.get(t)),bt=(t,e,i)=>e.has(t)?Ep("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),ht=(t,e,i,a)=>(gu(t,e,"write to private field"),e.set(t,i),i),Bn=(t,e,i)=>(gu(t,e,"access private method"),i),_0=()=>{try{return"0.29.2"}catch{}return"UNKNOWN"},b0=_0(),g0=()=>b0,y0=`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" part="logo" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 1600 500"><g fill="#fff"><path d="M994.287 93.486c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m0-93.486c-34.509 0-62.484 27.976-62.484 62.486v187.511c0 68.943-56.09 125.033-125.032 125.033s-125.03-56.09-125.03-125.033V62.486C681.741 27.976 653.765 0 619.256 0s-62.484 27.976-62.484 62.486v187.511C556.772 387.85 668.921 500 806.771 500c137.851 0 250.001-112.15 250.001-250.003V62.486c0-34.51-27.976-62.486-62.485-62.486M1537.51 468.511c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m-275.883-218.509-143.33 143.329c-24.402 24.402-24.402 63.966 0 88.368 24.402 24.402 63.967 24.402 88.369 0l143.33-143.329 143.328 143.329c24.402 24.4 63.967 24.402 88.369 0 24.403-24.402 24.403-63.966.001-88.368l-143.33-143.329.001-.004 143.329-143.329c24.402-24.402 24.402-63.965 0-88.367s-63.967-24.402-88.369 0L1349.996 161.63 1206.667 18.302c-24.402-24.401-63.967-24.402-88.369 0s-24.402 63.965 0 88.367l143.329 143.329v.004ZM437.511 468.521c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31M461.426 4.759C438.078-4.913 411.2.432 393.33 18.303L249.999 161.632 106.669 18.303C88.798.432 61.922-4.913 38.573 4.759 15.224 14.43-.001 37.214-.001 62.488v375.026c0 34.51 27.977 62.486 62.487 62.486 34.51 0 62.486-27.976 62.486-62.486V213.341l80.843 80.844c24.404 24.402 63.965 24.402 88.369 0l80.843-80.844v224.173c0 34.51 27.976 62.486 62.486 62.486s62.486-27.976 62.486-62.486V62.488c0-25.274-15.224-48.058-38.573-57.729" style="fill-rule:nonzero"/></g></svg>`,y={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_TRACKING:"disable-tracking",DISABLE_COOKIES:"disable-cookies",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended",DRM_TOKEN:"drm-token",PLAYBACK_TOKEN:"playback-token",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",MIN_RESOLUTION:"min-resolution",MAX_AUTO_RESOLUTION:"max-auto-resolution",RENDITION_ORDER:"rendition-order",PROGRAM_START_TIME:"program-start-time",PROGRAM_END_TIME:"program-end-time",ASSET_START_TIME:"asset-start-time",ASSET_END_TIME:"asset-end-time",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PLAYER_INIT_TIME:"player-init-time",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type",LOGO:"logo"},T0=Object.values(y),dh=g0(),uh="mux-video",Nt,Ur,os,Hr,ls,ds,us,cs,hs,Br,Ra,Wr,A0=class extends Un{constructor(){super(),bt(this,Ra),bt(this,Nt),bt(this,Ur),bt(this,os),bt(this,Hr,{}),bt(this,ls,{}),bt(this,ds),bt(this,us),bt(this,cs),bt(this,hs),bt(this,Br,""),ht(this,os,fu()),this.nativeEl.addEventListener("muxmetadata",e=>{var i;let a=a0(this.nativeEl),r=(i=this.metadata)!=null?i:{};this.metadata={...a,...r},(a==null?void 0:a["com.mux.video.branding"])==="mux-free-plan"&&(ht(this,Br,"default"),this.updateLogo())})}static get NAME(){return uh}static get VERSION(){return dh}static get observedAttributes(){var e;return[...T0,...(e=Un.observedAttributes)!=null?e:[]]}static getLogoHTML(e){return!e||e==="false"?"":e==="default"?y0:`<img part="logo" src="${e}" />`}static getTemplateHTML(e={}){var i;return`
      ${Un.getTemplateHTML(e)}
      <style>
        :host {
          position: relative;
        }
        slot[name="logo"] {
          display: flex;
          justify-content: end;
          position: absolute;
          top: 1rem;
          right: 1rem;
          opacity: 0;
          transition: opacity 0.25s ease-in-out;
          z-index: 1;
        }
        slot[name="logo"]:has([part="logo"]) {
          opacity: 1;
        }
        slot[name="logo"] [part="logo"] {
          width: 5rem;
          pointer-events: none;
          user-select: none;
        }
      </style>
      <slot name="logo">
        ${this.getLogoHTML((i=e[y.LOGO])!=null?i:"")}
      </slot>
    `}get preferCmcd(){var e;return(e=this.getAttribute(y.PREFER_CMCD))!=null?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?bo.includes(e)?this.setAttribute(y.PREFER_CMCD,e):console.warn(`Invalid value for preferCmcd. Must be one of ${bo.join()}`):this.removeAttribute(y.PREFER_CMCD))}get playerInitTime(){return this.hasAttribute(y.PLAYER_INIT_TIME)?+this.getAttribute(y.PLAYER_INIT_TIME):Ne(this,os)}set playerInitTime(e){e!=this.playerInitTime&&(e==null?this.removeAttribute(y.PLAYER_INIT_TIME):this.setAttribute(y.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return(e=Ne(this,cs))!=null?e:uh}set playerSoftwareName(e){ht(this,cs,e)}get playerSoftwareVersion(){var e;return(e=Ne(this,us))!=null?e:dh}set playerSoftwareVersion(e){ht(this,us,e)}get _hls(){var e;return(e=Ne(this,Nt))==null?void 0:e.engine}get mux(){var e;return(e=this.nativeEl)==null?void 0:e.mux}get error(){var e;return(e=op(this.nativeEl))!=null?e:null}get errorTranslator(){return Ne(this,hs)}set errorTranslator(e){ht(this,hs,e)}get src(){return this.getAttribute("src")}set src(e){e!==this.src&&(e==null?this.removeAttribute("src"):this.setAttribute("src",e))}get type(){var e;return(e=this.getAttribute(y.TYPE))!=null?e:void 0}set type(e){e!==this.type&&(e?this.setAttribute(y.TYPE,e):this.removeAttribute(y.TYPE))}get preload(){let e=this.getAttribute("preload");return e===""?"auto":["none","metadata","auto"].includes(e)?e:super.preload}set preload(e){e!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(e)?this.setAttribute("preload",e):this.removeAttribute("preload"))}get debug(){return this.getAttribute(y.DEBUG)!=null}set debug(e){e!==this.debug&&(e?this.setAttribute(y.DEBUG,""):this.removeAttribute(y.DEBUG))}get disableTracking(){return this.hasAttribute(y.DISABLE_TRACKING)}set disableTracking(e){e!==this.disableTracking&&this.toggleAttribute(y.DISABLE_TRACKING,!!e)}get disableCookies(){return this.hasAttribute(y.DISABLE_COOKIES)}set disableCookies(e){e!==this.disableCookies&&(e?this.setAttribute(y.DISABLE_COOKIES,""):this.removeAttribute(y.DISABLE_COOKIES))}get disablePseudoEnded(){return this.hasAttribute(y.DISABLE_PSEUDO_ENDED)}set disablePseudoEnded(e){e!==this.disablePseudoEnded&&(e?this.setAttribute(y.DISABLE_PSEUDO_ENDED,""):this.removeAttribute(y.DISABLE_PSEUDO_ENDED))}get startTime(){let e=this.getAttribute(y.START_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set startTime(e){e!==this.startTime&&(e==null?this.removeAttribute(y.START_TIME):this.setAttribute(y.START_TIME,`${e}`))}get playbackId(){var e;return this.hasAttribute(y.PLAYBACK_ID)?this.getAttribute(y.PLAYBACK_ID):(e=Eu(this.src))!=null?e:void 0}set playbackId(e){e!==this.playbackId&&(e?this.setAttribute(y.PLAYBACK_ID,e):this.removeAttribute(y.PLAYBACK_ID))}get maxResolution(){var e;return(e=this.getAttribute(y.MAX_RESOLUTION))!=null?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(y.MAX_RESOLUTION,e):this.removeAttribute(y.MAX_RESOLUTION))}get minResolution(){var e;return(e=this.getAttribute(y.MIN_RESOLUTION))!=null?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(y.MIN_RESOLUTION,e):this.removeAttribute(y.MIN_RESOLUTION))}get maxAutoResolution(){var e;return(e=this.getAttribute(y.MAX_AUTO_RESOLUTION))!=null?e:void 0}set maxAutoResolution(e){e==null?this.removeAttribute(y.MAX_AUTO_RESOLUTION):this.setAttribute(y.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){var e;return(e=this.getAttribute(y.RENDITION_ORDER))!=null?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(y.RENDITION_ORDER,e):this.removeAttribute(y.RENDITION_ORDER))}get programStartTime(){let e=this.getAttribute(y.PROGRAM_START_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set programStartTime(e){e==null?this.removeAttribute(y.PROGRAM_START_TIME):this.setAttribute(y.PROGRAM_START_TIME,`${e}`)}get programEndTime(){let e=this.getAttribute(y.PROGRAM_END_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set programEndTime(e){e==null?this.removeAttribute(y.PROGRAM_END_TIME):this.setAttribute(y.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){let e=this.getAttribute(y.ASSET_START_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set assetStartTime(e){e==null?this.removeAttribute(y.ASSET_START_TIME):this.setAttribute(y.ASSET_START_TIME,`${e}`)}get assetEndTime(){let e=this.getAttribute(y.ASSET_END_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set assetEndTime(e){e==null?this.removeAttribute(y.ASSET_END_TIME):this.setAttribute(y.ASSET_END_TIME,`${e}`)}get customDomain(){var e;return(e=this.getAttribute(y.CUSTOM_DOMAIN))!=null?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(y.CUSTOM_DOMAIN,e):this.removeAttribute(y.CUSTOM_DOMAIN))}get drmToken(){var e;return(e=this.getAttribute(y.DRM_TOKEN))!=null?e:void 0}set drmToken(e){e!==this.drmToken&&(e?this.setAttribute(y.DRM_TOKEN,e):this.removeAttribute(y.DRM_TOKEN))}get playbackToken(){var e,i,a,r;if(this.hasAttribute(y.PLAYBACK_TOKEN))return(e=this.getAttribute(y.PLAYBACK_TOKEN))!=null?e:void 0;if(this.hasAttribute(y.PLAYBACK_ID)){let[,n]=cu((i=this.playbackId)!=null?i:"");return(a=new URLSearchParams(n).get("token"))!=null?a:void 0}if(this.src)return(r=new URLSearchParams(this.src).get("token"))!=null?r:void 0}set playbackToken(e){e!==this.playbackToken&&(e?this.setAttribute(y.PLAYBACK_TOKEN,e):this.removeAttribute(y.PLAYBACK_TOKEN))}get tokens(){let e=this.getAttribute(y.PLAYBACK_TOKEN),i=this.getAttribute(y.DRM_TOKEN);return{...Ne(this,ls),...e!=null?{playback:e}:{},...i!=null?{drm:i}:{}}}set tokens(e){ht(this,ls,e??{})}get ended(){return up(this.nativeEl,this._hls)}get envKey(){var e;return(e=this.getAttribute(y.ENV_KEY))!=null?e:void 0}set envKey(e){e!==this.envKey&&(e?this.setAttribute(y.ENV_KEY,e):this.removeAttribute(y.ENV_KEY))}get beaconCollectionDomain(){var e;return(e=this.getAttribute(y.BEACON_COLLECTION_DOMAIN))!=null?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(y.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(y.BEACON_COLLECTION_DOMAIN))}get streamType(){var e;return(e=this.getAttribute(y.STREAM_TYPE))!=null?e:Zl(this.nativeEl)}set streamType(e){e!==this.streamType&&(e?this.setAttribute(y.STREAM_TYPE,e):this.removeAttribute(y.STREAM_TYPE))}get targetLiveWindow(){return this.hasAttribute(y.TARGET_LIVE_WINDOW)?+this.getAttribute(y.TARGET_LIVE_WINDOW):r0(this.nativeEl)}set targetLiveWindow(e){e!=this.targetLiveWindow&&(e==null?this.removeAttribute(y.TARGET_LIVE_WINDOW):this.setAttribute(y.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e,i;if(this.hasAttribute(y.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:a}=this,r=(e=this.nativeEl.seekable.end(0))!=null?e:0,n=(i=this.nativeEl.seekable.start(0))!=null?i:0;return Math.max(n,r-a)}return n0(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(y.LIVE_EDGE_OFFSET))return+this.getAttribute(y.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){e!=this.liveEdgeOffset&&(e==null?this.removeAttribute(y.LIVE_EDGE_OFFSET):this.setAttribute(y.LIVE_EDGE_OFFSET,`${+e}`))}get seekable(){return _u(this.nativeEl)}async addCuePoints(e){return ep(this.nativeEl,e)}get activeCuePoint(){return tp(this.nativeEl)}get cuePoints(){return Lb(this.nativeEl)}async addChapters(e){return ap(this.nativeEl,e)}get activeChapter(){return rp(this.nativeEl)}get chapters(){return Mb(this.nativeEl)}getStartDate(){return Ob(this.nativeEl,this._hls)}get currentPdt(){return Nb(this.nativeEl,this._hls)}get preferPlayback(){let e=this.getAttribute(y.PREFER_PLAYBACK);if(e===Zt.MSE||e===Zt.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===Zt.MSE||e===Zt.NATIVE?this.setAttribute(y.PREFER_PLAYBACK,e):this.removeAttribute(y.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(e=>e.startsWith("metadata-")&&![y.METADATA_URL].includes(e)).reduce((e,i)=>{let a=this.getAttribute(i);return a!=null&&(e[i.replace(/^metadata-/,"").replace(/-/g,"_")]=a),e},{}),...Ne(this,Hr)}}set metadata(e){ht(this,Hr,e??{}),this.mux&&this.mux.emit("hb",Ne(this,Hr))}get _hlsConfig(){return Ne(this,ds)}set _hlsConfig(e){ht(this,ds,e)}get logo(){var e;return(e=this.getAttribute(y.LOGO))!=null?e:Ne(this,Br)}set logo(e){e?this.setAttribute(y.LOGO,e):this.removeAttribute(y.LOGO)}load(){ht(this,Nt,l0(this,this.nativeEl,Ne(this,Nt)))}unload(){cp(this.nativeEl,Ne(this,Nt),this),ht(this,Nt,void 0)}attributeChangedCallback(e,i,a){var r,n;switch(Un.observedAttributes.includes(e)&&!["src","autoplay","preload"].includes(e)&&super.attributeChangedCallback(e,i,a),e){case y.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=a??void 0;break;case y.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=a??void 0;break;case"src":{let s=!!i,o=!!a;!s&&o?Bn(this,Ra,Wr).call(this):s&&!o?this.unload():s&&o&&(this.unload(),Bn(this,Ra,Wr).call(this));break}case"autoplay":if(a===i)break;(r=Ne(this,Nt))==null||r.setAutoplay(this.autoplay);break;case"preload":if(a===i)break;(n=Ne(this,Nt))==null||n.setPreload(a);break;case y.PLAYBACK_ID:this.src=zl(this);break;case y.DEBUG:{let s=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=s);break}case y.METADATA_URL:a&&fetch(a).then(s=>s.json()).then(s=>this.metadata=s).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${a}!`));break;case y.STREAM_TYPE:(a==null||a!==i)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case y.TARGET_LIVE_WINDOW:(a==null||a!==i)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}));break;case y.LOGO:(a==null||a!==i)&&this.updateLogo();break;case y.DISABLE_TRACKING:{if(a==null||a!==i){let s=this.currentTime,o=this.paused;this.unload(),Bn(this,Ra,Wr).call(this).then(()=>{this.currentTime=s,o||this.play()})}break}case y.DISABLE_COOKIES:{(a==null||a!==i)&&this.disableCookies&&document.cookie.split(";").forEach(s=>{s.trim().startsWith("muxData")&&(document.cookie=s.replace(/^ +/,"").replace(/=.*/,"=;expires="+new Date().toUTCString()+";path=/"))});break}}}updateLogo(){if(!this.shadowRoot)return;let e=this.shadowRoot.querySelector('slot[name="logo"]');if(!e)return;let i=this.constructor.getLogoHTML(Ne(this,Br)||this.logo);e.innerHTML=i}connectedCallback(){var e;(e=super.connectedCallback)==null||e.call(this),this.nativeEl&&this.src&&!Ne(this,Nt)&&Bn(this,Ra,Wr).call(this)}disconnectedCallback(){this.unload()}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{composed:!0,detail:e.detail}))}};Nt=new WeakMap,Ur=new WeakMap,os=new WeakMap,Hr=new WeakMap,ls=new WeakMap,ds=new WeakMap,us=new WeakMap,cs=new WeakMap,hs=new WeakMap,Br=new WeakMap,Ra=new WeakSet,Wr=async function(){Ne(this,Ur)||(await ht(this,Ur,Promise.resolve()),ht(this,Ur,null),this.load())};const la=new WeakMap;class kl extends Error{}class k0 extends Error{}const S0=["application/x-mpegURL","application/vnd.apple.mpegurl","audio/mpegurl"],w0=globalThis.WeakRef?class extends Set{add(t){super.add(new WeakRef(t))}forEach(t){super.forEach(e=>{const i=e.deref();i&&t(i)})}}:Set;function I0(t){var e,i,a;(i=(e=globalThis.chrome)==null?void 0:e.cast)!=null&&i.isAvailable?(a=globalThis.cast)!=null&&a.framework?t():customElements.whenDefined("google-cast-button").then(t):globalThis.__onGCastApiAvailable=()=>{customElements.whenDefined("google-cast-button").then(t)}}function R0(){return globalThis.chrome}function C0(){var i;const t="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";if((i=globalThis.chrome)!=null&&i.cast||document.querySelector(`script[src="${t}"]`))return;const e=document.createElement("script");e.src=t,document.head.append(e)}function Mi(){var t,e;return(e=(t=globalThis.cast)==null?void 0:t.framework)==null?void 0:e.CastContext.getInstance()}function yu(){var t;return(t=Mi())==null?void 0:t.getCurrentSession()}function Tu(){var t;return(t=yu())==null?void 0:t.getSessionObj().media[0]}function L0(t){return new Promise((e,i)=>{Tu().editTracksInfo(t,e,i)})}function D0(t){return new Promise((e,i)=>{Tu().getStatus(t,e,i)})}function ch(t){return Mi().setOptions({..._p(),...t})}function _p(){return{receiverApplicationId:"CC1AD845",autoJoinPolicy:"origin_scoped",androidReceiverCompatible:!1,language:"en-US",resumeSavedSession:!0}}function M0(t){if(!t)return;const e=/\.([a-zA-Z0-9]+)(?:\?.*)?$/,i=t.match(e);return i?i[1]:null}function x0(t){const e=t.split(`
`),i=[];for(let a=0;a<e.length;a++)if(e[a].trim().startsWith("#EXT-X-STREAM-INF")){const n=e[a+1]?e[a+1].trim():"";n&&!n.startsWith("#")&&i.push(n)}return i}function O0(t){return t.split(`
`).find(a=>!a.trim().startsWith("#")&&a.trim()!=="")}async function N0(t){try{const i=(await fetch(t,{method:"HEAD"})).headers.get("Content-Type");return S0.some(a=>i===a)}catch(e){return console.error("Error while trying to get the Content-Type of the manifest",e),!1}}async function P0(t){try{const e=await(await fetch(t)).text();let i=e;const a=x0(e);if(a.length>0){const s=new URL(a[0],t).toString();i=await(await fetch(s)).text()}const r=O0(i);return M0(r)}catch(e){console.error("Error while trying to parse the manifest playlist",e);return}}const ms=new w0,fi=new WeakSet;let we;I0(()=>{var t,e,i,a;if(!((e=(t=globalThis.chrome)==null?void 0:t.cast)!=null&&e.isAvailable)){console.debug("chrome.cast.isAvailable",(a=(i=globalThis.chrome)==null?void 0:i.cast)==null?void 0:a.isAvailable);return}we||(we=cast.framework,Mi().addEventListener(we.CastContextEventType.CAST_STATE_CHANGED,r=>{ms.forEach(n=>{var s,o;return(o=(s=la.get(n)).onCastStateChanged)==null?void 0:o.call(s,r)})}),Mi().addEventListener(we.CastContextEventType.SESSION_STATE_CHANGED,r=>{ms.forEach(n=>{var s,o;return(o=(s=la.get(n)).onSessionStateChanged)==null?void 0:o.call(s,r)})}),ms.forEach(r=>{var n,s;return(s=(n=la.get(r)).init)==null?void 0:s.call(n)}))});let hh=0;var Z,xn,tt,li,sa,oa,Di,qo,ne,Fi,bp,gp,Xl,yp,Jl,Tp,ed;class $0 extends EventTarget{constructor(i){super();Fe(this,ne);Fe(this,Z);Fe(this,xn);Fe(this,tt);Fe(this,li);Fe(this,sa,"disconnected");Fe(this,oa,!1);Fe(this,Di,new Set);Fe(this,qo,new WeakMap);ot(this,Z,i),ms.add(this),la.set(this,{init:()=>lt(this,ne,Jl).call(this),onCastStateChanged:()=>lt(this,ne,Xl).call(this),onSessionStateChanged:()=>lt(this,ne,yp).call(this),getCastPlayer:()=>k(this,ne,Fi)}),lt(this,ne,Jl).call(this)}get state(){return k(this,sa)}async watchAvailability(i){if(k(this,Z).disableRemotePlayback)throw new kl("disableRemotePlayback attribute is present.");return k(this,qo).set(i,++hh),k(this,Di).add(i),queueMicrotask(()=>i(lt(this,ne,gp).call(this))),hh}async cancelWatchAvailability(i){if(k(this,Z).disableRemotePlayback)throw new kl("disableRemotePlayback attribute is present.");i?k(this,Di).delete(i):k(this,Di).clear()}async prompt(){var a,r,n,s;if(k(this,Z).disableRemotePlayback)throw new kl("disableRemotePlayback attribute is present.");if(!((r=(a=globalThis.chrome)==null?void 0:a.cast)!=null&&r.isAvailable))throw new k0("The RemotePlayback API is disabled on this platform.");const i=fi.has(k(this,Z));fi.add(k(this,Z)),ch(k(this,Z).castOptions),Object.entries(k(this,li)).forEach(([o,l])=>{k(this,tt).controller.addEventListener(o,l)});try{await Mi().requestSession()}catch(o){if(i||fi.delete(k(this,Z)),o==="cancel")return;throw new Error(o)}(s=(n=la.get(k(this,Z)))==null?void 0:n.loadOnPrompt)==null||s.call(n)}}Z=new WeakMap,xn=new WeakMap,tt=new WeakMap,li=new WeakMap,sa=new WeakMap,oa=new WeakMap,Di=new WeakMap,qo=new WeakMap,ne=new WeakSet,Fi=function(){if(fi.has(k(this,Z)))return k(this,tt)},bp=function(){fi.has(k(this,Z))&&(Object.entries(k(this,li)).forEach(([i,a])=>{k(this,tt).controller.removeEventListener(i,a)}),fi.delete(k(this,Z)),k(this,Z).muted=k(this,tt).isMuted,k(this,Z).currentTime=k(this,tt).savedPlayerState.currentTime,k(this,tt).savedPlayerState.isPaused===!1&&k(this,Z).play())},gp=function(){var a;const i=(a=Mi())==null?void 0:a.getCastState();return i&&i!=="NO_DEVICES_AVAILABLE"},Xl=function(){const i=Mi().getCastState();if(fi.has(k(this,Z))&&i==="CONNECTING"&&(ot(this,sa,"connecting"),this.dispatchEvent(new Event("connecting"))),!k(this,oa)&&(i!=null&&i.includes("CONNECT"))){ot(this,oa,!0);for(let a of k(this,Di))a(!0)}else if(k(this,oa)&&(!i||i==="NO_DEVICES_AVAILABLE")){ot(this,oa,!1);for(let a of k(this,Di))a(!1)}},yp=async function(){var a;const{SESSION_RESUMED:i}=we.SessionState;if(Mi().getSessionState()===i&&k(this,Z).castSrc===((a=Tu())==null?void 0:a.media.contentId)){fi.add(k(this,Z)),Object.entries(k(this,li)).forEach(([r,n])=>{k(this,tt).controller.addEventListener(r,n)});try{await D0(new chrome.cast.media.GetStatusRequest)}catch(r){console.error(r)}k(this,li)[we.RemotePlayerEventType.IS_PAUSED_CHANGED](),k(this,li)[we.RemotePlayerEventType.PLAYER_STATE_CHANGED]()}},Jl=function(){!we||k(this,xn)||(ot(this,xn,!0),ch(k(this,Z).castOptions),k(this,Z).textTracks.addEventListener("change",()=>lt(this,ne,ed).call(this)),lt(this,ne,Xl).call(this),ot(this,tt,new we.RemotePlayer),new we.RemotePlayerController(k(this,tt)),ot(this,li,{[we.RemotePlayerEventType.IS_CONNECTED_CHANGED]:({value:i})=>{i===!0?(ot(this,sa,"connected"),this.dispatchEvent(new Event("connect"))):(lt(this,ne,bp).call(this),ot(this,sa,"disconnected"),this.dispatchEvent(new Event("disconnect")))},[we.RemotePlayerEventType.DURATION_CHANGED]:()=>{k(this,Z).dispatchEvent(new Event("durationchange"))},[we.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]:()=>{k(this,Z).dispatchEvent(new Event("volumechange"))},[we.RemotePlayerEventType.IS_MUTED_CHANGED]:()=>{k(this,Z).dispatchEvent(new Event("volumechange"))},[we.RemotePlayerEventType.CURRENT_TIME_CHANGED]:()=>{var i;(i=k(this,ne,Fi))!=null&&i.isMediaLoaded&&k(this,Z).dispatchEvent(new Event("timeupdate"))},[we.RemotePlayerEventType.VIDEO_INFO_CHANGED]:()=>{k(this,Z).dispatchEvent(new Event("resize"))},[we.RemotePlayerEventType.IS_PAUSED_CHANGED]:()=>{k(this,Z).dispatchEvent(new Event(this.paused?"pause":"play"))},[we.RemotePlayerEventType.PLAYER_STATE_CHANGED]:()=>{var i,a;((i=k(this,ne,Fi))==null?void 0:i.playerState)!==chrome.cast.media.PlayerState.PAUSED&&k(this,Z).dispatchEvent(new Event({[chrome.cast.media.PlayerState.PLAYING]:"playing",[chrome.cast.media.PlayerState.BUFFERING]:"waiting",[chrome.cast.media.PlayerState.IDLE]:"emptied"}[(a=k(this,ne,Fi))==null?void 0:a.playerState]))},[we.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]:async()=>{var i;(i=k(this,ne,Fi))!=null&&i.isMediaLoaded&&(await Promise.resolve(),lt(this,ne,Tp).call(this))}}))},Tp=function(){lt(this,ne,ed).call(this)},ed=async function(){var h,d,v;if(!k(this,ne,Fi))return;const a=(((h=k(this,tt).mediaInfo)==null?void 0:h.tracks)??[]).filter(({type:f})=>f===chrome.cast.media.TrackType.TEXT),r=[...k(this,Z).textTracks].filter(({kind:f})=>f==="subtitles"||f==="captions"),n=a.map(({language:f,name:g,trackId:_})=>{const{mode:T}=r.find(b=>b.language===f&&b.label===g)??{};return T?{mode:T,trackId:_}:!1}).filter(Boolean),o=n.filter(({mode:f})=>f!=="showing").map(({trackId:f})=>f),l=n.find(({mode:f})=>f==="showing"),u=((v=(d=yu())==null?void 0:d.getSessionObj().media[0])==null?void 0:v.activeTrackIds)??[];let p=u;if(u.length&&(p=p.filter(f=>!o.includes(f))),l!=null&&l.trackId&&(p=[...p,l.trackId]),p=[...new Set(p)],!((f,g)=>f.length===g.length&&f.every(_=>g.includes(_)))(u,p))try{const f=new chrome.cast.media.EditTracksInfoRequest(p);await L0(f)}catch(f){console.error(f)}};const U0=t=>{var e,i,a,r,n,s,Y,Ap;return e=class extends t{constructor(){super(...arguments);Fe(this,s);Fe(this,i,{paused:!1});Fe(this,a,_p());Fe(this,r);Fe(this,n)}get remote(){return k(this,n)?k(this,n):R0()?(this.disableRemotePlayback||C0(),la.set(this,{loadOnPrompt:()=>lt(this,s,Ap).call(this)}),ot(this,n,new $0(this))):super.remote}attributeChangedCallback(m,h,d){if(super.attributeChangedCallback(m,h,d),m==="cast-receiver"&&d){k(this,a).receiverApplicationId=d;return}if(k(this,s,Y))switch(m){case"cast-stream-type":case"cast-src":this.load();break}}async load(){var g;if(!k(this,s,Y))return super.load();const m=new chrome.cast.media.MediaInfo(this.castSrc,this.castContentType);m.customData=this.castCustomData;const h=[...this.querySelectorAll("track")].filter(({kind:_,src:T})=>T&&(_==="subtitles"||_==="captions")),d=[];let v=0;if(h.length&&(m.tracks=h.map(_=>{const T=++v;d.length===0&&_.track.mode==="showing"&&d.push(T);const b=new chrome.cast.media.Track(T,chrome.cast.media.TrackType.TEXT);return b.trackContentId=_.src,b.trackContentType="text/vtt",b.subtype=_.kind==="captions"?chrome.cast.media.TextTrackType.CAPTIONS:chrome.cast.media.TextTrackType.SUBTITLES,b.name=_.label,b.language=_.srclang,b})),this.castStreamType==="live"?m.streamType=chrome.cast.media.StreamType.LIVE:m.streamType=chrome.cast.media.StreamType.BUFFERED,m.metadata=new chrome.cast.media.GenericMediaMetadata,m.metadata.title=this.title,m.metadata.images=[{url:this.poster}],N0(this.castSrc)){const _=await P0(this.castSrc);(_==null?void 0:_.includes("m4s"))||(_==null?void 0:_.includes("mp4"))?(m.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.FMP4,m.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.FMP4):_!=null&&_.includes("ts")&&(m.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.TS,m.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.TS)}const f=new chrome.cast.media.LoadRequest(m);f.currentTime=super.currentTime??0,f.autoplay=!k(this,i).paused,f.activeTrackIds=d,await((g=yu())==null?void 0:g.loadMedia(f)),this.dispatchEvent(new Event("volumechange"))}play(){var m;if(k(this,s,Y)){k(this,s,Y).isPaused&&((m=k(this,s,Y).controller)==null||m.playOrPause());return}return super.play()}pause(){var m;if(k(this,s,Y)){k(this,s,Y).isPaused||(m=k(this,s,Y).controller)==null||m.playOrPause();return}super.pause()}get castOptions(){return k(this,a)}get castReceiver(){return this.getAttribute("cast-receiver")??void 0}set castReceiver(m){this.castReceiver!=m&&this.setAttribute("cast-receiver",`${m}`)}get castSrc(){var m;return this.getAttribute("cast-src")??((m=this.querySelector("source"))==null?void 0:m.src)??this.currentSrc}set castSrc(m){this.castSrc!=m&&this.setAttribute("cast-src",`${m}`)}get castContentType(){return this.getAttribute("cast-content-type")??void 0}set castContentType(m){this.setAttribute("cast-content-type",`${m}`)}get castStreamType(){return this.getAttribute("cast-stream-type")??this.streamType??void 0}set castStreamType(m){this.setAttribute("cast-stream-type",`${m}`)}get castCustomData(){return k(this,r)}set castCustomData(m){const h=typeof m;if(!["object","undefined"].includes(h)){console.error(`castCustomData must be nullish or an object but value was of type ${h}`);return}ot(this,r,m)}get readyState(){if(k(this,s,Y))switch(k(this,s,Y).playerState){case chrome.cast.media.PlayerState.IDLE:return 0;case chrome.cast.media.PlayerState.BUFFERING:return 2;default:return 3}return super.readyState}get paused(){return k(this,s,Y)?k(this,s,Y).isPaused:super.paused}get muted(){var m;return k(this,s,Y)?(m=k(this,s,Y))==null?void 0:m.isMuted:super.muted}set muted(m){var h;if(k(this,s,Y)){(m&&!k(this,s,Y).isMuted||!m&&k(this,s,Y).isMuted)&&((h=k(this,s,Y).controller)==null||h.muteOrUnmute());return}super.muted=m}get volume(){var m;return k(this,s,Y)?((m=k(this,s,Y))==null?void 0:m.volumeLevel)??1:super.volume}set volume(m){var h;if(k(this,s,Y)){k(this,s,Y).volumeLevel=+m,(h=k(this,s,Y).controller)==null||h.setVolumeLevel();return}super.volume=m}get duration(){var m,h;return k(this,s,Y)&&((m=k(this,s,Y))!=null&&m.isMediaLoaded)?((h=k(this,s,Y))==null?void 0:h.duration)??NaN:super.duration}get currentTime(){var m,h;return k(this,s,Y)&&((m=k(this,s,Y))!=null&&m.isMediaLoaded)?((h=k(this,s,Y))==null?void 0:h.currentTime)??0:super.currentTime}set currentTime(m){var h;if(k(this,s,Y)){k(this,s,Y).currentTime=m,(h=k(this,s,Y).controller)==null||h.seek();return}super.currentTime=m}},i=new WeakMap,a=new WeakMap,r=new WeakMap,n=new WeakMap,s=new WeakSet,Y=function(){var m,h;return(h=(m=la.get(this.remote))==null?void 0:m.getCastPlayer)==null?void 0:h.call(m)},Ap=async function(){k(this,i).paused=$n(e.prototype,this,"paused"),$n(e.prototype,this,"pause").call(this),this.muted=$n(e.prototype,this,"muted");try{await this.load()}catch(m){console.error(m)}},qc(e,"observedAttributes",[...t.observedAttributes??[],"cast-src","cast-content-type","cast-stream-type","cast-receiver"]),e};var kp=t=>{throw TypeError(t)},Sp=(t,e,i)=>e.has(t)||kp("Cannot "+i),wp=(t,e,i)=>(Sp(t,e,"read from private field"),i?i.call(t):e.get(t)),Ip=(t,e,i)=>e.has(t)?kp("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),Rp=(t,e,i,a)=>(Sp(t,e,"write to private field"),e.set(t,i),i),Zo=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if(typeof DocumentFragment>"u"){class t extends Zo{}globalThis.DocumentFragment=t}var Au=class extends Zo{},H0=class extends Zo{},B0={get(t){},define(t,e,i){},getName(t){return null},upgrade(t){},whenDefined(t){return Promise.resolve(Au)}},ps,W0=class{constructor(e,i={}){Ip(this,ps),Rp(this,ps,i==null?void 0:i.detail)}get detail(){return wp(this,ps)}initCustomEvent(){}};ps=new WeakMap;function F0(t,e){return new Au}var K0={document:{createElement:F0},DocumentFragment,customElements:B0,CustomEvent:W0,EventTarget:Zo,HTMLElement:Au,HTMLVideoElement:H0},V0=typeof window>"u"||typeof globalThis.customElements>"u",Sl=V0?K0:globalThis,vs,mh=class extends U0(jf(A0)){constructor(){super(...arguments),Ip(this,vs)}get autoplay(){let t=this.getAttribute("autoplay");return t===null?!1:t===""?!0:t}set autoplay(t){let e=this.autoplay;t!==e&&(t?this.setAttribute("autoplay",typeof t=="string"?t:""):this.removeAttribute("autoplay"))}get muxCastCustomData(){return{mux:{playbackId:this.playbackId,minResolution:this.minResolution,maxResolution:this.maxResolution,renditionOrder:this.renditionOrder,customDomain:this.customDomain,tokens:{drm:this.drmToken},envKey:this.envKey,metadata:this.metadata,disableCookies:this.disableCookies,disableTracking:this.disableTracking,beaconCollectionDomain:this.beaconCollectionDomain,startTime:this.startTime,preferCmcd:this.preferCmcd}}}get castCustomData(){var t;return(t=wp(this,vs))!=null?t:this.muxCastCustomData}set castCustomData(t){Rp(this,vs,t)}};vs=new WeakMap;Sl.customElements.get("mux-video")||(Sl.customElements.define("mux-video",mh),Sl.MuxVideoElement=mh);const R={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_LOOP_REQUEST:"medialooprequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},Q={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},Cp={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_LOOP:"mediaLoop",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},Lp=Object.entries(Cp),c=Lp.reduce((t,[e,i])=>(t[e]=i.toLowerCase(),t),{}),q0={USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"},mi=Lp.reduce((t,[e,i])=>(t[e]=i.toLowerCase(),t),{...q0});Object.entries(mi).reduce((t,[e,i])=>{const a=c[e];return a&&(t[i]=a),t},{userinactivechange:"userinactive"});const Y0=Object.entries(c).reduce((t,[e,i])=>{const a=mi[e];return a&&(t[i]=a),t},{userinactive:"userinactivechange"}),Jt={SUBTITLES:"subtitles",CAPTIONS:"captions",DESCRIPTIONS:"descriptions",CHAPTERS:"chapters",METADATA:"metadata"},ir={DISABLED:"disabled",HIDDEN:"hidden",SHOWING:"showing"},wl={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},je={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},si={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},G0={INLINE:"inline",FULLSCREEN:"fullscreen",PICTURE_IN_PICTURE:"picture-in-picture"};function Q0(t){return t==null?void 0:t.map(Z0).join(" ")}function z0(t){return t==null?void 0:t.split(/\s+/).map(j0)}function Z0(t){if(t){const{id:e,width:i,height:a}=t;return[e,i,a].filter(r=>r!=null).join(":")}}function j0(t){if(t){const[e,i,a]=t.split(":");return{id:e,width:+i,height:+a}}}function X0(t){return t==null?void 0:t.map(eg).join(" ")}function J0(t){return t==null?void 0:t.split(/\s+/).map(tg)}function eg(t){if(t){const{id:e,kind:i,language:a,label:r}=t;return[e,i,a,r].filter(n=>n!=null).join(":")}}function tg(t){if(t){const[e,i,a,r]=t.split(":");return{id:e,kind:i,language:a,label:r}}}function ig(t){return t.replace(/[-_]([a-z])/g,(e,i)=>i.toUpperCase())}function ku(t){return typeof t=="number"&&!Number.isNaN(t)&&Number.isFinite(t)}function Dp(t){return typeof t!="string"?!1:!isNaN(t)&&!isNaN(parseFloat(t))}const Mp=t=>new Promise(e=>setTimeout(e,t)),ph=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],ag=(t,e)=>{const i=t===1?ph[e].singular:ph[e].plural;return`${t} ${i}`},ln=t=>{if(!ku(t))return"";const e=Math.abs(t),i=e!==t,a=new Date(0,0,0,0,0,e,0);return`${[a.getHours(),a.getMinutes(),a.getSeconds()].map((o,l)=>o&&ag(o,l)).filter(o=>o).join(", ")}${i?" remaining":""}`};function Oi(t,e){let i=!1;t<0&&(i=!0,t=0-t),t=t<0?0:t;let a=Math.floor(t%60),r=Math.floor(t/60%60),n=Math.floor(t/3600);const s=Math.floor(e/60%60),o=Math.floor(e/3600);return(isNaN(t)||t===1/0)&&(n=r=a="0"),n=n>0||o>0?n+":":"",r=((n||s>=10)&&r<10?"0"+r:r)+":",a=a<10?"0"+a:a,(i?"-":"")+n+r+a}const rg={"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute",Loop:"Loop","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it."};var vh;const Il={en:rg};let td=((vh=globalThis.navigator)==null?void 0:vh.language)||"en";const ng=t=>{td=t},sg=t=>{var e,i,a;const[r]=td.split("-");return((e=Il[td])==null?void 0:e[t])||((i=Il[r])==null?void 0:i[t])||((a=Il.en)==null?void 0:a[t])||t},D=(t,e={})=>sg(t).replace(/\{(\w+)\}/g,(i,a)=>a in e?String(e[a]):`{${a}}`);let xp=class{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}};class Op extends xp{}let fh=class extends Op{constructor(){super(...arguments),this.role=null}};class og{observe(){}unobserve(){}disconnect(){}}const Np={createElement:function(){return new bn.HTMLElement},createElementNS:function(){return new bn.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent(t){return!1}},bn={ResizeObserver:og,document:Np,Node:Op,Element:fh,HTMLElement:class extends fh{constructor(){super(...arguments),this.innerHTML=""}get content(){return new bn.DocumentFragment}},DocumentFragment:class extends xp{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem(t){return null},setItem(t,e){},removeItem(t){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia(t){return{matches:!1,media:t}},DOMParser:class{parseFromString(e,i){return{body:{textContent:e}}}}},Pp="global"in globalThis&&(globalThis==null?void 0:globalThis.global)===globalThis||typeof window>"u"||typeof window.customElements>"u",$p=Object.keys(bn).every(t=>t in globalThis),E=Pp&&!$p?bn:globalThis,ke=Pp&&!$p?Np:globalThis.document,Eh=new WeakMap,Su=t=>{let e=Eh.get(t);return e||Eh.set(t,e=new Set),e},Up=new E.ResizeObserver(t=>{for(const e of t)for(const i of Su(e.target))i(e)});function cr(t,e){Su(t).add(e),Up.observe(t)}function hr(t,e){const i=Su(t);i.delete(e),i.size||Up.unobserve(t)}function nt(t){const e={};for(const i of t)e[i.name]=i.value;return e}function qe(t){var e;return(e=id(t))!=null?e:Er(t,"media-controller")}function id(t){var e;const{MEDIA_CONTROLLER:i}=Q,a=t.getAttribute(i);if(a)return(e=jo(t))==null?void 0:e.getElementById(a)}const Hp=(t,e,i=".value")=>{const a=t.querySelector(i);a&&(a.textContent=e)},lg=(t,e)=>{const i=`slot[name="${e}"]`,a=t.shadowRoot.querySelector(i);return a?a.children:[]},Bp=(t,e)=>lg(t,e)[0],vi=(t,e)=>!t||!e?!1:t!=null&&t.contains(e)?!0:vi(t,e.getRootNode().host),Er=(t,e)=>{if(!t)return null;const i=t.closest(e);return i||Er(t.getRootNode().host,e)};function wu(t=document){var e;const i=t==null?void 0:t.activeElement;return i?(e=wu(i.shadowRoot))!=null?e:i:null}function jo(t){var e;const i=(e=t==null?void 0:t.getRootNode)==null?void 0:e.call(t);return i instanceof ShadowRoot||i instanceof Document?i:null}function Wp(t,{depth:e=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(t.checkVisibility)return t.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=t;for(;r&&e>0;){const n=getComputedStyle(r);if(i&&n.opacity==="0"||a&&n.visibility==="hidden"||n.display==="none")return!1;r=r.parentElement,e--}return!0}function dg(t,e,i,a){const r=a.x-i.x,n=a.y-i.y,s=r*r+n*n;if(s===0)return 0;const o=((t-i.x)*r+(e-i.y)*n)/s;return Math.max(0,Math.min(1,o))}function Ie(t,e){const i=ug(t,a=>a===e);return i||Iu(t,e)}function ug(t,e){var i,a;let r;for(r of(i=t.querySelectorAll("style:not([media])"))!=null?i:[]){let n;try{n=(a=r.sheet)==null?void 0:a.cssRules}catch{continue}for(const s of n??[])if(e(s.selectorText))return s}}function Iu(t,e){var i,a;const r=(i=t.querySelectorAll("style:not([media])"))!=null?i:[],n=r==null?void 0:r[r.length-1];return n!=null&&n.sheet?(n==null||n.sheet.insertRule(`${e}{}`,n.sheet.cssRules.length),(a=n.sheet.cssRules)==null?void 0:a[n.sheet.cssRules.length-1]):(console.warn("Media Chrome: No style sheet found on style tag of",t),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}})}function se(t,e,i=Number.NaN){const a=t.getAttribute(e);return a!=null?+a:i}function pe(t,e,i){const a=+i;if(i==null||Number.isNaN(a)){t.hasAttribute(e)&&t.removeAttribute(e);return}se(t,e,void 0)!==a&&t.setAttribute(e,`${a}`)}function F(t,e){return t.hasAttribute(e)}function K(t,e,i){if(i==null){t.hasAttribute(e)&&t.removeAttribute(e);return}F(t,e)!=i&&t.toggleAttribute(e,i)}function oe(t,e,i=null){var a;return(a=t.getAttribute(e))!=null?a:i}function le(t,e,i){if(i==null){t.hasAttribute(e)&&t.removeAttribute(e);return}const a=`${i}`;oe(t,e,void 0)!==a&&t.setAttribute(e,a)}var Fp=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Ei=(t,e,i)=>(Fp(t,e,"read from private field"),i?i.call(t):e.get(t)),cg=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Wn=(t,e,i,a)=>(Fp(t,e,"write to private field"),e.set(t,i),i),Ke;function hg(t){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `}class Xo extends E.HTMLElement{constructor(){if(super(),cg(this,Ke,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=nt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[Q.MEDIA_CONTROLLER,c.MEDIA_PAUSED]}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===Q.MEDIA_CONTROLLER&&(i&&((n=(r=Ei(this,Ke))==null?void 0:r.unassociateElement)==null||n.call(r,this),Wn(this,Ke,null)),a&&this.isConnected&&(Wn(this,Ke,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=Ei(this,Ke))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var e,i,a,r;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),Wn(this,Ke,mg(this)),this.getAttribute(Q.MEDIA_CONTROLLER)&&((i=(e=Ei(this,Ke))==null?void 0:e.associateElement)==null||i.call(e,this)),(a=Ei(this,Ke))==null||a.addEventListener("pointerdown",this),(r=Ei(this,Ke))==null||r.addEventListener("click",this)}disconnectedCallback(){var e,i,a,r;this.getAttribute(Q.MEDIA_CONTROLLER)&&((i=(e=Ei(this,Ke))==null?void 0:e.unassociateElement)==null||i.call(e,this)),(a=Ei(this,Ke))==null||a.removeEventListener("pointerdown",this),(r=Ei(this,Ke))==null||r.removeEventListener("click",this),Wn(this,Ke,null)}handleEvent(e){var i;const a=(i=e.composedPath())==null?void 0:i[0];if(["video","media-controller"].includes(a==null?void 0:a.localName)){if(e.type==="pointerdown")this._pointerType=e.pointerType;else if(e.type==="click"){const{clientX:n,clientY:s}=e,{left:o,top:l,width:u,height:p}=this.getBoundingClientRect(),m=n-o,h=s-l;if(m<0||h<0||m>u||h>p||u===0&&p===0)return;const d=this._pointerType||"mouse";if(this._pointerType=void 0,d===wl.TOUCH){this.handleTap(e);return}else if(d===wl.MOUSE||d===wl.PEN){this.handleMouseClick(e);return}}}}get mediaPaused(){return F(this,c.MEDIA_PAUSED)}set mediaPaused(e){K(this,c.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){const i=this.mediaPaused?R.MEDIA_PLAY_REQUEST:R.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new E.CustomEvent(i,{composed:!0,bubbles:!0}))}}Ke=new WeakMap;Xo.shadowRootOptions={mode:"open"};Xo.getTemplateHTML=hg;function mg(t){var e;const i=t.getAttribute(Q.MEDIA_CONTROLLER);return i?(e=t.getRootNode())==null?void 0:e.getElementById(i):Er(t,"media-controller")}E.customElements.get("media-gesture-receiver")||E.customElements.define("media-gesture-receiver",Xo);var _h=Xo,Ru=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},it=(t,e,i)=>(Ru(t,e,"read from private field"),i?i.call(t):e.get(t)),Xe=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ki=(t,e,i,a)=>(Ru(t,e,"write to private field"),e.set(t,i),i),vt=(t,e,i)=>(Ru(t,e,"access private method"),i),yo,Ca,gn,Za,fs,ad,Kp,Fr,Es,rd,Vp,nd,qp,yn,Jo,el,Cu,mr,Tn;const x={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive",AUTOHIDE_OVER_CONTROLS:"autohideovercontrols"};function pg(t){return`
    <style>
      
      :host([${c.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
        overflow: hidden;
      }

      :host(:not([${x.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${x.AUDIO}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${x.AUDIO}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${x.AUDIO}])[${x.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${x.AUDIO}])[${x.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${x.AUDIO}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${x.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${x.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${x.AUDIO}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${x.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${x.USER_INACTIVE}]:not([${c.MEDIA_PAUSED}]):not([${c.MEDIA_IS_AIRPLAYING}]):not([${c.MEDIA_IS_CASTING}]):not([${x.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${x.NO_AUTOHIDE}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${x.USER_INACTIVE}]:not([${x.NO_AUTOHIDE}]):not([${c.MEDIA_PAUSED}]):not([${c.MEDIA_IS_CASTING}]):not([${x.AUDIO}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${x.USER_INACTIVE}][${x.AUTOHIDE_OVER_CONTROLS}]:not([${x.NO_AUTOHIDE}]):not([${c.MEDIA_PAUSED}]):not([${c.MEDIA_IS_CASTING}]):not([${x.AUDIO}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${x.AUDIO}])[${c.MEDIA_HAS_PLAYED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${_h.shadowRootOptions.mode}">
          ${_h.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `}const vg=Object.values(c),fg="sm:384 md:576 lg:768 xl:960";function Eg(t){Yp(t.target,t.contentRect.width)}function Yp(t,e){var i;if(!t.isConnected)return;const a=(i=t.getAttribute(x.BREAKPOINTS))!=null?i:fg,r=_g(a),n=bg(r,e);let s=!1;if(Object.keys(r).forEach(o=>{if(n.includes(o)){t.hasAttribute(`breakpoint${o}`)||(t.setAttribute(`breakpoint${o}`,""),s=!0);return}t.hasAttribute(`breakpoint${o}`)&&(t.removeAttribute(`breakpoint${o}`),s=!0)}),s){const o=new CustomEvent(mi.BREAKPOINTS_CHANGE,{detail:n});t.dispatchEvent(o)}t.breakpointsComputed||(t.breakpointsComputed=!0,t.dispatchEvent(new CustomEvent(mi.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}function _g(t){const e=t.split(/\s+/);return Object.fromEntries(e.map(i=>i.split(":")))}function bg(t,e){return Object.keys(t).filter(i=>e>=parseInt(t[i]))}class tl extends E.HTMLElement{constructor(){if(super(),Xe(this,ad),Xe(this,rd),Xe(this,nd),Xe(this,yn),Xe(this,el),Xe(this,mr),Xe(this,yo,0),Xe(this,Ca,null),Xe(this,gn,null),Xe(this,Za,void 0),this.breakpointsComputed=!1,Xe(this,fs,new MutationObserver(vt(this,ad,Kp).bind(this))),Xe(this,Fr,!1),Xe(this,Es,i=>{it(this,Fr)||(setTimeout(()=>{Eg(i),Ki(this,Fr,!1)},0),Ki(this,Fr,!0))}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const i=nt(this.attributes),a=this.constructor.getTemplateHTML(i);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(a):this.shadowRoot.innerHTML=a}const e=this.querySelector(":scope > slot[slot=media]");e&&e.addEventListener("slotchange",()=>{if(!e.assignedElements({flatten:!0}).length){it(this,Ca)&&this.mediaUnsetCallback(it(this,Ca));return}this.handleMediaUpdated(this.media)})}static get observedAttributes(){return[x.AUTOHIDE,x.GESTURES_DISABLED].concat(vg).filter(e=>![c.MEDIA_RENDITION_LIST,c.MEDIA_AUDIO_TRACK_LIST,c.MEDIA_CHAPTERS_CUES,c.MEDIA_WIDTH,c.MEDIA_HEIGHT,c.MEDIA_ERROR,c.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,i,a){e.toLowerCase()==x.AUTOHIDE&&(this.autohide=a)}get media(){let e=this.querySelector(":scope > [slot=media]");return(e==null?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(Ki(this,Ca,e),e.localName.includes("-")&&await E.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;it(this,fs).observe(this,{childList:!0,subtree:!0}),cr(this,it(this,Es));const i=this.getAttribute(x.AUDIO)!=null,a=D(i?"audio player":"video player");this.setAttribute("role","region"),this.setAttribute("aria-label",a),this.handleMediaUpdated(this.media),this.setAttribute(x.USER_INACTIVE,""),Yp(this,this.getBoundingClientRect().width),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),(e=E.window)==null||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;it(this,fs).disconnect(),hr(this,it(this,Es)),this.media&&this.mediaUnsetCallback(this.media),(e=E.window)==null||e.removeEventListener("mouseup",this)}mediaSetCallback(e){}mediaUnsetCallback(e){Ki(this,Ca,null)}handleEvent(e){switch(e.type){case"pointerdown":Ki(this,yo,e.timeStamp);break;case"pointermove":vt(this,rd,Vp).call(this,e);break;case"pointerup":vt(this,nd,qp).call(this,e);break;case"mouseleave":vt(this,yn,Jo).call(this);break;case"mouseup":this.removeAttribute(x.KEYBOARD_CONTROL);break;case"keyup":vt(this,mr,Tn).call(this),this.setAttribute(x.KEYBOARD_CONTROL,"");break}}set autohide(e){const i=Number(e);Ki(this,Za,isNaN(i)?0:i)}get autohide(){return(it(this,Za)===void 0?2:it(this,Za)).toString()}get breakpoints(){return oe(this,x.BREAKPOINTS)}set breakpoints(e){le(this,x.BREAKPOINTS,e)}get audio(){return F(this,x.AUDIO)}set audio(e){K(this,x.AUDIO,e)}get gesturesDisabled(){return F(this,x.GESTURES_DISABLED)}set gesturesDisabled(e){K(this,x.GESTURES_DISABLED,e)}get keyboardControl(){return F(this,x.KEYBOARD_CONTROL)}set keyboardControl(e){K(this,x.KEYBOARD_CONTROL,e)}get noAutohide(){return F(this,x.NO_AUTOHIDE)}set noAutohide(e){K(this,x.NO_AUTOHIDE,e)}get autohideOverControls(){return F(this,x.AUTOHIDE_OVER_CONTROLS)}set autohideOverControls(e){K(this,x.AUTOHIDE_OVER_CONTROLS,e)}get userInteractive(){return F(this,x.USER_INACTIVE)}set userInteractive(e){K(this,x.USER_INACTIVE,e)}}yo=new WeakMap;Ca=new WeakMap;gn=new WeakMap;Za=new WeakMap;fs=new WeakMap;ad=new WeakSet;Kp=function(t){const e=this.media;for(const i of t){if(i.type!=="childList")continue;const a=i.removedNodes;for(const r of a){if(r.slot!="media"||i.target!=this)continue;let n=i.previousSibling&&i.previousSibling.previousElementSibling;if(!n||!e)this.mediaUnsetCallback(r);else{let s=n.slot!=="media";for(;(n=n.previousSibling)!==null;)n.slot=="media"&&(s=!1);s&&this.mediaUnsetCallback(r)}}if(e)for(const r of i.addedNodes)r===e&&this.handleMediaUpdated(e)}};Fr=new WeakMap;Es=new WeakMap;rd=new WeakSet;Vp=function(t){if(t.pointerType!=="mouse"&&t.timeStamp-it(this,yo)<250)return;vt(this,el,Cu).call(this),clearTimeout(it(this,gn));const e=this.hasAttribute(x.AUTOHIDE_OVER_CONTROLS);([this,this.media].includes(t.target)||e)&&vt(this,mr,Tn).call(this)};nd=new WeakSet;qp=function(t){if(t.pointerType==="touch"){const e=!this.hasAttribute(x.USER_INACTIVE);[this,this.media].includes(t.target)&&e?vt(this,yn,Jo).call(this):vt(this,mr,Tn).call(this)}else t.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(e==null?void 0:e.localName))&&vt(this,mr,Tn).call(this)};yn=new WeakSet;Jo=function(){if(it(this,Za)<0||this.hasAttribute(x.USER_INACTIVE))return;this.setAttribute(x.USER_INACTIVE,"");const t=new E.CustomEvent(mi.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(t)};el=new WeakSet;Cu=function(){if(!this.hasAttribute(x.USER_INACTIVE))return;this.removeAttribute(x.USER_INACTIVE);const t=new E.CustomEvent(mi.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(t)};mr=new WeakSet;Tn=function(){vt(this,el,Cu).call(this),clearTimeout(it(this,gn));const t=parseInt(this.autohide);t<0||Ki(this,gn,setTimeout(()=>{vt(this,yn,Jo).call(this)},t*1e3))};tl.shadowRootOptions={mode:"open"};tl.getTemplateHTML=pg;E.customElements.get("media-container")||E.customElements.define("media-container",tl);var Gp=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},De=(t,e,i)=>(Gp(t,e,"read from private field"),i?i.call(t):e.get(t)),Sr=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Fn=(t,e,i,a)=>(Gp(t,e,"write to private field"),e.set(t,i),i),La,Da,To,ta,ri,yi;class Lu{constructor(e,i,{defaultValue:a}={defaultValue:void 0}){Sr(this,ri),Sr(this,La,void 0),Sr(this,Da,void 0),Sr(this,To,void 0),Sr(this,ta,new Set),Fn(this,La,e),Fn(this,Da,i),Fn(this,To,new Set(a))}[Symbol.iterator](){return De(this,ri,yi).values()}get length(){return De(this,ri,yi).size}get value(){var e;return(e=[...De(this,ri,yi)].join(" "))!=null?e:""}set value(e){var i;e!==this.value&&(Fn(this,ta,new Set),this.add(...(i=e==null?void 0:e.split(" "))!=null?i:[]))}toString(){return this.value}item(e){return[...De(this,ri,yi)][e]}values(){return De(this,ri,yi).values()}forEach(e,i){De(this,ri,yi).forEach(e,i)}add(...e){var i,a;e.forEach(r=>De(this,ta).add(r)),!(this.value===""&&!((i=De(this,La))!=null&&i.hasAttribute(`${De(this,Da)}`)))&&((a=De(this,La))==null||a.setAttribute(`${De(this,Da)}`,`${this.value}`))}remove(...e){var i;e.forEach(a=>De(this,ta).delete(a)),(i=De(this,La))==null||i.setAttribute(`${De(this,Da)}`,`${this.value}`)}contains(e){return De(this,ri,yi).has(e)}toggle(e,i){return typeof i<"u"?i?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,i){return this.remove(e),this.add(i),e===i}}La=new WeakMap;Da=new WeakMap;To=new WeakMap;ta=new WeakMap;ri=new WeakSet;yi=function(){return De(this,ta).size?De(this,ta):De(this,To)};const gg=(t="")=>t.split(/\s+/),Qp=(t="")=>{const[e,i,a]=t.split(":"),r=a?decodeURIComponent(a):void 0;return{kind:e==="cc"?Jt.CAPTIONS:Jt.SUBTITLES,language:i,label:r}},il=(t="",e={})=>gg(t).map(i=>{const a=Qp(i);return{...e,...a}}),zp=t=>t?Array.isArray(t)?t.map(e=>typeof e=="string"?Qp(e):e):typeof t=="string"?il(t):[t]:[],sd=({kind:t,label:e,language:i}={kind:"subtitles"})=>e?`${t==="captions"?"cc":"sb"}:${i}:${encodeURIComponent(e)}`:i,An=(t=[])=>Array.prototype.map.call(t,sd).join(" "),yg=(t,e)=>i=>i[t]===e,Zp=t=>{const e=Object.entries(t).map(([i,a])=>yg(i,a));return i=>e.every(a=>a(i))},dn=(t,e=[],i=[])=>{const a=zp(i).map(Zp),r=n=>a.some(s=>s(n));Array.from(e).filter(r).forEach(n=>{n.mode=t})},al=(t,e=()=>!0)=>{if(!(t!=null&&t.textTracks))return[];const i=typeof e=="function"?e:Zp(e);return Array.from(t.textTracks).filter(i)},jp=t=>{var e;return!!((e=t.mediaSubtitlesShowing)!=null&&e.length)||t.hasAttribute(c.MEDIA_SUBTITLES_SHOWING)},Tg=t=>{var e;const{media:i,fullscreenElement:a}=t;try{const r=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(r){const n=(e=a[r])==null?void 0:e.call(a);if(n instanceof Promise)return n.catch(()=>{})}else i!=null&&i.webkitEnterFullscreen?i.webkitEnterFullscreen():i!=null&&i.requestFullscreen&&i.requestFullscreen()}catch(r){console.error(r)}},bh="exitFullscreen"in ke?"exitFullscreen":"webkitExitFullscreen"in ke?"webkitExitFullscreen":"webkitCancelFullScreen"in ke?"webkitCancelFullScreen":void 0,Ag=t=>{var e;const{documentElement:i}=t;if(bh){const a=(e=i==null?void 0:i[bh])==null?void 0:e.call(i);if(a instanceof Promise)return a.catch(()=>{})}},Kr="fullscreenElement"in ke?"fullscreenElement":"webkitFullscreenElement"in ke?"webkitFullscreenElement":void 0,kg=t=>{const{documentElement:e,media:i}=t,a=e==null?void 0:e[Kr];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===G0.FULLSCREEN?i:a},Sg=t=>{var e;const{media:i,documentElement:a,fullscreenElement:r=i}=t;if(!i||!a)return!1;const n=kg(t);if(!n)return!1;if(n===r||n===i)return!0;if(n.localName.includes("-")){let s=n.shadowRoot;if(!(Kr in s))return vi(n,r);for(;s!=null&&s[Kr];){if(s[Kr]===r)return!0;s=(e=s[Kr])==null?void 0:e.shadowRoot}}return!1},wg="fullscreenEnabled"in ke?"fullscreenEnabled":"webkitFullscreenEnabled"in ke?"webkitFullscreenEnabled":void 0,Ig=t=>{const{documentElement:e,media:i}=t;return!!(e!=null&&e[wg])||i&&"webkitSupportsFullscreen"in i};let Kn;const Du=()=>{var t,e;return Kn||(Kn=(e=(t=ke)==null?void 0:t.createElement)==null?void 0:e.call(t,"video"),Kn)},Rg=async(t=Du())=>{if(!t)return!1;const e=t.volume;t.volume=e/2+.1;const i=new AbortController,a=await Promise.race([Cg(t,i.signal),Lg(t,e)]);return i.abort(),a},Cg=(t,e)=>new Promise(i=>{t.addEventListener("volumechange",()=>i(!0),{signal:e})}),Lg=async(t,e)=>{for(let i=0;i<10;i++){if(t.volume===e)return!1;await Mp(10)}return t.volume!==e},Dg=/.*Version\/.*Safari\/.*/.test(E.navigator.userAgent),Xp=(t=Du())=>E.matchMedia("(display-mode: standalone)").matches&&Dg?!1:typeof(t==null?void 0:t.requestPictureInPicture)=="function",Jp=(t=Du())=>Ig({documentElement:ke,media:t}),Mg=Jp(),xg=Xp(),Og=!!E.WebKitPlaybackTargetAvailabilityEvent,Ng=!!E.chrome,Ao=t=>al(t.media,e=>[Jt.SUBTITLES,Jt.CAPTIONS].includes(e.kind)).sort((e,i)=>e.kind>=i.kind?1:-1),ev=t=>al(t.media,e=>e.mode===ir.SHOWING&&[Jt.SUBTITLES,Jt.CAPTIONS].includes(e.kind)),tv=(t,e)=>{const i=Ao(t),a=ev(t),r=!!a.length;if(i.length){if(e===!1||r&&e!==!0)dn(ir.DISABLED,i,a);else if(e===!0||!r&&e!==!1){let n=i[0];const{options:s}=t;if(!(s!=null&&s.noSubtitlesLangPref)){const p=globalThis.localStorage.getItem("media-chrome-pref-subtitles-lang"),m=p?[p,...globalThis.navigator.languages]:globalThis.navigator.languages,h=i.filter(d=>m.some(v=>d.language.toLowerCase().startsWith(v.split("-")[0]))).sort((d,v)=>{const f=m.findIndex(_=>d.language.toLowerCase().startsWith(_.split("-")[0])),g=m.findIndex(_=>v.language.toLowerCase().startsWith(_.split("-")[0]));return f-g});h[0]&&(n=h[0])}const{language:o,label:l,kind:u}=n;dn(ir.DISABLED,i,a),dn(ir.SHOWING,i,[{language:o,label:l,kind:u}])}}},Mu=(t,e)=>t===e?!0:t==null||e==null||typeof t!=typeof e?!1:typeof t=="number"&&Number.isNaN(t)&&Number.isNaN(e)?!0:typeof t!="object"?!1:Array.isArray(t)?Pg(t,e):Object.entries(t).every(([i,a])=>i in e&&Mu(a,e[i])),Pg=(t,e)=>{const i=Array.isArray(t),a=Array.isArray(e);return i!==a?!1:i||a?t.length!==e.length?!1:t.every((r,n)=>Mu(r,e[n])):!0},$g=Object.values(si);let ko;const Ug=Rg().then(t=>(ko=t,ko)),Hg=async(...t)=>{await Promise.all(t.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof E.HTMLElement))return;const i=e.localName;if(!i.includes("-"))return;const a=E.customElements.get(i);a&&e instanceof a||(await E.customElements.whenDefined(i),E.customElements.upgrade(e))}))},Bg=new E.DOMParser,Wg=t=>t&&(Bg.parseFromString(t,"text/html").body.textContent||t),Vr={mediaError:{get(t,e){const{media:i}=t;if((e==null?void 0:e.type)!=="playing")return i==null?void 0:i.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(t,e){var i;const{media:a}=t;if((e==null?void 0:e.type)!=="playing")return(i=a==null?void 0:a.error)==null?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(t,e){var i,a;const{media:r}=t;if((e==null?void 0:e.type)!=="playing")return(a=(i=r==null?void 0:r.error)==null?void 0:i.message)!=null?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.videoWidth)!=null?e:0},mediaEvents:["resize"]},mediaHeight:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.videoHeight)!=null?e:0},mediaEvents:["resize"]},mediaPaused:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.paused)!=null?e:!0},set(t,e){var i;const{media:a}=e;a&&(t?a.pause():(i=a.play())==null||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(t,e){const{media:i}=t;return i?e?e.type==="playing":!i.paused:!1},mediaEvents:["playing","emptied"]},mediaEnded:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.ended)!=null?e:!1},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.playbackRate)!=null?e:1},set(t,e){const{media:i}=e;i&&Number.isFinite(+t)&&(i.playbackRate=+t)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.muted)!=null?e:!1},set(t,e){const{media:i,options:{noMutedPref:a}={}}=e;if(i){i.muted=t;try{const r=E.localStorage.getItem("media-chrome-pref-muted")!==null,n=i.hasAttribute("muted");if(a){r&&E.localStorage.removeItem("media-chrome-pref-muted");return}if(n&&!r)return;E.localStorage.setItem("media-chrome-pref-muted",t?"true":"false")}catch(r){console.debug("Error setting muted pref",r)}}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(t,e)=>{const{options:{noMutedPref:i}}=e,{media:a}=e;if(!(!a||a.muted||i))try{const r=E.localStorage.getItem("media-chrome-pref-muted")==="true";Vr.mediaMuted.set(r,e),t(r)}catch(r){console.debug("Error getting muted pref",r)}}]},mediaLoop:{get(t){const{media:e}=t;return e==null?void 0:e.loop},set(t,e){const{media:i}=e;i&&(i.loop=t)},mediaEvents:["medialooprequest"]},mediaVolume:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.volume)!=null?e:1},set(t,e){const{media:i,options:{noVolumePref:a}={}}=e;if(i){try{t==null?E.localStorage.removeItem("media-chrome-pref-volume"):!i.hasAttribute("muted")&&!a&&E.localStorage.setItem("media-chrome-pref-volume",t.toString())}catch(r){console.debug("Error setting volume pref",r)}Number.isFinite(+t)&&(i.volume=+t)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(t,e)=>{const{options:{noVolumePref:i}}=e;if(!i)try{const{media:a}=e;if(!a)return;const r=E.localStorage.getItem("media-chrome-pref-volume");if(r==null)return;Vr.mediaVolume.set(+r,e),t(+r)}catch(a){console.debug("Error getting volume pref",a)}}]},mediaVolumeLevel:{get(t){const{media:e}=t;return typeof(e==null?void 0:e.volume)>"u"?"high":e.muted||e.volume===0?"off":e.volume<.5?"low":e.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.currentTime)!=null?e:0},set(t,e){const{media:i}=e;!i||!ku(t)||(i.currentTime=t)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(t){const{media:e,options:{defaultDuration:i}={}}=t;return i&&(!e||!e.duration||Number.isNaN(e.duration)||!Number.isFinite(e.duration))?i:Number.isFinite(e==null?void 0:e.duration)?e.duration:Number.NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(t){const{media:e}=t;return(e==null?void 0:e.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(t){var e;const{media:i}=t;if(!((e=i==null?void 0:i.seekable)!=null&&e.length))return;const a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(!(!a&&!r))return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(t){var e;const{media:i}=t,a=(e=i==null?void 0:i.buffered)!=null?e:[];return Array.from(a).map((r,n)=>[Number(a.start(n).toFixed(3)),Number(a.end(n).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(t){const{media:e,options:{defaultStreamType:i}={}}=t,a=[si.LIVE,si.ON_DEMAND].includes(i)?i:void 0;if(!e)return a;const{streamType:r}=e;if($g.includes(r))return r===si.UNKNOWN?a:r;const n=e.duration;return n===1/0?si.LIVE:Number.isFinite(n)?si.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(t){const{media:e}=t;if(!e)return Number.NaN;const{targetLiveWindow:i}=e,a=Vr.mediaStreamType.get(t);return(i==null||Number.isNaN(i))&&a===si.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(t){const{media:e,options:{liveEdgeOffset:i=10}={}}=t;if(!e)return!1;if(typeof e.liveEdgeStart=="number")return Number.isNaN(e.liveEdgeStart)?!1:e.currentTime>=e.liveEdgeStart;if(!(Vr.mediaStreamType.get(t)===si.LIVE))return!1;const r=e.seekable;if(!r)return!0;if(!r.length)return!1;const n=r.end(r.length-1)-i;return e.currentTime>=n},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get(t){return Ao(t).map(({kind:e,label:i,language:a})=>({kind:e,label:i,language:a}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get(t){return ev(t).map(({kind:e,label:i,language:a})=>({kind:e,label:i,language:a}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(t,e)=>{var i,a;const{media:r,options:n}=e;if(!r)return;const s=o=>{var l;!n.defaultSubtitles||o&&![Jt.CAPTIONS,Jt.SUBTITLES].includes((l=o==null?void 0:o.track)==null?void 0:l.kind)||tv(e,!0)};return r.addEventListener("loadstart",s),(i=r.textTracks)==null||i.addEventListener("addtrack",s),(a=r.textTracks)==null||a.addEventListener("removetrack",s),()=>{var o,l;r.removeEventListener("loadstart",s),(o=r.textTracks)==null||o.removeEventListener("addtrack",s),(l=r.textTracks)==null||l.removeEventListener("removetrack",s)}}]},mediaChaptersCues:{get(t){var e;const{media:i}=t;if(!i)return[];const[a]=al(i,{kind:Jt.CHAPTERS});return Array.from((e=a==null?void 0:a.cues)!=null?e:[]).map(({text:r,startTime:n,endTime:s})=>({text:Wg(r),startTime:n,endTime:s}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(t,e)=>{var i;const{media:a}=e;if(!a)return;const r=a.querySelector('track[kind="chapters"][default][src]'),n=(i=a.shadowRoot)==null?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return r==null||r.addEventListener("load",t),n==null||n.addEventListener("load",t),()=>{r==null||r.removeEventListener("load",t),n==null||n.removeEventListener("load",t)}}]},mediaIsPip:{get(t){var e,i;const{media:a,documentElement:r}=t;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return(e=a.localName)!=null&&e.includes("-")?vi(a,r.pictureInPictureElement):!1;if(r.pictureInPictureElement.localName.includes("-")){let n=r.pictureInPictureElement.shadowRoot;for(;n!=null&&n.pictureInPictureElement;){if(n.pictureInPictureElement===a)return!0;n=(i=n.pictureInPictureElement)==null?void 0:i.shadowRoot}}return!1},set(t,e){const{media:i}=e;if(i)if(t){if(!ke.pictureInPictureEnabled){console.warn("MediaChrome: Picture-in-picture is not enabled");return}if(!i.requestPictureInPicture){console.warn("MediaChrome: The current media does not support picture-in-picture");return}const a=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(r=>{if(r.code===11){if(!i.src){console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");return}if(i.readyState===0&&i.preload==="none"){const n=()=>{i.removeEventListener("loadedmetadata",s),i.preload="none"},s=()=>{i.requestPictureInPicture().catch(a),n()};i.addEventListener("loadedmetadata",s),i.preload="metadata",setTimeout(()=>{i.readyState===0&&a(),n()},1e3)}else throw r}else throw r})}else ke.pictureInPictureElement&&ke.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(t){var e;const{media:i}=t;return[...(e=i==null?void 0:i.videoRenditions)!=null?e:[]].map(a=>({...a}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(t){var e,i,a;const{media:r}=t;return(a=(i=r==null?void 0:r.videoRenditions)==null?void 0:i[(e=r.videoRenditions)==null?void 0:e.selectedIndex])==null?void 0:a.id},set(t,e){const{media:i}=e;if(!(i!=null&&i.videoRenditions)){console.warn("MediaController: Rendition selection not supported by this media.");return}const a=t,r=Array.prototype.findIndex.call(i.videoRenditions,n=>n.id==a);i.videoRenditions.selectedIndex!=r&&(i.videoRenditions.selectedIndex=r)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(t){var e;const{media:i}=t;return[...(e=i==null?void 0:i.audioTracks)!=null?e:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(t){var e,i;const{media:a}=t;return(i=[...(e=a==null?void 0:a.audioTracks)!=null?e:[]].find(r=>r.enabled))==null?void 0:i.id},set(t,e){const{media:i}=e;if(!(i!=null&&i.audioTracks)){console.warn("MediaChrome: Audio track selection not supported by this media.");return}const a=t;for(const r of i.audioTracks)r.enabled=a==r.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get(t){return Sg(t)},set(t,e,i){var a;t?(Tg(e),i.detail&&((a=e.media)==null||a.focus())):Ag(e)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(t){var e;const{media:i}=t;return!(i!=null&&i.remote)||((e=i.remote)==null?void 0:e.state)==="disconnected"?!1:!!i.remote.state},set(t,e){var i,a;const{media:r}=e;if(r&&!(t&&((i=r.remote)==null?void 0:i.state)!=="disconnected")&&!(!t&&((a=r.remote)==null?void 0:a.state)!=="connected")){if(typeof r.remote.prompt!="function"){console.warn("MediaChrome: Casting is not supported in this environment");return}r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get(){return!1},set(t,e){const{media:i}=e;if(i){if(!(i.webkitShowPlaybackTargetPicker&&E.WebKitPlaybackTargetAvailabilityEvent)){console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");return}i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(t){const{media:e}=t;if(!Mg||!Jp(e))return je.UNSUPPORTED}},mediaPipUnavailable:{get(t){const{media:e}=t;if(!xg||!Xp(e))return je.UNSUPPORTED;if(e!=null&&e.disablePictureInPicture)return je.UNAVAILABLE}},mediaVolumeUnavailable:{get(t){const{media:e}=t;if(ko===!1||(e==null?void 0:e.volume)==null)return je.UNSUPPORTED},stateOwnersUpdateHandlers:[t=>{ko==null&&Ug.then(e=>t(e?void 0:je.UNSUPPORTED))}]},mediaCastUnavailable:{get(t,{availability:e="not-available"}={}){var i;const{media:a}=t;if(!Ng||!((i=a==null?void 0:a.remote)!=null&&i.state))return je.UNSUPPORTED;if(!(e==null||e==="available"))return je.UNAVAILABLE},stateOwnersUpdateHandlers:[(t,e)=>{var i;const{media:a}=e;return a?(a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||(i=a==null?void 0:a.remote)==null||i.watchAvailability(n=>{t({availability:n?"available":"not-available"})}).catch(n=>{n.name==="NotSupportedError"?t({availability:null}):t({availability:"not-available"})}),()=>{var n;(n=a==null?void 0:a.remote)==null||n.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaAirplayUnavailable:{get(t,e){if(!Og)return je.UNSUPPORTED;if((e==null?void 0:e.availability)==="not-available")return je.UNAVAILABLE},mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(t,e)=>{var i;const{media:a}=e;return a?(a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||(i=a==null?void 0:a.remote)==null||i.watchAvailability(n=>{t({availability:n?"available":"not-available"})}).catch(n=>{n.name==="NotSupportedError"?t({availability:null}):t({availability:"not-available"})}),()=>{var n;(n=a==null?void 0:a.remote)==null||n.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaRenditionUnavailable:{get(t){var e;const{media:i}=t;if(!(i!=null&&i.videoRenditions))return je.UNSUPPORTED;if(!((e=i.videoRenditions)!=null&&e.length))return je.UNAVAILABLE},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(t){var e,i;const{media:a}=t;if(!(a!=null&&a.audioTracks))return je.UNSUPPORTED;if(((i=(e=a.audioTracks)==null?void 0:e.length)!=null?i:0)<=1)return je.UNAVAILABLE},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaLang:{get(t){const{options:{mediaLang:e}={}}=t;return e??"en"}}},Fg={[R.MEDIA_PREVIEW_REQUEST](t,e,{detail:i}){var a,r,n;const{media:s}=e,o=i??void 0;let l,u;if(s&&o!=null){const[d]=al(s,{kind:Jt.METADATA,label:"thumbnails"}),v=Array.prototype.find.call((a=d==null?void 0:d.cues)!=null?a:[],(f,g,_)=>g===0?f.endTime>o:g===_.length-1?f.startTime<=o:f.startTime<=o&&f.endTime>o);if(v){const f=/'^(?:[a-z]+:)?\/\//i.test(v.text)||(r=s==null?void 0:s.querySelector('track[label="thumbnails"]'))==null?void 0:r.src,g=new URL(v.text,f);u=new URLSearchParams(g.hash).get("#xywh").split(",").map(T=>+T),l=g.href}}const p=t.mediaDuration.get(e);let h=(n=t.mediaChaptersCues.get(e).find((d,v,f)=>v===f.length-1&&p===d.endTime?d.startTime<=o&&d.endTime>=o:d.startTime<=o&&d.endTime>o))==null?void 0:n.text;return i!=null&&h==null&&(h=""),{mediaPreviewTime:o,mediaPreviewImage:l,mediaPreviewCoords:u,mediaPreviewChapter:h}},[R.MEDIA_PAUSE_REQUEST](t,e){t["mediaPaused"].set(!0,e)},[R.MEDIA_PLAY_REQUEST](t,e){var i,a,r,n;const s="mediaPaused",l=t.mediaStreamType.get(e)===si.LIVE,u=!((i=e.options)!=null&&i.noAutoSeekToLive),p=t.mediaTargetLiveWindow.get(e)>0;if(l&&u&&!p){const m=(a=t.mediaSeekable.get(e))==null?void 0:a[1];if(m){const h=(n=(r=e.options)==null?void 0:r.seekToLiveOffset)!=null?n:0,d=m-h;t.mediaCurrentTime.set(d,e)}}t[s].set(!1,e)},[R.MEDIA_PLAYBACK_RATE_REQUEST](t,e,{detail:i}){const a="mediaPlaybackRate",r=i;t[a].set(r,e)},[R.MEDIA_MUTE_REQUEST](t,e){t["mediaMuted"].set(!0,e)},[R.MEDIA_UNMUTE_REQUEST](t,e){const i="mediaMuted";t.mediaVolume.get(e)||t.mediaVolume.set(.25,e),t[i].set(!1,e)},[R.MEDIA_LOOP_REQUEST](t,e,{detail:i}){const a="mediaLoop",r=!!i;return t[a].set(r,e),{mediaLoop:r}},[R.MEDIA_VOLUME_REQUEST](t,e,{detail:i}){const a="mediaVolume",r=i;r&&t.mediaMuted.get(e)&&t.mediaMuted.set(!1,e),t[a].set(r,e)},[R.MEDIA_SEEK_REQUEST](t,e,{detail:i}){const a="mediaCurrentTime",r=i;t[a].set(r,e)},[R.MEDIA_SEEK_TO_LIVE_REQUEST](t,e){var i,a,r;const n="mediaCurrentTime",s=(i=t.mediaSeekable.get(e))==null?void 0:i[1];if(Number.isNaN(Number(s)))return;const o=(r=(a=e.options)==null?void 0:a.seekToLiveOffset)!=null?r:0,l=s-o;t[n].set(l,e)},[R.MEDIA_SHOW_SUBTITLES_REQUEST](t,e,{detail:i}){var a;const{options:r}=e,n=Ao(e),s=zp(i),o=(a=s[0])==null?void 0:a.language;o&&!r.noSubtitlesLangPref&&E.localStorage.setItem("media-chrome-pref-subtitles-lang",o),dn(ir.SHOWING,n,s)},[R.MEDIA_DISABLE_SUBTITLES_REQUEST](t,e,{detail:i}){const a=Ao(e),r=i??[];dn(ir.DISABLED,a,r)},[R.MEDIA_TOGGLE_SUBTITLES_REQUEST](t,e,{detail:i}){tv(e,i)},[R.MEDIA_RENDITION_REQUEST](t,e,{detail:i}){const a="mediaRenditionSelected",r=i;t[a].set(r,e)},[R.MEDIA_AUDIO_TRACK_REQUEST](t,e,{detail:i}){const a="mediaAudioTrackEnabled",r=i;t[a].set(r,e)},[R.MEDIA_ENTER_PIP_REQUEST](t,e){const i="mediaIsPip";t.mediaIsFullscreen.get(e)&&t.mediaIsFullscreen.set(!1,e),t[i].set(!0,e)},[R.MEDIA_EXIT_PIP_REQUEST](t,e){t["mediaIsPip"].set(!1,e)},[R.MEDIA_ENTER_FULLSCREEN_REQUEST](t,e,i){const a="mediaIsFullscreen";t.mediaIsPip.get(e)&&t.mediaIsPip.set(!1,e),t[a].set(!0,e,i)},[R.MEDIA_EXIT_FULLSCREEN_REQUEST](t,e){t["mediaIsFullscreen"].set(!1,e)},[R.MEDIA_ENTER_CAST_REQUEST](t,e){const i="mediaIsCasting";t.mediaIsFullscreen.get(e)&&t.mediaIsFullscreen.set(!1,e),t[i].set(!0,e)},[R.MEDIA_EXIT_CAST_REQUEST](t,e){t["mediaIsCasting"].set(!1,e)},[R.MEDIA_AIRPLAY_REQUEST](t,e){t["mediaIsAirplaying"].set(!0,e)}},Kg=({media:t,fullscreenElement:e,documentElement:i,stateMediator:a=Vr,requestMap:r=Fg,options:n={},monitorStateOwnersOnlyWithSubscriptions:s=!0})=>{const o=[],l={options:{...n}};let u=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0});const p=f=>{f!=null&&(Mu(f,u)||(u=Object.freeze({...u,...f}),o.forEach(g=>g(u))))},m=()=>{const f=Object.entries(a).reduce((g,[_,{get:T}])=>(g[_]=T(l),g),{});p(f)},h={};let d;const v=async(f,g)=>{var _,T,b,w,L,P,H,z,ie,V,U,Pe,Ge,Qe,fe,Be;const Lt=!!d;if(d={...l,...d??{},...f},Lt)return;await Hg(...Object.values(f));const We=o.length>0&&g===0&&s,Et=l.media!==d.media,ze=((_=l.media)==null?void 0:_.textTracks)!==((T=d.media)==null?void 0:T.textTracks),Re=((b=l.media)==null?void 0:b.videoRenditions)!==((w=d.media)==null?void 0:w.videoRenditions),$e=((L=l.media)==null?void 0:L.audioTracks)!==((P=d.media)==null?void 0:P.audioTracks),st=((H=l.media)==null?void 0:H.remote)!==((z=d.media)==null?void 0:z.remote),_a=l.documentElement!==d.documentElement,Nn=!!l.media&&(Et||We),Mc=!!((ie=l.media)!=null&&ie.textTracks)&&(ze||We),xc=!!((V=l.media)!=null&&V.videoRenditions)&&(Re||We),Oc=!!((U=l.media)!=null&&U.audioTracks)&&($e||We),Nc=!!((Pe=l.media)!=null&&Pe.remote)&&(st||We),Pc=!!l.documentElement&&(_a||We),pl=Nn||Mc||xc||Oc||Nc||Pc,ba=o.length===0&&g===1&&s,$c=!!d.media&&(Et||ba),Uc=!!((Ge=d.media)!=null&&Ge.textTracks)&&(ze||ba),Hc=!!((Qe=d.media)!=null&&Qe.videoRenditions)&&(Re||ba),Bc=!!((fe=d.media)!=null&&fe.audioTracks)&&($e||ba),Wc=!!((Be=d.media)!=null&&Be.remote)&&(st||ba),Fc=!!d.documentElement&&(_a||ba),Kc=$c||Uc||Hc||Bc||Wc||Fc;if(!(pl||Kc)){Object.entries(d).forEach(([J,Tr])=>{l[J]=Tr}),m(),d=void 0;return}Object.entries(a).forEach(([J,{get:Tr,mediaEvents:Hf=[],textTracksEvents:Bf=[],videoRenditionsEvents:Wf=[],audioTracksEvents:Ff=[],remoteEvents:Kf=[],rootEvents:Vf=[],stateOwnersUpdateHandlers:qf=[]}])=>{h[J]||(h[J]={});const Ze=ue=>{const Ee=Tr(l,ue);p({[J]:Ee})};let Ce;Ce=h[J].mediaEvents,Hf.forEach(ue=>{Ce&&Nn&&(l.media.removeEventListener(ue,Ce),h[J].mediaEvents=void 0),$c&&(d.media.addEventListener(ue,Ze),h[J].mediaEvents=Ze)}),Ce=h[J].textTracksEvents,Bf.forEach(ue=>{var Ee,_t;Ce&&Mc&&((Ee=l.media.textTracks)==null||Ee.removeEventListener(ue,Ce),h[J].textTracksEvents=void 0),Uc&&((_t=d.media.textTracks)==null||_t.addEventListener(ue,Ze),h[J].textTracksEvents=Ze)}),Ce=h[J].videoRenditionsEvents,Wf.forEach(ue=>{var Ee,_t;Ce&&xc&&((Ee=l.media.videoRenditions)==null||Ee.removeEventListener(ue,Ce),h[J].videoRenditionsEvents=void 0),Hc&&((_t=d.media.videoRenditions)==null||_t.addEventListener(ue,Ze),h[J].videoRenditionsEvents=Ze)}),Ce=h[J].audioTracksEvents,Ff.forEach(ue=>{var Ee,_t;Ce&&Oc&&((Ee=l.media.audioTracks)==null||Ee.removeEventListener(ue,Ce),h[J].audioTracksEvents=void 0),Bc&&((_t=d.media.audioTracks)==null||_t.addEventListener(ue,Ze),h[J].audioTracksEvents=Ze)}),Ce=h[J].remoteEvents,Kf.forEach(ue=>{var Ee,_t;Ce&&Nc&&((Ee=l.media.remote)==null||Ee.removeEventListener(ue,Ce),h[J].remoteEvents=void 0),Wc&&((_t=d.media.remote)==null||_t.addEventListener(ue,Ze),h[J].remoteEvents=Ze)}),Ce=h[J].rootEvents,Vf.forEach(ue=>{Ce&&Pc&&(l.documentElement.removeEventListener(ue,Ce),h[J].rootEvents=void 0),Fc&&(d.documentElement.addEventListener(ue,Ze),h[J].rootEvents=Ze)});const Pn=h[J].stateOwnersUpdateHandlers;if(Pn&&pl&&(Array.isArray(Pn)?Pn:[Pn]).forEach(Ee=>{typeof Ee=="function"&&Ee()}),Kc){const ue=qf.map(Ee=>Ee(Ze,d)).filter(Ee=>typeof Ee=="function");h[J].stateOwnersUpdateHandlers=ue.length===1?ue[0]:ue}else pl&&(h[J].stateOwnersUpdateHandlers=void 0)}),Object.entries(d).forEach(([J,Tr])=>{l[J]=Tr}),m(),d=void 0};return v({media:t,fullscreenElement:e,documentElement:i,options:n}),{dispatch(f){const{type:g,detail:_}=f;if(r[g]&&u.mediaErrorCode==null){p(r[g](a,l,f));return}g==="mediaelementchangerequest"?v({media:_}):g==="fullscreenelementchangerequest"?v({fullscreenElement:_}):g==="documentelementchangerequest"?v({documentElement:_}):g==="optionschangerequest"&&(Object.entries(_??{}).forEach(([T,b])=>{l.options[T]=b}),m())},getState(){return u},subscribe(f){return v({},o.length+1),o.push(f),f(u),()=>{const g=o.indexOf(f);g>=0&&(v({},o.length-1),o.splice(g,1))}}}};var xu=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},N=(t,e,i)=>(xu(t,e,"read from private field"),i?i.call(t):e.get(t)),dt=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Pt=(t,e,i,a)=>(xu(t,e,"write to private field"),e.set(t,i),i),Gt=(t,e,i)=>(xu(t,e,"access private method"),i),Ci,qr,q,ia,Yr,$t,_s,Gr,bs,od,da,ar,gs,ld,dd,iv;const av=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Enter"," ","f","m","k","c","l","j",">","<","p"],gh=10,yh=.025,Th=.25,Vg=.25,qg=2,S={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_DOWN_VOLUME_STEP:"keyboarddownvolumestep",KEYBOARD_UP_VOLUME_STEP:"keyboardupvolumestep",KEYS_USED:"keysused",LANG:"lang",LOOP:"loop",LIVE_EDGE_OFFSET:"liveedgeoffset",NO_AUTO_SEEK_TO_LIVE:"noautoseektolive",NO_DEFAULT_STORE:"nodefaultstore",NO_HOTKEYS:"nohotkeys",NO_MUTED_PREF:"nomutedpref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_VOLUME_PREF:"novolumepref",SEEK_TO_LIVE_OFFSET:"seektoliveoffset"};class rv extends tl{constructor(){super(),dt(this,bs),dt(this,da),dt(this,gs),dt(this,dd),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,dt(this,Ci,new Lu(this,S.HOTKEYS)),dt(this,qr,void 0),dt(this,q,void 0),dt(this,ia,null),dt(this,Yr,void 0),dt(this,$t,void 0),dt(this,_s,i=>{var a;(a=N(this,q))==null||a.dispatch(i)}),dt(this,Gr,void 0),this.associateElement(this);let e={};Pt(this,Yr,i=>{Object.entries(i).forEach(([a,r])=>{if(a in e&&e[a]===r)return;this.propagateMediaState(a,r);const n=a.toLowerCase(),s=new E.CustomEvent(Y0[n],{composed:!0,detail:r});this.dispatchEvent(s)}),e=i}),this.hasAttribute(S.NO_HOTKEYS)?this.disableHotkeys():this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(S.NO_HOTKEYS,S.HOTKEYS,S.DEFAULT_STREAM_TYPE,S.DEFAULT_SUBTITLES,S.DEFAULT_DURATION,S.NO_MUTED_PREF,S.NO_VOLUME_PREF,S.LANG,S.LOOP)}get mediaStore(){return N(this,q)}set mediaStore(e){var i,a;if(N(this,q)&&((i=N(this,$t))==null||i.call(this),Pt(this,$t,void 0)),Pt(this,q,e),!N(this,q)&&!this.hasAttribute(S.NO_DEFAULT_STORE)){Gt(this,bs,od).call(this);return}Pt(this,$t,(a=N(this,q))==null?void 0:a.subscribe(N(this,Yr)))}get fullscreenElement(){var e;return(e=N(this,qr))!=null?e:this}set fullscreenElement(e){var i;this.hasAttribute(S.FULLSCREEN_ELEMENT)&&this.removeAttribute(S.FULLSCREEN_ELEMENT),Pt(this,qr,e),(i=N(this,q))==null||i.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return F(this,S.DEFAULT_SUBTITLES)}set defaultSubtitles(e){K(this,S.DEFAULT_SUBTITLES,e)}get defaultStreamType(){return oe(this,S.DEFAULT_STREAM_TYPE)}set defaultStreamType(e){le(this,S.DEFAULT_STREAM_TYPE,e)}get defaultDuration(){return se(this,S.DEFAULT_DURATION)}set defaultDuration(e){pe(this,S.DEFAULT_DURATION,e)}get noHotkeys(){return F(this,S.NO_HOTKEYS)}set noHotkeys(e){K(this,S.NO_HOTKEYS,e)}get keysUsed(){return oe(this,S.KEYS_USED)}set keysUsed(e){le(this,S.KEYS_USED,e)}get liveEdgeOffset(){return se(this,S.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){pe(this,S.LIVE_EDGE_OFFSET,e)}get noAutoSeekToLive(){return F(this,S.NO_AUTO_SEEK_TO_LIVE)}set noAutoSeekToLive(e){K(this,S.NO_AUTO_SEEK_TO_LIVE,e)}get noVolumePref(){return F(this,S.NO_VOLUME_PREF)}set noVolumePref(e){K(this,S.NO_VOLUME_PREF,e)}get noMutedPref(){return F(this,S.NO_MUTED_PREF)}set noMutedPref(e){K(this,S.NO_MUTED_PREF,e)}get noSubtitlesLangPref(){return F(this,S.NO_SUBTITLES_LANG_PREF)}set noSubtitlesLangPref(e){K(this,S.NO_SUBTITLES_LANG_PREF,e)}get noDefaultStore(){return F(this,S.NO_DEFAULT_STORE)}set noDefaultStore(e){K(this,S.NO_DEFAULT_STORE,e)}attributeChangedCallback(e,i,a){var r,n,s,o,l,u,p,m,h,d,v,f;if(super.attributeChangedCallback(e,i,a),e===S.NO_HOTKEYS)a!==i&&a===""?(this.hasAttribute(S.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):a!==i&&a===null&&this.enableHotkeys();else if(e===S.HOTKEYS)N(this,Ci).value=a;else if(e===S.DEFAULT_SUBTITLES&&a!==i)(r=N(this,q))==null||r.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(S.DEFAULT_SUBTITLES)}});else if(e===S.DEFAULT_STREAM_TYPE)(s=N(this,q))==null||s.dispatch({type:"optionschangerequest",detail:{defaultStreamType:(n=this.getAttribute(S.DEFAULT_STREAM_TYPE))!=null?n:void 0}});else if(e===S.LIVE_EDGE_OFFSET)(o=N(this,q))==null||o.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(S.LIVE_EDGE_OFFSET)?+this.getAttribute(S.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(S.SEEK_TO_LIVE_OFFSET)?void 0:+this.getAttribute(S.LIVE_EDGE_OFFSET)}});else if(e===S.SEEK_TO_LIVE_OFFSET)(l=N(this,q))==null||l.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(S.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(S.SEEK_TO_LIVE_OFFSET):void 0}});else if(e===S.NO_AUTO_SEEK_TO_LIVE)(u=N(this,q))==null||u.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(S.NO_AUTO_SEEK_TO_LIVE)}});else if(e===S.FULLSCREEN_ELEMENT){const g=a?(p=this.getRootNode())==null?void 0:p.getElementById(a):void 0;Pt(this,qr,g),(m=N(this,q))==null||m.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else e===S.LANG&&a!==i?(ng(a),(h=N(this,q))==null||h.dispatch({type:"optionschangerequest",detail:{mediaLang:a}})):e===S.LOOP&&a!==i?(d=N(this,q))==null||d.dispatch({type:R.MEDIA_LOOP_REQUEST,detail:a!=null}):e===S.NO_VOLUME_PREF&&a!==i?(v=N(this,q))==null||v.dispatch({type:"optionschangerequest",detail:{noVolumePref:this.hasAttribute(S.NO_VOLUME_PREF)}}):e===S.NO_MUTED_PREF&&a!==i&&((f=N(this,q))==null||f.dispatch({type:"optionschangerequest",detail:{noMutedPref:this.hasAttribute(S.NO_MUTED_PREF)}}))}connectedCallback(){var e,i;!N(this,q)&&!this.hasAttribute(S.NO_DEFAULT_STORE)&&Gt(this,bs,od).call(this),(e=N(this,q))==null||e.dispatch({type:"documentelementchangerequest",detail:ke}),super.connectedCallback(),N(this,q)&&!N(this,$t)&&Pt(this,$t,(i=N(this,q))==null?void 0:i.subscribe(N(this,Yr))),N(this,Gr)!==void 0&&N(this,q)&&this.media&&setTimeout(()=>{var a,r,n;(r=(a=this.media)==null?void 0:a.textTracks)!=null&&r.length&&((n=N(this,q))==null||n.dispatch({type:R.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:N(this,Gr)}))},0),this.hasAttribute(S.NO_HOTKEYS)?this.disableHotkeys():this.enableHotkeys()}disconnectedCallback(){var e,i,a,r,n;if((e=super.disconnectedCallback)==null||e.call(this),N(this,q)){const s=N(this,q).getState();Pt(this,Gr,!!((i=s.mediaSubtitlesShowing)!=null&&i.length)),(a=N(this,q))==null||a.dispatch({type:"documentelementchangerequest",detail:void 0}),(r=N(this,q))==null||r.dispatch({type:R.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})}N(this,$t)&&((n=N(this,$t))==null||n.call(this),Pt(this,$t,void 0))}mediaSetCallback(e){var i;super.mediaSetCallback(e),(i=N(this,q))==null||i.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var i;super.mediaUnsetCallback(e),(i=N(this,q))==null||i.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,i){Sh(this.mediaStateReceivers,e,i)}associateElement(e){if(!e)return;const{associatedElementSubscriptions:i}=this;if(i.has(e))return;const a=this.registerMediaStateReceiver.bind(this),r=this.unregisterMediaStateReceiver.bind(this),n=jg(e,a,r);Object.values(R).forEach(s=>{e.addEventListener(s,N(this,_s))}),i.set(e,n)}unassociateElement(e){if(!e)return;const{associatedElementSubscriptions:i}=this;if(!i.has(e))return;i.get(e)(),i.delete(e),Object.values(R).forEach(r=>{e.removeEventListener(r,N(this,_s))})}registerMediaStateReceiver(e){if(!e)return;const i=this.mediaStateReceivers;i.indexOf(e)>-1||(i.push(e),N(this,q)&&Object.entries(N(this,q).getState()).forEach(([r,n])=>{Sh([e],r,n)}))}unregisterMediaStateReceiver(e){const i=this.mediaStateReceivers,a=i.indexOf(e);a<0||i.splice(a,1)}enableHotkeys(){this.addEventListener("keydown",Gt(this,gs,ld))}disableHotkeys(){this.removeEventListener("keydown",Gt(this,gs,ld)),this.removeEventListener("keyup",Gt(this,da,ar))}get hotkeys(){return oe(this,S.HOTKEYS)}set hotkeys(e){le(this,S.HOTKEYS,e)}keyboardShortcutHandler(e){var i,a,r,n,s,o,l,u,p;const m=e.target;if(((r=(a=(i=m.getAttribute(S.KEYS_USED))==null?void 0:i.split(" "))!=null?a:m==null?void 0:m.keysUsed)!=null?r:[]).map(_=>_==="Space"?" ":_).filter(Boolean).includes(e.key))return;let d,v,f;if(!(N(this,Ci).contains(`no${e.key.toLowerCase()}`)||e.key===" "&&N(this,Ci).contains("nospace")||e.shiftKey&&(e.key==="/"||e.key==="?")&&N(this,Ci).contains("noshift+/")))switch(e.key){case" ":case"k":d=N(this,q).getState().mediaPaused?R.MEDIA_PLAY_REQUEST:R.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new E.CustomEvent(d,{composed:!0,bubbles:!0}));break;case"m":d=this.mediaStore.getState().mediaVolumeLevel==="off"?R.MEDIA_UNMUTE_REQUEST:R.MEDIA_MUTE_REQUEST,this.dispatchEvent(new E.CustomEvent(d,{composed:!0,bubbles:!0}));break;case"f":d=this.mediaStore.getState().mediaIsFullscreen?R.MEDIA_EXIT_FULLSCREEN_REQUEST:R.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new E.CustomEvent(d,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new E.CustomEvent(R.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":case"j":{const _=this.hasAttribute(S.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(S.KEYBOARD_BACKWARD_SEEK_OFFSET):gh;v=Math.max(((n=this.mediaStore.getState().mediaCurrentTime)!=null?n:0)-_,0),f=new E.CustomEvent(R.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(f);break}case"ArrowRight":case"l":{const _=this.hasAttribute(S.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(S.KEYBOARD_FORWARD_SEEK_OFFSET):gh;v=Math.max(((s=this.mediaStore.getState().mediaCurrentTime)!=null?s:0)+_,0),f=new E.CustomEvent(R.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(f);break}case"ArrowUp":{const _=this.hasAttribute(S.KEYBOARD_UP_VOLUME_STEP)?+this.getAttribute(S.KEYBOARD_UP_VOLUME_STEP):yh;v=Math.min(((o=this.mediaStore.getState().mediaVolume)!=null?o:1)+_,1),f=new E.CustomEvent(R.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(f);break}case"ArrowDown":{const _=this.hasAttribute(S.KEYBOARD_DOWN_VOLUME_STEP)?+this.getAttribute(S.KEYBOARD_DOWN_VOLUME_STEP):yh;v=Math.max(((l=this.mediaStore.getState().mediaVolume)!=null?l:1)-_,0),f=new E.CustomEvent(R.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(f);break}case"<":{const _=(u=this.mediaStore.getState().mediaPlaybackRate)!=null?u:1;v=Math.max(_-Th,Vg).toFixed(2),f=new E.CustomEvent(R.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(f);break}case">":{const _=(p=this.mediaStore.getState().mediaPlaybackRate)!=null?p:1;v=Math.min(_+Th,qg).toFixed(2),f=new E.CustomEvent(R.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(f);break}case"/":case"?":{e.shiftKey&&Gt(this,dd,iv).call(this);break}case"p":{d=this.mediaStore.getState().mediaIsPip?R.MEDIA_EXIT_PIP_REQUEST:R.MEDIA_ENTER_PIP_REQUEST,f=new E.CustomEvent(d,{composed:!0,bubbles:!0}),this.dispatchEvent(f);break}}}}Ci=new WeakMap;qr=new WeakMap;q=new WeakMap;ia=new WeakMap;Yr=new WeakMap;$t=new WeakMap;_s=new WeakMap;Gr=new WeakMap;bs=new WeakSet;od=function(){var t;this.mediaStore=Kg({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(S.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(S.DEFAULT_DURATION)?+this.getAttribute(S.DEFAULT_DURATION):void 0,defaultStreamType:(t=this.getAttribute(S.DEFAULT_STREAM_TYPE))!=null?t:void 0,liveEdgeOffset:this.hasAttribute(S.LIVE_EDGE_OFFSET)?+this.getAttribute(S.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(S.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(S.SEEK_TO_LIVE_OFFSET):this.hasAttribute(S.LIVE_EDGE_OFFSET)?+this.getAttribute(S.LIVE_EDGE_OFFSET):void 0,noAutoSeekToLive:this.hasAttribute(S.NO_AUTO_SEEK_TO_LIVE),noVolumePref:this.hasAttribute(S.NO_VOLUME_PREF),noMutedPref:this.hasAttribute(S.NO_MUTED_PREF),noSubtitlesLangPref:this.hasAttribute(S.NO_SUBTITLES_LANG_PREF)}})};da=new WeakSet;ar=function(t){const{key:e,shiftKey:i}=t;if(!(i&&(e==="/"||e==="?")||av.includes(e))){this.removeEventListener("keyup",Gt(this,da,ar));return}this.keyboardShortcutHandler(t)};gs=new WeakSet;ld=function(t){var e;const{metaKey:i,altKey:a,key:r,shiftKey:n}=t,s=n&&(r==="/"||r==="?");if(s&&((e=N(this,ia))!=null&&e.open)){this.removeEventListener("keyup",Gt(this,da,ar));return}if(i||a||!s&&!av.includes(r)){this.removeEventListener("keyup",Gt(this,da,ar));return}const o=t.target,l=o instanceof HTMLElement&&(o.tagName.toLowerCase()==="media-volume-range"||o.tagName.toLowerCase()==="media-time-range");[" ","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(r)&&!(N(this,Ci).contains(`no${r.toLowerCase()}`)||r===" "&&N(this,Ci).contains("nospace"))&&!l&&t.preventDefault(),this.addEventListener("keyup",Gt(this,da,ar),{once:!0})};dd=new WeakSet;iv=function(){N(this,ia)||(Pt(this,ia,ke.createElement("media-keyboard-shortcuts-dialog")),this.appendChild(N(this,ia))),N(this,ia).open=!0};const Yg=Object.values(c),Gg=Object.values(Cp),nv=t=>{var e,i,a,r;let{observedAttributes:n}=t.constructor;!n&&((e=t.nodeName)!=null&&e.includes("-"))&&(E.customElements.upgrade(t),{observedAttributes:n}=t.constructor);const s=(r=(a=(i=t==null?void 0:t.getAttribute)==null?void 0:i.call(t,Q.MEDIA_CHROME_ATTRIBUTES))==null?void 0:a.split)==null?void 0:r.call(a,/\s+/);return Array.isArray(n||s)?(n||s).filter(o=>Yg.includes(o)):[]},Qg=t=>{var e,i;return(e=t.nodeName)!=null&&e.includes("-")&&E.customElements.get((i=t.nodeName)==null?void 0:i.toLowerCase())&&!(t instanceof E.customElements.get(t.nodeName.toLowerCase()))&&E.customElements.upgrade(t),Gg.some(a=>a in t)},ud=t=>Qg(t)||!!nv(t).length,Ah=t=>{var e;return(e=t==null?void 0:t.join)==null?void 0:e.call(t,":")},kh={[c.MEDIA_SUBTITLES_LIST]:An,[c.MEDIA_SUBTITLES_SHOWING]:An,[c.MEDIA_SEEKABLE]:Ah,[c.MEDIA_BUFFERED]:t=>t==null?void 0:t.map(Ah).join(" "),[c.MEDIA_PREVIEW_COORDS]:t=>t==null?void 0:t.join(" "),[c.MEDIA_RENDITION_LIST]:Q0,[c.MEDIA_AUDIO_TRACK_LIST]:X0},zg=async(t,e,i)=>{var a,r;if(t.isConnected||await Mp(0),typeof i=="boolean"||i==null)return K(t,e,i);if(typeof i=="number")return pe(t,e,i);if(typeof i=="string")return le(t,e,i);if(Array.isArray(i)&&!i.length)return t.removeAttribute(e);const n=(r=(a=kh[e])==null?void 0:a.call(kh,i))!=null?r:i;return t.setAttribute(e,n)},Zg=t=>{var e;return!!((e=t.closest)!=null&&e.call(t,'*[slot="media"]'))},Vi=(t,e)=>{if(Zg(t))return;const i=(r,n)=>{var s,o;ud(r)&&n(r);const{children:l=[]}=r??{},u=(o=(s=r==null?void 0:r.shadowRoot)==null?void 0:s.children)!=null?o:[];[...l,...u].forEach(m=>Vi(m,n))},a=t==null?void 0:t.nodeName.toLowerCase();if(a.includes("-")&&!ud(t)){E.customElements.whenDefined(a).then(()=>{i(t,e)});return}i(t,e)},Sh=(t,e,i)=>{t.forEach(a=>{if(e in a){a[e]=i;return}const r=nv(a),n=e.toLowerCase();r.includes(n)&&zg(a,n,i)})},jg=(t,e,i)=>{Vi(t,e);const a=p=>{var m;const h=(m=p==null?void 0:p.composedPath()[0])!=null?m:p.target;e(h)},r=p=>{var m;const h=(m=p==null?void 0:p.composedPath()[0])!=null?m:p.target;i(h)};t.addEventListener(R.REGISTER_MEDIA_STATE_RECEIVER,a),t.addEventListener(R.UNREGISTER_MEDIA_STATE_RECEIVER,r);const n=p=>{p.forEach(m=>{const{addedNodes:h=[],removedNodes:d=[],type:v,target:f,attributeName:g}=m;v==="childList"?(Array.prototype.forEach.call(h,_=>Vi(_,e)),Array.prototype.forEach.call(d,_=>Vi(_,i))):v==="attributes"&&g===Q.MEDIA_CHROME_ATTRIBUTES&&(ud(f)?e(f):i(f))})};let s=[];const o=p=>{const m=p.target;m.name!=="media"&&(s.forEach(h=>Vi(h,i)),s=[...m.assignedElements({flatten:!0})],s.forEach(h=>Vi(h,e)))};t.addEventListener("slotchange",o);const l=new MutationObserver(n);return l.observe(t,{childList:!0,attributes:!0,subtree:!0}),()=>{Vi(t,i),t.removeEventListener("slotchange",o),l.disconnect(),t.removeEventListener(R.REGISTER_MEDIA_STATE_RECEIVER,a),t.removeEventListener(R.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};E.customElements.get("media-controller")||E.customElements.define("media-controller",rv);var Xg=rv;const ga={PLACEMENT:"placement",BOUNDS:"bounds"};function Jg(t){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `}class rl extends E.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!Wp(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;const i=this.placement;if(i==="left"||i==="right"){this.style.removeProperty("--media-tooltip-offset-x");return}const a=getComputedStyle(this),r=(e=Er(this,"#"+this.bounds))!=null?e:qe(this);if(!r)return;const{x:n,width:s}=r.getBoundingClientRect(),{x:o,width:l}=this.getBoundingClientRect(),u=o+l,p=n+s,m=a.getPropertyValue("--media-tooltip-offset-x"),h=m?parseFloat(m.replace("px","")):0,d=a.getPropertyValue("--media-tooltip-container-margin"),v=d?parseFloat(d.replace("px","")):0,f=o-n+h-v,g=u-p+h+v;if(f<0){this.style.setProperty("--media-tooltip-offset-x",`${f}px`);return}if(g>0){this.style.setProperty("--media-tooltip-offset-x",`${g}px`);return}this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=nt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){const e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[ga.PLACEMENT,ga.BOUNDS]}get placement(){return oe(this,ga.PLACEMENT)}set placement(e){le(this,ga.PLACEMENT,e)}get bounds(){return oe(this,ga.BOUNDS)}set bounds(e){le(this,ga.BOUNDS,e)}}rl.shadowRootOptions={mode:"open"};rl.getTemplateHTML=Jg;E.customElements.get("media-tooltip")||E.customElements.define("media-tooltip",rl);var wh=rl,Ou=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},be=(t,e,i)=>(Ou(t,e,"read from private field"),i?i.call(t):e.get(t)),ya=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Vn=(t,e,i,a)=>(Ou(t,e,"write to private field"),e.set(t,i),i),e1=(t,e,i)=>(Ou(t,e,"access private method"),i),Ut,ja,Li,Ma,ys,cd,sv;const _i={TOOLTIP_PLACEMENT:"tooltipplacement",DISABLED:"disabled",NO_TOOLTIP:"notooltip"};function t1(t,e={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(t,e)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${wh.shadowRootOptions.mode}">
          ${wh.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(t)}
        </slot>
      </media-tooltip>
    </slot>
  `}function i1(t,e){return`
    <slot></slot>
  `}function a1(){return""}class xe extends E.HTMLElement{constructor(){if(super(),ya(this,cd),ya(this,Ut,void 0),this.preventClick=!1,this.tooltipEl=null,ya(this,ja,e=>{this.preventClick||this.handleClick(e),setTimeout(be(this,Li),0)}),ya(this,Li,()=>{var e,i;(i=(e=this.tooltipEl)==null?void 0:e.updateXOffset)==null||i.call(e)}),ya(this,Ma,e=>{const{key:i}=e;if(!this.keysUsed.includes(i)){this.removeEventListener("keyup",be(this,Ma));return}this.preventClick||this.handleClick(e)}),ya(this,ys,e=>{const{metaKey:i,altKey:a,key:r}=e;if(i||a||!this.keysUsed.includes(r)){this.removeEventListener("keyup",be(this,Ma));return}this.addEventListener("keyup",be(this,Ma),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=nt(this.attributes),i=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(i):this.shadowRoot.innerHTML=i}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",_i.TOOLTIP_PLACEMENT,Q.MEDIA_CONTROLLER,c.MEDIA_LANG]}enable(){this.addEventListener("click",be(this,ja)),this.addEventListener("keydown",be(this,ys)),this.tabIndex=0}disable(){this.removeEventListener("click",be(this,ja)),this.removeEventListener("keydown",be(this,ys)),this.removeEventListener("keyup",be(this,Ma)),this.tabIndex=-1}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===Q.MEDIA_CONTROLLER?(i&&((n=(r=be(this,Ut))==null?void 0:r.unassociateElement)==null||n.call(r,this),Vn(this,Ut,null)),a&&this.isConnected&&(Vn(this,Ut,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=be(this,Ut))==null?void 0:o.associateElement)==null||l.call(o,this))):e==="disabled"&&a!==i?a==null?this.enable():this.disable():e===_i.TOOLTIP_PLACEMENT&&this.tooltipEl&&a!==i?this.tooltipEl.placement=a:e===c.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),be(this,Li).call(this)}connectedCallback(){var e,i,a;const{style:r}=Ie(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");const n=this.getAttribute(Q.MEDIA_CONTROLLER);n&&(Vn(this,Ut,(e=this.getRootNode())==null?void 0:e.getElementById(n)),(a=(i=be(this,Ut))==null?void 0:i.associateElement)==null||a.call(i,this)),E.customElements.whenDefined("media-tooltip").then(()=>e1(this,cd,sv).call(this))}disconnectedCallback(){var e,i;this.disable(),(i=(e=be(this,Ut))==null?void 0:e.unassociateElement)==null||i.call(e,this),Vn(this,Ut,null),this.removeEventListener("mouseenter",be(this,Li)),this.removeEventListener("focus",be(this,Li)),this.removeEventListener("click",be(this,ja))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return oe(this,_i.TOOLTIP_PLACEMENT)}set tooltipPlacement(e){le(this,_i.TOOLTIP_PLACEMENT,e)}get mediaController(){return oe(this,Q.MEDIA_CONTROLLER)}set mediaController(e){le(this,Q.MEDIA_CONTROLLER,e)}get disabled(){return F(this,_i.DISABLED)}set disabled(e){K(this,_i.DISABLED,e)}get noTooltip(){return F(this,_i.NO_TOOLTIP)}set noTooltip(e){K(this,_i.NO_TOOLTIP,e)}handleClick(e){}}Ut=new WeakMap;ja=new WeakMap;Li=new WeakMap;Ma=new WeakMap;ys=new WeakMap;cd=new WeakSet;sv=function(){this.addEventListener("mouseenter",be(this,Li)),this.addEventListener("focus",be(this,Li)),this.addEventListener("click",be(this,ja));const t=this.tooltipPlacement;t&&this.tooltipEl&&(this.tooltipEl.placement=t)};xe.shadowRootOptions={mode:"open"};xe.getTemplateHTML=t1;xe.getSlotTemplateHTML=i1;xe.getTooltipContentHTML=a1;E.customElements.get("media-chrome-button")||E.customElements.define("media-chrome-button",xe);const Ih=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`;function r1(t){return`
    <style>
      :host([${c.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${c.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${c.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${c.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${Ih}</slot>
      <slot name="exit">${Ih}</slot>
    </slot>
  `}function n1(){return`
    <slot name="tooltip-enter">${D("start airplay")}</slot>
    <slot name="tooltip-exit">${D("stop airplay")}</slot>
  `}const Rh=t=>{const e=t.mediaIsAirplaying?D("stop airplay"):D("start airplay");t.setAttribute("aria-label",e)};class Nu extends xe{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_IS_AIRPLAYING,c.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Rh(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===c.MEDIA_IS_AIRPLAYING&&Rh(this)}get mediaIsAirplaying(){return F(this,c.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){K(this,c.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return oe(this,c.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){le(this,c.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){const e=new E.CustomEvent(R.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}Nu.getSlotTemplateHTML=r1;Nu.getTooltipContentHTML=n1;E.customElements.get("media-airplay-button")||E.customElements.define("media-airplay-button",Nu);const s1=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,o1=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function l1(t){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${s1}</slot>
      <slot name="off">${o1}</slot>
    </slot>
  `}function d1(){return`
    <slot name="tooltip-enable">${D("Enable captions")}</slot>
    <slot name="tooltip-disable">${D("Disable captions")}</slot>
  `}const Ch=t=>{t.setAttribute("aria-checked",jp(t).toString())};class Pu extends xe{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_SUBTITLES_LIST,c.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",D("closed captions")),Ch(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===c.MEDIA_SUBTITLES_SHOWING&&Ch(this)}get mediaSubtitlesList(){return Lh(this,c.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){Dh(this,c.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return Lh(this,c.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){Dh(this,c.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new E.CustomEvent(R.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}Pu.getSlotTemplateHTML=l1;Pu.getTooltipContentHTML=d1;const Lh=(t,e)=>{const i=t.getAttribute(e);return i?il(i):[]},Dh=(t,e,i)=>{if(!(i!=null&&i.length)){t.removeAttribute(e);return}const a=An(i);t.getAttribute(e)!==a&&t.setAttribute(e,a)};E.customElements.get("media-captions-button")||E.customElements.define("media-captions-button",Pu);const u1='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg>',c1='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg>';function h1(t){return`
    <style>
      :host([${c.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${c.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${c.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${c.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${u1}</slot>
      <slot name="exit">${c1}</slot>
    </slot>
  `}function m1(){return`
    <slot name="tooltip-enter">${D("Start casting")}</slot>
    <slot name="tooltip-exit">${D("Stop casting")}</slot>
  `}const Mh=t=>{const e=t.mediaIsCasting?D("stop casting"):D("start casting");t.setAttribute("aria-label",e)};class $u extends xe{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_IS_CASTING,c.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Mh(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===c.MEDIA_IS_CASTING&&Mh(this)}get mediaIsCasting(){return F(this,c.MEDIA_IS_CASTING)}set mediaIsCasting(e){K(this,c.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return oe(this,c.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){le(this,c.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){const e=this.mediaIsCasting?R.MEDIA_EXIT_CAST_REQUEST:R.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new E.CustomEvent(e,{composed:!0,bubbles:!0}))}}$u.getSlotTemplateHTML=h1;$u.getTooltipContentHTML=m1;E.customElements.get("media-cast-button")||E.customElements.define("media-cast-button",$u);var Uu=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ua=(t,e,i)=>(Uu(t,e,"read from private field"),e.get(t)),ii=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Hu=(t,e,i,a)=>(Uu(t,e,"write to private field"),e.set(t,i),i),Hi=(t,e,i)=>(Uu(t,e,"access private method"),i),So,kn,va,Ts,hd,md,ov,pd,lv,vd,dv,fd,uv,Ed,cv;function p1(t){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(t)}
  `}function v1(t){return`
    <slot id="content"></slot>
  `}const wr={OPEN:"open",ANCHOR:"anchor"};class _r extends E.HTMLElement{constructor(){super(),ii(this,Ts),ii(this,md),ii(this,pd),ii(this,vd),ii(this,fd),ii(this,Ed),ii(this,So,!1),ii(this,kn,null),ii(this,va,null),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}static get observedAttributes(){return[wr.OPEN,wr.ANCHOR]}get open(){return F(this,wr.OPEN)}set open(e){K(this,wr.OPEN,e)}handleEvent(e){switch(e.type){case"invoke":Hi(this,vd,dv).call(this,e);break;case"focusout":Hi(this,fd,uv).call(this,e);break;case"keydown":Hi(this,Ed,cv).call(this,e);break}}connectedCallback(){Hi(this,Ts,hd).call(this),this.role||(this.role="dialog")}attributeChangedCallback(e,i,a){Hi(this,Ts,hd).call(this),e===wr.OPEN&&a!==i&&(this.open?Hi(this,md,ov).call(this):Hi(this,pd,lv).call(this))}focus(){Hu(this,kn,wu());const e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),i=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||i)return;const a=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');a==null||a.focus()}get keysUsed(){return["Escape","Tab"]}}So=new WeakMap;kn=new WeakMap;va=new WeakMap;Ts=new WeakSet;hd=function(){if(!ua(this,So)&&(Hu(this,So,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);const t=nt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t),queueMicrotask(()=>{const{style:e}=Ie(this.shadowRoot,":host");e.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}};md=new WeakSet;ov=function(){var t;(t=ua(this,va))==null||t.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})};pd=new WeakSet;lv=function(){var t;(t=ua(this,va))==null||t.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))};vd=new WeakSet;dv=function(t){Hu(this,va,t.relatedTarget),vi(this,t.relatedTarget)||(this.open=!this.open)};fd=new WeakSet;uv=function(t){var e;vi(this,t.relatedTarget)||((e=ua(this,kn))==null||e.focus(),ua(this,va)&&ua(this,va)!==t.relatedTarget&&this.open&&(this.open=!1))};Ed=new WeakSet;cv=function(t){var e,i,a,r,n;const{key:s,ctrlKey:o,altKey:l,metaKey:u}=t;o||l||u||this.keysUsed.includes(s)&&(t.preventDefault(),t.stopPropagation(),s==="Tab"?(t.shiftKey?(i=(e=this.previousElementSibling)==null?void 0:e.focus)==null||i.call(e):(r=(a=this.nextElementSibling)==null?void 0:a.focus)==null||r.call(a),this.blur()):s==="Escape"&&((n=ua(this,kn))==null||n.focus(),this.open=!1))};_r.shadowRootOptions={mode:"open"};_r.getTemplateHTML=p1;_r.getSlotTemplateHTML=v1;E.customElements.get("media-chrome-dialog")||E.customElements.define("media-chrome-dialog",_r);var Bu=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ce=(t,e,i)=>(Bu(t,e,"read from private field"),i?i.call(t):e.get(t)),Oe=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ti=(t,e,i,a)=>(Bu(t,e,"write to private field"),e.set(t,i),i),At=(t,e,i)=>(Bu(t,e,"access private method"),i),Ht,nl,As,ks,kt,wo,Ss,ws,Is,Wu,hv,Rs,_d,Cs,bd,Io,Fu,gd,mv,yd,pv,Td,vv,Ad,fv;function f1(t){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, -7px);
        height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, -5px);
          height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
      <input id="range" type="range" min="0" max="1" step="any" value="0">

      ${this.getContainerTemplateHTML(t)}
    </div>
    <div id="rightgap"></div>
  `}function E1(t){return""}class br extends E.HTMLElement{constructor(){if(super(),Oe(this,Wu),Oe(this,Rs),Oe(this,Cs),Oe(this,Io),Oe(this,gd),Oe(this,yd),Oe(this,Td),Oe(this,Ad),Oe(this,Ht,void 0),Oe(this,nl,void 0),Oe(this,As,void 0),Oe(this,ks,void 0),Oe(this,kt,{}),Oe(this,wo,[]),Oe(this,Ss,()=>{if(this.range.matches(":focus-visible")){const{style:e}=Ie(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),Oe(this,ws,()=>{const{style:e}=Ie(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),Oe(this,Is,()=>{const e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=nt(this.attributes),i=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(i):this.shadowRoot.innerHTML=i}this.container=this.shadowRoot.querySelector("#container"),Ti(this,As,this.shadowRoot.querySelector("#startpoint")),Ti(this,ks,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",Q.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===Q.MEDIA_CONTROLLER?(i&&((n=(r=ce(this,Ht))==null?void 0:r.unassociateElement)==null||n.call(r,this),Ti(this,Ht,null)),a&&this.isConnected&&(Ti(this,Ht,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=ce(this,Ht))==null?void 0:o.associateElement)==null||l.call(o,this))):(e==="disabled"||e==="aria-disabled"&&i!==a)&&(a==null?(this.range.removeAttribute(e),At(this,Rs,_d).call(this)):(this.range.setAttribute(e,a),At(this,Cs,bd).call(this)))}connectedCallback(){var e,i,a;const{style:r}=Ie(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),ce(this,kt).pointer=Ie(this.shadowRoot,"#pointer"),ce(this,kt).progress=Ie(this.shadowRoot,"#progress"),ce(this,kt).thumb=Ie(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),ce(this,kt).activeSegment=Ie(this.shadowRoot,"#segments-clipping rect:nth-child(0)");const n=this.getAttribute(Q.MEDIA_CONTROLLER);n&&(Ti(this,Ht,(e=this.getRootNode())==null?void 0:e.getElementById(n)),(a=(i=ce(this,Ht))==null?void 0:i.associateElement)==null||a.call(i,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",ce(this,Ss)),this.shadowRoot.addEventListener("focusout",ce(this,ws)),At(this,Rs,_d).call(this),cr(this.container,ce(this,Is))}disconnectedCallback(){var e,i;At(this,Cs,bd).call(this),(i=(e=ce(this,Ht))==null?void 0:e.unassociateElement)==null||i.call(e,this),Ti(this,Ht,null),this.shadowRoot.removeEventListener("focusin",ce(this,Ss)),this.shadowRoot.removeEventListener("focusout",ce(this,ws)),hr(this.container,ce(this,Is))}updatePointerBar(e){var i;(i=ce(this,kt).pointer)==null||i.style.setProperty("width",`${this.getPointerRatio(e)*100}%`)}updateBar(){var e,i;const a=this.range.valueAsNumber*100;(e=ce(this,kt).progress)==null||e.style.setProperty("width",`${a}%`),(i=ce(this,kt).thumb)==null||i.style.setProperty("left",`${a}%`)}updateSegments(e){const i=this.shadowRoot.querySelector("#segments-clipping");if(i.textContent="",this.container.classList.toggle("segments",!!(e!=null&&e.length)),!(e!=null&&e.length))return;const a=[...new Set([+this.range.min,...e.flatMap(n=>[n.start,n.end]),+this.range.max])];Ti(this,wo,[...a]);const r=a.pop();for(const[n,s]of a.entries()){const[o,l]=[n===0,n===a.length-1],u=o?"calc(var(--segments-gap) / -1)":`${s*100}%`,m=`calc(${((l?r:a[n+1])-s)*100}%${o||l?"":" - var(--segments-gap)"})`,h=ke.createElementNS("http://www.w3.org/2000/svg","rect"),d=Iu(this.shadowRoot,`#segments-clipping rect:nth-child(${n+1})`);d.style.setProperty("x",u),d.style.setProperty("width",m),i.append(h)}}getPointerRatio(e){return dg(e.clientX,e.clientY,ce(this,As).getBoundingClientRect(),ce(this,ks).getBoundingClientRect())}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":At(this,Ad,fv).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":At(this,gd,mv).call(this,e);break;case"pointerdown":At(this,Io,Fu).call(this,e);break;case"pointerup":At(this,yd,pv).call(this);break;case"pointerleave":At(this,Td,vv).call(this);break}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}Ht=new WeakMap;nl=new WeakMap;As=new WeakMap;ks=new WeakMap;kt=new WeakMap;wo=new WeakMap;Ss=new WeakMap;ws=new WeakMap;Is=new WeakMap;Wu=new WeakSet;hv=function(t){const e=ce(this,kt).activeSegment;if(!e)return;const i=this.getPointerRatio(t),r=`#segments-clipping rect:nth-child(${ce(this,wo).findIndex((n,s,o)=>{const l=o[s+1];return l!=null&&i>=n&&i<=l})+1})`;(e.selectorText!=r||!e.style.transform)&&(e.selectorText=r,e.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))};Rs=new WeakSet;_d=function(){this.hasAttribute("disabled")||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))};Cs=new WeakSet;bd=function(){var t,e;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),(t=E.window)==null||t.removeEventListener("pointerup",this),(e=E.window)==null||e.removeEventListener("pointermove",this)};Io=new WeakSet;Fu=function(t){var e;Ti(this,nl,t.composedPath().includes(this.range)),(e=E.window)==null||e.addEventListener("pointerup",this)};gd=new WeakSet;mv=function(t){var e;t.pointerType!=="mouse"&&At(this,Io,Fu).call(this,t),this.addEventListener("pointerleave",this),(e=E.window)==null||e.addEventListener("pointermove",this)};yd=new WeakSet;pv=function(){var t;(t=E.window)==null||t.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")};Td=new WeakSet;vv=function(){var t,e;this.removeEventListener("pointerleave",this),(t=E.window)==null||t.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),(e=ce(this,kt).activeSegment)==null||e.style.removeProperty("transform")};Ad=new WeakSet;fv=function(t){t.pointerType==="pen"&&t.buttons===0||(this.toggleAttribute("dragging",t.buttons===1||t.pointerType!=="mouse"),this.updatePointerBar(t),At(this,Wu,hv).call(this,t),this.dragging&&(t.pointerType!=="mouse"||!ce(this,nl))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(t),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))))};br.shadowRootOptions={mode:"open"};br.getTemplateHTML=f1;br.getContainerTemplateHTML=E1;E.customElements.get("media-chrome-range")||E.customElements.define("media-chrome-range",br);var Ev=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},qn=(t,e,i)=>(Ev(t,e,"read from private field"),i?i.call(t):e.get(t)),_1=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Yn=(t,e,i,a)=>(Ev(t,e,"write to private field"),e.set(t,i),i),Bt;function b1(t){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `}class Ku extends E.HTMLElement{constructor(){if(super(),_1(this,Bt,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=nt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[Q.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===Q.MEDIA_CONTROLLER&&(i&&((n=(r=qn(this,Bt))==null?void 0:r.unassociateElement)==null||n.call(r,this),Yn(this,Bt,null)),a&&this.isConnected&&(Yn(this,Bt,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=qn(this,Bt))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var e,i,a;const r=this.getAttribute(Q.MEDIA_CONTROLLER);r&&(Yn(this,Bt,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(a=(i=qn(this,Bt))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=qn(this,Bt))==null?void 0:e.unassociateElement)==null||i.call(e,this),Yn(this,Bt,null)}}Bt=new WeakMap;Ku.shadowRootOptions={mode:"open"};Ku.getTemplateHTML=b1;E.customElements.get("media-control-bar")||E.customElements.define("media-control-bar",Ku);var _v=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Gn=(t,e,i)=>(_v(t,e,"read from private field"),i?i.call(t):e.get(t)),g1=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Qn=(t,e,i,a)=>(_v(t,e,"write to private field"),e.set(t,i),i),Wt;function y1(t,e={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(t,e)}
  `}function T1(t,e){return`
    <slot></slot>
  `}class Pi extends E.HTMLElement{constructor(){if(super(),g1(this,Wt,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=nt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[Q.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===Q.MEDIA_CONTROLLER&&(i&&((n=(r=Gn(this,Wt))==null?void 0:r.unassociateElement)==null||n.call(r,this),Qn(this,Wt,null)),a&&this.isConnected&&(Qn(this,Wt,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=Gn(this,Wt))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var e,i,a;const{style:r}=Ie(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);const n=this.getAttribute(Q.MEDIA_CONTROLLER);n&&(Qn(this,Wt,(e=this.getRootNode())==null?void 0:e.getElementById(n)),(a=(i=Gn(this,Wt))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=Gn(this,Wt))==null?void 0:e.unassociateElement)==null||i.call(e,this),Qn(this,Wt,null)}}Wt=new WeakMap;Pi.shadowRootOptions={mode:"open"};Pi.getTemplateHTML=y1;Pi.getSlotTemplateHTML=T1;E.customElements.get("media-text-display")||E.customElements.define("media-text-display",Pi);var bv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},xh=(t,e,i)=>(bv(t,e,"read from private field"),i?i.call(t):e.get(t)),A1=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},k1=(t,e,i,a)=>(bv(t,e,"write to private field"),e.set(t,i),i),Qr;function S1(t,e){return`
    <slot>${Oi(e.mediaDuration)}</slot>
  `}class gv extends Pi{constructor(){var e;super(),A1(this,Qr,void 0),k1(this,Qr,this.shadowRoot.querySelector("slot")),xh(this,Qr).textContent=Oi((e=this.mediaDuration)!=null?e:0)}static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_DURATION]}attributeChangedCallback(e,i,a){e===c.MEDIA_DURATION&&(xh(this,Qr).textContent=Oi(+a)),super.attributeChangedCallback(e,i,a)}get mediaDuration(){return se(this,c.MEDIA_DURATION)}set mediaDuration(e){pe(this,c.MEDIA_DURATION,e)}}Qr=new WeakMap;gv.getSlotTemplateHTML=S1;E.customElements.get("media-duration-display")||E.customElements.define("media-duration-display",gv);const w1={2:D("Network Error"),3:D("Decode Error"),4:D("Source Not Supported"),5:D("Encryption Error")},I1={2:D("A network error caused the media download to fail."),3:D("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:D("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:D("The media is encrypted and there are no keys to decrypt it.")},yv=t=>{var e,i;return t.code===1?null:{title:(e=w1[t.code])!=null?e:`Error ${t.code}`,message:(i=I1[t.code])!=null?i:t.message}};var Tv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},R1=(t,e,i)=>(Tv(t,e,"read from private field"),i?i.call(t):e.get(t)),C1=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},L1=(t,e,i,a)=>(Tv(t,e,"write to private field"),e.set(t,i),i),Ls;function D1(t){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${t.mediaerrorcode}" id="content">
      ${Av({code:+t.mediaerrorcode,message:t.mediaerrormessage})}
    </slot>
  `}function M1(t){return t.code&&yv(t)!==null}function Av(t){var e;const{title:i,message:a}=(e=yv(t))!=null?e:{};let r="";return i&&(r+=`<slot name="error-${t.code}-title"><h3>${i}</h3></slot>`),a&&(r+=`<slot name="error-${t.code}-message"><p>${a}</p></slot>`),r}const Oh=[c.MEDIA_ERROR_CODE,c.MEDIA_ERROR_MESSAGE];class sl extends _r{constructor(){super(...arguments),C1(this,Ls,null)}static get observedAttributes(){return[...super.observedAttributes,...Oh]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,i,a){var r;if(super.attributeChangedCallback(e,i,a),!Oh.includes(e))return;const n=(r=this.mediaError)!=null?r:{code:this.mediaErrorCode,message:this.mediaErrorMessage};this.open=M1(n),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(n))}get mediaError(){return R1(this,Ls)}set mediaError(e){L1(this,Ls,e)}get mediaErrorCode(){return se(this,"mediaerrorcode")}set mediaErrorCode(e){pe(this,"mediaerrorcode",e)}get mediaErrorMessage(){return oe(this,"mediaerrormessage")}set mediaErrorMessage(e){le(this,"mediaerrormessage",e)}}Ls=new WeakMap;sl.getSlotTemplateHTML=D1;sl.formatErrorMessage=Av;E.customElements.get("media-error-dialog")||E.customElements.define("media-error-dialog",sl);var kv=sl,x1=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},bi=(t,e,i)=>(x1(t,e,"read from private field"),i?i.call(t):e.get(t)),Nh=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},xa,Oa;function O1(t){return`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        background: rgb(20 20 30 / .8);
        backdrop-filter: blur(10px);
      }

      #content {
        display: block;
        width: clamp(400px, 40vw, 700px);
        max-width: 90vw;
        text-align: left;
      }

      h2 {
        margin: 0 0 1.5rem 0;
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
      }

      .shortcuts-table {
        width: 100%;
        border-collapse: collapse;
      }

      .shortcuts-table tr {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .shortcuts-table tr:last-child {
        border-bottom: none;
      }

      .shortcuts-table td {
        padding: 0.75rem 0.5rem;
      }

      .shortcuts-table td:first-child {
        text-align: right;
        padding-right: 1rem;
        width: 40%;
        min-width: 120px;
      }

      .shortcuts-table td:last-child {
        padding-left: 1rem;
      }

      .key {
        display: inline-block;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        padding: 0.25rem 0.5rem;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        font-weight: 500;
        min-width: 1.5rem;
        text-align: center;
        margin: 0 0.2rem;
      }

      .description {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.95rem;
      }

      .key-combo {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.3rem;
      }

      .key-separator {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.9rem;
      }
    </style>
    <slot id="content">
      ${N1()}
    </slot>
  `}function N1(){return`
    <h2>Keyboard Shortcuts</h2>
    <table class="shortcuts-table">${[{keys:["Space","k"],description:"Toggle Playback"},{keys:["m"],description:"Toggle mute"},{keys:["f"],description:"Toggle fullscreen"},{keys:["c"],description:"Toggle captions or subtitles, if available"},{keys:["p"],description:"Toggle Picture in Picture"},{keys:["←","j"],description:"Seek back 10s"},{keys:["→","l"],description:"Seek forward 10s"},{keys:["↑"],description:"Turn volume up"},{keys:["↓"],description:"Turn volume down"},{keys:["< (SHIFT+,)"],description:"Decrease playback rate"},{keys:["> (SHIFT+.)"],description:"Increase playback rate"}].map(({keys:i,description:a})=>`
      <tr>
        <td>
          <div class="key-combo">${i.map((n,s)=>s>0?`<span class="key-separator">or</span><span class="key">${n}</span>`:`<span class="key">${n}</span>`).join("")}</div>
        </td>
        <td class="description">${a}</td>
      </tr>
    `).join("")}</table>
  `}class Sv extends _r{constructor(){super(...arguments),Nh(this,xa,e=>{var i;if(!this.open)return;const a=(i=this.shadowRoot)==null?void 0:i.querySelector("#content");if(!a)return;const r=e.composedPath(),n=r[0]===this||r.includes(this),s=r.includes(a);n&&!s&&(this.open=!1)}),Nh(this,Oa,e=>{if(!this.open)return;const i=e.shiftKey&&(e.key==="/"||e.key==="?");(e.key==="Escape"||i)&&!e.ctrlKey&&!e.altKey&&!e.metaKey&&(this.open=!1,e.preventDefault(),e.stopPropagation())})}connectedCallback(){super.connectedCallback(),this.open&&(this.addEventListener("click",bi(this,xa)),document.addEventListener("keydown",bi(this,Oa)))}disconnectedCallback(){this.removeEventListener("click",bi(this,xa)),document.removeEventListener("keydown",bi(this,Oa))}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e==="open"&&(this.open?(this.addEventListener("click",bi(this,xa)),document.addEventListener("keydown",bi(this,Oa))):(this.removeEventListener("click",bi(this,xa)),document.removeEventListener("keydown",bi(this,Oa))))}}xa=new WeakMap;Oa=new WeakMap;Sv.getSlotTemplateHTML=O1;E.customElements.get("media-keyboard-shortcuts-dialog")||E.customElements.define("media-keyboard-shortcuts-dialog",Sv);var wv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},P1=(t,e,i)=>(wv(t,e,"read from private field"),i?i.call(t):e.get(t)),$1=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},U1=(t,e,i,a)=>(wv(t,e,"write to private field"),e.set(t,i),i),Ds;const H1=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,B1=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`;function W1(t){return`
    <style>
      :host([${c.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${c.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${c.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${c.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${H1}</slot>
      <slot name="exit">${B1}</slot>
    </slot>
  `}function F1(){return`
    <slot name="tooltip-enter">${D("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${D("Exit fullscreen mode")}</slot>
  `}const Ph=t=>{const e=t.mediaIsFullscreen?D("exit fullscreen mode"):D("enter fullscreen mode");t.setAttribute("aria-label",e)};class Vu extends xe{constructor(){super(...arguments),$1(this,Ds,null)}static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_IS_FULLSCREEN,c.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Ph(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===c.MEDIA_IS_FULLSCREEN&&Ph(this)}get mediaFullscreenUnavailable(){return oe(this,c.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){le(this,c.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return F(this,c.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){K(this,c.MEDIA_IS_FULLSCREEN,e)}handleClick(e){U1(this,Ds,e);const i=P1(this,Ds)instanceof PointerEvent,a=this.mediaIsFullscreen?new E.CustomEvent(R.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0}):new E.CustomEvent(R.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0,detail:i});this.dispatchEvent(a)}}Ds=new WeakMap;Vu.getSlotTemplateHTML=W1;Vu.getTooltipContentHTML=F1;E.customElements.get("media-fullscreen-button")||E.customElements.define("media-fullscreen-button",Vu);const{MEDIA_TIME_IS_LIVE:Ms,MEDIA_PAUSED:un}=c,{MEDIA_SEEK_TO_LIVE_REQUEST:K1,MEDIA_PLAY_REQUEST:V1}=R,q1='<svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg>';function Y1(t){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${Ms}]:not([${un}])) slot[name=indicator] > *,
      :host([${Ms}]:not([${un}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${Ms}]:not([${un}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator">${q1}</slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${D("live")}</slot>
  `}const $h=t=>{var e;const i=t.mediaPaused||!t.mediaTimeIsLive,a=D(i?"seek to live":"playing live");t.setAttribute("aria-label",a);const r=(e=t.shadowRoot)==null?void 0:e.querySelector('slot[name="text"]');r&&(r.textContent=D("live")),i?t.removeAttribute("aria-disabled"):t.setAttribute("aria-disabled","true")};class Iv extends xe{static get observedAttributes(){return[...super.observedAttributes,Ms,un]}connectedCallback(){super.connectedCallback(),$h(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),$h(this)}get mediaPaused(){return F(this,c.MEDIA_PAUSED)}set mediaPaused(e){K(this,c.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return F(this,c.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){K(this,c.MEDIA_TIME_IS_LIVE,e)}handleClick(){!this.mediaPaused&&this.mediaTimeIsLive||(this.dispatchEvent(new E.CustomEvent(K1,{composed:!0,bubbles:!0})),this.hasAttribute(un)&&this.dispatchEvent(new E.CustomEvent(V1,{composed:!0,bubbles:!0})))}}Iv.getSlotTemplateHTML=Y1;E.customElements.get("media-live-button")||E.customElements.define("media-live-button",Iv);var Rv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Ir=(t,e,i)=>(Rv(t,e,"read from private field"),i?i.call(t):e.get(t)),Uh=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Rr=(t,e,i,a)=>(Rv(t,e,"write to private field"),e.set(t,i),i),Ft,xs;const zn={LOADING_DELAY:"loadingdelay",NO_AUTOHIDE:"noautohide"},Cv=500,G1=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;function Q1(t){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, ${Cv}ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${c.MEDIA_LOADING}]:not([${c.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${c.MEDIA_LOADING}]:not([${c.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${c.MEDIA_LOADING}]:not([${c.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${G1}</slot>
    <div id="status" role="status" aria-live="polite">${D("media loading")}</div>
  `}class qu extends E.HTMLElement{constructor(){if(super(),Uh(this,Ft,void 0),Uh(this,xs,Cv),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=nt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[Q.MEDIA_CONTROLLER,c.MEDIA_PAUSED,c.MEDIA_LOADING,zn.LOADING_DELAY]}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===zn.LOADING_DELAY&&i!==a?this.loadingDelay=Number(a):e===Q.MEDIA_CONTROLLER&&(i&&((n=(r=Ir(this,Ft))==null?void 0:r.unassociateElement)==null||n.call(r,this),Rr(this,Ft,null)),a&&this.isConnected&&(Rr(this,Ft,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=Ir(this,Ft))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var e,i,a;const r=this.getAttribute(Q.MEDIA_CONTROLLER);r&&(Rr(this,Ft,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(a=(i=Ir(this,Ft))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=Ir(this,Ft))==null?void 0:e.unassociateElement)==null||i.call(e,this),Rr(this,Ft,null)}get loadingDelay(){return Ir(this,xs)}set loadingDelay(e){Rr(this,xs,e);const{style:i}=Ie(this.shadowRoot,":host");i.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return F(this,c.MEDIA_PAUSED)}set mediaPaused(e){K(this,c.MEDIA_PAUSED,e)}get mediaLoading(){return F(this,c.MEDIA_LOADING)}set mediaLoading(e){K(this,c.MEDIA_LOADING,e)}get mediaController(){return oe(this,Q.MEDIA_CONTROLLER)}set mediaController(e){le(this,Q.MEDIA_CONTROLLER,e)}get noAutohide(){return F(this,zn.NO_AUTOHIDE)}set noAutohide(e){K(this,zn.NO_AUTOHIDE,e)}}Ft=new WeakMap;xs=new WeakMap;qu.shadowRootOptions={mode:"open"};qu.getTemplateHTML=Q1;E.customElements.get("media-loading-indicator")||E.customElements.define("media-loading-indicator",qu);const z1=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,Hh=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,Z1=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`;function j1(t){return`
    <style>
      :host(:not([${c.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${c.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${c.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${c.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${c.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${c.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${c.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${z1}</slot>
      <slot name="low">${Hh}</slot>
      <slot name="medium">${Hh}</slot>
      <slot name="high">${Z1}</slot>
    </slot>
  `}function X1(){return`
    <slot name="tooltip-mute">${D("Mute")}</slot>
    <slot name="tooltip-unmute">${D("Unmute")}</slot>
  `}const Bh=t=>{const e=t.mediaVolumeLevel==="off",i=D(e?"unmute":"mute");t.setAttribute("aria-label",i)};class Yu extends xe{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),Bh(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===c.MEDIA_VOLUME_LEVEL&&Bh(this)}get mediaVolumeLevel(){return oe(this,c.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){le(this,c.MEDIA_VOLUME_LEVEL,e)}handleClick(){const e=this.mediaVolumeLevel==="off"?R.MEDIA_UNMUTE_REQUEST:R.MEDIA_MUTE_REQUEST;this.dispatchEvent(new E.CustomEvent(e,{composed:!0,bubbles:!0}))}}Yu.getSlotTemplateHTML=j1;Yu.getTooltipContentHTML=X1;E.customElements.get("media-mute-button")||E.customElements.define("media-mute-button",Yu);const Wh=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`;function J1(t){return`
    <style>
      :host([${c.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${c.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${c.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${c.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${Wh}</slot>
      <slot name="exit">${Wh}</slot>
    </slot>
  `}function ey(){return`
    <slot name="tooltip-enter">${D("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${D("Exit picture in picture mode")}</slot>
  `}const Fh=t=>{const e=t.mediaIsPip?D("exit picture in picture mode"):D("enter picture in picture mode");t.setAttribute("aria-label",e)};class Gu extends xe{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_IS_PIP,c.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Fh(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===c.MEDIA_IS_PIP&&Fh(this)}get mediaPipUnavailable(){return oe(this,c.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){le(this,c.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return F(this,c.MEDIA_IS_PIP)}set mediaIsPip(e){K(this,c.MEDIA_IS_PIP,e)}handleClick(){const e=this.mediaIsPip?R.MEDIA_EXIT_PIP_REQUEST:R.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new E.CustomEvent(e,{composed:!0,bubbles:!0}))}}Gu.getSlotTemplateHTML=J1;Gu.getTooltipContentHTML=ey;E.customElements.get("media-pip-button")||E.customElements.define("media-pip-button",Gu);var ty=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Ta=(t,e,i)=>(ty(t,e,"read from private field"),i?i.call(t):e.get(t)),iy=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ai;const Rl={RATES:"rates"},Lv=[1,1.2,1.5,1.7,2],Xa=1;function ay(t){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${t.mediaplaybackrate||Xa}x</slot>
  `}function ry(){return D("Playback rate")}class Qu extends xe{constructor(){var e;super(),iy(this,Ai,new Lu(this,Rl.RATES,{defaultValue:Lv})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${(e=this.mediaPlaybackRate)!=null?e:Xa}x`}static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_PLAYBACK_RATE,Rl.RATES]}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),e===Rl.RATES&&(Ta(this,Ai).value=a),e===c.MEDIA_PLAYBACK_RATE){const r=a?+a:Number.NaN,n=Number.isNaN(r)?Xa:r;this.container.innerHTML=`${n}x`,this.setAttribute("aria-label",D("Playback rate {playbackRate}",{playbackRate:n}))}}get rates(){return Ta(this,Ai)}set rates(e){e?Array.isArray(e)?Ta(this,Ai).value=e.join(" "):typeof e=="string"&&(Ta(this,Ai).value=e):Ta(this,Ai).value=""}get mediaPlaybackRate(){return se(this,c.MEDIA_PLAYBACK_RATE,Xa)}set mediaPlaybackRate(e){pe(this,c.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,i;const a=Array.from(Ta(this,Ai).values(),s=>+s).sort((s,o)=>s-o),r=(i=(e=a.find(s=>s>this.mediaPlaybackRate))!=null?e:a[0])!=null?i:Xa,n=new E.CustomEvent(R.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:r});this.dispatchEvent(n)}}Ai=new WeakMap;Qu.getSlotTemplateHTML=ay;Qu.getTooltipContentHTML=ry;E.customElements.get("media-playback-rate-button")||E.customElements.define("media-playback-rate-button",Qu);const ny=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,sy=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`;function oy(t){return`
    <style>
      :host([${c.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${c.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${c.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${c.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${ny}</slot>
      <slot name="pause">${sy}</slot>
    </slot>
  `}function ly(){return`
    <slot name="tooltip-play">${D("Play")}</slot>
    <slot name="tooltip-pause">${D("Pause")}</slot>
  `}const Kh=t=>{const e=t.mediaPaused?D("play"):D("pause");t.setAttribute("aria-label",e)};class zu extends xe{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_PAUSED,c.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),Kh(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),(e===c.MEDIA_PAUSED||e===c.MEDIA_LANG)&&Kh(this)}get mediaPaused(){return F(this,c.MEDIA_PAUSED)}set mediaPaused(e){K(this,c.MEDIA_PAUSED,e)}handleClick(){const e=this.mediaPaused?R.MEDIA_PLAY_REQUEST:R.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new E.CustomEvent(e,{composed:!0,bubbles:!0}))}}zu.getSlotTemplateHTML=oy;zu.getTooltipContentHTML=ly;E.customElements.get("media-play-button")||E.customElements.define("media-play-button",zu);const Dt={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"};function dy(t){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `}const uy=t=>{t.style.removeProperty("background-image")},cy=(t,e)=>{t.style["background-image"]=`url('${e}')`};class Zu extends E.HTMLElement{static get observedAttributes(){return[Dt.PLACEHOLDER_SRC,Dt.SRC]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=nt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,i,a){e===Dt.SRC&&(a==null?this.image.removeAttribute(Dt.SRC):this.image.setAttribute(Dt.SRC,a)),e===Dt.PLACEHOLDER_SRC&&(a==null?uy(this.image):cy(this.image,a))}get placeholderSrc(){return oe(this,Dt.PLACEHOLDER_SRC)}set placeholderSrc(e){le(this,Dt.SRC,e)}get src(){return oe(this,Dt.SRC)}set src(e){le(this,Dt.SRC,e)}}Zu.shadowRootOptions={mode:"open"};Zu.getTemplateHTML=dy;E.customElements.get("media-poster-image")||E.customElements.define("media-poster-image",Zu);var Dv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},hy=(t,e,i)=>(Dv(t,e,"read from private field"),i?i.call(t):e.get(t)),my=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},py=(t,e,i,a)=>(Dv(t,e,"write to private field"),e.set(t,i),i),Os;class vy extends Pi{constructor(){super(),my(this,Os,void 0),py(this,Os,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_PREVIEW_CHAPTER,c.MEDIA_LANG]}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),(e===c.MEDIA_PREVIEW_CHAPTER||e===c.MEDIA_LANG)&&a!==i&&a!=null)if(hy(this,Os).textContent=a,a!==""){const r=D("chapter: {chapterName}",{chapterName:a});this.setAttribute("aria-valuetext",r)}else this.removeAttribute("aria-valuetext")}get mediaPreviewChapter(){return oe(this,c.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){le(this,c.MEDIA_PREVIEW_CHAPTER,e)}}Os=new WeakMap;E.customElements.get("media-preview-chapter-display")||E.customElements.define("media-preview-chapter-display",vy);var Mv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Zn=(t,e,i)=>(Mv(t,e,"read from private field"),i?i.call(t):e.get(t)),fy=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},jn=(t,e,i,a)=>(Mv(t,e,"write to private field"),e.set(t,i),i),Kt;function Ey(t){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `}class ol extends E.HTMLElement{constructor(){if(super(),fy(this,Kt,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=nt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[Q.MEDIA_CONTROLLER,c.MEDIA_PREVIEW_IMAGE,c.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,i,a;const r=this.getAttribute(Q.MEDIA_CONTROLLER);r&&(jn(this,Kt,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(a=(i=Zn(this,Kt))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=Zn(this,Kt))==null?void 0:e.unassociateElement)==null||i.call(e,this),jn(this,Kt,null)}attributeChangedCallback(e,i,a){var r,n,s,o,l;[c.MEDIA_PREVIEW_IMAGE,c.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===Q.MEDIA_CONTROLLER&&(i&&((n=(r=Zn(this,Kt))==null?void 0:r.unassociateElement)==null||n.call(r,this),jn(this,Kt,null)),a&&this.isConnected&&(jn(this,Kt,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=Zn(this,Kt))==null?void 0:o.associateElement)==null||l.call(o,this)))}get mediaPreviewImage(){return oe(this,c.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){le(this,c.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){const e=this.getAttribute(c.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(i=>+i)}set mediaPreviewCoords(e){if(!e){this.removeAttribute(c.MEDIA_PREVIEW_COORDS);return}this.setAttribute(c.MEDIA_PREVIEW_COORDS,e.join(" "))}update(){const e=this.mediaPreviewCoords,i=this.mediaPreviewImage;if(!(e&&i))return;const[a,r,n,s]=e,o=i.split("#")[0],l=getComputedStyle(this),{maxWidth:u,maxHeight:p,minWidth:m,minHeight:h}=l,d=Math.min(parseInt(u)/n,parseInt(p)/s),v=Math.max(parseInt(m)/n,parseInt(h)/s),f=d<1,g=f?d:v>1?v:1,{style:_}=Ie(this.shadowRoot,":host"),T=Ie(this.shadowRoot,"img").style,b=this.shadowRoot.querySelector("img"),w=f?"min":"max";_.setProperty(`${w}-width`,"initial","important"),_.setProperty(`${w}-height`,"initial","important"),_.width=`${n*g}px`,_.height=`${s*g}px`;const L=()=>{T.width=`${this.imgWidth*g}px`,T.height=`${this.imgHeight*g}px`,T.display="block"};b.src!==o&&(b.onload=()=>{this.imgWidth=b.naturalWidth,this.imgHeight=b.naturalHeight,L()},b.src=o,L()),L(),T.transform=`translate(-${a*g}px, -${r*g}px)`}}Kt=new WeakMap;ol.shadowRootOptions={mode:"open"};ol.getTemplateHTML=Ey;E.customElements.get("media-preview-thumbnail")||E.customElements.define("media-preview-thumbnail",ol);var Vh=ol,xv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},qh=(t,e,i)=>(xv(t,e,"read from private field"),i?i.call(t):e.get(t)),_y=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},by=(t,e,i,a)=>(xv(t,e,"write to private field"),e.set(t,i),i),zr;class gy extends Pi{constructor(){super(),_y(this,zr,void 0),by(this,zr,this.shadowRoot.querySelector("slot")),qh(this,zr).textContent=Oi(0)}static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===c.MEDIA_PREVIEW_TIME&&a!=null&&(qh(this,zr).textContent=Oi(parseFloat(a)))}get mediaPreviewTime(){return se(this,c.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){pe(this,c.MEDIA_PREVIEW_TIME,e)}}zr=new WeakMap;E.customElements.get("media-preview-time-display")||E.customElements.define("media-preview-time-display",gy);const Aa={SEEK_OFFSET:"seekoffset"},Cl=30,yy=t=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${t}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`;function Ty(t,e){return`
    <slot name="icon">${yy(e.seekOffset)}</slot>
  `}function Ay(){return D("Seek backward")}const ky=0;class ju extends xe{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_CURRENT_TIME,Aa.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=se(this,Aa.SEEK_OFFSET,Cl)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===Aa.SEEK_OFFSET&&(this.seekOffset=se(this,Aa.SEEK_OFFSET,Cl))}get seekOffset(){return se(this,Aa.SEEK_OFFSET,Cl)}set seekOffset(e){pe(this,Aa.SEEK_OFFSET,e),this.setAttribute("aria-label",D("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),Hp(Bp(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return se(this,c.MEDIA_CURRENT_TIME,ky)}set mediaCurrentTime(e){pe(this,c.MEDIA_CURRENT_TIME,e)}handleClick(){const e=Math.max(this.mediaCurrentTime-this.seekOffset,0),i=new E.CustomEvent(R.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}}ju.getSlotTemplateHTML=Ty;ju.getTooltipContentHTML=Ay;E.customElements.get("media-seek-backward-button")||E.customElements.define("media-seek-backward-button",ju);const ka={SEEK_OFFSET:"seekoffset"},Ll=30,Sy=t=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${t}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`;function wy(t,e){return`
    <slot name="icon">${Sy(e.seekOffset)}</slot>
  `}function Iy(){return D("Seek forward")}const Ry=0;class Xu extends xe{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_CURRENT_TIME,ka.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=se(this,ka.SEEK_OFFSET,Ll)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===ka.SEEK_OFFSET&&(this.seekOffset=se(this,ka.SEEK_OFFSET,Ll))}get seekOffset(){return se(this,ka.SEEK_OFFSET,Ll)}set seekOffset(e){pe(this,ka.SEEK_OFFSET,e),this.setAttribute("aria-label",D("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),Hp(Bp(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return se(this,c.MEDIA_CURRENT_TIME,Ry)}set mediaCurrentTime(e){pe(this,c.MEDIA_CURRENT_TIME,e)}handleClick(){const e=this.mediaCurrentTime+this.seekOffset,i=new E.CustomEvent(R.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}}Xu.getSlotTemplateHTML=wy;Xu.getTooltipContentHTML=Iy;E.customElements.get("media-seek-forward-button")||E.customElements.define("media-seek-forward-button",Xu);var Ov=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Dl=(t,e,i)=>(Ov(t,e,"read from private field"),i?i.call(t):e.get(t)),Cy=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ly=(t,e,i,a)=>(Ov(t,e,"write to private field"),e.set(t,i),i),Na;const qi={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},Yh=[...Object.values(qi),c.MEDIA_CURRENT_TIME,c.MEDIA_DURATION,c.MEDIA_SEEKABLE],Gh=["Enter"," "],Dy="&nbsp;/&nbsp;",kd=(t,{timesSep:e=Dy}={})=>{var i,a;const r=(i=t.mediaCurrentTime)!=null?i:0,[,n]=(a=t.mediaSeekable)!=null?a:[];let s=0;Number.isFinite(t.mediaDuration)?s=t.mediaDuration:Number.isFinite(n)&&(s=n);const o=t.remaining?Oi(0-(s-r)):Oi(r);return t.showDuration?`${o}${e}${Oi(s)}`:o},My="video not loaded, unknown time.",xy=t=>{var e;const i=t.mediaCurrentTime,[,a]=(e=t.mediaSeekable)!=null?e:[];let r=null;if(Number.isFinite(t.mediaDuration)?r=t.mediaDuration:Number.isFinite(a)&&(r=a),i==null||r===null){t.setAttribute("aria-valuetext",My);return}const n=t.remaining?ln(0-(r-i)):ln(i);if(!t.showDuration){t.setAttribute("aria-valuetext",n);return}const s=ln(r),o=`${n} of ${s}`;t.setAttribute("aria-valuetext",o)};function Oy(t,e){return`
    <slot>${kd(e)}</slot>
  `}class Nv extends Pi{constructor(){super(),Cy(this,Na,void 0),Ly(this,Na,this.shadowRoot.querySelector("slot")),Dl(this,Na).innerHTML=`${kd(this)}`}static get observedAttributes(){return[...super.observedAttributes,...Yh,"disabled"]}connectedCallback(){const{style:e}=Ie(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",D("playback time"));const i=a=>{const{key:r}=a;if(!Gh.includes(r)){this.removeEventListener("keyup",i);return}this.toggleTimeDisplay()};this.addEventListener("keydown",a=>{const{metaKey:r,altKey:n,key:s}=a;if(r||n||!Gh.includes(s)){this.removeEventListener("keyup",i);return}this.addEventListener("keyup",i)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(e,i,a){Yh.includes(e)?this.update():e==="disabled"&&a!==i&&(a==null?this.enable():this.disable()),super.attributeChangedCallback(e,i,a)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return F(this,qi.REMAINING)}set remaining(e){K(this,qi.REMAINING,e)}get showDuration(){return F(this,qi.SHOW_DURATION)}set showDuration(e){K(this,qi.SHOW_DURATION,e)}get noToggle(){return F(this,qi.NO_TOGGLE)}set noToggle(e){K(this,qi.NO_TOGGLE,e)}get mediaDuration(){return se(this,c.MEDIA_DURATION)}set mediaDuration(e){pe(this,c.MEDIA_DURATION,e)}get mediaCurrentTime(){return se(this,c.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){pe(this,c.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){const e=this.getAttribute(c.MEDIA_SEEKABLE);if(e)return e.split(":").map(i=>+i)}set mediaSeekable(e){if(e==null){this.removeAttribute(c.MEDIA_SEEKABLE);return}this.setAttribute(c.MEDIA_SEEKABLE,e.join(":"))}update(){const e=kd(this);xy(this),e!==Dl(this,Na).innerHTML&&(Dl(this,Na).innerHTML=e)}}Na=new WeakMap;Nv.getSlotTemplateHTML=Oy;E.customElements.get("media-time-display")||E.customElements.define("media-time-display",Nv);var Pv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Le=(t,e,i)=>(Pv(t,e,"read from private field"),i?i.call(t):e.get(t)),Mt=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Je=(t,e,i,a)=>(Pv(t,e,"write to private field"),e.set(t,i),i),Ny=(t,e,i,a)=>({set _(r){Je(t,e,r)},get _(){return Le(t,e,a)}}),Pa,Ns,$a,Zr,Ps,$s,Us,Ua,Yi,Hs;class Py{constructor(e,i,a){Mt(this,Pa,void 0),Mt(this,Ns,void 0),Mt(this,$a,void 0),Mt(this,Zr,void 0),Mt(this,Ps,void 0),Mt(this,$s,void 0),Mt(this,Us,void 0),Mt(this,Ua,void 0),Mt(this,Yi,0),Mt(this,Hs,(r=performance.now())=>{Je(this,Yi,requestAnimationFrame(Le(this,Hs))),Je(this,Zr,performance.now()-Le(this,$a));const n=1e3/this.fps;if(Le(this,Zr)>n){Je(this,$a,r-Le(this,Zr)%n);const s=1e3/((r-Le(this,Ns))/++Ny(this,Ps)._),o=(r-Le(this,$s))/1e3/this.duration;let l=Le(this,Us)+o*this.playbackRate;l-Le(this,Pa).valueAsNumber>0?Je(this,Ua,this.playbackRate/this.duration/s):(Je(this,Ua,.995*Le(this,Ua)),l=Le(this,Pa).valueAsNumber+Le(this,Ua)),this.callback(l)}}),Je(this,Pa,e),this.callback=i,this.fps=a}start(){Le(this,Yi)===0&&(Je(this,$a,performance.now()),Je(this,Ns,Le(this,$a)),Je(this,Ps,0),Le(this,Hs).call(this))}stop(){Le(this,Yi)!==0&&(cancelAnimationFrame(Le(this,Yi)),Je(this,Yi,0))}update({start:e,duration:i,playbackRate:a}){const r=e-Le(this,Pa).valueAsNumber,n=Math.abs(i-this.duration);(r>0||r<-.03||n>=.5)&&this.callback(e),Je(this,Us,e),Je(this,$s,performance.now()),this.duration=i,this.playbackRate=a}}Pa=new WeakMap;Ns=new WeakMap;$a=new WeakMap;Zr=new WeakMap;Ps=new WeakMap;$s=new WeakMap;Us=new WeakMap;Ua=new WeakMap;Yi=new WeakMap;Hs=new WeakMap;var Ju=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ve=(t,e,i)=>(Ju(t,e,"read from private field"),i?i.call(t):e.get(t)),Se=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ct=(t,e,i,a)=>(Ju(t,e,"write to private field"),e.set(t,i),i),He=(t,e,i)=>(Ju(t,e,"access private method"),i),Ha,ca,Ro,cn,Co,Bs,Sn,wn,Ba,Wa,Fa,jr,ec,$v,Sd,Lo,tc,Do,ic,Mo,ac,wd,Uv,In,xo,Id,Hv;const $y="video not loaded, unknown time.",Uy=t=>{const e=t.range,i=ln(+Bv(t)),a=ln(+t.mediaSeekableEnd),r=i&&a?`${i} of ${a}`:$y;e.setAttribute("aria-valuetext",r)};function Hy(t){return`
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${c.MEDIA_PREVIEW_IMAGE}], [${c.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${c.MEDIA_PREVIEW_IMAGE}], [${c.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${c.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${c.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${c.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${c.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${c.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${c.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${c.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${c.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${c.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${c.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${c.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${c.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${Vh.shadowRootOptions.mode}">
            ${Vh.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `}const Xn=(t,e=t.mediaCurrentTime)=>{const i=Number.isFinite(t.mediaSeekableStart)?t.mediaSeekableStart:0,a=Number.isFinite(t.mediaDuration)?t.mediaDuration:t.mediaSeekableEnd;if(Number.isNaN(a))return 0;const r=(e-i)/(a-i);return Math.max(0,Math.min(r,1))},Bv=(t,e=t.range.valueAsNumber)=>{const i=Number.isFinite(t.mediaSeekableStart)?t.mediaSeekableStart:0,a=Number.isFinite(t.mediaDuration)?t.mediaDuration:t.mediaSeekableEnd;return Number.isNaN(a)?0:e*(a-i)+i};class rc extends br{constructor(){super(),Se(this,Fa),Se(this,ec),Se(this,Lo),Se(this,Do),Se(this,Mo),Se(this,wd),Se(this,In),Se(this,Id),Se(this,Ha,void 0),Se(this,ca,void 0),Se(this,Ro,void 0),Se(this,cn,void 0),Se(this,Co,void 0),Se(this,Bs,void 0),Se(this,Sn,void 0),Se(this,wn,void 0),Se(this,Ba,void 0),Se(this,Wa,void 0),Se(this,Sd,a=>{this.dragging||(ku(a)&&(this.range.valueAsNumber=a),ve(this,Wa)||this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),ct(this,Ro,this.shadowRoot.querySelectorAll('[part~="box"]')),ct(this,Co,this.shadowRoot.querySelector('[part~="preview-box"]')),ct(this,Bs,this.shadowRoot.querySelector('[part~="current-box"]'));const i=getComputedStyle(this);ct(this,Sn,parseInt(i.getPropertyValue("--media-box-padding-left"))),ct(this,wn,parseInt(i.getPropertyValue("--media-box-padding-right"))),ct(this,ca,new Py(this.range,ve(this,Sd),60))}static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_PAUSED,c.MEDIA_DURATION,c.MEDIA_SEEKABLE,c.MEDIA_CURRENT_TIME,c.MEDIA_PREVIEW_IMAGE,c.MEDIA_PREVIEW_TIME,c.MEDIA_PREVIEW_CHAPTER,c.MEDIA_BUFFERED,c.MEDIA_PLAYBACK_RATE,c.MEDIA_LOADING,c.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",D("seek")),He(this,Fa,jr).call(this),ct(this,Ha,this.getRootNode()),(e=ve(this,Ha))==null||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),He(this,Fa,jr).call(this),(e=ve(this,Ha))==null||e.removeEventListener("transitionstart",this),ct(this,Ha,null)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),i!=a&&(e===c.MEDIA_CURRENT_TIME||e===c.MEDIA_PAUSED||e===c.MEDIA_ENDED||e===c.MEDIA_LOADING||e===c.MEDIA_DURATION||e===c.MEDIA_SEEKABLE?(ve(this,ca).update({start:Xn(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),He(this,Fa,jr).call(this),Uy(this)):e===c.MEDIA_BUFFERED&&this.updateBufferedBar(),(e===c.MEDIA_DURATION||e===c.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=ve(this,Ba),this.updateBar()))}get mediaChaptersCues(){return ve(this,Ba)}set mediaChaptersCues(e){var i;ct(this,Ba,e),this.updateSegments((i=ve(this,Ba))==null?void 0:i.map(a=>({start:Xn(this,a.startTime),end:Xn(this,a.endTime)})))}get mediaPaused(){return F(this,c.MEDIA_PAUSED)}set mediaPaused(e){K(this,c.MEDIA_PAUSED,e)}get mediaLoading(){return F(this,c.MEDIA_LOADING)}set mediaLoading(e){K(this,c.MEDIA_LOADING,e)}get mediaDuration(){return se(this,c.MEDIA_DURATION)}set mediaDuration(e){pe(this,c.MEDIA_DURATION,e)}get mediaCurrentTime(){return se(this,c.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){pe(this,c.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return se(this,c.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){pe(this,c.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){const e=this.getAttribute(c.MEDIA_BUFFERED);return e?e.split(" ").map(i=>i.split(":").map(a=>+a)):[]}set mediaBuffered(e){if(!e){this.removeAttribute(c.MEDIA_BUFFERED);return}const i=e.map(a=>a.join(":")).join(" ");this.setAttribute(c.MEDIA_BUFFERED,i)}get mediaSeekable(){const e=this.getAttribute(c.MEDIA_SEEKABLE);if(e)return e.split(":").map(i=>+i)}set mediaSeekable(e){if(e==null){this.removeAttribute(c.MEDIA_SEEKABLE);return}this.setAttribute(c.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;const[,i=this.mediaDuration]=(e=this.mediaSeekable)!=null?e:[];return i}get mediaSeekableStart(){var e;const[i=0]=(e=this.mediaSeekable)!=null?e:[];return i}get mediaPreviewImage(){return oe(this,c.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){le(this,c.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return se(this,c.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){pe(this,c.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return F(this,c.MEDIA_ENDED)}set mediaEnded(e){K(this,c.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;const i=this.mediaBuffered;if(!i.length)return;let a;if(this.mediaEnded)a=1;else{const n=this.mediaCurrentTime,[,s=this.mediaSeekableStart]=(e=i.find(([o,l])=>o<=n&&n<=l))!=null?e:[];a=Xn(this,s)}const{style:r}=Ie(this.shadowRoot,"#buffered");r.setProperty("width",`${a*100}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;const i=Ie(this.shadowRoot,"#current-rail"),a=Ie(this.shadowRoot,'[part~="current-box"]'),r=He(this,Lo,tc).call(this,ve(this,Bs)),n=He(this,Do,ic).call(this,r,this.range.valueAsNumber),s=He(this,Mo,ac).call(this,r,this.range.valueAsNumber);i.style.transform=`translateX(${n})`,i.style.setProperty("--_range-width",`${r.range.width}`),a.style.setProperty("--_box-shift",`${s}`),a.style.setProperty("--_box-width",`${r.box.width}px`),a.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":He(this,Id,Hv).call(this);break;case"pointermove":He(this,wd,Uv).call(this,e);break;case"pointerup":ve(this,Wa)&&ct(this,Wa,!1);break;case"pointerdown":ct(this,Wa,!0);break;case"pointerleave":He(this,In,xo).call(this,null);break;case"transitionstart":vi(e.target,this)&&setTimeout(()=>He(this,Fa,jr).call(this),0);break}}}Ha=new WeakMap;ca=new WeakMap;Ro=new WeakMap;cn=new WeakMap;Co=new WeakMap;Bs=new WeakMap;Sn=new WeakMap;wn=new WeakMap;Ba=new WeakMap;Wa=new WeakMap;Fa=new WeakSet;jr=function(){He(this,ec,$v).call(this)?ve(this,ca).start():ve(this,ca).stop()};ec=new WeakSet;$v=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&Wp(this)};Sd=new WeakMap;Lo=new WeakSet;tc=function(t){var e;const a=((e=this.getAttribute("bounds")?Er(this,`#${this.getAttribute("bounds")}`):this.parentElement)!=null?e:this).getBoundingClientRect(),r=this.range.getBoundingClientRect(),n=t.offsetWidth,s=-(r.left-a.left-n/2),o=a.right-r.left-n/2;return{box:{width:n,min:s,max:o},bounds:a,range:r}};Do=new WeakSet;ic=function(t,e){let i=`${e*100}%`;const{width:a,min:r,max:n}=t.box;if(!a)return i;if(Number.isNaN(r)||(i=`max(${`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`}, ${i})`),!Number.isNaN(n)){const o=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;i=`min(${i}, ${o})`}return i};Mo=new WeakSet;ac=function(t,e){const{width:i,min:a,max:r}=t.box,n=e*t.range.width;if(n<a+ve(this,Sn)){const s=t.range.left-t.bounds.left-ve(this,Sn);return`${n-i/2+s}px`}if(n>r-ve(this,wn)){const s=t.bounds.right-t.range.right-ve(this,wn);return`${n+i/2-s-t.range.width}px`}return 0};wd=new WeakSet;Uv=function(t){const e=[...ve(this,Ro)].some(p=>t.composedPath().includes(p));if(!this.dragging&&(e||!t.composedPath().includes(this))){He(this,In,xo).call(this,null);return}const i=this.mediaSeekableEnd;if(!i)return;const a=Ie(this.shadowRoot,"#preview-rail"),r=Ie(this.shadowRoot,'[part~="preview-box"]'),n=He(this,Lo,tc).call(this,ve(this,Co));let s=(t.clientX-n.range.left)/n.range.width;s=Math.max(0,Math.min(1,s));const o=He(this,Do,ic).call(this,n,s),l=He(this,Mo,ac).call(this,n,s);a.style.transform=`translateX(${o})`,a.style.setProperty("--_range-width",`${n.range.width}`),r.style.setProperty("--_box-shift",`${l}`),r.style.setProperty("--_box-width",`${n.box.width}px`);const u=Math.round(ve(this,cn))-Math.round(s*i);Math.abs(u)<1&&s>.01&&s<.99||(ct(this,cn,s*i),He(this,In,xo).call(this,ve(this,cn)))};In=new WeakSet;xo=function(t){this.dispatchEvent(new E.CustomEvent(R.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:t}))};Id=new WeakSet;Hv=function(){ve(this,ca).stop();const t=Bv(this);this.dispatchEvent(new E.CustomEvent(R.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:t}))};rc.shadowRootOptions={mode:"open"};rc.getContainerTemplateHTML=Hy;E.customElements.get("media-time-range")||E.customElements.define("media-time-range",rc);const By=1,Wy=t=>t.mediaMuted?0:t.mediaVolume,Fy=t=>`${Math.round(t*100)}%`;class Ky extends br{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_VOLUME,c.MEDIA_MUTED,c.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.addEventListener("input",()=>{const e=this.range.value,i=new E.CustomEvent(R.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)})}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",D("volume"))}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),(e===c.MEDIA_VOLUME||e===c.MEDIA_MUTED)&&(this.range.valueAsNumber=Wy(this),this.range.setAttribute("aria-valuetext",Fy(this.range.valueAsNumber)),this.updateBar())}get mediaVolume(){return se(this,c.MEDIA_VOLUME,By)}set mediaVolume(e){pe(this,c.MEDIA_VOLUME,e)}get mediaMuted(){return F(this,c.MEDIA_MUTED)}set mediaMuted(e){K(this,c.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return oe(this,c.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){le(this,c.MEDIA_VOLUME_UNAVAILABLE,e)}}E.customElements.get("media-volume-range")||E.customElements.define("media-volume-range",Ky);function Vy(t){return`
      <style>
        :host {
          min-width: 4ch;
          padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1rem;
          font-weight: var(--media-button-font-weight, normal);
        }

        #checked-indicator {
          display: none;
        }

        :host([${c.MEDIA_LOOP}]) #checked-indicator {
          display: block;
        }
      </style>
      
      <span id="icon">
     </span>

      <div id="checked-indicator">
        <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
          <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
        </svg>
      </div>
    `}function qy(){return D("Loop")}class nc extends xe{constructor(){super(...arguments),this.container=null}static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_LOOP]}connectedCallback(){var e;super.connectedCallback(),this.container=((e=this.shadowRoot)==null?void 0:e.querySelector("#icon"))||null,this.container&&(this.container.textContent=D("Loop"))}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===c.MEDIA_LOOP&&this.container&&this.setAttribute("aria-checked",this.mediaLoop?"true":"false")}get mediaLoop(){return F(this,c.MEDIA_LOOP)}set mediaLoop(e){K(this,c.MEDIA_LOOP,e)}handleClick(){const e=!this.mediaLoop,i=new E.CustomEvent(R.MEDIA_LOOP_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}}nc.getSlotTemplateHTML=Vy;nc.getTooltipContentHTML=qy;E.customElements.get("media-loop-button")||E.customElements.define("media-loop-button",nc);var Wv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},B=(t,e,i)=>(Wv(t,e,"read from private field"),i?i.call(t):e.get(t)),Qt=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},di=(t,e,i,a)=>(Wv(t,e,"write to private field"),e.set(t,i),i),Ka,Ws,Gi,Xr,ki,Si,wi,Qi,Va,Fs,Tt;const Qh=1,zh=0,Yy=1,Gy={processCallback(t,e,i){if(i){for(const[a,r]of e)if(a in i){const n=i[a];typeof n=="boolean"&&r instanceof Rt&&typeof r.element[r.attributeName]=="boolean"?r.booleanValue=n:typeof n=="function"&&r instanceof Rt?r.element[r.attributeName]=n:r.value=n}}}};class ll extends E.DocumentFragment{constructor(e,i,a=Gy){var r;super(),Qt(this,Ka,void 0),Qt(this,Ws,void 0),this.append(e.content.cloneNode(!0)),di(this,Ka,Fv(this)),di(this,Ws,a),(r=a.createCallback)==null||r.call(a,this,B(this,Ka),i),a.processCallback(this,B(this,Ka),i)}update(e){B(this,Ws).processCallback(this,B(this,Ka),e)}}Ka=new WeakMap;Ws=new WeakMap;const Fv=(t,e=[])=>{let i,a;for(const r of t.attributes||[])if(r.value.includes("{{")){const n=new zy;for([i,a]of jh(r.value))if(!i)n.append(a);else{const s=new Rt(t,r.name,r.namespaceURI);n.append(s),e.push([a,s])}r.value=n.toString()}for(const r of t.childNodes)if(r.nodeType===Qh&&!(r instanceof HTMLTemplateElement))Fv(r,e);else{const n=r.data;if(r.nodeType===Qh||n.includes("{{")){const s=[];if(n)for([i,a]of jh(n))if(!i)s.push(new Text(a));else{const o=new gr(t);s.push(o),e.push([a,o])}else if(r instanceof HTMLTemplateElement){const o=new qv(t,r);s.push(o),e.push([o.expression,o])}r.replaceWith(...s.flatMap(o=>o.replacementNodes||[o]))}}return e},Zh={},jh=t=>{let e="",i=0,a=Zh[t],r=0,n;if(a)return a;for(a=[];n=t[r];r++)n==="{"&&t[r+1]==="{"&&t[r-1]!=="\\"&&t[r+2]&&++i==1?(e&&a.push([zh,e]),e="",r++):n==="}"&&t[r+1]==="}"&&t[r-1]!=="\\"&&!--i?(a.push([Yy,e.trim()]),e="",r++):e+=n||"";return e&&a.push([zh,(i>0?"{{":"")+e]),Zh[t]=a},Qy=11;class Kv{get value(){return""}set value(e){}toString(){return this.value}}const Vv=new WeakMap;class zy{constructor(){Qt(this,Gi,[])}[Symbol.iterator](){return B(this,Gi).values()}get length(){return B(this,Gi).length}item(e){return B(this,Gi)[e]}append(...e){for(const i of e)i instanceof Rt&&Vv.set(i,this),B(this,Gi).push(i)}toString(){return B(this,Gi).join("")}}Gi=new WeakMap;class Rt extends Kv{constructor(e,i,a){super(),Qt(this,Qi),Qt(this,Xr,""),Qt(this,ki,void 0),Qt(this,Si,void 0),Qt(this,wi,void 0),di(this,ki,e),di(this,Si,i),di(this,wi,a)}get attributeName(){return B(this,Si)}get attributeNamespace(){return B(this,wi)}get element(){return B(this,ki)}get value(){return B(this,Xr)}set value(e){B(this,Xr)!==e&&(di(this,Xr,e),!B(this,Qi,Va)||B(this,Qi,Va).length===1?e==null?B(this,ki).removeAttributeNS(B(this,wi),B(this,Si)):B(this,ki).setAttributeNS(B(this,wi),B(this,Si),e):B(this,ki).setAttributeNS(B(this,wi),B(this,Si),B(this,Qi,Va).toString()))}get booleanValue(){return B(this,ki).hasAttributeNS(B(this,wi),B(this,Si))}set booleanValue(e){if(!B(this,Qi,Va)||B(this,Qi,Va).length===1)this.value=e?"":null;else throw new DOMException("Value is not fully templatized")}}Xr=new WeakMap;ki=new WeakMap;Si=new WeakMap;wi=new WeakMap;Qi=new WeakSet;Va=function(){return Vv.get(this)};class gr extends Kv{constructor(e,i){super(),Qt(this,Fs,void 0),Qt(this,Tt,void 0),di(this,Fs,e),di(this,Tt,i?[...i]:[new Text])}get replacementNodes(){return B(this,Tt)}get parentNode(){return B(this,Fs)}get nextSibling(){return B(this,Tt)[B(this,Tt).length-1].nextSibling}get previousSibling(){return B(this,Tt)[0].previousSibling}get value(){return B(this,Tt).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){const i=e.flat().flatMap(a=>a==null?[new Text]:a.forEach?[...a]:a.nodeType===Qy?[...a.childNodes]:a.nodeType?[a]:[new Text(a)]);i.length||i.push(new Text),di(this,Tt,Zy(B(this,Tt)[0].parentNode,B(this,Tt),i,this.nextSibling))}}Fs=new WeakMap;Tt=new WeakMap;class qv extends gr{constructor(e,i){const a=i.getAttribute("directive")||i.getAttribute("type");let r=i.getAttribute("expression")||i.getAttribute(a)||"";r.startsWith("{{")&&(r=r.trim().slice(2,-2).trim()),super(e),this.expression=r,this.template=i,this.directive=a}}function Zy(t,e,i,a=null){let r=0,n,s,o,l=i.length,u=e.length;for(;r<l&&r<u&&e[r]==i[r];)r++;for(;r<l&&r<u&&i[l-1]==e[u-1];)a=i[--u,--l];if(r==u)for(;r<l;)t.insertBefore(i[r++],a);if(r==l)for(;r<u;)t.removeChild(e[r++]);else{for(n=e[r];r<l;)o=i[r++],s=n?n.nextSibling:a,n==o?n=s:r<l&&i[r]==s?(t.replaceChild(o,n),n=s):t.insertBefore(o,n);for(;n!=a;)s=n.nextSibling,t.removeChild(n),n=s}return i}const Xh={string:t=>String(t)};class Yv{constructor(e){this.template=e,this.state=void 0}}const aa=new WeakMap,ra=new WeakMap,Rd={partial:(t,e)=>{e[t.expression]=new Yv(t.template)},if:(t,e)=>{var i;if(Gv(t.expression,e))if(aa.get(t)!==t.template){aa.set(t,t.template);const a=new ll(t.template,e,sc);t.replace(a),ra.set(t,a)}else(i=ra.get(t))==null||i.update(e);else t.replace(""),aa.delete(t),ra.delete(t)}},jy=Object.keys(Rd),sc={processCallback(t,e,i){var a,r;if(i)for(const[n,s]of e){if(s instanceof qv){if(!s.directive){const l=jy.find(u=>s.template.hasAttribute(u));l&&(s.directive=l,s.expression=s.template.getAttribute(l))}(a=Rd[s.directive])==null||a.call(Rd,s,i);continue}let o=Gv(n,i);if(o instanceof Yv){aa.get(s)!==o.template?(aa.set(s,o.template),o=new ll(o.template,o.state,sc),s.value=o,ra.set(s,o)):(r=ra.get(s))==null||r.update(o.state);continue}o?(s instanceof Rt&&s.attributeName.startsWith("aria-")&&(o=String(o)),s instanceof Rt?typeof o=="boolean"?s.booleanValue=o:typeof o=="function"?s.element[s.attributeName]=o:s.value=o:(s.value=o,aa.delete(s),ra.delete(s))):s instanceof Rt?s.value=void 0:(s.value=void 0,aa.delete(s),ra.delete(s))}}},Jh={"!":t=>!t,"!!":t=>!!t,"==":(t,e)=>t==e,"!=":(t,e)=>t!=e,">":(t,e)=>t>e,">=":(t,e)=>t>=e,"<":(t,e)=>t<e,"<=":(t,e)=>t<=e,"??":(t,e)=>t??e,"|":(t,e)=>{var i;return(i=Xh[e])==null?void 0:i.call(Xh,t)}};function Xy(t){return Jy(t,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>e!=="ws")}function Gv(t,e={}){var i,a,r,n,s,o,l;const u=Xy(t);if(u.length===0||u.some(({type:p})=>!p))return Cr(t);if(((i=u[0])==null?void 0:i.token)===">"){const p=e[(a=u[1])==null?void 0:a.token];if(!p)return Cr(t);const m={...e};p.state=m;const h=u.slice(2);for(let d=0;d<h.length;d+=3){const v=(r=h[d])==null?void 0:r.token,f=(n=h[d+1])==null?void 0:n.token,g=(s=h[d+2])==null?void 0:s.token;v&&f==="="&&(m[v]=Lr(g,e))}return p}if(u.length===1)return Jn(u[0])?Lr(u[0].token,e):Cr(t);if(u.length===2){const p=(o=u[0])==null?void 0:o.token,m=Jh[p];if(!m||!Jn(u[1]))return Cr(t);const h=Lr(u[1].token,e);return m(h)}if(u.length===3){const p=(l=u[1])==null?void 0:l.token,m=Jh[p];if(!m||!Jn(u[0])||!Jn(u[2]))return Cr(t);const h=Lr(u[0].token,e);if(p==="|")return m(h,u[2].token);const d=Lr(u[2].token,e);return m(h,d)}}function Cr(t){return console.warn(`Warning: invalid expression \`${t}\``),!1}function Jn({type:t}){return["number","boolean","string","param"].includes(t)}function Lr(t,e){const i=t[0],a=t.slice(-1);return t==="true"||t==="false"?t==="true":i===a&&["'",'"'].includes(i)?t.slice(1,-1):Dp(t)?parseFloat(t):e[t]}function Jy(t,e){let i,a,r;const n=[];for(;t;){r=null,i=t.length;for(const s in e)a=e[s].exec(t),a&&a.index<i&&(r={token:a[0],type:s,matches:a.slice(1)},i=a.index);i&&n.push({token:t.substr(0,i),type:void 0}),r&&n.push(r),t=t.substr(i+(r?r.token.length:0))}return n}var oc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Cd=(t,e,i)=>(oc(t,e,"read from private field"),i?i.call(t):e.get(t)),Dr=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},na=(t,e,i,a)=>(oc(t,e,"write to private field"),e.set(t,i),i),Ml=(t,e,i)=>(oc(t,e,"access private method"),i),rr,Ks,nr,Ld,Qv,Vs,Dd;const xl={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},zv=ke.createElement("template");zv.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class dl extends E.HTMLElement{constructor(){super(),Dr(this,Ld),Dr(this,Vs),Dr(this,rr,void 0),Dr(this,Ks,void 0),Dr(this,nr,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer());const e=new MutationObserver(i=>{var a;this.mediaController&&!((a=this.mediaController)!=null&&a.breakpointsComputed)||i.some(r=>{const n=r.target;return n===this?!0:n.localName!=="media-controller"?!1:!!(xl[r.attributeName]||r.attributeName.startsWith("breakpoint"))})&&this.render()});e.observe(this,{attributes:!0}),e.observe(this.renderRoot,{attributes:!0,subtree:!0}),this.addEventListener(mi.BREAKPOINTS_COMPUTED,this.render),Ml(this,Ld,Qv).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return(e=Cd(this,rr))!=null?e:this.constructor.template}set template(e){if(e===null){this.removeAttribute("template");return}typeof e=="string"?this.setAttribute("template",e):e instanceof HTMLTemplateElement&&(na(this,rr,e),na(this,nr,null),this.createRenderer())}get props(){var e,i,a;const r=[...Array.from((i=(e=this.mediaController)==null?void 0:e.attributes)!=null?i:[]).filter(({name:s})=>xl[s]||s.startsWith("breakpoint")),...Array.from(this.attributes)],n={};for(const s of r){const o=(a=xl[s.name])!=null?a:ig(s.name);let{value:l}=s;l!=null?(Dp(l)&&(l=parseFloat(l)),n[o]=l===""?!0:l):n[o]=!1}return n}attributeChangedCallback(e,i,a){e==="template"&&i!=a&&Ml(this,Vs,Dd).call(this)}connectedCallback(){Ml(this,Vs,Dd).call(this)}createRenderer(){this.template instanceof HTMLTemplateElement&&this.template!==Cd(this,Ks)&&(na(this,Ks,this.template),this.renderer=new ll(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(zv.content.cloneNode(!0),this.renderer))}render(){var e;(e=this.renderer)==null||e.update(this.props)}}rr=new WeakMap;Ks=new WeakMap;nr=new WeakMap;Ld=new WeakSet;Qv=function(t){if(Object.prototype.hasOwnProperty.call(this,t)){const e=this[t];delete this[t],this[t]=e}};Vs=new WeakSet;Dd=function(){var t;const e=this.getAttribute("template");if(!e||e===Cd(this,nr))return;const i=this.getRootNode(),a=(t=i==null?void 0:i.getElementById)==null?void 0:t.call(i,e);if(a){na(this,nr,e),na(this,rr,a),this.createRenderer();return}eT(e)&&(na(this,nr,e),tT(e).then(r=>{const n=ke.createElement("template");n.innerHTML=r,na(this,rr,n),this.createRenderer()}).catch(console.error))};dl.observedAttributes=["template"];dl.processor=sc;function eT(t){if(!/^(\/|\.\/|https?:\/\/)/.test(t))return!1;const e=/^https?:\/\//.test(t)?void 0:location.origin;try{new URL(t,e)}catch{return!1}return!0}async function tT(t){const e=await fetch(t);if(e.status!==200)throw new Error(`Failed to load resource: the server responded with a status of ${e.status}`);return e.text()}E.customElements.get("media-theme")||E.customElements.define("media-theme",dl);function iT({anchor:t,floating:e,placement:i}){const a=aT({anchor:t,floating:e}),{x:r,y:n}=nT(a,i);return{x:r,y:n}}function aT({anchor:t,floating:e}){return{anchor:rT(t,e.offsetParent),floating:{x:0,y:0,width:e.offsetWidth,height:e.offsetHeight}}}function rT(t,e){var i;const a=t.getBoundingClientRect(),r=(i=e==null?void 0:e.getBoundingClientRect())!=null?i:{x:0,y:0};return{x:a.x-r.x,y:a.y-r.y,width:a.width,height:a.height}}function nT({anchor:t,floating:e},i){const a=sT(i)==="x"?"y":"x",r=a==="y"?"height":"width",n=Zv(i),s=t.x+t.width/2-e.width/2,o=t.y+t.height/2-e.height/2,l=t[r]/2-e[r]/2;let u;switch(n){case"top":u={x:s,y:t.y-e.height};break;case"bottom":u={x:s,y:t.y+t.height};break;case"right":u={x:t.x+t.width,y:o};break;case"left":u={x:t.x-e.width,y:o};break;default:u={x:t.x,y:t.y}}switch(i.split("-")[1]){case"start":u[a]-=l;break;case"end":u[a]+=l;break}return u}function Zv(t){return t.split("-")[0]}function sT(t){return["top","bottom"].includes(Zv(t))?"y":"x"}class lc extends Event{constructor({action:e="auto",relatedTarget:i,...a}){super("invoke",a),this.action=e,this.relatedTarget=i}}class oT extends Event{constructor({newState:e,oldState:i,...a}){super("toggle",a),this.newState=e,this.oldState=i}}var dc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},G=(t,e,i)=>(dc(t,e,"read from private field"),i?i.call(t):e.get(t)),ee=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Vt=(t,e,i,a)=>(dc(t,e,"write to private field"),e.set(t,i),i),te=(t,e,i)=>(dc(t,e,"access private method"),i),qt,ha,Ni,qs,Ys,ma,Rn,Md,jv,Oo,uc,No,Gs,xd,Od,Xv,Nd,Jv,Pd,ef,sr,or,lr,Cn,Po,cc,$d,tf,hc,af,Ud,rf,mc,nf,Hd,sf,Bd,of,hn,$o,Wd,lf,mn,Uo,Qs,Fd;function pr({type:t,text:e,value:i,checked:a}){const r=ke.createElement("media-chrome-menu-item");r.type=t??"",r.part.add("menu-item"),t&&r.part.add(t),r.value=i,r.checked=a;const n=ke.createElement("span");return n.textContent=e,r.append(n),r}function pa(t,e){let i=t.querySelector(`:scope > [slot="${e}"]`);if((i==null?void 0:i.nodeName)=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i=i.cloneNode(!0),i;const a=t.shadowRoot.querySelector(`[name="${e}"] > svg`);return a?a.cloneNode(!0):""}function lT(t){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
        border-radius: var(--media-menu-border-radius);
        border: var(--media-menu-border, none);
        display: var(--media-menu-display, inline-flex) !important;
        
        transition: var(--media-menu-transition-in,
          visibility 0s,
          opacity .2s ease-out,
          transform .15s ease-out,
          left .2s ease-in-out,
          min-width .2s ease-in-out,
          min-height .2s ease-in-out
        ) !important;
        
        visibility: var(--media-menu-visibility, visible);
        opacity: var(--media-menu-opacity, 1);
        max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
        transform: var(--media-menu-transform-in, translateY(0) scale(1));
        flex-direction: column;
        
        min-height: 0;
        position: relative;
        bottom: var(--_menu-bottom);
        box-sizing: border-box;
      } 

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([hidden]) {
        transition: var(--media-menu-transition-out,
          visibility .15s ease-in,
          opacity .15s ease-in,
          transform .15s ease-in
        ) !important;
        visibility: var(--media-menu-hidden-visibility, hidden);
        opacity: var(--media-menu-hidden-opacity, 0);
        max-height: var(--media-menu-hidden-max-height,
          var(--media-menu-max-height, var(--_menu-max-height, 300px)));
        transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
        pointer-events: none;
      }

      :host([slot="submenu"]) {
        background: none;
        width: 100%;
        min-height: 100%;
        position: absolute;
        bottom: 0;
        right: -100%;
      }

      #container {
        display: flex;
        flex-direction: column;
        min-height: 0;
        transition: transform .2s ease-out;
        transform: translate(0, 0);
      }

      #container.has-expanded {
        transition: transform .2s ease-in;
        transform: translate(-100%, 0);
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
        display: inline-flex;
        align-items: center;
      }

      slot[name="header"][hidden] {
        display: none;
      }

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .7em;
        border-bottom: 1px solid rgb(255 255 255 / .25);
        cursor: var(--media-cursor, default);
      }

      slot[name="header"] > button[part~="back"],
      slot[name="header"]::slotted(button[part~="back"]) {
        cursor: var(--media-cursor, pointer);
      }

      svg[part~="back"] {
        height: var(--media-menu-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
        margin-right: .5ch;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap);
        flex-direction: var(--media-menu-flex-direction, column);
        overflow: var(--media-menu-overflow, hidden auto);
        display: flex;
        min-height: 0;
      }

      :host([role="menu"]) slot:not([name]) {
        padding-block: .4em;
      }

      slot:not([name])::slotted([role="menu"]) {
        background: none;
      }

      media-chrome-menu-item > span {
        margin-right: .5ch;
        max-width: var(--media-menu-item-max-width);
        text-overflow: ellipsis;
        overflow: hidden;
      }
    </style>
    <style id="layout-row" media="width:0">

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .5em;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap, .25em);
        flex-direction: var(--media-menu-flex-direction, row);
        padding-inline: .5em;
      }

      media-chrome-menu-item {
        padding: .3em .5em;
      }

      media-chrome-menu-item[aria-checked="true"] {
        background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
      }

      
      media-chrome-menu-item::part(checked-indicator) {
        display: var(--media-menu-item-checked-indicator-display, none);
      }
    </style>
    <div id="container" part="container">
      <slot name="header" hidden>
        <button part="back button" aria-label="Back to previous menu">
          <slot name="back-icon">
            <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
              <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
            </svg>
          </slot>
          <slot name="title"></slot>
        </button>
      </slot>
      <slot></slot>
    </div>
    <slot name="checked-indicator" hidden></slot>
  `}const Bi={STYLE:"style",HIDDEN:"hidden",DISABLED:"disabled",ANCHOR:"anchor"};class ft extends E.HTMLElement{constructor(){if(super(),ee(this,Md),ee(this,Oo),ee(this,Gs),ee(this,Od),ee(this,Nd),ee(this,Pd),ee(this,lr),ee(this,Po),ee(this,$d),ee(this,hc),ee(this,Ud),ee(this,mc),ee(this,Hd),ee(this,Bd),ee(this,hn),ee(this,Wd),ee(this,mn),ee(this,Qs),ee(this,qt,null),ee(this,ha,null),ee(this,Ni,null),ee(this,qs,new Set),ee(this,Ys,void 0),ee(this,ma,!1),ee(this,Rn,null),ee(this,No,()=>{const e=G(this,qs),i=new Set(this.items);for(const a of e)i.has(a)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:a}));for(const a of i)e.has(a)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:a}));Vt(this,qs,i)}),ee(this,sr,()=>{te(this,lr,Cn).call(this),te(this,Po,cc).call(this,!1)}),ee(this,or,()=>{te(this,lr,Cn).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=nt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),this.shadowRoot.addEventListener("slotchange",this),Vt(this,Ys,new MutationObserver(G(this,No))),G(this,Ys).observe(this.defaultSlot,{childList:!0})}static get observedAttributes(){return[Bi.DISABLED,Bi.HIDDEN,Bi.STYLE,Bi.ANCHOR,Q.MEDIA_CONTROLLER]}static formatMenuItemText(e,i){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":te(this,Md,jv).call(this,e);break;case"invoke":te(this,Od,Xv).call(this,e);break;case"click":te(this,$d,tf).call(this,e);break;case"toggle":te(this,Ud,rf).call(this,e);break;case"focusout":te(this,Hd,sf).call(this,e);break;case"keydown":te(this,Bd,of).call(this,e);break}}connectedCallback(){var e,i;Vt(this,Rn,Iu(this.shadowRoot,":host")),te(this,Gs,xd).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),Vt(this,qt,id(this)),(i=(e=G(this,qt))==null?void 0:e.associateElement)==null||i.call(e,this),this.hidden||(cr(Ln(this),G(this,sr)),cr(this,G(this,or))),te(this,Oo,uc).call(this)}disconnectedCallback(){var e,i;hr(Ln(this),G(this,sr)),hr(this,G(this,or)),this.disable(),(i=(e=G(this,qt))==null?void 0:e.unassociateElement)==null||i.call(e,this),Vt(this,qt,null)}attributeChangedCallback(e,i,a){var r,n,s,o;e===Bi.HIDDEN&&a!==i?(G(this,ma)||Vt(this,ma,!0),this.hidden?te(this,Pd,ef).call(this):te(this,Nd,Jv).call(this),this.dispatchEvent(new oT({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===Q.MEDIA_CONTROLLER?(i&&((n=(r=G(this,qt))==null?void 0:r.unassociateElement)==null||n.call(r,this),Vt(this,qt,null)),a&&this.isConnected&&(Vt(this,qt,id(this)),(o=(s=G(this,qt))==null?void 0:s.associateElement)==null||o.call(s,this))):e===Bi.DISABLED&&a!==i?a==null?this.enable():this.disable():e===Bi.STYLE&&a!==i&&te(this,Gs,xd).call(this)}formatMenuItemText(e,i){return this.constructor.formatMenuItemText(e,i)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?(e=jo(this))==null?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(dT)}get radioGroupItems(){return this.items.filter(e=>e.role==="menuitemradio")}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,i;return(i=(e=this.checkedItems[0])==null?void 0:e.value)!=null?i:""}set value(e){const i=this.items.find(a=>a.value===e);i&&te(this,Qs,Fd).call(this,i)}focus(){if(Vt(this,ha,wu()),this.items.length){te(this,mn,Uo).call(this,this.items[0]),this.items[0].focus();return}const e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');e==null||e.focus()}handleSelect(e){var i;const a=te(this,hn,$o).call(this,e);a&&(te(this,Qs,Fd).call(this,a,a.type==="checkbox"),G(this,Ni)&&!this.hidden&&((i=G(this,ha))==null||i.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var i,a;const{key:r}=e,n=this.items,s=(a=(i=te(this,hn,$o).call(this,e))!=null?i:te(this,Wd,lf).call(this))!=null?a:n[0],o=n.indexOf(s);let l=Math.max(0,o);r==="ArrowDown"?l++:r==="ArrowUp"?l--:e.key==="Home"?l=0:e.key==="End"&&(l=n.length-1),l<0&&(l=n.length-1),l>n.length-1&&(l=0),te(this,mn,Uo).call(this,n[l]),n[l].focus()}}qt=new WeakMap;ha=new WeakMap;Ni=new WeakMap;qs=new WeakMap;Ys=new WeakMap;ma=new WeakMap;Rn=new WeakMap;Md=new WeakSet;jv=function(t){const e=t.target;for(const i of e.assignedNodes({flatten:!0}))i.nodeType===3&&i.textContent.trim()===""&&i.remove();["header","title"].includes(e.name)&&te(this,Oo,uc).call(this),e.name||G(this,No).call(this)};Oo=new WeakSet;uc=function(){const t=this.shadowRoot.querySelector('slot[name="header"]'),e=this.shadowRoot.querySelector('slot[name="title"]');t.hidden=e.assignedNodes().length===0&&t.assignedNodes().length===0};No=new WeakMap;Gs=new WeakSet;xd=function(){var t;const e=this.shadowRoot.querySelector("#layout-row"),i=(t=getComputedStyle(this).getPropertyValue("--media-menu-layout"))==null?void 0:t.trim();e.setAttribute("media",i==="row"?"":"width:0")};Od=new WeakSet;Xv=function(t){Vt(this,Ni,t.relatedTarget),vi(this,t.relatedTarget)||(this.hidden=!this.hidden)};Nd=new WeakSet;Jv=function(){var t;(t=G(this,Ni))==null||t.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),cr(Ln(this),G(this,sr)),cr(this,G(this,or))};Pd=new WeakSet;ef=function(){var t;(t=G(this,Ni))==null||t.setAttribute("aria-expanded","false"),hr(Ln(this),G(this,sr)),hr(this,G(this,or))};sr=new WeakMap;or=new WeakMap;lr=new WeakSet;Cn=function(t){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;const{x:e,y:i}=iT({anchor:this.anchorElement,floating:this,placement:"top-start"});t??(t=this.offsetWidth);const r=Ln(this).getBoundingClientRect(),n=r.width-e-t,s=r.height-i-this.offsetHeight,{style:o}=G(this,Rn);o.setProperty("position","absolute"),o.setProperty("right",`${Math.max(0,n)}px`),o.setProperty("--_menu-bottom",`${s}px`);const l=getComputedStyle(this),p=o.getPropertyValue("--_menu-bottom")===l.bottom?s:parseFloat(l.bottom),m=r.height-p-parseFloat(l.marginBottom);this.style.setProperty("--_menu-max-height",`${m}px`)};Po=new WeakSet;cc=function(t){const e=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=e==null?void 0:e.querySelector('[role="menu"]'),{style:a}=G(this,Rn);if(t||a.setProperty("--media-menu-transition-in","none"),i){const r=i.offsetHeight,n=Math.max(i.offsetWidth,e.offsetWidth);this.style.setProperty("min-width",`${n}px`),this.style.setProperty("min-height",`${r}px`),te(this,lr,Cn).call(this,n)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),te(this,lr,Cn).call(this);a.removeProperty("--media-menu-transition-in")};$d=new WeakSet;tf=function(t){var e;if(t.stopPropagation(),t.composedPath().includes(G(this,hc,af))){(e=G(this,ha))==null||e.focus(),this.hidden=!0;return}const i=te(this,hn,$o).call(this,t);!i||i.hasAttribute("disabled")||(te(this,mn,Uo).call(this,i),this.handleSelect(t))};hc=new WeakSet;af=function(){var t;return(t=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))==null?void 0:t.find(i=>i.matches('button[part~="back"]'))};Ud=new WeakSet;rf=function(t){if(t.target===this)return;te(this,mc,nf).call(this);const e=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(const i of e)i.invokeTargetElement!=t.target&&t.newState=="open"&&i.getAttribute("aria-expanded")=="true"&&!i.invokeTargetElement.hidden&&i.invokeTargetElement.dispatchEvent(new lc({relatedTarget:i}));for(const i of e)i.setAttribute("aria-expanded",`${!i.submenuElement.hidden}`);te(this,Po,cc).call(this,!0)};mc=new WeakSet;nf=function(){const e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)};Hd=new WeakSet;sf=function(t){var e;vi(this,t.relatedTarget)||(G(this,ma)&&((e=G(this,ha))==null||e.focus()),G(this,Ni)&&G(this,Ni)!==t.relatedTarget&&!this.hidden&&(this.hidden=!0))};Bd=new WeakSet;of=function(t){var e,i,a,r,n;const{key:s,ctrlKey:o,altKey:l,metaKey:u}=t;if(!(o||l||u)&&this.keysUsed.includes(s))if(t.preventDefault(),t.stopPropagation(),s==="Tab"){if(G(this,ma)){this.hidden=!0;return}t.shiftKey?(i=(e=this.previousElementSibling)==null?void 0:e.focus)==null||i.call(e):(r=(a=this.nextElementSibling)==null?void 0:a.focus)==null||r.call(a),this.blur()}else s==="Escape"?((n=G(this,ha))==null||n.focus(),G(this,ma)&&(this.hidden=!0)):s==="Enter"||s===" "?this.handleSelect(t):this.handleMove(t)};hn=new WeakSet;$o=function(t){return t.composedPath().find(e=>["menuitemradio","menuitemcheckbox"].includes(e.role))};Wd=new WeakSet;lf=function(){return this.items.find(t=>t.tabIndex===0)};mn=new WeakSet;Uo=function(t){for(const e of this.items)e.tabIndex=e===t?0:-1};Qs=new WeakSet;Fd=function(t,e){const i=[...this.checkedItems];t.type==="radio"&&this.radioGroupItems.forEach(a=>a.checked=!1),e?t.checked=!t.checked:t.checked=!0,this.checkedItems.some((a,r)=>a!=i[r])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))};ft.shadowRootOptions={mode:"open"};ft.getTemplateHTML=lT;function dT(t){return["menuitem","menuitemradio","menuitemcheckbox"].includes(t==null?void 0:t.role)}function Ln(t){var e;return(e=t.getAttribute("bounds")?Er(t,`#${t.getAttribute("bounds")}`):qe(t)||t.parentElement)!=null?e:t}E.customElements.get("media-chrome-menu")||E.customElements.define("media-chrome-menu",ft);var pc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},jt=(t,e,i)=>(pc(t,e,"read from private field"),e.get(t)),ai=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ol=(t,e,i,a)=>(pc(t,e,"write to private field"),e.set(t,i),i),It=(t,e,i)=>(pc(t,e,"access private method"),i),zs,pn,Kd,df,Ho,vc,fc,uf,Xt,vr,Dn,Vd,cf,Zs,qd;function uT(t){return`
    <style>
      :host {
        transition: var(--media-menu-item-transition,
          background .15s linear,
          opacity .2s ease-in-out
        );
        outline: var(--media-menu-item-outline, 0);
        outline-offset: var(--media-menu-item-outline-offset, -1px);
        cursor: var(--media-cursor, pointer);
        display: flex;
        align-items: center;
        align-self: stretch;
        justify-self: stretch;
        white-space: nowrap;
        white-space-collapse: collapse;
        text-wrap: nowrap;
        padding: .4em .8em .4em 1em;
      }

      :host(:focus-visible) {
        box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: var(--media-menu-item-hover-outline, 0);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host(:hover) {
        cursor: var(--media-cursor, pointer);
        background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
        outline: var(--media-menu-item-hover-outline);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host([aria-checked="true"]) {
        background: var(--media-menu-item-checked-background);
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        pointer-events: none;
        color: rgba(255, 255, 255, .3);
      }

      slot:not([name]) {
        width: 100%;
      }

      slot:not([name="submenu"]) {
        display: inline-flex;
        align-items: center;
        transition: inherit;
        opacity: var(--media-menu-item-opacity, 1);
      }

      slot[name="description"] {
        justify-content: end;
      }

      slot[name="description"] > span {
        display: inline-block;
        margin-inline: 1em .2em;
        max-width: var(--media-menu-item-description-max-width, 100px);
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: .8em;
        font-weight: 400;
        text-align: right;
        position: relative;
        top: .04em;
      }

      slot[name="checked-indicator"] {
        display: none;
      }

      :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
        display: var(--media-menu-item-checked-indicator-display, inline-block);
      }

      
      svg, img, ::slotted(svg), ::slotted(img) {
        height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
      }

      
      [part~="indicator"],
      ::slotted([part~="indicator"]) {
        fill: var(--media-menu-item-indicator-fill,
          var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
        height: var(--media-menu-item-indicator-height, 1.25em);
        margin-right: .5ch;
      }

      [part~="checked-indicator"] {
        visibility: hidden;
      }

      :host([aria-checked="true"]) [part~="checked-indicator"] {
        visibility: visible;
      }
    </style>
    <slot name="checked-indicator">
      <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
        <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
      </svg>
    </slot>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="description"></slot>
    <slot name="suffix">
      ${this.getSuffixSlotInnerHTML(t)}
    </slot>
    <slot name="submenu"></slot>
  `}function cT(t){return""}const ut={TYPE:"type",VALUE:"value",CHECKED:"checked",DISABLED:"disabled"};class $i extends E.HTMLElement{constructor(){if(super(),ai(this,Kd),ai(this,Ho),ai(this,fc),ai(this,vr),ai(this,Vd),ai(this,Zs),ai(this,zs,!1),ai(this,pn,void 0),ai(this,Xt,()=>{var e,i;this.submenuElement.items&&this.setAttribute("submenusize",`${this.submenuElement.items.length}`);const a=this.shadowRoot.querySelector('slot[name="description"]'),r=(e=this.submenuElement.checkedItems)==null?void 0:e[0],n=(i=r==null?void 0:r.dataset.description)!=null?i:r==null?void 0:r.text,s=ke.createElement("span");s.textContent=n??"",a.replaceChildren(s)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=nt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.shadowRoot.addEventListener("slotchange",this)}static get observedAttributes(){return[ut.TYPE,ut.DISABLED,ut.CHECKED,ut.VALUE]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),Mr(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":It(this,Kd,df).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":It(this,Vd,cf).call(this,e);break;case"keyup":It(this,vr,Dn).call(this,e);break}}attributeChangedCallback(e,i,a){e===ut.CHECKED&&Mr(this)&&!jt(this,zs)?this.setAttribute("aria-checked",a!=null?"true":"false"):e===ut.TYPE&&a!==i?this.role="menuitem"+a:e===ut.DISABLED&&a!==i&&(a==null?this.enable():this.disable())}connectedCallback(){this.hasAttribute(ut.DISABLED)||this.enable(),this.role="menuitem"+this.type,Ol(this,pn,Yd(this,this.parentNode)),It(this,Zs,qd).call(this),this.submenuElement&&It(this,Ho,vc).call(this)}disconnectedCallback(){this.disable(),It(this,Zs,qd).call(this),Ol(this,pn,null)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?(e=jo(this))==null?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return(e=this.getAttribute(ut.TYPE))!=null?e:""}set type(e){this.setAttribute(ut.TYPE,`${e}`)}get value(){var e;return(e=this.getAttribute(ut.VALUE))!=null?e:this.text}set value(e){this.setAttribute(ut.VALUE,e)}get text(){var e;return((e=this.textContent)!=null?e:"").trim()}get checked(){if(Mr(this))return this.getAttribute("aria-checked")==="true"}set checked(e){Mr(this)&&(Ol(this,zs,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){Mr(this)||this.invokeTargetElement&&vi(this,e.target)&&this.invokeTargetElement.dispatchEvent(new lc({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}zs=new WeakMap;pn=new WeakMap;Kd=new WeakSet;df=function(t){const e=t.target;if(!(e!=null&&e.name))for(const a of e.assignedNodes({flatten:!0}))a instanceof Text&&a.textContent.trim()===""&&a.remove();e.name==="submenu"&&(this.submenuElement?It(this,Ho,vc).call(this):It(this,fc,uf).call(this))};Ho=new WeakSet;vc=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",jt(this,Xt)),this.submenuElement.addEventListener("addmenuitem",jt(this,Xt)),this.submenuElement.addEventListener("removemenuitem",jt(this,Xt)),jt(this,Xt).call(this)};fc=new WeakSet;uf=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",jt(this,Xt)),this.submenuElement.removeEventListener("addmenuitem",jt(this,Xt)),this.submenuElement.removeEventListener("removemenuitem",jt(this,Xt)),jt(this,Xt).call(this)};Xt=new WeakMap;vr=new WeakSet;Dn=function(t){const{key:e}=t;if(!this.keysUsed.includes(e)){this.removeEventListener("keyup",It(this,vr,Dn));return}this.handleClick(t)};Vd=new WeakSet;cf=function(t){const{metaKey:e,altKey:i,key:a}=t;if(e||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",It(this,vr,Dn));return}this.addEventListener("keyup",It(this,vr,Dn),{once:!0})};Zs=new WeakSet;qd=function(){var t;const e=(t=jt(this,pn))==null?void 0:t.radioGroupItems;if(!e)return;let i=e.filter(a=>a.getAttribute("aria-checked")==="true").pop();i||(i=e[0]);for(const a of e)a.setAttribute("aria-checked","false");i==null||i.setAttribute("aria-checked","true")};$i.shadowRootOptions={mode:"open"};$i.getTemplateHTML=uT;$i.getSuffixSlotInnerHTML=cT;function Mr(t){return t.type==="radio"||t.type==="checkbox"}function Yd(t,e){if(!t)return null;const{host:i}=t.getRootNode();return!e&&i?Yd(t,i):e!=null&&e.items?e:Yd(e,e==null?void 0:e.parentNode)}E.customElements.get("media-chrome-menu-item")||E.customElements.define("media-chrome-menu-item",$i);function hT(t){return`
    ${ft.getTemplateHTML(t)}
    <style>
      :host {
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
        min-width: var(--media-settings-menu-min-width, 170px);
        border-radius: 2px 2px 0 0;
        overflow: hidden;
      }

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([role="menu"]) {
        
        justify-content: end;
      }

      slot:not([name]) {
        justify-content: var(--media-settings-menu-justify-content);
        flex-direction: var(--media-settings-menu-flex-direction, column);
        overflow: visible;
      }

      #container.has-expanded {
        --media-settings-menu-item-opacity: 0;
      }
    </style>
  `}class hf extends ft{get anchorElement(){return this.anchor!=="auto"?super.anchorElement:qe(this).querySelector("media-settings-menu-button")}}hf.getTemplateHTML=hT;E.customElements.get("media-settings-menu")||E.customElements.define("media-settings-menu",hf);function mT(t){return`
    ${$i.getTemplateHTML.call(this,t)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `}function pT(t){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `}class ul extends $i{}ul.shadowRootOptions={mode:"open"};ul.getTemplateHTML=mT;ul.getSuffixSlotInnerHTML=pT;E.customElements.get("media-settings-menu-item")||E.customElements.define("media-settings-menu-item",ul);class yr extends xe{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?(e=jo(this))==null?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){var e;(e=this.invokeTargetElement)==null||e.dispatchEvent(new lc({relatedTarget:this}))}}E.customElements.get("media-chrome-menu-button")||E.customElements.define("media-chrome-menu-button",yr);function vT(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
      </svg>
    </slot>
  `}function fT(){return D("Settings")}class Ec extends yr{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",D("settings"))}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:qe(this).querySelector("media-settings-menu")}}Ec.getSlotTemplateHTML=vT;Ec.getTooltipContentHTML=fT;E.customElements.get("media-settings-menu-button")||E.customElements.define("media-settings-menu-button",Ec);var _c=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},mf=(t,e,i)=>(_c(t,e,"read from private field"),i?i.call(t):e.get(t)),es=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Gd=(t,e,i,a)=>(_c(t,e,"write to private field"),e.set(t,i),i),ts=(t,e,i)=>(_c(t,e,"access private method"),i),Jr,Bo,js,Qd,Xs,zd;class ET extends ft{constructor(){super(...arguments),es(this,js),es(this,Xs),es(this,Jr,[]),es(this,Bo,void 0)}static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_AUDIO_TRACK_LIST,c.MEDIA_AUDIO_TRACK_ENABLED,c.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===c.MEDIA_AUDIO_TRACK_ENABLED&&i!==a?this.value=a:e===c.MEDIA_AUDIO_TRACK_LIST&&i!==a&&(Gd(this,Jr,J0(a??"")),ts(this,js,Qd).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",ts(this,Xs,zd))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",ts(this,Xs,zd))}get anchorElement(){var e;return this.anchor!=="auto"?super.anchorElement:(e=qe(this))==null?void 0:e.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return mf(this,Jr)}set mediaAudioTrackList(e){Gd(this,Jr,e),ts(this,js,Qd).call(this)}get mediaAudioTrackEnabled(){var e;return(e=oe(this,c.MEDIA_AUDIO_TRACK_ENABLED))!=null?e:""}set mediaAudioTrackEnabled(e){le(this,c.MEDIA_AUDIO_TRACK_ENABLED,e)}}Jr=new WeakMap;Bo=new WeakMap;js=new WeakSet;Qd=function(){if(mf(this,Bo)===JSON.stringify(this.mediaAudioTrackList))return;Gd(this,Bo,JSON.stringify(this.mediaAudioTrackList));const t=this.mediaAudioTrackList;this.defaultSlot.textContent="",t.sort((e,i)=>e.id.localeCompare(i.id,void 0,{numeric:!0}));for(const e of t){const i=this.formatMenuItemText(e.label,e),a=pr({type:"radio",text:i,value:`${e.id}`,checked:e.enabled});a.prepend(pa(this,"checked-indicator")),this.defaultSlot.append(a)}};Xs=new WeakSet;zd=function(){if(this.value==null)return;const t=new E.CustomEvent(R.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(t)};E.customElements.get("media-audio-track-menu")||E.customElements.define("media-audio-track-menu",ET);const _T=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`;function bT(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${_T}</slot>
  `}function gT(){return D("Audio")}const em=t=>{const e=D("Audio");t.setAttribute("aria-label",e)};class bc extends yr{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_AUDIO_TRACK_ENABLED,c.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),em(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===c.MEDIA_LANG&&em(this)}get invokeTargetElement(){var e;return this.invokeTarget!=null?super.invokeTargetElement:(e=qe(this))==null?void 0:e.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var e;return(e=oe(this,c.MEDIA_AUDIO_TRACK_ENABLED))!=null?e:""}set mediaAudioTrackEnabled(e){le(this,c.MEDIA_AUDIO_TRACK_ENABLED,e)}}bc.getSlotTemplateHTML=bT;bc.getTooltipContentHTML=gT;E.customElements.get("media-audio-track-menu-button")||E.customElements.define("media-audio-track-menu-button",bc);var gc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},yT=(t,e,i)=>(gc(t,e,"read from private field"),i?i.call(t):e.get(t)),Nl=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},TT=(t,e,i,a)=>(gc(t,e,"write to private field"),e.set(t,i),i),is=(t,e,i)=>(gc(t,e,"access private method"),i),Wo,Js,Zd,eo,jd;const AT=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;function kT(t){return`
    ${ft.getTemplateHTML(t)}
    <slot name="captions-indicator" hidden>${AT}</slot>
  `}class pf extends ft{constructor(){super(...arguments),Nl(this,Js),Nl(this,eo),Nl(this,Wo,void 0)}static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_SUBTITLES_LIST,c.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===c.MEDIA_SUBTITLES_LIST&&i!==a?is(this,Js,Zd).call(this):e===c.MEDIA_SUBTITLES_SHOWING&&i!==a&&(this.value=a||"",is(this,Js,Zd).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",is(this,eo,jd))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",is(this,eo,jd))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:qe(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return tm(this,c.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){im(this,c.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return tm(this,c.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){im(this,c.MEDIA_SUBTITLES_SHOWING,e)}}Wo=new WeakMap;Js=new WeakSet;Zd=function(){var t;const e=yT(this,Wo)!==JSON.stringify(this.mediaSubtitlesList),i=this.value!==this.getAttribute(c.MEDIA_SUBTITLES_SHOWING);if(!e&&!i)return;TT(this,Wo,JSON.stringify(this.mediaSubtitlesList)),this.defaultSlot.textContent="";const a=!this.value,r=pr({type:"radio",text:this.formatMenuItemText(D("Off")),value:"off",checked:a});r.prepend(pa(this,"checked-indicator")),this.defaultSlot.append(r);const n=this.mediaSubtitlesList;for(const s of n){const o=pr({type:"radio",text:this.formatMenuItemText(s.label,s),value:sd(s),checked:this.value==sd(s)});o.prepend(pa(this,"checked-indicator")),((t=s.kind)!=null?t:"subs")==="captions"&&o.append(pa(this,"captions-indicator")),this.defaultSlot.append(o)}};eo=new WeakSet;jd=function(){const t=this.mediaSubtitlesShowing,e=this.getAttribute(c.MEDIA_SUBTITLES_SHOWING),i=this.value!==e;if(t!=null&&t.length&&i&&this.dispatchEvent(new E.CustomEvent(R.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:t})),!this.value||!i)return;const a=new E.CustomEvent(R.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)};pf.getTemplateHTML=kT;const tm=(t,e)=>{const i=t.getAttribute(e);return i?il(i):[]},im=(t,e,i)=>{if(!(i!=null&&i.length)){t.removeAttribute(e);return}const a=An(i);t.getAttribute(e)!==a&&t.setAttribute(e,a)};E.customElements.get("media-captions-menu")||E.customElements.define("media-captions-menu",pf);const ST=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,wT=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function IT(){return`
    <style>
      :host([data-captions-enabled="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([data-captions-enabled="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${ST}</slot>
      <slot name="off">${wT}</slot>
    </slot>
  `}function RT(){return D("Captions")}const am=t=>{t.setAttribute("data-captions-enabled",jp(t).toString())},rm=t=>{t.setAttribute("aria-label",D("closed captions"))};class yc extends yr{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_SUBTITLES_LIST,c.MEDIA_SUBTITLES_SHOWING,c.MEDIA_LANG]}connectedCallback(){super.connectedCallback(),rm(this),am(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===c.MEDIA_SUBTITLES_SHOWING?am(this):e===c.MEDIA_LANG&&rm(this)}get invokeTargetElement(){var e;return this.invokeTarget!=null?super.invokeTargetElement:(e=qe(this))==null?void 0:e.querySelector("media-captions-menu")}get mediaSubtitlesList(){return nm(this,c.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){sm(this,c.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return nm(this,c.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){sm(this,c.MEDIA_SUBTITLES_SHOWING,e)}}yc.getSlotTemplateHTML=IT;yc.getTooltipContentHTML=RT;const nm=(t,e)=>{const i=t.getAttribute(e);return i?il(i):[]},sm=(t,e,i)=>{if(!(i!=null&&i.length)){t.removeAttribute(e);return}const a=An(i);t.getAttribute(e)!==a&&t.setAttribute(e,a)};E.customElements.get("media-captions-menu-button")||E.customElements.define("media-captions-menu-button",yc);var vf=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},qa=(t,e,i)=>(vf(t,e,"read from private field"),i?i.call(t):e.get(t)),Pl=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Sa=(t,e,i)=>(vf(t,e,"access private method"),i),Ri,Ya,en,to,Xd;const $l={RATES:"rates"};class CT extends ft{constructor(){super(),Pl(this,Ya),Pl(this,to),Pl(this,Ri,new Lu(this,$l.RATES,{defaultValue:Lv})),Sa(this,Ya,en).call(this)}static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_PLAYBACK_RATE,$l.RATES]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===c.MEDIA_PLAYBACK_RATE&&i!=a?(this.value=a,Sa(this,Ya,en).call(this)):e===$l.RATES&&i!=a&&(qa(this,Ri).value=a,Sa(this,Ya,en).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",Sa(this,to,Xd))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",Sa(this,to,Xd))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:qe(this).querySelector("media-playback-rate-menu-button")}get rates(){return qa(this,Ri)}set rates(e){e?Array.isArray(e)?qa(this,Ri).value=e.join(" "):typeof e=="string"&&(qa(this,Ri).value=e):qa(this,Ri).value="",Sa(this,Ya,en).call(this)}get mediaPlaybackRate(){return se(this,c.MEDIA_PLAYBACK_RATE,Xa)}set mediaPlaybackRate(e){pe(this,c.MEDIA_PLAYBACK_RATE,e)}}Ri=new WeakMap;Ya=new WeakSet;en=function(){this.defaultSlot.textContent="";const t=this.mediaPlaybackRate,e=new Set(Array.from(qa(this,Ri)).map(a=>Number(a)));t>0&&!e.has(t)&&e.add(t);const i=Array.from(e).sort((a,r)=>a-r);for(const a of i){const r=pr({type:"radio",text:this.formatMenuItemText(`${a}x`,a),value:a.toString(),checked:t===a});r.prepend(pa(this,"checked-indicator")),this.defaultSlot.append(r)}};to=new WeakSet;Xd=function(){if(!this.value)return;const t=new E.CustomEvent(R.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(t)};E.customElements.get("media-playback-rate-menu")||E.customElements.define("media-playback-rate-menu",CT);const io=1;function LT(t){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
      
      :host([aria-expanded="true"]) slot {
        display: block;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${t.mediaplaybackrate||io}x</slot>
  `}function DT(){return D("Playback rate")}class Tc extends yr{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_PLAYBACK_RATE]}constructor(){var e;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${(e=this.mediaPlaybackRate)!=null?e:io}x`}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),e===c.MEDIA_PLAYBACK_RATE){const r=a?+a:Number.NaN,n=Number.isNaN(r)?io:r;this.container.innerHTML=`${n}x`,this.setAttribute("aria-label",D("Playback rate {playbackRate}",{playbackRate:n}))}}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:qe(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return se(this,c.MEDIA_PLAYBACK_RATE,io)}set mediaPlaybackRate(e){pe(this,c.MEDIA_PLAYBACK_RATE,e)}}Tc.getSlotTemplateHTML=LT;Tc.getTooltipContentHTML=DT;E.customElements.get("media-playback-rate-menu-button")||E.customElements.define("media-playback-rate-menu-button",Tc);var Ac=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},tn=(t,e,i)=>(Ac(t,e,"read from private field"),i?i.call(t):e.get(t)),as=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},om=(t,e,i,a)=>(Ac(t,e,"write to private field"),e.set(t,i),i),wa=(t,e,i)=>(Ac(t,e,"access private method"),i),an,Ja,Ga,rn,ao,Jd;class MT extends ft{constructor(){super(...arguments),as(this,Ga),as(this,ao),as(this,an,[]),as(this,Ja,{})}static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_RENDITION_LIST,c.MEDIA_RENDITION_SELECTED,c.MEDIA_RENDITION_UNAVAILABLE,c.MEDIA_HEIGHT]}static formatMenuItemText(e,i){return super.formatMenuItemText(e,i)}static formatRendition(e,{showBitrate:i=!1}={}){const a=`${Math.min(e.width,e.height)}p`;if(i&&e.bitrate){const r=e.bitrate/1e6,n=`${r.toFixed(r<1?1:0)} Mbps`;return`${a} (${n})`}return this.formatMenuItemText(a,e)}static compareRendition(e,i){var a,r;return i.height===e.height?((a=i.bitrate)!=null?a:0)-((r=e.bitrate)!=null?r:0):i.height-e.height}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===c.MEDIA_RENDITION_SELECTED&&i!==a?(this.value=a??"auto",wa(this,Ga,rn).call(this)):e===c.MEDIA_RENDITION_LIST&&i!==a?(om(this,an,z0(a)),wa(this,Ga,rn).call(this)):e===c.MEDIA_HEIGHT&&i!==a&&wa(this,Ga,rn).call(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",wa(this,ao,Jd))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",wa(this,ao,Jd))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:qe(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return tn(this,an)}set mediaRenditionList(e){om(this,an,e),wa(this,Ga,rn).call(this)}get mediaRenditionSelected(){return oe(this,c.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){le(this,c.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return se(this,c.MEDIA_HEIGHT)}set mediaHeight(e){pe(this,c.MEDIA_HEIGHT,e)}compareRendition(e,i){return this.constructor.compareRendition(e,i)}formatMenuItemText(e,i){return this.constructor.formatMenuItemText(e,i)}formatRendition(e,i){return this.constructor.formatRendition(e,i)}showRenditionBitrate(e){return this.mediaRenditionList.some(i=>i!==e&&i.height===e.height&&i.bitrate!==e.bitrate)}}an=new WeakMap;Ja=new WeakMap;Ga=new WeakSet;rn=function(){if(tn(this,Ja).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&tn(this,Ja).mediaHeight===this.mediaHeight)return;tn(this,Ja).mediaRenditionList=JSON.stringify(this.mediaRenditionList),tn(this,Ja).mediaHeight=this.mediaHeight;const t=this.mediaRenditionList.sort(this.compareRendition.bind(this)),e=t.find(s=>s.id===this.mediaRenditionSelected);for(const s of t)s.selected=s===e;this.defaultSlot.textContent="";const i=!this.mediaRenditionSelected;for(const s of t){const o=this.formatRendition(s,{showBitrate:this.showRenditionBitrate(s)}),l=pr({type:"radio",text:o,value:`${s.id}`,checked:s.selected&&!i});l.prepend(pa(this,"checked-indicator")),this.defaultSlot.append(l)}const a=e&&this.showRenditionBitrate(e),r=i?e?this.formatMenuItemText(`${D("Auto")} • ${this.formatRendition(e,{showBitrate:a})}`,e):this.formatMenuItemText(`${D("Auto")} (${this.mediaHeight}p)`):this.formatMenuItemText(D("Auto")),n=pr({type:"radio",text:r,value:"auto",checked:i});n.dataset.description=r,n.prepend(pa(this,"checked-indicator")),this.defaultSlot.append(n)};ao=new WeakSet;Jd=function(){if(this.value==null)return;const t=new E.CustomEvent(R.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(t)};E.customElements.get("media-rendition-menu")||E.customElements.define("media-rendition-menu",MT);const xT=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;function OT(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${xT}</slot>
  `}function NT(){return D("Quality")}class kc extends yr{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_RENDITION_SELECTED,c.MEDIA_RENDITION_UNAVAILABLE,c.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",D("quality"))}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:qe(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return oe(this,c.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){le(this,c.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return se(this,c.MEDIA_HEIGHT)}set mediaHeight(e){pe(this,c.MEDIA_HEIGHT,e)}}kc.getSlotTemplateHTML=OT;kc.getTooltipContentHTML=NT;E.customElements.get("media-rendition-menu-button")||E.customElements.define("media-rendition-menu-button",kc);var Sc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Yt=(t,e,i)=>(Sc(t,e,"read from private field"),i?i.call(t):e.get(t)),xt=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ff=(t,e,i,a)=>(Sc(t,e,"write to private field"),e.set(t,i),i),mt=(t,e,i)=>(Sc(t,e,"access private method"),i),fr,Mn,cl,Ji,er,wc,Ef,ro,eu,no,tu,_f,Fo,Ko,so;function PT(t){return`
      ${ft.getTemplateHTML(t)}
      <style>
        :host {
          --_menu-bg: rgb(20 20 30 / .8);
          background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
          min-width: var(--media-settings-menu-min-width, 170px);
          border-radius: 2px;
          overflow: hidden;
        }
      </style>
    `}class bf extends ft{constructor(){super(),xt(this,Mn),xt(this,Ji),xt(this,wc),xt(this,ro),xt(this,tu),xt(this,fr,!1),xt(this,no,e=>{const i=e.target,a=(i==null?void 0:i.nodeName)==="VIDEO",r=mt(this,ro,eu).call(this,i);(a||r)&&(Yt(this,fr)?mt(this,Ji,er).call(this):mt(this,tu,_f).call(this,e))}),xt(this,Fo,e=>{const i=e.target,a=this.contains(i),r=e.button===2,n=(i==null?void 0:i.nodeName)==="VIDEO",s=mt(this,ro,eu).call(this,i);a||r&&(n||s)||mt(this,Ji,er).call(this)}),xt(this,Ko,e=>{e.key==="Escape"&&mt(this,Ji,er).call(this)}),xt(this,so,e=>{var i,a;const r=e.target;if((i=r.matches)!=null&&i.call(r,'button[invoke="copy"]')){const n=(a=r.closest("media-context-menu-item"))==null?void 0:a.querySelector('input[slot="copy"]');n&&navigator.clipboard.writeText(n.value)}mt(this,Ji,er).call(this)}),this.setAttribute("noautohide",""),mt(this,Mn,cl).call(this)}connectedCallback(){super.connectedCallback(),qe(this).addEventListener("contextmenu",Yt(this,no)),this.addEventListener("click",Yt(this,so))}disconnectedCallback(){super.disconnectedCallback(),qe(this).removeEventListener("contextmenu",Yt(this,no)),this.removeEventListener("click",Yt(this,so)),document.removeEventListener("mousedown",Yt(this,Fo)),document.removeEventListener("keydown",Yt(this,Ko))}}fr=new WeakMap;Mn=new WeakSet;cl=function(){this.hidden=!Yt(this,fr)};Ji=new WeakSet;er=function(){ff(this,fr,!1),mt(this,Mn,cl).call(this)};wc=new WeakSet;Ef=function(){document.querySelectorAll("media-context-menu").forEach(e=>{var i;e!==this&&mt(i=e,Ji,er).call(i)})};ro=new WeakSet;eu=function(t){return t?t.hasAttribute("slot")&&t.getAttribute("slot")==="media"?!0:t.nodeName.includes("-")&&t.tagName.includes("-")?t.hasAttribute("src")||t.hasAttribute("poster")||t.hasAttribute("preload")||t.hasAttribute("playsinline"):!1:!1};no=new WeakMap;tu=new WeakSet;_f=function(t){t.preventDefault(),mt(this,wc,Ef).call(this),ff(this,fr,!0),this.style.position="fixed",this.style.left=`${t.clientX}px`,this.style.top=`${t.clientY}px`,mt(this,Mn,cl).call(this),document.addEventListener("mousedown",Yt(this,Fo),{once:!0}),document.addEventListener("keydown",Yt(this,Ko),{once:!0})};Fo=new WeakMap;Ko=new WeakMap;so=new WeakMap;bf.getTemplateHTML=PT;E.customElements.get("media-context-menu")||E.customElements.define("media-context-menu",bf);function $T(t){return`
    ${$i.getTemplateHTML.call(this,t)}
    <style>
        ::slotted(*) {
            color: var(--media-text-color, white);
            text-decoration: none;
            border: none;
            background: none;
            cursor: pointer;
            padding: 0;
            min-height: var(--media-control-height, 24px);
        }
    </style>
  `}class Ic extends $i{}Ic.shadowRootOptions={mode:"open"};Ic.getTemplateHTML=$T;E.customElements.get("media-context-menu-item")||E.customElements.define("media-context-menu-item",Ic);var gf=t=>{throw TypeError(t)},Rc=(t,e,i)=>e.has(t)||gf("Cannot "+i),X=(t,e,i)=>(Rc(t,e,"read from private field"),i?i.call(t):e.get(t)),St=(t,e,i)=>e.has(t)?gf("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),ei=(t,e,i,a)=>(Rc(t,e,"write to private field"),e.set(t,i),i),ye=(t,e,i)=>(Rc(t,e,"access private method"),i),hl=class{addEventListener(){}removeEventListener(){}dispatchEvent(t){return!0}};if(typeof DocumentFragment>"u"){class t extends hl{}globalThis.DocumentFragment=t}var Cc=class extends hl{},UT=class extends hl{},HT={get(t){},define(t,e,i){},getName(t){return null},upgrade(t){},whenDefined(t){return Promise.resolve(Cc)}},oo,BT=class{constructor(e,i={}){St(this,oo),ei(this,oo,i==null?void 0:i.detail)}get detail(){return X(this,oo)}initCustomEvent(){}};oo=new WeakMap;function WT(t,e){return new Cc}var yf={document:{createElement:WT},DocumentFragment,customElements:HT,CustomEvent:BT,EventTarget:hl,HTMLElement:Cc,HTMLVideoElement:UT},Tf=typeof window>"u"||typeof globalThis.customElements>"u",zt=Tf?yf:globalThis,Vo=Tf?yf.document:globalThis.document;function FT(t){let e="";return Object.entries(t).forEach(([i,a])=>{a!=null&&(e+=`${iu(i)}: ${a}; `)}),e?e.trim():void 0}function iu(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function Af(t){return t.replace(/[-_]([a-z])/g,(e,i)=>i.toUpperCase())}function et(t){if(t==null)return;let e=+t;return Number.isNaN(e)?void 0:e}function kf(t){let e=KT(t).toString();return e?"?"+e:""}function KT(t){let e={};for(let i in t)t[i]!=null&&(e[i]=t[i]);return new URLSearchParams(e)}var Sf=(t,e)=>!t||!e?!1:t.contains(e)?!0:Sf(t,e.getRootNode().host),wf="mux.com",VT=()=>{try{return"3.10.2"}catch{}return"UNKNOWN"},qT=VT(),If=()=>qT,YT=(t,{token:e,customDomain:i=wf,thumbnailTime:a,programTime:r}={})=>{var n;let s=e==null?a:void 0,{aud:o}=(n=tr(e))!=null?n:{};if(!(e&&o!=="t"))return`https://image.${i}/${t}/thumbnail.webp${kf({token:e,time:s,program_time:r})}`},GT=(t,{token:e,customDomain:i=wf,programStartTime:a,programEndTime:r}={})=>{var n;let{aud:s}=(n=tr(e))!=null?n:{};if(!(e&&s!=="s"))return`https://image.${i}/${t}/storyboard.vtt${kf({token:e,format:"webp",program_start_time:a,program_end_time:r})}`},Lc=t=>{if(t){if([j.LIVE,j.ON_DEMAND].includes(t))return t;if(t!=null&&t.includes("live"))return j.LIVE}},QT={crossorigin:"crossOrigin",playsinline:"playsInline"};function zT(t){var e;return(e=QT[t])!=null?e:Af(t)}var Qa,za,Ve,ZT=class{constructor(e,i){St(this,Qa),St(this,za),St(this,Ve,[]),ei(this,Qa,e),ei(this,za,i)}[Symbol.iterator](){return X(this,Ve).values()}get length(){return X(this,Ve).length}get value(){var e;return(e=X(this,Ve).join(" "))!=null?e:""}set value(e){var i;e!==this.value&&(ei(this,Ve,[]),this.add(...(i=e==null?void 0:e.split(" "))!=null?i:[]))}toString(){return this.value}item(e){return X(this,Ve)[e]}values(){return X(this,Ve).values()}keys(){return X(this,Ve).keys()}forEach(e){X(this,Ve).forEach(e)}add(...e){var i,a;e.forEach(r=>{this.contains(r)||X(this,Ve).push(r)}),!(this.value===""&&!((i=X(this,Qa))!=null&&i.hasAttribute(`${X(this,za)}`)))&&((a=X(this,Qa))==null||a.setAttribute(`${X(this,za)}`,`${this.value}`))}remove(...e){var i;e.forEach(a=>{X(this,Ve).splice(X(this,Ve).indexOf(a),1)}),(i=X(this,Qa))==null||i.setAttribute(`${X(this,za)}`,`${this.value}`)}contains(e){return X(this,Ve).includes(e)}toggle(e,i){return typeof i<"u"?i?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,i){this.remove(e),this.add(i)}};Qa=new WeakMap,za=new WeakMap,Ve=new WeakMap;var Rf=`[mux-player ${If()}]`;function oi(...t){console.warn(Rf,...t)}function pt(...t){console.error(Rf,...t)}function Cf(t){var e;let i=(e=t.message)!=null?e:"";t.context&&(i+=` ${t.context}`),t.file&&(i+=` ${M("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${t.file}`),oi(i)}var Ue={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},zi={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},lm=Object.freeze({length:0,start(t){let e=t>>>0;if(e>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${e}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(t){let e=t>>>0;if(e>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${e}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),jT=Object.values(Ue).filter(t=>Ue.PLAYSINLINE!==t),XT=Object.values(zi),JT=[...jT,...XT],eA=class extends zt.HTMLElement{static get observedAttributes(){return JT}constructor(){super()}attributeChangedCallback(t,e,i){var a,r;switch(t){case zi.MUTED:{this.media&&(this.media.muted=i!=null,this.media.defaultMuted=i!=null);return}case zi.VOLUME:{let n=(a=et(i))!=null?a:1;this.media&&(this.media.volume=n);return}case zi.PLAYBACKRATE:{let n=(r=et(i))!=null?r:1;this.media&&(this.media.playbackRate=n,this.media.defaultPlaybackRate=n);return}}}play(){var t,e;return(e=(t=this.media)==null?void 0:t.play())!=null?e:Promise.reject()}pause(){var t;(t=this.media)==null||t.pause()}load(){var t;(t=this.media)==null||t.load()}get media(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var t,e;return(e=(t=this.media)==null?void 0:t.paused)!=null?e:!0}get duration(){var t,e;return(e=(t=this.media)==null?void 0:t.duration)!=null?e:NaN}get ended(){var t,e;return(e=(t=this.media)==null?void 0:t.ended)!=null?e:!1}get buffered(){var t,e;return(e=(t=this.media)==null?void 0:t.buffered)!=null?e:lm}get seekable(){var t,e;return(e=(t=this.media)==null?void 0:t.seekable)!=null?e:lm}get readyState(){var t,e;return(e=(t=this.media)==null?void 0:t.readyState)!=null?e:0}get videoWidth(){var t,e;return(e=(t=this.media)==null?void 0:t.videoWidth)!=null?e:0}get videoHeight(){var t,e;return(e=(t=this.media)==null?void 0:t.videoHeight)!=null?e:0}get currentSrc(){var t,e;return(e=(t=this.media)==null?void 0:t.currentSrc)!=null?e:""}get currentTime(){var t,e;return(e=(t=this.media)==null?void 0:t.currentTime)!=null?e:0}set currentTime(t){this.media&&(this.media.currentTime=Number(t))}get volume(){var t,e;return(e=(t=this.media)==null?void 0:t.volume)!=null?e:1}set volume(t){this.media&&(this.media.volume=Number(t))}get playbackRate(){var t,e;return(e=(t=this.media)==null?void 0:t.playbackRate)!=null?e:1}set playbackRate(t){this.media&&(this.media.playbackRate=Number(t))}get defaultPlaybackRate(){var t;return(t=et(this.getAttribute(zi.PLAYBACKRATE)))!=null?t:1}set defaultPlaybackRate(t){t!=null?this.setAttribute(zi.PLAYBACKRATE,`${t}`):this.removeAttribute(zi.PLAYBACKRATE)}get crossOrigin(){return xr(this,Ue.CROSSORIGIN)}set crossOrigin(t){this.setAttribute(Ue.CROSSORIGIN,`${t}`)}get autoplay(){return xr(this,Ue.AUTOPLAY)!=null}set autoplay(t){t?this.setAttribute(Ue.AUTOPLAY,typeof t=="string"?t:""):this.removeAttribute(Ue.AUTOPLAY)}get loop(){return xr(this,Ue.LOOP)!=null}set loop(t){t?this.setAttribute(Ue.LOOP,""):this.removeAttribute(Ue.LOOP)}get muted(){var t,e;return(e=(t=this.media)==null?void 0:t.muted)!=null?e:!1}set muted(t){this.media&&(this.media.muted=!!t)}get defaultMuted(){return xr(this,Ue.MUTED)!=null}set defaultMuted(t){t?this.setAttribute(Ue.MUTED,""):this.removeAttribute(Ue.MUTED)}get playsInline(){return xr(this,Ue.PLAYSINLINE)!=null}set playsInline(t){pt("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(t){["","none","metadata","auto"].includes(t)?this.setAttribute(Ue.PRELOAD,t):this.removeAttribute(Ue.PRELOAD)}};function xr(t,e){return t.media?t.media.getAttribute(e):t.getAttribute(e)}var dm=eA,tA=`:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-menu-button-display: var(--captions-menu-button, var(--media-captions-button-display));
  --media-rendition-menu-button-display: var(--rendition-menu-button);
  --media-audio-track-menu-button-display: var(--audio-track-menu-button);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button, var(--_cast-button-drm-display));
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-playback-rate-menu-button-display: var(--playback-rate-menu-button);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  line-height: 0;
  width: 100%;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--top-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--top-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--top-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --captions-menu-button,
    var(--media-playback-rate-button-display, var(--top-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--center-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--center-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--center-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--center-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--bottom-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--bottom-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--bottom-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--bottom-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}

:host([no-tooltips]) {
  --media-tooltip-display: none;
}
`,Or=new WeakMap,iA=class Lf{constructor(e,i){this.element=e,this.type=i,this.element.addEventListener(this.type,this);let a=Or.get(this.element);a&&a.set(this.type,this)}set(e){if(typeof e=="function")this.handleEvent=e.bind(this.element);else if(typeof e=="object"&&typeof e.handleEvent=="function")this.handleEvent=e.handleEvent.bind(e);else{this.element.removeEventListener(this.type,this);let i=Or.get(this.element);i&&i.delete(this.type)}}static for(e){Or.has(e.element)||Or.set(e.element,new Map);let i=e.attributeName.slice(2),a=Or.get(e.element);return a&&a.has(i)?a.get(i):new Lf(e.element,i)}};function aA(t,e){return t instanceof Rt&&t.attributeName.startsWith("on")?(iA.for(t).set(e),t.element.removeAttributeNS(t.attributeNamespace,t.attributeName),!0):!1}function rA(t,e){return e instanceof Df&&t instanceof gr?(e.renderInto(t),!0):!1}function nA(t,e){return e instanceof DocumentFragment&&t instanceof gr?(e.childNodes.length&&t.replace(...e.childNodes),!0):!1}function sA(t,e){if(t instanceof Rt){let i=t.attributeNamespace,a=t.element.getAttributeNS(i,t.attributeName);return String(e)!==a&&(t.value=String(e)),!0}return t.value=String(e),!0}function oA(t,e){if(t instanceof Rt&&e instanceof Element){let i=t.element;return i[t.attributeName]!==e&&(t.element.removeAttributeNS(t.attributeNamespace,t.attributeName),i[t.attributeName]=e),!0}return!1}function lA(t,e){if(typeof e=="boolean"&&t instanceof Rt){let i=t.attributeNamespace,a=t.element.hasAttributeNS(i,t.attributeName);return e!==a&&(t.booleanValue=e),!0}return!1}function dA(t,e){return e===!1&&t instanceof gr?(t.replace(""),!0):!1}function uA(t,e){oA(t,e)||lA(t,e)||aA(t,e)||dA(t,e)||rA(t,e)||nA(t,e)||sA(t,e)}var Ul=new Map,um=new WeakMap,cm=new WeakMap,Df=class{constructor(e,i,a){this.strings=e,this.values=i,this.processor=a,this.stringsKey=this.strings.join("")}get template(){if(Ul.has(this.stringsKey))return Ul.get(this.stringsKey);{let e=Vo.createElement("template"),i=this.strings.length-1;return e.innerHTML=this.strings.reduce((a,r,n)=>a+r+(n<i?`{{ ${n} }}`:""),""),Ul.set(this.stringsKey,e),e}}renderInto(e){var i;let a=this.template;if(um.get(e)!==a){um.set(e,a);let n=new ll(a,this.values,this.processor);cm.set(e,n),e instanceof gr?e.replace(...n.children):e.appendChild(n);return}let r=cm.get(e);(i=r==null?void 0:r.update)==null||i.call(r,this.values)}},cA={processCallback(t,e,i){var a;if(i){for(let[r,n]of e)if(r in i){let s=(a=i[r])!=null?a:"";uA(n,s)}}}};function lo(t,...e){return new Df(t,e,cA)}function hA(t,e){t.renderInto(e)}var mA=t=>{let{tokens:e}=t;return e.drm?":host(:not([cast-receiver])) { --_cast-button-drm-display: none; }":""},pA=t=>lo`
  <style>
    ${mA(t)}
    ${tA}
  </style>
  ${_A(t)}
`,vA=t=>{let e=t.hotKeys?`${t.hotKeys}`:"";return Lc(t.streamType)==="live"&&(e+=" noarrowleft noarrowright"),e},fA={TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",THUMB:"thumb",DISPLAY:"display",CONTROL_BAR:"control-bar",MENU_BUTTON:"menu-button",MENU:"menu",MENU_ITEM:"menu-item",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"},EA=Object.values(fA).join(", "),_A=t=>{var e,i,a,r,n,s,o,l,u,p,m,h,d,v,f,g,_,T,b,w,L,P,H,z,ie,V,U,Pe,Ge,Qe,fe,Be,Lt,We,Et,ze,Re,$e;return lo`
  <media-theme
    template="${t.themeTemplate||!1}"
    defaultstreamtype="${(e=t.defaultStreamType)!=null?e:!1}"
    hotkeys="${vA(t)||!1}"
    nohotkeys="${t.noHotKeys||!t.hasSrc||!1}"
    noautoseektolive="${!!((i=t.streamType)!=null&&i.includes(j.LIVE))&&t.targetLiveWindow!==0}"
    novolumepref="${t.novolumepref||!1}"
    nomutedpref="${t.nomutedpref||!1}"
    disabled="${!t.hasSrc||t.isDialogOpen}"
    audio="${(a=t.audio)!=null?a:!1}"
    style="${(r=FT({"--media-primary-color":t.primaryColor,"--media-secondary-color":t.secondaryColor,"--media-accent-color":t.accentColor}))!=null?r:!1}"
    defaultsubtitles="${!t.defaultHiddenCaptions}"
    forwardseekoffset="${(n=t.forwardSeekOffset)!=null?n:!1}"
    backwardseekoffset="${(s=t.backwardSeekOffset)!=null?s:!1}"
    playbackrates="${(o=t.playbackRates)!=null?o:!1}"
    defaultshowremainingtime="${(l=t.defaultShowRemainingTime)!=null?l:!1}"
    defaultduration="${(u=t.defaultDuration)!=null?u:!1}"
    hideduration="${(p=t.hideDuration)!=null?p:!1}"
    title="${(m=t.title)!=null?m:!1}"
    videotitle="${(h=t.videoTitle)!=null?h:!1}"
    proudlydisplaymuxbadge="${(d=t.proudlyDisplayMuxBadge)!=null?d:!1}"
    exportparts="${EA}"
    onclose="${t.onCloseErrorDialog}"
    onfocusin="${t.onFocusInErrorDialog}"
  >
    <mux-video
      slot="media"
      inert="${(v=t.noHotKeys)!=null?v:!1}"
      target-live-window="${(f=t.targetLiveWindow)!=null?f:!1}"
      stream-type="${(g=Lc(t.streamType))!=null?g:!1}"
      crossorigin="${(_=t.crossOrigin)!=null?_:""}"
      playsinline
      autoplay="${(T=t.autoplay)!=null?T:!1}"
      muted="${(b=t.muted)!=null?b:!1}"
      loop="${(w=t.loop)!=null?w:!1}"
      preload="${(L=t.preload)!=null?L:!1}"
      debug="${(P=t.debug)!=null?P:!1}"
      prefer-cmcd="${(H=t.preferCmcd)!=null?H:!1}"
      disable-tracking="${(z=t.disableTracking)!=null?z:!1}"
      disable-cookies="${(ie=t.disableCookies)!=null?ie:!1}"
      prefer-playback="${(V=t.preferPlayback)!=null?V:!1}"
      start-time="${t.startTime!=null?t.startTime:!1}"
      beacon-collection-domain="${(U=t.beaconCollectionDomain)!=null?U:!1}"
      player-init-time="${(Pe=t.playerInitTime)!=null?Pe:!1}"
      player-software-name="${(Ge=t.playerSoftwareName)!=null?Ge:!1}"
      player-software-version="${(Qe=t.playerSoftwareVersion)!=null?Qe:!1}"
      env-key="${(fe=t.envKey)!=null?fe:!1}"
      custom-domain="${(Be=t.customDomain)!=null?Be:!1}"
      src="${t.src?t.src:t.playbackId?zl(t):!1}"
      cast-src="${t.src?t.src:t.playbackId?zl(t):!1}"
      cast-receiver="${(Lt=t.castReceiver)!=null?Lt:!1}"
      drm-token="${(Et=(We=t.tokens)==null?void 0:We.drm)!=null?Et:!1}"
      exportparts="video"
      disable-pseudo-ended="${(ze=t.disablePseudoEnded)!=null?ze:!1}"
      max-auto-resolution="${(Re=t.maxAutoResolution)!=null?Re:!1}"
    >
      ${t.storyboard?lo`<track label="thumbnails" default kind="metadata" src="${t.storyboard}" />`:lo``}
      <slot></slot>
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${t.poster?t.poster:!1}"
        placeholdersrc="${($e=t.placeholder)!=null?$e:!1}"
      ></media-poster-image>
    </slot>
  </media-theme>
`},Mf=t=>t.charAt(0).toUpperCase()+t.slice(1),bA=(t,e=!1)=>{var i,a;if(t.muxCode){let r=Mf((i=t.errorCategory)!=null?i:"video"),n=Go((a=t.errorCategory)!=null?a:re.VIDEO);if(t.muxCode===O.NETWORK_OFFLINE)return M("Your device appears to be offline",e);if(t.muxCode===O.NETWORK_TOKEN_EXPIRED)return M("{category} URL has expired",e).format({category:r});if([O.NETWORK_TOKEN_SUB_MISMATCH,O.NETWORK_TOKEN_AUD_MISMATCH,O.NETWORK_TOKEN_AUD_MISSING,O.NETWORK_TOKEN_MALFORMED].includes(t.muxCode))return M("{category} URL is formatted incorrectly",e).format({category:r});if(t.muxCode===O.NETWORK_TOKEN_MISSING)return M("Invalid {categoryName} URL",e).format({categoryName:n});if(t.muxCode===O.NETWORK_NOT_FOUND)return M("{category} does not exist",e).format({category:r});if(t.muxCode===O.NETWORK_NOT_READY){let s=t.streamType==="live"?"Live stream":"Video";return M("{mediaType} is not currently available",e).format({mediaType:s})}}if(t.code){if(t.code===C.MEDIA_ERR_NETWORK)return M("Network Error",e);if(t.code===C.MEDIA_ERR_DECODE)return M("Media Error",e);if(t.code===C.MEDIA_ERR_SRC_NOT_SUPPORTED)return M("Source Not Supported",e)}return M("Error",e)},gA=(t,e=!1)=>{var i,a;if(t.muxCode){let r=Mf((i=t.errorCategory)!=null?i:"video"),n=Go((a=t.errorCategory)!=null?a:re.VIDEO);return t.muxCode===O.NETWORK_OFFLINE?M("Check your internet connection and try reloading this video.",e):t.muxCode===O.NETWORK_TOKEN_EXPIRED?M("The video’s secured {tokenNamePrefix}-token has expired.",e).format({tokenNamePrefix:n}):t.muxCode===O.NETWORK_TOKEN_SUB_MISMATCH?M("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",e).format({tokenNamePrefix:n}):t.muxCode===O.NETWORK_TOKEN_MALFORMED?M("{category} URL is formatted incorrectly",e).format({category:r}):[O.NETWORK_TOKEN_AUD_MISMATCH,O.NETWORK_TOKEN_AUD_MISSING].includes(t.muxCode)?M("The {tokenNamePrefix}-token is formatted with incorrect information.",e).format({tokenNamePrefix:n}):[O.NETWORK_TOKEN_MISSING,O.NETWORK_INVALID_URL].includes(t.muxCode)?M("The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.",e).format({tokenNamePrefix:n}):t.muxCode===O.NETWORK_NOT_FOUND?"":t.message}return t.code&&(t.code===C.MEDIA_ERR_NETWORK||t.code===C.MEDIA_ERR_DECODE||(t.code,C.MEDIA_ERR_SRC_NOT_SUPPORTED)),t.message},yA=(t,e=!1)=>{let i=bA(t,e).toString(),a=gA(t,e).toString();return{title:i,message:a}},TA=t=>{if(t.muxCode){if(t.muxCode===O.NETWORK_TOKEN_EXPIRED)return"403-expired-token.md";if(t.muxCode===O.NETWORK_TOKEN_MALFORMED)return"403-malformatted-token.md";if([O.NETWORK_TOKEN_AUD_MISMATCH,O.NETWORK_TOKEN_AUD_MISSING].includes(t.muxCode))return"403-incorrect-aud-value.md";if(t.muxCode===O.NETWORK_TOKEN_SUB_MISMATCH)return"403-playback-id-mismatch.md";if(t.muxCode===O.NETWORK_TOKEN_MISSING)return"missing-signed-tokens.md";if(t.muxCode===O.NETWORK_NOT_FOUND)return"404-not-found.md";if(t.muxCode===O.NETWORK_NOT_READY)return"412-not-playable.md"}if(t.code){if(t.code===C.MEDIA_ERR_NETWORK)return"";if(t.code===C.MEDIA_ERR_DECODE)return"media-decode-error.md";if(t.code===C.MEDIA_ERR_SRC_NOT_SUPPORTED)return"media-src-not-supported.md"}return""},hm=(t,e)=>{let i=TA(t);return{message:t.message,context:t.context,file:i}},AA=`<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;
      --media-tooltip-container-margin: 6px;
      --media-tooltip-distance: 18px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
    @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      --media-preview-chapter-text-shadow: none;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='menu'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: 50px;
      padding: 2.5px 10px;
    }

    [part~='menu']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='menu']::part(menu-item) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='menu']::part(checked) {
      font-weight: 700;
    }

    media-captions-menu,
    media-rendition-menu,
    media-audio-track-menu,
    media-playback-rate-menu {
      position: absolute; /* ensure they don't take up space in DOM on load */
      --media-menu-background: var(--_primary-color);
      --media-menu-item-checked-background: transparent;
      --media-text-color: var(--_text-color);
      --media-menu-item-hover-background: transparent;
      --media-menu-item-hover-outline: var(--_accent-color) solid 1px;
    }

    media-rendition-menu {
      min-width: 140px;
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-menu-button {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-menu-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-menu {
      --media-menu-flex-direction: row;
      --media-menu-item-checked-background: var(--_accent-color);
      --media-menu-item-checked-indicator-display: none;
      margin-right: 6px;
      padding: 0;
      --media-menu-gap: 0.25em;
    }

    media-playback-rate-menu[part~='menu']::part(menu-item) {
      padding: 6px 6px 6px 8px;
    }

    media-playback-rate-menu[part~='menu']::part(checked) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps:
        hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%, hsl(0 0% 0% / 0.104) 22.5%,
        hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%, hsl(0 0% 0% / 0.45) 47.1%,
        hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%, hsl(0 0% 0% / 0.825) 71%,
        hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%, hsl(0 0% 0%) 100%;
    }

    :host([title]) media-control-bar[slot='top-chrome']::before,
    :host([videotitle]) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 20;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      --media-tooltip-display: none;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      /* Using \`forwards\` would lead to a laggy UI after the animation got in the end state */
      animation: 0.3s linear pre-play-hide;
      opacity: 0;
      pointer-events: none;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-error-dialog:not([mediaerrorcode]) {
      opacity: 0;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-menu-button: none;
      --bottom-pip-button: none;
    }

    [part='mux-badge'] {
      position: absolute;
      bottom: 10px;
      right: 10px;
      z-index: 2;
      opacity: 0.6;
      transition:
        opacity 0.2s ease-in-out,
        bottom 0.2s ease-in-out;
    }

    [part='mux-badge']:hover {
      opacity: 1;
    }

    [part='mux-badge'] a {
      font-size: 14px;
      font-family: var(--_font-family);
      color: var(--_primary-color);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    [part='mux-badge'] .mux-badge-text {
      transition: opacity 0.5s ease-in-out;
      opacity: 0;
    }

    [part='mux-badge'] .mux-badge-logo {
      width: 40px;
      height: auto;
      display: inline-block;
    }

    [part='mux-badge'] .mux-badge-logo svg {
      width: 100%;
      height: 100%;
      fill: white;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'],
    media-controller:not([userinactive]) [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      transition: bottom 0.1s ease-in-out;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      transition: bottom 0.2s ease-in-out 0.62s;
    }

    media-controller:not([userinactive]) [part='mux-badge'] .mux-badge-text,
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] .mux-badge-text {
      opacity: 1;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] .mux-badge-text {
      opacity: 0;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive])[mediahasplayed] [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      bottom: calc(28px + var(--media-control-height, 0px) + var(--media-control-padding, 0px) * 2);
    }
  </style>

  <template partial="TitleDisplay">
    <template if="videotitle">
      <template if="videotitle != true">
        <media-text-display part="top title display" class="title-display">{{videotitle}}</media-text-display>
      </template>
    </template>
    <template if="!videotitle">
      <template if="title">
        <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
      </template>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenu">
    <media-captions-menu-button part="bottom captions button">
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
        <path
          d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
        <path
          d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
        />
        <path
          d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
        />
        <path
          d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
        />
      </svg>
    </media-captions-menu-button>
    <media-captions-menu
      hidden
      anchor="auto"
      part="bottom captions menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg></div
    ></media-captions-menu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateMenu">
    <media-playback-rate-menu-button part="bottom playback-rate button"></media-playback-rate-menu-button>
    <media-playback-rate-menu
      hidden
      anchor="auto"
      rates="{{playbackrates}}"
      exportparts="menu-item"
      part="bottom playback-rate menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-menu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}" exportparts="thumb">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackMenu">
    <media-audio-track-menu-button part="bottom audio-track button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
        <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
        <path
          d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
        />
      </svg>
    </media-audio-track-menu-button>
    <media-audio-track-menu
      hidden
      anchor="auto"
      part="bottom audio-track menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-audio-track-menu>
  </template>

  <template partial="RenditionMenu">
    <media-rendition-menu-button part="bottom rendition button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
        <path
          d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </svg>
    </media-rendition-menu-button>
    <media-rendition-menu
      hidden
      anchor="auto"
      part="bottom rendition menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            opacity: 0;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-rendition-menu>
  </template>

  <template partial="MuxBadge">
    <div part="mux-badge">
      <a href="https://www.mux.com/player" target="_blank">
        <span class="mux-badge-text">Powered by</span>
        <div class="mux-badge-logo">
          <svg
            viewBox="0 0 1600 500"
            style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
          >
            <g>
              <path
                d="M994.287,93.486c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m0,-93.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,68.943 -56.09,125.033 -125.032,125.033c-68.942,-0 -125.03,-56.09 -125.03,-125.033l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,137.853 112.149,250.003 249.999,250.003c137.851,-0 250.001,-112.15 250.001,-250.003l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M1537.51,468.511c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m-275.883,-218.509l-143.33,143.329c-24.402,24.402 -24.402,63.966 0,88.368c24.402,24.402 63.967,24.402 88.369,-0l143.33,-143.329l143.328,143.329c24.402,24.4 63.967,24.402 88.369,-0c24.403,-24.402 24.403,-63.966 0.001,-88.368l-143.33,-143.329l0.001,-0.004l143.329,-143.329c24.402,-24.402 24.402,-63.965 0,-88.367c-24.402,-24.402 -63.967,-24.402 -88.369,-0l-143.329,143.328l-143.329,-143.328c-24.402,-24.401 -63.967,-24.402 -88.369,-0c-24.402,24.402 -24.402,63.965 0,88.367l143.329,143.329l0,0.004Z"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M437.511,468.521c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m23.915,-463.762c-23.348,-9.672 -50.226,-4.327 -68.096,13.544l-143.331,143.329l-143.33,-143.329c-17.871,-17.871 -44.747,-23.216 -68.096,-13.544c-23.349,9.671 -38.574,32.455 -38.574,57.729l0,375.026c0,34.51 27.977,62.486 62.487,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-224.173l80.843,80.844c24.404,24.402 63.965,24.402 88.369,-0l80.843,-80.844l0,224.173c0,34.51 27.976,62.486 62.486,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-375.026c0,-25.274 -15.224,-48.058 -38.573,-57.729"
                style="fill-rule: nonzero"
              ></path>
            </g>
          </svg>
        </div>
      </a>
    </div>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>

    <template if="!audio">
      <media-error-dialog slot="dialog" noautohide></media-error-dialog>
      <!-- Pre-playback UI -->
      <!-- same for both on-demand and live -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="!breakpointsm">{{>PlayButton section="center"}}</template>
        <template if="breakpointsm">{{>PrePlayButton section="center"}}</template>
      </div>

      <!-- Mux Badge -->
      <template if="proudlydisplaymuxbadge"> {{>MuxBadge}} </template>

      <!-- Autoplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>PlaybackRateMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
          {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateMenu}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}}
          <template if="breakpointsm">
            {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`,au=Vo.createElement("template");"innerHTML"in au&&(au.innerHTML=AA);var mm,pm,xf=class extends dl{};xf.template=(pm=(mm=au.content)==null?void 0:mm.children)==null?void 0:pm[0];zt.customElements.get("media-theme-gerwig")||zt.customElements.define("media-theme-gerwig",xf);var kA="gerwig",ni={SRC:"src",POSTER:"poster"},A={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",FULLSCREEN_ELEMENT:"fullscreen-element",DRM_TOKEN:"drm-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",VIDEO_TITLE:"video-title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref",NO_MUTED_PREF:"no-muted-pref",CAST_RECEIVER:"cast-receiver",NO_TOOLTIPS:"no-tooltips",PROUDLY_DISPLAY_MUX_BADGE:"proudly-display-mux-badge",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended"},ru=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","videotitle","novolumepref","nomutedpref","proudlydisplaymuxbadge"];function SA(t,e){var i,a,r;return{src:!t.playbackId&&t.src,playbackId:t.playbackId,hasSrc:!!t.playbackId||!!t.src||!!t.currentSrc,poster:t.poster,storyboard:((i=t.media)==null?void 0:i.currentSrc)&&t.storyboard,storyboardSrc:t.getAttribute(A.STORYBOARD_SRC),fullscreenElement:t.getAttribute(A.FULLSCREEN_ELEMENT),placeholder:t.getAttribute("placeholder"),themeTemplate:IA(t),thumbnailTime:!t.tokens.thumbnail&&t.thumbnailTime,autoplay:t.autoplay,crossOrigin:t.crossOrigin,loop:t.loop,noHotKeys:t.hasAttribute(A.NOHOTKEYS),hotKeys:t.getAttribute(A.HOTKEYS),muted:t.muted,paused:t.paused,preload:t.preload,envKey:t.envKey,preferCmcd:t.preferCmcd,debug:t.debug,disableTracking:t.disableTracking,disableCookies:t.disableCookies,tokens:t.tokens,beaconCollectionDomain:t.beaconCollectionDomain,maxResolution:t.maxResolution,minResolution:t.minResolution,maxAutoResolution:t.maxAutoResolution,programStartTime:t.programStartTime,programEndTime:t.programEndTime,assetStartTime:t.assetStartTime,assetEndTime:t.assetEndTime,renditionOrder:t.renditionOrder,metadata:t.metadata,playerInitTime:t.playerInitTime,playerSoftwareName:t.playerSoftwareName,playerSoftwareVersion:t.playerSoftwareVersion,startTime:t.startTime,preferPlayback:t.preferPlayback,audio:t.audio,defaultStreamType:t.defaultStreamType,targetLiveWindow:t.getAttribute(y.TARGET_LIVE_WINDOW),streamType:Lc(t.getAttribute(y.STREAM_TYPE)),primaryColor:t.getAttribute(A.PRIMARY_COLOR),secondaryColor:t.getAttribute(A.SECONDARY_COLOR),accentColor:t.getAttribute(A.ACCENT_COLOR),forwardSeekOffset:t.forwardSeekOffset,backwardSeekOffset:t.backwardSeekOffset,defaultHiddenCaptions:t.defaultHiddenCaptions,defaultDuration:t.defaultDuration,defaultShowRemainingTime:t.defaultShowRemainingTime,hideDuration:RA(t),playbackRates:t.getAttribute(A.PLAYBACK_RATES),customDomain:(a=t.getAttribute(y.CUSTOM_DOMAIN))!=null?a:void 0,title:t.getAttribute(A.TITLE),videoTitle:(r=t.getAttribute(A.VIDEO_TITLE))!=null?r:t.getAttribute(A.TITLE),novolumepref:t.hasAttribute(A.NO_VOLUME_PREF),nomutedpref:t.hasAttribute(A.NO_MUTED_PREF),proudlyDisplayMuxBadge:t.hasAttribute(A.PROUDLY_DISPLAY_MUX_BADGE),castReceiver:t.castReceiver,disablePseudoEnded:t.hasAttribute(A.DISABLE_PSEUDO_ENDED),...e,extraSourceParams:t.extraSourceParams}}var wA=kv.formatErrorMessage;kv.formatErrorMessage=t=>{var e,i;if(t instanceof C){let a=yA(t,!1);return`
      ${a!=null&&a.title?`<h3>${a.title}</h3>`:""}
      ${a!=null&&a.message||a!=null&&a.linkUrl?`<p>
        ${a==null?void 0:a.message}
        ${a!=null&&a.linkUrl?`<a
              href="${a.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${(e=a.linkText)!=null?e:""} ${M("(opens in a new window)")}"
              >${(i=a.linkText)!=null?i:a.linkUrl}</a
            >`:""}
      </p>`:""}
    `}return wA(t)};function IA(t){var e,i;let a=t.theme;if(a){let r=(i=(e=t.getRootNode())==null?void 0:e.getElementById)==null?void 0:i.call(e,a);if(r&&r instanceof HTMLTemplateElement)return r;a.startsWith("media-theme-")||(a=`media-theme-${a}`);let n=zt.customElements.get(a);if(n!=null&&n.template)return n.template}}function RA(t){var e;let i=(e=t.mediaController)==null?void 0:e.querySelector("media-time-display");return i&&getComputedStyle(i).getPropertyValue("--media-duration-display-display").trim()==="none"}function vm(t){let e=t.videoTitle?{video_title:t.videoTitle}:{};return t.getAttributeNames().filter(i=>i.startsWith("metadata-")).reduce((i,a)=>{let r=t.getAttribute(a);return r!==null&&(i[a.replace(/^metadata-/,"").replace(/-/g,"_")]=r),i},e)}var CA=Object.values(y),LA=Object.values(ni),DA=Object.values(A),fm=If(),Em="mux-player",_m={isDialogOpen:!1},MA={redundant_streams:!0},uo,co,ho,Zi,mo,dr,he,Ii,Of,nu,ji,bm,gm,ym,Tm,xA=class extends dm{constructor(){super(),St(this,he),St(this,uo),St(this,co,!1),St(this,ho,{}),St(this,Zi,!0),St(this,mo,new ZT(this,"hotkeys")),St(this,dr,{..._m,onCloseErrorDialog:t=>{var e;((e=t.composedPath()[0])==null?void 0:e.localName)==="media-error-dialog"&&ye(this,he,nu).call(this,{isDialogOpen:!1})},onFocusInErrorDialog:t=>{var e;((e=t.composedPath()[0])==null?void 0:e.localName)==="media-error-dialog"&&(Sf(this,Vo.activeElement)||t.preventDefault())}}),ei(this,uo,fu()),this.attachShadow({mode:"open"}),ye(this,he,Of).call(this),this.isConnected&&ye(this,he,Ii).call(this)}static get NAME(){return Em}static get VERSION(){return fm}static get observedAttributes(){var t;return[...(t=dm.observedAttributes)!=null?t:[],...LA,...CA,...DA]}get mediaTheme(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("media-theme")}get mediaController(){var t,e;return(e=(t=this.mediaTheme)==null?void 0:t.shadowRoot)==null?void 0:e.querySelector("media-controller")}connectedCallback(){let t=this.media;t&&(t.metadata=vm(this))}attributeChangedCallback(t,e,i){switch(ye(this,he,Ii).call(this),super.attributeChangedCallback(t,e,i),t){case A.HOTKEYS:X(this,mo).value=i;break;case A.THUMBNAIL_TIME:{i!=null&&this.tokens.thumbnail&&oi(M("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").toString());break}case A.THUMBNAIL_TOKEN:{if(i){let a=tr(i);if(a){let{aud:r}=a,n=on.THUMBNAIL;r!==n&&oi(M("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:r,expectedAud:n,tokenNamePrefix:"thumbnail"}))}}break}case A.STORYBOARD_TOKEN:{if(i){let a=tr(i);if(a){let{aud:r}=a,n=on.STORYBOARD;r!==n&&oi(M("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:r,expectedAud:n,tokenNamePrefix:"storyboard"}))}}break}case A.DRM_TOKEN:{if(i){let a=tr(i);if(a){let{aud:r}=a,n=on.DRM;r!==n&&oi(M("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:r,expectedAud:n,tokenNamePrefix:"drm"}))}}break}case y.PLAYBACK_ID:{i!=null&&i.includes("?token")&&pt(M("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:i}));break}case y.STREAM_TYPE:{i&&![j.LIVE,j.ON_DEMAND,j.UNKNOWN].includes(i)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=i.includes("dvr")?Number.POSITIVE_INFINITY:0:Cf({file:"invalid-stream-type.md",message:M("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):i===j.LIVE?this.getAttribute(A.TARGET_LIVE_WINDOW)==null&&(this.targetLiveWindow=0):this.targetLiveWindow=Number.NaN;break}case A.FULLSCREEN_ELEMENT:{if(i!=null||i!==e){let a=Vo.getElementById(i),r=a==null?void 0:a.querySelector("mux-player");this.mediaController&&a&&r&&(this.mediaController.fullscreenElement=a)}break}}[y.PLAYBACK_ID,ni.SRC,A.PLAYBACK_TOKEN].includes(t)&&e!==i&&ei(this,dr,{...X(this,dr),..._m}),ye(this,he,ji).call(this,{[zT(t)]:i})}async requestFullscreen(t){var e;if(!(!this.mediaController||this.mediaController.hasAttribute(c.MEDIA_IS_FULLSCREEN)))return(e=this.mediaController)==null||e.dispatchEvent(new zt.CustomEvent(R.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((i,a)=>{var r;(r=this.mediaController)==null||r.addEventListener(mi.MEDIA_IS_FULLSCREEN,()=>i(),{once:!0})})}async exitFullscreen(){var t;if(!(!this.mediaController||!this.mediaController.hasAttribute(c.MEDIA_IS_FULLSCREEN)))return(t=this.mediaController)==null||t.dispatchEvent(new zt.CustomEvent(R.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,i)=>{var a;(a=this.mediaController)==null||a.addEventListener(mi.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}get preferCmcd(){var t;return(t=this.getAttribute(y.PREFER_CMCD))!=null?t:void 0}set preferCmcd(t){t!==this.preferCmcd&&(t?bo.includes(t)?this.setAttribute(y.PREFER_CMCD,t):oi(`Invalid value for preferCmcd. Must be one of ${bo.join()}`):this.removeAttribute(y.PREFER_CMCD))}get hasPlayed(){var t,e;return(e=(t=this.mediaController)==null?void 0:t.hasAttribute(c.MEDIA_HAS_PLAYED))!=null?e:!1}get inLiveWindow(){var t;return(t=this.mediaController)==null?void 0:t.hasAttribute(c.MEDIA_TIME_IS_LIVE)}get _hls(){var t;return(t=this.media)==null?void 0:t._hls}get mux(){var t;return(t=this.media)==null?void 0:t.mux}get theme(){var t;return(t=this.getAttribute(A.THEME))!=null?t:kA}set theme(t){this.setAttribute(A.THEME,`${t}`)}get themeProps(){let t=this.mediaTheme;if(!t)return;let e={};for(let i of t.getAttributeNames()){if(ru.includes(i))continue;let a=t.getAttribute(i);e[Af(i)]=a===""?!0:a}return e}set themeProps(t){var e,i;ye(this,he,Ii).call(this);let a={...this.themeProps,...t};for(let r in a){if(ru.includes(r))continue;let n=t==null?void 0:t[r];typeof n=="boolean"||n==null?(e=this.mediaTheme)==null||e.toggleAttribute(iu(r),!!n):(i=this.mediaTheme)==null||i.setAttribute(iu(r),n)}}get playbackId(){var t;return(t=this.getAttribute(y.PLAYBACK_ID))!=null?t:void 0}set playbackId(t){t?this.setAttribute(y.PLAYBACK_ID,t):this.removeAttribute(y.PLAYBACK_ID)}get src(){var t,e;return this.playbackId?(t=Wi(this,ni.SRC))!=null?t:void 0:(e=this.getAttribute(ni.SRC))!=null?e:void 0}set src(t){t?this.setAttribute(ni.SRC,t):this.removeAttribute(ni.SRC)}get poster(){var t;let e=this.getAttribute(ni.POSTER);if(e!=null)return e;let{tokens:i}=this;if(i.playback&&!i.thumbnail){oi("Missing expected thumbnail token. No poster image will be shown");return}if(this.playbackId&&!this.audio)return YT(this.playbackId,{customDomain:this.customDomain,thumbnailTime:(t=this.thumbnailTime)!=null?t:this.startTime,programTime:this.programStartTime,token:i.thumbnail})}set poster(t){t||t===""?this.setAttribute(ni.POSTER,t):this.removeAttribute(ni.POSTER)}get storyboardSrc(){var t;return(t=this.getAttribute(A.STORYBOARD_SRC))!=null?t:void 0}set storyboardSrc(t){t?this.setAttribute(A.STORYBOARD_SRC,t):this.removeAttribute(A.STORYBOARD_SRC)}get storyboard(){let{tokens:t}=this;if(this.storyboardSrc&&!t.storyboard)return this.storyboardSrc;if(!(this.audio||!this.playbackId||!this.streamType||[j.LIVE,j.UNKNOWN].includes(this.streamType)||t.playback&&!t.storyboard))return GT(this.playbackId,{customDomain:this.customDomain,token:t.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(A.AUDIO)}set audio(t){if(!t){this.removeAttribute(A.AUDIO);return}this.setAttribute(A.AUDIO,"")}get hotkeys(){return X(this,mo)}get nohotkeys(){return this.hasAttribute(A.NOHOTKEYS)}set nohotkeys(t){if(!t){this.removeAttribute(A.NOHOTKEYS);return}this.setAttribute(A.NOHOTKEYS,"")}get thumbnailTime(){return et(this.getAttribute(A.THUMBNAIL_TIME))}set thumbnailTime(t){this.setAttribute(A.THUMBNAIL_TIME,`${t}`)}get videoTitle(){var t,e;return(e=(t=this.getAttribute(A.VIDEO_TITLE))!=null?t:this.getAttribute(A.TITLE))!=null?e:""}set videoTitle(t){t!==this.videoTitle&&(t?this.setAttribute(A.VIDEO_TITLE,t):this.removeAttribute(A.VIDEO_TITLE))}get placeholder(){var t;return(t=Wi(this,A.PLACEHOLDER))!=null?t:""}set placeholder(t){this.setAttribute(A.PLACEHOLDER,`${t}`)}get primaryColor(){var t,e;let i=this.getAttribute(A.PRIMARY_COLOR);if(i!=null||this.mediaTheme&&(i=(e=(t=zt.getComputedStyle(this.mediaTheme))==null?void 0:t.getPropertyValue("--_primary-color"))==null?void 0:e.trim(),i))return i}set primaryColor(t){this.setAttribute(A.PRIMARY_COLOR,`${t}`)}get secondaryColor(){var t,e;let i=this.getAttribute(A.SECONDARY_COLOR);if(i!=null||this.mediaTheme&&(i=(e=(t=zt.getComputedStyle(this.mediaTheme))==null?void 0:t.getPropertyValue("--_secondary-color"))==null?void 0:e.trim(),i))return i}set secondaryColor(t){this.setAttribute(A.SECONDARY_COLOR,`${t}`)}get accentColor(){var t,e;let i=this.getAttribute(A.ACCENT_COLOR);if(i!=null||this.mediaTheme&&(i=(e=(t=zt.getComputedStyle(this.mediaTheme))==null?void 0:t.getPropertyValue("--_accent-color"))==null?void 0:e.trim(),i))return i}set accentColor(t){this.setAttribute(A.ACCENT_COLOR,`${t}`)}get defaultShowRemainingTime(){return this.hasAttribute(A.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(t){t?this.setAttribute(A.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(A.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(A.PLAYBACK_RATES))return this.getAttribute(A.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(t=>Number(t)).filter(t=>!Number.isNaN(t)).sort((t,e)=>t-e)}set playbackRates(t){if(!t){this.removeAttribute(A.PLAYBACK_RATES);return}this.setAttribute(A.PLAYBACK_RATES,t.join(" "))}get forwardSeekOffset(){var t;return(t=et(this.getAttribute(A.FORWARD_SEEK_OFFSET)))!=null?t:10}set forwardSeekOffset(t){this.setAttribute(A.FORWARD_SEEK_OFFSET,`${t}`)}get backwardSeekOffset(){var t;return(t=et(this.getAttribute(A.BACKWARD_SEEK_OFFSET)))!=null?t:10}set backwardSeekOffset(t){this.setAttribute(A.BACKWARD_SEEK_OFFSET,`${t}`)}get defaultHiddenCaptions(){return this.hasAttribute(A.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(t){t?this.setAttribute(A.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(A.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return et(this.getAttribute(A.DEFAULT_DURATION))}set defaultDuration(t){t==null?this.removeAttribute(A.DEFAULT_DURATION):this.setAttribute(A.DEFAULT_DURATION,`${t}`)}get playerInitTime(){return this.hasAttribute(y.PLAYER_INIT_TIME)?et(this.getAttribute(y.PLAYER_INIT_TIME)):X(this,uo)}set playerInitTime(t){t!=this.playerInitTime&&(t==null?this.removeAttribute(y.PLAYER_INIT_TIME):this.setAttribute(y.PLAYER_INIT_TIME,`${+t}`))}get playerSoftwareName(){var t;return(t=this.getAttribute(y.PLAYER_SOFTWARE_NAME))!=null?t:Em}get playerSoftwareVersion(){var t;return(t=this.getAttribute(y.PLAYER_SOFTWARE_VERSION))!=null?t:fm}get beaconCollectionDomain(){var t;return(t=this.getAttribute(y.BEACON_COLLECTION_DOMAIN))!=null?t:void 0}set beaconCollectionDomain(t){t!==this.beaconCollectionDomain&&(t?this.setAttribute(y.BEACON_COLLECTION_DOMAIN,t):this.removeAttribute(y.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var t;return(t=this.getAttribute(y.MAX_RESOLUTION))!=null?t:void 0}set maxResolution(t){t!==this.maxResolution&&(t?this.setAttribute(y.MAX_RESOLUTION,t):this.removeAttribute(y.MAX_RESOLUTION))}get minResolution(){var t;return(t=this.getAttribute(y.MIN_RESOLUTION))!=null?t:void 0}set minResolution(t){t!==this.minResolution&&(t?this.setAttribute(y.MIN_RESOLUTION,t):this.removeAttribute(y.MIN_RESOLUTION))}get maxAutoResolution(){var t;return(t=this.getAttribute(y.MAX_AUTO_RESOLUTION))!=null?t:void 0}set maxAutoResolution(t){t==null?this.removeAttribute(y.MAX_AUTO_RESOLUTION):this.setAttribute(y.MAX_AUTO_RESOLUTION,t)}get renditionOrder(){var t;return(t=this.getAttribute(y.RENDITION_ORDER))!=null?t:void 0}set renditionOrder(t){t!==this.renditionOrder&&(t?this.setAttribute(y.RENDITION_ORDER,t):this.removeAttribute(y.RENDITION_ORDER))}get programStartTime(){return et(this.getAttribute(y.PROGRAM_START_TIME))}set programStartTime(t){t==null?this.removeAttribute(y.PROGRAM_START_TIME):this.setAttribute(y.PROGRAM_START_TIME,`${t}`)}get programEndTime(){return et(this.getAttribute(y.PROGRAM_END_TIME))}set programEndTime(t){t==null?this.removeAttribute(y.PROGRAM_END_TIME):this.setAttribute(y.PROGRAM_END_TIME,`${t}`)}get assetStartTime(){return et(this.getAttribute(y.ASSET_START_TIME))}set assetStartTime(t){t==null?this.removeAttribute(y.ASSET_START_TIME):this.setAttribute(y.ASSET_START_TIME,`${t}`)}get assetEndTime(){return et(this.getAttribute(y.ASSET_END_TIME))}set assetEndTime(t){t==null?this.removeAttribute(y.ASSET_END_TIME):this.setAttribute(y.ASSET_END_TIME,`${t}`)}get extraSourceParams(){return this.hasAttribute(A.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(A.EXTRA_SOURCE_PARAMS)).entries()].reduce((t,[e,i])=>(t[e]=i,t),{}):MA}set extraSourceParams(t){t==null?this.removeAttribute(A.EXTRA_SOURCE_PARAMS):this.setAttribute(A.EXTRA_SOURCE_PARAMS,new URLSearchParams(t).toString())}get customDomain(){var t;return(t=this.getAttribute(y.CUSTOM_DOMAIN))!=null?t:void 0}set customDomain(t){t!==this.customDomain&&(t?this.setAttribute(y.CUSTOM_DOMAIN,t):this.removeAttribute(y.CUSTOM_DOMAIN))}get envKey(){var t;return(t=Wi(this,y.ENV_KEY))!=null?t:void 0}set envKey(t){this.setAttribute(y.ENV_KEY,`${t}`)}get noVolumePref(){return this.hasAttribute(A.NO_VOLUME_PREF)}set noVolumePref(t){t?this.setAttribute(A.NO_VOLUME_PREF,""):this.removeAttribute(A.NO_VOLUME_PREF)}get noMutedPref(){return this.hasAttribute(A.NO_MUTED_PREF)}set noMutedPref(t){t?this.setAttribute(A.NO_MUTED_PREF,""):this.removeAttribute(A.NO_MUTED_PREF)}get debug(){return Wi(this,y.DEBUG)!=null}set debug(t){t?this.setAttribute(y.DEBUG,""):this.removeAttribute(y.DEBUG)}get disableTracking(){return Wi(this,y.DISABLE_TRACKING)!=null}set disableTracking(t){this.toggleAttribute(y.DISABLE_TRACKING,!!t)}get disableCookies(){return Wi(this,y.DISABLE_COOKIES)!=null}set disableCookies(t){t?this.setAttribute(y.DISABLE_COOKIES,""):this.removeAttribute(y.DISABLE_COOKIES)}get streamType(){var t,e,i;return(i=(e=this.getAttribute(y.STREAM_TYPE))!=null?e:(t=this.media)==null?void 0:t.streamType)!=null?i:j.UNKNOWN}set streamType(t){this.setAttribute(y.STREAM_TYPE,`${t}`)}get defaultStreamType(){var t,e,i;return(i=(e=this.getAttribute(A.DEFAULT_STREAM_TYPE))!=null?e:(t=this.mediaController)==null?void 0:t.getAttribute(A.DEFAULT_STREAM_TYPE))!=null?i:j.ON_DEMAND}set defaultStreamType(t){t?this.setAttribute(A.DEFAULT_STREAM_TYPE,t):this.removeAttribute(A.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var t,e;return this.hasAttribute(A.TARGET_LIVE_WINDOW)?+this.getAttribute(A.TARGET_LIVE_WINDOW):(e=(t=this.media)==null?void 0:t.targetLiveWindow)!=null?e:Number.NaN}set targetLiveWindow(t){t==this.targetLiveWindow||Number.isNaN(t)&&Number.isNaN(this.targetLiveWindow)||(t==null?this.removeAttribute(A.TARGET_LIVE_WINDOW):this.setAttribute(A.TARGET_LIVE_WINDOW,`${+t}`))}get liveEdgeStart(){var t;return(t=this.media)==null?void 0:t.liveEdgeStart}get startTime(){return et(Wi(this,y.START_TIME))}set startTime(t){this.setAttribute(y.START_TIME,`${t}`)}get preferPlayback(){let t=this.getAttribute(y.PREFER_PLAYBACK);if(t===Zt.MSE||t===Zt.NATIVE)return t}set preferPlayback(t){t!==this.preferPlayback&&(t===Zt.MSE||t===Zt.NATIVE?this.setAttribute(y.PREFER_PLAYBACK,t):this.removeAttribute(y.PREFER_PLAYBACK))}get metadata(){var t;return(t=this.media)==null?void 0:t.metadata}set metadata(t){if(ye(this,he,Ii).call(this),!this.media){pt("underlying media element missing when trying to set metadata. metadata will not be set.");return}this.media.metadata={...vm(this),...t}}get _hlsConfig(){var t;return(t=this.media)==null?void 0:t._hlsConfig}set _hlsConfig(t){if(ye(this,he,Ii).call(this),!this.media){pt("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.");return}this.media._hlsConfig=t}async addCuePoints(t){var e;if(ye(this,he,Ii).call(this),!this.media){pt("underlying media element missing when trying to addCuePoints. cuePoints will not be added.");return}return(e=this.media)==null?void 0:e.addCuePoints(t)}get activeCuePoint(){var t;return(t=this.media)==null?void 0:t.activeCuePoint}get cuePoints(){var t,e;return(e=(t=this.media)==null?void 0:t.cuePoints)!=null?e:[]}addChapters(t){var e;if(ye(this,he,Ii).call(this),!this.media){pt("underlying media element missing when trying to addChapters. chapters will not be added.");return}return(e=this.media)==null?void 0:e.addChapters(t)}get activeChapter(){var t;return(t=this.media)==null?void 0:t.activeChapter}get chapters(){var t,e;return(e=(t=this.media)==null?void 0:t.chapters)!=null?e:[]}getStartDate(){var t;return(t=this.media)==null?void 0:t.getStartDate()}get currentPdt(){var t;return(t=this.media)==null?void 0:t.currentPdt}get tokens(){let t=this.getAttribute(A.PLAYBACK_TOKEN),e=this.getAttribute(A.DRM_TOKEN),i=this.getAttribute(A.THUMBNAIL_TOKEN),a=this.getAttribute(A.STORYBOARD_TOKEN);return{...X(this,ho),...t!=null?{playback:t}:{},...e!=null?{drm:e}:{},...i!=null?{thumbnail:i}:{},...a!=null?{storyboard:a}:{}}}set tokens(t){ei(this,ho,t??{})}get playbackToken(){var t;return(t=this.getAttribute(A.PLAYBACK_TOKEN))!=null?t:void 0}set playbackToken(t){this.setAttribute(A.PLAYBACK_TOKEN,`${t}`)}get drmToken(){var t;return(t=this.getAttribute(A.DRM_TOKEN))!=null?t:void 0}set drmToken(t){this.setAttribute(A.DRM_TOKEN,`${t}`)}get thumbnailToken(){var t;return(t=this.getAttribute(A.THUMBNAIL_TOKEN))!=null?t:void 0}set thumbnailToken(t){this.setAttribute(A.THUMBNAIL_TOKEN,`${t}`)}get storyboardToken(){var t;return(t=this.getAttribute(A.STORYBOARD_TOKEN))!=null?t:void 0}set storyboardToken(t){this.setAttribute(A.STORYBOARD_TOKEN,`${t}`)}addTextTrack(t,e,i,a){var r;let n=(r=this.media)==null?void 0:r.nativeEl;if(n)return hu(n,t,e,i,a)}removeTextTrack(t){var e;let i=(e=this.media)==null?void 0:e.nativeEl;if(i)return Cb(i,t)}get textTracks(){var t;return(t=this.media)==null?void 0:t.textTracks}get castReceiver(){var t;return(t=this.getAttribute(A.CAST_RECEIVER))!=null?t:void 0}set castReceiver(t){t!==this.castReceiver&&(t?this.setAttribute(A.CAST_RECEIVER,t):this.removeAttribute(A.CAST_RECEIVER))}get castCustomData(){var t;return(t=this.media)==null?void 0:t.castCustomData}set castCustomData(t){if(!this.media){pt("underlying media element missing when trying to set castCustomData. castCustomData will not be set.");return}this.media.castCustomData=t}get noTooltips(){return this.hasAttribute(A.NO_TOOLTIPS)}set noTooltips(t){if(!t){this.removeAttribute(A.NO_TOOLTIPS);return}this.setAttribute(A.NO_TOOLTIPS,"")}get proudlyDisplayMuxBadge(){return this.hasAttribute(A.PROUDLY_DISPLAY_MUX_BADGE)}set proudlyDisplayMuxBadge(t){t?this.setAttribute(A.PROUDLY_DISPLAY_MUX_BADGE,""):this.removeAttribute(A.PROUDLY_DISPLAY_MUX_BADGE)}};uo=new WeakMap,co=new WeakMap,ho=new WeakMap,Zi=new WeakMap,mo=new WeakMap,dr=new WeakMap,he=new WeakSet,Ii=function(){var t,e,i,a;if(!X(this,co)){ei(this,co,!0),ye(this,he,ji).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof zt.HTMLElement))throw""}catch{pt("<media-theme> failed to upgrade!")}try{customElements.upgrade(this.media)}catch{pt("underlying media element failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof Xg))throw""}catch{pt("<media-controller> failed to upgrade!")}ye(this,he,bm).call(this),ye(this,he,gm).call(this),ye(this,he,ym).call(this),ei(this,Zi,(e=(t=this.mediaController)==null?void 0:t.hasAttribute(x.USER_INACTIVE))!=null?e:!0),ye(this,he,Tm).call(this),(i=this.media)==null||i.addEventListener("streamtypechange",()=>ye(this,he,ji).call(this)),(a=this.media)==null||a.addEventListener("loadstart",()=>ye(this,he,ji).call(this))}},Of=function(){var t,e;try{(t=window==null?void 0:window.CSS)==null||t.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),(e=window==null?void 0:window.CSS)==null||e.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},nu=function(t){Object.assign(X(this,dr),t),ye(this,he,ji).call(this)},ji=function(t={}){hA(pA(SA(this,{...X(this,dr),...t})),this.shadowRoot)},bm=function(){let t=e=>{var i,a;if(!(e!=null&&e.startsWith("theme-")))return;let r=e.replace(/^theme-/,"");if(ru.includes(r))return;let n=this.getAttribute(e);n!=null?(i=this.mediaTheme)==null||i.setAttribute(r,n):(a=this.mediaTheme)==null||a.removeAttribute(r)};new MutationObserver(e=>{for(let{attributeName:i}of e)t(i)}).observe(this,{attributes:!0}),this.getAttributeNames().forEach(t)},gm=function(){let t=e=>{var i;let a=(i=this.media)==null?void 0:i.error;if(!(a instanceof C)){let{message:n,code:s}=a??{};a=new C(n,s)}if(!(a!=null&&a.fatal)){oi(a),a.data&&oi(`${a.name} data:`,a.data);return}let r=hm(a);r.message&&Cf(r),pt(a),a.data&&pt(`${a.name} data:`,a.data),ye(this,he,nu).call(this,{isDialogOpen:!0})};this.addEventListener("error",t),this.media&&(this.media.errorTranslator=(e={})=>{var i,a,r;if(!(((i=this.media)==null?void 0:i.error)instanceof C))return e;let n=hm((a=this.media)==null?void 0:a.error);return{player_error_code:(r=this.media)==null?void 0:r.error.code,player_error_message:n.message?String(n.message):e.player_error_message,player_error_context:n.context?String(n.context):e.player_error_context}})},ym=function(){var t,e,i,a;let r=()=>ye(this,he,ji).call(this);(e=(t=this.media)==null?void 0:t.textTracks)==null||e.addEventListener("addtrack",r),(a=(i=this.media)==null?void 0:i.textTracks)==null||a.addEventListener("removetrack",r)},Tm=function(){var t,e;if(!/Firefox/i.test(navigator.userAgent))return;let i,a=new WeakMap,r=()=>this.streamType===j.LIVE&&!this.secondaryColor&&this.offsetWidth>=800,n=(l,u,p=!1)=>{r()||Array.from(l&&l.activeCues||[]).forEach(m=>{if(!(!m.snapToLines||m.line<-5||m.line>=0&&m.line<10))if(!u||this.paused){let h=m.text.split(`
`).length,d=-3;this.streamType===j.LIVE&&(d=-2);let v=d-h;if(m.line===v&&!p)return;a.has(m)||a.set(m,m.line),m.line=v}else setTimeout(()=>{m.line=a.get(m)||"auto"},500)})},s=()=>{var l,u;n(i,(u=(l=this.mediaController)==null?void 0:l.hasAttribute(x.USER_INACTIVE))!=null?u:!1)},o=()=>{var l,u;let p=Array.from(((u=(l=this.mediaController)==null?void 0:l.media)==null?void 0:u.textTracks)||[]).filter(m=>["subtitles","captions"].includes(m.kind)&&m.mode==="showing")[0];p!==i&&(i==null||i.removeEventListener("cuechange",s)),i=p,i==null||i.addEventListener("cuechange",s),n(i,X(this,Zi))};o(),(t=this.textTracks)==null||t.addEventListener("change",o),(e=this.textTracks)==null||e.addEventListener("addtrack",o),this.addEventListener("userinactivechange",()=>{var l,u;let p=(u=(l=this.mediaController)==null?void 0:l.hasAttribute(x.USER_INACTIVE))!=null?u:!0;X(this,Zi)!==p&&(ei(this,Zi,p),n(i,X(this,Zi)))})};function Wi(t,e){return t.media?t.media.getAttribute(e):t.getAttribute(e)}var Am=xA,Nf=t=>{throw TypeError(t)},Pf=(t,e,i)=>e.has(t)||Nf("Cannot "+i),OA=(t,e,i)=>(Pf(t,e,"read from private field"),i?i.call(t):e.get(t)),NA=(t,e,i)=>e.has(t)?Nf("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),PA=(t,e,i,a)=>(Pf(t,e,"write to private field"),e.set(t,i),i),ml=class{addEventListener(){}removeEventListener(){}dispatchEvent(t){return!0}};if(typeof DocumentFragment>"u"){class t extends ml{}globalThis.DocumentFragment=t}var Dc=class extends ml{},$A=class extends ml{},UA={get(t){},define(t,e,i){},getName(t){return null},upgrade(t){},whenDefined(t){return Promise.resolve(Dc)}},po,HA=class{constructor(t,e={}){NA(this,po),PA(this,po,e==null?void 0:e.detail)}get detail(){return OA(this,po)}initCustomEvent(){}};po=new WeakMap;function BA(t,e){return new Dc}var WA={document:{createElement:BA},DocumentFragment,customElements:UA,CustomEvent:HA,EventTarget:ml,HTMLElement:Dc,HTMLVideoElement:$A},FA=typeof window>"u"||typeof globalThis.customElements>"u",Hl=FA?WA:globalThis;Hl.customElements.get("mux-player")||(Hl.customElements.define("mux-player",Am),Hl.MuxPlayerElement=Am);var $f=parseInt(vn.version)>=19,km={className:"class",classname:"class",htmlFor:"for",crossOrigin:"crossorigin",viewBox:"viewBox",playsInline:"playsinline",autoPlay:"autoplay",playbackRate:"playbackrate"},KA=t=>t==null,VA=(t,e)=>KA(e)?!1:t in e,qA=t=>t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),YA=(t,e)=>{if(!(!$f&&typeof e=="boolean"&&!e)){if(VA(t,km))return km[t];if(typeof e<"u")return/[A-Z]/.test(t)?qA(t):t}},GA=(t,e)=>!$f&&typeof t=="boolean"?"":t,QA=(t={})=>{let{ref:e,...i}=t;return Object.entries(i).reduce((a,[r,n])=>{let s=YA(r,n);if(!s)return a;let o=GA(n);return a[s]=o,a},{})};function Sm(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function zA(...t){return e=>{let i=!1,a=t.map(r=>{let n=Sm(r,e);return!i&&typeof n=="function"&&(i=!0),n});if(i)return()=>{for(let r=0;r<a.length;r++){let n=a[r];typeof n=="function"?n():Sm(t[r],null)}}}}function ZA(...t){return fn.useCallback(zA(...t),t)}var jA=Object.prototype.hasOwnProperty,XA=(t,e)=>{if(Object.is(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;if(Array.isArray(t))return!Array.isArray(e)||t.length!==e.length?!1:t.some((r,n)=>e[n]===r);let i=Object.keys(t),a=Object.keys(e);if(i.length!==a.length)return!1;for(let r=0;r<i.length;r++)if(!jA.call(e,i[r])||!Object.is(t[i[r]],e[i[r]]))return!1;return!0},Uf=(t,e,i)=>!XA(e,t[i]),JA=(t,e,i)=>{t[i]=e},ek=(t,e,i,a=JA,r=Uf)=>fn.useEffect(()=>{let n=i==null?void 0:i.current;n&&r(n,e,t)&&a(n,e,t)},[i==null?void 0:i.current,e]),Ot=ek,tk=()=>{try{return"3.10.2"}catch{}return"UNKNOWN"},ik=tk(),ak=()=>ik,de=(t,e,i)=>fn.useEffect(()=>{let a=e==null?void 0:e.current;if(!a||!i)return;let r=t,n=i;return a.addEventListener(r,n),()=>{a.removeEventListener(r,n)}},[e==null?void 0:e.current,i,t]),rk=vn.forwardRef(({children:t,...e},i)=>vn.createElement("mux-player",{suppressHydrationWarning:!0,...QA(e),ref:i},t)),nk=(t,e)=>{let{onAbort:i,onCanPlay:a,onCanPlayThrough:r,onEmptied:n,onLoadStart:s,onLoadedData:o,onLoadedMetadata:l,onProgress:u,onDurationChange:p,onVolumeChange:m,onRateChange:h,onResize:d,onWaiting:v,onPlay:f,onPlaying:g,onTimeUpdate:_,onPause:T,onSeeking:b,onSeeked:w,onStalled:L,onSuspend:P,onEnded:H,onError:z,onCuePointChange:ie,onChapterChange:V,metadata:U,tokens:Pe,paused:Ge,playbackId:Qe,playbackRates:fe,currentTime:Be,themeProps:Lt,extraSourceParams:We,castCustomData:Et,_hlsConfig:ze,...Re}=e;return Ot("tokens",Pe,t),Ot("playbackId",Qe,t),Ot("playbackRates",fe,t),Ot("metadata",U,t),Ot("extraSourceParams",We,t),Ot("_hlsConfig",ze,t),Ot("themeProps",Lt,t),Ot("castCustomData",Et,t),Ot("paused",Ge,t,($e,st)=>{st!=null&&(st?$e.pause():$e.play())},($e,st,_a)=>$e.hasAttribute("autoplay")&&!$e.hasPlayed?!1:Uf($e,st,_a)),Ot("currentTime",Be,t,($e,st)=>{st!=null&&($e.currentTime=st)}),de("abort",t,i),de("canplay",t,a),de("canplaythrough",t,r),de("emptied",t,n),de("loadstart",t,s),de("loadeddata",t,o),de("loadedmetadata",t,l),de("progress",t,u),de("durationchange",t,p),de("volumechange",t,m),de("ratechange",t,h),de("resize",t,d),de("waiting",t,v),de("play",t,f),de("playing",t,g),de("timeupdate",t,_),de("pause",t,T),de("seeking",t,b),de("seeked",t,w),de("stalled",t,L),de("suspend",t,P),de("ended",t,H),de("error",t,z),de("cuepointchange",t,ie),de("chapterchange",t,V),[Re]},sk=ak(),ok="mux-player-react",lk=vn.forwardRef((t,e)=>{var i;let a=fn.useRef(null),r=ZA(a,e),[n]=nk(a,t),[s]=fn.useState((i=t.playerInitTime)!=null?i:fu());return vn.createElement(rk,{ref:r,defaultHiddenCaptions:t.defaultHiddenCaptions,playerSoftwareName:ok,playerSoftwareVersion:sk,playerInitTime:s,...n})}),Dk=lk;export{pk as MaxResolution,C as MediaError,vk as MinResolution,fk as RenditionOrder,Dk as default,fu as generatePlayerInitTime,ok as playerSoftwareName,sk as playerSoftwareVersion};
