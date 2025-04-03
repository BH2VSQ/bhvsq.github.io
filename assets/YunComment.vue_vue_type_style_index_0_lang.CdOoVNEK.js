import{G as A,m as S,k as M}from"./app.BY7A3Yv5.js";import{i as f,a as v}from"./index.C5okkQwF.js";import"./chunks/dayjs.CCYrSalk.js";import{f as d,O as i,N as w,P as n,Q as c,U as u,u as W,ak as B,al as E,e as g,a9 as N,y as m,Y as y,W as x,a3 as O,a4 as _,a1 as P,a2 as z,F as D,a0 as L,M as T,c as U,S as p,V as j}from"./framework.DntyxCiH.js";const F=d({__name:"YunArtalk",setup(r){return f(v)||(void 0)(),(a,t)=>{const l=w("ArtalkClient");return n(),i(l)}}}),I=d({__name:"YunTwikoo",setup(r){return f(v)||(void 0)(),(a,t)=>(n(),c("div",null,t[0]||(t[0]=[u("div",{id:"tcomment",w:"full"},null,-1)])))}}),R=d({__name:"YunWaline",setup(r){if(f(v))throw new Error("Please install valaxy-addon-waline");const a=(void 0)();return(t,l)=>{const e=w("WalineClient");return n(),i(e,{w:"full",options:W(a).options||{serverURL:""}},null,8,["options"])}}}),G={"case-capital":"","op-90":""},Q={class:"shadow-lg select-options absolute translate-y-1 left-0 top-full w-full bg-$va-c-bg-light overflow-hidden rounded-1"},q=["onClick"],H=d({__name:"YunSelect",props:B({options:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(r){const a=E(r,"modelValue"),t=g(!1);A("click",()=>{t.value=!1});function l(e){e.preventDefault(),e.stopImmediatePropagation(),e.stopPropagation(),t.value=!t.value}return(e,o)=>(n(),c("div",{class:"relative h-8 w-30 text-$va-c-text-2 z-$yun-z-select",onMousedown:o[0]||(o[0]=N(()=>{},["stop"]))},[u("button",{class:y(["flex h-full w-full px-2 items-center justify-between rounded transition",t.value?"border-$va-c-primary":""]),border:"~ gray op-30",onClick:l},[u("span",G,x(a.value),1),o[1]||(o[1]=u("div",{"inline-flex":"","i-ri-arrow-down-s-line":""},null,-1))],2),m(O,{persisted:""},{default:_(()=>[P(u("ul",Q,[(n(!0),c(D,null,L(e.options,s=>(n(),c("li",{key:s,class:y(["cursor-pointer list-none px-2 hover:bg-$va-c-primary-light hover:text-white case-capital",{"bg-$va-c-primary text-white":a.value===s}]),onClick:k=>a.value=s},x(s),11,q))),128))],512),[[z,t.value]])]),_:1})],32))}}),J=T(H,[["__scopeId","data-v-63887b80"]]),K={key:0,class:"flex justify-end w-full mb-2"},ne=d({__name:"YunComment",setup(r){const a=S(),t=["valaxy-addon-waline","valaxy-addon-twikoo","valaxy-addon-artalk"],l=U(()=>t.filter(o=>a.value.addons[o]).map(o=>o.split("-")[2])),e=g(l.value[0]);return(o,s)=>{const k=J,C=R,h=I,$=F,b=w("ClientOnly"),V=M;return n(),i(V,{w:"full",p:"4",class:"comment yun-comment sm:p-6 lg:px-12 xl:px-16"},{default:_(()=>[m(b,null,{default:_(()=>[l.value.length>1?(n(),c("div",K,[m(k,{modelValue:e.value,"onUpdate:modelValue":s[0]||(s[0]=Y=>e.value=Y),options:l.value},null,8,["modelValue","options"])])):p("v-if",!0),e.value==="waline"?(n(),i(C,{key:1})):p("v-if",!0),e.value==="twikoo"?(n(),i(h,{key:2})):p("v-if",!0),e.value==="artalk"?(n(),i($,{key:3})):p("v-if",!0),j(o.$slots,"default")]),_:3})]),_:3})}}});export{ne as _};
