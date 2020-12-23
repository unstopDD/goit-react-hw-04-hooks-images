(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{10:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem___pY0-",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__1hcWS"}},11:function(e,t,a){e.exports={Overlay:"Modal_Overlay__38zEB",Modal:"Modal_Modal__2hdOL"}},13:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2hbL1"}},14:function(e,t,a){e.exports={Button:"Button_Button__1Co0Z"}},16:function(e,t,a){e.exports={Loader:"Loader_Loader__t6r2Y"}},17:function(e,t,a){e.exports={App:"App_App__2RKXC"}},23:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),c=a.n(r),o=a(4),s=a.n(o),i=(a(23),a(3)),l=a(12),u=a(10),m=a.n(u);var j=function(e){var t=e.smallImg,a=e.openModal;return Object(n.jsx)("li",{className:m.a.ImageGalleryItem,onClick:a,children:Object(n.jsx)("img",{src:t,alt:"",className:m.a.ImageGalleryItemImage})})},b=a(13),h=a.n(b);var d=function(e){var t=e.images,a=e.openModal;return Object(n.jsx)("ul",{className:h.a.ImageGallery,children:t.map((function(e){var t=e.id,r=e.webformatURL,c=e.largeImageURL;return Object(n.jsx)(j,{smallImg:r,openModal:function(){return a(c)}},t)}))})},f=a(14),p=a.n(f);var O=function(e){var t=e.nextImages;return Object(n.jsx)("button",{type:"button",className:p.a.Button,onClick:t,children:"Load More"})},g=a(15),_=a.n(g),v=(a(45),a(16)),x=a.n(v);var S=function(){return Object(n.jsx)("div",{className:x.a.Loader,children:Object(n.jsx)(_.a,{type:"Bars",color:"#00BFFF",height:80,width:80})})},I=a(2),y=a.n(I),F=a(11),w=a.n(F);function B(e){var t=e.imgUrl,a=e.onClose;return Object(r.useEffect)((function(){var e=function(e){"Escape"===e.code&&a()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[a]),Object(n.jsx)("div",{className:w.a.Overlay,onClick:function(e){"DIV"===e.target.nodeName&&a()},children:Object(n.jsx)("div",{className:w.a.Modal,children:Object(n.jsx)("img",{src:t,alt:""})})})}B.propType={onClose:y.a.func.isRequired,imgUrl:y.a.string.isRequired};var L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a="17653140-37eca66381d8ffc40f2e9b8e7";return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat(a,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){return t.ok?t.json():Promise.reject(new Error("No pictures with title".concat(e)))}))};function N(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}var k="idle",E="pending",G="resolved",C="rejected";function M(e){var t=e.searchQuery,a=Object(r.useState)([]),c=Object(i.a)(a,2),o=c[0],s=c[1],u=Object(r.useState)(1),m=Object(i.a)(u,2),j=m[0],b=m[1],h=Object(r.useState)(null),f=Object(i.a)(h,2),p=f[0],g=f[1],_=Object(r.useState)(!1),v=Object(i.a)(_,2),x=v[0],I=v[1],y=Object(r.useState)(null),F=Object(i.a)(y,2),w=F[0],M=F[1],U=Object(r.useState)(!1),A=Object(i.a)(U,2),R=A[0],Q=A[1],q=Object(r.useState)(k),z=Object(i.a)(q,2),T=z[0],D=z[1];Object(r.useEffect)((function(){t&&(s([]),b(1),g(null),H())}),[t]),Object(r.useEffect)((function(){1!==j&&H()}),[j]);var H=function(){D(E),L(t,j).then((function(e){var t=e.hits,a=e.totalHits;s((function(e){return[].concat(Object(l.a)(e),Object(l.a)(t))})),Q(a-12*j<=0),D(G)})).catch((function(e){g(e),D(C)})).finally(N)};return T===k?Object(n.jsx)(n.Fragment,{}):T===C?Object(n.jsx)("h1",{children:p.message}):T===G||T===E?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(d,{images:o,openModal:function(e){M(e),I(!0)}}),T===G&&!R&&Object(n.jsx)(O,{nextImages:function(){b((function(e){return e+1}))}}),T===E&&Object(n.jsx)(S,{}),x&&Object(n.jsx)(B,{onClose:function(){I(!1),M(null)},imgUrl:w})]}):void 0}var U=a(8),A=(a(46),a(5)),R=a.n(A);function Q(e){var t=e.onSubmit,a=Object(r.useState)(""),c=Object(i.a)(a,2),o=c[0],s=c[1];return Object(n.jsx)("header",{className:R.a.Searchbar,children:Object(n.jsxs)("form",{className:R.a.SearchForm,onSubmit:function(e){if(e.preventDefault(),""===o.trim())return U.b.error("Enter the name of the pictures ");t(o),s("")},children:[Object(n.jsx)("button",{type:"submit",className:R.a.SearchFormButton,children:Object(n.jsx)("span",{className:R.a.SearchFormButtonLabel})}),Object(n.jsx)("input",{className:R.a.SearchFormInput,type:"text",value:o,placeholder:"Search images and photos",onChange:function(e){s(e.target.value.toLowerCase())}})]})})}var q=a(17),z=a.n(q);function T(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(n.jsxs)("div",{className:z.a.App,children:[Object(n.jsx)(Q,{onSubmit:c}),";",Object(n.jsx)(M,{searchQuery:a}),Object(n.jsx)(U.a,{position:"top-right",autoClose:3e3})]})}s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(T,{})}),document.getElementById("root"))},5:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1vUQ1",SearchForm:"Searchbar_SearchForm__3Urm9",SearchFormButton:"Searchbar_SearchFormButton__1jiAf",SearchForButton:"Searchbar_SearchForButton__1QvUk",SearchForButtonLabel:"Searchbar_SearchForButtonLabel__3zIBT",SearchFormInput:"Searchbar_SearchFormInput__3E_26"}}},[[47,1,2]]]);
//# sourceMappingURL=main.abfced17.chunk.js.map