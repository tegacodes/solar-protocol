"use strict";(self.webpackChunkpanke_gallery_website=self.webpackChunkpanke_gallery_website||[]).push([[936],{1983:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.blockTitle,n=e.blockContent;return a.createElement("section",{className:"further"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col-md-4 col-sm-4 col-xs-12"},a.createElement("h2",null,t)),a.createElement("div",{className:"col-md-8 col-sm-8 col-xs-12"},a.createElement("div",{dangerouslySetInnerHTML:{__html:n.childMarkdownRemark.html}}))))}},8195:function(e,t,n){var a=n(1721),r=n(7294),l=n(3964),s=n.n(l),o=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){var e,t=this.props.event,n=s()(t.date).format("DD MMMM YYYY"),a=s()(t.date).format("HH:mm");return e=t.openEnd?"open end":s()(t.endTime).format("HH:mm"),r.createElement("span",null,n," from ",a,"  – ",e)},t}(r.Component);t.Z=o},3442:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(1721),r=n(7294),l=n(1597),s=n(8195);function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var c=function(e){function t(t){var n;return(n=e.call(this,t)||this).componentDidUpdate=function(){n.state.isToggleOn!==n.props.filterIsOn&&n.setState((function(e){return{isToggleOn:n.props.filterIsOn}}))},n.handleTagClick=function(){n.props.handleClick(n.props.tag.slug),n.setState((function(e){return{isToggleOn:!e.isToggleOn}}))},n.state={isToggleOn:!1},n.handleTagClick=n.handleTagClick.bind(o(n)),n.componentDidUpdate=n.componentDidUpdate.bind(o(n)),n}return(0,a.Z)(t,e),t.prototype.render=function(){var e=this.props.tag,t=this.props.type,n=this.state.isToggleOn;if("eventSeries"===t&&n)var a="tag eventSeries tag-selected";else a="eventSeries"!==t||n?"tag":"tag eventSeries";return this.props.noClick?r.createElement("button",{ref:"tag",className:a,"aria-label":"Tagged with "+e.name,tabindex:"-100"},e.name):r.createElement("button",{ref:"tag",className:a,onClick:this.handleTagClick,onKeyDown:this.handleTagClick,"aria-label":"Tagged with "+e.name,tabindex:"-100"},e.name)},t}(r.Component),i=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){var e,t=this.props.event;return null!=t.eventSeries&&(e=r.createElement(c,{ref:this.tagElement,tag:t.eventSeries,type:"eventSeries",handleClick:this.props.handleClick,filterIsOn:this.props.filterIsOn})),r.createElement("article",{className:"news-item"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-md-4 col-sm-4 col-xs-12"},e),r.createElement("div",{className:"col-md-8 col-sm-8 col-xs-12"},r.createElement("h3",null,r.createElement(l.rU,{to:"/event/"+t.slug},t.title)),r.createElement("div",{dangerouslySetInnerHTML:{__html:t.subtitleShortDescription.childMarkdownRemark.html}}),r.createElement("p",{className:"meta"},r.createElement(s.Z,{event:t})))))},t}(r.Component),m=i},6261:function(e,t,n){n.r(t);var a=n(1721),r=n(7294),l=n(7361),s=n.n(l),o=n(5414),c=n(1597),i=n(7059),m=n(8195),u=n(5689),d=n(1983),p=n(3442),g=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(t=e.call.apply(e,[this].concat(a))||this).returnEventListItem=function(e){return console.log("hä?"),r.createElement(p.Z,{key:e.slug,event:e})},t}return(0,a.Z)(t,e),t.prototype.render=function(){var e=s()(this,"props.data.allContentfulContentBlock.edges"),t=s()(this,"props.data.allContentfulEvent.edges");console.log("Events from query",t);var n=t.filter((function(e){var t=new Date;return new Date(e.node.date)>=t}));n.reverse();var a,l,p=t.filter((function(e){var t=new Date;return new Date(e.node.date)<t}));n.length>0&&(a=r.createElement("section",{className:"upcoming"},r.createElement("div",{className:"row headline"},r.createElement("div",{className:"col-md-4 col-sm-4 col-xs-12"},r.createElement("h2",null,"Upcoming at /rosa")),r.createElement("div",{className:"col-md-8 col-sm-8 col-xs-12"},n.map((function(e){var t=e.node;return r.createElement(r.Fragment,null,r.createElement(c.rU,{to:"/event/"+t.slug},r.createElement(i.G,{alt:"FeaturedImage",image:t.featuredImage.gatsbyImageData,aspectratio:16/9})),r.createElement("h3",{className:"mt-3"},r.createElement(c.rU,{to:"/event/"+t.slug},t.title)),r.createElement("div",{dangerouslySetInnerHTML:{__html:t.subtitleShortDescription.childMarkdownRemark.html}}),r.createElement("p",{className:"meta mb-5"},r.createElement(m.Z,{event:t})))})))))),p.length>0&&(console.log("past",p),l=r.createElement("section",{className:"past"},r.createElement("div",{className:"row headline"},r.createElement("div",{className:"col-md-4 col-sm-4 col-xs-12"},r.createElement("h2",null,"Past events at rosa")),r.createElement("div",{className:"col-md-8 col-sm-8 col-xs-12"},p.map((function(e){var t=e.node;return r.createElement(r.Fragment,null,r.createElement("h3",null,r.createElement(c.rU,{to:"/event/"+t.slug},t.title)),r.createElement("div",{dangerouslySetInnerHTML:{__html:t.subtitleShortDescription.childMarkdownRemark.html}}),r.createElement("p",{c:!0,lassName:"meta mb-5"},r.createElement(m.Z,{event:t})))}))))));var g="About",h='<strong>/rosa is a project space on Rosa-Luxemburg Platz in Berlin. It is jointly run by <a href="https://netzkunst.berlin">Zentrum für Netzkunst (ZfN)</a> and panke.gallery and focuses on researching and exhibiting net art and net culture.</strong>';return r.createElement(u.Z,null,r.createElement("main",null,r.createElement(o.Z,{title:"/rosa",meta:[{name:"description",content:"/rosa is a project space on Rosa-Luxemburg Platz jointly run by Zentrum für Netzkunst (ZfN) and panke.gallery focused on representing net art and net culture in Berlin."}]}),r.createElement("section",{className:"info"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-md-4 col-sm-4 col-xs-12"},r.createElement("h2",null,g)),r.createElement("div",{className:"col-md-8 col-sm-8 col-xs-12"},r.createElement("div",{dangerouslySetInnerHTML:{__html:h}})))),r.createElement("section",{className:"further"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-md-4 col-sm-4 col-xs-12 address"},r.createElement("div",{dangerouslySetInnerHTML:{__html:"\n      <strong>/rosa</strong><br>\n      Rosa-Luxemburg-Strasse 35<br>\n      10178 Berlin\n    "}})),r.createElement("div",{className:"col-md-8 col-sm-8 col-xs-12"},r.createElement("div",{dangerouslySetInnerHTML:{__html:"/rosa offers a site for local and international dialogues between researchers, students, net art enthusiasts, and established and emerging artists. In addition to showing artworks, /rosa proposes experimental formats of art mediation, with public lectures and a workspace, as well as a growing research library for self-study. It also  functions as a venue for community events such as reading groups and workshops."}})))),e.map((function(e){var t=e.node;return r.createElement(d.Z,{key:t.id,blockTitle:t.title,blockContent:t.blockContent})})),a,l))},t}(r.Component);t.default=g}}]);
//# sourceMappingURL=component---src-pages-rosa-js-911928814f1ed2408ca1.js.map