"use strict";(self.webpackChunkpanke_gallery_website=self.webpackChunkpanke_gallery_website||[]).push([[367],{1983:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.blockTitle,a=e.blockContent;return n.createElement("section",{className:"further"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-md-4 col-sm-4 col-xs-12"},n.createElement("h2",null,t)),n.createElement("div",{className:"col-md-8 col-sm-8 col-xs-12"},n.createElement("div",{dangerouslySetInnerHTML:{__html:a.childMarkdownRemark.html}}))))}},4387:function(e,t,a){var n=a(7294),l=a(3723);t.Z=function(e){var t=e.images;return n.createElement("section",{className:"further"},n.createElement("div",{className:"col-md-12 col-xs-12"},t.map((function(e){var t=e.gatsbyImageData,a=e.description;return n.createElement("div",{className:"image-wrapper 3col"},n.createElement(l.G,{alt:"FeaturedImage",image:t,aspectratio:16/9}),n.createElement("p",{className:"meta mt-2 "},a))}))))}},8195:function(e,t,a){var n=a(1721),l=a(7294),r=a(3964),c=a.n(r),s=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){var e,t=this.props.event,a=c()(t.date).format("DD MMMM YYYY"),n=c()(t.date).format("HH:mm");return e=t.openEnd?"open end":c()(t.endTime).format("HH:mm"),l.createElement("span",null,a," from ",n,"  – ",e)},t}(l.Component);t.Z=s},6527:function(e,t,a){var n=a(7294),l=a(3723);t.Z=function(e){var t=e.slides;e.length;return n.createElement("div",{id:"myCarousel",className:"row carousel slide","data-ride":"carousel"},n.createElement("ol",{className:"carousel-indicators"},t.map((function(e,t){e.sizes;var a=t,l=0===t?"active":"";return n.createElement("li",{"data-target":"#myCarousel","data-slide-to":a,className:l})}))),n.createElement("div",{className:"carousel-inner",role:"listbox"},t.map((function(e,t){var a=e.gatsbyImageData,r=e.description,c=0===t?"carousel-item active":"carousel-item";return n.createElement("div",{className:c},n.createElement("div",{className:"col-md-12 col-sm-12 col-xs-12"},n.createElement("div",{className:"image-wrapper 3-col"},n.createElement(l.G,{alt:"FeaturedImage",image:a,aspectratio:16/9})),n.createElement("p",null,r)))}))),n.createElement("a",{className:"carousel-control-prev",href:"#myCarousel",role:"button","data-slide":"prev"},n.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),n.createElement("span",{className:"sr-only"},"Previous")),n.createElement("a",{className:"carousel-control-next",href:"#myCarousel",role:"button","data-slide":"next"},n.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),n.createElement("span",{className:"sr-only"},"Next")))}},9782:function(e,t,a){a.r(t);var n=a(1721),l=a(7294),r=a(5414),c=a(7361),s=a.n(c),m=a(3723),o=a(5689),i=a(1983),u=a(8195),d=a(6527),p=a(4387),E=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){var e,t,a,n,c,E,v=s()(this.props,"data.contentfulEvent");return console.log(v),e=null!=v.eventImpressionsSlideshow?l.createElement(d.Z,{slides:v.eventImpressionsSlideshow,length:v.eventImpressionsSlideshow.length}):l.createElement(m.G,{alt:"FeaturedImage",image:v.featuredImage.gatsbyImageData,aspectratio:16/9}),v.eventDocumentationImagesBelow&&(t=l.createElement(p.Z,{images:v.eventDocumentationImagesBelow})),a=v.entryfee?l.createElement("p",{className:"meta"},l.createElement(u.Z,{event:v})," | ",v.entryfee):l.createElement("p",{className:"meta"},l.createElement(u.Z,{event:v})),v.furtherInformationBlocks&&(n=v.furtherInformationBlocks.map((function(e){var t=e.id,a=e.title,n=e.childContentfulContentBlockBlockContentTextNode;return l.createElement(i.Z,{key:t,blockTitle:a,blockContent:n})}))),null!=v.eventSeries&&(c=l.createElement("p",{className:"eventSeries"},v.eventSeries.name)),null!=v.tags&&(E=v.tags.map((function(e){e.slug;var t=e.name;return l.createElement("p",{className:"tag"},t)}))),l.createElement(o.Z,null,l.createElement("main",null,l.createElement(r.Z,{title:""+v.title}),l.createElement("section",{className:"head"},l.createElement("div",{className:"row headline"},l.createElement("div",{className:"col-md-12 col-sm-12 col-xs-12"},l.createElement("h1",null,v.title),l.createElement("div",{className:"subtitle",dangerouslySetInnerHTML:{__html:v.subtitleShortDescription.childMarkdownRemark.html}}),a,c,E,e))),l.createElement("section",{className:"info"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-md-4 col-sm-4 col-xs-12"},l.createElement("h2",null,"About the event")),l.createElement("div",{className:"col-md-8 col-sm-8 col-xs-12"},l.createElement("div",{dangerouslySetInnerHTML:{__html:v.description.childMarkdownRemark.html}})))),n,t))},t}(l.Component);t.default=E}}]);
//# sourceMappingURL=component---src-templates-event-js-ca39b3c71cfe2efc0a9a.js.map