"use strict";(self.webpackChunkpet_support_team_project_8=self.webpackChunkpet_support_team_project_8||[]).push([[609],{3189:function(e,i,s){s(2791);i.Z=s.p+"static/media/register-Down-BG-image-desktop.928b350b7b57fe737e7b4402326156e1.svg"},2197:function(e,i,s){s(2791);i.Z=s.p+"static/media/register-Down-BG-image-mobile.154eecc1cf46487153884eab247407f4.svg"},2959:function(e,i,s){s(2791);i.Z=s.p+"static/media/register-Down-BG-image-tablet.b60e02303eb021cf426b2fd83a0d20b6.svg"},8765:function(e,i,s){s.d(i,{Z:function(){return c}});var t,a=s(5705),n=s(168),r=s(7691),o=s(1607),d=r.ZP.div(t||(t=(0,n.Z)(["\n  padding-top: 5px;\n  display: block;\n  position: absolute;\n  width: 100%;\n  right: 50%;\n  transform: translateX(50%);\n  font-family: ",";\n  font-size: ",";\n  text-align: center;\n  color: #e00e0e;\n\n  @media screen and (min-width: 768px) {\n    font-size: 17px;\n  }\n"])),o.Z.fonts.manrope,o.Z.fontSizes.s),m=s(3329),c=function(e){var i=e.name;return(0,m.jsx)(a.Bc,{name:i,render:function(e){return(0,m.jsx)(d,{children:e})}})}},1454:function(e,i,s){s.d(i,{Z:function(){return m}});s(2791);var t,a=s(8402),n=s(168),r={LoaderWrap:s(7691).ZP.div(t||(t=(0,n.Z)(["\n  z-index: 1000;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(47, 36, 28, 0.7);\n  overflow-y: hidden;\n"])))},o=s(3329),d=r.LoaderWrap,m=function(e){var i=e.viewportWidth,s=i?Number(i)<=500?"70":Number(i)<=767?"100":Number(i)>=768?"120":void 0:"80";return(0,o.jsx)(d,{children:(0,o.jsx)(a.s5,{strokeColor:"#fc731e",strokeWidth:"3.7",animationDuration:"0.8",visible:!0,width:s,ariaLabel:"Loading"})})}},5225:function(e,i,s){var t=s(1724),a={firstStepRegisterSchema:t.Ry().shape({email:t.Z_().matches(/^\s*\S+\s*$/,"Email must be without spaces").matches(/\S{7,}/,"Email too short (min 7 symbols)").matches(/^(?=.{7,63}$)([^\u0430-\u044f\u0410-\u042f]+@([a-zA-Z]+\.)+[a-zA-z]{2,3})$/g,"Invalid email").matches(/^[^-]+((.*[^-]))*@([a-zA-Z]+\.)+[a-zA-z]{2,3}$/g,"Dashes should only be inside email").required("Require field"),password:t.Z_().min(7,"Password too short (min 7)").max(32,"Password too long (max 32)").matches(/^\s*\S+\s*$/,"Password must be without spaces").required("Require field"),confirmPassword:t.Z_().oneOf([t.iH("password")],"Password must match").required("Require field")}),secondStepRegisterSchema:t.Ry().shape({name:t.Z_().matches(/\S{2,}/,"Name too short (min 2)").matches(/((\s*[a-zA-Z]+\s*){2,}|[a-zA-Z]{2,})/,"Name must includes only Latin alphabet").required("Require field"),location:t.Z_().matches(/^(\s*[a-zA-Z-]{2,}(?!,)\s*|\s*[a-zA-Z-]{2,},\s+([a-zA-Z-]+\s*)+\s*)$/,"Invalid format. valid: city or city, region").required("Require field"),number:t.Z_().matches(/^\+38\(0\d{2}\) \d{3}-\d{2}-\d{2}$/,"Invalid number. valid +38(0xx) xxx-xx-xx").required("Require field")}),LoginSchema:t.Ry().shape({email:t.Z_().matches(/^\s*\S+\s*$/,"Email must be without spaces").matches(/.+@([\w-]+\.)+\w{2,3}/g,"Invalid email").required("Require field"),password:t.Z_().min(7,"Password too short (min 7)").max(32,"Password too long (max 32)").matches(/^\s*\S+\s*$/,"Password must be without spaces").required("Require field")})};i.Z=a},8222:function(e,i){i.Z={position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}}}]);
//# sourceMappingURL=609.8185bb83.chunk.js.map