var Fb=Object.create;var fd=Object.defineProperty,Ob=Object.defineProperties,kb=Object.getOwnPropertyDescriptor,Ub=Object.getOwnPropertyDescriptors,Bb=Object.getOwnPropertyNames,qm=Object.getOwnPropertySymbols,Vb=Object.getPrototypeOf,Ym=Object.prototype.hasOwnProperty,Hb=Object.prototype.propertyIsEnumerable;var Xm=(n,e,t)=>e in n?fd(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,zt=(n,e)=>{for(var t in e||={})Ym.call(e,t)&&Xm(n,t,e[t]);if(qm)for(var t of qm(e))Hb.call(e,t)&&Xm(n,t,e[t]);return n},Xt=(n,e)=>Ob(n,Ub(e));var GN=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var zb=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Bb(e))!Ym.call(n,r)&&r!==t&&fd(n,r,{get:()=>e[r],enumerable:!(i=kb(e,r))||i.enumerable});return n};var WN=(n,e,t)=>(t=n!=null?Fb(Vb(n)):{},zb(e||!n||!n.__esModule?fd(t,"default",{value:n,enumerable:!0}):t,n));var cr=(n,e,t)=>new Promise((i,r)=>{var s=c=>{try{a(t.next(c))}catch(l){r(l)}},o=c=>{try{a(t.throw(c))}catch(l){r(l)}},a=c=>c.done?i(c.value):Promise.resolve(c.value).then(s,o);a((t=t.apply(n,e)).next())});var hd;function Pa(){return hd}function $n(n){let e=hd;return hd=n,e}var Zm=Symbol("NotFound");function ts(n){return n===Zm||n?.name==="\u0275NotFound"}var Gt=null,La=!1,pd=1,Gb=null,nn=Symbol("SIGNAL");function Pe(n){let e=Gt;return Gt=n,e}function Oa(){return Gt}var lo={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function uo(n){if(La)throw new Error("");if(Gt===null)return;Gt.consumerOnSignalRead(n);let e=Gt.producersTail;if(e!==void 0&&e.producer===n)return;let t,i=Gt.recomputing;if(i&&(t=e!==void 0?e.nextProducer:Gt.producers,t!==void 0&&t.producer===n)){Gt.producersTail=t,t.lastReadVersion=n.version;return}let r=n.consumersTail;if(r!==void 0&&r.consumer===Gt&&(!i||jb(r,Gt)))return;let s=ns(Gt),o={producer:n,consumer:Gt,nextProducer:t,prevConsumer:r,lastReadVersion:n.version,nextConsumer:void 0};Gt.producersTail=o,e!==void 0?e.nextProducer=o:Gt.producers=o,s&&eg(n,o)}function Jm(){pd++}function md(n){if(!(ns(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===pd)){if(!n.producerMustRecompute(n)&&!ho(n)){Fa(n);return}n.producerRecomputeValue(n),Fa(n)}}function gd(n){if(n.consumers===void 0)return;let e=La;La=!0;try{for(let t=n.consumers;t!==void 0;t=t.nextConsumer){let i=t.consumer;i.dirty||Wb(i)}}finally{La=e}}function xd(){return Gt?.consumerAllowSignalWrites!==!1}function Wb(n){n.dirty=!0,gd(n),n.consumerMarkedDirty?.(n)}function Fa(n){n.dirty=!1,n.lastCleanEpoch=pd}function fo(n){return n&&Km(n),Pe(n)}function Km(n){n.producersTail=void 0,n.recomputing=!0}function ka(n,e){Pe(e),n&&Qm(n)}function Qm(n){n.recomputing=!1;let e=n.producersTail,t=e!==void 0?e.nextProducer:n.producers;if(t!==void 0){if(ns(n))do t=yd(t);while(t!==void 0);e!==void 0?e.nextProducer=void 0:n.producers=void 0}}function ho(n){for(let e=n.producers;e!==void 0;e=e.nextProducer){let t=e.producer,i=e.lastReadVersion;if(i!==t.version||(md(t),i!==t.version))return!0}return!1}function po(n){if(ns(n)){let e=n.producers;for(;e!==void 0;)e=yd(e)}n.producers=void 0,n.producersTail=void 0,n.consumers=void 0,n.consumersTail=void 0}function eg(n,e){let t=n.consumersTail,i=ns(n);if(t!==void 0?(e.nextConsumer=t.nextConsumer,t.nextConsumer=e):(e.nextConsumer=void 0,n.consumers=e),e.prevConsumer=t,n.consumersTail=e,!i)for(let r=n.producers;r!==void 0;r=r.nextProducer)eg(r.producer,r)}function yd(n){let e=n.producer,t=n.nextProducer,i=n.nextConsumer,r=n.prevConsumer;if(n.nextConsumer=void 0,n.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:e.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(e.consumers=i,!ns(e)){let s=e.producers;for(;s!==void 0;)s=yd(s)}return t}function ns(n){return n.consumerIsAlwaysLive||n.consumers!==void 0}function vd(n){Gb?.(n)}function jb(n,e){let t=e.producersTail;if(t!==void 0){let i=e.producers;do{if(i===n)return!0;if(i===t)break;i=i.nextProducer}while(i!==void 0)}return!1}function _d(n,e){return Object.is(n,e)}function $b(){throw new Error}var tg=$b;function ng(n){tg(n)}function bd(n){tg=n}var qb=null;function Md(n,e){let t=Object.create(Ua);t.value=n,e!==void 0&&(t.equal=e);let i=()=>ig(t);return i[nn]=t,vd(t),[i,o=>is(t,o),o=>Ed(t,o)]}function ig(n){return uo(n),n.value}function is(n,e){xd()||ng(n),n.equal(n.value,e)||(n.value=e,Xb(n))}function Ed(n,e){xd()||ng(n),is(n,e(n.value))}var Ua=Xt(zt({},lo),{equal:_d,value:void 0,kind:"signal"});function Xb(n){n.version++,Jm(),gd(n),qb?.(n)}function Oe(n){return typeof n=="function"}function rs(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Ba=rs(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function mo(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var Ot=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(Oe(i))try{i()}catch(s){e=s instanceof Ba?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{rg(s)}catch(o){e=e??[],o instanceof Ba?e=[...e,...o.errors]:e.push(o)}}if(e)throw new Ba(e)}}add(e){var t;if(e&&e!==this)if(this.closed)rg(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&mo(t,e)}remove(e){let{_finalizers:t}=this;t&&mo(t,e),e instanceof n&&e._removeParent(this)}};Ot.EMPTY=(()=>{let n=new Ot;return n.closed=!0,n})();var Sd=Ot.EMPTY;function Va(n){return n instanceof Ot||n&&"closed"in n&&Oe(n.remove)&&Oe(n.add)&&Oe(n.unsubscribe)}function rg(n){Oe(n)?n():n.unsubscribe()}var Pn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var ss={setTimeout(n,e,...t){let{delegate:i}=ss;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=ss;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function Ha(n){ss.setTimeout(()=>{let{onUnhandledError:e}=Pn;if(e)e(n);else throw n})}function go(){}var sg=wd("C",void 0,void 0);function og(n){return wd("E",void 0,n)}function ag(n){return wd("N",n,void 0)}function wd(n,e,t){return{kind:n,value:e,error:t}}var lr=null;function os(n){if(Pn.useDeprecatedSynchronousErrorHandling){let e=!lr;if(e&&(lr={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=lr;if(lr=null,t)throw i}}else n()}function cg(n){Pn.useDeprecatedSynchronousErrorHandling&&lr&&(lr.errorThrown=!0,lr.error=n)}var ur=class extends Ot{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,Va(e)&&e.add(this)):this.destination=Jb}static create(e,t,i){return new as(e,t,i)}next(e){this.isStopped?Cd(ag(e),this):this._next(e)}error(e){this.isStopped?Cd(og(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?Cd(sg,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},Yb=Function.prototype.bind;function Td(n,e){return Yb.call(n,e)}var Dd=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){za(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){za(i)}else za(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){za(t)}}},as=class extends ur{constructor(e,t,i){super();let r;if(Oe(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let s;this&&Pn.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&Td(e.next,s),error:e.error&&Td(e.error,s),complete:e.complete&&Td(e.complete,s)}):r=e}this.destination=new Dd(r)}};function za(n){Pn.useDeprecatedSynchronousErrorHandling?cg(n):Ha(n)}function Zb(n){throw n}function Cd(n,e){let{onStoppedNotification:t}=Pn;t&&ss.setTimeout(()=>t(n,e))}var Jb={closed:!0,next:go,error:Zb,complete:go};var cs=typeof Symbol=="function"&&Symbol.observable||"@@observable";function dn(n){return n}function Kb(...n){return Ad(n)}function Ad(n){return n.length===0?dn:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var rt=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let s=eM(t)?t:new as(t,i,r);return os(()=>{let{operator:o,source:a}=this;s.add(o?o.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=lg(i),new i((r,s)=>{let o=new as({next:a=>{try{t(a)}catch(c){s(c),o.unsubscribe()}},error:s,complete:r});this.subscribe(o)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[cs](){return this}pipe(...t){return Ad(t)(this)}toPromise(t){return t=lg(t),new t((i,r)=>{let s;this.subscribe(o=>s=o,o=>r(o),()=>i(s))})}}return n.create=e=>new n(e),n})();function lg(n){var e;return(e=n??Pn.Promise)!==null&&e!==void 0?e:Promise}function Qb(n){return n&&Oe(n.next)&&Oe(n.error)&&Oe(n.complete)}function eM(n){return n&&n instanceof ur||Qb(n)&&Va(n)}function Id(n){return Oe(n?.lift)}function Ke(n){return e=>{if(Id(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function Qe(n,e,t,i,r){return new Rd(n,e,t,i,r)}var Rd=class extends ur{constructor(e,t,i,r,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};function Nd(){return Ke((n,e)=>{let t=null;n._refCount++;let i=Qe(e,void 0,void 0,void 0,()=>{if(!n||n._refCount<=0||0<--n._refCount){t=null;return}let r=n._connection,s=t;t=null,r&&(!s||r===s)&&r.unsubscribe(),e.unsubscribe()});n.subscribe(i),i.closed||(t=n.connect())})}var Pd=class extends rt{constructor(e,t){super(),this.source=e,this.subjectFactory=t,this._subject=null,this._refCount=0,this._connection=null,Id(e)&&(this.lift=e.lift)}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){let e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:e}=this;this._subject=this._connection=null,e?.unsubscribe()}connect(){let e=this._connection;if(!e){e=this._connection=new Ot;let t=this.getSubject();e.add(this.source.subscribe(Qe(t,void 0,()=>{this._teardown(),t.complete()},i=>{this._teardown(),t.error(i)},()=>this._teardown()))),e.closed&&(this._connection=null,e=Ot.EMPTY)}return e}refCount(){return Nd()(this)}};var ug=rs(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var qn=(()=>{class n extends rt{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new Ga(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new ug}next(t){os(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){os(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){os(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:s}=this;return i||r?Sd:(this.currentObservers=null,s.push(t),new Ot(()=>{this.currentObservers=null,mo(s,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:s}=this;i?t.error(r):s&&t.complete()}asObservable(){let t=new rt;return t.source=this,t}}return n.create=(e,t)=>new Ga(e,t),n})(),Ga=class extends qn{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:Sd}};var xo=class extends qn{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var yo=new rt(n=>n.complete());function dg(n){return n&&Oe(n.schedule)}function fg(n){return n[n.length-1]}function hg(n){return Oe(fg(n))?n.pop():void 0}function Ti(n){return dg(fg(n))?n.pop():void 0}function mg(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(d){o(d)}}function c(u){try{l(i.throw(u))}catch(d){o(d)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function pg(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function dr(n){return this instanceof dr?(this.v=n,this):new dr(n)}function gg(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(h){return function(g){return Promise.resolve(g).then(h,d)}}function a(h,g){i[h]&&(r[h]=function(x){return new Promise(function(m,p){s.push([h,x,m,p])>1||c(h,x)})},g&&(r[h]=g(r[h])))}function c(h,g){try{l(i[h](g))}catch(x){f(s[0][3],x)}}function l(h){h.value instanceof dr?Promise.resolve(h.value.v).then(u,d):f(s[0][2],h)}function u(h){c("next",h)}function d(h){c("throw",h)}function f(h,g){h(g),s.shift(),s.length&&c(s[0][0],s[0][1])}}function xg(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof pg=="function"?pg(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}var Wa=n=>n&&typeof n.length=="number"&&typeof n!="function";function ja(n){return Oe(n?.then)}function $a(n){return Oe(n[cs])}function qa(n){return Symbol.asyncIterator&&Oe(n?.[Symbol.asyncIterator])}function Xa(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function tM(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Ya=tM();function Za(n){return Oe(n?.[Ya])}function Ja(n){return gg(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield dr(t.read());if(r)return yield dr(void 0);yield yield dr(i)}}finally{t.releaseLock()}})}function Ka(n){return Oe(n?.getReader)}function kt(n){if(n instanceof rt)return n;if(n!=null){if($a(n))return nM(n);if(Wa(n))return iM(n);if(ja(n))return rM(n);if(qa(n))return yg(n);if(Za(n))return sM(n);if(Ka(n))return oM(n)}throw Xa(n)}function nM(n){return new rt(e=>{let t=n[cs]();if(Oe(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function iM(n){return new rt(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function rM(n){return new rt(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,Ha)})}function sM(n){return new rt(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function yg(n){return new rt(e=>{aM(n,e).catch(t=>e.error(t))})}function oM(n){return yg(Ja(n))}function aM(n,e){var t,i,r,s;return mg(this,void 0,void 0,function*(){try{for(t=xg(n);i=yield t.next(),!i.done;){let o=i.value;if(e.next(o),e.closed)return}}catch(o){r={error:o}}finally{try{i&&!i.done&&(s=t.return)&&(yield s.call(t))}finally{if(r)throw r.error}}e.complete()})}function rn(n,e,t,i=0,r=!1){let s=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(s),!r)return s}function Qa(n,e=0){return Ke((t,i)=>{t.subscribe(Qe(i,r=>rn(i,n,()=>i.next(r),e),()=>rn(i,n,()=>i.complete(),e),r=>rn(i,n,()=>i.error(r),e)))})}function ec(n,e=0){return Ke((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function vg(n,e){return kt(n).pipe(ec(e),Qa(e))}function _g(n,e){return kt(n).pipe(ec(e),Qa(e))}function bg(n,e){return new rt(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function Mg(n,e){return new rt(t=>{let i;return rn(t,e,()=>{i=n[Ya](),rn(t,e,()=>{let r,s;try{({value:r,done:s}=i.next())}catch(o){t.error(o);return}s?t.complete():t.next(r)},0,!0)}),()=>Oe(i?.return)&&i.return()})}function tc(n,e){if(!n)throw new Error("Iterable cannot be null");return new rt(t=>{rn(t,e,()=>{let i=n[Symbol.asyncIterator]();rn(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function Eg(n,e){return tc(Ja(n),e)}function Sg(n,e){if(n!=null){if($a(n))return vg(n,e);if(Wa(n))return bg(n,e);if(ja(n))return _g(n,e);if(qa(n))return tc(n,e);if(Za(n))return Mg(n,e);if(Ka(n))return Eg(n,e)}throw Xa(n)}function Ci(n,e){return e?Sg(n,e):kt(n)}function cM(...n){let e=Ti(n);return Ci(n,e)}function lM(n,e){let t=Oe(n)?n:()=>n,i=r=>r.error(t());return new rt(e?r=>e.schedule(i,0,r):i)}function uM(n){return!!n&&(n instanceof rt||Oe(n.lift)&&Oe(n.subscribe))}var fr=rs(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});function hr(n,e){return Ke((t,i)=>{let r=0;t.subscribe(Qe(i,s=>{i.next(n.call(e,s,r++))}))})}var{isArray:dM}=Array;function fM(n,e){return dM(e)?n(...e):n(e)}function wg(n){return hr(e=>fM(n,e))}var{isArray:hM}=Array,{getPrototypeOf:pM,prototype:mM,keys:gM}=Object;function Tg(n){if(n.length===1){let e=n[0];if(hM(e))return{args:e,keys:null};if(xM(e)){let t=gM(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}function xM(n){return n&&typeof n=="object"&&pM(n)===mM}function Cg(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function yM(...n){let e=Ti(n),t=hg(n),{args:i,keys:r}=Tg(n);if(i.length===0)return Ci([],e);let s=new rt(vM(i,e,r?o=>Cg(r,o):dn));return t?s.pipe(wg(t)):s}function vM(n,e,t=dn){return i=>{Dg(e,()=>{let{length:r}=n,s=new Array(r),o=r,a=r;for(let c=0;c<r;c++)Dg(e,()=>{let l=Ci(n[c],e),u=!1;l.subscribe(Qe(i,d=>{s[c]=d,u||(u=!0,a--),a||i.next(t(s.slice()))},()=>{--o||i.complete()}))},i)},i)}}function Dg(n,e,t){n?rn(t,n,e):e()}function Ag(n,e,t,i,r,s,o,a){let c=[],l=0,u=0,d=!1,f=()=>{d&&!c.length&&!l&&e.complete()},h=x=>l<i?g(x):c.push(x),g=x=>{s&&e.next(x),l++;let m=!1;kt(t(x,u++)).subscribe(Qe(e,p=>{r?.(p),s?h(p):e.next(p)},()=>{m=!0},void 0,()=>{if(m)try{for(l--;c.length&&l<i;){let p=c.shift();o?rn(e,o,()=>g(p)):g(p)}f()}catch(p){e.error(p)}}))};return n.subscribe(Qe(e,h,()=>{d=!0,f()})),()=>{a?.()}}function pr(n,e,t=1/0){return Oe(e)?pr((i,r)=>hr((s,o)=>e(i,s,r,o))(kt(n(i,r))),t):(typeof e=="number"&&(t=e),Ke((i,r)=>Ag(i,r,n,t)))}function Ig(n=1/0){return pr(dn,n)}function Rg(){return Ig(1)}function nc(...n){return Rg()(Ci(n,Ti(n)))}function _M(n){return new rt(e=>{kt(n()).subscribe(e)})}function vo(n,e){return Ke((t,i)=>{let r=0;t.subscribe(Qe(i,s=>n.call(e,s,r++)&&i.next(s)))})}function Ng(n){return Ke((e,t)=>{let i=null,r=!1,s;i=e.subscribe(Qe(t,void 0,void 0,o=>{s=kt(n(o,Ng(n)(e))),i?(i.unsubscribe(),i=null,s.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,s.subscribe(t))})}function Pg(n,e,t,i,r){return(s,o)=>{let a=t,c=e,l=0;s.subscribe(Qe(o,u=>{let d=l++;c=a?n(c,u,d):(a=!0,u),i&&o.next(c)},r&&(()=>{a&&o.next(c),o.complete()})))}}function bM(n,e){return Oe(e)?pr(n,e,1):pr(n,1)}function _o(n){return Ke((e,t)=>{let i=!1;e.subscribe(Qe(t,r=>{i=!0,t.next(r)},()=>{i||t.next(n),t.complete()}))})}function Ld(n){return n<=0?()=>yo:Ke((e,t)=>{let i=0;e.subscribe(Qe(t,r=>{++i<=n&&(t.next(r),n<=i&&t.complete())}))})}function ic(n=MM){return Ke((e,t)=>{let i=!1;e.subscribe(Qe(t,r=>{i=!0,t.next(r)},()=>i?t.complete():t.error(n())))})}function MM(){return new fr}function EM(n){return Ke((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function SM(n,e){let t=arguments.length>=2;return i=>i.pipe(n?vo((r,s)=>n(r,s,i)):dn,Ld(1),t?_o(e):ic(()=>new fr))}function Fd(n){return n<=0?()=>yo:Ke((e,t)=>{let i=[];e.subscribe(Qe(t,r=>{i.push(r),n<i.length&&i.shift()},()=>{for(let r of i)t.next(r);t.complete()},void 0,()=>{i=null}))})}function wM(n,e){let t=arguments.length>=2;return i=>i.pipe(n?vo((r,s)=>n(r,s,i)):dn,Fd(1),t?_o(e):ic(()=>new fr))}function TM(n,e){return Ke(Pg(n,e,arguments.length>=2,!0))}function CM(...n){let e=Ti(n);return Ke((t,i)=>{(e?nc(n,t,e):nc(n,t)).subscribe(i)})}function DM(n,e){return Ke((t,i)=>{let r=null,s=0,o=!1,a=()=>o&&!r&&i.complete();t.subscribe(Qe(i,c=>{r?.unsubscribe();let l=0,u=s++;kt(n(c,u)).subscribe(r=Qe(i,d=>i.next(e?e(c,d,u,l++):d),()=>{r=null,a()}))},()=>{o=!0,a()}))})}function AM(n){return Ke((e,t)=>{kt(n).subscribe(Qe(t,()=>t.complete(),go)),!t.closed&&e.subscribe(t)})}function IM(n,e,t){let i=Oe(n)||e||t?{next:n,error:e,complete:t}:n;return i?Ke((r,s)=>{var o;(o=i.subscribe)===null||o===void 0||o.call(i);let a=!0;r.subscribe(Qe(s,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),s.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),s.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),s.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):dn}function Lg(n){let e=Pe(null);try{return n()}finally{Pe(e)}}var cc="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",Ye=class extends Error{code;constructor(e,t){super(lc(e,t)),this.code=e}};function RM(n){return`NG0${Math.abs(n)}`}function lc(n,e){return`${RM(n)}${e?": "+e:""}`}function st(n){for(let e in n)if(n[e]===st)return e;throw Error("")}function ui(n){if(typeof n=="string")return n;if(Array.isArray(n))return`[${n.map(ui).join(", ")}]`;if(n==null)return""+n;let e=n.overriddenName||n.name;if(e)return`${e}`;let t=n.toString();if(t==null)return""+t;let i=t.indexOf(`
`);return i>=0?t.slice(0,i):t}function qd(n,e){return n?e?`${n} ${e}`:n:e||""}var NM=st({__forward_ref__:st});function uc(n){return n.__forward_ref__=uc,n.toString=function(){return ui(this())},n}function sn(n){return Xd(n)?n():n}function Xd(n){return typeof n=="function"&&n.hasOwnProperty(NM)&&n.__forward_ref__===uc}function ot(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function dc(n){return{providers:n.providers||[],imports:n.imports||[]}}function So(n){return LM(n,fc)}function PM(n){return So(n)!==null}function LM(n,e){return n.hasOwnProperty(e)&&n[e]||null}function FM(n){let e=n?.[fc]??null;return e||null}function kd(n){return n&&n.hasOwnProperty(sc)?n[sc]:null}var fc=st({\u0275prov:st}),sc=st({\u0275inj:st}),Ze=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(e,t){this._desc=e,this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=ot({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Yd(n){return n&&!!n.\u0275providers}var Zd=st({\u0275cmp:st}),Jd=st({\u0275dir:st}),Kd=st({\u0275pipe:st}),Qd=st({\u0275mod:st}),Mo=st({\u0275fac:st}),br=st({__NG_ELEMENT_ID__:st}),Og=st({__NG_ENV_ID__:st});function wo(n){return typeof n=="string"?n:n==null?"":String(n)}function Ug(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():wo(n)}var Bg=st({ngErrorCode:st}),OM=st({ngErrorMessage:st}),kM=st({ngTokenPath:st});function ef(n,e){return Vg("",-200,e)}function hc(n,e){throw new Ye(-201,!1)}function Vg(n,e,t){let i=new Ye(e,n);return i[Bg]=e,i[OM]=n,t&&(i[kM]=t),i}function UM(n){return n[Bg]}var Ud;function Hg(){return Ud}function fn(n){let e=Ud;return Ud=n,e}function tf(n,e,t){let i=So(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&8)return null;if(e!==void 0)return e;hc(n,"Injector")}var BM={},mr=BM,VM="__NG_DI_FLAG__",Bd=class{injector;constructor(e){this.injector=e}retrieve(e,t){let i=gr(t)||0;try{return this.injector.get(e,i&8?null:mr,i)}catch(r){if(ts(r))return r;throw r}}};function HM(n,e=0){let t=Pa();if(t===void 0)throw new Ye(-203,!1);if(t===null)return tf(n,void 0,e);{let i=zM(e),r=t.retrieve(n,i);if(ts(r)){if(i.optional)return null;throw r}return r}}function Ht(n,e=0){return(Hg()||HM)(sn(n),e)}function Ce(n,e){return Ht(n,gr(e))}function gr(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function zM(n){return{optional:!!(n&8),host:!!(n&1),self:!!(n&2),skipSelf:!!(n&4)}}function Vd(n){let e=[];for(let t=0;t<n.length;t++){let i=sn(n[t]);if(Array.isArray(i)){if(i.length===0)throw new Ye(900,!1);let r,s=0;for(let o=0;o<i.length;o++){let a=i[o],c=GM(a);typeof c=="number"?c===-1?r=a.token:s|=c:r=a}e.push(Ht(r,s))}else e.push(Ht(i))}return e}function GM(n){return n[VM]}function xr(n,e){let t=n.hasOwnProperty(Mo);return t?n[Mo]:null}function zg(n,e,t){if(n.length!==e.length)return!1;for(let i=0;i<n.length;i++){let r=n[i],s=e[i];if(t&&(r=t(r),s=t(s)),s!==r)return!1}return!0}function Gg(n){return n.flat(Number.POSITIVE_INFINITY)}function pc(n,e){n.forEach(t=>Array.isArray(t)?pc(t,e):e(t))}function nf(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function To(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}function Wg(n,e,t,i){let r=n.length;if(r==e)n.push(t,i);else if(r===1)n.push(i,n[0]),n[0]=t;else{for(r--,n.push(n[r-1],n[r]);r>e;){let s=r-2;n[r]=n[s],r--}n[e]=t,n[e+1]=i}}function jg(n,e,t){let i=us(n,e);return i>=0?n[i|1]=t:(i=~i,Wg(n,i,e,t)),i}function mc(n,e){let t=us(n,e);if(t>=0)return n[t|1]}function us(n,e){return WM(n,e,1)}function WM(n,e,t){let i=0,r=n.length>>t;for(;r!==i;){let s=i+(r-i>>1),o=n[s<<t];if(e===o)return s<<t;o>e?r=s:i=s+1}return~(r<<t)}var Mr={},wn=[],Ii=new Ze(""),rf=new Ze("",-1),sf=new Ze(""),Eo=class{get(e,t=mr){if(t===mr){let r=Vg("",-201);throw r.name="\u0275NotFound",r}return t}};function of(n){return n[Qd]||null}function di(n){return n[Zd]||null}function gc(n){return n[Jd]||null}function af(n){return n[Kd]||null}function Co(n){return{\u0275providers:n}}function $g(n){return Co([{provide:Ii,multi:!0,useValue:n}])}function qg(...n){return{\u0275providers:xc(!0,n),\u0275fromNgModule:!0}}function xc(n,...e){let t=[],i=new Set,r,s=o=>{t.push(o)};return pc(e,o=>{let a=o;oc(a,s,[],i)&&(r||=[],r.push(a))}),r!==void 0&&Xg(r,s),t}function Xg(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];cf(r,s=>{e(s,i)})}}function oc(n,e,t,i){if(n=sn(n),!n)return!1;let r=null,s=kd(n),o=!s&&di(n);if(!s&&!o){let c=n.ngModule;if(s=kd(c),s)r=c;else return!1}else{if(o&&!o.standalone)return!1;r=n}let a=i.has(r);if(o){if(a)return!1;if(i.add(r),o.dependencies){let c=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let l of c)oc(l,e,t,i)}}else if(s){if(s.imports!=null&&!a){i.add(r);let l;try{pc(s.imports,u=>{oc(u,e,t,i)&&(l||=[],l.push(u))})}finally{}l!==void 0&&Xg(l,e)}if(!a){let l=xr(r)||(()=>new r);e({provide:r,useFactory:l,deps:wn},r),e({provide:sf,useValue:r,multi:!0},r),e({provide:Ii,useValue:()=>Ht(r),multi:!0},r)}let c=s.providers;if(c!=null&&!a){let l=n;cf(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function cf(n,e){for(let t of n)Yd(t)&&(t=t.\u0275providers),Array.isArray(t)?cf(t,e):e(t)}var jM=st({provide:String,useValue:st});function Yg(n){return n!==null&&typeof n=="object"&&jM in n}function $M(n){return!!(n&&n.useExisting)}function qM(n){return!!(n&&n.useFactory)}function ac(n){return typeof n=="function"}var lf=new Ze(""),rc={},kg={},Od;function Do(){return Od===void 0&&(Od=new Eo),Od}var hn=class{},yr=class extends hn{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,zd(e,o=>this.processProvider(o)),this.records.set(rf,ls(void 0,this)),r.has("environment")&&this.records.set(hn,ls(void 0,this));let s=this.records.get(lf);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(sf,wn,{self:!0}))}retrieve(e,t){let i=gr(t)||0;try{return this.get(e,mr,i)}catch(r){if(ts(r))return r;throw r}}destroy(){bo(this),this._destroyed=!0;let e=Pe(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of t)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),Pe(e)}}onDestroy(e){return bo(this),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){bo(this);let t=$n(this),i=fn(void 0),r;try{return e()}finally{$n(t),fn(i)}}get(e,t=mr,i){if(bo(this),e.hasOwnProperty(Og))return e[Og](this);let r=gr(i),s,o=$n(this),a=fn(void 0);try{if(!(r&4)){let l=this.records.get(e);if(l===void 0){let u=KM(e)&&So(e);u&&this.injectableDefInScope(u)?l=ls(Hd(e),rc):l=null,this.records.set(e,l)}if(l!=null)return this.hydrate(e,l,r)}let c=r&2?Do():this.parent;return t=r&8&&t===mr?null:t,c.get(e,t)}catch(c){let l=UM(c);throw l===-200||l===-201?new Ye(l,null):c}finally{fn(a),$n(o)}}resolveInjectorInitializers(){let e=Pe(null),t=$n(this),i=fn(void 0),r;try{let s=this.get(Ii,wn,{self:!0});for(let o of s)o()}finally{$n(t),fn(i),Pe(e)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(ui(i));return`R3Injector[${e.join(", ")}]`}processProvider(e){e=sn(e);let t=ac(e)?e:sn(e&&e.provide),i=YM(e);if(!ac(e)&&e.multi===!0){let r=this.records.get(t);r||(r=ls(void 0,rc,!0),r.factory=()=>Vd(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t,i){let r=Pe(null);try{if(t.value===kg)throw ef(ui(e));return t.value===rc&&(t.value=kg,t.value=t.factory(void 0,i)),typeof t.value=="object"&&t.value&&JM(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{Pe(r)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=sn(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function Hd(n){let e=So(n),t=e!==null?e.factory:xr(n);if(t!==null)return t;if(n instanceof Ze)throw new Ye(204,!1);if(n instanceof Function)return XM(n);throw new Ye(204,!1)}function XM(n){if(n.length>0)throw new Ye(204,!1);let t=FM(n);return t!==null?()=>t.factory(n):()=>new n}function YM(n){if(Yg(n))return ls(void 0,n.useValue);{let e=Zg(n);return ls(e,rc)}}function Zg(n,e,t){let i;if(ac(n)){let r=sn(n);return xr(r)||Hd(r)}else if(Yg(n))i=()=>sn(n.useValue);else if(qM(n))i=()=>n.useFactory(...Vd(n.deps||[]));else if($M(n))i=(r,s)=>Ht(sn(n.useExisting),s!==void 0&&s&8?8:void 0);else{let r=sn(n&&(n.useClass||n.provide));if(ZM(n))i=()=>new r(...Vd(n.deps));else return xr(r)||Hd(r)}return i}function bo(n){if(n.destroyed)throw new Ye(205,!1)}function ls(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function ZM(n){return!!n.deps}function JM(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function KM(n){return typeof n=="function"||typeof n=="object"&&n.ngMetadataName==="InjectionToken"}function zd(n,e){for(let t of n)Array.isArray(t)?zd(t,e):t&&Yd(t)?zd(t.\u0275providers,e):e(t)}function yc(n,e){let t;n instanceof yr?(bo(n),t=n):t=new Bd(n);let i,r=$n(t),s=fn(void 0);try{return e()}finally{$n(r),fn(s)}}function Jg(){return Hg()!==void 0||Pa()!=null}var Ln=0,xe=1,Le=2,It=3,Tn=4,Cn=5,ds=6,fs=7,Ct=8,Yt=9,Xn=10,Et=11,hs=12,uf=13,Er=14,pn=15,Ri=16,Sr=17,Yn=18,Ao=19,df=20,li=21,vc=22,Io=23,mn=24,_c=25,wr=26,Dt=27,Kg=1,Ni=6,Pi=7,Ro=8,Tr=9,St=10;function fi(n){return Array.isArray(n)&&typeof n[Kg]=="object"}function Fn(n){return Array.isArray(n)&&n[Kg]===!0}function ff(n){return(n.flags&4)!==0}function Li(n){return n.componentOffset>-1}function No(n){return(n.flags&1)===1}function Cr(n){return!!n.template}function ps(n){return(n[Le]&512)!==0}function Fi(n){return(n[Le]&256)===256}var hf="svg",Qg="math";function Dn(n){for(;Array.isArray(n);)n=n[Ln];return n}function pf(n,e){return Dn(e[n])}function On(n,e){return Dn(e[n.index])}function Dr(n,e){return n.data[e]}function kn(n,e){let t=e[n];return fi(t)?t:t[Ln]}function e0(n){return(n[Le]&4)===4}function bc(n){return(n[Le]&128)===128}function t0(n){return Fn(n[It])}function gn(n,e){return e==null?null:n[e]}function mf(n){n[Sr]=0}function gf(n){n[Le]&1024||(n[Le]|=1024,bc(n)&&Lo(n))}function n0(n,e){for(;n>0;)e=e[Er],n--;return e}function Po(n){return!!(n[Le]&9216||n[mn]?.dirty)}function Mc(n){n[Xn].changeDetectionScheduler?.notify(8),n[Le]&64&&(n[Le]|=1024),Po(n)&&Lo(n)}function Lo(n){n[Xn].changeDetectionScheduler?.notify(0);let e=Di(n);for(;e!==null&&!(e[Le]&8192||(e[Le]|=8192,!bc(e)));)e=Di(e)}function Ec(n,e){if(Fi(n))throw new Ye(911,!1);n[li]===null&&(n[li]=[]),n[li].push(e)}function xf(n,e){if(n[li]===null)return;let t=n[li].indexOf(e);t!==-1&&n[li].splice(t,1)}function Di(n){let e=n[It];return Fn(e)?e[It]:e}function yf(n){return n[fs]??=[]}function vf(n){return n.cleanup??=[]}function i0(n,e,t,i){let r=yf(e);r.push(t),n.firstCreatePass&&vf(n).push(i,r.length-1)}var Be={lFrame:v0(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var Gd=!1;function r0(){return Be.lFrame.elementDepthCount}function s0(){Be.lFrame.elementDepthCount++}function _f(){Be.lFrame.elementDepthCount--}function bf(){return Be.bindingsEnabled}function o0(){return Be.skipHydrationRootTNode!==null}function Mf(n){return Be.skipHydrationRootTNode===n}function Ef(){Be.skipHydrationRootTNode=null}function He(){return Be.lFrame.lView}function Ut(){return Be.lFrame.tView}function a0(n){return Be.lFrame.contextLView=n,n[Ct]}function c0(n){return Be.lFrame.contextLView=null,n}function Zt(){let n=Sf();for(;n!==null&&n.type===64;)n=n.parent;return n}function Sf(){return Be.lFrame.currentTNode}function l0(){let n=Be.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function ms(n,e){let t=Be.lFrame;t.currentTNode=n,t.isParent=e}function wf(){return Be.lFrame.isParent}function u0(){Be.lFrame.isParent=!1}function Tf(){return Gd}function Cf(n){let e=Gd;return Gd=n,e}function d0(){let n=Be.lFrame,e=n.bindingRootIndex;return e===-1&&(e=n.bindingRootIndex=n.tView.bindingStartIndex),e}function f0(n){return Be.lFrame.bindingIndex=n}function Ar(){return Be.lFrame.bindingIndex++}function h0(n){let e=Be.lFrame,t=e.bindingIndex;return e.bindingIndex=e.bindingIndex+n,t}function p0(){return Be.lFrame.inI18n}function m0(n,e){let t=Be.lFrame;t.bindingIndex=t.bindingRootIndex=n,Sc(e)}function g0(){return Be.lFrame.currentDirectiveIndex}function Sc(n){Be.lFrame.currentDirectiveIndex=n}function x0(n){let e=Be.lFrame.currentDirectiveIndex;return e===-1?null:n[e]}function Df(){return Be.lFrame.currentQueryIndex}function wc(n){Be.lFrame.currentQueryIndex=n}function QM(n){let e=n[xe];return e.type===2?e.declTNode:e.type===1?n[Cn]:null}function Af(n,e,t){if(t&4){let r=e,s=n;for(;r=r.parent,r===null&&!(t&1);)if(r=QM(s),r===null||(s=s[Er],r.type&10))break;if(r===null)return!1;e=r,n=s}let i=Be.lFrame=y0();return i.currentTNode=e,i.lView=n,!0}function Tc(n){let e=y0(),t=n[xe];Be.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function y0(){let n=Be.lFrame,e=n===null?null:n.child;return e===null?v0(n):e}function v0(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function _0(){let n=Be.lFrame;return Be.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var If=_0;function Cc(){let n=_0();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function b0(n){return(Be.lFrame.contextLView=n0(n,Be.lFrame.contextLView))[Ct]}function Oi(){return Be.lFrame.selectedIndex}function ki(n){Be.lFrame.selectedIndex=n}function Dc(){let n=Be.lFrame;return Dr(n.tView,n.selectedIndex)}function M0(){Be.lFrame.currentNamespace=hf}function E0(){eE()}function eE(){Be.lFrame.currentNamespace=null}function S0(){return Be.lFrame.currentNamespace}var w0=!0;function Ac(){return w0}function Ic(n){w0=n}function Wd(n,e=null,t=null,i){let r=Rf(n,e,t,i);return r.resolveInjectorInitializers(),r}function Rf(n,e=null,t=null,i,r=new Set){let s=[t||wn,qg(n)];return i=i||(typeof n=="object"?void 0:ui(n)),new yr(s,e||Do(),i||null,r)}var vr=class n{static THROW_IF_NOT_FOUND=mr;static NULL=new Eo;static create(e,t){if(Array.isArray(e))return Wd({name:""},t,e,"");{let i=e.name??"";return Wd({name:i},e.parent,e.providers,i)}}static \u0275prov=ot({token:n,providedIn:"any",factory:()=>Ht(rf)});static __NG_ELEMENT_ID__=-1},gs=new Ze(""),Fo=(()=>{class n{static __NG_ELEMENT_ID__=tE;static __NG_ENV_ID__=t=>t}return n})(),jd=class extends Fo{_lView;constructor(e){super(),this._lView=e}get destroyed(){return Fi(this._lView)}onDestroy(e){let t=this._lView;return Ec(t,e),()=>xf(t,e)}};function tE(){return new jd(He())}var _r=class{_console=console;handleError(e){this._console.error("ERROR",e)}},Un=new Ze("",{providedIn:"root",factory:()=>{let n=Ce(hn),e;return t=>{n.destroyed&&!e?setTimeout(()=>{throw t}):(e??=n.get(_r),e.handleError(t))}}}),T0={provide:Ii,useValue:()=>void Ce(_r),multi:!0},nE=new Ze("",{providedIn:"root",factory:()=>{let n=Ce(gs).defaultView;if(!n)return;let e=Ce(Un),t=s=>{e(s.reason),s.preventDefault()},i=s=>{s.error?e(s.error):e(new Error(s.message,{cause:s})),s.preventDefault()},r=()=>{n.addEventListener("unhandledrejection",t),n.addEventListener("error",i)};typeof Zone<"u"?Zone.root.run(r):r(),Ce(Fo).onDestroy(()=>{n.removeEventListener("error",i),n.removeEventListener("unhandledrejection",t)})}});function iE(){return Co([$g(()=>void Ce(nE))])}function C0(n,e){let[t,i,r]=Md(n,e?.equal),s=t,o=s[nn];return s.set=i,s.update=r,s.asReadonly=D0.bind(s),s}function D0(){let n=this[nn];if(n.readonlyFn===void 0){let e=()=>this();e[nn]=n,n.readonlyFn=e}return n.readonlyFn}var Ai=class{},Oo=new Ze("",{providedIn:"root",factory:()=>!1});var Nf=new Ze(""),Pf=new Ze(""),Ui=(()=>{class n{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new xo(!1);get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new rt(t=>{t.next(!1),t.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),t}has(t){return this.pendingTasks.has(t)}remove(t){this.pendingTasks.delete(t),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=ot({token:n,providedIn:"root",factory:()=>new n})}return n})(),Lf=(()=>{class n{internalPendingTasks=Ce(Ui);scheduler=Ce(Ai);errorHandler=Ce(Un);add(){let t=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(t)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(t))}}run(t){let i=this.add();t().catch(this.errorHandler).finally(i)}static \u0275prov=ot({token:n,providedIn:"root",factory:()=>new n})}return n})();function ko(...n){}var Ff=(()=>{class n{static \u0275prov=ot({token:n,providedIn:"root",factory:()=>new $d})}return n})(),$d=class{dirtyEffectCount=0;queues=new Map;add(e){this.enqueue(e),this.schedule(e)}schedule(e){e.dirty&&this.dirtyEffectCount++}remove(e){let t=e.zone,i=this.queues.get(t);i.has(e)&&(i.delete(e),e.dirty&&this.dirtyEffectCount--)}enqueue(e){let t=e.zone;this.queues.has(t)||this.queues.set(t,new Set);let i=this.queues.get(t);i.has(e)||i.add(e)}flush(){for(;this.dirtyEffectCount>0;){let e=!1;for(let[t,i]of this.queues)t===null?e||=this.flushQueue(i):e||=t.run(()=>this.flushQueue(i));e||(this.dirtyEffectCount=0)}}flushQueue(e){let t=!1;for(let i of e)i.dirty&&(this.dirtyEffectCount--,t=!0,i.run());return t}};function Xo(n){return{toString:n}.toString()}function pE(n){return typeof n=="function"}var Uc=class{previousValue;currentValue;firstChange;constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function ux(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}var dx=(()=>{let n=()=>fx;return n.ngInherit=!0,n})();function fx(n){return n.type.prototype.ngOnChanges&&(n.setInput=gE),mE}function mE(){let n=px(this),e=n?.current;if(e){let t=n.previous;if(t===Mr)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function gE(n,e,t,i,r){let s=this.declaredInputs[i],o=px(n)||xE(n,{previous:Mr,current:null}),a=o.current||(o.current={}),c=o.previous,l=c[s];a[s]=new Uc(l&&l.currentValue,t,c===Mr),ux(n,e,r,t)}var hx="__ngSimpleChanges__";function px(n){return n[hx]||null}function xE(n,e){return n[hx]=e}var A0=[];var at=function(n,e=null,t){for(let i=0;i<A0.length;i++){let r=A0[i];r(n,e,t)}};function yE(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let o=fx(e);(t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o)}r&&(t.preOrderHooks??=[]).push(0-n,r),s&&((t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s))}function mx(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=s;o&&(n.contentHooks??=[]).push(-t,o),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function Nc(n,e,t){gx(n,e,3,t)}function Pc(n,e,t,i){(n[Le]&3)===t&&gx(n,e,t,i)}function Of(n,e){let t=n[Le];(t&3)===e&&(t&=16383,t+=1,n[Le]=t)}function gx(n,e,t,i){let r=i!==void 0?n[Sr]&65535:0,s=i??-1,o=e.length-1,a=0;for(let c=r;c<o;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[Sr]+=65536),(a<s||s==-1)&&(vE(n,t,e,c),n[Sr]=(n[Sr]&4294901760)+c+2),c++}function I0(n,e){at(4,n,e);let t=Pe(null);try{e.call(n)}finally{Pe(t),at(5,n,e)}}function vE(n,e,t,i){let r=t[i]<0,s=t[i+1],o=r?-t[i]:t[i],a=n[o];r?n[Le]>>14<n[Sr]>>16&&(n[Le]&3)===e&&(n[Le]+=16384,I0(a,s)):I0(a,s)}var ys=-1,Vo=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(e,t,i,r){this.factory=e,this.name=r,this.canSeeViewProviders=t,this.injectImpl=i}};function _E(n){return(n.flags&8)!==0}function bE(n){return(n.flags&16)!==0}function ME(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let s=t[i++],o=t[i++],a=t[i++];n.setAttribute(e,o,a,s)}else{let s=r,o=t[++i];SE(s)?n.setProperty(e,s,o):n.setAttribute(e,s,o),i++}}return i}function EE(n){return n===3||n===4||n===6}function SE(n){return n.charCodeAt(0)===64}function nl(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?R0(n,t,r,null,e[++i]):R0(n,t,r,null,null))}}return n}function R0(n,e,t,i,r){let s=0,o=n.length;if(e===-1)o=-1;else for(;s<n.length;){let a=n[s++];if(typeof a=="number"){if(a===e){o=-1;break}else if(a>e){o=s-1;break}}}for(;s<n.length;){let a=n[s];if(typeof a=="number")break;if(a===t){r!==null&&(n[s+1]=r);return}s++,r!==null&&s++}o!==-1&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),r!==null&&n.splice(s++,0,r)}function xx(n){return n!==ys}function Bc(n){return n&32767}function wE(n){return n>>16}function Vc(n,e){let t=wE(n),i=e;for(;t>0;)i=i[Er],t--;return i}var jf=!0;function N0(n){let e=jf;return jf=n,e}var TE=256,yx=TE-1,vx=5,CE=0,Zn={};function DE(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(br)&&(i=t[br]),i==null&&(i=t[br]=CE++);let r=i&yx,s=1<<r;e.data[n+(r>>vx)]|=s}function _x(n,e){let t=bx(n,e);if(t!==-1)return t;let i=e[xe];i.firstCreatePass&&(n.injectorIndex=e.length,kf(i.data,n),kf(e,null),kf(i.blueprint,null));let r=yh(n,e),s=n.injectorIndex;if(xx(r)){let o=Bc(r),a=Vc(r,e),c=a[xe].data;for(let l=0;l<8;l++)e[s+l]=a[o+l]|c[o+l]}return e[s+8]=r,s}function kf(n,e){n.push(0,0,0,0,0,0,0,0,e)}function bx(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function yh(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=Tx(r),i===null)return ys;if(t++,r=r[Er],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return ys}function AE(n,e,t){DE(n,e,t)}function Mx(n,e,t){if(t&8||n!==void 0)return n;hc(e,"NodeInjector")}function Ex(n,e,t,i){if(t&8&&i===void 0&&(i=null),(t&3)===0){let r=n[Yt],s=fn(void 0);try{return r?r.get(e,i,t&8):tf(e,i,t&8)}finally{fn(s)}}return Mx(i,e,t)}function Sx(n,e,t,i=0,r){if(n!==null){if(e[Le]&2048&&!(i&2)){let o=LE(n,e,t,i,Zn);if(o!==Zn)return o}let s=wx(n,e,t,i,Zn);if(s!==Zn)return s}return Ex(e,t,i,r)}function wx(n,e,t,i,r){let s=RE(t);if(typeof s=="function"){if(!Af(e,n,i))return i&1?Mx(r,t,i):Ex(e,t,i,r);try{let o;if(o=s(i),o==null&&!(i&8))hc(t);else return o}finally{If()}}else if(typeof s=="number"){let o=null,a=bx(n,e),c=ys,l=i&1?e[pn][Cn]:null;for((a===-1||i&4)&&(c=a===-1?yh(n,e):e[a+8],c===ys||!L0(i,!1)?a=-1:(o=e[xe],a=Bc(c),e=Vc(c,e)));a!==-1;){let u=e[xe];if(P0(s,a,u.data)){let d=IE(a,e,t,o,i,l);if(d!==Zn)return d}c=e[a+8],c!==ys&&L0(i,e[xe].data[a+8]===l)&&P0(s,a,e)?(o=u,a=Bc(c),e=Vc(c,e)):a=-1}}return r}function IE(n,e,t,i,r,s){let o=e[xe],a=o.data[n+8],c=i==null?Li(a)&&jf:i!=o&&(a.type&3)!==0,l=r&1&&s===a,u=Lc(a,o,t,c,l);return u!==null?Hc(e,o,u,a,r):Zn}function Lc(n,e,t,i,r){let s=n.providerIndexes,o=e.data,a=s&1048575,c=n.directiveStart,l=n.directiveEnd,u=s>>20,d=i?a:a+u,f=r?a+u:l;for(let h=d;h<f;h++){let g=o[h];if(h<c&&t===g||h>=c&&g.type===t)return h}if(r){let h=o[c];if(h&&Cr(h)&&h.type===t)return c}return null}function Hc(n,e,t,i,r){let s=n[t],o=e.data;if(s instanceof Vo){let a=s;if(a.resolving){let h=Ug(o[t]);throw ef(h)}let c=N0(a.canSeeViewProviders);a.resolving=!0;let l=o[t].type||o[t],u,d=a.injectImpl?fn(a.injectImpl):null,f=Af(n,i,0);try{s=n[t]=a.factory(void 0,r,o,n,i),e.firstCreatePass&&t>=i.directiveStart&&yE(t,o[t],e)}finally{d!==null&&fn(d),N0(c),a.resolving=!1,If()}}return s}function RE(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(br)?n[br]:void 0;return typeof e=="number"?e>=0?e&yx:NE:e}function P0(n,e,t){let i=1<<n;return!!(t[e+(n>>vx)]&i)}function L0(n,e){return!(n&2)&&!(n&1&&e)}var Ir=class{_tNode;_lView;constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return Sx(this._tNode,this._lView,e,gr(i),t)}};function NE(){return new Ir(Zt(),He())}function PE(n){return Xo(()=>{let e=n.prototype.constructor,t=e[Mo]||$f(e),i=Object.prototype,r=Object.getPrototypeOf(n.prototype).constructor;for(;r&&r!==i;){let s=r[Mo]||$f(r);if(s&&s!==t)return s;r=Object.getPrototypeOf(r)}return s=>new s})}function $f(n){return Xd(n)?()=>{let e=$f(sn(n));return e&&e()}:xr(n)}function LE(n,e,t,i,r){let s=n,o=e;for(;s!==null&&o!==null&&o[Le]&2048&&!ps(o);){let a=wx(s,o,t,i|2,Zn);if(a!==Zn)return a;let c=s.parent;if(!c){let l=o[df];if(l){let u=l.get(t,Zn,i);if(u!==Zn)return u}c=Tx(o),o=o[Er]}s=c}return r}function Tx(n){let e=n[xe],t=e.type;return t===2?e.declTNode:t===1?n[Cn]:null}function FE(){return Ts(Zt(),He())}function Ts(n,e){return new Cs(On(n,e))}var Cs=(()=>{class n{nativeElement;constructor(t){this.nativeElement=t}static __NG_ELEMENT_ID__=FE}return n})();function OE(n){return n instanceof Cs?n.nativeElement:n}function kE(){return this._results[Symbol.iterator]()}var zc=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new qn}constructor(e=!1){this._emitDistinctChangesOnly=e}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,t){return this._results.reduce(e,t)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,t){this.dirty=!1;let i=Gg(e);(this._changesDetected=!zg(this._results,i,t))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(e){this._onDirty=e}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=kE};function Cx(n){return(n.flags&128)===128}var vh=(function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n})(vh||{}),Dx=new Map,UE=0;function BE(){return UE++}function VE(n){Dx.set(n[Ao],n)}function qf(n){Dx.delete(n[Ao])}var F0="__ngContext__";function _s(n,e){fi(e)?(n[F0]=e[Ao],VE(e)):n[F0]=e}function Ax(n){return Rx(n[hs])}function Ix(n){return Rx(n[Tn])}function Rx(n){for(;n!==null&&!Fn(n);)n=n[Tn];return n}var Xf;function HE(n){Xf=n}function Nx(){if(Xf!==void 0)return Xf;if(typeof document<"u")return document;throw new Ye(210,!1)}var zE=new Ze("",{providedIn:"root",factory:()=>GE}),GE="ng",Px=new Ze(""),WE=new Ze("",{providedIn:"platform",factory:()=>"unknown"});var jE=new Ze("",{providedIn:"root",factory:()=>Nx().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var $E="h",qE="b";var Lx="r";var _h="di",bh="s";var Fx=!1,Ox=new Ze("",{providedIn:"root",factory:()=>Fx});var kx=new Ze("");var XE=(n,e,t,i)=>{};function YE(n,e,t,i){XE(n,e,t,i)}var Ux=new Ze("");function Mh(n){return(n.flags&32)===32}var ZE=()=>null;function Bx(n,e,t=!1){return ZE(n,e,t)}function Eh(n){return n.get(kx,!1,{optional:!0})}function Vx(n,e){let t=n.contentQueries;if(t!==null){let i=Pe(null);try{for(let r=0;r<t.length;r+=2){let s=t[r],o=t[r+1];if(o!==-1){let a=n.data[o];wc(s),a.contentQueries(2,e[o],o)}}}finally{Pe(i)}}}function Yf(n,e,t){wc(0);let i=Pe(null);try{e(n,t)}finally{Pe(i)}}function Hx(n,e,t){if(ff(e)){let i=Pe(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let o=r;o<s;o++){let a=n.data[o];if(a.contentQueries){let c=t[o];a.contentQueries(1,c,o)}}}finally{Pe(i)}}}var bs=(function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n})(bs||{});var Gc=class{changingThisBreaksApplicationSecurity;constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${cc})`}};function Sh(n){return n instanceof Gc?n.changingThisBreaksApplicationSecurity:n}function zx(n,e){let t=Gx(n);if(t!=null&&t!==e){if(t==="ResourceURL"&&e==="URL")return!0;throw new Error(`Required a safe ${e}, got a ${t} (see ${cc})`)}return t===e}function Gx(n){return n instanceof Gc&&n.getTypeName()||null}var JE=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function Wx(n){return n=String(n),n.match(JE)?n:"unsafe:"+n}function KE(n,e){return n.createText(e)}function QE(n,e,t){n.setValue(e,t)}function jx(n,e,t){return n.createElement(e,t)}function Wc(n,e,t,i,r){n.insertBefore(e,t,i,r)}function $x(n,e,t){n.appendChild(e,t)}function O0(n,e,t,i,r){i!==null?Wc(n,e,t,i,r):$x(n,e,t)}function qx(n,e,t,i){n.removeChild(null,e,t,i)}function eS(n,e,t){n.setAttribute(e,"style",t)}function tS(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function Xx(n,e,t){let{mergedAttrs:i,classes:r,styles:s}=t;i!==null&&ME(n,e,i),r!==null&&tS(n,e,r),s!==null&&eS(n,e,s)}var wh=(function(n){return n[n.NONE=0]="NONE",n[n.HTML=1]="HTML",n[n.STYLE=2]="STYLE",n[n.SCRIPT=3]="SCRIPT",n[n.URL=4]="URL",n[n.RESOURCE_URL=5]="RESOURCE_URL",n})(wh||{});function nS(n){let e=iS();return e?e.sanitize(wh.URL,n)||"":zx(n,"URL")?Sh(n):Wx(wo(n))}function iS(){let n=He();return n&&n[Xn].sanitizer}function rS(n){return n.ownerDocument.defaultView}function Yx(n){return n instanceof Function?n():n}function sS(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}var Zx="ng-template";function oS(n,e,t,i){let r=0;if(i){for(;r<e.length&&typeof e[r]=="string";r+=2)if(e[r]==="class"&&sS(e[r+1].toLowerCase(),t,0)!==-1)return!0}else if(Th(n))return!1;if(r=e.indexOf(1,r),r>-1){let s;for(;++r<e.length&&typeof(s=e[r])=="string";)if(s.toLowerCase()===t)return!0}return!1}function Th(n){return n.type===4&&n.value!==Zx}function aS(n,e,t){let i=n.type===4&&!t?Zx:n.value;return e===i}function cS(n,e,t){let i=4,r=n.attrs,s=r!==null?dS(r):0,o=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!o&&!Bn(i)&&!Bn(c))return!1;if(o&&Bn(c))continue;o=!1,i=c|i&1;continue}if(!o)if(i&4){if(i=2|i&1,c!==""&&!aS(n,c,t)||c===""&&e.length===1){if(Bn(i))return!1;o=!0}}else if(i&8){if(r===null||!oS(n,r,c,t)){if(Bn(i))return!1;o=!0}}else{let l=e[++a],u=lS(c,r,Th(n),t);if(u===-1){if(Bn(i))return!1;o=!0;continue}if(l!==""){let d;if(u>s?d="":d=r[u+1].toLowerCase(),i&2&&l!==d){if(Bn(i))return!1;o=!0}}}}return Bn(i)||o}function Bn(n){return(n&1)===0}function lS(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){let o=e[r];if(o===n)return r;if(o===3||o===6)s=!0;else if(o===1||o===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(o===4)break;if(o===0){r+=4;continue}}r+=s?1:2}return-1}else return fS(e,n)}function uS(n,e,t=!1){for(let i=0;i<e.length;i++)if(cS(n,e[i],t))return!0;return!1}function dS(n){for(let e=0;e<n.length;e++){let t=n[e];if(EE(t))return e}return n.length}function fS(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function k0(n,e){return n?":not("+e.trim()+")":e}function hS(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let o=n[t];if(typeof o=="string")if(i&2){let a=n[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+o:i&4&&(r+=" "+o);else r!==""&&!Bn(o)&&(e+=k0(s,r),r=""),i=o,s=s||!Bn(i);t++}return r!==""&&(e+=k0(s,r)),e}function pS(n){return n.map(hS).join(",")}function mS(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let s=n[i];if(typeof s=="string")r===2?s!==""&&e.push(s,n[++i]):r===8&&t.push(s);else{if(!Bn(r))break;r=s}i++}return t.length&&e.push(1,...t),e}var Jn={};function Ch(n,e,t,i,r,s,o,a,c,l,u){let d=Dt+i,f=d+r,h=gS(d,f),g=typeof l=="function"?l():l;return h[xe]={type:n,blueprint:h,template:t,queries:null,viewQuery:a,declTNode:e,data:h.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:f,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:c,consts:g,incompleteFirstPass:!1,ssrId:u}}function gS(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:Jn);return t}function xS(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=Ch(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function Dh(n,e,t,i,r,s,o,a,c,l,u){let d=e.blueprint.slice();return d[Ln]=r,d[Le]=i|4|128|8|64|1024,(l!==null||n&&n[Le]&2048)&&(d[Le]|=2048),mf(d),d[It]=d[Er]=n,d[Ct]=t,d[Xn]=o||n&&n[Xn],d[Et]=a||n&&n[Et],d[Yt]=c||n&&n[Yt]||null,d[Cn]=s,d[Ao]=BE(),d[ds]=u,d[df]=l,d[pn]=e.type==2?n[pn]:d,d}function yS(n,e,t){let i=On(e,n),r=xS(t),s=n[Xn].rendererFactory,o=Ah(n,Dh(n,r,null,Jx(t),i,e,null,s.createRenderer(i,t),null,null,null));return n[e.index]=o}function Jx(n){let e=16;return n.signals?e=4096:n.onPush&&(e=64),e}function Kx(n,e,t,i){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function Ah(n,e){return n[hs]?n[uf][Tn]=e:n[hs]=e,n[uf]=e,e}function vS(n=1){Qx(Ut(),He(),Oi()+n,!1)}function Qx(n,e,t,i){if(!i)if((e[Le]&3)===3){let s=n.preOrderCheckHooks;s!==null&&Nc(e,s,t)}else{let s=n.preOrderHooks;s!==null&&Pc(e,s,0,t)}ki(t)}var il=(function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n})(il||{});function Zf(n,e,t,i){let r=Pe(null);try{let[s,o,a]=n.inputs[t],c=null;(o&il.SignalBased)!==0&&(c=e[s][nn]),c!==null&&c.transformFn!==void 0?i=c.transformFn(i):a!==null&&(i=a.call(e,i)),n.setInput!==null?n.setInput(e,c,i,t,s):ux(e,c,s,i)}finally{Pe(r)}}var Ho=(function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n})(Ho||{}),_S;function Ih(n,e){return _S(n,e)}var zo=new Set,Rh=(function(n){return n[n.CHANGE_DETECTION=0]="CHANGE_DETECTION",n[n.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",n})(Rh||{}),Nh=new Ze(""),U0=new Set;function zi(n){U0.has(n)||(U0.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}var ey=!1,Jf=class extends qn{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(e=!1){super(),this.__isAsync=e,Jg()&&(this.destroyRef=Ce(Fo,{optional:!0})??void 0,this.pendingTasks=Ce(Ui,{optional:!0})??void 0)}emit(e){let t=Pe(null);try{super.next(e)}finally{Pe(t)}}subscribe(e,t,i){let r=e,s=t||(()=>null),o=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),s=c.error?.bind(c),o=c.complete?.bind(c)}this.__isAsync&&(s=this.wrapInTimeout(s),r&&(r=this.wrapInTimeout(r)),o&&(o=this.wrapInTimeout(o)));let a=super.subscribe({next:r,error:s,complete:o});return e instanceof Ot&&e.add(a),a}wrapInTimeout(e){return t=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{e(t)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},hi=Jf;function ty(n){let e,t;function i(){n=ko;try{t!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(t),e!==void 0&&clearTimeout(e)}catch{}}return e=setTimeout(()=>{n(),i()}),typeof requestAnimationFrame=="function"&&(t=requestAnimationFrame(()=>{n(),i()})),()=>i()}function B0(n){return queueMicrotask(()=>n()),()=>{n=ko}}var Ph="isAngularZone",jc=Ph+"_ID",bS=0,Jt=class n{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new hi(!1);onMicrotaskEmpty=new hi(!1);onStable=new hi(!1);onError=new hi(!1);constructor(e){let{enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:s=ey}=e;if(typeof Zone>"u")throw new Ye(908,!1);Zone.assertZonePatched();let o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&i,o.shouldCoalesceRunChangeDetection=r,o.callbackScheduled=!1,o.scheduleInRootZone=s,SS(o)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(Ph)===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new Ye(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new Ye(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,MS,ko,ko);try{return s.runTask(o,t,i)}finally{s.cancelTask(o)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},MS={};function Lh(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function ES(n){if(n.isCheckStableRunning||n.callbackScheduled)return;n.callbackScheduled=!0;function e(){ty(()=>{n.callbackScheduled=!1,Kf(n),n.isCheckStableRunning=!0,Lh(n),n.isCheckStableRunning=!1})}n.scheduleInRootZone?Zone.root.run(()=>{e()}):n._outer.run(()=>{e()}),Kf(n)}function SS(n){let e=()=>{ES(n)},t=bS++;n._inner=n._inner.fork({name:"angular",properties:{[Ph]:!0,[jc]:t,[jc+t]:!0},onInvokeTask:(i,r,s,o,a,c)=>{if(wS(c))return i.invokeTask(s,o,a,c);try{return V0(n),i.invokeTask(s,o,a,c)}finally{(n.shouldCoalesceEventChangeDetection&&o.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),H0(n)}},onInvoke:(i,r,s,o,a,c,l)=>{try{return V0(n),i.invoke(s,o,a,c,l)}finally{n.shouldCoalesceRunChangeDetection&&!n.callbackScheduled&&!TS(c)&&e(),H0(n)}},onHasTask:(i,r,s,o)=>{i.hasTask(s,o),r===s&&(o.change=="microTask"?(n._hasPendingMicrotasks=o.microTask,Kf(n),Lh(n)):o.change=="macroTask"&&(n.hasPendingMacrotasks=o.macroTask))},onHandleError:(i,r,s,o)=>(i.handleError(s,o),n.runOutsideAngular(()=>n.onError.emit(o)),!1)})}function Kf(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.callbackScheduled===!0?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function V0(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function H0(n){n._nesting--,Lh(n)}var $c=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new hi;onMicrotaskEmpty=new hi;onStable=new hi;onError=new hi;run(e,t,i){return e.apply(t,i)}runGuarded(e,t,i){return e.apply(t,i)}runOutsideAngular(e){return e()}runTask(e,t,i,r){return e.apply(t,i)}};function wS(n){return ny(n,"__ignore_ng_zone__")}function TS(n){return ny(n,"__scheduler_tick__")}function ny(n,e){return!Array.isArray(n)||n.length!==1?!1:n[0]?.data?.[e]===!0}var iy=(()=>{class n{impl=null;execute(){this.impl?.execute()}static \u0275prov=ot({token:n,providedIn:"root",factory:()=>new n})}return n})();var ry=new Ze("",{providedIn:"root",factory:()=>({queue:new Set,isScheduled:!1,scheduler:null})});function sy(n,e,t){let i=n.get(ry);if(Array.isArray(e))for(let r of e)i.queue.add(r),t?.detachedLeaveAnimationFns?.push(r);else i.queue.add(e),t?.detachedLeaveAnimationFns?.push(e);i.scheduler&&i.scheduler(n)}function CS(n,e){let t=n.get(ry);if(e.detachedLeaveAnimationFns){for(let i of e.detachedLeaveAnimationFns)t.queue.delete(i);e.detachedLeaveAnimationFns=void 0}}function DS(n,e){for(let[t,i]of e)sy(n,i.animateFns)}function z0(n,e,t,i){let r=n?.[wr]?.enter;e!==null&&r&&r.has(t.index)&&DS(i,r)}function xs(n,e,t,i,r,s,o,a){if(r!=null){let c,l=!1;Fn(r)?c=r:fi(r)&&(l=!0,r=r[Ln]);let u=Dn(r);n===0&&i!==null?(z0(a,i,s,t),o==null?$x(e,i,u):Wc(e,i,u,o||null,!0)):n===1&&i!==null?(z0(a,i,s,t),Wc(e,i,u,o||null,!0)):n===2?G0(a,s,t,d=>{qx(e,u,l,d)}):n===3&&G0(a,s,t,()=>{e.destroyNode(u)}),c!=null&&HS(e,n,t,c,s,i,o)}}function AS(n,e){oy(n,e),e[Ln]=null,e[Cn]=null}function IS(n,e,t,i,r,s){i[Ln]=r,i[Cn]=e,sl(n,i,t,1,r,s)}function oy(n,e){e[Xn].changeDetectionScheduler?.notify(9),sl(n,e,e[Et],2,null,null)}function RS(n){let e=n[hs];if(!e)return Uf(n[xe],n);for(;e;){let t=null;if(fi(e))t=e[hs];else{let i=e[St];i&&(t=i)}if(!t){for(;e&&!e[Tn]&&e!==n;)fi(e)&&Uf(e[xe],e),e=e[It];e===null&&(e=n),fi(e)&&Uf(e[xe],e),t=e&&e[Tn]}e=t}}function Fh(n,e){let t=n[Tr],i=t.indexOf(e);t.splice(i,1)}function rl(n,e){if(Fi(e))return;let t=e[Et];t.destroyNode&&sl(n,e,t,3,null,null),RS(e)}function Uf(n,e){if(Fi(e))return;let t=Pe(null);try{e[Le]&=-129,e[Le]|=256,e[mn]&&po(e[mn]),LS(n,e),PS(n,e),e[xe].type===1&&e[Et].destroy();let i=e[Ri];if(i!==null&&Fn(e[It])){i!==e[It]&&Fh(i,e);let r=e[Yn];r!==null&&r.detachView(n)}qf(e)}finally{Pe(t)}}function G0(n,e,t,i){let r=n?.[wr];if(r==null||r.leave==null||!r.leave.has(e.index))return i(!1);n&&zo.add(n),sy(t,()=>{if(r.leave&&r.leave.has(e.index)){let o=r.leave.get(e.index),a=[];if(o){for(let c=0;c<o.animateFns.length;c++){let l=o.animateFns[c],{promise:u}=l();a.push(u)}r.detachedLeaveAnimationFns=void 0}r.running=Promise.allSettled(a),NS(n,i)}else n&&zo.delete(n),i(!1)},r)}function NS(n,e){let t=n[wr]?.running;if(t){t.then(()=>{n[wr].running=void 0,zo.delete(n),e(!0)});return}e(!1)}function PS(n,e){let t=n.cleanup,i=e[fs];if(t!==null)for(let o=0;o<t.length-1;o+=2)if(typeof t[o]=="string"){let a=t[o+3];a>=0?i[a]():i[-a].unsubscribe(),o+=2}else{let a=i[t[o+1]];t[o].call(a)}i!==null&&(e[fs]=null);let r=e[li];if(r!==null){e[li]=null;for(let o=0;o<r.length;o++){let a=r[o];a()}}let s=e[Io];if(s!==null){e[Io]=null;for(let o of s)o.destroy()}}function LS(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof Vo)){let s=t[i+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){let a=r[s[o]],c=s[o+1];at(4,a,c);try{c.call(a)}finally{at(5,a,c)}}else{at(4,r,s);try{s.call(r)}finally{at(5,r,s)}}}}}function FS(n,e,t){return OS(n,e.parent,t)}function OS(n,e,t){let i=e;for(;i!==null&&i.type&168;)e=i,i=e.parent;if(i===null)return t[Ln];if(Li(i)){let{encapsulation:r}=n.data[i.directiveStart+i.componentOffset];if(r===bs.None||r===bs.Emulated)return null}return On(i,t)}function kS(n,e,t){return BS(n,e,t)}function US(n,e,t){return n.type&40?On(n,t):null}var BS=US,W0;function Oh(n,e,t,i){let r=FS(n,i,e),s=e[Et],o=i.parent||e[Cn],a=kS(o,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)O0(s,r,t[c],a,!1);else O0(s,r,t,a,!1);W0!==void 0&&W0(s,i,e,t,r)}function Uo(n,e){if(e!==null){let t=e.type;if(t&3)return On(e,n);if(t&4)return Qf(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return Uo(n,i);{let r=n[e.index];return Fn(r)?Qf(-1,r):Dn(r)}}else{if(t&128)return Uo(n,e.next);if(t&32)return Ih(e,n)()||Dn(n[e.index]);{let i=ay(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=Di(n[pn]);return Uo(r,i)}else return Uo(n,e.next)}}}return null}function ay(n,e){if(e!==null){let i=n[pn][Cn],r=e.projection;return i.projection[r]}return null}function Qf(n,e){let t=St+n+1;if(t<e.length){let i=e[t],r=i[xe].firstChild;if(r!==null)return Uo(i,r)}return e[Pi]}function kh(n,e,t,i,r,s,o){for(;t!=null;){let a=i[Yt];if(t.type===128){t=t.next;continue}let c=i[t.index],l=t.type;if(o&&e===0&&(c&&_s(Dn(c),i),t.flags|=2),!Mh(t))if(l&8)kh(n,e,t.child,i,r,s,!1),xs(e,n,a,r,c,t,s,i);else if(l&32){let u=Ih(t,i),d;for(;d=u();)xs(e,n,a,r,d,t,s,i);xs(e,n,a,r,c,t,s,i)}else l&16?VS(n,e,i,t,r,s):xs(e,n,a,r,c,t,s,i);t=o?t.projectionNext:t.next}}function sl(n,e,t,i,r,s){kh(t,i,n.firstChild,e,r,s,!1)}function VS(n,e,t,i,r,s){let o=t[pn],c=o[Cn].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];xs(e,n,t[Yt],r,u,i,s,t)}else{let l=c,u=o[It];Cx(i)&&(l.flags|=128),kh(n,e,l,u,r,s,!0)}}function HS(n,e,t,i,r,s,o){let a=i[Pi],c=Dn(i);a!==c&&xs(e,n,t,s,a,r,o);for(let l=St;l<i.length;l++){let u=i[l];sl(u[xe],u,n,e,s,a)}}function zS(n,e,t,i,r){if(e)r?n.addClass(t,i):n.removeClass(t,i);else{let s=i.indexOf("-")===-1?void 0:Ho.DashCase;r==null?n.removeStyle(t,i,s):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),s|=Ho.Important),n.setStyle(t,i,r,s))}}function cy(n,e,t,i,r){let s=Oi(),o=i&2;try{ki(-1),o&&e.length>Dt&&Qx(n,e,Dt,!1),at(o?2:0,r,t),t(i,r)}finally{ki(s),at(o?3:1,r,t)}}function Uh(n,e,t){YS(n,e,t),(t.flags&64)===64&&ZS(n,e,t)}function ol(n,e,t=On){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let o=i[s+1],a=o===-1?t(e,n):n[o];n[r++]=a}}}function GS(n,e,t,i){let s=i.get(Ox,Fx)||t===bs.ShadowDom,o=n.selectRootElement(e,s);return WS(o),o}function WS(n){jS(n)}var jS=()=>null;function $S(n){return n==="class"?"className":n==="for"?"htmlFor":n==="formaction"?"formAction":n==="innerHtml"?"innerHTML":n==="readonly"?"readOnly":n==="tabindex"?"tabIndex":n}function qS(n,e,t,i,r,s){let o=e[xe];if(Vh(n,o,e,t,i)){Li(n)&&XS(e,n.index);return}n.type&3&&(t=$S(t)),ly(n,e,t,i,r,s)}function ly(n,e,t,i,r,s){if(n.type&3){let o=On(n,e);i=s!=null?s(i,n.value||"",t):i,r.setProperty(o,t,i)}else n.type&12}function XS(n,e){let t=kn(e,n);t[Le]&16||(t[Le]|=64)}function YS(n,e,t){let i=t.directiveStart,r=t.directiveEnd;Li(t)&&yS(e,t,n.data[i+t.componentOffset]),n.firstCreatePass||_x(t,e);let s=t.initialInputs;for(let o=i;o<r;o++){let a=n.data[o],c=Hc(e,n,o,t);if(_s(c,e),s!==null&&ew(e,o-i,c,a,t,s),Cr(a)){let l=kn(t.index,e);l[Ct]=Hc(e,n,o,t)}}}function ZS(n,e,t){let i=t.directiveStart,r=t.directiveEnd,s=t.index,o=g0();try{ki(s);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];Sc(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&JS(c,l)}}finally{ki(-1),Sc(o)}}function JS(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function uy(n,e){let t=n.directiveRegistry,i=null;if(t)for(let r=0;r<t.length;r++){let s=t[r];uS(e,s.selectors,!1)&&(i??=[],Cr(s)?i.unshift(s):i.push(s))}return i}function KS(n,e,t,i,r,s){let o=On(n,e);QS(e[Et],o,s,n.value,t,i,r)}function QS(n,e,t,i,r,s,o){if(s==null)n.removeAttribute(e,r,t);else{let a=o==null?wo(s):o(s,i||"",r);n.setAttribute(e,r,a,t)}}function ew(n,e,t,i,r,s){let o=s[e];if(o!==null)for(let a=0;a<o.length;a+=2){let c=o[a],l=o[a+1];Zf(i,t,c,l)}}function dy(n,e,t,i,r){let s=Dt+t,o=e[xe],a=r(o,e,n,i,t);e[s]=a,ms(n,!0);let c=n.type===2;return c?(Xx(e[Et],a,n),(r0()===0||No(n))&&_s(a,e),s0()):_s(a,e),Ac()&&(!c||!Mh(n))&&Oh(o,e,a,n),n}function fy(n){let e=n;return wf()?u0():(e=e.parent,ms(e,!1)),e}function Bh(n,e){let t=n[Yt];if(!t)return;let i;try{i=t.get(Un,null)}catch{i=null}i?.(e)}function Vh(n,e,t,i,r){let s=n.inputs?.[i],o=n.hostDirectiveInputs?.[i],a=!1;if(o)for(let c=0;c<o.length;c+=2){let l=o[c],u=o[c+1],d=e.data[l];Zf(d,t[l],u,r),a=!0}if(s)for(let c of s){let l=t[c],u=e.data[c];Zf(u,l,i,r),a=!0}return a}function tw(n,e){let t=kn(e,n),i=t[xe];nw(i,t);let r=t[Ln];r!==null&&t[ds]===null&&(t[ds]=Bx(r,t[Yt])),at(18),Hh(i,t,t[Ct]),at(19,t[Ct])}function nw(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function Hh(n,e,t){Tc(e);try{let i=n.viewQuery;i!==null&&Yf(1,i,t);let r=n.template;r!==null&&cy(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[Yn]?.finishViewCreation(n),n.staticContentQueries&&Vx(n,e),n.staticViewQueries&&Yf(2,n.viewQuery,t);let s=n.components;s!==null&&iw(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[Le]&=-5,Cc()}}function iw(n,e){for(let t=0;t<e.length;t++)tw(n,e[t])}function Yo(n,e,t,i){let r=Pe(null);try{let s=e.tView,a=n[Le]&4096?4096:16,c=Dh(n,s,t,a,null,e,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=n[e.index];c[Ri]=l;let u=n[Yn];return u!==null&&(c[Yn]=u.createEmbeddedView(s)),Hh(s,c,t),c}finally{Pe(r)}}function Ms(n,e){return!e||e.firstChild===null||Cx(n)}function Go(n,e,t,i,r=!1){for(;t!==null;){if(t.type===128){t=r?t.projectionNext:t.next;continue}let s=e[t.index];s!==null&&i.push(Dn(s)),Fn(s)&&hy(s,i);let o=t.type;if(o&8)Go(n,e,t.child,i);else if(o&32){let a=Ih(t,e),c;for(;c=a();)i.push(c)}else if(o&16){let a=ay(e,t);if(Array.isArray(a))i.push(...a);else{let c=Di(e[pn]);Go(c[xe],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function hy(n,e){for(let t=St;t<n.length;t++){let i=n[t],r=i[xe].firstChild;r!==null&&Go(i[xe],i,r,e)}n[Pi]!==n[Ln]&&e.push(n[Pi])}function py(n){if(n[_c]!==null){for(let e of n[_c])e.impl.addSequence(e);n[_c].length=0}}var my=[];function rw(n){return n[mn]??sw(n)}function sw(n){let e=my.pop()??Object.create(aw);return e.lView=n,e}function ow(n){n.lView[mn]!==n&&(n.lView=null,my.push(n))}var aw=Xt(zt({},lo),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{Lo(n.lView)},consumerOnSignalRead(){this.lView[mn]=this}});function cw(n){let e=n[mn]??Object.create(lw);return e.lView=n,e}var lw=Xt(zt({},lo),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{let e=Di(n.lView);for(;e&&!gy(e[xe]);)e=Di(e);e&&gf(e)},consumerOnSignalRead(){this.lView[mn]=this}});function gy(n){return n.type!==2}function xy(n){if(n[Io]===null)return;let e=!0;for(;e;){let t=!1;for(let i of n[Io])i.dirty&&(t=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));e=t&&!!(n[Le]&8192)}}var uw=100;function yy(n,e=0){let i=n[Xn].rendererFactory,r=!1;r||i.begin?.();try{dw(n,e)}finally{r||i.end?.()}}function dw(n,e){let t=Tf();try{Cf(!0),eh(n,e);let i=0;for(;Po(n);){if(i===uw)throw new Ye(103,!1);i++,eh(n,1)}}finally{Cf(t)}}function fw(n,e,t,i){if(Fi(e))return;let r=e[Le],s=!1,o=!1;Tc(e);let a=!0,c=null,l=null;s||(gy(n)?(l=rw(e),c=fo(l)):Oa()===null?(a=!1,l=cw(e),c=fo(l)):e[mn]&&(po(e[mn]),e[mn]=null));try{mf(e),f0(n.bindingStartIndex),t!==null&&cy(n,e,t,2,i);let u=(r&3)===3;if(!s)if(u){let h=n.preOrderCheckHooks;h!==null&&Nc(e,h,null)}else{let h=n.preOrderHooks;h!==null&&Pc(e,h,0,null),Of(e,0)}if(o||hw(e),xy(e),vy(e,0),n.contentQueries!==null&&Vx(n,e),!s)if(u){let h=n.contentCheckHooks;h!==null&&Nc(e,h)}else{let h=n.contentHooks;h!==null&&Pc(e,h,1),Of(e,1)}mw(n,e);let d=n.components;d!==null&&by(e,d,0);let f=n.viewQuery;if(f!==null&&Yf(2,f,i),!s)if(u){let h=n.viewCheckHooks;h!==null&&Nc(e,h)}else{let h=n.viewHooks;h!==null&&Pc(e,h,2),Of(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[vc]){for(let h of e[vc])h();e[vc]=null}s||(py(e),e[Le]&=-73)}catch(u){throw s||Lo(e),u}finally{l!==null&&(ka(l,c),a&&ow(l)),Cc()}}function vy(n,e){for(let t=Ax(n);t!==null;t=Ix(t))for(let i=St;i<t.length;i++){let r=t[i];_y(r,e)}}function hw(n){for(let e=Ax(n);e!==null;e=Ix(e)){if(!(e[Le]&2))continue;let t=e[Tr];for(let i=0;i<t.length;i++){let r=t[i];gf(r)}}}function pw(n,e,t){at(18);let i=kn(e,n);_y(i,t),at(19,i[Ct])}function _y(n,e){bc(n)&&eh(n,e)}function eh(n,e){let i=n[xe],r=n[Le],s=n[mn],o=!!(e===0&&r&16);if(o||=!!(r&64&&e===0),o||=!!(r&1024),o||=!!(s?.dirty&&ho(s)),o||=!1,s&&(s.dirty=!1),n[Le]&=-9217,o)fw(i,n,i.template,n[Ct]);else if(r&8192){let a=Pe(null);try{xy(n),vy(n,1);let c=i.components;c!==null&&by(n,c,1),py(n)}finally{Pe(a)}}}function by(n,e,t){for(let i=0;i<e.length;i++)pw(n,e[i],t)}function mw(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)ki(~r);else{let s=r,o=t[++i],a=t[++i];m0(o,s);let c=e[s];at(24,c),a(2,c),at(25,c)}}}finally{ki(-1)}}function al(n,e){let t=Tf()?64:1088;for(n[Xn].changeDetectionScheduler?.notify(e);n;){n[Le]|=t;let i=Di(n);if(ps(n)&&!i)return n;n=i}return null}function My(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function Ey(n,e){let t=St+e;if(t<n.length)return n[t]}function Zo(n,e,t,i=!0){let r=e[xe];if(gw(r,e,n,t),i){let o=Qf(t,n),a=e[Et],c=a.parentNode(n[Pi]);c!==null&&IS(r,n[Cn],a,e,c,o)}let s=e[ds];s!==null&&s.firstChild!==null&&(s.firstChild=null)}function zh(n,e){let t=Wo(n,e);return t!==void 0&&rl(t[xe],t),t}function Wo(n,e){if(n.length<=St)return;let t=St+e,i=n[t];if(i){let r=i[Ri];r!==null&&r!==n&&Fh(r,i),e>0&&(n[t-1][Tn]=i[Tn]);let s=To(n,St+e);AS(i[xe],i);let o=s[Yn];o!==null&&o.detachView(s[xe]),i[It]=null,i[Tn]=null,i[Le]&=-129}return i}function gw(n,e,t,i){let r=St+i,s=t.length;i>0&&(t[r-1][Tn]=e),i<s-St?(e[Tn]=t[r],nf(t,St+i,e)):(t.push(e),e[Tn]=null),e[It]=t;let o=e[Ri];o!==null&&t!==o&&Sy(o,e);let a=e[Yn];a!==null&&a.insertView(n),Mc(e),e[Le]|=128}function Sy(n,e){let t=n[Tr],i=e[It];if(fi(i))n[Le]|=2;else{let r=i[It][pn];e[pn]!==r&&(n[Le]|=2)}t===null?n[Tr]=[e]:t.push(e)}var Vi=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let e=this._lView,t=e[xe];return Go(t,e,t.firstChild,[])}constructor(e,t){this._lView=e,this._cdRefInjectingView=t}get context(){return this._lView[Ct]}set context(e){this._lView[Ct]=e}get destroyed(){return Fi(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[It];if(Fn(e)){let t=e[Ro],i=t?t.indexOf(this):-1;i>-1&&(Wo(e,i),To(t,i))}this._attachedToViewContainer=!1}rl(this._lView[xe],this._lView)}onDestroy(e){Ec(this._lView,e)}markForCheck(){al(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[Le]&=-129}reattach(){Mc(this._lView),this._lView[Le]|=128}detectChanges(){this._lView[Le]|=1024,yy(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new Ye(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let e=ps(this._lView),t=this._lView[Ri];t!==null&&!e&&Fh(t,this._lView),oy(this._lView[xe],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new Ye(902,!1);this._appRef=e;let t=ps(this._lView),i=this._lView[Ri];i!==null&&!t&&Sy(i,this._lView),Mc(this._lView)}};var Hi=(()=>{class n{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=xw;constructor(t,i,r){this._declarationLView=t,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(t,i){return this.createEmbeddedViewImpl(t,i)}createEmbeddedViewImpl(t,i,r){let s=Yo(this._declarationLView,this._declarationTContainer,t,{embeddedViewInjector:i,dehydratedView:r});return new Vi(s)}}return n})();function xw(){return Gh(Zt(),He())}function Gh(n,e){return n.type&4?new Hi(e,n,Ts(n,e)):null}function Jo(n,e,t,i,r){let s=n.data[e];if(s===null)s=yw(n,e,t,i,r),p0()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=i,s.attrs=r;let o=l0();s.injectorIndex=o===null?-1:o.injectorIndex}return ms(s,!0),s}function yw(n,e,t,i,r){let s=Sf(),o=wf(),a=o?s:s&&s.parent,c=n.data[e]=_w(n,a,t,e,i,r);return vw(n,c,s,o),c}function vw(n,e,t,i){n.firstChild===null&&(n.firstChild=e),t!==null&&(i?t.child==null&&e.parent!==null&&(t.child=e):t.next===null&&(t.next=e,e.prev=t))}function _w(n,e,t,i,r,s){let o=e?e.injectorIndex:-1,a=0;return o0()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:s,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}var oU=new RegExp(`^(\\d+)*(${qE}|${$E})*(.*)`);function bw(n){let e=n[Ni]??[],i=n[It][Et],r=[];for(let s of e)s.data[_h]!==void 0?r.push(s):Mw(s,i);n[Ni]=r}function Mw(n,e){let t=0,i=n.firstChild;if(i){let r=n.data[Lx];for(;t<r;){let s=i.nextSibling;qx(e,i,!1),i=s,t++}}}var Ew=()=>null,Sw=()=>null;function th(n,e){return Ew(n,e)}function wy(n,e,t){return Sw(n,e,t)}var Ty=class{},cl=class{},nh=class{resolveComponentFactory(e){throw new Ye(917,!1)}},Ko=class{static NULL=new nh},jo=class{};var Cy=(()=>{class n{static \u0275prov=ot({token:n,providedIn:"root",factory:()=>null})}return n})();var Fc={},vs=class{injector;parentInjector;constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){let r=this.injector.get(e,Fc,i);return r!==Fc||t===Fc?r:this.parentInjector.get(e,t,i)}};function qc(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(e!==null)for(let o=0;o<e.length;o++){let a=e[o];if(typeof a=="number")s=a;else if(s==1)r=qd(r,a);else if(s==2){let c=a,l=e[++o];i=qd(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}function Gi(n,e=0){let t=He();if(t===null)return Ht(n,e);let i=Zt();return Sx(i,t,sn(n),e)}function Dy(n,e,t,i,r){let s=i===null?null:{"":-1},o=r(n,t);if(o!==null){let a=o,c=null,l=null;for(let u of o)if(u.resolveHostDirectives!==null){[a,c,l]=u.resolveHostDirectives(o);break}Cw(n,e,t,a,s,c,l)}s!==null&&i!==null&&ww(t,i,s)}function ww(n,e,t){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new Ye(-301,!1);i.push(e[r],s)}}function Tw(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function Cw(n,e,t,i,r,s,o){let a=i.length,c=!1;for(let f=0;f<a;f++){let h=i[f];!c&&Cr(h)&&(c=!0,Tw(n,t,f)),AE(_x(t,e),n,h.type)}Pw(t,n.data.length,a);for(let f=0;f<a;f++){let h=i[f];h.providersResolver&&h.providersResolver(h)}let l=!1,u=!1,d=Kx(n,e,a,null);a>0&&(t.directiveToIndex=new Map);for(let f=0;f<a;f++){let h=i[f];if(t.mergedAttrs=nl(t.mergedAttrs,h.hostAttrs),Aw(n,t,e,d,h),Nw(d,h,r),o!==null&&o.has(h)){let[x,m]=o.get(h);t.directiveToIndex.set(h.type,[d,x+t.directiveStart,m+t.directiveStart])}else(s===null||!s.has(h))&&t.directiveToIndex.set(h.type,d);h.contentQueries!==null&&(t.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(t.flags|=64);let g=h.type.prototype;!l&&(g.ngOnChanges||g.ngOnInit||g.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),l=!0),!u&&(g.ngOnChanges||g.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),u=!0),d++}Dw(n,t,s)}function Dw(n,e,t){for(let i=e.directiveStart;i<e.directiveEnd;i++){let r=n.data[i];if(t===null||!t.has(r))j0(0,e,r,i),j0(1,e,r,i),q0(e,i,!1);else{let s=t.get(r);$0(0,e,s,i),$0(1,e,s,i),q0(e,i,!0)}}}function j0(n,e,t,i){let r=n===0?t.inputs:t.outputs;for(let s in r)if(r.hasOwnProperty(s)){let o;n===0?o=e.inputs??={}:o=e.outputs??={},o[s]??=[],o[s].push(i),Ay(e,s)}}function $0(n,e,t,i){let r=n===0?t.inputs:t.outputs;for(let s in r)if(r.hasOwnProperty(s)){let o=r[s],a;n===0?a=e.hostDirectiveInputs??={}:a=e.hostDirectiveOutputs??={},a[o]??=[],a[o].push(i,s),Ay(e,o)}}function Ay(n,e){e==="class"?n.flags|=8:e==="style"&&(n.flags|=16)}function q0(n,e,t){let{attrs:i,inputs:r,hostDirectiveInputs:s}=n;if(i===null||!t&&r===null||t&&s===null||Th(n)){n.initialInputs??=[],n.initialInputs.push(null);return}let o=null,a=0;for(;a<i.length;){let c=i[a];if(c===0){a+=4;continue}else if(c===5){a+=2;continue}else if(typeof c=="number")break;if(!t&&r.hasOwnProperty(c)){let l=r[c];for(let u of l)if(u===e){o??=[],o.push(c,i[a+1]);break}}else if(t&&s.hasOwnProperty(c)){let l=s[c];for(let u=0;u<l.length;u+=2)if(l[u]===e){o??=[],o.push(l[u+1],i[a+1]);break}}a+=2}n.initialInputs??=[],n.initialInputs.push(o)}function Aw(n,e,t,i,r){n.data[i]=r;let s=r.factory||(r.factory=xr(r.type,!0)),o=new Vo(s,Cr(r),Gi,null);n.blueprint[i]=o,t[i]=o,Iw(n,e,i,Kx(n,t,r.hostVars,Jn),r)}function Iw(n,e,t,i,r){let s=r.hostBindings;if(s){let o=n.hostBindingOpCodes;o===null&&(o=n.hostBindingOpCodes=[]);let a=~e.index;Rw(o)!=a&&o.push(a),o.push(t,i,s)}}function Rw(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function Nw(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;Cr(e)&&(t[""]=n)}}function Pw(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function Iy(n,e,t,i,r,s,o,a){let c=e[xe],l=c.consts,u=gn(l,o),d=Jo(c,n,t,i,u);return s&&Dy(c,e,d,gn(l,a),r),d.mergedAttrs=nl(d.mergedAttrs,d.attrs),d.attrs!==null&&qc(d,d.attrs,!1),d.mergedAttrs!==null&&qc(d,d.mergedAttrs,!0),c.queries!==null&&c.queries.elementStart(c,d),d}function Ry(n,e){mx(n,e),ff(e)&&n.queries.elementEnd(e)}function Lw(n,e,t,i,r,s){let o=e.consts,a=gn(o,r),c=Jo(e,n,t,i,a);if(c.mergedAttrs=nl(c.mergedAttrs,c.attrs),s!=null){let l=gn(o,s);c.localNames=[];for(let u=0;u<l.length;u+=2)c.localNames.push(l[u],-1)}return c.attrs!==null&&qc(c,c.attrs,!1),c.mergedAttrs!==null&&qc(c,c.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,c),c}function Wh(n){return Py(n)?Array.isArray(n)||!(n instanceof Map)&&Symbol.iterator in n:!1}function Ny(n,e){if(Array.isArray(n))for(let t=0;t<n.length;t++)e(n[t]);else{let t=n[Symbol.iterator](),i;for(;!(i=t.next()).done;)e(i.value)}}function Py(n){return n!==null&&(typeof n=="function"||typeof n=="object")}function Fw(n,e,t){return n[e]=t}function Ow(n,e){return n[e]}function Pr(n,e,t){if(t===Jn)return!1;let i=n[e];return Object.is(i,t)?!1:(n[e]=t,!0)}function Oc(n,e,t){return function i(r){let s=Li(n)?kn(n.index,e):e;al(s,5);let o=e[Ct],a=X0(e,o,t,r),c=i.__ngNextListenerFn__;for(;c;)a=X0(e,o,c,r)&&a,c=c.__ngNextListenerFn__;return a}}function X0(n,e,t,i){let r=Pe(null);try{return at(6,e,t),t(i)!==!1}catch(s){return Bh(n,s),!1}finally{at(7,e,t),Pe(r)}}function Ly(n,e,t,i,r,s,o,a){let c=No(n),l=!1,u=null;if(!i&&c&&(u=Uw(e,t,s,n.index)),u!==null){let d=u.__ngLastListenerFn__||u;d.__ngNextListenerFn__=o,u.__ngLastListenerFn__=o,l=!0}else{let d=On(n,t),f=i?i(d):d;YE(t,f,s,a);let h=r.listen(f,s,a);if(!kw(s)){let g=i?x=>i(Dn(x[n.index])):n.index;Fy(g,e,t,s,a,h,!1)}}return l}function kw(n){return n.startsWith("animation")||n.startsWith("transition")}function Uw(n,e,t,i){let r=n.cleanup;if(r!=null)for(let s=0;s<r.length-1;s+=2){let o=r[s];if(o===t&&r[s+1]===i){let a=e[fs],c=r[s+2];return a&&a.length>c?a[c]:null}typeof o=="string"&&(s+=2)}return null}function Fy(n,e,t,i,r,s,o){let a=e.firstCreatePass?vf(e):null,c=yf(t),l=c.length;c.push(r,s),a&&a.push(i,n,l,(l+1)*(o?-1:1))}function Y0(n,e,t,i,r,s){let o=e[t],a=e[xe],l=a.data[t].outputs[i],d=o[l].subscribe(s);Fy(n.index,a,e,r,s,d,!0)}var ih=Symbol("BINDING");var Xc=class extends Ko{ngModule;constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=di(e);return new Es(t,this.ngModule)}};function Bw(n){return Object.keys(n).map(e=>{let[t,i,r]=n[e],s={propName:t,templateName:e,isSignal:(i&il.SignalBased)!==0};return r&&(s.transform=r),s})}function Vw(n){return Object.keys(n).map(e=>({propName:n[e],templateName:e}))}function Hw(n,e,t){let i=e instanceof hn?e:e?.injector;return i&&n.getStandaloneInjector!==null&&(i=n.getStandaloneInjector(i)||i),i?new vs(t,i):t}function zw(n){let e=n.get(jo,null);if(e===null)throw new Ye(407,!1);let t=n.get(Cy,null),i=n.get(Ai,null);return{rendererFactory:e,sanitizer:t,changeDetectionScheduler:i,ngReflect:!1}}function Gw(n,e){let t=Oy(n);return jx(e,t,t==="svg"?hf:t==="math"?Qg:null)}function Oy(n){return(n.selectors[0][0]||"div").toLowerCase()}var Es=class extends cl{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=Bw(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=Vw(this.componentDef.outputs),this.cachedOutputs}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=pS(e.selectors),this.ngContentSelectors=e.ngContentSelectors??[],this.isBoundToModule=!!t}create(e,t,i,r,s,o){at(22);let a=Pe(null);try{let c=this.componentDef,l=Ww(i,c,o,s),u=Hw(c,r||this.ngModule,e),d=zw(u),f=d.rendererFactory.createRenderer(null,c),h=i?GS(f,i,c.encapsulation,u):Gw(c,f),g=o?.some(Z0)||s?.some(p=>typeof p!="function"&&p.bindings.some(Z0)),x=Dh(null,l,null,512|Jx(c),null,null,d,f,u,null,Bx(h,u,!0));x[Dt]=h,Tc(x);let m=null;try{let p=Iy(Dt,x,2,"#host",()=>l.directiveRegistry,!0,0);Xx(f,h,p),_s(h,x),Uh(l,x,p),Hx(l,p,x),Ry(l,p),t!==void 0&&$w(p,this.ngContentSelectors,t),m=kn(p.index,x),x[Ct]=m[Ct],Hh(l,x,null)}catch(p){throw m!==null&&qf(m),qf(x),p}finally{at(23),Cc()}return new Yc(this.componentType,x,!!g)}finally{Pe(a)}}};function Ww(n,e,t,i){let r=n?["ng-version","20.3.15"]:mS(e.selectors[0]),s=null,o=null,a=0;if(t)for(let u of t)a+=u[ih].requiredVars,u.create&&(u.targetIdx=0,(s??=[]).push(u)),u.update&&(u.targetIdx=0,(o??=[]).push(u));if(i)for(let u=0;u<i.length;u++){let d=i[u];if(typeof d!="function")for(let f of d.bindings){a+=f[ih].requiredVars;let h=u+1;f.create&&(f.targetIdx=h,(s??=[]).push(f)),f.update&&(f.targetIdx=h,(o??=[]).push(f))}}let c=[e];if(i)for(let u of i){let d=typeof u=="function"?u:u.type,f=gc(d);c.push(f)}return Ch(0,null,jw(s,o),1,a,c,null,null,null,[r],null)}function jw(n,e){return!n&&!e?null:t=>{if(t&1&&n)for(let i of n)i.create();if(t&2&&e)for(let i of e)i.update()}}function Z0(n){let e=n[ih].kind;return e==="input"||e==="twoWay"}var Yc=class extends Ty{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(e,t,i){super(),this._rootLView=t,this._hasInputBindings=i,this._tNode=Dr(t[xe],Dt),this.location=Ts(this._tNode,t),this.instance=kn(this._tNode.index,t)[Ct],this.hostView=this.changeDetectorRef=new Vi(t,void 0),this.componentType=e}setInput(e,t){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let r=this._rootLView,s=Vh(i,r[xe],r,e,t);this.previousInputValues.set(e,t);let o=kn(i.index,r);al(o,1)}get injector(){return new Ir(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function $w(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let s=t[r];i.push(s!=null&&s.length?Array.from(s):null)}}var Lr=(()=>{class n{static __NG_ELEMENT_ID__=qw}return n})();function qw(){let n=Zt();return Uy(n,He())}var Xw=Lr,ky=class extends Xw{_lContainer;_hostTNode;_hostLView;constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return Ts(this._hostTNode,this._hostLView)}get injector(){return new Ir(this._hostTNode,this._hostLView)}get parentInjector(){let e=yh(this._hostTNode,this._hostLView);if(xx(e)){let t=Vc(e,this._hostLView),i=Bc(e),r=t[xe].data[i+8];return new Ir(r,t)}else return new Ir(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=J0(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-St}createEmbeddedView(e,t,i){let r,s;typeof i=="number"?r=i:i!=null&&(r=i.index,s=i.injector);let o=th(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},s,o);return this.insertImpl(a,r,Ms(this._hostTNode,o)),a}createComponent(e,t,i,r,s,o,a){let c=e&&!pE(e),l;if(c)l=t;else{let m=t||{};l=m.index,i=m.injector,r=m.projectableNodes,s=m.environmentInjector||m.ngModuleRef,o=m.directives,a=m.bindings}let u=c?e:new Es(di(e)),d=i||this.parentInjector;if(!s&&u.ngModule==null){let p=(c?d:this.parentInjector).get(hn,null);p&&(s=p)}let f=di(u.componentType??{}),h=th(this._lContainer,f?.id??null),g=h?.firstChild??null,x=u.create(d,r,g,s,o,a);return this.insertImpl(x.hostView,l,Ms(this._hostTNode,h)),x}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(t0(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=r[It],l=new ky(c,c[Cn],c[It]);l.detach(l.indexOf(e))}}let s=this._adjustIndex(t),o=this._lContainer;return Zo(o,r,s,i),e.attachToViewContainerRef(),nf(Bf(o),s,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=J0(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=Wo(this._lContainer,t);i&&(To(Bf(this._lContainer),t),rl(i[xe],i))}detach(e){let t=this._adjustIndex(e,-1),i=Wo(this._lContainer,t);return i&&To(Bf(this._lContainer),t)!=null?new Vi(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function J0(n){return n[Ro]}function Bf(n){return n[Ro]||(n[Ro]=[])}function Uy(n,e){let t,i=e[n.index];return Fn(i)?t=i:(t=My(i,e,null,n),e[n.index]=t,Ah(e,t)),Zw(t,e,n,i),new ky(t,n,e)}function Yw(n,e){let t=n[Et],i=t.createComment(""),r=On(e,n),s=t.parentNode(r);return Wc(t,s,i,t.nextSibling(r),!1),i}var Zw=Kw,Jw=()=>!1;function By(n,e,t){return Jw(n,e,t)}function Kw(n,e,t,i){if(n[Pi])return;let r;t.type&8?r=Dn(i):r=Yw(e,t),n[Pi]=r}var rh=class n{queryList;matches=null;constructor(e){this.queryList=e}clone(){return new n(this.queryList)}setDirty(){this.queryList.setDirty()}},sh=class n{queries;constructor(e=[]){this.queries=e}createEmbeddedView(e){let t=e.queries;if(t!==null){let i=e.contentQueries!==null?e.contentQueries[0]:t.length,r=[];for(let s=0;s<i;s++){let o=t.getByIndex(s),a=this.queries[o.indexInDeclarationView];r.push(a.clone())}return new n(r)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}finishViewCreation(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let t=0;t<this.queries.length;t++)jh(e,t).matches!==null&&this.queries[t].setDirty()}},oh=class{flags;read;predicate;constructor(e,t,i=null){this.flags=t,this.read=i,typeof e=="string"?this.predicate=oT(e):this.predicate=e}},ah=class n{queries;constructor(e=[]){this.queries=e}elementStart(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(e,t)}elementEnd(e){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(e)}embeddedTView(e){let t=null;for(let i=0;i<this.length;i++){let r=t!==null?t.length:0,s=this.getByIndex(i).embeddedTView(e,r);s&&(s.indexInDeclarationView=i,t!==null?t.push(s):t=[s])}return t!==null?new n(t):null}template(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].template(e,t)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}},ch=class n{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(e,t=-1){this.metadata=e,this._declarationNodeIndex=t}elementStart(e,t){this.isApplyingToNode(t)&&this.matchTNode(e,t)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,t){this.elementStart(e,t)}embeddedTView(e,t){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,t),new n(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let t=this._declarationNodeIndex,i=e.parent;for(;i!==null&&i.type&8&&i.index!==t;)i=i.parent;return t===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(e,t){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let s=i[r];this.matchTNodeWithReadOption(e,t,Qw(t,s)),this.matchTNodeWithReadOption(e,t,Lc(t,e,s,!1,!1))}else i===Hi?t.type&4&&this.matchTNodeWithReadOption(e,t,-1):this.matchTNodeWithReadOption(e,t,Lc(t,e,i,!1,!1))}matchTNodeWithReadOption(e,t,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===Cs||r===Lr||r===Hi&&t.type&4)this.addMatch(t.index,-2);else{let s=Lc(t,e,r,!1,!1);s!==null&&this.addMatch(t.index,s)}else this.addMatch(t.index,i)}}addMatch(e,t){this.matches===null?this.matches=[e,t]:this.matches.push(e,t)}};function Qw(n,e){let t=n.localNames;if(t!==null){for(let i=0;i<t.length;i+=2)if(t[i]===e)return t[i+1]}return null}function eT(n,e){return n.type&11?Ts(n,e):n.type&4?Gh(n,e):null}function tT(n,e,t,i){return t===-1?eT(e,n):t===-2?nT(n,e,i):Hc(n,n[xe],t,e)}function nT(n,e,t){if(t===Cs)return Ts(e,n);if(t===Hi)return Gh(e,n);if(t===Lr)return Uy(e,n)}function Vy(n,e,t,i){let r=e[Yn].queries[i];if(r.matches===null){let s=n.data,o=t.matches,a=[];for(let c=0;o!==null&&c<o.length;c+=2){let l=o[c];if(l<0)a.push(null);else{let u=s[l];a.push(tT(e,u,o[c+1],t.metadata.read))}}r.matches=a}return r.matches}function lh(n,e,t,i){let r=n.queries.getByIndex(t),s=r.matches;if(s!==null){let o=Vy(n,e,r,t);for(let a=0;a<s.length;a+=2){let c=s[a];if(c>0)i.push(o[a/2]);else{let l=s[a+1],u=e[-c];for(let d=St;d<u.length;d++){let f=u[d];f[Ri]===f[It]&&lh(f[xe],f,l,i)}if(u[Tr]!==null){let d=u[Tr];for(let f=0;f<d.length;f++){let h=d[f];lh(h[xe],h,l,i)}}}}}return i}function iT(n,e){return n[Yn].queries[e].queryList}function rT(n,e,t){let i=new zc((t&4)===4);return i0(n,e,i,i.destroy),(e[Yn]??=new sh).queries.push(new rh(i))-1}function sT(n,e,t){let i=Ut();return i.firstCreatePass&&(aT(i,new oh(n,e,t),-1),(e&2)===2&&(i.staticViewQueries=!0)),rT(i,He(),e)}function oT(n){return n.split(",").map(e=>e.trim())}function aT(n,e,t){n.queries===null&&(n.queries=new ah),n.queries.track(new ch(e,t))}function jh(n,e){return n.queries.getByIndex(e)}function cT(n,e){let t=n[xe],i=jh(t,e);return i.crossesNgTemplate?lh(t,n,e,[]):Vy(t,n,i,e)}var Rr=class{},Hy=class{};var Zc=class extends Rr{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new Xc(this);constructor(e,t,i,r=!0){super(),this.ngModuleType=e,this._parent=t;let s=of(e);this._bootstrapComponents=Yx(s.bootstrap),this._r3Injector=Rf(e,t,[{provide:Rr,useValue:this},{provide:Ko,useValue:this.componentFactoryResolver},...i],ui(e),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},Jc=class extends Hy{moduleType;constructor(e){super(),this.moduleType=e}create(e){return new Zc(this.moduleType,e,[])}};var $o=class extends Rr{injector;componentFactoryResolver=new Xc(this);instance=null;constructor(e){super();let t=new yr([...e.providers,{provide:Rr,useValue:this},{provide:Ko,useValue:this.componentFactoryResolver}],e.parent||Do(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function $h(n,e,t=null){return new $o({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var lT=(()=>{class n{_injector;cachedInjectors=new Map;constructor(t){this._injector=t}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let i=xc(!1,t.type),r=i.length>0?$h([i],this._injector,`Standalone[${t.type.name}]`):null;this.cachedInjectors.set(t,r)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=ot({token:n,providedIn:"environment",factory:()=>new n(Ht(hn))})}return n})();function uT(n){return Xo(()=>{let e=zy(n),t=Xt(zt({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===vh.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:e.standalone?r=>r.get(lT).getOrCreateStandaloneInjector(t):null,getExternalStyles:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||bs.Emulated,styles:n.styles||wn,_:null,schemas:n.schemas||null,tView:null,id:""});e.standalone&&zi("NgStandalone"),Gy(t);let i=n.dependencies;return t.directiveDefs=K0(i,dT),t.pipeDefs=K0(i,af),t.id=pT(t),t})}function dT(n){return di(n)||gc(n)}function qh(n){return Xo(()=>({type:n.type,bootstrap:n.bootstrap||wn,declarations:n.declarations||wn,imports:n.imports||wn,exports:n.exports||wn,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null}))}function fT(n,e){if(n==null)return Mr;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],s,o,a,c;Array.isArray(r)?(a=r[0],s=r[1],o=r[2]??s,c=r[3]||null):(s=r,o=r,a=il.None,c=null),t[s]=[i,a,c],e[s]=o}return t}function hT(n){if(n==null)return Mr;let e={};for(let t in n)n.hasOwnProperty(t)&&(e[n[t]]=t);return e}function ll(n){return Xo(()=>{let e=zy(n);return Gy(e),e})}function zy(n){let e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputConfig:n.inputs||Mr,exportAs:n.exportAs||null,standalone:n.standalone??!0,signals:n.signals===!0,selectors:n.selectors||wn,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,inputs:fT(n.inputs,e),outputs:hT(n.outputs),debugInfo:null}}function Gy(n){n.features?.forEach(e=>e(n))}function K0(n,e){return n?()=>{let t=typeof n=="function"?n():n,i=[];for(let r of t){let s=e(r);s!==null&&i.push(s)}return i}:null}function pT(n){let e=0,t=typeof n.consts=="function"?"":n.consts,i=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,t,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery];for(let s of i.join("|"))e=Math.imul(31,e)+s.charCodeAt(0)<<0;return e+=2147483648,"c"+e}function Wy(n,e,t,i,r,s,o,a){if(t.firstCreatePass){n.mergedAttrs=nl(n.mergedAttrs,n.attrs);let u=n.tView=Ch(2,n,r,s,o,t.directiveRegistry,t.pipeRegistry,null,t.schemas,t.consts,null);t.queries!==null&&(t.queries.template(t,n),u.queries=t.queries.embeddedTView(n))}a&&(n.flags|=a),ms(n,!1);let c=gT(t,e,n,i);Ac()&&Oh(t,e,c,n),_s(c,e);let l=My(c,e,c,n);e[i+Dt]=l,Ah(e,l),By(l,n,e)}function mT(n,e,t,i,r,s,o,a,c,l,u){let d=t+Dt,f;return e.firstCreatePass?(f=Jo(e,d,4,o||null,a||null),bf()&&Dy(e,n,f,gn(e.consts,l),uy),mx(e,f)):f=e.data[d],Wy(f,n,e,t,i,r,s,c),No(f)&&Uh(e,n,f),l!=null&&ol(n,f,u),f}function Ss(n,e,t,i,r,s,o,a,c,l,u){let d=t+Dt,f;if(e.firstCreatePass){if(f=Jo(e,d,4,o||null,a||null),l!=null){let h=gn(e.consts,l);f.localNames=[];for(let g=0;g<h.length;g+=2)f.localNames.push(h[g],-1)}}else f=e.data[d];return Wy(f,n,e,t,i,r,s,c),l!=null&&ol(n,f,u),f}function jy(n,e,t,i,r,s,o,a){let c=He(),l=Ut(),u=gn(l.consts,s);return mT(c,l,n,e,t,i,r,u,void 0,o,a),jy}function $y(n,e,t,i,r,s,o,a){let c=He(),l=Ut(),u=gn(l.consts,s);return Ss(c,l,n,e,t,i,r,u,void 0,o,a),$y}var gT=xT;function xT(n,e,t,i){return Ic(!0),e[Et].createComment("")}var on=(function(n){return n[n.NOT_STARTED=0]="NOT_STARTED",n[n.IN_PROGRESS=1]="IN_PROGRESS",n[n.COMPLETE=2]="COMPLETE",n[n.FAILED=3]="FAILED",n})(on||{}),Q0=0,yT=1,Rt=(function(n){return n[n.Placeholder=0]="Placeholder",n[n.Loading=1]="Loading",n[n.Complete=2]="Complete",n[n.Error=3]="Error",n})(Rt||{}),qy=(function(n){return n[n.Initial=-1]="Initial",n})(qy||{}),vT=0,ul=1;var _T=4,bT=5,MT=6,ET=7,Vf=8,ST=9,Xh=(function(n){return n[n.Manual=0]="Manual",n[n.Playthrough=1]="Playthrough",n})(Xh||{});function Xy(n,e,t){let i=Zy(n);e[i]===null&&(e[i]=[]),e[i].push(t)}function kc(n,e){let t=Zy(n),i=e[t];if(i!==null){for(let r of i)r();e[t]=null}}function Yy(n){kc(1,n),kc(0,n),kc(2,n)}function Zy(n){let e=_T;return n===1?e=bT:n===2&&(e=ST),e}function dl(n){return n+1}function Ds(n,e){let t=n[xe],i=dl(e.index);return n[i]}function wT(n,e,t){let i=n[xe],r=dl(e);n[r]=t}function As(n,e){let t=dl(e.index);return n.data[t]}function TT(n,e,t){let i=dl(e);n.data[i]=t}function CT(n,e,t){let i=e[xe],r=As(i,t);switch(n){case Rt.Complete:return r.primaryTmplIndex;case Rt.Loading:return r.loadingTmplIndex;case Rt.Error:return r.errorTmplIndex;case Rt.Placeholder:return r.placeholderTmplIndex;default:return null}}function ex(n,e){return e===Rt.Placeholder?n.placeholderBlockConfig?.[Q0]??null:e===Rt.Loading?n.loadingBlockConfig?.[Q0]??null:null}function DT(n){return n.loadingBlockConfig?.[yT]??null}function tx(n,e){if(!n||n.length===0)return e;let t=new Set(n);for(let i of e)t.add(i);return n.length===t.size?n:Array.from(t)}function AT(n,e){let t=e.primaryTmplIndex+Dt;return Dr(n,t)}function IT(n,e){let t=e.get(PT),i=()=>t.remove(n);return t.add(n),i}var RT=()=>typeof requestIdleCallback<"u"?requestIdleCallback:setTimeout,NT=()=>typeof requestIdleCallback<"u"?cancelIdleCallback:clearTimeout,PT=(()=>{class n{executingCallbacks=!1;idleId=null;current=new Set;deferred=new Set;ngZone=Ce(Jt);requestIdleCallbackFn=RT().bind(globalThis);cancelIdleCallbackFn=NT().bind(globalThis);add(t){(this.executingCallbacks?this.deferred:this.current).add(t),this.idleId===null&&this.scheduleIdleCallback()}remove(t){let{current:i,deferred:r}=this;i.delete(t),r.delete(t),i.size===0&&r.size===0&&this.cancelIdleCallback()}scheduleIdleCallback(){let t=()=>{this.cancelIdleCallback(),this.executingCallbacks=!0;for(let i of this.current)i();if(this.current.clear(),this.executingCallbacks=!1,this.deferred.size>0){for(let i of this.deferred)this.current.add(i);this.deferred.clear(),this.scheduleIdleCallback()}};this.idleId=this.requestIdleCallbackFn(()=>this.ngZone.run(t))}cancelIdleCallback(){this.idleId!==null&&(this.cancelIdleCallbackFn(this.idleId),this.idleId=null)}ngOnDestroy(){this.cancelIdleCallback(),this.current.clear(),this.deferred.clear()}static \u0275prov=ot({token:n,providedIn:"root",factory:()=>new n})}return n})();var LT=(()=>{class n{cachedInjectors=new Map;getOrCreateInjector(t,i,r,s){if(!this.cachedInjectors.has(t)){let o=r.length>0?$h(r,i,s):null;this.cachedInjectors.set(t,o)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=ot({token:n,providedIn:"environment",factory:()=>new n})}return n})();var Jy=new Ze("");function Hf(n,e,t){return n.get(LT).getOrCreateInjector(e,n,t,"")}function FT(n,e,t){if(n instanceof vs){let r=n.injector,s=n.parentInjector,o=Hf(s,e,t);return new vs(r,o)}let i=n.get(hn);if(i!==n){let r=Hf(i,e,t);return new vs(n,r)}return Hf(n,e,t)}function Bi(n,e,t,i=!1){let r=t[It],s=r[xe];if(Fi(r))return;let o=Ds(r,e),a=o[ul],c=o[ET];if(!(c!==null&&n<c)&&nx(a,n)&&nx(o[vT]??-1,n)){let l=As(s,e),d=!i&&!0&&(DT(l)!==null||ex(l,Rt.Loading)!==null||ex(l,Rt.Placeholder))?BT:kT;try{d(n,o,t,e,r)}catch(f){Bh(r,f)}}}function OT(n,e){let t=n[Ni]?.findIndex(r=>r.data[bh]===e[ul])??-1;return{dehydratedView:t>-1?n[Ni][t]:null,dehydratedViewIx:t}}function kT(n,e,t,i,r){at(20);let s=CT(n,r,i);if(s!==null){e[ul]=n;let o=r[xe],a=s+Dt,c=Dr(o,a),l=0;zh(t,l);let u;if(n===Rt.Complete){let g=As(o,i),x=g.providers;x&&x.length>0&&(u=FT(r[Yt],g,x))}let{dehydratedView:d,dehydratedViewIx:f}=OT(t,e),h=Yo(r,c,null,{injector:u,dehydratedView:d});if(Zo(t,h,l,Ms(c,d)),al(h,2),f>-1&&t[Ni]?.splice(f,1),(n===Rt.Complete||n===Rt.Error)&&Array.isArray(e[Vf])){for(let g of e[Vf])g();e[Vf]=null}}at(21)}function nx(n,e){return n<e}function UT(n,e){let t=n[e.index];Bi(Rt.Placeholder,e,t)}function ix(n,e,t){n.loadingPromise.then(()=>{n.loadingState===on.COMPLETE?Bi(Rt.Complete,e,t):n.loadingState===on.FAILED&&Bi(Rt.Error,e,t)})}var BT=null;var VT=(()=>{class n{log(t){console.log(t)}warn(t){console.warn(t)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ot({token:n,factory:n.\u0275fac,providedIn:"platform"})}return n})();var Ky=new Ze("");function fl(n){return!!n&&typeof n.then=="function"}function Yh(n){return!!n&&typeof n.subscribe=="function"}var Qy=new Ze("");var Zh=(()=>{class n{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((t,i)=>{this.resolve=t,this.reject=i});appInits=Ce(Qy,{optional:!0})??[];injector=Ce(vr);constructor(){}runInitializers(){if(this.initialized)return;let t=[];for(let r of this.appInits){let s=yc(this.injector,r);if(fl(s))t.push(s);else if(Yh(s)){let o=new Promise((a,c)=>{s.subscribe({complete:a,error:c})});t.push(o)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{i()}).catch(r=>{this.reject(r)}),t.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ot({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ev=new Ze("");function tv(){bd(()=>{let n="";throw new Ye(600,n)})}function nv(n){return n.isBoundToModule}var HT=10;var Qo=(()=>{class n{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=Ce(Un);afterRenderManager=Ce(iy);zonelessEnabled=Ce(Oo);rootEffectScheduler=Ce(Ff);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new qn;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=Ce(Ui);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(hr(t=>!t))}constructor(){Ce(Nh,{optional:!0})}whenStable(){let t;return new Promise(i=>{t=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{t.unsubscribe()})}_injector=Ce(hn);_rendererFactory=null;get injector(){return this._injector}bootstrap(t,i){return this.bootstrapImpl(t,i)}bootstrapImpl(t,i,r=vr.NULL){return this._injector.get(Jt).run(()=>{at(10);let o=t instanceof cl;if(!this._injector.get(Zh).done){let g="";throw new Ye(405,g)}let c;o?c=t:c=this._injector.get(Ko).resolveComponentFactory(t),this.componentTypes.push(c.componentType);let l=nv(c)?void 0:this._injector.get(Rr),u=i||c.selector,d=c.create(r,[],u,l),f=d.location.nativeElement,h=d.injector.get(Ky,null);return h?.registerApplication(f),d.onDestroy(()=>{this.detachView(d.hostView),Bo(this.components,d),h?.unregisterApplication(f)}),this._loadComponent(d),at(11,d),d})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){at(12),this.tracingSnapshot!==null?this.tracingSnapshot.run(Rh.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw new Ye(101,!1);let t=Pe(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,Pe(t),this.afterTick.next(),at(13)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(jo,null,{optional:!0}));let t=0;for(;this.dirtyFlags!==0&&t++<HT;)at(14),this.synchronizeOnce(),at(15)}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let t=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!Po(r))continue;let s=i&&!this.zonelessEnabled?0:1;yy(r,s),t=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}t||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:t})=>Po(t))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(t){let i=t;this._views.push(i),i.attachToAppRef(this)}detachView(t){let i=t;Bo(this._views,i),i.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(t),this._injector.get(ev,[]).forEach(r=>r(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>Bo(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new Ye(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ot({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Bo(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function zT(n){let e=He(),t=Zt();if(UT(e,t),!rv(0,e))return;let i=e[Yt],r=Ds(e,t),s=n(()=>GT(0,e,t),i);Xy(0,r,s)}function iv(n,e,t){let i=e[Yt],r=e[xe];if(n.loadingState!==on.NOT_STARTED)return n.loadingPromise??Promise.resolve();let s=Ds(e,t),o=AT(r,n);n.loadingState=on.IN_PROGRESS,kc(1,s);let a=n.dependencyResolverFn,c=i.get(Lf).add();return a?(n.loadingPromise=Promise.allSettled(a()).then(l=>{let u=!1,d=[],f=[];for(let h of l)if(h.status==="fulfilled"){let g=h.value,x=di(g)||gc(g);if(x)d.push(x);else{let m=af(g);m&&f.push(m)}}else{u=!0;break}if(u){if(n.loadingState=on.FAILED,n.errorTmplIndex===null){let g=new Ye(-750,!1);Bh(e,g)}}else{n.loadingState=on.COMPLETE;let h=o.tView;if(d.length>0){h.directiveRegistry=tx(h.directiveRegistry,d);let g=d.map(m=>m.type),x=xc(!1,...g);n.providers=x}f.length>0&&(h.pipeRegistry=tx(h.pipeRegistry,f))}}),n.loadingPromise.finally(()=>{n.loadingPromise=null,c()})):(n.loadingPromise=Promise.resolve().then(()=>{n.loadingPromise=null,n.loadingState=on.COMPLETE,c()}),n.loadingPromise)}function rv(n,e){return e[Yt].get(Jy,null,{optional:!0})?.behavior!==Xh.Manual}function GT(n,e,t){let i=e[xe],r=e[t.index];if(!rv(n,e))return;let s=Ds(e,t),o=As(i,t);switch(Yy(s),o.loadingState){case on.NOT_STARTED:Bi(Rt.Loading,t,r),iv(o,e,t),o.loadingState===on.IN_PROGRESS&&ix(o,t,r);break;case on.IN_PROGRESS:Bi(Rt.Loading,t,r),ix(o,t,r);break;case on.COMPLETE:Bi(Rt.Complete,t,r);break;case on.FAILED:Bi(Rt.Error,t,r);break;default:}}function WT(n,e,t){return n===0?rx(e,t):n===2?!rx(e,t):!0}function jT(n){return n!=null&&(n&1)===1}function rx(n,e){let t=n[Yt],i=As(n[xe],e),r=Eh(t),s=jT(i.flags),a=Ds(n,e)[MT]!==null;return!(s&&a&&r)}function $T(n,e,t,i,r,s,o,a,c,l){let u=He(),d=Ut(),f=n+Dt,h=Ss(u,d,n,null,0,0),g=u[Yt],x=Eh(g);if(d.firstCreatePass){zi("NgDefer");let S={primaryTmplIndex:e,loadingTmplIndex:i??null,placeholderTmplIndex:r??null,errorTmplIndex:s??null,placeholderBlockConfig:null,loadingBlockConfig:null,dependencyResolverFn:t??null,loadingState:on.NOT_STARTED,loadingPromise:null,providers:null,hydrateTriggers:null,debug:null,flags:l??0};c?.(d,S,a,o),TT(d,f,S)}let m=u[f];By(m,h,u);let p=null,M=null;if(m[Ni]?.length>0){let S=m[Ni][0].data;M=S[_h]??null,p=S[bh]}let E=[null,qy.Initial,null,null,null,null,M,p,null,null];wT(u,f,E);let T=null;M!==null&&x&&(T=g.get(Ux),T.add(M,{lView:u,tNode:h,lContainer:m}));let C=()=>{Yy(E),M!==null&&T?.cleanup([M])};Xy(0,E,()=>xf(u,C)),Ec(u,C)}function qT(){let n=He(),e=Zt();WT(0,n,e)&&zT(IT)}function sv(n,e,t,i){let r=He(),s=Ar();if(Pr(r,s,e)){let o=Ut(),a=Dc();KS(a,r,n,e,t,i)}return sv}var hU=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var uh=class{destroy(e){}updateValue(e,t){}swap(e,t){let i=Math.min(e,t),r=Math.max(e,t),s=this.detach(r);if(r-i>1){let o=this.detach(i);this.attach(i,s),this.attach(r,o)}else this.attach(i,s)}move(e,t){this.attach(t,this.detach(e))}};function zf(n,e,t,i,r){return n===t&&Object.is(e,i)?1:Object.is(r(n,e),r(t,i))?-1:0}function XT(n,e,t){let i,r,s=0,o=n.length-1,a=void 0;if(Array.isArray(e)){let c=e.length-1;for(;s<=o&&s<=c;){let l=n.at(s),u=e[s],d=zf(s,l,s,u,t);if(d!==0){d<0&&n.updateValue(s,u),s++;continue}let f=n.at(o),h=e[c],g=zf(o,f,c,h,t);if(g!==0){g<0&&n.updateValue(o,h),o--,c--;continue}let x=t(s,l),m=t(o,f),p=t(s,u);if(Object.is(p,m)){let M=t(c,h);Object.is(M,x)?(n.swap(s,o),n.updateValue(o,h),c--,o--):n.move(o,s),n.updateValue(s,u),s++;continue}if(i??=new Kc,r??=ox(n,s,o,t),dh(n,i,s,p))n.updateValue(s,u),s++,o++;else if(r.has(p))i.set(x,n.detach(s)),o--;else{let M=n.create(s,e[s]);n.attach(s,M),s++,o++}}for(;s<=c;)sx(n,i,t,s,e[s]),s++}else if(e!=null){let c=e[Symbol.iterator](),l=c.next();for(;!l.done&&s<=o;){let u=n.at(s),d=l.value,f=zf(s,u,s,d,t);if(f!==0)f<0&&n.updateValue(s,d),s++,l=c.next();else{i??=new Kc,r??=ox(n,s,o,t);let h=t(s,d);if(dh(n,i,s,h))n.updateValue(s,d),s++,o++,l=c.next();else if(!r.has(h))n.attach(s,n.create(s,d)),s++,o++,l=c.next();else{let g=t(s,u);i.set(g,n.detach(s)),o--}}}for(;!l.done;)sx(n,i,t,n.length,l.value),l=c.next()}for(;s<=o;)n.destroy(n.detach(o--));i?.forEach(c=>{n.destroy(c)})}function dh(n,e,t,i){return e!==void 0&&e.has(i)?(n.attach(t,e.get(i)),e.delete(i),!0):!1}function sx(n,e,t,i,r){if(dh(n,e,i,t(i,r)))n.updateValue(i,r);else{let s=n.create(i,r);n.attach(i,s)}}function ox(n,e,t,i){let r=new Set;for(let s=e;s<=t;s++)r.add(i(s,n.at(s)));return r}var Kc=class{kvMap=new Map;_vMap=void 0;has(e){return this.kvMap.has(e)}delete(e){if(!this.has(e))return!1;let t=this.kvMap.get(e);return this._vMap!==void 0&&this._vMap.has(t)?(this.kvMap.set(e,this._vMap.get(t)),this._vMap.delete(t)):this.kvMap.delete(e),!0}get(e){return this.kvMap.get(e)}set(e,t){if(this.kvMap.has(e)){let i=this.kvMap.get(e);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,t)}else this.kvMap.set(e,t)}forEach(e){for(let[t,i]of this.kvMap)if(e(i,t),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),e(i,t)}}};function YT(n,e,t,i,r,s,o,a){zi("NgControlFlow");let c=He(),l=Ut(),u=gn(l.consts,s);return Ss(c,l,n,e,t,i,r,u,256,o,a),Jh}function Jh(n,e,t,i,r,s,o,a){zi("NgControlFlow");let c=He(),l=Ut(),u=gn(l.consts,s);return Ss(c,l,n,e,t,i,r,u,512,o,a),Jh}function ZT(n,e){zi("NgControlFlow");let t=He(),i=Ar(),r=t[i]!==Jn?t[i]:-1,s=r!==-1?Qc(t,Dt+r):void 0,o=0;if(Pr(t,i,n)){let a=Pe(null);try{if(s!==void 0&&zh(s,o),n!==-1){let c=Dt+n,l=Qc(t,c),u=mh(t[xe],c),d=wy(l,u,t),f=Yo(t,u,e,{dehydratedView:d});Zo(l,f,o,Ms(u,d))}}finally{Pe(a)}}else if(s!==void 0){let a=Ey(s,o);a!==void 0&&(a[Ct]=e)}}var fh=class{lContainer;$implicit;$index;constructor(e,t,i){this.lContainer=e,this.$implicit=t,this.$index=i}get $count(){return this.lContainer.length-St}};function JT(n,e){return e}var hh=class{hasEmptyBlock;trackByFn;liveCollection;constructor(e,t,i){this.hasEmptyBlock=e,this.trackByFn=t,this.liveCollection=i}};function KT(n,e,t,i,r,s,o,a,c,l,u,d,f){zi("NgControlFlow");let h=He(),g=Ut(),x=c!==void 0,m=He(),p=a?o.bind(m[pn][Ct]):o,M=new hh(x,p);m[Dt+n]=M,Ss(h,g,n+1,e,t,i,r,gn(g.consts,s),256),x&&Ss(h,g,n+2,c,l,u,d,gn(g.consts,f),512)}var ph=class extends uh{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(e,t,i){super(),this.lContainer=e,this.hostLView=t,this.templateTNode=i}get length(){return this.lContainer.length-St}at(e){return this.getLView(e)[Ct].$implicit}attach(e,t){let i=t[ds];this.needsIndexUpdate||=e!==this.length,Zo(this.lContainer,t,e,Ms(this.templateTNode,i)),eC(this.lContainer,e)}detach(e){return this.needsIndexUpdate||=e!==this.length-1,tC(this.lContainer,e),nC(this.lContainer,e)}create(e,t){let i=th(this.lContainer,this.templateTNode.tView.ssrId),r=Yo(this.hostLView,this.templateTNode,new fh(this.lContainer,t,e),{dehydratedView:i});return this.operationsCounter?.recordCreate(),r}destroy(e){rl(e[xe],e),this.operationsCounter?.recordDestroy()}updateValue(e,t){this.getLView(e)[Ct].$implicit=t}reset(){this.needsIndexUpdate=!1,this.operationsCounter?.reset()}updateIndexes(){if(this.needsIndexUpdate)for(let e=0;e<this.length;e++)this.getLView(e)[Ct].$index=e}getLView(e){return iC(this.lContainer,e)}};function QT(n){let e=Pe(null),t=Oi();try{let i=He(),r=i[xe],s=i[t],o=t+1,a=Qc(i,o);if(s.liveCollection===void 0){let l=mh(r,o);s.liveCollection=new ph(a,i,l)}else s.liveCollection.reset();let c=s.liveCollection;if(XT(c,n,s.trackByFn),c.updateIndexes(),s.hasEmptyBlock){let l=Ar(),u=c.length===0;if(Pr(i,l,u)){let d=t+2,f=Qc(i,d);if(u){let h=mh(r,d),g=wy(f,h,i),x=Yo(i,h,void 0,{dehydratedView:g});Zo(f,x,0,Ms(h,g))}else r.firstUpdatePass&&bw(f),zh(f,0)}}}finally{Pe(e)}}function Qc(n,e){return n[e]}function eC(n,e){if(n.length<=St)return;let t=St+e,i=n[t],r=i?i[wr]:void 0;if(i&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){let s=i[Yt];CS(s,r),zo.delete(i),r.detachedLeaveAnimationFns=void 0}}function tC(n,e){if(n.length<=St)return;let t=St+e,i=n[t],r=i?i[wr]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function nC(n,e){return Wo(n,e)}function iC(n,e){return Ey(n,e)}function mh(n,e){return Dr(n,e)}function ov(n,e,t){let i=He(),r=Ar();if(Pr(i,r,e)){let s=Ut(),o=Dc();qS(o,i,n,e,i[Et],t)}return ov}function ax(n,e,t,i,r){Vh(e,n,t,r?"class":"style",i)}function Kh(n,e,t,i){let r=He(),s=r[xe],o=n+Dt,a=s.firstCreatePass?Iy(o,r,2,e,uy,bf(),t,i):s.data[o];if(dy(a,r,n,e,lv),No(a)){let c=r[xe];Uh(c,r,a),Hx(c,a,r)}return i!=null&&ol(r,a),Kh}function Qh(){let n=Ut(),e=Zt(),t=fy(e);return n.firstCreatePass&&Ry(n,t),Mf(t)&&Ef(),_f(),t.classesWithoutHost!=null&&_E(t)&&ax(n,t,He(),t.classesWithoutHost,!0),t.stylesWithoutHost!=null&&bE(t)&&ax(n,t,He(),t.stylesWithoutHost,!1),Qh}function av(n,e,t,i){return Kh(n,e,t,i),Qh(),av}function ep(n,e,t,i){let r=He(),s=r[xe],o=n+Dt,a=s.firstCreatePass?Lw(o,s,2,e,t,i):s.data[o];return dy(a,r,n,e,lv),i!=null&&ol(r,a),ep}function tp(){let n=Zt(),e=fy(n);return Mf(e)&&Ef(),_f(),tp}function cv(n,e,t,i){return ep(n,e,t,i),tp(),cv}var lv=(n,e,t,i,r)=>(Ic(!0),jx(e[Et],i,S0()));function rC(){return He()}function uv(n,e,t){let i=He(),r=Ar();if(Pr(i,r,e)){let s=Ut(),o=Dc();ly(o,i,n,e,i[Et],t)}return uv}var ea="en-US";var sC=ea;function dv(n){typeof n=="string"&&(sC=n.toLowerCase().replace(/_/g,"-"))}function fv(n,e,t){let i=He(),r=Ut(),s=Zt();return oC(r,i,i[Et],s,n,e,t),fv}function hv(n,e,t){let i=He(),r=Ut(),s=Zt();return(s.type&3||t)&&Ly(s,r,i,t,i[Et],n,e,Oc(s,i,e)),hv}function oC(n,e,t,i,r,s,o){let a=!0,c=null;if((i.type&3||o)&&(c??=Oc(i,e,s),Ly(i,n,e,o,t,r,s,c)&&(a=!1)),a){let l=i.outputs?.[r],u=i.hostDirectiveOutputs?.[r];if(u&&u.length)for(let d=0;d<u.length;d+=2){let f=u[d],h=u[d+1];c??=Oc(i,e,s),Y0(i,e,f,h,r,c)}if(l&&l.length)for(let d of l)c??=Oc(i,e,s),Y0(i,e,d,r,r,c)}}function aC(n=1){return b0(n)}function cC(n,e,t){sT(n,e,t)}function lC(n){let e=He(),t=Ut(),i=Df();wc(i+1);let r=jh(t,i);if(n.dirty&&e0(e)===((r.metadata.flags&2)===2)){if(r.matches===null)n.reset([]);else{let s=cT(e,i);n.reset(s,OE),n.notifyOnChanges()}return!0}return!1}function uC(){return iT(He(),Df())}function Rc(n,e){return n<<17|e<<2}function Nr(n){return n>>17&32767}function dC(n){return(n&2)==2}function fC(n,e){return n&131071|e<<17}function gh(n){return n|2}function ws(n){return(n&131068)>>2}function Gf(n,e){return n&-131069|e<<2}function hC(n){return(n&1)===1}function xh(n){return n|1}function pC(n,e,t,i,r,s){let o=s?e.classBindings:e.styleBindings,a=Nr(o),c=ws(o);n[i]=t;let l=!1,u;if(Array.isArray(t)){let d=t;u=d[1],(u===null||us(d,u)>0)&&(l=!0)}else u=t;if(r)if(c!==0){let f=Nr(n[a+1]);n[i+1]=Rc(f,a),f!==0&&(n[f+1]=Gf(n[f+1],i)),n[a+1]=fC(n[a+1],i)}else n[i+1]=Rc(a,0),a!==0&&(n[a+1]=Gf(n[a+1],i)),a=i;else n[i+1]=Rc(c,0),a===0?a=i:n[c+1]=Gf(n[c+1],i),c=i;l&&(n[i+1]=gh(n[i+1])),cx(n,u,i,!0),cx(n,u,i,!1),mC(e,u,n,i,s),o=Rc(a,c),s?e.classBindings=o:e.styleBindings=o}function mC(n,e,t,i,r){let s=r?n.residualClasses:n.residualStyles;s!=null&&typeof e=="string"&&us(s,e)>=0&&(t[i+1]=xh(t[i+1]))}function cx(n,e,t,i){let r=n[t+1],s=e===null,o=i?Nr(r):ws(r),a=!1;for(;o!==0&&(a===!1||s);){let c=n[o],l=n[o+1];gC(c,e)&&(a=!0,n[o+1]=i?xh(l):gh(l)),o=i?Nr(l):ws(l)}a&&(n[t+1]=i?gh(r):xh(r))}function gC(n,e){return n===null||e==null||(Array.isArray(n)?n[1]:n)===e?!0:Array.isArray(n)&&typeof e=="string"?us(n,e)>=0:!1}function pv(n,e,t){return gv(n,e,t,!1),pv}function mv(n,e){return gv(n,e,null,!0),mv}function gv(n,e,t,i){let r=He(),s=Ut(),o=h0(2);if(s.firstUpdatePass&&yC(s,n,o,i),e!==Jn&&Pr(r,o,e)){let a=s.data[Oi()];EC(s,a,r,r[Et],n,r[o+1]=SC(e,t),i,o)}}function xC(n,e){return e>=n.expandoStartIndex}function yC(n,e,t,i){let r=n.data;if(r[t+1]===null){let s=r[Oi()],o=xC(n,t);wC(s,i)&&e===null&&!o&&(e=!1),e=vC(r,s,e,i),pC(r,s,e,t,o,i)}}function vC(n,e,t,i){let r=x0(n),s=i?e.residualClasses:e.residualStyles;if(r===null)(i?e.classBindings:e.styleBindings)===0&&(t=Wf(null,n,e,t,i),t=qo(t,e.attrs,i),s=null);else{let o=e.directiveStylingLast;if(o===-1||n[o]!==r)if(t=Wf(r,n,e,t,i),s===null){let c=_C(n,e,i);c!==void 0&&Array.isArray(c)&&(c=Wf(null,n,e,c[1],i),c=qo(c,e.attrs,i),bC(n,e,i,c))}else s=MC(n,e,i)}return s!==void 0&&(i?e.residualClasses=s:e.residualStyles=s),t}function _C(n,e,t){let i=t?e.classBindings:e.styleBindings;if(ws(i)!==0)return n[Nr(i)]}function bC(n,e,t,i){let r=t?e.classBindings:e.styleBindings;n[Nr(r)]=i}function MC(n,e,t){let i,r=e.directiveEnd;for(let s=1+e.directiveStylingLast;s<r;s++){let o=n[s].hostAttrs;i=qo(i,o,t)}return qo(i,e.attrs,t)}function Wf(n,e,t,i,r){let s=null,o=t.directiveEnd,a=t.directiveStylingLast;for(a===-1?a=t.directiveStart:a++;a<o&&(s=e[a],i=qo(i,s.hostAttrs,r),s!==n);)a++;return n!==null&&(t.directiveStylingLast=a),i}function qo(n,e,t){let i=t?1:2,r=-1;if(e!==null)for(let s=0;s<e.length;s++){let o=e[s];typeof o=="number"?r=o:r===i&&(Array.isArray(n)||(n=n===void 0?[]:["",n]),jg(n,o,t?!0:e[++s]))}return n===void 0?null:n}function EC(n,e,t,i,r,s,o,a){if(!(e.type&3))return;let c=n.data,l=c[a+1],u=hC(l)?lx(c,e,t,r,ws(l),o):void 0;if(!el(u)){el(s)||dC(l)&&(s=lx(c,null,t,r,a,o));let d=pf(Oi(),t);zS(i,o,d,r,s)}}function lx(n,e,t,i,r,s){let o=e===null,a;for(;r>0;){let c=n[r],l=Array.isArray(c),u=l?c[1]:c,d=u===null,f=t[r+1];f===Jn&&(f=d?wn:void 0);let h=d?mc(f,i):u===i?f:void 0;if(l&&!el(h)&&(h=mc(c,i)),el(h)&&(a=h,o))return a;let g=n[r+1];r=o?Nr(g):ws(g)}if(e!==null){let c=s?e.residualClasses:e.residualStyles;c!=null&&(a=mc(c,i))}return a}function el(n){return n!==void 0}function SC(n,e){return n==null||n===""||(typeof e=="string"?n=n+e:typeof n=="object"&&(n=ui(Sh(n)))),n}function wC(n,e){return(n.flags&(e?8:16))!==0}function TC(n,e=""){let t=He(),i=Ut(),r=n+Dt,s=i.firstCreatePass?Jo(i,r,1,e,null):i.data[r],o=CC(i,t,s,e,n);t[r]=o,Ac()&&Oh(i,t,o,s),ms(s,!1)}var CC=(n,e,t,i,r)=>(Ic(!0),KE(e[Et],i));function DC(n,e,t,i=""){return Pr(n,Ar(),t)?e+wo(t)+i:Jn}function xv(n){return np("",n),xv}function np(n,e,t){let i=He(),r=DC(i,n,e,t);return r!==Jn&&AC(i,Oi(),r),np}function AC(n,e,t){let i=pf(e,n);QE(n[Et],i,t)}function IC(n,e,t){let i=d0()+n,r=He();return r[i]===Jn?Fw(r,i,t?e.call(t):e()):Ow(r,i)}var tl=class{ngModuleFactory;componentFactories;constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}},RC=(()=>{class n{compileModuleSync(t){return new Jc(t)}compileModuleAsync(t){return Promise.resolve(this.compileModuleSync(t))}compileModuleAndAllComponentsSync(t){let i=this.compileModuleSync(t),r=of(t),s=Yx(r.declarations).reduce((o,a)=>{let c=di(a);return c&&o.push(new Es(c)),o},[]);return new tl(i,s)}compileModuleAndAllComponentsAsync(t){return Promise.resolve(this.compileModuleAndAllComponentsSync(t))}clearCache(){}clearCacheFor(t){}getModuleId(t){}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ot({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var NC=(()=>{class n{zone=Ce(Jt);changeDetectionScheduler=Ce(Ai);applicationRef=Ce(Qo);applicationErrorHandler=Ce(Un);_onMicrotaskEmptySubscription;initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{try{this.applicationRef.dirtyFlags|=1,this.applicationRef._tick()}catch(t){this.applicationErrorHandler(t)}})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ot({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),yv=new Ze("",{factory:()=>!1});function ip({ngZoneFactory:n,ignoreChangesOutsideZone:e,scheduleInRootZone:t}){return n??=()=>new Jt(Xt(zt({},rp()),{scheduleInRootZone:t})),[{provide:Jt,useFactory:n},{provide:Ii,multi:!0,useFactory:()=>{let i=Ce(NC,{optional:!0});return()=>i.initialize()}},{provide:Ii,multi:!0,useFactory:()=>{let i=Ce(LC);return()=>{i.initialize()}}},e===!0?{provide:Nf,useValue:!0}:[],{provide:Pf,useValue:t??ey},{provide:Un,useFactory:()=>{let i=Ce(Jt),r=Ce(hn),s;return o=>{i.runOutsideAngular(()=>{r.destroyed&&!s?setTimeout(()=>{throw o}):(s??=r.get(_r),s.handleError(o))})}}}]}function PC(n){let e=n?.ignoreChangesOutsideZone,t=n?.scheduleInRootZone,i=ip({ngZoneFactory:()=>{let r=rp(n);return r.scheduleInRootZone=t,r.shouldCoalesceEventChangeDetection&&zi("NgZone_CoalesceEvent"),new Jt(r)},ignoreChangesOutsideZone:e,scheduleInRootZone:t});return Co([{provide:yv,useValue:!0},{provide:Oo,useValue:!1},i])}function rp(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}var LC=(()=>{class n{subscription=new Ot;initialized=!1;zone=Ce(Jt);pendingTasks=Ce(Ui);initialize(){if(this.initialized)return;this.initialized=!0;let t=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(t=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{Jt.assertNotInAngularZone(),queueMicrotask(()=>{t!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(t),t=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{Jt.assertInAngularZone(),t??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ot({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var vv=(()=>{class n{applicationErrorHandler=Ce(Un);appRef=Ce(Qo);taskService=Ce(Ui);ngZone=Ce(Jt);zonelessEnabled=Ce(Oo);tracing=Ce(Nh,{optional:!0});disableScheduling=Ce(Nf,{optional:!0})??!1;zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new Ot;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(jc):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(Ce(Pf,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{this.runningTick||this.cleanup()})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()})),this.disableScheduling||=!this.zonelessEnabled&&(this.ngZone instanceof $c||!this.zoneIsDefined)}notify(t){if(!this.zonelessEnabled&&t===5)return;let i=!1;switch(t){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2,i=!0;break}case 12:{this.appRef.dirtyFlags|=16,i=!0;break}case 13:{this.appRef.dirtyFlags|=2,i=!0;break}case 11:{i=!0;break}case 9:case 8:case 7:case 10:default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick(i))return;let r=this.useMicrotaskScheduler?B0:ty;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>r(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>r(()=>this.tick()))}shouldScheduleTick(t){return!(this.disableScheduling&&!t||this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(jc+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let t=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.taskService.remove(t),this.applicationErrorHandler(i)}finally{this.cleanup()}this.useMicrotaskScheduler=!0,B0(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(t)})}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let t=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(t)}}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ot({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function FC(){return typeof $localize<"u"&&$localize.locale||ea}var hl=new Ze("",{providedIn:"root",factory:()=>Ce(hl,{optional:!0,skipSelf:!0})||FC()});function bv(n){return Lg(n)}var _v=class{[nn];constructor(e){this[nn]=e}destroy(){this[nn].destroy()}};var wv=Symbol("InputSignalNode#UNSET"),qC=Xt(zt({},Ua),{transformFn:void 0,applyValueToInputSignal(n,e){is(n,e)}});function Tv(n,e){let t=Object.create(qC);t.value=n,t.transformFn=e?.transform;function i(){if(uo(t),t.value===wv){let r=null;throw new Ye(-950,r)}return t.value}return i[nn]=t,i}var XC=new Ze("");XC.__NG_ELEMENT_ID__=n=>{let e=Zt();if(e===null)throw new Ye(204,!1);if(e.type&2)return e.value;if(n&8)return null;throw new Ye(204,!1)};function Mv(n,e){return Tv(n,e)}function YC(n){return Tv(wv,n)}var L8=(Mv.required=YC,Mv);var sp=new Ze(""),ZC=new Ze("");function ta(n){return!n.moduleRef}function JC(n){let e=ta(n)?n.r3Injector:n.moduleRef.injector,t=e.get(Jt);return t.run(()=>{ta(n)?n.r3Injector.resolveInjectorInitializers():n.moduleRef.resolveInjectorInitializers();let i=e.get(Un),r;if(t.runOutsideAngular(()=>{r=t.onError.subscribe({next:i})}),ta(n)){let s=()=>e.destroy(),o=n.platformInjector.get(sp);o.add(s),e.onDestroy(()=>{r.unsubscribe(),o.delete(s)})}else{let s=()=>n.moduleRef.destroy(),o=n.platformInjector.get(sp);o.add(s),n.moduleRef.onDestroy(()=>{Bo(n.allPlatformModules,n.moduleRef),r.unsubscribe(),o.delete(s)})}return QC(i,t,()=>{let s=e.get(Ui),o=s.add(),a=e.get(Zh);return a.runInitializers(),a.donePromise.then(()=>{let c=e.get(hl,ea);if(dv(c||ea),!e.get(ZC,!0))return ta(n)?e.get(Qo):(n.allPlatformModules.push(n.moduleRef),n.moduleRef);if(ta(n)){let u=e.get(Qo);return n.rootComponent!==void 0&&u.bootstrap(n.rootComponent),u}else return KC?.(n.moduleRef,n.allPlatformModules),n.moduleRef}).finally(()=>void s.remove(o))})})}var KC;function QC(n,e,t){try{let i=t();return fl(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n(i)),i}}var pl=null;function eD(n=[],e){return vr.create({name:e,providers:[{provide:lf,useValue:"platform"},{provide:sp,useValue:new Set([()=>pl=null])},...n]})}function tD(n=[]){if(pl)return pl;let e=eD(n);return pl=e,tv(),nD(e),e}function nD(n){let e=n.get(Px,null);yc(n,()=>{e?.forEach(t=>t())})}var iD=(()=>{class n{static __NG_ELEMENT_ID__=rD}return n})();function rD(n){return sD(Zt(),He(),(n&16)===16)}function sD(n,e,t){if(Li(n)&&!t){let i=kn(n.index,e);return new Vi(i,i)}else if(n.type&175){let i=e[pn];return new Vi(i,e)}return null}var op=class{constructor(){}supports(e){return Wh(e)}create(e){return new ap(e)}},oD=(n,e)=>e,ap=class{length=0;collection;_linkedRecords=null;_unlinkedRecords=null;_previousItHead=null;_itHead=null;_itTail=null;_additionsHead=null;_additionsTail=null;_movesHead=null;_movesTail=null;_removalsHead=null;_removalsTail=null;_identityChangesHead=null;_identityChangesTail=null;_trackByFn;constructor(e){this._trackByFn=e||oD}forEachItem(e){let t;for(t=this._itHead;t!==null;t=t._next)e(t)}forEachOperation(e){let t=this._itHead,i=this._removalsHead,r=0,s=null;for(;t||i;){let o=!i||t&&t.currentIndex<Ev(i,r,s)?t:i,a=Ev(o,r,s),c=o.currentIndex;if(o===i)r--,i=i._nextRemoved;else if(t=t._next,o.previousIndex==null)r++;else{s||(s=[]);let l=a-r,u=c-r;if(l!=u){for(let f=0;f<l;f++){let h=f<s.length?s[f]:s[f]=0,g=h+f;u<=g&&g<l&&(s[f]=h+1)}let d=o.previousIndex;s[d]=u-l}}a!==c&&e(o,a,c)}}forEachPreviousItem(e){let t;for(t=this._previousItHead;t!==null;t=t._nextPrevious)e(t)}forEachAddedItem(e){let t;for(t=this._additionsHead;t!==null;t=t._nextAdded)e(t)}forEachMovedItem(e){let t;for(t=this._movesHead;t!==null;t=t._nextMoved)e(t)}forEachRemovedItem(e){let t;for(t=this._removalsHead;t!==null;t=t._nextRemoved)e(t)}forEachIdentityChange(e){let t;for(t=this._identityChangesHead;t!==null;t=t._nextIdentityChange)e(t)}diff(e){if(e==null&&(e=[]),!Wh(e))throw new Ye(900,!1);return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let t=this._itHead,i=!1,r,s,o;if(Array.isArray(e)){this.length=e.length;for(let a=0;a<this.length;a++)s=e[a],o=this._trackByFn(a,s),t===null||!Object.is(t.trackById,o)?(t=this._mismatch(t,s,o,a),i=!0):(i&&(t=this._verifyReinsertion(t,s,o,a)),Object.is(t.item,s)||this._addIdentityChange(t,s)),t=t._next}else r=0,Ny(e,a=>{o=this._trackByFn(r,a),t===null||!Object.is(t.trackById,o)?(t=this._mismatch(t,a,o,r),i=!0):(i&&(t=this._verifyReinsertion(t,a,o,r)),Object.is(t.item,a)||this._addIdentityChange(t,a)),t=t._next,r++}),this.length=r;return this._truncate(t),this.collection=e,this.isDirty}get isDirty(){return this._additionsHead!==null||this._movesHead!==null||this._removalsHead!==null||this._identityChangesHead!==null}_reset(){if(this.isDirty){let e;for(e=this._previousItHead=this._itHead;e!==null;e=e._next)e._nextPrevious=e._next;for(e=this._additionsHead;e!==null;e=e._nextAdded)e.previousIndex=e.currentIndex;for(this._additionsHead=this._additionsTail=null,e=this._movesHead;e!==null;e=e._nextMoved)e.previousIndex=e.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(e,t,i,r){let s;return e===null?s=this._itTail:(s=e._prev,this._remove(e)),e=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null),e!==null?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._reinsertAfter(e,s,r)):(e=this._linkedRecords===null?null:this._linkedRecords.get(i,r),e!==null?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._moveAfter(e,s,r)):e=this._addAfter(new cp(t,i),s,r)),e}_verifyReinsertion(e,t,i,r){let s=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null);return s!==null?e=this._reinsertAfter(s,e._prev,r):e.currentIndex!=r&&(e.currentIndex=r,this._addToMoves(e,r)),e}_truncate(e){for(;e!==null;){let t=e._next;this._addToRemovals(this._unlink(e)),e=t}this._unlinkedRecords!==null&&this._unlinkedRecords.clear(),this._additionsTail!==null&&(this._additionsTail._nextAdded=null),this._movesTail!==null&&(this._movesTail._nextMoved=null),this._itTail!==null&&(this._itTail._next=null),this._removalsTail!==null&&(this._removalsTail._nextRemoved=null),this._identityChangesTail!==null&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(e,t,i){this._unlinkedRecords!==null&&this._unlinkedRecords.remove(e);let r=e._prevRemoved,s=e._nextRemoved;return r===null?this._removalsHead=s:r._nextRemoved=s,s===null?this._removalsTail=r:s._prevRemoved=r,this._insertAfter(e,t,i),this._addToMoves(e,i),e}_moveAfter(e,t,i){return this._unlink(e),this._insertAfter(e,t,i),this._addToMoves(e,i),e}_addAfter(e,t,i){return this._insertAfter(e,t,i),this._additionsTail===null?this._additionsTail=this._additionsHead=e:this._additionsTail=this._additionsTail._nextAdded=e,e}_insertAfter(e,t,i){let r=t===null?this._itHead:t._next;return e._next=r,e._prev=t,r===null?this._itTail=e:r._prev=e,t===null?this._itHead=e:t._next=e,this._linkedRecords===null&&(this._linkedRecords=new ml),this._linkedRecords.put(e),e.currentIndex=i,e}_remove(e){return this._addToRemovals(this._unlink(e))}_unlink(e){this._linkedRecords!==null&&this._linkedRecords.remove(e);let t=e._prev,i=e._next;return t===null?this._itHead=i:t._next=i,i===null?this._itTail=t:i._prev=t,e}_addToMoves(e,t){return e.previousIndex===t||(this._movesTail===null?this._movesTail=this._movesHead=e:this._movesTail=this._movesTail._nextMoved=e),e}_addToRemovals(e){return this._unlinkedRecords===null&&(this._unlinkedRecords=new ml),this._unlinkedRecords.put(e),e.currentIndex=null,e._nextRemoved=null,this._removalsTail===null?(this._removalsTail=this._removalsHead=e,e._prevRemoved=null):(e._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=e),e}_addIdentityChange(e,t){return e.item=t,this._identityChangesTail===null?this._identityChangesTail=this._identityChangesHead=e:this._identityChangesTail=this._identityChangesTail._nextIdentityChange=e,e}},cp=class{item;trackById;currentIndex=null;previousIndex=null;_nextPrevious=null;_prev=null;_next=null;_prevDup=null;_nextDup=null;_prevRemoved=null;_nextRemoved=null;_nextAdded=null;_nextMoved=null;_nextIdentityChange=null;constructor(e,t){this.item=e,this.trackById=t}},lp=class{_head=null;_tail=null;add(e){this._head===null?(this._head=this._tail=e,e._nextDup=null,e._prevDup=null):(this._tail._nextDup=e,e._prevDup=this._tail,e._nextDup=null,this._tail=e)}get(e,t){let i;for(i=this._head;i!==null;i=i._nextDup)if((t===null||t<=i.currentIndex)&&Object.is(i.trackById,e))return i;return null}remove(e){let t=e._prevDup,i=e._nextDup;return t===null?this._head=i:t._nextDup=i,i===null?this._tail=t:i._prevDup=t,this._head===null}},ml=class{map=new Map;put(e){let t=e.trackById,i=this.map.get(t);i||(i=new lp,this.map.set(t,i)),i.add(e)}get(e,t){let i=e,r=this.map.get(i);return r?r.get(e,t):null}remove(e){let t=e.trackById;return this.map.get(t).remove(e)&&this.map.delete(t),e}get isEmpty(){return this.map.size===0}clear(){this.map.clear()}};function Ev(n,e,t){let i=n.previousIndex;if(i===null)return i;let r=0;return t&&i<t.length&&(r=t[i]),i+e+r}function Sv(){return new up([new op])}var up=(()=>{class n{factories;static \u0275prov=ot({token:n,providedIn:"root",factory:Sv});constructor(t){this.factories=t}static create(t,i){if(i!=null){let r=i.factories.slice();t=t.concat(r)}return new n(t)}static extend(t){return{provide:n,useFactory:()=>{let i=Ce(n,{optional:!0,skipSelf:!0});return n.create(t,i||Sv())}}}find(t){let i=this.factories.find(r=>r.supports(t));if(i!=null)return i;throw new Ye(901,!1)}}return n})();function F8(n){let{rootComponent:e,appProviders:t,platformProviders:i,platformRef:r}=n;at(8);try{let s=r?.injector??tD(i),o=[ip({}),{provide:Ai,useExisting:vv},T0,...t||[]],a=new $o({providers:o,parent:s,debugName:"",runEnvironmentInitializers:!1});return JC({r3Injector:a.injector,platformInjector:s,rootComponent:e})}catch(s){return Promise.reject(s)}finally{at(9)}}var Av=null;function gl(){return Av}function aD(n){Av??=n}var fp=class{},hp=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ot({token:n,factory:()=>Ce(Iv),providedIn:"platform"})}return n})();var Iv=(()=>{class n extends hp{_location;_history;_doc=Ce(gs);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return gl().getBaseHref(this._doc)}onPopState(t){let i=gl().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",t,!1),()=>i.removeEventListener("popstate",t)}onHashChange(t){let i=gl().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",t,!1),()=>i.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,i,r){this._history.pushState(t,i,r)}replaceState(t,i,r){this._history.replaceState(t,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ot({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function Rv(n,e){return n?e?n.endsWith("/")?e.startsWith("/")?n+e.slice(1):n+e:e.startsWith("/")?n+e:`${n}/${e}`:n:e}function Cv(n){let e=n.search(/#|\?|$/);return n[e-1]==="/"?n.slice(0,e-1)+n.slice(e):n}function Wi(n){return n&&n[0]!=="?"?`?${n}`:n}var xl=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ot({token:n,factory:()=>Ce(Pv),providedIn:"root"})}return n})(),Nv=new Ze(""),Pv=(()=>{class n extends xl{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,i){super(),this._platformLocation=t,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??Ce(gs).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return Rv(this._baseHref,t)}path(t=!1){let i=this._platformLocation.pathname+Wi(this._platformLocation.search),r=this._platformLocation.hash;return r&&t?`${i}${r}`:i}pushState(t,i,r,s){let o=this.prepareExternalUrl(r+Wi(s));this._platformLocation.pushState(t,i,o)}replaceState(t,i,r,s){let o=this.prepareExternalUrl(r+Wi(s));this._platformLocation.replaceState(t,i,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(i){return new(i||n)(Ht(hp),Ht(Nv,8))};static \u0275prov=ot({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Lv=(()=>{class n{_subject=new qn;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let i=this._locationStrategy.getBaseHref();this._basePath=uD(Cv(Dv(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,i=""){return this.path()==this.normalize(t+Wi(i))}normalize(t){return n.stripTrailingSlash(lD(this._basePath,Dv(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,i="",r=null){this._locationStrategy.pushState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Wi(i)),r)}replaceState(t,i="",r=null){this._locationStrategy.replaceState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Wi(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",i){this._urlChangeListeners.forEach(r=>r(t,i))}subscribe(t,i,r){return this._subject.subscribe({next:t,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=Wi;static joinWithSlash=Rv;static stripTrailingSlash=Cv;static \u0275fac=function(i){return new(i||n)(Ht(xl))};static \u0275prov=ot({token:n,factory:()=>cD(),providedIn:"root"})}return n})();function cD(){return new Lv(Ht(xl))}function lD(n,e){if(!n||!e.startsWith(n))return e;let t=e.substring(n.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function Dv(n){return n.replace(/\/index.html$/,"")}function uD(n){if(new RegExp("^(https?:)?//").test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}var yl=class{$implicit;ngForOf;index;count;constructor(e,t,i,r){this.$implicit=e,this.ngForOf=t,this.index=i,this.count=r}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},kv=(()=>{class n{_viewContainer;_template;_differs;set ngForOf(t){this._ngForOf=t,this._ngForOfDirty=!0}set ngForTrackBy(t){this._trackByFn=t}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(t,i,r){this._viewContainer=t,this._template=i,this._differs=r}set ngForTemplate(t){t&&(this._template=t)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let t=this._ngForOf;!this._differ&&t&&(this._differ=this._differs.find(t).create(this.ngForTrackBy))}if(this._differ){let t=this._differ.diff(this._ngForOf);t&&this._applyChanges(t)}}_applyChanges(t){let i=this._viewContainer;t.forEachOperation((r,s,o)=>{if(r.previousIndex==null)i.createEmbeddedView(this._template,new yl(r.item,this._ngForOf,-1,-1),o===null?void 0:o);else if(o==null)i.remove(s===null?void 0:s);else if(s!==null){let a=i.get(s);i.move(a,o),Fv(a,r)}});for(let r=0,s=i.length;r<s;r++){let a=i.get(r).context;a.index=r,a.count=s,a.ngForOf=this._ngForOf}t.forEachIdentityChange(r=>{let s=i.get(r.currentIndex);Fv(s,r)})}static ngTemplateContextGuard(t,i){return!0}static \u0275fac=function(i){return new(i||n)(Gi(Lr),Gi(Hi),Gi(up))};static \u0275dir=ll({type:n,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return n})();function Fv(n,e){n.context.$implicit=e.item}var dD=(()=>{class n{_viewContainer;_context=new vl;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(t,i){this._viewContainer=t,this._thenTemplateRef=i}set ngIf(t){this._context.$implicit=this._context.ngIf=t,this._updateView()}set ngIfThen(t){Ov(t,!1),this._thenTemplateRef=t,this._thenViewRef=null,this._updateView()}set ngIfElse(t){Ov(t,!1),this._elseTemplateRef=t,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(t,i){return!0}static \u0275fac=function(i){return new(i||n)(Gi(Lr),Gi(Hi))};static \u0275dir=ll({type:n,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return n})(),vl=class{$implicit=null;ngIf=null};function Ov(n,e){if(n&&!n.createEmbeddedView)throw new Ye(2020,!1)}var fD=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=qh({type:n});static \u0275inj=dc({})}return n})();function hD(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var pp=class{};var fG="browser";var Uv=class n{get profile(){let e=new Date("2003-09-09"),t=Date.now()-e.getTime(),i=new Date(t);return{name:"EMILIANO VOLPINO",title:"FULL STACK DEVELOPER & CREATIVE CODER",age:Math.abs(i.getUTCFullYear()-1970),location:"CABA, ARGENTINA",email:"volpinoemiliano@gmail.com",phone:"+54 11 4989-1159",github:"github.com/Wolpi066",photo:"fotoDePerfil.png",bio:"Soy estudiante de programaci\xF3n con gran inter\xE9s en desarrollarme profesionalmente dentro del \xE1rea IT. Me apasiona programar y aprender nuevas tecnolog\xEDas. Me caracterizo por mi r\xE1pido aprendizaje, la capacidad para resolver problemas de manera creativa y la facilidad para integrarme en equipos de trabajo. Actualmente me encuentro ampliando mis habilidades en desarrollo web y programaci\xF3n."}}get skills(){return[{name:"POO (OOP)",level:95,category:"CORE"},{name:"C++",level:85,category:"CORE"},{name:"HTML5",level:99,category:"FRONTEND"},{name:"CSS3 / SASS",level:99,category:"FRONTEND"},{name:"BOOTSTRAP",level:99,category:"FRONTEND"},{name:"ANGULAR",level:85,category:"FRONTEND"},{name:"JAVASCRIPT",level:80,category:"FRONTEND"},{name:"TYPESCRIPT",level:80,category:"FRONTEND"},{name:"JAVA",level:90,category:"BACKEND"},{name:"PHP",level:85,category:"BACKEND"},{name:"SQL / MYSQL",level:85,category:"BACKEND"},{name:"PYTHON",level:80,category:"BACKEND"},{name:"GIT / GITHUB",level:95,category:"TOOLS"},{name:"ENGLISH",level:95,category:"TOOLS"},{name:"BASH / LINUX",level:90,category:"TOOLS"}]}get studies(){return[{title:"TECNICATURA EN PROGRAMACI\xD3N",institution:"UCES",period:"2025 - 2026",status:"IN_PROGRESS",tags:["C++","Java","POO","TDD (Tau)","HTML5","CSS3","Bootstrap","Angular","PHP","TypeScript","SQL","Raylib"]},{title:"CIBERSEGURIDAD",institution:"CODERHOUSE",period:"2025",status:"COMPLETED",tags:["Ciberseguridad","Ethical Hacking","Redes"]},{title:"DESARROLLO WEB",institution:"CODERHOUSE",period:"2022",status:"COMPLETED",tags:["HTML5","CSS3","SASS","SEO","Bootstrap"],certificate:"certificadoCoderDesarrolloWeb.png"},{title:"JAVASCRIPT",institution:"CODERHOUSE",period:"2022",status:"COMPLETED",tags:["JavaScript","DOM","Events","Async"],certificate:"CertificadoCoder JavaScript.png"},{title:"ANALISTA EN SISTEMAS",institution:"INSTITUTO TECNOL\xD3GICO ORT",period:"2020 - 2022",status:"ABANDONED",tags:["Java","SQL","HTML5","CSS3","SCRUM","UML","BPMN"]}]}get projects(){return[{id:"01",name:"BREATH SHOP",type:"FULL-STACK E-COMMERCE",status:"DEPLOYED",description:"Plataforma de comercio electr\xF3nico robusta con arquitectura MVC. Backend en PHP nativo optimizado con autenticaci\xF3n JWT y base de datos MySQL. Frontend modular SPA construido con Angular 17+ y dise\xF1o responsivo. Incluye gesti\xF3n de stock inteligente y panel de administraci\xF3n.",techStack:["Angular","PHP","MySQL","JWT","MVC"],githubUrl:"https://github.com/Wolpi066/Breath",videoUrl:"heroBreathe.mp4"},{id:"02",name:"EL CISMA",type:"GAME DEVELOPMENT",status:"PROTOTYPE",description:"Videojuego 2D de alto rendimiento desarrollado en C++ utilizando la librer\xEDa gr\xE1fica Raylib. Implementado bajo metodolog\xEDa TDD (Test Driven Development) con Tau para asegurar la estabilidad del motor f\xEDsico y la l\xF3gica del juego.",techStack:["C++","Raylib","CodeBlocks","TDD"],githubUrl:"https://github.com/Wolpi066/ElCisma",videoUrl:"ElCisma.mp4"}]}static \u0275fac=function(t){return new(t||n)};static \u0275prov=ot({token:n,factory:n.\u0275fac,providedIn:"root"})};var pD={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},mD={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},a_=0,rm=1,c_=2;var sm=1,l_=2,ni=3,_i=0,Qt=1,ii=2,ri=0,Hr=1,om=2,am=3,cm=4,u_=5,Ki=100,d_=101,f_=102,h_=103,p_=104,m_=200,g_=201,x_=202,y_=203,zl=204,Gl=205,v_=206,__=207,b_=208,M_=209,E_=210,S_=211,w_=212,T_=213,C_=214,pu=0,mu=1,gu=2,zr=3,xu=4,yu=5,vu=6,_u=7,lm=0,D_=1,A_=2,Mi=0,I_=1,R_=2,N_=3,P_=4,L_=5,F_=6,O_=7;var Op=300,qr=301,Xr=302,bu=303,Mu=304,Ea=306,Wl=1e3,Qn=1001,jl=1002,cn=1003,k_=1004;var Sa=1005;var bn=1006,Eu=1007;var ir=1008;var si=1009,um=1010,dm=1011,to=1012,Su=1013,rr=1014,oi=1015,Yr=1016,wu=1017,Tu=1018,no=1020,fm=35902,hm=35899,pm=1021,mm=1022,Rn=1023,js=1026,io=1027,gm=1028,Cu=1029,Du=1030,Au=1031;var Iu=1033,wa=33776,Ta=33777,Ca=33778,Da=33779,Ru=35840,Nu=35841,Pu=35842,Lu=35843,Fu=36196,Ou=37492,ku=37496,Uu=37808,Bu=37809,Vu=37810,Hu=37811,zu=37812,Gu=37813,Wu=37814,ju=37815,$u=37816,qu=37817,Xu=37818,Yu=37819,Zu=37820,Ju=37821,Ku=36492,Qu=36494,ed=36495,td=36283,nd=36284,id=36285,rd=36286;var ca=2300,$l=2301,Vl=2302,kp=2400,Up=2401,Bp=2402;var U_=3200,B_=3201;var V_=0,H_=1,Ei="",vn="srgb",Gr="srgb-linear",la="linear",ct="srgb";var Br=7680;var Vp=519,z_=512,G_=513,W_=514,xm=515,j_=516,$_=517,q_=518,X_=519,Hp=35044;var ym="300 es",Gn=2e3,ua=2001;function vm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function $s(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Y_(){let n=$s("canvas");return n.style.display="block",n}var Bv={},qs=null;function _m(...n){let e="THREE."+n.shift();qs?qs("log",e,...n):console.log(e,...n)}function Ie(...n){let e="THREE."+n.shift();qs?qs("warn",e,...n):console.warn(e,...n)}function ze(...n){let e="THREE."+n.shift();qs?qs("error",e,...n):console.error(e,...n)}function Xs(...n){let e=n.join(" ");e in Bv||(Bv[e]=!0,Ie(...n))}function Z_(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var ei=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vv=1234567,oa=Math.PI/180,Ys=180/Math.PI;function ro(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function Ge(n,e,t){return Math.max(e,Math.min(t,n))}function bm(n,e){return(n%e+e)%e}function gD(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function xD(n,e,t){return n!==e?(t-n)/(e-n):0}function aa(n,e,t){return(1-t)*n+t*e}function yD(n,e,t,i){return aa(n,e,1-Math.exp(-t*i))}function vD(n,e=1){return e-Math.abs(bm(n,e*2)-e)}function _D(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function bD(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function MD(n,e){return n+Math.floor(Math.random()*(e-n+1))}function ED(n,e){return n+Math.random()*(e-n)}function SD(n){return n*(.5-Math.random())}function wD(n){n!==void 0&&(Vv=n);let e=Vv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function TD(n){return n*oa}function CD(n){return n*Ys}function DD(n){return(n&n-1)===0&&n!==0}function AD(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ID(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function RD(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),h=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,c*d,c*f,a*l);break;case"YZY":n.set(c*f,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*f,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*h,a*l);break;case"YXY":n.set(c*h,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*h,a*u,a*l);break;default:Ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Gs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Kt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ND={DEG2RAD:oa,RAD2DEG:Ys,generateUUID:ro,clamp:Ge,euclideanModulo:bm,mapLinear:gD,inverseLerp:xD,lerp:aa,damp:yD,pingpong:vD,smoothstep:_D,smootherstep:bD,randInt:MD,randFloat:ED,randFloatSpread:SD,seededRandom:wD,degToRad:TD,radToDeg:CD,isPowerOfTwo:DD,ceilPowerOfTwo:AD,floorPowerOfTwo:ID,setQuaternionFromProperEuler:RD,normalize:Kt,denormalize:Gs},et=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},bi=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],h=s[o+1],g=s[o+2],x=s[o+3];if(a<=0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a>=1){e[t+0]=f,e[t+1]=h,e[t+2]=g,e[t+3]=x;return}if(d!==x||c!==f||l!==h||u!==g){let m=c*f+l*h+u*g+d*x;m<0&&(f=-f,h=-h,g=-g,x=-x,m=-m);let p=1-a;if(m<.9995){let M=Math.acos(m),E=Math.sin(M);p=Math.sin(p*M)/E,a=Math.sin(a*M)/E,c=c*p+f*a,l=l*p+h*a,u=u*p+g*a,d=d*p+x*a}else{c=c*p+f*a,l=l*p+h*a,u=u*p+g*a,d=d*p+x*a;let M=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=M,l*=M,u*=M,d*=M}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],f=s[o+1],h=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*h-l*f,e[t+1]=c*g+u*f+l*d-a*h,e[t+2]=l*g+u*h+a*f-c*d,e[t+3]=u*g-a*d-c*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),f=c(i/2),h=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"YZX":this._x=f*u*d+l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d-f*h*g;break;case"XZY":this._x=f*u*d-l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d+f*h*g;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-c)*h,this._y=(s-l)*h,this._z=(o-r)*h}else if(i>a&&i>d){let h=2*Math.sqrt(1+i-a-d);this._w=(u-c)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+l)/h}else if(a>d){let h=2*Math.sqrt(1+a-i-d);this._w=(s-l)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(c+u)/h}else{let h=2*Math.sqrt(1+d-i-a);this._w=(o-r)/h,this._x=(s+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hv.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return mp.copy(this).projectOnVector(e),this.sub(mp)}reflect(e){return this.sub(mp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},mp=new k,Hv=new bi,Ue=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],h=i[5],g=i[8],x=r[0],m=r[3],p=r[6],M=r[1],E=r[4],T=r[7],C=r[2],S=r[5],A=r[8];return s[0]=o*x+a*M+c*C,s[3]=o*m+a*E+c*S,s[6]=o*p+a*T+c*A,s[1]=l*x+u*M+d*C,s[4]=l*m+u*E+d*S,s[7]=l*p+u*T+d*A,s[2]=f*x+h*M+g*C,s[5]=f*m+h*E+g*S,s[8]=f*p+h*T+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,f=a*c-u*s,h=l*s-o*c,g=t*d+i*f+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=d*x,e[1]=(r*l-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=f*x,e[4]=(u*t-r*c)*x,e[5]=(r*s-a*t)*x,e[6]=h*x,e[7]=(i*c-l*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(gp.makeScale(e,t)),this}rotate(e){return this.premultiply(gp.makeRotation(-e)),this}translate(e,t){return this.premultiply(gp.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},gp=new Ue,zv=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gv=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function PD(){let n={enabled:!0,workingColorSpace:Gr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ct&&(r.r=vi(r.r),r.g=vi(r.g),r.b=vi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ct&&(r.r=Ws(r.r),r.g=Ws(r.g),r.b=Ws(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ei?la:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Xs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Xs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Gr]:{primaries:e,whitePoint:i,transfer:la,toXYZ:zv,fromXYZ:Gv,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vn},outputColorSpaceConfig:{drawingBufferColorSpace:vn}},[vn]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:zv,fromXYZ:Gv,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vn}}}),n}var nt=PD();function vi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ws(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Is,ql=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Is===void 0&&(Is=$s("canvas")),Is.width=e.width,Is.height=e.height;let r=Is.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Is}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=$s("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=vi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(vi(t[i]/255)*255):t[i]=vi(t[i]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},LD=0,Zs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:LD++}),this.uuid=ro(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(xp(r[o].image)):s.push(xp(r[o]))}else s=xp(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function xp(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ql.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}var FD=0,yp=new k,ai=(()=>{class n extends ei{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=Qn,s=Qn,o=bn,a=ir,c=Rn,l=si,u=n.DEFAULT_ANISOTROPY,d=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:FD++}),this.uuid=ro(),this.name="",this.source=new Zs(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(yp).x}get height(){return this.source.getSize(yp).y}get depth(){return this.source.getSize(yp).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){Ie(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let s=this[i];if(s===void 0){Ie(`Texture.setValues(): property '${i}' does not exist.`);continue}s&&r&&s.isVector2&&r.isVector2||s&&r&&s.isVector3&&r.isVector3||s&&r&&s.isMatrix3&&r.isMatrix3?s.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Op)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wl:t.x=t.x-Math.floor(t.x);break;case Qn:t.x=t.x<0?0:1;break;case jl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wl:t.y=t.y-Math.floor(t.y);break;case Qn:t.y=t.y<0?0:1;break;case jl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=Op,n.DEFAULT_ANISOTROPY=1,n})(),Tt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],h=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(l+1)/2,T=(h+1)/2,C=(p+1)/2,S=(u+f)/4,A=(d+x)/4,P=(g+m)/4;return E>T&&E>C?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=S/i,s=A/i):T>C?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=S/r,s=P/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=P/s),this.set(i,r,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-x)/M,this.z=(f-u)/M,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this.w=Ge(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this.w=Ge(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Xl=class extends ei{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);let r={width:e,height:t,depth:i.depth},s=new ai(r);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Zs(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ti=class extends Xl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},da=class extends ai{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Yl=class extends ai{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qi=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Vn):Vn.fromBufferAttribute(s,o),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_l.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_l.copy(i.boundingBox)),_l.applyMatrix4(e.matrixWorld),this.union(_l)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(na),bl.subVectors(this.max,na),Rs.subVectors(e.a,na),Ns.subVectors(e.b,na),Ps.subVectors(e.c,na),ji.subVectors(Ns,Rs),$i.subVectors(Ps,Ns),Fr.subVectors(Rs,Ps);let t=[0,-ji.z,ji.y,0,-$i.z,$i.y,0,-Fr.z,Fr.y,ji.z,0,-ji.x,$i.z,0,-$i.x,Fr.z,0,-Fr.x,-ji.y,ji.x,0,-$i.y,$i.x,0,-Fr.y,Fr.x,0];return!vp(t,Rs,Ns,Ps,bl)||(t=[1,0,0,0,1,0,0,0,1],!vp(t,Rs,Ns,Ps,bl))?!1:(Ml.crossVectors(ji,$i),t=[Ml.x,Ml.y,Ml.z],vp(t,Rs,Ns,Ps,bl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},pi=[new k,new k,new k,new k,new k,new k,new k,new k],Vn=new k,_l=new Qi,Rs=new k,Ns=new k,Ps=new k,ji=new k,$i=new k,Fr=new k,na=new k,bl=new k,Ml=new k,Or=new k;function vp(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Or.fromArray(n,s);let a=r.x*Math.abs(Or.x)+r.y*Math.abs(Or.y)+r.z*Math.abs(Or.z),c=e.dot(Or),l=t.dot(Or),u=i.dot(Or);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var OD=new Qi,ia=new k,_p=new k,Wr=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):OD.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ia.subVectors(e,this.center);let t=ia.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ia,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_p.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ia.copy(e.center).add(_p)),this.expandByPoint(ia.copy(e.center).sub(_p))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},mi=new k,bp=new k,El=new k,qi=new k,Mp=new k,Sl=new k,Ep=new k,Js=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,t),mi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){bp.copy(e).add(t).multiplyScalar(.5),El.copy(t).sub(e).normalize(),qi.copy(this.origin).sub(bp);let s=e.distanceTo(t)*.5,o=-this.direction.dot(El),a=qi.dot(this.direction),c=-qi.dot(El),l=qi.lengthSq(),u=Math.abs(1-o*o),d,f,h,g;if(u>0)if(d=o*c-a,f=o*a-c,g=s*u,d>=0)if(f>=-g)if(f<=g){let x=1/u;d*=x,f*=x,h=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-c),s),h=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-s,-c),s),h=f*(f+2*c)+l):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-c),s),h=-d*d+f*(f+2*c)+l);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(bp).addScaledVector(El,f),h}intersectSphere(e,t){mi.subVectors(e.center,this.origin);let i=mi.dot(this.direction),r=mi.dot(mi)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,t,i,r,s){Mp.subVectors(t,e),Sl.subVectors(i,e),Ep.crossVectors(Mp,Sl);let o=this.direction.dot(Ep),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qi.subVectors(this.origin,e);let c=a*this.direction.dot(Sl.crossVectors(qi,Sl));if(c<0)return null;let l=a*this.direction.dot(Mp.cross(qi));if(l<0||c+l>o)return null;let u=-a*qi.dot(Ep);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},At=class n{constructor(e,t,i,r,s,o,a,c,l,u,d,f,h,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,f,h,g,x,m)}set(e,t,i,r,s,o,a,c,l,u,d,f,h,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/Ls.setFromMatrixColumn(e,0).length(),s=1/Ls.setFromMatrixColumn(e,1).length(),o=1/Ls.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=o*u,h=o*d,g=a*u,x=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=h+g*l,t[5]=f-x*l,t[9]=-a*c,t[2]=x-f*l,t[6]=g+h*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*u,h=c*d,g=l*u,x=l*d;t[0]=f+x*a,t[4]=g*a-h,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-g,t[6]=x+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*u,h=c*d,g=l*u,x=l*d;t[0]=f-x*a,t[4]=-o*d,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*u,h=o*d,g=a*u,x=a*d;t[0]=c*u,t[4]=g*l-h,t[8]=f*l+x,t[1]=c*d,t[5]=x*l+f,t[9]=h*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,h=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=x-f*d,t[8]=g*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=h*d+g,t[10]=f-x*d}else if(e.order==="XZY"){let f=o*c,h=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+x,t[5]=o*u,t[9]=h*d-g,t[2]=g*d-h,t[6]=a*u,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kD,e,UD)}lookAt(e,t,i){let r=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Xi.crossVectors(i,xn),Xi.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Xi.crossVectors(i,xn)),Xi.normalize(),wl.crossVectors(xn,Xi),r[0]=Xi.x,r[4]=wl.x,r[8]=xn.x,r[1]=Xi.y,r[5]=wl.y,r[9]=xn.y,r[2]=Xi.z,r[6]=wl.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],h=i[13],g=i[2],x=i[6],m=i[10],p=i[14],M=i[3],E=i[7],T=i[11],C=i[15],S=r[0],A=r[4],P=r[8],b=r[12],v=r[1],R=r[5],F=r[9],V=r[13],W=r[2],G=r[6],q=r[10],K=r[14],z=r[3],ne=r[7],se=r[11],Me=r[15];return s[0]=o*S+a*v+c*W+l*z,s[4]=o*A+a*R+c*G+l*ne,s[8]=o*P+a*F+c*q+l*se,s[12]=o*b+a*V+c*K+l*Me,s[1]=u*S+d*v+f*W+h*z,s[5]=u*A+d*R+f*G+h*ne,s[9]=u*P+d*F+f*q+h*se,s[13]=u*b+d*V+f*K+h*Me,s[2]=g*S+x*v+m*W+p*z,s[6]=g*A+x*R+m*G+p*ne,s[10]=g*P+x*F+m*q+p*se,s[14]=g*b+x*V+m*K+p*Me,s[3]=M*S+E*v+T*W+C*z,s[7]=M*A+E*R+T*G+C*ne,s[11]=M*P+E*F+T*q+C*se,s[15]=M*b+E*V+T*K+C*Me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+s*c*d-r*l*d-s*a*f+i*l*f+r*a*h-i*c*h)+x*(+t*c*h-t*l*f+s*o*f-r*o*h+r*l*u-s*c*u)+m*(+t*l*d-t*a*h-s*o*d+i*o*h+s*a*u-i*l*u)+p*(-r*a*u-t*c*d+t*a*f+r*o*d-i*o*f+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],x=e[13],m=e[14],p=e[15],M=d*m*l-x*f*l+x*c*h-a*m*h-d*c*p+a*f*p,E=g*f*l-u*m*l-g*c*h+o*m*h+u*c*p-o*f*p,T=u*x*l-g*d*l+g*a*h-o*x*h-u*a*p+o*d*p,C=g*d*c-u*x*c-g*a*f+o*x*f+u*a*m-o*d*m,S=t*M+i*E+r*T+s*C;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/S;return e[0]=M*A,e[1]=(x*f*s-d*m*s-x*r*h+i*m*h+d*r*p-i*f*p)*A,e[2]=(a*m*s-x*c*s+x*r*l-i*m*l-a*r*p+i*c*p)*A,e[3]=(d*c*s-a*f*s-d*r*l+i*f*l+a*r*h-i*c*h)*A,e[4]=E*A,e[5]=(u*m*s-g*f*s+g*r*h-t*m*h-u*r*p+t*f*p)*A,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*p-t*c*p)*A,e[7]=(o*f*s-u*c*s+u*r*l-t*f*l-o*r*h+t*c*h)*A,e[8]=T*A,e[9]=(g*d*s-u*x*s-g*i*h+t*x*h+u*i*p-t*d*p)*A,e[10]=(o*x*s-g*a*s+g*i*l-t*x*l-o*i*p+t*a*p)*A,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*h-t*a*h)*A,e[12]=C*A,e[13]=(u*x*r-g*d*r+g*i*f-t*x*f-u*i*m+t*d*m)*A,e[14]=(g*a*r-o*x*r-g*i*c+t*x*c+o*i*m-t*a*m)*A,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*f+t*a*f)*A,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,f=s*l,h=s*u,g=s*d,x=o*u,m=o*d,p=a*d,M=c*l,E=c*u,T=c*d,C=i.x,S=i.y,A=i.z;return r[0]=(1-(x+p))*C,r[1]=(h+T)*C,r[2]=(g-E)*C,r[3]=0,r[4]=(h-T)*S,r[5]=(1-(f+p))*S,r[6]=(m+M)*S,r[7]=0,r[8]=(g+E)*A,r[9]=(m-M)*A,r[10]=(1-(f+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=Ls.set(r[0],r[1],r[2]).length(),o=Ls.set(r[4],r[5],r[6]).length(),a=Ls.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Hn.copy(this);let l=1/s,u=1/o,d=1/a;return Hn.elements[0]*=l,Hn.elements[1]*=l,Hn.elements[2]*=l,Hn.elements[4]*=u,Hn.elements[5]*=u,Hn.elements[6]*=u,Hn.elements[8]*=d,Hn.elements[9]*=d,Hn.elements[10]*=d,t.setFromRotationMatrix(Hn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Gn,c=!1){let l=this.elements,u=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r),g,x;if(c)g=s/(o-s),x=o*s/(o-s);else if(a===Gn)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===ua)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Gn,c=!1){let l=this.elements,u=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),h=-(i+r)/(i-r),g,x;if(c)g=1/(o-s),x=o/(o-s);else if(a===Gn)g=-2/(o-s),x=-(o+s)/(o-s);else if(a===ua)g=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ls=new k,Hn=new At,kD=new k(0,0,0),UD=new k(1,1,1),Xi=new k,wl=new k,xn=new k,Wv=new At,jv=new bi,jr=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],d=s[9],f=s[2],h=s[6],g=s[10];switch(i){case"XYZ":this._y=Math.asin(Ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Ge(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,g),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Wv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wv,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return jv.setFromEuler(this),this.setFromQuaternion(jv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),Ks=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},BD=0,$v=new k,Fs=new bi,gi=new At,Tl=new k,ra=new k,VD=new k,HD=new bi,qv=new k(1,0,0),Xv=new k(0,1,0),Yv=new k(0,0,1),Zv={type:"added"},zD={type:"removed"},Os={type:"childadded",child:null},Sp={type:"childremoved",child:null},Si=(()=>{class n extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:BD++}),this.uuid=ro(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new k,i=new jr,r=new bi,s=new k(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new At},normalMatrix:{value:new Ue}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ks,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Fs.setFromAxisAngle(t,i),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(t,i){return Fs.setFromAxisAngle(t,i),this.quaternion.premultiply(Fs),this}rotateX(t){return this.rotateOnAxis(qv,t)}rotateY(t){return this.rotateOnAxis(Xv,t)}rotateZ(t){return this.rotateOnAxis(Yv,t)}translateOnAxis(t,i){return $v.copy(t).applyQuaternion(this.quaternion),this.position.add($v.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(qv,t)}translateY(t){return this.translateOnAxis(Xv,t)}translateZ(t){return this.translateOnAxis(Yv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Tl.copy(t):Tl.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(ra,Tl,this.up):gi.lookAt(Tl,ra,this.up),this.quaternion.setFromRotationMatrix(gi),s&&(gi.extractRotation(s.matrixWorld),Fs.setFromRotationMatrix(gi),this.quaternion.premultiply(Fs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(ze("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zv),Os.child=t,this.dispatchEvent(Os),Os.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(zD),Sp.child=t,this.dispatchEvent(Sp),Sp.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zv),Os.child=t,this.dispatchEvent(Os),Os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,t,VD),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,HD,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>Xt(zt({},c),{boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(c=>zt({},c)),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let f=l[u];o(t.shapes,f)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),f=a(t.shapes),h=a(t.skeletons),g=a(t.animations),x=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),f.length>0&&(r.shapes=f),h.length>0&&(r.skeletons=h),g.length>0&&(r.animations=g),x.length>0&&(r.nodes=x)}return r.object=s,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new k(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),zn=new k,xi=new k,wp=new k,yi=new k,ks=new k,Us=new k,Jv=new k,Tp=new k,Cp=new k,Dp=new k,Ap=new Tt,Ip=new Tt,Rp=new Tt,Ji=class n{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),zn.subVectors(e,t),r.cross(zn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){zn.subVectors(r,t),xi.subVectors(i,t),wp.subVectors(e,t);let o=zn.dot(zn),a=zn.dot(xi),c=zn.dot(wp),l=xi.dot(xi),u=xi.dot(wp),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;let f=1/d,h=(l*c-a*u)*f,g=(o*u-a*c)*f;return s.set(1-h-g,g,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,yi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,yi.x),c.addScaledVector(o,yi.y),c.addScaledVector(a,yi.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return Ap.setScalar(0),Ip.setScalar(0),Rp.setScalar(0),Ap.fromBufferAttribute(e,t),Ip.fromBufferAttribute(e,i),Rp.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ap,s.x),o.addScaledVector(Ip,s.y),o.addScaledVector(Rp,s.z),o}static isFrontFacing(e,t,i,r){return zn.subVectors(i,t),xi.subVectors(e,t),zn.cross(xi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),zn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;ks.subVectors(r,i),Us.subVectors(s,i),Tp.subVectors(e,i);let c=ks.dot(Tp),l=Us.dot(Tp);if(c<=0&&l<=0)return t.copy(i);Cp.subVectors(e,r);let u=ks.dot(Cp),d=Us.dot(Cp);if(u>=0&&d<=u)return t.copy(r);let f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(ks,o);Dp.subVectors(e,s);let h=ks.dot(Dp),g=Us.dot(Dp);if(g>=0&&h<=g)return t.copy(s);let x=h*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Us,a);let m=u*g-h*d;if(m<=0&&d-u>=0&&h-g>=0)return Jv.subVectors(s,r),a=(d-u)/(d-u+(h-g)),t.copy(r).addScaledVector(Jv,a);let p=1/(m+x+f);return o=x*p,a=f*p,t.copy(i).addScaledVector(ks,o).addScaledVector(Us,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},J_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},Cl={h:0,s:0,l:0};function Np(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var tt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=nt.workingColorSpace){if(e=bm(e,1),t=Ge(t,0,1),i=Ge(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Np(o,s,e+1/3),this.g=Np(o,s,e),this.b=Np(o,s,e-1/3)}return nt.colorSpaceToWorking(this,r),this}setStyle(e,t=vn){function i(s){s!==void 0&&parseFloat(s)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vn){let i=J_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vn){return nt.workingToColorSpace(jt.copy(this),e),Math.round(Ge(jt.r*255,0,255))*65536+Math.round(Ge(jt.g*255,0,255))*256+Math.round(Ge(jt.b*255,0,255))}getHexString(e=vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(jt.copy(this),t);let i=jt.r,r=jt.g,s=jt.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=vn){nt.workingToColorSpace(jt.copy(this),e);let t=jt.r,i=jt.g,r=jt.b;return e!==vn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+t,Yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Yi),e.getHSL(Cl);let i=aa(Yi.h,Cl.h,t),r=aa(Yi.s,Cl.s,t),s=aa(Yi.l,Cl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},jt=new tt;tt.NAMES=J_;var GD=0,er=class extends ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:GD++}),this.uuid=ro(),this.name="",this.type="Material",this.blending=Hr,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zl,this.blendDst=Gl,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Br,this.stencilZFail=Br,this.stencilZPass=Br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hr&&(i.blending=this.blending),this.side!==_i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zl&&(i.blendSrc=this.blendSrc),this.blendDst!==Gl&&(i.blendDst=this.blendDst),this.blendEquation!==Ki&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==zr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Br&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Br&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Br&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},fa=class extends er{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jr,this.combine=lm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Nt=new k,Dl=new et,WD=0,_n=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:WD++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Hp,this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Dl.fromBufferAttribute(this,t),Dl.applyMatrix3(e),this.setXY(t,Dl.x,Dl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Gs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Kt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),i=Kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),i=Kt(i,this.array),r=Kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),i=Kt(i,this.array),r=Kt(r,this.array),s=Kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hp&&(e.usage=this.usage),e}};var ha=class extends _n{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var pa=class extends _n{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Pt=class extends _n{constructor(e,t,i){super(new Float32Array(e),t,i)}},jD=0,An=new At,Pp=new Si,Bs=new k,yn=new Qi,sa=new Qi,Bt=new k,Mn=class n extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jD++}),this.uuid=ro(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vm(e)?pa:ha)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ue().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,i){return An.makeTranslation(e,t,i),this.applyMatrix4(An),this}scale(e,t,i){return An.makeScale(e,t,i),this.applyMatrix4(An),this}lookAt(e){return Pp.lookAt(e),Pp.updateMatrix(),this.applyMatrix4(Pp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Pt(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let i=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];sa.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(yn.min,sa.min),yn.expandByPoint(Bt),Bt.addVectors(yn.max,sa.max),yn.expandByPoint(Bt)):(yn.expandByPoint(sa.min),yn.expandByPoint(sa.max))}yn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Bt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Bt.fromBufferAttribute(a,l),c&&(Bs.fromBufferAttribute(e,l),Bt.add(Bs)),r=Math.max(r,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _n(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<i.count;P++)a[P]=new k,c[P]=new k;let l=new k,u=new k,d=new k,f=new et,h=new et,g=new et,x=new k,m=new k;function p(P,b,v){l.fromBufferAttribute(i,P),u.fromBufferAttribute(i,b),d.fromBufferAttribute(i,v),f.fromBufferAttribute(s,P),h.fromBufferAttribute(s,b),g.fromBufferAttribute(s,v),u.sub(l),d.sub(l),h.sub(f),g.sub(f);let R=1/(h.x*g.y-g.x*h.y);isFinite(R)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(R),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(R),a[P].add(x),a[b].add(x),a[v].add(x),c[P].add(m),c[b].add(m),c[v].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let P=0,b=M.length;P<b;++P){let v=M[P],R=v.start,F=v.count;for(let V=R,W=R+F;V<W;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let E=new k,T=new k,C=new k,S=new k;function A(P){C.fromBufferAttribute(r,P),S.copy(C);let b=a[P];E.copy(b),E.sub(C.multiplyScalar(C.dot(b))).normalize(),T.crossVectors(S,b);let R=T.dot(c[P])<0?-1:1;o.setXYZW(P,E.x,E.y,E.z,R)}for(let P=0,b=M.length;P<b;++P){let v=M[P],R=v.start,F=v.count;for(let V=R,W=R+F;V<W;V+=3)A(e.getX(V+0)),A(e.getX(V+1)),A(e.getX(V+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _n(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let r=new k,s=new k,o=new k,a=new k,c=new k,l=new k,u=new k,d=new k;if(e)for(let f=0,h=e.count;f<h;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u),h=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?h=c[x]*a.data.stride+a.offset:h=c[x]*u;for(let p=0;p<u;p++)f[g++]=l[h++]}return new _n(f,u,d)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){let f=l[u],h=e(f,i);c.push(h)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){let h=l[d];u.push(h.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],d=s[l];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kv=new At,kr=new Js,Al=new Wr,Qv=new k,Il=new k,Rl=new k,Nl=new k,Lp=new k,Pl=new k,e_=new k,Ll=new k,Wn=class extends Si{constructor(e=new Mn,t=new fa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Pl.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],d=s[c];u!==0&&(Lp.fromBufferAttribute(d,e),o?Pl.addScaledVector(Lp,u):Pl.addScaledVector(Lp.sub(t),u))}t.add(Pl)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Al.copy(i.boundingSphere),Al.applyMatrix4(s),kr.copy(e.ray).recast(e.near),!(Al.containsPoint(kr.origin)===!1&&(kr.intersectSphere(Al,Qv)===null||kr.origin.distanceToSquared(Qv)>(e.far-e.near)**2))&&(Kv.copy(s).invert(),kr.copy(e.ray).applyMatrix4(Kv),!(i.boundingBox!==null&&kr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,kr)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],M=Math.max(m.start,h.start),E=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let T=M,C=E;T<C;T+=3){let S=a.getX(T),A=a.getX(T+1),P=a.getX(T+2);r=Fl(this,p,e,i,l,u,d,S,A,P),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let m=g,p=x;m<p;m+=3){let M=a.getX(m),E=a.getX(m+1),T=a.getX(m+2);r=Fl(this,o,e,i,l,u,d,M,E,T),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],M=Math.max(m.start,h.start),E=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let T=M,C=E;T<C;T+=3){let S=T,A=T+1,P=T+2;r=Fl(this,p,e,i,l,u,d,S,A,P),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),x=Math.min(c.count,h.start+h.count);for(let m=g,p=x;m<p;m+=3){let M=m,E=m+1,T=m+2;r=Fl(this,o,e,i,l,u,d,M,E,T),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function $D(n,e,t,i,r,s,o,a){let c;if(e.side===Qt?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===_i,a),c===null)return null;Ll.copy(a),Ll.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Ll);return l<t.near||l>t.far?null:{distance:l,point:Ll.clone(),object:n}}function Fl(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,Il),n.getVertexPosition(c,Rl),n.getVertexPosition(l,Nl);let u=$D(n,e,t,i,Il,Rl,Nl,e_);if(u){let d=new k;Ji.getBarycoord(e_,Il,Rl,Nl,d),r&&(u.uv=Ji.getInterpolatedAttribute(r,a,c,l,d,new et)),s&&(u.uv1=Ji.getInterpolatedAttribute(s,a,c,l,d,new et)),o&&(u.normal=Ji.getInterpolatedAttribute(o,a,c,l,d,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new k,materialIndex:0};Ji.getNormal(Il,Rl,Nl,f.normal),u.face=f,u.barycoord=d}return u}var Qs=class n extends Mn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],d=[],f=0,h=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Pt(l,3)),this.setAttribute("normal",new Pt(u,3)),this.setAttribute("uv",new Pt(d,2));function g(x,m,p,M,E,T,C,S,A,P,b){let v=T/A,R=C/P,F=T/2,V=C/2,W=S/2,G=A+1,q=P+1,K=0,z=0,ne=new k;for(let se=0;se<q;se++){let Me=se*R-V;for(let Je=0;Je<G;Je++){let lt=Je*v-F;ne[x]=lt*M,ne[m]=Me*E,ne[p]=W,l.push(ne.x,ne.y,ne.z),ne[x]=0,ne[m]=0,ne[p]=S>0?1:-1,u.push(ne.x,ne.y,ne.z),d.push(Je/A),d.push(1-se/P),K+=1}}for(let se=0;se<P;se++)for(let Me=0;Me<A;Me++){let Je=f+Me+G*se,lt=f+Me+G*(se+1),ht=f+(Me+1)+G*(se+1),pt=f+(Me+1)+G*se;c.push(Je,lt,pt),c.push(lt,ht,pt),z+=6}a.addGroup(h,z,b),h+=z,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Zr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function $t(n){let e={};for(let t=0;t<n.length;t++){let i=Zr(n[t]);for(let r in i)e[r]=i[r]}return e}function qD(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Mm(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}var K_={clone:Zr,merge:$t},XD=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,YD=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,In=class extends er{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=XD,this.fragmentShader=YD,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zr(e.uniforms),this.uniformsGroups=qD(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},ma=class extends Si{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Zi=new k,t_=new et,n_=new et,an=class extends ma{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ys*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ys*2*Math.atan(Math.tan(oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z)}getViewSize(e,t){return this.getViewBounds(e,t_,n_),t.subVectors(n_,t_)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(oa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Vs=-90,Hs=1,Zl=class extends Si{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new an(Vs,Hs,e,t);r.layers=this.layers,this.add(r);let s=new an(Vs,Hs,e,t);s.layers=this.layers,this.add(s);let o=new an(Vs,Hs,e,t);o.layers=this.layers,this.add(o);let a=new an(Vs,Hs,e,t);a.layers=this.layers,this.add(a);let c=new an(Vs,Hs,e,t);c.layers=this.layers,this.add(c);let l=new an(Vs,Hs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===Gn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ua)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ga=class extends ai{constructor(e=[],t=qr,i,r,s,o,a,c,l,u){super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Jl=class extends ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ga(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Qs(5,5,5),s=new In({name:"CubemapFromEquirect",uniforms:Zr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:ri});s.uniforms.tEquirect.value=t;let o=new Wn(r,s),a=t.minFilter;return t.minFilter===ir&&(t.minFilter=bn),new Zl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},Vr=class extends Si{constructor(){super(),this.isGroup=!0,this.type="Group"}},ZD={type:"move"},eo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;l.inputState.pinching&&f>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ZD)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Vr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},zp=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new tt(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Gp=class extends Si{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jr,this.environmentIntensity=1,this.environmentRotation=new jr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Kl=class extends ai{constructor(e=null,t=1,i=1,r,s,o,a,c,l=cn,u=cn,d,f){super(null,o,a,c,l,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fp=new k,JD=new k,KD=new Ue,Kn=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Fp.subVectors(i,t).cross(JD.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Fp),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||KD.getNormalMatrix(e),r=this.coplanarPoint(Fp).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ur=new Wr,QD=new et(.5,.5),Ol=new k,xa=class{constructor(e=new Kn,t=new Kn,i=new Kn,r=new Kn,s=new Kn,o=new Kn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Gn,i=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],d=s[5],f=s[6],h=s[7],g=s[8],x=s[9],m=s[10],p=s[11],M=s[12],E=s[13],T=s[14],C=s[15];if(r[0].setComponents(l-o,h-u,p-g,C-M).normalize(),r[1].setComponents(l+o,h+u,p+g,C+M).normalize(),r[2].setComponents(l+a,h+d,p+x,C+E).normalize(),r[3].setComponents(l-a,h-d,p-x,C-E).normalize(),i)r[4].setComponents(c,f,m,T).normalize(),r[5].setComponents(l-c,h-f,p-m,C-T).normalize();else if(r[4].setComponents(l-c,h-f,p-m,C-T).normalize(),t===Gn)r[5].setComponents(l+c,h+f,p+m,C+T).normalize();else if(t===ua)r[5].setComponents(c,f,m,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ur.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(e){Ur.center.set(0,0,0);let t=QD.distanceTo(e.center);return Ur.radius=.7071067811865476+t,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Ol.x=r.normal.x>0?e.max.x:e.min.x,Ol.y=r.normal.y>0?e.max.y:e.min.y,Ol.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ol)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ql=class extends er{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},i_=new At,Wp=new Js,kl=new Wr,Ul=new k,jp=class extends Si{constructor(e=new Mn,t=new Ql){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),kl.copy(i.boundingSphere),kl.applyMatrix4(r),kl.radius+=s,e.ray.intersectsSphere(kl)===!1)return;i_.copy(r).invert(),Wp.copy(e.ray).applyMatrix4(i_);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){let f=Math.max(0,o.start),h=Math.min(l.count,o.start+o.count);for(let g=f,x=h;g<x;g++){let m=l.getX(g);Ul.fromBufferAttribute(d,m),r_(Ul,m,c,r,e,t,this)}}else{let f=Math.max(0,o.start),h=Math.min(d.count,o.start+o.count);for(let g=f,x=h;g<x;g++)Ul.fromBufferAttribute(d,g),r_(Ul,g,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function r_(n,e,t,i,r,s,o){let a=Wp.distanceSqToPoint(n);if(a<t){let c=new k;Wp.closestPointToPoint(n,c),c.applyMatrix4(i);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ya=class extends ai{constructor(e,t,i=rr,r,s,o,a=cn,c=cn,l,u=js,d=1){if(u!==js&&u!==io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},va=class extends ai{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var $p=class n extends Mn{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let u=[],d=[],f=[],h=[],g=0,x=[],m=i/2,p=0;M(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new Pt(d,3)),this.setAttribute("normal",new Pt(f,3)),this.setAttribute("uv",new Pt(h,2));function M(){let T=new k,C=new k,S=0,A=(t-e)/i;for(let P=0;P<=s;P++){let b=[],v=P/s,R=v*(t-e)+e;for(let F=0;F<=r;F++){let V=F/r,W=V*c+a,G=Math.sin(W),q=Math.cos(W);C.x=R*G,C.y=-v*i+m,C.z=R*q,d.push(C.x,C.y,C.z),T.set(G,A,q).normalize(),f.push(T.x,T.y,T.z),h.push(V,1-v),b.push(g++)}x.push(b)}for(let P=0;P<r;P++)for(let b=0;b<s;b++){let v=x[b][P],R=x[b+1][P],F=x[b+1][P+1],V=x[b][P+1];(e>0||b!==0)&&(u.push(v,R,V),S+=3),(t>0||b!==s-1)&&(u.push(R,F,V),S+=3)}l.addGroup(p,S,0),p+=S}function E(T){let C=g,S=new et,A=new k,P=0,b=T===!0?e:t,v=T===!0?1:-1;for(let F=1;F<=r;F++)d.push(0,m*v,0),f.push(0,v,0),h.push(.5,.5),g++;let R=g;for(let F=0;F<=r;F++){let W=F/r*c+a,G=Math.cos(W),q=Math.sin(W);A.x=b*q,A.y=m*v,A.z=b*G,d.push(A.x,A.y,A.z),f.push(0,v,0),S.x=G*.5+.5,S.y=q*.5*v+.5,h.push(S.x,S.y),g++}for(let F=0;F<r;F++){let V=C+F,W=R+F;T===!0?u.push(W,W+1,V):u.push(W+1,W,V),P+=3}l.addGroup(p,P,T===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var _a=class n extends Mn{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],o=[];a(r),l(i),u(),this.setAttribute("position",new Pt(s,3)),this.setAttribute("normal",new Pt(s.slice(),3)),this.setAttribute("uv",new Pt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let E=new k,T=new k,C=new k;for(let S=0;S<t.length;S+=3)h(t[S+0],E),h(t[S+1],T),h(t[S+2],C),c(E,T,C,M)}function c(M,E,T,C){let S=C+1,A=[];for(let P=0;P<=S;P++){A[P]=[];let b=M.clone().lerp(T,P/S),v=E.clone().lerp(T,P/S),R=S-P;for(let F=0;F<=R;F++)F===0&&P===S?A[P][F]=b:A[P][F]=b.clone().lerp(v,F/R)}for(let P=0;P<S;P++)for(let b=0;b<2*(S-P)-1;b++){let v=Math.floor(b/2);b%2===0?(f(A[P][v+1]),f(A[P+1][v]),f(A[P][v])):(f(A[P][v+1]),f(A[P+1][v+1]),f(A[P+1][v]))}}function l(M){let E=new k;for(let T=0;T<s.length;T+=3)E.x=s[T+0],E.y=s[T+1],E.z=s[T+2],E.normalize().multiplyScalar(M),s[T+0]=E.x,s[T+1]=E.y,s[T+2]=E.z}function u(){let M=new k;for(let E=0;E<s.length;E+=3){M.x=s[E+0],M.y=s[E+1],M.z=s[E+2];let T=m(M)/2/Math.PI+.5,C=p(M)/Math.PI+.5;o.push(T,1-C)}g(),d()}function d(){for(let M=0;M<o.length;M+=6){let E=o[M+0],T=o[M+2],C=o[M+4],S=Math.max(E,T,C),A=Math.min(E,T,C);S>.9&&A<.1&&(E<.2&&(o[M+0]+=1),T<.2&&(o[M+2]+=1),C<.2&&(o[M+4]+=1))}}function f(M){s.push(M.x,M.y,M.z)}function h(M,E){let T=M*3;E.x=e[T+0],E.y=e[T+1],E.z=e[T+2]}function g(){let M=new k,E=new k,T=new k,C=new k,S=new et,A=new et,P=new et;for(let b=0,v=0;b<s.length;b+=9,v+=6){M.set(s[b+0],s[b+1],s[b+2]),E.set(s[b+3],s[b+4],s[b+5]),T.set(s[b+6],s[b+7],s[b+8]),S.set(o[v+0],o[v+1]),A.set(o[v+2],o[v+3]),P.set(o[v+4],o[v+5]),C.copy(M).add(E).add(T).divideScalar(3);let R=m(C);x(S,v+0,M,R),x(A,v+2,E,R),x(P,v+4,T,R)}}function x(M,E,T,C){C<0&&M.x===1&&(o[E]=M.x-1),T.x===0&&T.z===0&&(o[E]=C/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var qp=class n extends _a{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Xp=class n extends _a{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},ba=class n extends Mn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,f=t/c,h=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let M=p*f-o;for(let E=0;E<l;E++){let T=E*d-s;g.push(T,-M,0),x.push(0,0,1),m.push(E/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){let E=M+l*p,T=M+l*(p+1),C=M+1+l*(p+1),S=M+1+l*p;h.push(E,T,S),h.push(T,C,S)}this.setIndex(h),this.setAttribute("position",new Pt(g,3)),this.setAttribute("normal",new Pt(x,3)),this.setAttribute("uv",new Pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Yp=class n extends Mn{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);let a=[],c=[],l=[],u=[],d=e,f=(t-e)/r,h=new k,g=new et;for(let x=0;x<=r;x++){for(let m=0;m<=i;m++){let p=s+m/i*o;h.x=d*Math.cos(p),h.y=d*Math.sin(p),c.push(h.x,h.y,h.z),l.push(0,0,1),g.x=(h.x/t+1)/2,g.y=(h.y/t+1)/2,u.push(g.x,g.y)}d+=f}for(let x=0;x<r;x++){let m=x*(i+1);for(let p=0;p<i;p++){let M=p+m,E=M,T=M+i+1,C=M+i+2,S=M+1;a.push(E,T,S),a.push(T,C,S)}}this.setIndex(a),this.setAttribute("position",new Pt(c,3)),this.setAttribute("normal",new Pt(l,3)),this.setAttribute("uv",new Pt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var eu=class extends er{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=U_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},tu=class extends er{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Bl(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function eA(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var $r=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},nu=class extends $r{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kp,endingEnd:kp}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Up:s=e,a=2*t-i;break;case Bp:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Up:o=e,c=2*i-t;break;case Bp:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,g=(i-t)/(r-t),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,M=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,E=(-1-h)*m+(1.5+h)*x+.5*g,T=h*m-h*x;for(let C=0;C!==a;++C)s[C]=p*o[u+C]+M*o[l+C]+E*o[c+C]+T*o[d+C];return s}},iu=class extends $r{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)s[f]=o[l+f]*d+o[c+f]*u;return s}},ru=class extends $r{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},En=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Bl(t,this.TimeBufferType),this.values=Bl(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Bl(e.times,Array),values:Bl(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ru(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new iu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new nu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ca:t=this.InterpolantFactoryMethodDiscrete;break;case $l:t=this.InterpolantFactoryMethodLinear;break;case Vl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ie("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ca;case this.InterpolantFactoryMethodLinear:return $l;case this.InterpolantFactoryMethodSmooth:return Vl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(ze("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){ze("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){ze("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&eA(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){ze("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Vl,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*i,f=d-i,h=d+i;for(let g=0;g!==i;++g){let x=t[d+g];if(x!==t[f+g]||x!==t[h+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*i,f=o*i;for(let h=0;h!==i;++h)t[f+h]=t[d+h]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};En.prototype.ValueTypeName="";En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=$l;var tr=class extends En{constructor(e,t,i){super(e,t,i)}};tr.prototype.ValueTypeName="bool";tr.prototype.ValueBufferType=Array;tr.prototype.DefaultInterpolation=ca;tr.prototype.InterpolantFactoryMethodLinear=void 0;tr.prototype.InterpolantFactoryMethodSmooth=void 0;var su=class extends En{constructor(e,t,i,r){super(e,t,i,r)}};su.prototype.ValueTypeName="color";var ou=class extends En{constructor(e,t,i,r){super(e,t,i,r)}};ou.prototype.ValueTypeName="number";var au=class extends $r{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)bi.slerpFlat(s,0,o,l-a,o,l,c);return s}},Ma=class extends En{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new au(this.times,this.values,this.getValueSize(),e)}};Ma.prototype.ValueTypeName="quaternion";Ma.prototype.InterpolantFactoryMethodSmooth=void 0;var nr=class extends En{constructor(e,t,i){super(e,t,i)}};nr.prototype.ValueTypeName="string";nr.prototype.ValueBufferType=Array;nr.prototype.DefaultInterpolation=ca;nr.prototype.InterpolantFactoryMethodLinear=void 0;nr.prototype.InterpolantFactoryMethodSmooth=void 0;var cu=class extends En{constructor(e,t,i,r){super(e,t,i,r)}};cu.prototype.ValueTypeName="vector";var Hl={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},lu=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=l.length;d<f;d+=2){let h=l[d],g=l[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Q_=new lu,Em=(()=>{class n{constructor(t){this.manager=t!==void 0?t:Q_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){let r=this;return new Promise(function(s,o){r.load(t,s,i,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}return n.DEFAULT_MATERIAL_NAME="__DEFAULT",n})();var zs=new WeakMap,uu=class extends Em{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=Hl.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let d=zs.get(o);d===void 0&&(d=[],zs.set(o,d)),d.push({onLoad:t,onError:r})}return o}let a=$s("img");function c(){u(),t&&t(this);let d=zs.get(this)||[];for(let f=0;f<d.length;f++){let h=d[f];h.onLoad&&h.onLoad(this)}zs.delete(this),s.manager.itemEnd(e)}function l(d){u(),r&&r(d),Hl.remove(`image:${e}`);let f=zs.get(this)||[];for(let h=0;h<f.length;h++){let g=f[h];g.onError&&g.onError(d)}zs.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Hl.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}};var Zp=class extends Em{constructor(e){super(e)}load(e,t,i,r){let s=new ai,o=new uu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},du=class extends Si{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var fu=class extends ma{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Jp=class extends du{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var hu=class extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Kp=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Sm="\\[\\]\\.:\\/",tA=new RegExp("["+Sm+"]","g"),wm="[^"+Sm+"]",nA="[^"+Sm.replace("\\.","")+"]",iA=/((?:WC+[\/:])*)/.source.replace("WC",wm),rA=/(WCOD+)?/.source.replace("WCOD",nA),sA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wm),oA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wm),aA=new RegExp("^"+iA+rA+sA+oA+"$"),cA=["material","materials","bones","map"],Qp=class{constructor(e,t,i){let r=i||wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},wt=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(tA,"")}static parseTrackName(t){let i=aA.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);cA.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=i.nodeName;ze("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=Qp,n})();wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _G=new Float32Array(1);var s_=new At,em=class{constructor(e,t,i=0,r=1/0){this.ray=new Js(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Ks,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ze("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return s_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(s_),this}intersectObject(e,t=!0,i=[]){return tm(e,this,i,t),i.sort(o_),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)tm(e[r],this,i,t);return i.sort(o_),i}};function o_(n,e){return n.distance-e.distance}function tm(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let s=n.children;for(let o=0,a=s.length;o<a;o++)tm(s[o],e,t,!0)}}var nm=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ge(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ge(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var im=class extends ei{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ie("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Tm(n,e,t,i){let r=lA(i);switch(t){case pm:return n*e;case gm:return n*e/r.components*r.byteLength;case Cu:return n*e/r.components*r.byteLength;case Du:return n*e*2/r.components*r.byteLength;case Au:return n*e*2/r.components*r.byteLength;case mm:return n*e*3/r.components*r.byteLength;case Rn:return n*e*4/r.components*r.byteLength;case Iu:return n*e*4/r.components*r.byteLength;case wa:case Ta:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ca:case Da:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Nu:case Lu:return Math.max(n,16)*Math.max(e,8)/4;case Ru:case Pu:return Math.max(n,8)*Math.max(e,8)/2;case Fu:case Ou:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ku:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Uu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Vu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Hu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case zu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Gu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Wu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ju:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case $u:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case qu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Xu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Yu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Zu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ju:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ku:case Qu:case ed:return Math.ceil(n/4)*Math.ceil(e/4)*16;case td:case nd:return Math.ceil(n/4)*Math.ceil(e/4)*8;case id:case rd:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function lA(n){switch(n){case si:case um:return{byteLength:1,components:1};case to:case dm:case Yr:return{byteLength:2,components:1};case wu:case Tu:return{byteLength:2,components:4};case rr:case Su:case oi:return{byteLength:4,components:1};case fm:case hm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"181"}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="181");function Eb(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function dA(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=n.SHORT;else if(l instanceof Uint32Array)h=n.UNSIGNED_INT;else if(l instanceof Int32Array)h=n.INT;else if(l instanceof Int8Array)h=n.BYTE;else if(l instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){let u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){let g=d[f],x=d[h];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,d[f]=x)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){let x=d[h];n.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var fA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_A=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,bA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,MA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,EA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,SA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,TA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,CA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,DA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,AA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,IA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,RA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,NA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,PA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,LA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,FA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,OA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,UA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,BA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,VA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zA="gl_FragColor = linearToOutputTexel( gl_FragColor );",GA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,WA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,jA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,$A=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,XA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,YA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ZA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,JA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,KA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,QA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,eI=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tI=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nI=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iI=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,rI=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sI=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oI=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,aI=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cI=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lI=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,uI=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dI=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fI=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hI=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pI=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mI=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gI=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xI=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yI=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vI=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_I=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bI=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MI=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,EI=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,SI=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wI=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TI=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CI=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,DI=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AI=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,II=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,RI=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NI=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PI=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,LI=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,FI=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,OI=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kI=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,UI=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,BI=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,VI=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,HI=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zI=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,GI=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,WI=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jI=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$I=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qI=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,XI=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,YI=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ZI=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,JI=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,KI=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,QI=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,e1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,t1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,n1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,i1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,r1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,s1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,o1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,a1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,c1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,l1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,u1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,d1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,y1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,v1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,b1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,M1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,S1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,w1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,T1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,I1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,N1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,P1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,O1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,V1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,H1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,G1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,W1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:fA,alphahash_pars_fragment:hA,alphamap_fragment:pA,alphamap_pars_fragment:mA,alphatest_fragment:gA,alphatest_pars_fragment:xA,aomap_fragment:yA,aomap_pars_fragment:vA,batching_pars_vertex:_A,batching_vertex:bA,begin_vertex:MA,beginnormal_vertex:EA,bsdfs:SA,iridescence_fragment:wA,bumpmap_pars_fragment:TA,clipping_planes_fragment:CA,clipping_planes_pars_fragment:DA,clipping_planes_pars_vertex:AA,clipping_planes_vertex:IA,color_fragment:RA,color_pars_fragment:NA,color_pars_vertex:PA,color_vertex:LA,common:FA,cube_uv_reflection_fragment:OA,defaultnormal_vertex:kA,displacementmap_pars_vertex:UA,displacementmap_vertex:BA,emissivemap_fragment:VA,emissivemap_pars_fragment:HA,colorspace_fragment:zA,colorspace_pars_fragment:GA,envmap_fragment:WA,envmap_common_pars_fragment:jA,envmap_pars_fragment:$A,envmap_pars_vertex:qA,envmap_physical_pars_fragment:rI,envmap_vertex:XA,fog_vertex:YA,fog_pars_vertex:ZA,fog_fragment:JA,fog_pars_fragment:KA,gradientmap_pars_fragment:QA,lightmap_pars_fragment:eI,lights_lambert_fragment:tI,lights_lambert_pars_fragment:nI,lights_pars_begin:iI,lights_toon_fragment:sI,lights_toon_pars_fragment:oI,lights_phong_fragment:aI,lights_phong_pars_fragment:cI,lights_physical_fragment:lI,lights_physical_pars_fragment:uI,lights_fragment_begin:dI,lights_fragment_maps:fI,lights_fragment_end:hI,logdepthbuf_fragment:pI,logdepthbuf_pars_fragment:mI,logdepthbuf_pars_vertex:gI,logdepthbuf_vertex:xI,map_fragment:yI,map_pars_fragment:vI,map_particle_fragment:_I,map_particle_pars_fragment:bI,metalnessmap_fragment:MI,metalnessmap_pars_fragment:EI,morphinstance_vertex:SI,morphcolor_vertex:wI,morphnormal_vertex:TI,morphtarget_pars_vertex:CI,morphtarget_vertex:DI,normal_fragment_begin:AI,normal_fragment_maps:II,normal_pars_fragment:RI,normal_pars_vertex:NI,normal_vertex:PI,normalmap_pars_fragment:LI,clearcoat_normal_fragment_begin:FI,clearcoat_normal_fragment_maps:OI,clearcoat_pars_fragment:kI,iridescence_pars_fragment:UI,opaque_fragment:BI,packing:VI,premultiplied_alpha_fragment:HI,project_vertex:zI,dithering_fragment:GI,dithering_pars_fragment:WI,roughnessmap_fragment:jI,roughnessmap_pars_fragment:$I,shadowmap_pars_fragment:qI,shadowmap_pars_vertex:XI,shadowmap_vertex:YI,shadowmask_pars_fragment:ZI,skinbase_vertex:JI,skinning_pars_vertex:KI,skinning_vertex:QI,skinnormal_vertex:e1,specularmap_fragment:t1,specularmap_pars_fragment:n1,tonemapping_fragment:i1,tonemapping_pars_fragment:r1,transmission_fragment:s1,transmission_pars_fragment:o1,uv_pars_fragment:a1,uv_pars_vertex:c1,uv_vertex:l1,worldpos_vertex:u1,background_vert:d1,background_frag:f1,backgroundCube_vert:h1,backgroundCube_frag:p1,cube_vert:m1,cube_frag:g1,depth_vert:x1,depth_frag:y1,distanceRGBA_vert:v1,distanceRGBA_frag:_1,equirect_vert:b1,equirect_frag:M1,linedashed_vert:E1,linedashed_frag:S1,meshbasic_vert:w1,meshbasic_frag:T1,meshlambert_vert:C1,meshlambert_frag:D1,meshmatcap_vert:A1,meshmatcap_frag:I1,meshnormal_vert:R1,meshnormal_frag:N1,meshphong_vert:P1,meshphong_frag:L1,meshphysical_vert:F1,meshphysical_frag:O1,meshtoon_vert:k1,meshtoon_frag:U1,points_vert:B1,points_frag:V1,shadow_vert:H1,shadow_frag:z1,sprite_vert:G1,sprite_frag:W1},oe={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},ci={basic:{uniforms:$t([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:$t([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:$t([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:$t([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:$t([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:$t([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:$t([oe.points,oe.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:$t([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:$t([oe.common,oe.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:$t([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:$t([oe.sprite,oe.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:$t([oe.common,oe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:$t([oe.lights,oe.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};ci.physical={uniforms:$t([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var sd={r:0,b:0,g:0},Jr=new jr,j1=new At;function $1(n,e,t,i,r,s,o){let a=new tt(0),c=s===!0?0:1,l,u,d=null,f=0,h=null;function g(E){let T=E.isScene===!0?E.background:null;return T&&T.isTexture&&(T=(E.backgroundBlurriness>0?t:e).get(T)),T}function x(E){let T=!1,C=g(E);C===null?p(a,c):C&&C.isColor&&(p(C,1),T=!0);let S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,T){let C=g(T);C&&(C.isCubeTexture||C.mapping===Ea)?(u===void 0&&(u=new Wn(new Qs(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:Zr(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Jr.copy(T.backgroundRotation),Jr.x*=-1,Jr.y*=-1,Jr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Jr.y*=-1,Jr.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(j1.makeRotationFromEuler(Jr)),u.material.toneMapped=nt.getTransfer(C.colorSpace)!==ct,(d!==C||f!==C.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=C,f=C.version,h=n.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(l===void 0&&(l=new Wn(new ba(2,2),new In({name:"BackgroundMaterial",uniforms:Zr(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=C,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=nt.getTransfer(C.colorSpace)!==ct,C.matrixAutoUpdate===!0&&C.updateMatrix(),l.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||f!==C.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,d=C,f=C.version,h=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function p(E,T){E.getRGB(sd,Mm(n)),i.buffers.color.setClear(sd.r,sd.g,sd.b,T,o)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,T=1){a.set(E),c=T,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,p(a,c)},render:x,addToRenderList:m,dispose:M}}function q1(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(v,R,F,V,W){let G=!1,q=d(V,F,R);s!==q&&(s=q,l(s.object)),G=h(v,V,F,W),G&&g(v,V,F,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,T(v,R,F,V),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return n.createVertexArray()}function l(v){return n.bindVertexArray(v)}function u(v){return n.deleteVertexArray(v)}function d(v,R,F){let V=F.wireframe===!0,W=i[v.id];W===void 0&&(W={},i[v.id]=W);let G=W[R.id];G===void 0&&(G={},W[R.id]=G);let q=G[V];return q===void 0&&(q=f(c()),G[V]=q),q}function f(v){let R=[],F=[],V=[];for(let W=0;W<t;W++)R[W]=0,F[W]=0,V[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:F,attributeDivisors:V,object:v,attributes:{},index:null}}function h(v,R,F,V){let W=s.attributes,G=R.attributes,q=0,K=F.getAttributes();for(let z in K)if(K[z].location>=0){let se=W[z],Me=G[z];if(Me===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(Me=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(Me=v.instanceColor)),se===void 0||se.attribute!==Me||Me&&se.data!==Me.data)return!0;q++}return s.attributesNum!==q||s.index!==V}function g(v,R,F,V){let W={},G=R.attributes,q=0,K=F.getAttributes();for(let z in K)if(K[z].location>=0){let se=G[z];se===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(se=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(se=v.instanceColor));let Me={};Me.attribute=se,se&&se.data&&(Me.data=se.data),W[z]=Me,q++}s.attributes=W,s.attributesNum=q,s.index=V}function x(){let v=s.newAttributes;for(let R=0,F=v.length;R<F;R++)v[R]=0}function m(v){p(v,0)}function p(v,R){let F=s.newAttributes,V=s.enabledAttributes,W=s.attributeDivisors;F[v]=1,V[v]===0&&(n.enableVertexAttribArray(v),V[v]=1),W[v]!==R&&(n.vertexAttribDivisor(v,R),W[v]=R)}function M(){let v=s.newAttributes,R=s.enabledAttributes;for(let F=0,V=R.length;F<V;F++)R[F]!==v[F]&&(n.disableVertexAttribArray(F),R[F]=0)}function E(v,R,F,V,W,G,q){q===!0?n.vertexAttribIPointer(v,R,F,W,G):n.vertexAttribPointer(v,R,F,V,W,G)}function T(v,R,F,V){x();let W=V.attributes,G=F.getAttributes(),q=R.defaultAttributeValues;for(let K in G){let z=G[K];if(z.location>=0){let ne=W[K];if(ne===void 0&&(K==="instanceMatrix"&&v.instanceMatrix&&(ne=v.instanceMatrix),K==="instanceColor"&&v.instanceColor&&(ne=v.instanceColor)),ne!==void 0){let se=ne.normalized,Me=ne.itemSize,Je=e.get(ne);if(Je===void 0)continue;let lt=Je.buffer,ht=Je.type,pt=Je.bytesPerElement,$=ht===n.INT||ht===n.UNSIGNED_INT||ne.gpuType===Su;if(ne.isInterleavedBufferAttribute){let Z=ne.data,fe=Z.stride,ke=ne.offset;if(Z.isInstancedInterleavedBuffer){for(let ve=0;ve<z.locationSize;ve++)p(z.location+ve,Z.meshPerAttribute);v.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ve=0;ve<z.locationSize;ve++)m(z.location+ve);n.bindBuffer(n.ARRAY_BUFFER,lt);for(let ve=0;ve<z.locationSize;ve++)E(z.location+ve,Me/z.locationSize,ht,se,fe*pt,(ke+Me/z.locationSize*ve)*pt,$)}else{if(ne.isInstancedBufferAttribute){for(let Z=0;Z<z.locationSize;Z++)p(z.location+Z,ne.meshPerAttribute);v.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Z=0;Z<z.locationSize;Z++)m(z.location+Z);n.bindBuffer(n.ARRAY_BUFFER,lt);for(let Z=0;Z<z.locationSize;Z++)E(z.location+Z,Me/z.locationSize,ht,se,Me*pt,Me/z.locationSize*Z*pt,$)}}else if(q!==void 0){let se=q[K];if(se!==void 0)switch(se.length){case 2:n.vertexAttrib2fv(z.location,se);break;case 3:n.vertexAttrib3fv(z.location,se);break;case 4:n.vertexAttrib4fv(z.location,se);break;default:n.vertexAttrib1fv(z.location,se)}}}}M()}function C(){P();for(let v in i){let R=i[v];for(let F in R){let V=R[F];for(let W in V)u(V[W].object),delete V[W];delete R[F]}delete i[v]}}function S(v){if(i[v.id]===void 0)return;let R=i[v.id];for(let F in R){let V=R[F];for(let W in V)u(V[W].object),delete V[W];delete R[F]}delete i[v.id]}function A(v){for(let R in i){let F=i[R];if(F[v.id]===void 0)continue;let V=F[v.id];for(let W in V)u(V[W].object),delete V[W];delete F[v.id]}}function P(){b(),o=!0,s!==r&&(s=r,l(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:b,dispose:C,releaseStatesOfGeometry:S,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function X1(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];t.update(h,i,1)}function c(l,u,d,f){if(d===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x]*f[x];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Y1(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Rn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let P=A===Yr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==si&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==oi&&!P)}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(Ie("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,S=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:T,vertexTextures:C,maxSamples:S}}function Z1(n){let e=this,t=null,i=0,r=!1,s=!1,o=new Kn,a=new Ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{let M=s?0:i,E=M*4,T=p.clippingState||null;c.value=T,T=u(g,f,E,h);for(let C=0;C!==E;++C)T[C]=t[C];p.clippingState=T,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=h+x*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,T=h;E!==x;++E,T+=4)o.copy(d[E]).applyMatrix4(M,a),o.normal.toArray(m,T),m[T+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function J1(n){let e=new WeakMap;function t(o,a){return a===bu?o.mapping=qr:a===Mu&&(o.mapping=Xr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===bu||a===Mu)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Jl(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var sr=4,eb=[.125,.215,.35,.446,.526,.582],Qr=20,K1=256,Aa=new fu,tb=new tt,Cm=null,Dm=0,Am=0,Im=!1,Q1=new k,ad=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){let{size:o=256,position:a=Q1}=s;Cm=this._renderer.getRenderTarget(),Dm=this._renderer.getActiveCubeFace(),Am=this._renderer.getActiveMipmapLevel(),Im=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rb(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ib(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Cm,Dm,Am),this._renderer.xr.enabled=Im,e.scissorTest=!1,so(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qr||e.mapping===Xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cm=this._renderer.getRenderTarget(),Dm=this._renderer.getActiveCubeFace(),Am=this._renderer.getActiveMipmapLevel(),Im=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:Yr,format:Rn,colorSpace:Gr,depthBuffer:!1},r=nb(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nb(e,t,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=eR(s)),this._blurMaterial=nR(s,e,t),this._ggxMaterial=tR(s,e,t)}return r}_compileMaterial(e){let t=new Wn(new Mn,e);this._renderer.compile(t,Aa)}_sceneToCubeUV(e,t,i,r,s){let c=new an(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(tb),d.toneMapping=Mi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Wn(new Qs,new fa({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,p=!1,M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(tb),p=!0);for(let E=0;E<6;E++){let T=E%3;T===0?(c.up.set(0,l[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[E],s.y,s.z)):T===1?(c.up.set(0,0,l[E]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[E],s.z)):(c.up.set(0,l[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[E]));let C=this._cubeSize;so(r,T*C,E>2?C:0,C,C),d.setRenderTarget(r),p&&d.render(x,c),d.render(e,c)}d.toneMapping=h,d.autoClear=f,e.background=M}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===qr||e.mapping===Xr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=rb()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ib());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;so(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Aa)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let c=o.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),f=.05+l*.95,h=d*f,{_lodMax:g}=this,x=this._sizeLods[i],m=3*x*(i>g-sr?i-g+sr:0),p=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=h,c.mipInt.value=g-t,so(s,m,p,3*x,2*x),r.setRenderTarget(s),r.render(a,Aa),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-i,so(e,m,p,3*x,2*x),r.setRenderTarget(e),r.render(a,Aa)}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ze("blur direction must be either latitudinal or longitudinal!");let u=3,d=this._lodMeshes[r];d.material=l;let f=l.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Qr-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):Qr;m>Qr&&Ie(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qr}`);let p=[],M=0;for(let A=0;A<Qr;++A){let P=A/x,b=Math.exp(-P*P/2);p.push(b),A===0?M+=b:A<m&&(M+=2*b)}for(let A=0;A<p.length;A++)p[A]=p[A]/M;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-i;let T=this._sizeLods[r],C=3*T*(r>E-sr?r-E+sr:0),S=4*(this._cubeSize-T);so(t,C,S,3*T,2*T),c.setRenderTarget(t),c.render(d,Aa)}};function eR(n){let e=[],t=[],i=[],r=n,s=n-sr+1+eb.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let c=1/a;o>n-sr?c=eb[o-n+sr-1]:o===0&&(c=0),t.push(c);let l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,x=3,m=2,p=1,M=new Float32Array(x*g*h),E=new Float32Array(m*g*h),T=new Float32Array(p*g*h);for(let S=0;S<h;S++){let A=S%3*2/3-1,P=S>2?0:-1,b=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];M.set(b,x*g*S),E.set(f,m*g*S);let v=[S,S,S,S,S,S];T.set(v,p*g*S)}let C=new Mn;C.setAttribute("position",new _n(M,x)),C.setAttribute("uv",new _n(E,m)),C.setAttribute("faceIndex",new _n(T,p)),i.push(new Wn(C,null)),r>sr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function nb(n,e,t){let i=new ti(n,e,t);return i.texture.mapping=Ea,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function so(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function tR(n,e,t){return new In({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:K1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cd(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function nR(n,e,t){let i=new Float32Array(Qr),r=new k(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:Qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:cd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function ib(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function rb(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function cd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function iR(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===bu||c===Mu,u=c===qr||c===Xr;if(l||u){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new ad(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let h=a.image;return l&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new ad(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function rR(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Xs("WebGLRenderer: "+i+" extension not supported."),r}}}function sR(n,e,t,i){let r={},s=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];let h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(d){let f=d.attributes;for(let h in f)e.update(f[h],n.ARRAY_BUFFER)}function l(d){let f=[],h=d.index,g=d.attributes.position,x=0;if(h!==null){let M=h.array;x=h.version;for(let E=0,T=M.length;E<T;E+=3){let C=M[E+0],S=M[E+1],A=M[E+2];f.push(C,S,S,A,A,C)}}else if(g!==void 0){let M=g.array;x=g.version;for(let E=0,T=M.length/3-1;E<T;E+=3){let C=E+0,S=E+1,A=E+2;f.push(C,S,S,A,A,C)}}else return;let m=new(vm(f)?pa:ha)(f,1);m.version=x;let p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){let f=s.get(d);if(f){let h=d.index;h!==null&&f.version<h.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function oR(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,h){n.drawElements(i,h,s,f*o),t.update(h,i,1)}function l(f,h,g){g!==0&&(n.drawElementsInstanced(i,h,s,f*o,g),t.update(h,i,g))}function u(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,i,1)}function d(f,h,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,h[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,f,0,x,0,g);let p=0;for(let M=0;M<g;M++)p+=h[M]*x[M];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function aR(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:ze("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function cR(n,e,t){let i=new WeakMap,r=new Tt;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let v=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",v)};var h=v;f!==void 0&&f.texture.dispose();let g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],T=0;g===!0&&(T=1),x===!0&&(T=2),m===!0&&(T=3);let C=a.attributes.position.count*T,S=1;C>e.maxTextureSize&&(S=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);let A=new Float32Array(C*S*4*d),P=new da(A,C,S,d);P.type=oi,P.needsUpdate=!0;let b=T*4;for(let R=0;R<d;R++){let F=p[R],V=M[R],W=E[R],G=C*S*4*R;for(let q=0;q<F.count;q++){let K=q*b;g===!0&&(r.fromBufferAttribute(F,q),A[G+K+0]=r.x,A[G+K+1]=r.y,A[G+K+2]=r.z,A[G+K+3]=0),x===!0&&(r.fromBufferAttribute(V,q),A[G+K+4]=r.x,A[G+K+5]=r.y,A[G+K+6]=r.z,A[G+K+7]=0),m===!0&&(r.fromBufferAttribute(W,q),A[G+K+8]=r.x,A[G+K+9]=r.y,A[G+K+10]=r.z,A[G+K+11]=W.itemSize===4?r.w:1)}}f={count:d,texture:P,size:new et(C,S)},i.set(a,f),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];let x=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function lR(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var Sb=new ai,sb=new ya(1,1),wb=new da,Tb=new Yl,Cb=new ga,ob=[],ab=[],cb=new Float32Array(16),lb=new Float32Array(9),ub=new Float32Array(4);function ao(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=ob[r];if(s===void 0&&(s=new Float32Array(r),ob[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ft(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ld(n,e){let t=ab[e];t===void 0&&(t=new Int32Array(e),ab[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function uR(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function dR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2fv(this.addr,e),Ft(t,e)}}function fR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;n.uniform3fv(this.addr,e),Ft(t,e)}}function hR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4fv(this.addr,e),Ft(t,e)}}function pR(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Lt(t,i))return;ub.set(i),n.uniformMatrix2fv(this.addr,!1,ub),Ft(t,i)}}function mR(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Lt(t,i))return;lb.set(i),n.uniformMatrix3fv(this.addr,!1,lb),Ft(t,i)}}function gR(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Lt(t,i))return;cb.set(i),n.uniformMatrix4fv(this.addr,!1,cb),Ft(t,i)}}function xR(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function yR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2iv(this.addr,e),Ft(t,e)}}function vR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3iv(this.addr,e),Ft(t,e)}}function _R(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4iv(this.addr,e),Ft(t,e)}}function bR(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function MR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2uiv(this.addr,e),Ft(t,e)}}function ER(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3uiv(this.addr,e),Ft(t,e)}}function SR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4uiv(this.addr,e),Ft(t,e)}}function wR(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(sb.compareFunction=xm,s=sb):s=Sb,t.setTexture2D(e||s,r)}function TR(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Tb,r)}function CR(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Cb,r)}function DR(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||wb,r)}function AR(n){switch(n){case 5126:return uR;case 35664:return dR;case 35665:return fR;case 35666:return hR;case 35674:return pR;case 35675:return mR;case 35676:return gR;case 5124:case 35670:return xR;case 35667:case 35671:return yR;case 35668:case 35672:return vR;case 35669:case 35673:return _R;case 5125:return bR;case 36294:return MR;case 36295:return ER;case 36296:return SR;case 35678:case 36198:case 36298:case 36306:case 35682:return wR;case 35679:case 36299:case 36307:return TR;case 35680:case 36300:case 36308:case 36293:return CR;case 36289:case 36303:case 36311:case 36292:return DR}}function IR(n,e){n.uniform1fv(this.addr,e)}function RR(n,e){let t=ao(e,this.size,2);n.uniform2fv(this.addr,t)}function NR(n,e){let t=ao(e,this.size,3);n.uniform3fv(this.addr,t)}function PR(n,e){let t=ao(e,this.size,4);n.uniform4fv(this.addr,t)}function LR(n,e){let t=ao(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function FR(n,e){let t=ao(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function OR(n,e){let t=ao(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function kR(n,e){n.uniform1iv(this.addr,e)}function UR(n,e){n.uniform2iv(this.addr,e)}function BR(n,e){n.uniform3iv(this.addr,e)}function VR(n,e){n.uniform4iv(this.addr,e)}function HR(n,e){n.uniform1uiv(this.addr,e)}function zR(n,e){n.uniform2uiv(this.addr,e)}function GR(n,e){n.uniform3uiv(this.addr,e)}function WR(n,e){n.uniform4uiv(this.addr,e)}function jR(n,e,t){let i=this.cache,r=e.length,s=ld(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Sb,s[o])}function $R(n,e,t){let i=this.cache,r=e.length,s=ld(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Tb,s[o])}function qR(n,e,t){let i=this.cache,r=e.length,s=ld(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Cb,s[o])}function XR(n,e,t){let i=this.cache,r=e.length,s=ld(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||wb,s[o])}function YR(n){switch(n){case 5126:return IR;case 35664:return RR;case 35665:return NR;case 35666:return PR;case 35674:return LR;case 35675:return FR;case 35676:return OR;case 5124:case 35670:return kR;case 35667:case 35671:return UR;case 35668:case 35672:return BR;case 35669:case 35673:return VR;case 5125:return HR;case 36294:return zR;case 36295:return GR;case 36296:return WR;case 35678:case 36198:case 36298:case 36306:case 35682:return jR;case 35679:case 36299:case 36307:return $R;case 35680:case 36300:case 36308:case 36293:return qR;case 36289:case 36303:case 36311:case 36292:return XR}}var Nm=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=AR(t.type)}},Pm=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=YR(t.type)}},Lm=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},Rm=/(\w+)(\])?(\[|\.)?/g;function db(n,e){n.seq.push(e),n.map[e.id]=e}function ZR(n,e,t){let i=n.name,r=i.length;for(Rm.lastIndex=0;;){let s=Rm.exec(i),o=Rm.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){db(t,l===void 0?new Nm(a,n,e):new Pm(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Lm(a),db(t,d)),t=d}}}var oo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);ZR(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function fb(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var JR=37297,KR=0;function QR(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var hb=new Ue;function eN(n){nt._getMatrix(hb,nt.workingColorSpace,n);let e=`mat3( ${hb.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(n)){case la:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function pb(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+QR(n.getShaderSource(e),a)}else return s}function tN(n,e){let t=eN(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function nN(n,e){let t;switch(e){case I_:t="Linear";break;case R_:t="Reinhard";break;case N_:t="Cineon";break;case P_:t="ACESFilmic";break;case F_:t="AgX";break;case O_:t="Neutral";break;case L_:t="Custom";break;default:Ie("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var od=new k;function iN(){nt.getLuminanceCoefficients(od);let n=od.x.toFixed(4),e=od.y.toFixed(4),t=od.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rN(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ia).join(`
`)}function sN(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function oN(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ia(n){return n!==""}function mb(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gb(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var aN=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fm(n){return n.replace(aN,lN)}var cN=new Map;function lN(n,e){let t=Ve[e];if(t===void 0){let i=cN.get(e);if(i!==void 0)t=Ve[i],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Fm(t)}var uN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xb(n){return n.replace(uN,dN)}function dN(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function yb(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fN(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===sm?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===l_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function hN(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case qr:case Xr:e="ENVMAP_TYPE_CUBE";break;case Ea:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pN(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Xr:e="ENVMAP_MODE_REFRACTION";break}return e}function mN(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case lm:e="ENVMAP_BLENDING_MULTIPLY";break;case D_:e="ENVMAP_BLENDING_MIX";break;case A_:e="ENVMAP_BLENDING_ADD";break}return e}function gN(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function xN(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=fN(t),l=hN(t),u=pN(t),d=mN(t),f=gN(t),h=rN(t),g=sN(s),x=r.createProgram(),m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ia).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ia).join(`
`),p.length>0&&(p+=`
`)):(m=[yb(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ia).join(`
`),p=[yb(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mi?"#define TONE_MAPPING":"",t.toneMapping!==Mi?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Mi?nN("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,tN("linearToOutputTexel",t.outputColorSpace),iN(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ia).join(`
`)),o=Fm(o),o=mb(o,t),o=gb(o,t),a=Fm(a),a=mb(a,t),a=gb(a,t),o=xb(o),a=xb(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ym?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ym?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let E=M+m+o,T=M+p+a,C=fb(r,r.VERTEX_SHADER,E),S=fb(r,r.FRAGMENT_SHADER,T);r.attachShader(x,C),r.attachShader(x,S),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(R){if(n.debug.checkShaderErrors){let F=r.getProgramInfoLog(x)||"",V=r.getShaderInfoLog(C)||"",W=r.getShaderInfoLog(S)||"",G=F.trim(),q=V.trim(),K=W.trim(),z=!0,ne=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,C,S);else{let se=pb(r,C,"vertex"),Me=pb(r,S,"fragment");ze("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+G+`
`+se+`
`+Me)}else G!==""?Ie("WebGLProgram: Program Info Log:",G):(q===""||K==="")&&(ne=!1);ne&&(R.diagnostics={runnable:z,programLog:G,vertexShader:{log:q,prefix:m},fragmentShader:{log:K,prefix:p}})}r.deleteShader(C),r.deleteShader(S),P=new oo(r,x),b=oN(r,x)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(x,JR)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=KR++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=S,this}var yN=0,Om=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new km(e),t.set(e,i)),i}},km=class{constructor(e){this.id=yN++,this.code=e,this.usedTimes=0}};function vN(n,e,t,i,r,s,o){let a=new Ks,c=new Om,l=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures,h=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,v,R,F,V){let W=F.fog,G=V.geometry,q=b.isMeshStandardMaterial?F.environment:null,K=(b.isMeshStandardMaterial?t:e).get(b.envMap||q),z=K&&K.mapping===Ea?K.image.height:null,ne=g[b.type];b.precision!==null&&(h=r.getMaxPrecision(b.precision),h!==b.precision&&Ie("WebGLProgram.getParameters:",b.precision,"not supported, using",h,"instead."));let se=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Me=se!==void 0?se.length:0,Je=0;G.morphAttributes.position!==void 0&&(Je=1),G.morphAttributes.normal!==void 0&&(Je=2),G.morphAttributes.color!==void 0&&(Je=3);let lt,ht,pt,$;if(ne){let ut=ci[ne];lt=ut.vertexShader,ht=ut.fragmentShader}else lt=b.vertexShader,ht=b.fragmentShader,c.update(b),pt=c.getVertexShaderID(b),$=c.getFragmentShaderID(b);let Z=n.getRenderTarget(),fe=n.state.buffers.depth.getReversed(),ke=V.isInstancedMesh===!0,ve=V.isBatchedMesh===!0,je=!!b.map,Vt=!!b.matcap,We=!!K,xt=!!b.aoMap,D=!!b.lightMap,$e=!!b.bumpMap,qe=!!b.normalMap,mt=!!b.displacementMap,me=!!b.emissiveMap,yt=!!b.metalnessMap,be=!!b.roughnessMap,Fe=b.anisotropy>0,w=b.clearcoat>0,y=b.dispersion>0,O=b.iridescence>0,j=b.sheen>0,Y=b.transmission>0,H=Fe&&!!b.anisotropyMap,ye=w&&!!b.clearcoatMap,ae=w&&!!b.clearcoatNormalMap,Ee=w&&!!b.clearcoatRoughnessMap,ge=O&&!!b.iridescenceMap,J=O&&!!b.iridescenceThicknessMap,te=j&&!!b.sheenColorMap,De=j&&!!b.sheenRoughnessMap,we=!!b.specularMap,ue=!!b.specularColorMap,Re=!!b.specularIntensityMap,I=Y&&!!b.transmissionMap,ce=Y&&!!b.thicknessMap,ie=!!b.gradientMap,re=!!b.alphaMap,Q=b.alphaTest>0,X=!!b.alphaHash,he=!!b.extensions,Ne=Mi;b.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ne=n.toneMapping);let gt={shaderID:ne,shaderType:b.type,shaderName:b.name,vertexShader:lt,fragmentShader:ht,defines:b.defines,customVertexShaderID:pt,customFragmentShaderID:$,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:h,batching:ve,batchingColor:ve&&V._colorsTexture!==null,instancing:ke,instancingColor:ke&&V.instanceColor!==null,instancingMorph:ke&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Z===null?n.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Gr,alphaToCoverage:!!b.alphaToCoverage,map:je,matcap:Vt,envMap:We,envMapMode:We&&K.mapping,envMapCubeUVHeight:z,aoMap:xt,lightMap:D,bumpMap:$e,normalMap:qe,displacementMap:f&&mt,emissiveMap:me,normalMapObjectSpace:qe&&b.normalMapType===H_,normalMapTangentSpace:qe&&b.normalMapType===V_,metalnessMap:yt,roughnessMap:be,anisotropy:Fe,anisotropyMap:H,clearcoat:w,clearcoatMap:ye,clearcoatNormalMap:ae,clearcoatRoughnessMap:Ee,dispersion:y,iridescence:O,iridescenceMap:ge,iridescenceThicknessMap:J,sheen:j,sheenColorMap:te,sheenRoughnessMap:De,specularMap:we,specularColorMap:ue,specularIntensityMap:Re,transmission:Y,transmissionMap:I,thicknessMap:ce,gradientMap:ie,opaque:b.transparent===!1&&b.blending===Hr&&b.alphaToCoverage===!1,alphaMap:re,alphaTest:Q,alphaHash:X,combine:b.combine,mapUv:je&&x(b.map.channel),aoMapUv:xt&&x(b.aoMap.channel),lightMapUv:D&&x(b.lightMap.channel),bumpMapUv:$e&&x(b.bumpMap.channel),normalMapUv:qe&&x(b.normalMap.channel),displacementMapUv:mt&&x(b.displacementMap.channel),emissiveMapUv:me&&x(b.emissiveMap.channel),metalnessMapUv:yt&&x(b.metalnessMap.channel),roughnessMapUv:be&&x(b.roughnessMap.channel),anisotropyMapUv:H&&x(b.anisotropyMap.channel),clearcoatMapUv:ye&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:ae&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:J&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:te&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:De&&x(b.sheenRoughnessMap.channel),specularMapUv:we&&x(b.specularMap.channel),specularColorMapUv:ue&&x(b.specularColorMap.channel),specularIntensityMapUv:Re&&x(b.specularIntensityMap.channel),transmissionMapUv:I&&x(b.transmissionMap.channel),thicknessMapUv:ce&&x(b.thicknessMap.channel),alphaMapUv:re&&x(b.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(qe||Fe),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!G.attributes.uv&&(je||re),fog:!!W,useFog:b.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:fe,skinning:V.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Je,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ne,decodeVideoTexture:je&&b.map.isVideoTexture===!0&&nt.getTransfer(b.map.colorSpace)===ct,decodeVideoTextureEmissive:me&&b.emissiveMap.isVideoTexture===!0&&nt.getTransfer(b.emissiveMap.colorSpace)===ct,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ii,flipSided:b.side===Qt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:he&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&b.extensions.multiDraw===!0||ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return gt.vertexUv1s=l.has(1),gt.vertexUv2s=l.has(2),gt.vertexUv3s=l.has(3),l.clear(),gt}function p(b){let v=[];if(b.shaderID?v.push(b.shaderID):(v.push(b.customVertexShaderID),v.push(b.customFragmentShaderID)),b.defines!==void 0)for(let R in b.defines)v.push(R),v.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(M(v,b),E(v,b),v.push(n.outputColorSpace)),v.push(b.customProgramCacheKey),v.join()}function M(b,v){b.push(v.precision),b.push(v.outputColorSpace),b.push(v.envMapMode),b.push(v.envMapCubeUVHeight),b.push(v.mapUv),b.push(v.alphaMapUv),b.push(v.lightMapUv),b.push(v.aoMapUv),b.push(v.bumpMapUv),b.push(v.normalMapUv),b.push(v.displacementMapUv),b.push(v.emissiveMapUv),b.push(v.metalnessMapUv),b.push(v.roughnessMapUv),b.push(v.anisotropyMapUv),b.push(v.clearcoatMapUv),b.push(v.clearcoatNormalMapUv),b.push(v.clearcoatRoughnessMapUv),b.push(v.iridescenceMapUv),b.push(v.iridescenceThicknessMapUv),b.push(v.sheenColorMapUv),b.push(v.sheenRoughnessMapUv),b.push(v.specularMapUv),b.push(v.specularColorMapUv),b.push(v.specularIntensityMapUv),b.push(v.transmissionMapUv),b.push(v.thicknessMapUv),b.push(v.combine),b.push(v.fogExp2),b.push(v.sizeAttenuation),b.push(v.morphTargetsCount),b.push(v.morphAttributeCount),b.push(v.numDirLights),b.push(v.numPointLights),b.push(v.numSpotLights),b.push(v.numSpotLightMaps),b.push(v.numHemiLights),b.push(v.numRectAreaLights),b.push(v.numDirLightShadows),b.push(v.numPointLightShadows),b.push(v.numSpotLightShadows),b.push(v.numSpotLightShadowsWithMaps),b.push(v.numLightProbes),b.push(v.shadowMapType),b.push(v.toneMapping),b.push(v.numClippingPlanes),b.push(v.numClipIntersection),b.push(v.depthPacking)}function E(b,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),v.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),b.push(a.mask)}function T(b){let v=g[b.type],R;if(v){let F=ci[v];R=K_.clone(F.uniforms)}else R=b.uniforms;return R}function C(b,v){let R;for(let F=0,V=u.length;F<V;F++){let W=u[F];if(W.cacheKey===v){R=W,++R.usedTimes;break}}return R===void 0&&(R=new xN(n,v,b,s),u.push(R)),R}function S(b){if(--b.usedTimes===0){let v=u.indexOf(b);u[v]=u[u.length-1],u.pop(),b.destroy()}}function A(b){c.remove(b)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:T,acquireProgram:C,releaseProgram:S,releaseShaderCache:A,programs:u,dispose:P}}function _N(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function bN(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function vb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function _b(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,h,g,x,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=x,p.group=m),e++,p}function a(d,f,h,g,x,m){let p=o(d,f,h,g,x,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):t.push(p)}function c(d,f,h,g,x,m){let p=o(d,f,h,g,x,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function l(d,f){t.length>1&&t.sort(d||bN),i.length>1&&i.sort(f||vb),r.length>1&&r.sort(f||vb)}function u(){for(let d=e,f=n.length;d<f;d++){let h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function MN(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new _b,n.set(i,[o])):r>=s.length?(o=new _b,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function EN(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new tt};break;case"SpotLight":t={position:new k,direction:new k,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function SN(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var wN=0;function TN(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function CN(n){let e=new EN,t=SN(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new k);let r=new k,s=new At,o=new At;function a(l){let u=0,d=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let h=0,g=0,x=0,m=0,p=0,M=0,E=0,T=0,C=0,S=0,A=0;l.sort(TN);for(let b=0,v=l.length;b<v;b++){let R=l[b],F=R.color,V=R.intensity,W=R.distance,G=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=F.r*V,d+=F.g*V,f+=F.b*V;else if(R.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(R.sh.coefficients[q],V);A++}else if(R.isDirectionalLight){let q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let K=R.shadow,z=t.get(R);z.shadowIntensity=K.intensity,z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,i.directionalShadow[h]=z,i.directionalShadowMap[h]=G,i.directionalShadowMatrix[h]=R.shadow.matrix,M++}i.directional[h]=q,h++}else if(R.isSpotLight){let q=e.get(R);q.position.setFromMatrixPosition(R.matrixWorld),q.color.copy(F).multiplyScalar(V),q.distance=W,q.coneCos=Math.cos(R.angle),q.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),q.decay=R.decay,i.spot[x]=q;let K=R.shadow;if(R.map&&(i.spotLightMap[C]=R.map,C++,K.updateMatrices(R),R.castShadow&&S++),i.spotLightMatrix[x]=K.matrix,R.castShadow){let z=t.get(R);z.shadowIntensity=K.intensity,z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,i.spotShadow[x]=z,i.spotShadowMap[x]=G,T++}x++}else if(R.isRectAreaLight){let q=e.get(R);q.color.copy(F).multiplyScalar(V),q.halfWidth.set(R.width*.5,0,0),q.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=q,m++}else if(R.isPointLight){let q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),q.distance=R.distance,q.decay=R.decay,R.castShadow){let K=R.shadow,z=t.get(R);z.shadowIntensity=K.intensity,z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,z.shadowCameraNear=K.camera.near,z.shadowCameraFar=K.camera.far,i.pointShadow[g]=z,i.pointShadowMap[g]=G,i.pointShadowMatrix[g]=R.shadow.matrix,E++}i.point[g]=q,g++}else if(R.isHemisphereLight){let q=e.get(R);q.skyColor.copy(R.color).multiplyScalar(V),q.groundColor.copy(R.groundColor).multiplyScalar(V),i.hemi[p]=q,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let P=i.hash;(P.directionalLength!==h||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==M||P.numPointShadows!==E||P.numSpotShadows!==T||P.numSpotMaps!==C||P.numLightProbes!==A)&&(i.directional.length=h,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=T+C-S,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=A,P.directionalLength=h,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=M,P.numPointShadows=E,P.numSpotShadows=T,P.numSpotMaps=C,P.numLightProbes=A,i.version=wN++)}function c(l,u){let d=0,f=0,h=0,g=0,x=0,m=u.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){let E=l[p];if(E.isDirectionalLight){let T=i.directional[d];T.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),d++}else if(E.isSpotLight){let T=i.spot[h];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),h++}else if(E.isRectAreaLight){let T=i.rectArea[g];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(m),o.identity(),s.copy(E.matrixWorld),s.premultiply(m),o.extractRotation(s),T.halfWidth.set(E.width*.5,0,0),T.halfHeight.set(0,E.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){let T=i.point[f];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){let T=i.hemi[x];T.direction.setFromMatrixPosition(E.matrixWorld),T.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:i}}function bb(n){let e=new CN(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function DN(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new bb(n),e.set(r,[a])):s>=o.length?(a=new bb(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var AN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IN=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function RN(n,e,t){let i=new xa,r=new et,s=new et,o=new Tt,a=new eu({depthPacking:B_}),c=new tu,l={},u=t.maxTextureSize,d={[_i]:Qt,[Qt]:_i,[ii]:ii},f=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:AN,fragmentShader:IN}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let g=new Mn;g.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Wn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sm;let p=this.type;this.render=function(S,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;let b=n.getRenderTarget(),v=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),F=n.state;F.setBlending(ri),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let V=p!==ni&&this.type===ni,W=p===ni&&this.type!==ni;for(let G=0,q=S.length;G<q;G++){let K=S[G],z=K.shadow;if(z===void 0){Ie("WebGLShadowMap:",K,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);let ne=z.getFrameExtents();if(r.multiply(ne),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ne.x),r.x=s.x*ne.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ne.y),r.y=s.y*ne.y,z.mapSize.y=s.y)),z.map===null||V===!0||W===!0){let Me=this.type!==ni?{minFilter:cn,magFilter:cn}:{};z.map!==null&&z.map.dispose(),z.map=new ti(r.x,r.y,Me),z.map.texture.name=K.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();let se=z.getViewportCount();for(let Me=0;Me<se;Me++){let Je=z.getViewport(Me);o.set(s.x*Je.x,s.y*Je.y,s.x*Je.z,s.y*Je.w),F.viewport(o),z.updateMatrices(K,Me),i=z.getFrustum(),T(A,P,z.camera,K,this.type)}z.isPointLightShadow!==!0&&this.type===ni&&M(z,P),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,v,R)};function M(S,A){let P=e.update(x);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,h.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new ti(r.x,r.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(A,null,P,f,x,null),h.uniforms.shadow_pass.value=S.mapPass.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(A,null,P,h,x,null)}function E(S,A,P,b){let v=null,R=P.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(R!==void 0)v=R;else if(v=P.isPointLight===!0?c:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let F=v.uuid,V=A.uuid,W=l[F];W===void 0&&(W={},l[F]=W);let G=W[V];G===void 0&&(G=v.clone(),W[V]=G,A.addEventListener("dispose",C)),v=G}if(v.visible=A.visible,v.wireframe=A.wireframe,b===ni?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:d[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let F=n.properties.get(v);F.light=P}return v}function T(S,A,P,b,v){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&v===ni)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,S.matrixWorld);let V=e.update(S),W=S.material;if(Array.isArray(W)){let G=V.groups;for(let q=0,K=G.length;q<K;q++){let z=G[q],ne=W[z.materialIndex];if(ne&&ne.visible){let se=E(S,ne,b,v);S.onBeforeShadow(n,S,A,P,V,se,z),n.renderBufferDirect(P,null,V,se,S,z),S.onAfterShadow(n,S,A,P,V,se,z)}}}else if(W.visible){let G=E(S,W,b,v);S.onBeforeShadow(n,S,A,P,V,G,null),n.renderBufferDirect(P,null,V,G,S,null),S.onAfterShadow(n,S,A,P,V,G,null)}}let F=S.children;for(let V=0,W=F.length;V<W;V++)T(F[V],A,P,b,v)}function C(S){S.target.removeEventListener("dispose",C);for(let P in l){let b=l[P],v=S.target.uuid;v in b&&(b[v].dispose(),delete b[v])}}}var NN={[pu]:mu,[gu]:vu,[xu]:_u,[zr]:yu,[mu]:pu,[vu]:gu,[_u]:xu,[yu]:zr};function PN(n,e){function t(){let I=!1,ce=new Tt,ie=null,re=new Tt(0,0,0,0);return{setMask:function(Q){ie!==Q&&!I&&(n.colorMask(Q,Q,Q,Q),ie=Q)},setLocked:function(Q){I=Q},setClear:function(Q,X,he,Ne,gt){gt===!0&&(Q*=Ne,X*=Ne,he*=Ne),ce.set(Q,X,he,Ne),re.equals(ce)===!1&&(n.clearColor(Q,X,he,Ne),re.copy(ce))},reset:function(){I=!1,ie=null,re.set(-1,0,0,0)}}}function i(){let I=!1,ce=!1,ie=null,re=null,Q=null;return{setReversed:function(X){if(ce!==X){let he=e.get("EXT_clip_control");X?he.clipControlEXT(he.LOWER_LEFT_EXT,he.ZERO_TO_ONE_EXT):he.clipControlEXT(he.LOWER_LEFT_EXT,he.NEGATIVE_ONE_TO_ONE_EXT),ce=X;let Ne=Q;Q=null,this.setClear(Ne)}},getReversed:function(){return ce},setTest:function(X){X?Z(n.DEPTH_TEST):fe(n.DEPTH_TEST)},setMask:function(X){ie!==X&&!I&&(n.depthMask(X),ie=X)},setFunc:function(X){if(ce&&(X=NN[X]),re!==X){switch(X){case pu:n.depthFunc(n.NEVER);break;case mu:n.depthFunc(n.ALWAYS);break;case gu:n.depthFunc(n.LESS);break;case zr:n.depthFunc(n.LEQUAL);break;case xu:n.depthFunc(n.EQUAL);break;case yu:n.depthFunc(n.GEQUAL);break;case vu:n.depthFunc(n.GREATER);break;case _u:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}re=X}},setLocked:function(X){I=X},setClear:function(X){Q!==X&&(ce&&(X=1-X),n.clearDepth(X),Q=X)},reset:function(){I=!1,ie=null,re=null,Q=null,ce=!1}}}function r(){let I=!1,ce=null,ie=null,re=null,Q=null,X=null,he=null,Ne=null,gt=null;return{setTest:function(ut){I||(ut?Z(n.STENCIL_TEST):fe(n.STENCIL_TEST))},setMask:function(ut){ce!==ut&&!I&&(n.stencilMask(ut),ce=ut)},setFunc:function(ut,jn,Nn){(ie!==ut||re!==jn||Q!==Nn)&&(n.stencilFunc(ut,jn,Nn),ie=ut,re=jn,Q=Nn)},setOp:function(ut,jn,Nn){(X!==ut||he!==jn||Ne!==Nn)&&(n.stencilOp(ut,jn,Nn),X=ut,he=jn,Ne=Nn)},setLocked:function(ut){I=ut},setClear:function(ut){gt!==ut&&(n.clearStencil(ut),gt=ut)},reset:function(){I=!1,ce=null,ie=null,re=null,Q=null,X=null,he=null,Ne=null,gt=null}}}let s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,h=[],g=null,x=!1,m=null,p=null,M=null,E=null,T=null,C=null,S=null,A=new tt(0,0,0),P=0,b=!1,v=null,R=null,F=null,V=null,W=null,G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,K=0,z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(z)[1]),q=K>=1):z.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),q=K>=2);let ne=null,se={},Me=n.getParameter(n.SCISSOR_BOX),Je=n.getParameter(n.VIEWPORT),lt=new Tt().fromArray(Me),ht=new Tt().fromArray(Je);function pt(I,ce,ie,re){let Q=new Uint8Array(4),X=n.createTexture();n.bindTexture(I,X),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let he=0;he<ie;he++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ce,0,n.RGBA,1,1,re,0,n.RGBA,n.UNSIGNED_BYTE,Q):n.texImage2D(ce+he,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Q);return X}let $={};$[n.TEXTURE_2D]=pt(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=pt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=pt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=pt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(n.DEPTH_TEST),o.setFunc(zr),$e(!1),qe(rm),Z(n.CULL_FACE),xt(ri);function Z(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function fe(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function ke(I,ce){return d[I]!==ce?(n.bindFramebuffer(I,ce),d[I]=ce,I===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ce),I===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ce),!0):!1}function ve(I,ce){let ie=h,re=!1;if(I){ie=f.get(ce),ie===void 0&&(ie=[],f.set(ce,ie));let Q=I.textures;if(ie.length!==Q.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let X=0,he=Q.length;X<he;X++)ie[X]=n.COLOR_ATTACHMENT0+X;ie.length=Q.length,re=!0}}else ie[0]!==n.BACK&&(ie[0]=n.BACK,re=!0);re&&n.drawBuffers(ie)}function je(I){return g!==I?(n.useProgram(I),g=I,!0):!1}let Vt={[Ki]:n.FUNC_ADD,[d_]:n.FUNC_SUBTRACT,[f_]:n.FUNC_REVERSE_SUBTRACT};Vt[h_]=n.MIN,Vt[p_]=n.MAX;let We={[m_]:n.ZERO,[g_]:n.ONE,[x_]:n.SRC_COLOR,[zl]:n.SRC_ALPHA,[E_]:n.SRC_ALPHA_SATURATE,[b_]:n.DST_COLOR,[v_]:n.DST_ALPHA,[y_]:n.ONE_MINUS_SRC_COLOR,[Gl]:n.ONE_MINUS_SRC_ALPHA,[M_]:n.ONE_MINUS_DST_COLOR,[__]:n.ONE_MINUS_DST_ALPHA,[S_]:n.CONSTANT_COLOR,[w_]:n.ONE_MINUS_CONSTANT_COLOR,[T_]:n.CONSTANT_ALPHA,[C_]:n.ONE_MINUS_CONSTANT_ALPHA};function xt(I,ce,ie,re,Q,X,he,Ne,gt,ut){if(I===ri){x===!0&&(fe(n.BLEND),x=!1);return}if(x===!1&&(Z(n.BLEND),x=!0),I!==u_){if(I!==m||ut!==b){if((p!==Ki||T!==Ki)&&(n.blendEquation(n.FUNC_ADD),p=Ki,T=Ki),ut)switch(I){case Hr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case om:n.blendFunc(n.ONE,n.ONE);break;case am:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cm:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ze("WebGLState: Invalid blending: ",I);break}else switch(I){case Hr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case om:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case am:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cm:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",I);break}M=null,E=null,C=null,S=null,A.set(0,0,0),P=0,m=I,b=ut}return}Q=Q||ce,X=X||ie,he=he||re,(ce!==p||Q!==T)&&(n.blendEquationSeparate(Vt[ce],Vt[Q]),p=ce,T=Q),(ie!==M||re!==E||X!==C||he!==S)&&(n.blendFuncSeparate(We[ie],We[re],We[X],We[he]),M=ie,E=re,C=X,S=he),(Ne.equals(A)===!1||gt!==P)&&(n.blendColor(Ne.r,Ne.g,Ne.b,gt),A.copy(Ne),P=gt),m=I,b=!1}function D(I,ce){I.side===ii?fe(n.CULL_FACE):Z(n.CULL_FACE);let ie=I.side===Qt;ce&&(ie=!ie),$e(ie),I.blending===Hr&&I.transparent===!1?xt(ri):xt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);let re=I.stencilWrite;a.setTest(re),re&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),me(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Z(n.SAMPLE_ALPHA_TO_COVERAGE):fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function $e(I){v!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),v=I)}function qe(I){I!==a_?(Z(n.CULL_FACE),I!==R&&(I===rm?n.cullFace(n.BACK):I===c_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):fe(n.CULL_FACE),R=I}function mt(I){I!==F&&(q&&n.lineWidth(I),F=I)}function me(I,ce,ie){I?(Z(n.POLYGON_OFFSET_FILL),(V!==ce||W!==ie)&&(n.polygonOffset(ce,ie),V=ce,W=ie)):fe(n.POLYGON_OFFSET_FILL)}function yt(I){I?Z(n.SCISSOR_TEST):fe(n.SCISSOR_TEST)}function be(I){I===void 0&&(I=n.TEXTURE0+G-1),ne!==I&&(n.activeTexture(I),ne=I)}function Fe(I,ce,ie){ie===void 0&&(ne===null?ie=n.TEXTURE0+G-1:ie=ne);let re=se[ie];re===void 0&&(re={type:void 0,texture:void 0},se[ie]=re),(re.type!==I||re.texture!==ce)&&(ne!==ie&&(n.activeTexture(ie),ne=ie),n.bindTexture(I,ce||$[I]),re.type=I,re.texture=ce)}function w(){let I=se[ne];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function O(){try{n.compressedTexImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function j(){try{n.texSubImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function Y(){try{n.texSubImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function H(){try{n.compressedTexSubImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function ye(){try{n.compressedTexSubImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function ae(){try{n.texStorage2D(...arguments)}catch(I){I("WebGLState:",I)}}function Ee(){try{n.texStorage3D(...arguments)}catch(I){I("WebGLState:",I)}}function ge(){try{n.texImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function J(){try{n.texImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function te(I){lt.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),lt.copy(I))}function De(I){ht.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),ht.copy(I))}function we(I,ce){let ie=l.get(ce);ie===void 0&&(ie=new WeakMap,l.set(ce,ie));let re=ie.get(I);re===void 0&&(re=n.getUniformBlockIndex(ce,I.name),ie.set(I,re))}function ue(I,ce){let re=l.get(ce).get(I);c.get(ce)!==re&&(n.uniformBlockBinding(ce,re,I.__bindingPointIndex),c.set(ce,re))}function Re(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ne=null,se={},d={},f=new WeakMap,h=[],g=null,x=!1,m=null,p=null,M=null,E=null,T=null,C=null,S=null,A=new tt(0,0,0),P=0,b=!1,v=null,R=null,F=null,V=null,W=null,lt.set(0,0,n.canvas.width,n.canvas.height),ht.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Z,disable:fe,bindFramebuffer:ke,drawBuffers:ve,useProgram:je,setBlending:xt,setMaterial:D,setFlipSided:$e,setCullFace:qe,setLineWidth:mt,setPolygonOffset:me,setScissorTest:yt,activeTexture:be,bindTexture:Fe,unbindTexture:w,compressedTexImage2D:y,compressedTexImage3D:O,texImage2D:ge,texImage3D:J,updateUBOMapping:we,uniformBlockBinding:ue,texStorage2D:ae,texStorage3D:Ee,texSubImage2D:j,texSubImage3D:Y,compressedTexSubImage2D:H,compressedTexSubImage3D:ye,scissor:te,viewport:De,reset:Re}}function LN(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new et,u=new WeakMap,d,f=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,y){return h?new OffscreenCanvas(w,y):$s("canvas")}function x(w,y,O){let j=1,Y=Fe(w);if((Y.width>O||Y.height>O)&&(j=O/Math.max(Y.width,Y.height)),j<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let H=Math.floor(j*Y.width),ye=Math.floor(j*Y.height);d===void 0&&(d=g(H,ye));let ae=y?g(H,ye):d;return ae.width=H,ae.height=ye,ae.getContext("2d").drawImage(w,0,0,H,ye),Ie("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+H+"x"+ye+")."),ae}else return"data"in w&&Ie("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){n.generateMipmap(w)}function M(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(w,y,O,j,Y=!1){if(w!==null){if(n[w]!==void 0)return n[w];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let H=y;if(y===n.RED&&(O===n.FLOAT&&(H=n.R32F),O===n.HALF_FLOAT&&(H=n.R16F),O===n.UNSIGNED_BYTE&&(H=n.R8)),y===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(H=n.R8UI),O===n.UNSIGNED_SHORT&&(H=n.R16UI),O===n.UNSIGNED_INT&&(H=n.R32UI),O===n.BYTE&&(H=n.R8I),O===n.SHORT&&(H=n.R16I),O===n.INT&&(H=n.R32I)),y===n.RG&&(O===n.FLOAT&&(H=n.RG32F),O===n.HALF_FLOAT&&(H=n.RG16F),O===n.UNSIGNED_BYTE&&(H=n.RG8)),y===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(H=n.RG8UI),O===n.UNSIGNED_SHORT&&(H=n.RG16UI),O===n.UNSIGNED_INT&&(H=n.RG32UI),O===n.BYTE&&(H=n.RG8I),O===n.SHORT&&(H=n.RG16I),O===n.INT&&(H=n.RG32I)),y===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(H=n.RGB8UI),O===n.UNSIGNED_SHORT&&(H=n.RGB16UI),O===n.UNSIGNED_INT&&(H=n.RGB32UI),O===n.BYTE&&(H=n.RGB8I),O===n.SHORT&&(H=n.RGB16I),O===n.INT&&(H=n.RGB32I)),y===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(H=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(H=n.RGBA16UI),O===n.UNSIGNED_INT&&(H=n.RGBA32UI),O===n.BYTE&&(H=n.RGBA8I),O===n.SHORT&&(H=n.RGBA16I),O===n.INT&&(H=n.RGBA32I)),y===n.RGB&&(O===n.UNSIGNED_INT_5_9_9_9_REV&&(H=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(H=n.R11F_G11F_B10F)),y===n.RGBA){let ye=Y?la:nt.getTransfer(j);O===n.FLOAT&&(H=n.RGBA32F),O===n.HALF_FLOAT&&(H=n.RGBA16F),O===n.UNSIGNED_BYTE&&(H=ye===ct?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(H=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(H=n.RGB5_A1)}return(H===n.R16F||H===n.R32F||H===n.RG16F||H===n.RG32F||H===n.RGBA16F||H===n.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function T(w,y){let O;return w?y===null||y===rr||y===no?O=n.DEPTH24_STENCIL8:y===oi?O=n.DEPTH32F_STENCIL8:y===to&&(O=n.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===rr||y===no?O=n.DEPTH_COMPONENT24:y===oi?O=n.DEPTH_COMPONENT32F:y===to&&(O=n.DEPTH_COMPONENT16),O}function C(w,y){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==cn&&w.minFilter!==bn?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function S(w){let y=w.target;y.removeEventListener("dispose",S),P(y),y.isVideoTexture&&u.delete(y)}function A(w){let y=w.target;y.removeEventListener("dispose",A),v(y)}function P(w){let y=i.get(w);if(y.__webglInit===void 0)return;let O=w.source,j=f.get(O);if(j){let Y=j[y.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&b(w),Object.keys(j).length===0&&f.delete(O)}i.remove(w)}function b(w){let y=i.get(w);n.deleteTexture(y.__webglTexture);let O=w.source,j=f.get(O);delete j[y.__cacheKey],o.memory.textures--}function v(w){let y=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(y.__webglFramebuffer[j]))for(let Y=0;Y<y.__webglFramebuffer[j].length;Y++)n.deleteFramebuffer(y.__webglFramebuffer[j][Y]);else n.deleteFramebuffer(y.__webglFramebuffer[j]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[j])}else{if(Array.isArray(y.__webglFramebuffer))for(let j=0;j<y.__webglFramebuffer.length;j++)n.deleteFramebuffer(y.__webglFramebuffer[j]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let j=0;j<y.__webglColorRenderbuffer.length;j++)y.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[j]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let O=w.textures;for(let j=0,Y=O.length;j<Y;j++){let H=i.get(O[j]);H.__webglTexture&&(n.deleteTexture(H.__webglTexture),o.memory.textures--),i.remove(O[j])}i.remove(w)}let R=0;function F(){R=0}function V(){let w=R;return w>=r.maxTextures&&Ie("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),R+=1,w}function W(w){let y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function G(w,y){let O=i.get(w);if(w.isVideoTexture&&yt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&O.__version!==w.version){let j=w.image;if(j===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{$(O,w,y);return}}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+y)}function q(w,y){let O=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){$(O,w,y);return}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+y)}function K(w,y){let O=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){$(O,w,y);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+y)}function z(w,y){let O=i.get(w);if(w.version>0&&O.__version!==w.version){Z(O,w,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+y)}let ne={[Wl]:n.REPEAT,[Qn]:n.CLAMP_TO_EDGE,[jl]:n.MIRRORED_REPEAT},se={[cn]:n.NEAREST,[k_]:n.NEAREST_MIPMAP_NEAREST,[Sa]:n.NEAREST_MIPMAP_LINEAR,[bn]:n.LINEAR,[Eu]:n.LINEAR_MIPMAP_NEAREST,[ir]:n.LINEAR_MIPMAP_LINEAR},Me={[z_]:n.NEVER,[X_]:n.ALWAYS,[G_]:n.LESS,[xm]:n.LEQUAL,[W_]:n.EQUAL,[q_]:n.GEQUAL,[j_]:n.GREATER,[$_]:n.NOTEQUAL};function Je(w,y){if(y.type===oi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===bn||y.magFilter===Eu||y.magFilter===Sa||y.magFilter===ir||y.minFilter===bn||y.minFilter===Eu||y.minFilter===Sa||y.minFilter===ir)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,ne[y.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,ne[y.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,ne[y.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,se[y.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,se[y.minFilter]),y.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,Me[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===cn||y.minFilter!==Sa&&y.minFilter!==ir||y.type===oi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function lt(w,y){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",S));let j=y.source,Y=f.get(j);Y===void 0&&(Y={},f.set(j,Y));let H=W(y);if(H!==w.__cacheKey){Y[H]===void 0&&(Y[H]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Y[H].usedTimes++;let ye=Y[w.__cacheKey];ye!==void 0&&(Y[w.__cacheKey].usedTimes--,ye.usedTimes===0&&b(y)),w.__cacheKey=H,w.__webglTexture=Y[H].texture}return O}function ht(w,y,O){return Math.floor(Math.floor(w/O)/y)}function pt(w,y,O,j){let H=w.updateRanges;if(H.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,O,j,y.data);else{H.sort((J,te)=>J.start-te.start);let ye=0;for(let J=1;J<H.length;J++){let te=H[ye],De=H[J],we=te.start+te.count,ue=ht(De.start,y.width,4),Re=ht(te.start,y.width,4);De.start<=we+1&&ue===Re&&ht(De.start+De.count-1,y.width,4)===ue?te.count=Math.max(te.count,De.start+De.count-te.start):(++ye,H[ye]=De)}H.length=ye+1;let ae=n.getParameter(n.UNPACK_ROW_LENGTH),Ee=n.getParameter(n.UNPACK_SKIP_PIXELS),ge=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let J=0,te=H.length;J<te;J++){let De=H[J],we=Math.floor(De.start/4),ue=Math.ceil(De.count/4),Re=we%y.width,I=Math.floor(we/y.width),ce=ue,ie=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Re),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),t.texSubImage2D(n.TEXTURE_2D,0,Re,I,ce,ie,O,j,y.data)}w.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ae),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ee),n.pixelStorei(n.UNPACK_SKIP_ROWS,ge)}}function $(w,y,O){let j=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(j=n.TEXTURE_3D);let Y=lt(w,y),H=y.source;t.bindTexture(j,w.__webglTexture,n.TEXTURE0+O);let ye=i.get(H);if(H.version!==ye.__version||Y===!0){t.activeTexture(n.TEXTURE0+O);let ae=nt.getPrimaries(nt.workingColorSpace),Ee=y.colorSpace===Ei?null:nt.getPrimaries(y.colorSpace),ge=y.colorSpace===Ei||ae===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let J=x(y.image,!1,r.maxTextureSize);J=be(y,J);let te=s.convert(y.format,y.colorSpace),De=s.convert(y.type),we=E(y.internalFormat,te,De,y.colorSpace,y.isVideoTexture);Je(j,y);let ue,Re=y.mipmaps,I=y.isVideoTexture!==!0,ce=ye.__version===void 0||Y===!0,ie=H.dataReady,re=C(y,J);if(y.isDepthTexture)we=T(y.format===io,y.type),ce&&(I?t.texStorage2D(n.TEXTURE_2D,1,we,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,we,J.width,J.height,0,te,De,null));else if(y.isDataTexture)if(Re.length>0){I&&ce&&t.texStorage2D(n.TEXTURE_2D,re,we,Re[0].width,Re[0].height);for(let Q=0,X=Re.length;Q<X;Q++)ue=Re[Q],I?ie&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,ue.width,ue.height,te,De,ue.data):t.texImage2D(n.TEXTURE_2D,Q,we,ue.width,ue.height,0,te,De,ue.data);y.generateMipmaps=!1}else I?(ce&&t.texStorage2D(n.TEXTURE_2D,re,we,J.width,J.height),ie&&pt(y,J,te,De)):t.texImage2D(n.TEXTURE_2D,0,we,J.width,J.height,0,te,De,J.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){I&&ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,re,we,Re[0].width,Re[0].height,J.depth);for(let Q=0,X=Re.length;Q<X;Q++)if(ue=Re[Q],y.format!==Rn)if(te!==null)if(I){if(ie)if(y.layerUpdates.size>0){let he=Tm(ue.width,ue.height,y.format,y.type);for(let Ne of y.layerUpdates){let gt=ue.data.subarray(Ne*he/ue.data.BYTES_PER_ELEMENT,(Ne+1)*he/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,Ne,ue.width,ue.height,1,te,gt)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,ue.width,ue.height,J.depth,te,ue.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,we,ue.width,ue.height,J.depth,0,ue.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ie&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,ue.width,ue.height,J.depth,te,De,ue.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,we,ue.width,ue.height,J.depth,0,te,De,ue.data)}else{I&&ce&&t.texStorage2D(n.TEXTURE_2D,re,we,Re[0].width,Re[0].height);for(let Q=0,X=Re.length;Q<X;Q++)ue=Re[Q],y.format!==Rn?te!==null?I?ie&&t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,ue.width,ue.height,te,ue.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,we,ue.width,ue.height,0,ue.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ie&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,ue.width,ue.height,te,De,ue.data):t.texImage2D(n.TEXTURE_2D,Q,we,ue.width,ue.height,0,te,De,ue.data)}else if(y.isDataArrayTexture)if(I){if(ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,re,we,J.width,J.height,J.depth),ie)if(y.layerUpdates.size>0){let Q=Tm(J.width,J.height,y.format,y.type);for(let X of y.layerUpdates){let he=J.data.subarray(X*Q/J.data.BYTES_PER_ELEMENT,(X+1)*Q/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,X,J.width,J.height,1,te,De,he)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,te,De,J.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,we,J.width,J.height,J.depth,0,te,De,J.data);else if(y.isData3DTexture)I?(ce&&t.texStorage3D(n.TEXTURE_3D,re,we,J.width,J.height,J.depth),ie&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,te,De,J.data)):t.texImage3D(n.TEXTURE_3D,0,we,J.width,J.height,J.depth,0,te,De,J.data);else if(y.isFramebufferTexture){if(ce)if(I)t.texStorage2D(n.TEXTURE_2D,re,we,J.width,J.height);else{let Q=J.width,X=J.height;for(let he=0;he<re;he++)t.texImage2D(n.TEXTURE_2D,he,we,Q,X,0,te,De,null),Q>>=1,X>>=1}}else if(Re.length>0){if(I&&ce){let Q=Fe(Re[0]);t.texStorage2D(n.TEXTURE_2D,re,we,Q.width,Q.height)}for(let Q=0,X=Re.length;Q<X;Q++)ue=Re[Q],I?ie&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,te,De,ue):t.texImage2D(n.TEXTURE_2D,Q,we,te,De,ue);y.generateMipmaps=!1}else if(I){if(ce){let Q=Fe(J);t.texStorage2D(n.TEXTURE_2D,re,we,Q.width,Q.height)}ie&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,te,De,J)}else t.texImage2D(n.TEXTURE_2D,0,we,te,De,J);m(y)&&p(j),ye.__version=H.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function Z(w,y,O){if(y.image.length!==6)return;let j=lt(w,y),Y=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+O);let H=i.get(Y);if(Y.version!==H.__version||j===!0){t.activeTexture(n.TEXTURE0+O);let ye=nt.getPrimaries(nt.workingColorSpace),ae=y.colorSpace===Ei?null:nt.getPrimaries(y.colorSpace),Ee=y.colorSpace===Ei||ye===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let ge=y.isCompressedTexture||y.image[0].isCompressedTexture,J=y.image[0]&&y.image[0].isDataTexture,te=[];for(let X=0;X<6;X++)!ge&&!J?te[X]=x(y.image[X],!0,r.maxCubemapSize):te[X]=J?y.image[X].image:y.image[X],te[X]=be(y,te[X]);let De=te[0],we=s.convert(y.format,y.colorSpace),ue=s.convert(y.type),Re=E(y.internalFormat,we,ue,y.colorSpace),I=y.isVideoTexture!==!0,ce=H.__version===void 0||j===!0,ie=Y.dataReady,re=C(y,De);Je(n.TEXTURE_CUBE_MAP,y);let Q;if(ge){I&&ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,re,Re,De.width,De.height);for(let X=0;X<6;X++){Q=te[X].mipmaps;for(let he=0;he<Q.length;he++){let Ne=Q[he];y.format!==Rn?we!==null?I?ie&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,he,0,0,Ne.width,Ne.height,we,Ne.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,he,Re,Ne.width,Ne.height,0,Ne.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,he,0,0,Ne.width,Ne.height,we,ue,Ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,he,Re,Ne.width,Ne.height,0,we,ue,Ne.data)}}}else{if(Q=y.mipmaps,I&&ce){Q.length>0&&re++;let X=Fe(te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,re,Re,X.width,X.height)}for(let X=0;X<6;X++)if(J){I?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,te[X].width,te[X].height,we,ue,te[X].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Re,te[X].width,te[X].height,0,we,ue,te[X].data);for(let he=0;he<Q.length;he++){let gt=Q[he].image[X].image;I?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,he+1,0,0,gt.width,gt.height,we,ue,gt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,he+1,Re,gt.width,gt.height,0,we,ue,gt.data)}}else{I?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,we,ue,te[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Re,we,ue,te[X]);for(let he=0;he<Q.length;he++){let Ne=Q[he];I?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,he+1,0,0,we,ue,Ne.image[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,he+1,Re,we,ue,Ne.image[X])}}}m(y)&&p(n.TEXTURE_CUBE_MAP),H.__version=Y.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function fe(w,y,O,j,Y,H){let ye=s.convert(O.format,O.colorSpace),ae=s.convert(O.type),Ee=E(O.internalFormat,ye,ae,O.colorSpace),ge=i.get(y),J=i.get(O);if(J.__renderTarget=y,!ge.__hasExternalTextures){let te=Math.max(1,y.width>>H),De=Math.max(1,y.height>>H);Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?t.texImage3D(Y,H,Ee,te,De,y.depth,0,ye,ae,null):t.texImage2D(Y,H,Ee,te,De,0,ye,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),me(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,Y,J.__webglTexture,0,mt(y)):(Y===n.TEXTURE_2D||Y>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,Y,J.__webglTexture,H),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ke(w,y,O){if(n.bindRenderbuffer(n.RENDERBUFFER,w),y.depthBuffer){let j=y.depthTexture,Y=j&&j.isDepthTexture?j.type:null,H=T(y.stencilBuffer,Y),ye=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=mt(y);me(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,H,y.width,y.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,H,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,H,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,w)}else{let j=y.textures;for(let Y=0;Y<j.length;Y++){let H=j[Y],ye=s.convert(H.format,H.colorSpace),ae=s.convert(H.type),Ee=E(H.internalFormat,ye,ae,H.colorSpace),ge=mt(y);O&&me(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,Ee,y.width,y.height):me(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge,Ee,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ve(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=i.get(y.depthTexture);j.__renderTarget=y,(!j.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),G(y.depthTexture,0);let Y=j.__webglTexture,H=mt(y);if(y.depthTexture.format===js)me(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0);else if(y.depthTexture.format===io)me(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function je(w){let y=i.get(w),O=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){let j=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),j){let Y=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,j.removeEventListener("dispose",Y)};j.addEventListener("dispose",Y),y.__depthDisposeCallback=Y}y.__boundDepthTexture=j}if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");let j=w.texture.mipmaps;j&&j.length>0?ve(y.__webglFramebuffer[0],w):ve(y.__webglFramebuffer,w)}else if(O){y.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[j]),y.__webglDepthbuffer[j]===void 0)y.__webglDepthbuffer[j]=n.createRenderbuffer(),ke(y.__webglDepthbuffer[j],w,!1);else{let Y=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=y.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,H)}}else{let j=w.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),ke(y.__webglDepthbuffer,w,!1);else{let Y=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,H)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Vt(w,y,O){let j=i.get(w);y!==void 0&&fe(j.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&je(w)}function We(w){let y=w.texture,O=i.get(w),j=i.get(y);w.addEventListener("dispose",A);let Y=w.textures,H=w.isWebGLCubeRenderTarget===!0,ye=Y.length>1;if(ye||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=y.version,o.memory.textures++),H){O.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[ae]=[];for(let Ee=0;Ee<y.mipmaps.length;Ee++)O.__webglFramebuffer[ae][Ee]=n.createFramebuffer()}else O.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let ae=0;ae<y.mipmaps.length;ae++)O.__webglFramebuffer[ae]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(ye)for(let ae=0,Ee=Y.length;ae<Ee;ae++){let ge=i.get(Y[ae]);ge.__webglTexture===void 0&&(ge.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&me(w)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ae=0;ae<Y.length;ae++){let Ee=Y[ae];O.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[ae]);let ge=s.convert(Ee.format,Ee.colorSpace),J=s.convert(Ee.type),te=E(Ee.internalFormat,ge,J,Ee.colorSpace,w.isXRRenderTarget===!0),De=mt(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,te,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,O.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),ke(O.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(H){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),Je(n.TEXTURE_CUBE_MAP,y);for(let ae=0;ae<6;ae++)if(y.mipmaps&&y.mipmaps.length>0)for(let Ee=0;Ee<y.mipmaps.length;Ee++)fe(O.__webglFramebuffer[ae][Ee],w,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee);else fe(O.__webglFramebuffer[ae],w,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(y)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let ae=0,Ee=Y.length;ae<Ee;ae++){let ge=Y[ae],J=i.get(ge),te=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(te=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(te,J.__webglTexture),Je(te,ge),fe(O.__webglFramebuffer,w,ge,n.COLOR_ATTACHMENT0+ae,te,0),m(ge)&&p(te)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ae=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,j.__webglTexture),Je(ae,y),y.mipmaps&&y.mipmaps.length>0)for(let Ee=0;Ee<y.mipmaps.length;Ee++)fe(O.__webglFramebuffer[Ee],w,y,n.COLOR_ATTACHMENT0,ae,Ee);else fe(O.__webglFramebuffer,w,y,n.COLOR_ATTACHMENT0,ae,0);m(y)&&p(ae),t.unbindTexture()}w.depthBuffer&&je(w)}function xt(w){let y=w.textures;for(let O=0,j=y.length;O<j;O++){let Y=y[O];if(m(Y)){let H=M(w),ye=i.get(Y).__webglTexture;t.bindTexture(H,ye),p(H),t.unbindTexture()}}}let D=[],$e=[];function qe(w){if(w.samples>0){if(me(w)===!1){let y=w.textures,O=w.width,j=w.height,Y=n.COLOR_BUFFER_BIT,H=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(w),ae=y.length>1;if(ae)for(let ge=0;ge<y.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);let Ee=w.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let ge=0;ge<y.length;ge++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Y|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Y|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[ge]);let J=i.get(y[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,O,j,0,0,O,j,Y,n.NEAREST),c===!0&&(D.length=0,$e.length=0,D.push(n.COLOR_ATTACHMENT0+ge),w.depthBuffer&&w.resolveDepthBuffer===!1&&(D.push(H),$e.push(H),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,$e)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,D))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let ge=0;ge<y.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,ye.__webglColorRenderbuffer[ge]);let J=i.get(y[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,J,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){let y=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function mt(w){return Math.min(r.maxSamples,w.samples)}function me(w){let y=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function yt(w){let y=o.render.frame;u.get(w)!==y&&(u.set(w,y),w.update())}function be(w,y){let O=w.colorSpace,j=w.format,Y=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==Gr&&O!==Ei&&(nt.getTransfer(O)===ct?(j!==Rn||Y!==si)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",O)),y}function Fe(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=F,this.setTexture2D=G,this.setTexture2DArray=q,this.setTexture3D=K,this.setTextureCube=z,this.rebindTextures=Vt,this.setupRenderTarget=We,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=me}function FN(n,e){function t(i,r=Ei){let s,o=nt.getTransfer(r);if(i===si)return n.UNSIGNED_BYTE;if(i===wu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Tu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===fm)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===hm)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===um)return n.BYTE;if(i===dm)return n.SHORT;if(i===to)return n.UNSIGNED_SHORT;if(i===Su)return n.INT;if(i===rr)return n.UNSIGNED_INT;if(i===oi)return n.FLOAT;if(i===Yr)return n.HALF_FLOAT;if(i===pm)return n.ALPHA;if(i===mm)return n.RGB;if(i===Rn)return n.RGBA;if(i===js)return n.DEPTH_COMPONENT;if(i===io)return n.DEPTH_STENCIL;if(i===gm)return n.RED;if(i===Cu)return n.RED_INTEGER;if(i===Du)return n.RG;if(i===Au)return n.RG_INTEGER;if(i===Iu)return n.RGBA_INTEGER;if(i===wa||i===Ta||i===Ca||i===Da)if(o===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===wa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ta)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Da)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===wa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ta)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ca)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Da)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ru||i===Nu||i===Pu||i===Lu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ru)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Nu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Lu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fu||i===Ou||i===ku)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Fu||i===Ou)return o===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ku)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Uu||i===Bu||i===Vu||i===Hu||i===zu||i===Gu||i===Wu||i===ju||i===$u||i===qu||i===Xu||i===Yu||i===Zu||i===Ju)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Uu)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Bu)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vu)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Hu)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zu)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Gu)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wu)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ju)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$u)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===qu)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xu)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yu)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zu)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ju)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ku||i===Qu||i===ed)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ku)return o===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ed)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===td||i===nd||i===id||i===rd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===td)return s.COMPRESSED_RED_RGTC1_EXT;if(i===nd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===id)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===no?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var ON=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kN=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Um=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new va(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new In({vertexShader:ON,fragmentShader:kN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wn(new ba(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bm=class extends ei{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,h=null,g=null,x=typeof XRWebGLBinding<"u",m=new Um,p={},M=t.getContextAttributes(),E=null,T=null,C=[],S=[],A=new et,P=null,b=new an;b.viewport=new Tt;let v=new an;v.viewport=new Tt;let R=[b,v],F=new hu,V=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Z=C[$];return Z===void 0&&(Z=new eo,C[$]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function($){let Z=C[$];return Z===void 0&&(Z=new eo,C[$]=Z),Z.getGripSpace()},this.getHand=function($){let Z=C[$];return Z===void 0&&(Z=new eo,C[$]=Z),Z.getHandSpace()};function G($){let Z=S.indexOf($.inputSource);if(Z===-1)return;let fe=C[Z];fe!==void 0&&(fe.update($.inputSource,$.frame,l||o),fe.dispatchEvent({type:$.type,data:$.inputSource}))}function q(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",K);for(let $=0;$<C.length;$++){let Z=S[$];Z!==null&&(S[$]=null,C[$].disconnect(Z))}V=null,W=null,m.reset();for(let $ in p)delete p[$];e.setRenderTarget(E),h=null,f=null,d=null,r=null,T=null,pt.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function($){return cr(this,null,function*(){if(r=$,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",q),r.addEventListener("inputsourceschange",K),M.xrCompatible!==!0&&(yield t.makeXRCompatible()),P=e.getPixelRatio(),e.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,ke=null,ve=null;M.depth&&(ve=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=M.stencil?io:js,ke=M.stencil?no:rr);let je={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(je),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),T=new ti(f.textureWidth,f.textureHeight,{format:Rn,type:si,depthTexture:new ya(f.textureWidth,f.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let fe={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),T=new ti(h.framebufferWidth,h.framebufferHeight,{format:Rn,type:si,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=yield r.requestReferenceSpace(a),pt.setContext(r),pt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K($){for(let Z=0;Z<$.removed.length;Z++){let fe=$.removed[Z],ke=S.indexOf(fe);ke>=0&&(S[ke]=null,C[ke].disconnect(fe))}for(let Z=0;Z<$.added.length;Z++){let fe=$.added[Z],ke=S.indexOf(fe);if(ke===-1){for(let je=0;je<C.length;je++)if(je>=S.length){S.push(fe),ke=je;break}else if(S[je]===null){S[je]=fe,ke=je;break}if(ke===-1)break}let ve=C[ke];ve&&ve.connect(fe)}}let z=new k,ne=new k;function se($,Z,fe){z.setFromMatrixPosition(Z.matrixWorld),ne.setFromMatrixPosition(fe.matrixWorld);let ke=z.distanceTo(ne),ve=Z.projectionMatrix.elements,je=fe.projectionMatrix.elements,Vt=ve[14]/(ve[10]-1),We=ve[14]/(ve[10]+1),xt=(ve[9]+1)/ve[5],D=(ve[9]-1)/ve[5],$e=(ve[8]-1)/ve[0],qe=(je[8]+1)/je[0],mt=Vt*$e,me=Vt*qe,yt=ke/(-$e+qe),be=yt*-$e;if(Z.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(be),$.translateZ(yt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),ve[10]===-1)$.projectionMatrix.copy(Z.projectionMatrix),$.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{let Fe=Vt+yt,w=We+yt,y=mt-be,O=me+(ke-be),j=xt*We/w*Fe,Y=D*We/w*Fe;$.projectionMatrix.makePerspective(y,O,j,Y,Fe,w),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Me($,Z){Z===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Z.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let Z=$.near,fe=$.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),F.near=v.near=b.near=Z,F.far=v.far=b.far=fe,(V!==F.near||W!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),V=F.near,W=F.far),F.layers.mask=$.layers.mask|6,b.layers.mask=F.layers.mask&3,v.layers.mask=F.layers.mask&5;let ke=$.parent,ve=F.cameras;Me(F,ke);for(let je=0;je<ve.length;je++)Me(ve[je],ke);ve.length===2?se(F,b,v):F.projectionMatrix.copy(b.projectionMatrix),Je($,F,ke)};function Je($,Z,fe){fe===null?$.matrix.copy(Z.matrixWorld):($.matrix.copy(fe.matrixWorld),$.matrix.invert(),$.matrix.multiply(Z.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Z.projectionMatrix),$.projectionMatrixInverse.copy(Z.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ys*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function($){return p[$]};let lt=null;function ht($,Z){if(u=Z.getViewerPose(l||o),g=Z,u!==null){let fe=u.views;h!==null&&(e.setRenderTargetFramebuffer(T,h.framebuffer),e.setRenderTarget(T));let ke=!1;fe.length!==F.cameras.length&&(F.cameras.length=0,ke=!0);for(let We=0;We<fe.length;We++){let xt=fe[We],D=null;if(h!==null)D=h.getViewport(xt);else{let qe=d.getViewSubImage(f,xt);D=qe.viewport,We===0&&(e.setRenderTargetTextures(T,qe.colorTexture,qe.depthStencilTexture),e.setRenderTarget(T))}let $e=R[We];$e===void 0&&($e=new an,$e.layers.enable(We),$e.viewport=new Tt,R[We]=$e),$e.matrix.fromArray(xt.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(xt.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(D.x,D.y,D.width,D.height),We===0&&(F.matrix.copy($e.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ke===!0&&F.cameras.push($e)}let ve=r.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let We=d.getDepthInformation(fe[0]);We&&We.isValid&&We.texture&&m.init(We,r.renderState)}if(ve&&ve.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let We=0;We<fe.length;We++){let xt=fe[We].camera;if(xt){let D=p[xt];D||(D=new va,p[xt]=D);let $e=d.getCameraImage(xt);D.sourceTexture=$e}}}}for(let fe=0;fe<C.length;fe++){let ke=S[fe],ve=C[fe];ke!==null&&ve!==void 0&&ve.update(ke,Z,l||o)}lt&&lt($,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}let pt=new Eb;pt.setAnimationLoop(ht),this.setAnimationLoop=function($){lt=$},this.dispose=function(){}}},Kr=new jr,UN=new At;function BN(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Mm(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,M,E,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,T)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,M,E):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p),E=M.envMap,T=M.envMapRotation;E&&(m.envMap.value=E,Kr.copy(T),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),m.envMapRotation.value.setFromMatrix4(UN.makeRotationFromEuler(Kr)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function VN(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,E){let T=E.program;i.uniformBlockBinding(M,T)}function l(M,E){let T=r[M.id];T===void 0&&(g(M),T=u(M),r[M.id]=T,M.addEventListener("dispose",m));let C=E.program;i.updateUBOMapping(M,C);let S=e.render.frame;s[M.id]!==S&&(f(M),s[M.id]=S)}function u(M){let E=d();M.__bindingPointIndex=E;let T=n.createBuffer(),C=M.__size,S=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,C,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,T),T}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let E=r[M.id],T=M.uniforms,C=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let S=0,A=T.length;S<A;S++){let P=Array.isArray(T[S])?T[S]:[T[S]];for(let b=0,v=P.length;b<v;b++){let R=P[b];if(h(R,S,b,C)===!0){let F=R.__offset,V=Array.isArray(R.value)?R.value:[R.value],W=0;for(let G=0;G<V.length;G++){let q=V[G],K=x(q);typeof q=="number"||typeof q=="boolean"?(R.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,F+W,R.__data)):q.isMatrix3?(R.__data[0]=q.elements[0],R.__data[1]=q.elements[1],R.__data[2]=q.elements[2],R.__data[3]=0,R.__data[4]=q.elements[3],R.__data[5]=q.elements[4],R.__data[6]=q.elements[5],R.__data[7]=0,R.__data[8]=q.elements[6],R.__data[9]=q.elements[7],R.__data[10]=q.elements[8],R.__data[11]=0):(q.toArray(R.__data,W),W+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(M,E,T,C){let S=M.value,A=E+"_"+T;if(C[A]===void 0)return typeof S=="number"||typeof S=="boolean"?C[A]=S:C[A]=S.clone(),!0;{let P=C[A];if(typeof S=="number"||typeof S=="boolean"){if(P!==S)return C[A]=S,!0}else if(P.equals(S)===!1)return P.copy(S),!0}return!1}function g(M){let E=M.uniforms,T=0,C=16;for(let A=0,P=E.length;A<P;A++){let b=Array.isArray(E[A])?E[A]:[E[A]];for(let v=0,R=b.length;v<R;v++){let F=b[v],V=Array.isArray(F.value)?F.value:[F.value];for(let W=0,G=V.length;W<G;W++){let q=V[W],K=x(q),z=T%C,ne=z%K.boundary,se=z+ne;T+=ne,se!==0&&C-se<K.storage&&(T+=C-se),F.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=T,T+=K.storage}}}let S=T%C;return S>0&&(T+=C-S),M.__size=T,M.__cache={},this}function x(M){let E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ie("WebGLRenderer: Unsupported uniform value type.",M),E}function m(M){let E=M.target;E.removeEventListener("dispose",m);let T=o.indexOf(E.__bindingPointIndex);o.splice(T,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function p(){for(let M in r)n.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}var HN=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]),wi=null;function zN(){return wi===null&&(wi=new Kl(HN,32,32,Du,Yr),wi.minFilter=bn,wi.magFilter=bn,wi.wrapS=Qn,wi.wrapT=Qn,wi.generateMipmaps=!1,wi.needsUpdate=!0),wi}var Mb=class{constructor(e={}){let{canvas:t=Y_(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;let g=new Set([Iu,Au,Cu]),x=new Set([si,rr,to,no,wu,Tu]),m=new Uint32Array(4),p=new Int32Array(4),M=null,E=null,T=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,A=!1;this._outputColorSpace=vn;let P=0,b=0,v=null,R=-1,F=null,V=new Tt,W=new Tt,G=null,q=new tt(0),K=0,z=t.width,ne=t.height,se=1,Me=null,Je=null,lt=new Tt(0,0,z,ne),ht=new Tt(0,0,z,ne),pt=!1,$=new xa,Z=!1,fe=!1,ke=new At,ve=new k,je=new Tt,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},We=!1;function xt(){return v===null?se:1}let D=i;function $e(_,N){return t.getContext(_,N)}try{let _={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"181"}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",X,!1),t.addEventListener("webglcontextcreationerror",he,!1),D===null){let N="webgl2";if(D=$e(N,_),D===null)throw $e(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw _("WebGLRenderer: "+_.message),_}let qe,mt,me,yt,be,Fe,w,y,O,j,Y,H,ye,ae,Ee,ge,J,te,De,we,ue,Re,I,ce;function ie(){qe=new rR(D),qe.init(),Re=new FN(D,qe),mt=new Y1(D,qe,e,Re),me=new PN(D,qe),mt.reversedDepthBuffer&&f&&me.buffers.depth.setReversed(!0),yt=new aR(D),be=new _N,Fe=new LN(D,qe,me,be,mt,Re,yt),w=new J1(S),y=new iR(S),O=new dA(D),I=new q1(D,O),j=new sR(D,O,yt,I),Y=new lR(D,j,O,yt),De=new cR(D,mt,Fe),ge=new Z1(be),H=new vN(S,w,y,qe,mt,I,ge),ye=new BN(S,be),ae=new MN,Ee=new DN(qe),te=new $1(S,w,y,me,Y,h,c),J=new RN(S,Y,mt),ce=new VN(D,yt,mt,me),we=new X1(D,qe,yt),ue=new oR(D,qe,yt),yt.programs=H.programs,S.capabilities=mt,S.extensions=qe,S.properties=be,S.renderLists=ae,S.shadowMap=J,S.state=me,S.info=yt}ie();let re=new Bm(S,D);this.xr=re,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let _=qe.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=qe.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(_){_!==void 0&&(se=_,this.setSize(z,ne,!1))},this.getSize=function(_){return _.set(z,ne)},this.setSize=function(_,N,U=!0){if(re.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}z=_,ne=N,t.width=Math.floor(_*se),t.height=Math.floor(N*se),U===!0&&(t.style.width=_+"px",t.style.height=N+"px"),this.setViewport(0,0,_,N)},this.getDrawingBufferSize=function(_){return _.set(z*se,ne*se).floor()},this.setDrawingBufferSize=function(_,N,U){z=_,ne=N,se=U,t.width=Math.floor(_*U),t.height=Math.floor(N*U),this.setViewport(0,0,_,N)},this.getCurrentViewport=function(_){return _.copy(V)},this.getViewport=function(_){return _.copy(lt)},this.setViewport=function(_,N,U,B){_.isVector4?lt.set(_.x,_.y,_.z,_.w):lt.set(_,N,U,B),me.viewport(V.copy(lt).multiplyScalar(se).round())},this.getScissor=function(_){return _.copy(ht)},this.setScissor=function(_,N,U,B){_.isVector4?ht.set(_.x,_.y,_.z,_.w):ht.set(_,N,U,B),me.scissor(W.copy(ht).multiplyScalar(se).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(_){me.setScissorTest(pt=_)},this.setOpaqueSort=function(_){Me=_},this.setTransparentSort=function(_){Je=_},this.getClearColor=function(_){return _.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor(...arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha(...arguments)},this.clear=function(_=!0,N=!0,U=!0){let B=0;if(_){let L=!1;if(v!==null){let ee=v.texture.format;L=g.has(ee)}if(L){let ee=v.texture.type,le=x.has(ee),pe=te.getClearColor(),de=te.getClearAlpha(),Te=pe.r,Ae=pe.g,_e=pe.b;le?(m[0]=Te,m[1]=Ae,m[2]=_e,m[3]=de,D.clearBufferuiv(D.COLOR,0,m)):(p[0]=Te,p[1]=Ae,p[2]=_e,p[3]=de,D.clearBufferiv(D.COLOR,0,p))}else B|=D.COLOR_BUFFER_BIT}N&&(B|=D.DEPTH_BUFFER_BIT),U&&(B|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",X,!1),t.removeEventListener("webglcontextcreationerror",he,!1),te.dispose(),ae.dispose(),Ee.dispose(),be.dispose(),w.dispose(),y.dispose(),Y.dispose(),I.dispose(),ce.dispose(),H.dispose(),re.dispose(),re.removeEventListener("sessionstart",Vm),re.removeEventListener("sessionend",Hm),or.stop()};function Q(_){_.preventDefault(),_m("WebGLRenderer: Context Lost."),A=!0}function X(){_m("WebGLRenderer: Context Restored."),A=!1;let _=yt.autoReset,N=J.enabled,U=J.autoUpdate,B=J.needsUpdate,L=J.type;ie(),yt.autoReset=_,J.enabled=N,J.autoUpdate=U,J.needsUpdate=B,J.type=L}function he(_){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function Ne(_){let N=_.target;N.removeEventListener("dispose",Ne),gt(N)}function gt(_){ut(_),be.remove(_)}function ut(_){let N=be.get(_).programs;N!==void 0&&(N.forEach(function(U){H.releaseProgram(U)}),_.isShaderMaterial&&H.releaseShaderCache(_))}this.renderBufferDirect=function(_,N,U,B,L,ee){N===null&&(N=Vt);let le=L.isMesh&&L.matrixWorld.determinant()<0,pe=Ab(_,N,U,B,L);me.setMaterial(B,le);let de=U.index,Te=1;if(B.wireframe===!0){if(de=j.getWireframeAttribute(U),de===void 0)return;Te=2}let Ae=U.drawRange,_e=U.attributes.position,Xe=Ae.start*Te,dt=(Ae.start+Ae.count)*Te;ee!==null&&(Xe=Math.max(Xe,ee.start*Te),dt=Math.min(dt,(ee.start+ee.count)*Te)),de!==null?(Xe=Math.max(Xe,0),dt=Math.min(dt,de.count)):_e!=null&&(Xe=Math.max(Xe,0),dt=Math.min(dt,_e.count));let bt=dt-Xe;if(bt<0||bt===1/0)return;I.setup(L,B,pe,U,de);let Mt,ft=we;if(de!==null&&(Mt=O.get(de),ft=ue,ft.setIndex(Mt)),L.isMesh)B.wireframe===!0?(me.setLineWidth(B.wireframeLinewidth*xt()),ft.setMode(D.LINES)):ft.setMode(D.TRIANGLES);else if(L.isLine){let Se=B.linewidth;Se===void 0&&(Se=1),me.setLineWidth(Se*xt()),L.isLineSegments?ft.setMode(D.LINES):L.isLineLoop?ft.setMode(D.LINE_LOOP):ft.setMode(D.LINE_STRIP)}else L.isPoints?ft.setMode(D.POINTS):L.isSprite&&ft.setMode(D.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)Xs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(qe.get("WEBGL_multi_draw"))ft.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{let Se=L._multiDrawStarts,vt=L._multiDrawCounts,it=L._multiDrawCount,ln=de?O.get(de).bytesPerElement:1,es=be.get(B).currentProgram.getUniforms();for(let un=0;un<it;un++)es.setValue(D,"_gl_DrawID",un),ft.render(Se[un]/ln,vt[un])}else if(L.isInstancedMesh)ft.renderInstances(Xe,bt,L.count);else if(U.isInstancedBufferGeometry){let Se=U._maxInstanceCount!==void 0?U._maxInstanceCount:1/0,vt=Math.min(U.instanceCount,Se);ft.renderInstances(Xe,bt,vt)}else ft.render(Xe,bt)};function jn(_,N,U){_.transparent===!0&&_.side===ii&&_.forceSinglePass===!1?(_.side=Qt,_.needsUpdate=!0,Na(_,N,U),_.side=_i,_.needsUpdate=!0,Na(_,N,U),_.side=ii):Na(_,N,U)}this.compile=function(_,N,U=null){U===null&&(U=_),E=Ee.get(U),E.init(N),C.push(E),U.traverseVisible(function(L){L.isLight&&L.layers.test(N.layers)&&(E.pushLight(L),L.castShadow&&E.pushShadow(L))}),_!==U&&_.traverseVisible(function(L){L.isLight&&L.layers.test(N.layers)&&(E.pushLight(L),L.castShadow&&E.pushShadow(L))}),E.setupLights();let B=new Set;return _.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;let ee=L.material;if(ee)if(Array.isArray(ee))for(let le=0;le<ee.length;le++){let pe=ee[le];jn(pe,U,L),B.add(pe)}else jn(ee,U,L),B.add(ee)}),E=C.pop(),B},this.compileAsync=function(_,N,U=null){let B=this.compile(_,N,U);return new Promise(L=>{function ee(){if(B.forEach(function(le){be.get(le).currentProgram.isReady()&&B.delete(le)}),B.size===0){L(_);return}setTimeout(ee,10)}qe.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let Nn=null;function Db(_){Nn&&Nn(_)}function Vm(){or.stop()}function Hm(){or.start()}let or=new Eb;or.setAnimationLoop(Db),typeof self<"u"&&or.setContext(self),this.setAnimationLoop=function(_){Nn=_,re.setAnimationLoop(_),_===null?or.stop():or.start()},re.addEventListener("sessionstart",Vm),re.addEventListener("sessionend",Hm),this.render=function(_,N){if(N!==void 0&&N.isCamera!==!0){ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(N),N=re.getCamera()),_.isScene===!0&&_.onBeforeRender(S,_,N,v),E=Ee.get(_,C.length),E.init(N),C.push(E),ke.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),$.setFromProjectionMatrix(ke,Gn,N.reversedDepth),fe=this.localClippingEnabled,Z=ge.init(this.clippingPlanes,fe),M=ae.get(_,T.length),M.init(),T.push(M),re.enabled===!0&&re.isPresenting===!0){let ee=S.xr.getDepthSensingMesh();ee!==null&&ud(ee,N,-1/0,S.sortObjects)}ud(_,N,0,S.sortObjects),M.finish(),S.sortObjects===!0&&M.sort(Me,Je),We=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,We&&te.addToRenderList(M,_),this.info.render.frame++,Z===!0&&ge.beginShadows();let U=E.state.shadowsArray;J.render(U,_,N),Z===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=M.opaque,L=M.transmissive;if(E.setupLights(),N.isArrayCamera){let ee=N.cameras;if(L.length>0)for(let le=0,pe=ee.length;le<pe;le++){let de=ee[le];Gm(B,L,_,de)}We&&te.render(_);for(let le=0,pe=ee.length;le<pe;le++){let de=ee[le];zm(M,_,de,de.viewport)}}else L.length>0&&Gm(B,L,_,N),We&&te.render(_),zm(M,_,N);v!==null&&b===0&&(Fe.updateMultisampleRenderTarget(v),Fe.updateRenderTargetMipmap(v)),_.isScene===!0&&_.onAfterRender(S,_,N),I.resetDefaultState(),R=-1,F=null,C.pop(),C.length>0?(E=C[C.length-1],Z===!0&&ge.setGlobalState(S.clippingPlanes,E.state.camera)):E=null,T.pop(),T.length>0?M=T[T.length-1]:M=null};function ud(_,N,U,B){if(_.visible===!1)return;if(_.layers.test(N.layers)){if(_.isGroup)U=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(N);else if(_.isLight)E.pushLight(_),_.castShadow&&E.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||$.intersectsSprite(_)){B&&je.setFromMatrixPosition(_.matrixWorld).applyMatrix4(ke);let le=Y.update(_),pe=_.material;pe.visible&&M.push(_,le,pe,U,je.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||$.intersectsObject(_))){let le=Y.update(_),pe=_.material;if(B&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),je.copy(_.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),je.copy(le.boundingSphere.center)),je.applyMatrix4(_.matrixWorld).applyMatrix4(ke)),Array.isArray(pe)){let de=le.groups;for(let Te=0,Ae=de.length;Te<Ae;Te++){let _e=de[Te],Xe=pe[_e.materialIndex];Xe&&Xe.visible&&M.push(_,le,Xe,U,je.z,_e)}}else pe.visible&&M.push(_,le,pe,U,je.z,null)}}let ee=_.children;for(let le=0,pe=ee.length;le<pe;le++)ud(ee[le],N,U,B)}function zm(_,N,U,B){let{opaque:L,transmissive:ee,transparent:le}=_;E.setupLightsView(U),Z===!0&&ge.setGlobalState(S.clippingPlanes,U),B&&me.viewport(V.copy(B)),L.length>0&&Ra(L,N,U),ee.length>0&&Ra(ee,N,U),le.length>0&&Ra(le,N,U),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Gm(_,N,U,B){if((U.isScene===!0?U.overrideMaterial:null)!==null)return;E.state.transmissionRenderTarget[B.id]===void 0&&(E.state.transmissionRenderTarget[B.id]=new ti(1,1,{generateMipmaps:!0,type:qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float")?Yr:si,minFilter:ir,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));let ee=E.state.transmissionRenderTarget[B.id],le=B.viewport||V;ee.setSize(le.z*S.transmissionResolutionScale,le.w*S.transmissionResolutionScale);let pe=S.getRenderTarget(),de=S.getActiveCubeFace(),Te=S.getActiveMipmapLevel();S.setRenderTarget(ee),S.getClearColor(q),K=S.getClearAlpha(),K<1&&S.setClearColor(16777215,.5),S.clear(),We&&te.render(U);let Ae=S.toneMapping;S.toneMapping=Mi;let _e=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),E.setupLightsView(B),Z===!0&&ge.setGlobalState(S.clippingPlanes,B),Ra(_,U,B),Fe.updateMultisampleRenderTarget(ee),Fe.updateRenderTargetMipmap(ee),qe.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let dt=0,bt=N.length;dt<bt;dt++){let Mt=N[dt],{object:ft,geometry:Se,material:vt,group:it}=Mt;if(vt.side===ii&&ft.layers.test(B.layers)){let ln=vt.side;vt.side=Qt,vt.needsUpdate=!0,Wm(ft,U,B,Se,vt,it),vt.side=ln,vt.needsUpdate=!0,Xe=!0}}Xe===!0&&(Fe.updateMultisampleRenderTarget(ee),Fe.updateRenderTargetMipmap(ee))}S.setRenderTarget(pe,de,Te),S.setClearColor(q,K),_e!==void 0&&(B.viewport=_e),S.toneMapping=Ae}function Ra(_,N,U){let B=N.isScene===!0?N.overrideMaterial:null;for(let L=0,ee=_.length;L<ee;L++){let le=_[L],{object:pe,geometry:de,group:Te}=le,Ae=le.material;Ae.allowOverride===!0&&B!==null&&(Ae=B),pe.layers.test(U.layers)&&Wm(pe,N,U,de,Ae,Te)}}function Wm(_,N,U,B,L,ee){_.onBeforeRender(S,N,U,B,L,ee),_.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),L.onBeforeRender(S,N,U,B,_,ee),L.transparent===!0&&L.side===ii&&L.forceSinglePass===!1?(L.side=Qt,L.needsUpdate=!0,S.renderBufferDirect(U,N,B,L,_,ee),L.side=_i,L.needsUpdate=!0,S.renderBufferDirect(U,N,B,L,_,ee),L.side=ii):S.renderBufferDirect(U,N,B,L,_,ee),_.onAfterRender(S,N,U,B,L,ee)}function Na(_,N,U){N.isScene!==!0&&(N=Vt);let B=be.get(_),L=E.state.lights,ee=E.state.shadowsArray,le=L.state.version,pe=H.getParameters(_,L.state,ee,N,U),de=H.getProgramCacheKey(pe),Te=B.programs;B.environment=_.isMeshStandardMaterial?N.environment:null,B.fog=N.fog,B.envMap=(_.isMeshStandardMaterial?y:w).get(_.envMap||B.environment),B.envMapRotation=B.environment!==null&&_.envMap===null?N.environmentRotation:_.envMapRotation,Te===void 0&&(_.addEventListener("dispose",Ne),Te=new Map,B.programs=Te);let Ae=Te.get(de);if(Ae!==void 0){if(B.currentProgram===Ae&&B.lightsStateVersion===le)return $m(_,pe),Ae}else pe.uniforms=H.getUniforms(_),_.onBeforeCompile(pe,S),Ae=H.acquireProgram(pe,de),Te.set(de,Ae),B.uniforms=pe.uniforms;let _e=B.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(_e.clippingPlanes=ge.uniform),$m(_,pe),B.needsLights=Rb(_),B.lightsStateVersion=le,B.needsLights&&(_e.ambientLightColor.value=L.state.ambient,_e.lightProbe.value=L.state.probe,_e.directionalLights.value=L.state.directional,_e.directionalLightShadows.value=L.state.directionalShadow,_e.spotLights.value=L.state.spot,_e.spotLightShadows.value=L.state.spotShadow,_e.rectAreaLights.value=L.state.rectArea,_e.ltc_1.value=L.state.rectAreaLTC1,_e.ltc_2.value=L.state.rectAreaLTC2,_e.pointLights.value=L.state.point,_e.pointLightShadows.value=L.state.pointShadow,_e.hemisphereLights.value=L.state.hemi,_e.directionalShadowMap.value=L.state.directionalShadowMap,_e.directionalShadowMatrix.value=L.state.directionalShadowMatrix,_e.spotShadowMap.value=L.state.spotShadowMap,_e.spotLightMatrix.value=L.state.spotLightMatrix,_e.spotLightMap.value=L.state.spotLightMap,_e.pointShadowMap.value=L.state.pointShadowMap,_e.pointShadowMatrix.value=L.state.pointShadowMatrix),B.currentProgram=Ae,B.uniformsList=null,Ae}function jm(_){if(_.uniformsList===null){let N=_.currentProgram.getUniforms();_.uniformsList=oo.seqWithValue(N.seq,_.uniforms)}return _.uniformsList}function $m(_,N){let U=be.get(_);U.outputColorSpace=N.outputColorSpace,U.batching=N.batching,U.batchingColor=N.batchingColor,U.instancing=N.instancing,U.instancingColor=N.instancingColor,U.instancingMorph=N.instancingMorph,U.skinning=N.skinning,U.morphTargets=N.morphTargets,U.morphNormals=N.morphNormals,U.morphColors=N.morphColors,U.morphTargetsCount=N.morphTargetsCount,U.numClippingPlanes=N.numClippingPlanes,U.numIntersection=N.numClipIntersection,U.vertexAlphas=N.vertexAlphas,U.vertexTangents=N.vertexTangents,U.toneMapping=N.toneMapping}function Ab(_,N,U,B,L){N.isScene!==!0&&(N=Vt),Fe.resetTextureUnits();let ee=N.fog,le=B.isMeshStandardMaterial?N.environment:null,pe=v===null?S.outputColorSpace:v.isXRRenderTarget===!0?v.texture.colorSpace:Gr,de=(B.isMeshStandardMaterial?y:w).get(B.envMap||le),Te=B.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,Ae=!!U.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),_e=!!U.morphAttributes.position,Xe=!!U.morphAttributes.normal,dt=!!U.morphAttributes.color,bt=Mi;B.toneMapped&&(v===null||v.isXRRenderTarget===!0)&&(bt=S.toneMapping);let Mt=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ft=Mt!==void 0?Mt.length:0,Se=be.get(B),vt=E.state.lights;if(Z===!0&&(fe===!0||_!==F)){let qt=_===F&&B.id===R;ge.setState(B,_,qt)}let it=!1;B.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==vt.state.version||Se.outputColorSpace!==pe||L.isBatchedMesh&&Se.batching===!1||!L.isBatchedMesh&&Se.batching===!0||L.isBatchedMesh&&Se.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&Se.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&Se.instancing===!1||!L.isInstancedMesh&&Se.instancing===!0||L.isSkinnedMesh&&Se.skinning===!1||!L.isSkinnedMesh&&Se.skinning===!0||L.isInstancedMesh&&Se.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&Se.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&Se.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&Se.instancingMorph===!1&&L.morphTexture!==null||Se.envMap!==de||B.fog===!0&&Se.fog!==ee||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==ge.numPlanes||Se.numIntersection!==ge.numIntersection)||Se.vertexAlphas!==Te||Se.vertexTangents!==Ae||Se.morphTargets!==_e||Se.morphNormals!==Xe||Se.morphColors!==dt||Se.toneMapping!==bt||Se.morphTargetsCount!==ft)&&(it=!0):(it=!0,Se.__version=B.version);let ln=Se.currentProgram;it===!0&&(ln=Na(B,N,L));let es=!1,un=!1,co=!1,_t=ln.getUniforms(),en=Se.uniforms;if(me.useProgram(ln.program)&&(es=!0,un=!0,co=!0),B.id!==R&&(R=B.id,un=!0),es||F!==_){me.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),_t.setValue(D,"projectionMatrix",_.projectionMatrix),_t.setValue(D,"viewMatrix",_.matrixWorldInverse);let tn=_t.map.cameraPosition;tn!==void 0&&tn.setValue(D,ve.setFromMatrixPosition(_.matrixWorld)),mt.logarithmicDepthBuffer&&_t.setValue(D,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&_t.setValue(D,"isOrthographic",_.isOrthographicCamera===!0),F!==_&&(F=_,un=!0,co=!0)}if(L.isSkinnedMesh){_t.setOptional(D,L,"bindMatrix"),_t.setOptional(D,L,"bindMatrixInverse");let qt=L.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),_t.setValue(D,"boneTexture",qt.boneTexture,Fe))}L.isBatchedMesh&&(_t.setOptional(D,L,"batchingTexture"),_t.setValue(D,"batchingTexture",L._matricesTexture,Fe),_t.setOptional(D,L,"batchingIdTexture"),_t.setValue(D,"batchingIdTexture",L._indirectTexture,Fe),_t.setOptional(D,L,"batchingColorTexture"),L._colorsTexture!==null&&_t.setValue(D,"batchingColorTexture",L._colorsTexture,Fe));let Sn=U.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&De.update(L,U,ln),(un||Se.receiveShadow!==L.receiveShadow)&&(Se.receiveShadow=L.receiveShadow,_t.setValue(D,"receiveShadow",L.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(en.envMap.value=de,en.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&N.environment!==null&&(en.envMapIntensity.value=N.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=zN()),un&&(_t.setValue(D,"toneMappingExposure",S.toneMappingExposure),Se.needsLights&&Ib(en,co),ee&&B.fog===!0&&ye.refreshFogUniforms(en,ee),ye.refreshMaterialUniforms(en,B,se,ne,E.state.transmissionRenderTarget[_.id]),oo.upload(D,jm(Se),en,Fe)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(oo.upload(D,jm(Se),en,Fe),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&_t.setValue(D,"center",L.center),_t.setValue(D,"modelViewMatrix",L.modelViewMatrix),_t.setValue(D,"normalMatrix",L.normalMatrix),_t.setValue(D,"modelMatrix",L.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let qt=B.uniformsGroups;for(let tn=0,dd=qt.length;tn<dd;tn++){let ar=qt[tn];ce.update(ar,ln),ce.bind(ar,ln)}}return ln}function Ib(_,N){_.ambientLightColor.needsUpdate=N,_.lightProbe.needsUpdate=N,_.directionalLights.needsUpdate=N,_.directionalLightShadows.needsUpdate=N,_.pointLights.needsUpdate=N,_.pointLightShadows.needsUpdate=N,_.spotLights.needsUpdate=N,_.spotLightShadows.needsUpdate=N,_.rectAreaLights.needsUpdate=N,_.hemisphereLights.needsUpdate=N}function Rb(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(_,N,U){let B=be.get(_);B.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),be.get(_.texture).__webglTexture=N,be.get(_.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:U,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,N){let U=be.get(_);U.__webglFramebuffer=N,U.__useDefaultFramebuffer=N===void 0};let Nb=D.createFramebuffer();this.setRenderTarget=function(_,N=0,U=0){v=_,P=N,b=U;let B=!0,L=null,ee=!1,le=!1;if(_){let de=be.get(_);if(de.__useDefaultFramebuffer!==void 0)me.bindFramebuffer(D.FRAMEBUFFER,null),B=!1;else if(de.__webglFramebuffer===void 0)Fe.setupRenderTarget(_);else if(de.__hasExternalTextures)Fe.rebindTextures(_,be.get(_.texture).__webglTexture,be.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let _e=_.depthTexture;if(de.__boundDepthTexture!==_e){if(_e!==null&&be.has(_e)&&(_.width!==_e.image.width||_.height!==_e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Fe.setupDepthRenderbuffer(_)}}let Te=_.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(le=!0);let Ae=be.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Ae[N])?L=Ae[N][U]:L=Ae[N],ee=!0):_.samples>0&&Fe.useMultisampledRTT(_)===!1?L=be.get(_).__webglMultisampledFramebuffer:Array.isArray(Ae)?L=Ae[U]:L=Ae,V.copy(_.viewport),W.copy(_.scissor),G=_.scissorTest}else V.copy(lt).multiplyScalar(se).floor(),W.copy(ht).multiplyScalar(se).floor(),G=pt;if(U!==0&&(L=Nb),me.bindFramebuffer(D.FRAMEBUFFER,L)&&B&&me.drawBuffers(_,L),me.viewport(V),me.scissor(W),me.setScissorTest(G),ee){let de=be.get(_.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,de.__webglTexture,U)}else if(le){let de=N;for(let Te=0;Te<_.textures.length;Te++){let Ae=be.get(_.textures[Te]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Te,Ae.__webglTexture,U,de)}}else if(_!==null&&U!==0){let de=be.get(_.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,de.__webglTexture,U)}R=-1},this.readRenderTargetPixels=function(_,N,U,B,L,ee,le,pe=0){if(!(_&&_.isWebGLRenderTarget)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=be.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&le!==void 0&&(de=de[le]),de){me.bindFramebuffer(D.FRAMEBUFFER,de);try{let Te=_.textures[pe],Ae=Te.format,_e=Te.type;if(!mt.textureFormatReadable(Ae)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!mt.textureTypeReadable(_e)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=_.width-B&&U>=0&&U<=_.height-L&&(_.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+pe),D.readPixels(N,U,B,L,Re.convert(Ae),Re.convert(_e),ee))}finally{let Te=v!==null?be.get(v).__webglFramebuffer:null;me.bindFramebuffer(D.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=function(_,N,U,B,L,ee,le,pe=0){return cr(this,null,function*(){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=be.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&le!==void 0&&(de=de[le]),de)if(N>=0&&N<=_.width-B&&U>=0&&U<=_.height-L){me.bindFramebuffer(D.FRAMEBUFFER,de);let Te=_.textures[pe],Ae=Te.format,_e=Te.type;if(!mt.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!mt.textureTypeReadable(_e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Xe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Xe),D.bufferData(D.PIXEL_PACK_BUFFER,ee.byteLength,D.STREAM_READ),_.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+pe),D.readPixels(N,U,B,L,Re.convert(Ae),Re.convert(_e),0);let dt=v!==null?be.get(v).__webglFramebuffer:null;me.bindFramebuffer(D.FRAMEBUFFER,dt);let bt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),yield Z_(D,bt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Xe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ee),D.deleteBuffer(Xe),D.deleteSync(bt),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")})},this.copyFramebufferToTexture=function(_,N=null,U=0){let B=Math.pow(2,-U),L=Math.floor(_.image.width*B),ee=Math.floor(_.image.height*B),le=N!==null?N.x:0,pe=N!==null?N.y:0;Fe.setTexture2D(_,0),D.copyTexSubImage2D(D.TEXTURE_2D,U,0,0,le,pe,L,ee),me.unbindTexture()};let Pb=D.createFramebuffer(),Lb=D.createFramebuffer();this.copyTextureToTexture=function(_,N,U=null,B=null,L=0,ee=null){ee===null&&(L!==0?(Xs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=L,L=0):ee=0);let le,pe,de,Te,Ae,_e,Xe,dt,bt,Mt=_.isCompressedTexture?_.mipmaps[ee]:_.image;if(U!==null)le=U.max.x-U.min.x,pe=U.max.y-U.min.y,de=U.isBox3?U.max.z-U.min.z:1,Te=U.min.x,Ae=U.min.y,_e=U.isBox3?U.min.z:0;else{let Sn=Math.pow(2,-L);le=Math.floor(Mt.width*Sn),pe=Math.floor(Mt.height*Sn),_.isDataArrayTexture?de=Mt.depth:_.isData3DTexture?de=Math.floor(Mt.depth*Sn):de=1,Te=0,Ae=0,_e=0}B!==null?(Xe=B.x,dt=B.y,bt=B.z):(Xe=0,dt=0,bt=0);let ft=Re.convert(N.format),Se=Re.convert(N.type),vt;N.isData3DTexture?(Fe.setTexture3D(N,0),vt=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Fe.setTexture2DArray(N,0),vt=D.TEXTURE_2D_ARRAY):(Fe.setTexture2D(N,0),vt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);let it=D.getParameter(D.UNPACK_ROW_LENGTH),ln=D.getParameter(D.UNPACK_IMAGE_HEIGHT),es=D.getParameter(D.UNPACK_SKIP_PIXELS),un=D.getParameter(D.UNPACK_SKIP_ROWS),co=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Mt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Mt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Te),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ae),D.pixelStorei(D.UNPACK_SKIP_IMAGES,_e);let _t=_.isDataArrayTexture||_.isData3DTexture,en=N.isDataArrayTexture||N.isData3DTexture;if(_.isDepthTexture){let Sn=be.get(_),qt=be.get(N),tn=be.get(Sn.__renderTarget),dd=be.get(qt.__renderTarget);me.bindFramebuffer(D.READ_FRAMEBUFFER,tn.__webglFramebuffer),me.bindFramebuffer(D.DRAW_FRAMEBUFFER,dd.__webglFramebuffer);for(let ar=0;ar<de;ar++)_t&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,be.get(_).__webglTexture,L,_e+ar),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,be.get(N).__webglTexture,ee,bt+ar)),D.blitFramebuffer(Te,Ae,le,pe,Xe,dt,le,pe,D.DEPTH_BUFFER_BIT,D.NEAREST);me.bindFramebuffer(D.READ_FRAMEBUFFER,null),me.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(L!==0||_.isRenderTargetTexture||be.has(_)){let Sn=be.get(_),qt=be.get(N);me.bindFramebuffer(D.READ_FRAMEBUFFER,Pb),me.bindFramebuffer(D.DRAW_FRAMEBUFFER,Lb);for(let tn=0;tn<de;tn++)_t?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Sn.__webglTexture,L,_e+tn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Sn.__webglTexture,L),en?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,qt.__webglTexture,ee,bt+tn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,qt.__webglTexture,ee),L!==0?D.blitFramebuffer(Te,Ae,le,pe,Xe,dt,le,pe,D.COLOR_BUFFER_BIT,D.NEAREST):en?D.copyTexSubImage3D(vt,ee,Xe,dt,bt+tn,Te,Ae,le,pe):D.copyTexSubImage2D(vt,ee,Xe,dt,Te,Ae,le,pe);me.bindFramebuffer(D.READ_FRAMEBUFFER,null),me.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else en?_.isDataTexture||_.isData3DTexture?D.texSubImage3D(vt,ee,Xe,dt,bt,le,pe,de,ft,Se,Mt.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(vt,ee,Xe,dt,bt,le,pe,de,ft,Mt.data):D.texSubImage3D(vt,ee,Xe,dt,bt,le,pe,de,ft,Se,Mt):_.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ee,Xe,dt,le,pe,ft,Se,Mt.data):_.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ee,Xe,dt,Mt.width,Mt.height,ft,Mt.data):D.texSubImage2D(D.TEXTURE_2D,ee,Xe,dt,le,pe,ft,Se,Mt);D.pixelStorei(D.UNPACK_ROW_LENGTH,it),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ln),D.pixelStorei(D.UNPACK_SKIP_PIXELS,es),D.pixelStorei(D.UNPACK_SKIP_ROWS,un),D.pixelStorei(D.UNPACK_SKIP_IMAGES,co),ee===0&&N.generateMipmaps&&D.generateMipmap(vt),me.unbindTexture()},this.initRenderTarget=function(_){be.get(_).__webglFramebuffer===void 0&&Fe.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?Fe.setTextureCube(_,0):_.isData3DTexture?Fe.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?Fe.setTexture2DArray(_,0):Fe.setTexture2D(_,0),me.unbindTexture()},this.resetState=function(){P=0,b=0,v=null,me.reset(),I.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}};export{zt as a,Xt as b,GN as c,WN as d,Ot as e,Kb as f,rt as g,Nd as h,Pd as i,qn as j,xo as k,yo as l,Ci as m,cM as n,lM as o,uM as p,fr as q,hr as r,yM as s,pr as t,nc as u,_M as v,vo as w,Ng as x,bM as y,_o as z,Ld as A,EM as B,SM as C,Fd as D,wM as E,TM as F,CM as G,DM as H,AM as I,IM as J,Ye as K,lc as L,ot as M,PM as N,Ze as O,Ht as P,Ce as Q,Co as R,lf as S,hn as T,yc as U,a0 as V,c0 as W,M0 as X,E0 as Y,vr as Z,gs as _,Fo as $,_r as aa,Un as ba,iE as ca,C0 as da,Ui as ea,dx as fa,PE as ga,HE as ha,zE as ia,Px as ja,WE as ka,jE as la,bs as ma,nS as na,rS as oa,vS as pa,Ho as qa,zo as ra,Nh as sa,hi as ta,Jt as ua,jo as va,Lr as wa,Hy as xa,$h as ya,uT as za,ll as Aa,jy as Ba,$y as Ca,VT as Da,fl as Ea,ev as Fa,Qo as Ga,$T as Ha,qT as Ia,sv as Ja,YT as Ka,ZT as La,JT as Ma,KT as Na,QT as Oa,ov as Pa,Kh as Qa,Qh as Ra,av as Sa,ep as Ta,tp as Ua,cv as Va,rC as Wa,uv as Xa,fv as Ya,hv as Za,aC as _a,cC as $a,lC as ab,uC as bb,pv as cb,mv as db,TC as eb,xv as fb,np as gb,IC as hb,RC as ib,PC as jb,bv as kb,L8 as lb,iD as mb,F8 as nb,gl as ob,aD as pb,fp as qb,Lv as rb,kv as sb,dD as tb,fD as ub,hD as vb,pp as wb,fG as xb,Uv as yb,pD as zb,mD as Ab,Qt as Bb,ii as Cb,cn as Db,bn as Eb,vn as Fb,ND as Gb,et as Hb,bi as Ib,k as Jb,ai as Kb,Js as Lb,tt as Mb,fa as Nb,_n as Ob,Mn as Pb,Wn as Qb,In as Rb,an as Sb,Vr as Tb,zp as Ub,Gp as Vb,Kn as Wb,Ql as Xb,jp as Yb,$p as Zb,qp as _b,Xp as $b,ba as ac,Yp as bc,Zp as cc,fu as dc,Jp as ec,Kp as fc,em as gc,nm as hc,im as ic,Mb as jc};
