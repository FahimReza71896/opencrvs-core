(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{171:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(10),i=(r(0),r(204)),a={id:"vitalStatisticsExport",title:"Vital statistics export"},c={id:"core_functions/vitalStatisticsExport",title:"Vital statistics export",description:"This functionality allows data gathered through the civil registration process to be exported in CSV format for use in vital statistics systems.",source:"@site/docs/core_functions/Vital_statistics_export_0d0e040a44104fe294484efc3ba4479f.md",permalink:"/opencrvs-core/docs/core_functions/vitalStatisticsExport",sidebar:"docs",previous:{title:"Issue a certificate",permalink:"/opencrvs-core/docs/core_functions/issueACertificate"},next:{title:"Correct record",permalink:"/opencrvs-core/docs/core_functions/correctRecord"}},s=[{value:"Configuration",id:"configuration",children:[]},{value:"User Stories",id:"user-stories",children:[{value:"Export report",id:"export-report",children:[]}]},{value:"<em>Coming Soon</em>",id:"coming-soon",children:[]}],l={rightToc:s};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This functionality allows data gathered through the civil registration process to be exported in CSV format for use in vital statistics systems."),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"Defined fields required for inclusion in export."),Object(i.b)("h2",{id:"user-stories"},"User Stories"),Object(i.b)("p",null,"As a ",Object(i.b)("strong",{parentName:"p"},"member of the NSO"),", I want to be able to export a vital statistics extract so that I can upload it and use it in a vital statistics system."),Object(i.b)("p",null,"As a ",Object(i.b)("strong",{parentName:"p"},"member of the NSO"),", I want to be able to select the parameters of data that I want for analysis, so that I can see the data that is of use for me."),Object(i.b)("h1",{id:"functionality"},"Functionality"),Object(i.b)("h3",{id:"export-report"},"Export report"),Object(i.b)("p",null,"Any user with access to reports can download a CSV file of the reports that have been defined for that country. The registration authority should work with the vital statistics agency to agree on the content of these reports."),Object(i.b)("h2",{id:"coming-soon"},Object(i.b)("em",{parentName:"h2"},"Coming Soon")),Object(i.b)("p",null,"The user can change the parameters of the reports before exporting it."))}p.isMDXComponent=!0},204:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,d=u["".concat(a,".").concat(b)]||u[b]||f[b]||i;return r?o.a.createElement(d,c(c({ref:t},l),{},{components:r})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);