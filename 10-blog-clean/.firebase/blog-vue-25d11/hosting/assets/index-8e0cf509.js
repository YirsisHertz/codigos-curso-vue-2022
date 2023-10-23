(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function xr(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const be=Object.freeze({}),Ys=Object.freeze([]),Ot=()=>{},py=()=>!1,YA=/^on[^a-z]/,ra=t=>YA.test(t),El=t=>t.startsWith("onUpdate:"),Fe=Object.assign,xd=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},XA=Object.prototype.hasOwnProperty,le=(t,e)=>XA.call(t,e),Y=Array.isArray,es=t=>mc(t)==="[object Map]",gy=t=>mc(t)==="[object Set]",J=t=>typeof t=="function",$e=t=>typeof t=="string",Md=t=>typeof t=="symbol",Te=t=>t!==null&&typeof t=="object",Ld=t=>Te(t)&&J(t.then)&&J(t.catch),my=Object.prototype.toString,mc=t=>my.call(t),Vd=t=>mc(t).slice(8,-1),_y=t=>mc(t)==="[object Object]",Fd=t=>$e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,nl=xr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),JA=xr("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),_c=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ZA=/-(\w)/g,ii=_c(t=>t.replace(ZA,(e,n)=>n?n.toUpperCase():"")),eR=/\B([A-Z])/g,Rr=_c(t=>t.replace(eR,"-$1").toLowerCase()),yc=_c(t=>t.charAt(0).toUpperCase()+t.slice(1)),Wr=_c(t=>t?`on${yc(t)}`:""),Ao=(t,e)=>!Object.is(t,e),$s=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},wl=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},dh=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Xp;const Tl=()=>Xp||(Xp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ud(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=$e(r)?sR(r):Ud(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if($e(t))return t;if(Te(t))return t}}const tR=/;(?![^(]*\))/g,nR=/:([^]+)/,rR=/\/\*[^]*?\*\//g;function sR(t){const e={};return t.replace(rR,"").split(tR).forEach(n=>{if(n){const r=n.split(nR);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function $d(t){let e="";if($e(t))e=t;else if(Y(t))for(let n=0;n<t.length;n++){const r=$d(t[n]);r&&(e+=r+" ")}else if(Te(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const iR="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",oR="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",aR=xr(iR),lR=xr(oR),cR="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",uR=xr(cR);function yy(t){return!!t||t===""}const S2=t=>$e(t)?t:t==null?"":Y(t)||Te(t)&&(t.toString===my||!J(t.toString))?JSON.stringify(t,vy,2):String(t),vy=(t,e)=>e&&e.__v_isRef?vy(t,e.value):es(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:gy(e)?{[`Set(${e.size})`]:[...e.values()]}:Te(e)&&!Y(e)&&!_y(e)?String(e):e;function Il(t,...e){console.warn(`[Vue warn] ${t}`,...e)}let Dt;class Ey{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Dt,!e&&Dt&&(this.index=(Dt.scopes||(Dt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Dt;try{return Dt=this,e()}finally{Dt=n}}else Il("cannot run an inactive effect scope.")}on(){Dt=this}off(){Dt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Bd(t){return new Ey(t)}function hR(t,e=Dt){e&&e.active&&e.effects.push(t)}function wy(){return Dt}function dR(t){Dt?Dt.cleanups.push(t):Il("onScopeDispose() is called when there is no active effect scope to be associated with.")}const jd=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ty=t=>(t.w&br)>0,Iy=t=>(t.n&br)>0,fR=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=br},pR=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Ty(s)&&!Iy(s)?s.delete(t):e[n++]=s,s.w&=~br,s.n&=~br}e.length=n}},Al=new WeakMap;let Gi=0,br=1;const fh=30;let St;const ts=Symbol("iterate"),ph=Symbol("Map key iterate");class Wd{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,hR(this,r)}run(){if(!this.active)return this.fn();let e=St,n=vr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=St,St=this,vr=!0,br=1<<++Gi,Gi<=fh?fR(this):Jp(this),this.fn()}finally{Gi<=fh&&pR(this),br=1<<--Gi,St=this.parent,vr=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){St===this?this.deferStop=!0:this.active&&(Jp(this),this.onStop&&this.onStop(),this.active=!1)}}function Jp(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let vr=!0;const Ay=[];function Rs(){Ay.push(vr),vr=!1}function bs(){const t=Ay.pop();vr=t===void 0?!0:t}function Tt(t,e,n){if(vr&&St){let r=Al.get(t);r||Al.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=jd()),Ry(s,{effect:St,target:t,type:e,key:n})}}function Ry(t,e){let n=!1;Gi<=fh?Iy(t)||(t.n|=br,n=!Ty(t)):n=!t.has(St),n&&(t.add(St),St.deps.push(t),St.onTrack&&St.onTrack(Fe({effect:St},e)))}function Dn(t,e,n,r,s,i){const o=Al.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Y(t)){const c=Number(r);o.forEach((u,h)=>{(h==="length"||h>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Y(t)?Fd(n)&&a.push(o.get("length")):(a.push(o.get(ts)),es(t)&&a.push(o.get(ph)));break;case"delete":Y(t)||(a.push(o.get(ts)),es(t)&&a.push(o.get(ph)));break;case"set":es(t)&&a.push(o.get(ts));break}const l={target:t,type:e,key:n,newValue:r,oldValue:s,oldTarget:i};if(a.length===1)a[0]&&gh(a[0],l);else{const c=[];for(const u of a)u&&c.push(...u);gh(jd(c),l)}}function gh(t,e){const n=Y(t)?t:[...t];for(const r of n)r.computed&&Zp(r,e);for(const r of n)r.computed||Zp(r,e)}function Zp(t,e){(t!==St||t.allowRecurse)&&(t.onTrigger&&t.onTrigger(Fe({effect:t},e)),t.scheduler?t.scheduler():t.run())}function gR(t,e){var n;return(n=Al.get(t))==null?void 0:n.get(e)}const mR=xr("__proto__,__v_isRef,__isVue"),by=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Md)),_R=vc(),yR=vc(!1,!0),vR=vc(!0),ER=vc(!0,!0),eg=wR();function wR(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=te(this);for(let i=0,o=this.length;i<o;i++)Tt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(te)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Rs();const r=te(this)[e].apply(this,n);return bs(),r}}),t}function TR(t){const e=te(this);return Tt(e,"has",t),e.hasOwnProperty(t)}function vc(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?xy:Dy:e?Oy:Ny).get(r))return r;const o=Y(r);if(!t){if(o&&le(eg,s))return Reflect.get(eg,s,i);if(s==="hasOwnProperty")return TR}const a=Reflect.get(r,s,i);return(Md(s)?by.has(s):mR(s))||(t||Tt(r,"get",s),e)?a:Pe(a)?o&&Fd(s)?a:a.value:Te(a)?t?Ly(a):sa(a):a}}const IR=Cy(),AR=Cy(!0);function Cy(t=!1){return function(n,r,s,i){let o=n[r];if(Cr(o)&&Pe(o)&&!Pe(s))return!1;if(!t&&(!Rl(s)&&!Cr(s)&&(o=te(o),s=te(s)),!Y(n)&&Pe(o)&&!Pe(s)))return o.value=s,!0;const a=Y(n)&&Fd(r)?Number(r)<n.length:le(n,r),l=Reflect.set(n,r,s,i);return n===te(i)&&(a?Ao(s,o)&&Dn(n,"set",r,s,o):Dn(n,"add",r,s)),l}}function RR(t,e){const n=le(t,e),r=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&Dn(t,"delete",e,void 0,r),s}function bR(t,e){const n=Reflect.has(t,e);return(!Md(e)||!by.has(e))&&Tt(t,"has",e),n}function CR(t){return Tt(t,"iterate",Y(t)?"length":ts),Reflect.ownKeys(t)}const Sy={get:_R,set:IR,deleteProperty:RR,has:bR,ownKeys:CR},Py={get:vR,set(t,e){return Il(`Set operation on key "${String(e)}" failed: target is readonly.`,t),!0},deleteProperty(t,e){return Il(`Delete operation on key "${String(e)}" failed: target is readonly.`,t),!0}},SR=Fe({},Sy,{get:yR,set:AR}),PR=Fe({},Py,{get:ER}),qd=t=>t,Ec=t=>Reflect.getPrototypeOf(t);function Oa(t,e,n=!1,r=!1){t=t.__v_raw;const s=te(t),i=te(e);n||(e!==i&&Tt(s,"get",e),Tt(s,"get",i));const{has:o}=Ec(s),a=r?qd:n?Hd:Ro;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Da(t,e=!1){const n=this.__v_raw,r=te(n),s=te(t);return e||(t!==s&&Tt(r,"has",t),Tt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function xa(t,e=!1){return t=t.__v_raw,!e&&Tt(te(t),"iterate",ts),Reflect.get(t,"size",t)}function tg(t){t=te(t);const e=te(this);return Ec(e).has.call(e,t)||(e.add(t),Dn(e,"add",t,t)),this}function ng(t,e){e=te(e);const n=te(this),{has:r,get:s}=Ec(n);let i=r.call(n,t);i?ky(n,r,t):(t=te(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Ao(e,o)&&Dn(n,"set",t,e,o):Dn(n,"add",t,e),this}function rg(t){const e=te(this),{has:n,get:r}=Ec(e);let s=n.call(e,t);s?ky(e,n,t):(t=te(t),s=n.call(e,t));const i=r?r.call(e,t):void 0,o=e.delete(t);return s&&Dn(e,"delete",t,void 0,i),o}function sg(){const t=te(this),e=t.size!==0,n=es(t)?new Map(t):new Set(t),r=t.clear();return e&&Dn(t,"clear",void 0,void 0,n),r}function Ma(t,e){return function(r,s){const i=this,o=i.__v_raw,a=te(o),l=e?qd:t?Hd:Ro;return!t&&Tt(a,"iterate",ts),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function La(t,e,n){return function(...r){const s=this.__v_raw,i=te(s),o=es(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?qd:e?Hd:Ro;return!e&&Tt(i,"iterate",l?ph:ts),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function or(t){return function(...e){{const n=e[0]?`on key "${e[0]}" `:"";console.warn(`${yc(t)} operation ${n}failed: target is readonly.`,te(this))}return t==="delete"?!1:this}}function kR(){const t={get(i){return Oa(this,i)},get size(){return xa(this)},has:Da,add:tg,set:ng,delete:rg,clear:sg,forEach:Ma(!1,!1)},e={get(i){return Oa(this,i,!1,!0)},get size(){return xa(this)},has:Da,add:tg,set:ng,delete:rg,clear:sg,forEach:Ma(!1,!0)},n={get(i){return Oa(this,i,!0)},get size(){return xa(this,!0)},has(i){return Da.call(this,i,!0)},add:or("add"),set:or("set"),delete:or("delete"),clear:or("clear"),forEach:Ma(!0,!1)},r={get(i){return Oa(this,i,!0,!0)},get size(){return xa(this,!0)},has(i){return Da.call(this,i,!0)},add:or("add"),set:or("set"),delete:or("delete"),clear:or("clear"),forEach:Ma(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=La(i,!1,!1),n[i]=La(i,!0,!1),e[i]=La(i,!1,!0),r[i]=La(i,!0,!0)}),[t,n,e,r]}const[NR,OR,DR,xR]=kR();function wc(t,e){const n=e?t?xR:DR:t?OR:NR;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(le(n,s)&&s in r?n:r,s,i)}const MR={get:wc(!1,!1)},LR={get:wc(!1,!0)},VR={get:wc(!0,!1)},FR={get:wc(!0,!0)};function ky(t,e,n){const r=te(n);if(r!==n&&e.call(t,r)){const s=Vd(t);console.warn(`Reactive ${s} contains both the raw and reactive versions of the same object${s==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Ny=new WeakMap,Oy=new WeakMap,Dy=new WeakMap,xy=new WeakMap;function UR(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $R(t){return t.__v_skip||!Object.isExtensible(t)?0:UR(Vd(t))}function sa(t){return Cr(t)?t:Tc(t,!1,Sy,MR,Ny)}function My(t){return Tc(t,!1,SR,LR,Oy)}function Ly(t){return Tc(t,!0,Py,VR,Dy)}function Qi(t){return Tc(t,!0,PR,FR,xy)}function Tc(t,e,n,r,s){if(!Te(t))return console.warn(`value cannot be made reactive: ${String(t)}`),t;if(t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=$R(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Cn(t){return Cr(t)?Cn(t.__v_raw):!!(t&&t.__v_isReactive)}function Cr(t){return!!(t&&t.__v_isReadonly)}function Rl(t){return!!(t&&t.__v_isShallow)}function bl(t){return Cn(t)||Cr(t)}function te(t){const e=t&&t.__v_raw;return e?te(e):t}function Wn(t){return wl(t,"__v_skip",!0),t}const Ro=t=>Te(t)?sa(t):t,Hd=t=>Te(t)?Ly(t):t;function Vy(t){vr&&St&&(t=te(t),Ry(t.dep||(t.dep=jd()),{target:t,type:"get",key:"value"}))}function Fy(t,e){t=te(t);const n=t.dep;n&&gh(n,{target:t,type:"set",key:"value",newValue:e})}function Pe(t){return!!(t&&t.__v_isRef===!0)}function Ei(t){return Uy(t,!1)}function BR(t){return Uy(t,!0)}function Uy(t,e){return Pe(t)?t:new jR(t,e)}class jR{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:te(e),this._value=n?e:Ro(e)}get value(){return Vy(this),this._value}set value(e){const n=this.__v_isShallow||Rl(e)||Cr(e);e=n?e:te(e),Ao(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ro(e),Fy(this,e))}}function Er(t){return Pe(t)?t.value:t}const WR={get:(t,e,n)=>Er(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Pe(s)&&!Pe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function $y(t){return Cn(t)?t:new Proxy(t,WR)}function ig(t){bl(t)||console.warn("toRefs() expects a reactive object but received a plain one.");const e=Y(t)?new Array(t.length):{};for(const n in t)e[n]=By(t,n);return e}class qR{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return gR(te(this._object),this._key)}}class HR{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Au(t,e,n){return Pe(t)?t:J(t)?new HR(t):Te(t)&&arguments.length>1?By(t,e,n):Ei(t)}function By(t,e,n){const r=t[e];return Pe(r)?r:new qR(t,e,n)}class KR{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Wd(e,()=>{this._dirty||(this._dirty=!0,Fy(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=te(this);return Vy(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function zR(t,e,n=!1){let r,s;const i=J(t);i?(r=t,s=()=>{console.warn("Write operation failed: computed value is readonly")}):(r=t.get,s=t.set);const o=new KR(r,s,i||!s,n);return e&&!n&&(o.effect.onTrack=e.onTrack,o.effect.onTrigger=e.onTrigger),o}const ns=[];function rl(t){ns.push(t)}function sl(){ns.pop()}function k(t,...e){Rs();const n=ns.length?ns[ns.length-1].component:null,r=n&&n.appContext.config.warnHandler,s=GR();if(r)Gn(r,n,11,[t+e.join(""),n&&n.proxy,s.map(({vnode:i})=>`at <${kc(n,i.type)}>`).join(`
`),s]);else{const i=[`[Vue warn]: ${t}`,...e];s.length&&i.push(`
`,...QR(s)),console.warn(...i)}bs()}function GR(){let t=ns[ns.length-1];if(!t)return[];const e=[];for(;t;){const n=e[0];n&&n.vnode===t?n.recurseCount++:e.push({vnode:t,recurseCount:0});const r=t.component&&t.component.parent;t=r&&r.vnode}return e}function QR(t){const e=[];return t.forEach((n,r)=>{e.push(...r===0?[]:[`
`],...YR(n))}),e}function YR({vnode:t,recurseCount:e}){const n=e>0?`... (${e} recursive calls)`:"",r=t.component?t.component.parent==null:!1,s=` at <${kc(t.component,t.type,r)}`,i=">"+n;return t.props?[s,...XR(t.props),i]:[s+i]}function XR(t){const e=[],n=Object.keys(t);return n.slice(0,3).forEach(r=>{e.push(...jy(r,t[r]))}),n.length>3&&e.push(" ..."),e}function jy(t,e,n){return $e(e)?(e=JSON.stringify(e),n?e:[`${t}=${e}`]):typeof e=="number"||typeof e=="boolean"||e==null?n?e:[`${t}=${e}`]:Pe(e)?(e=jy(t,te(e.value),!0),n?e:[`${t}=Ref<`,e,">"]):J(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=te(e),n?e:[`${t}=`,e])}const Kd={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function Gn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Ic(i,e,n)}return s}function ln(t,e,n,r){if(J(t)){const i=Gn(t,e,n,r);return i&&Ld(i)&&i.catch(o=>{Ic(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(ln(t[i],e,n,r));return s}function Ic(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=Kd[n];for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Gn(l,null,10,[t,o,a]);return}}JR(t,n,s,r)}function JR(t,e,n,r=!0){{const s=Kd[e];if(n&&rl(n),k(`Unhandled error${s?` during execution of ${s}`:""}`),n&&sl(),r)throw t;console.error(t)}}let bo=!1,mh=!1;const yt=[];let vn=0;const Xs=[];let yn=null,cr=0;const Wy=Promise.resolve();let zd=null;const ZR=100;function Cl(t){const e=zd||Wy;return t?e.then(this?t.bind(this):t):e}function eb(t){let e=vn+1,n=yt.length;for(;e<n;){const r=e+n>>>1;Co(yt[r])<t?e=r+1:n=r}return e}function Ac(t){(!yt.length||!yt.includes(t,bo&&t.allowRecurse?vn+1:vn))&&(t.id==null?yt.push(t):yt.splice(eb(t.id),0,t),qy())}function qy(){!bo&&!mh&&(mh=!0,zd=Wy.then(zy))}function tb(t){const e=yt.indexOf(t);e>vn&&yt.splice(e,1)}function Hy(t){Y(t)?Xs.push(...t):(!yn||!yn.includes(t,t.allowRecurse?cr+1:cr))&&Xs.push(t),qy()}function og(t,e=bo?vn+1:0){for(t=t||new Map;e<yt.length;e++){const n=yt[e];if(n&&n.pre){if(Gd(t,n))continue;yt.splice(e,1),e--,n()}}}function Ky(t){if(Xs.length){const e=[...new Set(Xs)];if(Xs.length=0,yn){yn.push(...e);return}for(yn=e,t=t||new Map,yn.sort((n,r)=>Co(n)-Co(r)),cr=0;cr<yn.length;cr++)Gd(t,yn[cr])||yn[cr]();yn=null,cr=0}}const Co=t=>t.id==null?1/0:t.id,nb=(t,e)=>{const n=Co(t)-Co(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function zy(t){mh=!1,bo=!0,t=t||new Map,yt.sort(nb);const e=n=>Gd(t,n);try{for(vn=0;vn<yt.length;vn++){const n=yt[vn];if(n&&n.active!==!1){if(e(n))continue;Gn(n,null,14)}}}finally{vn=0,yt.length=0,Ky(t),bo=!1,zd=null,(yt.length||Xs.length)&&zy(t)}}function Gd(t,e){if(!t.has(e))t.set(e,1);else{const n=t.get(e);if(n>ZR){const r=e.ownerInstance,s=r&&Tv(r.type);return k(`Maximum recursive updates exceeded${s?` in component <${s}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else t.set(e,n+1)}}let rs=!1;const Bs=new Set;Tl().__VUE_HMR_RUNTIME__={createRecord:Ru(Gy),rerender:Ru(ib),reload:Ru(ob)};const ds=new Map;function rb(t){const e=t.type.__hmrId;let n=ds.get(e);n||(Gy(e,t.type),n=ds.get(e)),n.instances.add(t)}function sb(t){ds.get(t.type.__hmrId).instances.delete(t)}function Gy(t,e){return ds.has(t)?!1:(ds.set(t,{initialDef:ao(e),instances:new Set}),!0)}function ao(t){return Iv(t)?t.__vccOpts:t}function ib(t,e){const n=ds.get(t);n&&(n.initialDef.render=e,[...n.instances].forEach(r=>{e&&(r.render=e,ao(r.type).render=e),r.renderCache=[],rs=!0,r.update(),rs=!1}))}function ob(t,e){const n=ds.get(t);if(!n)return;e=ao(e),ag(n.initialDef,e);const r=[...n.instances];for(const s of r){const i=ao(s.type);Bs.has(i)||(i!==n.initialDef&&ag(i,e),Bs.add(i)),s.appContext.propsCache.delete(s.type),s.appContext.emitsCache.delete(s.type),s.appContext.optionsCache.delete(s.type),s.ceReload?(Bs.add(i),s.ceReload(e.styles),Bs.delete(i)):s.parent?Ac(s.parent.update):s.appContext.reload?s.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Hy(()=>{for(const s of r)Bs.delete(ao(s.type))})}function ag(t,e){Fe(t,e);for(const n in t)n!=="__file"&&!(n in e)&&delete t[n]}function Ru(t){return(e,n)=>{try{return t(e,n)}catch(r){console.error(r),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let En,Yi=[],_h=!1;function ia(t,...e){En?En.emit(t,...e):_h||Yi.push({event:t,args:e})}function Qy(t,e){var n,r;En=t,En?(En.enabled=!0,Yi.forEach(({event:s,args:i})=>En.emit(s,...i)),Yi=[]):typeof window<"u"&&window.HTMLElement&&!((r=(n=window.navigator)==null?void 0:n.userAgent)!=null&&r.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{Qy(i,e)}),setTimeout(()=>{En||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,_h=!0,Yi=[])},3e3)):(_h=!0,Yi=[])}function ab(t,e){ia("app:init",t,e,{Fragment:Kt,Text:oa,Comment:Xt,Static:ol})}function lb(t){ia("app:unmount",t)}const cb=Qd("component:added"),Yy=Qd("component:updated"),ub=Qd("component:removed"),hb=t=>{En&&typeof En.cleanupBuffer=="function"&&!En.cleanupBuffer(t)&&ub(t)};function Qd(t){return e=>{ia(t,e.appContext.app,e.uid,e.parent?e.parent.uid:void 0,e)}}const db=Xy("perf:start"),fb=Xy("perf:end");function Xy(t){return(e,n,r)=>{ia(t,e.appContext.app,e.uid,e,n,r)}}function pb(t,e,n){ia("component:emit",t.appContext.app,t,e,n)}function gb(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||be;{const{emitsOptions:u,propsOptions:[h]}=t;if(u)if(!(e in u))(!h||!(Wr(e)in h))&&k(`Component emitted event "${e}" but it is neither declared in the emits option nor as an "${Wr(e)}" prop.`);else{const d=u[e];J(d)&&(d(...n)||k(`Invalid event arguments: event validation failed for event "${e}".`))}}let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||be;d&&(s=n.map(p=>$e(p)?p.trim():p)),h&&(s=n.map(dh))}pb(t,e,s);{const u=e.toLowerCase();u!==e&&r[Wr(u)]&&k(`Event "${u}" is emitted in component ${kc(t,t.type)} but the handler is registered for "${e}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Rr(e)}" instead of "${e}".`)}let a,l=r[a=Wr(e)]||r[a=Wr(ii(e))];!l&&i&&(l=r[a=Wr(Rr(e))]),l&&ln(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ln(c,t,6,s)}}function Jy(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!J(t)){const l=c=>{const u=Jy(c,e,!0);u&&(a=!0,Fe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(Te(t)&&r.set(t,null),null):(Y(i)?i.forEach(l=>o[l]=null):Fe(o,i),Te(t)&&r.set(t,o),o)}function Rc(t,e){return!t||!ra(e)?!1:(e=e.slice(2).replace(/Once$/,""),le(t,e[0].toLowerCase()+e.slice(1))||le(t,Rr(e))||le(t,e))}let Xe=null,Zy=null;function Sl(t){const e=Xe;return Xe=t,Zy=t&&t.type.__scopeId||null,e}function mb(t,e=Xe,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&vg(-1);const i=Sl(e);let o;try{o=t(...s)}finally{Sl(i),r._d&&vg(1)}return Yy(e),o};return r._n=!0,r._c=!0,r._d=!0,r}let yh=!1;function Pl(){yh=!0}function bu(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:p,ctx:m,inheritAttrs:E}=t;let y,A;const O=Sl(t);yh=!1;try{if(n.shapeFlag&4){const U=s||r;y=nn(u.call(U,U,h,i,p,d,m)),A=l}else{const U=e;l===i&&Pl(),y=nn(U.length>1?U(i,{get attrs(){return Pl(),l},slots:a,emit:c}):U(i,null)),A=e.props?l:yb(l)}}catch(U){co.length=0,Ic(U,t,1),y=Lt(Xt)}let S=y,K;if(y.patchFlag>0&&y.patchFlag&2048&&([S,K]=_b(y)),A&&E!==!1){const U=Object.keys(A),{shapeFlag:ye}=S;if(U.length){if(ye&7)o&&U.some(El)&&(A=vb(A,o)),S=Sr(S,A);else if(!yh&&S.type!==Xt){const W=Object.keys(l),Ze=[],Ie=[];for(let $=0,F=W.length;$<F;$++){const ae=W[$];ra(ae)?El(ae)||Ze.push(ae[2].toLowerCase()+ae.slice(3)):Ie.push(ae)}Ie.length&&k(`Extraneous non-props attributes (${Ie.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),Ze.length&&k(`Extraneous non-emits event listeners (${Ze.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return n.dirs&&(lg(S)||k("Runtime directive used on component with non-element root node. The directives will not function as intended."),S=Sr(S),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&(lg(S)||k("Component inside <Transition> renders non-element root node that cannot be animated."),S.transition=n.transition),K?K(S):y=S,Sl(O),y}const _b=t=>{const e=t.children,n=t.dynamicChildren,r=ev(e);if(!r)return[t,void 0];const s=e.indexOf(r),i=n?n.indexOf(r):-1,o=a=>{e[s]=a,n&&(i>-1?n[i]=a:a.patchFlag>0&&(t.dynamicChildren=[...n,a]))};return[nn(r),o]};function ev(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(oi(r)){if(r.type!==Xt||r.children==="v-if"){if(e)return;e=r}}else return}return e}const yb=t=>{let e;for(const n in t)(n==="class"||n==="style"||ra(n))&&((e||(e={}))[n]=t[n]);return e},vb=(t,e)=>{const n={};for(const r in t)(!El(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n},lg=t=>t.shapeFlag&7||t.type===Xt;function Eb(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if((s||a)&&rs||e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?cg(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!Rc(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?cg(r,o,c):!0:!!o;return!1}function cg(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Rc(n,i))return!0}return!1}function wb({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Tb=t=>t.__isSuspense;function Ib(t,e){e&&e.pendingBranch?Y(t)?e.effects.push(...t):e.effects.push(t):Hy(t)}function Ab(t,e){return Yd(t,null,e)}const Va={};function ss(t,e,n){return J(e)||k("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),Yd(t,e,n)}function Yd(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=be){var a;e||(n!==void 0&&k('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),r!==void 0&&k('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const l=U=>{k("Invalid watch source: ",U,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},c=wy()===((a=Ye)==null?void 0:a.scope)?Ye:null;let u,h=!1,d=!1;if(Pe(t)?(u=()=>t.value,h=Rl(t)):Cn(t)?(u=()=>t,r=!0):Y(t)?(d=!0,h=t.some(U=>Cn(U)||Rl(U)),u=()=>t.map(U=>{if(Pe(U))return U.value;if(Cn(U))return Gr(U);if(J(U))return Gn(U,c,2);l(U)})):J(t)?e?u=()=>Gn(t,c,2):u=()=>{if(!(c&&c.isUnmounted))return p&&p(),ln(t,c,3,[m])}:(u=Ot,l(t)),e&&r){const U=u;u=()=>Gr(U())}let p,m=U=>{p=S.onStop=()=>{Gn(U,c,4)}},E;if(ko)if(m=Ot,e?n&&ln(e,c,3,[u(),d?[]:void 0,m]):u(),s==="sync"){const U=O0();E=U.__watcherHandles||(U.__watcherHandles=[])}else return Ot;let y=d?new Array(t.length).fill(Va):Va;const A=()=>{if(S.active)if(e){const U=S.run();(r||h||(d?U.some((ye,W)=>Ao(ye,y[W])):Ao(U,y)))&&(p&&p(),ln(e,c,3,[U,y===Va?void 0:d&&y[0]===Va?[]:y,m]),y=U)}else S.run()};A.allowRecurse=!!e;let O;s==="sync"?O=A:s==="post"?O=()=>Nt(A,c&&c.suspense):(A.pre=!0,c&&(A.id=c.uid),O=()=>Ac(A));const S=new Wd(u,O);S.onTrack=i,S.onTrigger=o,e?n?A():y=S.run():s==="post"?Nt(S.run.bind(S),c&&c.suspense):S.run();const K=()=>{S.stop(),c&&c.scope&&xd(c.scope.effects,S)};return E&&E.push(K),K}function Rb(t,e,n){const r=this.proxy,s=$e(t)?t.includes(".")?tv(r,t):()=>r[t]:t.bind(r,r);let i;J(e)?i=e:(i=e.handler,n=e);const o=Ye;ai(this);const a=Yd(s,i.bind(r),n);return o?ai(o):os(),a}function tv(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Gr(t,e){if(!Te(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Pe(t))Gr(t.value,e);else if(Y(t))for(let n=0;n<t.length;n++)Gr(t[n],e);else if(gy(t)||es(t))t.forEach(n=>{Gr(n,e)});else if(_y(t))for(const n in t)Gr(t[n],e);return t}function nv(t){JA(t)&&k("Do not use built-in directive ids as custom directive id: "+t)}function P2(t,e){const n=Xe;if(n===null)return k("withDirectives can only be used inside render functions."),t;const r=Pc(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=be]=e[i];o&&(J(o)&&(o={mounted:o,updated:o}),o.deep&&Gr(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Br(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(Rs(),ln(l,n,8,[t.el,a,t,e]),bs())}}function Xd(t,e){return J(t)?(()=>Fe({name:t.name},e,{setup:t}))():t}const lo=t=>!!t.type.__asyncLoader,Jd=t=>t.type.__isKeepAlive;function bb(t,e){rv(t,"a",e)}function Cb(t,e){rv(t,"da",e)}function rv(t,e,n=Ye){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(bc(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Jd(s.parent.vnode)&&Sb(r,e,n,s),s=s.parent}}function Sb(t,e,n,r){const s=bc(e,t,r,!0);iv(()=>{xd(r[e],s)},n)}function bc(t,e,n=Ye,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Rs(),ai(n);const a=ln(e,n,t,o);return os(),bs(),a});return r?s.unshift(i):s.push(i),i}else{const s=Wr(Kd[t].replace(/ hook$/,""));k(`${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const tr=t=>(e,n=Ye)=>(!ko||t==="sp")&&bc(t,(...r)=>e(...r),n),Pb=tr("bm"),sv=tr("m"),kb=tr("bu"),Nb=tr("u"),Ob=tr("bum"),iv=tr("um"),Db=tr("sp"),xb=tr("rtg"),Mb=tr("rtc");function Lb(t,e=Ye){bc("ec",t,e)}const Vb=Symbol.for("v-ndc");function k2(t,e,n,r){let s;const i=n&&n[r];if(Y(t)||$e(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){Number.isInteger(t)||k(`The v-for range expect an integer value but got ${t}.`),s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Te(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function N2(t,e,n={},r,s){if(Xe.isCE||Xe.parent&&lo(Xe.parent)&&Xe.parent.isCE)return e!=="default"&&(n.name=e),Lt("slot",n,r&&r());let i=t[e];i&&i.length>1&&(k("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),i=()=>[]),i&&i._c&&(i._d=!1),nf();const o=i&&ov(i(n)),a=_v(Kt,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function ov(t){return t.some(e=>oi(e)?!(e.type===Xt||e.type===Kt&&!ov(e.children)):!0)?t:null}const vh=t=>t?Ev(t)?Pc(t)||t.proxy:vh(t.parent):null,is=Fe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>Qi(t.props),$attrs:t=>Qi(t.attrs),$slots:t=>Qi(t.slots),$refs:t=>Qi(t.refs),$parent:t=>vh(t.parent),$root:t=>vh(t.root),$emit:t=>t.emit,$options:t=>ef(t),$forceUpdate:t=>t.f||(t.f=()=>Ac(t.update)),$nextTick:t=>t.n||(t.n=Cl.bind(t.proxy)),$watch:t=>Rb.bind(t)}),Zd=t=>t==="_"||t==="$",Cu=(t,e)=>t!==be&&!t.__isScriptSetup&&le(t,e),av={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;if(e==="__isVue")return!0;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Cu(r,e))return o[e]=1,r[e];if(s!==be&&le(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&le(c,e))return o[e]=3,i[e];if(n!==be&&le(n,e))return o[e]=4,n[e];Eh&&(o[e]=0)}}const u=is[e];let h,d;if(u)return e==="$attrs"?(Tt(t,"get",e),Pl()):e==="$slots"&&Tt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==be&&le(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,le(d,e))return d[e];Xe&&(!$e(e)||e.indexOf("__v")!==0)&&(s!==be&&Zd(e[0])&&le(s,e)?k(`Property ${JSON.stringify(e)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):t===Xe&&k(`Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`))},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Cu(s,e)?(s[e]=n,!0):s.__isScriptSetup&&le(s,e)?(k(`Cannot mutate <script setup> binding "${e}" from Options API.`),!1):r!==be&&le(r,e)?(r[e]=n,!0):le(t.props,e)?(k(`Attempting to mutate prop "${e}". Props are readonly.`),!1):e[0]==="$"&&e.slice(1)in t?(k(`Attempting to mutate public property "${e}". Properties starting with $ are reserved and readonly.`),!1):(e in t.appContext.config.globalProperties?Object.defineProperty(i,e,{enumerable:!0,configurable:!0,value:n}):i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==be&&le(t,o)||Cu(e,o)||(a=i[0])&&le(a,o)||le(r,o)||le(is,o)||le(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:le(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};av.ownKeys=t=>(k("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(t));function Fb(t){const e={};return Object.defineProperty(e,"_",{configurable:!0,enumerable:!1,get:()=>t}),Object.keys(is).forEach(n=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,get:()=>is[n](t),set:Ot})}),e}function Ub(t){const{ctx:e,propsOptions:[n]}=t;n&&Object.keys(n).forEach(r=>{Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>t.props[r],set:Ot})})}function $b(t){const{ctx:e,setupState:n}=t;Object.keys(te(n)).forEach(r=>{if(!n.__isScriptSetup){if(Zd(r[0])){k(`setup() return property ${JSON.stringify(r)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>n[r],set:Ot})}})}function ug(t){return Y(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function Bb(){const t=Object.create(null);return(e,n)=>{t[n]?k(`${e} property "${n}" is already defined in ${t[n]}.`):t[n]=e}}let Eh=!0;function jb(t){const e=ef(t),n=t.proxy,r=t.ctx;Eh=!1,e.beforeCreate&&hg(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:m,activated:E,deactivated:y,beforeDestroy:A,beforeUnmount:O,destroyed:S,unmounted:K,render:U,renderTracked:ye,renderTriggered:W,errorCaptured:Ze,serverPrefetch:Ie,expose:$,inheritAttrs:F,components:ae,directives:Le,filters:pn}=e,kt=Bb();{const[re]=t.propsOptions;if(re)for(const X in re)kt("Props",X)}if(c&&Wb(c,r,kt),o)for(const re in o){const X=o[re];J(X)?(Object.defineProperty(r,re,{value:X.bind(n),configurable:!0,enumerable:!0,writable:!0}),kt("Methods",re)):k(`Method "${re}" has type "${typeof X}" in the component definition. Did you reference the function correctly?`)}if(s){J(s)||k("The data option must be a function. Plain object usage is no longer supported.");const re=s.call(n,n);if(Ld(re)&&k("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Te(re))k("data() should return an object.");else{t.data=sa(re);for(const X in re)kt("Data",X),Zd(X[0])||Object.defineProperty(r,X,{configurable:!0,enumerable:!0,get:()=>re[X],set:Ot})}}if(Eh=!0,i)for(const re in i){const X=i[re],Wt=J(X)?X.bind(n,n):J(X.get)?X.get.bind(n,n):Ot;Wt===Ot&&k(`Computed property "${re}" has no getter.`);const $r=!J(X)&&J(X.set)?X.set.bind(n):()=>{k(`Write operation failed: computed property "${re}" is readonly.`)},rr=Mt({get:Wt,set:$r});Object.defineProperty(r,re,{enumerable:!0,configurable:!0,get:()=>rr.value,set:gn=>rr.value=gn}),kt("Computed",re)}if(a)for(const re in a)lv(a[re],r,n,re);if(l){const re=J(l)?l.call(n):l;Reflect.ownKeys(re).forEach(X=>{il(X,re[X])})}u&&hg(u,t,"c");function Qe(re,X){Y(X)?X.forEach(Wt=>re(Wt.bind(n))):X&&re(X.bind(n))}if(Qe(Pb,h),Qe(sv,d),Qe(kb,p),Qe(Nb,m),Qe(bb,E),Qe(Cb,y),Qe(Lb,Ze),Qe(Mb,ye),Qe(xb,W),Qe(Ob,O),Qe(iv,K),Qe(Db,Ie),Y($))if($.length){const re=t.exposed||(t.exposed={});$.forEach(X=>{Object.defineProperty(re,X,{get:()=>n[X],set:Wt=>n[X]=Wt})})}else t.exposed||(t.exposed={});U&&t.render===Ot&&(t.render=U),F!=null&&(t.inheritAttrs=F),ae&&(t.components=ae),Le&&(t.directives=Le)}function Wb(t,e,n=Ot){Y(t)&&(t=wh(t));for(const r in t){const s=t[r];let i;Te(s)?"default"in s?i=Yt(s.from||r,s.default,!0):i=Yt(s.from||r):i=Yt(s),Pe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i,n("Inject",r)}}function hg(t,e,n){ln(Y(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function lv(t,e,n,r){const s=r.includes(".")?tv(n,r):()=>n[r];if($e(t)){const i=e[t];J(i)?ss(s,i):k(`Invalid watch handler specified by key "${t}"`,i)}else if(J(t))ss(s,t.bind(n));else if(Te(t))if(Y(t))t.forEach(i=>lv(i,e,n,r));else{const i=J(t.handler)?t.handler.bind(n):e[t.handler];J(i)?ss(s,i,t):k(`Invalid watch handler specified by key "${t.handler}"`,i)}else k(`Invalid watch option: "${r}"`,t)}function ef(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>kl(l,c,o,!0)),kl(l,e,o)),Te(e)&&i.set(e,l),l}function kl(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&kl(t,i,n,!0),s&&s.forEach(o=>kl(t,o,n,!0));for(const o in e)if(r&&o==="expose")k('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const a=qb[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const qb={data:dg,props:fg,emits:fg,methods:Xi,computed:Xi,beforeCreate:Ct,created:Ct,beforeMount:Ct,mounted:Ct,beforeUpdate:Ct,updated:Ct,beforeDestroy:Ct,beforeUnmount:Ct,destroyed:Ct,unmounted:Ct,activated:Ct,deactivated:Ct,errorCaptured:Ct,serverPrefetch:Ct,components:Xi,directives:Xi,watch:Kb,provide:dg,inject:Hb};function dg(t,e){return e?t?function(){return Fe(J(t)?t.call(this,this):t,J(e)?e.call(this,this):e)}:e:t}function Hb(t,e){return Xi(wh(t),wh(e))}function wh(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ct(t,e){return t?[...new Set([].concat(t,e))]:e}function Xi(t,e){return t?Fe(Object.create(null),t,e):e}function fg(t,e){return t?Y(t)&&Y(e)?[...new Set([...t,...e])]:Fe(Object.create(null),ug(t),ug(e??{})):e}function Kb(t,e){if(!t)return e;if(!e)return t;const n=Fe(Object.create(null),t);for(const r in e)n[r]=Ct(t[r],e[r]);return n}function cv(){return{app:null,config:{isNativeTag:py,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zb=0;function Gb(t,e){return function(r,s=null){J(r)||(r=Fe({},r)),s!=null&&!Te(s)&&(k("root props passed to app.mount() must be an object."),s=null);const i=cv();Object.defineProperty(i.config,"unwrapInjectedRef",{get(){return!0},set(){k("app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API.")}});const o=new Set;let a=!1;const l=i.app={_uid:zb++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Tg,get config(){return i.config},set config(c){k("app.config cannot be replaced. Modify individual options instead.")},use(c,...u){return o.has(c)?k("Plugin has already been applied to target app."):c&&J(c.install)?(o.add(c),c.install(l,...u)):J(c)?(o.add(c),c(l,...u)):k('A plugin must either be a function or an object with an "install" function.'),l},mixin(c){return i.mixins.includes(c)?k("Mixin has already been applied to target app"+(c.name?`: ${c.name}`:"")):i.mixins.push(c),l},component(c,u){return bh(c,i.config),u?(i.components[c]&&k(`Component "${c}" has already been registered in target app.`),i.components[c]=u,l):i.components[c]},directive(c,u){return nv(c),u?(i.directives[c]&&k(`Directive "${c}" has already been registered in target app.`),i.directives[c]=u,l):i.directives[c]},mount(c,u,h){if(a)k("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{c.__vue_app__&&k("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const d=Lt(r,s);return d.appContext=i,i.reload=()=>{t(Sr(d),c,h)},u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,l._instance=d.component,ab(l,Tg),Pc(d.component)||d.component.proxy}},unmount(){a?(t(null,l._container),l._instance=null,lb(l),delete l._container.__vue_app__):k("Cannot unmount an app that is not mounted.")},provide(c,u){return c in i.provides&&k(`App already provides property with key "${String(c)}". It will be overwritten with the new value.`),i.provides[c]=u,l},runWithContext(c){So=l;try{return c()}finally{So=null}}};return l}}let So=null;function il(t,e){if(!Ye)k("provide() can only be used inside setup().");else{let n=Ye.provides;const r=Ye.parent&&Ye.parent.provides;r===n&&(n=Ye.provides=Object.create(r)),n[t]=e}}function Yt(t,e,n=!1){const r=Ye||Xe;if(r||So){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:So._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&J(e)?e.call(r&&r.proxy):e;k(`injection "${String(t)}" not found.`)}else k("inject() can only be used inside setup() or functional components.")}function Qb(){return!!(Ye||Xe||So)}function Yb(t,e,n,r=!1){const s={},i={};wl(i,Cc,1),t.propsDefaults=Object.create(null),uv(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);dv(e||{},s,t),n?t.props=r?s:My(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Xb(t){for(;t;){if(t.type.__hmrId)return!0;t=t.parent}}function Jb(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=te(s),[l]=t.propsOptions;let c=!1;if(!Xb(t)&&(r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Rc(t.emitsOptions,d))continue;const p=e[d];if(l)if(le(i,d))p!==i[d]&&(i[d]=p,c=!0);else{const m=ii(d);s[m]=Th(l,a,m,p,t,!1)}else p!==i[d]&&(i[d]=p,c=!0)}}}else{uv(t,e,s,i)&&(c=!0);let u;for(const h in a)(!e||!le(e,h)&&((u=Rr(h))===h||!le(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Th(l,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!le(e,h))&&(delete i[h],c=!0)}c&&Dn(t,"set","$attrs"),dv(e||{},s,t)}function uv(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(nl(l))continue;const c=e[l];let u;s&&le(s,u=ii(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:Rc(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=te(n),c=a||be;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Th(s,l,h,c[h],t,!le(c,h))}}return o}function Th(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=le(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&J(l)){const{propsDefaults:c}=s;n in c?r=c[n]:(ai(s),r=c[n]=l.call(null,e),os())}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Rr(n))&&(r=!0))}return r}function hv(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!J(t)){const u=h=>{l=!0;const[d,p]=hv(h,e,!0);Fe(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return Te(t)&&r.set(t,Ys),Ys;if(Y(i))for(let u=0;u<i.length;u++){$e(i[u])||k("props must be strings when using array syntax.",i[u]);const h=ii(i[u]);pg(h)&&(o[h]=be)}else if(i){Te(i)||k("invalid props options",i);for(const u in i){const h=ii(u);if(pg(h)){const d=i[u],p=o[h]=Y(d)||J(d)?{type:d}:Fe({},d);if(p){const m=mg(Boolean,p.type),E=mg(String,p.type);p[0]=m>-1,p[1]=E<0||m<E,(m>-1||le(p,"default"))&&a.push(h)}}}}const c=[o,a];return Te(t)&&r.set(t,c),c}function pg(t){return t[0]!=="$"?!0:(k(`Invalid prop name: "${t}" is a reserved property.`),!1)}function Ih(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function gg(t,e){return Ih(t)===Ih(e)}function mg(t,e){return Y(e)?e.findIndex(n=>gg(n,t)):J(e)&&gg(e,t)?0:-1}function dv(t,e,n){const r=te(e),s=n.propsOptions[0];for(const i in s){let o=s[i];o!=null&&Zb(i,r[i],o,!le(t,i)&&!le(t,Rr(i)))}}function Zb(t,e,n,r){const{type:s,required:i,validator:o,skipCheck:a}=n;if(i&&r){k('Missing required prop: "'+t+'"');return}if(!(e==null&&!i)){if(s!=null&&s!==!0&&!a){let l=!1;const c=Y(s)?s:[s],u=[];for(let h=0;h<c.length&&!l;h++){const{valid:d,expectedType:p}=t0(e,c[h]);u.push(p||""),l=d}if(!l){k(n0(t,e,u));return}}o&&!o(e)&&k('Invalid prop: custom validator check failed for prop "'+t+'".')}}const e0=xr("String,Number,Boolean,Function,Symbol,BigInt");function t0(t,e){let n;const r=Ih(e);if(e0(r)){const s=typeof t;n=s===r.toLowerCase(),!n&&s==="object"&&(n=t instanceof e)}else r==="Object"?n=Te(t):r==="Array"?n=Y(t):r==="null"?n=t===null:n=t instanceof e;return{valid:n,expectedType:r}}function n0(t,e,n){let r=`Invalid prop: type check failed for prop "${t}". Expected ${n.map(yc).join(" | ")}`;const s=n[0],i=Vd(e),o=_g(e,s),a=_g(e,i);return n.length===1&&yg(s)&&!r0(s,i)&&(r+=` with value ${o}`),r+=`, got ${i} `,yg(i)&&(r+=`with value ${a}.`),r}function _g(t,e){return e==="String"?`"${t}"`:e==="Number"?`${Number(t)}`:`${t}`}function yg(t){return["string","number","boolean"].some(n=>t.toLowerCase()===n)}function r0(...t){return t.some(e=>e.toLowerCase()==="boolean")}const fv=t=>t[0]==="_"||t==="$stable",tf=t=>Y(t)?t.map(nn):[nn(t)],s0=(t,e,n)=>{if(e._n)return e;const r=mb((...s)=>(Ye&&k(`Slot "${t}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),tf(e(...s))),n);return r._c=!1,r},pv=(t,e,n)=>{const r=t._ctx;for(const s in t){if(fv(s))continue;const i=t[s];if(J(i))e[s]=s0(s,i,r);else if(i!=null){k(`Non-function value encountered for slot "${s}". Prefer function slots for better performance.`);const o=tf(i);e[s]=()=>o}}},gv=(t,e)=>{Jd(t.vnode)||k("Non-function value encountered for default slot. Prefer function slots for better performance.");const n=tf(e);t.slots.default=()=>n},i0=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=te(e),wl(e,"_",n)):pv(e,t.slots={})}else t.slots={},e&&gv(t,e);wl(t.slots,Cc,1)},o0=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=be;if(r.shapeFlag&32){const a=e._;a?rs?(Fe(s,e),Dn(t,"set","$slots")):n&&a===1?i=!1:(Fe(s,e),!n&&a===1&&delete s._):(i=!e.$stable,pv(e,s)),o=e}else e&&(gv(t,e),o={default:1});if(i)for(const a in s)!fv(a)&&!(a in o)&&delete s[a]};function Ah(t,e,n,r,s=!1){if(Y(t)){t.forEach((d,p)=>Ah(d,e&&(Y(e)?e[p]:e),n,r,s));return}if(lo(r)&&!s)return;const i=r.shapeFlag&4?Pc(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=t;if(!a){k("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const c=e&&e.r,u=a.refs===be?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&($e(c)?(u[c]=null,le(h,c)&&(h[c]=null)):Pe(c)&&(c.value=null)),J(l))Gn(l,a,12,[o,u]);else{const d=$e(l),p=Pe(l);if(d||p){const m=()=>{if(t.f){const E=d?le(h,l)?h[l]:u[l]:l.value;s?Y(E)&&xd(E,i):Y(E)?E.includes(i)||E.push(i):d?(u[l]=[i],le(h,l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,le(h,l)&&(h[l]=o)):p?(l.value=o,t.k&&(u[t.k]=o)):k("Invalid template ref type:",l,`(${typeof l})`)};o?(m.id=-1,Nt(m,n)):m()}else k("Invalid template ref type:",l,`(${typeof l})`)}}let Li,dr;function Un(t,e){t.appContext.config.performance&&Nl()&&dr.mark(`vue-${e}-${t.uid}`),db(t,e,Nl()?dr.now():Date.now())}function $n(t,e){if(t.appContext.config.performance&&Nl()){const n=`vue-${e}-${t.uid}`,r=n+":end";dr.mark(r),dr.measure(`<${kc(t,t.type)}> ${e}`,n,r),dr.clearMarks(n),dr.clearMarks(r)}fb(t,e,Nl()?dr.now():Date.now())}function Nl(){return Li!==void 0||(typeof window<"u"&&window.performance?(Li=!0,dr=window.performance):Li=!1),Li}function a0(){const t=[];if(t.length){const e=t.length>1;console.warn(`Feature flag${e?"s":""} ${t.join(", ")} ${e?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const Nt=Ib;function l0(t){return c0(t)}function c0(t,e){a0();const n=Tl();n.__VUE__=!0,Qy(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=Ot,insertStaticContent:m}=t,E=(f,g,_,T=null,w=null,P=null,D=!1,C=null,N=rs?!1:!!g.dynamicChildren)=>{if(f===g)return;f&&!Vi(f,g)&&(T=L(f),qt(f,w,P,!0),f=null),g.patchFlag===-2&&(N=!1,g.dynamicChildren=null);const{type:R,ref:z,shapeFlag:q}=g;switch(R){case oa:y(f,g,_,T);break;case Xt:A(f,g,_,T);break;case ol:f==null?O(g,_,T,D):S(f,g,_,D);break;case Kt:Le(f,g,_,T,w,P,D,C,N);break;default:q&1?ye(f,g,_,T,w,P,D,C,N):q&6?pn(f,g,_,T,w,P,D,C,N):q&64||q&128?R.process(f,g,_,T,w,P,D,C,N,j):k("Invalid VNode type:",R,`(${typeof R})`)}z!=null&&w&&Ah(z,f&&f.ref,P,g||f,!g)},y=(f,g,_,T)=>{if(f==null)r(g.el=a(g.children),_,T);else{const w=g.el=f.el;g.children!==f.children&&c(w,g.children)}},A=(f,g,_,T)=>{f==null?r(g.el=l(g.children||""),_,T):g.el=f.el},O=(f,g,_,T)=>{[f.el,f.anchor]=m(f.children,g,_,T,f.el,f.anchor)},S=(f,g,_,T)=>{if(g.children!==f.children){const w=d(f.anchor);U(f),[g.el,g.anchor]=m(g.children,_,w,T)}else g.el=f.el,g.anchor=f.anchor},K=({el:f,anchor:g},_,T)=>{let w;for(;f&&f!==g;)w=d(f),r(f,_,T),f=w;r(g,_,T)},U=({el:f,anchor:g})=>{let _;for(;f&&f!==g;)_=d(f),s(f),f=_;s(g)},ye=(f,g,_,T,w,P,D,C,N)=>{D=D||g.type==="svg",f==null?W(g,_,T,w,P,D,C,N):$(f,g,w,P,D,C,N)},W=(f,g,_,T,w,P,D,C)=>{let N,R;const{type:z,props:q,shapeFlag:G,transition:se,dirs:ce}=f;if(N=f.el=o(f.type,P,q&&q.is,q),G&8?u(N,f.children):G&16&&Ie(f.children,N,null,T,w,P&&z!=="foreignObject",D,C),ce&&Br(f,null,T,"created"),Ze(N,f,f.scopeId,D,T),q){for(const Re in q)Re!=="value"&&!nl(Re)&&i(N,Re,null,q[Re],P,f.children,T,w,v);"value"in q&&i(N,"value",null,q.value),(R=q.onVnodeBeforeMount)&&_n(R,T,f)}Object.defineProperty(N,"__vnode",{value:f,enumerable:!1}),Object.defineProperty(N,"__vueParentComponent",{value:T,enumerable:!1}),ce&&Br(f,null,T,"beforeMount");const Se=(!w||w&&!w.pendingBranch)&&se&&!se.persisted;Se&&se.beforeEnter(N),r(N,g,_),((R=q&&q.onVnodeMounted)||Se||ce)&&Nt(()=>{R&&_n(R,T,f),Se&&se.enter(N),ce&&Br(f,null,T,"mounted")},w)},Ze=(f,g,_,T,w)=>{if(_&&p(f,_),T)for(let P=0;P<T.length;P++)p(f,T[P]);if(w){let P=w.subTree;if(P.patchFlag>0&&P.patchFlag&2048&&(P=ev(P.children)||P),g===P){const D=w.vnode;Ze(f,D,D.scopeId,D.slotScopeIds,w.parent)}}},Ie=(f,g,_,T,w,P,D,C,N=0)=>{for(let R=N;R<f.length;R++){const z=f[R]=C?ur(f[R]):nn(f[R]);E(null,z,g,_,T,w,P,D,C)}},$=(f,g,_,T,w,P,D)=>{const C=g.el=f.el;let{patchFlag:N,dynamicChildren:R,dirs:z}=g;N|=f.patchFlag&16;const q=f.props||be,G=g.props||be;let se;_&&jr(_,!1),(se=G.onVnodeBeforeUpdate)&&_n(se,_,g,f),z&&Br(g,f,_,"beforeUpdate"),_&&jr(_,!0),rs&&(N=0,D=!1,R=null);const ce=w&&g.type!=="foreignObject";if(R?(F(f.dynamicChildren,R,C,_,T,ce,P),Rh(f,g)):D||Wt(f,g,C,null,_,T,ce,P,!1),N>0){if(N&16)ae(C,g,q,G,_,T,w);else if(N&2&&q.class!==G.class&&i(C,"class",null,G.class,w),N&4&&i(C,"style",q.style,G.style,w),N&8){const Se=g.dynamicProps;for(let Re=0;Re<Se.length;Re++){const qe=Se[Re],en=q[qe],xs=G[qe];(xs!==en||qe==="value")&&i(C,qe,en,xs,w,f.children,_,T,v)}}N&1&&f.children!==g.children&&u(C,g.children)}else!D&&R==null&&ae(C,g,q,G,_,T,w);((se=G.onVnodeUpdated)||z)&&Nt(()=>{se&&_n(se,_,g,f),z&&Br(g,f,_,"updated")},T)},F=(f,g,_,T,w,P,D)=>{for(let C=0;C<g.length;C++){const N=f[C],R=g[C],z=N.el&&(N.type===Kt||!Vi(N,R)||N.shapeFlag&70)?h(N.el):_;E(N,R,z,null,T,w,P,D,!0)}},ae=(f,g,_,T,w,P,D)=>{if(_!==T){if(_!==be)for(const C in _)!nl(C)&&!(C in T)&&i(f,C,_[C],null,D,g.children,w,P,v);for(const C in T){if(nl(C))continue;const N=T[C],R=_[C];N!==R&&C!=="value"&&i(f,C,R,N,D,g.children,w,P,v)}"value"in T&&i(f,"value",_.value,T.value)}},Le=(f,g,_,T,w,P,D,C,N)=>{const R=g.el=f?f.el:a(""),z=g.anchor=f?f.anchor:a("");let{patchFlag:q,dynamicChildren:G,slotScopeIds:se}=g;(rs||q&2048)&&(q=0,N=!1,G=null),se&&(C=C?C.concat(se):se),f==null?(r(R,_,T),r(z,_,T),Ie(g.children,_,z,w,P,D,C,N)):q>0&&q&64&&G&&f.dynamicChildren?(F(f.dynamicChildren,G,_,w,P,D,C),Rh(f,g)):Wt(f,g,_,z,w,P,D,C,N)},pn=(f,g,_,T,w,P,D,C,N)=>{g.slotScopeIds=C,f==null?g.shapeFlag&512?w.ctx.activate(g,_,T,D,N):kt(g,_,T,w,P,D,N):Qe(f,g,N)},kt=(f,g,_,T,w,P,D)=>{const C=f.component=w0(f,T,w);if(C.type.__hmrId&&rb(C),rl(f),Un(C,"mount"),Jd(f)&&(C.ctx.renderer=j),Un(C,"init"),I0(C),$n(C,"init"),C.asyncDep){if(w&&w.registerDep(C,re),!f.el){const N=C.subTree=Lt(Xt);A(null,N,g,_)}return}re(C,f,g,_,w,P,D),sl(),$n(C,"mount")},Qe=(f,g,_)=>{const T=g.component=f.component;if(Eb(f,g,_))if(T.asyncDep&&!T.asyncResolved){rl(g),X(T,g,_),sl();return}else T.next=g,tb(T.update),T.update();else g.el=f.el,T.vnode=g},re=(f,g,_,T,w,P,D)=>{const C=()=>{if(f.isMounted){let{next:z,bu:q,u:G,parent:se,vnode:ce}=f,Se=z,Re;rl(z||f.vnode),jr(f,!1),z?(z.el=ce.el,X(f,z,D)):z=ce,q&&$s(q),(Re=z.props&&z.props.onVnodeBeforeUpdate)&&_n(Re,se,z,ce),jr(f,!0),Un(f,"render");const qe=bu(f);$n(f,"render");const en=f.subTree;f.subTree=qe,Un(f,"patch"),E(en,qe,h(en.el),L(en),f,w,P),$n(f,"patch"),z.el=qe.el,Se===null&&wb(f,qe.el),G&&Nt(G,w),(Re=z.props&&z.props.onVnodeUpdated)&&Nt(()=>_n(Re,se,z,ce),w),Yy(f),sl()}else{let z;const{el:q,props:G}=g,{bm:se,m:ce,parent:Se}=f,Re=lo(g);if(jr(f,!1),se&&$s(se),!Re&&(z=G&&G.onVnodeBeforeMount)&&_n(z,Se,g),jr(f,!0),q&&Ve){const qe=()=>{Un(f,"render"),f.subTree=bu(f),$n(f,"render"),Un(f,"hydrate"),Ve(q,f.subTree,f,w,null),$n(f,"hydrate")};Re?g.type.__asyncLoader().then(()=>!f.isUnmounted&&qe()):qe()}else{Un(f,"render");const qe=f.subTree=bu(f);$n(f,"render"),Un(f,"patch"),E(null,qe,_,T,f,w,P),$n(f,"patch"),g.el=qe.el}if(ce&&Nt(ce,w),!Re&&(z=G&&G.onVnodeMounted)){const qe=g;Nt(()=>_n(z,Se,qe),w)}(g.shapeFlag&256||Se&&lo(Se.vnode)&&Se.vnode.shapeFlag&256)&&f.a&&Nt(f.a,w),f.isMounted=!0,cb(f),g=_=T=null}},N=f.effect=new Wd(C,()=>Ac(R),f.scope),R=f.update=()=>N.run();R.id=f.uid,jr(f,!0),N.onTrack=f.rtc?z=>$s(f.rtc,z):void 0,N.onTrigger=f.rtg?z=>$s(f.rtg,z):void 0,R.ownerInstance=f,R()},X=(f,g,_)=>{g.component=f;const T=f.vnode.props;f.vnode=g,f.next=null,Jb(f,g.props,T,_),o0(f,g.children,_),Rs(),og(),bs()},Wt=(f,g,_,T,w,P,D,C,N=!1)=>{const R=f&&f.children,z=f?f.shapeFlag:0,q=g.children,{patchFlag:G,shapeFlag:se}=g;if(G>0){if(G&128){rr(R,q,_,T,w,P,D,C,N);return}else if(G&256){$r(R,q,_,T,w,P,D,C,N);return}}se&8?(z&16&&v(R,w,P),q!==R&&u(_,q)):z&16?se&16?rr(R,q,_,T,w,P,D,C,N):v(R,w,P,!0):(z&8&&u(_,""),se&16&&Ie(q,_,T,w,P,D,C,N))},$r=(f,g,_,T,w,P,D,C,N)=>{f=f||Ys,g=g||Ys;const R=f.length,z=g.length,q=Math.min(R,z);let G;for(G=0;G<q;G++){const se=g[G]=N?ur(g[G]):nn(g[G]);E(f[G],se,_,null,w,P,D,C,N)}R>z?v(f,w,P,!0,!1,q):Ie(g,_,T,w,P,D,C,N,q)},rr=(f,g,_,T,w,P,D,C,N)=>{let R=0;const z=g.length;let q=f.length-1,G=z-1;for(;R<=q&&R<=G;){const se=f[R],ce=g[R]=N?ur(g[R]):nn(g[R]);if(Vi(se,ce))E(se,ce,_,null,w,P,D,C,N);else break;R++}for(;R<=q&&R<=G;){const se=f[q],ce=g[G]=N?ur(g[G]):nn(g[G]);if(Vi(se,ce))E(se,ce,_,null,w,P,D,C,N);else break;q--,G--}if(R>q){if(R<=G){const se=G+1,ce=se<z?g[se].el:T;for(;R<=G;)E(null,g[R]=N?ur(g[R]):nn(g[R]),_,ce,w,P,D,C,N),R++}}else if(R>G)for(;R<=q;)qt(f[R],w,P,!0),R++;else{const se=R,ce=R,Se=new Map;for(R=ce;R<=G;R++){const Rt=g[R]=N?ur(g[R]):nn(g[R]);Rt.key!=null&&(Se.has(Rt.key)&&k("Duplicate keys found during update:",JSON.stringify(Rt.key),"Make sure keys are unique."),Se.set(Rt.key,R))}let Re,qe=0;const en=G-ce+1;let xs=!1,Gp=0;const Mi=new Array(en);for(R=0;R<en;R++)Mi[R]=0;for(R=se;R<=q;R++){const Rt=f[R];if(qe>=en){qt(Rt,w,P,!0);continue}let mn;if(Rt.key!=null)mn=Se.get(Rt.key);else for(Re=ce;Re<=G;Re++)if(Mi[Re-ce]===0&&Vi(Rt,g[Re])){mn=Re;break}mn===void 0?qt(Rt,w,P,!0):(Mi[mn-ce]=R+1,mn>=Gp?Gp=mn:xs=!0,E(Rt,g[mn],_,null,w,P,D,C,N),qe++)}const Qp=xs?u0(Mi):Ys;for(Re=Qp.length-1,R=en-1;R>=0;R--){const Rt=ce+R,mn=g[Rt],Yp=Rt+1<z?g[Rt+1].el:T;Mi[R]===0?E(null,mn,_,Yp,w,P,D,C,N):xs&&(Re<0||R!==Qp[Re]?gn(mn,_,Yp,2):Re--)}}},gn=(f,g,_,T,w=null)=>{const{el:P,type:D,transition:C,children:N,shapeFlag:R}=f;if(R&6){gn(f.component.subTree,g,_,T);return}if(R&128){f.suspense.move(g,_,T);return}if(R&64){D.move(f,g,_,j);return}if(D===Kt){r(P,g,_);for(let q=0;q<N.length;q++)gn(N[q],g,_,T);r(f.anchor,g,_);return}if(D===ol){K(f,g,_);return}if(T!==2&&R&1&&C)if(T===0)C.beforeEnter(P),r(P,g,_),Nt(()=>C.enter(P),w);else{const{leave:q,delayLeave:G,afterLeave:se}=C,ce=()=>r(P,g,_),Se=()=>{q(P,()=>{ce(),se&&se()})};G?G(P,ce,Se):Se()}else r(P,g,_)},qt=(f,g,_,T=!1,w=!1)=>{const{type:P,props:D,ref:C,children:N,dynamicChildren:R,shapeFlag:z,patchFlag:q,dirs:G}=f;if(C!=null&&Ah(C,null,_,f,!0),z&256){g.ctx.deactivate(f);return}const se=z&1&&G,ce=!lo(f);let Se;if(ce&&(Se=D&&D.onVnodeBeforeUnmount)&&_n(Se,g,f),z&6)ir(f.component,_,T);else{if(z&128){f.suspense.unmount(_,T);return}se&&Br(f,null,g,"beforeUnmount"),z&64?f.type.remove(f,g,_,w,j,T):R&&(P!==Kt||q>0&&q&64)?v(R,g,_,!1,!0):(P===Kt&&q&384||!w&&z&16)&&v(N,g,_),T&&sr(f)}(ce&&(Se=D&&D.onVnodeUnmounted)||se)&&Nt(()=>{Se&&_n(Se,g,f),se&&Br(f,null,g,"unmounted")},_)},sr=f=>{const{type:g,el:_,anchor:T,transition:w}=f;if(g===Kt){f.patchFlag>0&&f.patchFlag&2048&&w&&!w.persisted?f.children.forEach(D=>{D.type===Xt?s(D.el):sr(D)}):Na(_,T);return}if(g===ol){U(f);return}const P=()=>{s(_),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(f.shapeFlag&1&&w&&!w.persisted){const{leave:D,delayLeave:C}=w,N=()=>D(_,P);C?C(f.el,P,N):N()}else P()},Na=(f,g)=>{let _;for(;f!==g;)_=d(f),s(f),f=_;s(g)},ir=(f,g,_)=>{f.type.__hmrId&&sb(f);const{bum:T,scope:w,update:P,subTree:D,um:C}=f;T&&$s(T),w.stop(),P&&(P.active=!1,qt(D,f,g,_)),C&&Nt(C,g),Nt(()=>{f.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve()),hb(f)},v=(f,g,_,T=!1,w=!1,P=0)=>{for(let D=P;D<f.length;D++)qt(f[D],g,_,T,w)},L=f=>f.shapeFlag&6?L(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),V=(f,g,_)=>{f==null?g._vnode&&qt(g._vnode,null,null,!0):E(g._vnode||null,f,g,null,null,null,_),og(),Ky(),g._vnode=f},j={p:E,um:qt,m:gn,r:sr,mt:kt,mc:Ie,pc:Wt,pbc:F,n:L,o:t};let de,Ve;return e&&([de,Ve]=e(j)),{render:V,hydrate:de,createApp:Gb(V,de)}}function jr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Rh(t,e,n=!1){const r=t.children,s=e.children;if(Y(r)&&Y(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=ur(s[i]),a.el=o.el),n||Rh(o,a)),a.type===oa&&(a.el=o.el),a.type===Xt&&!a.el&&(a.el=o.el)}}function u0(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const h0=t=>t.__isTeleport,Kt=Symbol.for("v-fgt"),oa=Symbol.for("v-txt"),Xt=Symbol.for("v-cmt"),ol=Symbol.for("v-stc"),co=[];let sn=null;function nf(t=!1){co.push(sn=t?null:[])}function d0(){co.pop(),sn=co[co.length-1]||null}let Po=1;function vg(t){Po+=t}function mv(t){return t.dynamicChildren=Po>0?sn||Ys:null,d0(),Po>0&&sn&&sn.push(t),t}function f0(t,e,n,r,s,i){return mv(rf(t,e,n,r,s,i,!0))}function _v(t,e,n,r,s){return mv(Lt(t,e,n,r,s,!0))}function oi(t){return t?t.__v_isVNode===!0:!1}function Vi(t,e){return e.shapeFlag&6&&Bs.has(e.type)?(t.shapeFlag&=-257,e.shapeFlag&=-513,!1):t.type===e.type&&t.key===e.key}const p0=(...t)=>g0(...t),Cc="__vInternal",yv=({key:t})=>t??null,al=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?$e(t)||Pe(t)||J(t)?{i:Xe,r:t,k:e,f:!!n}:t:null);function rf(t,e=null,n=null,r=0,s=null,i=t===Kt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&yv(e),ref:e&&al(e),scopeId:Zy,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Xe};return a?(sf(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=$e(n)?8:16),l.key!==l.key&&k("VNode created with invalid key (NaN). VNode type:",l.type),Po>0&&!o&&sn&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&sn.push(l),l}const Lt=p0;function g0(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Vb)&&(t||k(`Invalid vnode type when creating vnode: ${t}.`),t=Xt),oi(t)){const a=Sr(t,e,!0);return n&&sf(a,n),Po>0&&!i&&sn&&(a.shapeFlag&6?sn[sn.indexOf(t)]=a:sn.push(a)),a.patchFlag|=-2,a}if(Iv(t)&&(t=t.__vccOpts),e){e=m0(e);let{class:a,style:l}=e;a&&!$e(a)&&(e.class=$d(a)),Te(l)&&(bl(l)&&!Y(l)&&(l=Fe({},l)),e.style=Ud(l))}const o=$e(t)?1:Tb(t)?128:h0(t)?64:Te(t)?4:J(t)?2:0;return o&4&&bl(t)&&(t=te(t),k("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,t)),rf(t,e,n,r,s,o,i,!0)}function m0(t){return t?bl(t)||Cc in t?Fe({},t):t:null}function Sr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?y0(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&yv(a),ref:e&&e.ref?n&&s?Y(s)?s.concat(al(e)):[s,al(e)]:al(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:i===-1&&Y(o)?o.map(vv):o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Kt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Sr(t.ssContent),ssFallback:t.ssFallback&&Sr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function vv(t){const e=Sr(t);return Y(t.children)&&(e.children=t.children.map(vv)),e}function _0(t=" ",e=0){return Lt(oa,null,t,e)}function nn(t){return t==null||typeof t=="boolean"?Lt(Xt):Y(t)?Lt(Kt,null,t.slice()):typeof t=="object"?ur(t):Lt(oa,null,String(t))}function ur(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Sr(t)}function sf(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Y(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),sf(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Cc in e)?e._ctx=Xe:s===3&&Xe&&(Xe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else J(e)?(e={default:e,_ctx:Xe},n=32):(e=String(e),r&64?(n=16,e=[_0(e)]):n=8);t.children=e,t.shapeFlag|=n}function y0(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=$d([e.class,r.class]));else if(s==="style")e.style=Ud([e.style,r.style]);else if(ra(s)){const i=e[s],o=r[s];o&&i!==o&&!(Y(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function _n(t,e,n,r=null){ln(t,e,7,[n,r])}const v0=cv();let E0=0;function w0(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||v0,i={uid:E0++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ey(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:hv(r,s),emitsOptions:Jy(r,s),emit:null,emitted:null,propsDefaults:be,inheritAttrs:r.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx=Fb(i),i.root=e?e.root:i,i.emit=gb.bind(null,i),t.ce&&t.ce(i),i}let Ye=null;const Sc=()=>Ye||Xe;let of,Ms,Eg="__VUE_INSTANCE_SETTERS__";(Ms=Tl()[Eg])||(Ms=Tl()[Eg]=[]),Ms.push(t=>Ye=t),of=t=>{Ms.length>1?Ms.forEach(e=>e(t)):Ms[0](t)};const ai=t=>{of(t),t.scope.on()},os=()=>{Ye&&Ye.scope.off(),of(null)},T0=xr("slot,component");function bh(t,e){const n=e.isNativeTag||py;(T0(t)||n(t))&&k("Do not use built-in or reserved HTML elements as component id: "+t)}function Ev(t){return t.vnode.shapeFlag&4}let ko=!1;function I0(t,e=!1){ko=e;const{props:n,children:r}=t.vnode,s=Ev(t);Yb(t,n,s,e),i0(t,r);const i=s?A0(t,e):void 0;return ko=!1,i}function A0(t,e){var n;const r=t.type;{if(r.name&&bh(r.name,t.appContext.config),r.components){const i=Object.keys(r.components);for(let o=0;o<i.length;o++)bh(i[o],t.appContext.config)}if(r.directives){const i=Object.keys(r.directives);for(let o=0;o<i.length;o++)nv(i[o])}r.compilerOptions&&R0()&&k('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}t.accessCache=Object.create(null),t.proxy=Wn(new Proxy(t.ctx,av)),Ub(t);const{setup:s}=r;if(s){const i=t.setupContext=s.length>1?S0(t):null;ai(t),Rs();const o=Gn(s,t,0,[Qi(t.props),i]);if(bs(),os(),Ld(o)){if(o.then(os,os),e)return o.then(a=>{wg(t,a,e)}).catch(a=>{Ic(a,t,0)});if(t.asyncDep=o,!t.suspense){const a=(n=r.name)!=null?n:"Anonymous";k(`Component <${a}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else wg(t,o,e)}else wv(t,e)}function wg(t,e,n){J(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Te(e)?(oi(e)&&k("setup() should not return VNodes directly - return a render function instead."),t.devtoolsRawSetupState=e,t.setupState=$y(e),$b(t)):e!==void 0&&k(`setup() should return an object. Received: ${e===null?"null":typeof e}`),wv(t,n)}let Ch;const R0=()=>!Ch;function wv(t,e,n){const r=t.type;if(!t.render){if(!e&&Ch&&!r.render){const s=r.template||ef(t).template;if(s){Un(t,"compile");const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=Fe(Fe({isCustomElement:i,delimiters:a},o),l);r.render=Ch(s,c),$n(t,"compile")}}t.render=r.render||Ot}ai(t),Rs(),jb(t),bs(),os(),!r.render&&t.render===Ot&&!e&&(r.template?k('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):k("Component is missing template or render function."))}function b0(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Pl(),Tt(t,"get","$attrs"),e[n]},set(){return k("setupContext.attrs is readonly."),!1},deleteProperty(){return k("setupContext.attrs is readonly."),!1}}))}function C0(t){return t.slotsProxy||(t.slotsProxy=new Proxy(t.slots,{get(e,n){return Tt(t,"get","$slots"),e[n]}}))}function S0(t){return Object.freeze({get attrs(){return b0(t)},get slots(){return C0(t)},get emit(){return(n,...r)=>t.emit(n,...r)},expose:n=>{if(t.exposed&&k("expose() should be called only once per setup()."),n!=null){let r=typeof n;r==="object"&&(Y(n)?r="array":Pe(n)&&(r="ref")),r!=="object"&&k(`expose() should be passed a plain object, received ${r}.`)}t.exposed=n||{}}})}function Pc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy($y(Wn(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in is)return is[n](t)},has(e,n){return n in e||n in is}}))}const P0=/(?:^|[-_])(\w)/g,k0=t=>t.replace(P0,e=>e.toUpperCase()).replace(/[-_]/g,"");function Tv(t,e=!0){return J(t)?t.displayName||t.name:t.name||e&&t.__name}function kc(t,e,n=!1){let r=Tv(e);if(!r&&e.__file){const s=e.__file.match(/([^/\\]+)\.\w+$/);s&&(r=s[1])}if(!r&&t&&t.parent){const s=i=>{for(const o in i)if(i[o]===e)return o};r=s(t.components||t.parent.type.components)||s(t.appContext.components)}return r?k0(r):n?"App":"Anonymous"}function Iv(t){return J(t)&&"__vccOpts"in t}const Mt=(t,e)=>zR(t,e,ko);function Av(t,e,n){const r=arguments.length;return r===2?Te(e)&&!Y(e)?oi(e)?Lt(t,null,[e]):Lt(t,e):Lt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&oi(n)&&(n=[n]),Lt(t,e,n))}const N0=Symbol.for("v-scx"),O0=()=>{{const t=Yt(N0);return t||k("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),t}};function Su(t){return!!(t&&t.__v_isShallow)}function D0(){if(typeof window>"u")return;const t={style:"color:#3ba776"},e={style:"color:#0b1bc9"},n={style:"color:#b62e24"},r={style:"color:#9d288c"},s={header(h){return Te(h)?h.__isVue?["div",t,"VueInstance"]:Pe(h)?["div",{},["span",t,u(h)],"<",a(h.value),">"]:Cn(h)?["div",{},["span",t,Su(h)?"ShallowReactive":"Reactive"],"<",a(h),`>${Cr(h)?" (readonly)":""}`]:Cr(h)?["div",{},["span",t,Su(h)?"ShallowReadonly":"Readonly"],"<",a(h),">"]:null:null},hasBody(h){return h&&h.__isVue},body(h){if(h&&h.__isVue)return["div",{},...i(h.$)]}};function i(h){const d=[];h.type.props&&h.props&&d.push(o("props",te(h.props))),h.setupState!==be&&d.push(o("setup",h.setupState)),h.data!==be&&d.push(o("data",te(h.data)));const p=l(h,"computed");p&&d.push(o("computed",p));const m=l(h,"inject");return m&&d.push(o("injected",m)),d.push(["div",{},["span",{style:r.style+";opacity:0.66"},"$ (internal): "],["object",{object:h}]]),d}function o(h,d){return d=Fe({},d),Object.keys(d).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},h],["div",{style:"padding-left:1.25em"},...Object.keys(d).map(p=>["div",{},["span",r,p+": "],a(d[p],!1)])]]:["span",{}]}function a(h,d=!0){return typeof h=="number"?["span",e,h]:typeof h=="string"?["span",n,JSON.stringify(h)]:typeof h=="boolean"?["span",r,h]:Te(h)?["object",{object:d?te(h):h}]:["span",n,String(h)]}function l(h,d){const p=h.type;if(J(p))return;const m={};for(const E in h.ctx)c(p,E,d)&&(m[E]=h.ctx[E]);return m}function c(h,d,p){const m=h[p];if(Y(m)&&m.includes(d)||Te(m)&&d in m||h.extends&&c(h.extends,d,p)||h.mixins&&h.mixins.some(E=>c(E,d,p)))return!0}function u(h){return Su(h)?"ShallowRef":h.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(s):window.devtoolsFormatters=[s]}const Tg="3.3.4",x0="http://www.w3.org/2000/svg",zr=typeof document<"u"?document:null,Ig=zr&&zr.createElement("template"),M0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?zr.createElementNS(x0,t):zr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>zr.createTextNode(t),createComment:t=>zr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>zr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ig.innerHTML=r?`<svg>${t}</svg>`:t;const a=Ig.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function L0(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function V0(t,e,n){const r=t.style,s=$e(n);if(n&&!s){if(e&&!$e(e))for(const i in e)n[i]==null&&Sh(r,i,"");for(const i in n)Sh(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const F0=/[^\\];\s*$/,Ag=/\s*!important$/;function Sh(t,e,n){if(Y(n))n.forEach(r=>Sh(t,e,r));else if(n==null&&(n=""),F0.test(n)&&k(`Unexpected semicolon at the end of '${e}' style value: '${n}'`),e.startsWith("--"))t.setProperty(e,n);else{const r=U0(t,e);Ag.test(n)?t.setProperty(Rr(r),n.replace(Ag,""),"important"):t[r]=n}}const Rg=["Webkit","Moz","ms"],Pu={};function U0(t,e){const n=Pu[e];if(n)return n;let r=ii(e);if(r!=="filter"&&r in t)return Pu[e]=r;r=yc(r);for(let s=0;s<Rg.length;s++){const i=Rg[s]+r;if(i in t)return Pu[e]=i}return e}const bg="http://www.w3.org/1999/xlink";function $0(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(bg,e.slice(6,e.length)):t.setAttributeNS(bg,e,n);else{const i=uR(e);n==null||i&&!yy(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function B0(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=yy(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch(c){l||k(`Failed setting prop "${e}" on <${a.toLowerCase()}>: value ${n} is invalid.`,c)}l&&t.removeAttribute(e)}function js(t,e,n,r){t.addEventListener(e,n,r)}function j0(t,e,n,r){t.removeEventListener(e,n,r)}function W0(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=q0(e);if(r){const c=i[e]=z0(r,s);js(t,a,c,l)}else o&&(j0(t,a,o,l),i[e]=void 0)}}const Cg=/(?:Once|Passive|Capture)$/;function q0(t){let e;if(Cg.test(t)){e={};let r;for(;r=t.match(Cg);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Rr(t.slice(2)),e]}let ku=0;const H0=Promise.resolve(),K0=()=>ku||(H0.then(()=>ku=0),ku=Date.now());function z0(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ln(G0(r,n.value),e,5,[r])};return n.value=t,n.attached=K0(),n}function G0(t,e){if(Y(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Sg=/^on[a-z]/,Q0=(t,e,n,r,s=!1,i,o,a,l)=>{e==="class"?L0(t,r,s):e==="style"?V0(t,n,r):ra(e)?El(e)||W0(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Y0(t,e,r,s))?B0(t,e,r,i,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),$0(t,e,r,s))};function Y0(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Sg.test(e)&&J(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Sg.test(e)&&$e(n)?!1:e in t}const Pg=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Y(e)?n=>$s(e,n):e};function X0(t){t.target.composing=!0}function kg(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const O2={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Pg(s);const i=r||s.props&&s.props.type==="number";js(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=dh(a)),t._assign(a)}),n&&js(t,"change",()=>{t.value=t.value.trim()}),e||(js(t,"compositionstart",X0),js(t,"compositionend",kg),js(t,"change",kg))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Pg(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&dh(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},J0=["ctrl","shift","alt","meta"],Z0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>J0.some(n=>t[`${n}Key`]&&!e.includes(n))},D2=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=Z0[e[s]];if(i&&i(n,e))return}return t(n,...r)},eC=Fe({patchProp:Q0},M0);let Ng;function tC(){return Ng||(Ng=l0(eC))}const nC=(...t)=>{const e=tC().createApp(...t);rC(e),sC(e);const{mount:n}=e;return e.mount=r=>{const s=iC(r);if(!s)return;const i=e._component;!J(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function rC(t){Object.defineProperty(t.config,"isNativeTag",{value:e=>aR(e)||lR(e),writable:!1})}function sC(t){{const e=t.config.isCustomElement;Object.defineProperty(t.config,"isCustomElement",{get(){return e},set(){k("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const n=t.config.compilerOptions,r='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';Object.defineProperty(t.config,"compilerOptions",{get(){return k(r),n},set(){k(r)}})}}function iC(t){if($e(t)){const e=document.querySelector(t);return e||k(`Failed to mount app: mount target selector "${t}" returned null.`),e}return window.ShadowRoot&&t instanceof window.ShadowRoot&&t.mode==="closed"&&k('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),t}function oC(){D0()}oC();/**
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
 */const Rv={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const x=function(t,e){if(!t)throw wi(e)},wi=function(t){return new Error("Firebase Database ("+Rv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const bv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},aC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Nc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),r.push(n[u],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(bv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):aC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new lC;const d=i<<2|a>>4;if(r.push(d),c!==64){const p=a<<4&240|c>>2;if(r.push(p),h!==64){const m=c<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class lC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Cv=function(t){const e=bv(t);return Nc.encodeByteArray(e,!0)},Ol=function(t){return Cv(t).replace(/\./g,"")},Dl=function(t){try{return Nc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function cC(t){return Sv(void 0,t)}function Sv(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!uC(n)||(t[n]=Sv(t[n],e[n]));return t}function uC(t){return t!=="__proto__"}/**
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
 */function hC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const dC=()=>hC().__FIREBASE_DEFAULTS__,fC=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},pC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Dl(t[1]);return e&&JSON.parse(e)},Oc=()=>{try{return dC()||fC()||pC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Pv=t=>{var e,n;return(n=(e=Oc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},kv=t=>{const e=Pv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Nv=()=>{var t;return(t=Oc())===null||t===void 0?void 0:t.config},Ov=t=>{var e;return(e=Oc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class No{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Dv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ol(JSON.stringify(n)),Ol(JSON.stringify(o)),a].join(".")}/**
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
 */function It(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function af(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(It())}function gC(){var t;const e=(t=Oc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function mC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function xv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _C(){const t=It();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Mv(){return Rv.NODE_ADMIN===!0}function Lv(){try{return typeof indexedDB=="object"}catch{return!1}}function yC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const vC="FirebaseError";class Ln extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vC,Object.setPrototypeOf(this,Ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ti.prototype.create)}}class Ti{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?EC(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ln(s,a,r)}}function EC(t,e){return t.replace(wC,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const wC=/\{\$([^}]+)}/g;/**
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
 */function Oo(t){return JSON.parse(t)}function lt(t){return JSON.stringify(t)}/**
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
 */const Vv=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=Oo(Dl(i[0])||""),n=Oo(Dl(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},TC=function(t){const e=Vv(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},IC=function(t){const e=Vv(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function nr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function li(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ph(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xl(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function Ml(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Og(i)&&Og(o)){if(!Ml(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Og(t){return t!==null&&typeof t=="object"}/**
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
 */function Ii(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ji(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Zi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class AC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^i&(o^a),u=1518500249):(c=i^o^a,u=1859775393):h<60?(c=i&o|a&(i|o),u=2400959708):(c=i^o^a,u=3395469782);const d=(s<<5|s>>>27)+c+l+u+r[h]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function RC(t,e){const n=new bC(t,e);return n.subscribe.bind(n)}class bC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");CC(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Nu),s.error===void 0&&(s.error=Nu),s.complete===void 0&&(s.complete=Nu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function CC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Nu(){}function SC(t,e){return`${t} failed: ${e} argument `}/**
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
 */const PC=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,x(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Dc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ge(t){return t&&t._delegate?t._delegate:t}class un{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const qr="[DEFAULT]";/**
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
 */class kC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new No;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(OC(e))try{this.getOrInitializeService({instanceIdentifier:qr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=qr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qr){return this.instances.has(e)}getOptions(e=qr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:NC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qr){return this.component?this.component.multipleInstances?e:qr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function NC(t){return t===qr?void 0:t}function OC(t){return t.instantiationMode==="EAGER"}/**
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
 */class DC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new kC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const xC={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},MC=ue.INFO,LC={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},VC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=LC[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class aa{constructor(e){this.name=e,this._logLevel=MC,this._logHandler=VC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const FC=(t,e)=>e.some(n=>t instanceof n);let Dg,xg;function UC(){return Dg||(Dg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $C(){return xg||(xg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fv=new WeakMap,kh=new WeakMap,Uv=new WeakMap,Ou=new WeakMap,lf=new WeakMap;function BC(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(wr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Fv.set(n,t)}).catch(()=>{}),lf.set(e,t),e}function jC(t){if(kh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});kh.set(t,e)}let Nh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return kh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Uv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function WC(t){Nh=t(Nh)}function qC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Du(this),e,...n);return Uv.set(r,e.sort?e.sort():[e]),wr(r)}:$C().includes(t)?function(...e){return t.apply(Du(this),e),wr(Fv.get(this))}:function(...e){return wr(t.apply(Du(this),e))}}function HC(t){return typeof t=="function"?qC(t):(t instanceof IDBTransaction&&jC(t),FC(t,UC())?new Proxy(t,Nh):t)}function wr(t){if(t instanceof IDBRequest)return BC(t);if(Ou.has(t))return Ou.get(t);const e=HC(t);return e!==t&&(Ou.set(t,e),lf.set(e,t)),e}const Du=t=>lf.get(t);function KC(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=wr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(wr(o.result),l.oldVersion,l.newVersion,wr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const zC=["get","getKey","getAll","getAllKeys","count"],GC=["put","add","delete","clear"],xu=new Map;function Mg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xu.get(e))return xu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=GC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||zC.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return xu.set(e,i),i}WC(t=>({...t,get:(e,n,r)=>Mg(e,n)||t.get(e,n,r),has:(e,n)=>!!Mg(e,n)||t.has(e,n)}));/**
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
 */class QC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(YC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function YC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Oh="@firebase/app",Lg="0.9.20";/**
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
 */const fs=new aa("@firebase/app"),XC="@firebase/app-compat",JC="@firebase/analytics-compat",ZC="@firebase/analytics",eS="@firebase/app-check-compat",tS="@firebase/app-check",nS="@firebase/auth",rS="@firebase/auth-compat",sS="@firebase/database",iS="@firebase/database-compat",oS="@firebase/functions",aS="@firebase/functions-compat",lS="@firebase/installations",cS="@firebase/installations-compat",uS="@firebase/messaging",hS="@firebase/messaging-compat",dS="@firebase/performance",fS="@firebase/performance-compat",pS="@firebase/remote-config",gS="@firebase/remote-config-compat",mS="@firebase/storage",_S="@firebase/storage-compat",yS="@firebase/firestore",vS="@firebase/firestore-compat",ES="firebase",wS="10.5.0";/**
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
 */const Dh="[DEFAULT]",TS={[Oh]:"fire-core",[XC]:"fire-core-compat",[ZC]:"fire-analytics",[JC]:"fire-analytics-compat",[tS]:"fire-app-check",[eS]:"fire-app-check-compat",[nS]:"fire-auth",[rS]:"fire-auth-compat",[sS]:"fire-rtdb",[iS]:"fire-rtdb-compat",[oS]:"fire-fn",[aS]:"fire-fn-compat",[lS]:"fire-iid",[cS]:"fire-iid-compat",[uS]:"fire-fcm",[hS]:"fire-fcm-compat",[dS]:"fire-perf",[fS]:"fire-perf-compat",[pS]:"fire-rc",[gS]:"fire-rc-compat",[mS]:"fire-gcs",[_S]:"fire-gcs-compat",[yS]:"fire-fst",[vS]:"fire-fst-compat","fire-js":"fire-js",[ES]:"fire-js-all"};/**
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
 */const Ll=new Map,xh=new Map;function IS(t,e){try{t.container.addComponent(e)}catch(n){fs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xn(t){const e=t.name;if(xh.has(e))return fs.debug(`There were multiple attempts to register component ${e}.`),!1;xh.set(e,t);for(const n of Ll.values())IS(n,t);return!0}function xc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const AS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Tr=new Ti("app","Firebase",AS);/**
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
 */class RS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tr.create("app-deleted",{appName:this._name})}}/**
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
 */const Mr=wS;function $v(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Dh,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Tr.create("bad-app-name",{appName:String(s)});if(n||(n=Nv()),!n)throw Tr.create("no-options");const i=Ll.get(s);if(i){if(Ml(n,i.options)&&Ml(r,i.config))return i;throw Tr.create("duplicate-app",{appName:s})}const o=new DC(s);for(const l of xh.values())o.addComponent(l);const a=new RS(n,r,o);return Ll.set(s,a),a}function Mc(t=Dh){const e=Ll.get(t);if(!e&&t===Dh&&Nv())return $v();if(!e)throw Tr.create("no-app",{appName:t});return e}function Ft(t,e,n){var r;let s=(r=TS[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fs.warn(a.join(" "));return}xn(new un(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const bS="firebase-heartbeat-database",CS=1,Do="firebase-heartbeat-store";let Mu=null;function Bv(){return Mu||(Mu=KC(bS,CS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Do)}}}).catch(t=>{throw Tr.create("idb-open",{originalErrorMessage:t.message})})),Mu}async function SS(t){try{return await(await Bv()).transaction(Do).objectStore(Do).get(jv(t))}catch(e){if(e instanceof Ln)fs.warn(e.message);else{const n=Tr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fs.warn(n.message)}}}async function Vg(t,e){try{const r=(await Bv()).transaction(Do,"readwrite");await r.objectStore(Do).put(e,jv(t)),await r.done}catch(n){if(n instanceof Ln)fs.warn(n.message);else{const r=Tr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fs.warn(r.message)}}}function jv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const PS=1024,kS=30*24*60*60*1e3;class NS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new DS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Fg();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=kS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Fg(),{heartbeatsToSend:n,unsentEntries:r}=OS(this._heartbeatsCache.heartbeats),s=Ol(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Fg(){return new Date().toISOString().substring(0,10)}function OS(t,e=PS){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ug(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ug(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class DS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Lv()?yC().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await SS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Vg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Vg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ug(t){return Ol(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function xS(t){xn(new un("platform-logger",e=>new QC(e),"PRIVATE")),xn(new un("heartbeat",e=>new NS(e),"PRIVATE")),Ft(Oh,Lg,t),Ft(Oh,Lg,"esm2017"),Ft("fire-js","")}xS("");function cf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function $g(t){return t!==void 0&&t.enterprise!==void 0}class MS{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function Wv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const LS=Wv,qv=new Ti("auth","Firebase",Wv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl=new aa("@firebase/auth");function VS(t,...e){Vl.logLevel<=ue.WARN&&Vl.warn(`Auth (${Mr}): ${t}`,...e)}function ll(t,...e){Vl.logLevel<=ue.ERROR&&Vl.error(`Auth (${Mr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t,...e){throw uf(t,...e)}function Sn(t,...e){return uf(t,...e)}function Hv(t,e,n){const r=Object.assign(Object.assign({},LS()),{[e]:n});return new Ti("auth","Firebase",r).create(e,{appName:t.name})}function FS(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Jt(t,"argument-error"),Hv(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function uf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return qv.create(t,...e)}function Z(t,e,...n){if(!t)throw uf(e,...n)}function qn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ll(e),new Error(e)}function Xn(t,e){t||qn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function US(){return Bg()==="http:"||Bg()==="https:"}function Bg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $S(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(US()||mC()||"connection"in navigator)?navigator.onLine:!0}function BS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e,n){this.shortDelay=e,this.longDelay=n,Xn(n>e,"Short delay should be less than long delay!"),this.isMobile=af()||xv()}get(){return $S()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(t,e){Xn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;qn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;qn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;qn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS=new la(3e4,6e4);function Cs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ss(t,e,n,r,s={}){return zv(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Ii(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Kv.fetch()(Gv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function zv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},jS),e);try{const s=new qS(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Fa(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Fa(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Fa(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Hv(t,u,c);Jt(t,u)}}catch(s){if(s instanceof Ln)throw s;Jt(t,"network-request-failed",{message:String(s)})}}async function ca(t,e,n,r,s={}){const i=await Ss(t,e,n,r,s);return"mfaPendingCredential"in i&&Jt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Gv(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?hf(t.config,s):`${t.config.apiScheme}://${s}`}class qS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Sn(this.auth,"network-request-failed")),WS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Fa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Sn(t,e,r);return s.customData._tokenResponse=n,s}async function HS(t,e){return Ss(t,"GET","/v2/recaptchaConfig",Cs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KS(t,e){return Ss(t,"POST","/v1/accounts:delete",e)}async function zS(t,e){return Ss(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function GS(t,e=!1){const n=Ge(t),r=await n.getIdToken(e),s=df(r);Z(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:uo(Lu(s.auth_time)),issuedAtTime:uo(Lu(s.iat)),expirationTime:uo(Lu(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Lu(t){return Number(t)*1e3}function df(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ll("JWT malformed, contained fewer than 3 sections"),null;try{const s=Dl(n);return s?JSON.parse(s):(ll("Failed to decode base64 JWT payload"),null)}catch(s){return ll("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function QS(t){const e=df(t);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ln&&YS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function YS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=uo(this.lastLoginAt),this.creationTime=uo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Fl(t){var e;const n=t.auth,r=await t.getIdToken(),s=await xo(t,zS(n,{idToken:r}));Z(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?eP(i.providerUserInfo):[],a=ZS(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Qv(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function JS(t){const e=Ge(t);await Fl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ZS(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function eP(t){return t.map(e=>{var{providerId:n}=e,r=cf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tP(t,e){const n=await zv(t,{},async()=>{const r=Ii({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Gv(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Kv.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):QS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await tP(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Mo;return r&&(Z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Z(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Z(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mo,this.toJSON())}_performRefresh(){return qn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(t,e){Z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class as{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=cf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new XS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Qv(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await xo(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return GS(this,e)}reload(){return JS(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new as(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Fl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await xo(this,KS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,A=(c=n.createdAt)!==null&&c!==void 0?c:void 0,O=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:S,emailVerified:K,isAnonymous:U,providerData:ye,stsTokenManager:W}=n;Z(S&&W,e,"internal-error");const Ze=Mo.fromJSON(this.name,W);Z(typeof S=="string",e,"internal-error"),ar(h,e.name),ar(d,e.name),Z(typeof K=="boolean",e,"internal-error"),Z(typeof U=="boolean",e,"internal-error"),ar(p,e.name),ar(m,e.name),ar(E,e.name),ar(y,e.name),ar(A,e.name),ar(O,e.name);const Ie=new as({uid:S,auth:e,email:d,emailVerified:K,displayName:h,isAnonymous:U,photoURL:m,phoneNumber:p,tenantId:E,stsTokenManager:Ze,createdAt:A,lastLoginAt:O});return ye&&Array.isArray(ye)&&(Ie.providerData=ye.map($=>Object.assign({},$))),y&&(Ie._redirectEventId=y),Ie}static async _fromIdTokenResponse(e,n,r=!1){const s=new Mo;s.updateFromServerResponse(n);const i=new as({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Fl(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=new Map;function Hn(t){Xn(t instanceof Function,"Expected a class definition");let e=jg.get(t);return e?(Xn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jg.set(t,e),e)}/**
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
 */class Yv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Yv.type="NONE";const Wg=Yv;/**
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
 */function cl(t,e,n){return`firebase:${t}:${e}:${n}`}class Js{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=cl(this.userKey,s.apiKey,i),this.fullPersistenceKey=cl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?as._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Js(Hn(Wg),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Hn(Wg);const o=cl(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=as._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Js(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Js(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Zv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Xv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tE(e))return"Blackberry";if(nE(e))return"Webos";if(ff(e))return"Safari";if((e.includes("chrome/")||Jv(e))&&!e.includes("edge/"))return"Chrome";if(eE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Xv(t=It()){return/firefox\//i.test(t)}function ff(t=It()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jv(t=It()){return/crios\//i.test(t)}function Zv(t=It()){return/iemobile/i.test(t)}function eE(t=It()){return/android/i.test(t)}function tE(t=It()){return/blackberry/i.test(t)}function nE(t=It()){return/webos/i.test(t)}function Lc(t=It()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function nP(t=It()){var e;return Lc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function rP(){return _C()&&document.documentMode===10}function rE(t=It()){return Lc(t)||eE(t)||nE(t)||tE(t)||/windows phone/i.test(t)||Zv(t)}function sP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE(t,e=[]){let n;switch(t){case"Browser":n=qg(It());break;case"Worker":n=`${qg(It())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Mr}/${r}`}/**
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
 */class iP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function oP(t,e={}){return Ss(t,"GET","/v2/passwordPolicy",Cs(t,e))}/**
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
 */const aP=6;class lP{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:aP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hg(this),this.idTokenSubscription=new Hg(this),this.beforeStateQueue=new iP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Hn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Js.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=BS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ge(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Hn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await oP(this),n=new lP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ti("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Hn(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await Js.create(this,[Hn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&VS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Lr(t){return Ge(t)}class Hg{constructor(e){this.auth=e,this.observer=null,this.addObserver=RC(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function iE(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Sn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",uP().appendChild(r)})}function hP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const dP="https://www.google.com/recaptcha/enterprise.js?render=",fP="recaptcha-enterprise",pP="NO_RECAPTCHA";class gP{constructor(e){this.type=fP,this.auth=Lr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{HS(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new MS(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;$g(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(pP)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&$g(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}iE(dP+a).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Ul(t,e,n,r=!1){const s=new gP(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mP(t,e){const n=xc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ml(i,e??{}))return s;Jt(s,"already-initialized")}return n.initialize({options:e})}function _P(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Hn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function yP(t,e,n){const r=Lr(t);Z(r._canInitEmulator,r,"emulator-config-failed"),Z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=oE(e),{host:o,port:a}=vP(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||EP()}function oE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function vP(t){const e=oE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Kg(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Kg(o)}}}function Kg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function EP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return qn("not implemented")}_getIdTokenResponse(e){return qn("not implemented")}_linkToIdToken(e,n){return qn("not implemented")}_getReauthenticationResolver(e){return qn("not implemented")}}async function wP(t,e){return Ss(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vu(t,e){return ca(t,"POST","/v1/accounts:signInWithPassword",Cs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TP(t,e){return ca(t,"POST","/v1/accounts:signInWithEmailLink",Cs(t,e))}async function IP(t,e){return ca(t,"POST","/v1/accounts:signInWithEmailLink",Cs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo extends pf{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Lo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Lo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await Ul(e,r,"signInWithPassword");return Vu(e,s)}else return Vu(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await Ul(e,r,"signInWithPassword");return Vu(e,i)}else return Promise.reject(s)});case"emailLink":return TP(e,{email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return wP(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return IP(e,{idToken:n,email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zs(t,e){return ca(t,"POST","/v1/accounts:signInWithIdp",Cs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AP="http://localhost";class ps extends pf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ps(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=cf(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new ps(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Zs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Zs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Zs(e,n)}buildRequest(){const e={requestUri:AP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ii(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function bP(t){const e=Ji(Zi(t)).link,n=e?Ji(Zi(e)).deep_link_id:null,r=Ji(Zi(t)).deep_link_id;return(r?Ji(Zi(r)).link:null)||r||n||e||t}class gf{constructor(e){var n,r,s,i,o,a;const l=Ji(Zi(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,h=RP((s=l.mode)!==null&&s!==void 0?s:null);Z(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=bP(e);try{return new gf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(){this.providerId=Ai.PROVIDER_ID}static credential(e,n){return Lo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=gf.parseLink(n);return Z(r,"argument-error"),Lo._fromEmailAndCode(e,r.code,r.tenantId)}}Ai.PROVIDER_ID="password";Ai.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ai.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ua extends mf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends ua{constructor(){super("facebook.com")}static credential(e){return ps._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fr.credential(e.oauthAccessToken)}catch{return null}}}fr.FACEBOOK_SIGN_IN_METHOD="facebook.com";fr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends ua{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ps._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return jn.credential(n,r)}catch{return null}}}jn.GOOGLE_SIGN_IN_METHOD="google.com";jn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends ua{constructor(){super("github.com")}static credential(e){return ps._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pr.credential(e.oauthAccessToken)}catch{return null}}}pr.GITHUB_SIGN_IN_METHOD="github.com";pr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends ua{constructor(){super("twitter.com")}static credential(e,n){return ps._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return gr.credential(n,r)}catch{return null}}}gr.TWITTER_SIGN_IN_METHOD="twitter.com";gr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fu(t,e){return ca(t,"POST","/v1/accounts:signUp",Cs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await as._fromIdTokenResponse(e,r,s),o=zg(r);return new gs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=zg(r);return new gs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function zg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l extends Ln{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,$l.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new $l(e,n,r,s)}}function aE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?$l._fromErrorAndOperation(t,i,e,r):i})}async function CP(t,e,n=!1){const r=await xo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return gs._forOperation(t,"link",r)}/**
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
 */async function SP(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await xo(t,aE(r,s,e,t),n);Z(i.idToken,r,"internal-error");const o=df(i.idToken);Z(o,r,"internal-error");const{sub:a}=o;return Z(t.uid===a,r,"user-mismatch"),gs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Jt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lE(t,e,n=!1){const r="signIn",s=await aE(t,r,e),i=await gs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function PP(t,e){return lE(Lr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cE(t){const e=Lr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function x2(t,e,n){var r;const s=Lr(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const c=await Ul(s,i,"signUpPassword");o=Fu(s,c)}else o=Fu(s,i).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Ul(s,i,"signUpPassword");return Fu(s,u)}throw c});const a=await o.catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&cE(t),c}),l=await gs._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(l.user),l}function M2(t,e,n){return PP(Ge(t),Ai.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&cE(t),r})}function uE(t,e,n,r){return Ge(t).onIdTokenChanged(e,n,r)}function kP(t,e,n){return Ge(t).beforeAuthStateChanged(e,n)}function L2(t){return Ge(t).signOut()}const Bl="__sak";/**
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
 */class hE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Bl,"1"),this.storage.removeItem(Bl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NP(){const t=It();return ff(t)||Lc(t)}const OP=1e3,DP=10;class dE extends hE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=NP()&&sP(),this.fallbackToPolling=rE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);rP()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,DP):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},OP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}dE.type="LOCAL";const xP=dE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE extends hE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}fE.type="SESSION";const pE=fE;/**
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
 */function MP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Vc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Vc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await MP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _f(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class LP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=_f("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(){return window}function VP(t){Pn().location.href=t}/**
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
 */function gE(){return typeof Pn().WorkerGlobalScope<"u"&&typeof Pn().importScripts=="function"}async function FP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function UP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function $P(){return gE()?self:null}/**
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
 */const mE="firebaseLocalStorageDb",BP=1,jl="firebaseLocalStorage",_E="fbase_key";class ha{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Fc(t,e){return t.transaction([jl],e?"readwrite":"readonly").objectStore(jl)}function jP(){const t=indexedDB.deleteDatabase(mE);return new ha(t).toPromise()}function Lh(){const t=indexedDB.open(mE,BP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(jl,{keyPath:_E})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(jl)?e(r):(r.close(),await jP(),e(await Lh()))})})}async function Gg(t,e,n){const r=Fc(t,!0).put({[_E]:e,value:n});return new ha(r).toPromise()}async function WP(t,e){const n=Fc(t,!1).get(e),r=await new ha(n).toPromise();return r===void 0?null:r.value}function Qg(t,e){const n=Fc(t,!0).delete(e);return new ha(n).toPromise()}const qP=800,HP=3;class yE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Lh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>HP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vc._getInstance($P()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await FP(),!this.activeServiceWorker)return;this.sender=new LP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||UP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Lh();return await Gg(e,Bl,"1"),await Qg(e,Bl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>WP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Fc(s,!1).getAll();return new ha(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}yE.type="LOCAL";const KP=yE;new la(3e4,6e4);/**
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
 */function vE(t,e){return e?Hn(e):(Z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class yf extends pf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Zs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Zs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function zP(t){return lE(t.auth,new yf(t),t.bypassAuthState)}function GP(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),SP(n,new yf(t),t.bypassAuthState)}async function QP(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),CP(n,new yf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zP;case"linkViaPopup":case"linkViaRedirect":return QP;case"reauthViaPopup":case"reauthViaRedirect":return GP;default:Jt(this.auth,"internal-error")}}resolve(e){Xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YP=new la(2e3,1e4);async function V2(t,e,n){const r=Lr(t);FS(t,e,mf);const s=vE(r,n);return new Qr(r,"signInViaPopup",e,s).executeNotNull()}class Qr extends EE{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Qr.currentPopupAction&&Qr.currentPopupAction.cancel(),Qr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){Xn(this.filter.length===1,"Popup operations only handle one event");const e=_f();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,YP.get())};e()}}Qr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XP="pendingRedirect",ul=new Map;class JP extends EE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ul.get(this.auth._key());if(!e){try{const r=await ZP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ul.set(this.auth._key(),e)}return this.bypassAuthState||ul.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ZP(t,e){const n=nk(e),r=tk(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function ek(t,e){ul.set(t._key(),e)}function tk(t){return Hn(t._redirectPersistence)}function nk(t){return cl(XP,t.config.apiKey,t.name)}async function rk(t,e,n=!1){const r=Lr(t),s=vE(r,e),o=await new JP(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sk=10*60*1e3;class ik{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ok(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!wE(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Sn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yg(e))}saveEventToCache(e){this.cachedEventUids.add(Yg(e)),this.lastProcessedEventTime=Date.now()}}function Yg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function wE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ok(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ak(t,e={}){return Ss(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ck=/^https?/;async function uk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ak(t);for(const n of e)try{if(hk(n))return}catch{}Jt(t,"unauthorized-domain")}function hk(t){const e=Mh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ck.test(n))return!1;if(lk.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const dk=new la(3e4,6e4);function Xg(){const t=Pn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function fk(t){return new Promise((e,n)=>{var r,s,i;function o(){Xg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xg(),n(Sn(t,"network-request-failed"))},timeout:dk.get()})}if(!((s=(r=Pn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Pn().gapi)===null||i===void 0)&&i.load)o();else{const a=hP("iframefcb");return Pn()[a]=()=>{gapi.load?o():n(Sn(t,"network-request-failed"))},iE(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw hl=null,e})}let hl=null;function pk(t){return hl=hl||fk(t),hl}/**
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
 */const gk=new la(5e3,15e3),mk="__/auth/iframe",_k="emulator/auth/iframe",yk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ek(t){const e=t.config;Z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?hf(e,_k):`https://${t.config.authDomain}/${mk}`,r={apiKey:e.apiKey,appName:t.name,v:Mr},s=vk.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ii(r).slice(1)}`}async function wk(t){const e=await pk(t),n=Pn().gapi;return Z(n,t,"internal-error"),e.open({where:document.body,url:Ek(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yk,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Sn(t,"network-request-failed"),a=Pn().setTimeout(()=>{i(o)},gk.get());function l(){Pn().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const Tk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ik=500,Ak=600,Rk="_blank",bk="http://localhost";class Jg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ck(t,e,n,r=Ik,s=Ak){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Tk),{width:r.toString(),height:s.toString(),top:i,left:o}),c=It().toLowerCase();n&&(a=Jv(c)?Rk:n),Xv(c)&&(e=e||bk,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[p,m])=>`${d}${p}=${m},`,"");if(nP(c)&&a!=="_self")return Sk(e||"",a),new Jg(null);const h=window.open(e||"",a,u);Z(h,t,"popup-blocked");try{h.focus()}catch{}return new Jg(h)}function Sk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Pk="__/auth/handler",kk="emulator/auth/handler",Nk=encodeURIComponent("fac");async function Zg(t,e,n,r,s,i){Z(t.config.authDomain,t,"auth-domain-config-required"),Z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Mr,eventId:s};if(e instanceof mf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ph(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof ua){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${Nk}=${encodeURIComponent(l)}`:"";return`${Ok(t)}?${Ii(a).slice(1)}${c}`}function Ok({config:t}){return t.emulator?hf(t,kk):`https://${t.authDomain}/${Pk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu="webStorageSupport";class Dk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pE,this._completeRedirectFn=rk,this._overrideRedirectResult=ek}async _openPopup(e,n,r,s){var i;Xn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Zg(e,n,r,Mh(),s);return Ck(e,o,_f())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Zg(e,n,r,Mh(),s);return VP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Xn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await wk(e),r=new ik(e);return n.register("authEvent",s=>(Z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Uu,{type:Uu},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Uu];o!==void 0&&n(!!o),Jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=uk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return rE()||ff()||Lc()}}const xk=Dk;var em="@firebase/auth",tm="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Vk(t){xn(new un("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sE(t)},c=new cP(r,s,i,l);return _P(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),xn(new un("auth-internal",e=>{const n=Lr(e.getProvider("auth").getImmediate());return(r=>new Mk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ft(em,tm,Lk(t)),Ft(em,tm,"esm2017")}/**
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
 */const Fk=5*60,Uk=Ov("authIdTokenMaxAge")||Fk;let nm=null;const $k=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Uk)return;const s=n==null?void 0:n.token;nm!==s&&(nm=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function vf(t=Mc()){const e=xc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=mP(t,{popupRedirectResolver:xk,persistence:[KP,xP,pE]}),r=Ov("authTokenSyncURL");if(r){const i=$k(r);kP(n,i,()=>i(n.currentUser)),uE(n,o=>i(o))}const s=Pv("auth");return s&&yP(n,`http://${s}`),n}Vk("Browser");var Bk=!1;function Ua(t,e,n){return Array.isArray(t)?(t.length=Math.max(t.length,e),t.splice(e,1,n),n):(t[e]=n,n)}function $u(t,e){if(Array.isArray(t)){t.splice(e,1);return}delete t[e]}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jk=new Map,Wk={activated:!1,tokenObservers:[]};function hn(t){return jk.get(t)||Object.assign({},Wk)}const rm={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qk{constructor(e,n,r,s,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=s,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=s,s>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new No,await Hk(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new No,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function Hk(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kk={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Wl=new Ti("appCheck","AppCheck",Kk);function TE(t){if(!hn(t).activated)throw Wl.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk="firebase-app-check-database",Gk=1,Vh="firebase-app-check-store";let $a=null;function Qk(){return $a||($a=new Promise((t,e)=>{try{const n=indexedDB.open(zk,Gk);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var s;e(Wl.create("storage-open",{originalErrorMessage:(s=r.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=r=>{const s=r.target.result;switch(r.oldVersion){case 0:s.createObjectStore(Vh,{keyPath:"compositeKey"})}}}catch(n){e(Wl.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),$a)}function Yk(t,e){return Xk(Jk(t),e)}async function Xk(t,e){const r=(await Qk()).transaction(Vh,"readwrite"),i=r.objectStore(Vh).put({compositeKey:t,value:e});return new Promise((o,a)=>{i.onsuccess=l=>{o()},r.onerror=l=>{var c;a(Wl.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function Jk(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh=new aa("@firebase/app-check");function sm(t,e){return Lv()?Yk(t,e).catch(n=>{Fh.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk={error:"UNKNOWN_ERROR"};function eN(t){return Nc.encodeString(JSON.stringify(t),!1)}async function Uh(t,e=!1){const n=t.app;TE(n);const r=hn(n);let s=r.token,i;if(s&&!eo(s)&&(r.token=void 0,s=void 0),!s){const l=await r.cachedTokenPromise;l&&(eo(l)?s=l:await sm(n,void 0))}if(!e&&s&&eo(s))return{token:s.token};let o=!1;try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),o=!0),s=await hn(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?Fh.warn(l.message):Fh.error(l),i=l}let a;return s?i?eo(s)?a={token:s.token,internalError:i}:a=om(i):(a={token:s.token},r.token=s,await sm(n,s)):a=om(i),o&&sN(n,a),a}async function tN(t){const e=t.app;TE(e);const{provider:n}=hn(e);{const{token:r}=await n.getToken();return{token:r}}}function nN(t,e,n,r){const{app:s}=t,i=hn(s),o={next:n,error:r,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&eo(i.token)){const a=i.token;Promise.resolve().then(()=>{n({token:a.token}),im(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>im(t))}function IE(t,e){const n=hn(t),r=n.tokenObservers.filter(s=>s.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function im(t){const{app:e}=t,n=hn(e);let r=n.tokenRefresher;r||(r=rN(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function rN(t){const{app:e}=t;return new qk(async()=>{const n=hn(e);let r;if(n.token?r=await Uh(t,!0):r=await Uh(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=hn(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,s),Math.max(0,r-Date.now())}else return 0},rm.RETRIAL_MIN_WAIT,rm.RETRIAL_MAX_WAIT)}function sN(t,e){const n=hn(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function eo(t){return t.expireTimeMillis-Date.now()>0}function om(t){return{token:eN(Zk),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=hn(this.app);for(const n of e)IE(this.app,n.next);return Promise.resolve()}}function oN(t,e){return new iN(t,e)}function aN(t){return{getToken:e=>Uh(t,e),getLimitedUseToken:()=>tN(t),addTokenListener:e=>nN(t,"INTERNAL",e),removeTokenListener:e=>IE(t.app,e)}}const lN="@firebase/app-check",cN="0.8.0",uN="app-check",am="app-check-internal";function hN(){xn(new un(uN,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return oN(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(am).initialize()})),xn(new un(am,t=>{const e=t.getProvider("app-check").getImmediate();return aN(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Ft(lN,cN)}hN();var dN="firebase",fN="10.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ft(dN,fN,"app");const AE=Symbol("firebaseApp");function RE(t){return Sc()&&Yt(AE,null)||Mc(t)}const pN=typeof window<"u",Ba=new WeakMap;function gN(t,e){if(!Ba.has(t)){const n=Bd(!0);Ba.set(t,n);const{unmount:r}=e;e.unmount=()=>{r.call(e),n.stop(),Ba.delete(t)}}return Ba.get(t)}const mN=new WeakMap,ja=new WeakMap;function bE(t){const e=RE(t);if(!ja.has(e)){let n;const s=[new Promise(i=>{n=i}),i=>{ja.set(e,i),n(i.value)}];ja.set(e,s)}return ja.get(e)}function CE(t){const e=bE(t);return Array.isArray(e)?e[0]:Promise.resolve(e.value)}function _N(t,e){const n=vf(e);uE(n,r=>{const s=bE();t.value=r,Array.isArray(s)&&s[1](t)})}const lm="@firebase/database",cm="1.0.1";/**
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
 */let SE="";function yN(t){SE=t}/**
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
 */class vN{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),lt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Oo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class EN{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return nr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const PE=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new vN(e)}}catch{}return new EN},Yr=PE("localStorage"),$h=PE("sessionStorage");/**
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
 */const ei=new aa("@firebase/database"),wN=function(){let t=1;return function(){return t++}}(),kE=function(t){const e=PC(t),n=new AC;n.update(e);const r=n.digest();return Nc.encodeByteArray(r)},da=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=da.apply(null,r):typeof r=="object"?e+=lt(r):e+=r,e+=" "}return e};let ls=null,um=!0;const TN=function(t,e){x(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ei.logLevel=ue.VERBOSE,ls=ei.log.bind(ei),e&&$h.set("logging_enabled",!0)):typeof t=="function"?ls=t:(ls=null,$h.remove("logging_enabled"))},gt=function(...t){if(um===!0&&(um=!1,ls===null&&$h.get("logging_enabled")===!0&&TN(!0)),ls){const e=da.apply(null,t);ls(e)}},fa=function(t){return function(...e){gt(t,...e)}},Bh=function(...t){const e="FIREBASE INTERNAL ERROR: "+da(...t);ei.error(e)},ms=function(...t){const e=`FIREBASE FATAL ERROR: ${da(...t)}`;throw ei.error(e),new Error(e)},Ut=function(...t){const e="FIREBASE WARNING: "+da(...t);ei.warn(e)},IN=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ut("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},NE=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},AN=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ci="[MIN_NAME]",_s="[MAX_NAME]",Ri=function(t,e){if(t===e)return 0;if(t===ci||e===_s)return-1;if(e===ci||t===_s)return 1;{const n=hm(t),r=hm(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},RN=function(t,e){return t===e?0:t<e?-1:1},Fi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+lt(e))},Ef=function(t){if(typeof t!="object"||t===null)return lt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=lt(e[r]),n+=":",n+=Ef(t[e[r]]);return n+="}",n},OE=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function Zt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const DE=function(t){x(!NE(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,l;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},bN=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},CN=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},SN=new RegExp("^-?(0*)\\d{1,10}$"),PN=-2147483648,kN=2147483647,hm=function(t){if(SN.test(t)){const e=Number(t);if(e>=PN&&e<=kN)return e}return null},pa=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ut("Exception was thrown by user callback.",n),e},Math.floor(0))}},NN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ho=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class ON{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ut(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class DN{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(gt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ut(e)}}class jh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}jh.OWNER="owner";/**
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
 */const wf="5",xE="v",ME="s",LE="r",VE="f",FE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,UE="ls",$E="p",Wh="ac",BE="websocket",jE="long_polling";/**
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
 */class xN{constructor(e,n,r,s,i=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Yr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Yr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function MN(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function WE(t,e,n){x(typeof e=="string","typeof type must == string"),x(typeof n=="object","typeof params must == object");let r;if(e===BE)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===jE)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);MN(t)&&(n.ns=t.namespace);const s=[];return Zt(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
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
 */class LN{constructor(){this.counters_={}}incrementCounter(e,n=1){nr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return cC(this.counters_)}}/**
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
 */const Bu={},ju={};function Tf(t){const e=t.toString();return Bu[e]||(Bu[e]=new LN),Bu[e]}function VN(t,e){const n=t.toString();return ju[n]||(ju[n]=e()),ju[n]}/**
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
 */class FN{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&pa(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const dm="start",UN="close",$N="pLPCommand",BN="pRTLPCB",qE="id",HE="pw",KE="ser",jN="cb",WN="seg",qN="ts",HN="d",KN="dframe",zE=1870,GE=30,zN=zE-GE,GN=25e3,QN=3e4;class Ks{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=fa(e),this.stats_=Tf(n),this.urlFn=l=>(this.appCheckToken&&(l[Wh]=this.appCheckToken),WE(n,jE,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new FN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(QN)),AN(()=>{if(this.isClosed_)return;this.scriptTagHolder=new If((...i)=>{const[o,a,l,c,u]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===dm)this.id=a,this.password=l;else if(o===UN)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[dm]="t",r[KE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[jN]=this.scriptTagHolder.uniqueCallbackIdentifier),r[xE]=wf,this.transportSessionId&&(r[ME]=this.transportSessionId),this.lastSessionId&&(r[UE]=this.lastSessionId),this.applicationId&&(r[$E]=this.applicationId),this.appCheckToken&&(r[Wh]=this.appCheckToken),typeof location<"u"&&location.hostname&&FE.test(location.hostname)&&(r[LE]=VE);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ks.forceAllow_=!0}static forceDisallow(){Ks.forceDisallow_=!0}static isAvailable(){return Ks.forceAllow_?!0:!Ks.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!bN()&&!CN()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=lt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Cv(n),s=OE(r,zN);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[KN]="t",r[qE]=e,r[HE]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=lt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class If{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=wN(),window[$N+this.uniqueCallbackIdentifier]=e,window[BN+this.uniqueCallbackIdentifier]=n,this.myIFrame=If.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){gt("frame writing exception"),a.stack&&gt(a.stack),gt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||gt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[qE]=this.myID,e[HE]=this.myPW,e[KE]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+GE+r.length<=zE;){const o=this.pendingSegs.shift();r=r+"&"+WN+s+"="+o.seg+"&"+qN+s+"="+o.ts+"&"+HN+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(GN)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{gt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const YN=16384,XN=45e3;let ql=null;typeof MozWebSocket<"u"?ql=MozWebSocket:typeof WebSocket<"u"&&(ql=WebSocket);class rn{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=fa(this.connId),this.stats_=Tf(n),this.connURL=rn.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[xE]=wf,typeof location<"u"&&location.hostname&&FE.test(location.hostname)&&(o[LE]=VE),n&&(o[ME]=n),r&&(o[UE]=r),s&&(o[Wh]=s),i&&(o[$E]=i),WE(e,BE,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Yr.set("previous_websocket_failure",!0);try{let r;Mv(),this.mySock=new ql(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){rn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&ql!==null&&!rn.forceDisallow_}static previouslyFailed(){return Yr.isInMemoryStorage||Yr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Yr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Oo(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(x(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=lt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=OE(n,YN);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(XN))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}rn.responsesRequiredToBeHealthy=2;rn.healthyTimeout=3e4;/**
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
 */class Vo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ks,rn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=rn&&rn.isAvailable();let r=n&&!rn.previouslyFailed();if(e.webSocketOnly&&(n||Ut("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[rn];else{const s=this.transports_=[];for(const i of Vo.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);Vo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Vo.globalTransportInitialized_=!1;/**
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
 */const JN=6e4,ZN=5e3,eO=10*1024,tO=100*1024,Wu="t",fm="d",nO="s",pm="r",rO="e",gm="o",mm="a",_m="n",ym="p",sO="h";class iO{constructor(e,n,r,s,i,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=fa("c:"+this.id+":"),this.transportManager_=new Vo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=ho(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>tO?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>eO?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Wu in e){const n=e[Wu];n===mm?this.upgradeIfSecondaryHealthy_():n===pm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===gm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Fi("t",e),r=Fi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ym,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:mm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:_m,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Fi("t",e),r=Fi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Fi(Wu,e);if(fm in e){const r=e[fm];if(n===sO){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===_m){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===nO?this.onConnectionShutdown_(r):n===pm?this.onReset_(r):n===rO?Bh("Server Error: "+r):n===gm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Bh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),wf!==r&&Ut("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ho(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(JN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ho(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(ZN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ym,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Yr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class QE{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class YE{constructor(e){this.allowedEvents_=e,this.listeners_={},x(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){x(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Hl extends YE{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!af()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Hl}getInitialEvent(e){return x(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const vm=32,Em=768;class Me{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ce(){return new Me("")}function me(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Pr(t){return t.pieces_.length-t.pieceNum_}function Ne(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Me(t.pieces_,e)}function XE(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function oO(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function JE(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function ZE(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Me(e,0)}function rt(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Me)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new Me(n,0)}function fe(t){return t.pieceNum_>=t.pieces_.length}function Qt(t,e){const n=me(t),r=me(e);if(n===null)return e;if(n===r)return Qt(Ne(t),Ne(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function ew(t,e){if(Pr(t)!==Pr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function on(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Pr(t)>Pr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class aO{constructor(e,n){this.errorPrefix_=n,this.parts_=JE(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Dc(this.parts_[r]);tw(this)}}function lO(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Dc(e),tw(t)}function cO(t){const e=t.parts_.pop();t.byteLength_-=Dc(e),t.parts_.length>0&&(t.byteLength_-=1)}function tw(t){if(t.byteLength_>Em)throw new Error(t.errorPrefix_+"has a key path longer than "+Em+" bytes ("+t.byteLength_+").");if(t.parts_.length>vm)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+vm+") or object contains a cycle "+Hr(t))}function Hr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Af extends YE{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Af}getInitialEvent(e){return x(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ui=1e3,uO=60*5*1e3,wm=30*1e3,hO=1.3,dO=3e4,fO="server_kill",Tm=3;class Qn extends QE{constructor(e,n,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Qn.nextPersistentConnectionId_++,this.log_=fa("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ui,this.maxReconnectDelay_=uO,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Mv())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Af.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Hl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(lt(i)),x(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new No,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),x(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,c=a.s;Qn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&nr(e,"w")){const r=li(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();Ut(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||IC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=wm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=TC(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+lt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Bh("Unrecognized action received from server: "+lt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){x(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ui,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ui,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>dO&&(this.reconnectDelay_=Ui),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*hO)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Qn.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(h){x(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?gt("getToken() completed but was canceled"):(gt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new iO(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,p=>{Ut(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(fO)},i))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ut(h),l())}}}interrupt(e){gt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){gt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ph(this.interruptReasons_)&&(this.reconnectDelay_=Ui,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>Ef(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new Me(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){gt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Tm&&(this.reconnectDelay_=wm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){gt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Tm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+SE.replace(/\./g,"-")]=1,af()?e["framework.cordova"]=1:xv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Hl.getInstance().currentlyOnline();return Ph(this.interruptReasons_)&&e}}Qn.nextPersistentConnectionId_=0;Qn.nextConnectionId_=0;/**
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
 */class _e{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new _e(e,n)}}/**
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
 */class Uc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new _e(ci,e),s=new _e(ci,n);return this.compare(r,s)!==0}minPost(){return _e.MIN}}/**
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
 */let Wa;class nw extends Uc{static get __EMPTY_NODE(){return Wa}static set __EMPTY_NODE(e){Wa=e}compare(e,n){return Ri(e.name,n.name)}isDefinedOn(e){throw wi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return _e.MIN}maxPost(){return new _e(_s,Wa)}makePost(e,n){return x(typeof e=="string","KeyIndex indexValue must always be a string."),new _e(e,Wa)}toString(){return".key"}}const ti=new nw;/**
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
 */let qa=class{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},xt=class to{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??to.RED,this.left=s??Tn.EMPTY_NODE,this.right=i??Tn.EMPTY_NODE}copy(e,n,r,s,i){return new to(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Tn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Tn.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,to.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,to.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};xt.RED=!0;xt.BLACK=!1;class pO{copy(e,n,r,s,i){return this}insert(e,n,r){return new xt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Tn=class dl{constructor(e,n=dl.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new dl(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,xt.BLACK,null,null))}remove(e){return new dl(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,xt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new qa(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new qa(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new qa(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new qa(this.root_,null,this.comparator_,!0,e)}};Tn.EMPTY_NODE=new pO;/**
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
 */function gO(t,e){return Ri(t.name,e.name)}function Rf(t,e){return Ri(t,e)}/**
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
 */let qh;function mO(t){qh=t}const rw=function(t){return typeof t=="number"?"number:"+DE(t):"string:"+t},sw=function(t){if(t.isLeafNode()){const e=t.val();x(typeof e=="string"||typeof e=="number"||typeof e=="object"&&nr(e,".sv"),"Priority must be a string or number.")}else x(t===qh||t.isEmpty(),"priority of unexpected type.");x(t===qh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Im;class et{constructor(e,n=et.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,x(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),sw(this.priorityNode_)}static set __childrenNodeConstructor(e){Im=e}static get __childrenNodeConstructor(){return Im}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new et(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:et.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return fe(e)?this:me(e)===".priority"?this.priorityNode_:et.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:et.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=me(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(x(r!==".priority"||Pr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,et.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ne(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+rw(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=DE(this.value_):e+=this.value_,this.lazyHash_=kE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===et.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof et.__childrenNodeConstructor?-1:(x(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=et.VALUE_TYPE_ORDER.indexOf(n),i=et.VALUE_TYPE_ORDER.indexOf(r);return x(s>=0,"Unknown leaf type: "+n),x(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}et.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let iw,ow;function _O(t){iw=t}function yO(t){ow=t}class vO extends Uc{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?Ri(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return _e.MIN}maxPost(){return new _e(_s,new et("[PRIORITY-POST]",ow))}makePost(e,n){const r=iw(e);return new _e(n,new et("[PRIORITY-POST]",r))}toString(){return".priority"}}const vt=new vO;/**
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
 */const EO=Math.log(2);class wO{constructor(e){const n=i=>parseInt(Math.log(i)/EO,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Kl=function(t,e,n,r){t.sort(e);const s=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new xt(d,h.node,xt.BLACK,null,null);{const p=parseInt(u/2,10)+l,m=s(l,p),E=s(p+1,c);return h=t[p],d=n?n(h):h,new xt(d,h.node,xt.BLACK,m,E)}},i=function(l){let c=null,u=null,h=t.length;const d=function(m,E){const y=h-m,A=h;h-=m;const O=s(y+1,A),S=t[y],K=n?n(S):S;p(new xt(K,S.node,E,null,O))},p=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const E=l.nextBitIsOne(),y=Math.pow(2,l.count-(m+1));E?d(y,xt.BLACK):(d(y,xt.BLACK),d(y,xt.RED))}return u},o=new wO(t.length),a=i(o);return new Tn(r||e,a)};/**
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
 */let qu;const Ls={};class Kn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return x(Ls&&vt,"ChildrenNode.ts has not been loaded"),qu=qu||new Kn({".priority":Ls},{".priority":vt}),qu}get(e){const n=li(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Tn?n:null}hasIndex(e){return nr(this.indexSet_,e.toString())}addIndex(e,n){x(e!==ti,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(_e.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=Kl(r,e.getCompare()):a=Ls;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Kn(u,c)}addToIndexes(e,n){const r=xl(this.indexes_,(s,i)=>{const o=li(this.indexSet_,i);if(x(o,"Missing index implementation for "+i),s===Ls)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(_e.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Kl(a,o.getCompare())}else return Ls;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new _e(e.name,a))),l.insert(e,e.node)}});return new Kn(r,this.indexSet_)}removeFromIndexes(e,n){const r=xl(this.indexes_,s=>{if(s===Ls)return s;{const i=n.get(e.name);return i?s.remove(new _e(e.name,i)):s}});return new Kn(r,this.indexSet_)}}/**
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
 */let $i;class we{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&sw(this.priorityNode_),this.children_.isEmpty()&&x(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return $i||($i=new we(new Tn(Rf),null,Kn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||$i}updatePriority(e){return this.children_.isEmpty()?this:new we(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?$i:n}}getChild(e){const n=me(e);return n===null?this:this.getImmediateChild(n).getChild(Ne(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(x(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new _e(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?$i:this.priorityNode_;return new we(s,o,i)}}updateChild(e,n){const r=me(e);if(r===null)return n;{x(me(e)!==".priority"||Pr(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(Ne(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(vt,(o,a)=>{n[o]=a.val(e),r++,i&&we.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+rw(this.getPriority().val())+":"),this.forEachChild(vt,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":kE(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new _e(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new _e(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new _e(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,_e.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,_e.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ga?-1:0}withIndex(e){if(e===ti||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new we(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ti||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(vt),s=n.getIterator(vt);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ti?null:this.indexMap_.get(e.toString())}}we.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class TO extends we{constructor(){super(new Tn(Rf),we.EMPTY_NODE,Kn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return we.EMPTY_NODE}isEmpty(){return!1}}const ga=new TO;Object.defineProperties(_e,{MIN:{value:new _e(ci,we.EMPTY_NODE)},MAX:{value:new _e(_s,ga)}});nw.__EMPTY_NODE=we.EMPTY_NODE;et.__childrenNodeConstructor=we;mO(ga);yO(ga);/**
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
 */const IO=!0;function mt(t,e=null){if(t===null)return we.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),x(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new et(n,mt(e))}if(!(t instanceof Array)&&IO){const n=[];let r=!1;if(Zt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=mt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new _e(o,l)))}}),n.length===0)return we.EMPTY_NODE;const i=Kl(n,gO,o=>o.name,Rf);if(r){const o=Kl(n,vt.getCompare());return new we(i,mt(e),new Kn({".priority":o},{".priority":vt}))}else return new we(i,mt(e),Kn.Default)}else{let n=we.EMPTY_NODE;return Zt(t,(r,s)=>{if(nr(t,r)&&r.substring(0,1)!=="."){const i=mt(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(mt(e))}}_O(mt);/**
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
 */class AO extends Uc{constructor(e){super(),this.indexPath_=e,x(!fe(e)&&me(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?Ri(e.name,n.name):i}makePost(e,n){const r=mt(e),s=we.EMPTY_NODE.updateChild(this.indexPath_,r);return new _e(n,s)}maxPost(){const e=we.EMPTY_NODE.updateChild(this.indexPath_,ga);return new _e(_s,e)}toString(){return JE(this.indexPath_,0).join("/")}}/**
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
 */class RO extends Uc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Ri(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return _e.MIN}maxPost(){return _e.MAX}makePost(e,n){const r=mt(e);return new _e(n,r)}toString(){return".value"}}const bO=new RO;/**
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
 */function CO(t){return{type:"value",snapshotNode:t}}function SO(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function PO(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Am(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function kO(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class bf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=vt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return x(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return x(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ci}hasEnd(){return this.endSet_}getIndexEndValue(){return x(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return x(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:_s}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return x(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===vt}copy(){const e=new bf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Rm(t){const e={};if(t.isDefault())return e;let n;if(t.index_===vt?n="$priority":t.index_===bO?n="$value":t.index_===ti?n="$key":(x(t.index_ instanceof AO,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=lt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=lt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+lt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=lt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+lt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function bm(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==vt&&(e.i=t.index_.toString()),e}/**
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
 */class zl extends QE{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=fa("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(x(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=zl.getListenId_(e,r),a={};this.listens_[o]=a;const l=Rm(e._queryParams);this.restRequest_(i+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(i,h,!1,r),li(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,n){const r=zl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Rm(e._queryParams),r=e._path.toString(),s=new No;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ii(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Oo(a.responseText)}catch{Ut("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Ut("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class NO{constructor(){this.rootNode_=we.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Gl(){return{value:null,children:new Map}}function aw(t,e,n){if(fe(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=me(e);t.children.has(r)||t.children.set(r,Gl());const s=t.children.get(r);e=Ne(e),aw(s,e,n)}}function Hh(t,e,n){t.value!==null?n(e,t.value):OO(t,(r,s)=>{const i=new Me(e.toString()+"/"+r);Hh(s,i,n)})}function OO(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class DO{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Zt(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
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
 */const Cm=10*1e3,xO=30*1e3,MO=5*60*1e3;class LO{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new DO(e);const r=Cm+(xO-Cm)*Math.random();ho(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Zt(e,(s,i)=>{i>0&&nr(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),ho(this.reportStats_.bind(this),Math.floor(Math.random()*2*MO))}}/**
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
 */var In;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(In||(In={}));function lw(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function cw(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function uw(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Ql{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=In.ACK_USER_WRITE,this.source=lw()}operationForChild(e){if(fe(this.path)){if(this.affectedTree.value!=null)return x(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Me(e));return new Ql(Ce(),n,this.revert)}}else return x(me(this.path)===e,"operationForChild called for unrelated child."),new Ql(Ne(this.path),this.affectedTree,this.revert)}}/**
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
 */class ys{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=In.OVERWRITE}operationForChild(e){return fe(this.path)?new ys(this.source,Ce(),this.snap.getImmediateChild(e)):new ys(this.source,Ne(this.path),this.snap)}}/**
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
 */class Fo{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=In.MERGE}operationForChild(e){if(fe(this.path)){const n=this.children.subtree(new Me(e));return n.isEmpty()?null:n.value?new ys(this.source,Ce(),n.value):new Fo(this.source,Ce(),n)}else return x(me(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Fo(this.source,Ne(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Cf{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(fe(e))return this.isFullyInitialized()&&!this.filtered_;const n=me(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function VO(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(kO(o.childName,o.snapshotNode))}),Bi(t,s,"child_removed",e,r,n),Bi(t,s,"child_added",e,r,n),Bi(t,s,"child_moved",i,r,n),Bi(t,s,"child_changed",e,r,n),Bi(t,s,"value",e,r,n),s}function Bi(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,l)=>UO(t,a,l)),o.forEach(a=>{const l=FO(t,a,i);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function FO(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function UO(t,e,n){if(e.childName==null||n.childName==null)throw wi("Should only compare child_ events.");const r=new _e(e.childName,e.snapshotNode),s=new _e(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
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
 */function hw(t,e){return{eventCache:t,serverCache:e}}function fo(t,e,n,r){return hw(new Cf(e,n,r),t.serverCache)}function dw(t,e,n,r){return hw(t.eventCache,new Cf(e,n,r))}function Kh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function vs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Hu;const $O=()=>(Hu||(Hu=new Tn(RN)),Hu);class ke{constructor(e,n=$O()){this.value=e,this.children=n}static fromObject(e){let n=new ke(null);return Zt(e,(r,s)=>{n=n.set(new Me(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ce(),value:this.value};if(fe(e))return null;{const r=me(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(Ne(e),n);return i!=null?{path:rt(new Me(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(fe(e))return this;{const n=me(e),r=this.children.get(n);return r!==null?r.subtree(Ne(e)):new ke(null)}}set(e,n){if(fe(e))return new ke(n,this.children);{const r=me(e),i=(this.children.get(r)||new ke(null)).set(Ne(e),n),o=this.children.insert(r,i);return new ke(this.value,o)}}remove(e){if(fe(e))return this.children.isEmpty()?new ke(null):new ke(null,this.children);{const n=me(e),r=this.children.get(n);if(r){const s=r.remove(Ne(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new ke(null):new ke(this.value,i)}else return this}}get(e){if(fe(e))return this.value;{const n=me(e),r=this.children.get(n);return r?r.get(Ne(e)):null}}setTree(e,n){if(fe(e))return n;{const r=me(e),i=(this.children.get(r)||new ke(null)).setTree(Ne(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new ke(this.value,o)}}fold(e){return this.fold_(Ce(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(rt(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Ce(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(fe(e))return null;{const i=me(e),o=this.children.get(i);return o?o.findOnPath_(Ne(e),rt(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ce(),n)}foreachOnPath_(e,n,r){if(fe(e))return this;{this.value&&r(n,this.value);const s=me(e),i=this.children.get(s);return i?i.foreachOnPath_(Ne(e),rt(n,s),r):new ke(null)}}foreach(e){this.foreach_(Ce(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(rt(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class cn{constructor(e){this.writeTree_=e}static empty(){return new cn(new ke(null))}}function po(t,e,n){if(fe(e))return new cn(new ke(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=Qt(s,e);return i=i.updateChild(o,n),new cn(t.writeTree_.set(s,i))}else{const s=new ke(n),i=t.writeTree_.setTree(e,s);return new cn(i)}}}function Sm(t,e,n){let r=t;return Zt(n,(s,i)=>{r=po(r,rt(e,s),i)}),r}function Pm(t,e){if(fe(e))return cn.empty();{const n=t.writeTree_.setTree(e,new ke(null));return new cn(n)}}function zh(t,e){return Ps(t,e)!=null}function Ps(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Qt(n.path,e)):null}function km(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(vt,(r,s)=>{e.push(new _e(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new _e(r,s.value))}),e}function Ir(t,e){if(fe(e))return t;{const n=Ps(t,e);return n!=null?new cn(new ke(n)):new cn(t.writeTree_.subtree(e))}}function Gh(t){return t.writeTree_.isEmpty()}function ui(t,e){return fw(Ce(),t.writeTree_,e)}function fw(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(x(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=fw(rt(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(rt(t,".priority"),r)),n}}/**
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
 */function pw(t,e){return vw(e,t)}function BO(t,e,n,r,s){x(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=po(t.visibleWrites,e,n)),t.lastWriteId=r}function jO(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function WO(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);x(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&qO(a,r.path)?s=!1:on(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return HO(t),!0;if(r.snap)t.visibleWrites=Pm(t.visibleWrites,r.path);else{const a=r.children;Zt(a,l=>{t.visibleWrites=Pm(t.visibleWrites,rt(r.path,l))})}return!0}else return!1}function qO(t,e){if(t.snap)return on(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&on(rt(t.path,n),e))return!0;return!1}function HO(t){t.visibleWrites=gw(t.allWrites,KO,Ce()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function KO(t){return t.visible}function gw(t,e,n){let r=cn.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)on(n,o)?(a=Qt(n,o),r=po(r,a,i.snap)):on(o,n)&&(a=Qt(o,n),r=po(r,Ce(),i.snap.getChild(a)));else if(i.children){if(on(n,o))a=Qt(n,o),r=Sm(r,a,i.children);else if(on(o,n))if(a=Qt(o,n),fe(a))r=Sm(r,Ce(),i.children);else{const l=li(i.children,me(a));if(l){const c=l.getChild(Ne(a));r=po(r,Ce(),c)}}}else throw wi("WriteRecord should have .snap or .children")}}return r}function mw(t,e,n,r,s){if(!r&&!s){const i=Ps(t.visibleWrites,e);if(i!=null)return i;{const o=Ir(t.visibleWrites,e);if(Gh(o))return n;if(n==null&&!zh(o,Ce()))return null;{const a=n||we.EMPTY_NODE;return ui(o,a)}}}else{const i=Ir(t.visibleWrites,e);if(!s&&Gh(i))return n;if(!s&&n==null&&!zh(i,Ce()))return null;{const o=function(c){return(c.visible||s)&&(!r||!~r.indexOf(c.writeId))&&(on(c.path,e)||on(e,c.path))},a=gw(t.allWrites,o,e),l=n||we.EMPTY_NODE;return ui(a,l)}}}function zO(t,e,n){let r=we.EMPTY_NODE;const s=Ps(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(vt,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=Ir(t.visibleWrites,e);return n.forEachChild(vt,(o,a)=>{const l=ui(Ir(i,new Me(o)),a);r=r.updateImmediateChild(o,l)}),km(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=Ir(t.visibleWrites,e);return km(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function GO(t,e,n,r,s){x(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=rt(e,n);if(zh(t.visibleWrites,i))return null;{const o=Ir(t.visibleWrites,i);return Gh(o)?s.getChild(n):ui(o,s.getChild(n))}}function QO(t,e,n,r){const s=rt(e,n),i=Ps(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=Ir(t.visibleWrites,s);return ui(o,r.getNode().getImmediateChild(n))}else return null}function YO(t,e){return Ps(t.visibleWrites,e)}function XO(t,e,n,r,s,i,o){let a;const l=Ir(t.visibleWrites,e),c=Ps(l,Ce());if(c!=null)a=c;else if(n!=null)a=ui(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let p=d.getNext();for(;p&&u.length<s;)h(p,r)!==0&&u.push(p),p=d.getNext();return u}else return[]}function JO(){return{visibleWrites:cn.empty(),allWrites:[],lastWriteId:-1}}function Qh(t,e,n,r){return mw(t.writeTree,t.treePath,e,n,r)}function _w(t,e){return zO(t.writeTree,t.treePath,e)}function Nm(t,e,n,r){return GO(t.writeTree,t.treePath,e,n,r)}function Yl(t,e){return YO(t.writeTree,rt(t.treePath,e))}function ZO(t,e,n,r,s,i){return XO(t.writeTree,t.treePath,e,n,r,s,i)}function Sf(t,e,n){return QO(t.writeTree,t.treePath,e,n)}function yw(t,e){return vw(rt(t.treePath,e),t.writeTree)}function vw(t,e){return{treePath:t,writeTree:e}}/**
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
 */class eD{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;x(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),x(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,Am(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,PO(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,SO(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,Am(r,e.snapshotNode,s.oldSnap));else throw wi("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class tD{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Ew=new tD;class Pf{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Cf(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Sf(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:vs(this.viewCache_),i=ZO(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}function nD(t,e){x(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),x(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function rD(t,e,n,r,s){const i=new eD;let o,a;if(n.type===In.OVERWRITE){const c=n;c.source.fromUser?o=Yh(t,e,c.path,c.snap,r,s,i):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!fe(c.path),o=Xl(t,e,c.path,c.snap,r,s,a,i))}else if(n.type===In.MERGE){const c=n;c.source.fromUser?o=iD(t,e,c.path,c.children,r,s,i):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Xh(t,e,c.path,c.children,r,s,a,i))}else if(n.type===In.ACK_USER_WRITE){const c=n;c.revert?o=lD(t,e,c.path,r,s,i):o=oD(t,e,c.path,c.affectedTree,r,s,i)}else if(n.type===In.LISTEN_COMPLETE)o=aD(t,e,n.path,r,i);else throw wi("Unknown operation type: "+n.type);const l=i.getChanges();return sD(e,o,l),{viewCache:o,changes:l}}function sD(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=Kh(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(CO(Kh(e)))}}function ww(t,e,n,r,s,i){const o=e.eventCache;if(Yl(r,n)!=null)return e;{let a,l;if(fe(n))if(x(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=vs(e),u=c instanceof we?c:we.EMPTY_NODE,h=_w(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,i)}else{const c=Qh(r,vs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=me(n);if(c===".priority"){x(Pr(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Nm(r,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Ne(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Nm(r,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Sf(r,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,s,i):a=o.getNode()}}return fo(e,a,o.isFullyInitialized()||fe(n),t.filter.filtersNodes())}}function Xl(t,e,n,r,s,i,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(fe(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),p,null)}else{const p=me(n);if(!l.isCompleteForPath(n)&&Pr(n)>1)return e;const m=Ne(n),y=l.getNode().getImmediateChild(p).updateChild(m,r);p===".priority"?c=u.updatePriority(l.getNode(),y):c=u.updateChild(l.getNode(),p,y,m,Ew,null)}const h=dw(e,c,l.isFullyInitialized()||fe(n),u.filtersNodes()),d=new Pf(s,h,i);return ww(t,h,n,s,d,a)}function Yh(t,e,n,r,s,i,o){const a=e.eventCache;let l,c;const u=new Pf(s,e,i);if(fe(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=fo(e,c,!0,t.filter.filtersNodes());else{const h=me(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=fo(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=Ne(n),p=a.getNode().getImmediateChild(h);let m;if(fe(d))m=r;else{const E=u.getCompleteChild(h);E!=null?XE(d)===".priority"&&E.getChild(ZE(d)).isEmpty()?m=E:m=E.updateChild(d,r):m=we.EMPTY_NODE}if(p.equals(m))l=e;else{const E=t.filter.updateChild(a.getNode(),h,m,d,u,o);l=fo(e,E,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Om(t,e){return t.eventCache.isCompleteForChild(e)}function iD(t,e,n,r,s,i,o){let a=e;return r.foreach((l,c)=>{const u=rt(n,l);Om(e,me(u))&&(a=Yh(t,a,u,c,s,i,o))}),r.foreach((l,c)=>{const u=rt(n,l);Om(e,me(u))||(a=Yh(t,a,u,c,s,i,o))}),a}function Dm(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function Xh(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;fe(n)?c=r:c=new ke(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),m=Dm(t,p,d);l=Xl(t,l,new Me(h),m,s,i,o,a)}}),c.children.inorderTraversal((h,d)=>{const p=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!p){const m=e.serverCache.getNode().getImmediateChild(h),E=Dm(t,m,d);l=Xl(t,l,new Me(h),E,s,i,o,a)}}),l}function oD(t,e,n,r,s,i,o){if(Yl(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(fe(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Xl(t,e,n,l.getNode().getChild(n),s,i,a,o);if(fe(n)){let c=new ke(null);return l.getNode().forEachChild(ti,(u,h)=>{c=c.set(new Me(u),h)}),Xh(t,e,n,c,s,i,a,o)}else return e}else{let c=new ke(null);return r.foreach((u,h)=>{const d=rt(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Xh(t,e,n,c,s,i,a,o)}}function aD(t,e,n,r,s){const i=e.serverCache,o=dw(e,i.getNode(),i.isFullyInitialized()||fe(n),i.isFiltered());return ww(t,o,n,r,Ew,s)}function lD(t,e,n,r,s,i){let o;if(Yl(r,n)!=null)return e;{const a=new Pf(r,e,s),l=e.eventCache.getNode();let c;if(fe(n)||me(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Qh(r,vs(e));else{const h=e.serverCache.getNode();x(h instanceof we,"serverChildren would be complete if leaf node"),u=_w(r,h)}u=u,c=t.filter.updateFullNode(l,u,i)}else{const u=me(n);let h=Sf(r,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Ne(n),a,i):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,we.EMPTY_NODE,Ne(n),a,i):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Qh(r,vs(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||Yl(r,Ce())!=null,fo(e,c,o,t.filter.filtersNodes())}}function cD(t,e){const n=vs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!fe(e)&&!n.getImmediateChild(me(e)).isEmpty())?n.getChild(e):null}function xm(t,e,n,r){e.type===In.MERGE&&e.source.queryId!==null&&(x(vs(t.viewCache_),"We should always have a full cache before handling merges"),x(Kh(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=rD(t.processor_,s,e,n,r);return nD(t.processor_,i.viewCache),x(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,uD(t,i.changes,i.viewCache.eventCache.getNode(),null)}function uD(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return VO(t.eventGenerator_,e,n,s)}/**
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
 */let Mm;function hD(t){x(!Mm,"__referenceConstructor has already been defined"),Mm=t}function kf(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return x(i!=null,"SyncTree gave us an op for an invalid query."),xm(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(xm(o,e,n,r));return i}}function Nf(t,e){let n=null;for(const r of t.views.values())n=n||cD(r,e);return n}/**
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
 */let Lm;function dD(t){x(!Lm,"__referenceConstructor has already been defined"),Lm=t}class Vm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ke(null),this.pendingWriteTree_=JO(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function fD(t,e,n,r,s){return BO(t.pendingWriteTree_,e,n,r,s),s?Bc(t,new ys(lw(),e,n)):[]}function zs(t,e,n=!1){const r=jO(t.pendingWriteTree_,e);if(WO(t.pendingWriteTree_,e)){let i=new ke(null);return r.snap!=null?i=i.set(Ce(),!0):Zt(r.children,o=>{i=i.set(new Me(o),!0)}),Bc(t,new Ql(r.path,i,n))}else return[]}function $c(t,e,n){return Bc(t,new ys(cw(),e,n))}function pD(t,e,n){const r=ke.fromObject(n);return Bc(t,new Fo(cw(),e,r))}function gD(t,e,n,r){const s=Rw(t,r);if(s!=null){const i=bw(s),o=i.path,a=i.queryId,l=Qt(o,e),c=new ys(uw(a),l,n);return Cw(t,o,c)}else return[]}function mD(t,e,n,r){const s=Rw(t,r);if(s){const i=bw(s),o=i.path,a=i.queryId,l=Qt(o,e),c=ke.fromObject(n),u=new Fo(uw(a),l,c);return Cw(t,o,u)}else return[]}function Tw(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Qt(o,e),c=Nf(a,l);if(c)return c});return mw(s,e,i,n,!0)}function Bc(t,e){return Iw(e,t.syncPointTree_,null,pw(t.pendingWriteTree_,Ce()))}function Iw(t,e,n,r){if(fe(t.path))return Aw(t,e,n,r);{const s=e.get(Ce());n==null&&s!=null&&(n=Nf(s,Ce()));let i=[];const o=me(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=yw(r,o);i=i.concat(Iw(a,l,c,u))}return s&&(i=i.concat(kf(s,t,r,n))),i}}function Aw(t,e,n,r){const s=e.get(Ce());n==null&&s!=null&&(n=Nf(s,Ce()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=yw(r,o),u=t.operationForChild(o);u&&(i=i.concat(Aw(u,a,l,c)))}),s&&(i=i.concat(kf(s,t,r,n))),i}function Rw(t,e){return t.tagToQueryMap.get(e)}function bw(t){const e=t.indexOf("$");return x(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Me(t.substr(0,e))}}function Cw(t,e,n){const r=t.syncPointTree_.get(e);x(r,"Missing sync point for query tag that we're tracking");const s=pw(t.pendingWriteTree_,e);return kf(r,n,s,null)}/**
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
 */class Of{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Of(n)}node(){return this.node_}}class Df{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=rt(this.path_,e);return new Df(this.syncTree_,n)}node(){return Tw(this.syncTree_,this.path_)}}const _D=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Fm=function(t,e,n){if(!t||typeof t!="object")return t;if(x(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return yD(t[".sv"],e,n);if(typeof t[".sv"]=="object")return vD(t[".sv"],e);x(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},yD=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:x(!1,"Unexpected server value: "+t)}},vD=function(t,e,n){t.hasOwnProperty("increment")||x(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&x(!1,"Unexpected increment value: "+r);const s=e.node();if(x(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},ED=function(t,e,n,r){return xf(e,new Df(n,t),r)},wD=function(t,e,n){return xf(t,new Of(e),n)};function xf(t,e,n){const r=t.getPriority().val(),s=Fm(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=Fm(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new et(a,mt(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new et(s))),o.forEachChild(vt,(a,l)=>{const c=xf(l,e.getImmediateChild(a),n);c!==l&&(i=i.updateImmediateChild(a,c))}),i}}/**
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
 */class Mf{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Lf(t,e){let n=e instanceof Me?e:new Me(e),r=t,s=me(n);for(;s!==null;){const i=li(r.node.children,s)||{children:{},childCount:0};r=new Mf(s,r,i),n=Ne(n),s=me(n)}return r}function bi(t){return t.node.value}function Sw(t,e){t.node.value=e,Jh(t)}function Pw(t){return t.node.childCount>0}function TD(t){return bi(t)===void 0&&!Pw(t)}function jc(t,e){Zt(t.node.children,(n,r)=>{e(new Mf(n,t,r))})}function kw(t,e,n,r){n&&!r&&e(t),jc(t,s=>{kw(s,e,!0,r)}),n&&r&&e(t)}function ID(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function ma(t){return new Me(t.parent===null?t.name:ma(t.parent)+"/"+t.name)}function Jh(t){t.parent!==null&&AD(t.parent,t.name,t)}function AD(t,e,n){const r=TD(n),s=nr(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,Jh(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Jh(t))}/**
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
 */const RD=/[\[\].#$\/\u0000-\u001F\u007F]/,bD=/[\[\].#$\u0000-\u001F\u007F]/,Ku=10*1024*1024,Nw=function(t){return typeof t=="string"&&t.length!==0&&!RD.test(t)},CD=function(t){return typeof t=="string"&&t.length!==0&&!bD.test(t)},SD=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),CD(t)},Ow=function(t,e,n){const r=n instanceof Me?new aO(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Hr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Hr(r)+" with contents = "+e.toString());if(NE(e))throw new Error(t+"contains "+e.toString()+" "+Hr(r));if(typeof e=="string"&&e.length>Ku/3&&Dc(e)>Ku)throw new Error(t+"contains a string greater than "+Ku+" utf8 bytes "+Hr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(Zt(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!Nw(o)))throw new Error(t+" contains an invalid key ("+o+") "+Hr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);lO(r,o),Ow(t,a,r),cO(r)}),s&&i)throw new Error(t+' contains ".value" child '+Hr(r)+" in addition to actual children.")}},PD=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Nw(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!SD(n))throw new Error(SC(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class kD{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ND(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!ew(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function ks(t,e,n){ND(t,n),OD(t,r=>on(r,e)||on(e,r))}function OD(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(DD(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function DD(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ls&&gt("event: "+n.toString()),pa(r)}}}/**
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
 */const xD="repo_interrupt",MD=25;class LD{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new kD,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Gl(),this.transactionQueueTree_=new Mf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function VD(t,e,n){if(t.stats_=Tf(t.repoInfo_),t.forceRestClient_||NN())t.server_=new zl(t.repoInfo_,(r,s,i,o)=>{Um(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>$m(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{lt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Qn(t.repoInfo_,e,(r,s,i,o)=>{Um(t,r,s,i,o)},r=>{$m(t,r)},r=>{UD(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=VN(t.repoInfo_,()=>new LO(t.stats_,t.server_)),t.infoData_=new NO,t.infoSyncTree_=new Vm({startListening:(r,s,i,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=$c(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Vf(t,"connected",!1),t.serverSyncTree_=new Vm({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,l)=>{const c=o(a,l);ks(t.eventQueue_,r._path,c)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function FD(t){const n=t.infoData_.getNode(new Me(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Dw(t){return _D({timestamp:FD(t)})}function Um(t,e,n,r,s){t.dataUpdateCount++;const i=new Me(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const l=xl(n,c=>mt(c));o=mD(t.serverSyncTree_,i,l,s)}else{const l=mt(n);o=gD(t.serverSyncTree_,i,l,s)}else if(r){const l=xl(n,c=>mt(c));o=pD(t.serverSyncTree_,i,l)}else{const l=mt(n);o=$c(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=Uf(t,i)),ks(t.eventQueue_,a,o)}function $m(t,e){Vf(t,"connected",e),e===!1&&BD(t)}function UD(t,e){Zt(e,(n,r)=>{Vf(t,n,r)})}function Vf(t,e,n){const r=new Me("/.info/"+e),s=mt(n);t.infoData_.updateSnapshot(r,s);const i=$c(t.infoSyncTree_,r,s);ks(t.eventQueue_,r,i)}function $D(t){return t.nextWriteId_++}function BD(t){xw(t,"onDisconnectEvents");const e=Dw(t),n=Gl();Hh(t.onDisconnect_,Ce(),(s,i)=>{const o=ED(s,i,t.serverSyncTree_,e);aw(n,s,o)});let r=[];Hh(n,Ce(),(s,i)=>{r=r.concat($c(t.serverSyncTree_,s,i));const o=HD(t,s);Uf(t,o)}),t.onDisconnect_=Gl(),ks(t.eventQueue_,Ce(),r)}function jD(t){t.persistentConnection_&&t.persistentConnection_.interrupt(xD)}function xw(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),gt(n,...e)}function Mw(t,e,n){return Tw(t.serverSyncTree_,e,n)||we.EMPTY_NODE}function Ff(t,e=t.transactionQueueTree_){if(e||Wc(t,e),bi(e)){const n=Vw(t,e);x(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&WD(t,ma(e),n)}else Pw(e)&&jc(e,n=>{Ff(t,n)})}function WD(t,e,n){const r=n.map(c=>c.currentWriteId),s=Mw(t,e,r);let i=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];x(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Qt(e,u.path);i=i.updateChild(h,u.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,c=>{xw(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(zs(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Wc(t,Lf(t.transactionQueueTree_,e)),Ff(t,t.transactionQueueTree_),ks(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)pa(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ut("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Uf(t,e)}},o)}function Uf(t,e){const n=Lw(t,e),r=ma(n),s=Vw(t,n);return qD(t,s,r),r}function qD(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Qt(n,l.path);let u=!1,h;if(x(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat(zs(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=MD)u=!0,h="maxretry",s=s.concat(zs(t.serverSyncTree_,l.currentWriteId,!0));else{const d=Mw(t,l.path,o);l.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){Ow("transaction failed: Data returned ",p,l.path);let m=mt(p);typeof p=="object"&&p!=null&&nr(p,".priority")||(m=m.updatePriority(d.getPriority()));const y=l.currentWriteId,A=Dw(t),O=wD(m,d,A);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=O,l.currentWriteId=$D(t),o.splice(o.indexOf(y),1),s=s.concat(fD(t.serverSyncTree_,l.path,O,l.currentWriteId,l.applyLocally)),s=s.concat(zs(t.serverSyncTree_,y,!0))}else u=!0,h="nodata",s=s.concat(zs(t.serverSyncTree_,l.currentWriteId,!0))}ks(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}Wc(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)pa(r[a]);Ff(t,t.transactionQueueTree_)}function Lw(t,e){let n,r=t.transactionQueueTree_;for(n=me(e);n!==null&&bi(r)===void 0;)r=Lf(r,n),e=Ne(e),n=me(e);return r}function Vw(t,e){const n=[];return Fw(t,e,n),n.sort((r,s)=>r.order-s.order),n}function Fw(t,e,n){const r=bi(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);jc(e,s=>{Fw(t,s,n)})}function Wc(t,e){const n=bi(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,Sw(e,n.length>0?n:void 0)}jc(e,r=>{Wc(t,r)})}function HD(t,e){const n=ma(Lw(t,e)),r=Lf(t.transactionQueueTree_,e);return ID(r,s=>{zu(t,s)}),zu(t,r),kw(r,s=>{zu(t,s)}),n}function zu(t,e){const n=bi(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(x(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(x(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(zs(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?Sw(e,void 0):n.length=i+1,ks(t.eventQueue_,ma(e),s);for(let o=0;o<r.length;o++)pa(r[o])}}/**
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
 */function KD(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function zD(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ut(`Invalid query segment '${n}' in query '${t}'`)}return e}const Bm=function(t,e){const n=GD(t),r=n.namespace;n.domain==="firebase.com"&&ms(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&ms("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||IN();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new xN(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new Me(n.pathString)}},GD=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=KD(t.substring(u,h)));const d=zD(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const m=e.indexOf(".");r=e.substring(0,m).toLowerCase(),n=e.substring(m+1),i=r}"ns"in d&&(i=d.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return fe(this._path)?null:XE(this._path)}get ref(){return new Ci(this._repo,this._path)}get _queryIdentifier(){const e=bm(this._queryParams),n=Ef(e);return n==="{}"?"default":n}get _queryObject(){return bm(this._queryParams)}isEqual(e){if(e=Ge(e),!(e instanceof $f))return!1;const n=this._repo===e._repo,r=ew(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+oO(this._path)}}class Ci extends $f{constructor(e,n){super(e,n,new bf,!1)}get parent(){const e=ZE(this._path);return e===null?null:new Ci(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}hD(Ci);dD(Ci);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QD="FIREBASE_DATABASE_EMULATOR_HOST",Zh={};let YD=!1;function XD(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||ms("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),gt("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Bm(i,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[QD]),c?(l=!0,i=`http://${c}?ns=${a.namespace}`,o=Bm(i,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new jh(jh.OWNER):new DN(t.name,t.options,e);PD("Invalid Firebase Database URL",o),fe(o.path)||ms("Database URL must point to the root of a Firebase Database (not including a child path).");const h=ZD(a,t,u,new ON(t.name,n));return new ex(h,t)}function JD(t,e){const n=Zh[e];(!n||n[t.key]!==t)&&ms(`Database ${e}(${t.repoInfo_}) has already been deleted.`),jD(t),delete n[t.key]}function ZD(t,e,n,r){let s=Zh[e.name];s||(s={},Zh[e.name]=s);let i=s[t.toURLString()];return i&&ms("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new LD(t,YD,n,r),s[t.toURLString()]=i,i}class ex{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(VD(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ci(this._repo,Ce())),this._rootInternal}_delete(){return this._rootInternal!==null&&(JD(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ms("Cannot call "+e+" on a deleted database.")}}/**
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
 */function tx(t){yN(Mr),xn(new un("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return XD(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),Ft(lm,cm,t),Ft(lm,cm,"esm2017")}Qn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Qn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};tx();var nx=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,Bf=Bf||{},ne=nx||self;function qc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function _a(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function rx(t){return Object.prototype.hasOwnProperty.call(t,Gu)&&t[Gu]||(t[Gu]=++sx)}var Gu="closure_uid_"+(1e9*Math.random()>>>0),sx=0;function ix(t,e,n){return t.call.apply(t.bind,arguments)}function ox(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Et(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Et=ix:Et=ox,Et.apply(null,arguments)}function Ha(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function it(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Vr(){this.s=this.s,this.o=this.o}var ax=0;Vr.prototype.s=!1;Vr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),ax!=0)&&rx(this)};Vr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Uw=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function jf(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function jm(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(qc(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function wt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}wt.prototype.h=function(){this.defaultPrevented=!0};var lx=function(){if(!ne.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ne.addEventListener("test",()=>{},e),ne.removeEventListener("test",()=>{},e)}catch{}return t}();function Uo(t){return/^[\s\xa0]*$/.test(t)}function Hc(){var t=ne.navigator;return t&&(t=t.userAgent)?t:""}function wn(t){return Hc().indexOf(t)!=-1}function Wf(t){return Wf[" "](t),t}Wf[" "]=function(){};function cx(t,e){var n=t1;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var ux=wn("Opera"),hi=wn("Trident")||wn("MSIE"),$w=wn("Edge"),ed=$w||hi,Bw=wn("Gecko")&&!(Hc().toLowerCase().indexOf("webkit")!=-1&&!wn("Edge"))&&!(wn("Trident")||wn("MSIE"))&&!wn("Edge"),hx=Hc().toLowerCase().indexOf("webkit")!=-1&&!wn("Edge");function jw(){var t=ne.document;return t?t.documentMode:void 0}var td;e:{var Qu="",Yu=function(){var t=Hc();if(Bw)return/rv:([^\);]+)(\)|;)/.exec(t);if($w)return/Edge\/([\d\.]+)/.exec(t);if(hi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(hx)return/WebKit\/(\S+)/.exec(t);if(ux)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Yu&&(Qu=Yu?Yu[1]:""),hi){var Xu=jw();if(Xu!=null&&Xu>parseFloat(Qu)){td=String(Xu);break e}}td=Qu}var nd;if(ne.document&&hi){var Wm=jw();nd=Wm||parseInt(td,10)||void 0}else nd=void 0;var dx=nd;function $o(t,e){if(wt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Bw){e:{try{Wf(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:fx[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&$o.$.h.call(this)}}it($o,wt);var fx={2:"touch",3:"pen",4:"mouse"};$o.prototype.h=function(){$o.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ya="closure_listenable_"+(1e6*Math.random()|0),px=0;function gx(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++px,this.fa=this.ia=!1}function Kc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function qf(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function mx(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Ww(t){const e={};for(const n in t)e[n]=t[n];return e}const qm="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qw(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<qm.length;i++)n=qm[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function zc(t){this.src=t,this.g={},this.h=0}zc.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=sd(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new gx(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function rd(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Uw(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Kc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function sd(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Hf="closure_lm_"+(1e6*Math.random()|0),Ju={};function Hw(t,e,n,r,s){if(r&&r.once)return zw(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Hw(t,e[i],n,r,s);return null}return n=Gf(n),t&&t[ya]?t.O(e,n,_a(r)?!!r.capture:!!r,s):Kw(t,e,n,!1,r,s)}function Kw(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=_a(s)?!!s.capture:!!s,a=zf(t);if(a||(t[Hf]=a=new zc(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=_x(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)lx||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Qw(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function _x(){function t(n){return e.call(t.src,t.listener,n)}const e=yx;return t}function zw(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)zw(t,e[i],n,r,s);return null}return n=Gf(n),t&&t[ya]?t.P(e,n,_a(r)?!!r.capture:!!r,s):Kw(t,e,n,!0,r,s)}function Gw(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Gw(t,e[i],n,r,s);else r=_a(r)?!!r.capture:!!r,n=Gf(n),t&&t[ya]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=sd(i,n,r,s),-1<n&&(Kc(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=zf(t))&&(e=t.g[e.toString()],t=-1,e&&(t=sd(e,n,r,s)),(n=-1<t?e[t]:null)&&Kf(n))}function Kf(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ya])rd(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Qw(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=zf(e))?(rd(n,t),n.h==0&&(n.src=null,e[Hf]=null)):Kc(t)}}}function Qw(t){return t in Ju?Ju[t]:Ju[t]="on"+t}function yx(t,e){if(t.fa)t=!0;else{e=new $o(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Kf(t),t=n.call(r,e)}return t}function zf(t){return t=t[Hf],t instanceof zc?t:null}var Zu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Gf(t){return typeof t=="function"?t:(t[Zu]||(t[Zu]=function(e){return t.handleEvent(e)}),t[Zu])}function st(){Vr.call(this),this.i=new zc(this),this.S=this,this.J=null}it(st,Vr);st.prototype[ya]=!0;st.prototype.removeEventListener=function(t,e,n,r){Gw(this,t,e,n,r)};function ut(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new wt(e,t);else if(e instanceof wt)e.target=e.target||t;else{var s=e;e=new wt(r,t),qw(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Ka(o,r,!0,e)&&s}if(o=e.g=t,s=Ka(o,r,!0,e)&&s,s=Ka(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Ka(o,r,!1,e)&&s}st.prototype.N=function(){if(st.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Kc(n[r]);delete t.g[e],t.h--}}this.J=null};st.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};st.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ka(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&rd(t.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var Qf=ne.JSON.stringify;class vx{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Ex(){var t=Yf;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class wx{constructor(){this.h=this.g=null}add(e,n){const r=Yw.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Yw=new vx(()=>new Tx,t=>t.reset());class Tx{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Ix(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Ax(t){ne.setTimeout(()=>{throw t},0)}let Bo,jo=!1,Yf=new wx,Xw=()=>{const t=ne.Promise.resolve(void 0);Bo=()=>{t.then(Rx)}};var Rx=()=>{for(var t;t=Ex();){try{t.h.call(t.g)}catch(n){Ax(n)}var e=Yw;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}jo=!1};function Gc(t,e){st.call(this),this.h=t||1,this.g=e||ne,this.j=Et(this.qb,this),this.l=Date.now()}it(Gc,st);M=Gc.prototype;M.ga=!1;M.T=null;M.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ut(this,"tick"),this.ga&&(Xf(this),this.start()))}};M.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Xf(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}M.N=function(){Gc.$.N.call(this),Xf(this),delete this.g};function Jf(t,e,n){if(typeof t=="function")n&&(t=Et(t,n));else if(t&&typeof t.handleEvent=="function")t=Et(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ne.setTimeout(t,e||0)}function Jw(t){t.g=Jf(()=>{t.g=null,t.i&&(t.i=!1,Jw(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class bx extends Vr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Jw(this)}N(){super.N(),this.g&&(ne.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wo(t){Vr.call(this),this.h=t,this.g={}}it(Wo,Vr);var Hm=[];function Zw(t,e,n,r){Array.isArray(n)||(n&&(Hm[0]=n.toString()),n=Hm);for(var s=0;s<n.length;s++){var i=Hw(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function eT(t){qf(t.g,function(e,n){this.g.hasOwnProperty(n)&&Kf(e)},t),t.g={}}Wo.prototype.N=function(){Wo.$.N.call(this),eT(this)};Wo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Qc(){this.g=!0}Qc.prototype.Ea=function(){this.g=!1};function Cx(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function Sx(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Gs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+kx(t,n)+(r?" "+r:"")})}function Px(t,e){t.info(function(){return"TIMEOUT: "+e})}Qc.prototype.info=function(){};function kx(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Qf(n)}catch{return e}}var Ns={},Km=null;function Yc(){return Km=Km||new st}Ns.Ta="serverreachability";function tT(t){wt.call(this,Ns.Ta,t)}it(tT,wt);function qo(t){const e=Yc();ut(e,new tT(e))}Ns.STAT_EVENT="statevent";function nT(t,e){wt.call(this,Ns.STAT_EVENT,t),this.stat=e}it(nT,wt);function Pt(t){const e=Yc();ut(e,new nT(e,t))}Ns.Ua="timingevent";function rT(t,e){wt.call(this,Ns.Ua,t),this.size=e}it(rT,wt);function va(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ne.setTimeout(function(){t()},e)}var Xc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},sT={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Zf(){}Zf.prototype.h=null;function zm(t){return t.h||(t.h=t.i())}function iT(){}var Ea={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ep(){wt.call(this,"d")}it(ep,wt);function tp(){wt.call(this,"c")}it(tp,wt);var id;function Jc(){}it(Jc,Zf);Jc.prototype.g=function(){return new XMLHttpRequest};Jc.prototype.i=function(){return{}};id=new Jc;function wa(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Wo(this),this.P=Nx,t=ed?125:void 0,this.V=new Gc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new oT}function oT(){this.i=null,this.g="",this.h=!1}var Nx=45e3,od={},Jl={};M=wa.prototype;M.setTimeout=function(t){this.P=t};function ad(t,e,n){t.L=1,t.v=eu(Jn(e)),t.s=n,t.S=!0,aT(t,null)}function aT(t,e){t.G=Date.now(),Ta(t),t.A=Jn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),gT(n.i,"t",r),t.C=0,n=t.l.J,t.h=new oT,t.g=LT(t.l,n?e:null,!t.s),0<t.O&&(t.M=new bx(Et(t.Pa,t,t.g),t.O)),Zw(t.U,t.g,"readystatechange",t.nb),e=t.I?Ww(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),qo(),Cx(t.j,t.u,t.A,t.m,t.W,t.s)}M.nb=function(t){t=t.target;const e=this.M;e&&An(t)==3?e.l():this.Pa(t)};M.Pa=function(t){try{if(t==this.g)e:{const u=An(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||ed||this.g&&(this.h.h||this.g.ja()||Xm(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?qo(3):qo(2)),Zc(this);var n=this.g.da();this.ca=n;t:if(lT(this)){var r=Xm(this.g);t="";var s=r.length,i=An(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Xr(this),go(this);var o="";break t}this.h.i=new ne.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Sx(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Uo(a)){var c=a;break t}}c=null}if(n=c)Gs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ld(this,n);else{this.i=!1,this.o=3,Pt(12),Xr(this),go(this);break e}}this.S?(cT(this,u,o),ed&&this.i&&u==3&&(Zw(this.U,this.V,"tick",this.mb),this.V.start())):(Gs(this.j,this.m,o,null),ld(this,o)),u==4&&Xr(this),this.i&&!this.J&&(u==4?OT(this.l,this):(this.i=!1,Ta(this)))}else Jx(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Pt(12)):(this.o=0,Pt(13)),Xr(this),go(this)}}}catch{}finally{}};function lT(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function cT(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=Ox(t,n),s==Jl){e==4&&(t.o=4,Pt(14),r=!1),Gs(t.j,t.m,null,"[Incomplete Response]");break}else if(s==od){t.o=4,Pt(15),Gs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Gs(t.j,t.m,s,null),ld(t,s);lT(t)&&s!=Jl&&s!=od&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Pt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),ap(e),e.M=!0,Pt(11))):(Gs(t.j,t.m,n,"[Invalid Chunked Response]"),Xr(t),go(t))}M.mb=function(){if(this.g){var t=An(this.g),e=this.g.ja();this.C<e.length&&(Zc(this),cT(this,t,e),this.i&&t!=4&&Ta(this))}};function Ox(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Jl:(n=Number(e.substring(n,r)),isNaN(n)?od:(r+=1,r+n>e.length?Jl:(e=e.slice(r,r+n),t.C=r+n,e)))}M.cancel=function(){this.J=!0,Xr(this)};function Ta(t){t.Y=Date.now()+t.P,uT(t,t.P)}function uT(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=va(Et(t.lb,t),e)}function Zc(t){t.B&&(ne.clearTimeout(t.B),t.B=null)}M.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Px(this.j,this.A),this.L!=2&&(qo(),Pt(17)),Xr(this),this.o=2,go(this)):uT(this,this.Y-t)};function go(t){t.l.H==0||t.J||OT(t.l,t)}function Xr(t){Zc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Xf(t.V),eT(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function ld(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||cd(n.i,t))){if(!t.K&&cd(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)tc(n),su(n);else break e;op(n),Pt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=va(Et(n.ib,n),6e3));if(1>=yT(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Jr(n,11)}else if((t.K||n.g==t)&&tc(n),!Uo(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=r.i;i.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(np(i,i.h),i.h=null))}if(r.F){const E=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(r.Da=E,Oe(r.I,r.F,E))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=MT(r,r.J?r.pa:null,r.Y),o.K){vT(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Zc(a),Ta(a)),r.g=o}else kT(r);0<n.j.length&&iu(n)}else c[0]!="stop"&&c[0]!="close"||Jr(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Jr(n,7):ip(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}qo(4)}catch{}}function Dx(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(qc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function xx(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(qc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function hT(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(qc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=xx(t),r=Dx(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var dT=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Mx(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function cs(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof cs){this.h=t.h,Zl(this,t.j),this.s=t.s,this.g=t.g,ec(this,t.m),this.l=t.l;var e=t.i,n=new Ho;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Gm(this,n),this.o=t.o}else t&&(e=String(t).match(dT))?(this.h=!1,Zl(this,e[1]||"",!0),this.s=no(e[2]||""),this.g=no(e[3]||"",!0),ec(this,e[4]),this.l=no(e[5]||"",!0),Gm(this,e[6]||"",!0),this.o=no(e[7]||"")):(this.h=!1,this.i=new Ho(null,this.h))}cs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ro(e,Qm,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ro(e,Qm,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ro(n,n.charAt(0)=="/"?Fx:Vx,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ro(n,$x)),t.join("")};function Jn(t){return new cs(t)}function Zl(t,e,n){t.j=n?no(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ec(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Gm(t,e,n){e instanceof Ho?(t.i=e,Bx(t.i,t.h)):(n||(e=ro(e,Ux)),t.i=new Ho(e,t.h))}function Oe(t,e,n){t.i.set(e,n)}function eu(t){return Oe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function no(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ro(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Lx),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Lx(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Qm=/[#\/\?@]/g,Vx=/[#\?:]/g,Fx=/[#\?]/g,Ux=/[#\?@]/g,$x=/#/g;function Ho(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Fr(t){t.g||(t.g=new Map,t.h=0,t.i&&Mx(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=Ho.prototype;M.add=function(t,e){Fr(this),this.i=null,t=Si(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function fT(t,e){Fr(t),e=Si(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function pT(t,e){return Fr(t),e=Si(t,e),t.g.has(e)}M.forEach=function(t,e){Fr(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};M.ta=function(){Fr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};M.Z=function(t){Fr(this);let e=[];if(typeof t=="string")pT(this,t)&&(e=e.concat(this.g.get(Si(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};M.set=function(t,e){return Fr(this),this.i=null,t=Si(this,t),pT(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function gT(t,e,n){fT(t,e),0<n.length&&(t.i=null,t.g.set(Si(t,e),jf(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Si(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Bx(t,e){e&&!t.j&&(Fr(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(fT(this,r),gT(this,s,n))},t)),t.j=e}var jx=class{constructor(t,e){this.g=t,this.map=e}};function mT(t){this.l=t||Wx,ne.PerformanceNavigationTiming?(t=ne.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ne.g&&ne.g.Ka&&ne.g.Ka()&&ne.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Wx=10;function _T(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function yT(t){return t.h?1:t.g?t.g.size:0}function cd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function np(t,e){t.g?t.g.add(e):t.h=e}function vT(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}mT.prototype.cancel=function(){if(this.i=ET(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ET(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return jf(t.i)}var qx=class{stringify(t){return ne.JSON.stringify(t,void 0)}parse(t){return ne.JSON.parse(t,void 0)}};function Hx(){this.g=new qx}function Kx(t,e,n){const r=n||"";try{hT(t,function(s,i){let o=s;_a(s)&&(o=Qf(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function zx(t,e){const n=new Qc;if(ne.Image){const r=new Image;r.onload=Ha(za,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ha(za,n,r,"TestLoadImage: error",!1,e),r.onabort=Ha(za,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ha(za,n,r,"TestLoadImage: timeout",!1,e),ne.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function za(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function tu(t){this.l=t.ec||null,this.j=t.ob||!1}it(tu,Zf);tu.prototype.g=function(){return new nu(this.l,this.j)};tu.prototype.i=function(t){return function(){return t}}({});function nu(t,e){st.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=rp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}it(nu,st);var rp=0;M=nu.prototype;M.open=function(t,e){if(this.readyState!=rp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ko(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||ne).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ia(this)),this.readyState=rp};M.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ko(this)),this.g&&(this.readyState=3,Ko(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ne.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;wT(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function wT(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}M.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ia(this):Ko(this),this.readyState==3&&wT(this)}};M.Za=function(t){this.g&&(this.response=this.responseText=t,Ia(this))};M.Ya=function(t){this.g&&(this.response=t,Ia(this))};M.ka=function(){this.g&&Ia(this)};function Ia(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ko(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ko(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(nu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Gx=ne.JSON.parse;function Be(t){st.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=TT,this.L=this.M=!1}it(Be,st);var TT="",Qx=/^https?$/i,Yx=["POST","PUT"];M=Be.prototype;M.Oa=function(t){this.M=t};M.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():id.g(),this.C=this.u?zm(this.u):zm(id),this.g.onreadystatechange=Et(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Ym(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=ne.FormData&&t instanceof ne.FormData,!(0<=Uw(Yx,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{RT(this),0<this.B&&((this.L=Xx(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Et(this.ua,this)):this.A=Jf(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Ym(this,i)}};function Xx(t){return hi&&typeof t.timeout=="number"&&t.ontimeout!==void 0}M.ua=function(){typeof Bf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ut(this,"timeout"),this.abort(8))};function Ym(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,IT(t),ru(t)}function IT(t){t.F||(t.F=!0,ut(t,"complete"),ut(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ut(this,"complete"),ut(this,"abort"),ru(this))};M.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ru(this,!0)),Be.$.N.call(this)};M.La=function(){this.s||(this.G||this.v||this.l?AT(this):this.kb())};M.kb=function(){AT(this)};function AT(t){if(t.h&&typeof Bf<"u"&&(!t.C[1]||An(t)!=4||t.da()!=2)){if(t.v&&An(t)==4)Jf(t.La,0,t);else if(ut(t,"readystatechange"),An(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(dT)[1]||null;!s&&ne.self&&ne.self.location&&(s=ne.self.location.protocol.slice(0,-1)),r=!Qx.test(s?s.toLowerCase():"")}n=r}if(n)ut(t,"complete"),ut(t,"success");else{t.m=6;try{var i=2<An(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",IT(t)}}finally{ru(t)}}}}function ru(t,e){if(t.g){RT(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ut(t,"ready");try{n.onreadystatechange=r}catch{}}}function RT(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(ne.clearTimeout(t.A),t.A=null)}M.isActive=function(){return!!this.g};function An(t){return t.g?t.g.readyState:0}M.da=function(){try{return 2<An(this)?this.g.status:-1}catch{return-1}};M.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Gx(e)}};function Xm(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case TT:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Jx(t){const e={};t=(t.g&&2<=An(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Uo(t[r]))continue;var n=Ix(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}mx(e,function(r){return r.join(", ")})}M.Ia=function(){return this.m};M.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function bT(t){let e="";return qf(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function sp(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=bT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Oe(t,e,n))}function ji(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function CT(t){this.Ga=0,this.j=[],this.l=new Qc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ji("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ji("baseRetryDelayMs",5e3,t),this.hb=ji("retryDelaySeedMs",1e4,t),this.eb=ji("forwardChannelMaxRetries",2,t),this.xa=ji("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new mT(t&&t.concurrentRequestLimit),this.Ja=new Hx,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}M=CT.prototype;M.ra=8;M.H=1;function ip(t){if(ST(t),t.H==3){var e=t.W++,n=Jn(t.I);if(Oe(n,"SID",t.K),Oe(n,"RID",e),Oe(n,"TYPE","terminate"),Aa(t,n),e=new wa(t,t.l,e),e.L=2,e.v=eu(Jn(n)),n=!1,ne.navigator&&ne.navigator.sendBeacon)try{n=ne.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&ne.Image&&(new Image().src=e.v,n=!0),n||(e.g=LT(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ta(e)}xT(t)}function su(t){t.g&&(ap(t),t.g.cancel(),t.g=null)}function ST(t){su(t),t.u&&(ne.clearTimeout(t.u),t.u=null),tc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ne.clearTimeout(t.m),t.m=null)}function iu(t){if(!_T(t.i)&&!t.m){t.m=!0;var e=t.Na;Bo||Xw(),jo||(Bo(),jo=!0),Yf.add(e,t),t.C=0}}function Zx(t,e){return yT(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=va(Et(t.Na,t,e),DT(t,t.C)),t.C++,!0)}M.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new wa(this,this.l,t);let i=this.s;if(this.U&&(i?(i=Ww(i),qw(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=PT(this,s,e),n=Jn(this.I),Oe(n,"RID",t),Oe(n,"CVER",22),this.F&&Oe(n,"X-HTTP-Session-Id",this.F),Aa(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(bT(i)))+"&"+e:this.o&&sp(n,this.o,i)),np(this.i,s),this.bb&&Oe(n,"TYPE","init"),this.P?(Oe(n,"$req",e),Oe(n,"SID","null"),s.aa=!0,ad(s,n,null)):ad(s,n,e),this.H=2}}else this.H==3&&(t?Jm(this,t):this.j.length==0||_T(this.i)||Jm(this))};function Jm(t,e){var n;e?n=e.m:n=t.W++;const r=Jn(t.I);Oe(r,"SID",t.K),Oe(r,"RID",n),Oe(r,"AID",t.V),Aa(t,r),t.o&&t.s&&sp(r,t.o,t.s),n=new wa(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=PT(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),np(t.i,n),ad(n,r,e)}function Aa(t,e){t.na&&qf(t.na,function(n,r){Oe(e,r,n)}),t.h&&hT({},function(n,r){Oe(e,r,n)})}function PT(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Et(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const u=s[l].map;if(c-=i,0>c)i=Math.max(0,s[l].g-100),a=!1;else try{Kx(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function kT(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Bo||Xw(),jo||(Bo(),jo=!0),Yf.add(e,t),t.A=0}}function op(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=va(Et(t.Ma,t),DT(t,t.A)),t.A++,!0)}M.Ma=function(){if(this.u=null,NT(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=va(Et(this.jb,this),t)}};M.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Pt(10),su(this),NT(this))};function ap(t){t.B!=null&&(ne.clearTimeout(t.B),t.B=null)}function NT(t){t.g=new wa(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Jn(t.wa);Oe(e,"RID","rpc"),Oe(e,"SID",t.K),Oe(e,"AID",t.V),Oe(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Oe(e,"TO",t.qa),Oe(e,"TYPE","xmlhttp"),Aa(t,e),t.o&&t.s&&sp(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=eu(Jn(e)),n.s=null,n.S=!0,aT(n,t)}M.ib=function(){this.v!=null&&(this.v=null,su(this),op(this),Pt(19))};function tc(t){t.v!=null&&(ne.clearTimeout(t.v),t.v=null)}function OT(t,e){var n=null;if(t.g==e){tc(t),ap(t),t.g=null;var r=2}else if(cd(t.i,e))n=e.F,vT(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=Yc(),ut(r,new rT(r,n)),iu(t)}else kT(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&Zx(t,e)||r==2&&op(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Jr(t,5);break;case 4:Jr(t,10);break;case 3:Jr(t,6);break;default:Jr(t,2)}}}function DT(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Jr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Et(t.pb,t);n||(n=new cs("//www.google.com/images/cleardot.gif"),ne.location&&ne.location.protocol=="http"||Zl(n,"https"),eu(n)),zx(n.toString(),r)}else Pt(2);t.H=0,t.h&&t.h.za(e),xT(t),ST(t)}M.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Pt(2)):(this.l.info("Failed to ping google.com"),Pt(1))};function xT(t){if(t.H=0,t.ma=[],t.h){const e=ET(t.i);(e.length!=0||t.j.length!=0)&&(jm(t.ma,e),jm(t.ma,t.j),t.i.i.length=0,jf(t.j),t.j.length=0),t.h.ya()}}function MT(t,e,n){var r=n instanceof cs?Jn(n):new cs(n);if(r.g!="")e&&(r.g=e+"."+r.g),ec(r,r.m);else{var s=ne.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new cs(null);r&&Zl(i,r),e&&(i.g=e),s&&ec(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Oe(r,n,e),Oe(r,"VER",t.ra),Aa(t,r),r}function LT(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Be(new tu({ob:!0})):new Be(t.va),e.Oa(t.J),e}M.isActive=function(){return!!this.h&&this.h.isActive(this)};function VT(){}M=VT.prototype;M.Ba=function(){};M.Aa=function(){};M.za=function(){};M.ya=function(){};M.isActive=function(){return!0};M.Va=function(){};function nc(){if(hi&&!(10<=Number(dx)))throw Error("Environmental error: no available transport.")}nc.prototype.g=function(t,e){return new Bt(t,e)};function Bt(t,e){st.call(this),this.g=new CT(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Uo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Uo(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Pi(this)}it(Bt,st);Bt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Pt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=MT(t,null,t.Y),iu(t)};Bt.prototype.close=function(){ip(this.g)};Bt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Qf(t),t=n);e.j.push(new jx(e.fb++,t)),e.H==3&&iu(e)};Bt.prototype.N=function(){this.g.h=null,delete this.j,ip(this.g),delete this.g,Bt.$.N.call(this)};function FT(t){ep.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}it(FT,ep);function UT(){tp.call(this),this.status=1}it(UT,tp);function Pi(t){this.g=t}it(Pi,VT);Pi.prototype.Ba=function(){ut(this.g,"a")};Pi.prototype.Aa=function(t){ut(this.g,new FT(t))};Pi.prototype.za=function(t){ut(this.g,new UT)};Pi.prototype.ya=function(){ut(this.g,"b")};function e1(){this.blockSize=-1}function dn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}it(dn,e1);dn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function eh(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}dn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)eh(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){eh(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){eh(this,r),s=0;break}}this.h=s,this.i+=e};dn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Ae(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var t1={};function lp(t){return-128<=t&&128>t?cx(t,function(e){return new Ae([e|0],0>e?-1:0)}):new Ae([t|0],0>t?-1:0)}function Rn(t){if(isNaN(t)||!isFinite(t))return ni;if(0>t)return at(Rn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=ud;return new Ae(e,0)}function $T(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return at($T(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Rn(Math.pow(e,8)),r=ni,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Rn(Math.pow(e,i)),r=r.R(i).add(Rn(o))):(r=r.R(n),r=r.add(Rn(o)))}return r}var ud=4294967296,ni=lp(0),hd=lp(1),Zm=lp(16777216);M=Ae.prototype;M.ea=function(){if(zt(this))return-at(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:ud+r)*e,e*=ud}return t};M.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(zn(this))return"0";if(zt(this))return"-"+at(this).toString(t);for(var e=Rn(Math.pow(t,6)),n=this,r="";;){var s=sc(n,e).g;n=rc(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,zn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};M.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function zn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function zt(t){return t.h==-1}M.X=function(t){return t=rc(this,t),zt(t)?-1:zn(t)?0:1};function at(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Ae(n,~t.h).add(hd)}M.abs=function(){return zt(this)?at(this):this};M.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new Ae(n,n[n.length-1]&-2147483648?-1:0)};function rc(t,e){return t.add(at(e))}M.R=function(t){if(zn(this)||zn(t))return ni;if(zt(this))return zt(t)?at(this).R(at(t)):at(at(this).R(t));if(zt(t))return at(this.R(at(t)));if(0>this.X(Zm)&&0>t.X(Zm))return Rn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,l=t.D(s)&65535;n[2*r+2*s]+=o*l,Ga(n,2*r+2*s),n[2*r+2*s+1]+=i*l,Ga(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Ga(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Ga(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Ae(n,0)};function Ga(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Wi(t,e){this.g=t,this.h=e}function sc(t,e){if(zn(e))throw Error("division by zero");if(zn(t))return new Wi(ni,ni);if(zt(t))return e=sc(at(t),e),new Wi(at(e.g),at(e.h));if(zt(e))return e=sc(t,at(e)),new Wi(at(e.g),e.h);if(30<t.g.length){if(zt(t)||zt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=hd,r=e;0>=r.X(t);)n=e_(n),r=e_(r);var s=Vs(n,1),i=Vs(r,1);for(r=Vs(r,2),n=Vs(n,2);!zn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Vs(r,1),n=Vs(n,1)}return e=rc(t,s.R(e)),new Wi(s,e)}for(s=ni;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Rn(n),o=i.R(e);zt(o)||0<o.X(t);)n-=r,i=Rn(n),o=i.R(e);zn(i)&&(i=hd),s=s.add(i),t=rc(t,o)}return new Wi(s,t)}M.gb=function(t){return sc(this,t).h};M.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Ae(n,this.h&t.h)};M.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Ae(n,this.h|t.h)};M.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Ae(n,this.h^t.h)};function e_(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Ae(n,t.h)}function Vs(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Ae(s,t.h)}nc.prototype.createWebChannel=nc.prototype.g;Bt.prototype.send=Bt.prototype.u;Bt.prototype.open=Bt.prototype.m;Bt.prototype.close=Bt.prototype.close;Xc.NO_ERROR=0;Xc.TIMEOUT=8;Xc.HTTP_ERROR=6;sT.COMPLETE="complete";iT.EventType=Ea;Ea.OPEN="a";Ea.CLOSE="b";Ea.ERROR="c";Ea.MESSAGE="d";st.prototype.listen=st.prototype.O;Be.prototype.listenOnce=Be.prototype.P;Be.prototype.getLastError=Be.prototype.Sa;Be.prototype.getLastErrorCode=Be.prototype.Ia;Be.prototype.getStatus=Be.prototype.da;Be.prototype.getResponseJson=Be.prototype.Wa;Be.prototype.getResponseText=Be.prototype.ja;Be.prototype.send=Be.prototype.ha;Be.prototype.setWithCredentials=Be.prototype.Oa;dn.prototype.digest=dn.prototype.l;dn.prototype.reset=dn.prototype.reset;dn.prototype.update=dn.prototype.j;Ae.prototype.add=Ae.prototype.add;Ae.prototype.multiply=Ae.prototype.R;Ae.prototype.modulo=Ae.prototype.gb;Ae.prototype.compare=Ae.prototype.X;Ae.prototype.toNumber=Ae.prototype.ea;Ae.prototype.toString=Ae.prototype.toString;Ae.prototype.getBits=Ae.prototype.D;Ae.fromNumber=Rn;Ae.fromString=$T;var n1=function(){return new nc},r1=function(){return Yc()},th=Xc,s1=sT,i1=Ns,t_={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Qa=iT,o1=Be,a1=dn,ri=Ae;const n_="@firebase/firestore";/**
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
 */class ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
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
 */let ki="10.5.0";/**
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
 */const Es=new aa("@firebase/firestore");function qi(){return Es.logLevel}function H(t,...e){if(Es.logLevel<=ue.DEBUG){const n=e.map(cp);Es.debug(`Firestore (${ki}): ${t}`,...n)}}function Zn(t,...e){if(Es.logLevel<=ue.ERROR){const n=e.map(cp);Es.error(`Firestore (${ki}): ${t}`,...n)}}function di(t,...e){if(Es.logLevel<=ue.WARN){const n=e.map(cp);Es.warn(`Firestore (${ki}): ${t}`,...n)}}function cp(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${ki}) INTERNAL ASSERTION FAILED: `+t;throw Zn(e),new Error(e)}function xe(t,e){t||ee()}function oe(t,e){return t}/**
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
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Ln{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class us{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class BT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class l1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ft.UNAUTHENTICATED))}shutdown(){}}class c1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class u1{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new us;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new us,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new us)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(xe(typeof r.accessToken=="string"),new BT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return xe(e===null||typeof e=="string"),new ft(e)}}class h1{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class d1{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new h1(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class f1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class p1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(xe(typeof n.token=="string"),this.R=n.token,new f1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class jT{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=g1(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ve(t,e){return t<e?-1:t>e?1:0}function fi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ie{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ie(e)}static min(){return new ie(new Je(0,0))}static max(){return new ie(new Je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class zo{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(),r===void 0?r=e.length-n:r>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return zo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof zo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class De extends zo{construct(e,n,r){return new De(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new De(n)}static emptyPath(){return new De([])}}const m1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends zo{construct(e,n,r){return new ct(e,n,r)}static isValidIdentifier(e){return m1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ct(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new B(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new B(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new B(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new B(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ct(n)}static emptyPath(){return new ct([])}}/**
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
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(De.fromString(e))}static fromName(e){return new Q(De.fromString(e).popFirst(5))}static empty(){return new Q(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return De.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new De(e.slice()))}}function _1(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ie.fromTimestamp(r===1e9?new Je(n+1,0):new Je(n,r));return new kr(s,Q.empty(),e)}function y1(t){return new kr(t.readTime,t.key,-1)}class kr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new kr(ie.min(),Q.empty(),-1)}static max(){return new kr(ie.max(),Q.empty(),-1)}}function v1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class w1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ra(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==E1)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,r)=>{n(e)})}static reject(e){return new b((n,r)=>{r(e)})}static waitFor(e){return new b((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=b.resolve(!1);for(const r of e)n=n.next(s=>s?b.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new b((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new b((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function ba(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class up{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}up.ae=-1;function ou(t){return t==null}function ic(t){return t===0&&1/t==-1/0}function T1(t){return typeof t=="number"&&Number.isInteger(t)&&!ic(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function r_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ni(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function WT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ue{constructor(e,n){this.comparator=e,this.root=n||ot.EMPTY}insert(e,n){return new Ue(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(e){return new Ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ot.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ya(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ya(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ya(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ya(this.root,e,this.comparator,!0)}}class Ya{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ot{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ot.RED,this.left=s??ot.EMPTY,this.right=i??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ot(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ot.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ot(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ht{constructor(e){this.comparator=e,this.data=new Ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new s_(this.data.getIterator())}getIteratorFrom(e){return new s_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ht)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ht(this.comparator);return n.data=e,n}}class s_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.fields=e,e.sort(ct.comparator)}static empty(){return new an([])}unionWith(e){let n=new ht(ct.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new an(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return fi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class qT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new qT("Invalid base64 string: "+i):i}}(e);return new At(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new At(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}At.EMPTY_BYTE_STRING=new At("");const I1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Nr(t){if(xe(!!t),typeof t=="string"){let e=0;const n=I1.exec(t);if(xe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ke(t.seconds),nanos:Ke(t.nanos)}}function Ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ws(t){return typeof t=="string"?At.fromBase64String(t):At.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function dp(t){const e=t.mapValue.fields.__previous_value__;return hp(e)?dp(e):e}function Go(t){const e=Nr(t.mapValue.fields.__local_write_time__.timestampValue);return new Je(e.seconds,e.nanos)}/**
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
 */class A1{constructor(e,n,r,s,i,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Qo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Qo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Qo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ts(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?hp(t)?4:R1(t)?9007199254740991:10:ee()}function Mn(t,e){if(t===e)return!0;const n=Ts(t);if(n!==Ts(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Go(t).isEqual(Go(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Nr(s.timestampValue),a=Nr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ws(s.bytesValue).isEqual(ws(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ke(s.geoPointValue.latitude)===Ke(i.geoPointValue.latitude)&&Ke(s.geoPointValue.longitude)===Ke(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ke(s.integerValue)===Ke(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ke(s.doubleValue),a=Ke(i.doubleValue);return o===a?ic(o)===ic(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return fi(t.arrayValue.values||[],e.arrayValue.values||[],Mn);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(r_(o)!==r_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Mn(o[l],a[l])))return!1;return!0}(t,e);default:return ee()}}function Yo(t,e){return(t.values||[]).find(n=>Mn(n,e))!==void 0}function pi(t,e){if(t===e)return 0;const n=Ts(t),r=Ts(e);if(n!==r)return ve(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Ke(i.integerValue||i.doubleValue),l=Ke(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return i_(t.timestampValue,e.timestampValue);case 4:return i_(Go(t),Go(e));case 5:return ve(t.stringValue,e.stringValue);case 6:return function(i,o){const a=ws(i),l=ws(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=ve(a[c],l[c]);if(u!==0)return u}return ve(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ve(Ke(i.latitude),Ke(o.latitude));return a!==0?a:ve(Ke(i.longitude),Ke(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=pi(a[c],l[c]);if(u)return u}return ve(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Xa.mapValue&&o===Xa.mapValue)return 0;if(i===Xa.mapValue)return 1;if(o===Xa.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=ve(l[h],u[h]);if(d!==0)return d;const p=pi(a[l[h]],c[u[h]]);if(p!==0)return p}return ve(l.length,u.length)}(t.mapValue,e.mapValue);default:throw ee()}}function i_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=Nr(t),r=Nr(e),s=ve(n.seconds,r.seconds);return s!==0?s:ve(n.nanos,r.nanos)}function gi(t){return dd(t)}function dd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Nr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ws(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=dd(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${dd(n.fields[o])}`;return s+"}"}(t.mapValue):ee()}function o_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function fd(t){return!!t&&"integerValue"in t}function fp(t){return!!t&&"arrayValue"in t}function a_(t){return!!t&&"nullValue"in t}function l_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function fl(t){return!!t&&"mapValue"in t}function mo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ni(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=mo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=mo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function R1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Gt{constructor(e){this.value=e}static empty(){return new Gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!fl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=mo(n)}setAll(e){let n=ct.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=mo(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());fl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Mn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];fl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ni(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Gt(mo(this.value))}}function HT(t){const e=[];return Ni(t.fields,(n,r)=>{const s=new ct([n]);if(fl(r)){const i=HT(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new an(e)}/**
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
 */class _t{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new _t(e,0,ie.min(),ie.min(),ie.min(),Gt.empty(),0)}static newFoundDocument(e,n,r,s){return new _t(e,1,n,ie.min(),r,s,0)}static newNoDocument(e,n){return new _t(e,2,n,ie.min(),ie.min(),Gt.empty(),0)}static newUnknownDocument(e,n){return new _t(e,3,n,ie.min(),ie.min(),Gt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class oc{constructor(e,n){this.position=e,this.inclusive=n}}function c_(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=pi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function u_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Mn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Xo{constructor(e,n="asc"){this.field=e,this.dir=n}}function b1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class KT{}class ze extends KT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new S1(e,n,r):n==="array-contains"?new N1(e,r):n==="in"?new O1(e,r):n==="not-in"?new D1(e,r):n==="array-contains-any"?new x1(e,r):new ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new P1(e,r):new k1(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(pi(n,this.value)):n!==null&&Ts(this.value)===Ts(n)&&this.matchesComparison(pi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class fn extends KT{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new fn(e,n)}matches(e){return zT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function zT(t){return t.op==="and"}function GT(t){return C1(t)&&zT(t)}function C1(t){for(const e of t.filters)if(e instanceof fn)return!1;return!0}function pd(t){if(t instanceof ze)return t.field.canonicalString()+t.op.toString()+gi(t.value);if(GT(t))return t.filters.map(e=>pd(e)).join(",");{const e=t.filters.map(n=>pd(n)).join(",");return`${t.op}(${e})`}}function QT(t,e){return t instanceof ze?function(r,s){return s instanceof ze&&r.op===s.op&&r.field.isEqual(s.field)&&Mn(r.value,s.value)}(t,e):t instanceof fn?function(r,s){return s instanceof fn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&QT(o,s.filters[a]),!0):!1}(t,e):void ee()}function YT(t){return t instanceof ze?function(n){return`${n.field.canonicalString()} ${n.op} ${gi(n.value)}`}(t):t instanceof fn?function(n){return n.op.toString()+" {"+n.getFilters().map(YT).join(" ,")+"}"}(t):"Filter"}class S1 extends ze{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class P1 extends ze{constructor(e,n){super(e,"in",n),this.keys=XT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class k1 extends ze{constructor(e,n){super(e,"not-in",n),this.keys=XT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function XT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class N1 extends ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return fp(n)&&Yo(n.arrayValue,this.value)}}class O1 extends ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Yo(this.value.arrayValue,n)}}class D1 extends ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(Yo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Yo(this.value.arrayValue,n)}}class x1 extends ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!fp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Yo(this.value.arrayValue,r))}}/**
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
 */class M1{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.le=null}}function h_(t,e=null,n=[],r=[],s=null,i=null,o=null){return new M1(t,e,n,r,s,i,o)}function pp(t){const e=oe(t);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>pd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ou(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>gi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>gi(r)).join(",")),e.le=n}return e.le}function gp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!b1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!QT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!u_(t.startAt,e.startAt)&&u_(t.endAt,e.endAt)}function gd(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Oi{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.he=null,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function L1(t,e,n,r,s,i,o,a){return new Oi(t,e,n,r,s,i,o,a)}function mp(t){return new Oi(t)}function d_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function JT(t){return t.collectionGroup!==null}function _o(t){const e=oe(t);if(e.he===null){e.he=[];const n=new Set;for(const i of e.explicitOrderBy)e.he.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ht(ct.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.he.push(new Xo(i,r))}),n.has(ct.keyField().canonicalString())||e.he.push(new Xo(ct.keyField(),r))}return e.he}function kn(t){const e=oe(t);return e.Pe||(e.Pe=V1(e,_o(t))),e.Pe}function V1(t,e){if(t.limitType==="F")return h_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Xo(s.field,i)});const n=t.endAt?new oc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new oc(t.startAt.position,t.startAt.inclusive):null;return h_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function md(t,e){const n=t.filters.concat([e]);return new Oi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ac(t,e,n){return new Oi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function au(t,e){return gp(kn(t),kn(e))&&t.limitType===e.limitType}function ZT(t){return`${pp(kn(t))}|lt:${t.limitType}`}function Ws(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>YT(s)).join(", ")}]`),ou(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>gi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>gi(s)).join(",")),`Target(${r})`}(kn(t))}; limitType=${t.limitType})`}function lu(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of _o(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const c=c_(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,_o(r),s)||r.endAt&&!function(o,a,l){const c=c_(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,_o(r),s))}(t,e)}function F1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function eI(t){return(e,n)=>{let r=!1;for(const s of _o(t)){const i=U1(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function U1(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),c=a.data.field(i);return l!==null&&c!==null?pi(l,c):ee()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee()}}/**
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
 */class Di{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ni(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return WT(this.inner)}size(){return this.innerSize}}/**
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
 */const $1=new Ue(Q.comparator);function er(){return $1}const tI=new Ue(Q.comparator);function so(...t){let e=tI;for(const n of t)e=e.insert(n.key,n);return e}function nI(t){let e=tI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Zr(){return yo()}function rI(){return yo()}function yo(){return new Di(t=>t.toString(),(t,e)=>t.isEqual(e))}const B1=new Ue(Q.comparator),j1=new ht(Q.comparator);function he(...t){let e=j1;for(const n of t)e=e.add(n);return e}const W1=new ht(ve);function q1(){return W1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ic(e)?"-0":e}}function iI(t){return{integerValue:""+t}}function H1(t,e){return T1(e)?iI(e):sI(t,e)}/**
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
 */class cu{constructor(){this._=void 0}}function K1(t,e,n){return t instanceof lc?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&hp(i)&&(i=dp(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Jo?aI(t,e):t instanceof Zo?lI(t,e):function(s,i){const o=oI(s,i),a=f_(o)+f_(s.Te);return fd(o)&&fd(s.Te)?iI(a):sI(s.serializer,a)}(t,e)}function z1(t,e,n){return t instanceof Jo?aI(t,e):t instanceof Zo?lI(t,e):n}function oI(t,e){return t instanceof cc?function(r){return fd(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class lc extends cu{}class Jo extends cu{constructor(e){super(),this.elements=e}}function aI(t,e){const n=cI(e);for(const r of t.elements)n.some(s=>Mn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Zo extends cu{constructor(e){super(),this.elements=e}}function lI(t,e){let n=cI(e);for(const r of t.elements)n=n.filter(s=>!Mn(s,r));return{arrayValue:{values:n}}}class cc extends cu{constructor(e,n){super(),this.serializer=e,this.Te=n}}function f_(t){return Ke(t.integerValue||t.doubleValue)}function cI(t){return fp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function G1(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Jo&&s instanceof Jo||r instanceof Zo&&s instanceof Zo?fi(r.elements,s.elements,Mn):r instanceof cc&&s instanceof cc?Mn(r.Te,s.Te):r instanceof lc&&s instanceof lc}(t.transform,e.transform)}class Q1{constructor(e,n){this.version=e,this.transformResults=n}}class Yn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Yn}static exists(e){return new Yn(void 0,e)}static updateTime(e){return new Yn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function pl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class uu{}function uI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new dI(t.key,Yn.none()):new Ca(t.key,t.data,Yn.none());{const n=t.data,r=Gt.empty();let s=new ht(ct.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Os(t.key,r,new an(s.toArray()),Yn.none())}}function Y1(t,e,n){t instanceof Ca?function(s,i,o){const a=s.value.clone(),l=g_(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Os?function(s,i,o){if(!pl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=g_(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(hI(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function vo(t,e,n,r){return t instanceof Ca?function(i,o,a,l){if(!pl(i.precondition,o))return a;const c=i.value.clone(),u=m_(i.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Os?function(i,o,a,l){if(!pl(i.precondition,o))return a;const c=m_(i.fieldTransforms,l,o),u=o.data;return u.setAll(hI(i)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return pl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function X1(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=oI(r.transform,s||null);i!=null&&(n===null&&(n=Gt.empty()),n.set(r.field,i))}return n||null}function p_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&fi(r,s,(i,o)=>G1(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ca extends uu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Os extends uu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function hI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function g_(t,e,n){const r=new Map;xe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,z1(o,a,n[s]))}return r}function m_(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,K1(i,o,e))}return r}class dI extends uu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class J1 extends uu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Z1{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Y1(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=vo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=vo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=rI();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=uI(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ie.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),he())}isEqual(e){return this.batchId===e.batchId&&fi(this.mutations,e.mutations,(n,r)=>p_(n,r))&&fi(this.baseMutations,e.baseMutations,(n,r)=>p_(n,r))}}class _p{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){xe(e.mutations.length===r.length);let s=function(){return B1}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new _p(e,n,r,s)}}/**
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
 */class eM{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class tM{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var He,pe;function nM(t){switch(t){default:return ee();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function fI(t){if(t===void 0)return Zn("GRPC error has no .code"),I.UNKNOWN;switch(t){case He.OK:return I.OK;case He.CANCELLED:return I.CANCELLED;case He.UNKNOWN:return I.UNKNOWN;case He.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case He.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case He.INTERNAL:return I.INTERNAL;case He.UNAVAILABLE:return I.UNAVAILABLE;case He.UNAUTHENTICATED:return I.UNAUTHENTICATED;case He.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case He.NOT_FOUND:return I.NOT_FOUND;case He.ALREADY_EXISTS:return I.ALREADY_EXISTS;case He.PERMISSION_DENIED:return I.PERMISSION_DENIED;case He.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case He.ABORTED:return I.ABORTED;case He.OUT_OF_RANGE:return I.OUT_OF_RANGE;case He.UNIMPLEMENTED:return I.UNIMPLEMENTED;case He.DATA_LOSS:return I.DATA_LOSS;default:return ee()}}(pe=He||(He={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function rM(){return new TextEncoder}/**
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
 */const sM=new ri([4294967295,4294967295],0);function __(t){const e=rM().encode(t),n=new a1;return n.update(e),new Uint8Array(n.digest())}function y_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ri([n,r],0),new ri([s,i],0)]}class yp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new io(`Invalid padding: ${n}`);if(r<0)throw new io(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new io(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new io(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=ri.fromNumber(this.Ee)}Ae(e,n,r){let s=e.add(n.multiply(ri.fromNumber(r)));return s.compare(sM)===1&&(s=new ri([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ee===0)return!1;const n=__(e),[r,s]=y_(n);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);if(!this.Re(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new yp(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ee===0)return;const n=__(e),[r,s]=y_(n);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);this.Ve(o)}}Ve(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class io extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class hu{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Sa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new hu(ie.min(),s,new Ue(ve),er(),he())}}class Sa{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Sa(r,n,he(),he(),he())}}/**
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
 */class gl{constructor(e,n,r,s){this.me=e,this.removedTargetIds=n,this.key=r,this.fe=s}}class pI{constructor(e,n){this.targetId=e,this.ge=n}}class gI{constructor(e,n,r=At.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class v_{constructor(){this.pe=0,this.ye=w_(),this.we=At.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get Ce(){return this.be}ve(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=he(),n=he(),r=he();return this.ye.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ee()}}),new Sa(this.we,this.Se,e,n,r)}Me(){this.be=!1,this.ye=w_()}xe(e,n){this.be=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1}Le(){this.be=!0,this.Se=!0}}class iM{constructor(e){this.ke=e,this.qe=new Map,this.Qe=er(),this.Ke=E_(),this.$e=new Ue(ve)}Ue(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.We(n,e.fe):this.Ge(n,e.key,e.fe);for(const n of e.removedTargetIds)this.Ge(n,e.key,e.fe)}ze(e){this.forEachTarget(e,n=>{const r=this.je(n);switch(e.state){case 0:this.He(n)&&r.ve(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.ve(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.He(n)&&(r.Le(),r.ve(e.resumeToken));break;case 4:this.He(n)&&(this.Je(n),r.ve(e.resumeToken));break;default:ee()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((r,s)=>{this.He(s)&&n(s)})}Ye(e){const n=e.targetId,r=e.ge.count,s=this.Ze(n);if(s){const i=s.target;if(gd(i))if(r===0){const o=new Q(i.path);this.Ge(n,o,_t.newNoDocument(o,ie.min()))}else xe(r===1);else{const o=this.Xe(n);if(o!==r){const a=this.et(e),l=a?this.tt(a,e,o):1;if(l!==0){this.Je(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.$e=this.$e.insert(n,c)}}}}}et(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=ws(r).toUint8Array()}catch(l){if(l instanceof qT)return di("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new yp(o,s,i)}catch(l){return di(l instanceof io?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ee===0?null:a}tt(e,n,r){return n.ge.count===r-this.it(e,n.targetId)?0:2}it(e,n){const r=this.ke.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.ke.rt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.Ge(n,i,null),s++)}),s}st(e){const n=new Map;this.qe.forEach((i,o)=>{const a=this.Ze(o);if(a){if(i.current&&gd(a.target)){const l=new Q(a.target.path);this.Qe.get(l)!==null||this.ot(o,l)||this.Ge(o,l,_t.newNoDocument(l,e))}i.Ce&&(n.set(o,i.Fe()),i.Me())}});let r=he();this.Ke.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ze(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.Qe.forEach((i,o)=>o.setReadTime(e));const s=new hu(e,n,this.$e,this.Qe,r);return this.Qe=er(),this.Ke=E_(),this.$e=new Ue(ve),s}We(e,n){if(!this.He(e))return;const r=this.ot(e,n.key)?2:0;this.je(e).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.Ke=this.Ke.insert(n.key,this._t(n.key).add(e))}Ge(e,n,r){if(!this.He(e))return;const s=this.je(e);this.ot(e,n)?s.xe(n,1):s.Oe(n),this.Ke=this.Ke.insert(n,this._t(n).delete(e)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(e){this.qe.delete(e)}Xe(e){const n=this.je(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.je(e).Ne()}je(e){let n=this.qe.get(e);return n||(n=new v_,this.qe.set(e,n)),n}_t(e){let n=this.Ke.get(e);return n||(n=new ht(ve),this.Ke=this.Ke.insert(e,n)),n}He(e){const n=this.Ze(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Ze(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.ut(e)}Je(e){this.qe.set(e,new v_),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.Ge(e,n,null)})}ot(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function E_(){return new Ue(Q.comparator)}function w_(){return new Ue(Q.comparator)}const oM=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),aM=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),lM=(()=>({and:"AND",or:"OR"}))();class cM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function _d(t,e){return t.useProto3Json||ou(e)?e:{value:e}}function uc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function mI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function uM(t,e){return uc(t,e.toTimestamp())}function Nn(t){return xe(!!t),ie.fromTimestamp(function(n){const r=Nr(n);return new Je(r.seconds,r.nanos)}(t))}function vp(t,e){return function(r){return new De(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function _I(t){const e=De.fromString(t);return xe(wI(e)),e}function yd(t,e){return vp(t.databaseId,e.path)}function nh(t,e){const n=_I(e);if(n.get(1)!==t.databaseId.projectId)throw new B(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(yI(n))}function vd(t,e){return vp(t.databaseId,e)}function hM(t){const e=_I(t);return e.length===4?De.emptyPath():yI(e)}function Ed(t){return new De(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function yI(t){return xe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function T_(t,e,n){return{name:yd(t,e),fields:n.value.mapValue.fields}}function dM(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(xe(u===void 0||typeof u=="string"),At.fromBase64String(u||"")):(xe(u===void 0||u instanceof Uint8Array),At.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?I.UNKNOWN:fI(c.code);return new B(u,c.message||"")}(o);n=new gI(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=nh(t,r.document.name),i=Nn(r.document.updateTime),o=r.document.createTime?Nn(r.document.createTime):ie.min(),a=new Gt({mapValue:{fields:r.document.fields}}),l=_t.newFoundDocument(s,i,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new gl(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=nh(t,r.document),i=r.readTime?Nn(r.readTime):ie.min(),o=_t.newNoDocument(s,i),a=r.removedTargetIds||[];n=new gl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=nh(t,r.document),i=r.removedTargetIds||[];n=new gl([],i,s,null)}else{if(!("filter"in e))return ee();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new tM(s,i),a=r.targetId;n=new pI(a,o)}}return n}function fM(t,e){let n;if(e instanceof Ca)n={update:T_(t,e.key,e.value)};else if(e instanceof dI)n={delete:yd(t,e.key)};else if(e instanceof Os)n={update:T_(t,e.key,e.data),updateMask:TM(e.fieldMask)};else{if(!(e instanceof J1))return ee();n={verify:yd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof lc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Jo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Zo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof cc)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw ee()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:uM(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee()}(t,e.precondition)),n}function pM(t,e){return t&&t.length>0?(xe(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Nn(s.updateTime):Nn(i);return o.isEqual(ie.min())&&(o=Nn(i)),new Q1(o,s.transformResults||[])}(n,e))):[]}function gM(t,e){return{documents:[vd(t,e.path)]}}function mM(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=vd(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=vd(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(l){if(l.length!==0)return EI(fn.create(l,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:qs(h.field),direction:vM(h.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=_d(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function _M(t){let e=hM(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){xe(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=vI(h);return d instanceof fn&&GT(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(m){return new Xo(Hs(m.field),function(y){switch(y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(m.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,ou(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,p=h.values||[];return new oc(p,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,p=h.values||[];return new oc(p,d)}(n.endAt)),L1(e,s,o,i,a,"F",l,c)}function yM(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function vI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Hs(n.unaryFilter.field);return ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Hs(n.unaryFilter.field);return ze.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Hs(n.unaryFilter.field);return ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Hs(n.unaryFilter.field);return ze.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}(t):t.fieldFilter!==void 0?function(n){return ze.create(Hs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return fn.create(n.compositeFilter.filters.map(r=>vI(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ee()}}(n.compositeFilter.op))}(t):ee()}function vM(t){return oM[t]}function EM(t){return aM[t]}function wM(t){return lM[t]}function qs(t){return{fieldPath:t.canonicalString()}}function Hs(t){return ct.fromServerFormat(t.fieldPath)}function EI(t){return t instanceof ze?function(n){if(n.op==="=="){if(l_(n.value))return{unaryFilter:{field:qs(n.field),op:"IS_NAN"}};if(a_(n.value))return{unaryFilter:{field:qs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(l_(n.value))return{unaryFilter:{field:qs(n.field),op:"IS_NOT_NAN"}};if(a_(n.value))return{unaryFilter:{field:qs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qs(n.field),op:EM(n.op),value:n.value}}}(t):t instanceof fn?function(n){const r=n.getFilters().map(s=>EI(s));return r.length===1?r[0]:{compositeFilter:{op:wM(n.op),filters:r}}}(t):ee()}function TM(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function wI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class _r{constructor(e,n,r,s,i=ie.min(),o=ie.min(),a=At.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new _r(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class IM{constructor(e){this.ct=e}}function AM(t){const e=_M({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ac(e,e.limit,"L"):e}/**
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
 */class RM{constructor(){this._n=new bM}addToCollectionParentIndex(e,n){return this._n.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(kr.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(kr.min())}updateCollectionGroup(e,n,r){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class bM{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ht(De.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ht(De.comparator)).toArray()}}/**
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
 */class mi{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new mi(0)}static Bn(){return new mi(-1)}}/**
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
 */class CM{constructor(){this.changes=new Di(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,_t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?b.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class SM{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class PM{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&vo(r.mutation,s,an.empty(),Je.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,he()).next(()=>r))}getLocalViewOfDocuments(e,n,r=he()){const s=Zr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=so();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Zr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,he()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=er();const o=yo(),a=function(){return yo()}();return n.forEach((l,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof Os)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),vo(u.mutation,c,u.mutation.getFieldMask(),Je.now())):o.set(c.key,an.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new SM(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=yo();let s=new Ue((o,a)=>o-a),i=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||an.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(s.get(a.batchId)||he()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=rI();u.forEach(d=>{if(!i.has(d)){const p=uI(n.get(d),r.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return b.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return Q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):JT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):b.resolve(Zr());let a=-1,l=i;return o.next(c=>b.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?b.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,he())).next(u=>({batchId:a,changes:nI(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let s=so();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=so();return this.indexManager.getCollectionParents(e,i).next(a=>b.forEach(a,l=>{const c=function(h,d){return new Oi(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,_t.newInvalidDocument(u)))});let a=so();return o.forEach((l,c)=>{const u=i.get(l);u!==void 0&&vo(u.mutation,c,an.empty(),Je.now()),lu(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kM{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return b.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Nn(s.createTime)}}(n)),b.resolve()}getNamedQuery(e,n){return b.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:AM(s.bundledQuery),readTime:Nn(s.readTime)}}(n)),b.resolve()}}/**
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
 */class NM{constructor(){this.overlays=new Ue(Q.comparator),this.hr=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Zr();return b.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),b.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),b.resolve()}getOverlaysForCollection(e,n,r){const s=Zr(),i=n.length+1,o=new Q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return b.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ue((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=Zr(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Zr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return b.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new eM(n,r));let i=this.hr.get(n);i===void 0&&(i=he(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
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
 */class Ep{constructor(){this.Pr=new ht(tt.Ir),this.Tr=new ht(tt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new tt(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new tt(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new Q(new De([])),r=new tt(n,e),s=new tt(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new Q(new De([])),r=new tt(n,e),s=new tt(n,e+1);let i=he();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new tt(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class tt{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return Q.comparator(e.key,n.key)||ve(e.pr,n.pr)}static Er(e,n){return ve(e.pr,n.pr)||Q.comparator(e.key,n.key)}}/**
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
 */class OM{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new ht(tt.Ir)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Z1(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new tt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.br(r),i=s<0?0:s;return b.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new tt(n,0),s=new tt(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),b.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ht(ve);return n.forEach(s=>{const i=new tt(s,0),o=new tt(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),b.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Q.isDocumentKey(i)||(i=i.child(""));const o=new tt(new Q(i),0);let a=new ht(ve);return this.wr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.pr)),!0)},o),b.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){xe(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return b.forEach(n.mutations,s=>{const i=new tt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new tt(n,0),s=this.wr.firstAfterOrEqual(r);return b.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class DM{constructor(e){this.vr=e,this.docs=function(){return new Ue(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return b.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(n))}getEntries(e,n){let r=er();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():_t.newInvalidDocument(s))}),b.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=er();const o=n.path,a=new Q(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||v1(y1(u),r)<=0||(s.has(u.key)||lu(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return b.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ee()}Fr(e,n){return b.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new xM(this)}getSize(e){return b.resolve(this.size)}}class xM extends CM{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),b.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class MM{constructor(e){this.persistence=e,this.Mr=new Di(n=>pp(n),gp),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Ep,this.targetCount=0,this.Br=mi.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),b.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new mi(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.qn(n),b.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),b.waitFor(i).next(()=>s)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return b.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),b.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),b.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),b.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return b.resolve(r)}containsKey(e,n){return b.resolve(this.Nr.containsKey(n))}}/**
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
 */class LM{constructor(e,n){this.Lr={},this.overlays={},this.kr=new up(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new MM(this),this.indexManager=new RM,this.remoteDocumentCache=function(s){return new DM(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new IM(n),this.$r=new kM(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new NM,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new OM(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const s=new VM(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return b.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class VM extends w1{constructor(e){super(),this.currentSequenceNumber=e}}class wp{constructor(e){this.persistence=e,this.zr=new Ep,this.jr=null}static Hr(e){return new wp(e)}get Jr(){if(this.jr)return this.jr;throw ee()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),b.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),b.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Jr,r=>{const s=Q.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,ie.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return b.or([()=>b.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class Tp{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=he(),s=he();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Tp(e,n.fromCache,r,s)}}/**
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
 */class FM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class UM{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=8}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ji(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new FM;return this.Ji(e,n,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>i.result)}Yi(e,n,r,s){return r.documentReadCount<this.Wi?(qi()<=ue.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Ws(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),b.resolve()):(qi()<=ue.DEBUG&&H("QueryEngine","Query:",Ws(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(qi()<=ue.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Ws(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,kn(n))):b.resolve())}ji(e,n){if(d_(n))return b.resolve(null);let r=kn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=ac(n,null,"F"),r=kn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=he(...i);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Zi(n,a);return this.Xi(n,c,o,l.readTime)?this.ji(e,ac(n,null,"F")):this.es(e,c,n,l)}))})))}Hi(e,n,r,s){return d_(n)||s.isEqual(ie.min())?b.resolve(null):this.zi.getDocuments(e,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?b.resolve(null):(qi()<=ue.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ws(n)),this.es(e,o,n,_1(s,-1)).next(a=>a))})}Zi(e,n){let r=new ht(eI(e));return n.forEach((s,i)=>{lu(e,i)&&(r=r.add(i))}),r}Xi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,n,r){return qi()<=ue.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Ws(n)),this.zi.getDocumentsMatchingQuery(e,n,kr.min(),r)}es(e,n,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $M{constructor(e,n,r,s){this.persistence=e,this.ts=n,this.serializer=s,this.ns=new Ue(ve),this.rs=new Di(i=>pp(i),gp),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new PM(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function BM(t,e,n,r){return new $M(t,e,n,r)}async function TI(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=he();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function jM(t,e){const n=oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let p=b.resolve();return d.forEach(m=>{p=p.next(()=>u.getEntry(l,m)).next(E=>{const y=c.docVersions.get(m);xe(y!==null),E.version.compareTo(y)<0&&(h.applyToRemoteDocument(E,c),E.isValidDocument()&&(E.setReadTime(c.commitVersion),u.addEntry(E)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=he();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function II(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function WM(t,e){const n=oe(t),r=e.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(At.EMPTY_BYTE_STRING,ie.min()).withLastLimboFreeSnapshotVersion(ie.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),s=s.insert(h,p),function(E,y,A){return E.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(d,p,u)&&a.push(n.Qr.updateTargetData(i,p))});let l=er(),c=he();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(qM(i,o,e.documentUpdates).next(u=>{l=u.cs,c=u.ls})),!r.isEqual(ie.min())){const u=n.Qr.getLastRemoteSnapshotVersion(i).next(h=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return b.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.ns=s,i))}function qM(t,e,n){let r=he(),s=he();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=er();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(ie.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):H("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{cs:o,ls:s}})}function HM(t,e){const n=oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function KM(t,e){const n=oe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,e).next(i=>i?(s=i,b.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new _r(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function wd(t,e,n){const r=oe(t),s=r.ns.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ba(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function I_(t,e,n){const r=oe(t);let s=ie.min(),i=he();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=oe(l),d=h.rs.get(u);return d!==void 0?b.resolve(h.ns.get(d)):h.Qr.getTargetData(c,u)}(r,o,kn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?s:ie.min(),n?i:he())).next(a=>(zM(r,F1(e),a),{documents:a,hs:i})))}function zM(t,e,n){let r=t.ss.get(e)||ie.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ss.set(e,r)}class A_{constructor(){this.activeTargetIds=q1()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class GM{constructor(){this.no=new A_,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new A_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class QM{io(e){}shutdown(){}}/**
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
 */class R_{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ja=null;function rh(){return Ja===null?Ja=function(){return 268435456+Math.round(2147483648*Math.random())}():Ja++,"0x"+Ja.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class XM{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
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
 */const dt="WebChannelConnection";class JM extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(n,r,s,i,o){const a=rh(),l=this.bo(n,r);H("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(c,i,o),this.Co(n,l,c,s).then(u=>(H("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw di("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}vo(n,r,s,i,o,a){return this.So(n,r,s,i,o)}Do(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ki}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}bo(n,r){const s=YM[n];return`${this.fo}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,s){const i=rh();return new Promise((o,a)=>{const l=new o1;l.setWithCredentials(!0),l.listenOnce(s1.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case th.NO_ERROR:const u=l.getResponseJson();H(dt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case th.TIMEOUT:H(dt,`RPC '${e}' ${i} timed out`),a(new B(I.DEADLINE_EXCEEDED,"Request time out"));break;case th.HTTP_ERROR:const h=l.getStatus();if(H(dt,`RPC '${e}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const m=function(y){const A=y.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(A)>=0?A:I.UNKNOWN}(p.status);a(new B(m,p.message))}else a(new B(I.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new B(I.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{H(dt,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);H(dt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",c,r,15)})}Fo(e,n,r){const s=rh(),i=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=n1(),a=r1(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=i.join("");H(dt,`Creating RPC '${e}' stream ${s}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,p=!1;const m=new XM({lo:y=>{p?H(dt,`Not sending because RPC '${e}' stream ${s} is closed:`,y):(d||(H(dt,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),H(dt,`RPC '${e}' stream ${s} sending:`,y),h.send(y))},ho:()=>h.close()}),E=(y,A,O)=>{y.listen(A,S=>{try{O(S)}catch(K){setTimeout(()=>{throw K},0)}})};return E(h,Qa.EventType.OPEN,()=>{p||H(dt,`RPC '${e}' stream ${s} transport opened.`)}),E(h,Qa.EventType.CLOSE,()=>{p||(p=!0,H(dt,`RPC '${e}' stream ${s} transport closed`),m.Vo())}),E(h,Qa.EventType.ERROR,y=>{p||(p=!0,di(dt,`RPC '${e}' stream ${s} transport errored:`,y),m.Vo(new B(I.UNAVAILABLE,"The operation could not be completed")))}),E(h,Qa.EventType.MESSAGE,y=>{var A;if(!p){const O=y.data[0];xe(!!O);const S=O,K=S.error||((A=S[0])===null||A===void 0?void 0:A.error);if(K){H(dt,`RPC '${e}' stream ${s} received error:`,K);const U=K.status;let ye=function(Ie){const $=He[Ie];if($!==void 0)return fI($)}(U),W=K.message;ye===void 0&&(ye=I.INTERNAL,W="Unknown error status: "+U+" with message "+K.message),p=!0,m.Vo(new B(ye,W)),h.close()}else H(dt,`RPC '${e}' stream ${s} received:`,O),m.mo(O)}}),E(a,i1.STAT_EVENT,y=>{y.stat===t_.PROXY?H(dt,`RPC '${e}' stream ${s} detected buffering proxy`):y.stat===t_.NOPROXY&&H(dt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{m.Ro()},0),m}}function sh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(t){return new cM(t,!0)}/**
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
 */class AI{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),s=Math.max(0,n-r);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Lo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class RI{constructor(e,n,r,s,i,o,a,l){this.oi=e,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new AI(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(Zn(n.toString()),Zn("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===n&&this.o_(r,s)},r=>{e(()=>{const s=new B(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ZM extends RI{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=dM(this.serializer,e),r=function(i){if(!("targetChange"in i))return ie.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ie.min():o.readTime?Nn(o.readTime):ie.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=Ed(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=gd(l)?{documents:gM(i,l)}:{query:mM(i,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=mI(i,o.resumeToken);const c=_d(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(ie.min())>0){a.readTime=uc(i,o.snapshotVersion.toTimestamp());const c=_d(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=yM(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=Ed(this.serializer),n.removeTarget=e,this.t_(n)}}class eL extends RI{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(xe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=pM(e.writeResults,e.commitTime),r=Nn(e.commitTime);return this.listener.T_(r,n)}return xe(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=Ed(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>fM(this.serializer,r))};this.t_(n)}}/**
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
 */class tL extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new B(I.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.So(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(I.UNKNOWN,s.toString())})}vo(e,n,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.vo(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(I.UNKNOWN,i.toString())})}terminate(){this.A_=!0}}class nL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Zn(n),this.g_=!1):H("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
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
 */class rL{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{Ds(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=oe(l);c.v_.add(4),await Pa(c),c.x_.set("Unknown"),c.v_.delete(4),await fu(c)}(this))})}),this.x_=new nL(r,s)}}async function fu(t){if(Ds(t))for(const e of t.F_)await e(!0)}async function Pa(t){for(const e of t.F_)await e(!1)}function bI(t,e){const n=oe(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),Rp(n)?Ap(n):xi(n).Jo()&&Ip(n,e))}function CI(t,e){const n=oe(t),r=xi(n);n.C_.delete(e),r.Jo()&&SI(n,e),n.C_.size===0&&(r.Jo()?r.Xo():Ds(n)&&n.x_.set("Unknown"))}function Ip(t,e){if(t.O_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ie.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}xi(t).c_(e)}function SI(t,e){t.O_.Ne(e),xi(t).l_(e)}function Ap(t){t.O_=new iM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.C_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),xi(t).start(),t.x_.p_()}function Rp(t){return Ds(t)&&!xi(t).Ho()&&t.C_.size>0}function Ds(t){return oe(t).v_.size===0}function PI(t){t.O_=void 0}async function sL(t){t.C_.forEach((e,n)=>{Ip(t,e)})}async function iL(t,e){PI(t),Rp(t)?(t.x_.S_(e),Ap(t)):t.x_.set("Unknown")}async function oL(t,e,n){if(t.x_.set("Online"),e instanceof gI&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await hc(t,r)}else if(e instanceof gl?t.O_.Ue(e):e instanceof pI?t.O_.Ye(e):t.O_.ze(e),!n.isEqual(ie.min()))try{const r=await II(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.O_.st(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=i.C_.get(c);u&&i.C_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=i.C_.get(l);if(!u)return;i.C_.set(l,u.withResumeToken(At.EMPTY_BYTE_STRING,u.snapshotVersion)),SI(i,l);const h=new _r(u.target,l,c,u.sequenceNumber);Ip(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await hc(t,r)}}async function hc(t,e,n){if(!ba(e))throw e;t.v_.add(1),await Pa(t),t.x_.set("Offline"),n||(n=()=>II(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await fu(t)})}function kI(t,e){return e().catch(n=>hc(t,n,e))}async function pu(t){const e=oe(t),n=Or(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;aL(e);)try{const s=await HM(e.localStore,r);if(s===null){e.D_.length===0&&n.Xo();break}r=s.batchId,lL(e,s)}catch(s){await hc(e,s)}NI(e)&&OI(e)}function aL(t){return Ds(t)&&t.D_.length<10}function lL(t,e){t.D_.push(e);const n=Or(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function NI(t){return Ds(t)&&!Or(t).Ho()&&t.D_.length>0}function OI(t){Or(t).start()}async function cL(t){Or(t).d_()}async function uL(t){const e=Or(t);for(const n of t.D_)e.I_(n.mutations)}async function hL(t,e,n){const r=t.D_.shift(),s=_p.from(r,e,n);await kI(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await pu(t)}async function dL(t,e){e&&Or(t).P_&&await async function(r,s){if(function(o){return nM(o)&&o!==I.ABORTED}(s.code)){const i=r.D_.shift();Or(r).Zo(),await kI(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await pu(r)}}(t,e),NI(t)&&OI(t)}async function b_(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=Ds(n);n.v_.add(3),await Pa(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await fu(n)}async function fL(t,e){const n=oe(t);e?(n.v_.delete(2),await fu(n)):e||(n.v_.add(2),await Pa(n),n.x_.set("Unknown"))}function xi(t){return t.N_||(t.N_=function(n,r,s){const i=oe(n);return i.R_(),new ZM(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:sL.bind(null,t),To:iL.bind(null,t),u_:oL.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),Rp(t)?Ap(t):t.x_.set("Unknown")):(await t.N_.stop(),PI(t))})),t.N_}function Or(t){return t.B_||(t.B_=function(n,r,s){const i=oe(n);return i.R_(),new eL(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:cL.bind(null,t),To:dL.bind(null,t),E_:uL.bind(null,t),T_:hL.bind(null,t)}),t.F_.push(async e=>{e?(t.B_.Zo(),await pu(t)):(await t.B_.stop(),t.D_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.B_}/**
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
 */class bp{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new us,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new bp(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Cp(t,e){if(Zn("AsyncQueue",`${e}: ${t}`),ba(t))return new B(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class si{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=so(),this.sortedSet=new Ue(this.comparator)}static emptySet(e){return new si(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof si)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new si;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class C_{constructor(){this.L_=new Ue(Q.comparator)}track(e){const n=e.doc.key,r=this.L_.get(n);r?e.type!==0&&r.type===3?this.L_=this.L_.insert(n,e):e.type===3&&r.type!==1?this.L_=this.L_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.L_=this.L_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.L_=this.L_.remove(n):e.type===1&&r.type===2?this.L_=this.L_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):ee():this.L_=this.L_.insert(n,e)}k_(){const e=[];return this.L_.inorderTraversal((n,r)=>{e.push(r)}),e}}class _i{constructor(e,n,r,s,i,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new _i(e,n,si.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&au(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class pL{constructor(){this.q_=void 0,this.listeners=[]}}class gL{constructor(){this.queries=new Di(e=>ZT(e),au),this.onlineState="Unknown",this.Q_=new Set}}async function mL(t,e){const n=oe(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new pL),s)try{i.q_=await n.onListen(r)}catch(o){const a=Cp(o,`Initialization of query '${Ws(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.K_(n.onlineState),i.q_&&e.U_(i.q_)&&Sp(n)}async function _L(t,e){const n=oe(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function yL(t,e){const n=oe(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.U_(s)&&(r=!0);o.q_=s}}r&&Sp(n)}function vL(t,e,n){const r=oe(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Sp(t){t.Q_.forEach(e=>{e.next()})}class EL{constructor(e,n,r){this.query=e,this.W_=n,this.G_=!1,this.z_=null,this.onlineState="Unknown",this.options=r||{}}U_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new _i(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.G_?this.j_(e)&&(this.W_.next(e),n=!0):this.H_(e,this.onlineState)&&(this.J_(e),n=!0),this.z_=e,n}onError(e){this.W_.error(e)}K_(e){this.onlineState=e;let n=!1;return this.z_&&!this.G_&&this.H_(this.z_,e)&&(this.J_(this.z_),n=!0),n}H_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Y_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}j_(e){if(e.docChanges.length>0)return!0;const n=this.z_&&this.z_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}J_(e){e=_i.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.G_=!0,this.W_.next(e)}}/**
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
 */class DI{constructor(e){this.key=e}}class xI{constructor(e){this.key=e}}class wL{constructor(e,n){this.query=e,this.sa=n,this.oa=null,this.hasCachedResults=!1,this.current=!1,this._a=he(),this.mutatedKeys=he(),this.aa=eI(e),this.ua=new si(this.aa)}get ca(){return this.sa}la(e,n){const r=n?n.ha:new C_,s=n?n.ua:this.ua;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),p=lu(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),E=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let y=!1;d&&p?d.data.isEqual(p.data)?m!==E&&(r.track({type:3,doc:p}),y=!0):this.Pa(d,p)||(r.track({type:2,doc:p}),y=!0,(l&&this.aa(p,l)>0||c&&this.aa(p,c)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),y=!0):d&&!p&&(r.track({type:1,doc:d}),y=!0,(l||c)&&(a=!0)),y&&(p?(o=o.add(p),i=E?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ua:o,ha:r,Xi:a,mutatedKeys:i}}Pa(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.ua;this.ua=e.ua,this.mutatedKeys=e.mutatedKeys;const i=e.ha.k_();i.sort((c,u)=>function(d,p){const m=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return m(d)-m(p)}(c.type,u.type)||this.aa(c.doc,u.doc)),this.Ia(r);const o=n?this.Ta():[],a=this._a.size===0&&this.current?1:0,l=a!==this.oa;return this.oa=a,i.length!==0||l?{snapshot:new _i(this.query,e.ua,s,i,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}K_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ua:this.ua,ha:new C_,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Ea:[]}}da(e){return!this.sa.has(e)&&!!this.ua.has(e)&&!this.ua.get(e).hasLocalMutations}Ia(e){e&&(e.addedDocuments.forEach(n=>this.sa=this.sa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.sa=this.sa.delete(n)),this.current=e.current)}Ta(){if(!this.current)return[];const e=this._a;this._a=he(),this.ua.forEach(r=>{this.da(r.key)&&(this._a=this._a.add(r.key))});const n=[];return e.forEach(r=>{this._a.has(r)||n.push(new xI(r))}),this._a.forEach(r=>{e.has(r)||n.push(new DI(r))}),n}Aa(e){this.sa=e.hs,this._a=he();const n=this.la(e.documents);return this.applyChanges(n,!0)}Ra(){return _i.fromInitialDocuments(this.query,this.ua,this.mutatedKeys,this.oa===0,this.hasCachedResults)}}class TL{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class IL{constructor(e){this.key=e,this.Va=!1}}class AL{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.ma={},this.fa=new Di(a=>ZT(a),au),this.ga=new Map,this.pa=new Set,this.ya=new Ue(Q.comparator),this.wa=new Map,this.Sa=new Ep,this.ba={},this.Da=new Map,this.Ca=mi.Bn(),this.onlineState="Unknown",this.va=void 0}get isPrimaryClient(){return this.va===!0}}async function RL(t,e){const n=ML(t);let r,s;const i=n.fa.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Ra();else{const o=await KM(n.localStore,kn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await bL(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&bI(n.remoteStore,o)}return s}async function bL(t,e,n,r,s){t.Fa=(h,d,p)=>async function(E,y,A,O){let S=y.view.la(A);S.Xi&&(S=await I_(E.localStore,y.query,!1).then(({documents:ye})=>y.view.la(ye,S)));const K=O&&O.targetChanges.get(y.targetId),U=y.view.applyChanges(S,E.isPrimaryClient,K);return P_(E,y.targetId,U.Ea),U.snapshot}(t,h,d,p);const i=await I_(t.localStore,e,!0),o=new wL(e,i.hs),a=o.la(i.documents),l=Sa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,l);P_(t,n,c.Ea);const u=new TL(e,n,o);return t.fa.set(e,u),t.ga.has(n)?t.ga.get(n).push(e):t.ga.set(n,[e]),c.snapshot}async function CL(t,e){const n=oe(t),r=n.fa.get(e),s=n.ga.get(r.targetId);if(s.length>1)return n.ga.set(r.targetId,s.filter(i=>!au(i,e))),void n.fa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await wd(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),CI(n.remoteStore,r.targetId),Td(n,r.targetId)}).catch(Ra)):(Td(n,r.targetId),await wd(n.localStore,r.targetId,!0))}async function SL(t,e,n){const r=LL(t);try{const s=await function(o,a){const l=oe(o),c=Je.now(),u=a.reduce((p,m)=>p.add(m.key),he());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let m=er(),E=he();return l.os.getEntries(p,u).next(y=>{m=y,m.forEach((A,O)=>{O.isValidDocument()||(E=E.add(A))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,m)).next(y=>{h=y;const A=[];for(const O of a){const S=X1(O,h.get(O.key).overlayedDocument);S!=null&&A.push(new Os(O.key,S,HT(S.value.mapValue),Yn.exists(!0)))}return l.mutationQueue.addMutationBatch(p,c,A,a)}).next(y=>{d=y;const A=y.applyToLocalDocumentSet(h,E);return l.documentOverlayCache.saveOverlays(p,y.batchId,A)})}).then(()=>({batchId:d.batchId,changes:nI(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let c=o.ba[o.currentUser.toKey()];c||(c=new Ue(ve)),c=c.insert(a,l),o.ba[o.currentUser.toKey()]=c}(r,s.batchId,n),await ka(r,s.changes),await pu(r.remoteStore)}catch(s){const i=Cp(s,"Failed to persist write");n.reject(i)}}async function MI(t,e){const n=oe(t);try{const r=await WM(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.wa.get(i);o&&(xe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Va=!0:s.modifiedDocuments.size>0?xe(o.Va):s.removedDocuments.size>0&&(xe(o.Va),o.Va=!1))}),await ka(n,r,e)}catch(r){await Ra(r)}}function S_(t,e,n){const r=oe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.fa.forEach((i,o)=>{const a=o.view.K_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=oe(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.listeners)d.K_(a)&&(c=!0)}),c&&Sp(l)}(r.eventManager,e),s.length&&r.ma.u_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function PL(t,e,n){const r=oe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.wa.get(e),i=s&&s.key;if(i){let o=new Ue(Q.comparator);o=o.insert(i,_t.newNoDocument(i,ie.min()));const a=he().add(i),l=new hu(ie.min(),new Map,new Ue(ve),o,a);await MI(r,l),r.ya=r.ya.remove(i),r.wa.delete(e),Pp(r)}else await wd(r.localStore,e,!1).then(()=>Td(r,e,n)).catch(Ra)}async function kL(t,e){const n=oe(t),r=e.batch.batchId;try{const s=await jM(n.localStore,e);VI(n,r,null),LI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ka(n,s)}catch(s){await Ra(s)}}async function NL(t,e,n){const r=oe(t);try{const s=await function(o,a){const l=oe(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(xe(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,e);VI(r,e,n),LI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ka(r,s)}catch(s){await Ra(s)}}function LI(t,e){(t.Da.get(e)||[]).forEach(n=>{n.resolve()}),t.Da.delete(e)}function VI(t,e,n){const r=oe(t);let s=r.ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.ba[r.currentUser.toKey()]=s}}function Td(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ga.get(e))t.fa.delete(r),n&&t.ma.Ma(r,n);t.ga.delete(e),t.isPrimaryClient&&t.Sa.Vr(e).forEach(r=>{t.Sa.containsKey(r)||FI(t,r)})}function FI(t,e){t.pa.delete(e.path.canonicalString());const n=t.ya.get(e);n!==null&&(CI(t.remoteStore,n),t.ya=t.ya.remove(e),t.wa.delete(n),Pp(t))}function P_(t,e,n){for(const r of n)r instanceof DI?(t.Sa.addReference(r.key,e),OL(t,r)):r instanceof xI?(H("SyncEngine","Document no longer in limbo: "+r.key),t.Sa.removeReference(r.key,e),t.Sa.containsKey(r.key)||FI(t,r.key)):ee()}function OL(t,e){const n=e.key,r=n.path.canonicalString();t.ya.get(n)||t.pa.has(r)||(H("SyncEngine","New document in limbo: "+n),t.pa.add(r),Pp(t))}function Pp(t){for(;t.pa.size>0&&t.ya.size<t.maxConcurrentLimboResolutions;){const e=t.pa.values().next().value;t.pa.delete(e);const n=new Q(De.fromString(e)),r=t.Ca.next();t.wa.set(r,new IL(n)),t.ya=t.ya.insert(n,r),bI(t.remoteStore,new _r(kn(mp(n.path)),r,"TargetPurposeLimboResolution",up.ae))}}async function ka(t,e,n){const r=oe(t),s=[],i=[],o=[];r.fa.isEmpty()||(r.fa.forEach((a,l)=>{o.push(r.Fa(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=Tp.Ki(l.targetId,c);i.push(u)}}))}),await Promise.all(o),r.ma.u_(s),await async function(l,c){const u=oe(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>b.forEach(c,d=>b.forEach(d.qi,p=>u.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>b.forEach(d.Qi,p=>u.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!ba(h))throw h;H("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const p=u.ns.get(d),m=p.snapshotVersion,E=p.withLastLimboFreeSnapshotVersion(m);u.ns=u.ns.insert(d,E)}}}(r.localStore,i))}async function DL(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await TI(n.localStore,e);n.currentUser=e,function(i,o){i.Da.forEach(a=>{a.forEach(l=>{l.reject(new B(I.CANCELLED,o))})}),i.Da.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ka(n,r.us)}}function xL(t,e){const n=oe(t),r=n.wa.get(e);if(r&&r.Va)return he().add(r.key);{let s=he();const i=n.ga.get(e);if(!i)return s;for(const o of i){const a=n.fa.get(o);s=s.unionWith(a.view.ca)}return s}}function ML(t){const e=oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=MI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=xL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=PL.bind(null,e),e.ma.u_=yL.bind(null,e.eventManager),e.ma.Ma=vL.bind(null,e.eventManager),e}function LL(t){const e=oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=kL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=NL.bind(null,e),e}class k_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=du(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return BM(this.persistence,new UM,e.initialUser,this.serializer)}createPersistence(e){return new LM(wp.Hr,this.serializer)}createSharedClientState(e){return new GM}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class VL{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>S_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=DL.bind(null,this.syncEngine),await fL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new gL}()}createDatastore(e){const n=du(e.databaseInfo.databaseId),r=function(i){return new JM(i)}(e.databaseInfo);return function(i,o,a,l){return new tL(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new rL(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>S_(this.syncEngine,n,0),function(){return R_.C()?new R_:new QM}())}createSyncEngine(e,n){return function(s,i,o,a,l,c,u){const h=new AL(s,i,o,a,l,c);return u&&(h.va=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=oe(n);H("RemoteStore","RemoteStore shutting down."),r.v_.add(5),await Pa(r),r.M_.shutdown(),r.x_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class FL{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Na(this.observer.next,e)}error(e){this.observer.error?this.Na(this.observer.error,e):Zn("Uncaught Error in snapshot listener:",e.toString())}Ba(){this.muted=!0}Na(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class UL{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ft.UNAUTHENTICATED,this.clientId=jT.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{H("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(H("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new us;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Cp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ih(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await TI(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function N_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await BL(t);H("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>b_(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>b_(e.remoteStore,i)),t._onlineComponents=e}function $L(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function BL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await ih(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!$L(n))throw n;di("Error using user provided cache. Falling back to memory cache: "+n),await ih(t,new k_)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await ih(t,new k_);return t._offlineComponents}async function UI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await N_(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await N_(t,new VL))),t._onlineComponents}function jL(t){return UI(t).then(e=>e.syncEngine)}async function O_(t){const e=await UI(t),n=e.eventManager;return n.onListen=RL.bind(null,e.syncEngine),n.onUnlisten=CL.bind(null,e.syncEngine),n}/**
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
 */function $I(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_=new Map;/**
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
 */function BI(t,e,n){if(!n)throw new B(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function WL(t,e,n,r){if(e===!0&&r===!0)throw new B(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function x_(t){if(!Q.isDocumentKey(t))throw new B(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function M_(t){if(Q.isDocumentKey(t))throw new B(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function gu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function Eo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=gu(t);throw new B(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function qL(t,e){if(e<=0)throw new B(I.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new B(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}WL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$I((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new B(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new B(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new B(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class mu{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new L_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new B(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new L_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new l1;switch(r.type){case"firstParty":return new d1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=D_.get(n);r&&(H("ComponentProvider","Removing Datastore"),D_.delete(n),r.terminate())}(this),Promise.resolve()}}function HL(t,e,n,r={}){var s;const i=(t=Eo(t,mu))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&di("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=ft.MOCK_USER;else{a=Dv(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new B(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ft(c)}t._authCredentials=new c1(new BT(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ur(this.firestore,e,this._query)}}class $t{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ar(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $t(this.firestore,e,this._key)}}class Ar extends Ur{constructor(e,n,r){super(e,n,mp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $t(this.firestore,null,new Q(e))}withConverter(e){return new Ar(this.firestore,e,this._path)}}function j2(t,e,...n){if(t=Ge(t),BI("collection","path",e),t instanceof mu){const r=De.fromString(e,...n);return M_(r),new Ar(t,null,r)}{if(!(t instanceof $t||t instanceof Ar))throw new B(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return M_(r),new Ar(t.firestore,null,r)}}function KL(t,e,...n){if(t=Ge(t),arguments.length===1&&(e=jT.V()),BI("doc","path",e),t instanceof mu){const r=De.fromString(e,...n);return x_(r),new $t(t,null,new Q(r))}{if(!(t instanceof $t||t instanceof Ar))throw new B(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return x_(r),new $t(t.firestore,t instanceof Ar?t.converter:null,new Q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zL{constructor(){this.Ya=Promise.resolve(),this.Za=[],this.Xa=!1,this.eu=[],this.tu=null,this.nu=!1,this.ru=!1,this.iu=[],this.jo=new AI(this,"async_queue_retry"),this.su=()=>{const n=sh();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=sh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.su)}get isShuttingDown(){return this.Xa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ou(),this._u(e)}enterRestrictedMode(e){if(!this.Xa){this.Xa=!0,this.ru=e||!1;const n=sh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.su)}}enqueue(e){if(this.ou(),this.Xa)return new Promise(()=>{});const n=new us;return this._u(()=>this.Xa&&this.ru?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Za.push(e),this.au()))}async au(){if(this.Za.length!==0){try{await this.Za[0](),this.Za.shift(),this.jo.reset()}catch(e){if(!ba(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Za.length>0&&this.jo.qo(()=>this.au())}}_u(e){const n=this.Ya.then(()=>(this.nu=!0,e().catch(r=>{this.tu=r,this.nu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Zn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.nu=!1,r))));return this.Ya=n,n}enqueueAfterDelay(e,n,r){this.ou(),this.iu.indexOf(e)>-1&&(n=0);const s=bp.createAndSchedule(this,e,n,r,i=>this.uu(i));return this.eu.push(s),s}ou(){this.tu&&ee()}verifyOperationInProgress(){}async cu(){let e;do e=this.Ya,await e;while(e!==this.Ya)}lu(e){for(const n of this.eu)if(n.timerId===e)return!0;return!1}hu(e){return this.cu().then(()=>{this.eu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.eu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.cu()})}Pu(e){this.iu.push(e)}uu(e){const n=this.eu.indexOf(e);this.eu.splice(n,1)}}function V_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class dc extends mu{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new zL}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||WI(this),this._firestoreClient.terminate()}}function GL(t,e){const n=typeof t=="object"?t:Mc(),r=typeof t=="string"?t:e||"(default)",s=xc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=kv("firestore");i&&HL(s,...i)}return s}function jI(t){return t._firestoreClient||WI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function WI(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,c,u){return new A1(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,$I(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new UL(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new yi(At.fromBase64String(e))}catch(n){throw new B(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new yi(At.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e){this._methodName=e}}/**
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
 */class Np{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}}/**
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
 */const QL=/^__.*__$/;class YL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Os(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ca(e,this.data,n,this.fieldTransforms)}}function HI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class Op{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Iu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new Op(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}du(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Eu({path:r,Au:!1});return s.Ru(e),s}Vu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Eu({path:r,Au:!1});return s.Iu(),s}mu(e){return this.Eu({path:void 0,Au:!0})}fu(e){return fc(e,this.settings.methodName,this.settings.gu||!1,this.path,this.settings.pu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Iu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ru(this.path.get(e))}Ru(e){if(e.length===0)throw this.fu("Document fields must not be empty");if(HI(this.Tu)&&QL.test(e))throw this.fu('Document fields cannot begin and end with "__"')}}class XL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||du(e)}yu(e,n,r,s=!1){return new Op({Tu:e,methodName:n,pu:r,path:ct.emptyPath(),Au:!1,gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function KI(t){const e=t._freezeSettings(),n=du(t._databaseId);return new XL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function JL(t,e,n,r,s,i={}){const o=t.yu(i.merge||i.mergeFields?2:0,e,n,s);QI("Data must be an object, but it was:",o,r);const a=zI(r,o);let l,c;if(i.merge)l=new an(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=eV(e,h,n);if(!o.contains(d))throw new B(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);nV(u,d)||u.push(d)}l=new an(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new YL(new Gt(a),l,c)}function ZL(t,e,n,r=!1){return Dp(n,t.yu(r?4:3,e))}function Dp(t,e){if(GI(t=Ge(t)))return QI("Unsupported field value:",e,t),zI(t,e);if(t instanceof qI)return function(r,s){if(!HI(s.Tu))throw s.fu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Au&&e.Tu!==4)throw e.fu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=Dp(a,s.mu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ge(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return H1(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Je.fromDate(r);return{timestampValue:uc(s.serializer,i)}}if(r instanceof Je){const i=new Je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:uc(s.serializer,i)}}if(r instanceof Np)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof yi)return{bytesValue:mI(s.serializer,r._byteString)};if(r instanceof $t){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.fu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:vp(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.fu(`Unsupported field value: ${gu(r)}`)}(t,e)}function zI(t,e){const n={};return WT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ni(t,(r,s)=>{const i=Dp(s,e.du(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function GI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Je||t instanceof Np||t instanceof yi||t instanceof $t||t instanceof qI)}function QI(t,e,n){if(!GI(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=gu(n);throw r==="an object"?e.fu(t+" a custom object"):e.fu(t+" "+r)}}function eV(t,e,n){if((e=Ge(e))instanceof kp)return e._internalPath;if(typeof e=="string")return YI(t,e);throw fc("Field path arguments must be of type string or ",t,!1,void 0,n)}const tV=new RegExp("[~\\*/\\[\\]]");function YI(t,e,n){if(e.search(tV)>=0)throw fc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new kp(...e.split("."))._internalPath}catch{throw fc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function fc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new B(I.INVALID_ARGUMENT,a+t+l)}function nV(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new $t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(_u("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class rV extends XI{data(){return super.data()}}function _u(t,e){return typeof e=="string"?YI(t,e):e instanceof kp?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sV(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class xp{}class Mp extends xp{}function W2(t,e,...n){let r=[];e instanceof xp&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof Lp).length,a=i.filter(l=>l instanceof yu).length;if(o>1||o>0&&a>0)throw new B(I.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class yu extends Mp{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new yu(e,n,r)}_apply(e){const n=this._parse(e);return JI(e._query,n),new Ur(e.firestore,e.converter,md(e._query,n))}_parse(e){const n=KI(e.firestore);return function(i,o,a,l,c,u,h){let d;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new B(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){U_(h,u);const p=[];for(const m of h)p.push(F_(l,i,m));d={arrayValue:{values:p}}}else d=F_(l,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||U_(h,u),d=ZL(a,o,h,u==="in"||u==="not-in");return ze.create(c,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function q2(t,e,n){const r=e,s=_u("where",t);return yu._create(s,r,n)}class Lp extends xp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Lp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:fn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)JI(o,l),o=md(o,l)}(e._query,n),new Ur(e.firestore,e.converter,md(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Vp extends Mp{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Vp(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new B(I.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new B(I.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Xo(i,o)}(e._query,this._field,this._direction);return new Ur(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Oi(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function H2(t,e="asc"){const n=e,r=_u("orderBy",t);return Vp._create(r,n)}class Fp extends Mp{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Fp(e,n,r)}_apply(e){return new Ur(e.firestore,e.converter,ac(e._query,this._limit,this._limitType))}}function K2(t){return qL("limit",t),Fp._create("limit",t,"F")}function F_(t,e,n){if(typeof(n=Ge(n))=="string"){if(n==="")throw new B(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!JT(e)&&n.indexOf("/")!==-1)throw new B(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(De.fromString(n));if(!Q.isDocumentKey(r))throw new B(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return o_(t,new Q(r))}if(n instanceof $t)return o_(t,n._key);throw new B(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${gu(n)}.`)}function U_(t,e){if(!Array.isArray(t)||t.length===0)throw new B(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function JI(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class iV{convertValue(e,n="none"){switch(Ts(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ws(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ee()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ni(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Np(Ke(e.latitude),Ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=dp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Go(e));default:return null}}convertTimestamp(e){const n=Nr(e);return new Je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=De.fromString(e);xe(wI(r));const s=new Qo(r.get(1),r.get(3)),i=new Q(r.popFirst(5));return s.isEqual(n)||Zn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oV(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ZI extends XI{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ml(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(_u("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ml extends ZI{data(e={}){return super.data(e)}}class aV{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new oo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ml(this._firestore,this._userDataWriter,r.key,r,new oo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new ml(s._firestore,s._userDataWriter,a.doc.key,a.doc,new oo(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new ml(s._firestore,s._userDataWriter,a.doc.key,a.doc,new oo(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:lV(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function lV(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}class eA extends iV{constructor(e){super(),this.firestore=e}convertBytes(e){return new yi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new $t(this.firestore,null,n)}}function z2(t,e){const n=Eo(t.firestore,dc),r=KL(t),s=oV(t.converter,e);return cV(n,[JL(KI(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Yn.exists(!1))]).then(()=>r)}function G2(t,...e){var n,r,s;t=Ge(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||V_(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(V_(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let l,c,u;if(t instanceof $t)c=Eo(t.firestore,dc),u=mp(t._key.path),l={next:h=>{e[o]&&e[o](uV(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Eo(t,Ur);c=Eo(h.firestore,dc),u=h._query;const d=new eA(c);l={next:p=>{e[o]&&e[o](new aV(c,d,h,p))},error:e[o+1],complete:e[o+2]},sV(t._query)}return function(d,p,m,E){const y=new FL(E),A=new EL(p,y,m);return d.asyncQueue.enqueueAndForget(async()=>mL(await O_(d),A)),()=>{y.Ba(),d.asyncQueue.enqueueAndForget(async()=>_L(await O_(d),A))}}(jI(c),u,a,l)}function cV(t,e){return function(r,s){const i=new us;return r.asyncQueue.enqueueAndForget(async()=>SL(await jL(r),s,i)),i.promise}(jI(t),e)}function uV(t,e,n){const r=n.docs.get(e._key),s=new eA(t);return new ZI(t,s,e._key,r,new oo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){ki=s})(Mr),xn(new un("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new dc(new u1(r.getProvider("auth-internal")),new p1(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new B(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qo(c.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Ft(n_,"4.3.0",e),Ft(n_,"4.3.0","esm2017")})();/**
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
 */const tA="firebasestorage.googleapis.com",nA="storageBucket",hV=2*60*1e3,dV=10*60*1e3;/**
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
 */class We extends Ln{constructor(e,n,r=0){super(oh(e),`Firebase Storage: ${n} (${oh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,We.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return oh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var je;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(je||(je={}));function oh(t){return"storage/"+t}function Up(){const t="An unknown error occurred, please check the error payload for server response.";return new We(je.UNKNOWN,t)}function fV(t){return new We(je.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function pV(t){return new We(je.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function gV(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new We(je.UNAUTHENTICATED,t)}function mV(){return new We(je.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function _V(t){return new We(je.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function yV(){return new We(je.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function vV(){return new We(je.CANCELED,"User canceled the upload/download.")}function EV(t){return new We(je.INVALID_URL,"Invalid URL '"+t+"'.")}function wV(t){return new We(je.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function TV(){return new We(je.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+nA+"' property when initializing the app?")}function IV(){return new We(je.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function AV(){return new We(je.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function RV(t){return new We(je.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Id(t){return new We(je.INVALID_ARGUMENT,t)}function rA(){return new We(je.APP_DELETED,"The Firebase app was deleted.")}function bV(t){return new We(je.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function wo(t,e){return new We(je.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Hi(t){throw new We(je.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Vt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Vt.makeFromUrl(e,n)}catch{return new Vt(e,"")}if(r.path==="")return r;throw wV(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(K){K.path.charAt(K.path.length-1)==="/"&&(K.path_=K.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(K){K.path_=decodeURIComponent(K.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),m={bucket:1,path:3},E=n===tA?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",A=new RegExp(`^https?://${E}/${s}/${y}`,"i"),S=[{regex:a,indices:l,postModify:i},{regex:p,indices:m,postModify:c},{regex:A,indices:{bucket:1,path:2},postModify:c}];for(let K=0;K<S.length;K++){const U=S[K],ye=U.regex.exec(e);if(ye){const W=ye[U.indices.bucket];let Ze=ye[U.indices.path];Ze||(Ze=""),r=new Vt(W,Ze),U.postModify(r);break}}if(r==null)throw EV(e);return r}}class CV{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function SV(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...y){c||(c=!0,e.apply(null,y))}function h(y){s=setTimeout(()=>{s=null,t(p,l())},y)}function d(){i&&clearTimeout(i)}function p(y,...A){if(c){d();return}if(y){d(),u.call(null,y,...A);return}if(l()||o){d(),u.call(null,y,...A);return}r<64&&(r*=2);let S;a===1?(a=2,S=0):S=(r+Math.random())*1e3,h(S)}let m=!1;function E(y){m||(m=!0,d(),!c&&(s!==null?(y||(a=2),clearTimeout(s),h(0)):y||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,E(!0)},n),E}function PV(t){t(!1)}/**
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
 */function kV(t){return t!==void 0}function NV(t){return typeof t=="object"&&!Array.isArray(t)}function $p(t){return typeof t=="string"||t instanceof String}function $_(t){return Bp()&&t instanceof Blob}function Bp(){return typeof Blob<"u"&&!gC()}function B_(t,e,n,r){if(r<e)throw Id(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Id(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function jp(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function sA(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */var hs;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(hs||(hs={}));/**
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
 */function OV(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class DV{constructor(e,n,r,s,i,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,m)=>{this.resolve_=p,this.reject_=m,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Za(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===hs.NO_ERROR,l=i.getStatus();if(!a||OV(l,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===hs.ABORT;r(!1,new Za(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new Za(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());kV(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=Up();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?rA():vV();o(l)}else{const l=yV();o(l)}};this.canceled_?n(!1,new Za(!1,null,!0)):this.backoffId_=SV(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&PV(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Za{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function xV(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function MV(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function LV(t,e){e&&(t["X-Firebase-GMPID"]=e)}function VV(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function FV(t,e,n,r,s,i,o=!0){const a=sA(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return LV(c,e),xV(c,n),MV(c,i),VV(c,r),new DV(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function UV(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function $V(...t){const e=UV();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Bp())return new Blob(t);throw new We(je.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function BV(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function jV(t){if(typeof atob>"u")throw RV("base-64");return atob(t)}/**
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
 */const bn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ah{constructor(e,n){this.data=e,this.contentType=n||null}}function WV(t,e){switch(t){case bn.RAW:return new ah(iA(e));case bn.BASE64:case bn.BASE64URL:return new ah(oA(t,e));case bn.DATA_URL:return new ah(HV(e),KV(e))}throw Up()}function iA(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function qV(t){let e;try{e=decodeURIComponent(t)}catch{throw wo(bn.DATA_URL,"Malformed data URL.")}return iA(e)}function oA(t,e){switch(t){case bn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw wo(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case bn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw wo(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=jV(e)}catch(s){throw s.message.includes("polyfill")?s:wo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class aA{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw wo(bn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=zV(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function HV(t){const e=new aA(t);return e.base64?oA(bn.BASE64,e.rest):qV(e.rest)}function KV(t){return new aA(t).contentType}function zV(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class mr{constructor(e,n){let r=0,s="";$_(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if($_(this.data_)){const r=this.data_,s=BV(r,e,n);return s===null?null:new mr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new mr(r,!0)}}static getBlob(...e){if(Bp()){const n=e.map(r=>r instanceof mr?r.data_:r);return new mr($V.apply(null,n))}else{const n=e.map(o=>$p(o)?WV(bn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new mr(s,!0)}}uploadData(){return this.data_}}/**
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
 */function lA(t){let e;try{e=JSON.parse(t)}catch{return null}return NV(e)?e:null}/**
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
 */function GV(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function QV(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function cA(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function YV(t,e){return e}class bt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||YV}}let el=null;function XV(t){return!$p(t)||t.length<2?t:cA(t)}function uA(){if(el)return el;const t=[];t.push(new bt("bucket")),t.push(new bt("generation")),t.push(new bt("metageneration")),t.push(new bt("name","fullPath",!0));function e(i,o){return XV(o)}const n=new bt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new bt("size");return s.xform=r,t.push(s),t.push(new bt("timeCreated")),t.push(new bt("updated")),t.push(new bt("md5Hash",null,!0)),t.push(new bt("cacheControl",null,!0)),t.push(new bt("contentDisposition",null,!0)),t.push(new bt("contentEncoding",null,!0)),t.push(new bt("contentLanguage",null,!0)),t.push(new bt("contentType",null,!0)),t.push(new bt("metadata","customMetadata",!0)),el=t,el}function JV(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Vt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function ZV(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return JV(r,t),r}function hA(t,e,n){const r=lA(e);return r===null?null:ZV(t,r,n)}function eF(t,e,n,r){const s=lA(e);if(s===null||!$p(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),p=jp(d,n,r),m=sA({alt:"media",token:c});return p+m})[0]}function tF(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class dA{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function fA(t){if(!t)throw Up()}function nF(t,e){function n(r,s){const i=hA(t,s,e);return fA(i!==null),i}return n}function rF(t,e){function n(r,s){const i=hA(t,s,e);return fA(i!==null),eF(i,s,t.host,t._protocol)}return n}function pA(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=mV():s=gV():n.getStatus()===402?s=pV(t.bucket):n.getStatus()===403?s=_V(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function sF(t){const e=pA(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=fV(t.path)),i.serverResponse=s.serverResponse,i}return n}function iF(t,e,n){const r=e.fullServerUrl(),s=jp(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new dA(s,i,rF(t,n),o);return a.errorHandler=sF(e),a}function oF(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function aF(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=oF(null,e)),r}function lF(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let S="";for(let K=0;K<2;K++)S=S+Math.random().toString().slice(2);return S}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=aF(e,r,s),u=tF(c,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+l+"--",p=mr.getBlob(h,r,d);if(p===null)throw IV();const m={name:c.fullPath},E=jp(i,t.host,t._protocol),y="POST",A=t.maxUploadRetryTime,O=new dA(E,y,nF(t,n),A);return O.urlParams=m,O.headers=o,O.body=p.uploadData(),O.errorHandler=pA(e),O}class cF{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=hs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=hs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=hs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Hi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Hi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Hi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Hi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Hi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class uF extends cF{initXhr(){this.xhr_.responseType="text"}}function gA(){return new uF}/**
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
 */class Is{constructor(e,n){this._service=e,n instanceof Vt?this._location=n:this._location=Vt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Is(e,n)}get root(){const e=new Vt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return cA(this._location.path)}get storage(){return this._service}get parent(){const e=GV(this._location.path);if(e===null)return null;const n=new Vt(this._location.bucket,e);return new Is(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw bV(e)}}function hF(t,e,n){t._throwIfRoot("uploadBytes");const r=lF(t.storage,t._location,uA(),new mr(e,!0),n);return t.storage.makeRequestWithTokens(r,gA).then(s=>({metadata:s,ref:t}))}function dF(t){t._throwIfRoot("getDownloadURL");const e=iF(t.storage,t._location,uA());return t.storage.makeRequestWithTokens(e,gA).then(n=>{if(n===null)throw AV();return n})}function fF(t,e){const n=QV(t._location.path,e),r=new Vt(t._location.bucket,n);return new Is(t.storage,r)}/**
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
 */function pF(t){return/^[A-Za-z]+:\/\//.test(t)}function gF(t,e){return new Is(t,e)}function mA(t,e){if(t instanceof Wp){const n=t;if(n._bucket==null)throw TV();const r=new Is(n,n._bucket);return e!=null?mA(r,e):r}else return e!==void 0?fF(t,e):t}function mF(t,e){if(e&&pF(e)){if(t instanceof Wp)return gF(t,e);throw Id("To use ref(service, url), the first argument must be a Storage instance.")}else return mA(t,e)}function j_(t,e){const n=e==null?void 0:e[nA];return n==null?null:Vt.makeFromBucketSpec(n,t)}function _F(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Dv(s,t.app.options.projectId))}class Wp{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=tA,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=hV,this._maxUploadRetryTime=dV,this._requests=new Set,s!=null?this._bucket=Vt.makeFromBucketSpec(s,this._host):this._bucket=j_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Vt.makeFromBucketSpec(this._url,e):this._bucket=j_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){B_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){B_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Is(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new CV(rA());{const o=FV(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const W_="@firebase/storage",q_="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A="storage";function Q2(t,e,n){return t=Ge(t),hF(t,e,n)}function Y2(t){return t=Ge(t),dF(t)}function X2(t,e){return t=Ge(t),mF(t,e)}function yF(t=Mc(),e){t=Ge(t);const r=xc(t,_A).getImmediate({identifier:e}),s=kv("storage");return s&&vF(r,...s),r}function vF(t,e,n,r={}){_F(t,e,n,r)}function EF(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Wp(n,r,s,e,Mr)}function wF(){xn(new un(_A,EF,"PUBLIC").setMultipleInstances(!0)),Ft(W_,q_,""),Ft(W_,q_,"esm2017")}wF();function TF(t){return(e,n)=>{const r=gN(e,n).run(()=>Ei(t));mN.set(e,r),_N(r,e)}}function J2(t){return pN?vf(RE(t)):null}function IF(t,{firebaseApp:e,modules:n=[]}){t.provide(AE,e);for(const r of n)r(e,t)}function AF(){return yA().__VUE_DEVTOOLS_GLOBAL_HOOK__}function yA(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const RF=typeof Proxy=="function",bF="devtools-plugin:setup",CF="plugin:settings:set";let Fs,Ad;function SF(){var t;return Fs!==void 0||(typeof window<"u"&&window.performance?(Fs=!0,Ad=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(Fs=!0,Ad=global.perf_hooks.performance):Fs=!1),Fs}function PF(){return SF()?Ad.now():Date.now()}class kF{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const a=e.settings[o];r[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o},now(){return PF()}},n&&n.on(CF,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:a,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function qp(t,e){const n=t,r=yA(),s=AF(),i=RF&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(bF,t,e);else{const o=i?new kF(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Rd;const ea=t=>Rd=t,vA=Symbol("pinia");function As(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var On;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(On||(On={}));const vu=typeof window<"u",pc=vu,H_=(()=>typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:typeof globalThis=="object"?globalThis:{HTMLElement:null})();function NF(t,{autoBom:e=!1}={}){return e&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob([String.fromCharCode(65279),t],{type:t.type}):t}function Hp(t,e,n){const r=new XMLHttpRequest;r.open("GET",t),r.responseType="blob",r.onload=function(){TA(r.response,e,n)},r.onerror=function(){console.error("could not download file")},r.send()}function EA(t){const e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch{}return e.status>=200&&e.status<=299}function _l(t){try{t.dispatchEvent(new MouseEvent("click"))}catch{const n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(n)}}const yl=typeof navigator=="object"?navigator:{userAgent:""},wA=(()=>/Macintosh/.test(yl.userAgent)&&/AppleWebKit/.test(yl.userAgent)&&!/Safari/.test(yl.userAgent))(),TA=vu?typeof HTMLAnchorElement<"u"&&"download"in HTMLAnchorElement.prototype&&!wA?OF:"msSaveOrOpenBlob"in yl?DF:xF:()=>{};function OF(t,e="download",n){const r=document.createElement("a");r.download=e,r.rel="noopener",typeof t=="string"?(r.href=t,r.origin!==location.origin?EA(r.href)?Hp(t,e,n):(r.target="_blank",_l(r)):_l(r)):(r.href=URL.createObjectURL(t),setTimeout(function(){URL.revokeObjectURL(r.href)},4e4),setTimeout(function(){_l(r)},0))}function DF(t,e="download",n){if(typeof t=="string")if(EA(t))Hp(t,e,n);else{const r=document.createElement("a");r.href=t,r.target="_blank",setTimeout(function(){_l(r)})}else navigator.msSaveOrOpenBlob(NF(t,n),e)}function xF(t,e,n,r){if(r=r||open("","_blank"),r&&(r.document.title=r.document.body.innerText="downloading..."),typeof t=="string")return Hp(t,e,n);const s=t.type==="application/octet-stream",i=/constructor/i.test(String(H_.HTMLElement))||"safari"in H_,o=/CriOS\/[\d]+/.test(navigator.userAgent);if((o||s&&i||wA)&&typeof FileReader<"u"){const a=new FileReader;a.onloadend=function(){let l=a.result;if(typeof l!="string")throw r=null,new Error("Wrong reader.result type");l=o?l:l.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=l:location.assign(l),r=null},a.readAsDataURL(t)}else{const a=URL.createObjectURL(t);r?r.location.assign(a):location.href=a,r=null,setTimeout(function(){URL.revokeObjectURL(a)},4e4)}}function nt(t,e){const n="🍍 "+t;typeof __VUE_DEVTOOLS_TOAST__=="function"?__VUE_DEVTOOLS_TOAST__(n,e):e==="error"?console.error(n):e==="warn"?console.warn(n):console.log(n)}function Kp(t){return"_a"in t&&"install"in t}function IA(){if(!("clipboard"in navigator))return nt("Your browser doesn't support the Clipboard API","error"),!0}function AA(t){return t instanceof Error&&t.message.toLowerCase().includes("document is not focused")?(nt('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.',"warn"),!0):!1}async function MF(t){if(!IA())try{await navigator.clipboard.writeText(JSON.stringify(t.state.value)),nt("Global state copied to clipboard.")}catch(e){if(AA(e))return;nt("Failed to serialize the state. Check the console for more details.","error"),console.error(e)}}async function LF(t){if(!IA())try{RA(t,JSON.parse(await navigator.clipboard.readText())),nt("Global state pasted from clipboard.")}catch(e){if(AA(e))return;nt("Failed to deserialize the state from clipboard. Check the console for more details.","error"),console.error(e)}}async function VF(t){try{TA(new Blob([JSON.stringify(t.state.value)],{type:"text/plain;charset=utf-8"}),"pinia-state.json")}catch(e){nt("Failed to export the state as JSON. Check the console for more details.","error"),console.error(e)}}let Vn;function FF(){Vn||(Vn=document.createElement("input"),Vn.type="file",Vn.accept=".json");function t(){return new Promise((e,n)=>{Vn.onchange=async()=>{const r=Vn.files;if(!r)return e(null);const s=r.item(0);return e(s?{text:await s.text(),file:s}:null)},Vn.oncancel=()=>e(null),Vn.onerror=n,Vn.click()})}return t}async function UF(t){try{const n=await FF()();if(!n)return;const{text:r,file:s}=n;RA(t,JSON.parse(r)),nt(`Global state imported from "${s.name}".`)}catch(e){nt("Failed to import the state from JSON. Check the console for more details.","error"),console.error(e)}}function RA(t,e){for(const n in e){const r=t.state.value[n];r?Object.assign(r,e[n]):t.state.value[n]=e[n]}}function tn(t){return{_custom:{display:t}}}const bA="🍍 Pinia (root)",bd="_root";function $F(t){return Kp(t)?{id:bd,label:bA}:{id:t.$id,label:t.$id}}function BF(t){if(Kp(t)){const n=Array.from(t._s.keys()),r=t._s;return{state:n.map(i=>({editable:!0,key:i,value:t.state.value[i]})),getters:n.filter(i=>r.get(i)._getters).map(i=>{const o=r.get(i);return{editable:!1,key:i,value:o._getters.reduce((a,l)=>(a[l]=o[l],a),{})}})}}const e={state:Object.keys(t.$state).map(n=>({editable:!0,key:n,value:t.$state[n]}))};return t._getters&&t._getters.length&&(e.getters=t._getters.map(n=>({editable:!1,key:n,value:t[n]}))),t._customProperties.size&&(e.customProperties=Array.from(t._customProperties).map(n=>({editable:!0,key:n,value:t[n]}))),e}function jF(t){return t?Array.isArray(t)?t.reduce((e,n)=>(e.keys.push(n.key),e.operations.push(n.type),e.oldValue[n.key]=n.oldValue,e.newValue[n.key]=n.newValue,e),{oldValue:{},keys:[],operations:[],newValue:{}}):{operation:tn(t.type),key:tn(t.key),oldValue:t.oldValue,newValue:t.newValue}:{}}function WF(t){switch(t){case On.direct:return"mutation";case On.patchFunction:return"$patch";case On.patchObject:return"$patch";default:return"unknown"}}let Qs=!0;const vl=[],Kr="pinia:mutations",pt="pinia",{assign:qF}=Object,gc=t=>"🍍 "+t;function HF(t,e){qp({id:"dev.esm.pinia",label:"Pinia 🍍",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:vl,app:t},n=>{typeof n.now!="function"&&nt("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),n.addTimelineLayer({id:Kr,label:"Pinia 🍍",color:15064968}),n.addInspector({id:pt,label:"Pinia 🍍",icon:"storage",treeFilterPlaceholder:"Search stores",actions:[{icon:"content_copy",action:()=>{MF(e)},tooltip:"Serialize and copy the state"},{icon:"content_paste",action:async()=>{await LF(e),n.sendInspectorTree(pt),n.sendInspectorState(pt)},tooltip:"Replace the state with the content of your clipboard"},{icon:"save",action:()=>{VF(e)},tooltip:"Save the state as a JSON file"},{icon:"folder_open",action:async()=>{await UF(e),n.sendInspectorTree(pt),n.sendInspectorState(pt)},tooltip:"Import the state from a JSON file"}],nodeActions:[{icon:"restore",tooltip:'Reset the state (with "$reset")',action:r=>{const s=e._s.get(r);s?typeof s.$reset!="function"?nt(`Cannot reset "${r}" store because it doesn't have a "$reset" method implemented.`,"warn"):(s.$reset(),nt(`Store "${r}" reset.`)):nt(`Cannot reset "${r}" store because it wasn't found.`,"warn")}}]}),n.on.inspectComponent((r,s)=>{const i=r.componentInstance&&r.componentInstance.proxy;if(i&&i._pStores){const o=r.componentInstance.proxy._pStores;Object.values(o).forEach(a=>{r.instanceData.state.push({type:gc(a.$id),key:"state",editable:!0,value:a._isOptionsAPI?{_custom:{value:te(a.$state),actions:[{icon:"restore",tooltip:"Reset the state of this store",action:()=>a.$reset()}]}}:Object.keys(a.$state).reduce((l,c)=>(l[c]=a.$state[c],l),{})}),a._getters&&a._getters.length&&r.instanceData.state.push({type:gc(a.$id),key:"getters",editable:!1,value:a._getters.reduce((l,c)=>{try{l[c]=a[c]}catch(u){l[c]=u}return l},{})})})}}),n.on.getInspectorTree(r=>{if(r.app===t&&r.inspectorId===pt){let s=[e];s=s.concat(Array.from(e._s.values())),r.rootNodes=(r.filter?s.filter(i=>"$id"in i?i.$id.toLowerCase().includes(r.filter.toLowerCase()):bA.toLowerCase().includes(r.filter.toLowerCase())):s).map($F)}}),n.on.getInspectorState(r=>{if(r.app===t&&r.inspectorId===pt){const s=r.nodeId===bd?e:e._s.get(r.nodeId);if(!s)return;s&&(r.state=BF(s))}}),n.on.editInspectorState((r,s)=>{if(r.app===t&&r.inspectorId===pt){const i=r.nodeId===bd?e:e._s.get(r.nodeId);if(!i)return nt(`store "${r.nodeId}" not found`,"error");const{path:o}=r;Kp(i)?o.unshift("state"):(o.length!==1||!i._customProperties.has(o[0])||o[0]in i.$state)&&o.unshift("$state"),Qs=!1,r.set(i,o,r.state.value),Qs=!0}}),n.on.editComponentState(r=>{if(r.type.startsWith("🍍")){const s=r.type.replace(/^🍍\s*/,""),i=e._s.get(s);if(!i)return nt(`store "${s}" not found`,"error");const{path:o}=r;if(o[0]!=="state")return nt(`Invalid path for store "${s}":
${o}
Only state can be modified.`);o[0]="$state",Qs=!1,r.set(i,o,r.state.value),Qs=!0}})})}function KF(t,e){vl.includes(gc(e.$id))||vl.push(gc(e.$id)),qp({id:"dev.esm.pinia",label:"Pinia 🍍",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:vl,app:t,settings:{logStoreChanges:{label:"Notify about new/deleted stores",type:"boolean",defaultValue:!0}}},n=>{const r=typeof n.now=="function"?n.now.bind(n):Date.now;e.$onAction(({after:o,onError:a,name:l,args:c})=>{const u=CA++;n.addTimelineEvent({layerId:Kr,event:{time:r(),title:"🛫 "+l,subtitle:"start",data:{store:tn(e.$id),action:tn(l),args:c},groupId:u}}),o(h=>{yr=void 0,n.addTimelineEvent({layerId:Kr,event:{time:r(),title:"🛬 "+l,subtitle:"end",data:{store:tn(e.$id),action:tn(l),args:c,result:h},groupId:u}})}),a(h=>{yr=void 0,n.addTimelineEvent({layerId:Kr,event:{time:r(),logType:"error",title:"💥 "+l,subtitle:"end",data:{store:tn(e.$id),action:tn(l),args:c,error:h},groupId:u}})})},!0),e._customProperties.forEach(o=>{ss(()=>Er(e[o]),(a,l)=>{n.notifyComponentUpdate(),n.sendInspectorState(pt),Qs&&n.addTimelineEvent({layerId:Kr,event:{time:r(),title:"Change",subtitle:o,data:{newValue:a,oldValue:l},groupId:yr}})},{deep:!0})}),e.$subscribe(({events:o,type:a},l)=>{if(n.notifyComponentUpdate(),n.sendInspectorState(pt),!Qs)return;const c={time:r(),title:WF(a),data:qF({store:tn(e.$id)},jF(o)),groupId:yr};a===On.patchFunction?c.subtitle="⤵️":a===On.patchObject?c.subtitle="🧩":o&&!Array.isArray(o)&&(c.subtitle=o.type),o&&(c.data["rawEvent(s)"]={_custom:{display:"DebuggerEvent",type:"object",tooltip:"raw DebuggerEvent[]",value:o}}),n.addTimelineEvent({layerId:Kr,event:c})},{detached:!0,flush:"sync"});const s=e._hotUpdate;e._hotUpdate=Wn(o=>{s(o),n.addTimelineEvent({layerId:Kr,event:{time:r(),title:"🔥 "+e.$id,subtitle:"HMR update",data:{store:tn(e.$id),info:tn("HMR update")}}}),n.notifyComponentUpdate(),n.sendInspectorTree(pt),n.sendInspectorState(pt)});const{$dispose:i}=e;e.$dispose=()=>{i(),n.notifyComponentUpdate(),n.sendInspectorTree(pt),n.sendInspectorState(pt),n.getSettings().logStoreChanges&&nt(`Disposed "${e.$id}" store 🗑`)},n.notifyComponentUpdate(),n.sendInspectorTree(pt),n.sendInspectorState(pt),n.getSettings().logStoreChanges&&nt(`"${e.$id}" store installed 🆕`)})}let CA=0,yr;function K_(t,e,n){const r=e.reduce((s,i)=>(s[i]=te(t)[i],s),{});for(const s in r)t[s]=function(){const i=CA,o=n?new Proxy(t,{get(...l){return yr=i,Reflect.get(...l)},set(...l){return yr=i,Reflect.set(...l)}}):t;yr=i;const a=r[s].apply(o,arguments);return yr=void 0,a}}function zF({app:t,store:e,options:n}){if(e.$id.startsWith("__hot:"))return;e._isOptionsAPI=!!n.state,K_(e,Object.keys(n.actions),e._isOptionsAPI);const r=e._hotUpdate;te(e)._hotUpdate=function(s){r.apply(this,arguments),K_(e,Object.keys(s._hmrPayload.actions),!!e._isOptionsAPI)},KF(t,e)}function GF(){const t=Bd(!0),e=t.run(()=>Ei({}));let n=[],r=[];const s=Wn({install(i){ea(s),s._a=i,i.provide(vA,s),i.config.globalProperties.$pinia=s,pc&&HF(i,s),r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Bk?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return pc&&typeof Proxy<"u"&&s.use(zF),s}function SA(t,e){for(const n in e){const r=e[n];if(!(n in t))continue;const s=t[n];As(s)&&As(r)&&!Pe(r)&&!Cn(r)?t[n]=SA(s,r):t[n]=r}return t}const QF=()=>{};function z_(t,e,n,r=QF){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&wy()&&dR(s),s}function Us(t,...e){t.slice().forEach(n=>{n(...e)})}const YF=t=>t();function Cd(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];As(s)&&As(r)&&t.hasOwnProperty(n)&&!Pe(r)&&!Cn(r)?t[n]=Cd(s,r):t[n]=r}return t}const XF=Symbol("pinia:skipHydration");function JF(t){return!As(t)||!t.hasOwnProperty(XF)}const{assign:Ht}=Object;function G_(t){return!!(Pe(t)&&t.effect)}function Q_(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let l;function c(){!a&&!r&&(n.state.value[t]=s?s():{});const u=ig(r?Ei(s?s():{}).value:n.state.value[t]);return Ht(u,i,Object.keys(o||{}).reduce((h,d)=>(d in u&&console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${d}" in store "${t}".`),h[d]=Wn(Mt(()=>{ea(n);const p=n._s.get(t);return o[d].call(p,p)})),h),{}))}return l=Sd(t,c,e,n,r,!0),l}function Sd(t,e,n={},r,s,i){let o;const a=Ht({actions:{}},n);if(!r._e.active)throw new Error("Pinia destroyed");const l={deep:!0};l.onTrigger=$=>{c?p=$:c==!1&&!W._hotUpdating&&(Array.isArray(p)?p.push($):console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."))};let c,u,h=[],d=[],p;const m=r.state.value[t];!i&&!m&&!s&&(r.state.value[t]={});const E=Ei({});let y;function A($){let F;c=u=!1,p=[],typeof $=="function"?($(r.state.value[t]),F={type:On.patchFunction,storeId:t,events:p}):(Cd(r.state.value[t],$),F={type:On.patchObject,payload:$,storeId:t,events:p});const ae=y=Symbol();Cl().then(()=>{y===ae&&(c=!0)}),u=!0,Us(h,F,r.state.value[t])}const O=i?function(){const{state:F}=n,ae=F?F():{};this.$patch(Le=>{Ht(Le,ae)})}:()=>{throw new Error(`🍍: Store "${t}" is built using the setup syntax and does not implement $reset().`)};function S(){o.stop(),h=[],d=[],r._s.delete(t)}function K($,F){return function(){ea(r);const ae=Array.from(arguments),Le=[],pn=[];function kt(X){Le.push(X)}function Qe(X){pn.push(X)}Us(d,{args:ae,name:$,store:W,after:kt,onError:Qe});let re;try{re=F.apply(this&&this.$id===t?this:W,ae)}catch(X){throw Us(pn,X),X}return re instanceof Promise?re.then(X=>(Us(Le,X),X)).catch(X=>(Us(pn,X),Promise.reject(X))):(Us(Le,re),re)}}const U=Wn({actions:{},getters:{},state:[],hotState:E}),ye={_p:r,$id:t,$onAction:z_.bind(null,d),$patch:A,$reset:O,$subscribe($,F={}){const ae=z_(h,$,F.detached,()=>Le()),Le=o.run(()=>ss(()=>r.state.value[t],pn=>{(F.flush==="sync"?u:c)&&$({storeId:t,type:On.direct,events:p},pn)},Ht({},l,F)));return ae},$dispose:S},W=sa(Ht({_hmrPayload:U,_customProperties:Wn(new Set)},ye));r._s.set(t,W);const Ie=(r._a&&r._a.runWithContext||YF)(()=>r._e.run(()=>(o=Bd()).run(e)));for(const $ in Ie){const F=Ie[$];if(Pe(F)&&!G_(F)||Cn(F))s?Ua(E.value,$,Au(Ie,$)):i||(m&&JF(F)&&(Pe(F)?F.value=m[$]:Cd(F,m[$])),r.state.value[t][$]=F),U.state.push($);else if(typeof F=="function"){const ae=s?F:K($,F);Ie[$]=ae,U.actions[$]=F,a.actions[$]=F}else G_(F)&&(U.getters[$]=i?n.getters[$]:F,vu&&(Ie._getters||(Ie._getters=Wn([]))).push($))}if(Ht(W,Ie),Ht(te(W),Ie),Object.defineProperty(W,"$state",{get:()=>s?E.value:r.state.value[t],set:$=>{if(s)throw new Error("cannot set hotState");A(F=>{Ht(F,$)})}}),W._hotUpdate=Wn($=>{W._hotUpdating=!0,$._hmrPayload.state.forEach(F=>{if(F in W.$state){const ae=$.$state[F],Le=W.$state[F];typeof ae=="object"&&As(ae)&&As(Le)?SA(ae,Le):$.$state[F]=Le}Ua(W,F,Au($.$state,F))}),Object.keys(W.$state).forEach(F=>{F in $.$state||$u(W,F)}),c=!1,u=!1,r.state.value[t]=Au($._hmrPayload,"hotState"),u=!0,Cl().then(()=>{c=!0});for(const F in $._hmrPayload.actions){const ae=$[F];Ua(W,F,K(F,ae))}for(const F in $._hmrPayload.getters){const ae=$._hmrPayload.getters[F],Le=i?Mt(()=>(ea(r),ae.call(W,W))):ae;Ua(W,F,Le)}Object.keys(W._hmrPayload.getters).forEach(F=>{F in $._hmrPayload.getters||$u(W,F)}),Object.keys(W._hmrPayload.actions).forEach(F=>{F in $._hmrPayload.actions||$u(W,F)}),W._hmrPayload=$._hmrPayload,W._getters=$._getters,W._hotUpdating=!1}),pc){const $={writable:!0,configurable:!0,enumerable:!1};["_p","_hmrPayload","_getters","_customProperties"].forEach(F=>{Object.defineProperty(W,F,Ht({value:W[F]},$))})}return r._p.forEach($=>{if(pc){const F=o.run(()=>$({store:W,app:r._a,pinia:r,options:a}));Object.keys(F||{}).forEach(ae=>W._customProperties.add(ae)),Ht(W,F)}else Ht(W,o.run(()=>$({store:W,app:r._a,pinia:r,options:a})))}),W.$state&&typeof W.$state=="object"&&typeof W.$state.constructor=="function"&&!W.$state.constructor.toString().includes("[native code]")&&console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${W.$id}".`),m&&i&&n.hydrate&&n.hydrate(W.$state,m),c=!0,u=!0,W}function Z2(t,e,n){let r,s;const i=typeof e=="function";if(typeof t=="string")r=t,s=i?n:e;else if(s=t,r=t.id,typeof r!="string")throw new Error('[🍍]: "defineStore()" must be passed a store id as its first argument.');function o(a,l){const c=Qb();if(a=a||(c?Yt(vA,null):null),a&&ea(a),!Rd)throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);a=Rd,a._s.has(r)||(i?Sd(r,e,s,a):Q_(r,s,a),o._pinia=a);const u=a._s.get(r);if(l){const h="__hot:"+r,d=i?Sd(h,e,s,a,!0):Q_(h,Ht({},s),a,!0);l._hotUpdate(d),delete a.state.value[h],a._s.delete(h)}if(vu){const h=Sc();if(h&&h.proxy&&!l){const d=h.proxy,p="_pStores"in d?d._pStores:d._pStores={};p[r]=u}}return u}return o.$id=r,o}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Bn=typeof window<"u";function ZF(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ee=Object.assign;function lh(t,e){const n={};for(const r in e){const s=e[r];n[r]=jt(s)?s.map(t):t(s)}return n}const To=()=>{},jt=Array.isArray;function ge(t){const e=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+t].concat(e))}const eU=/\/$/,tU=t=>t.replace(eU,"");function ch(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=sU(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function nU(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Y_(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function X_(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Dr(e.matched[r],n.matched[s])&&PA(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Dr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function PA(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!rU(t[n],e[n]))return!1;return!0}function rU(t,e){return jt(t)?J_(t,e):jt(e)?J_(e,t):t===e}function J_(t,e){return jt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function sU(t,e){if(t.startsWith("/"))return t;if(!e.startsWith("/"))return ge(`Cannot resolve a relative location without an absolute path. Trying to resolve "${t}" from "${e}". It should look like "/${e}".`),t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var ta;(function(t){t.pop="pop",t.push="push"})(ta||(ta={}));var Io;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Io||(Io={}));function iU(t){if(!t)if(Bn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),tU(t)}const oU=/^[^#]+#/;function aU(t,e){return t.replace(oU,"#")+e}function lU(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Eu=()=>({left:window.pageXOffset,top:window.pageYOffset});function cU(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#");if(typeof t.el=="string"&&(!r||!document.getElementById(t.el.slice(1))))try{const i=document.querySelector(t.el);if(r&&i){ge(`The selector "${t.el}" should be passed as "el: document.querySelector('${t.el}')" because it starts with "#".`);return}}catch{ge(`The selector "${t.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s){ge(`Couldn't find element using selector "${t.el}" returned by scrollBehavior.`);return}e=lU(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Z_(t,e){return(history.state?history.state.position-e:-1)+t}const Pd=new Map;function uU(t,e){Pd.set(t,e)}function hU(t){const e=Pd.get(t);return Pd.delete(t),e}let dU=()=>location.protocol+"//"+location.host;function kA(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Y_(l,"")}return Y_(n,t)+r+s}function fU(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const p=kA(t,location),m=n.value,E=e.value;let y=0;if(d){if(n.value=p,e.value=d,o&&o===m){o=null;return}y=E?d.position-E.position:0}else r(p);s.forEach(A=>{A(n.value,m,{delta:y,type:ta.pop,direction:y?y>0?Io.forward:Io.back:Io.unknown})})};function l(){o=n.value}function c(d){s.push(d);const p=()=>{const m=s.indexOf(d);m>-1&&s.splice(m,1)};return i.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(Ee({},d.state,{scroll:Eu()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function ey(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Eu():null}}function pU(t){const{history:e,location:n}=window,r={value:kA(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:dU()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(p){ge("Error with push/replace State",p),n[u?"replace":"assign"](d)}}function o(l,c){const u=Ee({},e.state,ey(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=Ee({},s.value,e.state,{forward:l,scroll:Eu()});e.state||ge(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),i(u.current,u,!0);const h=Ee({},ey(r.value,l,null),{position:u.position+1},c);i(l,h,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function gU(t){t=iU(t);const e=pU(t),n=fU(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ee({location:"",base:t,go:r,createHref:aU.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function mU(t){return typeof t=="string"||t&&typeof t=="object"}function NA(t){return typeof t=="string"||typeof t=="symbol"}const lr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},OA=Symbol("navigation failure");var ty;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ty||(ty={}));const _U={1({location:t,currentLocation:e}){return`No match for
 ${JSON.stringify(t)}${e?`
while being at
`+JSON.stringify(e):""}`},2({from:t,to:e}){return`Redirected from "${t.fullPath}" to "${vU(e)}" via a navigation guard.`},4({from:t,to:e}){return`Navigation aborted from "${t.fullPath}" to "${e.fullPath}" via a navigation guard.`},8({from:t,to:e}){return`Navigation cancelled from "${t.fullPath}" to "${e.fullPath}" with a new navigation.`},16({from:t,to:e}){return`Avoided redundant navigation to current location: "${t.fullPath}".`}};function vi(t,e){return Ee(new Error(_U[t](e)),{type:t,[OA]:!0},e)}function Fn(t,e){return t instanceof Error&&OA in t&&(e==null||!!(t.type&e))}const yU=["params","query","hash"];function vU(t){if(typeof t=="string")return t;if("path"in t)return t.path;const e={};for(const n of yU)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}const ny="[^/]+?",EU={sensitive:!1,strict:!1,start:!0,end:!0},wU=/[.+*?^${}()[\]/\\]/g;function TU(t,e){const n=Ee({},EU,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const d=c[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(wU,"\\$&"),p+=40;else if(d.type===1){const{value:m,repeatable:E,optional:y,regexp:A}=d;i.push({name:m,repeatable:E,optional:y});const O=A||ny;if(O!==ny){p+=10;try{new RegExp(`(${O})`)}catch(K){throw new Error(`Invalid custom RegExp for param "${m}" (${O}): `+K.message)}}let S=E?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;h||(S=y&&c.length<2?`(?:/${S})`:"/"+S),y&&(S+="?"),s+=S,p+=20,y&&(p+=-8),E&&(p+=-20),O===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",m=i[d-1];h[m.name]=p&&m.repeatable?p.split("/"):p}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:m,repeatable:E,optional:y}=p,A=m in c?c[m]:"";if(jt(A)&&!E)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const O=jt(A)?A.join("/"):A;if(!O)if(y)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=O}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function IU(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function AU(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=IU(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(ry(r))return 1;if(ry(s))return-1}return s.length-r.length}function ry(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const RU={type:0,value:""},bU=/[a-zA-Z0-9_]/;function CU(t){if(!t)return[[]];if(t==="/")return[[RU]];if(!t.startsWith("/"))throw new Error(`Route paths should start with a "/": "${t}" should be "/${t}".`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:l==="("?n=2:bU.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function SU(t,e,n){const r=TU(CU(t.path),n);{const i=new Set;for(const o of r.keys)i.has(o.name)&&ge(`Found duplicated params with name "${o.name}" for path "${t.path}". Only the last one will be available on "$route.params".`),i.add(o.name)}const s=Ee(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function PU(t,e){const n=[],r=new Map;e=oy({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const p=!d,m=kU(u);xU(m,h),m.aliasOf=d&&d.record;const E=oy(e,u),y=[m];if("alias"in u){const S=typeof u.alias=="string"?[u.alias]:u.alias;for(const K of S)y.push(Ee({},m,{components:d?d.record.components:m.components,path:K,aliasOf:d?d.record:m}))}let A,O;for(const S of y){const{path:K}=S;if(h&&K[0]!=="/"){const U=h.record.path,ye=U[U.length-1]==="/"?"":"/";S.path=h.record.path+(K&&ye+K)}if(S.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(A=SU(S,h,E),h&&K[0]==="/"&&MU(A,h),d?(d.alias.push(A),DU(d,A)):(O=O||A,O!==A&&O.alias.push(A),p&&u.name&&!iy(A)&&o(u.name)),m.children){const U=m.children;for(let ye=0;ye<U.length;ye++)i(U[ye],A,d&&d.children[ye])}d=d||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&l(A)}return O?()=>{o(O)}:To}function o(u){if(NA(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&AU(u,n[h])>=0&&(u.record.path!==n[h].record.path||!DA(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!iy(u)&&r.set(u.record.name,u)}function c(u,h){let d,p={},m,E;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw vi(1,{location:u});{const O=Object.keys(u.params||{}).filter(S=>!d.keys.find(K=>K.name===S));O.length&&ge(`Discarded invalid param(s) "${O.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}E=d.record.name,p=Ee(sy(h.params,d.keys.filter(O=>!O.optional).map(O=>O.name)),u.params&&sy(u.params,d.keys.map(O=>O.name))),m=d.stringify(p)}else if("path"in u)m=u.path,m.startsWith("/")||ge(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`),d=n.find(O=>O.re.test(m)),d&&(p=d.parse(m),E=d.record.name);else{if(d=h.name?r.get(h.name):n.find(O=>O.re.test(h.path)),!d)throw vi(1,{location:u,currentLocation:h});E=d.record.name,p=Ee({},h.params,u.params),m=d.stringify(p)}const y=[];let A=d;for(;A;)y.unshift(A.record),A=A.parent;return{name:E,path:m,params:p,matched:y,meta:OU(y)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function sy(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function kU(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:NU(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function NU(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function iy(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function OU(t){return t.reduce((e,n)=>Ee(e,n.meta),{})}function oy(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function kd(t,e){return t.name===e.name&&t.optional===e.optional&&t.repeatable===e.repeatable}function DU(t,e){for(const n of t.keys)if(!n.optional&&!e.keys.find(kd.bind(null,n)))return ge(`Alias "${e.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${n.name}"`);for(const n of e.keys)if(!n.optional&&!t.keys.find(kd.bind(null,n)))return ge(`Alias "${e.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${n.name}"`)}function xU(t,e){e&&e.record.name&&!t.name&&!t.path&&ge(`The route named "${String(e.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function MU(t,e){for(const n of e.keys)if(!t.keys.find(kd.bind(null,n)))return ge(`Absolute path "${t.record.path}" must have the exact same param named "${n.name}" as its parent "${e.record.path}".`)}function DA(t,e){return e.children.some(n=>n===t||DA(t,n))}const xA=/#/g,LU=/&/g,VU=/\//g,FU=/=/g,UU=/\?/g,MA=/\+/g,$U=/%5B/g,BU=/%5D/g,LA=/%5E/g,jU=/%60/g,VA=/%7B/g,WU=/%7C/g,FA=/%7D/g,qU=/%20/g;function zp(t){return encodeURI(""+t).replace(WU,"|").replace($U,"[").replace(BU,"]")}function HU(t){return zp(t).replace(VA,"{").replace(FA,"}").replace(LA,"^")}function Nd(t){return zp(t).replace(MA,"%2B").replace(qU,"+").replace(xA,"%23").replace(LU,"%26").replace(jU,"`").replace(VA,"{").replace(FA,"}").replace(LA,"^")}function KU(t){return Nd(t).replace(FU,"%3D")}function zU(t){return zp(t).replace(xA,"%23").replace(UU,"%3F")}function GU(t){return t==null?"":zU(t).replace(VU,"%2F")}function na(t){try{return decodeURIComponent(""+t)}catch{ge(`Error decoding "${t}". Using original value`)}return""+t}function QU(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(MA," "),o=i.indexOf("="),a=na(o<0?i:i.slice(0,o)),l=o<0?null:na(i.slice(o+1));if(a in e){let c=e[a];jt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function ay(t){let e="";for(let n in t){const r=t[n];if(n=KU(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(jt(r)?r.map(i=>i&&Nd(i)):[r&&Nd(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function YU(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=jt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const XU=Symbol("router view location matched"),ly=Symbol("router view depth"),wu=Symbol("router"),UA=Symbol("route location"),Od=Symbol("router view location");function Ki(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function hr(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(vi(4,{from:n,to:e})):h instanceof Error?a(h):mU(h)?a(vi(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},c=t.call(r&&r.instances[s],e,n,JU(l,e,n));let u=Promise.resolve(c);if(t.length<3&&(u=u.then(l)),t.length>2){const h=`The "next" callback was never called inside of ${t.name?'"'+t.name+'"':""}:
${t.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof c=="object"&&"then"in c)u=u.then(d=>l._called?d:(ge(h),Promise.reject(new Error("Invalid navigation guard"))));else if(c!==void 0&&!l._called){ge(h),a(new Error("Invalid navigation guard"));return}}u.catch(h=>a(h))})}function JU(t,e,n){let r=0;return function(){r++===1&&ge(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${e.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),t._called=!0,r===1&&t.apply(null,arguments)}}function uh(t,e,n,r){const s=[];for(const i of t){!i.components&&!i.children.length&&ge(`Record with path "${i.path}" is either missing a "component(s)" or "children" property.`);for(const o in i.components){let a=i.components[o];{if(!a||typeof a!="object"&&typeof a!="function")throw ge(`Component "${o}" in record with path "${i.path}" is not a valid component. Received "${String(a)}".`),new Error("Invalid route component");if("then"in a){ge(`Component "${o}" in record with path "${i.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const l=a;a=()=>l}else a.__asyncLoader&&!a.__warnedDefineAsync&&(a.__warnedDefineAsync=!0,ge(`Component "${o}" in record with path "${i.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(ZU(a)){const c=(a.__vccOpts||a)[e];c&&s.push(hr(c,n,r,i,o))}else{let l=a();"catch"in l||(ge(`Component "${o}" in record with path "${i.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),l=Promise.resolve(l)),s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=ZF(c)?c.default:c;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&hr(d,n,r,i,o)()}))}}}return s}function ZU(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function cy(t){const e=Yt(wu),n=Yt(UA),r=Mt(()=>e.resolve(Er(t.to))),s=Mt(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Dr.bind(null,u));if(d>-1)return d;const p=uy(l[c-2]);return c>1&&uy(u)===p&&h[h.length-1].path!==p?h.findIndex(Dr.bind(null,l[c-2])):d}),i=Mt(()=>s.value>-1&&r2(n.params,r.value.params)),o=Mt(()=>s.value>-1&&s.value===n.matched.length-1&&PA(n.params,r.value.params));function a(l={}){return n2(l)?e[Er(t.replace)?"replace":"push"](Er(t.to)).catch(To):Promise.resolve()}if(Bn){const l=Sc();if(l){const c={route:r.value,isActive:i.value,isExactActive:o.value};l.__vrl_devtools=l.__vrl_devtools||[],l.__vrl_devtools.push(c),Ab(()=>{c.route=r.value,c.isActive=i.value,c.isExactActive=o.value},{flush:"post"})}}return{route:r,href:Mt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const e2=Xd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:cy,setup(t,{slots:e}){const n=sa(cy(t)),{options:r}=Yt(wu),s=Mt(()=>({[hy(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[hy(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Av("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),t2=e2;function n2(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function r2(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!jt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function uy(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const hy=(t,e,n)=>t??e??n,s2=Xd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){i2();const r=Yt(Od),s=Mt(()=>t.route||r.value),i=Yt(ly,0),o=Mt(()=>{let c=Er(i);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Mt(()=>s.value.matched[o.value]);il(ly,Mt(()=>o.value+1)),il(XU,a),il(Od,s);const l=Ei();return ss(()=>[l.value,a.value,t.name],([c,u,h],[d,p,m])=>{u&&(u.instances[h]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Dr(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(E=>E(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return dy(n.default,{Component:d,route:c});const p=h.props[u],m=p?p===!0?c.params:typeof p=="function"?p(c):p:null,y=Av(d,Ee({},m,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(h.instances[u]=null)},ref:l}));if(Bn&&y.ref){const A={depth:o.value,name:h.name,path:h.path,meta:h.meta};(jt(y.ref)?y.ref.map(S=>S.i):[y.ref.i]).forEach(S=>{S.__vrv_devtools=A})}return dy(n.default,{Component:y,route:c})||y}}});function dy(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const $A=s2;function i2(){const t=Sc(),e=t.parent&&t.parent.type.name,n=t.parent&&t.parent.subTree&&t.parent.subTree.type;if(e&&(e==="KeepAlive"||e.includes("Transition"))&&typeof n=="object"&&n.name==="RouterView"){const r=e==="KeepAlive"?"keep-alive":"transition";ge(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${r}>
    <component :is="Component" />
  </${r}>
</router-view>`)}}function zi(t,e){const n=Ee({},t,{matched:t.matched.map(r=>p2(r,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:t.fullPath,tooltip:e,value:n}}}function tl(t){return{_custom:{display:t}}}let o2=0;function a2(t,e,n){if(e.__hasDevtools)return;e.__hasDevtools=!0;const r=o2++;qp({id:"org.vuejs.router"+(r?"."+r:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:t},s=>{typeof s.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),s.on.inspectComponent((u,h)=>{u.instanceData&&u.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:zi(e.currentRoute.value,"Current Route")})}),s.on.visitComponentTree(({treeNode:u,componentInstance:h})=>{if(h.__vrv_devtools){const d=h.__vrv_devtools;u.tags.push({label:(d.name?`${d.name.toString()}: `:"")+d.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:BA})}jt(h.__vrl_devtools)&&(h.__devtoolsApi=s,h.__vrl_devtools.forEach(d=>{let p=qA,m="";d.isExactActive?(p=WA,m="This is exactly active"):d.isActive&&(p=jA,m="This link is active"),u.tags.push({label:d.route.path,textColor:0,tooltip:m,backgroundColor:p})}))}),ss(e.currentRoute,()=>{l(),s.notifyComponentUpdate(),s.sendInspectorTree(a),s.sendInspectorState(a)});const i="router:navigations:"+r;s.addTimelineLayer({id:i,label:`Router${r?" "+r:""} Navigations`,color:4237508}),e.onError((u,h)=>{s.addTimelineEvent({layerId:i,event:{title:"Error during Navigation",subtitle:h.fullPath,logType:"error",time:s.now(),data:{error:u},groupId:h.meta.__navigationId}})});let o=0;e.beforeEach((u,h)=>{const d={guard:tl("beforeEach"),from:zi(h,"Current Location during this navigation"),to:zi(u,"Target location")};Object.defineProperty(u.meta,"__navigationId",{value:o++}),s.addTimelineEvent({layerId:i,event:{time:s.now(),title:"Start of navigation",subtitle:u.fullPath,data:d,groupId:u.meta.__navigationId}})}),e.afterEach((u,h,d)=>{const p={guard:tl("afterEach")};d?(p.failure={_custom:{type:Error,readOnly:!0,display:d?d.message:"",tooltip:"Navigation Failure",value:d}},p.status=tl("❌")):p.status=tl("✅"),p.from=zi(h,"Current Location during this navigation"),p.to=zi(u,"Target location"),s.addTimelineEvent({layerId:i,event:{title:"End of navigation",subtitle:u.fullPath,time:s.now(),data:p,logType:d?"warning":"default",groupId:u.meta.__navigationId}})});const a="router-inspector:"+r;s.addInspector({id:a,label:"Routes"+(r?" "+r:""),icon:"book",treeFilterPlaceholder:"Search routes"});function l(){if(!c)return;const u=c;let h=n.getRoutes().filter(d=>!d.parent||!d.parent.record.components);h.forEach(zA),u.filter&&(h=h.filter(d=>Dd(d,u.filter.toLowerCase()))),h.forEach(d=>KA(d,e.currentRoute.value)),u.rootNodes=h.map(HA)}let c;s.on.getInspectorTree(u=>{c=u,u.app===t&&u.inspectorId===a&&l()}),s.on.getInspectorState(u=>{if(u.app===t&&u.inspectorId===a){const d=n.getRoutes().find(p=>p.record.__vd_id===u.nodeId);d&&(u.state={options:c2(d)})}}),s.sendInspectorTree(a),s.sendInspectorState(a)})}function l2(t){return t.optional?t.repeatable?"*":"?":t.repeatable?"+":""}function c2(t){const{record:e}=t,n=[{editable:!1,key:"path",value:e.path}];return e.name!=null&&n.push({editable:!1,key:"name",value:e.name}),n.push({editable:!1,key:"regexp",value:t.re}),t.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:t.keys.map(r=>`${r.name}${l2(r)}`).join(" "),tooltip:"Param keys",value:t.keys}}}),e.redirect!=null&&n.push({editable:!1,key:"redirect",value:e.redirect}),t.alias.length&&n.push({editable:!1,key:"aliases",value:t.alias.map(r=>r.record.path)}),Object.keys(t.record.meta).length&&n.push({editable:!1,key:"meta",value:t.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:t.score.map(r=>r.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:t.score}}}),n}const BA=15485081,jA=2450411,WA=8702998,u2=2282478,qA=16486972,h2=6710886;function HA(t){const e=[],{record:n}=t;n.name!=null&&e.push({label:String(n.name),textColor:0,backgroundColor:u2}),n.aliasOf&&e.push({label:"alias",textColor:0,backgroundColor:qA}),t.__vd_match&&e.push({label:"matches",textColor:0,backgroundColor:BA}),t.__vd_exactActive&&e.push({label:"exact",textColor:0,backgroundColor:WA}),t.__vd_active&&e.push({label:"active",textColor:0,backgroundColor:jA}),n.redirect&&e.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:h2});let r=n.__vd_id;return r==null&&(r=String(d2++),n.__vd_id=r),{id:r,label:n.path,tags:e,children:t.children.map(HA)}}let d2=0;const f2=/^\/(.*)\/([a-z]*)$/;function KA(t,e){const n=e.matched.length&&Dr(e.matched[e.matched.length-1],t.record);t.__vd_exactActive=t.__vd_active=n,n||(t.__vd_active=e.matched.some(r=>Dr(r,t.record))),t.children.forEach(r=>KA(r,e))}function zA(t){t.__vd_match=!1,t.children.forEach(zA)}function Dd(t,e){const n=String(t.re).match(f2);if(t.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(e))return t.children.forEach(o=>Dd(o,e)),t.record.path!=="/"||e==="/"?(t.__vd_match=t.re.test(e),!0):!1;const s=t.record.path.toLowerCase(),i=na(s);return!e.startsWith("/")&&(i.includes(e)||s.includes(e))||i.startsWith(e)||s.startsWith(e)||t.record.name&&String(t.record.name).includes(e)?!0:t.children.some(o=>Dd(o,e))}function p2(t,e){const n={};for(const r in t)e.includes(r)||(n[r]=t[r]);return n}function g2(t){const e=PU(t.routes,t),n=t.parseQuery||QU,r=t.stringifyQuery||ay,s=t.history;if(!s)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const i=Ki(),o=Ki(),a=Ki(),l=BR(lr);let c=lr;Bn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=lh.bind(null,v=>""+v),h=lh.bind(null,GU),d=lh.bind(null,na);function p(v,L){let V,j;return NA(v)?(V=e.getRecordMatcher(v),j=L):j=v,e.addRoute(j,V)}function m(v){const L=e.getRecordMatcher(v);L?e.removeRoute(L):ge(`Cannot remove non-existent route "${String(v)}"`)}function E(){return e.getRoutes().map(v=>v.record)}function y(v){return!!e.getRecordMatcher(v)}function A(v,L){if(L=Ee({},L||l.value),typeof v=="string"){const g=ch(n,v,L.path),_=e.resolve({path:g.path},L),T=s.createHref(g.fullPath);return T.startsWith("//")?ge(`Location "${v}" resolved to "${T}". A resolved location cannot start with multiple slashes.`):_.matched.length||ge(`No match found for location with path "${v}"`),Ee(g,_,{params:d(_.params),hash:na(g.hash),redirectedFrom:void 0,href:T})}let V;if("path"in v)"params"in v&&!("name"in v)&&Object.keys(v.params).length&&ge(`Path "${v.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),V=Ee({},v,{path:ch(n,v.path,L.path).path});else{const g=Ee({},v.params);for(const _ in g)g[_]==null&&delete g[_];V=Ee({},v,{params:h(g)}),L.params=h(L.params)}const j=e.resolve(V,L),de=v.hash||"";de&&!de.startsWith("#")&&ge(`A \`hash\` should always start with the character "#". Replace "${de}" with "#${de}".`),j.params=u(d(j.params));const Ve=nU(r,Ee({},v,{hash:HU(de),path:j.path})),f=s.createHref(Ve);return f.startsWith("//")?ge(`Location "${v}" resolved to "${f}". A resolved location cannot start with multiple slashes.`):j.matched.length||ge(`No match found for location with path "${"path"in v?v.path:v}"`),Ee({fullPath:Ve,hash:de,query:r===ay?YU(v.query):v.query||{}},j,{redirectedFrom:void 0,href:f})}function O(v){return typeof v=="string"?ch(n,v,l.value.path):Ee({},v)}function S(v,L){if(c!==v)return vi(8,{from:L,to:v})}function K(v){return W(v)}function U(v){return K(Ee(O(v),{replace:!0}))}function ye(v){const L=v.matched[v.matched.length-1];if(L&&L.redirect){const{redirect:V}=L;let j=typeof V=="function"?V(v):V;if(typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=O(j):{path:j},j.params={}),!("path"in j)&&!("name"in j))throw ge(`Invalid redirect found:
${JSON.stringify(j,null,2)}
 when navigating to "${v.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Ee({query:v.query,hash:v.hash,params:"path"in j?{}:v.params},j)}}function W(v,L){const V=c=A(v),j=l.value,de=v.state,Ve=v.force,f=v.replace===!0,g=ye(V);if(g)return W(Ee(O(g),{state:typeof g=="object"?Ee({},de,g.state):de,force:Ve,replace:f}),L||V);const _=V;_.redirectedFrom=L;let T;return!Ve&&X_(r,j,V)&&(T=vi(16,{to:_,from:j}),rr(j,j,!0,!1)),(T?Promise.resolve(T):$(_,j)).catch(w=>Fn(w)?Fn(w,2)?w:$r(w):X(w,_,j)).then(w=>{if(w){if(Fn(w,2))return X_(r,A(w.to),_)&&L&&(L._count=L._count?L._count+1:1)>30?(ge(`Detected a possibly infinite redirection in a navigation guard when going from "${j.fullPath}" to "${_.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):W(Ee({replace:f},O(w.to),{state:typeof w.to=="object"?Ee({},de,w.to.state):de,force:Ve}),L||_)}else w=ae(_,j,!0,f,de);return F(_,j,w),w})}function Ze(v,L){const V=S(v,L);return V?Promise.reject(V):Promise.resolve()}function Ie(v){const L=sr.values().next().value;return L&&typeof L.runWithContext=="function"?L.runWithContext(v):v()}function $(v,L){let V;const[j,de,Ve]=m2(v,L);V=uh(j.reverse(),"beforeRouteLeave",v,L);for(const g of j)g.leaveGuards.forEach(_=>{V.push(hr(_,v,L))});const f=Ze.bind(null,v,L);return V.push(f),ir(V).then(()=>{V=[];for(const g of i.list())V.push(hr(g,v,L));return V.push(f),ir(V)}).then(()=>{V=uh(de,"beforeRouteUpdate",v,L);for(const g of de)g.updateGuards.forEach(_=>{V.push(hr(_,v,L))});return V.push(f),ir(V)}).then(()=>{V=[];for(const g of Ve)if(g.beforeEnter)if(jt(g.beforeEnter))for(const _ of g.beforeEnter)V.push(hr(_,v,L));else V.push(hr(g.beforeEnter,v,L));return V.push(f),ir(V)}).then(()=>(v.matched.forEach(g=>g.enterCallbacks={}),V=uh(Ve,"beforeRouteEnter",v,L),V.push(f),ir(V))).then(()=>{V=[];for(const g of o.list())V.push(hr(g,v,L));return V.push(f),ir(V)}).catch(g=>Fn(g,8)?g:Promise.reject(g))}function F(v,L,V){a.list().forEach(j=>Ie(()=>j(v,L,V)))}function ae(v,L,V,j,de){const Ve=S(v,L);if(Ve)return Ve;const f=L===lr,g=Bn?history.state:{};V&&(j||f?s.replace(v.fullPath,Ee({scroll:f&&g&&g.scroll},de)):s.push(v.fullPath,de)),l.value=v,rr(v,L,V,f),$r()}let Le;function pn(){Le||(Le=s.listen((v,L,V)=>{if(!Na.listening)return;const j=A(v),de=ye(j);if(de){W(Ee(de,{replace:!0}),j).catch(To);return}c=j;const Ve=l.value;Bn&&uU(Z_(Ve.fullPath,V.delta),Eu()),$(j,Ve).catch(f=>Fn(f,12)?f:Fn(f,2)?(W(f.to,j).then(g=>{Fn(g,20)&&!V.delta&&V.type===ta.pop&&s.go(-1,!1)}).catch(To),Promise.reject()):(V.delta&&s.go(-V.delta,!1),X(f,j,Ve))).then(f=>{f=f||ae(j,Ve,!1),f&&(V.delta&&!Fn(f,8)?s.go(-V.delta,!1):V.type===ta.pop&&Fn(f,20)&&s.go(-1,!1)),F(j,Ve,f)}).catch(To)}))}let kt=Ki(),Qe=Ki(),re;function X(v,L,V){$r(v);const j=Qe.list();return j.length?j.forEach(de=>de(v,L,V)):(ge("uncaught error during route navigation:"),console.error(v)),Promise.reject(v)}function Wt(){return re&&l.value!==lr?Promise.resolve():new Promise((v,L)=>{kt.add([v,L])})}function $r(v){return re||(re=!v,pn(),kt.list().forEach(([L,V])=>v?V(v):L()),kt.reset()),v}function rr(v,L,V,j){const{scrollBehavior:de}=t;if(!Bn||!de)return Promise.resolve();const Ve=!V&&hU(Z_(v.fullPath,0))||(j||!V)&&history.state&&history.state.scroll||null;return Cl().then(()=>de(v,L,Ve)).then(f=>f&&cU(f)).catch(f=>X(f,v,L))}const gn=v=>s.go(v);let qt;const sr=new Set,Na={currentRoute:l,listening:!0,addRoute:p,removeRoute:m,hasRoute:y,getRoutes:E,resolve:A,options:t,push:K,replace:U,go:gn,back:()=>gn(-1),forward:()=>gn(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Qe.add,isReady:Wt,install(v){const L=this;v.component("RouterLink",t2),v.component("RouterView",$A),v.config.globalProperties.$router=L,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Er(l)}),Bn&&!qt&&l.value===lr&&(qt=!0,K(s.location).catch(de=>{ge("Unexpected error when starting the router:",de)}));const V={};for(const de in lr)Object.defineProperty(V,de,{get:()=>l.value[de],enumerable:!0});v.provide(wu,L),v.provide(UA,My(V)),v.provide(Od,l);const j=v.unmount;sr.add(v),v.unmount=function(){sr.delete(v),sr.size<1&&(c=lr,Le&&Le(),Le=null,l.value=lr,qt=!1,re=!1),j()},Bn&&a2(v,L,e)}};function ir(v){return v.reduce((L,V)=>L.then(()=>Ie(V)),Promise.resolve())}return Na}function m2(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>Dr(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Dr(c,l))||s.push(l))}return[n,r,s]}function _2(){return Yt(wu)}const y2=Xd({__name:"App",setup(t){const e=_2();return sv(async()=>{await CE()&&e.replace({name:"blog"})}),(n,r)=>(nf(),_v(Er($A)))}}),GA=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},v2=GA(y2,[["__file","C:/Users/yirsi/Desktop/vue3/10-blog-clean/src/App.vue"]]),E2="modulepreload",w2=function(t){return"/"+t},fy={},hh=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=w2(i),i in fy)return;fy[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":E2,o||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},T2={},I2=rf("h1",null,"Hello",-1),A2=[I2];function R2(t,e){return nf(),f0("main",null,A2)}const b2=GA(T2,[["render",R2],["__file","C:/Users/yirsi/Desktop/vue3/10-blog-clean/src/presentation/views/HomeView.vue"]]),QA=g2({history:gU("/"),routes:[{path:"/",name:"home",component:b2},{path:"/auth/login",name:"login",component:()=>hh(()=>import("./LoginView-1cebc627.js"),["assets/LoginView-1cebc627.js","assets/auth.store-f13e0c27.js","assets/AuthLayout-a5f77b01.js"])},{path:"/auth/register",name:"register",component:()=>hh(()=>import("./RegisterView-4599180f.js"),["assets/RegisterView-4599180f.js","assets/auth.store-f13e0c27.js","assets/AuthLayout-a5f77b01.js"])},{path:"/app",name:"blog",component:()=>hh(()=>import("./BlogView-ab3a6253.js"),["assets/BlogView-ab3a6253.js","assets/auth.store-f13e0c27.js"]),meta:{requiresAuth:!0}}]});QA.beforeEach(async t=>{if(t.meta.requiresAuth&&!await CE())return{path:"/auth/login",query:{redirect:t.fullPath}}});const C2={apiKey:"AIzaSyBBdrYpxnZtF2s1BpxNqkzK9SZZgkEgnKQ",authDomain:"blog-vue-25d11.firebaseapp.com",projectId:"blog-vue-25d11",storageBucket:"blog-vue-25d11.appspot.com",messagingSenderId:"500907752298",appId:"1:500907752298:web:37d88bbc315043d7904313"},Tu=$v(C2),e$=vf(Tu),t$=new jn,n$=GL(Tu),r$=yF(Tu);const Iu=nC(v2);Iu.use(IF,{firebaseApp:Tu,modules:[TF()]});Iu.use(GF());Iu.use(QA);Iu.mount("#app");export{sa as A,G2 as B,J2 as C,k2 as D,S2 as E,Kt as F,M2 as G,V2 as H,x2 as I,L2 as J,e$ as K,t$ as L,Je as T,GA as _,nf as a,rf as b,f0 as c,Xd as d,Er as e,D2 as f,_v as g,mb as h,Lt as i,q2 as j,H2 as k,K2 as l,j2 as m,z2 as n,sv as o,n$ as p,W2 as q,N2 as r,X2 as s,r$ as t,_2 as u,O2 as v,P2 as w,Q2 as x,Y2 as y,Z2 as z};
