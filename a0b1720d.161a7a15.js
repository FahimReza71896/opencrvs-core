(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(10),i=(n(0),n(193)),o={id:"audit",title:"Audit"},c={id:"support_functions/audit",title:"Audit",description:"This functionality creates accountability within the OpenCRVS system. It tracks every interaction a user makes as well as every action done to a record. Each of these interactions can be viewed by a Registrar or a Registration Manager.",source:"@site/docs/support_functions/Audit_a6aeefca07c14e82a06b79a57db74ae9.md",permalink:"/opencrvs-core/docs/support_functions/audit",sidebar:"docs",previous:{title:"Performance management",permalink:"/opencrvs-core/docs/support_functions/performanceManagement"},next:{title:"Learning",permalink:"/opencrvs-core/docs/support_functions/learning"}},s=[{value:"Configuration",id:"configuration",children:[]},{value:"User Stories",id:"user-stories",children:[]},{value:"<em>Coming Soon</em>",id:"coming-soon",children:[{value:"Audit User",id:"audit-user",children:[]},{value:"Audit Record",id:"audit-record",children:[]}]}],u={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This functionality creates accountability within the OpenCRVS system. It tracks every interaction a user makes as well as every action done to a record. Each of these interactions can be viewed by a Registrar or a Registration Manager."),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"Who can access what audit information is configurable based on country requirements."),Object(i.b)("h2",{id:"user-stories"},"User Stories"),Object(i.b)("p",null,"As someone who needs to investigate a record:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"I want to be able to search for a record using the tracking ID, BRN, Name of Newborn/Deceased, Date of event, Location of Event"),Object(i.b)("li",{parentName:"ul"},"I want to be able view the history of a record, along with who did what to the record, and when, so that I can understand a record's history and identify potential mistakes / wrongdoing."),Object(i.b)("li",{parentName:"ul"},"I want to be able to easily see the profile of the user who conducted each action, including their office and contact number so I can get in touch with them"),Object(i.b)("li",{parentName:"ul"},"I want to be able to easily navigate to the user profile and disable their account if they have been conducting activities that are inappropriate")),Object(i.b)("h1",{id:"functionality"},"Functionality"),Object(i.b)("h2",{id:"coming-soon"},Object(i.b)("em",{parentName:"h2"},"Coming Soon")),Object(i.b)("h3",{id:"audit-user"},"Audit User"),Object(i.b)("p",null,"Any user can be audited. Depending on the configured permissions, all actions taken by a user can be viewed and investigated."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Recommended"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("strong",{parentName:"li"},"Registrar")," can audit the actions of the ",Object(i.b)("strong",{parentName:"li"},"Registration")," and ",Object(i.b)("strong",{parentName:"li"},"Field Agents")," associated with their office."),Object(i.b)("li",{parentName:"ul"},"the ",Object(i.b)("strong",{parentName:"li"},"Registration Manager")," can audit the actions of any agent. This should be done at frequent intervals to continuously monitor and audit performance as well as when any unusual activities are identified.")),Object(i.b)("h3",{id:"audit-record"},"Audit Record"),Object(i.b)("p",null,"Any record can be audited. Depending on the configured permissions, all records can be viewed and investigated."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Recommended"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("strong",{parentName:"li"},"Registrar")," can audit records associated with their office."),Object(i.b)("li",{parentName:"ul"},"the ",Object(i.b)("strong",{parentName:"li"},"Registration Manager")," can audit the any record.")))}l.isMDXComponent=!0},193:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),p=r,f=d["".concat(o,".").concat(p)]||d[p]||b[p]||i;return n?a.a.createElement(f,c(c({ref:t},u),{},{components:n})):a.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);