import{a$ as ve,v as U,h as Ve,b0 as mr,b1 as Pt,b2 as hr,m as ne,b3 as ye,b4 as br,k as me,q as wr,b5 as We,b6 as ce,M as Ar,b7 as Z,S as et,y as It,P as Fe,O as xr,aa as Oe,ab as Mt,R as W,A as E,d as ie,z as De,U as de,W as Rt,ap as Ct,ai as Lt,a as _e,c as Nt,C as fe,F as Q,G as _,J as Bt,a5 as Vt,Q as pe,o as Wt,aw as Dt,aF as jr,e as ge,a6 as Tr,V as Ut,af as $r,b8 as Fr,ar as tt,aM as xe,D as je,X as Or,a0 as _r,Y as rt,a8 as Er,H as nt,a1 as it,b as at,T as Sr,K as qr,aj as Pr}from"./index.2de67f58.js";import{k as zt,f as Gt,y as Ue,x as Ee,r as Ir}from"./base.597b26e0.js";import{d as Mr,t as Rr,u as Cr}from"./index.eee57dd9.js";var Lr=ve(U,"WeakMap");const Se=Lr;var ot=Object.create,Nr=function(){function t(){}return function(e){if(!Ve(e))return{};if(ot)return ot(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();const Br=Nr;function Vr(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}function Wr(t,e){for(var r=-1,n=t==null?0:t.length;++r<n&&e(t[r],r,t)!==!1;);return t}function he(t,e,r,n){var i=!r;r||(r={});for(var o=-1,a=e.length;++o<a;){var s=e[o],f=n?n(r[s],t[s],s,r,t):void 0;f===void 0&&(f=t[s]),i?mr(r,s,f):Pt(r,s,f)}return r}var Dr=9007199254740991;function Kt(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Dr}function Yt(t){return t!=null&&Kt(t.length)&&!hr(t)}var Ur=Object.prototype;function ze(t){var e=t&&t.constructor,r=typeof e=="function"&&e.prototype||Ur;return t===r}function zr(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}var Gr="[object Arguments]";function st(t){return ne(t)&&ye(t)==Gr}var Jt=Object.prototype,Kr=Jt.hasOwnProperty,Yr=Jt.propertyIsEnumerable,Jr=st(function(){return arguments}())?st:function(t){return ne(t)&&Kr.call(t,"callee")&&!Yr.call(t,"callee")};const Zr=Jr;function Hr(){return!1}var Zt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ft=Zt&&typeof module=="object"&&module&&!module.nodeType&&module,Xr=ft&&ft.exports===Zt,ut=Xr?U.Buffer:void 0,Qr=ut?ut.isBuffer:void 0,kr=Qr||Hr;const Ht=kr;var en="[object Arguments]",tn="[object Array]",rn="[object Boolean]",nn="[object Date]",an="[object Error]",on="[object Function]",sn="[object Map]",fn="[object Number]",un="[object Object]",ln="[object RegExp]",cn="[object Set]",dn="[object String]",pn="[object WeakMap]",gn="[object ArrayBuffer]",vn="[object DataView]",yn="[object Float32Array]",mn="[object Float64Array]",hn="[object Int8Array]",bn="[object Int16Array]",wn="[object Int32Array]",An="[object Uint8Array]",xn="[object Uint8ClampedArray]",jn="[object Uint16Array]",Tn="[object Uint32Array]",$={};$[yn]=$[mn]=$[hn]=$[bn]=$[wn]=$[An]=$[xn]=$[jn]=$[Tn]=!0;$[en]=$[tn]=$[gn]=$[rn]=$[vn]=$[nn]=$[an]=$[on]=$[sn]=$[fn]=$[un]=$[ln]=$[cn]=$[dn]=$[pn]=!1;function $n(t){return ne(t)&&Kt(t.length)&&!!$[ye(t)]}function Ge(t){return function(e){return t(e)}}var Xt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ee=Xt&&typeof module=="object"&&module&&!module.nodeType&&module,Fn=ee&&ee.exports===Xt,Te=Fn&&br.process,On=function(){try{var t=ee&&ee.require&&ee.require("util").types;return t||Te&&Te.binding&&Te.binding("util")}catch{}}();const J=On;var lt=J&&J.isTypedArray,_n=lt?Ge(lt):$n;const En=_n;var Sn=Object.prototype,qn=Sn.hasOwnProperty;function Qt(t,e){var r=me(t),n=!r&&Zr(t),i=!r&&!n&&Ht(t),o=!r&&!n&&!i&&En(t),a=r||n||i||o,s=a?zr(t.length,String):[],f=s.length;for(var g in t)(e||qn.call(t,g))&&!(a&&(g=="length"||i&&(g=="offset"||g=="parent")||o&&(g=="buffer"||g=="byteLength"||g=="byteOffset")||wr(g,f)))&&s.push(g);return s}function kt(t,e){return function(r){return t(e(r))}}var Pn=kt(Object.keys,Object);const In=Pn;var Mn=Object.prototype,Rn=Mn.hasOwnProperty;function Cn(t){if(!ze(t))return In(t);var e=[];for(var r in Object(t))Rn.call(t,r)&&r!="constructor"&&e.push(r);return e}function Ke(t){return Yt(t)?Qt(t):Cn(t)}function Ln(t){var e=[];if(t!=null)for(var r in Object(t))e.push(r);return e}var Nn=Object.prototype,Bn=Nn.hasOwnProperty;function Vn(t){if(!Ve(t))return Ln(t);var e=ze(t),r=[];for(var n in t)n=="constructor"&&(e||!Bn.call(t,n))||r.push(n);return r}function Ye(t){return Yt(t)?Qt(t,!0):Vn(t)}function er(t,e){for(var r=-1,n=e.length,i=t.length;++r<n;)t[i+r]=e[r];return t}var Wn=kt(Object.getPrototypeOf,Object);const tr=Wn;function qe(){if(!arguments.length)return[];var t=arguments[0];return me(t)?t:[t]}function Dn(){this.__data__=new We,this.size=0}function Un(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}function zn(t){return this.__data__.get(t)}function Gn(t){return this.__data__.has(t)}var Kn=200;function Yn(t,e){var r=this.__data__;if(r instanceof We){var n=r.__data__;if(!ce||n.length<Kn-1)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new Ar(n)}return r.set(t,e),this.size=r.size,this}function H(t){var e=this.__data__=new We(t);this.size=e.size}H.prototype.clear=Dn;H.prototype.delete=Un;H.prototype.get=zn;H.prototype.has=Gn;H.prototype.set=Yn;function Jn(t,e){return t&&he(e,Ke(e),t)}function Zn(t,e){return t&&he(e,Ye(e),t)}var rr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ct=rr&&typeof module=="object"&&module&&!module.nodeType&&module,Hn=ct&&ct.exports===rr,dt=Hn?U.Buffer:void 0,pt=dt?dt.allocUnsafe:void 0;function Xn(t,e){if(e)return t.slice();var r=t.length,n=pt?pt(r):new t.constructor(r);return t.copy(n),n}function Qn(t,e){for(var r=-1,n=t==null?0:t.length,i=0,o=[];++r<n;){var a=t[r];e(a,r,t)&&(o[i++]=a)}return o}function nr(){return[]}var kn=Object.prototype,ei=kn.propertyIsEnumerable,gt=Object.getOwnPropertySymbols,ti=gt?function(t){return t==null?[]:(t=Object(t),Qn(gt(t),function(e){return ei.call(t,e)}))}:nr;const Je=ti;function ri(t,e){return he(t,Je(t),e)}var ni=Object.getOwnPropertySymbols,ii=ni?function(t){for(var e=[];t;)er(e,Je(t)),t=tr(t);return e}:nr;const ir=ii;function ai(t,e){return he(t,ir(t),e)}function ar(t,e,r){var n=e(t);return me(t)?n:er(n,r(t))}function oi(t){return ar(t,Ke,Je)}function si(t){return ar(t,Ye,ir)}var fi=ve(U,"DataView");const Pe=fi;var ui=ve(U,"Promise");const Ie=ui;var li=ve(U,"Set");const Me=li;var vt="[object Map]",ci="[object Object]",yt="[object Promise]",mt="[object Set]",ht="[object WeakMap]",bt="[object DataView]",di=Z(Pe),pi=Z(ce),gi=Z(Ie),vi=Z(Me),yi=Z(Se),V=ye;(Pe&&V(new Pe(new ArrayBuffer(1)))!=bt||ce&&V(new ce)!=vt||Ie&&V(Ie.resolve())!=yt||Me&&V(new Me)!=mt||Se&&V(new Se)!=ht)&&(V=function(t){var e=ye(t),r=e==ci?t.constructor:void 0,n=r?Z(r):"";if(n)switch(n){case di:return bt;case pi:return vt;case gi:return yt;case vi:return mt;case yi:return ht}return e});const Ze=V;var mi=Object.prototype,hi=mi.hasOwnProperty;function bi(t){var e=t.length,r=new t.constructor(e);return e&&typeof t[0]=="string"&&hi.call(t,"index")&&(r.index=t.index,r.input=t.input),r}var wi=U.Uint8Array;const wt=wi;function He(t){var e=new t.constructor(t.byteLength);return new wt(e).set(new wt(t)),e}function Ai(t,e){var r=e?He(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}var xi=/\w*$/;function ji(t){var e=new t.constructor(t.source,xi.exec(t));return e.lastIndex=t.lastIndex,e}var At=et?et.prototype:void 0,xt=At?At.valueOf:void 0;function Ti(t){return xt?Object(xt.call(t)):{}}function $i(t,e){var r=e?He(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}var Fi="[object Boolean]",Oi="[object Date]",_i="[object Map]",Ei="[object Number]",Si="[object RegExp]",qi="[object Set]",Pi="[object String]",Ii="[object Symbol]",Mi="[object ArrayBuffer]",Ri="[object DataView]",Ci="[object Float32Array]",Li="[object Float64Array]",Ni="[object Int8Array]",Bi="[object Int16Array]",Vi="[object Int32Array]",Wi="[object Uint8Array]",Di="[object Uint8ClampedArray]",Ui="[object Uint16Array]",zi="[object Uint32Array]";function Gi(t,e,r){var n=t.constructor;switch(e){case Mi:return He(t);case Fi:case Oi:return new n(+t);case Ri:return Ai(t,r);case Ci:case Li:case Ni:case Bi:case Vi:case Wi:case Di:case Ui:case zi:return $i(t,r);case _i:return new n;case Ei:case Pi:return new n(t);case Si:return ji(t);case qi:return new n;case Ii:return Ti(t)}}function Ki(t){return typeof t.constructor=="function"&&!ze(t)?Br(tr(t)):{}}var Yi="[object Map]";function Ji(t){return ne(t)&&Ze(t)==Yi}var jt=J&&J.isMap,Zi=jt?Ge(jt):Ji;const Hi=Zi;var Xi="[object Set]";function Qi(t){return ne(t)&&Ze(t)==Xi}var Tt=J&&J.isSet,ki=Tt?Ge(Tt):Qi;const ea=ki;var ta=1,ra=2,na=4,or="[object Arguments]",ia="[object Array]",aa="[object Boolean]",oa="[object Date]",sa="[object Error]",sr="[object Function]",fa="[object GeneratorFunction]",ua="[object Map]",la="[object Number]",fr="[object Object]",ca="[object RegExp]",da="[object Set]",pa="[object String]",ga="[object Symbol]",va="[object WeakMap]",ya="[object ArrayBuffer]",ma="[object DataView]",ha="[object Float32Array]",ba="[object Float64Array]",wa="[object Int8Array]",Aa="[object Int16Array]",xa="[object Int32Array]",ja="[object Uint8Array]",Ta="[object Uint8ClampedArray]",$a="[object Uint16Array]",Fa="[object Uint32Array]",j={};j[or]=j[ia]=j[ya]=j[ma]=j[aa]=j[oa]=j[ha]=j[ba]=j[wa]=j[Aa]=j[xa]=j[ua]=j[la]=j[fr]=j[ca]=j[da]=j[pa]=j[ga]=j[ja]=j[Ta]=j[$a]=j[Fa]=!0;j[sa]=j[sr]=j[va]=!1;function ue(t,e,r,n,i,o){var a,s=e&ta,f=e&ra,g=e&na;if(r&&(a=i?r(t,n,i,o):r(t)),a!==void 0)return a;if(!Ve(t))return t;var d=me(t);if(d){if(a=bi(t),!s)return Vr(t,a)}else{var v=Ze(t),w=v==sr||v==fa;if(Ht(t))return Xn(t,s);if(v==fr||v==or||w&&!i){if(a=f||w?{}:Ki(t),!s)return f?ai(t,Zn(a,t)):ri(t,Jn(a,t))}else{if(!j[v])return i?t:{};a=Gi(t,v,s)}}o||(o=new H);var F=o.get(t);if(F)return F;o.set(t,a),ea(t)?t.forEach(function(y){a.add(ue(y,e,r,y,t,o))}):Hi(t)&&t.forEach(function(y,u){a.set(u,ue(y,e,r,u,t,o))});var O=g?f?si:oi:f?Ye:Ke,c=d?void 0:O(t);return Wr(c||t,function(y,u){c&&(u=y,y=t[u]),Pt(a,u,ue(y,e,r,u,t,o))}),a}var Oa=4;function $t(t){return ue(t,Oa)}const _a=It({model:Object,rules:{type:Fe(Object)},labelPosition:{type:String,values:["left","right","top"],default:"right"},requireAsteriskPosition:{type:String,values:["left","right"],default:"left"},labelWidth:{type:[String,Number],default:""},labelSuffix:{type:String,default:""},inline:Boolean,inlineMessage:Boolean,statusIcon:Boolean,showMessage:{type:Boolean,default:!0},size:{type:String,values:zt},disabled:Boolean,validateOnRuleChange:{type:Boolean,default:!0},hideRequiredAsterisk:{type:Boolean,default:!1},scrollToError:Boolean}),Ea={validate:(t,e,r)=>(xr(t)||Oe(t))&&Mt(e)&&Oe(r)};function Sa(){const t=W([]),e=E(()=>{if(!t.value.length)return"0";const o=Math.max(...t.value);return o?`${o}px`:""});function r(o){const a=t.value.indexOf(o);return a===-1&&e.value,a}function n(o,a){if(o&&a){const s=r(a);t.value.splice(s,1,o)}else o&&t.value.push(o)}function i(o){const a=r(o);a>-1&&t.value.splice(a,1)}return{autoLabelWidth:e,registerLabelWidth:n,deregisterLabelWidth:i}}const oe=(t,e)=>{const r=qe(e);return r.length>0?t.filter(n=>n.prop&&r.includes(n.prop)):t},qa="ElForm",Pa=ie({name:qa}),Ia=ie({...Pa,props:_a,emits:Ea,setup(t,{expose:e,emit:r}){const n=t,i=[],o=Gt(),a=De("form"),s=E(()=>{const{labelPosition:m,inline:l}=n;return[a.b(),a.m(o.value||"default"),{[a.m(`label-${m}`)]:m,[a.m("inline")]:l}]}),f=m=>{i.push(m)},g=m=>{m.prop&&i.splice(i.indexOf(m),1)},d=(m=[])=>{!n.model||oe(i,m).forEach(l=>l.resetField())},v=(m=[])=>{oe(i,m).forEach(l=>l.clearValidate())},w=E(()=>!!n.model),F=m=>{if(i.length===0)return[];const l=oe(i,m);return l.length?l:[]},O=async m=>y(void 0,m),c=async(m=[])=>{if(!w.value)return!1;const l=F(m);if(l.length===0)return!0;let b={};for(const x of l)try{await x.validate("")}catch(T){b={...b,...T}}return Object.keys(b).length===0?!0:Promise.reject(b)},y=async(m=[],l)=>{const b=!Vt(l);try{const x=await c(m);return x===!0&&(l==null||l(x)),x}catch(x){if(x instanceof Error)throw x;const T=x;return n.scrollToError&&u(Object.keys(T)[0]),l==null||l(!1,T),b&&Promise.reject(T)}},u=m=>{var l;const b=oe(i,m)[0];b&&((l=b.$el)==null||l.scrollIntoView())};return de(()=>n.rules,()=>{n.validateOnRuleChange&&O().catch(m=>Mr())},{deep:!0}),Rt(Ue,Ct({...Lt(n),emit:r,resetFields:d,clearValidate:v,validateField:y,addField:f,removeField:g,...Sa()})),e({validate:O,validateField:y,resetFields:d,clearValidate:v,scrollToField:u}),(m,l)=>(_e(),Nt("form",{class:Q(_(s))},[fe(m.$slots,"default")],2))}});var Ma=Bt(Ia,[["__file","/home/runner/work/element-plus/element-plus/packages/components/form/src/form.vue"]]);function D(){return D=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},D.apply(this,arguments)}function Ra(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,re(t,e)}function Re(t){return Re=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},Re(t)}function re(t,e){return re=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},re(t,e)}function Ca(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function le(t,e,r){return Ca()?le=Reflect.construct.bind():le=function(i,o,a){var s=[null];s.push.apply(s,o);var f=Function.bind.apply(i,s),g=new f;return a&&re(g,a.prototype),g},le.apply(null,arguments)}function La(t){return Function.toString.call(t).indexOf("[native code]")!==-1}function Ce(t){var e=typeof Map=="function"?new Map:void 0;return Ce=function(n){if(n===null||!La(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(n))return e.get(n);e.set(n,i)}function i(){return le(n,arguments,Re(this).constructor)}return i.prototype=Object.create(n.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),re(i,n)},Ce(t)}var Na=/%[sdj%]/g,Ba=function(){};typeof process<"u"&&process.env;function Le(t){if(!t||!t.length)return null;var e={};return t.forEach(function(r){var n=r.field;e[n]=e[n]||[],e[n].push(r)}),e}function M(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];var i=0,o=r.length;if(typeof t=="function")return t.apply(null,r);if(typeof t=="string"){var a=t.replace(Na,function(s){if(s==="%%")return"%";if(i>=o)return s;switch(s){case"%s":return String(r[i++]);case"%d":return Number(r[i++]);case"%j":try{return JSON.stringify(r[i++])}catch{return"[Circular]"}break;default:return s}});return a}return t}function Va(t){return t==="string"||t==="url"||t==="hex"||t==="email"||t==="date"||t==="pattern"}function S(t,e){return!!(t==null||e==="array"&&Array.isArray(t)&&!t.length||Va(e)&&typeof t=="string"&&!t)}function Wa(t,e,r){var n=[],i=0,o=t.length;function a(s){n.push.apply(n,s||[]),i++,i===o&&r(n)}t.forEach(function(s){e(s,a)})}function Ft(t,e,r){var n=0,i=t.length;function o(a){if(a&&a.length){r(a);return}var s=n;n=n+1,s<i?e(t[s],o):r([])}o([])}function Da(t){var e=[];return Object.keys(t).forEach(function(r){e.push.apply(e,t[r]||[])}),e}var Ot=function(t){Ra(e,t);function e(r,n){var i;return i=t.call(this,"Async Validation Error")||this,i.errors=r,i.fields=n,i}return e}(Ce(Error));function Ua(t,e,r,n,i){if(e.first){var o=new Promise(function(w,F){var O=function(u){return n(u),u.length?F(new Ot(u,Le(u))):w(i)},c=Da(t);Ft(c,r,O)});return o.catch(function(w){return w}),o}var a=e.firstFields===!0?Object.keys(t):e.firstFields||[],s=Object.keys(t),f=s.length,g=0,d=[],v=new Promise(function(w,F){var O=function(y){if(d.push.apply(d,y),g++,g===f)return n(d),d.length?F(new Ot(d,Le(d))):w(i)};s.length||(n(d),w(i)),s.forEach(function(c){var y=t[c];a.indexOf(c)!==-1?Ft(y,r,O):Wa(y,r,O)})});return v.catch(function(w){return w}),v}function za(t){return!!(t&&t.message!==void 0)}function Ga(t,e){for(var r=t,n=0;n<e.length;n++){if(r==null)return r;r=r[e[n]]}return r}function _t(t,e){return function(r){var n;return t.fullFields?n=Ga(e,t.fullFields):n=e[r.field||t.fullField],za(r)?(r.field=r.field||t.fullField,r.fieldValue=n,r):{message:typeof r=="function"?r():r,fieldValue:n,field:r.field||t.fullField}}}function Et(t,e){if(e){for(var r in e)if(e.hasOwnProperty(r)){var n=e[r];typeof n=="object"&&typeof t[r]=="object"?t[r]=D({},t[r],n):t[r]=n}}return t}var ur=function(e,r,n,i,o,a){e.required&&(!n.hasOwnProperty(e.field)||S(r,a||e.type))&&i.push(M(o.messages.required,e.fullField))},Ka=function(e,r,n,i,o){(/^\s+$/.test(r)||r==="")&&i.push(M(o.messages.whitespace,e.fullField))},se,Ya=function(){if(se)return se;var t="[a-fA-F\\d:]",e=function(b){return b&&b.includeBoundaries?"(?:(?<=\\s|^)(?="+t+")|(?<="+t+")(?=\\s|$))":""},r="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",n="[a-fA-F\\d]{1,4}",i=(`
(?:
(?:`+n+":){7}(?:"+n+`|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:`+n+":){6}(?:"+r+"|:"+n+`|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:`+n+":){5}(?::"+r+"|(?::"+n+`){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:`+n+":){4}(?:(?::"+n+"){0,1}:"+r+"|(?::"+n+`){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:`+n+":){3}(?:(?::"+n+"){0,2}:"+r+"|(?::"+n+`){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:`+n+":){2}(?:(?::"+n+"){0,3}:"+r+"|(?::"+n+`){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:`+n+":){1}(?:(?::"+n+"){0,4}:"+r+"|(?::"+n+`){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::`+n+"){0,5}:"+r+"|(?::"+n+`){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),o=new RegExp("(?:^"+r+"$)|(?:^"+i+"$)"),a=new RegExp("^"+r+"$"),s=new RegExp("^"+i+"$"),f=function(b){return b&&b.exact?o:new RegExp("(?:"+e(b)+r+e(b)+")|(?:"+e(b)+i+e(b)+")","g")};f.v4=function(l){return l&&l.exact?a:new RegExp(""+e(l)+r+e(l),"g")},f.v6=function(l){return l&&l.exact?s:new RegExp(""+e(l)+i+e(l),"g")};var g="(?:(?:[a-z]+:)?//)",d="(?:\\S+(?::\\S*)?@)?",v=f.v4().source,w=f.v6().source,F="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",O="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",c="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",y="(?::\\d{2,5})?",u='(?:[/?#][^\\s"]*)?',m="(?:"+g+"|www\\.)"+d+"(?:localhost|"+v+"|"+w+"|"+F+O+c+")"+y+u;return se=new RegExp("(?:^"+m+"$)","i"),se},St={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},k={integer:function(e){return k.number(e)&&parseInt(e,10)===e},float:function(e){return k.number(e)&&!k.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch{return!1}},date:function(e){return typeof e.getTime=="function"&&typeof e.getMonth=="function"&&typeof e.getYear=="function"&&!isNaN(e.getTime())},number:function(e){return isNaN(e)?!1:typeof e=="number"},object:function(e){return typeof e=="object"&&!k.array(e)},method:function(e){return typeof e=="function"},email:function(e){return typeof e=="string"&&e.length<=320&&!!e.match(St.email)},url:function(e){return typeof e=="string"&&e.length<=2048&&!!e.match(Ya())},hex:function(e){return typeof e=="string"&&!!e.match(St.hex)}},Ja=function(e,r,n,i,o){if(e.required&&r===void 0){ur(e,r,n,i,o);return}var a=["integer","float","array","regexp","object","method","email","number","date","url","hex"],s=e.type;a.indexOf(s)>-1?k[s](r)||i.push(M(o.messages.types[s],e.fullField,e.type)):s&&typeof r!==e.type&&i.push(M(o.messages.types[s],e.fullField,e.type))},Za=function(e,r,n,i,o){var a=typeof e.len=="number",s=typeof e.min=="number",f=typeof e.max=="number",g=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,d=r,v=null,w=typeof r=="number",F=typeof r=="string",O=Array.isArray(r);if(w?v="number":F?v="string":O&&(v="array"),!v)return!1;O&&(d=r.length),F&&(d=r.replace(g,"_").length),a?d!==e.len&&i.push(M(o.messages[v].len,e.fullField,e.len)):s&&!f&&d<e.min?i.push(M(o.messages[v].min,e.fullField,e.min)):f&&!s&&d>e.max?i.push(M(o.messages[v].max,e.fullField,e.max)):s&&f&&(d<e.min||d>e.max)&&i.push(M(o.messages[v].range,e.fullField,e.min,e.max))},Y="enum",Ha=function(e,r,n,i,o){e[Y]=Array.isArray(e[Y])?e[Y]:[],e[Y].indexOf(r)===-1&&i.push(M(o.messages[Y],e.fullField,e[Y].join(", ")))},Xa=function(e,r,n,i,o){if(e.pattern){if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(r)||i.push(M(o.messages.pattern.mismatch,e.fullField,r,e.pattern));else if(typeof e.pattern=="string"){var a=new RegExp(e.pattern);a.test(r)||i.push(M(o.messages.pattern.mismatch,e.fullField,r,e.pattern))}}},h={required:ur,whitespace:Ka,type:Ja,range:Za,enum:Ha,pattern:Xa},Qa=function(e,r,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(S(r,"string")&&!e.required)return n();h.required(e,r,i,a,o,"string"),S(r,"string")||(h.type(e,r,i,a,o),h.range(e,r,i,a,o),h.pattern(e,r,i,a,o),e.whitespace===!0&&h.whitespace(e,r,i,a,o))}n(a)},ka=function(e,r,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(S(r)&&!e.required)return n();h.required(e,r,i,a,o),r!==void 0&&h.type(e,r,i,a,o)}n(a)},eo=function(e,r,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(r===""&&(r=void 0),S(r)&&!e.required)return n();h.required(e,r,i,a,o),r!==void 0&&(h.type(e,r,i,a,o),h.range(e,r,i,a,o))}n(a)},to=function(e,r,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(S(r)&&!e.required)return n();h.required(e,r,i,a,o),r!==void 0&&h.type(e,r,i,a,o)}n(a)},ro=function(e,r,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(S(r)&&!e.required)return n();h.required(e,r,i,a,o),S(r)||h.type(e,r,i,a,o)}n(a)},no=function(e,r,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(S(r)&&!e.required)return n();h.required(e,r,i,a,o),r!==void 0&&(h.type(e,r,i,a,o),h.range(e,r,i,a,o))}n(a)},io=function(e,r,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(S(r)&&!e.required)return n();h.required(e,r,i,a,o),r!==void 0&&(h.type(e,r,i,a,o),h.range(e,r,i,a,o))}n(a)},ao=function(e,r,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(r==null&&!e.required)return n();h.required(e,r,i,a,o,"array"),r!=null&&(h.type(e,r,i,a,o),h.range(e,r,i,a,o))}n(a)},oo=function(e,r,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(S(r)&&!e.required)return n();h.required(e,r,i,a,o),r!==void 0&&h.type(e,r,i,a,o)}n(a)},so="enum",fo=function(e,r,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(S(r)&&!e.required)return n();h.required(e,r,i,a,o),r!==void 0&&h[so](e,r,i,a,o)}n(a)},uo=function(e,r,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(S(r,"string")&&!e.required)return n();h.required(e,r,i,a,o),S(r,"string")||h.pattern(e,r,i,a,o)}n(a)},lo=function(e,r,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(S(r,"date")&&!e.required)return n();if(h.required(e,r,i,a,o),!S(r,"date")){var f;r instanceof Date?f=r:f=new Date(r),h.type(e,f,i,a,o),f&&h.range(e,f.getTime(),i,a,o)}}n(a)},co=function(e,r,n,i,o){var a=[],s=Array.isArray(r)?"array":typeof r;h.required(e,r,i,a,o,s),n(a)},$e=function(e,r,n,i,o){var a=e.type,s=[],f=e.required||!e.required&&i.hasOwnProperty(e.field);if(f){if(S(r,a)&&!e.required)return n();h.required(e,r,i,s,o,a),S(r,a)||h.type(e,r,i,s,o)}n(s)},po=function(e,r,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(S(r)&&!e.required)return n();h.required(e,r,i,a,o)}n(a)},te={string:Qa,method:ka,number:eo,boolean:to,regexp:ro,integer:no,float:io,array:ao,object:oo,enum:fo,pattern:uo,date:lo,url:$e,hex:$e,email:$e,required:co,any:po};function Ne(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var Be=Ne(),ae=function(){function t(r){this.rules=null,this._messages=Be,this.define(r)}var e=t.prototype;return e.define=function(n){var i=this;if(!n)throw new Error("Cannot configure a schema with no rules");if(typeof n!="object"||Array.isArray(n))throw new Error("Rules must be an object");this.rules={},Object.keys(n).forEach(function(o){var a=n[o];i.rules[o]=Array.isArray(a)?a:[a]})},e.messages=function(n){return n&&(this._messages=Et(Ne(),n)),this._messages},e.validate=function(n,i,o){var a=this;i===void 0&&(i={}),o===void 0&&(o=function(){});var s=n,f=i,g=o;if(typeof f=="function"&&(g=f,f={}),!this.rules||Object.keys(this.rules).length===0)return g&&g(null,s),Promise.resolve(s);function d(c){var y=[],u={};function m(b){if(Array.isArray(b)){var x;y=(x=y).concat.apply(x,b)}else y.push(b)}for(var l=0;l<c.length;l++)m(c[l]);y.length?(u=Le(y),g(y,u)):g(null,s)}if(f.messages){var v=this.messages();v===Be&&(v=Ne()),Et(v,f.messages),f.messages=v}else f.messages=this.messages();var w={},F=f.keys||Object.keys(this.rules);F.forEach(function(c){var y=a.rules[c],u=s[c];y.forEach(function(m){var l=m;typeof l.transform=="function"&&(s===n&&(s=D({},s)),u=s[c]=l.transform(u)),typeof l=="function"?l={validator:l}:l=D({},l),l.validator=a.getValidationMethod(l),l.validator&&(l.field=c,l.fullField=l.fullField||c,l.type=a.getType(l),w[c]=w[c]||[],w[c].push({rule:l,value:u,source:s,field:c}))})});var O={};return Ua(w,f,function(c,y){var u=c.rule,m=(u.type==="object"||u.type==="array")&&(typeof u.fields=="object"||typeof u.defaultField=="object");m=m&&(u.required||!u.required&&c.value),u.field=c.field;function l(T,C){return D({},C,{fullField:u.fullField+"."+T,fullFields:u.fullFields?[].concat(u.fullFields,[T]):[T]})}function b(T){T===void 0&&(T=[]);var C=Array.isArray(T)?T:[T];!f.suppressWarning&&C.length&&t.warning("async-validator:",C),C.length&&u.message!==void 0&&(C=[].concat(u.message));var I=C.map(_t(u,s));if(f.first&&I.length)return O[u.field]=1,y(I);if(!m)y(I);else{if(u.required&&!c.value)return u.message!==void 0?I=[].concat(u.message).map(_t(u,s)):f.error&&(I=[f.error(u,M(f.messages.required,u.field))]),y(I);var B={};u.defaultField&&Object.keys(c.value).map(function(L){B[L]=u.defaultField}),B=D({},B,c.rule.fields);var X={};Object.keys(B).forEach(function(L){var R=B[L],be=Array.isArray(R)?R:[R];X[L]=be.map(l.bind(null,L))});var z=new t(X);z.messages(f.messages),c.rule.options&&(c.rule.options.messages=f.messages,c.rule.options.error=f.error),z.validate(c.value,c.rule.options||f,function(L){var R=[];I&&I.length&&R.push.apply(R,I),L&&L.length&&R.push.apply(R,L),y(R.length?R:null)})}}var x;if(u.asyncValidator)x=u.asyncValidator(u,c.value,b,c.source,f);else if(u.validator){try{x=u.validator(u,c.value,b,c.source,f)}catch(T){console.error==null||console.error(T),f.suppressValidatorError||setTimeout(function(){throw T},0),b(T.message)}x===!0?b():x===!1?b(typeof u.message=="function"?u.message(u.fullField||u.field):u.message||(u.fullField||u.field)+" fails"):x instanceof Array?b(x):x instanceof Error&&b(x.message)}x&&x.then&&x.then(function(){return b()},function(T){return b(T)})},function(c){d(c)},s)},e.getType=function(n){if(n.type===void 0&&n.pattern instanceof RegExp&&(n.type="pattern"),typeof n.validator!="function"&&n.type&&!te.hasOwnProperty(n.type))throw new Error(M("Unknown rule type %s",n.type));return n.type||"string"},e.getValidationMethod=function(n){if(typeof n.validator=="function")return n.validator;var i=Object.keys(n),o=i.indexOf("message");return o!==-1&&i.splice(o,1),i.length===1&&i[0]==="required"?te.required:te[this.getType(n)]||void 0},t}();ae.register=function(e,r){if(typeof r!="function")throw new Error("Cannot register a validator by type, validator is not a function");te[e]=r};ae.warning=Ba;ae.messages=Be;ae.validators=te;const go=["","error","validating","success"],vo=It({label:String,labelWidth:{type:[String,Number],default:""},prop:{type:Fe([String,Array])},required:{type:Boolean,default:void 0},rules:{type:Fe([Object,Array])},error:String,validateStatus:{type:String,values:go},for:String,inlineMessage:{type:[String,Boolean],default:""},showMessage:{type:Boolean,default:!0},size:{type:String,values:zt}}),qt="ElLabelWrap";var yo=ie({name:qt,props:{isAutoWidth:Boolean,updateAll:Boolean},setup(t,{slots:e}){const r=pe(Ue,void 0),n=pe(Ee);n||Rr(qt,"usage: <el-form-item><label-wrap /></el-form-item>");const i=De("form"),o=W(),a=W(0),s=()=>{var d;if((d=o.value)!=null&&d.firstElementChild){const v=window.getComputedStyle(o.value.firstElementChild).width;return Math.ceil(Number.parseFloat(v))}else return 0},f=(d="update")=>{Ut(()=>{e.default&&t.isAutoWidth&&(d==="update"?a.value=s():d==="remove"&&(r==null||r.deregisterLabelWidth(a.value)))})},g=()=>f("update");return Wt(()=>{g()}),Dt(()=>{f("remove")}),jr(()=>g()),de(a,(d,v)=>{t.updateAll&&(r==null||r.registerLabelWidth(d,v))}),Cr(E(()=>{var d,v;return(v=(d=o.value)==null?void 0:d.firstElementChild)!=null?v:null}),g),()=>{var d,v;if(!e)return null;const{isAutoWidth:w}=t;if(w){const F=r==null?void 0:r.autoLabelWidth,O=n==null?void 0:n.hasLabel,c={};if(O&&F&&F!=="auto"){const y=Math.max(0,Number.parseInt(F,10)-a.value),u=r.labelPosition==="left"?"marginRight":"marginLeft";y&&(c[u]=`${y}px`)}return ge("div",{ref:o,class:[i.be("item","label-wrap")],style:c},[(d=e.default)==null?void 0:d.call(e)])}else return ge(Tr,{ref:o},[(v=e.default)==null?void 0:v.call(e)])}}});const mo=["role","aria-labelledby"],ho=ie({name:"ElFormItem"}),bo=ie({...ho,props:vo,setup(t,{expose:e}){const r=t,n=$r(),i=pe(Ue,void 0),o=pe(Ee,void 0),a=Gt(void 0,{formItem:!1}),s=De("form-item"),f=Ir().value,g=W([]),d=W(""),v=Fr(d,100),w=W(""),F=W();let O,c=!1;const y=E(()=>{if((i==null?void 0:i.labelPosition)==="top")return{};const p=tt(r.labelWidth||(i==null?void 0:i.labelWidth)||"");return p?{width:p}:{}}),u=E(()=>{if((i==null?void 0:i.labelPosition)==="top"||(i==null?void 0:i.inline))return{};if(!r.label&&!r.labelWidth&&B)return{};const p=tt(r.labelWidth||(i==null?void 0:i.labelWidth)||"");return!r.label&&!n.label?{marginLeft:p}:{}}),m=E(()=>[s.b(),s.m(a.value),s.is("error",d.value==="error"),s.is("validating",d.value==="validating"),s.is("success",d.value==="success"),s.is("required",be.value||r.required),s.is("no-asterisk",i==null?void 0:i.hideRequiredAsterisk),(i==null?void 0:i.requireAsteriskPosition)==="right"?"asterisk-right":"asterisk-left",{[s.m("feedback")]:i==null?void 0:i.statusIcon}]),l=E(()=>Mt(r.inlineMessage)?r.inlineMessage:(i==null?void 0:i.inlineMessage)||!1),b=E(()=>[s.e("error"),{[s.em("error","inline")]:l.value}]),x=E(()=>r.prop?Oe(r.prop)?r.prop:r.prop.join("."):""),T=E(()=>!!(r.label||n.label)),C=E(()=>r.for||g.value.length===1?g.value[0]:void 0),I=E(()=>!C.value&&T.value),B=!!o,X=E(()=>{const p=i==null?void 0:i.model;if(!(!p||!r.prop))return xe(p,r.prop).value}),z=E(()=>{const{required:p}=r,A=[];r.rules&&A.push(...qe(r.rules));const P=i==null?void 0:i.rules;if(P&&r.prop){const q=xe(P,r.prop).value;q&&A.push(...qe(q))}if(p!==void 0){const q=A.map((N,K)=>[N,K]).filter(([N])=>Object.keys(N).includes("required"));if(q.length>0)for(const[N,K]of q)N.required!==p&&(A[K]={...N,required:p});else A.push({required:p})}return A}),L=E(()=>z.value.length>0),R=p=>z.value.filter(P=>!P.trigger||!p?!0:Array.isArray(P.trigger)?P.trigger.includes(p):P.trigger===p).map(({trigger:P,...q})=>q),be=E(()=>z.value.some(p=>p.required)),cr=E(()=>{var p;return v.value==="error"&&r.showMessage&&((p=i==null?void 0:i.showMessage)!=null?p:!0)}),Xe=E(()=>`${r.label||""}${(i==null?void 0:i.labelSuffix)||""}`),G=p=>{d.value=p},dr=p=>{var A,P;const{errors:q,fields:N}=p;(!q||!N)&&console.error(p),G("error"),w.value=q?(P=(A=q==null?void 0:q[0])==null?void 0:A.message)!=null?P:`${r.prop} is required`:"",i==null||i.emit("validate",r.prop,!1,w.value)},pr=()=>{G("success"),i==null||i.emit("validate",r.prop,!0,"")},gr=async p=>{const A=x.value;return new ae({[A]:p}).validate({[A]:X.value},{firstFields:!0}).then(()=>(pr(),!0)).catch(q=>(dr(q),Promise.reject(q)))},Qe=async(p,A)=>{if(c||!r.prop)return!1;const P=Vt(A);if(!L.value)return A==null||A(!1),!1;const q=R(p);return q.length===0?(A==null||A(!0),!0):(G("validating"),gr(q).then(()=>(A==null||A(!0),!0)).catch(N=>{const{fields:K}=N;return A==null||A(!1,K),P?!1:Promise.reject(K)}))},we=()=>{G(""),w.value="",c=!1},ke=async()=>{const p=i==null?void 0:i.model;if(!p||!r.prop)return;const A=xe(p,r.prop);c=!0,A.value=$t(O),await Ut(),we(),c=!1},vr=p=>{g.value.includes(p)||g.value.push(p)},yr=p=>{g.value=g.value.filter(A=>A!==p)};de(()=>r.error,p=>{w.value=p||"",G(p?"error":"")},{immediate:!0}),de(()=>r.validateStatus,p=>G(p||""));const Ae=Ct({...Lt(r),$el:F,size:a,validateState:d,labelId:f,inputIds:g,isGroup:I,hasLabel:T,addInputId:vr,removeInputId:yr,resetField:ke,clearValidate:we,validate:Qe});return Rt(Ee,Ae),Wt(()=>{r.prop&&(i==null||i.addField(Ae),O=$t(X.value))}),Dt(()=>{i==null||i.removeField(Ae)}),e({size:a,validateMessage:w,validateState:d,validate:Qe,clearValidate:we,resetField:ke}),(p,A)=>{var P;return _e(),Nt("div",{ref_key:"formItemRef",ref:F,class:Q(_(m)),role:_(I)?"group":void 0,"aria-labelledby":_(I)?_(f):void 0},[ge(_(yo),{"is-auto-width":_(y).width==="auto","update-all":((P=_(i))==null?void 0:P.labelWidth)==="auto"},{default:je(()=>[_(T)?(_e(),Or(_r(_(C)?"label":"div"),{key:0,id:_(f),for:_(C),class:Q(_(s).e("label")),style:rt(_(y))},{default:je(()=>[fe(p.$slots,"label",{label:_(Xe)},()=>[Er(nt(_(Xe)),1)])]),_:3},8,["id","for","class","style"])):it("v-if",!0)]),_:3},8,["is-auto-width","update-all"]),at("div",{class:Q(_(s).e("content")),style:rt(_(u))},[fe(p.$slots,"default"),ge(Sr,{name:`${_(s).namespace.value}-zoom-in-top`},{default:je(()=>[_(cr)?fe(p.$slots,"error",{key:0,error:w.value},()=>[at("div",{class:Q(_(b))},nt(w.value),3)]):it("v-if",!0)]),_:3},8,["name"])],6)],10,mo)}}});var lr=Bt(bo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/form/src/form-item.vue"]]);const jo=qr(Ma,{FormItem:lr}),To=Pr(lr);export{To as E,H as S,wt as U,er as a,Ze as b,Ht as c,En as d,Kt as e,Yt as f,oi as g,jo as h,Zr as i,Ke as k};
