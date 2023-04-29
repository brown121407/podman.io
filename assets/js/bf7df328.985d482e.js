"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[4658],{1320:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7294),l=a(2074),r=a(8201);const o=e=>{let{grid:t,display:a,layout:l,title:o,description:m}=e;return n.createElement("div",{className:`${t} ${a} ${l}`},n.createElement("h1",{className:"mb-6 max-w-sm text-purple-700 dark:text-purple-500 lg:max-w-lg "},o),n.createElement(r.Z,{text:m,styles:"leading-relaxed"}))},m=e=>{let{grid:t,display:a,layout:l,image:r={path:"images/raw/podman-2-196w-172h.png",alt:"Podman Logo"}}=e;return n.createElement("div",null,n.createElement("img",{src:r.path,alt:r.alt,className:`${t} ${a} ${l}`}))};const c=function(e){let{title:t,description:a,image:r,lightColor:c="white",darkColor:s="gray-900"}=e;return n.createElement("header",{className:`h-5/6  xl:h-96 bg-${c} dark:bg-${s}`},n.createElement("div",{className:"bg-gradient-to-r from-blue-500 to-blue-700 pt-2 dark:from-purple-700 dark:to-blue-900 lg:pt-8"},n.createElement(l.Z,null)),n.createElement("div",{className:"container grid justify-items-center gap-3 md:grid-cols-2"},n.createElement(o,{title:t,description:a,layout:"mt-12 lg:mt-0"}),n.createElement(m,{image:r,layout:"mb-8 lg:mb-0"})))}},3198:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294),l=a(8201);const r=function(e){let{title:t,description:a,textGradientStops:r="from-blue-700 via-blue-700 to-blue-900 dark:from-blue-500  dark:to-blue-700",textGradient:o=!1,textColor:m="text-gray-900",fontWeight:c,layout:s,bgColor:d}=e;const i=o?`bg-gradient-radial bg-clip-text text-transparent dark:bg-gradient-radial dark:text-transparent ${r}`:`${m}`;return n.createElement("header",{className:`${d}  ${s}`},n.createElement("div",{className:"container mx-auto mb-4 mt-12 text-center  lg:mt-16"},n.createElement("h2",{className:`${i} ${c}`},t),n.createElement(l.Z,{text:a,styles:"mx-auto my-4 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-100"})))}},2074:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294);const l=function(e){let{light:t="fill-white",dark:a="dark:fill-gray-900",width:l="100",height:r="130",grid:o,layout:m}=e;return n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:`${o} ${m}`,width:`${l}%`,viewBox:`-8620 -1968 1400 ${r}`},n.createElement("path",{className:`${t} ${a}`,d:"M-8629-1935v-10.614s78.25-20.752 155.47-20.752c131.788 0 169.95 23.309 233.125 23.309 108.108 0 138.56-21.268 208.573-21.268s108.701 25.151 233.283 25.151c124.581 0 120.881-43.085 251.082-22.031 112.227 18.148 187.023 22.031 264.45 7.825 76.957-14.12 79.117 14.113 79.014 18.38l.003 258h-1425v-258Z"}))}},8201:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),l=a(1262);const r=(0,n.lazy)((()=>a.e(5504).then(a.bind(a,5504))));const o=function(e){let{text:t,styles:a}=e;return n.createElement(l.Z,null,(()=>n.createElement(n.Suspense,{fallback:n.createElement("p",null,"text loading...")},n.createElement(r,{children:t,className:a}))))}},9244:(e,t,a)=>{a.r(t),a.d(t,{default:()=>N});var n=a(7294),l=a(7961),r=a(2406),o=a(3198),m=a(1320),c=a(2074),s=a(7462),d=a(8201);const i={command:"$ podman search httpd",code:" \n  INDEX       NAME                                  DESCRIPTION                    STARS OFFICIAL AUTOMATED\n  docker.io   docker.io/library/httpd               The Apache HTTP Server Project  3762             [OK]\n  docker.io   docker.io/centos/httpd-24-centos7     Platform for running Apache h... 40\n  quay.io     quay.io/centos7/httpd-24-centos-7     Platform for running Apache h... 0               [OK]\n  docker.io   docker.io/centos/httpd                                                 34              [OK]\n  redhat.com  registry.access.redhat.com/ubi8/httpd                                  0\n  quay.io     quay.io/redhattraining/httpd-parent                                    0               [OK]\n  \n\n\n",label:"Podman can search for images on remote registries with some simple keywords."},g={command:"$ podman search httpd --filter=is-official",code:"\n  INDEX       NAME                                  DESCRIPTION                    STARS OFFICIAL AUTOMATED\n  docker.io   docker.io/library/httpd               The Apache HTTP Server Project  3762    [OK]\n  $ podman pull docker.io/library/httpd\n  Trying to pull docker.io/library/httpd:latest...\n  Getting image source signatures\n  Copying blob ab86dc02235d done  \n  Copying blob ba1caf8ba86c done  \n  Copying blob eff15d958d66 done  \n  Copying blob 635a49ba2501 done  \n  Copying blob 600feb748d3c done  \n  Copying config d294bb32c2 done  \n  Writing manifest to image destination\n  Storing signatures\n  d294bb32c2073ecb5fb27e7802a1e5bec334af69cac361c27e6cb8546fdd14e7\n\n\n\n",label:"You can also enhance your search with filters.",extra:"Downloading (pulling) an image is easy, too."},p={command:"$ podman images",code:"\n  REPOSITORY               TAG         IMAGE ID      CREATED       SIZE\n  docker.io/library/httpd  latest      d294bb32c207  12 hours ago  148 MB\n  \n",label:"Podman can search for images on remote registries with some simple keywords.",extra:"**Note**: Podman searches in different registries. Therefore it is recommend to use the full image name (docker.io/library/httpd instead of httpd) to ensure that you are using the correct image."},u=e=>{const{command:t,code:a,label:l,extra:o,className:m}=e;return n.createElement("div",{className:`w-96 md:max-w-md ${m}`},n.createElement("div",{className:"m-4 max-w-md rounded-md bg-blue-700 p-4 text-center shadow-md dark:bg-blue-900 md:max-w-sm md:text-start lg:mx-0"},n.createElement(d.Z,{text:l,styles:"text-white dark:text-white"})),o&&n.createElement("div",{className:"mx-4 mb-2 mt-4 hidden max-w-md rounded-md bg-blue-700 p-4 shadow-md dark:bg-blue-900 md:mx-0 md:block md:max-w-sm"},n.createElement(d.Z,{text:o,styles:"text-white dark:text-white"})),n.createElement(r.Z,{language:"bash",showLineNumbers:!0,className:"mx-4 my-2 max-w-md md:hidden"},t,a))},h=e=>n.createElement("div",{className:`container hidden md:block ${e.className}`},n.createElement(r.Z,{language:"bash",showLineNumbers:!0},i.command,i.code,g.command,g.code,p.command,p.code));const b=function(){return n.createElement("div",{className:"container my-12 grid place-items-center gap-4 md:grid-cols-12 md:place-items-end"},n.createElement(h,{className:"-z-50 md:col-span-11 md:col-start-1 md:row-start-1 md:row-end-4 md:place-self-center lg:col-span-10 lg:col-start-1"}),n.createElement(u,(0,s.Z)({},i,{className:"row-start-1 md:col-span-5 md:col-start-9 md:self-end lg:col-span-3 lg:col-start-10"})),n.createElement(u,(0,s.Z)({},g,{className:"row-start-2 md:col-span-5 md:col-start-9 lg:col-span-3 lg:col-start-10"})),n.createElement(u,(0,s.Z)({},p,{className:"row-start-3 md:col-span-5 md:col-start-9 lg:col-span-3 lg:col-start-10"})))},E="Get Started with Podman",x="Podman is a utility provided as part of the libpod library. It can be used to create and maintain containers. The following tutorial will teach you how to set up Podman and perform some basic commands.",y="Getting Help",w="Help & manpages",f=()=>n.createElement("section",{className:" mt-12 bg-gradient-to-b from-purple-300 to-purple-700 dark:from-purple-500 dark:to-purple-900 lg:mt-20"},n.createElement(o.Z,{title:y,textColor:"text-blue-700 dark:text-gray-900"}),n.createElement("div",{className:"container"},n.createElement("header",{className:"my-4 text-center text-blue-300 dark:text-blue-100"},n.createElement("h3",null,w)),n.createElement("div",{className:"mx-auto"},n.createElement("div",{className:"container grid max-w-7xl grid-cols-1 gap-y-4 lg:grid-cols-2 lg:gap-y-0"},n.createElement("div",null,n.createElement("p",{className:"text-white dark:text-gray-100"},"For more details, you can review the manpages:")),n.createElement("div",{className:""},n.createElement(r.Z,{language:"bash",showLineNumbers:!0},"$ podman --help # get a list of all commands ","\n","$ podman subcommand --help # get info on a command"," ","\n"))),n.createElement("div",{className:"container grid max-w-7xl grid-cols-1 gap-y-4 lg:grid-cols-2 lg:gap-y-0"},n.createElement("div",null,n.createElement("p",{className:"text-white dark:text-gray-100"},"To get some help and find out how Podman is working, you can use the help.")),n.createElement("div",null,n.createElement(r.Z,{language:"bash",showLineNumbers:!0},"$ man podman ","\n","$ man podman subcommand ","\n"))))),n.createElement("div",{className:"container my-4 text-center"},n.createElement("p",{className:"text-white"},"'Please also reference the"," ",n.createElement("a",{href:"#",className:"text-blue-300"},n.createElement("strong",null,"Podman Troubleshooting Guide"))," ","to find known issues and tips on how to solve common configuration mistakes.'")),n.createElement(c.Z,null)),k=()=>n.createElement("section",null,n.createElement(o.Z,{textColor:"text-purple-700 dark:text-purple-500",title:"Searching, pulling, and listing images"}),n.createElement(b,null));const N=function(){return n.createElement(l.Z,null,n.createElement(m.Z,{title:E,description:x}),n.createElement(f,null),n.createElement(k,null))}}}]);