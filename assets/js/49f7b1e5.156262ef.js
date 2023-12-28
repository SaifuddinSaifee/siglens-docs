"use strict";(self.webpackChunksiglens_docs=self.webpackChunksiglens_docs||[]).push([[8460],{4262:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=a(5893),s=a(1151);const i={},r="Java App",p={id:"instrument-traces/java-app",title:"Java App",description:"Auto-instrument sample java app for traces",source:"@site/docs/instrument-traces/java-app.md",sourceDirName:"instrument-traces",slug:"/instrument-traces/java-app",permalink:"/siglens-docs/instrument-traces/java-app",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Go App",permalink:"/siglens-docs/instrument-traces/go-app"},next:{title:"Python App",permalink:"/siglens-docs/instrument-traces/python-app"}},o={},c=[{value:"Auto-instrument sample java app for traces",id:"auto-instrument-sample-java-app-for-traces",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Set up java application",id:"set-up-java-application",level:3},{value:"Auto instrumentation setup for java app",id:"auto-instrumentation-setup-for-java-app",level:3}];function l(e){const t={code:"code",h1:"h1",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"java-app",children:"Java App"}),"\n",(0,n.jsx)(t.h3,{id:"auto-instrument-sample-java-app-for-traces",children:"Auto-instrument sample java app for traces"}),"\n",(0,n.jsx)(t.p,{children:"In this tutorial we will go through the steps to auto instrument a java app to send traces to Siglens."}),"\n",(0,n.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Siglens instance should be running on localhost with ingest port-4318. To do so you need to change the ingest port of Siglens to ",(0,n.jsx)(t.code,{children:"4318"})," in ",(0,n.jsx)(t.code,{children:"server.yaml"})]}),"\n",(0,n.jsx)(t.li,{children:"Java app (refer the documentation below if you don't have the setup for java app)"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"set-up-java-application",children:"Set up java application"}),"\n",(0,n.jsx)(t.p,{children:"Given below are the commands for setting up a Java application."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"# Clone the Spring PetClinic repository from GitHub\ngit clone https://github.com/spring-projects/spring-petclinic\n\n# Change into the cloned directory\ncd spring-petclinic\n\n# Comment out the code in docker-compose.yml file\n\n# Use Maven Wrapper to package the Spring PetClinic application\n./mvnw package\n\n# Run the Spring PetClinic application using the generated JAR file\njava -jar target/*.jar\n"})}),"\n",(0,n.jsx)(t.p,{children:"You can access the running app at localhost:8090"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"java-app",src:a(5974).Z+"",width:"2869",height:"1632"})}),"\n",(0,n.jsx)(t.h3,{id:"auto-instrumentation-setup-for-java-app",children:"Auto instrumentation setup for java app"}),"\n",(0,n.jsx)(t.p,{children:"To enable automatic instrumentation of the application, the Jar agent must be activated. This helps in generating traces from the java app and these traces are then sent to Siglens for visualization and analysis."}),"\n",(0,n.jsx)(t.p,{children:"To download the Java Jar agent, run the below command in your terminal. The JAR file contains the agent and all automatic instrumentation packages:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"curl -L -O https://github.com/open-telemetry/opentelemetry-java-instrumentation/releases/latest/download/opentelemetry-javaagent.jar\n"})}),"\n",(0,n.jsx)(t.p,{children:"Run the following command in terminal to enable auto instrumentation of the application"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'OTEL_TRACES_EXPORTER=otlp OTEL_METRICS_EXPORTER=none OTEL_EXPORTER_OTLP_TRACES_ENDPOINT="http://localhost:4318/otlp/v1/traces" OTEL_EXPORTER_OTLP_PROTOCOL="http/protobuf" OTEL_RESOURCE_ATTRIBUTES=service.name=spring-petclinic java -javaagent:/path/opentelemetry-javaagent.jar -jar target/*.jar\n'})}),"\n",(0,n.jsx)(t.p,{children:"Note:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Write your path in place of the path -",(0,n.jsx)(t.code,{children:"/path/opentelemetry-javaagent.jar"})]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The application gets started on the same server - localhost:8090. Make sure that there is no other application running on the same address. If so, then you will have to stop that."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"terminal-java-app",src:a(3206).Z+"",width:"2880",height:"1506"})}),"\n",(0,n.jsx)(t.p,{children:"You can search traces:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"search-traces",src:a(7401).Z+"",width:"2871",height:"1633"})}),"\n",(0,n.jsx)(t.p,{children:"You can view red-metrics traces:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"siglens-java-app",src:a(5725).Z+"",width:"2880",height:"1618"})}),"\n",(0,n.jsx)(t.p,{children:"Graph visualization of red-metrics:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"graph-1",src:a(2551).Z+"",width:"2871",height:"1624"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"graph-2",src:a(9287).Z+"",width:"2879",height:"1615"})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},2551:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/java-app-red-metrics-graph-1-c104168a53d73bb3608c9ebeb1e53276.png"},9287:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/java-app-red-metrics-graph-2-5b13125cbfc96be79228a4664a30e738.png"},5725:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/java-app-red-traces-c5931d32ce5a318c835fe9287aad1e62.png"},5974:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/java-app-079a8ec2f51ede2fabfd2d4958d183ca.png"},7401:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/search-traces-java-5f2d4098b42aa4d1bcd48cb61b8bf303.png"},3206:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/terminal-java-app-1a440d822bac5dfb2e7b491ae883f6fc.png"},1151:(e,t,a)=>{a.d(t,{Z:()=>p,a:()=>r});var n=a(7294);const s={},i=n.createContext(s);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function p(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);