"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[3562],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},m=Object.keys(e);for(a=0;a<m.length;a++)n=m[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(a=0;a<m.length;a++)n=m[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},i="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,m=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),i=l(n),u=r,y=i["".concat(d,".").concat(u)]||i[u]||c[u]||m;return n?a.createElement(y,o(o({ref:t},p),{},{components:n})):a.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var m=n.length,o=new Array(m);o[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[i]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<m;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9454:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>m,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const m={},o=void 0,s={unversionedId:"commands/podman-system/podman-system",id:"commands/podman-system/podman-system",title:"podman-system",description:"% podman-system 1",source:"@site/docs/commands/podman-system/podman-system.md",sourceDirName:"commands/podman-system",slug:"/commands/podman-system/",permalink:"/website-new/docs/commands/podman-system/",draft:!1,editUrl:"https://github.com/containers/website-new/docs/commands/podman-system/podman-system.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-stop",permalink:"/website-new/docs/commands/podman-stop"},next:{title:"podman-system-df",permalink:"/website-new/docs/commands/podman-system/podman-system-df"}},d={},l=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"COMMANDS",id:"commands",level:2},{value:"SEE ALSO",id:"see-also",level:2}],p={toc:l},i="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(i,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"% podman-system 1"),(0,r.kt)("h2",{id:"name"},"NAME"),(0,r.kt)("p",null,"podman","-","system - Manage podman"),(0,r.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman system")," ",(0,r.kt)("em",{parentName:"p"},"subcommand")),(0,r.kt)("h2",{id:"description"},"DESCRIPTION"),(0,r.kt)("p",null,"The system command allows management of the podman systems"),(0,r.kt)("h2",{id:"commands"},"COMMANDS"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Command"),(0,r.kt)("th",{parentName:"tr",align:null},"Man Page"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connection"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-system-connection/"},"podman-system-connection(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Manage the destination(s) for Podman service(s)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"df"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-system/podman-system-df"},"podman-system-df(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Show podman disk usage.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"events"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-events"},"podman-events(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Monitor Podman events")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"info"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-info"},"podman-info(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Displays Podman related system information.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"migrate"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-system/podman-system-migrate"},"podman-system-migrate(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Migrate existing containers to a new podman version.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"prune"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-system/podman-system-prune"},"podman-system-prune(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Remove all unused pods, containers, images, networks, and volume data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"renumber"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-system/podman-system-renumber"},"podman-system-renumber(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Migrate lock numbers to handle a change in maximum number of locks.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reset"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-system/podman-system-reset"},"podman-system-reset(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Reset storage back to initial state.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-system/podman-system-service"},"podman-system-service(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Run an API service")))),(0,r.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/website-new/docs/podman"},"podman(1)"))))}c.isMDXComponent=!0}}]);