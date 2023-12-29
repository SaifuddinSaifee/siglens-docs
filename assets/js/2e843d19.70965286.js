"use strict";(self.webpackChunksiglens_docs=self.webpackChunksiglens_docs||[]).push([[186],{99:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var i=n(5893),t=n(1151);const r={},c="Searching Logs",l={id:"searching-logs",title:"Searching Logs",description:"\ud83d\udd0d Log Search Interface Overview :",source:"@site/docs/searching-logs.md",sourceDirName:".",slug:"/searching-logs",permalink:"/siglens-docs/searching-logs",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Javascript App",permalink:"/siglens-docs/instrument-traces/js-app"},next:{title:"Log Query Builder",permalink:"/siglens-docs/log-query-builder"}},d={},a=[{value:"\ud83d\udd0d Log Search Interface Overview :",id:"-log-search-interface-overview-",level:3},{value:"\u2b50 Steps for Using the Logs Search \u2b50",id:"-steps-for-using-the-logs-search-",level:3},{value:"\u2b50 SQL Query Examples \u2b50",id:"-sql-query-examples-",level:3},{value:"\u2b50 Splunk QL Query Examples \u2b50",id:"-splunk-ql-query-examples-",level:3},{value:"\u2b50 Log QL Query Examples \u2b50",id:"-log-ql-query-examples-",level:3}];function o(e){const s={code:"code",h1:"h1",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"searching-logs",children:"Searching Logs"}),"\n","\n","\n",(0,i.jsx)(s.h3,{id:"-log-search-interface-overview-",children:"\ud83d\udd0d Log Search Interface Overview :"}),"\n",(0,i.jsx)("div",{class:"responsive-iframe",children:(0,i.jsx)("iframe",{src:"https://www.youtube.com/embed/ROa2owJPOJo?si=IMJJuZmvDxEwCAov",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}),"\n",(0,i.jsx)(s.h3,{id:"-steps-for-using-the-logs-search-",children:"\u2b50 Steps for Using the Logs Search \u2b50"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Select or Enter Queries:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"You can either select a query from the info icon or enter your own."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Query Search",src:n(870).Z+"",width:"2843",height:"1625"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Choose Query Type:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Select which type of query you want to search: SQL, Splunk QL, LogQL."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"log-query Type",src:n(459).Z+"",width:"2869",height:"1624"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Select Index:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Choose an index from the index dropdown."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"log-index",src:n(5239).Z+"",width:"2869",height:"1625"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Set Time Range:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Select the time range for the query."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"log-time-range",src:n(2886).Z+"",width:"2871",height:"1623"})}),"\n",(0,i.jsx)(s.h3,{id:"-sql-query-examples-",children:"\u2b50 SQL Query Examples \u2b50"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"SELECT first_name AS firstnames, country AS origincountry FROM `ind-0`\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"sql-1",src:n(6024).Z+"",width:"2879",height:"1626"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"SELECT * FROM `ind-0` ORDER BY latency ASC\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"sql-2",src:n(7472).Z+"",width:"2867",height:"1626"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"SELECT MAX(latency), COUNT(city) FROM `*` GROUP BY country, gender LIMIT 10\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"sql-3",src:n(1396).Z+"",width:"2879",height:"1628"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"SELECT min(latency), COUNT(city) FROM `*` WHERE gender = male GROUP BY country LIMIT 10\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"sql-4",src:n(6417).Z+"",width:"2872",height:"1626"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"select 1 as one,'word' as word,city from `ind-0`\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"sql-5",src:n(8060).Z+"",width:"2878",height:"1625"})}),"\n",(0,i.jsx)(s.h3,{id:"-splunk-ql-query-examples-",children:"\u2b50 Splunk QL Query Examples \u2b50"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:'city=Boston | stats count AS Count BY weekday | where Count / 2 > 6 OR weekday = "Saturday"\n'})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"spl-1",src:n(7233).Z+"",width:"2880",height:"1626"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:'http_method=POST | regex city="^[a-zA-Z]+\\s[a-zA-Z]+$" | fields city\n'})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"spl-2",src:n(4246).Z+"",width:"2880",height:"1617"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:'city=Boston | stats count AS Count BY state | eval myField=state . " start:" . rtrim(state, "nd")\n'})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"spl-3",src:n(4451).Z+"",width:"2880",height:"1622"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:'city=Boston | stats count AS Count BY state | eval myField=if(in(state, "Mary" . "land", "Hawaii", 99 + 1), state, "Error")\n'})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"spl-4",src:n(2958).Z+"",width:"2880",height:"1628"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"city=Columbus | stats count AS Count BY http_status | eval sqrt=sqrt(http_status + 200)\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"spl-5",src:n(8313).Z+"",width:"2880",height:"1628"})}),"\n",(0,i.jsx)(s.h3,{id:"-log-ql-query-examples-",children:"\u2b50 Log QL Query Examples \u2b50"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:'{gender="female",city="Fresno"} != "batch-212"\n'})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"logql-1",src:n(5136).Z+"",width:"2880",height:"1628"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:'{gender="female"} | json\n'})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"logql-2",src:n(8701).Z+"",width:"2880",height:"1623"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:'{gender="female"} | logfmt\n'})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"logql-3",src:n(621).Z+"",width:"2869",height:"1622"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:'{gender="female",city="Fresno"} | json city_life="city", single_gender="gender[0]"\n'})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"logql-4",src:n(7561).Z+"",width:"2871",height:"1626"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:'{gender="female",city="Fresno"} | logfmt city_life="city", single_gender="gender", host\n'})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"logql-5",src:n(2281).Z+"",width:"2872",height:"1628"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},870:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/icon-query-e6a4be52f3c8a67d5463305a82cd5be7.png"},5239:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/log-index-3b0f6d9ec48e6c36656687b09896068f.png"},459:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/log-query-type-c8afabe26a067e95a6f8d5bc0f5d7b59.png"},2886:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/log-time-3241317b49fd61c921a8493dcd82edd8.png"},5136:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/logql-1-367160715b2bf6ac1090225576cf85a1.png"},8701:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/logql-2-904bbf2c2810d468c81136f57ca724b6.png"},621:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/logql-3-94d7f3500212f8f1927d07e1d313e1e7.png"},7561:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/logql-4-6854a11e70faf9b25201290fc4585684.png"},2281:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/logql-5-3bcf2f63cebae94baa622cae69303f76.png"},7233:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/spl-1-48b680e06a19a8deda6790ccd544c4b1.png"},4246:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/spl-2-ef32b3ffd396378aea518a992b6dd284.png"},4451:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/spl-3-b230523fb19b85378dd503da297a81b1.png"},2958:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/spl-4-a6a73734ae8b512a6c344a4125e0faf9.png"},8313:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/spl-5-08ef90b1d36f65255b198c6144e9dcd2.png"},6024:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/sql-1-f1363bd8da9ed57a9420eab8fe7c3b28.png"},7472:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/sql-2-923647e7d5d400a16d58e3e28aeac0aa.png"},1396:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/sql-3-46511602a21f7ee91e8957447fcec893.png"},6417:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/sql-4-1672c997ec3e486e1ec10a0f45f5f0c8.png"},8060:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/sql-5-22ab5c9f70be59b9421b2c1ec65a7748.png"},1151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>c});var i=n(7294);const t={},r=i.createContext(t);function c(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);