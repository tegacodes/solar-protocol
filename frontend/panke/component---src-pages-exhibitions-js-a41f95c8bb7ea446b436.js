(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{R94Z:function(e,t,a){"use strict";a.r(t);var n=a("dI71"),l=a("q1tI"),r=a.n(l),o=a("TJpk"),i=a.n(o),c=a("mwIZ"),s=a.n(c),m=a("wd/R"),d=a.n(m),u=a("Bl7J"),f=a("Wbzz"),h=a("9eSz"),p=a.n(h),E=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e,t=this.props.exhibition;return e=t.dateTbc?"Date to be confirmed":d()(t.startDate).format("DD MMMM")+" – "+d()(t.endDate).format("DD MMMM YYYY"),r.a.createElement("article",{className:"exhibition-item"},r.a.createElement(f.a,{to:"/exhibition/"+t.slug},r.a.createElement(p.a,{alt:"FeaturedImage",fluid:Object.assign({},t.featuredImage.fluid,{aspectRatio:16/9})})),r.a.createElement("h3",null,r.a.createElement(f.a,{to:"/exhibition/"+t.slug},t.title),r.a.createElement("small",null,e)),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.subtitleShortDescription.childMarkdownRemark.html}}))},t}(r.a.Component),g=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(t=e.call.apply(e,[this].concat(n))||this).filterCurrent=function(e){var t=new Date,a=new Date(e.node.startDate),n=new Date(e.node.endDate);return d()(a,"day").utcOffset(120).isSameOrBefore(t,"day")&&d()(n,"day").utcOffset(120).isSameOrAfter(t,"day")},t.filterUpcoming=function(e){var t=new Date,a=new Date(e.node.startDate);return d()(a,"day").utcOffset(120).isAfter(t,"day")},t.filterPast=function(e){var t=new Date,a=new Date(e.node.endDate);return d()(a,"day").utcOffset(120).isBefore(t,"day")},t}return Object(n.a)(t,e),t.prototype.render=function(){var e=s()(this,"props.data.allContentfulExhibition.edges");console.log("Posts:",e);var t=e.filter(this.filterCurrent);t.reverse();var a=e.filter(this.filterUpcoming);a.reverse();var n,l,o,c=e.filter(this.filterPast);return console.log("Current Exhibitions:"),console.log(t),console.log("Upcoming Exhibitions:"),console.log(a),console.log("Past Exhibitions:"),console.log(c),t.length>0&&(n=r.a.createElement("section",{className:"currently"},r.a.createElement("div",{className:"row headline"},r.a.createElement("div",{className:"col-md-12 col-sm-12 col-xs-12"},r.a.createElement("h2",null,"Current"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 col-sm-8 col-xs-12"},t.map((function(e){var t=e.node;return r.a.createElement(E,{key:t.slug,exhibition:t})})))))),a.length>0&&(l=r.a.createElement("section",{className:"upcoming"},r.a.createElement("div",{className:"row headline"},r.a.createElement("div",{className:"col-md-12 col-sm-12 col-xs-12"},r.a.createElement("h2",null,"Upcoming"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 col-sm-8 col-xs-12"},a.map((function(e){var t=e.node;return r.a.createElement(E,{key:t.slug,exhibition:t})})))))),c.length>0&&(o=r.a.createElement("section",{className:"past"},r.a.createElement("div",{className:"row headline"},r.a.createElement("div",{className:"col-md-12 col-sm-12 col-xs-12"},r.a.createElement("h2",null,"Past"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 col-sm-8 col-xs-12"},c.map((function(e){var t=e.node;return r.a.createElement(E,{key:t.slug,exhibition:t})})))))),r.a.createElement(u.a,null,r.a.createElement(i.a,{title:"Exhibitions",meta:[{name:"description",content:"Upcoming and past exhibitions of panke.gallery in Berlin-Wedding. The gallery seeks to open up a dialogue between established and emerging artists whose work comes out of the connections between digital or net-based art and club culture."}]}),n,l,o)},t}(r.a.Component);t.default=g}}]);
//# sourceMappingURL=component---src-pages-exhibitions-js-a41f95c8bb7ea446b436.js.map