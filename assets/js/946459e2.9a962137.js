"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[2122],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=o.createContext({}),c=function(e){var t=o.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(m.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,m=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=c(n),p=r,h=l["".concat(m,".").concat(p)]||l[p]||u[p]||a;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s[l]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1675:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={},i="Podman-remote client for Windows with QEMU VM",s={unversionedId:"tutorials/qemu-remote-tutorial",id:"tutorials/qemu-remote-tutorial",title:"Podman-remote client for Windows with QEMU VM",description:"---",source:"@site/docs/tutorials/qemu-remote-tutorial.md",sourceDirName:"tutorials",slug:"/tutorials/qemu-remote-tutorial",permalink:"/docs/tutorials/qemu-remote-tutorial",draft:!1,editUrl:"https://github.com/containers/website-new/docs/tutorials/qemu-remote-tutorial.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman_tutorial_cn",permalink:"/docs/tutorials/podman_tutorial_cn"},next:{title:"Podman remote-client tutorial",permalink:"/docs/tutorials/remote_client"}},m={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Obtaining and installing",id:"obtaining-and-installing",level:2},{value:"QEMU",id:"qemu",level:3},{value:"Podman",id:"podman",level:3},{value:"Older Podman releases",id:"older-podman-releases",level:4},{value:"SSH",id:"ssh",level:3},{value:"Ignition for FCOS",id:"ignition-for-fcos",level:3},{value:"Launching",id:"launching",level:2},{value:"gvproxy",id:"gvproxy",level:3},{value:"QEMU",id:"qemu-1",level:3},{value:"First time launch extras",id:"first-time-launch-extras",level:3},{value:"Add new connection to Podman",id:"add-new-connection-to-podman",level:3},{value:"Optional",id:"optional",level:4},{value:"Using Podman",id:"using-podman",level:2},{value:"Shutting down the machine",id:"shutting-down-the-machine",level:2}],d={toc:c},l="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(l,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"podman-remote-client-for-windows-with-qemu-vm"},"Podman-remote client for Windows with QEMU VM"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"NOTE:"))," For running Podman on Windows, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorials/podman-for-windows"},"Podman for Windows")," guide, which uses the recommended approach of a Podman-managed Linux backend. For Mac, see the ",(0,r.kt)("a",{parentName:"p",href:"https://podman.io/getting-started/installation"},"Podman installation instructions"),". This guide covers the advanced usage of Podman with a custom Linux VM."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"This is an experimental setup using QEMU VM for running Podman for the already supported ",(0,r.kt)("a",{parentName:"p",href:"https://docs.podman.io/en/latest/markdown/podman-remote.1.html"},"Podman-remote")," client on Windows.\nThe officially supported and recommended way of running Podman on Windows is using ",(0,r.kt)("a",{parentName:"p",href:"https://docs.podman.io/en/latest/markdown/podman-machine.1.html"},"Podman machine"),"."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Windows 10 Build 18362 or later (Build 19044/Version 21H2 or later recommended)"),(0,r.kt)("li",{parentName:"ul"},"SSH client feature installed on the machine"),(0,r.kt)("li",{parentName:"ul"},"Hyper-V acceleration should be operational on the machine"),(0,r.kt)("li",{parentName:"ul"},"Direcroty ",(0,r.kt)("inlineCode",{parentName:"li"},"C:\\qemu-remote\\")," will be used for storing needed assets"),(0,r.kt)("li",{parentName:"ul"},"Port ",(0,r.kt)("inlineCode",{parentName:"li"},"57561")," is free to use for ssh over a loopback interface")),(0,r.kt)("h2",{id:"obtaining-and-installing"},"Obtaining and installing"),(0,r.kt)("h3",{id:"qemu"},"QEMU"),(0,r.kt)("p",null,"Download QEMU (7.2.0 minimal) from ",(0,r.kt)("a",{parentName:"p",href:"https://qemu.weilnetz.de/w64/"},"https://qemu.weilnetz.de/w64/")),(0,r.kt)("p",null,"Then download the Fedora CoreOS (FCOS) image for QEMU from ",(0,r.kt)("a",{parentName:"p",href:"https://getfedora.org/coreos/download?tab=metal_virtualized&stream=testing&arch=x86_64"},"https://getfedora.org/coreos/download?tab=metal_virtualized&stream=testing&arch=x86_64")),(0,r.kt)("p",null,"One will need ",(0,r.kt)("inlineCode",{parentName:"p"},".xz")," format extraction tool like xz itself or 7-zip. Use it to extract the ",(0,r.kt)("inlineCode",{parentName:"p"},".qcow2")," image to C:\\qemu-remote\\fedora-coreos-37.20221127.2.0-qemu.x86_64.qcow2"),(0,r.kt)("p",null,"With xz the command line (when run from the same directory) will be"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"xz -d fedora-coreos-37.20221127.2.0-qemu.x86_64.qcow2.xz\n")),(0,r.kt)("h3",{id:"podman"},"Podman"),(0,r.kt)("p",null,"Download and install the latest release of Podman for Windows. Podman releases can be obtained from the official Podman GitHub release page: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/containers/podman/releases"},"https://github.com/containers/podman/releases")),(0,r.kt)("h4",{id:"older-podman-releases"},"Older Podman releases"),(0,r.kt)("p",null,"When using older Podman releases (4.3.x and earlier), where ",(0,r.kt)("inlineCode",{parentName:"p"},"gvproxy.exe")," is missing from the installation directory,\nit could be obtained from the official releases ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/containers/gvisor-tap-vsock/releases"},"https://github.com/containers/gvisor-tap-vsock/releases"),"\nOne would need version ",(0,r.kt)("inlineCode",{parentName:"p"},"0.5.0")," or a more recent release. Download ",(0,r.kt)("inlineCode",{parentName:"p"},"gvproxy-windows.exe")," and copy it to\nthe Podman installation directory (or any other location, which is added to the PATH environment variable)\nrenaming the binary to ",(0,r.kt)("inlineCode",{parentName:"p"},"gvproxy.exe"),"."),(0,r.kt)("h3",{id:"ssh"},"SSH"),(0,r.kt)("p",null,"Generate ssh keys with an empty passphrase"),(0,r.kt)("p",null,"ssh-keygen -t ed25519 -f C:\\qemu-remote\\remote"),(0,r.kt)("h3",{id:"ignition-for-fcos"},"Ignition for FCOS"),(0,r.kt)("p",null,"Create ignition file C:\\qemu-remote\\remote.ign with the content of"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"ignition":{"config":{"replace":{"verification":{}}},"proxy":{},"security":{"tls":{}},"timeouts":{},"version":"3.2.0"},"passwd":{"users":[{"name":"core","sshAuthorizedKeys":["YOURSSHKEYHERE"],"uid":501},{"name":"root","sshAuthorizedKeys":["YOURSSHKEYHERE"]}]},"storage":{"directories":[{"group":{"name":"core"},"path":"/home/core/.config","user":{"name":"core"},"mode":493},{"group":{"name":"core"},"path":"/home/core/.config/containers","user":{"name":"core"},"mode":493},{"group":{"name":"core"},"path":"/home/core/.config/systemd","user":{"name":"core"},"mode":493},{"group":{"name":"core"},"path":"/home/core/.config/systemd/user","user":{"name":"core"},"mode":493},{"group":{"name":"core"},"path":"/home/core/.config/systemd/user/default.target.wants","user":{"name":"core"},"mode":493},{"group":{"name":"root"},"path":"/etc/containers/registries.conf.d","user":{"name":"root"},"mode":493},{"group":{"name":"root"},"path":"/etc/systemd/system.conf.d","user":{"name":"root"},"mode":493},{"group":{"name":"root"},"path":"/etc/environment.d","user":{"name":"root"},"mode":493}],"files":[{"group":{"name":"core"},"path":"/home/core/.config/systemd/user/linger-example.service","user":{"name":"core"},"contents":{"source":"data:,%5BUnit%5D%0ADescription=A%20systemd%20user%20unit%20demo%0AAfter=network-online.target%0AWants=network-online.target%20podman.socket%0A%5BService%5D%0AExecStart=%2Fusr%2Fbin%2Fsleep%20infinity%0A","verification":{}},"mode":484},{"group":{"name":"core"},"path":"/home/core/.config/containers/containers.conf","user":{"name":"core"},"contents":{"source":"data:,%5Bcontainers%5D%0Anetns=%22bridge%22%0A","verification":{}},"mode":484},{"group":{"name":"root"},"overwrite":true,"path":"/etc/subuid","user":{"name":"root"},"contents":{"source":"data:,core:100000:1000000","verification":{}},"mode":484},{"group":{"name":"root"},"overwrite":true,"path":"/etc/subgid","user":{"name":"root"},"contents":{"source":"data:,core:100000:1000000","verification":{}},"mode":484},{"group":{"name":"root"},"path":"/etc/systemd/system/user@.service.d/delegate.conf","user":{"name":"root"},"contents":{"source":"data:,%5BService%5D%0ADelegate=memory%20pids%20cpu%20io%0A","verification":{}},"mode":420},{"group":{"name":"core"},"path":"/var/lib/systemd/linger/core","user":{"name":"core"},"contents":{"verification":{}},"mode":420},{"group":{"name":"root"},"path":"/etc/containers/containers.conf","user":{"name":"root"},"contents":{"source":"data:,%5Bengine%5D%0Amachine_enabled=true%0A","verification":{}},"mode":420},{"group":{"name":"root"},"path":"/etc/containers/podman-machine","user":{"name":"root"},"contents":{"source":"data:,qemu%0A","verification":{}},"mode":420},{"group":{"name":"root"},"path":"/etc/containers/registries.conf.d/999-podman-machine.conf","user":{"name":"root"},"contents":{"source":"data:,unqualified-search-registries=%5B%22docker.io%22%5D%0A","verification":{}},"mode":420},{"group":{},"path":"/etc/tmpfiles.d/podman-docker.conf","user":{},"contents":{"source":"data:,L+%20%20%2Frun%2Fdocker.sock%20%20%20-%20%20%20%20-%20%20%20%20-%20%20%20%20%20-%20%20%20%2Frun%2Fpodman%2Fpodman.sock%0A","verification":{}},"mode":420},{"group":{"name":"root"},"path":"/etc/profile.d/docker-host.sh","user":{"name":"root"},"contents":{"source":"data:,export%20DOCKER_HOST=%22unix:%2F%2F$%28podman%20info%20-f%20%22%7B%7B.Host.RemoteSocket.Path%7D%7D%22%29%22%0A","verification":{}},"mode":420}],"links":[{"group":{"name":"core"},"path":"/home/core/.config/systemd/user/default.target.wants/linger-example.service","user":{"name":"core"},"hard":false,"target":"/home/core/.config/systemd/user/linger-example.service"},{"group":{"name":"root"},"overwrite":true,"path":"/usr/local/bin/docker","user":{"name":"root"},"hard":false,"target":"/usr/bin/podman"},{"group":{"name":"root"},"overwrite":false,"path":"/etc/localtime","user":{"name":"root"},"hard":false,"target":"\\\\usr\\\\share\\\\zoneinfo"}]},"systemd":{"units":[{"enabled":true,"name":"podman.socket"},{"contents":"[Unit]\\nRequires=dev-virtio\\\\\\\\x2dports-vport1p1.device\\nAfter=remove-moby.service sshd.socket sshd.service\\nOnFailure=emergency.target\\nOnFailureJobMode=isolate\\n[Service]\\nType=oneshot\\nRemainAfterExit=yes\\nExecStart=/bin/sh -c \'/usr/bin/echo Ready \\u003e/dev/vport1p1\'\\n[Install]\\nRequiredBy=default.target\\n","enabled":true,"name":"ready.service"},{"enabled":false,"mask":true,"name":"docker.service"},{"enabled":false,"mask":true,"name":"docker.socket"},{"contents":"[Unit]\\nDescription=Remove moby-engine\\n# Run once for the machine\\nAfter=systemd-machine-id-commit.service\\nBefore=zincati.service\\nConditionPathExists=!/var/lib/%N.stamp\\n\\n[Service]\\nType=oneshot\\nRemainAfterExit=yes\\nExecStart=/usr/bin/rpm-ostree override remove moby-engine\\nExecStart=/usr/bin/rpm-ostree ex apply-live --allow-replacement\\nExecStartPost=/bin/touch /var/lib/%N.stamp\\n\\n[Install]\\nWantedBy=default.target\\n","enabled":true,"name":"remove-moby.service"},{"contents":"[Unit]\\nDescription=Environment setter from QEMU FW_CFG\\n[Service]\\nType=oneshot\\nRemainAfterExit=yes\\nEnvironment=FWCFGRAW=/sys/firmware/qemu_fw_cfg/by_name/opt/com.coreos/environment/raw\\nEnvironment=SYSTEMD_CONF=/etc/systemd/system.conf.d/default-env.conf\\nEnvironment=ENVD_CONF=/etc/environment.d/default-env.conf\\nEnvironment=PROFILE_CONF=/etc/profile.d/default-env.sh\\nExecStart=/usr/bin/bash -c \'/usr/bin/test -f ${FWCFGRAW} \\u0026\\u0026\\\\\\n\\techo \\"[Manager]\\\\n#Got from QEMU FW_CFG\\\\nDefaultEnvironment=$(/usr/bin/base64 -d ${FWCFGRAW} | sed -e \\"s+|+ +g\\")\\\\n\\" \\u003e ${SYSTEMD_CONF} ||\\\\\\n\\techo \\"[Manager]\\\\n#Got nothing from QEMU FW_CFG\\\\n#DefaultEnvironment=\\\\n\\" \\u003e ${SYSTEMD_CONF}\'\\nExecStart=/usr/bin/bash -c \'/usr/bin/test -f ${FWCFGRAW} \\u0026\\u0026 (\\\\\\n\\techo \\"#Got from QEMU FW_CFG\\"\\u003e ${ENVD_CONF};\\\\\\n\\tIFS=\\"|\\";\\\\\\n\\tfor iprxy in $(/usr/bin/base64 -d ${FWCFGRAW}); do\\\\\\n\\t\\techo \\"$iprxy\\" \\u003e\\u003e ${ENVD_CONF}; done ) || \\\\\\n\\techo \\"#Got nothing from QEMU FW_CFG\\"\\u003e ${ENVD_CONF}\'\\nExecStart=/usr/bin/bash -c \'/usr/bin/test -f ${FWCFGRAW} \\u0026\\u0026 (\\\\\\n\\techo \\"#Got from QEMU FW_CFG\\"\\u003e ${PROFILE_CONF};\\\\\\n\\tIFS=\\"|\\";\\\\\\n\\tfor iprxy in $(/usr/bin/base64 -d ${FWCFGRAW}); do\\\\\\n\\t\\techo \\"export $iprxy\\" \\u003e\\u003e ${PROFILE_CONF}; done ) || \\\\\\n\\techo \\"#Got nothing from QEMU FW_CFG\\"\\u003e ${PROFILE_CONF}\'\\nExecStartPost=/usr/bin/systemctl daemon-reload\\n[Install]\\nWantedBy=sysinit.target\\n","enabled":true,"name":"envset-fwcfg.service"}]}}\n')),(0,r.kt)("p",null,'Replace "YOURSSHKEYHERE" with the actual pub keys you generated.'),(0,r.kt)("h2",{id:"launching"},"Launching"),(0,r.kt)("h3",{id:"gvproxy"},"gvproxy"),(0,r.kt)("p",null,"One needs to run gvproxy first to make it ready for the QEMU VM launched afterward. Run it with the command below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"gvproxy.exe -listen-qemu unix://C:/qemu-remote/vlan_remote.sock -pid-file C:\\qemu-remote\\proxy.pid -ssh-port 57561 -forward-sock C:\\qemu-remote\\podman.sock -forward-dest /run/user/501/podman/podman.sock -forward-user core -forward-identity C:\\qemu-remote\\remote\n")),(0,r.kt)("h3",{id:"qemu-1"},"QEMU"),(0,r.kt)("p",null,"Launch QEMU with the following command (the following configures it to use 4 CPUs and 8 GB RAM, but it could be adjusted for less):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"qemu-system-x86_64w.exe -m 8192 -smp 4 -fw_cfg name=opt/com.coreos/config,file=C:\\qemu-remote\\remote.ign -netdev stream,id=vlan,server=off,addr.type=unix,addr.path=C:\\qemu-remote\\vlan_remote.sock -device virtio-net-pci,netdev=vlan,mac=5a:94:ef:e4:0c:ee -device virtio-serial -chardev socket,path=C:\\qemu-remote\\ready.sock,server=on,wait=off,id=apodman-machine-default_ready -device virtserialport,chardev=apodman-machine-default_ready,name=org.fedoraproject.port.0 -pidfile C:\\qemu-remote\\vm.pid -machine q35,accel=whpx:tcg -cpu max,vmx=off,monitor=off -drive if=virtio,file=C:\\qemu-remote\\fedora-coreos-37.20221127.2.0-qemu.x86_64.qcow2\n")),(0,r.kt)("h3",{id:"first-time-launch-extras"},"First time launch extras"),(0,r.kt)("p",null,"Observe QEMU loading and wait for the message of SSH keys being provisioned to the machine. Next, before making the first ssh connection, one would need to add it to known hosts.\nWe are using ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost")," to force IPv4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ssh-keyscan -p 57561 127.0.0.1 >> %USERPROFILE%\\.ssh\\known_hosts\n")),(0,r.kt)("h3",{id:"add-new-connection-to-podman"},"Add new connection to Podman"),(0,r.kt)("p",null,'Create a connection named "qemuremote"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"podman system connection add --identity C:\\qemu-remote\\remote -p 57561 qemuremote ssh://core@127.0.0.1\n")),(0,r.kt)("h4",{id:"optional"},"Optional"),(0,r.kt)("p",null,"Make it default for simplicity of operation/testing"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"podman system connection default qemuremote\n")),(0,r.kt)("h2",{id:"using-podman"},"Using Podman"),(0,r.kt)("p",null,'Choose the active connection to be "qemuremote" (not needed if one made it default).'),(0,r.kt)("p",null,"Run some basic network enabled workload:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"podman run -d --rm -p 8080:80 nginx\n")),(0,r.kt)("p",null,"Test it with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl http -v http://localhost:8080\n")),(0,r.kt)("h2",{id:"shutting-down-the-machine"},"Shutting down the machine"),(0,r.kt)("p",null,"The built-in machinery of Podman machine will not work for a custom machine. One needs to gracefully shut it down by connecting via SSH:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ssh -i C:\\qemu-remote\\remote -p 57561 core@127.0.0.1\n")),(0,r.kt)("p",null,"And then executing"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo poweroff\n")))}u.isMDXComponent=!0}}]);