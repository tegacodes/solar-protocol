"use strict";(self.webpackChunkpanke_gallery_website=self.webpackChunkpanke_gallery_website||[]).push([[443],{1983:function(e,t,n){var r=n(7294);t.Z=e=>{let{blockTitle:t,blockContent:n}=e;return r.createElement("section",{className:"further"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-md-4 col-sm-4 col-xs-12"},r.createElement("h2",null,t)),r.createElement("div",{className:"col-md-8 col-sm-8 col-xs-12"},r.createElement("div",{dangerouslySetInnerHTML:{__html:n.childMarkdownRemark.html}}))))}},6527:function(e,t,n){var r=n(7294),a=n(8032);t.Z=e=>{let{slides:t,length:n}=e;return r.createElement("div",{id:"myCarousel",className:"row carousel slide","data-ride":"carousel"},r.createElement("ol",{className:"carousel-indicators"},t.map(((e,t)=>{let{sizes:n}=e;var a=t,l=0===t?"active":"";return r.createElement("li",{"data-target":"#myCarousel","data-slide-to":a,className:l})}))),r.createElement("div",{className:"carousel-inner",role:"listbox"},t.map(((e,t)=>{let{gatsbyImageData:n,description:l}=e;var o=0===t?"carousel-item active":"carousel-item";return r.createElement("div",{className:o},r.createElement("div",{className:"col-md-12 col-sm-12 col-xs-12"},r.createElement("div",{className:"image-wrapper 3-col"},r.createElement(a.G,{alt:"FeaturedImage",image:n,aspectratio:16/9})),r.createElement("p",null,l)))}))),r.createElement("a",{className:"carousel-control-prev",href:"#myCarousel",role:"button","data-slide":"prev"},r.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),r.createElement("span",{className:"sr-only"},"Previous")),r.createElement("a",{className:"carousel-control-next",href:"#myCarousel",role:"button","data-slide":"next"},r.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),r.createElement("span",{className:"sr-only"},"Next")))}},3004:function(e,t,n){n.r(t),n.d(t,{default:function(){return G}});var r=n(1721),a=n(7294),l=n(4593),o=n(7361),c=n.n(o),s=n(8032),i=n(1501),u=n(1983),d=n(6527),m="https://js.stripe.com/v3",p=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,E="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",h=null,f=function(e){return null!==h||(h=new Promise((function(t,n){if("undefined"!=typeof window&&"undefined"!=typeof document)if(window.Stripe&&e&&console.warn(E),window.Stripe)t(window.Stripe);else try{var r=function(){for(var e=document.querySelectorAll('script[src^="'.concat(m,'"]')),t=0;t<e.length;t++){var n=e[t];if(p.test(n.src))return n}return null}();r&&e?console.warn(E):r||(r=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(m).concat(t);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(n),n}(e)),r.addEventListener("load",(function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))})),r.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(a){return void n(a)}else t(null)}))),h},w=Promise.resolve().then((function(){return f(null)})),v=!1;w.catch((function(e){v||console.warn(e)}));const S={fontSize:".9em",textAlign:"center",color:"#000",padding:"8px 12px",letterSpacing:"0.1em",textTransform:"uppercase",border:"#000 2px solid",borderRadius:"5px",background:"transparent"},N={opacity:"0.5",cursor:"not-allowed"},C=["AC","AD","AE","AF","AG","AI","AL","AM","AO","AQ","AR","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BR","BS","BT","BV","BW","BY","BZ","CA","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CR","CV","CW","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","EH","ER","ES","ET","FI","FJ","FK","FO","FR","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HN","HR","HT","HU","ID","IE","IL","IM","IN","IO","IQ","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MK","ML","MM","MN","MO","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NG","NI","NL","NO","NP","NR","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SE","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SV","SX","SZ","TA","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TR","TT","TV","TW","TZ","UA","UG","US","UY","UZ","VA","VC","VE","VG","VN","VU","WF","WS","XK","YE","YT","ZA","ZM","ZW","ZZ"];let M;const T=()=>(M||(M=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];v=!0;var r=Date.now();return w.then((function(e){return function(e,t,n){if(null===e)return null;var r=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.54.2",startTime:t})}(r,n),r}(e,t,r)}))}("pk_live_51IXVC9J1sNuO02XTR3AxFKGn0GtuGs7McfAYWT6l3rG9MwFmW2T2v7h5Vks9lx5j7fPsLGoNDxY0fTGRtej2gGxK00XjHsV49X")),M);var g=e=>{let{slug:t,priceID:n}=e,r="undefined"!=typeof window?window.location.origin:"";r=r+"/edition/"+t;const{0:l,1:o}=(0,a.useState)(!1);return a.createElement("button",{disabled:l,style:l?{...S,...N}:S,onClick:async e=>{e.preventDefault(),o(!0);const t=await T(),{error:a}=await t.redirectToCheckout({mode:"payment",lineItems:[{price:n,quantity:1}],shippingAddressCollection:{allowedCountries:C},successUrl:r+"?checkout=success",cancelUrl:r+"?checkout=cancel"});a&&(console.warn("Error:",a),o(!1))}},"Buy the edition")};let y=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).getChechoutStatus=()=>{let e="undefined"!=typeof window?window.location.href:"";return e.indexOf("checkout")>0?e.substr(e.indexOf("=")+1):"initial"},t}return(0,r.Z)(t,e),t.prototype.render=function(){const e=c()(this.props,"data.contentfulEdition");var t,n;t=null!=e.editionImpressionsSlideshow?a.createElement(d.Z,{slides:e.editionImpressionsSlideshow,length:e.editionImpressionsSlideshow.length}):a.createElement(s.G,{alt:"FeaturedImage",image:e.featuredImage.gatsbyImageData,aspectratio:16/9}),e.furtherInformationBlocks&&(n=e.furtherInformationBlocks.map((e=>{let{id:t,title:n,childContentfulContentBlockBlockContentTextNode:r}=e;return a.createElement(u.Z,{key:t,blockTitle:n,blockContent:r})})));const r=this.getChechoutStatus();var o;return e.stripePriceId&&(o="success"===r?a.createElement("div",{className:"alert alert-success"},a.createElement("p",null,a.createElement("strong",null,"Thank you for your purchase.")),a.createElement("p",null,"Once we receive your payment, we will contact you for shipping details."),a.createElement("p",null," Enjoy the edition!")):a.createElement(g,{slug:e.slug,priceID:e.stripePriceId})),a.createElement(i.Z,null,a.createElement("main",null,a.createElement(l.Z,{title:""+e.title}),a.createElement("section",{className:"head"},a.createElement("div",{className:"row headline"},a.createElement("div",{className:"col-md-12 col-sm-12 col-xs-12"},a.createElement("h1",null,e.title),a.createElement("div",{className:"subtitle",dangerouslySetInnerHTML:{__html:e.subtitleShortDescription.childMarkdownRemark.html}}),t))),a.createElement("section",{className:"further"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col-md-4 col-sm-4 col-xs-12"},a.createElement("h2",null,"About the edition"),o),a.createElement("div",{className:"col-md-8 col-sm-8 col-xs-12"},a.createElement("div",{dangerouslySetInnerHTML:{__html:e.description.childMarkdownRemark.html}})))),n))},t}(a.Component);var G=y}}]);
//# sourceMappingURL=component---src-templates-edition-js-3315401ffc46e5ade394.js.map