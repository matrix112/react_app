(this.webpackJsonpshop2=this.webpackJsonpshop2||[]).push([[0],{103:function(e,t,c){"use strict";c.r(t);var n,i,a=c(11),s=c(0),o=c.n(s),r=c(15),d=c.n(r),l=(c(73),c(17)),j=(c(74),c(111)),b=c(108),h=c(112),u=c(110),O=c(109),p=c(66),x=[{id:0,title:"White and Black",content:"Born in France",price:12e4},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4},{id:2,title:"Grey Yordan",content:"Born in the States",price:13e4}],m=c(45),f=c(7),g=c(46),v=(c(75),c(113)),y=c(34),k=c(2),S=g.a.div(n||(n=Object(m.a)(["\n    padding : 20px;\n"]))),C=g.a.h4(i||(i=Object(m.a)(["\n    font-size : 25px;\n    color : ","\n"])),(function(e){return e.color}));function N(e){return Object(s.useEffect)((function(){e.mySwitchChg(!0)})),0===e.myTab?Object(k.jsx)("div",{children:"000"}):1===e.myTab?Object(k.jsx)("div",{children:"111"}):2===e.myTab?Object(k.jsx)("div",{children:"222"}):void 0}function w(e){return Object(k.jsxs)("p",{children:["stock : ",e.mystock[e.id]]})}var I=Object(y.b)((function(e){return{state:e.reducer,alertState:e.reducerAlertCgh}}))((function(e){var t=Object(s.useState)(!0),c=Object(l.a)(t,2),n=c[0],i=c[1],o=Object(s.useState)(""),r=Object(l.a)(o,2),d=(r[0],r[1],Object(s.useState)(0)),j=Object(l.a)(d,2),b=j[0],u=j[1],O=Object(s.useState)(!1),p=Object(l.a)(O,2),x=p[0],m=p[1],g=(Object(s.useContext)(A),Object(s.useState)("")),y=Object(l.a)(g,2);y[0],y[1],Object(s.useEffect)((function(){var e=setTimeout((function(){i(!1)}),2e3);return function(){clearTimeout(e)}}),[n]);var I=Object(f.g)().id,T=Object(f.f)(),B=e.shoes.find((function(e){return e.id==I}));return Object(s.useEffect)((function(){var e,t=localStorage.getItem("detail_id");(e=null===t?[]:JSON.parse(t)).push(I),e=new Set(e),e=Object(a.a)(e),localStorage.setItem("detail_id",JSON.stringify(e))}),[]),Object(k.jsxs)("div",{className:"container",children:[Object(k.jsxs)(S,{children:[Object(k.jsx)(C,{color:"blue",children:"Detail "}),Object(k.jsx)(C,{color:"grey",children:"Modern style "}),Object(k.jsx)(C,{color:"grey",children:"Product "})]}),!0===n?Object(k.jsx)("div",{className:"my-alert2",children:Object(k.jsx)("p",{children:"Stock is running out.."})}):null,Object(k.jsxs)("div",{className:"row",children:[Object(k.jsx)("div",{className:"col-md-6",children:Object(k.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(e.myid+1)+".jpg",width:"100%"})}),Object(k.jsxs)("div",{className:"col-md-6 mt-4",children:[Object(k.jsx)("h4",{className:"pt-5",children:B.title}),Object(k.jsxs)("p",{children:["content : ",B.content]}),Object(k.jsxs)("p",{children:["price : ",B.price]}),Object(k.jsxs)("p",{children:["Product id : ",B.id]}),console.log("findPrct.id : "+B.id),Object(k.jsx)(w,{mystock:e.mystock,id:I}),Object(k.jsx)("button",{className:"btn btn-danger",onClick:function(){console.log("id : "+I,", findPrct.id : "+B.id);var t=Object(a.a)(e.mystock);console.log("addMystock : "+t[I]),t[I]=t[I]-1,e.stockChg(t),e.dispatch({type:"addCart",payload:{id:B.id,name:B.title,quantity:1}}),T.push("/cart")},children:"Order"}),Object(k.jsx)("p",{}),Object(k.jsx)("p",{children:Object(k.jsx)("button",{className:"btn btn-danger",onClick:function(){T.goBack()},children:"Go Back.."})})]})]}),Object(k.jsxs)(h.a,{className:"mt-5",variant:"tabs",defaultActiveKey:"link-0",children:[Object(k.jsx)(h.a.Item,{children:Object(k.jsx)(h.a.Link,{eventKey:"link-0",onClick:function(){m(!1),u(0),console.log("tab id : "+b)},children:"Active"})}),Object(k.jsx)(h.a.Item,{children:Object(k.jsx)(h.a.Link,{eventKey:"link-1",onClick:function(){m(!1),u(1),console.log("tab id : "+b)},children:" Option 2"})}),Object(k.jsx)(h.a.Item,{children:Object(k.jsx)(h.a.Link,{eventKey:"link-2",onClick:function(){m(!1),u(2),console.log("tab id : "+b)},children:"Option 3"})})]}),Object(k.jsx)(v.a,{in:x,classNames:"wow",timeout:500,children:Object(k.jsx)(N,{myTab:b,mySwitchChg:m})})]})})),T=c(63),B=c.n(T),L=c(25),q=Object(s.lazy)((function(){return c.e(3).then(c.bind(null,115))})),A=o.a.createContext();function P(e){Object(s.useContext)(A);var t="/detail/"+[e.shoes.id];return Object(k.jsxs)("div",{className:"col-md-4",children:[Object(k.jsx)(L.b,{to:t,children:Object(k.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(e.shoes.id+1)+".jpg",width:"100%",onClick:function(){e.myidCgh(e.i)}})}),Object(k.jsx)("h4",{children:e.shoes.title}),Object(k.jsxs)("p",{children:[e.shoes.content," & ",e.shoes.price]}),Object(k.jsx)(F,{i:e.i})]})}function F(e){var t=Object(s.useContext)(A);Object(a.a)(t);return Object(k.jsxs)("p",{children:["stock : ",null===t[e.i]?"0":t[e.i]]})}var D=function(){var e=Object(s.useState)(x),t=Object(l.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)([10,11,12]),o=Object(l.a)(i,2),r=o[0],d=o[1],m=Object(s.useState)(0),g=Object(l.a)(m,2),v=g[0],y=g[1];return Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)(j.a,{bg:"light",expand:"lg",children:Object(k.jsxs)(b.a,{children:[Object(k.jsx)(j.a.Brand,{href:"#home",children:"Shoe Shop"}),Object(k.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(k.jsx)(j.a.Collapse,{id:"basic-navbar-nav",children:Object(k.jsxs)(h.a,{className:"me-auto",children:[Object(k.jsx)(h.a.Link,{as:L.b,to:"/",children:"Home"}),Object(k.jsx)(h.a.Link,{as:L.b,to:"/detail",children:"Detail"}),Object(k.jsxs)(u.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(k.jsx)(u.a.Item,{href:"#action/3.1",children:"Action"}),Object(k.jsx)(u.a.Item,{href:"#action/3.2",children:"Another action"}),Object(k.jsx)(u.a.Item,{href:"#action/3.3",children:"Something"}),Object(k.jsx)(u.a.Divider,{}),Object(k.jsx)(u.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]})}),Object(k.jsxs)(f.c,{children:[Object(k.jsxs)(f.a,{exact:!0,path:"/",children:[Object(k.jsxs)(O.a,{className:"background",children:[Object(k.jsx)("h1",{children:"20% Season Off"}),Object(k.jsx)("p",{children:"This is a simple hero unit. We knitted a unique one-piece upper made from FSC\xae Certified eucalyptus trees for a perfect fit that\u2019s flexible, lightweight, and breathable in every step."}),Object(k.jsx)("p",{children:Object(k.jsx)(p.a,{variant:"primary",children:"Learn more"})})]}),Object(k.jsxs)("div",{className:"container",children:[Object(k.jsx)(A.Provider,{value:r,children:Object(k.jsx)("div",{className:"row",children:c.map((function(e,t){var c=Object(a.a)(r);return console.log("i : "+t+", a.id : "+e.id+", a.title : "+e.title),void 0===c[t]?function(e){r.length;var t=Object(a.a)(r);t[e]=0,d(t)}(t):c[t],Object(k.jsx)(P,{shoes:e,i:t,myid:v,myidCgh:y},t)}))})}),Object(k.jsx)("button",{className:"btn btn-primary",onClick:function(){B.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){console.log(e.data),n([].concat(Object(a.a)(c),Object(a.a)(e.data)))})).catch((function(){console.log("Fail getting data..")}))},children:"More.."})]})]}),Object(k.jsx)(f.a,{path:"/detail/:id",children:Object(k.jsx)(A.Provider,{value:r,children:Object(k.jsx)(I,{shoes:c,mystock:r,stockChg:d,myid:v,myidCgh:y})})}),Object(k.jsx)(f.a,{path:"/cart",children:Object(k.jsx)(s.Suspense,{fallback:Object(k.jsx)("div",{children:"Loading.."}),children:Object(k.jsx)(q,{})})})]})]})},K=function(e){e&&e instanceof Function&&c.e(4).then(c.bind(null,114)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),a(e),s(e)}))},E=c(48),J=[{id:null,name:"",quantity:null}];var M=Object(E.b)(Object(E.a)({reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;if("addCart"===t.type){var c=e.findIndex((function(e){return e.id===t.payload.id}));if(console.log("foundId : ",c),c>=0){var n=Object(a.a)(e);return n[c].quantity++,n}var i=Object(a.a)(e);return i.push(t.payload),i}if("addQuantity"===t.type){var s=Object(a.a)(e);return s.map((function(e,c){console.log("i : ",c,", copyState.map a.id : ",e.id,", action.data : ",t.data),e.id===t.data&&(console.log("copyState.map a.id === action.data"),s[c].quantity++)})),s}if("takeawayQuantity"===t.type){var o=Object(a.a)(e);return o.map((function(e,c){console.log("i : ",c,", copyState.map a.id : ",e.id,", action.data : ",t.data),e.id===t.data&&(console.log("copyState.map a.id === action.data"),0===o[c].quantity?o[c].quantity=0:o[c].quantity--)})),o}return e},reducerAlertCgh:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;return"closeAlert"===t.type?e="false":e}}));d.a.render(Object(k.jsx)(o.a.StrictMode,{children:Object(k.jsxs)(L.a,{children:[" ",Object(k.jsx)(y.a,{store:M,children:Object(k.jsx)(D,{})})]})}),document.getElementById("root")),K()},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){}},[[103,1,2]]]);
//# sourceMappingURL=main.30c83ace.chunk.js.map