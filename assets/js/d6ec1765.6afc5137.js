"use strict";(self.webpackChunksiglens_docs=self.webpackChunksiglens_docs||[]).push([[2885],{5025:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var s=t(5893),o=t(1151);const l={},i="Open Telemetry",r={id:"log-ingestion/open-telemetry",title:"Open Telemetry",description:"- To ingest traces, you can run siglens and follow the below steps.",source:"@site/docs/log-ingestion/open-telemetry.md",sourceDirName:"log-ingestion",slug:"/log-ingestion/open-telemetry",permalink:"/siglens-docs/log-ingestion/open-telemetry",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Splunk HEC",permalink:"/siglens-docs/log-ingestion/splunk-hec"},next:{title:"Elastic Search",permalink:"/siglens-docs/log-ingestion/elastic-search"}},c={},d=[];function a(e){const n={a:"a",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"open-telemetry",children:"Open Telemetry"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"To ingest traces, you can run siglens and follow the below steps."}),"\n",(0,s.jsx)(n.li,{children:"If Siglens is running with ingestPort: 8081 in the server.yaml file, you'll follow these steps:"}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["git clone ",(0,s.jsx)(n.a,{href:"https://github.com/open-telemetry/opentelemetry-demo.git",children:"https://github.com/open-telemetry/opentelemetry-demo.git"})]}),"\n",(0,s.jsx)(n.li,{children:"cd opentelemetry-demo/"}),"\n",(0,s.jsxs)(n.li,{children:["Update ",(0,s.jsx)(n.code,{children:"src/otelcollector/otelcol-config-extras.yml"})," to be:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'exporters:\notlphttp/siglens:\n    endpoint: "http://host.docker.internal:8081/otlp"\n\nservice:\npipelines:\n    traces:\n    exporters: [spanmetrics, otlphttp/siglens]\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Run the command ",(0,s.jsx)(n.code,{children:"make start"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"After the docker containers start and you wait a few seconds, you should see traces getting ingested into siglens."}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>i});var s=t(7294);const o={},l=s.createContext(o);function i(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);