"use strict";(self.webpackChunksiglens_docs=self.webpackChunksiglens_docs||[]).push([[341],{6596:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>o,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var i=n(5893),r=n(1151);const t={},l="Logs Overview",c={id:"logs",title:"Logs Overview",description:"Log Search Interface Overview \ud83d\udd0d",source:"@site/docs/logs.md",sourceDirName:".",slug:"/logs",permalink:"/siglens-docs/logs",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Loki",permalink:"/siglens-docs/ingestion/loki"},next:{title:"Dashboards",permalink:"/siglens-docs/dashboards"}},d={},a=[{value:"Log Search Interface Overview \ud83d\udd0d",id:"log-search-interface-overview-",level:2},{value:"Steps for Using the Logs Search",id:"steps-for-using-the-logs-search",level:3},{value:"\u2b50 SQL Query Examples \u2b50",id:"-sql-query-examples-",level:3},{value:"\u2b50 Splunk QL Query Examples \u2b50",id:"-splunk-ql-query-examples-",level:3},{value:"\u2b50 Log QL Query Examples \u2b50",id:"-log-ql-query-examples-",level:3}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"logs-overview",children:"Logs Overview"}),"\n",(0,i.jsx)(s.h2,{id:"log-search-interface-overview-",children:"Log Search Interface Overview \ud83d\udd0d"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Overview of the logs search interface supporting SQL, Splunk QL, and LogQL queries:\n",(0,i.jsx)(s.a,{target:"_blank",href:n(2639).Z+"",children:"Video"})," \ud83d\udc40"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"steps-for-using-the-logs-search",children:"Steps for Using the Logs Search"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Select or Enter Queries:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"You can either select a query from the info icon or enter your own."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Query Search",src:n(870).Z+"",width:"2843",height:"1625"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Choose Query Type:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Select which type of query you want to search: SQL,Splunk QL, LogQL."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Query Type",src:n(2478).Z+"",width:"2869",height:"1625"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Select Index:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Choose an index from the index dropdown."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Index",src:n(3876).Z+"",width:"2875",height:"1624"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Set Time Range:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Select the time range for the query."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Time Range",src:n(4398).Z+"",width:"2880",height:"1626"})}),"\n",(0,i.jsx)(s.h3,{id:"-sql-query-examples-",children:"\u2b50 SQL Query Examples \u2b50"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"SELECT first_name AS firstnames, country AS origincountry FROM `ind-0`\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"sql-1",src:n(6024).Z+"",width:"2879",height:"1626"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"SELECT * FROM `ind-0` ORDER BY latency ASC\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"sql-2",src:n(7472).Z+"",width:"2867",height:"1626"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"SELECT MAX(latency), COUNT(city) FROM `*` GROUP BY country, gender LIMIT 10\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"sql-3",src:n(1396).Z+"",width:"2879",height:"1628"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"SELECT min(latency), COUNT(city) FROM `*` WHERE gender = male GROUP BY country LIMIT 10\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"sql-4",src:n(6417).Z+"",width:"2872",height:"1626"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"select 1 as one,'word' as word,city from `ind-0`\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"sql-5",src:n(8060).Z+"",width:"2878",height:"1625"})}),"\n",(0,i.jsx)(s.h3,{id:"-splunk-ql-query-examples-",children:"\u2b50 Splunk QL Query Examples \u2b50"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:'city=Boston | stats count AS Count BY weekday | where Count / 2 > 6 OR weekday = "Saturday"\n'})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"spl-1",src:n(7233).Z+"",width:"2880",height:"1626"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:'http_method=POST | regex city="^[a-zA-Z]+\\s[a-zA-Z]+$" | fields city\n'})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"spl-2",src:n(4246).Z+"",width:"2880",height:"1617"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:'city=Boston | stats count AS Count BY state | eval myField=state . " start:" . rtrim(state, "nd")\n'})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"spl-3",src:n(4451).Z+"",width:"2880",height:"1622"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:'city=Boston | stats count AS Count BY state | eval myField=if(in(state, "Mary" . "land", "Hawaii", 99 + 1), state, "Error")\n'})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"spl-4",src:n(2958).Z+"",width:"2880",height:"1628"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"city=Columbus | stats count AS Count BY http_status | eval sqrt=sqrt(http_status + 200)\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"spl-5",src:n(8313).Z+"",width:"2880",height:"1628"})}),"\n",(0,i.jsx)(s.h3,{id:"-log-ql-query-examples-",children:"\u2b50 Log QL Query Examples \u2b50"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:'{gender="female",city="Fresno"} != "batch-212"\n'})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"logql-1",src:n(5136).Z+"",width:"2880",height:"1628"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:'{gender="female"} | json\n'})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"logql-2",src:n(8701).Z+"",width:"2880",height:"1623"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:'{gender="female"} | logfmt\n'})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"logql-3",src:n(621).Z+"",width:"2869",height:"1622"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:'{gender="female",city="Fresno"} | json city_life="city", single_gender="gender[0]"\n'})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"logql-4",src:n(7561).Z+"",width:"2871",height:"1626"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:'{gender="female",city="Fresno"} | logfmt city_life="city", single_gender="gender", host\n'})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"logql-5",src:n(2281).Z+"",width:"2872",height:"1628"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Use Query Builder:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Select from the search dropdown"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Query Search",src:n(2113).Z+"",width:"2870",height:"1621"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Query Builder Query",src:n(4296).Z+"",width:"2880",height:"1625"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Query Builder Demo:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Overview of the query builder\n",(0,i.jsx)(s.a,{target:"_blank",href:n(6508).Z+"",children:"Video"})," \ud83d\udc40"]}),"\n"]}),"\n"]}),"\n"]})]})}function o(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},6508:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/files/query-builder-search-95c3e84c832a46e1b519fc1fb4913f10.mp4"},2639:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/files/query-overview-d5fc77474b6ee4f7f3397751e26bd0c7.mp4"},870:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/icon-query-e6a4be52f3c8a67d5463305a82cd5be7.png"},3876:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/index-query-416cd58e8895ed5e1753825a2bbca92b.png"},5136:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/logql-1-367160715b2bf6ac1090225576cf85a1.png"},8701:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/logql-2-904bbf2c2810d468c81136f57ca724b6.png"},621:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/logql-3-94d7f3500212f8f1927d07e1d313e1e7.png"},7561:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/logql-4-6854a11e70faf9b25201290fc4585684.png"},2281:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/logql-5-3bcf2f63cebae94baa622cae69303f76.png"},2113:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/qb-search-a9d99de88b2411faf78a63b8b4b4ea85.png"},4296:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/query-qb-427d2f4e11efef32cdcd79fb7be0ed94.png"},2478:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/query-type-763487da67366a29db78e75eea58c306.png"},7233:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/spl-1-48b680e06a19a8deda6790ccd544c4b1.png"},4246:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/spl-2-ef32b3ffd396378aea518a992b6dd284.png"},4451:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/spl-3-b230523fb19b85378dd503da297a81b1.png"},2958:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/spl-4-a6a73734ae8b512a6c344a4125e0faf9.png"},8313:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/spl-5-08ef90b1d36f65255b198c6144e9dcd2.png"},6024:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/sql-1-f1363bd8da9ed57a9420eab8fe7c3b28.png"},7472:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/sql-2-923647e7d5d400a16d58e3e28aeac0aa.png"},1396:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/sql-3-46511602a21f7ee91e8957447fcec893.png"},6417:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/sql-4-1672c997ec3e486e1ec10a0f45f5f0c8.png"},8060:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/sql-5-22ab5c9f70be59b9421b2c1ec65a7748.png"},4398:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/time-query-87149a1fe1442dfb22e19eaf59504fd6.png"},1151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>l});var i=n(7294);const r={},t=i.createContext(r);function l(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);