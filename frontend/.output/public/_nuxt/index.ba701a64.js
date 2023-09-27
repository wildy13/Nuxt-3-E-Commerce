import{o as lt,a as at}from"./Button.c5f6c017.js";import{H as x,w as rt,c as je,m as ae,S as q,o as y,u as Y,P as pe,N as V,T as ot,t as ke,p as Ve,l as $,y as it,a as Le,b as ut,C as st,d as I,e as dt,f as ct,_ as ft}from"./use-outside-click.ed9b3a3a.js";import{k as P,r as f,l as B,m as c,q as C,s as R,v as T,F as pt,x as re,y as H,z as A,T as vt,A as mt,B as ht,C as gt,D as $e,_ as yt,E as bt,G as wt,H as Et,I as te,o as G,g as ve,w as M,b as k,J as Ee,a as le,h as Tt,K as St,f as Ue,c as Ce,t as Lt,i as Fe,L as $t}from"./entry.e3cc4c5d.js";import"./nuxt-link.4c9e1733.js";var me=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(me||{});let _e=P({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:n}){return()=>{let{features:l,...a}=e,r={"aria-hidden":(l&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(l&4)===4&&(l&2)!==2&&{display:"none"}}};return x({ourProps:r,theirProps:a,slot:{},attrs:n,slots:t,name:"Hidden"})}}});function Ct(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function Be(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function oe(){let e=[],t={addEventListener(n,l,a,r){return n.addEventListener(l,a,r),t.add(()=>n.removeEventListener(l,a,r))},requestAnimationFrame(...n){let l=requestAnimationFrame(...n);t.add(()=>cancelAnimationFrame(l))},nextFrame(...n){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...n)})},setTimeout(...n){let l=setTimeout(...n);t.add(()=>clearTimeout(l))},microTask(...n){let l={current:!0};return Be(()=>{l.current&&n[0]()}),t.add(()=>{l.current=!1})},style(n,l,a){let r=n.style.getPropertyValue(l);return Object.assign(n.style,{[l]:a}),this.add(()=>{Object.assign(n.style,{[l]:r})})},group(n){let l=oe();return n(l),this.add(()=>l.dispose())},add(n){return e.push(n),()=>{let l=e.indexOf(n);if(l>=0)for(let a of e.splice(l,1))a()}},dispose(){for(let n of e.splice(0))n()}};return t}var ne=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(ne||{});function Ft(){let e=f(0);return rt("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function Ie(e,t,n,l){je.isServer||B(a=>{e=e??window,e.addEventListener(t,n,l),a(()=>e.removeEventListener(t,n,l))})}function _t(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}function We(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.value){let l=y(n);l instanceof HTMLElement&&t.add(l)}return t}var qe=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(qe||{});let Z=Object.assign(P({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:f(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:n,expose:l}){let a=f(null);l({el:a,$el:a});let r=c(()=>ae(a)),o=f(!1);C(()=>o.value=!0),R(()=>o.value=!1),At({ownerDocument:r},c(()=>o.value&&!!(e.features&16)));let i=Ot({ownerDocument:r,container:a,initialFocus:c(()=>e.initialFocus)},c(()=>o.value&&!!(e.features&2)));Dt({ownerDocument:r,container:a,containers:e.containers,previousActiveElement:i},c(()=>o.value&&!!(e.features&8)));let u=Ft();function s(m){let b=y(a);b&&(w=>w())(()=>{Y(u.value,{[ne.Forwards]:()=>{pe(b,V.First,{skipElements:[m.relatedTarget]})},[ne.Backwards]:()=>{pe(b,V.Last,{skipElements:[m.relatedTarget]})}})})}let d=f(!1);function h(m){m.key==="Tab"&&(d.value=!0,requestAnimationFrame(()=>{d.value=!1}))}function p(m){if(!o.value)return;let b=We(e.containers);y(a)instanceof HTMLElement&&b.add(y(a));let w=m.relatedTarget;w instanceof HTMLElement&&w.dataset.headlessuiFocusGuard!=="true"&&(Ge(b,w)||(d.value?pe(y(a),Y(u.value,{[ne.Forwards]:()=>V.Next,[ne.Backwards]:()=>V.Previous})|V.WrapAround,{relativeTo:m.target}):m.target instanceof HTMLElement&&q(m.target)))}return()=>{let m={},b={ref:a,onKeydown:h,onFocusout:p},{features:w,initialFocus:S,containers:K,...L}=e;return T(pt,[!!(w&4)&&T(_e,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:s,features:me.Focusable}),x({ourProps:b,theirProps:{...t,...L},slot:m,attrs:t,slots:n,name:"FocusTrap"}),!!(w&4)&&T(_e,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:s,features:me.Focusable})])}}}),{features:qe}),U=[];_t(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&U[0]!==t.target&&(U.unshift(t.target),U=U.filter(n=>n!=null&&n.isConnected),U.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function Pt(e){let t=f(U.slice());return re([e],([n],[l])=>{l===!0&&n===!1?Be(()=>{t.value.splice(0)}):l===!1&&n===!0&&(t.value=U.slice())},{flush:"post"}),()=>{var n;return(n=t.value.find(l=>l!=null&&l.isConnected))!=null?n:null}}function At({ownerDocument:e},t){let n=Pt(t);C(()=>{B(()=>{var l,a;t.value||((l=e.value)==null?void 0:l.activeElement)===((a=e.value)==null?void 0:a.body)&&q(n())},{flush:"post"})}),R(()=>{t.value&&q(n())})}function Ot({ownerDocument:e,container:t,initialFocus:n},l){let a=f(null),r=f(!1);return C(()=>r.value=!0),R(()=>r.value=!1),C(()=>{re([t,n,l],(o,i)=>{if(o.every((s,d)=>(i==null?void 0:i[d])===s)||!l.value)return;let u=y(t);u&&Be(()=>{var s,d;if(!r.value)return;let h=y(n),p=(s=e.value)==null?void 0:s.activeElement;if(h){if(h===p){a.value=p;return}}else if(u.contains(p)){a.value=p;return}h?q(h):pe(u,V.First|V.NoScroll)===ot.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),a.value=(d=e.value)==null?void 0:d.activeElement})},{immediate:!0,flush:"post"})}),a}function Dt({ownerDocument:e,container:t,containers:n,previousActiveElement:l},a){var r;Ie((r=e.value)==null?void 0:r.defaultView,"focus",o=>{if(!a.value)return;let i=We(n);y(t)instanceof HTMLElement&&i.add(y(t));let u=l.value;if(!u)return;let s=o.target;s&&s instanceof HTMLElement?Ge(i,s)?(l.value=s,q(s)):(o.preventDefault(),o.stopPropagation(),q(u)):q(l.value)},!0)}function Ge(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let Te=new Map,ee=new Map;function xe(e,t=f(!0)){B(n=>{var l;if(!t.value)return;let a=y(e);if(!a)return;n(function(){var o;if(!a)return;let i=(o=ee.get(a))!=null?o:1;if(i===1?ee.delete(a):ee.set(a,i-1),i!==1)return;let u=Te.get(a);u&&(u["aria-hidden"]===null?a.removeAttribute("aria-hidden"):a.setAttribute("aria-hidden",u["aria-hidden"]),a.inert=u.inert,Te.delete(a))});let r=(l=ee.get(a))!=null?l:0;ee.set(a,r+1),r===0&&(Te.set(a,{"aria-hidden":a.getAttribute("aria-hidden"),inert:a.inert}),a.setAttribute("aria-hidden","true"),a.inert=!0)})}let Ye=Symbol("ForcePortalRootContext");function kt(){return A(Ye,!1)}let Me=P({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:n}){return H(Ye,e.force),()=>{let{force:l,...a}=e;return x({theirProps:a,ourProps:{},slot:{},slots:t,attrs:n,name:"ForcePortalRoot"})}}});function Bt(e){let t=ae(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let n=t.getElementById("headlessui-portal-root");if(n)return n;let l=t.createElement("div");return l.setAttribute("id","headlessui-portal-root"),t.body.appendChild(l)}let Rt=P({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:n}){let l=f(null),a=c(()=>ae(l)),r=kt(),o=A(ze,null),i=f(r===!0||o==null?Bt(l.value):o.resolveTarget());B(()=>{r||o!=null&&(i.value=o.resolveTarget())});let u=A(Pe,null);return C(()=>{let s=y(l);s&&u&&R(u.register(s))}),R(()=>{var s,d;let h=(s=a.value)==null?void 0:s.getElementById("headlessui-portal-root");h&&i.value===h&&i.value.children.length<=0&&((d=i.value.parentElement)==null||d.removeChild(i.value))}),()=>{if(i.value===null)return null;let s={ref:l,"data-headlessui-portal":""};return T(vt,{to:i.value},x({ourProps:s,theirProps:e,slot:{},attrs:n,slots:t,name:"Portal"}))}}}),Pe=Symbol("PortalParentContext");function Ht(){let e=A(Pe,null),t=f([]);function n(r){return t.value.push(r),e&&e.register(r),()=>l(r)}function l(r){let o=t.value.indexOf(r);o!==-1&&t.value.splice(o,1),e&&e.unregister(r)}let a={register:n,unregister:l,portals:t};return[t,P({name:"PortalWrapper",setup(r,{slots:o}){return H(Pe,a),()=>{var i;return(i=o.default)==null?void 0:i.call(o)}}})]}let ze=Symbol("PortalGroupContext"),xt=P({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:n}){let l=mt({resolveTarget(){return e.target}});return H(ze,l),()=>{let{target:a,...r}=e;return x({theirProps:r,ourProps:{},slot:{},attrs:t,slots:n,name:"PortalGroup"})}}}),Je=Symbol("StackContext");var Ae=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(Ae||{});function Mt(){return A(Je,()=>{})}function Nt({type:e,enabled:t,element:n,onUpdate:l}){let a=Mt();function r(...o){l==null||l(...o),a(...o)}C(()=>{re(t,(o,i)=>{o?r(0,e,n):i===!0&&r(1,e,n)},{immediate:!0,flush:"sync"})}),R(()=>{t.value&&r(1,e,n)}),H(Je,r)}let jt=Symbol("DescriptionContext");function Vt({slot:e=f({}),name:t="Description",props:n={}}={}){let l=f([]);function a(r){return l.value.push(r),()=>{let o=l.value.indexOf(r);o!==-1&&l.value.splice(o,1)}}return H(jt,{register:a,slot:e,name:t,props:n}),c(()=>l.value.length>0?l.value.join(" "):void 0)}function Ut(e){let t=ht(e.getSnapshot());return R(e.subscribe(()=>{t.value=e.getSnapshot()})),t}function It(e,t){let n=e(),l=new Set;return{getSnapshot(){return n},subscribe(a){return l.add(a),()=>l.delete(a)},dispatch(a,...r){let o=t[a].call(n,...r);o&&(n=o,l.forEach(i=>i()))}}}function Wt(){let e;return{before({doc:t}){var n;let l=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-l.clientWidth},after({doc:t,d:n}){let l=t.documentElement,a=l.clientWidth-l.offsetWidth,r=e-a;n.style(l,"paddingRight",`${r}px`)}}}function qt(){if(!Ct())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:l}){function a(o){return l.containers.flatMap(i=>i()).some(i=>i.contains(o))}if(window.getComputedStyle(t.documentElement).scrollBehavior!=="auto"){let o=oe();o.style(t.documentElement,"scroll-behavior","auto"),n.add(()=>n.microTask(()=>o.dispose()))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let r=null;n.addEventListener(t,"click",o=>{if(o.target instanceof HTMLElement)try{let i=o.target.closest("a");if(!i)return;let{hash:u}=new URL(i.href),s=t.querySelector(u);s&&!a(s)&&(r=s)}catch{}},!0),n.addEventListener(t,"touchmove",o=>{o.target instanceof HTMLElement&&!a(o.target)&&o.preventDefault()},{passive:!1}),n.add(()=>{window.scrollTo(0,window.pageYOffset+e),r&&r.isConnected&&(r.scrollIntoView({block:"nearest"}),r=null)})}}}function Gt(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Yt(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let W=It(()=>new Map,{PUSH(e,t){var n;let l=(n=this.get(e))!=null?n:{doc:e,count:0,d:oe(),meta:new Set};return l.count++,l.meta.add(t),this.set(e,l),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let l={doc:e,d:t,meta:Yt(n)},a=[qt(),Wt(),Gt()];a.forEach(({before:r})=>r==null?void 0:r(l)),a.forEach(({after:r})=>r==null?void 0:r(l))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});W.subscribe(()=>{let e=W.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let l=t.get(n.doc)==="hidden",a=n.count!==0;(a&&!l||!a&&l)&&W.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&W.dispatch("TEARDOWN",n)}});function zt(e,t,n){let l=Ut(W),a=c(()=>{let r=e.value?l.value.get(e.value):void 0;return r?r.count>0:!1});return re([e,t],([r,o],[i],u)=>{if(!r||!o)return;W.dispatch("PUSH",r,n);let s=!1;u(()=>{s||(W.dispatch("POP",i??r,n),s=!0)})},{immediate:!0}),a}function Jt({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){let l=f(null),a=ae(l);function r(){var o;let i=[];for(let u of e)u!==null&&(u instanceof HTMLElement?i.push(u):"value"in u&&u.value instanceof HTMLElement&&i.push(u.value));if(t!=null&&t.value)for(let u of t.value)i.push(u);for(let u of(o=a==null?void 0:a.querySelectorAll("html > *, body > *"))!=null?o:[])u!==document.body&&u!==document.head&&u instanceof HTMLElement&&u.id!=="headlessui-portal-root"&&(u.contains(y(l))||i.some(s=>u.contains(s))||i.push(u));return i}return{resolveContainers:r,contains(o){return r().some(i=>i.contains(o))},mainTreeNodeRef:l,MainTreeNode(){return n!=null?null:T(_e,{features:me.Hidden,ref:l})}}}var Kt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Kt||{});let Oe=Symbol("DialogContext");function Ke(e){let t=A(Oe,null);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Ke),n}return t}let ce="DC8F892D-2EBD-447C-A4C8-A03058436FF4",Qt=P({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:ce},initialFocus:{type:Object,default:null},id:{type:String,default:()=>`headlessui-dialog-${ke()}`}},emits:{close:e=>!0},setup(e,{emit:t,attrs:n,slots:l,expose:a}){var r;let o=f(!1);C(()=>{o.value=!0});let i=f(0),u=Ve(),s=c(()=>e.open===ce&&u!==null?(u.value&$.Open)===$.Open:e.open),d=f(null),h=c(()=>ae(d));if(a({el:d,$el:d}),!(e.open!==ce||u!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof s.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${s.value===ce?void 0:e.open}`);let p=c(()=>o.value&&s.value?0:1),m=c(()=>p.value===0),b=c(()=>i.value>1),w=A(Oe,null)!==null,[S,K]=Ht(),{resolveContainers:L,mainTreeNodeRef:N,MainTreeNode:ie}=Jt({portals:S,defaultContainers:[c(()=>{var v;return(v=E.panelRef.value)!=null?v:d.value})]}),ue=c(()=>b.value?"parent":"leaf"),Q=c(()=>u!==null?(u.value&$.Closing)===$.Closing:!1),ge=c(()=>w||Q.value?!1:m.value),se=c(()=>{var v,g,F;return(F=Array.from((g=(v=h.value)==null?void 0:v.querySelectorAll("body > *"))!=null?g:[]).find(_=>_.id==="headlessui-portal-root"?!1:_.contains(y(N))&&_ instanceof HTMLElement))!=null?F:null});xe(se,ge);let ye=c(()=>b.value?!0:m.value),be=c(()=>{var v,g,F;return(F=Array.from((g=(v=h.value)==null?void 0:v.querySelectorAll("[data-headlessui-portal]"))!=null?g:[]).find(_=>_.contains(y(N))&&_ instanceof HTMLElement))!=null?F:null});xe(be,ye),Nt({type:"Dialog",enabled:c(()=>p.value===0),element:d,onUpdate:(v,g)=>{if(g==="Dialog")return Y(v,{[Ae.Add]:()=>i.value+=1,[Ae.Remove]:()=>i.value-=1})}});let we=Vt({name:"DialogDescription",slot:c(()=>({open:s.value}))}),z=f(null),E={titleId:z,panelRef:f(null),dialogState:p,setTitleId(v){z.value!==v&&(z.value=v)},close(){t("close",!1)}};H(Oe,E);let X=c(()=>!(!m.value||b.value));it(L,(v,g)=>{E.close(),gt(()=>g==null?void 0:g.focus())},X);let O=c(()=>!(b.value||p.value!==0));Ie((r=h.value)==null?void 0:r.defaultView,"keydown",v=>{O.value&&(v.defaultPrevented||v.key===ut.Escape&&(v.preventDefault(),v.stopPropagation(),E.close()))});let J=c(()=>!(Q.value||p.value!==0||w));return zt(h,J,v=>{var g;return{containers:[...(g=v.containers)!=null?g:[],L]}}),B(v=>{if(p.value!==0)return;let g=y(d);if(!g)return;let F=new ResizeObserver(_=>{for(let de of _){let D=de.target.getBoundingClientRect();D.x===0&&D.y===0&&D.width===0&&D.height===0&&E.close()}});F.observe(g),v(()=>F.disconnect())}),()=>{let{id:v,open:g,initialFocus:F,..._}=e,de={...n,ref:d,id:v,role:"dialog","aria-modal":p.value===0?!0:void 0,"aria-labelledby":z.value,"aria-describedby":we.value},D={open:p.value===0};return T(Me,{force:!0},()=>[T(Rt,()=>T(xt,{target:d.value},()=>T(Me,{force:!1},()=>T(Z,{initialFocus:F,containers:L,features:m.value?Y(ue.value,{parent:Z.features.RestoreFocus,leaf:Z.features.All&~Z.features.FocusLock}):Z.features.None},()=>T(K,{},()=>x({ourProps:de,theirProps:{..._,...n},slot:D,attrs:n,slots:l,visible:p.value===0,features:Le.RenderStrategy|Le.Static,name:"Dialog"})))))),T(ie)])}}}),Xt=P({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:()=>`headlessui-dialog-panel-${ke()}`}},setup(e,{attrs:t,slots:n,expose:l}){let a=Ke("DialogPanel");l({el:a.panelRef,$el:a.panelRef});function r(o){o.stopPropagation()}return()=>{let{id:o,...i}=e,u={id:o,ref:a.panelRef,onClick:r};return x({ourProps:u,theirProps:i,slot:{open:a.dialogState.value===0},attrs:t,slots:n,name:"DialogPanel"})}}});function Zt(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function Se(e,...t){e&&t.length>0&&e.classList.add(...t)}function fe(e,...t){e&&t.length>0&&e.classList.remove(...t)}var De=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(De||{});function en(e,t){let n=oe();if(!e)return n.dispose;let{transitionDuration:l,transitionDelay:a}=getComputedStyle(e),[r,o]=[l,a].map(i=>{let[u=0]=i.split(",").filter(Boolean).map(s=>s.includes("ms")?parseFloat(s):parseFloat(s)*1e3).sort((s,d)=>d-s);return u});return r!==0?n.setTimeout(()=>t("finished"),r+o):t("finished"),n.add(()=>t("cancelled")),n.dispose}function Ne(e,t,n,l,a,r){let o=oe(),i=r!==void 0?Zt(r):()=>{};return fe(e,...a),Se(e,...t,...n),o.nextFrame(()=>{fe(e,...n),Se(e,...l),o.add(en(e,u=>(fe(e,...l,...t),Se(e,...a),i(u))))}),o.add(()=>fe(e,...t,...n,...l,...a)),o.add(()=>i("cancelled")),o.dispose}function j(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let Re=Symbol("TransitionContext");var tn=(e=>(e.Visible="visible",e.Hidden="hidden",e))(tn||{});function nn(){return A(Re,null)!==null}function ln(){let e=A(Re,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function an(){let e=A(He,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let He=Symbol("NestingContext");function he(e){return"children"in e?he(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function Qe(e){let t=f([]),n=f(!1);C(()=>n.value=!0),R(()=>n.value=!1);function l(r,o=I.Hidden){let i=t.value.findIndex(({id:u})=>u===r);i!==-1&&(Y(o,{[I.Unmount](){t.value.splice(i,1)},[I.Hidden](){t.value[i].state="hidden"}}),!he(t)&&n.value&&(e==null||e()))}function a(r){let o=t.value.find(({id:i})=>i===r);return o?o.state!=="visible"&&(o.state="visible"):t.value.push({id:r,state:"visible"}),()=>l(r,I.Unmount)}return{children:t,register:a,unregister:l}}let Xe=Le.RenderStrategy,Ze=P({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:l,expose:a}){let r=f(0);function o(){r.value|=$.Opening,t("beforeEnter")}function i(){r.value&=~$.Opening,t("afterEnter")}function u(){r.value|=$.Closing,t("beforeLeave")}function s(){r.value&=~$.Closing,t("afterLeave")}if(!nn()&&st())return()=>T(et,{...e,onBeforeEnter:o,onAfterEnter:i,onBeforeLeave:u,onAfterLeave:s},l);let d=f(null),h=c(()=>e.unmount?I.Unmount:I.Hidden);a({el:d,$el:d});let{show:p,appear:m}=ln(),{register:b,unregister:w}=an(),S=f(p.value?"visible":"hidden"),K={value:!0},L=ke(),N={value:!1},ie=Qe(()=>{!N.value&&S.value!=="hidden"&&(S.value="hidden",w(L),s())});C(()=>{let E=b(L);R(E)}),B(()=>{if(h.value===I.Hidden&&L){if(p.value&&S.value!=="visible"){S.value="visible";return}Y(S.value,{hidden:()=>w(L),visible:()=>b(L)})}});let ue=j(e.enter),Q=j(e.enterFrom),ge=j(e.enterTo),se=j(e.entered),ye=j(e.leave),be=j(e.leaveFrom),we=j(e.leaveTo);C(()=>{B(()=>{if(S.value==="visible"){let E=y(d);if(E instanceof Comment&&E.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function z(E){let X=K.value&&!m.value,O=y(d);!O||!(O instanceof HTMLElement)||X||(N.value=!0,p.value&&o(),p.value||u(),E(p.value?Ne(O,ue,Q,ge,se,J=>{N.value=!1,J===De.Finished&&i()}):Ne(O,ye,be,we,se,J=>{N.value=!1,J===De.Finished&&(he(ie)||(S.value="hidden",w(L),s()))})))}return C(()=>{re([p],(E,X,O)=>{z(O),K.value=!1},{immediate:!0})}),H(He,ie),dt(c(()=>Y(S.value,{visible:$.Open,hidden:$.Closed})|r.value)),()=>{let{appear:E,show:X,enter:O,enterFrom:J,enterTo:v,entered:g,leave:F,leaveFrom:_,leaveTo:de,...D}=e,tt={ref:d},nt={...D,...m.value&&p.value&&je.isServer?{class:$e([n.class,D.class,...ue,...Q])}:{}};return x({theirProps:nt,ourProps:tt,slot:{},slots:l,attrs:n,features:Xe,visible:S.value==="visible",name:"TransitionChild"})}}}),rn=Ze,et=P({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:l}){let a=Ve(),r=c(()=>e.show===null&&a!==null?(a.value&$.Open)===$.Open:e.show);B(()=>{if(![!0,!1].includes(r.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let o=f(r.value?"visible":"hidden"),i=Qe(()=>{o.value="hidden"}),u=f(!0),s={show:r,appear:c(()=>e.appear||!u.value)};return C(()=>{B(()=>{u.value=!1,r.value?o.value="visible":he(i)||(o.value="hidden")})}),H(He,i),H(Re,s),()=>{let d=ct(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),h={unmount:e.unmount};return x({ourProps:{...h,as:"template"},theirProps:{},slot:{},slots:{...l,default:()=>[T(rn,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...n,...h,...d},l.default)]},attrs:{},features:Xe,visible:o.value==="visible",name:"Transition"})}}});const on=P({components:{HDialog:Qt,HDialogPanel:Xt,TransitionRoot:et,TransitionChild:Ze},inheritAttrs:!1,props:{modelValue:{type:Boolean,default:!1},appear:{type:Boolean,default:!1},side:{type:String,default:"right",validator:e=>["left","right"].includes(e)},overlay:{type:Boolean,default:!0},transition:{type:Boolean,default:!0},preventClose:{type:Boolean,default:!1},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","close"],setup(e,{attrs:t,emit:n}){const l=bt(),a=c(()=>wt({},e.ui,l.ui.slideover)),r=c({get(){return e.modelValue},set(s){n("update:modelValue",s)}}),o=c(()=>Et(a.value.wrapper,t.class)),i=c(()=>e.transition?{...a.value.transition,enterFrom:e.side==="left"?"-translate-x-full":"translate-x-full",enterTo:"translate-x-0",leaveFrom:"translate-x-0",leaveTo:e.side==="left"?"-translate-x-full":"translate-x-full"}:{});function u(s){r.value=s,n("close")}return{attrs:lt(t,["class"]),ui:a,isOpen:r,wrapperClass:o,transitionClass:i,close:u}}});function un(e,t,n,l,a,r){const o=te("TransitionChild"),i=te("HDialogPanel"),u=te("HDialog"),s=te("TransitionRoot");return G(),ve(s,{as:"template",appear:e.appear,show:e.isOpen},{default:M(()=>[k(u,Ee({class:[e.wrapperClass,{"justify-end":e.side==="right"}]},e.attrs,{onClose:t[0]||(t[0]=d=>!e.preventClose&&e.close(d))}),{default:M(()=>[e.overlay?(G(),ve(o,Ee({key:0,as:"template",appear:e.appear},e.ui.overlay.transition),{default:M(()=>[le("div",{class:$e([e.ui.overlay.base,e.ui.overlay.background])},null,2)]),_:1},16,["appear"])):Tt("",!0),k(o,Ee({as:"template",appear:e.appear},e.transitionClass),{default:M(()=>[k(i,{class:$e([e.ui.base,e.ui.width,e.ui.background,e.ui.ring,e.ui.padding])},{default:M(()=>[St(e.$slots,"default")]),_:3},8,["class"])]),_:3},16,["appear"])]),_:3},16,["class"])]),_:3},8,["appear","show"])}const sn=yt(on,[["render",un]]),dn={class:"flex justify-between items-center p-4"},cn={class:"flex items-center justify-between"},fn=le("h3",{class:"text-base lg:text-xl font-semibold leading-6 text-white"}," DASHBOARD | ADMIN ",-1),pn={__name:"navbar",setup(e){const{data:t,signOut:n}=Ue(),l=f(!1),a=async()=>{await n({callbackUrl:"/"})};return(r,o)=>{var h,p;const i=at,u=te("Placeholder"),s=ft,d=sn;return G(),Ce("div",null,[le("div",dn,[k(i,{onClick:o[0]||(o[0]=m=>l.value=!0),variant:"link",color:"white",icon:"i-heroicons-bars-3"}),le("div",null,"Welcome Back "+Lt((p=(h=Fe(t))==null?void 0:h.user)==null?void 0:p.username),1)]),k(d,{modelValue:Fe(l),"onUpdate:modelValue":o[2]||(o[2]=m=>$t(l)?l.value=m:null),overlay:!1,ui:{background:"bg-gray-900  text-white",width:"w-2/4 sm:w-full"}},{default:M(()=>[k(s,{class:"flex flex-col flex-1",ui:{body:{base:"flex-1"},ring:"",divide:"divide-y divide-gray-700 dark:divide-gray-800"}},{header:M(()=>[le("div",cn,[fn,k(i,{color:"gray",variant:"link",icon:"i-heroicons-x-mark-20-solid",class:"-my-1",onClick:o[1]||(o[1]=m=>l.value=!1)}),k(i,{onClick:a,label:"Sign Out",icon:"i-heroicons-arrow-right-on-rectangle",variant:"link",color:"white",class:"absolute bottom-0"})])]),default:M(()=>[k(u,{class:"h-full"})]),_:1})]),_:1},8,["modelValue"])])}}},vn={class:"h-screen"},mn={key:1},hn={__name:"index",setup(e){const{data:t}=Ue();return(n,l)=>{const a=pn;return G(),Ce("div",vn,[Fe(t).user.userId?(G(),ve(a,{key:0})):(G(),Ce("div",mn,"Ini dashboard User"))])}}},En={__name:"index",setup(e){return(t,n)=>{const l=hn;return G(),ve(l)}}};export{En as default};
