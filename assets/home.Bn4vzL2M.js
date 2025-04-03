import{o as z,p as T,_ as F,l as M,s as L,q as H,r as R,t as W,v as G,w as O,e as Q,f as U}from"./app.BY7A3Yv5.js";import{f as m,Q as a,P as s,U as r,V as S,M as P,S as l,e as y,d as D,W as g,O as b,a4 as x,Y as h,$ as q,u as c,F as $,a0 as E,y as i,a3 as N,c as w,N as J}from"./framework.DntyxCiH.js";import"./chunks/dayjs.CCYrSalk.js";import{g as V}from"./animation.C_ru2laA.js";import{a as K}from"./chunks/vue-router.C8U2OLTl.js";import"./chunks/vue-i18n.CrruEPAC.js";import"./chunks/pinia.NfdmkE6C.js";import"./chunks/@vueuse/motion.D6rQsSfL.js";import"./chunks/nprogress.BahbDzmd.js";const X={class:"w-full px-4 flex-center"},Z={class:"yun-notice w-full"},ee=["innerHTML"],te=m({__name:"YunNotice",props:{content:{}},setup(u){return(e,t)=>(s(),a("div",X,[r("div",Z,[r("span",{innerHTML:e.content},null,8,ee),S(e.$slots,"default")])]))}}),ne={},se={class:"grid-bg"};function oe(u,e){return s(),a("div",se,[l(" <YunAEFrame /> "),l(" <YunAERect /> ")])}const ae=P(ne,[["render",oe]]),re={class:"say"},ie={key:0,class:"say-content animate-fade-in animate-iteration-1"},ce={key:1,class:"say-author"},le={key:2,class:"say-from"},ue=m({__name:"YunSay",setup(u){const e=z(),t=y(""),n=y(""),o=y("");function f(){const _=e.value.say.hitokoto.enable?e.value.say.hitokoto.api:e.value.say.api;_&&fetch(_).then(d=>{if(d.ok)d.json().then(v=>{if(e.value.say.hitokoto.enable)t.value=v.hitokoto,n.value=v.from_who,o.value=v.from;else{const p=v[Math.floor(Math.random()*v.length)];p.content?(t.value=p.content,n.value=p.author,o.value=p.from):t.value=p}});else throw new Error(`${e.value.say.api}, HTTP error, status = ${d.status}`)}).catch(d=>{console.error(d.message)})}return D(()=>{f()}),(_,d)=>(s(),a("div",re,[t.value?(s(),a("span",ie,g(t.value),1)):l("v-if",!0),n.value?(s(),a("span",ce,g(n.value),1)):l("v-if",!0),o.value?(s(),a("span",le,g(o.value),1)):l("v-if",!0)]))}}),_e=m({__name:"YunSiteLinkItem",props:{page:{}},setup(u){const e=T();return(t,n)=>{const o=F;return s(),b(o,{class:"link-item inline-flex-center gap-2 transition rounded-lg text-xl p-2 md:text-lg md:p-2 lg:text-xl lg:p-3 text-$va-c-text",bg:"white/5 dark:black/5","inline-flex":"",to:t.page.url,title:t.page.name,style:q(`color:${t.page.color}`),hover:"bg-white/80 dark:bg-black/80",onClick:n[0]||(n[0]=f=>c(e).fullscreenMenu.isOpen=!1)},{default:x(()=>[r("div",{class:h([t.page.icon,"icon"])},null,2),r("span",null,g(t.page.name),1)]),_:1},8,["to","title","style"])}}}),pe={key:0,class:"site-description text-$va-c-text text-sm"},me=m({__name:"YunSiteDescription",setup(u){const e=M();return(t,n)=>c(e).description?(s(),a("div",pe,g(c(e).description),1)):l("v-if",!0)}}),fe={key:0,class:"site-subtitle block text-$va-c-text op-80 font-medium",text:"sm"},de=m({__name:"YunSiteSubtitle",setup(u){const e=M();return(t,n)=>c(e).subtitle?(s(),a("h4",fe)):l("v-if",!0)}}),ve=m({__name:"YunAnimLineDraw",setup(u){const e=y(!1);return D(()=>{e.value=!0}),(t,n)=>(s(),a("div",{class:h(["line",{enter:e.value}])},null,2))}}),he=P(ve,[["__scopeId","data-v-3207662b"]]),be={key:0,class:"site-author-intro",m:"t-0 b-4"},ye=m({__name:"YunAuthorIntro",setup(u){const e=M();return(t,n)=>c(e).author.intro?(s(),a("div",be,g(c(e).author.intro),1)):l("v-if",!0)}}),ge={key:0,class:"line-burst-effects absolute"},$e=m({__name:"LineBurstEffects",props:{delay:{},duration:{}},setup(u){const e=u,t=y(!0);return D(async()=>{await L(e.delay),t.value=!1,await L(e.duration),t.value=!0}),(n,o)=>t.value?l("v-if",!0):(s(),a("div",ge,[(s(),a($,null,E(8,f=>r("div",{key:f,class:"line"},o[0]||(o[0]=[r("div",null,[r("span")],-1)]))),64))]))}}),ke={flex:"~ col",class:"yun-square-container items-center justify-center text-center max-w-2xl"},xe={flex:"~ col",class:"yun-square square-rotate z-1 bg-white/80"},we={class:"py-4 md:py-5 lg:pt-6"},Ye={flex:"~ col",class:"gap-2 items-center justify-center"},Se={class:"scale-x--100 py-4 md:py-5 lg:pb-6"},Ce={class:"mt-4 flex-center w-72 md:w-150 m-auto gap-2",flex:"~ wrap"},Ae=m({__name:"YunPrologueSquare",setup(u){const e=z(),t=y(!1);return(n,o)=>{const f=$e,_=H,d=R,v=ye,p=he,C=W,k=de,Y=me,I=G,A=_e;return s(),a("div",ke,[S(n.$slots,"default",{},void 0,!0),r("div",{flex:"~ col center",class:h(["info-with-avatar relative duration-800 transition-cubic-bezier-ease-in",{show:t.value}])},[i(N,{"enter-from-class":"enter-from","enter-to-class":"enter-to",appear:"",onAfterAppear:o[0]||(o[0]=B=>t.value=!0)},{default:x(()=>[r("div",xe,[i(f,{class:"absolute top-0 left-0 right-0 bottom-0 size-full scale-200",delay:200,duration:400}),i(N,{"enter-from-class":"op-0","enter-to-class":"op-100","enter-active-class":"transition-400 delay-400",appear:""},{default:x(()=>[i(_)]),_:1})])]),_:1}),r("div",{class:h(["info",{show:t.value}])},[i(d,{class:"mt-3"}),i(v),r("div",we,[i(p)]),r("div",Ye,[i(C),i(k),i(Y)]),r("div",Se,[i(p)]),i(I),r("div",Ce,[i(A,{page:{name:"博客文章",icon:"i-ri-article-line",url:"/posts/"}}),S(n.$slots,"default",{},void 0,!0),(s(!0),a($,null,E(c(e).pages,(B,j)=>(s(),b(A,{key:j,page:B},null,8,["page"]))),128))])],2)],2)])}}}),Be=P(Ae,[["__scopeId","data-v-8a507115"]]),Le=m({__name:"YunGoDown",setup(u){return(e,t)=>(s(),a("button",{class:"go-down w-20 bottom-0 text-sm md:bottom-2 md:text-40px","aria-label":"go-down",onClick:t[0]||(t[0]=(...n)=>c(V)&&c(V)(...n))},t[1]||(t[1]=[r("div",{"i-ri-arrow-down-s-fill":"","inline-flex":""},null,-1)])))}}),Ne={class:"banner-char-container"},ze={class:"char"},De=m({__name:"YunBannerCharContainer",props:{title:{},chars:{}},setup(u){return(e,t)=>(s(),a("div",Ne,[(s(!0),a($,null,E(e.title,(n,o)=>(s(),a("div",{key:o,class:"char-box"},[r("span",{class:h([o%2!==0?"char-right":"char-left"]),style:q({"--banner-char-size":`${e.chars[o]}rem`})},[r("span",ze,g(n),1)],6)]))),128))]))}});function Ie(u){const e=w(()=>{const n=[];for(let o=0;o<u.title.length;o++){const f=O(1.5,3.5);n.push(f)}return n}),t=w(()=>e.value.reduce((n,o)=>n+o,0));return{chars:e,totalCharHeight:t}}const Te={class:"banner-line-container"},Me={class:"banner-line-container bottom"},Pe=m({__name:"YunBanner",setup(u){const e=T(),t=z(),{totalCharHeight:n,chars:o}=Ie(t.value.banner),f=w(()=>{const p={"--total-char-height":`${n.value}rem`,"--banner-line-height":`calc(var(--banner-height, 100 * var(--vh)) / 2 - ${n.value/2}rem)`,"justify-content":"space-between"};return e.isStrato&&(p.borderBottom="1px solid var(--banner-line-color)"),p}),_=y("enter"),d=w(()=>_.value),v=y("banner");return D(async()=>{await L(500),_.value="active",e.isNimbo&&(await L(500),_.value="exit",v.value="prologue")}),(p,C)=>{const k=De,Y=Le;return s(),a("div",{id:"yun-banner",border:"b-1px b-solid b-$banner-line-color",style:q(f.value)},[r("div",Te,[r("div",{class:h(["banner-line vertical-line-top",d.value])},null,2)]),c(e).isNimbo?(s(),a($,{key:0},[v.value==="banner"?(s(),b(k,{key:0,title:c(t).banner.title,chars:c(o)},null,8,["title","chars"])):l("v-if",!0)],64)):l("v-if",!0),c(e).isStrato?(s(),b(k,{key:1,title:c(t).banner.title,chars:c(o)},null,8,["title","chars"])):l("v-if",!0),r("div",Me,[r("div",{class:h(["banner-line vertical-line-bottom",d.value])},null,2)]),i(Y)],4)}}}),qe={class:"w-full"},Ee={class:"absolute top-0 left-5 right-5 bottom-0 flex-center"},Ve={key:1,class:"h-$yun-nav-height"},Je=m({__name:"home",setup(u){const e=T(),t=K(),n=z(),o=w(()=>t.path.startsWith("/page")),f=w(()=>{const _=n.value.notice;return _.enable&&(o.value?!_.hideInPages:!0)});return(_,d)=>{const v=Pe,p=Be,C=ue,k=ae,Y=te,I=J("RouterView"),A=Q,B=U;return s(),a($,null,[i(A,{class:h(["items-center flex-col",{"mt-0!":!o.value}])},{default:x(()=>[c(n).banner.enable?(s(),a($,{key:0},[o.value?l("v-if",!0):(s(),a($,{key:0},[r("div",qe,[i(v),c(e).isNimbo?(s(),b(N,{key:0,"enter-from-class":"scale-60","enter-to-class":"scale-100","enter-active-class":"transition-300 transition-cubic-bezier-ease-in-out delay-1000",appear:""},{default:x(()=>[r("div",Ee,[i(N,{"enter-from-class":"op-0","enter-to-class":"op-100","enter-active-class":"transition-800 delay-1000",appear:""},{default:x(()=>[i(p,{class:"z-1"})]),_:1})])]),_:1})):l("v-if",!0),c(n).say.enable?(s(),b(C,{key:1,w:"full"})):l("v-if",!0)]),c(e).isNimbo?(s(),b(k,{key:0,class:"absolute left-0 top-0 right-0 bottom-0"})):l("v-if",!0)],64))],64)):(s(),a("div",Ve)),f.value?(s(),b(Y,{key:2,class:h(["mb-2 md:mb-6",{"mt-4":!o.value}]),content:c(n).notice.content},null,8,["class","content"])):l("v-if",!0),S(_.$slots,"board"),S(_.$slots,"default",{},()=>[i(I)])]),_:3},8,["class"]),i(B)],64)}}});export{Je as default};
