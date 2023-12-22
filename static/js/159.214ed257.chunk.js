"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[159],{4159:function(n,e,t){t.r(e),t.d(e,{default:function(){return T}});var r,a,o,i,s,l,p=t(2791),c=t(2742),d=t(9439),u=t(168),x=t(7691),f=x.ZP.form(r||(r=(0,u.Z)(["\n  margin-bottom: 20px;\n\n  & .form__inputs {\n    display: flex;\n    gap: 15px;\n    align-items: baseline;\n    flex-direction: column;\n\n  }\n  & .form__inputs p {\n    display: inline-block;\n    margin-right: 10px;\n  }\n\n\n  & .form__inputs button {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',\n      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',\n      'Helvetica Neue', sans-serif;\n    font-weight: 500;\n    background-color: rgb(81, 203, 238);\n    color: white;\n    padding: 0px 15px;\n    border: none;\n    border-radius: 4px;\n    font-size: 16px;\n    cursor: pointer;\n    position: relative;\n    overflow: hidden;\n    height: 36px;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n  }\n\n  & .loading-icon {\n    animation: animate 2s infinite;\n  }\n\n  @keyframes animate {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n\n  & .form__inputs button:hover {\n    box-shadow: 0 0 10px rgba(81, 203, 238, 0.8),\n      0 0 20px rgba(81, 203, 238, 0.6), 0 0 30px rgba(81, 203, 238, 0.4);\n  }\n"]))),m=t(6355),g=t(9129),b=t(7231),h=t(9434),v=t(6916),w=function(n){return n.contacts.items},y=function(n){return n.contacts.isLoading},j=function(n){return n.contacts.error},Z=function(n){return n.filter},k=function(n){return n.contacts.isAddContactPending},C=(0,v.P1)([w,Z],(function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))})),_=t(6755),P=t(184),N=function(){var n=(0,p.useState)(""),e=(0,d.Z)(n,2),t=e[0],r=e[1],a=(0,p.useState)(""),o=(0,d.Z)(a,2),i=o[0],s=o[1],l=(0,h.I0)(),c=(0,h.v9)(w),u=(0,h.v9)(k),x=function(n){"name"===n.currentTarget.name?r(n.currentTarget.value):s(n.currentTarget.value)},v=function(n,e){return c.find((function(e){return n.toLowerCase()===e.name.toLowerCase()}))?null:{name:n,number:e}};return(0,P.jsx)(f,{onSubmit:function(n){if(n.preventDefault(),null===v(t,i))return alert("".concat(t," is already in contacts"));l((0,b.uK)(v(t,i))),r(""),s("")},children:(0,P.jsxs)("div",{className:"form__inputs",children:[(0,P.jsx)(_.Xn,{type:"text",name:"name",pattern:"^[A-Za-z\\u0080-\\uFFFF ']+$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:x,value:t,autoComplete:"off",label:"Name",variant:"outlined"}),(0,P.jsx)(_.Xn,{type:"tel",name:"number",pattern:"^(\\+?[0-9.\\(\\)\\-\\s]*)$",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:x,value:i,autoComplete:"off",label:"Phone",variant:"outlined"}),(0,P.jsxs)("button",{type:"submit",disabled:u,children:[u?(0,P.jsx)(g.WUS,{className:"loading-icon"}):(0,P.jsx)(m.wEH,{})," ","Add Contact"]})]})})},S=x.ZP.form(a||(a=(0,u.Z)(["\n  & label {\n    display: flex;\n    gap: 20px;\n    align-items: baseline;\n    font-weight: 500;\n  }\n  & input {\n    max-width: 150px;\n    transition: all 0.3s ease-in-out;\n    outline: none;\n    padding: 9px;\n    border: 1px solid #dddddd;\n    border-radius: 3px;\n    height: 18px;\n  }\n  & input:focus {\n    outline: none;\n    box-shadow: 0 0 5px rgba(81, 203, 238, 1);\n    padding: 9px;\n    border: 1px solid rgba(81, 203, 238, 1);\n  }\n"]))),F=t(1509),I=function(){var n=(0,h.I0)(),e=(0,h.v9)(Z);return(0,P.jsx)(S,{children:(0,P.jsxs)("label",{children:["Filter by name:",(0,P.jsx)("input",{className:"filter-input",type:"text",value:e,onChange:function(e){n((0,F.M)(e.currentTarget.value.trim()))}})]})})},L=x.ZP.ul(o||(o=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  & .contact__data {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n  }\n  & .item {\n    width: 320px;\n    padding: 6px 20px;\n    margin-bottom: 10px;\n    border-radius: 4px;\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 25px;\n    transition: box-shadow 0.25s ease-in-out;\n    background-color: white;\n    & .contact__data {\n      flex-grow: 1;\n      align-items: flex-start;\n    }\n  }\n  & .name {\n    font-weight: 500;\n  }\n  & .phone {\n    font-style: italic;\n  }\n\n  & .item:hover .name {\n    animation: tilt-shaking 0.25s infinite;\n  }\n  & .item:hover {\n    box-shadow: 0 1px 6px rgba(81, 203, 238, 0.6);\n  }\n\n  @keyframes tilt-shaking {\n    0% {\n      transform: rotate(0deg);\n    }\n    25% {\n      transform: rotate(5deg);\n    }\n    50% {\n      transform: rotate(0eg);\n    }\n    75% {\n      transform: rotate(-5deg);\n    }\n    100% {\n      transform: rotate(0deg);\n    }\n  }\n\n  & button {\n    background-color: #ee4b2b;\n    color: white;\n    padding: 0px 15px;\n    border: none;\n    border-radius: 4px;\n    font-size: 16px;\n    cursor: pointer;\n    position: relative;\n    overflow: hidden;\n    height: 24px;\n  }\n"]))),z=(0,x.ZP)(m.AMf)(i||(i=(0,u.Z)(["\n  font-size: 20px;\n  color: #ee4b2b;\n  cursor: pointer;\n"]))),A=(0,x.ZP)(m.fmQ)(s||(s=(0,u.Z)(["\n  font-size: 22px;\n  color: rgb(81, 203, 238);;\n  cursor: pointer;\n"]))),M=function(){var n=(0,h.I0)(),e=(0,h.v9)(y),t=(0,h.v9)(j),r=(0,h.v9)(C);return(0,P.jsxs)("div",{className:"contacts",children:[(0,P.jsx)("h2",{children:"Contacts List:"}),e&&!t&&(0,P.jsx)("b",{children:"Request in progress..."}),(0,P.jsx)(L,{children:r.map((function(e){var t=e.name,r=e.id,a=e.number;return(0,P.jsxs)("li",{className:"item",children:[(0,P.jsxs)("div",{className:"contact__data",children:[(0,P.jsx)("span",{className:"name",children:t.charAt(0).toUpperCase()+t.slice(1)}),(0,P.jsxs)("span",{className:"phone",children:[a," "]})]}),(0,P.jsx)(A,{}),(0,P.jsx)(z,{onClick:function(){n((0,b.GK)(r))}})]},r)}))})]})},U=x.ZP.div(l||(l=(0,u.Z)(["\n    border-radius: 8px;\n    padding: 20px;\n    background-color: white;\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\n    & h1 {\n        margin: 0;\n        margin-bottom: 20px;\n    }\n"])));var B=function(){return(0,P.jsxs)("div",{children:[(0,P.jsxs)(U,{children:[(0,P.jsx)("h1",{children:"PhoneBook"}),(0,P.jsx)(N,{}),(0,P.jsx)(I,{})]}),(0,P.jsx)(M,{})]})};var T=function(){var n=(0,c.I)().isLoggedIn,e=(0,h.I0)();return(0,p.useEffect)((function(){e((0,b.yF)())}),[e]),(0,P.jsx)("div",{children:n&&(0,P.jsx)(B,{})})}},6755:function(n,e,t){t.d(e,{B2:function(){return p},OL:function(){return d},Xn:function(){return c}});var r,a,o,i=t(168),s=t(7691),l=t(4014),p=s.ZP.form(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n"]))),c=(0,s.ZP)(l.Z)(a||(a=(0,i.Z)(["\n  .MuiInputLabel-root:not([data-shrink='true']) {\n    transform: translate(14px, 10px) scale(1);\n    font-size: 14px;\n  }\n  /* & label.Mui-focused { top:0;} */\n  & input {\n    height: 18px;\n    padding-bottom: 10px;\n    padding-top: 10px;\n  }\n"]))),d=s.ZP.button(o||(o=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  cursor: pointer;\n  max-height: 38px;\n  padding: 12px 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: white;\n  font-weight: 500;\n  font-size: 16px;\n  background-color: rgb(81, 203, 238);\n  &:hover {\n    box-shadow: 0 0 10px rgba(81, 203, 238, 0.8),\n      0 0 20px rgba(81, 203, 238, 0.6), 0 0 30px rgba(81, 203, 238, 0.4);\n  }\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n"])))}}]);
//# sourceMappingURL=159.214ed257.chunk.js.map