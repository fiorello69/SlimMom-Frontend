"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[937],{2455:(e,t,i)=>{i.d(t,{a:()=>d});var r=i(7478),o=i(5043),a=i(7267),p=i(4574);const n=p.Ay.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  border-radius: 0 px;
  width: 100%;
  height: 100%;
  background-color: rgba(192, 192, 192);
  @media screen and (min-width: 767px) {
    border-radius: 5px;
  }
`,s=p.Ay.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;var l=i(579);const d=()=>{const{isChristmas:e}=(0,o.useContext)(r.D);return(0,l.jsx)(n,{children:(0,l.jsx)(s,{children:(0,l.jsx)(a.q0,{color:e?"#D6001C":"#FC842D",arialLabel:"loading-indicator",height:"120",width:"120",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"three-circles-rotating",outerCircleColor:"",innerCircleColor:"",middleCircleColor:""})})})}},7206:(e,t,i)=>{i.d(t,{eM:()=>j,H2:()=>$,mO:()=>y,fy:()=>k});var r=i(4574),o=i(7203),a=i(7580),p=i(8300),n=i(8018),s=i(525),l=i(7836),d=i(6636),x=i(1058),c=i(7038),m=i(4502),h=i(5026),g=i(9250);const u=i.p+"static/media/leaves.ab2ea6027bcd393c10fa.png",b=i.p+"static/media/leaves@2x.be8555f976d4cbd66053.png";var f=i(7984),w=i(4232);const y=r.Ay.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 100px;
  @media (min-width: 426px) and (max-width: 1023px) {
    padding: 160px 32px 419px;
  }
  @media (min-width: 1024px) {
    margin: 0 auto;
    width: 1280px;
    padding: 306px 16px 179px;
  }
`,j=r.Ay.div`
  margin-top: 60px;
  display: grid;
  gap: 32px;
  justify-content: center;
  @media (min-width: 426px) {
    display: flex;
    gap: 32px;
    justify-content: flex-start;
  }
`,$=r.Ay.h2`
  font-family: ${e=>e.theme.fonts.body};
  font-weight: 700;
  font-size: ${e=>e.theme.fontSizes[0]};
  line-height: ${e=>e.theme.lineHeights[0]};

  letter-spacing: 0.04em;
  text-transform: uppercase;

  color: ${e=>e.theme.colors.orange};
  margin-bottom: 60px;
  margin-top: 40px;
  text-align: center;
  @media (min-width: 426px) {
    text-align: left;
  }
`,k=r.Ay.div`
  @media (min-width: 426px) and (max-width: 1023px) {
    background-image: url(${h}), url(${u}),
      url(${c}), url(${f});
    background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
    background-position: bottom 200px right -80px, top -97px left 0px,
      bottom 0px right 0px, bottom 0px right 0px;
    background-size: 391px 384px, 740px 842px, auto, auto;

    @media (min-resolution: 2dppx) {
      background-image: url(${b}),
        url(${g}), url(${m}),
        url(${w});
      background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
      background-position: bottom 97px left 0px, bottom 279px right -60px,
        bottom 0px right 0px, bottom 0px right 0px;
      background-size: 531px 553px, 291px 284px, 491px 431px, 494px 563px;
    }
  }
  @media (min-width: 1024px) {
    background-image: url(${o}), url(${p}), url(${a}),
      url(${n});
    background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
    background-position: top 0px right 195px, top 506px right 30px,
      top 0px right 0px, bottom 0px right 0px;
    background-size: auto, auto, auto, 602px 816px;
    @media (min-resolution: 2dppx) {
      background-image: url(${s}), url(${d}),
        url(${l}), url(${x});
      background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
      background-position: top 0px right 195px, top 526px right 50px,
        top 0px right 0px, bottom 0px right 0px;
      background-size: 746px 846px, 286px 279px, 498px 450px, 602px 816px;
    }
  }
`;r.Ay.a`
  text-decoration: none;
  font-family: ${e=>e.theme.fonts.body};
  line-height: ${e=>e.theme.lineHeights.body};
  font-size: ${e=>e.theme.fontSizes[0]};

  border-radius: 30px;
  border: ${e=>e.theme.borders.btn};
  color: ${e=>e.theme.colors.orange};
  width: 182px;
  height: 44px;
  transition: background 250ms cubic-bezier(0.42, 0, 1, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover,
  &:focus {
    background: ${e=>e.theme.colors.hover};
    color: ${e=>e.theme.colors.white};
  }
`},7031:(e,t,i)=>{i.r(t),i.d(t,{default:()=>j});var r=i(5043),o=i(3516),a=i(1434),p=i(3033),n=i(3216),s=i(1602),l=i(5137),d=i(8425),x=i(4076),c=i(6879),m=i(5408),h=i(7206),g=i(2455),u=i(7478),b=i(9640),f=i(579);const w=p.Ik().shape({email:p.Yj().email().required("Email is required field"),password:p.Yj().min(6,"Password must be more than or equal to 6 letters").max(16,"Pame must be more than or equal to 16 letters").required("Password is required field")}),y={email:"",password:""},j=()=>{const e=(0,n.Zp)(),[t,{status:i}]=(0,s.N8)(),p=(0,l.wA)(),{isChristmas:j}=(0,r.useContext)(u.D),[$,k]=(0,r.useState)(!1),C=()=>{k(!$)};return(0,f.jsxs)(h.fy,{children:[j&&(0,f.jsx)(x.A,{}),"pending"===i&&(0,f.jsx)(g.a,{}),(0,f.jsxs)(h.mO,{style:{paddingBottom:"255px"},children:[(0,f.jsx)(h.H2,{children:"Log In"}),(0,f.jsx)(o.l1,{initialValues:y,onSubmit:async(i,r)=>{let{resetForm:o}=r;const a=await t(i).unwrap();p((0,d.gV)(a)),e(b.J.diary),o()},validationSchema:w,children:(0,f.jsxs)(o.lV,{children:[(0,f.jsxs)(c.B8,{style:{display:"grid",gridTemplateColumns:"revert"},children:[(0,f.jsx)("li",{children:(0,f.jsxs)("label",{children:[(0,f.jsx)(c.pd,{type:"email",name:"email",placeholder:"Email *"}),(0,f.jsx)(o.Kw,{name:"email",component:c.$D}),"rejected"===i&&(0,f.jsx)(c.$D,{children:"Email or password is wrong"})]})}),(0,f.jsx)("li",{children:(0,f.jsxs)("label",{style:{position:"relative"},children:[(0,f.jsx)(c.pd,{type:$?"text":"password",name:"password",placeholder:"Password *",maxLength:"16"}),$?(0,f.jsx)(a.cqH,{onClick:C,style:{position:"absolute",top:"0px",left:"250px",color:"#FC842D"}}):(0,f.jsx)(a.zgv,{onClick:C,style:{position:"absolute",top:"0px",left:"250px",color:"#FC842D"}}),(0,f.jsx)(o.Kw,{name:"password",component:c.$D}),"rejected"===i&&(0,f.jsx)(c.$D,{children:"Email or password is wrong"})]})})]}),(0,f.jsxs)(h.eM,{children:[(0,f.jsx)(m.$,{type:"submit",full:!0,style:{width:"200px"},children:"Log In"}),(0,f.jsx)("div",{onClick:()=>{e(b.J.register)},children:(0,f.jsx)(m.$,{type:"button",full:!1,children:"Register"})})]})]})})]})]})}}}]);
//# sourceMappingURL=937.0925b3a1.chunk.js.map