"use strict";(self.webpackChunkpet_support_team_project_8=self.webpackChunkpet_support_team_project_8||[]).push([[88],{8765:function(n,e,t){t.d(e,{Z:function(){return d}});var o,i=t(5705),r=t(168),a=t(7691),s=t(1607),c=a.ZP.div(o||(o=(0,r.Z)(["\n  padding-top: 5px;\n  display: block;\n  position: absolute;\n  width: 100%;\n  right: 50%;\n  transform: translateX(50%);\n  font-family: ",";\n  font-size: ",";\n  text-align: center;\n  color: #e00e0e;\n\n  @media screen and (min-width: 768px) {\n    font-size: 17px;\n  }\n"])),s.Z.fonts.manrope,s.Z.fontSizes.s),l=t(3329),d=function(n){var e=n.name;return(0,l.jsx)(i.Bc,{name:e,render:function(n){return(0,l.jsx)(c,{children:n})}})}},2373:function(n,e,t){t.d(e,{Z:function(){return p}});var o,i,r,a=t(2791),s=t(168),c=t(7691),l={Backdrop:c.ZP.div(o||(o=(0,s.Z)(["\n  width: 100%;\n  height: 100%;\n  background-color: rgba(17, 17, 17, 0.6);\n  position: fixed;\n  z-index: 200;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  backdrop-filter: blur(10px);\n  opacity: ",";\n  pointer-events: ",";\n  transition: 0.5s;\n"])),(function(n){return n.active?1:0}),(function(n){return n.active?"all":"none"})),Content:c.ZP.div(i||(i=(0,s.Z)(["\n  border-radius: 40px;\n  background: ",";\n  transform: ",";\n  transition: 0.4s all;\n  @media "," {\n    border-radius: 20px;\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.active?"scale(1)":"scale(0.5)"}),(function(n){return n.theme.media.mobile})),CloseBtn:c.ZP.div(r||(r=(0,s.Z)(["\n  position: fixed;\n  cursor: pointer;\n  display: flex;\n  text-align: center;\n  align-items: center;\n  top: 16px;\n  right: 16px;\n  background-color: ",";\n  border: none;\n  border-radius: ",";\n  padding: 2px;\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.bg}),(function(n){return n.theme.radius.round}),(function(n){return n.theme.colors.accent}))},d=t(71),u=t(3329),p=function(n){var e=n.active,t=n.setActive,o=n.children,i=l.Backdrop,r=l.Content,s=l.CloseBtn,c=(0,a.useCallback)((function(n){"Escape"===n.key&&t(!1)}),[t]);return(0,a.useEffect)((function(){return document.body.style.overflow=e?"hidden":"",document.addEventListener("keydown",c),function(){return document.removeEventListener("keydown",c)}})),(0,u.jsx)(i,{active:e,onClick:function(){return t(!1)},children:(0,u.jsxs)(r,{active:e,onClick:function(n){return n.stopPropagation()},children:[(0,u.jsx)(s,{onClick:function(){return t(!1)},children:(0,u.jsx)(d.bjh,{size:25})}),o]})})}},716:function(n,e,t){t.d(e,{Z:function(){return R}});var o,i,r,a,s,c,l,d=t(168),u=t(7691),p=t(1607),h=t(8820),m=t(5705),x=u.ZP.div(o||(o=(0,d.Z)(["\ndisplay: flex;\njustify-content: center;\n\n@media screen and (",") {\nmargin-top: 28px;\nmargin-bottom: 28px;\n}\nmargin-bottom: 40px;\nmargin-top: 40px;\n"])),p.Z.media.mobile),f=(0,u.ZP)(m.l0)(i||(i=(0,d.Z)(["\nposition: relative;\ndisplay: inline-block;\n\n@media screen and (",") {\nwidth: 280px;\n};\n\nwidth: 608px;\n"])),p.Z.media.mobile),g=(0,u.ZP)(m.gN)(r||(r=(0,d.Z)(["\n@media screen and (",") {\nheight: 40px;\nfont-size: ",";\nline-height: 1.375;\npadding: 9px 0 9px 12px;\npadding-right:  calc(5% + 20px)\n};\nwidth: 100%;\nheight: 44px;\n\n@media screen and (",") {\nborder-radius: 40px;\nline-height: 1.35;\n};\n\n@media screen and (",") {\nline-height: 1.2;\n};\n\nbackground: ",";\n\nbox-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);\nborder: ",";\nborder-radius: 20px;\n\npadding: 8px 0 8px 20px;\npadding-right: calc(3% + 24px);\n\ncolor: #535353;\nfont-family: ",";\nfont-weight: ",";\nfont-size: 20px;\nletter-spacing: 0.04em;\noutline: none;\n\n&:focus {\n    outline: 1px solid rgba(245, 146, 86, 0.5);\n\n   \n}\n"])),p.Z.media.mobile,p.Z.fontSizes.m,p.Z.media.tablet,p.Z.media.desktop,p.Z.colors.white,p.Z.borders.none,p.Z.fonts.manrope,p.Z.fontWeights.normal),b=u.ZP.button(a||(a=(0,d.Z)(["\ndisplay: ",";\ncursor: pointer;\nposition: absolute;\ntop: 50%;\nright: 0;\npadding: 0;\npadding-right: 3%;\ntransform: translate(0, -50%);\n\n@media screen and (",") {\nheight: 40px;\npadding-right: 5%;\n};\n\nheight: 44px;\n\nbackground: transparent;\n\nborder: ",";\nborder-top-right-radius: 20px;\nborder-bottom-right-radius: 20px;\n"])),(function(n){return n.exist?"none":"block"}),p.Z.media.mobile,p.Z.borders.none),Z=u.ZP.button(s||(s=(0,d.Z)(["\ndisplay: ",";\ncursor: pointer;\nposition: absolute;\ntop: 50%;\nright: 0;\npadding: 0;\npadding-right: 3%;\ntransform: translate(0, -50%);\n\n@media screen and (",") {\nheight: 40px;\npadding-right: 5%;\n};\nheight: 44px;\nbackground: transparent;\n\nborder: ",";\nborder-top-right-radius: 20px;\nborder-bottom-right-radius: 20px;\n  "])),(function(n){return n.exist?"block":"none"}),p.Z.media.mobile,p.Z.borders.none),y={StyledForm:f,Input:g,SearchBtn:b,SearchBarContainer:x,MugnifyingGlass:(0,u.ZP)(h.RB5)(c||(c=(0,d.Z)(["\ndisplay: block;\n@media screen and (",") {\nwidth: 20px;\nheight: 20px;\n }\n\n  width: 24px; \n  height: 24px;"])),p.Z.media.mobile),CrissCross:(0,u.ZP)(h.SV5)(l||(l=(0,d.Z)(["\ndisplay: block;\n @media screen and (",") {\nwidth: 20px;\nheight: 20px;\n }\n\n  width: 24px; \n  height: 24px;\n"])),p.Z.media.mobile),ClearBtn:Z},j=t(9434),v=t(2242),w=t(2507),k=t(8765),C=t(2791),S=t(1724),F=t(3329),P=y.StyledForm,z=y.Input,B=y.SearchBtn,q=y.SearchBarContainer,I=y.MugnifyingGlass,L=y.CrissCross,T=y.ClearBtn,A=w.Z.selectSearchState,R=function(){var n=(0,j.I0)(),e=(0,j.v9)(A);(0,C.useEffect)((function(){n((0,v.q)(""))}),[n]);var t=function(e){var t=e.target.value;n((0,v.q)(t))},o=function(){n((0,v.q)(""))},i=S.Ry().shape({search:S.Z_().required("Value required")});return(0,F.jsx)(q,{children:(0,F.jsx)(m.J9,{initialValues:{search:e},validationSchema:i,validateOnChange:!0,enableReinitialize:!0,validateOnBlur:!1,children:function(n){var i=n.errors;return(0,F.jsxs)(P,{children:[(0,F.jsx)(z,{type:"text",value:e,name:"search",placeholder:"Search",onChange:t}),i.search?(0,F.jsx)(k.Z,{name:"search"}):null,(0,F.jsx)(B,{exist:e,type:"submit",children:(0,F.jsx)(I,{})}),(0,F.jsx)(T,{type:"button",onClick:o,exist:e,children:(0,F.jsx)(L,{})})]})}})})}},2088:function(n,e,t){t.r(e),t.d(e,{default:function(){return fe}});var o,i,r,a,s,c,l,d,u,p,h,m,x,f,g,b,Z,y,j,v,w,k,C,S,F,P,z,B,q,I=t(716),L=t(9439),T=t(2791),A=t(2373),R=t(4165),_=t(5861),O=t(1413),N=t(9434),W=t(5705),E=t(168),H=t(7691),M=H.ZP.div(o||(o=(0,E.Z)(["\n  padding: 40px 80px;\n  width: 100%;\n  height: 100%;\n  height: 95vh;\n  overflow: hidden;\n  overflow-y: auto;\n  @media "," {\n    padding: 20px 40px;\n  }\n"])),(function(n){return n.theme.media.mobile})),G=(0,H.ZP)(W.l0)(i||(i=(0,E.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 28px;\n  @media "," {\n    gap: 16px;\n    width: 240px;\n  }\n"])),(function(n){return n.theme.media.mobile})),V=H.ZP.h1(r||(r=(0,E.Z)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: 36px;\n  color: ",";\n  line-height: 49px;\n  align-items: center;\n  text-align: center;\n  margin-bottom: 40px;\n  @media "," {\n    margin: 28px;\n  }\n"])),(function(n){return n.theme.fonts.manrope}),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.media.mobile})),D=H.ZP.div(a||(a=(0,E.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  gap: 12px;\n  position: relative;\n  @media "," {\n    width: 100%;\n  }\n"])),(function(n){return n.theme.media.mobile})),J=(0,H.ZP)(W.gN)(s||(s=(0,E.Z)(["\n  width: 100%;\n  height: 40px;\n  display: flex;\n  text-align: flex-start;\n  justify-content: start;\n  align-items: start;\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  letter-spacing: 0.04em;\n  background-color: ",";\n  color: ",";\n  padding: 11px 14px 10px 14px;\n  outline: 1px solid ",";\n  border: none;\n  border-radius: 40px;\n  cursor: pointer;\n  carent-color: ",";\n  transition: all 100ms ease-in;\n\n  @media "," {\n    height: 48px;\n    font-size: 20px;\n    padding: 11px 14px 10px 32px;\n    background-color: ",";\n  }\n\n  &::placeholder {\n    font-family: ",";\n    font-weight: 400;\n    font-size: ",";\n    line-height: 1.35;\n    letter-spacing: 0.04em;\n    color: rgba(17, 17, 17, 0.6);\n\n    @media "," {\n      font-size: 18px;\n      line-height: 1.38;\n      width: 100%;\n    }\n  }\n\n  &::-ms-reveal {\n    display: none;\n  }\n\n  &:focus,\n  &:hover {\n    outline: 2px solid ",";\n\n    @media screen and (min-width: 768px) {\n      outline-width: 3px;\n    }\n  }\n"])),(function(n){return n.theme.fonts.manrope}),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.colors.bg}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.colors.bg}),(function(n){return n.theme.fonts.manrope}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.media.mobile}),(function(n){return n.theme.colors.accent})),U=H.ZP.div(c||(c=(0,E.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  margin-top: 12px;\n  @media "," {\n    flex-direction: column-reverse;\n    gap: 12px;\n    width: 100%;\n    margin: 0;\n    align-items: center;\n    text-align: center;\n  }\n"])),(function(n){return n.theme.media.mobile})),X=H.ZP.button(l||(l=(0,E.Z)(["\n  border: ",";\n  border-radius: ",";\n  width: 180px;\n  padding: 10px 28px;\n  font-family: ",";\n  font-size: 20px;\n  color: ",";\n  background-color: ",";\n  letter-spacing: 0.07em;\n\n  &:hover {\n    background-color: ",";\n    color: ",";\n  }\n  @media "," {\n    margin: ","px;\n    font-size: 20px;\n  }\n\n  @media "," {\n    margin-top: ","px;\n  }\n\n  &.active {\n    background-color: ",";\n    color: ",";\n  }\n"])),(function(n){return n.theme.borders.box}),(function(n){return n.theme.radius.normal}),(function(n){return n.theme.fonts.manrope}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.media.desktop}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.white})),Y=H.ZP.input(d||(d=(0,E.Z)(["\n  position: absolute;\n  opacity: 0;\n  z-index: -1;\n"]))),$=H.ZP.label(u||(u=(0,E.Z)(["\n  position: absolute;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n  width: 182px;\n  height: 182px;\n  background-color: ",";\n  border-radius: 40px;\n\n  ","\n"])),(function(n){return n.theme.colors.bg}),(function(n){return n.preview?"\n    background: url(".concat(n.preview,") center center no-repeat;\n    background-size: cover;\n  "):null})),K=H.ZP.div(p||(p=(0,E.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  width: 448px;\n  margin-bottom: 28px;\n  @media "," {\n    flex-wrap: wrap;\n    gap: 8px;\n    width: 240px;\n  }\n"])),(function(n){return n.theme.media.mobile})),Q=H.ZP.label(h||(h=(0,E.Z)(["\n  font-family: ",";\n  font-weight: ",";\n  text-align: center;\n  height: 47px;\n  letter-spacing: 0.04em;\n  color: ",";\n\n  @media "," {\n    font-size: ",";\n    line-height: 1.357;\n    padding: 8px 28px;\n  }\n\n  font-size: 20px;\n  line-height: 1.35;\n\n  padding: 10px 28px;\n  background-color: ",";\n  border: 2px solid ",";\n  border-radius: 40px;\n  transition: background-color 200ms, color 200ms;\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n    color: ",";\n  }\n  cursor: pointer;\n"])),(function(n){return n.theme.fonts.manrope}),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.media.mobile}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.white})),nn=(0,H.ZP)(W.gN)(m||(m=(0,E.Z)(["\n  position: absolute;\n  opacity: 0;\n  z-index: -1;\n\n  &:checked + "," {\n    background-color: ",";\n    color: ",";\n  }\n"])),Q,(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.white})),en=H.ZP.label(x||(x=(0,E.Z)(["\n  display: grid;\n  gap: 12px;\n  font-family: ",";\n  font-weight: ",";\n  font-size: 20px;\n  text-align: center;\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n"])),(function(n){return n.theme.fonts.manrope}),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.colors.accent})),tn=(0,H.ZP)(W.gN)(f||(f=(0,E.Z)(["\n  position: absolute;\n  opacity: 0;\n  z-index: -1;\n\n  &:checked + "," {\n    color: ",";\n  }\n"])),en,(function(n){return n.theme.colors.accent})),on=H.ZP.div(g||(g=(0,E.Z)(["\n  width: 443px;\n  text-align: center;\n  margin-bottom: 28px;\n  @media "," {\n    width: 240px;\n  }\n"])),(function(n){return n.theme.media.mobile})),rn=H.ZP.span(b||(b=(0,E.Z)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: 20px;\n  text-align: center;\n  letter-spacing: -0.01em;\n"])),(function(n){return n.theme.fonts.manrope}),(function(n){return n.theme.fontWeights.normal})),an={Container:M,Forma:G,Title:V,Input:J,Label:H.ZP.label(Z||(Z=(0,E.Z)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n"])),(function(n){return n.theme.fonts.manrope}),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.fontSizes.ml})),RadioLabel:Q,InputBox:D,BtnBox:U,Btn:X,AddPhoto:$,CategoriesBox:K,RadioInput:nn,SexRadioInput:tn,SexLabel:en,TextBox:on,Text:rn,AvatarInput:Y,ErrorMsg:H.ZP.div(y||(y=(0,E.Z)(["\n  font-family: ",";\n  font-size: ",";\n  text-align: center;\n  color: #e00e0e;\n  position: absolute;\n  bottom: -20px;\n  left: 50%;\n  transform: translateX(-50%);\n"])),(function(n){return n.theme.fonts.manrope}),(function(n){return n.theme.fontSizes.s}))},sn=t(8820),cn=t(8014),ln=t(1724),dn=t(3329),un=an.Forma,pn=an.Input,hn=an.InputBox,mn=an.BtnBox,xn=an.Btn,fn=an.AddPhoto,gn=an.CategoriesBox,bn=an.RadioLabel,Zn=an.RadioInput,yn=an.Text,jn=an.Label,vn=an.SexRadioInput,wn=an.SexLabel,kn=an.TextBox,Cn=an.AvatarInput,Sn=an.ErrorMsg,Fn=ln.Ry().shape({category:ln.Z_().oneOf(["lostfound","ingoodhands","sell"]).required("Category is required"),title:ln.Z_().required("Title is required").min(2).max(48),name:ln.Z_().required("Name is required").min(2).max(16),birthdate:ln.hT().required("Birthdate is required"),breed:ln.Z_().required("Breed is required").min(2).max(24)}),Pn={FirstStepAdd:function(n){var e=n.state,t=n.handleSubmit,o=n.onCancel;return(0,dn.jsxs)("div",{children:[(0,dn.jsx)(kn,{children:(0,dn.jsxs)(yn,{children:["Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur"," "]})}),(0,dn.jsx)(W.J9,{initialValues:e,onSubmit:t,validationSchema:Fn,children:function(n){var e=n.errors,t=n.touched;return(0,dn.jsxs)(un,{autoComplete:"off",children:[(0,dn.jsxs)("div",{style:{position:"relative"},children:[(0,dn.jsxs)(gn,{children:[(0,dn.jsx)(Zn,{id:"category-1",type:"radio",name:"category",value:"lostfound"}),(0,dn.jsx)(bn,{htmlFor:"category-1",children:"lost/found"}),(0,dn.jsx)(Zn,{id:"category-2",type:"radio",name:"category",value:"ingoodhands"}),(0,dn.jsx)(bn,{htmlFor:"category-2",children:"in good hands"}),(0,dn.jsx)(Zn,{id:"category-3",type:"radio",name:"category",value:"sell"}),(0,dn.jsx)(bn,{htmlFor:"category-3",children:"sell"})]}),e.category&&t.category?(0,dn.jsx)(Sn,{children:e.category}):null]}),(0,dn.jsxs)(hn,{children:[(0,dn.jsxs)(jn,{htmlFor:"title",children:["Title of ad ",(0,dn.jsx)("span",{style:{color:"#F59256"},children:"*"})]}),(0,dn.jsx)(pn,{type:"text",name:"title",placeholder:"Type name"}),e.title&&t.title?(0,dn.jsx)(Sn,{children:e.title}):null]}),(0,dn.jsxs)(hn,{children:[(0,dn.jsxs)(jn,{htmlFor:"name",children:["Pet's name ",(0,dn.jsx)("span",{style:{color:"#F59256"},children:"*"})]}),(0,dn.jsx)(pn,{type:"text",name:"name",placeholder:"Type the pet's name"}),e.name&&t.name?(0,dn.jsx)(Sn,{children:e.name}):null]}),(0,dn.jsxs)(hn,{children:[(0,dn.jsxs)(jn,{htmlFor:"birthdate",children:["Date of birth ",(0,dn.jsx)("span",{style:{color:"#F59256"},children:"*"})]}),(0,dn.jsx)(pn,{type:"date",name:"birthdate",placeholder:"Type date of birth"}),e.birthdate&&t.birthdate?(0,dn.jsx)(Sn,{children:e.birthdate}):null]}),(0,dn.jsxs)(hn,{children:[(0,dn.jsxs)(jn,{htmlFor:"breed",children:["Breed ",(0,dn.jsx)("span",{style:{color:"#F59256"},children:"*"})]}),(0,dn.jsx)(pn,{type:"text",name:"breed",placeholder:"Type breed"}),e.breed&&t.breed?(0,dn.jsx)(Sn,{children:e.breed}):null]}),(0,dn.jsxs)(mn,{children:[(0,dn.jsx)(xn,{type:"button",onClick:o,children:"Cancel"}),(0,dn.jsx)(xn,{type:"submit",children:"Next"})]})]})}})]})},SecondStepAdd:function(n){var e=n.state,t=n.handleSubmit,o=n.onBack,i=(0,T.useState)(e.avatar),r=(0,L.Z)(i,2),a=r[0],s=r[1],c=ln.Ry().shape({sex:ln.Z_().oneOf(["male","female"]).required("Sex is required"),location:ln.Z_().required("Location is required").matches(/^[A-Z][\w\s-]+,\s[A-Z][\w\s-]+$/,"Please, match this format: City, Region"),price:"sell"===e.category?ln.Rx().required("Price is required"):void 0,comments:ln.Z_().required("Comments are required").min(8).max(120)}),l=function(n){var e;s(null===(e=n.target.files)||void 0===e?void 0:e[0])};return(0,dn.jsx)(dn.Fragment,{children:(0,dn.jsx)(W.J9,{initialValues:e,onSubmit:function(n,e){t((0,O.Z)((0,O.Z)({},n),{},{avatar:a}),e)},validationSchema:c,children:function(n){var t=n.values,i=n.errors,r=n.touched;return(0,dn.jsxs)(un,{autoComplete:"off",children:[(0,dn.jsxs)(hn,{children:[(0,dn.jsxs)(jn,{htmlFor:"sex",children:["The sex ",(0,dn.jsx)("span",{style:{color:"#F59256"},children:"*"})]}),(0,dn.jsxs)("div",{style:{display:"flex",gap:80},children:[(0,dn.jsx)(vn,{id:"sex-male",type:"radio",name:"sex",value:"male",style:{width:60,height:60,opacity:0}}),(0,dn.jsxs)(wn,{htmlFor:"sex-male",style:{position:"relative"},children:[(0,dn.jsx)(cn.y4U,{size:60,style:{color:"23C2EF"}}),(0,dn.jsx)("span",{children:"Male"})]}),(0,dn.jsx)(vn,{id:"sex-female",type:"radio",name:"sex",value:"female",style:{width:60,height:60,opacity:0}}),(0,dn.jsxs)(wn,{htmlFor:"sex-female",style:{position:"relative"},children:[(0,dn.jsx)(cn.YgV,{size:60,style:{color:"FF8787"}}),(0,dn.jsx)("span",{children:"Female"})]})]}),i.sex&&r.sex?(0,dn.jsx)(Sn,{children:i.sex}):null]}),(0,dn.jsxs)(hn,{children:[(0,dn.jsxs)(jn,{htmlFor:"location",children:["Location ",(0,dn.jsx)("span",{style:{color:"#F59256"},children:"*"})]}),(0,dn.jsx)(pn,{type:"text",name:"location",placeholder:"Type location"}),i.location&&r.location?(0,dn.jsx)(Sn,{style:{bottom:"-35px"},children:i.location}):null]}),"sell"===e.category&&(0,dn.jsxs)(hn,{children:[(0,dn.jsxs)(jn,{htmlFor:"price",children:["Price ",(0,dn.jsx)("span",{style:{color:"#F59256"},children:"*"})]}),(0,dn.jsx)(pn,{type:"number",name:"price",placeholder:"Type price"}),i.price&&r.price?(0,dn.jsx)(Sn,{children:i.price}):null]}),(0,dn.jsxs)(hn,{style:{display:"flex",position:"relative",marginBottom:28},children:[(0,dn.jsx)(jn,{htmlFor:"avatar",children:"Load the pet\u2019s image"}),(0,dn.jsxs)("div",{style:{width:140,height:140},children:[(0,dn.jsx)(Cn,{id:"avatar",as:"input",type:"file",name:"avatar",accept:".png, .jpg, .jpeg",onChange:l}),(0,dn.jsx)(fn,{htmlFor:"avatar",preview:a?URL.createObjectURL(a):void 0,children:a?null:(0,dn.jsx)(sn.Lfi,{size:71,color:"rgba(17, 17, 17, 0.6"})})]})]}),(0,dn.jsxs)(hn,{children:[(0,dn.jsxs)(jn,{htmlFor:"comments",children:["Comments ",(0,dn.jsx)("span",{style:{color:"#F59256"},children:"*"})]}),(0,dn.jsx)(pn,{component:"textarea",type:"text",name:"comments",placeholder:"Type comments",style:{height:116,borderRadius:20,display:"block"}}),i.comments&&r.comments?(0,dn.jsx)(Sn,{style:{bottom:"-35px"},children:i.comments}):null]}),(0,dn.jsxs)(mn,{children:[(0,dn.jsx)(xn,{type:"button",onClick:function(){return o((0,O.Z)((0,O.Z)({},t),{},{avatar:a}))},children:"Back"}),(0,dn.jsx)(xn,{type:"submit",secondStep:!0,children:"Done"})]})]})}})})}},zn=t(398),Bn=t(7689),qn=t(6453),In=t(6774),Ln=t(5985),Tn=zn.Z.addNotice,An=Pn.FirstStepAdd,Rn=Pn.SecondStepAdd,_n=an.Container,On=an.Title,Nn={category:"",title:"",name:"",birthdate:"",breed:"",sex:"",location:"",price:"",comments:"",avatar:void 0},Wn=function(n){var e=n.onCancel,t=(0,T.useState)(Nn),o=(0,L.Z)(t,2),i=o[0],r=o[1],a=(0,T.useState)(!1),s=(0,L.Z)(a,2),c=s[0],l=s[1],d=(0,Bn.TH)().pathname,u=(0,N.I0)(),p=function(){var n=(0,_.Z)((0,R.Z)().mark((function n(t,o){var a,s,c,p,h,m;return(0,R.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:o.resetForm,a=t.sex,s=t.location,c=t.price,p=t.avatar,h=t.comments,(m=new FormData).append("category",i.category),m.append("name",i.name),m.append("birthdate",new Date(i.birthdate).toISOString()),m.append("breed",i.breed),m.append("title",i.title),m.append("sex",a),m.append("location",s),c&&"sell"===i.category&&m.append("price",c),p&&m.append("avatar",p),m.append("comments",h),(0,Ln.Am)("Notice added",In.Z),u(Tn(m)).then((function(){(0,qn.Z)({dispatch:u,pathname:d})})),r(Nn),l(!1),e();case 18:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return(0,dn.jsxs)(dn.Fragment,{children:[(0,dn.jsx)(Ln.Ix,{}),(0,dn.jsxs)(_n,{children:[(0,dn.jsx)(On,{children:"Add pet"}),c?(0,dn.jsx)(Rn,{state:i,handleSubmit:p,onBack:function(n){var e=n.sex,t=n.location,o=n.price,i=n.avatar,a=n.comments;r((function(n){return(0,O.Z)((0,O.Z)({},n),{},{sex:e,location:t,price:o,avatar:i,comments:a})})),l(!1)}}):(0,dn.jsx)(An,{state:i,handleSubmit:function(n){var e=n.name,t=n.birthdate,o=n.breed,i=n.category,a=n.title;r((function(n){return(0,O.Z)((0,O.Z)({},n),{},{title:a,name:e,birthdate:t,category:i,breed:o})})),l(!0)},onCancel:e})]})]})},En=t(1607),Hn={MobBtn:H.ZP.button(j||(j=(0,E.Z)(["\nz-index: 10;\n@media screen and (min-width: 767px) {\n    display: none;\n}\n cursor: pointer;\nposition: fixed;\nwidth: 80px;\nheight: 80px;\nright: 20px;\nbottom: 12%;\n\nbackground: ",";\nborder-radius: 50%;\noutline: none;\nborder: none;\nbox-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);\n\nfont-family: ",";\nfont-weight: ",";\nfont-size: ",";\nline-height:1.33;\n\ncolor: ",";\n\ntransition: background-color 200ms ease-in-out;\n\n&:hover, &:active {\n    background-color: #FF6101\n}"])),En.Z.colors.accent,En.Z.fonts.manrope,En.Z.fontWeights.normal,En.Z.fontSizes.xs,En.Z.colors.white),Text:H.ZP.span(v||(v=(0,E.Z)(["\ndisplay: flex;\nalign-items: center;\nfont-family: ",";\nfont-weight: ",";\nfont-size: 20px;\nline-height: 1.35;\n\ncolor: ",";\n\n@media screen and (",") {\n    display: none;\n}"])),En.Z.fonts.manrope,En.Z.fontWeights.normal,En.Z.colors.black,En.Z.media.mobile),Btn:H.ZP.button(w||(w=(0,E.Z)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nwidth: 44px;\nheight: 44px;\npadding: 0;\nmargin-left: 12px;\nbackground: ",";\nborder-radius: 50%;\noutline: none;\nborder: none;\ncursor: pointer;\ntransition: background-color 200ms ease-in-out;\n\n&:hover, &:active {\n    background-color: #FF6101\n}"])),En.Z.colors.accent),MobCross:(0,H.ZP)(sn.Lfi)(k||(k=(0,E.Z)(["\ndisplay: block;\nmargin: 0 auto;\nwidth: 32px;\nheight: 32px;\nfill: ",";"])),En.Z.colors.white),Cross:(0,H.ZP)(sn.Lfi)(C||(C=(0,E.Z)(["\ndisplay: block;\nwidth: 24px;\nheight: 24px;\nfill: ",";"])),En.Z.colors.white)},Mn=t(4289),Gn=Hn.MobBtn,Vn=Hn.Text,Dn=Hn.Btn,Jn=Hn.Cross,Un=Hn.MobCross,Xn=Mn.Z.selectIsLoggedIn,Yn=function(){var n=(0,T.useState)(!1),e=(0,L.Z)(n,2),t=e[0],o=e[1],i=(0,N.v9)(Xn),r=function(){if(!i)return Ln.Am.info("For this operation registration or login needed",In.Z);o(!0)};return(0,dn.jsxs)("div",{style:{flexShrink:0},children:[(0,dn.jsx)(Ln.Ix,{}),(0,dn.jsxs)(Gn,{type:"button",onClick:r,children:[(0,dn.jsx)(Un,{})," Add pet"]}),(0,dn.jsxs)(Vn,{children:["Add pet",(0,dn.jsx)(Dn,{type:"button",onClick:r,children:(0,dn.jsx)(Jn,{})})]}),(0,dn.jsx)(A.Z,{active:t,setActive:o,children:(0,dn.jsx)(Wn,{onCancel:function(){return o(!1)}})})]})},$n=t(1087),Kn=H.ZP.div(S||(S=(0,E.Z)(["\ndisplay: flex;\nflex-wrap: wrap;\ngap: 12px;\n"]))),Qn={Option:(0,H.ZP)($n.OL)(F||(F=(0,E.Z)(["\nfont-family: ",";\nfont-weight: ",";\ntext-align: center;\nletter-spacing: 0.04em;\ncolor: ",";\n\n@media screen and (",") {\n    font-size: ",";\nline-height: 1.357;\npadding: 8px 28px;\n}\n\nfont-size: 20px;\nline-height: 1.35;\n\npadding: 10px 28px;\nbackground-color: ",";\nborder: 2px solid ",";\nborder-radius: 40px;\ntransition: background-color 200ms, color 200ms;\n\n&:hover, &:focus, &.active {\n    background-color: ",";\n    color: ",";\n};\ncursor: pointer;"])),En.Z.fonts.manrope,En.Z.fontWeights.normal,En.Z.colors.black,En.Z.media.mobile,En.Z.fontSizes.s,En.Z.colors.white,En.Z.colors.accent,En.Z.colors.accent,En.Z.colors.white),Container:Kn},ne=t(8487),ee=t(5667),te=zn.Z.fetchNoticesByCategory,oe=zn.Z.fetchOwnNotices,ie=zn.Z.fetchFavorite,re=Qn.Option,ae=Qn.Container,se=function(){var n=(0,Bn.TH)().pathname,e=Mn.Z.selectIsLoggedIn,t=(0,N.I0)(),o=(0,N.v9)(e);(0,T.useEffect)((function(){o&&t((0,ee.is)()),n.includes("favorite")?t(ie()):n.includes("own")?t(oe()):n.includes("sell")?t(te({category:ne.Z.sell})):n.includes("for-free")?t(te({category:ne.Z.inGoodHands})):n.includes("lost-found")&&t(te({category:ne.Z.lostFound}))}),[]);var i=function(n){t(te(n))};return(0,dn.jsxs)(ae,{children:[(0,dn.jsx)(re,{to:"lost-found",onClick:function(){return i({category:ne.Z.lostFound})},children:"lost/found"}),(0,dn.jsx)(re,{to:"for-free",onClick:function(){return i({category:ne.Z.inGoodHands})},children:"in good hands"}),(0,dn.jsx)(re,{to:"sell",onClick:function(){return i({category:ne.Z.sell})},children:"sell"}),o?(0,dn.jsxs)(dn.Fragment,{children:[(0,dn.jsx)(re,{to:"favorite",onClick:function(){t(ie())},children:"favorite ads"}),(0,dn.jsx)(re,{to:"own",onClick:function(){t(oe())},children:"my ads"})]}):""]})},ce=H.ZP.section(P||(P=(0,E.Z)(["\nbackground-color: ",";\nheight: auto;\npadding-bottom: 100px;\n@media screen and (",") {\n    padding-top: 100px;\n}\n\n@media screen and (",") {\npadding-top: 160px;\n}\n\n@media screen and (",") {\npadding-top: 126px;\npadding-bottom: 200px;\n}\n"])),En.Z.colors.bg,En.Z.media.mobile,En.Z.media.tablet,En.Z.media.desktop),le=H.ZP.div(z||(z=(0,E.Z)(["\nmargin: 0 auto;\n@media screen and (",") {\n   padding: 0 20px;\n   width: 320px;\n}\n\n@media screen and (",") {\npadding: 0 32px;\nwidth: 768px;\n}\n\n@media screen and (",") {\npadding: 0 16px;\nwidth: 1280px;\n}\n"])),En.Z.media.mobile,En.Z.media.tablet,En.Z.media.desktop),de={Section:ce,Header:H.ZP.h1(B||(B=(0,E.Z)(["\n@media screen and (",") {\n    font-size: 24px;\n}\n\nfont-family: ",";\nfont-weight: ",";\nfont-size: 48px;\nline-height: 1.375;\n\n\ntext-align: center;\n\ncolor: ",";\n"])),En.Z.media.mobile,En.Z.fonts.manrope,En.Z.fontWeights.bold,En.Z.colors.black),Container:le,CategoriesCont:H.ZP.div(q||(q=(0,E.Z)(["\ndisplay: flex;\njustify-content: space-between;\nmargin-left: auto;\nmargin-right: auto;\n\n@media screen and (",") {\n    margin-bottom: 30px;\n}\nmargin-bottom: 60px;"])),En.Z.media.mobile)},ue=t(4270),pe=de.Section,he=de.Header,me=de.Container,xe=de.CategoriesCont,fe=function(){return(0,dn.jsxs)(pe,{children:[(0,dn.jsx)(ue.q,{children:(0,dn.jsx)("title",{children:"Notices"})}),(0,dn.jsxs)(me,{children:[(0,dn.jsx)(he,{style:{textAlign:"center"},children:"Find your favorite pet"}),(0,dn.jsx)(I.Z,{}),(0,dn.jsxs)(xe,{children:[(0,dn.jsx)(se,{}),(0,dn.jsx)(Yn,{})]}),(0,dn.jsx)(T.Suspense,{children:(0,dn.jsx)(Bn.j3,{})})]})]})}},2507:function(n,e){var t={selectSearchState:function(n){return n.search.query}};e.Z=t},8487:function(n,e){var t=Object.freeze({sell:"sell",lostFound:"lostfound",inGoodHands:"ingoodhands"});e.Z=t},6453:function(n,e,t){var o=t(398),i=t(8487),r=t(5667),a=o.Z.fetchNoticesByCategory,s=o.Z.fetchOwnNotices,c=o.Z.fetchFavorite;e.Z=function(n){var e=n.dispatch,t=n.pathname;e((0,r.is)()),t.includes("favorite")?e(c()):t.includes("own")?e(s()):t.includes("sell")?e(a({category:i.Z.sell})):t.includes("for-free")?e(a({category:i.Z.inGoodHands})):t.includes("lost-found")&&e(a({category:i.Z.lostFound}))}},6774:function(n,e){e.Z={position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1}}}]);
//# sourceMappingURL=88.87cf6a9e.chunk.js.map