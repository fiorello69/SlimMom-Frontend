"use strict";(self.webpackChunkslimmom=self.webpackChunkslimmom||[]).push([[742],{1840:(e,t,a)=>{a.d(t,{A:()=>d});const s="ErrorMessage_errorMessageBlock__6NGFY",r="ErrorMessage_errorMessageTitle__gIqHi",l="ErrorMessage_errorMessageText__TKpdd";var o=a(955),n=a(579);const i=e=>{let{status:t}=e;return(0,n.jsxs)("div",{className:s,children:[(0,n.jsx)("div",{className:o.A.boo,children:(0,n.jsx)("div",{className:o.A.face,id:"face"})}),(0,n.jsx)("p",{className:r,children:"Something went wrong..."}),(0,n.jsx)("p",{className:l,children:t})]})},d=i;i.defaultProps={status:{}}},9594:(e,t,a)=>{a.d(t,{A:()=>o});var s=a(5043);const r={overlay:"Modal_overlay__b+zEz",overlayDairyPage:"Modal_overlayDairyPage__h20Vb",modalDairyPage:"Modal_modalDairyPage__wNlXX",modal:"Modal_modal__yEgVW",closeM:"Modal_closeM__mJ3AX",closeOther:"Modal_closeOther__8w+rp",mobileClose:"Modal_mobileClose__wiSFp"};var l=a(579);const o=e=>{let{setModalOpen:t,overlayClass:a="overlay",modalClass:o="modal",children:n}=e;function i(){document.querySelector("body").classList.remove("no-scroll")}(0,s.useEffect)((()=>{const e=e=>{"Escape"===e.code&&(i(),t(!1))};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}}),[t]);const d=()=>{i(),t(!1)};return(0,l.jsx)("div",{className:r[a],onClick:e=>{e.target===e.currentTarget&&(i(),t(!1))},children:(0,l.jsxs)("div",{className:r[o],children:[(0,l.jsx)("div",{className:r.mobileClose,children:(0,l.jsx)("span",{onClick:d,className:r.closeM})}),(0,l.jsx)("span",{onClick:d,className:r.closeOther}),n]})})}},8698:(e,t,a)=>{a.d(t,{A:()=>l});const s={btn:"Button_btn__cIIwi",btnLight:"Button_btnLight__TSLTb Button_btn__cIIwi",btnPlus:"Button_btnPlus__VRApt",btnDairyPage:"Button_btnDairyPage__2MLhY"};var r=a(579);const l=e=>{let{text:t="+",type:a="submit",btnClass:l="btnPlus",handleClick:o}=e;return(0,r.jsx)("button",{className:s[l],onClick:o,type:a,children:t})}},4744:(e,t,a)=>{a.d(t,{A:()=>s.A});var s=a(8698)},5304:(e,t,a)=>{a.d(t,{A:()=>r});var s=a(579);const r=e=>{let{children:t}=e;return(0,s.jsx)("div",{className:"container",children:t})}},5482:(e,t,a)=>{a.d(t,{A:()=>i});const s="TextField_label__kp4Pv",r="TextField_input__JDykO",l="TextField_span__qcPmc";var o=a(579);const n=e=>{let{type:t,name:a,value:n,handleChange:i,placeholder:d,required:c,pattern:_,title:m}=e;return(0,o.jsxs)("label",{className:s,children:[(0,o.jsx)("input",{className:r,type:t,name:a,value:n,onChange:i,required:c,pattern:_,title:m}),(0,o.jsx)("span",{className:l,children:d})]})},i=n;n.defaultProps={type:"text",required:!1}},8056:(e,t,a)=>{a.d(t,{Z:()=>s});const s={name:{name:"name",type:"text",placeholder:"Name*",title:"The name must be at least 3 characters long",required:!0},email:{name:"email",type:"text",placeholder:"Email*",required:!0},password:{name:"password",type:"password",placeholder:"Password (at least 8 characters)*",required:!0,title:"The password must be at least 8 characters long"},height:{name:"height",type:"text",placeholder:"Height (100-250 cm)*",required:!0,title:"Enter a valid integer from 100 to 250 cm."},age:{name:"age",type:"text",placeholder:"Age (18-100 y)*",required:!0,title:"Enter a valid number from 18 to 100 years."},weight:{name:"weight",type:"text",placeholder:"Current weight (20-250 kg)*",required:!0,title:"Enter a valid integer from 20 to 250 kg."},desiredWeight:{name:"desiredWeight",type:"text",placeholder:"Desired weight (20-200 kg)*",required:!0,title:"Enter a valid integer from 20 to 200 kg."},bloodType:{name:"bloodType",type:"text",placeholder:"Blood type*",disabled:!0},filter:{type:"text",name:"filter",placeholder:"Filter by name"}}},4133:(e,t,a)=>{a.d(t,{A:()=>s.A});var s=a(5482)},7742:(e,t,a)=>{a.r(t),a.d(t,{default:()=>k});var s=a(5043),r=a(4858),l=a(9456),o=a(5237);const n="Login_login__yplOB",i="Login_title__3JYIy",d="Login_form__g0qS6",c="Login_wrap__i5y-C",_="Login_imgDesktop__x7s8O";var m=a(5304),u=a(4133),h=a(8056),p=a(4744),g=a(1840),x=a(9594),b=a(6432),y=a(5816),v=a(3851),f=a(6871),N=a(1299),w=a(579);const j=()=>{const e=(0,o.useMediaQuery)({query:"(min-resolution: 2dppx)"}),t=(0,l.wA)(),[a,j]=(0,s.useState)(!1),k=(0,l.d4)(v.aU),{control:A,handleSubmit:C,reset:M}=(0,r.mN)({defaultValues:{email:"",password:""}});(0,s.useEffect)((()=>{t((0,f.HY)())}),[]);return(0,w.jsx)("section",{className:n,children:(0,w.jsxs)(m.A,{children:[(0,w.jsx)("h2",{className:i,children:"Login"}),(0,w.jsxs)("form",{className:d,onSubmit:C(((e,a)=>{a.preventDefault(),t((0,N.iD)(e)),j(!0),M()})),children:[(0,w.jsx)(r.xI,{control:A,name:"email",rules:{required:!0},render:e=>{let{field:{onChange:t,value:a}}=e;return(0,w.jsx)(u.A,{value:a,control:A,handleChange:t,...h.Z.email})}}),(0,w.jsx)(r.xI,{control:A,name:"password",rules:{required:!0,minLength:8,maxLength:30},render:e=>{let{field:{onChange:t,value:a}}=e;return(0,w.jsx)(u.A,{value:a,control:A,handleChange:t,...h.Z.password})}}),(0,w.jsx)("div",{className:c,children:(0,w.jsx)(p.A,{text:"Sign in",btnClass:"btn"})})]}),!e&&(0,w.jsx)("img",{className:_,src:b,alt:"background"}),e&&(0,w.jsx)("img",{className:_,src:y,alt:"background"}),a&&k&&(0,w.jsx)(x.A,{setModalOpen:j,children:(0,w.jsx)(g.A,{status:k})})]})})},k=()=>(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(j,{})})},955:(e,t,a)=>{a.d(t,{A:()=>s});const s={container:"NotFound_container__KNX4B",title:"NotFound_title__f917b",txt:"NotFound_txt__VshUQ",booWrapper:"NotFound_booWrapper__2b5FM",boo:"NotFound_boo__bQlpM",floating:"NotFound_floating__P8jYD",face:"NotFound_face__jV+a5",shadow:"NotFound_shadow__wSXLX",floatingShadow:"NotFound_floatingShadow__fkJav"}},6432:(e,t,a)=>{e.exports=a.p+"static/media/bcgD.06d7e880436282e9dadf.png"},5816:(e,t,a)=>{e.exports=a.p+"static/media/bcgD@2x.7d5af67d05df6e0bba78.png"}}]);
//# sourceMappingURL=742.f1f64586.chunk.js.map