import{C as R,W as H,l as F,y as O,_ as K,f as Q,g as f,h as X,i as c,j as Y,E as Z,k as j,O as v,o as b,c as C,a as G,x as _,r as B,n as m,b as N,q as $}from"./entry.3df25257.js";import{_ as V,o as x}from"./Button.7f527be1.js";function S(e){return typeof e=="function"?e():R(e)}const T=()=>{};function ee(e,a){function l(...i){return new Promise((s,n)=>{Promise.resolve(e(()=>a.apply(this,i),{fn:a,thisArg:this,args:i})).then(s).catch(n)})}return l}function ne(e,a={}){let l,i,s=T;const n=u=>{clearTimeout(u),s(),s=T};return u=>{const t=S(e),o=S(a.maxWait);return l&&n(l),t<=0||o!==void 0&&o<=0?(i&&(n(i),i=null),Promise.resolve(u())):new Promise((r,I)=>{s=a.rejectOnCancel?I:r,o&&!i&&(i=setTimeout(()=>{l&&n(l),i=null,r(u())},o)),l=setTimeout(()=>{i&&n(i),i=null,r(u())},t)})}}function ae(e,a=200,l={}){return ee(ne(a,l),e)}function se(e){var a;const l=S(e);return(a=l==null?void 0:l.$el)!=null?a:l}const p=new Map;function de(e){const a=H();function l(u){var t;const o=p.get(e)||new Set;o.add(u),p.set(e,o);const r=()=>s(u);return(t=a==null?void 0:a.cleanups)==null||t.push(r),r}function i(u){function t(...o){s(t),u(...o)}return l(t)}function s(u){const t=p.get(e);t&&(t.delete(u),t.size||n())}function n(){p.delete(e)}function g(u,t){var o;(o=p.get(e))==null||o.forEach(r=>r(u,t))}return{on:l,once:i,off:s,emit:g,reset:n}}const le=()=>{const e=F("form-events",void 0),a=F("form-group",void 0),l=O(!1);function i(u,t){e&&e.emit({type:u,path:t})}function s(){i("blur",a==null?void 0:a.name.value),l.value=!0}function n(){i("change",a==null?void 0:a.name.value)}const g=ae(()=>{l.value&&i("input",a==null?void 0:a.name.value)},300);return{emitFormBlur:s,emitFormInput:g,emitFormChange:n,formGroup:a}},te=Q({components:{UIcon:V},inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},type:{type:String,default:"text"},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>f.ui.input.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:()=>f.ui.input.default.size,validator(e){return Object.keys(f.ui.input.size).includes(e)}},color:{type:String,default:()=>f.ui.input.default.color,validator(e){return[...f.ui.colors,...Object.keys(f.ui.input.color)].includes(e)}},variant:{type:String,default:()=>f.ui.input.default.variant,validator(e){return[...Object.keys(f.ui.input.variant),...Object.values(f.ui.input.color).flatMap(a=>Object.keys(a))].includes(e)}},inputClass:{type:String,default:null},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","blur"],setup(e,{emit:a,attrs:l,slots:i}){const s=X(),n=c(()=>Y({},e.ui,s.ui.input)),{emitFormBlur:g,emitFormInput:u,formGroup:t}=le(),o=c(()=>{var d;return(d=t==null?void 0:t.error)!=null&&d.value?"red":e.color}),r=c(()=>{var d;return((d=t==null?void 0:t.size)==null?void 0:d.value)??e.size}),I=O(null),W=()=>{var d;e.autofocus&&((d=I.value)==null||d.focus())},A=d=>{a("update:modelValue",d.target.value),u()},E=d=>{g(),a("blur",d)};Z(()=>{setTimeout(()=>{W()},100)});const q=c(()=>j(n.value.wrapper,l.class)),M=c(()=>{var w,z;const d=((z=(w=n.value.color)==null?void 0:w[o.value])==null?void 0:z[e.variant])||n.value.variant[e.variant];return j(v(n.value.base,n.value.rounded,n.value.placeholder,n.value.size[r.value],e.padded?n.value.padding[r.value]:"p-0",d==null?void 0:d.replaceAll("{color}",o.value),(y.value||i.leading)&&n.value.leading.padding[r.value],(h.value||i.trailing)&&n.value.trailing.padding[r.value]),e.inputClass)}),y=c(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),h=c(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),P=c(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),k=c(()=>e.loading&&!y.value?e.loadingIcon:e.trailingIcon||e.icon),D=c(()=>v(n.value.icon.leading.wrapper,n.value.icon.leading.pointer,n.value.icon.leading.padding[r.value])),L=c(()=>v(n.value.icon.base,s.ui.colors.includes(o.value)&&n.value.icon.color.replaceAll("{color}",o.value),n.value.icon.size[r.value],e.loading&&"animate-spin")),U=c(()=>v(n.value.icon.trailing.wrapper,n.value.icon.trailing.pointer,n.value.icon.trailing.padding[r.value])),J=c(()=>v(n.value.icon.base,s.ui.colors.includes(o.value)&&n.value.icon.color.replaceAll("{color}",o.value),n.value.icon.size[r.value],e.loading&&!y.value&&"animate-spin"));return{attrs:x(l,["class"]),ui:n,input:I,isLeading:y,isTrailing:h,wrapperClass:q,inputClass:M,leadingIconName:P,leadingIconClass:L,leadingWrapperIconClass:D,trailingIconName:k,trailingIconClass:J,trailingWrapperIconClass:U,onInput:A,onBlur:E}}}),ie=["name","value","type","required","placeholder","disabled"];function ue(e,a,l,i,s,n){const g=V;return b(),C("div",{class:m(e.wrapperClass)},[G("input",_({ref:"input",name:e.name,value:e.modelValue,type:e.type,required:e.required,placeholder:e.placeholder,disabled:e.disabled||e.loading,class:["form-input",e.inputClass]},e.attrs,{onInput:a[0]||(a[0]=(...u)=>e.onInput&&e.onInput(...u)),onBlur:a[1]||(a[1]=(...u)=>e.onBlur&&e.onBlur(...u))}),null,16,ie),B(e.$slots,"default"),e.isLeading&&e.leadingIconName||e.$slots.leading?(b(),C("span",{key:0,class:m(e.leadingWrapperIconClass)},[B(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[N(g,{name:e.leadingIconName,class:m(e.leadingIconClass)},null,8,["name","class"])])],2)):$("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(b(),C("span",{key:1,class:m(e.trailingWrapperIconClass)},[B(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[N(g,{name:e.trailingIconName,class:m(e.trailingIconClass)},null,8,["name","class"])])],2)):$("",!0)],2)}const ce=K(te,[["render",ue]]);export{ce as _,se as a,de as u};
