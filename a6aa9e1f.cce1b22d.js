(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{200:function(e,a,t){"use strict";t.r(a);t(77);var n=t(0),r=t.n(n),c=t(203),l=t(211),o=t(220),s=t(209);var i=function(e){var a=e.metadata,t=a.previousPage,n=a.nextPage;return r.a.createElement("nav",{className:"pagination-nav"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(s.a,{className:"pagination-nav__link",to:t},r.a.createElement("h4",{className:"pagination-nav__label"},"\xab Newer Entries"))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.a.createElement(s.a,{className:"pagination-nav__link",to:n},r.a.createElement("h4",{className:"pagination-nav__label"},"Older Entries \xbb"))))};a.default=function(e){var a=e.metadata,t=e.items,n=Object(c.a)().siteConfig.title,s="/"===a.permalink?n:"Blog";return r.a.createElement(l.a,{title:s,description:"Blog"},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},t.map((function(e){var a=e.content;return r.a.createElement(o.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:a.metadata.truncated},r.a.createElement(a,null))})),r.a.createElement(i,{metadata:a})))))}},212:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(203),l=t(204);a.a=function(){var e=Object(c.a)().siteConfig,a=void 0===e?{}:e,t=a.themeConfig,o=(void 0===t?{}:t).footer,s=o||{},i=s.copyright,m=(s.links,s.logo),u=void 0===m?{}:m,d=Object(l.a)(u.src);return Object(n.useEffect)((function(){var e=document.createElement("script");e.src="https://sidecar.gitter.im/dist/sidecar.v1.js",e.async=!0;var a=document.createElement("script");a.src="https://buttons.github.io/buttons.js",a.async=!0,document.body.appendChild(e),document.body.appendChild(a)}),[]),o?r.a.createElement("footer",{className:"nav-footer",id:"footer"},r.a.createElement("section",{className:"sitemap"},r.a.createElement("a",{href:Object(l.a)("/"),className:"nav-home"},r.a.createElement("img",{src:d,alt:a.title,width:"125",height:"28.47"})),r.a.createElement("div",null,r.a.createElement("h5",null,"Docs"),r.a.createElement("a",{href:Object(l.a)("docs/system_overview/introduction")},"System overview"),r.a.createElement("a",{href:Object(l.a)("#")},"User types"),r.a.createElement("a",{href:Object(l.a)("docs/core_functions/notifyAVitalEvent")},"Core functions"),r.a.createElement("a",{href:Object(l.a)("docs/support_functions/login")},"Support functions"),r.a.createElement("a",{href:Object(l.a)("docs/system_admin/userTeam")},"System admin functions")),r.a.createElement("div",null,r.a.createElement("h5",null,"Community"),r.a.createElement("a",{href:Object(l.a)("#")},"Help"),r.a.createElement("a",{href:"https://www.opencrvs.org/case-studies",target:"_blank"},"Case studies")),r.a.createElement("div",null,r.a.createElement("h5",null,"Legal"),r.a.createElement("a",{href:"#",target:"_blank"},"Privacy")),r.a.createElement("div",null,r.a.createElement("h5",null,"Social"),r.a.createElement("a",{className:"gitter"},"Gitter"),r.a.createElement("a",{href:"https://github.com/opencrvs/opencrvs-core",target:"_blank"},"GitHub"),r.a.createElement("a",{className:"github-button",href:"https://github.com/opencrvs/opencrvs-core/subscription","data-icon":"octicon-eye","aria-label":"Watch opencrvs/opencrvs-core on GitHub"},"Watch"),r.a.createElement("br",null),r.a.createElement("a",{className:"github-button",href:"https://github.com/opencrvs/opencrvs-core","data-icon":"octicon-star","data-count-href":"/opencrvs/opencrvs-core/stargazers","data-show-count":"true","data-count-aria-label":"# stargazers on GitHub","aria-label":"Star this project on GitHub"},"Star"))),r.a.createElement("section",{className:"copyright"},i)):null}},220:function(e,a,t){"use strict";t(77),t(80);var n=t(0),r=t.n(n),c=t(208),l=t.n(c),o=t(202),s=t(209),i=t(221),m=t(139),u=t.n(m),d=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,n,c,m,v=e.children,E=e.frontMatter,h=e.metadata,g=e.truncated,p=e.isBlogPostPage,b=void 0!==p&&p,f=h.date,_=h.permalink,N=h.tags,y=h.readingTime,k=E.author,w=E.title,j=E.author_url||E.authorURL,O=E.author_title||E.authorTitle,C=E.author_image_url||E.authorImageURL;return r.a.createElement("article",{className:b?void 0:"margin-bottom--xl"},(a=b?"h1":"h2",t=f.substring(0,10).split("-"),n=t[0],c=d[parseInt(t[1],10)-1],m=parseInt(t[2],10),r.a.createElement("header",null,r.a.createElement(a,{className:l()("margin-bottom--sm",u.a.blogPostTitle)},b?w:r.a.createElement(s.a,{to:_},w)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:f,className:u.a.blogPostDate},c," ",m,", ",n," ",y&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(y)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},C&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:j,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:C,alt:k})),r.a.createElement("div",{className:"avatar__intro"},k&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:j,target:"_blank",rel:"noreferrer noopener"},k)),r.a.createElement("small",{className:"avatar__subtitle"},O)))))),r.a.createElement("section",{className:"markdown"},r.a.createElement(o.a,{components:i.a},v)),(N.length>0||g)&&r.a.createElement("footer",{className:"row margin-vert--lg"},N.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),N.map((function(e){var a=e.label,t=e.permalink;return r.a.createElement(s.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),g&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(s.a,{to:h.permalink,"aria-label":"Read more about "+w},r.a.createElement("strong",null,"Read More")))))}}}]);