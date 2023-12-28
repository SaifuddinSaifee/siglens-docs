"use strict";(self.webpackChunksiglens_docs=self.webpackChunksiglens_docs||[]).push([[453],{6588:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var s=i(5893),l=i(1151);const t={},r="Helm",o={id:"installation/helm",title:"Helm",description:"Install SigLens locally using Minikube, Helm",source:"@site/docs/installation/helm.md",sourceDirName:"installation",slug:"/installation/helm",permalink:"/installation/helm",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Docker",permalink:"/installation/docker"},next:{title:"Ingestion",permalink:"/category/ingestion"}},a={},c=[{value:"Install SigLens locally using Minikube, Helm",id:"install-siglens-locally-using-minikube-helm",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Installation",id:"installation",level:3},{value:"Step 1: Installing Minikube",id:"step-1-installing-minikube",level:4},{value:"Step 2: Installing kubectl and Helm",id:"step-2-installing-kubectl-and-helm",level:4},{value:"Step 3: Using Homebrew on macOS",id:"step-3-using-homebrew-on-macos",level:4},{value:"Step 4: Starting Minikube",id:"step-4-starting-minikube",level:4},{value:"Step 5: Adding the SigLens Helm Repository",id:"step-5-adding-the-siglens-helm-repository",level:4},{value:"Step 6: Updating Helm Repositories",id:"step-6-updating-helm-repositories",level:4},{value:"Step 7: Installing SigLens",id:"step-7-installing-siglens",level:4},{value:"Step 8: Accessing SigLens",id:"step-8-accessing-siglens",level:4},{value:"Step 9: Clean Up",id:"step-9-clean-up",level:4}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"helm",children:"Helm"}),"\n",(0,s.jsx)(n.h2,{id:"install-siglens-locally-using-minikube-helm",children:"Install SigLens locally using Minikube, Helm"}),"\n",(0,s.jsx)(n.p,{children:"In this tutorial, we will walk you through the process of installing SigLens locally using Minikube and Helm. This setup will enable you to explore the powerful features of SigLens in your local Kubernetes environment. Before we dive in, let's ensure you have all the necessary tools installed."}),"\n",(0,s.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"Before we start the installation, make sure you have the following tools installed on your system:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/",children:"Kubernetes command-line interface (CLI)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://helm.sh/docs/helm/",children:"Helm CLI"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://minikube.sigs.k8s.io/",children:"Minikube"})}),"\n",(0,s.jsx)(n.li,{children:"Docker"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.h4,{id:"step-1-installing-minikube",children:"Step 1: Installing Minikube"}),"\n",(0,s.jsx)(n.p,{children:"Minikube is a command-line tool that helps you set up a single-node Kubernetes cluster within a virtual machine on your local system. You can install Minikube using a package manager or by following the official installation guide."}),"\n",(0,s.jsx)(n.h4,{id:"step-2-installing-kubectl-and-helm",children:"Step 2: Installing kubectl and Helm"}),"\n",(0,s.jsx)(n.p,{children:"Before we proceed, let's ensure you have both KubeCTL and HelmCLI installed."}),"\n",(0,s.jsx)(n.p,{children:"Open your terminal and check the versions of Docker and Helm with the following commands:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ docker version\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example Output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Client:\n Cloud integration: v1.0.31\n Version: 20.10.24\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ helm version\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example Output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'version.BuildInfo{Version:"v3.12.0", GitCommit:"c9f554d75773799f72ceef38c51210f1842a1dea", GitTreeState:"clean", GoVersion:"go1.20.4"}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Please note these are recommended software versions, and your environment may have different versions."}),"\n",(0,s.jsx)(n.h4,{id:"step-3-using-homebrew-on-macos",children:"Step 3: Using Homebrew on macOS"}),"\n",(0,s.jsx)(n.p,{children:"If you're using macOS, you can install kubectl and Helm with Homebrew, a popular package manager for macOS."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Install kubectl:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ brew install kubernetes-cli\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Install helm:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ brew install helm\n"})}),"\n",(0,s.jsx)(n.h4,{id:"step-4-starting-minikube",children:"Step 4: Starting Minikube"}),"\n",(0,s.jsx)(n.p,{children:"Now that we have Minikube, kubectl, and Helm installed, let's start our Minikube cluster. In your terminal, enter the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ minikube start\n"})}),"\n",(0,s.jsx)(n.p,{children:"This command initializes Minikube, and it may take a few minutes as it downloads dependencies and sets up the cluster. Once the initialization is complete, you should see output similar to the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'\ud83d\ude04  minikube v1.30.1 on Darwin 12.6 (arm64)\n\u2728  Using the docker driver based on existing profile\n\ud83d\udc4d  Starting control plane node minikube in cluster minikube\n\ud83d\ude9c  Pulling base image ...\n\ud83c\udfc3  Updating the running docker "minikube" container ...\n\ud83d\udc33  Preparing Kubernetes v1.26.3 on Docker 23.0.2 ...\n\ud83d\udd0e  Verifying Kubernetes components...\n    \u25aa Using image gcr.io/k8s-minikube/storage-provisioner:v5\n\ud83c\udf1f  Enabled addons: storage-provisioner, default-storageclass\n\ud83c\udfc4  Done! kubectl is now configured to use "minikube" cluster and "default" namespace by default\n\n'})}),"\n",(0,s.jsx)(n.p,{children:"To verify the status of your Minikube cluster, run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ minikube status\nminikube\ntype: Control Plane\nhost: Running\nkubelet: Running\napiserver: Running\nkubeconfig: Configured\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"You should see a status indicating that the cluster is running."}),"\n",(0,s.jsx)(n.h4,{id:"step-5-adding-the-siglens-helm-repository",children:"Step 5: Adding the SigLens Helm Repository"}),"\n",(0,s.jsx)(n.p,{children:"Before installing SigLens, you need to add the SigLens Helm repository. Execute the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ helm repo add siglens-repo https://siglens.github.io/charts\n"})}),"\n",(0,s.jsx)(n.p,{children:'You should see a message confirming that "siglens-repo" has been added to your repositories.'}),"\n",(0,s.jsx)(n.h4,{id:"step-6-updating-helm-repositories",children:"Step 6: Updating Helm Repositories"}),"\n",(0,s.jsx)(n.p,{children:"Update all Helm repositories to ensure you have access to the latest chart versions:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'$ helm repo update\nHang tight while we grab the latest from your chart repositories...\n...Successfully got an update from the "siglens-helm" chart repository\n...Successfully got an update from the "siglens-repo" chart repository\nUpdate Complete. \u2388Happy Helming!\u2388\n'})}),"\n",(0,s.jsx)(n.h4,{id:"step-7-installing-siglens",children:"Step 7: Installing SigLens"}),"\n",(0,s.jsx)(n.p,{children:"With everything set up, it's time to install SigLens. Use Helm to install the latest version of the SigLens Helm chart:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ helm install siglens siglens-repo/siglens\n"})}),"\n",(0,s.jsx)(n.p,{children:"Once the installation is complete, you'll see an output similar to this example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"NAME: siglens\nLAST DEPLOYED: Fri Jun 16 16:43:51 2023\nNAMESPACE: default\nSTATUS: deployed\nREVISION: 1\nNOTES:\nThank you for installing siglens.\nTo learn more about the release, try:\n  $ helm status siglens\nTo run tests, try:\n  $ helm test siglens\n...\n"})}),"\n",(0,s.jsx)(n.h4,{id:"step-8-accessing-siglens",children:"Step 8: Accessing SigLens"}),"\n",(0,s.jsx)(n.p,{children:"SigLens is now installed in your local Minikube cluster. To access the SigLens UI, follow these steps:\nForward local port 8081 to the ingest service using:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ kubectl port-forward svc/siglens-ingest-svc 8081:8081\n"})}),"\n",(0,s.jsx)(n.p,{children:"Get data in SigLens by loading sample data, using our supported ingestion methods, or integrating with your existing tools."}),"\n",(0,s.jsx)(n.p,{children:"Forward local port 8000 to the UI / query service using:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:" $ kubectl port-forward svc/siglens-query-svc 8000:8000\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Open your web browser and navigate to: ",(0,s.jsx)(n.a,{href:"http://localhost:8000",children:"http://localhost:8000"})," to access the SigLens UI."]}),"\n",(0,s.jsx)(n.h4,{id:"step-9-clean-up",children:"Step 9: Clean Up"}),"\n",(0,s.jsx)(n.p,{children:"Once you've finished working with SigLens, you can stop your Minikube cluster to free up resources:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ minikube stop\n\n"})})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>r});var s=i(7294);const l={},t=s.createContext(l);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);