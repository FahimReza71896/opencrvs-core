(window.webpackJsonp=window.webpackJsonp||[]).push([[12,11,60],{137:function(e,t,a){"use strict";a.r(t);a(220),a(77);var n=a(0),r=a.n(n),l=a(215),c=a(212),i=a(205),o=a(206),s=a(211);var m=function(e){var t=e.metadata;return r.a.createElement("nav",{className:"pagination-nav"},r.a.createElement("div",{className:"pagination-nav__item"},t.previous&&r.a.createElement(s.a,{className:"pagination-nav__link",to:t.previous.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Previous"),r.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&r.a.createElement(s.a,{className:"pagination-nav__link",to:t.next.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Next"),r.a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))};a(81);var u=function(e,t,a){var r=Object(n.useState)(void 0),l=r[0],c=r[1];Object(n.useEffect)((function(){var n=[],r=[];function i(){var i=function(){var e=0,t=null;for(n=document.getElementsByClassName("anchor");e<n.length&&!t;){var r=n[e],l=r.getBoundingClientRect().top;l>=0&&l<=a&&(t=r),e+=1}return t}();if(i){var o=0,s=!1;for(r=document.getElementsByClassName(e);o<r.length&&!s;){var m=r[o],u=m.href,d=decodeURIComponent(u.substring(u.indexOf("#")+1));i.id===d&&(l&&l.classList.remove(t),m.classList.add(t),c(m),s=!0),o+=1}}}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),function(){document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}))},d=a(210),v=a.n(d),p=a(138),b=a.n(p);function h(e){var t=e.headings;return u("table-of-contents__link","table-of-contents__link--active",100),r.a.createElement("div",{className:"col col--3"},r.a.createElement("div",{className:b.a.tableOfContents},r.a.createElement(g,{headings:t})))}function g(e){var t=e.headings,a=e.isChild;return t.length?r.a.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"#"+e.id,className:"table-of-contents__link",dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(g,{isChild:!0,headings:e.children}))}))):null}t.default=function(e){var t,a=Object(i.a)().siteConfig,n=void 0===a?{}:a,s=n.url,u=n.title,d=e.content,p=d.metadata,g=p.description,E=p.title,f=p.permalink,_=p.editUrl,N=p.lastUpdatedAt,k=p.lastUpdatedBy,y=p.version,C=d.frontMatter,w=C.image,O=C.keywords,j=C.hide_title,S=C.hide_table_of_contents,I=E?E+" | "+u:u,M=s+Object(o.a)(w);return Object(c.a)(w)||(M=w),r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement("title",null,I),r.a.createElement("meta",{property:"og:title",content:I}),g&&r.a.createElement("meta",{name:"description",content:g}),g&&r.a.createElement("meta",{property:"og:description",content:g}),O&&O.length&&r.a.createElement("meta",{name:"keywords",content:O.join(",")}),w&&r.a.createElement("meta",{property:"og:image",content:M}),w&&r.a.createElement("meta",{property:"twitter:image",content:M}),w&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+E}),f&&r.a.createElement("meta",{property:"og:url",content:s+f}),f&&r.a.createElement("link",{rel:"canonical",href:s+f})),r.a.createElement("div",{className:v()("container padding-vert--lg",b.a.docItemWrapper)},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:v()("col",(t={},t[b.a.docItemCol]=!S,t))},r.a.createElement("div",{className:b.a.docItemContainer},r.a.createElement("article",null,y&&r.a.createElement("div",null,r.a.createElement("span",{className:"badge badge--secondary"},"Version: ",y)),!j&&r.a.createElement("header",null,r.a.createElement("h1",{className:b.a.docTitle},E)),r.a.createElement("div",{className:"markdown"},r.a.createElement(d,null))),(_||N||k)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},_&&r.a.createElement("a",{href:_,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},r.a.createElement("g",null,r.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(N||k)&&r.a.createElement("div",{className:"col text--right"},r.a.createElement("em",null,r.a.createElement("small",null,"Last updated"," ",N&&r.a.createElement(r.a.Fragment,null,"on"," ",r.a.createElement("time",{dateTime:new Date(1e3*N).toISOString(),className:b.a.docLastUpdatedAt},new Date(1e3*N).toLocaleDateString()),k&&" "),k&&r.a.createElement(r.a.Fragment,null,"by ",r.a.createElement("strong",null,k)),!1))))),r.a.createElement("div",{className:"margin-vert--lg"},r.a.createElement(m,{metadata:p})))),!S&&d.rightToc&&r.a.createElement(h,{headings:d.rightToc}))))}},203:function(e,t,a){"use strict";a.r(t);a(34),a(23),a(24),a(61),a(250);var n=a(0),r=a.n(n),l=a(204),c=a(205),i=a(68),o=a(213),s=a(137),m=(a(21),a(79),a(77),a(2)),u=a(10),d=a(210),v=a.n(d),p=a(227),b=a(233),h=a(234),g=a(232),E=a(211),f=a(212),_=a(151),N=a.n(_);function k(e){var t=e.item,a=e.onItemClick,l=e.collapsible,c=e.activePath,i=Object(u.a)(e,["item","onItemClick","collapsible","activePath"]),o=t.items,s=t.href,d=t.label,p=t.type,b=Object(n.useState)(t.collapsed),h=b[0],g=b[1],_=Object(n.useState)(null),N=_[0],y=_[1];t.collapsed!==N&&(y(t.collapsed),g(t.collapsed));var C=Object(n.useCallback)((function(e){e.preventDefault(),e.target.blur(),g((function(e){return!e}))}));switch(p){case"category":return o.length>0&&r.a.createElement("li",{className:v()("menu__list-item",{"menu__list-item--collapsed":h}),key:d},r.a.createElement("a",Object(m.a)({className:v()("menu__link",{"menu__link--sublist":l,"menu__link--active":l&&!t.collapsed}),href:"#!",onClick:l?C:void 0},i),d),r.a.createElement("ul",{className:"menu__list"},o.map((function(e){return r.a.createElement(k,{tabIndex:h?"-1":"0",key:e.label,item:e,onItemClick:a,collapsible:l,activePath:c})}))));case"link":default:return r.a.createElement("li",{className:"menu__list-item",key:d},r.a.createElement(E.a,Object(m.a)({className:v()("menu__link",{"menu__link--active":s===c}),to:s},Object(f.a)(s)?{isNavLink:!0,exact:!0,onClick:a}:{target:"_blank",rel:"noreferrer noopener"},i),d))}}var y=function(e){var t,a,l=Object(n.useState)(!1),i=l[0],o=l[1],s=Object(c.a)(),u=s.siteConfig,d=(u=void 0===u?{}:u).themeConfig.navbar,f=(d=void 0===d?{}:d).title,_=d.hideOnScroll,y=void 0!==_&&_,C=s.isClient,w=Object(h.a)(),O=w.logoLink,j=w.logoLinkProps,S=w.logoImageUrl,I=w.logoAlt,M=Object(p.a)().isAnnouncementBarClosed,L=Object(g.a)().scrollY,T=e.docsSidebars,x=e.path,P=e.sidebar,U=e.sidebarCollapsible;if(Object(b.a)(i),!P)return null;var D=T[P];if(!D)throw new Error('Cannot find the sidebar "'+P+'" in the sidebar config!');return U&&D.forEach((function(e){return function e(t,a){var n=t.items,r=t.href;switch(t.type){case"category":var l=n.map((function(t){return e(t,a)})).filter((function(e){return e})).length>0;return t.collapsed=!l,l;case"link":default:return r===a}}(e,x)})),r.a.createElement("div",{className:v()(N.a.sidebar,(t={},t[N.a.sidebarWithHideableNavbar]=y,t))},y&&r.a.createElement(E.a,Object(m.a)({tabIndex:"-1",className:N.a.sidebarLogo,to:O},j),null!=S&&r.a.createElement("img",{key:C,src:S,alt:I}),null!=f&&r.a.createElement("strong",null,f)),r.a.createElement("div",{className:v()("menu","menu--responsive",N.a.menu,(a={"menu--show":i},a[N.a.menuWithAnnouncementBar]=!M&&0===L,a))},r.a.createElement("button",{"aria-label":i?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){o(!i)}},i?r.a.createElement("span",{className:v()(N.a.sidebarMenuIcon,N.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{"aria-label":"Menu",className:N.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},D.map((function(e){return r.a.createElement(k,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),o(!1)},collapsible:U,activePath:x})})))))},C=a(223),w=a(224),O=a(231),j=a(156),S=a.n(j);t.default=function(e){var t=e.route,a=e.docsMetadata,n=e.location,m=e.content,u=a.permalinkToSidebar,d=a.docsSidebars,v=a.version,p=a.isHomePage,b=a.homePagePath,h=p?{}:t.routes.find((function(e){return Object(O.a)(n.pathname,e)}))||{},g=p?m.metadata.sidebar:u[h.path],E=Object(c.a)(),f=E.siteConfig,_=(f=void 0===f?{}:f).themeConfig,N=(_=void 0===_?{}:_).sidebarCollapsible,k=void 0===N||N,j=E.isClient;return p||0!==Object.keys(h).length?r.a.createElement(o.a,{version:v,key:j},r.a.createElement("div",{className:S.a.docPage},g&&r.a.createElement("div",{className:S.a.docSidebarContainer},r.a.createElement(y,{docsSidebars:d,path:p?b:h.path,sidebar:g,sidebarCollapsible:k})),r.a.createElement("main",{className:S.a.docMainContainer},r.a.createElement(l.a,{components:C.a},p?r.a.createElement(s.default,{content:m}):Object(i.a)(t.routes))))):r.a.createElement(w.default,e)}},214:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(205),c=a(206);t.a=function(){var e=Object(l.a)().siteConfig,t=void 0===e?{}:e,a=t.themeConfig,i=(void 0===a?{}:a).footer,o=i||{},s=o.copyright,m=(o.links,o.logo),u=void 0===m?{}:m,d=Object(c.a)(u.src);return Object(n.useEffect)((function(){var e=document.createElement("script");e.src="https://sidecar.gitter.im/dist/sidecar.v1.js",e.async=!0;var t=document.createElement("script");t.src="https://buttons.github.io/buttons.js",t.async=!0,document.body.appendChild(e),document.body.appendChild(t)}),[]),i?r.a.createElement("footer",{className:"nav-footer",id:"footer"},r.a.createElement("section",{className:"sitemap"},r.a.createElement("a",{href:Object(c.a)("/"),className:"nav-home"},r.a.createElement("img",{src:d,alt:t.title,width:"125",height:"28.47"})),r.a.createElement("div",null,r.a.createElement("h5",null,"Docs"),r.a.createElement("a",{href:Object(c.a)("docs/system_overview/introduction")},"System overview"),r.a.createElement("a",{href:Object(c.a)("#")},"User types"),r.a.createElement("a",{href:Object(c.a)("docs/core_functions/notifyAVitalEvent")},"Core functions"),r.a.createElement("a",{href:Object(c.a)("docs/support_functions/login")},"Support functions"),r.a.createElement("a",{href:Object(c.a)("docs/system_admin/userTeam")},"System admin functions")),r.a.createElement("div",null,r.a.createElement("h5",null,"Community"),r.a.createElement("a",{href:Object(c.a)("docs/community/contributing")},"Contributing"),r.a.createElement("a",{href:Object(c.a)("docs/community/implementations")},"Implementations"),r.a.createElement("a",{href:Object(c.a)("docs/community/team")},"Team")),r.a.createElement("div",null,r.a.createElement("h5",null,"Legal"),r.a.createElement("a",{href:"https://www.plan.org.au/contact/privacy",target:"_blank"},"Privacy"),r.a.createElement("a",{href:"https://www.opencrvs.org/license",target:"_blank"},"License")),r.a.createElement("div",null,r.a.createElement("h5",null,"Social"),r.a.createElement("a",{className:"gitter"},"Gitter"),r.a.createElement("a",{href:"https://github.com/opencrvs/opencrvs-core",target:"_blank"},"GitHub"),r.a.createElement("a",{className:"github-button",href:"https://github.com/opencrvs/opencrvs-core/subscription","data-icon":"octicon-eye","aria-label":"Watch opencrvs/opencrvs-core on GitHub"},"Watch"),r.a.createElement("br",null),r.a.createElement("a",{className:"github-button",href:"https://github.com/opencrvs/opencrvs-core","data-icon":"octicon-star","data-count-href":"/opencrvs/opencrvs-core/stargazers","data-show-count":"true","data-count-aria-label":"# stargazers on GitHub","aria-label":"Star this project on GitHub"},"Star"))),r.a.createElement("section",{className:"copyright"},s)):null}},220:function(e,t,a){var n=a(8),r=a(221);n(n.P+n.F*(Date.prototype.toISOString!==r),"Date",{toISOString:r})},221:function(e,t,a){"use strict";var n=a(13),r=Date.prototype.getTime,l=Date.prototype.toISOString,c=function(e){return e>9?e:"0"+e};e.exports=n((function(){return"0385-07-25T07:06:39.999Z"!=l.call(new Date(-50000000000001))}))||!n((function(){l.call(new Date(NaN))}))?function(){if(!isFinite(r.call(this)))throw RangeError("Invalid time value");var e=this,t=e.getUTCFullYear(),a=e.getUTCMilliseconds(),n=t<0?"-":t>9999?"+":"";return n+("00000"+Math.abs(t)).slice(n?-6:-4)+"-"+c(e.getUTCMonth()+1)+"-"+c(e.getUTCDate())+"T"+c(e.getUTCHours())+":"+c(e.getUTCMinutes())+":"+c(e.getUTCSeconds())+"."+(a>99?a:"0"+c(a))+"Z"}:l},224:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(213);t.default=function(){return r.a.createElement(l.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},250:function(e,t,a){"use strict";var n=a(8),r=a(43)(5),l=!0;"find"in[]&&Array(1).find((function(){l=!1})),n(n.P+n.F*l,"Array",{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a(86)("find")}}]);