"use strict";(self.webpackChunksiglens_docs=self.webpackChunksiglens_docs||[]).push([[308],{6846:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var o=t(5893),i=t(1151);const s={sidebar_position:5},l="Fluentd/Fluentbit",r={id:"ingestion/fluentd-fluentbit",title:"Fluentd/Fluentbit",description:"How to integrate Fluentd locally",source:"@site/docs/ingestion/fluentd-fluentbit.md",sourceDirName:"ingestion",slug:"/ingestion/fluentd-fluentbit",permalink:"/siglens-docs/ingestion/fluentd-fluentbit",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Install Using Binary",permalink:"/siglens-docs/installation/binary"},next:{title:"Vector",permalink:"/siglens-docs/ingestion/vector"}},a={},c=[{value:"How to integrate Fluentd locally",id:"how-to-integrate-fluentd-locally",level:3}];function d(e){const n={code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"fluentdfluentbit",children:"Fluentd/Fluentbit"}),"\n",(0,o.jsx)(n.h3,{id:"how-to-integrate-fluentd-locally",children:"How to integrate Fluentd locally"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Append this to your ",(0,o.jsx)(n.code,{children:"td-agent.conf "}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["For the path you will have to create a ",(0,o.jsx)(n.code,{children:"log.json"})," file in the directory and write some sample logs in it."]}),"\n",(0,o.jsxs)(n.li,{children:["You can run the command ",(0,o.jsx)(n.code,{children:"tail -f /var/log/td-agent/td-agent.log"})]}),"\n",(0,o.jsxs)(n.li,{children:["Make sure the ES Version in ",(0,o.jsx)(n.code,{children:"server.yaml"})," matches the version of ES Fluentd plugin version."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"<source>\n  @type tail\n  format json\n  read_from_head true\n  path /home/username/sigscalr/log.json # this is the path of all log files generated by genevents\n  pos_file /var/log/td-agent/httpd-access.log.pos\n  tag hyperion\n</source>\n\n<match hyperion>\n  @type elasticsearch\n  host localhost\n  port 8081\n  path /elastic\n  <buffer>\n    flush_mode interval\n    flush_interval 1s  # for test purpose\n  </buffer>\n</match>\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>l});var o=t(7294);const i={},s=o.createContext(i);function l(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);