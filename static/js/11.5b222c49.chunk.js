(this["webpackJsonptest-shop"]=this["webpackJsonptest-shop"]||[]).push([[11],{45:function(e,t,a){"use strict";var r=a(13),n=a(14),c=a(16),l=a(15),s=a(0),o=a.n(s),i=a(20),d=a(21),m=a(17),u=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){var e=this,t=this.props.products.map((function(t){return o.a.createElement("div",{className:"container",key:t.id},o.a.createElement("br",null),o.a.createElement("div",{className:"thumbnail text-center"},o.a.createElement("div",{className:"card mb-8"},o.a.createElement("div",{className:"row no-gutters"},o.a.createElement("div",{className:"col-md-4"},o.a.createElement("br",null),o.a.createElement("img",{src:"products/".concat(t.animal,".jpg"),className:"card-img",width:"350",height:"270",alt:t.title})),o.a.createElement("div",{className:"col-md-8"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h5",{className:"card-title font-weight-bold"},t.title),o.a.createElement("p",{className:"card-text"},t.description),o.a.createElement("div",{className:"card-footer bg-white borde rounded"},o.a.createElement("b",null,i.a.formatCurrency(t.price)),o.a.createElement("button",{className:"btn btn-secondary",onClick:function(){return e.props.addToCart(e.props.cartItems,t)}},o.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-basket",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{"fill-rule":"evenodd",d:"M10.243 1.071a.5.5 0 0 1 .686.172l3 5a.5.5 0 1 1-.858.514l-3-5a.5.5 0 0 1 .172-.686zm-4.486 0a.5.5 0 0 0-.686.172l-3 5a.5.5 0 1 0 .858.514l3-5a.5.5 0 0 0-.172-.686z"}),o.a.createElement("path",{"fill-rule":"evenodd",d:"M1 7v1h14V7H1zM.5 6a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5H.5z"}),o.a.createElement("path",{"fill-rule":"evenodd",d:"M14 9H2v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9zM2 8a1 1 0 0 0-1 1v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9a1 1 0 0 0-1-1H2z"}),o.a.createElement("path",{"fill-rule":"evenodd",d:"M4 10a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 0 1 .5-.5z"})),"\xa0 \u0e2b\u0e22\u0e34\u0e1a\u0e43\u0e2a\u0e48\u0e15\u0e30\u0e01\u0e23\u0e49\u0e32"))))))))}));return o.a.createElement("div",{className:"row"},t)}}]),a}(s.Component);t.a=Object(m.b)((function(e){return{cartItems:e.cart.items}}),{addToCart:d.a})(u)},59:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var r=a(13),n=a(14),c=a(16),l=a(15),s=a(0),o=a.n(s),i=a(45),d=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={products:[],filteredproductsData:[]},n}return Object(n.a)(a,[{key:"componentWillMount",value:function(){var e=this;fetch("http://localhost:5000/products?sku=105").then((function(e){return e.json()})).then((function(t){return e.setState({products:t,filteredproductsData:t})}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(i.a,{products:this.state.filteredproductsData,handleAddToCart:this.handleAddToCart}))}}]),a}(s.Component)}}]);
//# sourceMappingURL=11.5b222c49.chunk.js.map