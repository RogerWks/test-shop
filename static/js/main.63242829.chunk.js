(this["webpackJsonptest-shop"]=this["webpackJsonptest-shop"]||[]).push([[0],{20:function(e,a,t){"use strict";a.a={formatCurrency:function(e){return"$"+Number(e.toFixed(2)).toLocaleString()+" "}}},21:function(e,a,t){"use strict";t.d(a,"a",(function(){return r})),t.d(a,"b",(function(){return c}));var n=t(3),l=t(8),r=function(e,a){return function(t){var r=e.slice(),c=!1;r.forEach((function(e){e.sku===a.sku&&(e.count+=1,c=!0)})),c||r.push(Object(n.a)(Object(n.a)({},a),{},{count:1})),localStorage.setItem("cartItems",JSON.stringify(r)),t({type:l.a,payload:{cartItems:r}})}},c=function(e,a){return function(t){var n=e.slice().filter((function(e){return e.sku!==a.sku}));localStorage.setItem("cartItems",JSON.stringify(n)),t({type:l.e,payload:{cartItems:n}})}}},26:function(e,a,t){"use strict";var n=t(13),l=t(14),r=t(16),c=t(15),o=t(0),i=t.n(o),u=t(17),m=t(20),s=t(21),d=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this,a=this.props.cartItems;return i.a.createElement("div",{className:"alert alert-warning"},0===a.length?"Basket is empty":i.a.createElement("div",null,"\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32\u0e08\u0e33\u0e19\u0e27\u0e19 ",a.length," \u0e0a\u0e34\u0e49\u0e19",i.a.createElement("hr",null)),a.length>0&&i.a.createElement("div",null,i.a.createElement("ul",{style:{marginLeft:-25}},a.map((function(a){return i.a.createElement("li",{key:a.id},i.a.createElement("b",null,a.title),i.a.createElement("button",{style:{float:"right"},className:"btn btn-danger btn-xs",onClick:function(t){return e.props.removeFromCart(e.props.cartItems,a)}},i.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-trash-fill",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{"fill-rule":"evenodd",d:"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"}))),i.a.createElement("br",null),a.count," X ",m.a.formatCurrency(a.price))}))),i.a.createElement("b",null,"\u0e23\u0e32\u0e04\u0e32\u0e23\u0e27\u0e21:"," ",m.a.formatCurrency(a.reduce((function(e,a){return e+a.price*a.count}),0))),i.a.createElement("button",{onClick:function(){return alert("Todo: Implement checkout page.")},className:"btn btn-primary"},"checkout")))}}]),t}(o.Component);a.a=Object(u.b)((function(e){return{cartItems:e.cart.items}}),{addToCart:s.a,removeFromCart:s.b})(d)},29:function(e,a,t){e.exports=t.p+"static/media/logo_2.435de3be.png"},32:function(e,a,t){e.exports=t(44)},37:function(e,a,t){},42:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(18),c=t.n(r),o=(t(37),t(13)),i=t(14),u=t(16),m=t(15),s=t(29),d=t.n(s),b=t(10),E=t(2),p=t(9),v=t(30),h=t(3),f=t(8),g={items:[],filteredItems:[],size:"",sort:""},y=Object(p.c)({products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case f.b:return Object(h.a)(Object(h.a)({},e),{},{items:a.payload,filteredItems:a.payload});case f.c:return Object(h.a)(Object(h.a)({},e),{},{filteredItems:a.payload.items,size:a.payload.size});case f.d:return Object(h.a)(Object(h.a)({},e),{},{filteredItems:a.payload.items,sort:a.payload.sort});default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case f.a:case f.e:return Object(h.a)(Object(h.a)({},e),{},{items:a.payload.cartItems});default:return e}}}),w={cart:{items:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[]}},O=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||p.d,z=Object(p.e)(y,w,O(Object(p.a)(v.a))),N=t(17),k=(t(42),t(26)),j=l.a.lazy((function(){return t.e(3).then(t.bind(null,49))})),I=l.a.lazy((function(){return t.e(15).then(t.bind(null,63))})),C=l.a.lazy((function(){return t.e(5).then(t.bind(null,50))})),_=l.a.lazy((function(){return t.e(4).then(t.bind(null,51))})),S=l.a.lazy((function(){return t.e(17).then(t.bind(null,52))})),X=l.a.lazy((function(){return t.e(16).then(t.bind(null,53))})),T=l.a.lazy((function(){return t.e(6).then(t.bind(null,54))})),M=l.a.lazy((function(){return t.e(7).then(t.bind(null,55))})),x=l.a.lazy((function(){return t.e(8).then(t.bind(null,56))})),R=l.a.lazy((function(){return t.e(9).then(t.bind(null,57))})),B=l.a.lazy((function(){return t.e(10).then(t.bind(null,58))})),D=l.a.lazy((function(){return t.e(11).then(t.bind(null,59))})),H=l.a.lazy((function(){return t.e(12).then(t.bind(null,60))})),V=l.a.lazy((function(){return t.e(13).then(t.bind(null,61))})),A=l.a.lazy((function(){return t.e(14).then(t.bind(null,62))})),L=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(N.a,{store:z},l.a.createElement("div",{className:""},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("br",null),l.a.createElement("img",{src:d.a,className:"rounded mx-auto d-block",alt:"",width:"460",height:"145"})),l.a.createElement("div",{className:"col-sm-6 text-left"},l.a.createElement("div",{className:"container p-3 my-3 rounded border border-info"},l.a.createElement("p",null,"17/4 Village No.5 Bamroongrat Road, Pibulsongkram Sub-district,",l.a.createElement("br",null),"Muang District, Bangkok, 10400",l.a.createElement("br",null),"Telephone number : 087-XXXX-XXX",l.a.createElement("br",null),"Email : petshop.Test@email.com")))),l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},l.a.createElement("a",{className:"navbar-brand",href:"/"},"\u0e2b\u0e19\u0e49\u0e32\u0e2b\u0e25\u0e31\u0e01"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarColor01"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(b.b,{to:"/all",className:"nav-link"},"\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(b.b,{to:"#",className:"nav-link"})))),l.a.createElement("div",{className:"dropdown dropleft"},l.a.createElement("ul",{className:"navbar-nav justify-content-end"},l.a.createElement("li",{class:"nav-item dropdown mydropdowncss"},l.a.createElement(b.b,{to:"#",class:"nav-link dropdown-toggle",id:"navbarDropdownMenuLink",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"\u0e15\u0e30\u0e01\u0e23\u0e49\u0e32\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32 \xa0",l.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-basket",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{"fill-rule":"evenodd",d:"M10.243 1.071a.5.5 0 0 1 .686.172l3 5a.5.5 0 1 1-.858.514l-3-5a.5.5 0 0 1 .172-.686zm-4.486 0a.5.5 0 0 0-.686.172l-3 5a.5.5 0 1 0 .858.514l3-5a.5.5 0 0 0-.172-.686z"}),l.a.createElement("path",{"fill-rule":"evenodd",d:"M1 7v1h14V7H1zM.5 6a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5H.5z"}),l.a.createElement("path",{"fill-rule":"evenodd",d:"M14 9H2v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9zM2 8a1 1 0 0 0-1 1v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9a1 1 0 0 0-1-1H2z"}),l.a.createElement("path",{"fill-rule":"evenodd",d:"M4 10a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 0 1 .5-.5z"}))),l.a.createElement("div",{class:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink"},l.a.createElement("a",{class:"dropdown-item",href:"#"},l.a.createElement(k.a,null)))))))),l.a.createElement(n.Suspense,{fallback:l.a.createElement("div",{className:"container"},l.a.createElement("button",{class:"btn btn-primary"},l.a.createElement("span",{class:"spinner-border spinner-border-sm"}),"Loading.."))},l.a.createElement(E.c,null,l.a.createElement(E.a,{path:"/all"},l.a.createElement(I,null)),l.a.createElement(E.a,{path:"/popular"},l.a.createElement(C,null)),l.a.createElement(E.a,{path:"/new"},l.a.createElement(_,null)),l.a.createElement(E.a,{path:"/100"},l.a.createElement(T,null)),l.a.createElement(E.a,{path:"/101"},l.a.createElement(M,null)),l.a.createElement(E.a,{path:"/102"},l.a.createElement(x,null)),l.a.createElement(E.a,{path:"/103"},l.a.createElement(R,null)),l.a.createElement(E.a,{path:"/104"},l.a.createElement(B,null)),l.a.createElement(E.a,{path:"/105"},l.a.createElement(D,null)),l.a.createElement(E.a,{path:"/106"},l.a.createElement(H,null)),l.a.createElement(E.a,{path:"/107"},l.a.createElement(V,null)),l.a.createElement(E.a,{path:"/108"},l.a.createElement(A,null)),l.a.createElement(E.a,{path:"/dog"},l.a.createElement(S,null)),l.a.createElement(E.a,{path:"/cat"},l.a.createElement(X,null)),l.a.createElement(E.a,{exact:!0,path:"/"},l.a.createElement(j,null)))),l.a.createElement("div",{className:"jumbotron text-center",style:{marginBottom:"0"}},l.a.createElement("p",null,"\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e40\u0e23\u0e32"),l.a.createElement("p",null,"17/4 Village No.5 Bamroongrat Road, Pibulsongkram Sub-district,",l.a.createElement("br",null),"Muang District, Bangkok, 10400",l.a.createElement("br",null),"Telephone number : 087-XXXX-XXX",l.a.createElement("br",null),"Email : petshop.Test@email.com"))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=function(){return l.a.createElement(b.a,null,l.a.createElement(L,null))};c.a.render(l.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,a,t){"use strict";t.d(a,"b",(function(){return n})),t.d(a,"c",(function(){return l})),t.d(a,"d",(function(){return r})),t.d(a,"a",(function(){return c})),t.d(a,"e",(function(){return o}));var n="FETCH_PRODUCTS",l="FILTER_PRODUCTS_BY_SIZE",r="ORDER_PRODUCTS_BY_PRICE",c="ADD_TO_CART",o="REMOVE_FROM_CART"}},[[32,1,2]]]);
//# sourceMappingURL=main.63242829.chunk.js.map