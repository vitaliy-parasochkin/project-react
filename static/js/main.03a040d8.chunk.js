(this["webpackJsonpreact-sneakers"]=this["webpackJsonpreact-sneakers"]||[]).push([[0],{19:function(e,t,c){e.exports={overlay:"Card_overlay__33Lda",overlayVisibility:"Card_overlayVisibility__d4lnY",drawer:"Card_drawer__D71g1",items:"Card_items__1-0Rp"}},20:function(e,t,c){e.exports={card:"Card_card__3ct2z",plus:"Card_plus__gl7Zg",favorite:"Card_favorite__2PNLj","card-wrapper":"Card_card-wrapper__oV-B6"}},41:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var r=c(0),a=c.n(r),n=c(34),s=c.n(n),i=(c(41),c(11)),l=c(14),o=c(12),d=c(7),j=c.n(d),u=c(13),b=c(4),m=c(5),x=c.n(m),f=a.a.createContext({}),h=function(){var e=a.a.useContext(f),t=e.cartItems,c=e.setCartItems,r=t.reduce((function(e,t){return+t.price.replace(/\s+/g,"")+e}),0);return{cartItems:t,setCartItems:c,totalPrice:r}},p=c(1),O=function(e){var t=e.image,c=e.title,r=e.description,n=a.a.useContext(f).setCartOpened;return Object(p.jsxs)("div",{className:"cartEmpty d-flex align-center justify-center flex-column flex",children:[Object(p.jsx)("img",{className:"mb-20",width:"120px",height:"120px",src:t,alt:"emptyCart"}),Object(p.jsx)("h2",{children:c}),Object(p.jsx)("p",{className:"opacity-6",children:r}),Object(p.jsx)(i.b,{to:"",children:Object(p.jsxs)("button",{onClick:function(){return n(!1)},className:"greenButton",children:[Object(p.jsx)("img",{src:"img/arrow.svg",alt:"Arrow"}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"]})})]})},v=c(19),g=c.n(v),N=function(e){return new Promise((function(t){return setTimeout(t,e)}))};function k(e){var t=e.onClose,c=e.opened,r=e.onRemove,n=e.items,s=void 0===n?[]:n,i=a.a.useState(!1),l=Object(b.a)(i,2),o=l[0],d=l[1],m=a.a.useState(!1),f=Object(b.a)(m,2),v=f[0],k=f[1],w=a.a.useState(null),C=Object(b.a)(w,2),y=C[0],I=C[1],_=h(),S=_.cartItems,A=_.setCartItems,L=_.totalPrice,P=function(){var e=Object(u.a)(j.a.mark((function e(){var t,c,r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),e.next=3,x.a.post("https://611df8af7d273a0017e2f990.mockapi.io/orders",{items:S});case 3:t=e.sent,c=t.data,I(c.id),d(!0),A([]),e.prev=8,r=0;case 10:if(!(r<S.length)){e.next=19;break}return a=S[r],e.next=14,x.a.delete("https://611df8af7d273a0017e2f990.mockapi.io/cart/"+a.id);case 14:return e.next=16,N(1e3);case 16:r++,e.next=10;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(8),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437");case 24:k(!1);case 25:case"end":return e.stop()}}),e,null,[[8,21]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"".concat(g.a.overlay," ").concat(c?g.a.overlayVisibility:""),children:Object(p.jsxs)("div",{className:"".concat(g.a.drawer),children:[Object(p.jsxs)("h2",{className:"d-flex justify-between mb-30",children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430",Object(p.jsx)("img",{onClick:t,className:"removeBtn cu-p",src:"img/btn-remove.svg",alt:"Remove"})]}),s.length>0?Object(p.jsxs)("div",{className:"d-flex flex-column flex",children:[Object(p.jsx)("div",{className:"items",children:s.map((function(e){var t=e.id,c=e.title,a=e.price,n=e.imageUrl;return Object(p.jsxs)("div",{className:"cartItem d-flex align-center mb-20",children:[Object(p.jsx)("div",{style:{backgroundImage:"url(".concat(n,")")},className:"cartItemImg"}),Object(p.jsxs)("div",{className:"mr-20 flex",children:[Object(p.jsx)("p",{className:"mb-5",children:c}),Object(p.jsxs)("b",{children:[a," \u0440\u0443\u0431."]})]}),Object(p.jsx)("div",{children:Object(p.jsx)("img",{onClick:function(){return r(t)},className:"removeBtn",src:"img/btn-remove.svg",alt:"Remove"})})]},t)}))}),Object(p.jsxs)("div",{className:"cartTotalBlock",children:[Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e:"}),Object(p.jsx)("div",{}),Object(p.jsxs)("b",{children:[L," \u0440\u0443\u0431."]})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:"\u041d\u0430\u043b\u043e\u0433 5%:"}),Object(p.jsx)("div",{}),Object(p.jsxs)("b",{children:[" ",L/100*5," \u0440\u0443\u0431."]})]})]}),Object(p.jsxs)("button",{disabled:v,onClick:P,className:"greenButton",children:["\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"," ",Object(p.jsx)("img",{src:"img/arrow.svg",alt:"arrow"})]})]})]}):Object(p.jsx)(O,{image:o?"img/order-complete.jpg":"img/empty-cart.jpg",title:o?"\u0417\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d!":"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f",description:o?"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 #".concat(y," \u0441\u043a\u043e\u0440\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043a\u0443\u0440\u044c\u0435\u0440\u0441\u043a\u043e\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0435"):"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0443 \u043f\u0430\u0440\u0443 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437."})]})})}function w(e){var t=h().totalPrice;return Object(p.jsxs)("header",{className:"d-flex justify-between align-center p-40",children:[Object(p.jsx)(i.b,{to:"/",children:Object(p.jsxs)("div",{className:"d-flex align-center cu-p",children:[Object(p.jsx)("img",{className:"mr-15",width:40,height:40,src:"img/logo.png",alt:"Logotype"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{className:"text-uppercase",children:"React Sneakers"}),Object(p.jsx)("p",{className:"opacity-5",children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043b\u0443\u0447\u0448\u0438\u0445 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a"})]})]})}),Object(p.jsxs)("ul",{className:"d-flex",children:[Object(p.jsxs)("li",{onClick:e.onClickCart,className:"mr-30 cu-p",children:[Object(p.jsx)("img",{width:18,height:18,src:"img/cart.svg",alt:"logo"})," ",Object(p.jsxs)("span",{children:[t," \u0440\u0443\u0431."]})]}),Object(p.jsxs)("li",{children:[" ",Object(p.jsx)(i.b,{to:"/favorites",children:Object(p.jsx)("img",{className:"mr-20 cu-p",width:18,height:18,src:"img/heart.svg",alt:"heart"})})," "]}),Object(p.jsxs)("li",{children:[" ",Object(p.jsx)(i.b,{to:"/orders",children:Object(p.jsx)("img",{width:18,height:18,src:"img/user.svg",alt:"user"})})," "]}),Object(p.jsx)("li",{children:"  "})]})]})}var C=c(20),y=c.n(C),I=c(36);function _(e){var t=e.isLoading,c=e.title,a=e.price,n=e.imageUrl,s=e.onPlus,i=e.onFavorite,l=e.id,o=e.favorited,d=void 0!==o&&o,j=(e.added,Object(r.useContext)(f).isItemAdded),u=Object(r.useState)(d),m=Object(b.a)(u,2),x=m[0],h=m[1];return Object(p.jsx)("div",{className:y.a.card,children:t?Object(p.jsxs)(I.a,{speed:2,width:210,height:260,viewBox:"0 0 210 260",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(p.jsx)("rect",{x:"0",y:"36",rx:"10",ry:"10",width:"150",height:"91"}),Object(p.jsx)("rect",{x:"0",y:"143",rx:"2",ry:"2",width:"150",height:"15"}),Object(p.jsx)("rect",{x:"0",y:"162",rx:"2",ry:"2",width:"93",height:"15"}),Object(p.jsx)("rect",{x:"0",y:"199",rx:"3",ry:"3",width:"80",height:"24"}),Object(p.jsx)("rect",{x:"115",y:"191",rx:"10",ry:"10",width:"32",height:"32"})]}):Object(p.jsxs)(p.Fragment,{children:[i&&Object(p.jsx)("div",{onClick:function(){i({id:l,title:c,price:a,imageUrl:n}),h(!x)},className:y.a.favorite,children:Object(p.jsx)("img",{src:x?"img/heart-liked.svg":"img/heart-unliked.svg",alt:"unliked"})}),Object(p.jsx)("img",{width:133,height:112,src:n,alt:"Sneakers"}),Object(p.jsx)("h5",{children:c}),Object(p.jsxs)("div",{className:"d-flex justify-between",children:[Object(p.jsxs)("div",{className:"d-flex flex-column",children:[Object(p.jsx)("span",{children:"\u0426\u0435\u043d\u0430:"}),Object(p.jsxs)("b",{children:[a," \u0440\u0443\u0431."]})]}),s&&Object(p.jsx)("div",{className:y.a.plus,onClick:function(){s({id:l,parentId:l,title:c,price:a,imageUrl:n})},children:Object(p.jsx)("img",{src:j(l)?"img/btn-checked.svg":"img/btn-plus.svg",alt:"Plus"})})]})]})})}var S=function(e){var t=e.isLoading,c=e.searchValue,r=e.onChangeSearchInput,a=e.onAddToCard,n=e.setSearchValue,s=e.items,i=e.onAddToFavorite;return Object(p.jsxs)("div",{className:"content p-40",children:[Object(p.jsxs)("div",{className:"d-flex align-center mb-40 justify-between",children:[Object(p.jsx)("h1",{children:c?"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443: '".concat(c,"' "):"\u0412\u0441\u0435 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0438"}),Object(p.jsxs)("div",{className:"search-block",children:[Object(p.jsx)("img",{src:"img/search.svg",alt:"Search"}),c?Object(p.jsx)("img",{onClick:function(){return n("")},className:"clear cu-p",src:"img/btn-remove.svg",alt:"Close"}):null,Object(p.jsx)("input",{onChange:r,value:c,placeholder:"Search"})]})]}),Object(p.jsx)("div",{className:"card-wrapper d-flex flex-wrap",children:function(){var e=s.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())}));return(t?Object(o.a)(Array(12)):e).map((function(e,c){return Object(p.jsx)(_,Object(l.a)({onPlus:function(e){return a(e)},onFavorite:function(e){return i(e)},isLoading:t},e),c)}))}()})]})},A=c(2);var L=function(e){e.items;var t=a.a.useContext(f),c=t.favorites,r=t.onAddToFavorite;return Object(p.jsxs)("div",{className:"content p-40",children:[Object(p.jsx)("div",{className:"d-flex align-center mb-40 justify-between",children:Object(p.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})}),c.length>0?Object(p.jsx)("div",{className:"card-wrapper d-flex flex-wrap",children:c.map((function(e,t){return Object(p.jsx)(_,{favorited:!0,onFavorite:r,imageUrl:e.imageUrl,title:e.title,price:e.price,id:e.id},t)}))}):Object(p.jsx)(O,{image:"img/face-favorites.svg",title:"\u0417\u0430\u043a\u043b\u0430\u0434\u043e\u043a \u043d\u0435\u0442",description:"\u0412\u044b \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u043b\u0438 \u0432 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})]})};var P=function(){var e=a.a.useState([]),t=Object(b.a)(e,2),c=t[0],r=t[1],n=a.a.useState(!0),s=Object(b.a)(n,2),i=s[0],d=s[1];return a.a.useEffect((function(){Object(u.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("https://611df8af7d273a0017e2f990.mockapi.io/orders");case 3:t=e.sent,c=t.data,r(c.reduce((function(e,t){return[].concat(Object(o.a)(e),Object(o.a)(t.items))}),[])),d(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0435 \u0437\u0430\u043a\u0430\u0437\u043e\u0432"),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[]),Object(p.jsxs)("div",{className:"content p-40",children:[Object(p.jsx)("div",{className:"d-flex align-center mb-40 justify-between",children:Object(p.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b"})}),c.length>0?Object(p.jsx)("div",{className:"card-wrapper d-flex flex-wrap",children:(i?Object(o.a)(Array(12)):c).map((function(e,t){return Object(p.jsx)(_,Object(l.a)({isLoading:i},e),t)}))}):Object(p.jsx)(O,{image:"img/face-orders.svg",title:"\u0423 \u0432\u0430\u0441 \u043d\u0435\u0442 \u0437\u0430\u043a\u0430\u0437\u043e\u0432",description:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u0438\u043d \u0437\u0430\u043a\u0430\u0437"})]})};var T=function(){var e=Object(r.useState)(!1),t=Object(b.a)(e,2),c=t[0],a=t[1],n=Object(r.useState)([]),s=Object(b.a)(n,2),i=s[0],d=s[1],m=Object(r.useState)([]),h=Object(b.a)(m,2),O=h[0],v=h[1],g=Object(r.useState)(""),N=Object(b.a)(g,2),C=N[0],y=N[1],I=Object(r.useState)([]),_=Object(b.a)(I,2),T=_[0],B=_[1],F=Object(r.useState)(!0),V=Object(b.a)(F,2),R=V[0],U=V[1];Object(r.useEffect)((function(){function e(){return(e=Object(u.a)(j.a.mark((function e(){var t,c,r,a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([x.a.get("https://611df8af7d273a0017e2f990.mockapi.io/cart"),x.a.get("https://611df8af7d273a0017e2f990.mockapi.io/favorites"),x.a.get("https://611df8af7d273a0017e2f990.mockapi.io/sneakers")]);case 3:t=e.sent,c=Object(b.a)(t,3),r=c[0],a=c[1],n=c[2],U(!1),B(r.data),v(a.data),d(n.data),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 :(");case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var E=function(){var e=Object(u.a)(j.a.mark((function e(t){var c,r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(c=T.find((function(e){return Number(e.parentId)===Number(t.id)})))){e.next=8;break}return B((function(e){return e.filter((function(e){return Number(e.parentId)!==Number(t.id)}))})),e.next=6,x.a.delete("https://611df8af7d273a0017e2f990.mockapi.io/cart/".concat(c.id));case 6:e.next=14;break;case 8:return B((function(e){return[].concat(Object(o.a)(e),[t])})),e.next=11,x.a.post("https://611df8af7d273a0017e2f990.mockapi.io/cart",t);case 11:r=e.sent,a=r.data,B((function(e){return e.map((function(e){return e.parentId===a.parentId?Object(l.a)(Object(l.a)({},e),{},{id:a.id}):e}))}));case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(u.a)(j.a.mark((function e(t){var c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!O.find((function(e){return Number(e.id)===Number(t.id)}))){e.next=5;break}x.a.delete("https://611df8af7d273a0017e2f990.mockapi.io/favorites/".concat(t.id)),v((function(e){return e.filter((function(e){return Number(e.id)!==Number(t.id)}))})),e.next=10;break;case 5:return e.next=7,x.a.post("https://611df8af7d273a0017e2f990.mockapi.io/favorites",t);case 7:c=e.sent,r=c.data,v((function(e){return[].concat(Object(o.a)(e),[r])}));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)(f.Provider,{value:{items:i,onAddToCart:E,cartItems:T,favorites:O,isItemAdded:function(e){return T.some((function(t){return Number(t.parentId)===Number(e)}))},onAddToFavorite:J,setCartOpened:a,setCartItems:B},children:Object(p.jsxs)("div",{className:"wrapper clear",children:[Object(p.jsx)(k,{onRemove:function(e){x.a.delete("https://611df8af7d273a0017e2f990.mockapi.io/cart/".concat(e)),B((function(t){return t.filter((function(t){return t.id!==e}))}))},items:T,onClose:function(){return a(!1)},opened:c}),Object(p.jsx)(w,{onClickCart:function(){return a(!0)}}),Object(p.jsx)(A.a,{path:"",exact:!0,children:Object(p.jsx)(S,{searchValue:C,setSearchValue:y,onChangeSearchInput:function(e){y(e.target.value)},cartItems:T,items:i,onAddToCard:E,onAddToFavorite:J,isLoading:R})}),Object(p.jsx)(A.a,{path:"favorites",exact:!0,children:Object(p.jsx)(L,{})}),Object(p.jsx)(A.a,{path:"orders",exact:!0,children:Object(p.jsx)(P,{})})]})})};c(67);s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(i.a,{children:Object(p.jsx)(T,{})})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.03a040d8.chunk.js.map