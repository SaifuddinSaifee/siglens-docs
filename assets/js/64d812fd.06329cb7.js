"use strict";(self.webpackChunksiglens_docs=self.webpackChunksiglens_docs||[]).push([[3089],{8570:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=n(5893),r=n(1151);const s={},i="Go App",a={id:"instrument-traces/go-app",title:"Go App",description:"Auto-instrument sample Golang app for traces",source:"@site/docs/instrument-traces/go-app.md",sourceDirName:"instrument-traces",slug:"/instrument-traces/go-app",permalink:"/instrument-traces/go-app",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Instrumention for Traces",permalink:"/category/instrumention-for-traces"},next:{title:"Java App",permalink:"/instrument-traces/java-app"}},c={},l=[{value:"Auto-instrument sample Golang app for traces",id:"auto-instrument-sample-golang-app-for-traces",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Set up for Go application",id:"set-up-for-go-application",level:3},{value:"Auto instrumentation setup for Go app",id:"auto-instrumentation-setup-for-go-app",level:3}];function p(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"go-app",children:"Go App"}),"\n",(0,o.jsx)(t.h3,{id:"auto-instrument-sample-golang-app-for-traces",children:"Auto-instrument sample Golang app for traces"}),"\n",(0,o.jsx)(t.p,{children:"In this tutorial we will go through the steps to auto instrument a Go app to send traces to Siglens."}),"\n",(0,o.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Siglens instance should be running on localhost with ingest port-4318. To do so you need to change the ingest port of Siglens to ",(0,o.jsx)(t.code,{children:"4318"})," in ",(0,o.jsx)(t.code,{children:"server.yaml"})]}),"\n",(0,o.jsx)(t.li,{children:"Go app (refer the documentation below if you don't have the setup for go app)"}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"set-up-for-go-application",children:"Set up for Go application"}),"\n",(0,o.jsx)(t.p,{children:"Given below are the instructions for setting up a sample Golang application for a bookstore:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"# Clone the bookstore repository from GitHub\ngit clone https://github.com/siglens/bookstore-app\n\n# Change into the cloned directory\ncd bookstore-app\n\n# Run the application with the following command:\ngo run main.go\n"})}),"\n",(0,o.jsxs)(t.p,{children:["This runs the application at port 8090. Try accessing API at ",(0,o.jsx)(t.a,{href:"http://localhost:8090/books",children:"http://localhost:8090/books"})," .\nIf you see an empty array as the result, it means your application is working:"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"go-app",src:n(9928).Z+"",width:"2239",height:"1713"})}),"\n",(0,o.jsx)(t.p,{children:"Below are the APIs available:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"GET    /books                    \nGET    /books/:id               \nPOST   /books                    \nPATCH  /books/:id                \nDELETE /books/:id     \n"})}),"\n",(0,o.jsx)(t.h3,{id:"auto-instrumentation-setup-for-go-app",children:"Auto instrumentation setup for Go app"}),"\n",(0,o.jsxs)(t.p,{children:["Import the following dependencies related to OpenTelemetry exporter and SDK in ",(0,o.jsx)(t.code,{children:"main.go"})," file:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'import (\n    // other imports...\n\n    "go.opentelemetry.io/contrib/instrumentation/github.com/gin-gonic/gin/otelgin"\n    "go.opentelemetry.io/otel"\n    "go.opentelemetry.io/otel/attribute"\n    "go.opentelemetry.io/otel/exporters/otlp/otlptrace"\n    "go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracehttp"\n    "go.opentelemetry.io/otel/sdk/resource"\n    sdktrace "go.opentelemetry.io/otel/sdk/trace"\n)\n\n'})}),"\n",(0,o.jsxs)(t.p,{children:["To configure application to send data we have to create a function to initialise Opentelemetry. Update the code in ",(0,o.jsx)(t.code,{children:"main.go"})," file by adding the code given below:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'package main\n\nimport (\n\t"context"\n\t"github.com/gin-gonic/gin"\n\t"github.com/siglens/bookstore-app/controllers"\n\t"github.com/siglens/bookstore-app/models"\n\t"go.opentelemetry.io/contrib/instrumentation/github.com/gin-gonic/gin/otelgin"\n\t"go.opentelemetry.io/otel"\n\t"go.opentelemetry.io/otel/attribute"\n\t"go.opentelemetry.io/otel/exporters/otlp/otlptrace"\n\t"go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracehttp"\n\t"go.opentelemetry.io/otel/sdk/resource"\n\tsdktrace "go.opentelemetry.io/otel/sdk/trace"\n\t"log"\n\t"os"\n)\n\nvar (\n\tserviceName = os.Getenv("SERVICE_NAME")\n)\n\nfunc initTracer() func(context.Context) error {\n\n\texporter, err := otlptrace.New(\n\t\tcontext.Background(),\n\t\totlptracehttp.NewClient(\n\t\t\totlptracehttp.WithURLPath("/otlp/v1/traces"),\n\t\t\totlptracehttp.WithInsecure(),\n\t\t),\n\t)\n\n\tif err != nil {\n\t\tlog.Fatalf("Failed to create exporter: %v", err)\n\t}\n\tresources, err := resource.New(\n\t\tcontext.Background(),\n\t\tresource.WithAttributes(\n\t\t\tattribute.String("service.name", serviceName),\n\t\t\tattribute.String("library.language", "go"),\n\t\t),\n\t)\n\tif err != nil {\n\t\tlog.Fatalf("Could not set resources: %v", err)\n\t}\n\n\totel.SetTracerProvider(\n\t\tsdktrace.NewTracerProvider(\n\t\t\tsdktrace.WithSampler(sdktrace.AlwaysSample()),\n\t\t\tsdktrace.WithBatcher(exporter),\n\t\t\tsdktrace.WithResource(resources),\n\t\t),\n\t)\n\treturn exporter.Shutdown\n}\n\nfunc main() {\n\n\tcleanup := initTracer()\n\tdefer cleanup(context.Background())\n\n\tr := gin.Default()\n\tr.Use(otelgin.Middleware(serviceName))\n\t// Connect to database\n\tmodels.ConnectDatabase()\n\n\t// Routes\n\tr.GET("/books", controllers.FindBooks)\n\tr.GET("/books/:id", controllers.FindBook)\n\tr.POST("/books", controllers.CreateBook)\n\tr.PATCH("/books/:id", controllers.UpdateBook)\n\tr.DELETE("/books/:id", controllers.DeleteBook)\n\n\t// Run the server\n\tr.Run(":8090")\n}\n'})}),"\n",(0,o.jsx)(t.p,{children:"Note:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["You will have to run ",(0,o.jsx)(t.code,{children:"go mod tidy"})," to download all the packges which are there in the code and populate the ",(0,o.jsx)(t.code,{children:"go.sum"})," file"]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["The endpoint for sending the traces to SigLens is ",(0,o.jsx)(t.code,{children:"http://localhost:4318/otlp/v1/traces"})," which is set in the code using ",(0,o.jsx)(t.code,{children:'otlptracehttp.WithURLPath("/otlp/v1/traces")'}),"\n. Now, set the environment variable and run the app:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"SERVICE_NAME=goGinApp go run main.go\n"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.img,{alt:"terminal-go",src:n(3747).Z+"",width:"1525",height:"438"}),"\nNow, visit ",(0,o.jsx)(t.a,{href:"http://localhost:8090/books",children:"http://localhost:8090/books"})," and refresh the page a couple of times. Wait for 1-2 minutes, then check the data on SigLens."]}),"\n",(0,o.jsx)(t.p,{children:"You can search traces:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"search-go",src:n(7319).Z+"",width:"2880",height:"1626"})}),"\n",(0,o.jsx)(t.p,{children:"You can view red-metrics:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"metrics-go",src:n(2586).Z+"",width:"2847",height:"1629"})}),"\n",(0,o.jsx)(t.p,{children:"Graph visualization of red-metrics:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"metrics-go-graph-1",src:n(8611).Z+"",width:"2876",height:"1627"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"metrics-go-graph-2",src:n(8166).Z+"",width:"2880",height:"1632"})})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},9928:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/go-app-dce51a41b5acb2d3034f90a78a652b33.png"},8611:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/go-graph-1-70708ff0d91afe5c6e2ddd026d4788e9.png"},8166:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/go-graph-2-5c5416730f562f573991f662a4bb6335.png"},2586:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/metrics-go-99eccfff24d72f1be4ca4f8e2a24ce72.png"},7319:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/search-traces-go-41fedf97d609ba01045e80ac698e70f7.png"},3747:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/terminal-go-app-e075edd3d44e51c06994b84fb0197c1c.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var o=n(7294);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);