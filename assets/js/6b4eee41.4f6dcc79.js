"use strict";(self.webpackChunksiglens_docs=self.webpackChunksiglens_docs||[]).push([[126],{7827:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var t=s(5893),i=s(1151);const a={},o="Benchmark Against ClickHouse",r={id:"benchmarks/benchmark-runbook",title:"Benchmark Against ClickHouse",description:"Common setup",source:"@site/docs/benchmarks/benchmark-runbook.md",sourceDirName:"benchmarks",slug:"/benchmarks/benchmark-runbook",permalink:"/benchmarks/benchmark-runbook",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Common setup",id:"common-setup",level:2},{value:"Benchmark SigLens",id:"benchmark-siglens",level:2},{value:"Install Go",id:"install-go",level:3},{value:"Clone SigLens",id:"clone-siglens",level:3},{value:"Enable AgileAggs",id:"enable-agileaggs",level:3},{value:"Start SigLens",id:"start-siglens",level:3},{value:"Setup PQS",id:"setup-pqs",level:3},{value:"Setup an ingestion script",id:"setup-an-ingestion-script",level:3},{value:"Ingest the data into SigLens",id:"ingest-the-data-into-siglens",level:3},{value:"Restart SigLens",id:"restart-siglens",level:3},{value:"View Logs",id:"view-logs",level:3},{value:"Run the Queries in SigLens",id:"run-the-queries-in-siglens",level:3},{value:"Benchmark ClickHouse",id:"benchmark-clickhouse",level:2},{value:"Ingest the data into ClickHouse",id:"ingest-the-data-into-clickhouse",level:3},{value:"Install ClickHouse",id:"install-clickhouse",level:3},{value:"Run ClickHouse",id:"run-clickhouse",level:3},{value:"Make the ClickHouse Table",id:"make-the-clickhouse-table",level:3},{value:"Ingest the Data",id:"ingest-the-data",level:3},{value:"Run the Queries in ClickHouse",id:"run-the-queries-in-clickhouse",level:3}];function d(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"benchmark-against-clickhouse",children:"Benchmark Against ClickHouse"}),"\n",(0,t.jsx)(e.h2,{id:"common-setup",children:"Common setup"}),"\n",(0,t.jsx)(e.p,{children:"Setup a server to run the benchmarks.\nI used an AWS im4gn.2xlarge running Ubuntu 22.04.\nThis instance has 8 vCPUs, 32 GB of RAM, and 3.5 TB of storage, but you have to mount the storage with the following steps:"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"ssh into your server"}),"\n",(0,t.jsxs)(e.li,{children:["Run ",(0,t.jsx)(e.code,{children:"lsblk"})," and you should see something like the following, with the ",(0,t.jsx)(e.code,{children:"nvme1n1"})," item having 3.4 TB of storage."]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"NAME         MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS\nloop0          7:0    0  21.3M  1 loop /snap/amazon-ssm-agent/7529\nloop1          7:1    0  49.1M  1 loop /snap/core18/2794\nloop2          7:2    0  59.3M  1 loop /snap/core20/2019\nloop3          7:3    0 109.6M  1 loop /snap/lxd/24326\nloop4          7:4    0  35.5M  1 loop /snap/snapd/20102\nnvme0n1      259:0    0     8G  0 disk\n\u251c\u2500nvme0n1p1  259:2    0   7.9G  0 part /\n\u2514\u2500nvme0n1p15 259:3    0    99M  0 part /boot/efi\nnvme1n1      259:1    0   3.4T  0 disk\n"})}),"\n",(0,t.jsxs)(e.ol,{start:"3",children:["\n",(0,t.jsx)(e.li,{children:"Mount the storage"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"sudo mkfs.xfs /dev/nvme1n1\nsudo mkdir /mnt/nvme1n1\nsudo mount /dev/nvme1n1 /mnt/nvme1n1\n"})}),"\n",(0,t.jsxs)(e.ol,{start:"4",children:["\n",(0,t.jsxs)(e.li,{children:["You can check that it's mounted by running ",(0,t.jsx)(e.code,{children:"df -h"})," and you should see something like this:"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"Filesystem       Size  Used Avail Use% Mounted on\n/dev/root        7.6G  1.5G  6.2G  20% /\ntmpfs             16G     0   16G   0% /dev/shm\ntmpfs            6.2G  948K  6.2G   1% /run\ntmpfs            5.0M     0  5.0M   0% /run/lock\n/dev/nvme0n1p15   98M  6.3M   92M   7% /boot/efi\ntmpfs            3.1G  4.0K  3.1G   1% /run/user/1000\n/dev/nvme1n1     3.5T   25G  3.4T   1% /mnt/nvme1n1\n"})}),"\n",(0,t.jsxs)(e.ol,{start:"5",children:["\n",(0,t.jsx)(e.li,{children:"Update permissions"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"cd /mnt/nvme1n1\nsudo chmod 777 .\n"})}),"\n",(0,t.jsx)(e.h2,{id:"benchmark-siglens",children:"Benchmark SigLens"}),"\n",(0,t.jsx)(e.p,{children:"You'll want three terminals. Terminal 1 will run SigLens, Terminal 2 will do some setup and view the logs, and Terminal 3 will send the queries. Terminal 3 can run in your local machine if you setup the server to accept HTTP traffic, but Terminals 1 and 2 should be on the server. Start with Terminal 1."}),"\n",(0,t.jsx)(e.h3,{id:"install-go",children:"Install Go"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"sudo apt update\nsudo apt install golang -y\n"})}),"\n",(0,t.jsx)(e.p,{children:"If prompted to restart some daemons, you can restart the recommended daemons."}),"\n",(0,t.jsx)(e.h3,{id:"clone-siglens",children:"Clone SigLens"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"git clone https://github.com/siglens/siglens.git\ngit clone https://github.com/sigscalr/sigscalr-client.git\n\ncd siglens\n"})}),"\n",(0,t.jsx)(e.h3,{id:"enable-agileaggs",children:"Enable AgileAggs"}),"\n",(0,t.jsxs)(e.p,{children:["Append this to the ",(0,t.jsx)(e.code,{children:"server.yaml"})," config file:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-yaml",children:"agileAggsEnabled: true\n"})}),"\n",(0,t.jsx)(e.h3,{id:"start-siglens",children:"Start SigLens"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"sudo go run cmd/siglens/main.go --config server.yaml\n"})}),"\n",(0,t.jsx)(e.p,{children:"Wait until SigLens is running. You'll see these lines in the terminal once it's up:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"INFO[2023-12-06 18:10:38] Extracting config from configFile: server.yaml\nINFO[2023-12-06 18:10:38] Defaulting to 2160hrs (90 days) of retention...\nINFO[2023-12-06 18:10:38] ----- Siglens server type SingleNode starting up -----\nINFO[2023-12-06 18:10:38] ----- Siglens Ingestion server starting on 0.0.0.0:8081 -----\nINFO[2023-12-06 18:10:38] ----- Siglens Query server starting on 0.0.0.0:5122 -----\nINFO[2023-12-06 18:10:38] ----- Siglens UI starting on 0.0.0.0:5122 -----\n"})}),"\n",(0,t.jsx)(e.h3,{id:"setup-pqs",children:"Setup PQS"}),"\n",(0,t.jsx)(e.p,{children:"Switch to Terminal 2 and run the following:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'curl -X POST -d \'{\n    "tableName": "benchmark",\n    "groupByColumns": ["cab_type", "passenger_count", "pickup_date", "trip_distance"],\n    "measureColumns": ["total_amount"]\n}\' http://localhost/api/pqs/aggs\n'})}),"\n",(0,t.jsx)(e.p,{children:"You should get this response:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{"message":"All OK","status":200}\n'})}),"\n",(0,t.jsx)(e.h3,{id:"setup-an-ingestion-script",children:"Setup an ingestion script"}),"\n",(0,t.jsxs)(e.p,{children:["In Terminal 2 run ",(0,t.jsx)(e.code,{children:"cd /mnt/nvme1n1"})," and then save the following into ingester.py"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'import subprocess\nimport sys\n\n\ndef ingest(filename, batch_size=100):\n    # Determine the total number of lines in the file\n    total_lines = sum(1 for _ in open(filename, "r"))\n\n    lines = []\n    with open(filename, \'r\') as f:\n        for i, line in enumerate(f):\n            lines.append(line)\n\n            if len(lines) >= batch_size:\n                print(f"\\rProcessing... {((i + 1) / total_lines) * 100:.2f}%", end=\'\')\n                ingest_lines(lines)\n                lines = []\n    if lines:\n        ingest_lines(lines)\n        print(f"\\rProcessing... 100.00%")\n\n\ndef ingest_lines(lines):\n    index_data = \'{"index": {"_index": "benchmark", "_type": "_doc"}}\'\n    data = \'\'\n    for line in lines:\n        data += index_data + \'\\n\' + line\n\n    # Prepare the curl command\n    curl_command = [\n        "curl",\n        "-s",\n        "-o", "/dev/null",\n        "http://localhost:8081/elastic/_bulk",\n        "-X", "POST",\n        "-H", "Authorization: Bearer ",\n        "-H", "Content-Type: application/json",\n        "--data-binary", data\n    ]\n\n    # Execute the curl command\n    process = subprocess.run(curl_command, capture_output=False, text=False)\n    if process.stderr:\n        print("Error:", process.stderr)\n\n\nif __name__ == "__main__":\n    ingest(sys.argv[1])\n'})}),"\n",(0,t.jsx)(e.h3,{id:"ingest-the-data-into-siglens",children:"Ingest the data into SigLens"}),"\n",(0,t.jsx)(e.p,{children:"Run the following script to download, decompress, and ingest the data into SigLens."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'export NUM_FILES=20\n\ncd sigscalr-client\nmkdir benchmark_data\ncd benchmark_data\n\n# Download compressed data.\necho "Downloading $NUM_FILES of 20 files..."\nfor i in $(seq 0 $(($NUM_FILES - 1))); do\n\twget "https://datasets-documentation.s3.eu-west-3.amazonaws.com/nyc-taxi/trips_$i.gz" &\ndone\nwait\n\n# Decompress.\ngunzip trips_*gz\n\n# Go back to the sigscalr-client base directory.\ncd ..\n\n# Convert to JSON.\nfor i in $(seq 0 $(($NUM_FILES - 1))); do\n\tgo run cmd/utils/converter.go --input "benchmark_data/trips_$i" --output "benchmark_data/trips_$i.json" &\ndone\nwait\n\n# Ingest into SigLens.\nfor i in $(seq 0 $(($NUM_FILES - 1))); do\n    python3 ../ingester.py benchmark_data/trips_$i.json &\ndone\nwait\n'})}),"\n",(0,t.jsx)(e.h3,{id:"restart-siglens",children:"Restart SigLens"}),"\n",(0,t.jsx)(e.p,{children:"This step is to ensure that SigLens flushes all the ingested data. Simply Ctrl-C the process in Terminal 1 and restart it with"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"sudo go run cmd/siglens/main.go --config server.yaml\n"})}),"\n",(0,t.jsx)(e.h3,{id:"view-logs",children:"View Logs"}),"\n",(0,t.jsx)(e.p,{children:"In terminal 2, run:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"cd /mnt/nvme1n1/siglens\nsudo tail -f siglens.log\n"})}),"\n",(0,t.jsx)(e.h3,{id:"run-the-queries-in-siglens",children:"Run the Queries in SigLens"}),"\n",(0,t.jsxs)(e.p,{children:["Run the following in Terminal 3.\nIf Terminal 3 is on your local machine, make sure to replace ",(0,t.jsx)(e.code,{children:"localhost"})," with the IP of the server.\nYou can also append ",(0,t.jsx)(e.code,{children:" | python3 -m json.tool"})," to each curl request to format the responses nicely.\nCheck the log file ",(0,t.jsx)(e.code,{children:"siglens/siglens.log"})," for the query times."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'curl -X POST -d \'{\n    "searchText": "SELECT cab_type, count(*) FROM trips GROUP BY cab_type",\n    "index": "benchmark",\n    "startEpoch": "now-24h",\n    "endEpoch": "now",\n    "queryLanguage": "SQL"\n}\' http://localhost/api/search\n\ncurl -X POST -d \'{\n    "searchText": "SELECT passenger_count, avg(total_amount) FROM trips GROUP BY passenger_count",\n    "index": "benchmark",\n    "startEpoch": "now-24h",\n    "endEpoch": "now",\n    "queryLanguage": "SQL"\n}\' http://localhost/api/search\n\ncurl -X POST -d \'{\n    "searchText": "SELECT passenger_count, pickup_date, count(*) FROM trips GROUP BY passenger_count, pickup_date",\n    "index": "benchmark",\n    "startEpoch": "now-24h",\n    "endEpoch": "now",\n    "queryLanguage": "SQL"\n}\' http://localhost/api/search\n\ncurl -X POST -d \'{\n    "searchText": "SELECT passenger_count, pickup_date, trip_distance, count(*) FROM trips GROUP BY passenger_count, pickup_date, trip_distance",\n    "index": "benchmark",\n    "startEpoch": "now-24h",\n    "endEpoch": "now",\n    "queryLanguage": "SQL"\n}\' http://localhost/api/search\n'})}),"\n",(0,t.jsx)(e.h2,{id:"benchmark-clickhouse",children:"Benchmark ClickHouse"}),"\n",(0,t.jsx)(e.h3,{id:"ingest-the-data-into-clickhouse",children:"Ingest the data into ClickHouse"}),"\n",(0,t.jsx)(e.h3,{id:"install-clickhouse",children:"Install ClickHouse"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'# Prepare to install ClickHouse\nsudo apt-get install -y apt-transport-https ca-certificates dirmngr\nGNUPGHOME=$(mktemp -d)\nsudo GNUPGHOME="$GNUPGHOME" gpg --no-default-keyring --keyring /usr/share/keyrings/clickhouse-keyring.gpg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 8919F6BD2B48D754\nsudo rm -r "$GNUPGHOME"\nsudo chmod +r /usr/share/keyrings/clickhouse-keyring.gpg\n\necho "deb [signed-by=/usr/share/keyrings/clickhouse-keyring.gpg] https://packages.clickhouse.com/deb stable main" | sudo tee \\\n    /etc/apt/sources.list.d/clickhouse.list\nsudo apt-get update\n\n# Install ClickHouse server and client\nsudo apt-get install -y clickhouse-server clickhouse-client\n'})}),"\n",(0,t.jsxs)(e.p,{children:["You should get the prompt ",(0,t.jsx)(e.code,{children:"Enter password for default user:"}),".\nEither create a pasword or just press enter to have no password."]}),"\n",(0,t.jsx)(e.h3,{id:"run-clickhouse",children:"Run ClickHouse"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"sudo service clickhouse-server start\nclickhouse-client\n"})}),"\n",(0,t.jsx)(e.h3,{id:"make-the-clickhouse-table",children:"Make the ClickHouse Table"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"CREATE TABLE trips (\n    trip_id UInt32,\n    vendor_id Enum8('1' = 1, '2' = 2, 'CMT' = 3, 'VTS' = 4, 'DDS' = 5, 'B02512' = 10, 'B02598' = 11, 'B02617' = 12, 'B02682' = 13, 'B02764' = 14),\n    pickup_date Date,\n    pickup_datetime DateTime,\n    dropoff_date Date,\n    dropoff_datetime DateTime,\n    store_and_fwd_flag UInt8,\n    rate_code_id UInt8,\n    pickup_longitude Float64,\n    pickup_latitude Float64,\n    dropoff_longitude Float64,\n    dropoff_latitude Float64,\n    passenger_count UInt8,\n    trip_distance Float64,\n    fare_amount Float32,\n    extra Float32,\n    mta_tax Float32,\n    tip_amount Float32,\n    tolls_amount Float32,\n    ehail_fee Float32,\n    improvement_surcharge Float32,\n    total_amount Float32,\n    payment_type_ Enum8('UNK' = 0, 'CSH' = 1, 'CRE' = 2, 'NOC' = 3, 'DIS' = 4),\n    trip_type UInt8,\n    pickup FixedString(25),\n    dropoff FixedString(25),\n    cab_type Enum8('yellow' = 1, 'green' = 2, 'uber' = 3),\n    pickup_nyct2010_gid Int8,\n    pickup_ctlabel Float32,\n    pickup_borocode UInt8,\n    pickup_boroname Enum8('' = 0, 'Manhattan' = 1, 'Bronx' = 2, 'Brooklyn' = 3, 'Queens' = 4, 'Staten Island' = 5),\n    pickup_ct2010 FixedString(16),\n    pickup_boroct2010 FixedString(7),\n    pickup_cdeligibil Enum8(' ' = 0, 'E' = 1, 'I' = 2),\n    pickup_ntacode FixedString(4),\n    pickup_ntaname String,\n    pickup_puma UInt16,\n    dropoff_nyct2010_gid UInt8,\n    dropoff_ctlabel Float32,\n    dropoff_borocode UInt8,\n    dropoff_boroname Enum8('' = 0, 'Manhattan' = 1, 'Bronx' = 2, 'Brooklyn' = 3, 'Queens' = 4, 'Staten Island' = 5),\n    dropoff_ct2010 FixedString(16),\n    dropoff_boroct2010 FixedString(7),\n    dropoff_cdeligibil Enum8(' ' = 0, 'E' = 1, 'I' = 2),\n    dropoff_ntacode FixedString(4),\n    dropoff_ntaname String,\n    dropoff_puma UInt16)\nENGINE = MergeTree()\nORDER BY (pickup_date, pickup_datetime)\nSETTINGS index_granularity=8192\n"})}),"\n",(0,t.jsx)(e.h3,{id:"ingest-the-data",children:"Ingest the Data"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"INSERT INTO trips\nSELECT\n    trip_id,\n    vendor_id,\n    pickup_date,\n    pickup_datetime,\n    dropoff_date,\n    dropoff_datetime,\n    store_and_fwd_flag,\n    rate_code_id,\n    pickup_longitude,\n    pickup_latitude,\n    dropoff_longitude,\n    dropoff_latitude,\n    passenger_count,\n    trip_distance,\n    fare_amount,\n    extra,\n    mta_tax,\n    tip_amount,\n    tolls_amount,\n    ehail_fee,\n    improvement_surcharge,\n    total_amount,\n    payment_type_,\n    trip_type,\n    pickup,\n    dropoff,\n    cab_type,\n    pickup_nyct2010_gid,\n    pickup_ctlabel,\n    pickup_borocode,\n    pickup_boroname,\n    pickup_ct2010,\n    pickup_boroct2010,\n    pickup_cdeligibil,\n    pickup_ntacode,\n    pickup_ntaname,\n    pickup_puma,\n    dropoff_nyct2010_gid,\n    dropoff_ctlabel,\n    dropoff_borocode,\n    dropoff_boroname,\n    dropoff_ct2010,\n    dropoff_boroct2010,\n    dropoff_cdeligibil,\n    dropoff_ntacode,\n    dropoff_ntaname,\n    dropoff_puma\nFROM s3(\n    'https://datasets-documentation.s3.eu-west-3.amazonaws.com/nyc-taxi/trips_{0..19}.gz',\n    'TabSeparatedWithNames'\n);\n"})}),"\n",(0,t.jsx)(e.h3,{id:"run-the-queries-in-clickhouse",children:"Run the Queries in ClickHouse"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"# Query 1\nSELECT cab_type, count(*) FROM trips GROUP BY cab_type\n\n# Query 2\nSELECT passenger_count, avg(total_amount) FROM trips GROUP BY passenger_count\n\n# Query 3\nSELECT passenger_count, pickup_date, count(*) FROM trips GROUP BY passenger_count, pickup_date\n\n# Query 4\nSELECT passenger_count, pickup_date, trip_distance, count(*)\nFROM trips\nGROUP BY passenger_count, pickup_date, trip_distance\n"})})]})}function p(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},1151:(n,e,s)=>{s.d(e,{Z:()=>r,a:()=>o});var t=s(7294);const i={},a=t.createContext(i);function o(n){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);