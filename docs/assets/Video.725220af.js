import{c as g,t as h,D as x,o as w,K as y,N as b,g as o,h as s,i as t,j as r,k as i,I as a,G as n,u as l,H as u}from"./vendor.3ad19a93.js";/* empty css                  */import{u as p}from"./video.bf0797c6.js";import{_ as k}from"./IconPark.a6d87f82.js";import{x as E}from"./index.8683af13.js";import{_ as V}from"./CoverPlay.13a405a6.js";import{R as C}from"./Right.014c38d3.js";import"./el-image-viewer.7af7ebc0.js";import"./PlayOne.13d62539.js";const G={class:"p-5 video-page"},S={class:"flex items-center justify-between"},B={class:"button-outline px-5"},D=t("span",{class:"mr-2"},"\u5168\u90E8\u89C6\u9891",-1),N=t("div",{class:"text-xl pt-5 pl-5"},"\u5168\u90E8\u89C6\u9891",-1),R={class:"h-96 py-5 pl-5"},j={class:"text-xs gap-5 grid grid-flow-row grid-cols-5"},L={class:"text-xs flex gap-x-4"},$={class:"grid grid-flow-row grid-cols-3 gap-5 mt-5"},Q=g({setup(F){const{videoGroup:c}=h(p()),{getVideoGroup:_}=p(),d=x([]),m=async()=>{d.value=await E()};return w(()=>{_(),m()}),(H,I)=>{const v=y,f=b;return o(),s("div",G,[t("div",S,[r(f,{width:"60%",placement:"bottom-start","popper-style":"padding:0;"},{reference:i(()=>[t("button",B,[D,r(k,{icon:l(C)},null,8,["icon"])])]),default:i(()=>[t("div",null,[N,t("div",R,[r(v,null,{default:i(()=>[t("div",j,[(o(!0),s(a,null,n(l(c),e=>(o(),s("div",{class:"hover-text",key:e.id},u(e.name),1))),128))])]),_:1})])])]),_:1}),t("div",L,[(o(!0),s(a,null,n(l(c).slice(0,8),e=>(o(),s("div",{class:"hover-text",key:e.id},u(e.name),1))),128))])]),t("div",$,[(o(!0),s(a,null,n(d.value,({data:e})=>(o(),s("div",{key:e.vid},[r(V,{"pic-url":e.coverUrl,video:""},null,8,["pic-url"])]))),128))])])}}});export{Q as default};