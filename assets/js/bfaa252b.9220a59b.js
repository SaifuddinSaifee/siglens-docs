"use strict";(self.webpackChunksiglens_docs=self.webpackChunksiglens_docs||[]).push([[495],{31:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=s(5893),o=s(1151);const a={},r="Elastic Search",i={id:"log-ingestion/elastic-search",title:"Elastic Search",description:"SigLens allows you to effortlessly ingest log data in Elastic Search format as well. All you need to do is POST the data to the ingestion server.",source:"@site/docs/log-ingestion/elastic-search.md",sourceDirName:"log-ingestion",slug:"/log-ingestion/elastic-search",permalink:"/siglens-docs/log-ingestion/elastic-search",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Open Telemetry",permalink:"/siglens-docs/log-ingestion/open-telemetry"},next:{title:"Loki",permalink:"/siglens-docs/log-ingestion/loki"}},c={},l=[];function d(e){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"elastic-search",children:"Elastic Search"}),"\n",(0,n.jsx)(t.p,{children:"SigLens allows you to effortlessly ingest log data in Elastic Search format as well. All you need to do is POST the data to the ingestion server."}),"\n",(0,n.jsxs)(t.p,{children:["To learn more about Elastic Search, check out the ",(0,n.jsx)(t.a,{href:"https://www.elastic.co/",children:"Elastic website"})]}),"\n",(0,n.jsx)(t.h1,{id:"ingesting-mock-data-in-elastic-search-format",children:"Ingesting Mock Data in Elastic Search Format"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"}),": Before proceeding, please make sure that the ingestion server is running on port 8081. If it is running on a different port, please change the port number in the below ",(0,n.jsx)(t.code,{children:"curl"})," command accordingly."]}),"\n",(0,n.jsx)(t.p,{children:"We have created some mock data that you can use to test out the Elastic log ingestion features."}),"\n",(0,n.jsx)(t.p,{children:"To load mock data into SigLens use the following commands:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'curl -L https://github.com/sigscalr/ss-pub-data/releases/download/v1.0.0/prod-data-100mb.json.tar.gz -o prod-data-100mb.json.tar.gz \ntar -xOf prod-data-100mb.json.tar.gz >> prod-data-100mb.json\ncurl http://localhost:8081/elastic/_bulk -i  --data-binary "@prod-data-100mb.json"\n'})}),"\n",(0,n.jsx)(t.p,{children:"If you want to experiment with larger volumes of data, you can use these files."}),"\n",(0,n.jsx)(t.p,{children:"The below files have sample data of 1GB and 4GB respectively."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"curl -L https://github.com/sigscalr/ss-pub-data/releases/download/v1.0.0/prod-data-1gb.json.tar.gz -o prod-data-1gb.json.tar.gz\ncurl -L https://github.com/sigscalr/ss-pub-data/releases/download/v1.0.0/prod-data-4gb.json.tar.gz -o prod-data-4gb.json.tar.gz\n"})})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>i,a:()=>r});var n=s(7294);const o={},a=n.createContext(o);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);