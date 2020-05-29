(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{195:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(2),i=n(10),o=(n(0),n(204)),a=n(206),s={id:"login",title:"Login"},c={id:"support_functions/login",title:"Login",description:"This functionality supports users logging in for the first time as well as the ongoing secure identification and provision of access to users.",source:"@site/docs/support_functions/Login_8db5ac07d5ed48599beebedfb58dd273.mdx",permalink:"/opencrvs-core/docs/support_functions/login",sidebar:"docs",previous:{title:"Record verification",permalink:"/opencrvs-core/docs/core_functions/recordVerification"},next:{title:"Performance management",permalink:"/opencrvs-core/docs/support_functions/performanceManagement"}},u=[{value:"Configuration",id:"configuration",children:[]},{value:"User Stories",id:"user-stories",children:[{value:"Set security questions",id:"set-security-questions",children:[]},{value:"Login with username &amp; password",id:"login-with-username--password",children:[]},{value:"Unlock application with PIN",id:"unlock-application-with-pin",children:[]},{value:"Forgot username or password",id:"forgot-username-or-password",children:[]}]}],l={rightToc:u};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This functionality supports users logging in for the first time as well as the ongoing secure identification and provision of access to users."),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"The frequency of when the user is required to login with username and password can be configured."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Recommended:")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"In countries where connectivity is good, you can set this more frequently e.g. the user must login with username and password every week."),Object(o.b)("li",{parentName:"ul"},"In countries where connectivity is less good, you can set this less frequently so that users can unlock the application primarily using the PIN.")),Object(o.b)("p",null,"NB. Security considerations should be taken into account when making this decision."),Object(o.b)("h2",{id:"user-stories"},"User Stories"),Object(o.b)("p",null,"As ",Object(o.b)("strong",{parentName:"p"},"a user"),", I want to be able to be able to login to the application so that I can conduct my work."),Object(o.b)("p",null,"As ",Object(o.b)("strong",{parentName:"p"},"a user"),", I want to be able to be able to reset my password in case I forget it, so that I can log back in and continue working."),Object(o.b)("p",null,"As ",Object(o.b)("strong",{parentName:"p"},"a user"),", I want to be able to reset my username in case I forget it, so that I can log back in and continue working."),Object(o.b)("p",null,"As ",Object(o.b)("strong",{parentName:"p"},"a use"),"r I want to be able to easily access the application without using my username and password every time, so that I can save time."),Object(o.b)("h1",{id:"functionality"},"Functionality"),Object(o.b)("h3",{id:"set-security-questions"},"Set security questions"),Object(o.b)("p",null,"The first the time user logs in they use a username and password that is generated for them based on their first and last name. On first login, the user is required to:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Choose a new secure password"),Object(o.b)("li",{parentName:"ol"},"Set 3 security questions that can be used to verify identity at a later point"),Object(o.b)("li",{parentName:"ol"},"Confirm their details and update as required")),Object(o.b)("img",{alt:"Security_questions",src:Object(a.a)("assets/support_functions/Login_8db5ac07d5ed48599beebedfb58dd273/Security_questions.png")}),Object(o.b)("img",{alt:"Set_password",src:Object(a.a)("assets/support_functions/Login_8db5ac07d5ed48599beebedfb58dd273/Set_password.png")}),Object(o.b)("h3",{id:"login-with-username--password"},"Login with username & password"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"First login")),Object(o.b)("p",null,"Once the username and password is set, the user will login for the first time. This login process is the same from this point forward and will be required at a frequency as per the configuration made. In Zambia, this is set to request login details once per week."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Two-factor Authentication:")," When the user logs in with their username and password, they will be sent a 6 digit verification code to the mobile phone number associated with their account. Upon entering this code, the user will be taken to the homepage of their application, dependent on their ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../system_overview/user_types/overviewUserTypes"}),"User types"),"."),Object(o.b)("h3",{id:"unlock-application-with-pin"},"Unlock application with PIN"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"First login")),Object(o.b)("p",null,"The first time the user logs into the application with their username and password, they will be prompted to enter a 4 digit PIN. This PIN will allow them to quickly access the application when the application locks itself, preventing access by anyone other than the user and meaning the user does not need to enter their username and password and authenticate every time they use the app."),Object(o.b)("img",{alt:"FA_Tablet_SetPin-2",src:Object(a.a)("assets/support_functions/Login_8db5ac07d5ed48599beebedfb58dd273/FA_Tablet_SetPin-2.png")}),Object(o.b)("img",{alt:"Tablet_7inch",src:Object(a.a)("assets/support_functions/Login_8db5ac07d5ed48599beebedfb58dd273/Tablet_7inch.1.1.1.1.1.1.1.1.png")}),Object(o.b)("h3",{id:"forgot-username-or-password"},"Forgot username or password"),Object(o.b)("p",null,'If the user forgets their username or password, they can create a new one by following the "Can\'t Login" steps from the login screen.'),Object(o.b)("p",null,"The user is required to:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Provide the phone number associated with the account"),Object(o.b)("li",{parentName:"ol"},"Enter a verification code sent to them on SMS"),Object(o.b)("li",{parentName:"ol"},"Answer one of the 3 security questions we asked them to create during the onboarding process")),Object(o.b)("p",null,"Upon successful completion of these steps, the user can create a new password or is sent a reminder of their username."))}p.isMDXComponent=!0},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,h=p["".concat(a,".").concat(d)]||p[d]||b[d]||o;return n?i.a.createElement(h,s(s({ref:t},u),{},{components:n})):i.a.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},205:function(e,t,n){"use strict";var r=n(0),i=n(55);t.a=function(){return Object(r.useContext)(i.a)}},206:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(207);var r=n(205);function i(e){var t=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},207:function(e,t,n){"use strict";var r=n(8),i=n(20),o=n(208),a="".startsWith;r(r.P+r.F*n(209)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),n=i(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return a?a.call(t,r,n):t.slice(n,n+r.length)===r}})},208:function(e,t,n){var r=n(76),i=n(28);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(e))}},209:function(e,t,n){var r=n(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(i){}}return!0}}}]);