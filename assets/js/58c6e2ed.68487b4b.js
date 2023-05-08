"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[5922],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>f});var o=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=o.createContext({}),s=function(t){var e=o.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},m=function(t){var e=s(t.components);return o.createElement(l.Provider,{value:e},t.children)},i="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,l=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),i=s(n),u=a,f=i["".concat(l,".").concat(u)]||i[u]||c[u]||r;return n?o.createElement(f,p(p({ref:e},m),{},{components:n})):o.createElement(f,p({ref:e},m))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,p=new Array(r);p[0]=u;var d={};for(var l in e)hasOwnProperty.call(e,l)&&(d[l]=e[l]);d.originalType=t,d[i]="string"==typeof t?t:a,p[1]=d;for(var s=2;s<r;s++)p[s]=n[s];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6652:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>r,metadata:()=>d,toc:()=>s});var o=n(7462),a=(n(7294),n(3905));const r={},p=void 0,d={unversionedId:"commands/podman-pod/podman-pod-start",id:"commands/podman-pod/podman-pod-start",title:"podman-pod-start",description:"% podman-pod-start 1",source:"@site/docs/commands/podman-pod/podman-pod-start.md",sourceDirName:"commands/podman-pod",slug:"/commands/podman-pod/podman-pod-start",permalink:"/docs/commands/podman-pod/podman-pod-start",draft:!1,editUrl:"https://github.com/containers/website-new/docs/commands/podman-pod/podman-pod-start.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-pod-rm",permalink:"/docs/commands/podman-pod/podman-pod-rm"},next:{title:"podman-pod-stats",permalink:"/docs/commands/podman-pod/podman-pod-stats"}},l={},s=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"OPTIONS",id:"options",level:2},{value:"<strong>--all</strong>, <strong>-a</strong>",id:"--all--a",level:4},{value:"EXAMPLE",id:"example",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"HISTORY",id:"history",level:2}],m={toc:s},i="wrapper";function c(t){let{components:e,...n}=t;return(0,a.kt)(i,(0,o.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"% podman-pod-start 1"),(0,a.kt)("h2",{id:"name"},"NAME"),(0,a.kt)("p",null,"podman","-","pod","-","start - Start one or more pods"),(0,a.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"podman pod start")," ","[",(0,a.kt)("em",{parentName:"p"},"options"),"]"," ",(0,a.kt)("em",{parentName:"p"},"pod")," ..."),(0,a.kt)("h2",{id:"description"},"DESCRIPTION"),(0,a.kt)("p",null,"Start containers in one or more pods. You may use pod IDs or names as input. The pod must have a container attached\nto be started."),(0,a.kt)("h2",{id:"options"},"OPTIONS"),(0,a.kt)("h4",{id:"--all--a"},(0,a.kt)("strong",{parentName:"h4"},"--all"),", ",(0,a.kt)("strong",{parentName:"h4"},"-a")),(0,a.kt)("p",null,"Starts all pods"),(0,a.kt)("p",null,"@@option latest"),(0,a.kt)("p",null,"@@option pod-id-file.pod"),(0,a.kt)("h2",{id:"example"},"EXAMPLE"),(0,a.kt)("p",null,"Start pod with a given name"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"podman pod start mywebserverpod\n")),(0,a.kt)("p",null,"Start pods with given IDs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"podman pod start 860a4b23 5421ab4\n")),(0,a.kt)("p",null,"Start the latest pod created by Podman"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"podman pod start --latest\n")),(0,a.kt)("p",null,"Start all pods"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"podman pod start --all\n")),(0,a.kt)("p",null,"Start pod using ID specified in a given file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"podman pod start --pod-id-file /path/to/id/file\n")),(0,a.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/podman"},"podman(1)")),", ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/commands/podman-pod/"},"podman-pod(1)")),", ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/commands/podman-pod/podman-pod-stop"},"podman-pod-stop(1)"))),(0,a.kt)("h2",{id:"history"},"HISTORY"),(0,a.kt)("p",null,"July 2018, Adapted from podman start man page by Peter Hunt ",(0,a.kt)("a",{parentName:"p",href:"mailto:pehunt@redhat.com"},"pehunt@redhat.com")))}c.isMDXComponent=!0}}]);