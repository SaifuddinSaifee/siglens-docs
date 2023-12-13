"use strict";(self.webpackChunksiglens_docs=self.webpackChunksiglens_docs||[]).push([[592],{3291:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var o=e(5893),t=e(1151);const l={},s="Loki",a={id:"ingestion/loki",title:"Loki",description:"Download:",source:"@site/docs/ingestion/loki.md",sourceDirName:"ingestion",slug:"/ingestion/loki",permalink:"/siglens-docs/ingestion/loki",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Elastic Search",permalink:"/siglens-docs/ingestion/elastic-search"},next:{title:"Instrumention for Traces",permalink:"/siglens-docs/category/instrumention-for-traces"}},r={},c=[{value:"Download:",id:"download",level:3},{value:"Add promtail-local-config.yaml with this configuration:",id:"add-promtail-local-configyaml-with-this-configuration",level:4},{value:"Run the binary:",id:"run-the-binary",level:4}];function d(n){const i={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",pre:"pre",ul:"ul",...(0,t.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.h1,{id:"loki",children:"Loki"}),"\n",(0,o.jsx)(i.h3,{id:"download",children:"Download:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:['curl -O -L "',(0,o.jsx)(i.a,{href:"https://github.com/grafana/loki/releases/download/v2.8.2/promtail-darwin-amd64.zip",children:"https://github.com/grafana/loki/releases/download/v2.8.2/promtail-darwin-amd64.zip"}),'"']}),"\n",(0,o.jsx)(i.li,{children:"unzip promtail-darwin-amd64.zip"}),"\n"]}),"\n",(0,o.jsx)(i.h4,{id:"add-promtail-local-configyaml-with-this-configuration",children:"Add promtail-local-config.yaml with this configuration:"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-server:",children:"  http_listen_port: 9080\n  grpc_listen_port: 0\n\npositions:\n  filename: /tmp/positions.yaml\n\nclients:\n  - url: http://localhost:8081/loki/api/v1/push\nscrape_configs:\n- job_name: system\n  static_configs:\n  - targets:\n      - localhost\n    labels:\n      job: varlogs\n      __path__: /var/log/*log\n"})}),"\n",(0,o.jsx)(i.h4,{id:"run-the-binary",children:"Run the binary:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"./promtail-darwin-amd64 -config.file=promtail-config.yaml"}),"\n"]})]})}function h(n={}){const{wrapper:i}={...(0,t.a)(),...n.components};return i?(0,o.jsx)(i,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},1151:(n,i,e)=>{e.d(i,{Z:()=>a,a:()=>s});var o=e(7294);const t={},l=o.createContext(t);function s(n){const i=o.useContext(l);return o.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function a(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),o.createElement(l.Provider,{value:i},n.children)}}}]);