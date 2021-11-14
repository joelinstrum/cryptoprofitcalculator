(this["webpackJsonpcrunching-crypto"]=this["webpackJsonpcrunching-crypto"]||[]).push([[0],{43:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var r,a=c(1),n=c.n(a),s=c(10),i=c.n(s),l=c(9),o=c(15),u=c(4),d={updateCardHandler:function(e,t){},deleteCard:function(e){}},j=n.a.createContext(d),b=c(0),p=function(e){var t=e.cardId,c=e.enabled?"card__delete_enabled":"card__delete_disabled",r=n.a.useContext(j).deleteCard;return Object(b.jsx)("div",{className:"card__delete ".concat(c),onClick:function(){return r(t)},children:Object(b.jsx)("span",{className:"card__delete_text",children:"\xd7"})})},h=function(e){var t=e.children,c=e.parent,r=e.className,a=n.a.useMemo((function(){return document.createElement("div")}),[]);return n.a.useEffect((function(){var e=c&&c.appendChild?c:document.body,t=["portal-container"];return r&&r.split(" ").forEach((function(e){return t.push(e)})),t.forEach((function(e){return a.classList.add(e)})),e.appendChild(a),function(){e.removeChild(a)}}),[a,c,r]),i.a.createPortal(t,a)},O=function(e){var t=e.title,c=e.children,r=e.closeOnOutsideClick,n=e.onClose,s=e.className,i=Object(a.useRef)(null),l=Object(a.useState)("modal__popup ".concat(s)),o=Object(u.a)(l,1)[0];return Object(b.jsx)(h,{children:Object(b.jsx)("div",{className:"modal__container",onClick:function(e){var t=e.target;i.current&&!i.current.contains(t)&&r&&n&&n()},children:Object(b.jsxs)("div",{className:o,ref:i,children:[Object(b.jsx)("div",{className:"modal__popup_title_bar",children:Object(b.jsx)("div",{className:"modal__popup_title",children:t})}),c]})})})},m=c(5),f=c.n(m),v=c(7),x=function(){return Object(b.jsxs)("div",{className:"row crypto__list",children:[Object(b.jsx)("div",{className:"crypto__list_header",children:"Name"}),Object(b.jsx)("div",{className:"crypto__list_header",children:"Price"}),Object(b.jsx)("div",{className:"crypto__list_header",children:"Change"}),Object(b.jsx)("div",{className:"crypto__list_header",children:"Market cap"})]})},_={AAVE:{fullName:"Aave",currentPrice:null,ticker:"aave",marketCap:null,change:null},ADA:{fullName:"Cardano",currentPrice:"",ticker:"ada",marketCap:null,change:null},ALGO:{fullName:"Algorand",currentPrice:"",ticker:"algo",marketCap:null,change:null},BTC:{fullName:"Bitcoin",currentPrice:"",ticker:"btc",marketCap:null,change:null},BCH:{fullName:"Bitcoin Cash",currentPrice:null,ticker:"bch",marketCap:null,change:null},DAI:{fullName:"Dai",currentPrice:null,ticker:"dai",marketCap:null,change:null},DOGE:{fullName:"Doge",currentPrice:null,ticker:"doge",marketCap:null,change:null},DOT:{fullName:"Polkadot",currentPrice:null,ticker:"dot",marketCap:null,change:null},ETH:{fullName:"Ethereum",currentPrice:null,ticker:"eth",marketCap:null,change:null},LINK:{fullName:"Chainlink",currentPrice:null,ticker:"link",marketCap:null,change:null},LTC:{fullName:"Litecoin",currentPrice:null,ticker:"ltc",marketCap:null,change:null},MATIC:{fullName:"Polygon",currentPrice:null,ticker:"matic",marketCap:null,change:null},SHIBU:{fullName:"Shibu",currentPrice:null,ticker:"shib",marketCap:null,change:null},SOLANA:{fullName:"Solana",currentPrice:null,ticker:"sol",marketCap:null,change:null},UNI:{fullName:"Uniswap",currentPrice:null,ticker:"uni",marketCap:null,change:null},XLM:{fullName:"Stellar Lumens",currentPrice:null,ticker:"xlm",marketCap:null,change:null},XTZ:{fullName:"Tezos",currentPrice:null,ticker:"xtz",marketCap:null,change:null}},y=function(e){var t=e.fill,c=e.width,r=e.height,a=t||"#ccc",n=c?"".concat(c,"px"):"25px",s=r?"".concat(r,"px"):"25px";return Object(b.jsx)("svg",{version:"1.1",id:"loader-1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:n,height:s,viewBox:"0 0 50 50",enableBackground:"new 0 0 50 50;",children:Object(b.jsx)("path",{fill:a,d:"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z",children:Object(b.jsx)("animateTransform",{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 25 25",to:"360 25 25",dur:"0.6s",repeatCount:"indefinite"})})})},g="https://min-api.cryptocompare.com/data",N={get:function(){var e=Object(v.a)(f.a.mark((function e(t){var c,r,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.join(","),r="".concat(g,"/pricemultifull?fsyms=").concat(c,"&tsyms=USD&extraParams=CryptoCalculator&ts=1605549600"),a={"Content-Type":"application-json"},e.abrupt("return",fetch(r,a).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return{error:e}})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),fetchItem:function(){var e=Object(v.a)(f.a.mark((function e(t,c){var r,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c?"".concat(g,"/pricehistorical?fsym=").concat(t.toUpperCase(),"&tsyms=USD&ts=").concat(c,"&extraParams=CryptoCalculator"):"".concat(g,"/price?fsym=").concat(t.toUpperCase(),"&tsyms=USD&extraParams=CryptoCalculator"),a={"Content-Type":"application-json"},e.abrupt("return",fetch(r,a).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return{error:e}})));case 3:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}()},k=N,C={id:Date.now().toString(),cryptoName:"",cryptoTicker:"",cryptoPrice:"",purchasePrice:null,purchaseDate:null,sellPrice:null,sellDate:null,purchaseSource:"",sellSource:"",investment:null,investmentType:null,coins:null},w=[C],S=function(e){var t,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,r=null===e||void 0===e?void 0:e.toString();if(r){if("."===r)return r;var a="."===r[r.length-1],n=r.split("."),s=n[0].replaceAll(/[^0-9-]/g,""),i=n.length>1?n[1]:"",l=c;i.length>l&&(i=i.substring(0,l)),i&&(i="."+i),a&&(i="."),t=s?(s=parseInt(s,10).toLocaleString("en-US"))+i:i}else t="0";return"NaN"===t?"":t},P=function(e,t){if(e){var c=e.toString().replaceAll(/[^0-9.]/gi,"");return t?parseFloat(c).toFixed(t):parseFloat(c)}return 0},T=function(e){return!!e&&(0!==e&&"0"!==e)},E=function(e){window.localStorage.setItem("cards",JSON.stringify(e))},D=function(){var e=window.localStorage.getItem("cards");if(e)return JSON.parse(e)},H=function(e){var t=e.clickHandler,c=Object(a.useState)(!0),r=Object(u.a)(c,2),s=r[0],i=r[1],o=Object(a.useState)(),d=Object(u.a)(o,2),j=d[0],p=d[1],h=Object(a.useState)(_),O=Object(u.a)(h,1)[0];return Object(a.useEffect)((function(){var e=function(){var e=Object(v.a)(f.a.mark((function e(){var t,c,r,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(l.a)({},O),c=Object.keys(t).map((function(e){return e})),e.next=4,k.get(c);case 4:r=e.sent,(a=null===r||void 0===r?void 0:r.DISPLAY)&&Object.keys(a).forEach((function(e){var c=a[e].USD;t.hasOwnProperty(e)&&(t[e]=Object(l.a)(Object(l.a)({},t[e]),{currentPrice:S(c.PRICE,2),change:c.CHANGE24HOUR,marketCap:c.MKTCAP}))})),p(t),i(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[i,p,O]),Object(b.jsx)(n.a.Fragment,{children:s&&null!==j&&void 0!==typeof j?Object(b.jsxs)("div",{className:"table__loading",children:[Object(b.jsx)("div",{children:"Loading crypto data..."}),Object(b.jsx)("div",{children:Object(b.jsx)(y,{fill:"#0388fc"})})]}):Object(b.jsxs)("div",{children:[Object(b.jsx)(x,{}),Object.keys(j).map((function(e){var c=j[e];return Object(b.jsxs)("div",{className:"row crypto__list",onClick:function(){return t(c.ticker,c.fullName,c.currentPrice)},children:[Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"crypto__list_name_container",children:Object(b.jsx)("img",{src:""+"/images/crypto-icons/".concat(c.ticker,".png"),alt:c.ticker,className:"crypto__list_icon"})}),Object(b.jsxs)("div",{className:"crypto__list_name_container",children:[Object(b.jsx)("div",{children:c.fullName}),Object(b.jsx)("div",{children:c.ticker})]})]}),Object(b.jsx)("div",{children:c.currentPrice}),Object(b.jsx)("div",{children:c.change}),Object(b.jsx)("div",{children:c.marketCap})]},c.ticker)}))]})})},M=function(e){var t=e.text,c=e.animateArrow,r=e.showArrow,a=e.className,n="".concat(a," tooltip"),s=r?"tooltip__arrow_show":"tooltip__arrow_hide";return s+=c?" tooltip__arrow_animate":"",Object(b.jsxs)("div",{className:n,children:[Object(b.jsx)("span",{className:s,children:"\u2190"}),Object(b.jsx)("span",{children:t})]})},A=function(e){var t=e.cardData,c=e.setShowModal,r=e.showTooltip,s=Object(a.useState)(Boolean(t.cryptoTicker)),i=Object(u.a)(s,2),l=i[0],o=i[1],d=Object(a.useState)("".concat(l?"text__header":"text__disabled_header")),j=Object(u.a)(d,2),p=j[0],h=j[1];return Object(a.useEffect)((function(){o(Boolean(t.cryptoTicker))}),[o,h,t.cryptoTicker]),Object(a.useEffect)((function(){h("".concat(l?"text__header":"text__disabled_header"))}),[l,h]),Object(b.jsxs)("div",{className:"select__crypto_container",children:[Object(b.jsx)("div",{className:"row ".concat(p),children:Object(b.jsx)("div",{children:t.cryptoName?Object(b.jsxs)(n.a.Fragment,{children:[Object(b.jsx)("img",{src:"".concat("","/images/crypto-icons/").concat(t.cryptoTicker,".png"),alt:t.cryptoName}),Object(b.jsxs)("span",{children:[t.cryptoName," - ",t.cryptoTicker]})]}):Object(b.jsx)("div",{children:"Crypto"})})}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"link2",onClick:function(){return c(!0)},children:"Select a crypto"}),Object(b.jsx)("div",{style:{paddingTop:"3px"},children:r&&Object(b.jsx)(M,{text:"First, select a crypto",className:"tooltip__container",showArrow:!0,animateArrow:!0})})]})]})},I=function(e){var t=e.cardData,c=e.showTooltip,r=e.setShowModal,s=function(e,t,c){var r=Object(a.useState)(t),s=Object(u.a)(r,2),i=s[0],l=s[1],o=n.a.useRef(null);return Object(a.useEffect)((function(){var t=function(){var r=Object(v.a)(f.a.mark((function r(){var a,n;return f.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,k.fetchItem(e);case 2:a=r.sent,n=a.USD,l(n),o.current=setTimeout((function(){"current"===c&&t()}),1e4);case 6:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return e&&"current"===c?t():window.clearTimeout(o.current),function(){window.clearTimeout(o.current)}}),[e,c,t]),{price:i,setPrice:l}}(t.cryptoTicker,t.cryptoPrice,t.purchaseSource),i=s.price,l=s.setPrice,o=t.purchaseSource||"",d="custom"===t.purchaseSource?t.purchasePrice:"",p=Object(a.useState)(o),h=Object(u.a)(p,2),O=h[0],m=h[1],x=n.a.useContext(j).updateCardHandler,_=Object(a.useState)(d),y=Object(u.a)(_,2),g=y[0],N=y[1],C=Object(a.useState)(Boolean(t.cryptoTicker)),w=Object(u.a)(C,2),T=w[0],E=w[1],D=Object(a.useState)("".concat(T?"":"text__disabled")),H=Object(u.a)(D,2),A=H[0],I=H[1],U=Object(a.useRef)(null);!function(e,t,c,r,s,i){var l=n.a.useContext(j).updateCardHandler;Object(a.useEffect)((function(){switch(e){case"current":l(i,{purchaseSource:"current",purchasePrice:s});break;case"custom":c(S(r)),l(i,{purchaseSource:"custom",purchasePrice:r});break;case"historic":break;default:c(null)}}),[e,t,r,s,i])}(O,i,l,g,t.cryptoPrice,t.id);var z=function(e){m(e.target.value)},B=function(e){U.current=setTimeout((function(){l(P(e)),x(t.id,{purchasePrice:e})}),100)};Object(a.useEffect)((function(){E(Boolean(t.cryptoTicker))}),[E,I,t.cryptoTicker]),Object(a.useEffect)((function(){I("".concat(T?"":"text__disabled"))}),[T,I]);return Object(a.useEffect)((function(){l(t.purchasePrice)}),[t.purchasePrice,l]),Object(b.jsxs)("form",{children:[Object(b.jsxs)("div",{className:"row margin__top_10 ".concat(A),children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"Purchase price"}),i?Object(b.jsxs)(n.a.Fragment,{children:[Object(b.jsxs)("span",{className:"card__purchasePrice",children:["$",S(t.purchasePrice,6)]}),Object(b.jsxs)("span",{className:"text__small",children:["(per coin"," ","historic"===O&&t.purchaseDate?" on ".concat(t.purchaseDate):"",")"]})]}):Object(b.jsx)("span",{className:"card_PurchasePrice"})]}),Object(b.jsx)("div",{children:c&&Object(b.jsx)(M,{text:"Set the sell-price for this cryptocurrency",className:"tooltip__container",showArrow:!0,animateArrow:!0})})]}),Object(b.jsxs)("div",{className:"margin__left_10 ".concat(A),children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:Object(b.jsx)("input",{type:"radio",name:"set-purchase",value:"current",checked:"current"===O,onChange:z,disabled:!T})}),Object(b.jsx)("label",{className:T?"link2":"",onClick:function(){T&&m("current")},children:"Use current price"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:Object(b.jsx)("input",{type:"radio",name:"set-purchase",value:"historic",checked:"historic"===O,onChange:z,onClick:function(){return r(!0)},disabled:!T})}),Object(b.jsx)("label",{className:T?"link2":"",onClick:function(){m("historic"),r(!0)},children:"Use price from date"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:Object(b.jsx)("input",{type:"radio",name:"set-purchase",value:"custom",checked:"custom"===O,onChange:z,disabled:!T})}),Object(b.jsx)("label",{className:T?"link2":"",onClick:function(){T&&m("custom")},children:"Use custom purchase price"}),"custom"===O&&T&&Object(b.jsx)("span",{children:Object(b.jsx)("input",{type:"text",className:"input__text_tiny_wider",onChange:function(e){if("$"!==e.target.value){var t=S(e.target.value,6);N(t&&"0"!==t?"$"+t:"")}else N("");clearTimeout(U.current),B(e.target.value)},value:g})})]})]})]})},U=function(e){var t=e.cardData,c=e.showTooltip,r=e.setShowModal,s=Object(a.useState)(t.sellPrice),i=Object(u.a)(s,2),l=i[0],o=i[1],d=t.sellSource||"",p="custom"===t.sellSource?t.sellPrice:"",h=Object(a.useState)(d),O=Object(u.a)(h,2),m=O[0],f=O[1],v=n.a.useContext(j).updateCardHandler,x=Object(a.useState)(p),_=Object(u.a)(x,2),y=_[0],g=_[1],N=Object(a.useState)(T(t.purchasePrice)),k=Object(u.a)(N,2),C=k[0],w=k[1],E=Object(a.useState)("".concat(C?"":"text__disabled")),D=Object(u.a)(E,2),H=D[0],A=D[1],I=Object(a.useRef)(null);!function(e,t,c,r,s,i){var l=n.a.useContext(j).updateCardHandler;Object(a.useEffect)((function(){switch(e){case"current":l(i,{purchaseSource:"current",sellPrice:s});break;case"custom":c(S(r)),l(i,{purchaseSource:"custom",sellPrice:r});break;case"historic":break;default:c(null)}}),[e,t,r,s,i])}(m,l,o,y,t.cryptoPrice,t.id);var U=function(e){f(e.target.value)},z=function(e){I.current=setTimeout((function(){o(P(e)),v(t.id,{sellPrice:e})}),100)};Object(a.useEffect)((function(){w(T(t.purchasePrice))}),[w,A,t.purchasePrice]),Object(a.useEffect)((function(){A("".concat(C?"":"text__disabled"))}),[C,A]);return Object(a.useEffect)((function(){o(t.sellPrice)}),[t.sellPrice,o]),Object(b.jsxs)("form",{children:[Object(b.jsxs)("div",{className:"row margin__top_10 ".concat(H),children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"Sell price"}),l?Object(b.jsxs)(n.a.Fragment,{children:[Object(b.jsxs)("span",{className:"card__sellPrice",children:["$",S(t.sellPrice,6)]}),Object(b.jsxs)("span",{className:"text__small",children:["(per coin"," ","historic"===m&&t.sellDate?" on ".concat(t.sellDate):"",")"]})]}):Object(b.jsx)("span",{className:"card_SellPrice"})]}),Object(b.jsx)("div",{children:c&&Object(b.jsx)(M,{text:"Set the sell-price for this cryptocurrency",className:"tooltip__container",showArrow:!0,animateArrow:!0})})]}),Object(b.jsxs)("div",{className:"margin__left_10 ".concat(H),children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:Object(b.jsx)("input",{type:"radio",name:"set-sell",value:"current",checked:"current"===m,onChange:U,disabled:!C})}),Object(b.jsx)("label",{className:C?"link2":"",onClick:function(){return f("current")},children:"Use current price point for selling"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:Object(b.jsx)("input",{type:"radio",name:"set-sell",value:"historic",checked:"historic"===m,onChange:U,onClick:function(){return r(!0)},disabled:!C})}),Object(b.jsx)("label",{className:C?"link2":"",onClick:function(){f("historic"),r(!0)},children:"Use price point to sell from date"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:Object(b.jsx)("input",{type:"radio",name:"set-sell",value:"custom",checked:"custom"===m,onChange:U,disabled:!C})}),Object(b.jsx)("label",{className:C?"link2":"",onClick:function(){return f("custom")},children:"Use custom sell price"}),"custom"===m&&C&&Object(b.jsx)("span",{children:Object(b.jsx)("input",{type:"text",className:"input__text_tiny_wider",onChange:function(e){if("$"!==e.target.value){var t=S(e.target.value,6);g(t&&"0"!==t?"$"+t:"")}else g("");clearTimeout(I.current),z(e.target.value)},value:y,disabled:!C})})]})]})]})},z=function(e){var t=e.cardData,c=e.showTooltip,r=Object(a.useState)(t.investment),s=Object(u.a)(r,2),i=s[0],l=s[1],o=Object(a.useState)(t.investmentType),d=Object(u.a)(o,2),p=d[0],h=d[1],O=Object(a.useState)(t.investment),m=Object(u.a)(O,2),f=m[0],v=m[1],x=Object(a.useState)(t.coins),_=Object(u.a)(x,2),y=_[0],g=_[1],N=n.a.useContext(j).updateCardHandler,k=Object(a.useRef)(null),C=Object(a.useState)(Boolean(t.cryptoTicker)&&T(t.purchasePrice&&T(t.sellPrice))),w=Object(u.a)(C,2),E=w[0],D=w[1],H=Object(a.useState)("".concat(E?"":"text__disabled")),A=Object(u.a)(H,2),I=A[0],U=A[1],z=function(e){h(e.target.value)},B=function(e){h(e)},V=function(e){k.current=setTimeout((function(){v(e)}),1e3)},L=function(){f!==i&&v(i)};return Object(a.useEffect)((function(){var e;e=P(t.purchasePrice)*P(y,6),N(t.id,{investment:e,investmentType:p,coins:y})}),[t.id,t.purchasePrice,i,p,f,y]),Object(a.useEffect)((function(){D(Boolean(t.cryptoTicker)&&T(t.purchasePrice)&&T(t.sellPrice))}),[D,t.cryptoTicker,t.purchasePrice,t.sellPrice]),Object(a.useEffect)((function(){U("".concat(E?"":"text__disabled"))}),[E,U]),Object(b.jsxs)(n.a.Fragment,{children:[Object(b.jsxs)("div",{className:"row margin__top_10 ".concat(I),children:[Object(b.jsx)("div",{children:Object(b.jsx)("label",{children:"Investment"})}),Object(b.jsx)("div",{children:c&&!T(i)&&Object(b.jsx)(M,{text:"Set the $ invested or number of coins purchased",className:"tooltip__container",showArrow:!0,animateArrow:!0})})]}),Object(b.jsxs)("div",{className:"margin__left_10 ".concat(I),children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"radio",name:"investment-type",value:"coins",checked:"coins"===p,disabled:!E,onChange:z}),E?Object(b.jsx)("label",{onClick:function(){return B("coins")},className:"link2",children:"Number of coins purchased"}):Object(b.jsx)("label",{className:"text__disabled",children:"Number of coins purchased"}),"coins"===p&&Object(b.jsx)("input",{type:"text",className:"input__text_tiny",onChange:function(e){var c=S(e.target.value),r=parseFloat(e.target.value)*P(t.purchasePrice);"0"!==c?(g(c.toString()),l(r)):g(""),clearTimeout(k.current),V(c)},value:y||"",onBlur:L})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"radio",name:"investment-type",value:"dollars",checked:"dollars"===p,disabled:!E,onChange:z}),E?Object(b.jsx)("label",{onClick:function(){return B("dollars")},className:"link2",children:"Total $ amount invested"}):Object(b.jsx)("label",{className:"text__disabled",children:"Total $ amount invested"}),"dollars"===p&&Object(b.jsx)("input",{type:"text",className:"input__text_tiny",onChange:function(e){var c=P(P(e.target.value)/P(t.purchasePrice),4);g(c);var r=S(e.target.value);l("0"===r?"":r)},value:i||"",onBlur:L,disabled:!E})]})]})]})},B=function(e){var t=e.cardData,c=Object(a.useState)(null),r=Object(u.a)(c,2),n=r[0],s=r[1],i=Object(a.useState)(null),l=Object(u.a)(i,2),o=l[0],d=l[1],j=Object(a.useState)(!1),p=Object(u.a)(j,2),h=p[0],O=p[1],m=Object(a.useState)(S(t.coins)),f=Object(u.a)(m,2),v=f[0],x=f[1],_=Object(a.useState)(!1),y=Object(u.a)(_,2),g=y[0],N=y[1];return Object(a.useEffect)((function(){var e=function(e,t){if(e&&t){var c=P(e,4),r=P(t,4);return S(c*r)}return null}(t.coins,t.sellPrice);if(x(S(t.coins)),t.coins&&t.investment){var c=function(e,t){if(e&&t){var c=parseFloat(e.toString().replaceAll(/[^0-9.]/g,""));return parseFloat(t.toString().replaceAll(/[^0-9.]/g,""))-c}return null}(t.investment,e);(c||0===c)&&(O(c>=0),d(S(c))),s(e),N(!0)}else N(!1)}),[t.coins,t.investment,t.sellPrice,t.purchasePrice,s]),Object(b.jsx)("div",{className:"results__container",children:g&&Object(b.jsxs)("div",{className:"table",children:[Object(b.jsxs)("div",{className:"table__row",children:[Object(b.jsx)("div",{}),Object(b.jsx)("div",{className:"table__row_result results__header",id:"results__header",children:"Results"})]}),Object(b.jsxs)("div",{className:"table__row",children:[Object(b.jsx)("div",{children:"Crypto: "}),Object(b.jsx)("div",{className:"table__row_right",children:t.cryptoName})]}),Object(b.jsxs)("div",{className:"table__row",children:[Object(b.jsx)("div",{children:"Coins owned: "}),v&&"0"!==v&&Object(b.jsx)("div",{className:"table__row_right",children:Object(b.jsxs)("span",{className:"fadeIn",children:[v,Object(b.jsx)("br",{}),"@",t.purchasePrice," per coin"]})})]}),Object(b.jsxs)("div",{className:"table__row",children:[Object(b.jsx)("div",{children:"\xa0"}),Object(b.jsx)("div",{})]}),Object(b.jsxs)("div",{className:"table__row",children:[Object(b.jsx)("div",{children:"Total return: "}),Object(b.jsx)("div",{className:"table__row_right",children:n&&Object(b.jsxs)("span",{className:"fadeIn",children:["$",S(n)]})})]}),Object(b.jsxs)("div",{className:"table__row  table__row_last",children:[Object(b.jsx)("div",{children:"- Amount Invested: "}),Object(b.jsx)("div",{className:"table__row_right",children:t.investment&&Object(b.jsxs)("span",{className:"fadeIn",children:["$",S(t.investment)]})})]}),Object(b.jsxs)("div",{className:"table__row",children:[Object(b.jsx)("div",{children:"= Net return: "}),Object(b.jsx)("div",{className:"table__row_right",children:o&&Object(b.jsxs)("span",{className:h?"net__profit":"net__loss  ",children:["$",o]})})]})]})})},V=c(20),L=c.n(V),F=function(e){var t=e.cryptoTicker,c=e.cryptoName,r=e.cryptoPrice,s=e.clickHandler,i=Object(a.useState)(new Date),l=Object(u.a)(i,2),o=l[0],d=l[1],j=Object(a.useState)(S(r,4)),p=Object(u.a)(j,2),h=p[0],O=p[1],m=Object(a.useState)("fadeIn"),x=Object(u.a)(m,2),_=x[0],y=x[1],g=Object(a.useState)(!1),N=Object(u.a)(g,2),C=N[0],w=N[1],P=Object(a.useState)(""),T=Object(u.a)(P,2),E=T[0],D=T[1],H=function(){var e=h?h.toString():"";s(e,E)};return Object(a.useEffect)((function(){var e=function(){var e=Object(v.a)(f.a.mark((function e(){var c,r,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=(o.getTime()/1e3).toString(),e.next=3,k.fetchItem(t,c);case 3:r=e.sent,a=r[t.toUpperCase()].USD,O(S(a,4)),w(!1),y("fadeIn"),D(o.toLocaleDateString("en-US"));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();C&&e()}),[C,t,o,w,y]),Object(b.jsxs)("div",{className:"historic__modal",children:[Object(b.jsxs)("div",{className:"padding__top_5 padding__left_5",style:{float:"right"},children:[Object(b.jsx)("img",{src:"".concat("","/images/crypto-icons/").concat(t,".png"),alt:c,className:"crypto__image"}),Object(b.jsxs)("span",{children:[c," - ",t]}),h&&Object(b.jsxs)("span",{className:"historic__modal_displayDate ".concat(_," link3"),onClick:H,children:["$",h]})]}),Object(b.jsx)("div",{children:Object(b.jsxs)("div",{children:[Object(b.jsx)(L.a,{onChange:function(e){r&&(y("fadeOut"),d(e),w(!0))},value:o,autoFocus:!0,isOpen:!0,maxDate:new Date,closeCalendar:!1}),Object(b.jsx)("div",{className:"historic__display_price",children:C?Object(b.jsx)("div",{children:"Loading"}):Object(b.jsx)(n.a.Fragment,{children:h&&Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{children:["Price of $",c," on ",E,": ",h]}),Object(b.jsx)("div",{className:"historic__displayPrice ".concat(_," link3"),onClick:H,style:{fontWeight:"bold"},children:"Click to use this price point"})]})})})]})})]})},$=function(e){var t=e.cardData,c=e.num,r=Object(a.useState)(!1),s=Object(u.a)(r,2),i=s[0],l=s[1],o=Object(a.useState)(!1),d=Object(u.a)(o,2),h=d[0],m=d[1],f=Object(a.useState)(!1),v=Object(u.a)(f,2),x=v[0],_=v[1],y=n.a.useContext(j).updateCardHandler,g=Object(a.useState)(""),N=Object(u.a)(g,2),k=N[0],C=N[1],w=function(){l(!1),m(!1),_(!1)};return Object(a.useEffect)((function(){var e="set-crypto";t.cryptoTicker&&(e="set-purchase-price"),T(t.purchasePrice)&&(e="set-sell-price"),T(t.sellPrice)&&(e="set-investment"),C(e)}),[t.cryptoTicker,t.purchasePrice,t.sellPrice]),Object(b.jsxs)("div",{className:"card__row",children:[i&&Object(b.jsx)(O,{title:"Set crytpo",className:"crypto__list_modal",closeOnOutsideClick:!0,onClose:w,children:Object(b.jsx)(H,{clickHandler:function(e,c,r){y(t.id,{cryptoName:c,cryptoTicker:e,cryptoPrice:r}),l(!1)}})}),h&&Object(b.jsx)(O,{title:"Base price of ".concat(t.cryptoName," from a specific date"),className:"historic__modal_popup",closeOnOutsideClick:!0,onClose:w,children:Object(b.jsx)(F,{cryptoTicker:t.cryptoTicker,cryptoName:t.cryptoName,cryptoPrice:t.cryptoPrice,clickHandler:function(e,c){m(!1),y(t.id,{purchasePrice:e,purchaseSource:"historic",purchaseDate:c})}})}),x&&Object(b.jsx)(O,{title:"Base sell price of ".concat(t.cryptoName," from a specific date"),className:"historic__modal_popup",closeOnOutsideClick:!0,onClose:w,children:Object(b.jsx)(F,{cryptoTicker:t.cryptoTicker,cryptoName:t.cryptoName,cryptoPrice:t.cryptoPrice,clickHandler:function(e,c){_(!1),y(t.id,{sellPrice:e,sellSource:"historic",sellDate:c})}})}),Object(b.jsxs)("div",{className:"card__container",children:[Object(b.jsx)(p,{cardId:t.id,enabled:c>0}),Object(b.jsx)(A,{cardData:t,setShowModal:l,showTooltip:"set-crypto"===k}),Object(b.jsx)(I,{cardData:t,showTooltip:"set-purchase-price"===k,setShowModal:m}),Object(b.jsx)(U,{cardData:t,showTooltip:"set-sell-price"===k,setShowModal:_}),Object(b.jsx)(z,{cardData:t,showTooltip:"set-investment"===k})]}),Object(b.jsx)("div",{className:"card__results",children:Object(b.jsx)(B,{cardData:t})})]})},R=function(e){var t=e.saveCardsHandler,c=e.active,r=e.resetShouldUpdate,n=Object(a.useState)(!1),s=Object(u.a)(n,2),i=s[0],l=s[1],o=Object(a.useState)("saveCards saveCards__inactive"),d=Object(u.a)(o,2),j=d[0],p=d[1],h=Object(a.useState)("Save Cards"),O=Object(u.a)(h,2),m=O[0],f=O[1];return Object(a.useEffect)((function(){i?(f("Saving cards..."),p("saveCards saveCards__saving")):(f("Save Cards"),p("saveCards saveCards__inactive"))}),[i]),Object(a.useEffect)((function(){c&&p("saveCards saveCards__active fuckkkk")}),[c]),Object(b.jsx)("div",{children:Object(b.jsx)("div",{className:j,onClick:function(){t(),l(!0),setTimeout((function(){l(!1),r()}),1e3)},children:Object(b.jsx)("span",{children:m})})})},J=Date.now()/1e3,G=function(){var e=Object(a.useState)(D()||w),t=Object(u.a)(e,2),c=t[0],r=t[1],n=Object(a.useState)(),s=Object(u.a)(n,2),i=s[0],d=s[1],p=Object(a.useState)(""),h=Object(u.a)(p,2),O=h[0],m=h[1],f=Object(a.useState)(),v=Object(u.a)(f,2),x=v[0],_=v[1],y=Object(a.useState)(!1),g=Object(u.a)(y,2),N=g[0],k=g[1],S=Object(a.useRef)(null);Object(a.useMemo)((function(){var e=c.findIndex((function(e){return e.id===O})),t=Object(o.a)(c);t[e]=Object(l.a)(Object(l.a)({},t[e]),x),r(t)}),[O,x]);var P={updateCardHandler:function(e,t){JSON.stringify(t)!==i&&(d(JSON.stringify(t)),_(t),m(e),Date.now()/1e3-J>4&&k(!0))},deleteCard:function(e){var t=c.findIndex((function(t){return t.id===e}));if(t>-1){var a=Object(o.a)(c);a.splice(t,1),r(a)}}};return Object(b.jsx)(j.Provider,{value:P,children:Object(b.jsxs)("div",{ref:S,children:[c.map((function(e,t){return Object(b.jsx)($,{cardData:e,num:t},e.id)})),Object(b.jsxs)("div",{className:"row margin__bottom_20",children:[Object(b.jsx)("div",{className:"link2",onClick:function(){var e=Object(l.a)({},C);e.id=Date.now().toString();var t=Object(o.a)(c);t[t.length]=e,r(t)},children:"+ Add a calculator card"}),Object(b.jsx)(R,{saveCardsHandler:function(){E(c)},active:N,resetShouldUpdate:function(){k(!1)}})]})]})})},X=["title","titleId"];function K(){return K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r])}return e},K.apply(this,arguments)}function W(e,t){if(null==e)return{};var c,r,a=function(e,t){if(null==e)return{};var c,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)c=n[r],t.indexOf(c)>=0||(a[c]=e[c]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)c=n[r],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(a[c]=e[c])}return a}function Y(e,t){var c=e.title,n=e.titleId,s=W(e,X);return a.createElement("svg",K({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 470 470",style:{enableBackground:"new 0 0 470 470"},xmlSpace:"preserve",ref:t,"aria-labelledby":n},s),c?a.createElement("title",{id:n},c):null,r||(r=a.createElement("g",null,a.createElement("path",{d:"M357.25,210h-62c-4.143,0-7.5,3.357-7.5,7.5v30c0,4.143,3.357,7.5,7.5,7.5h62c4.143,0,7.5-3.357,7.5-7.5v-30 C364.75,213.357,361.393,210,357.25,210z M349.75,240h-47v-15h47V240z"}),a.createElement("path",{d:"M174,357.5h-61.25c-4.142,0-7.5,3.357-7.5,7.5v57.5c0,4.143,3.358,7.5,7.5,7.5H174c4.142,0,7.5-3.357,7.5-7.5V365 C181.5,360.857,178.142,357.5,174,357.5z M166.5,415h-46.25v-42.5h46.25V415z"}),a.createElement("path",{d:"M265.25,357.5H204c-4.142,0-7.5,3.357-7.5,7.5v57.5c0,4.143,3.358,7.5,7.5,7.5h61.25c4.143,0,7.5-3.357,7.5-7.5V365 C272.75,360.857,269.393,357.5,265.25,357.5z M257.75,415H211.5v-42.5h46.25V415z"}),a.createElement("path",{d:"M174,270h-61.25c-4.142,0-7.5,3.357-7.5,7.5V335c0,4.143,3.358,7.5,7.5,7.5H174c4.142,0,7.5-3.357,7.5-7.5v-57.5 C181.5,273.357,178.142,270,174,270z M166.5,327.5h-46.25V285h46.25V327.5z"}),a.createElement("path",{d:"M265.25,270H204c-4.142,0-7.5,3.357-7.5,7.5V335c0,4.143,3.358,7.5,7.5,7.5h61.25c4.143,0,7.5-3.357,7.5-7.5v-57.5 C272.75,273.357,269.393,270,265.25,270z M257.75,327.5H211.5V285h46.25V327.5z"}),a.createElement("path",{d:"M357.25,270h-62c-4.143,0-7.5,3.357-7.5,7.5v145c0,4.143,3.357,7.5,7.5,7.5h62c4.143,0,7.5-3.357,7.5-7.5v-50 c0-4.143-3.357-7.5-7.5-7.5s-7.5,3.357-7.5,7.5V415h-47V285h47v57.5c0,4.143,3.357,7.5,7.5,7.5s7.5-3.357,7.5-7.5v-65 C364.75,273.357,361.393,270,357.25,270z"}),a.createElement("path",{d:"M367.25,0h-264.5c-20.678,0-37.5,16.822-37.5,37.5v395c0,20.678,16.822,37.5,37.5,37.5h264.5 c20.678,0,37.5-16.822,37.5-37.5v-395C404.75,16.822,387.928,0,367.25,0z M389.75,432.5c0,12.406-10.094,22.5-22.5,22.5h-264.5 c-12.407,0-22.5-10.094-22.5-22.5v-395c0-12.406,10.093-22.5,22.5-22.5h264.5c12.406,0,22.5,10.094,22.5,22.5V432.5z"}),a.createElement("path",{d:"M357.25,40H113.5c-4.142,0-7.5,3.357-7.5,7.5v90c0,4.143,3.358,7.5,7.5,7.5h243.75c4.143,0,7.5-3.357,7.5-7.5v-90 C364.75,43.357,361.393,40,357.25,40z M121,55h94.393l-75,75H121V55z M349.75,130H221.607l21.59-21.59 c2.929-2.93,2.929-7.678,0-10.607c-2.93-2.928-7.679-2.927-10.607,0L200.393,130h-38.786l75-75h38.785l-21.59,21.59 c-2.929,2.93-2.929,7.678,0,10.607c1.465,1.464,3.385,2.196,5.304,2.196s3.839-0.732,5.304-2.196L296.607,55h53.143V130z"}),a.createElement("path",{d:"M357.25,170H204c-4.142,0-7.5,3.357-7.5,7.5s3.358,7.5,7.5,7.5h153.25c4.143,0,7.5-3.357,7.5-7.5S361.393,170,357.25,170z"}),a.createElement("path",{d:"M174,170h-60.5c-4.142,0-7.5,3.357-7.5,7.5s3.358,7.5,7.5,7.5H174c4.142,0,7.5-3.357,7.5-7.5S178.142,170,174,170z"}))))}var Z=a.forwardRef(Y),q=(c.p,function(){return Object(b.jsx)("div",{children:Object(b.jsx)(Z,{className:"logo"})})}),Q=function(){return Object(b.jsxs)("div",{className:"app__header_container",children:[Object(b.jsx)(q,{}),Object(b.jsxs)("div",{className:"app__header_text",children:[Object(b.jsx)("div",{children:"Crypto Profit Calculator"}),Object(b.jsx)("div",{children:"Calculate ROI on most major crypto currencies"})]})]})},ee=function(){return Object(b.jsxs)("div",{className:"app__container",children:[Object(b.jsx)(Q,{}),Object(b.jsx)(G,{})]})};c(43);i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(ee,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.8218be98.chunk.js.map