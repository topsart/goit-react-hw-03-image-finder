(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1hPon",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__3_6SD"}},13:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3mdzV",Modal:"Modal_Modal__2BkLk"}},23:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3P-ha"}},24:function(e,t,a){e.exports={Button:"Button_Button__3y7Pn"}},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(9),c=a.n(o),l=a(14),s=a(4),i=a(5),u=a(7),h=a(6),m=a(8),d=a.n(m),g=a(1),b=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(g.jsx)("header",{className:d.a.Searchbar,children:Object(g.jsxs)("form",{className:d.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(g.jsx)("button",{type:"submit",className:d.a.SearchFormButton,children:Object(g.jsx)("span",{className:d.a.SearchFormButtonLabel,children:"Search"})}),Object(g.jsx)("input",{value:this.state.query,onChange:this.handleChange,className:d.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(r.Component),p=a(11),j=a.n(p),f=function(e){var t=e.id,a=e.src,r=e.alt,n=e.largeImageURL,o=e.onModal;return Object(g.jsx)("li",{onClick:function(){return o(n)},className:j.a.ImageGalleryItem,children:Object(g.jsx)("img",{src:a,alt:r,className:j.a.ImageGalleryItemImage})},t)};f.defaultProps={alt:"photo"};var y=f,S=a(23),v=a.n(S),I=function(e){var t=e.images,a=e.onModal;return Object(g.jsx)("ul",{className:v.a.ImageGallery,children:t.map((function(e){var t=e.id,r=e.webformatURL,n=e.type,o=e.largeImageURL;return Object(g.jsx)(y,{src:r,alt:n,largeImageURL:o,onModal:a},t)}))})},O=a(24),_=a.n(O),x=function(e){var t=e.onClick;return Object(g.jsx)("button",{type:"button",className:_.a.Button,onClick:t,children:"Load more"})},w=a(12),k=a.n(w);k.a.defaults.baseURL="https://pixabay.com/api";var M={fetchImages:function(e){var t=e.searchQuery,a=void 0===t?"":t,r=e.currentPage,n=void 0===r?1:r;return k.a.get("/?q=".concat(a,"&page=").concat(n,"&key=").concat("21327574-a9e02909bbc977a72a3d5931a","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))}},L=a(13),C=a.n(L),F=document.querySelector("#modal-root"),B=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(g.jsx)("div",{className:C.a.Overlay,onClick:this.handleBackdropClick,children:Object(g.jsx)("div",{className:C.a.Modal,children:this.props.children})}),F)}}]),a}(r.Component),P=(a(49),a(25)),G=a.n(P),N=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={images:[],showModal:!1,largeImageURL:null,currentPage:1,searchQuery:"",isLoading:!1,error:null},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.handleModalImage=function(t){e.toggleModal(),e.setState({largeImageURL:t})},e.onChangeQuery=function(t){e.setState({searchQuery:t,currentPage:1,images:[],error:null})},e.fetchImages=function(){var t=e.state,a=t.currentPage,r={searchQuery:t.searchQuery,currentPage:a};e.setState({isLoading:!0}),M.fetchImages(r).then((function(t){return e.setState((function(e){return{images:[].concat(Object(l.a)(e.images),Object(l.a)(t)),currentPage:e.currentPage+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchImages(),t.currentPage!==this.state.currentPage&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.showModal,a=e.images,r=e.isLoading,n=e.largeImageURL,o=e.error,c=a.length>0&&!r;return Object(g.jsxs)("div",{className:"App",children:[o&&Object(g.jsx)("h1",{children:"There is very bad error!"}),t&&Object(g.jsx)(B,{onClose:this.toggleModal,children:Object(g.jsx)("img",{src:n,alt:""})}),Object(g.jsx)(b,{onSubmit:this.onChangeQuery}),Object(g.jsx)(I,{images:a,onModal:this.handleModalImage,largeImageURL:n}),r&&Object(g.jsx)(G.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3}),c&&Object(g.jsx)(x,{onClick:this.fetchImages})]})}}]),a}(r.Component);a(70),a(71);c.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(N,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__tJKRM",SearchForm:"Searchbar_SearchForm__2aM46",SearchFormButton:"Searchbar_SearchFormButton__1DGQ3",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__jLUxb",SearchFormInput:"Searchbar_SearchFormInput__2-KRg","SearchForm-input":"Searchbar_SearchForm-input__1_hFp"}}},[[72,1,2]]]);
//# sourceMappingURL=main.40f5fc45.chunk.js.map