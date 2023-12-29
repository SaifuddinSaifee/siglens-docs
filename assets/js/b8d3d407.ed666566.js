"use strict";(self.webpackChunksiglens_docs=self.webpackChunksiglens_docs||[]).push([[595],{6739:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var l=t(5893),o=t(1151);const s={},i="Fluentd/Fluentbit",r={id:"log-ingestion/fluentd-fluentbit",title:"Fluentd/Fluentbit",description:"How to integrate Fluentd locally",source:"@site/docs/log-ingestion/fluentd-fluentbit.md",sourceDirName:"log-ingestion",slug:"/log-ingestion/fluentd-fluentbit",permalink:"/siglens-docs/log-ingestion/fluentd-fluentbit",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Log Ingestion",permalink:"/siglens-docs/category/log-ingestion"},next:{title:"Vector",permalink:"/siglens-docs/log-ingestion/vector"}},c={},d=[{value:"How to integrate Fluentd locally",id:"how-to-integrate-fluentd-locally",level:3}];function a(e){const n={code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",pre:"pre",...(0,o.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"fluentdfluentbit",children:"Fluentd/Fluentbit"}),"\n",(0,l.jsx)(n.h3,{id:"how-to-integrate-fluentd-locally",children:"How to integrate Fluentd locally"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["Append this to your ",(0,l.jsx)(n.code,{children:"td-agent.conf "}),"."]}),"\n",(0,l.jsxs)(n.li,{children:["You can send a sample log in json format like ",(0,l.jsx)(n.code,{children:'{"hello2":"world"}'}),"."]}),"\n",(0,l.jsxs)(n.li,{children:["You can run the command ",(0,l.jsx)(n.code,{children:"tail -f /var/log/td-agent/td-agent.log"})]}),"\n",(0,l.jsxs)(n.li,{children:["Make sure the ES Version in ",(0,l.jsx)(n.code,{children:"server.yaml"})," matches the version of ES Fluentd plugin version."]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'<source>\n   @type sample\n   sample {"hello2":"world"}\n   tag "siglens"\n </source>\n <match siglens>\n   @type elasticsearch\n   host "localhost"\n   port 8081\n   path "/elastic"\n   index_name "test"\n   <buffer>\n     flush_mode interval\n     flush_interval 1s\n   </buffer>\n </match>\n'})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>i});var l=t(7294);const o={},s=l.createContext(o);function i(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);