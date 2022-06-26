var suggestions=document.getElementById("suggestions"),userinput=document.getElementById("userinput");document.addEventListener("keydown",inputFocus);function inputFocus(e){e.keyCode===191&&(e.preventDefault(),userinput.focus()),e.keyCode===27&&(userinput.blur(),suggestions.classList.add("d-none"))}document.addEventListener("click",function(e){var t=suggestions.contains(e.target);t||suggestions.classList.add("d-none")}),document.addEventListener("keydown",suggestionFocus);function suggestionFocus(e){const s=suggestions.querySelectorAll("a"),o=[...s],t=o.indexOf(document.activeElement);let n=0;e.keyCode===38?(e.preventDefault(),n=t>0?t-1:0,s[n].focus()):e.keyCode===40&&(e.preventDefault(),n=t+1<o.length?t+1:t,s[n].focus())}(function(){var e=new FlexSearch.Document({tokenize:"forward",cache:100,document:{id:"id",store:["href","title","description"],index:["title","description","content"]}});e.add({id:0,href:"/docs/explorer/dashboard/",title:"Dashboard",description:"",content:`\u003ch3 id="monitors"\u003eMonitors\u003c/h3\u003e
\u003cp\u003eText about Monitors\u003c/p\u003e
\u003ch3 id="details"\u003eDetails\u003c/h3\u003e
\u003cp\u003eText about Details\u003c/p\u003e
\u003ch4 id="charts"\u003eCharts\u003c/h4\u003e
\u003cp\u003eText about Charts\u003c/p\u003e
\u003ch4 id="history"\u003eHistory\u003c/h4\u003e
\u003cp\u003eText about History\u003c/p\u003e
\u003ch5 id="event"\u003eEvent\u003c/h5\u003e
\u003cp\u003eText about History-Events\u003c/p\u003e
\u003ch5 id="function"\u003eFunction\u003c/h5\u003e
\u003cp\u003eText about History-Functions\u003c/p\u003e
\u003ch5 id="reconciliations"\u003eReconciliations\u003c/h5\u003e
\u003cp\u003eText about History-Reconciliations\u003c/p\u003e
\u003ch5 id="custom"\u003eCustom\u003c/h5\u003e
\u003cp\u003eText about Custom\u003c/p\u003e
\u003ch4 id="events"\u003eEvents\u003c/h4\u003e
\u003cp\u003eText about Events\u003c/p\u003e
\u003ch4 id="functions"\u003eFunctions\u003c/h4\u003e
\u003cp\u003eText about Functions\u003c/p\u003e
\u003ch4 id="gas"\u003eGas\u003c/h4\u003e
\u003cp\u003eText about Gas\u003c/p\u003e
\u003ch4 id="neighbors"\u003eNeighbors\u003c/h4\u003e
\u003cp\u003eText about Neighbors\u003c/p\u003e
\u003ch3 id="collections"\u003eCollections\u003c/h3\u003e
\u003cp\u003eText about Collections\u003c/p\u003e
`}).add({id:1,href:"/docs/explorer/names/",title:"Names",description:"",content:`\u003ch3 id="named-addresses"\u003eNamed Addresses\u003c/h3\u003e
\u003cp\u003eText about Named Addresses\u003c/p\u003e
\u003ch3 id="address-tags"\u003eAddress Tags\u003c/h3\u003e
\u003cp\u003eText about Address Tags\u003c/p\u003e
\u003ch3 id="signatures"\u003eSignatures\u003c/h3\u003e
\u003cp\u003eText about Signatures\u003c/p\u003e
\u003ch3 id="named-blocks"\u003eNamed Blocks\u003c/h3\u003e
\u003cp\u003eText about Named Blocks\u003c/p\u003e
`}).add({id:2,href:"/docs/explorer/explorer/",title:"Explore",description:"",content:`\u003ch3 id="blocks"\u003eBlocks\u003c/h3\u003e
\u003cp\u003eText about Blocks\u003c/p\u003e
\u003ch3 id="transactions"\u003eTransactions\u003c/h3\u003e
\u003cp\u003eText about Transactions\u003c/p\u003e
\u003ch3 id="receipts"\u003eReceipts\u003c/h3\u003e
\u003cp\u003eText about Receipts\u003c/p\u003e
\u003ch3 id="logs"\u003eLogs\u003c/h3\u003e
\u003cp\u003eText about Logs\u003c/p\u003e
\u003ch3 id="traces"\u003eTraces\u003c/h3\u003e
\u003cp\u003eText about Traces\u003c/p\u003e
`}).add({id:3,href:"/docs/explorer/settings/",title:"Settings",description:"",content:`\u003ch3 id="scrapers"\u003eScrapers\u003c/h3\u003e
\u003cp\u003eText about Scrapers\u003c/p\u003e
\u003ch3 id="indexes"\u003eIndexes\u003c/h3\u003e
\u003cp\u003eText about Indexes\u003c/p\u003e
\u003ch3 id="caches"\u003eCaches\u003c/h3\u003e
\u003cp\u003eText about Caches\u003c/p\u003e
\u003ch3 id="skins"\u003eSkins\u003c/h3\u003e
\u003cp\u003eText about Skins\u003c/p\u003e
\u003ch3 id="data-model"\u003eData Model\u003c/h3\u003e
\u003cp\u003eText about Data Model\u003c/p\u003e
`}).add({id:4,href:"/docs/explorer/support/",title:"Support",description:"",content:`\u003ch3 id="contact-us"\u003eContact Us\u003c/h3\u003e
\u003cp\u003eText about Contact Us\u003c/p\u003e
\u003ch3 id="documentation"\u003eDocumentation\u003c/h3\u003e
\u003cp\u003eText about Documentation\u003c/p\u003e
\u003ch3 id="hot-keys"\u003eHot Keys\u003c/h3\u003e
\u003cp\u003eText about Hot Keys\u003c/p\u003e
\u003ch3 id="licensing"\u003eLicensing\u003c/h3\u003e
\u003cp\u003eText about Licensing\u003c/p\u003e
\u003ch3 id="about-us"\u003eAbout Us\u003c/h3\u003e
\u003cp\u003eText about About Us\u003c/p\u003e
`}).add({id:5,href:"/docs/",title:"Problem Statement",description:"TrueBlocks Docs",content:`\u003cp\u003eIf you\u0026rsquo;re like us, you fell in love with blockchains because of the promise they provide: world-wide, private, and permissionless
access to the most accurate and agreed-upon data ever produced. Near perfect data.\u003c/p\u003e
\u003cp\u003eBut in reality, it\u0026rsquo;s as if we\u0026rsquo;re just lost at sea. Awash in bytes.\u003c/p\u003e
\u003cimg src="/docs/img/steam-boat-off-a-harbor.jpg" alt="Who's stearing this boat?" width="500"/\u003e
\u003ch2 id="world-wide"\u003eWorld-wide\u003c/h2\u003e
\u003cp\u003eBlockchains are supposed to be world-wide. Are they? Yes, they are.\u003c/p\u003e
\u003ch2 id="permissionless"\u003ePermissionless\u003c/h2\u003e
\u003cp\u003eBlockchains are supposed to be permissionless. Are they? Not really.\u003c/p\u003e
\u003ch2 id="accurate"\u003eAccurate\u003c/h2\u003e
\u003cp\u003eBlockchains are supposed to be accurate. Are they? Well\u0026hellip;on-chain they are, but
off-chain, not even close. Ask any crypto-accountant.\u003c/p\u003e
\u003ch2 id="problem-statement"\u003eProblem statement\u003c/h2\u003e
\u003cp\u003eIt is true that anyone may send a transaction to a blockchain. All one needs is a wallet and access to an RPC\u0026hellip;
wait\u0026hellip;access to an RPC\u0026hellip;is that permissionless? Unless you\u0026rsquo;re running your own node, no, it\u0026rsquo;s not.\u003c/p\u003e
\u003cp\u003eIt\u0026rsquo;s worse than that. Not only must you ask permission to send a transaction, you must
ask permission to see the results. \u0026ldquo;Please Mr. Massive Blockchain Explorer in the Sky\u0026hellip;
please may I see my transactions? Oh, and by the way, you\u0026rsquo;re not watching me are you?\u0026rdquo;\u003c/p\u003e
\u003cp\u003eWorse even yet, have you ever actually tried to deeply understand what the blockchain explorer
is showing you? And why, after paying hundreds of dollars, does you crypto tax report have
massive, obvious errors?\u003c/p\u003e
\u003cp\u003eTrueBlocks can\u0026rsquo;t solve the first problem \u0026ndash; eventually you\u0026rsquo;re going to have to provide your
own access if you want the true benefits of decentralization. Luckily there are emerging
solutions such as \u003ca href="https://dappnode.io/"\u003edAppNode\u003c/a\u003e and \u003ca href="https://ava.do/"\u003eAvado\u003c/a\u003e.\u003c/p\u003e
\u003cp\u003eTrueBlocks can, however, solve the other two problems \u0026ndash; accurate, private access to your
own transactions.\u003c/p\u003e
\u003chr\u003e
\u003cp\u003eLike Infura, anyone may visit EtherScan. That is true. Both of those systems are kind enough to
give us (give us!) whatever we ask for. But how long do you think it will take before they realize
(hint: they\u0026rsquo;ve already have) how valuable thier position in the ecosystem is? Do you think they\u0026rsquo;re
not paying attention to what you\u0026rsquo;re doing? Do you think they\u0026rsquo;re not connecting your Ethereum address
to your IP address? I would be if I were them.\u003c/p\u003e
\u003cp\u003eWebsites and APIs are inherently the wrong solution for decentralized data for a number of reasons:\u003c/p\u003e
\u003col\u003e
\u003cli\u003eThey can see who you are because your browser tells them your IP address (not private!).\u003c/li\u003e
\u003cli\u003eBecause their resources are shared among many users, they must protect thier system by rate limiting you (not permissionless!)
\u003col\u003e
\u003cli\u003eThey use you IP address to rate limit you - that is, they know who you are each time you arrive\u003c/li\u003e
\u003c/ol\u003e
\u003c/li\u003e
\u003cli\u003eEvery time you visit EtherScan or use Infura, you do it with the same Ethereum address\u003c/li\u003e
\u003cli\u003eThey know who you are \u0026ndash; they know your address \u0026ndash; they know your spending habits \u0026ndash; that\u0026rsquo;s terrible for you\u003c/li\u003e
\u003c/ol\u003e
\u003cp\u003eWebsites and APIs are terrible for you. If you think your privacy is being invaded today, wait until you start
telling them, with near perfect data, exactly what you spend your money on.\u003c/p\u003e
\u003cp\u003eWe all see this coming. No-one seems to want to do anything about it. In fact, we see an increasingly competitive
environment to provide you ingress and egress to the chain.\u003c/p\u003e
\u003ch2 id="solution"\u003eSolution\u003c/h2\u003e
\u003cp\u003e\u003ca href="https://dappnode.io/"\u003edAppNode\u003c/a\u003e, \u003ca href="https://github.com/ledgerwatch/erigon"\u003eErigon\u003c/a\u003e and TrueBlocks.\u003c/p\u003e
`}).add({id:6,href:"/docs/install/install-trueblocks/",title:"Install TrueBlocks core",description:"TrueBlocks works on Linux and Mac",content:`\u003c!---
The links in this section are hard coded so that can be pasted into the
directory README.
--\u003e
\u003cp\u003eThese instructions assume you can navigate the command line and edit configuration files.
If you need help with a particular step, see the \u003ca href="/docs/install/install-trueblocks/#troubleshooting"\u003einstallation\u0026rsquo;s troubleshooting section\u003c/a\u003e.\u003c/p\u003e
\u003ch2 id="quick-install"\u003eQuick Install\u003c/h2\u003e
\u003col start="0"\u003e
\u003cli\u003eUpdate GoLang installation
\u003cul\u003e
\u003cli\u003e\u003ccode\u003ego version\u003c/code\u003e\u003c/li\u003e
\u003cli\u003e\u003cem\u003eIf your version is less than 1.16,\u003c/em\u003e \u003ca href="/docs/install/install-trueblocks/#how-do-i-check-my-go-version"\u003einstall Go\u003c/a\u003e\u003c/li\u003e
\u003c/ul\u003e
\u003c/li\u003e
\u003c/ol\u003e
\u003cbr/\u003e
\u003col\u003e
\u003cli\u003e
\u003cp\u003eCheck other build dependancies or install\u003c/p\u003e
\u003cul\u003e
\u003cli\u003e☑ \u003ca href="/docs/install/install-trueblocks/#how-do-i-install-packages-on-the-command-line"\u003eInstall the other dependencies\u003c/a\u003e
\u003cbr/\u003e\u003cbr/\u003e\u003c/li\u003e
\u003c/ul\u003e
\u003c/li\u003e
\u003cli\u003e
\u003cp\u003eClone the repo and compile from the codebase.\u003c/p\u003e
\u003cp\u003e\u003csmall\u003e\u003cem\u003eWhile TrueBlocks is still alpha, use the \u003ccode\u003edevelop\u003c/code\u003e branch (we hope to release beta by January, 2022).\u003c/em\u003e\u003c/small\u003e\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-shell"\u003egit clone -b develop https://github.com/trueblocks/trueblocks-core
cd trueblocks-core
git checkout develop
mkdir build \u0026amp;\u0026amp; cd build
cmake ../src
make
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003e\u003csmall\u003e\u003cem\u003e(You may use \u003ccode\u003emake -j nproc\u003c/code\u003e to parallelize the build.)\u003c/em\u003e\u003c/small\u003e\u003c/p\u003e
\u003c/li\u003e
\u003cli\u003e
\u003cp\u003eAdd \u003ccode\u003etrueblocks-core/bin\u003c/code\u003e to your shell PATH.\u003c/p\u003e
\u003c/li\u003e
\u003cli\u003e
\u003cp\u003eFind your TrueBlocks configuration directory. It should be in one of these places:\u003c/p\u003e
\u003cul\u003e
\u003cli\u003eOn linux at \u003ccode\u003e~/.local/share/trueblocks\u003c/code\u003e\u003c/li\u003e
\u003cli\u003eOn mac at \u003ccode\u003e~/Library/Application Support/TrueBlocks\u003c/code\u003e\u003c/li\u003e
\u003cli\u003eIf you\u0026rsquo;ve configured it, wherever the location of \u003ccode\u003e\$XDG_CONFIG_HOME\u003c/code\u003e is
\u003cbr/\u003e\u003cbr/\u003e\u003c/li\u003e
\u003c/ul\u003e
\u003c/li\u003e
\u003cli\u003e
\u003cp\u003eIn the configuration directory, edit \u003ccode\u003etrueblocks.toml\u003c/code\u003e to add your RPC and
API keys. It should look something like this:\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-toml"\u003e[settings]
rpcProvider = \u0026quot;\u0026lt;url-to-rpc-endpoint\u0026gt;\u0026quot;
\u003c/code\u003e\u003c/pre\u003e
\u003c/li\u003e
\u003cli\u003e
\u003cp\u003eTest a command!\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-shell"\u003echifra blocks 12345
\u003c/code\u003e\u003c/pre\u003e
\u003c/li\u003e
\u003c/ol\u003e
\u003ch3 id="optional-steps"\u003eOptional steps\u003c/h3\u003e
\u003col start="6"\u003e
\u003cli\u003eTo make deep data queries, \u003ca href="/docs/install/get-the-index/"\u003eget the index\u003c/a\u003e\u003c/li\u003e
\u003cli\u003eTo explore the data visually, \u003ca href="/docs/install/install-explorer/"\u003einstall the explorer application\u003c/a\u003e.\u003c/li\u003e
\u003c/ol\u003e
\u003ch2 id="troubleshooting"\u003eTroubleshooting\u003c/h2\u003e
\u003cp\u003eHere are some problems users have run into at each step.
If you\u0026rsquo;re still having trouble, \u003ca href="https://github.com/TrueBlocks/trueblocks-core/issues"\u003ecreate an issue\u003c/a\u003e,
or ask us on discord.\u003c/p\u003e
\u003ch3 id="dependencies"\u003eDependencies\u003c/h3\u003e
\u003ch4 id="how-do-i-check-my-go-version"\u003eHow do I check my Go version?\u003c/h4\u003e
\u003cp\u003eRun this command\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-shell"\u003ego version
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003eTrueBlocks needs version 1.16.x or later. If you to install or update Go, \u003ca href="https://golang.org/doc/install"\u003esee here\u003c/a\u003e.\u003c/p\u003e
\u003ch4 id="how-do-i-install-packages-on-the-command-line"\u003eHow do I install packages on the command line?\u003c/h4\u003e
\u003cul\u003e
\u003cli\u003e
\u003cp\u003eFor Linux\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-shell"\u003esudo apt install build-essential git cmake ninja-build python python-dev libcurl3-dev clang-format jq
\u003c/code\u003e\u003c/pre\u003e
\u003c/li\u003e
\u003cli\u003e
\u003cp\u003eFor Mac:\u003c/p\u003e
\u003cp\u003e\u003cem\u003eFor best results, we recommend running MacOS Big Sur or later.\u003c/em\u003e\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-shell"\u003ebrew install cmake ninja
brew install git
brew install clang-format
brew install jq
\u003c/code\u003e\u003c/pre\u003e
\u003c/li\u003e
\u003c/ul\u003e
\u003ch3 id="compiling"\u003eCompiling\u003c/h3\u003e
\u003ch4 id="how-many-cores-can-i-use-to-make-trueblocks"\u003eHow many cores can I use to make TrueBlocks?\u003c/h4\u003e
\u003cp\u003eWhen you run \u003ccode\u003emake\u003c/code\u003e, you can speed up the build by parallelizing with\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-shell"\u003emake -j \u0026lt;ncores\u0026gt;
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003eWhere \u003ccode\u003e\u0026lt;ncores\u0026gt;\u003c/code\u003e represents the number of cores to devote to the job.
How many cores can you use? That depends on many factors. A handy tool is \u003ccode\u003enproc\u003c/code\u003e,
which identifies the machine\u0026rsquo;s number of available processing units.\u003c/p\u003e
\u003cp\u003eIf you have \u003ccode\u003enproc\u003c/code\u003e installed, you can safely parallelize the build with this command\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-shell"\u003emake -j \`nproc\`
\u003c/code\u003e\u003c/pre\u003e
\u003ch4 id="how-do-i-know-if-compilation-was-successful"\u003eHow do I know if compilation was successful?\u003c/h4\u003e
\u003cp\u003eFrom the \u003ccode\u003etrueblocks-core\u003c/code\u003e directory, test your install with this command:\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-shell"\u003e../bin/chifra --version
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003eYou should get a version string similar to this:\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-shell"\u003etrueBlocks GHC-TrueBlocks//0.9.0-alpha-409aa9388-20210503
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003eIf nothing outputs, the build has failed. Try repeating the instructions.
If it still fails, make an issue.\u003c/p\u003e
\u003ch3 id="how-do-i-export-to-path"\u003eHow do I export to PATH?\u003c/h3\u003e
\u003cp\u003e\u003ccode\u003echifra\u003c/code\u003e only works if its underlying tools are found in your \u003ccode\u003e\$PATH.\u003c/code\u003e
To find the full path, run this from the top of the \u003ccode\u003etrueblocks-core\u003c/code\u003e directory.\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-shell"\u003ecd bin \u0026amp;\u0026amp; pwd \u0026amp;\u0026amp; cd -
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003eAdd the result of that command to your shell’s \u003ccode\u003e\$PATH\u003c/code\u003e.\u003c/p\u003e
\u003cp\u003eHow you do that depends on your system.
In Bash, you\u0026rsquo;re probably going to put something like this in your \u003ccode\u003e.bashrc\u003c/code\u003e:\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-shell"\u003eexport PATH=\${PATH}:\u0026lt;/path/to/trueblocks-core/directory\u0026gt;/bin
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003eIf you are confused, a Google search may be in order…\u003c/p\u003e
\u003ch3 id="configuration"\u003eConfiguration\u003c/h3\u003e
\u003ch4 id="where-is-the-configuration"\u003eWhere is the configuration?\u003c/h4\u003e
\u003cp\u003eWhere your configuration folder is depends on your operating system
and environment.\u003c/p\u003e
\u003cul\u003e
\u003cli\u003eIf \u003ccode\u003eXDG_CONFIG_HOME\u003c/code\u003e is set, your configuration is there\u003c/li\u003e
\u003cli\u003eOtherwise, on Linux: \u003ccode\u003e~/.local/share/trueblocks\u003c/code\u003e\u003c/li\u003e
\u003cli\u003eOtherwise, on Mac: \u003ccode\u003e~/Library/Application Support/TrueBlocks\u003c/code\u003e\u003c/li\u003e
\u003cli\u003eOtherwise, you\u0026rsquo;re out of luck\u0026ndash;we only support Linux and Mac\u003c/li\u003e
\u003c/ul\u003e
\u003cp\u003eThe primary or base configuration file (\u003ccode\u003etrueBlocks.toml\u003c/code\u003e) must exist at one
of the above locations for \u003ccode\u003echifra\u003c/code\u003e to work.\u003c/p\u003e
\u003cp\u003eWith the recent addition of support for multi-chain, there has arisen the need
for per-chain configuration as well (for example, values such as \u003ccode\u003erpcProvider\u003c/code\u003e or
\u003ccode\u003eremoteExplorer\u003c/code\u003e are unique per chain).\u003c/p\u003e
\u003cp\u003eThis issue is discussed here \u003ca href="#"\u003eTODO: PLACE_HOLDER\u003c/a\u003e.\u003c/p\u003e
\u003ch4 id="how-do-i-specify-an-rpc-endpoint"\u003eHow do I specify an RPC endpoint?\u003c/h4\u003e
\u003cp\u003eBy default, TrueBlocks looks for the RPC at \u003ccode\u003ehttp://localhost:8545/\u003c/code\u003e.\u003c/p\u003e
\u003cp\u003eIf you are using a remote RPC such as Infura or your own local RPC at
a different port, you will need to modify that value.\u003c/p\u003e
\u003cp\u003eAs is true of all configuration values, you coudl use an environment
variable as described above, but you may also edit \u003ccode\u003etrueBlocks.toml\u003c/code\u003e.\u003c/p\u003e
\u003cp\u003eThe format of that file is documented \u003ca href="#"\u003eTODO: PLACE_HOLDER\u003c/a\u003e.\u003c/p\u003e
\u003ch4 id="how-do-i-add-a-etherscan-key"\u003eHow do I add a EtherScan key?\u003c/h4\u003e
\u003cp\u003eSome small part of TrueBlocks requires an EtherScan API key. In particular
this is the \u003ca href="/docs/chifra/chaindata/"\u003e\u003ccode\u003e--articulate\u003c/code\u003e option\u003c/a\u003e. We are working
hard to remove this centralized dependency, but in the mean time you
may get a warning of a missing key.\u003c/p\u003e
\u003cp\u003eHere’s an example of a remote RPC for Infura and an EtherScan API key.
\u003cem\u003e\u003cstrong\u003eWarning: see the note below\u003c/strong\u003e\u003c/em\u003e\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-TOML"\u003e[settings]
default_chain=mainnet
etherscan_key = \u0026quot;\u0026lt;key_value\u0026gt;\u0026quot;

[mainnet]
rpcProvider = \u0026quot;https://mainnet.infura.io/v3/\u0026lt;key_value\u0026gt;\u0026quot;
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003e\u003cem\u003e\u003cstrong\u003eNote:\u003c/strong\u003e\u003c/em\u003e Until mutli-chain is fully supported, put the \u003ccode\u003erpcProvider\u003c/code\u003e value
in the \u003ccode\u003e[settings]\u003c/code\u003e group.\u003c/p\u003e
\u003cp\u003e\u003cem\u003e\u003cstrong\u003eNote:\u003c/strong\u003e\u003c/em\u003e The EtherScan key is not \u003cem\u003eper-chain\u003c/em\u003e.\u003c/p\u003e
\u003ch3 id="why-do-i-need-the-index-of-appearances"\u003eWhy do I need the index of appearances?\u003c/h3\u003e
\u003cp\u003eIf you\u0026rsquo;re only querying basic block or transaction data, you don\u0026rsquo;t really
need the index of appearances.\u003c/p\u003e
\u003cp\u003eHowever, most of our users with to explore the entire history of their own
addresses. If you wish to do that, you will need the index.\u003c/p\u003e
\u003cp\u003eThere are multiple options for getting the index, which the
\u003ca href="/docs/install/get-the-index"\u003eHow Can I Get the Index?\u003c/a\u003e article covers
in more detail.\u003c/p\u003e
\u003cp\u003eNo matter which method you use, downloading or creating the index will take
somewhere between a few minutes and a day or two. So you might want to play
around with some \u003ca href="/docs/chifra/chaindata"\u003echifra blockchain commands\u003c/a\u003e first.\u003c/p\u003e
\u003ch3 id="no-tracing"\u003eWhat if my node doesn\u0026rsquo;t have tracing or archiving?\u003c/h3\u003e
\u003cp\u003eIf the node you\u0026rsquo;re running does not support OpenEthereum style tracing or it
is not an archive node, you may get an error telling you such.\u003c/p\u003e
\u003cp\u003eSomething like\u003c/p\u003e
\u003cblockquote\u003e
\u003cp\u003e\u003ccode\u003e --accounting requires historical balances. The RPC server does not have them. Quitting...\u003c/code\u003e\u003c/p\u003e
\u003c/blockquote\u003e
\u003cp\u003eYou may disable this warning by editing a configuration file. Find the file
called \u003ccode\u003eblockScrape.toml\u003c/code\u003e in your configuration folder (in a multi-chain environment
this will be in the chain-specific config file, otherwise at the top level).\u003c/p\u003e
\u003cp\u003eAdd the following setting to the file (which you may create if it doesn\u0026rsquo;t exist):\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-toml"\u003e[requires]
tracing = false
archive = false
\u003c/code\u003e\u003c/pre\u003e
`}).add({id:7,href:"/docs/prologue/about-trueblocks/",title:"About TrueBlocks",description:"How does TrueBlocks address the problem",content:`\u003ch2 id="trueblocks-provides-a-solution"\u003eTrueBlocks provides a solution\u003c/h2\u003e
\u003cp\u003eWe think there are at least three fundamental problems with the current Ethereum ecosystem:\u003c/p\u003e
\u003col\u003e
\u003cli\u003eIt\u0026rsquo;s difficult to run your own Ethereum node (not really, see below).\u003c/li\u003e
\u003cli\u003eEven if one runs a node, getting useful data is nearly impossible.\u003c/li\u003e
\u003cli\u003eAll current solutions end up with a winner-take-all central database just like Google.\u003c/li\u003e
\u003c/ol\u003e
\u003cp\u003eWe discuss each of these problems below.\u003c/p\u003e
\u003ch3 id="ethereum-nodes-are-difficult-to-run"\u003eEthereum nodes are difficult to run\u003c/h3\u003e
\u003cp\u003eVitalik once called the Ethereum client software a \u0026ldquo;Big, Hairy node.\u0026rdquo; No wonder people think they are hard to run.\u003c/p\u003e
\u003cp\u003eBut, with the recent arrival of \u003ca href="https://dappnode.io/"\u003edAppNode\u003c/a\u003e and \u003ca href="https://ava.do/"\u003eAvado\u003c/a\u003e things
have gotten much easier. Each of these products allows you to buy a machine, plug it in the wall,
and your soon you\u0026rsquo;re running your own node.\u003c/p\u003e
\u003cp\u003eYou should to this now. Buy a dAppNode, plug it in, and enjoy the benefits of running your own node. Why wait?\u003c/p\u003e
\u003ch3 id="useful-data-is-hard-to-get"\u003eUseful data is hard to get\u003c/h3\u003e
\u003cp\u003eIt is our strong beleif that the Ethereum RPC is broken. It\u0026rsquo;s missing something. An index by address.\u003c/p\u003e
\u003cp\u003eThe goal of TrueBlocks is to provide exactly that missing peice. We call our solution the \u003ca href="/docs/install/get-the-index/"\u003eUnchained Index\u003c/a\u003e.\u003c/p\u003e
\u003cp\u003eThe Unchained Index is created locally on your machine \u0026ndash; on the dAppNode. As a direct result of being local, the index has a number of amazing qualities:\u003c/p\u003e
\u003col\u003e
\u003cli\u003e\u003cstrong\u003eIt fixes the broken node:\u003c/strong\u003e Without an index, one cannot query the node for a \u0026ldquo;list of everything that ever happened to an address.\u0026rdquo; With one, which is what the Unchained Index provides, one can make such a query. In effect this turns the node from a \u0026ldquo;really shitting database,\u0026rdquo; into a perfectly fine database.\u003c/li\u003e
\u003cli\u003e\u003cstrong\u003eNo rate limiting:\u003c/strong\u003e Because both your node and the Unchained Index are local and not shared with other users, there is no need for rate limiting. Your can query the local node 100s of times faster than you can an API. This has massive implications for the types of applications you can build.\u003c/li\u003e
\u003cli\u003e\u003cstrong\u003ePerfectly private:\u003c/strong\u003e All queries happen against your local node - you don\u0026rsquo;t expose your IP address to anyone, nor do you expose any information about which addresses you\u0026rsquo;re interested in.\u003c/li\u003e
\u003cli\u003e\u003cstrong\u003eFaster queries leads to a better index::\u003c/strong\u003e Because we can query so much faster, we can dig MUCH deeper into the details of every block. This means our index contains more information about where an address appears on the chain. In fact, in tests against two popular Ethereum APIs, we consistently find 20-30% more appearances.\u003c/li\u003e
\u003cli\u003e\u003cstrong\u003eMore appearances means more accurate results:\u003c/strong\u003e because our locally created index goes to a deeper level of detail, we can deliver to end user applications much more informative data. For example, we can fully reconcile transactions off-chain. Something not even the most expensive web-based services can do.\u003c/li\u003e
\u003cli\u003e\u003cstrong\u003eUnique user experience:\u003c/strong\u003e Because TrueBlocks is focused on the \u0026ldquo;account\u0026rdquo;, the user experience is cohesive \u0026ndash; everything about an account is brought together in single interface. No more visiting a different website for each different dApp you interact with.\u003c/li\u003e
\u003c/ol\u003e
\u003cp\u003eTrueBlocks ships with large suite of command line tools that allow you to make exactly the queries you want to make. One of the
command line options is an API server which allows you to build blindly-fast desktop applications. We\u0026rsquo;ve built an example of
such an application with our \u003ca href="/docs/install/install-explorer"\u003eAccount Explorer\u003c/a\u003e.\u003c/p\u003e
\u003ch3 id="avoiding-winner-take-all"\u003eAvoiding winner-take-all\u003c/h3\u003e
\u003cp\u003eIn it\u0026rsquo;s best incarnation, TrueBlocks runs locally against your own locally running node. If you build the thing yourself, no-one can take it away from you. After the initial syncronization of your node (Erigon, for example) which may take a few weeks, you can run one of TrueBlocks\u0026rsquo; command line tools called \u003ca href="/docs/chifra/admin/#chifra-scrape"\u003echifra scrape\u003c/a\u003e. This process takes a few days.\u003c/p\u003e
\u003cp\u003eTo ease the burden of having to create the Unchained Index yourself, you may download it from IPFS using \u003ca href="/docs/chifra/admin/#chifra-init"\u003echifra init\u003c/a\u003e. Putting this data on IPFS has the very interesting consequence of sharing it. This makes it impossible for us (or anyone) to become the \u0026ldquo;holder of all data\u0026rdquo; which eventually leads to winner-take-all like Google. We want to purposfully avoid that.\u003c/p\u003e
\u003cp\u003eThis whole process is \u003ca href="/docs/install/get-the-index/"\u003ebetter explained here\u003c/a\u003e.\u003c/p\u003e
\u003ch2 id="unchained-index-provides-huge-advantages"\u003eUnchained Index provides huge advantages\u003c/h2\u003e
\u003cp\u003eBesides the philosophical benefits, TrueBlocks is straight up more performant.\u003c/p\u003e
\u003cul\u003e
\u003cli\u003eQuerying straight from your hard drive is \u003cem\u003e100s of times faster than an API\u003c/em\u003e.\u003c/li\u003e
\u003cli\u003eA local binary cache makes subsequent queries \u003cem\u003enearly instantaneous\u003c/em\u003e.\u003c/li\u003e
\u003cli\u003eAvoiding a full extraction of the data from the node results in much lower hardware requirements: from \u003cem\u003eterabytes to gigabytes\u003c/em\u003e.\u003c/li\u003e
\u003cli\u003eBloom filters further reduce storage overhead and greatly lessen the search time for particular addresses.\u003c/li\u003e
\u003cli\u003eArticulation resolves the transactional detail at the byte level, \u003cem\u003eturning byte streams into human-readable data\u003c/em\u003e.\u003c/li\u003e
\u003cli\u003eThe data can be exported into many formats: \u003cem\u003eJSON, CSV, TSV, OFX, etc.\u003c/em\u003e\u003c/li\u003e
\u003c/ul\u003e
\u003cp\u003eTrueBlocks performs so well because the design data first. We are lifelong hackers, and we agree with \u003ca href="https://lwn.net/Articles/193245/"\u003eLinus Torvalds when he
said\u003c/a\u003e:\u003c/p\u003e
\u003cblockquote\u003e
\u003cp\u003eIn fact, I\u0026rsquo;m a huge proponent of designing your code around the data, rather than the other way around.\u003c/p\u003e
\u003c/blockquote\u003e
\u003ch2 id="more-words"\u003eMore words!\u003c/h2\u003e
\u003cp\u003eWe\u0026rsquo;ve got more words for you. \u003ca href="/blog/a-long-winded-explanation-of-trueblocks/"\u003eThis blog post covers these topics in much more detail\u003c/a\u003e.\u003c/p\u003e
`}).add({id:8,href:"/docs/install/get-the-index/",title:"Build Unchained Index",description:"There are three ways to get the index. Each way involves some tradeoff between initialization time, storage use, and local access.",content:`\u003ctable\u003e
\u003cthead\u003e
\u003ctr\u003e
\u003cth\u003eIf you want to\u0026hellip;\u003c/th\u003e
\u003cth\u003eand you don\u0026rsquo;t mind\u0026hellip;\u003c/th\u003e
\u003cth\u003ethen use\u0026hellip;\u003c/th\u003e
\u003c/tr\u003e
\u003c/thead\u003e
\u003ctbody\u003e
\u003ctr\u003e
\u003ctd\u003eminimize the size of the data stored locally and you want to get started faster\u0026hellip;\u003c/td\u003e
\u003ctd\u003eslower first-time queries on new addresses, an index that\u0026rsquo;s slightly behind the head of the chain, an index created by someone else\u0026hellip;\u003c/td\u003e
\u003ctd\u003e\u003ca href="#use-init-to-get-only-the-chunks-you-query"\u003e\u003ccode\u003echifra init\u003c/code\u003e\u003c/a\u003e\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003emaximize the speed of first-time queries for new addresses\u0026hellip;\u003c/td\u003e
\u003ctd\u003elonger initial setup time, ~70 GB of local storage, an index that\u0026rsquo;s slightly behind the head of the chain, an index created by someone else\u0026hellip;\u003c/td\u003e
\u003ctd\u003e\u003ca href="#use_init_all-to-get-all-index-chunks"\u003e\u003ccode\u003echifra init --all\u003c/code\u003e\u003c/a\u003e\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003ehave a fully-local index, built directly from your own node, that stays up with the chain and maximizes the speed of your queries\u0026hellip;\u003c/td\u003e
\u003ctd\u003etwo to three days setup time and running your own local node (such as dAppnode)\u0026hellip;.\u003c/td\u003e
\u003ctd\u003e\u003ca href="#use-scrape-to-build-your-own-index"\u003e\u003ccode\u003echifra scrape\u003c/code\u003e\u003c/a\u003e\u003c/td\u003e
\u003c/tr\u003e
\u003c/tbody\u003e
\u003c/table\u003e
\u003ch2 id="getting-the-index-without-running-a-node"\u003eGetting the index without running a node\u003c/h2\u003e
\u003cp\u003eIf you\u0026rsquo;re not running your own node (or you don\u0026rsquo;t feel like waiting), you can download all or part of a pre-built index from IPFS.\u003c/p\u003e
\u003cp\u003eTo do this, you have two options:\u003c/p\u003e
\u003cul\u003e
\u003cli\u003erun \u003ccode\u003echifra init\u003c/code\u003e to download only the Bloom filters. Then, as you query individual addresses, TrueBlocks will download the much-larger index chunks (\u003cem\u003efaster now, slower later\u003c/em\u003e)\u003c/li\u003e
\u003cli\u003erun \u003ccode\u003echifra init --all\u003c/code\u003e to download both the Bloom filters and the index chunks all at once (\u003cem\u003eslower now, faster later\u003c/em\u003e)\u003c/li\u003e
\u003c/ul\u003e
\u003ch3 id="use-chifra-init-to-get-a-subset-of-the-data"\u003eUse chifra init to get a subset of the data\u003c/h3\u003e
\u003cp\u003eTo get only the Bloom filters, run \u003ccode\u003echifra init\u003c/code\u003e.\u003c/p\u003e
\u003cp\u003eIf you do this, you will have to periodically re-run the command to update your index. (\u003ca href="#Supplementary-how-can-I-see-when-the-manifest-was-last-published"\u003eRead about the finding the latest manifest\u003c/a\u003e).\u003c/p\u003e
\u003cp\u003eFor more information, see the \u003ca href="/docs/chifra/admin#chifra-init"\u003e\u003ccode\u003echifra init\u003c/code\u003e command documentation\u003c/a\u003e.\u003c/p\u003e
\u003cp\u003e\u003cstrong\u003eInitial set up time\u003c/strong\u003e: \u003ccode\u003echifra init\u003c/code\u003e takes only about a half an hour on a machine with a good connection. (We\u0026rsquo;ve had report from some users that it takes much longer, but we suspect they are on slow machines.) We highly prefer you have a capable machine.\u003c/p\u003e
\u003cp\u003e\u003cstrong\u003eStorage use\u003c/strong\u003e: In this scenario, since you only download the Bloom filters, the space required is about 1GB. Subsequently, as you download individual chunk, each chunk occupies about 25MB.\u003c/p\u003e
\u003cp\u003eThe number of index chunks you download depends entirely on the addresses you query. Of course, if you query a lightly used address, very few chunks will be downloaded. However, if you query are heavily used address, such as UniSwap, nearly every chunk will be downloaded. This is by design. In the later case, you would probably be better off using \u003ccode\u003echifra init --all\u003c/code\u003e to begin with.\u003c/p\u003e
\u003cul\u003e
\u003cli\u003eFor typical addresses (e.g. personal accounts), storage is somewhere between 50 to 500 MB\u003c/li\u003e
\u003cli\u003eFor more active addresses, storage may be as much as 1 or 2 GB\u003c/li\u003e
\u003cli\u003eFor very popular smart contracts, the storage requirement may be as high as 50 GB\u003c/li\u003e
\u003c/ul\u003e
\u003cp\u003e\u003cstrong\u003eHow it works\u003c/strong\u003e\u003c/p\u003e
\u003cp\u003eWhen you run \u003ccode\u003echifra init\u003c/code\u003e, TrueBlocks downloads a set of Bloom filters from the latest published manifest to your local machine. Subsequently, when you want to explore an address history, e.g. with the command \u003ccode\u003echifra export \u0026lt;address\u0026gt;\u003c/code\u003e, TrueBlocks:\u003c/p\u003e
\u003col\u003e
\u003cli\u003eScans the Bloom filters for potential matches and if there\u0026rsquo;s a hit, downloads the corresponding index chunks.\u003c/li\u003e
\u003cli\u003eReturns the set of \u003ccode\u003eappearances\u003c/code\u003e for the address as pairs of \u003ccode\u003e\u0026lt;block number\u0026gt;\u003c/code\u003e and \u003ccode\u003e\u0026lt;transaction_id\u0026gt;\u003c/code\u003e. (This permits direct queries for exact details of desired transaction histories).\u003c/li\u003e
\u003cli\u003eGiven the list of \u003ccode\u003eappearances\u003c/code\u003e, TrueBlocks pulls the full transacitonal history of the account from any (remote or local) RPC endpoint.\u003c/li\u003e
\u003cli\u003eDuring the query, you may instruct TrueBlocks to cache the response locally, making future queries for this same address nearly instantaneous.\u003c/li\u003e
\u003c/ol\u003e
\u003ch3 id="use-chifra-init---all-to-get-the-entirity-of-the-index"\u003eUse chifra init \u0026ndash;all to get the entirity of the index\u003c/h3\u003e
\u003cp\u003eTo get the entirety of the appearance index, run \u003ccode\u003echifra init --all\u003c/code\u003e.\u003c/p\u003e
\u003cp\u003eIf you use this command and don\u0026rsquo;t run \u003ccode\u003echifra scrape\u003c/code\u003e, you will have to update the index periodically by running the command again. (\u003ca href="#Supplementary-how-can-I-see-when-the-manifest-was-last-published"\u003eRead about the finding the latest manifest\u003c/a\u003e).\u003c/p\u003e
\u003cp\u003eFor detailed instructions, see the \u003ca href="/docs/chifra/admin#chifra-pins"\u003e\u003ccode\u003echifra pins\u003c/code\u003e documentation\u003c/a\u003e.\u003c/p\u003e
\u003cp\u003e\u003cstrong\u003eInitial set up time\u003c/strong\u003e: Somewhere between six and ten hours depending on the speed of your connection.\u003c/p\u003e
\u003cp\u003e\u003cstrong\u003eStorage use\u003c/strong\u003e: About 60GB-80GB\u003c/p\u003e
\u003cp\u003e\u003cstrong\u003eHow it works\u003c/strong\u003e\u003c/p\u003e
\u003cp\u003eThe initialization is very similar to the \u003ccode\u003einit\u003c/code\u003e process described in the previous section.\u003c/p\u003e
\u003cp\u003eHowever, while \u003ccode\u003echifra init\u003c/code\u003e downloads only the Bloom filters, downloading the index chunks only after a user queries for an address, \u003ccode\u003echifra init --all\u003c/code\u003e \u003cem\u003edownloads all index chunks up front\u003c/em\u003e.\u003c/p\u003e
\u003cp\u003eWhile this process takes much longer (perhaps hours), when you query a particular address in the future, TrueBlocks no longer has to download anything.
Therefore, the query is significantly faster.
In other words, the first time you run \u003ccode\u003echifra export \u0026lt;transaction\u0026gt;\u003c/code\u003e, the process is much faster than it is if you initialize with \u003ccode\u003echifra init\u003c/code\u003e alone.\u003c/p\u003e
\u003cp\u003eAs is true of the previous methods, if you enable caching, subsequent queries for the same address return almost instantly.\u003c/p\u003e
\u003ch2 id="use-chifra-scrape-to-build-your-own-index"\u003eUse chifra scrape to build your own index\u003c/h2\u003e
\u003cblockquote\u003e
\u003cp\u003e👉 \u003cstrong\u003eNote\u003c/strong\u003e:
If you don\u0026rsquo;t have a node with tracing or archiving, \u003ccode\u003escrape\u003c/code\u003e exits by default.
You can still use scrape, but you need to
\u003ca href="/docs/install/install-trueblocks#no-tracing"\u003eopen your config and disable these checks\u003c/a\u003e\u003c/p\u003e\u003c/p\u003e
\u003c/blockquote\u003e
\u003cp\u003eTo build your own index without any downloading, run \u003ccode\u003echifra scrape\u003c/code\u003e.\u003c/p\u003e
\u003cp\u003eFor detailed instructions, see the \u003ca href="/docs/chifra/admin#chifra-scrape"\u003e\u003ccode\u003echifra scrape\u003c/code\u003e command documentation\u003c/a\u003e.\u003c/p\u003e
\u003cp\u003e\u003cstrong\u003eInitial set up time\u003c/strong\u003e: This method requires a locally-running tracing / archive node such as dAppNode running Erigon. Early users have reported 2-4 days to build the index from scratch. (You may wish to run \u003ccode\u003echifra scrape\u003c/code\u003e in an application like \u003ccode\u003etmux\u003c/code\u003e, so you can close the terminal window while it builds.)\u003c/p\u003e
\u003cp\u003e\u003cstrong\u003eStorage use\u003c/strong\u003e: About 60GB.\u003c/p\u003e
\u003cp\u003e\u003cstrong\u003eHow it works\u003c/strong\u003e:\u003c/p\u003e
\u003cp\u003eThe end result of \u003ccode\u003echifa scrape\u003c/code\u003e is the same as the end result of \u003ccode\u003echifra init --all\u003c/code\u003e. However, the process is crucially different: rather than downloading the index that we publish (that is, trusting us), \u003ccode\u003echifra scrape\u003c/code\u003e \u003cem\u003ebuilds the index on your local machine connecting only with your local-running RPC endpoint\u003c/em\u003e, which means if you trust your own setup, you can trust the data.\u003c/p\u003e
\u003cp\u003e(One note: It\u0026rsquo;s possible to run against any RPC endpoint \u0026ndash; remote or local \u0026ndash; but because the TrueBlocks scraper hits the node continually and very aggressively, you will probably get rate-limited against a shared RPC server such as Infura.)\u003c/p\u003e
\u003cp\u003eA good explanation of this whole process requires a long form article. For now, the curious may look at the best documentation available, the \u003ccode\u003esrc\u003c/code\u003e directory of the source code.\u003c/p\u003e
\u003ch2 id="one-final-note-on-building--making-the-index"\u003eOne final note on building / making the index\u003c/h2\u003e
\u003cp\u003eYou can, if you wish, mix and match the above methods.\u003c/p\u003e
\u003cp\u003eFor example, you can initially download only the Bloom filters with \u003ccode\u003echifra init\u003c/code\u003e and then start up \u003ccode\u003echifra scrape\u003c/code\u003e in the background. This would allow you to get started quickly but stay up to the front of the chain. Of course, as with everything, there\u0026rsquo;s a tradeoff. You will be storing a few MB every time a new chunk is created (about three times a day). In return, it\u0026rsquo;s way faster to query and the index stay up to the chain.\u003c/p\u003e
\u003cp\u003eAlternatively, you may choose to scrape (i.e. build) the index yourself and share it with others by pinning it on IPFS. In this case, you\u0026rsquo;re being a good citizen and making the whole ecosystem better off because you\u0026rsquo;re sharing you index.\u003c/p\u003e
\u003cp\u003eYou can download the index (either with \u003ccode\u003echifra init\u003c/code\u003e or \u003ccode\u003echifra init --all\u003c/code\u003e) and pin that data (with the \u003ccode\u003e--pin_locally\u003c/code\u003e flag) as a way to share with the community, and then turn on the scraper. All options are available as a way to maximize the usefulness of the tool.\u003c/p\u003e
\u003ch2 id="supplementary-how-can-i-see-when-the-manifest-was-last-published"\u003eSupplementary: how can I see when the manifest was last published?\u003c/h2\u003e
\u003cp\u003eIf you are using one of the \u003ccode\u003einit\u003c/code\u003e options, you may wish to know how \u0026lsquo;fresh\u0026rsquo; your index is.\u003c/p\u003e
\u003cp\u003eTrueBlocks tries to publish the manifest frequently (weekly?), but you can always check. The eventual goal of to publish the manifest each time a new chunk is produced (about two or three times a day). But this is \u003ccode\u003egas-expensive\u003c/code\u003e, so we would need to secure funding for that process. We welcome donations, peers and alternative indexers to participate!.\u003c/p\u003e
\u003cp\u003eYou can find the most \u003ca href="https://etherscan.io/address/0xcfd7f3b24f3551741f922fd8c4381aa4e00fc8fd#readContract"\u003erecent manifest here\u003c/a\u003e. (Open the \u003ccode\u003emanifestHash\u003c/code\u003e record.)\u003c/p\u003e
\u003cp\u003eEach pin has a given block range, which you can check yourself using \u003ccode\u003echifra\u003c/code\u003e.\u003c/p\u003e
\u003cp\u003eFor example, see the last manifest record by running\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-shell"\u003echifra pins --list | tail -n 1
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003eThis outputs something like this:\u003c/p\u003e
\u003cpre\u003e\u003ccode\u003e012909804-012912694     QmSQvJ5GPyc8juthKgvMaonxm2t2m939MphyMhBRuHKJzt  QmVCZdXD9EMU9jR6HKp8V1bC74DQDCzGurLxnK6KnbV2LP
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003eThe first field of the output provides the block range for the latest chunk. So, you could see when the last block of the latest
range was published by running \u003ccode\u003echifra when\u003c/code\u003e on the last record:\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-shell"\u003e\$chifra when 012912694
blocknumber     timestamp       date    name
12912694        1627451435      2021-07-28 05:50:35 UTC
\u003c/code\u003e\u003c/pre\u003e
`}).add({id:9,href:"/docs/prologue/design-philosophy/",title:"Design philosophy",description:"The philosophy behind the technical design of TrueBlocks",content:`\u003ch2 id="the-three-commandments"\u003eThe three commandments\u003c/h2\u003e
\u003col\u003e
\u003cli\u003e
\u003cp\u003e\u003cstrong\u003eLet users query this data without asking third-parties for permission.\u003c/strong\u003e\u003c/p\u003e
\u003cp\u003eIf you can access blockchain data only through a third party (e.g. a cloud provider),
is the data really decentralized?\u003c/p\u003e
\u003c/li\u003e
\u003cli\u003e
\u003cp\u003e\u003cstrong\u003eProvide accurate access, to underived, consented-to, pure immutable data.\u003c/strong\u003e\u003c/p\u003e
\u003cp\u003eIf the blockchain data is not accurate, what good is the blockchain?\u003c/p\u003e
\u003c/li\u003e
\u003cli\u003e
\u003cp\u003e\u003cstrong\u003ePerform well on small machines\u003c/strong\u003e\u003c/p\u003e
\u003cp\u003eIf an application requires web-scale computer infrastructure,
does it really support decentralization?\u003c/p\u003e
\u003c/li\u003e
\u003c/ol\u003e
\u003ch2 id="how-trueblocks-prioritizes-design-features"\u003eHow TrueBlocks prioritizes design features\u003c/h2\u003e
\u003cp\u003eNo application can do all things. All design decisions involve tradeoffs.
TrueBlocks tries to make trade off \u003cem\u003econsciously\u003c/em\u003e, so that we always
make the application best serve our core values.\u003c/p\u003e
\u003ch3 id="core-design-values"\u003eCore design values\u003c/h3\u003e
\u003cp\u003eThese core design features are \u003cem\u003eimperative\u003c/em\u003e.
They underlie every single commit made to the TrueBlocks code base.\u003c/p\u003e
\u003ctable\u003e
\u003cthead\u003e
\u003ctr\u003e
\u003cth\u003eCore design values\u003c/th\u003e
\u003cth\u003eWhat they mean in practice matter\u003c/th\u003e
\u003c/tr\u003e
\u003c/thead\u003e
\u003ctbody\u003e
\u003ctr\u003e
\u003ctd\u003eDecentralization\u003c/td\u003e
\u003ctd\u003eNo one should have to rely on anyone other than themselves for data. This including users who want data at the very end of the data journey\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003ePerformance\u003c/td\u003e
\u003ctd\u003eTrueBlocks should be fast on small machines, and provide options for minimal disc footprints\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003ePreserves integrity of data\u003c/td\u003e
\u003ctd\u003eBlockchain data is mutually-agreed upon and consented-to. Don\u0026rsquo;t tamper with it.\u003c/td\u003e
\u003c/tr\u003e
\u003c/tbody\u003e
\u003c/table\u003e
\u003ch3 id="very-important-values"\u003eVery important values\u003c/h3\u003e
\u003cp\u003eThese values are particularly important. They are naturally necessary to achieving
the core design features.\u003c/p\u003e
\u003ctable\u003e
\u003cthead\u003e
\u003ctr\u003e
\u003cth\u003eVery important values\u003c/th\u003e
\u003cth\u003eWhat they mean in practice\u003c/th\u003e
\u003c/tr\u003e
\u003c/thead\u003e
\u003ctbody\u003e
\u003ctr\u003e
\u003ctd\u003eTransparency\u003c/td\u003e
\u003ctd\u003eEvery person gets permissionless access to all the data they want; the application should be open source, letting users verify the data\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eReproducibility\u003c/td\u003e
\u003ctd\u003eRequired for transparency and decentralization\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eStability\u003c/td\u003e
\u003ctd\u003eIt should run forever with zero downtime\u003c/td\u003e
\u003c/tr\u003e
\u003c/tbody\u003e
\u003c/table\u003e
\u003ch3 id="important-values"\u003eImportant values\u003c/h3\u003e
\u003cp\u003eThese values are important, and TrueBlocks tries to maximize these values wherever possible.
However, if we have to make a tradeoff, these values come after the core values.\u003c/p\u003e
\u003ctable\u003e
\u003cthead\u003e
\u003ctr\u003e
\u003cth\u003eImportant values\u003c/th\u003e
\u003cth\u003eWhat they mean in practice\u003c/th\u003e
\u003c/tr\u003e
\u003c/thead\u003e
\u003ctbody\u003e
\u003ctr\u003e
\u003ctd\u003eRobustness\u003c/td\u003e
\u003ctd\u003eApp should work forever without needing to be futzed with\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eApproachability\u003c/td\u003e
\u003ctd\u003eEasy to understand how it works; easy to understand how to get started\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eSimplicity\u003c/td\u003e
\u003ctd\u003eRelated to Approachability\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eExtensibility\u003c/td\u003e
\u003ctd\u003eOthers should be able to add to it\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eMaintainability\u003c/td\u003e
\u003ctd\u003eIdeally requires no maintenance\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eDebuggability\u003c/td\u003e
\u003ctd\u003eAn internal concern\u003c/td\u003e
\u003c/tr\u003e
\u003c/tbody\u003e
\u003c/table\u003e
\u003ch3 id="not-priorities"\u003eNot priorities\u003c/h3\u003e
\u003cp\u003eWhile TrueBlocks does not \u003cem\u003etry\u003c/em\u003e to sacrifice these values, they are not core concerns.\u003c/p\u003e
\u003ctable\u003e
\u003cthead\u003e
\u003ctr\u003e
\u003cth\u003eNot a priority\u003c/th\u003e
\u003cth\u003eWhy these values aren\u0026rsquo;t emphasized\u003c/th\u003e
\u003c/tr\u003e
\u003c/thead\u003e
\u003ctbody\u003e
\u003ctr\u003e
\u003ctd\u003eCompatibility\u003c/td\u003e
\u003ctd\u003eDepends on programming languages that we use, so not a concern\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eComposability\u003c/td\u003e
\u003ctd\u003eNot really a concern\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eExpressiveness\u003c/td\u003e
\u003ctd\u003eNot a concern, readable commands more important\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eInteroperability\u003c/td\u003e
\u003ctd\u003eOnly care about data being platform-independent. Production of the index needs to create something that is useful outside of TrueBlocks\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eMensurability\u003c/td\u003e
\u003ctd\u003eFor internal use only, so less of a concern\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003ePortability\u003c/td\u003e
\u003ctd\u003eDepends on programming language, so not a concern\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eSafety\u003c/td\u003e
\u003ctd\u003eNot really. Consented to data is safe.\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eSecurity\u003c/td\u003e
\u003ctd\u003eNot really. Out of our code\u0026rsquo;s purview other than basic software security. We hold no special data: our data is consented-to data. Reproducible, consented-to data is reproducibly safe. The app runs on local machines. If the local machine is compromised, TrueBlocks is not the user\u0026rsquo;s biggest security concern.\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eThoroughness\u003c/td\u003e
\u003ctd\u003eThe application should do one thing perfectly \u0026ndash; reconciliations\u003c/td\u003e
\u003c/tr\u003e
\u003c/tbody\u003e
\u003c/table\u003e
\u003cp\u003e\u003cem\u003eThis ranking of values was inspired by \u003ca href="https://www.youtube.com/watch?v=2wZ1pCpJUIM"\u003ea talk given by Bryan Cantrill in 2018\u003c/a\u003e.\u003c/em\u003e\u003c/p\u003e
\u003ch2 id="mantras-for-decentralized-data"\u003eMantras for decentralized data\u003c/h2\u003e
\u003cp\u003eBecause \u0026ldquo;commandments\u0026rdquo; sounds authoritarian and Abrahamic, we also keep an ongoing list of mantras.\u003c/p\u003e
\u003cp\u003eIf repeated endlessly, they will eventually sink in:\u003c/p\u003e
\u003cul\u003e
\u003cli\u003eAll the data, for all the people, all the time, but no data if the user doesn’t want it\u003c/li\u003e
\u003cli\u003eUse only consented-to data…
\u003cul\u003e
\u003cli\u003eIf you can’t do that, use only data derived directly from consented-to data\u003c/li\u003e
\u003cli\u003eIf you can’t do that, find a way to force the data provider to prove their data\u003c/li\u003e
\u003c/ul\u003e
\u003c/li\u003e
\u003cli\u003eThe paradigm has shifted, embrace it - the server is now called localhost\u003c/li\u003e
\u003cli\u003eBreak yourself out of the browser. There’s a big wide desktop out there\u003c/li\u003e
\u003cli\u003eIt’s easier to scale up than to scale down - decentralize first\u003c/li\u003e
\u003cli\u003eMost users care only about themselves and maybe a few smart contracts\u003c/li\u003e
\u003cli\u003eSome users, but not all, care about everything\u003c/li\u003e
\u003cli\u003eEveryone needs to do accounting and pay taxes\u003c/li\u003e
\u003cli\u003eThe node can, and should be, be improved\u003c/li\u003e
\u003c/ul\u003e
`}).add({id:10,href:"/docs/install/install-explorer/",title:"Install TrueBlocks explorer",description:"Explorer is the GUI frontend for TrueBlocks ",content:`\u003cp\u003eFirst, make sure that you have the \u003ccode\u003echifra-core\u003c/code\u003e backend up and running,
then run the application from \u003ca href="https://github.com/TrueBlocks/trueblocks-explorer"\u003ea clone of the explorer repo\u003c/a\u003e.\u003c/p\u003e
\u003ch2 id="before-you-begin"\u003eBefore you begin\u003c/h2\u003e
\u003cp\u003e☑ Set up the trueblocks backend using the \u003ca href="/docs/install/install-trueblocks"\u003echifra installation instructions\u003c/a\u003e\u003c/p\u003e
\u003cp\u003e☑ In a terminal window, run the command \u003ccode\u003echifra serve\u003c/code\u003e\u003c/p\u003e
\u003ch2 id="install"\u003eInstall\u003c/h2\u003e
\u003cp\u003eKeep the \u003ccode\u003echifra serve\u003c/code\u003e process running.\u003c/p\u003e
\u003cp\u003eThen, in a new terminal, run these commands:\u003c/p\u003e
\u003col\u003e
\u003cli\u003egit clone git@github.com:TrueBlocks/trueblocks-explorer.git\u003c/li\u003e
\u003cli\u003ecd trueblocks-explorer\u003c/li\u003e
\u003cli\u003ecp .env.example .env\u003c/li\u003e
\u003cli\u003eyarn\u003c/li\u003e
\u003cli\u003eyarn develop\u003c/li\u003e
\u003c/ol\u003e
\u003cp\u003eOpen your browser, and access the app from \u003ccode\u003elocalhost:1234\u003c/code\u003e.\u003c/p\u003e
`}).add({id:11,href:"/docs/prologue/do-i-need-a-node/",title:"Do I need a node?",description:"A node is not required, but that's the only way use Trueblocks as it is intended.",content:`\u003cp\u003eAnd if you are running your own node, TrueBlocks works best with Erigon.\u003c/p\u003e
\u003chr\u003e
\u003ch2 id="why-having-a-node-is-the-best-option"\u003eWhy having a node is the best option\u003c/h2\u003e
\u003cp\u003eSome benefits of TrueBlocks can be realized only when a user has their own node.
Having a node lets users:\u003c/p\u003e
\u003cul\u003e
\u003cli\u003eLimit queries to the node on their machine\u003c/li\u003e
\u003cli\u003eUse the node to build a local index\u003c/li\u003e
\u003cli\u003eQuery data directly from the top of the chain\u003c/li\u003e
\u003c/ul\u003e
\u003cp\u003eSetting up a node is not as hard as many people think, but it does require two TBs of storage
and some good hardware.\u003c/p\u003e
\u003cp\u003eIf you want to build your own index, plan for a few days and run \u003ccode\u003echifra scrape\u003c/code\u003e.
Before doing so, you probably want to read the relevant section in the
\u003ca href="/docs/install/get-the-index"\u003e\u0026ldquo;How Can I Get the Index\u0026rdquo;\u003c/a\u003e article,
and \u003ca href="/docs/chifra/admin#chifra-scrape"\u003ethe \u003ccode\u003escrape\u003c/code\u003e command documentation\u003c/a\u003e.\u003c/p\u003e
\u003cp\u003eFortunately, TrueBlocks also publishes the index on the IPFS,
which lets you access it locally without running a node.\u003c/p\u003e
\u003ch2 id="without-a-node-you-can-download-the-index-from-the-ipfs"\u003eWithout a node, you can download the index from the IPFS\u003c/h2\u003e
\u003cp\u003eDownloading the IPFS manifest is a good option for many users:\u003c/p\u003e
\u003cul\u003e
\u003cli\u003eThe initial time to get started is much faster\u003c/li\u003e
\u003cli\u003eThe index occupies only the space you need, (between 1 and 80GB)\u003c/li\u003e
\u003cli\u003eYou can verify its correctness with the TrueBlocks source code\u003c/li\u003e
\u003cli\u003eYou can own the index on your local machine (though you still need to query remote RPCs for transaction data).\u003c/li\u003e
\u003c/ul\u003e
\u003cp\u003eThere are two commands to download the index, \u003ccode\u003echifra init\u003c/code\u003e and \u003ccode\u003echifra pins\u003c/code\u003e.
The pros and cons of each approach are outlined in the
\u003ca href="/docs/install/get-the-index"\u003e\u0026ldquo;How Can I Get the Index?\u0026rdquo;\u003c/a\u003e article.\u003c/p\u003e
\u003ch3 id="drawbacks-of-using-the-ipfs-manifest"\u003eDrawbacks of using the IPFS manifest\u003c/h3\u003e
\u003cp\u003eThe drawbacks of using the IPFS manifest are the opposite of the benefits
of building an index from your own node:\u003c/p\u003e
\u003cul\u003e
\u003cli\u003eYou still must query transaction data from remote RPCs\u003c/li\u003e
\u003cli\u003eYou must trust the data TrueBlocks publishes (though you can verify the build)\u003c/li\u003e
\u003cli\u003eYou can only query up to the last time TrueBlocks published the manifest\u003c/li\u003e
\u003c/ul\u003e
`}).add({id:12,href:"/docs/prologue/multi-chain/",title:"Multi chain",description:"Instructions for accessing multiple chains from chifra",content:`\u003ch2 id="accessing-multiple-chains"\u003eAccessing multiple chains\u003c/h2\u003e
\u003cp\u003eAs of version 0.25.0-alpha, TrueBlocks supports accessing data from any EVM-based blockchain that supports the requisite RPC endpoints. This includes most blockchains we know of.\u003c/p\u003e
\u003cp\u003eIn order to use this new feature, you have to do almost nothing. All you have to do is add \u003ccode\u003e--chain \u0026lt;chainname\u0026gt;\u003c/code\u003e to any chifra command (except one or two as detailed below).\u003c/p\u003e
\u003cp\u003eFor example:\u003c/p\u003e
\u003ctable\u003e
\u003cthead\u003e
\u003ctr\u003e
\u003cth\u003eCommand\u003c/th\u003e
\u003cth\u003eNotes\u003c/th\u003e
\u003c/tr\u003e
\u003c/thead\u003e
\u003ctbody\u003e
\u003ctr\u003e
\u003ctd\u003echifra blocks 12\u003c/td\u003e
\u003ctd\u003eDefault chain is mainnet\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003echifra blocks 12 \u0026ndash;chain mainnet\u003c/td\u003e
\u003ctd\u003eSame as default\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003echifra blocks 12 \u0026ndash;chain gnosis\u003c/td\u003e
\u003ctd\u003eBlock 12 from gnosis chain\u003c/td\u003e
\u003c/tr\u003e
\u003c/tbody\u003e
\u003c/table\u003e
\u003ch2 id="how-can-this-possibly-work"\u003eHow can this possibly work?\u003c/h2\u003e
\u003cp\u003eTo be perfectly honest, it can\u0026rsquo;t \u0026ndash; without you.\u003c/p\u003e
\u003cp\u003eYou must be running your own RPC endpoints. We built TrueBlocks in this way on purpose \u0026ndash; TrueBlocks is not a service. It\u0026rsquo;s a locally running tool. We did this because doing otherwise promotes a world of highly centralized solutions\u0026ndash;something we are trying very hard to avoid.\u003c/p\u003e
\u003cp\u003eOnce you do start to run your own node software, you will be very glad you did. While you can use publicly available endpoints such as Infura, you will find that you will almost certainly be rate-limited. This is not true if you run your own node.\u003c/p\u003e
\u003ch2 id="support-for-default-chains"\u003eSupport for default chains\u003c/h2\u003e
\u003cp\u003eNotwithstanding the above, we\u0026rsquo;ve provided default configurations for the following eight (8) EVM compatible chains:\u003c/p\u003e
\u003cpre\u003e\u003ccode\u003emainnet, rinkeby, ropsten, goerli, kovan,
gnosis, optimism, polygon
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003eIn each case (except \u003ccode\u003emainnet\u003c/code\u003e) we point to public RPC endpoints. It is likely that you will be rate-limited if you use these options. Providing your own endpoints is much preferred.\u003c/p\u003e
\u003ch2 id="the-default-chain"\u003eThe Default Chain\u003c/h2\u003e
\u003cp\u003eA new configuration item has been added to the \u003ccode\u003etrueBlocks.toml\u003c/code\u003e file under the \u003ccode\u003e[settings]\u003c/code\u003e section. That item is called \u003ccode\u003edefaultChain\u003c/code\u003e. The initial value is \u003ccode\u003emainnet\u003c/code\u003e. After installing version 0.25.0-alpha any \u003ccode\u003echifra\u003c/code\u003e command that is run without the \u003ccode\u003e--chain\u003c/code\u003e option will default to \u003ccode\u003edefaultChain\u003c/code\u003e. You may modify this and subsequently remove the \u003ccode\u003e--chain\u003c/code\u003e option if you wish to default to a different chain.\u003c/p\u003e
\u003ch2 id="adding-your-own-chain"\u003eAdding your own chain\u003c/h2\u003e
\u003cp\u003eTo configure a chain or add a new one, you must edit an entry for the \u003ccode\u003echains\u003c/code\u003e array in the \u003ccode\u003etrueBlocks.toml\u003c/code\u003e file.\u003c/p\u003e
\u003cp\u003eOnce added, you may use your new chain entry by naming it to the \u003ccode\u003e--chain\u003c/code\u003e option:\u003c/p\u003e
\u003cpre\u003e\u003ccode\u003echifra \u0026lt;cmd\u0026gt; \u0026lt;options\u0026gt; --chain \u0026lt;chain-name\u0026gt;
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003eBelow is one of the pre-configured sections for Ethereum Mainnet. Following that is a description of fields making up a chain configuration. Note that the section header of the chain must start with \u003ccode\u003echains.\u003c/code\u003e and becomes the name of the chain.\u003c/p\u003e
\u003cpre\u003e\u003ccode\u003e[chains.mainnet]
chainId = \u0026quot;1\u0026quot;
rpcProvider = \u0026quot;http://localhost:8545\u0026quot;
remoteExplorer = \u0026quot;https://etherscan.io\u0026quot;
apiProvider = \u0026quot;http://localhost:8080\u0026quot;
localExplorer = \u0026quot;http://localhost:1234\u0026quot;
pinGateway = \u0026quot;https://ipfs.unchainedindex.io/ipfs/\u0026quot;
symbol = \u0026quot;ETH\u0026quot;
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003eYour entry must contain the following fields (some of which are optional):\u003c/p\u003e
\u003ctable\u003e
\u003cthead\u003e
\u003ctr\u003e
\u003cth\u003eField Name\u003c/th\u003e
\u003cth\u003erequired\u003c/th\u003e
\u003cth\u003eDescription\u003c/th\u003e
\u003c/tr\u003e
\u003c/thead\u003e
\u003ctbody\u003e
\u003ctr\u003e
\u003ctd\u003echainId\u003c/td\u003e
\u003ctd\u003eyes\u003c/td\u003e
\u003ctd\u003eThe chain id as returned by \u003ccode\u003eeth_chainId\u003c/code\u003e\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003erpcProvider\u003c/td\u003e
\u003ctd\u003eyes\u003c/td\u003e
\u003ctd\u003eThe RPC provider for the chain. Highly preferred this is local and dedicated.\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eremoteExplorer\u003c/td\u003e
\u003ctd\u003e\u003c/td\u003e
\u003ctd\u003eA remote blockchain explorer for the chain (such as EtherScan). Used by \u003ccode\u003echifra explore\u003c/code\u003e\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003epinGateway\u003c/td\u003e
\u003ctd\u003e\u003c/td\u003e
\u003ctd\u003eOnly needed if you are running \u003ccode\u003echifra scrape --pin\u003c/code\u003e. Note you will need your own Pinata endpoint.\u003c/td\u003e
\u003c/tr\u003e
\u003c/tbody\u003e
\u003c/table\u003e
\u003cp\u003eThe following three fields are only needed if you\u0026rsquo;re also running the TrueBlocks Explorer:\u003c/p\u003e
\u003ctable\u003e
\u003cthead\u003e
\u003ctr\u003e
\u003cth\u003eField Name\u003c/th\u003e
\u003cth\u003erequired\u003c/th\u003e
\u003cth\u003eDescription\u003c/th\u003e
\u003c/tr\u003e
\u003c/thead\u003e
\u003ctbody\u003e
\u003ctr\u003e
\u003ctd\u003eapiProvider\u003c/td\u003e
\u003ctd\u003e\u003c/td\u003e
\u003ctd\u003eThe URL given by \u003ccode\u003echifra serve\u003c/code\u003e and where the explorer will get its data.\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003elocalExplorer\u003c/td\u003e
\u003ctd\u003e\u003c/td\u003e
\u003ctd\u003eThe URL of the local explorer application. Where \u003ccode\u003echifra explore --local\u003c/code\u003e will open.\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003esymbol\u003c/td\u003e
\u003ctd\u003e\u003c/td\u003e
\u003ctd\u003eThe symbol of the native token on the chain in question. \u003ccode\u003eETH\u003c/code\u003e for mainnet, \u003ccode\u003exDAI\u003c/code\u003e for \u003ccode\u003egnosis\u003c/code\u003e for example.\u003c/td\u003e
\u003c/tr\u003e
\u003c/tbody\u003e
\u003c/table\u003e
\u003ch2 id="what-doesnt-work"\u003eWhat Doesn\u0026rsquo;t Work?\u003c/h2\u003e
\u003cp\u003eThere are two things that currently do not work with Multi-Chain:\u003c/p\u003e
\u003col\u003e
\u003cli\u003e
\u003cp\u003eThe command \u003ccode\u003echifra init\u003c/code\u003e only works with Ethereum Mainnet. While we will never provide an index for every chain (we must rely on our user base to do that and hopefully share it), we will, in the future be supporting some chains, notably the gnosis chain.\u003c/p\u003e
\u003c/li\u003e
\u003cli\u003e
\u003cp\u003ePricing using UniSwap only works on the mainnet. In the future, once more standardization appears relative to pricing on multiple chains, this choice will be revisited.\u003c/p\u003e
\u003c/li\u003e
\u003c/ol\u003e
`}).add({id:13,href:"/docs/using/introducing-chifra/",title:"Introducing chifra",description:"First introduction to chifra",content:`\u003cp\u003eSimilar to \u003ccode\u003egit\u003c/code\u003e, TrueBlocks has an overarching command called \u003ccode\u003echifra\u003c/code\u003e that gives you access to all of the other subcommands.\u003c/p\u003e
\u003cp\u003eType:\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-shell"\u003echifra
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003eYou will see a long list of commands similar to this\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-txt"\u003e  Usage:    chifra command
  Purpose:  Access to all TrueBlocks tools (chifra \u0026lt;cmd\u0026gt; --help for more).

  Where:
         ACCOUNTS
           list          list every appearance of an address anywhere on the chain
           export        export full detail of transactions for one or more addresses
           monitors      add, remove, clean, and list address monitors
           names         query addresses or names of well known accounts
           abis          fetches the ABI for a smart contract
         CHAIN DATA
           blocks        retrieve one or more blocks from the chain or local cache
           transactions  retrieve one or more transactions from the chain or local cache
           receipts      retrieve receipts for the given transaction(s)
           logs          retrieve logs for the given transaction(s)
           traces        retrieve traces for the given transaction(s)
           when          find block(s) based on date, blockNum, timestamp, or 'special'
         CHAIN STATE
           state         retrieve account balance(s) for one or more addresses at given block(s)
           tokens        retrieve token balance(s) for one or more addresses at given block(s)
         ADMIN
           status        report on the status of the TrueBlocks system
           serve         serve the TrueBlocks API using the flame server
           scrape        scan the chain and update the TrueBlocks index of appearances
           init          initialize the index of appearances by downloading Bloom filters
           pins          manage pinned index of appearances and associated Bloom filters
         OTHER
           quotes        freshen and/or display Ethereum price data
           explore       open an explorer for a given address, block, or transaction
           slurp         fetch data from EtherScan for any address
\u003c/code\u003e\u003c/pre\u003e
\u003chr\u003e
\u003cp\u003eYou may get more help on any command by typing \u003ccode\u003echifra \u0026lt;cmd\u0026gt; --help\u003c/code\u003e.\u003c/p\u003e
\u003ch3 id="getting-status"\u003eGetting status\u003c/h3\u003e
\u003cp\u003eLet\u0026rsquo;s look at an easy command to get started called \u003ccode\u003estatus\u003c/code\u003e.\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-shell"\u003echifra status --terse
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003eIf you get a valid response, congratulations, your installation is working. You may skip ahead to the \u0026lsquo;Using TrueBlocks\u0026rsquo; section below.\u003c/p\u003e
\u003ch3 id="---troubleshooting"\u003e\u0026ndash; Troubleshooting\u003c/h3\u003e
\u003cp\u003eDepending on your setup, you may get the following error message when you run some \u003ccode\u003echifra\u003c/code\u003e commands:\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-shell"\u003e  Warning: A request to your Ethereum node (http://localhost:8545) resulted
  in the following error [Could not connect to server]. Specify a valid
  rpcProvider by editing \$CONFIG/trueblocks.toml.
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003eIf you get this error, edit the configuration file mentioned. The file is well documented, so refer to that file for further information.\u003c/p\u003e
\u003cp\u003eWhen the \u003ccode\u003echifra status\u003c/code\u003e command returns a valid response, you may move to the next section. If
you continue to have trouble, join our \u003ca href="https://discord.gg/kAFcZH2x7K"\u003ediscord disscussion\u003c/a\u003e.\u003c/p\u003e
\u003ch2 id="using-chifra"\u003eUsing chifra\u003c/h2\u003e
\u003cp\u003eIf you\u0026rsquo;ve gotten this far, you\u0026rsquo;re ready to use TrueBlocks.\u003c/p\u003e
\u003cp\u003eLet\u0026rsquo;s try another simple command to show Ethereum block data. This command shows every 10th block between the first and the 100,000th.\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-shell"\u003echifra blocks 0-100000:10
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003eHit \u003ccode\u003eControl+C\u003c/code\u003e to stop the processing.\u003c/p\u003e
\u003cp\u003eThis shows one of the basic ideas behind TrueBlocks: make the Ethereum data easier to use.\u003c/p\u003e
\u003cp\u003ePlay around with other options. See what you can do.\u003c/p\u003e
\u003ch2 id="conclusion"\u003eConclusion\u003c/h2\u003e
\u003cp\u003eBy this point, you should have TrueBlocks properly installed and be able to get simple blockchain data from your node. All of the chifra commands should now work. The next section further introduces you to \u003ccode\u003echifra\u003c/code\u003e.\u003c/p\u003e
\u003cp\u003ePlease see the \u003ca href="/docs/using/using-chifra/"\u003eUsing Chifra\u003c/a\u003e page to proceed.\u003c/p\u003e
`}).add({id:14,href:"/docs/using/using-chifra/",title:"Some chifra examples",description:"How to use TrueBlocks to get useful data",content:`\u003cp\u003eA few more examples in more detail.\u003c/p\u003e
\u003ch2 id="getting-help"\u003eGetting Help\u003c/h2\u003e
\u003cp\u003eEvery \u003ccode\u003echifra\u003c/code\u003e sub-command comes with an associated help page. To get help for \u003ccode\u003echifra\u003c/code\u003e itself, simply type\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-shell"\u003echifra
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003eA long list of commands should show. (If you have trouble, see the \u003ca href="/docs/install/install-trueblocks/"\u003eInstallation\u003c/a\u003e page.)\u003c/p\u003e
\u003cp\u003eTo get help for a specific command, type\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-shell"\u003echifra \u0026lt;cmd\u0026gt; --help
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003eTo get more detailed help, type\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-shell"\u003echifra \u0026lt;cmd\u0026gt; --help --verbose 2
\u003c/code\u003e\u003c/pre\u003e
\u003ch2 id="getting-system-status"\u003eGetting System Status\u003c/h2\u003e
\u003cp\u003eThe \u003ccode\u003echifra\u003c/code\u003e command gives you access to all of TrueBlocks\u0026rsquo; functionality. Get system status by typing\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-shell"\u003echifra status --terse
\u003c/code\u003e\u003c/pre\u003e
\u003ch2 id="getting-blockchain-data"\u003eGetting Blockchain Data\u003c/h2\u003e
\u003cp\u003eLet\u0026rsquo;s see if we can get some actual blockchain data.\u003c/p\u003e
\u003cp\u003e\u003cstrong\u003eGetting Blocks\u003c/strong\u003e\u003c/p\u003e
\u003cp\u003eThe following command returns block data from block 2,001,002. The data is returned as JSON.\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-shell"\u003echifra blocks 2001002
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003eNotice the full transactional details are included for each of the seven transactions in the block. You can show just the transaction hashes with\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-shell"\u003echifra blocks 2001002 --hashes
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003eCopy one of those transaction hashes and paste it into the next command\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-shell"\u003echifra transactions 0x5f965c...9f26e12  # use the full hash
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003eThis command shows a single transaction\u0026rsquo;s data. But, you may have noticed that the data is shown as tab separated rows. In general, block data (which is structured) is presented as JSON while primarily non-structured data is presented as TXT.\u003c/p\u003e
\u003cp\u003e\u003cstrong\u003eFormatting Output\u003c/strong\u003e\u003c/p\u003e
\u003cp\u003eEvery \u003ccode\u003echifra\u003c/code\u003e command accepts a few optional parameters including \u003ccode\u003e--verbose\u003c/code\u003e and \u003ccode\u003e--fmt\u003c/code\u003e. \u003ccode\u003e--verbose\u003c/code\u003e is useful when debugging. The \u003ccode\u003e--fmt\u003c/code\u003e option allows you to specify the format of the output. It accepts three values:\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-shell"\u003echifra blocks 2002 --fmt json   # the default for blocks
chifra blocks 2002 --fmt txt    # tab delimited text
chifra blocks 2002 --fmt csv    # comma separated values
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003eThese options are available for all \u003ccode\u003echifra\u003c/code\u003e commands. (Although in some cases, they are ignored.) One might wish to use the \u003ccode\u003ecsv\u003c/code\u003e and \u003ccode\u003etxt\u003c/code\u003e options if one is engaged in data science for example.\u003c/p\u003e
\u003ch2 id="more-data-commands"\u003eMore Data Commands\u003c/h2\u003e
\u003cp\u003eBelow, we present a few of the other \u003ccode\u003echifra\u003c/code\u003e commands without a lot of description.\u003c/p\u003e
\u003cp\u003e\u003cstrong\u003eTransactions and Logs and Traces, Oh My!\u003c/strong\u003e\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-shell"\u003e# The first transaction in block 2,002,002
chifra transactions 2001002.0

# All transactions in block 2,002,002 as comma separated values
chifra transactions --fmt csv 2001002.\\*

# Every event in block 4,503,002
chifra logs --fmt json 4503002.\\*

# Every event in block 4,503,002 -- articulated (see below)
chifra logs --fmt json --articulate 4503002.\\*

# Every trace in the second transaction of block 4,503,002
chifra traces --fmt json --articulate 4503002.1

\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003ePlease see the help files for \u003ccode\u003echifra blocks --help\u003c/code\u003e and \u003ccode\u003echifra transactions --help\u003c/code\u003e for more information, including all the options for specifying blocks and transactions (which are many and varied).\u003c/p\u003e
\u003cp\u003e\u003cstrong\u003eArticulated Data\u003c/strong\u003e\u003c/p\u003e
\u003cp\u003eMost TrueBlocks\u0026rsquo; commands accept an option called \u003ccode\u003e--articulate\u003c/code\u003e. The easiest way to explain \u003ccode\u003earticulated data\u003c/code\u003e is to say it is \u0026ldquo;ugly blockchain data turned into human readable text\u0026rdquo;.\u003c/p\u003e
\u003cp\u003eFor example, the following command shows logs from the third transaction in block 4,503,002\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-shell"\u003echifra logs --fmt json 4503002.2
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003ePretty ugly. Compare that to this command\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-shell"\u003echifra logs --fmt json --articulate 4503002.2
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003eYou\u0026rsquo;ll see additional (and much more easy to understand) data. In particular, you\u0026rsquo;ll see an \u003ccode\u003earticulatedLog\u003c/code\u003e. That is \u0026ldquo;ugly log data presented in human-readable form.\u0026rdquo;\u003c/p\u003e
\u003cp\u003eSee \u003ca href="/blog/recipe-getting-erc20-transfer-events/"\u003eGetting ERC20 Transfer Events\u003c/a\u003e for an example of using articulation.\u003c/p\u003e
\u003ch2 id="links-to-more-detail"\u003eLinks to more detail\u003c/h2\u003e
\u003cp\u003eThere are many other \u003ccode\u003echifra\u003c/code\u003e commands including \u003ccode\u003elist\u003c/code\u003e and \u003ccode\u003eexport\u003c/code\u003e that we still study next. Other commands allow you to \u003ccode\u003eserve\u003c/code\u003e a JSON API presenting each command as an API route, \u003ccode\u003einit\u003c/code\u003e which pulls parts of the index data from IPFS, and \u003ccode\u003escrape\u003c/code\u003e which builds the index.\u003c/p\u003e
\u003cp\u003eIn the following sections, each command is presented with its options and in more detail. In addition,\u003c/p\u003e
\u003cul\u003e
\u003cli\u003eOur \u003ca href="/tags/recipes"\u003eblog has a few longer \u0026ldquo;recipes\u0026rdquo;\u003c/a\u003efor accomplishing various tasks.\u003c/li\u003e
\u003cli\u003eOur \u003ca href="/data-model/intro/"\u003edata model reference\u003c/a\u003e describes the fields that are returned with each command\u003c/li\u003e
\u003c/ul\u003e
`}).add({id:15,href:"/docs/chifra/accounts/",title:"Accounts",description:"",content:`\u003cp\u003eThis group of commands is at the heart of TrueBlocks. They allow you to produce and analyze transactional histories for a given Ethereum address.\u003c/p\u003e
\u003cp\u003eYou may also name addresses; grab the ABI file for a given address; add, delete, and remove monitors, and, most importantly, export transactional histories to various formats,
This includes re-directing output to remote or local databases.\u003c/p\u003e
\u003ch2 id="chifra-list"\u003echifra list\u003c/h2\u003e
\u003cp\u003e\u003ccode\u003echifra list\u003c/code\u003e takes one or more addresses, queries the index of appearances, and builds TrueBlocks monitors. A TrueBlocks monitor is a file that contains blockNumber.transactionId pairs (transaction identifiers) representing the history of the address.\u003c/p\u003e
\u003cp\u003eBecause TrueBlocks only extracts data from the Ethereum node when it\u0026rsquo;s requested, the first time you list an address it takes about a minute. Subsequent queries are much faster because TrueBlocks caches the results.\u003c/p\u003e
\u003cp\u003eNote that \u003ccode\u003echifra list\u003c/code\u003e only queries the index, it does not extract the full transactional details. You may use \u003ccode\u003echifra export\u003c/code\u003e for that.\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-[plaintext]"\u003ePurpose:
  List every appearance of an address anywhere on the chain.

Usage:
  chifra list [flags] \u0026lt;address\u0026gt; [address...]

Arguments:
  addrs - one or more addresses (0x...) to list (required)

Flags:
  -U, --count        display only the count of records for each monitor
  -x, --fmt string   export format, one of [none|json*|txt|csv|api]
  -v, --verbose      enable verbose (increase detail with --log_level)
  -h, --help         display this help screen

Notes:
  - No other options are permitted when --silent is selected.
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003e\u003cstrong\u003eSource code\u003c/strong\u003e: \u003ca href="https://github.com/TrueBlocks/trueblocks-core/tree/master/src/apps/chifra/internal/list"\u003e\u003ccode\u003einternal/list\u003c/code\u003e\u003c/a\u003e\u003c/p\u003e
\u003ch2 id="chifra-export"\u003echifra export\u003c/h2\u003e
\u003cp\u003eThe \u003ccode\u003echifra export\u003c/code\u003e tools provides a major part of the functionality of the TrueBlocks system. Using the index of appearances created with \u003ccode\u003echifra scrape\u003c/code\u003e and the list of transaction identifiers created with \u003ccode\u003echifra list\u003c/code\u003e, \u003ccode\u003echifra export\u003c/code\u003e completes the actual extraction of an address\u0026rsquo;s transactional history from the node.\u003c/p\u003e
\u003cp\u003eYou may use \u003ccode\u003etopics\u003c/code\u003e, \u003ccode\u003efourbyte\u003c/code\u003e values at the start of a transaction\u0026rsquo;s input data, and/or a log\u0026rsquo;s \u003ccode\u003esource address\u003c/code\u003e or \u003ccode\u003eemitter\u003c/code\u003e to filter the results.\u003c/p\u003e
\u003cp\u003eYou may also choose which portions of the Ethereum data structures (\u003ccode\u003e--transactions\u003c/code\u003e, \u003ccode\u003e--logs\u003c/code\u003e, \u003ccode\u003e--traces\u003c/code\u003e, etc.) as you wish.\u003c/p\u003e
\u003cp\u003eBy default, the results of the extraction are delivered to your console, however, you may export the results to any database (with a little bit of work). The format of the data, its content and its destination are up to you.\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-[plaintext]"\u003ePurpose:
  Export full detail of transactions for one or more addresses.

Usage:
  chifra export [flags] \u0026lt;address\u0026gt; [address...] [topics...] [fourbytes...]

Arguments:
  addrs - one or more addresses (0x...) to export (required)
  topics - filter by one or more log topics (only for --logs option)
  fourbytes - filter by one or more fourbytes (only for transactions and trace options)

Flags:
  -p, --appearances         export a list of appearances
  -r, --receipts            export receipts instead of transactional data
  -l, --logs                export logs instead of transactional data
  -t, --traces              export traces instead of transactional data
  -A, --statements          export reconciliations instead of transactional data (requires --accounting option)
  -n, --neighbors           export the neighbors of the given address
  -C, --accounting          attach accounting records to the exported data (applies to transactions export only)
  -a, --articulate          articulate transactions, traces, logs, and outputs
  -i, --cache               write transactions to the cache (see notes)
  -R, --cache_traces        write traces to the cache (see notes)
  -U, --count               only available for --appearances mode, if present, return only the number of records
  -c, --first_record uint   the first record to process
  -e, --max_records uint    the maximum number of records to process before reporting (default 250)
      --relevant            for log and accounting export only, export only logs relevant to one of the given export addresses
      --emitter strings     for log export only, export only logs if emitted by one of these address(es)
      --topic strings       for log export only, export only logs with this topic(s)
      --asset strings       for the statements option only, export only reconciliations for this asset
  -y, --factory             scan for contract creations from the given address(es) and report address of those contracts
  -s, --staging             export transactions labeled staging (i.e. older than 28 blocks but not yet consolidated)
  -u, --unripe              export transactions labeled upripe (i.e. less than 28 blocks old)
  -F, --first_block uint    first block to process (inclusive)
  -L, --last_block uint     last block to process (inclusive)
  -x, --fmt string          export format, one of [none|json*|txt|csv|api]
  -v, --verbose             enable verbose (increase detail with --log_level)
  -h, --help                display this help screen

Notes:
  - An address must start with '0x' and be forty-two characters long.
  - Articulating the export means turn the EVM's byte data into human-readable text (if possible).
  - For the --logs option, you may optionally specify one or more --emitter, one or more --topics, or both.
  - The --logs option is significantly faster if you provide an --emitter or a --topic.
  - Neighbors include every address that appears in any transaction in which the export address also appears.
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003e\u003cstrong\u003eSource code\u003c/strong\u003e: \u003ca href="https://github.com/TrueBlocks/trueblocks-core/tree/master/src/apps/chifra/internal/export"\u003e\u003ccode\u003einternal/export\u003c/code\u003e\u003c/a\u003e\u003c/p\u003e
\u003ch2 id="chifra-monitors"\u003echifra monitors\u003c/h2\u003e
\u003cp\u003eA TrueBlocks monitor tool has two purposes. The first is to \u003ccode\u003e--watch\u003c/code\u003e a set of addresses. This function is in its early stages and will be better explained elsewhere. Please see an example of what one may do with \u003ccode\u003echifra monitors --watch\u003c/code\u003e \u003ca href="https://tokenomics.io/"\u003ehere\u003c/a\u003e.\u003c/p\u003e
\u003cp\u003eA \u0026ldquo;monitor\u0026rdquo; is simply a file on a hard drive that represents the transactional history of a given Ethereum address. Monitors are very small, being only the \u003ccode\u003e\u0026lt;block_no\u0026gt;\u0026lt;tx_id\u0026gt;\u003c/code\u003e pair representing each appearance of an address. Monitor files are only created when a user expresses interest in a particular address. In this way, TrueBlock is able to continue to work on small desktop or even laptop computers. (See \u003ccode\u003echifra list\u003c/code\u003e.)\u003c/p\u003e
\u003cp\u003eYou may use the \u003ccode\u003e--delete\u003c/code\u003e command to delete (or \u003ccode\u003e--undelete\u003c/code\u003e if already deleted) an address. The monitor is not removed from your computer if you delete it. It is just marked as being deleted making it invisible to the TrueBlocks explorer.\u003c/p\u003e
\u003cp\u003eUse the \u003ccode\u003e--remove\u003c/code\u003e command to permanently remove a monitor from your computer. This is an irreversible operation and requires the monitor to have been previously deleted.\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-[plaintext]"\u003ePurpose:
  Add, remove, clean, and list address monitors.

Usage:
  chifra monitors [flags] \u0026lt;address\u0026gt; [address...]

Arguments:
  addrs - one or more addresses (0x...) to process

Flags:
      --clean         clean (i.e. remove duplicate appearances) from monitors
      --delete        delete a monitor, but do not remove it
      --undelete      undelete a previously deleted monitor
      --remove        remove a previously deleted monitor
      --watch         continually scan for new blocks and extract data for monitored addresses
  -E, --sleep float   seconds to sleep between monitor passes (default 14)
  -x, --fmt string    export format, one of [none|json*|txt|csv|api]
  -v, --verbose       enable verbose (increase detail with --log_level)
  -h, --help          display this help screen

Notes:
  - An address must start with '0x' and be forty-two characters long.
  - If no address is presented to the --clean command, all monitors will be cleaned.
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003e\u003cstrong\u003eSource code\u003c/strong\u003e: \u003ca href="https://github.com/TrueBlocks/trueblocks-core/tree/master/src/apps/chifra/internal/monitors"\u003e\u003ccode\u003einternal/monitors\u003c/code\u003e\u003c/a\u003e\u003c/p\u003e
\u003ch2 id="chifra-names"\u003echifra names\u003c/h2\u003e
\u003cp\u003e\u003ccode\u003echifra names\u003c/code\u003e is a surprisingly useful tool. It allows one to associate textual names with Ethereum addresses. One may ask why this is necessary given that ENS exists. The answer is a single word: \u0026ldquo;privacy\u0026rdquo;. ENS names are public. In many cases, users desire to keep personal addresses private. Try to do this on a website.\u003c/p\u003e
\u003cp\u003eLike \u003ccode\u003echifra abis\u003c/code\u003e, this tool is useful from the command line but is primarily used in support of other tools, especially \u003ccode\u003echifra export\u003c/code\u003e where naming addresses becomes the single best way to turn unintelligible blockchain data into understandable information.\u003c/p\u003e
\u003cp\u003eThe various options allow you to search and filter the results. The \u003ccode\u003ecollections\u003c/code\u003e and \u003ccode\u003etags\u003c/code\u003e options are used primarily by the TrueBlocks explorer.\u003c/p\u003e
\u003cp\u003eYou may use the TrueBlocks explorer to manage (add, edit, delete) address-name associations.\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-[plaintext]"\u003ePurpose:
  Query addresses or names of well known accounts.

Usage:
  chifra names [flags] \u0026lt;term\u0026gt; [term...]

Arguments:
  terms - a space separated list of one or more search terms (required)

Flags:
  -e, --expand        expand search to include all fields (search name, address, and symbol otherwise)
  -m, --match_case    do case-sensitive search
  -l, --all           include all accounts in the search
  -c, --custom        include your custom named accounts
  -p, --prefund       include prefund accounts
  -n, --named         include well know token and airdrop addresses in the search
  -a, --addr          display only addresses in the results (useful for scripting)
  -s, --collections   display collections data
  -g, --tags          export the list of tags and subtags only
  -x, --fmt string    export format, one of [none|json*|txt|csv|api]
  -v, --verbose       enable verbose (increase detail with --log_level)
  -h, --help          display this help screen

Notes:
  - The tool will accept up to three terms, each of which must match against any field in the database.
  - The --match_case option enables case sensitive matching.
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003e\u003cstrong\u003eSource code\u003c/strong\u003e: \u003ca href="https://github.com/TrueBlocks/trueblocks-core/tree/master/src/apps/chifra/internal/names"\u003e\u003ccode\u003einternal/names\u003c/code\u003e\u003c/a\u003e\u003c/p\u003e
\u003ch2 id="chifra-abis"\u003echifra abis\u003c/h2\u003e
\u003cp\u003e\u003ccode\u003echifra abis\u003c/code\u003e retrieves ABI files for the given address(es). It searches for the ABI in this order: the current local folder, the TrueBlocks cache, \u003ca href="http://etherscan.io"\u003eEtherscan\u003c/a\u003e, or (in the future) ENS and Sourcify.\u003c/p\u003e
\u003cp\u003eWhile this tool may be used from the command line and the API, its primary purpose is in support of tools such as \u003ccode\u003echifra export\u003c/code\u003e to support the \u003ccode\u003e--articulate\u003c/code\u003e option.\u003c/p\u003e
\u003cp\u003eThe \u003ccode\u003e--known\u003c/code\u003e option prints a list of semi-standard function signatures such as the ERC20 standard, 721 standard, various functions from OpenZeppelin, various Uniswap functions, etc. As an optimization, the \u003ccode\u003eknown\u003c/code\u003e signatures are searched first during articulation.\u003c/p\u003e
\u003cp\u003eThe \u003ccode\u003e--sol\u003c/code\u003e option converts the provided Solidity file into an ABI json file. The results are dropped into the current working folder.\u003c/p\u003e
\u003cp\u003eThe \u003ccode\u003e--find\u003c/code\u003e option is experimental. It scans the cross product of two sets. The first set contains more than 100,000 function and event names. The second set contains approximately 700 function signatures. The cross product of these two sets creates 70,000,000 combinations of \u003ccode\u003ename(signature)\u003c/code\u003e each of which is hashed to create either a four-byte or a 32-byte hash. Very infrequently, the tool will find matches for an otherwise unknown signatures.\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-[plaintext]"\u003ePurpose:
  Fetches the ABI for a smart contract.

Usage:
  chifra abis [flags] \u0026lt;address\u0026gt; [address...]

Arguments:
  addrs - a list of one or more smart contracts whose ABIs to display (required)

Flags:
  -k, --known          load common 'known' ABIs from cache
  -s, --sol            extract the abi definition from the provided .sol file(s)
  -f, --find strings   search for function or event declarations given a four- or 32-byte code(s)
  -x, --fmt string     export format, one of [none|json*|txt|csv|api]
  -v, --verbose        enable verbose (increase detail with --log_level)
  -h, --help           display this help screen

Notes:
  - For the --sol option, place the solidity files in the current working folder.
  - Search for either four byte signatures or event signatures with the --find option.
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003e\u003cstrong\u003eSource code\u003c/strong\u003e: \u003ca href="https://github.com/TrueBlocks/trueblocks-core/tree/master/src/apps/chifra/internal/abis"\u003e\u003ccode\u003einternal/abis\u003c/code\u003e\u003c/a\u003e\u003c/p\u003e
`}).add({id:16,href:"/docs/chifra/chaindata/",title:"Chain data",description:"",content:`\u003cp\u003eThe TrueBlocks tools extract raw blockchain data directly from the node.
You may extract block data, transactional data, receipts, logs, and traces.
Each tool has it own set of options, allowing you to get exactly the data that
you want.\u003c/p\u003e
\u003ch2 id="chifra-blocks"\u003echifra blocks\u003c/h2\u003e
\u003cp\u003eThe \u003ccode\u003echifra blocks\u003c/code\u003e tool retrieves block data from your Ethereum node or, if previously cached, from the TrueBlocks cache. You may specify multiple blocks per invocation.\u003c/p\u003e
\u003cp\u003eBy default, \u003ccode\u003echifra blocks\u003c/code\u003e queries the full transactional details of the block (including receipts). You may optionally retrieve only the transaction hashes in the block (which is significantly faster). Additionally, you may also use this tool to retrieve uncle blocks at a give height.\u003c/p\u003e
\u003cp\u003eAnother useful feature of \u003ccode\u003echifra blocks\u003c/code\u003e is the ability to extract address appearances from a block. TrueBlocks uses a similar feature internally to build its index of appearances. This type of data is very insightful when studying end user behavior and chain-wide adoption analysis.\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-[plaintext]"\u003ePurpose:
  Retrieve one or more blocks from the chain or local cache.

Usage:
  chifra blocks [flags] \u0026lt;block\u0026gt; [block...]

Arguments:
  blocks - a space-separated list of one or more block identifiers (required)

Flags:
  -e, --hashes       display only transaction hashes, default is to display full transaction detail
  -c, --uncles       display uncle blocks (if any) instead of the requested block
  -t, --trace        export the traces from the block as opposed to the block data
  -s, --apps         display a list of uniq address appearances in the block
  -u, --uniq         display a list of uniq address appearances per transaction
  -U, --count        display the number of the lists of appearances for --addrs or --uniq
  -o, --cache        force a write of the block to the cache
  -x, --fmt string   export format, one of [none|json*|txt|csv|api]
  -v, --verbose      enable verbose (increase detail with --log_level)
  -h, --help         display this help screen

Notes:
  - Blocks is a space-separated list of values, a start-end range, a special, or any combination.
  - Blocks may be specified as either numbers or hashes.
  - Special blocks are detailed under chifra when --list.
  - With the --logs option, optionally specify one or more --emitter, one or more --topics, either or both.
  - The --logs option is significantly faster if you provide an --emitter and/or a --topic.
  - Multiple topics match on topic0, topic1, and so on, not on different topic0's.
  - Large block ranges may crash the node, use --big_range to specify a larger range.
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003e\u003cstrong\u003eSource code\u003c/strong\u003e: \u003ca href="https://github.com/TrueBlocks/trueblocks-core/tree/master/src/apps/chifra/internal/blocks"\u003e\u003ccode\u003einternal/blocks\u003c/code\u003e\u003c/a\u003e\u003c/p\u003e
\u003ch2 id="chifra-transactions"\u003echifra transactions\u003c/h2\u003e
\u003cp\u003eThe \u003ccode\u003echifra transactions\u003c/code\u003e tool retrieves transactions directly from the Ethereum node (using the \u003ccode\u003e--raw\u003c/code\u003e option) or from the TrueBlocks cache (if present). You may specify multiple transaction identifiers per invocation. Unlike the Ethereum RPC, the reported transactions include the transaction\u0026rsquo;s receipt and generated logs.\u003c/p\u003e
\u003cp\u003eThe \u003ccode\u003e--articulate\u003c/code\u003e option fetches the ABI from each encountered smart contract (including those encountered in a trace\u0026ndash;if the \u003ccode\u003e--trace\u003c/code\u003e option is enabled) to better describe the reported data.\u003c/p\u003e
\u003cp\u003eThe \u003ccode\u003e--trace\u003c/code\u003e option attaches an array transaction traces to the output (if the node you\u0026rsquo;re querying has \u0026ndash;tracing enabled), while the \u003ccode\u003e--uniq\u003c/code\u003e option displays a list of uniq address appearances instead of the underlying data (including uniq addresses in traces if enabled).\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-[plaintext]"\u003ePurpose:
  Retrieve one or more transactions from the chain or local cache.

Usage:
  chifra transactions [flags] \u0026lt;tx_id\u0026gt; [tx_id...]

Arguments:
  transactions - a space-separated list of one or more transaction identifiers (required)

Flags:
  -a, --articulate         articulate the retrieved data if ABIs can be found
  -t, --trace              include the transaction's traces in the results
  -u, --uniq               display a list of uniq addresses found in the transaction
  -r, --reconcile string   reconcile the transaction as per the provided address
  -o, --cache              force the results of the query into the tx cache (and the trace cache if applicable)
  -x, --fmt string         export format, one of [none|json*|txt|csv|api]
  -v, --verbose            enable verbose (increase detail with --log_level)
  -h, --help               display this help screen

Notes:
  - The transactions list may be one or more transaction hashes, blockNumber.transactionID pairs, or a blockHash.transactionID pairs.
  - This tool checks for valid input syntax, but does not check that the transaction requested actually exists.
  - If the queried node does not store historical state, the results for most older transactions are undefined.
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003e\u003cstrong\u003eSource code\u003c/strong\u003e: \u003ca href="https://github.com/TrueBlocks/trueblocks-core/tree/master/src/apps/chifra/internal/transactions"\u003e\u003ccode\u003einternal/transactions\u003c/code\u003e\u003c/a\u003e\u003c/p\u003e
\u003ch2 id="chifra-receipts"\u003echifra receipts\u003c/h2\u003e
\u003cp\u003e\u003ccode\u003echifra receipts\u003c/code\u003e returns the given transaction\u0026rsquo;s receipt. You may specify multiple transaction identifiers per invocation.\u003c/p\u003e
\u003cp\u003eThe \u003ccode\u003e--articulate\u003c/code\u003e option fetches the ABI from each encountered smart contract (including those encountered in a trace\u0026ndash;if the \u003ccode\u003e--trace\u003c/code\u003e option is enabled) to better describe the reported data.\u003c/p\u003e
\u003cp\u003eGenerally speaking, this tool is less useful than others as you may report the same data using \u003ccode\u003echifra transactions\u003c/code\u003e and more focused data using \u003ccode\u003echifra logs\u003c/code\u003e. It is included here for completeness, as the \u003ccode\u003ereceipt\u003c/code\u003e is a fundamental data structure in Ethereum.\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-[plaintext]"\u003ePurpose:
  Retrieve receipts for the given transaction(s).

Usage:
  chifra receipts [flags] \u0026lt;tx_id\u0026gt; [tx_id...]

Arguments:
  transactions - a space-separated list of one or more transaction identifiers (required)

Flags:
  -a, --articulate   articulate the retrieved data if ABIs can be found
  -x, --fmt string   export format, one of [none|json*|txt|csv|api]
  -v, --verbose      enable verbose (increase detail with --log_level)
  -h, --help         display this help screen

Notes:
  - The transactions list may be one or more transaction hashes, blockNumber.transactionID pairs, or a blockHash.transactionID pairs.
  - This tool checks for valid input syntax, but does not check that the transaction requested actually exists.
  - If the queried node does not store historical state, the results for most older transactions are undefined.
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003e\u003cstrong\u003eSource code\u003c/strong\u003e: \u003ca href="https://github.com/TrueBlocks/trueblocks-core/tree/master/src/apps/chifra/internal/receipts"\u003e\u003ccode\u003einternal/receipts\u003c/code\u003e\u003c/a\u003e\u003c/p\u003e
\u003ch2 id="chifra-logs"\u003echifra logs\u003c/h2\u003e
\u003cp\u003e\u003ccode\u003echifra logs\u003c/code\u003e returns the given transaction\u0026rsquo;s logs. You may specify multiple transaction identifiers per invocation.\u003c/p\u003e
\u003cp\u003eThe \u003ccode\u003e--articulate\u003c/code\u003e option fetches the ABI from each encountered smart contract to better describe the reported data. The \u003ccode\u003e--topic\u003c/code\u003e and \u003ccode\u003e--source\u003c/code\u003e options allow you to filter your results.\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-[plaintext]"\u003ePurpose:
  Retrieve logs for the given transaction(s).

Usage:
  chifra logs [flags] \u0026lt;tx_id\u0026gt; [tx_id...]

Arguments:
  transactions - a space-separated list of one or more transaction identifiers (required)

Flags:
  -a, --articulate   articulate the retrieved data if ABIs can be found
  -x, --fmt string   export format, one of [none|json*|txt|csv|api]
  -v, --verbose      enable verbose (increase detail with --log_level)
  -h, --help         display this help screen

Notes:
  - The transactions list may be one or more transaction hashes, blockNumber.transactionID pairs, or a blockHash.transactionID pairs.
  - This tool checks for valid input syntax, but does not check that the transaction requested actually exists.
  - If the queried node does not store historical state, the results for most older transactions are undefined.
  - If you specify a 32-byte hash, it will be assumed to be a transaction hash, if the transaction is not found, it will be used as a topic.
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003e\u003cstrong\u003eSource code\u003c/strong\u003e: \u003ca href="https://github.com/TrueBlocks/trueblocks-core/tree/master/src/apps/chifra/internal/logs"\u003e\u003ccode\u003einternal/logs\u003c/code\u003e\u003c/a\u003e\u003c/p\u003e
\u003ch2 id="chifra-traces"\u003echifra traces\u003c/h2\u003e
\u003cp\u003eThe \u003ccode\u003echifra traces\u003c/code\u003e tool retrieves a transaction\u0026rsquo;s traces. You may specify multiple transaction identifiers per invocation.\u003c/p\u003e
\u003cp\u003eThe \u003ccode\u003e--articulate\u003c/code\u003e option fetches the ABI from each encountered smart contract to better describe the reported data.\u003c/p\u003e
\u003cp\u003eThe \u003ccode\u003e--filter\u003c/code\u003e option calls your node\u0026rsquo;s \u003ccode\u003etrace_filter\u003c/code\u003e routine (if available) using a bang-separated string of the same values used by \u003ccode\u003etrace_fitler\u003c/code\u003e.\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-[plaintext]"\u003ePurpose:
  Retrieve traces for the given transaction(s).

Usage:
  chifra traces [flags] \u0026lt;tx_id\u0026gt; [tx_id...]

Arguments:
  transactions - a space-separated list of one or more transaction identifiers (required)

Flags:
  -a, --articulate      articulate the retrieved data if ABIs can be found
  -f, --filter string   call the node's trace_filter routine with bang-separated filter
  -d, --statediff       export state diff traces (not implemented)
  -c, --count           show the number of traces for the transaction only (fast)
  -x, --fmt string      export format, one of [none|json*|txt|csv|api]
  -v, --verbose         enable verbose (increase detail with --log_level)
  -h, --help            display this help screen

Notes:
  - The transactions list may be one or more transaction hashes, blockNumber.transactionID pairs, or a blockHash.transactionID pairs.
  - This tool checks for valid input syntax, but does not check that the transaction requested actually exists.
  - If the queried node does not store historical state, the results for most older transactions are undefined.
  - A bang separated filter has the following fields (at least one of which is required) and is separated with a bang (!): fromBlk, toBlk, fromAddr, toAddr, after, count.
  - A state diff trace describes, for each modified address, what changed during that trace.
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003e\u003cstrong\u003eSource code\u003c/strong\u003e: \u003ca href="https://github.com/TrueBlocks/trueblocks-core/tree/master/src/apps/chifra/internal/traces"\u003e\u003ccode\u003einternal/traces\u003c/code\u003e\u003c/a\u003e\u003c/p\u003e
\u003ch2 id="chifra-when"\u003echifra when\u003c/h2\u003e
\u003cp\u003eThe \u003ccode\u003echifra when\u003c/code\u003e tool answers one of two questions: (1) \u0026ldquo;At what date and time did a given block occur?\u0026rdquo; or (2) \u0026ldquo;What block occurred at or before a given date and time?\u0026rdquo;\u003c/p\u003e
\u003cp\u003eIn the first case, supply a block number or hash and the date and time of that block are displayed. In the later case, supply a date (and optionally a time) and the block number that occurred at or just prior to that date is displayed.\u003c/p\u003e
\u003cp\u003eThe values for \u003ccode\u003edate\u003c/code\u003e and \u003ccode\u003etime\u003c/code\u003e are specified in JSON format. \u003ccode\u003ehour\u003c/code\u003e/\u003ccode\u003eminute\u003c/code\u003e/\u003ccode\u003esecond\u003c/code\u003e are optional, and if omitted, default to zero in each case. Block numbers may be specified as either integers or hexadecimal number or block hashes. You may specify any number of dates and/or blocks per invocation.\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-[plaintext]"\u003ePurpose:
  Find block(s) based on date, blockNum, timestamp, or 'special'.

Usage:
  chifra when [flags] \u0026lt; block | date \u0026gt; [ block... | date... ]

Arguments:
  blocks - one or more dates, block numbers, hashes, or special named blocks (see notes)

Flags:
  -l, --list         export a list of the 'special' blocks
  -t, --timestamps   ignore other options and generate timestamps only
  -x, --fmt string   export format, one of [none|json*|txt|csv|api]
  -v, --verbose      enable verbose (increase detail with --log_level)
  -h, --help         display this help screen

Notes:
  - The block list may contain any combination of number, hash, date, special named blocks.
  - Dates must be formatted in JSON format: YYYY-MM-DD[THH[:MM[:SS]]].
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003e\u003cstrong\u003eSource code\u003c/strong\u003e: \u003ca href="https://github.com/TrueBlocks/trueblocks-core/tree/master/src/apps/chifra/internal/when"\u003e\u003ccode\u003einternal/when\u003c/code\u003e\u003c/a\u003e\u003c/p\u003e
`}).add({id:17,href:"/docs/chifra/chainstate/",title:"Chain state",description:"",content:`\u003cp\u003eThe two tools in this group deal with the \u003cem\u003eChain State\u003c/em\u003e.
As chain state data concerns balances and byte code.
it is distinct from Chain Data, which concerns things like blocks, transactions,
or traces.\u003c/p\u003e
\u003cp\u003eThe two tools are \u003ccode\u003echifra state\u003c/code\u003e and \u003ccode\u003echifra tokens\u003c/code\u003e.
The first allows you to query account balances, the byte code of a smart contract (if available), the nonce, and other information about an address.
The second tool, \u003ccode\u003echifra tokens\u003c/code\u003e, deals with ERC20 and ERC721 token balances and other data.\u003c/p\u003e
\u003cdiv class="alert alert-warning d-flex" role="alert"\u003e
  \u003cdiv class="flex-shrink-1 alert-icon"\u003e👉\u003c/div\u003e
  \u003cdiv class="w-100"\u003eNote: The amount of information you can retrieve depends on the type of node you run. Archive nodes and tracing allow you to query historical state (that is, all the way back to the genesis block). TrueBlocks works with non-archive nodes, but they are much less informative.\u003c/div\u003e
\u003c/div\u003e
\u003ch2 id="chifra-state"\u003echifra state\u003c/h2\u003e
\u003cp\u003eUse this tool to retrieve the balance of an address (or list of addresses) at the given block (or blocks). Specify multiple addresses and/or multiple blocks if you wish, but you must specify at least one address. If no block is specified, the latest block is reported.\u003c/p\u003e
\u003cp\u003eYou may also query to see if an address is a smart contract as well as retrieve a contract\u0026rsquo;s byte code.\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-[plaintext]"\u003ePurpose:
  Retrieve account balance(s) for one or more addresses at given block(s).

Usage:
  chifra state [flags] \u0026lt;address\u0026gt; [address...] [block...]

Arguments:
  addrs - one or more addresses (0x...) from which to retrieve balances (required)
  blocks - an optional list of one or more blocks at which to report balances, defaults to 'latest'

Flags:
  -p, --parts strings   control which state to export
                        One or more of [ none | some | all | balance | nonce | code | storage | deployed | accttype ]
  -c, --changes         only report a balance when it changes from one block to the next
  -n, --no_zero         suppress the display of zero balance accounts
  -x, --fmt string      export format, one of [none|json*|txt|csv|api]
  -v, --verbose         enable verbose (increase detail with --log_level)
  -h, --help            display this help screen

Notes:
  - An address must start with '0x' and be forty-two characters long.
  - Blocks is a space-separated list of values, a start-end range, a special, or any combination.
  - If the queried node does not store historical state, the results are undefined.
  - Special blocks are detailed under chifra when --list.
  - Balance is the default mode. To select a single mode use none first, followed by that mode.
  - You may specify multiple modes on a single line.
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003e\u003cstrong\u003eSource code\u003c/strong\u003e: \u003ca href="https://github.com/TrueBlocks/trueblocks-core/tree/master/src/apps/chifra/internal/state"\u003e\u003ccode\u003einternal/state\u003c/code\u003e\u003c/a\u003e\u003c/p\u003e
\u003ch2 id="chifra-tokens"\u003echifra tokens\u003c/h2\u003e
\u003cp\u003eGiven the address of an ERC20 token contract, this tool reports token balances for one or more additional addresses. Alternatively, the tool can report the token balances for multiple ERC20 tokens for a single addresses.\u003c/p\u003e
\u003cp\u003eIn normal operation the \u003cstrong\u003efirst item\u003c/strong\u003e in the \u003ccode\u003eaddress_list\u003c/code\u003e is assumed to be an ERC20 token contract whose balances are being queried, whereas the remainder of the list is assumed to be addresses on which to report.\u003c/p\u003e
\u003cp\u003eIn \u003ccode\u003e--byAcct\u003c/code\u003e mode, \u003cstrong\u003eall addresses\u003c/strong\u003e in the \u003ccode\u003eaddress_list\u003c/code\u003e are assumed to be ERC20 token contracts, except the final one which is the account whose token balances are reported.\u003c/p\u003e
\u003cp\u003eYou may optionally specify one or more blocks at which to report. If no block is specified, the latest block is assumed. You may also optionally specify which parts of the token data to extract.\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-[plaintext]"\u003ePurpose:
  Retrieve token balance(s) for one or more addresses at given block(s).

Usage:
  chifra tokens [flags] \u0026lt;address\u0026gt; \u0026lt;address\u0026gt; [address...] [block...]

Arguments:
  addrs - two or more addresses (0x...), the first is an ERC20 token, balances for the rest are reported (required)
  blocks - an optional list of one or more blocks at which to report balances, defaults to 'latest'

Flags:
  -p, --parts strings   which parts of the token information to retrieve
                        One or more of [ name | symbol | decimals | totalSupply | version | none | all ]
  -b, --by_acct         consider each address an ERC20 token except the last, whose balance is reported for each token
  -n, --no_zero         suppress the display of zero balance accounts
  -x, --fmt string      export format, one of [none|json*|txt|csv|api]
  -v, --verbose         enable verbose (increase detail with --log_level)
  -h, --help            display this help screen

Notes:
  - An address must start with '0x' and be forty-two characters long.
  - Blocks is a space-separated list of values, a start-end range, a special, or any combination.
  - If the token contract(s) from which you request balances are not ERC20 compliant, the results are undefined.
  - If the queried node does not store historical state, the results are undefined.
  - Special blocks are detailed under chifra when --list.
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003e\u003cstrong\u003eSource code\u003c/strong\u003e: \u003ca href="https://github.com/TrueBlocks/trueblocks-core/tree/master/src/apps/chifra/internal/tokens"\u003e\u003ccode\u003einternal/tokens\u003c/code\u003e\u003c/a\u003e\u003c/p\u003e
`}).add({id:18,href:"/docs/chifra/admin/",title:"Admin",description:"",content:`\u003cp\u003eThe Admin component allows you to query the status of the TrueBlocks system.
You can query the status; query for information about TrueBlocks caches;
control the creation, sharing, and pinning of the TrueBlocks index of appearances;
and even serve the data through an API.\u003c/p\u003e
\u003cp\u003e\u003ca href="/api"\u003eSee the API documentation for all information about using the API\u003c/a\u003e.\u003c/p\u003e
\u003ch2 id="chifra-serve"\u003echifra serve\u003c/h2\u003e
\u003cp\u003e\u003ccode\u003echifra serve\u003c/code\u003e delivers a JSON API for each of the \u003ccode\u003echifra\u003c/code\u003e commands along with each of its options.
It does this through \u003ccode\u003eflame\u003c/code\u003e server, which is written in Go.\u003c/p\u003e
\u003cp\u003eAnother way to get help to run \u003ccode\u003echifra --help\u003c/code\u003e or \u003ccode\u003echifra \u0026lt;cmd\u0026gt; --help\u003c/code\u003e on your command line. See below for an example of converting command line options to a call to the API. There\u0026rsquo;s a one-to-one correspondence between the command line tools and options and the API routes and their options.\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-[plaintext]"\u003ePurpose:
  Serve the TrueBlocks API using the flame server.

Usage:
  chifra serve [flags]

Flags:
  -p, --port string   specify the server's port (default \u0026quot;:8080\u0026quot;)
  -x, --fmt string    export format, one of [none|json*|txt|csv|api]
  -v, --verbose       enable verbose (increase detail with --log_level)
  -h, --help          display this help screen

Notes:
  - To start API open terminal window and run chifra serve.
  - See the API documentation for more information.
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003e\u003cstrong\u003eSource code\u003c/strong\u003e: \u003ca href="https://github.com/TrueBlocks/trueblocks-core/tree/master/src/apps/chifra/server"\u003e\u003ccode\u003eserver\u003c/code\u003e\u003c/a\u003e\u003c/p\u003e
\u003ch2 id="chifra-scrape"\u003echifra scrape\u003c/h2\u003e
\u003cp\u003eThe \u003ccode\u003echifra scrape\u003c/code\u003e application creates TrueBlocks\u0026rsquo; index of address appearances \u0026ndash; the fundamental data structure of the entire system. It also, optionally, pins the index to IPFS.\u003c/p\u003e
\u003cp\u003e\u003ccode\u003echifra scrape\u003c/code\u003e is a long running process, therefore we advise you run it as a service or in terminal multiplexer such as \u003ccode\u003etmux\u003c/code\u003e. You may start and stop \u003ccode\u003echifra scrape\u003c/code\u003e as needed, but doing so means the scraper will have to catch up to the front of the chain the next time it runs, a process that may take several hours depending on how long ago it was last run. See below for a more in depth explanation of how the scraping process works and prerequisites for it proper operation.\u003c/p\u003e
\u003cp\u003eYou may adjust the speed of the index creation with the \u003ccode\u003e--sleep\u003c/code\u003e and \u003ccode\u003e--block_cnt\u003c/code\u003e options. On some machines, or when running against some EVM node software, you may overburden the hardware. Slowing things down will ensure proper operation. Finally, you may optionally \u003ccode\u003e--pin\u003c/code\u003e each new chunk to IPFS which naturally shards the database among all users.\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-[plaintext]"\u003ePurpose:
  Scan the chain and update (and optionally pin) the TrueBlocks index of appearances.

Usage:
  chifra scrape \u0026lt;mode\u0026gt; [mode...] [flags]

Arguments:
  modes - which scraper(s) to control (required)
	One or more of [ run | stop ]

Flags:
  -s, --sleep float      seconds to sleep between scraper passes (default 14)
  -p, --pin              pin chunks (and blooms) to IPFS as they are created (requires pinning service)
  -n, --block_cnt uint   maximum number of blocks to process per pass (default 2000)
  -x, --fmt string       export format, one of [none|json*|txt|csv|api]
  -v, --verbose          enable verbose (increase detail with --log_level)
  -h, --help             display this help screen
\u003c/code\u003e\u003c/pre\u003e
\u003ch3 id="explainer"\u003eexplainer\u003c/h3\u003e
\u003cp\u003eEach time \u003ccode\u003echifra scrape\u003c/code\u003e runs, it begins at the last block it completed processing (plus one). With each pass, it descends as deeply as it can into the block\u0026rsquo;s data. (This is why the indexer requires a \u003ccode\u003e--tracing\u003c/code\u003e node.) As addresses appear in the blocks, the system adds the appearance to a binary index. Periodically (at the end of the block containing the 2,000,000th appearance), the system consolidates a \u003cstrong\u003echunk\u003c/strong\u003e.\u003c/p\u003e
\u003cp\u003eA \u003cstrong\u003echunk\u003c/strong\u003e is a portion of the index containing approximately 2,000,000 records (although, this number is adjustable for different chains). As part of the consolidation, the scraper creates a Bloom filter representing the set membership in the chunk. The Bloom filters are an order of magnitude (or more) smaller than the chunks. The system then pushes both the chunk and the Bloom filter to IPFS. In this way, TrueBlocks creates an immutable, uncapturable index of appearances that can be used not only by TrueBlocks, but any member of the community who needs it. (Hint: We all, every one of us, need it.)\u003c/p\u003e
\u003cp\u003eUsers of the \u003ca href="https://github.com/TrueBlocks/trueblocks-explorer"\u003eTrueBlocks Explorer\u003c/a\u003e (or any other software) may subsequently download the Bloom filters, query them to determine which \u003cstrong\u003echunks\u003c/strong\u003e need to be downloaded, and thereby build a historical list of transactions for a given address. This is accomplished while imposing a minimum amount of resource requirement on the end user\u0026rsquo;s machine.\u003c/p\u003e
\u003cp\u003eIn future versions of the software, we will pin these downloaded chunks and blooms on end user\u0026rsquo;s machines. The user needs the data for the software to operate and sharing it makes all everyone better off. A naturally-occuring network effect.\u003c/p\u003e
\u003ch3 id="prerequisites"\u003eprerequisites\u003c/h3\u003e
\u003cp\u003e\u003ccode\u003echifra scrape\u003c/code\u003e does not work without an RPC endpoint to an Ethereum node. The software \u003cem\u003eworks\u003c/em\u003e without an \u003ccode\u003earchive\u003c/code\u003e node, but it works significantly better with one. An additional requirement is an RPC that provides OpenEthereum\u0026rsquo;s \u003ccode\u003etrace_\u003c/code\u003e routines. We suggest strongly that you use Erigon for many reasons.\u003c/p\u003e
\u003cp\u003ePlease \u003ca href="https://trueblocks.io/blog/a-long-winded-explanation-of-trueblocks/"\u003esee this article\u003c/a\u003e for more information about running the scraper and building and sharing the index of appearances.\u003c/p\u003e
\u003cp\u003e\u003cstrong\u003eSource code\u003c/strong\u003e: \u003ca href="https://github.com/TrueBlocks/trueblocks-core/tree/master/src/apps/chifra/internal/scrape"\u003e\u003ccode\u003einternal/scrape\u003c/code\u003e\u003c/a\u003e\u003c/p\u003e
\u003ch2 id="chifra-chunks"\u003echifra chunks\u003c/h2\u003e
\u003cp\u003eThis tool is not yet ready for production use. Please return to this page later.\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-[plaintext]"\u003ePurpose:
  Manage and investigate chunks and bloom filters.

Usage:
  chifra chunks \u0026lt;mode\u0026gt; [flags] [blocks...] [address...]

Arguments:
  mode - the type of chunk info to retrieve (required)
	One of [ stats | manifest | pins | blooms | index | addresses | appearances ]
  blocks - optional list of blocks to intersect with chunk ranges
  addrs - one or more addresses to use with --belongs option (see note)

Flags:
  -d, --details      for manifest and addresses options only, display full details of the report
  -c, --check        depends on mode, checks for internal consistency of the data type
  -b, --belongs      checks if the given address appears in the given chunk
  -p, --pin_chunks   gzip each chunk, push it to IPFS, and update and publish the manifest
  -a, --pin_data     gzip the databases, push them to IPFS, and update and publish the manifest
  -n, --clean        retrieve all pins on Pinata, compare to manifest, remove any extraneous remote pins
  -r, --remote       for some options, force processing from remote data
  -x, --fmt string   export format, one of [none|json*|txt|csv|api]
  -v, --verbose      enable verbose (increase detail with --log_level)
  -h, --help         display this help screen

Notes:
  - If blocks are provided, only chunks intersecting with those blocks are displayed.
  - Only a single block in a given chunk needs to be supplied for a match.
  - The --belongs option is only available with the addresses or blooms mode.
  - The --belongs option requires both an address and a block identifier.
  - You may only specifiy an address when using the --belongs option.
  - The two --pin_ options, the --clean option, and the --check option are available only in manifest mode.
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003e\u003cstrong\u003eSource code\u003c/strong\u003e: \u003ca href="https://github.com/TrueBlocks/trueblocks-core/tree/master/src/apps/chifra/internal/chunks"\u003e\u003ccode\u003einternal/chunks\u003c/code\u003e\u003c/a\u003e\u003c/p\u003e
\u003ch2 id="chifra-init"\u003echifra init\u003c/h2\u003e
\u003cp\u003eWhen invoked, \u003ccode\u003echifra init\u003c/code\u003e looks at a smart contract called \u003cstrong\u003eThe Unchained Index\u003c/strong\u003e (\u003ca href="https://etherscan.io/address/0xcfd7f3b24f3551741f922fd8c4381aa4e00fc8fd"\u003e0xcfd7f3b24f3551741f922fd8c4381aa4e00fc8fd\u003c/a\u003e). From this smart contract, it extracts a data item called \u003ccode\u003emanifestHash\u003c/code\u003e. The \u003ccode\u003emanifestHash\u003c/code\u003e is an IPFS hash that points to a file (a manifest) that contains every previously pinned Bloom filter and index chunk. TrueBlocks periodically publishes the manifest\u0026rsquo;s hash to the smart contract. This makes the entire index both available for our software to use and impossible for us to withhold. Both of these aspects of the manifest are included by design.\u003c/p\u003e
\u003cp\u003eIf you stop \u003ccode\u003echifra init\u003c/code\u003e before it finishes, it will pick up again where it left off the next time you run it.\u003c/p\u003e
\u003cp\u003eCertain parts of the system (\u003ccode\u003echifra list\u003c/code\u003e and \u003ccode\u003echifra export\u003c/code\u003e for example) if you have not previously run \u003ccode\u003echifra init\u003c/code\u003e or \u003ccode\u003echifra scrape\u003c/code\u003e. You will be warned by the system until it\u0026rsquo;s satified.\u003c/p\u003e
\u003cp\u003eIf you run \u003ccode\u003echifra init\u003c/code\u003e and allow it to complete, the next time you run \u003ccode\u003echifra scrape\u003c/code\u003e, it will start where \u003ccode\u003einit\u003c/code\u003e finished. This means that only the blooms will be stored on your hard drive. Subsequent scraping will produce both chunks and blooms, although you can, if you wish delete chunks that are not being used. You may periodically run \u003ccode\u003echifra init\u003c/code\u003e if you prefer not to scrape.\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-[plaintext]"\u003ePurpose:
  Initialize the TrueBlocks system by downloading from IPFS.

Usage:
  chifra init [flags]

Flags:
  -a, --all          in addition to Bloom filters, download full index chunks
  -x, --fmt string   export format, one of [none|json*|txt|csv|api]
  -v, --verbose      enable verbose (increase detail with --log_level)
  -h, --help         display this help screen

Notes:
  - Re-run chifra init as often as you wish. It will repair or freshen the index.
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003e\u003cstrong\u003eSource code\u003c/strong\u003e: \u003ca href="https://github.com/TrueBlocks/trueblocks-core/tree/master/src/apps/chifra/internal/init"\u003e\u003ccode\u003einternal/init\u003c/code\u003e\u003c/a\u003e\u003c/p\u003e
`}).add({id:19,href:"/docs/chifra/other/",title:"Other",description:"",content:`\u003cp\u003eThese commands call some useful miscellaneous tools:\u003c/p\u003e
\u003cul\u003e
\u003cli\u003e\u003ccode\u003echifra quotes\u003c/code\u003e, a rudimentary pricing tool,\u003c/li\u003e
\u003cli\u003e\u003ccode\u003echifra explore\u003c/code\u003e a quick way to open a blockchain explorer,\u003c/li\u003e
\u003cli\u003e\u003ccode\u003eethslurp\u003c/code\u003e an older tool that lets you call data from EtherScan. (This has issues of centralization and data quality, see explanation in its section).\u003c/li\u003e
\u003c/ul\u003e
\u003cp\u003e\u003cdiv class="alert alert-warning d-flex" role="alert"\u003e
  \u003cdiv class="flex-shrink-1 alert-icon"\u003e👉\u003c/div\u003e
  \u003cdiv class="w-100"\u003eNote: some of these tools, like \`ethslurp\`, require an EtherScan key.\u003c/div\u003e
\u003c/div\u003e
\u003ca href="/docs/install/install-trueblocks/#3-update-the-configs-for-your-rpc-and-api-keys"\u003eFollow these instructions to add a key to your config\u003c/a\u003e\u003c/p\u003e
\u003ch2 id="chifra-quotes"\u003echifra quotes\u003c/h2\u003e
\u003cp\u003eThe \u003ccode\u003echifra quotes\u003c/code\u003e tool provides USD (\$) price data to other tools and to the command line. Currently, \u003ccode\u003echifra quotes\u003c/code\u003e retrieves its price data from the Poloniex API. In future versions, we will add other sources and provide a mechanism for fair averaging. Ultimately, as more of this type of price data becomes available on chain, we will use those source, but this is not yet implemented.\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-[plaintext]"\u003ePurpose:
  Update or display Ethereum price data, this tool has been deprecated.

Usage:
  chifra quotes [flags]

Flags:
  -u, --update          freshen price database
  -p, --period string   increment of display
                        One of [ 5 | 15 | 30 | 60 | 120 | 240 | 1440 | 10080 | hourly | daily | weekly ]
  -a, --pair string     which price pair to freshen or list (see Poloniex)
  -e, --feed string     the feed for the price data
                        One of [ poloniex | maker | tellor ]
  -x, --fmt string      export format, one of [none|json*|txt|csv|api]
  -v, --verbose         enable verbose (increase detail with --log_level)
  -h, --help            display this help screen

Notes:
  - Due to restrictions from Poloniex, this tool retrieves only 30 days of data at a time. You must repeatedly run this command until the data is up-to-date.
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003e\u003cstrong\u003eSource code\u003c/strong\u003e: \u003ca href="https://github.com/TrueBlocks/trueblocks-core/tree/master/src/apps/chifra/internal/quotes"\u003e\u003ccode\u003einternal/quotes\u003c/code\u003e\u003c/a\u003e\u003c/p\u003e
\u003ch2 id="chifra-explore"\u003echifra explore\u003c/h2\u003e
\u003cp\u003e\u003ccode\u003echifra explore\u003c/code\u003e opens Etherscan (and other explorers \u0026ndash; including our own) to the block, transaction hash, or address you specify. It\u0026rsquo;s a handy (configurable) way to open an explorer from the command line, nothing more.\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-[plaintext]"\u003ePurpose:
  Open a local or remote explorer for one or more addresses, blocks, or transactions.

Usage:
  chifra explore [flags] \u0026lt;term\u0026gt; [term...]

Arguments:
  terms - one or more address, name, block, or transaction identifier

Flags:
  -l, --local    open the local TrueBlocks explorer
  -g, --google   search google excluding popular blockchain explorers
  -h, --help     display this help screen
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003e\u003cstrong\u003eSource code\u003c/strong\u003e: \u003ca href="https://github.com/TrueBlocks/trueblocks-core/tree/master/src/apps/chifra/internal/explore"\u003e\u003ccode\u003einternal/explore\u003c/code\u003e\u003c/a\u003e\u003c/p\u003e
`}).add({id:20,href:"/docs/chifra/configs/",title:"Configurations",description:"",content:`\u003cp\u003eMany of the \u003ccode\u003echifra\u003c/code\u003e commands allow you to customize their behaviour through configuration files and/or environment variables. These options are documented here.\u003c/p\u003e
\u003ch3 id="environment-variables"\u003eEnvironment Variables\u003c/h3\u003e
\u003cp\u003eEach command-line option may be overridden by exporting an environment variable in your shell prior to running a \u003ccode\u003echifra\u003c/code\u003e command.\u003c/p\u003e
\u003cp\u003eThe name of those environment variables is as follows:\u003c/p\u003e
\u003col\u003e
\u003cli\u003eThe environment variable is \u003ccode\u003eALL_UPPER_CASE\u003c/code\u003e\u003c/li\u003e
\u003cli\u003eThe environment variable name preserves underbars in the \u003ccode\u003eitem_name\u003c/code\u003e\u003c/li\u003e
\u003cli\u003eThe name of the variable starts with the \u003ccode\u003egroup\u003c/code\u003e the item belongs to\u003c/li\u003e
\u003c/ol\u003e
\u003cp\u003eFor example: \u003ccode\u003eGROUP_ITEM_NAME\u003c/code\u003e.\u003c/p\u003e
\u003cp\u003eA more concrete example might be:\u003c/p\u003e
\u003cpre\u003e\u003ccode\u003eexport SETTINGS_RPCPROVIDER=http://localhost:9876
chifra blocks 100
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003ewhich would cause \u003ccode\u003echifra\u003c/code\u003e to use an alternate rpcProvider without having to edit the configuration file.\u003c/p\u003e
\u003cp\u003eThis feature comes in handy when build shell scripts to automate various tasks with \u003ccode\u003echifra\u003c/code\u003e.\u003c/p\u003e
\u003ch3 id="where-are-configuration-files-stored"\u003eWhere Are Configuration Files Stored?\u003c/h3\u003e
\u003cp\u003ePlease see \u003ca href="#"\u003eTODO: PLACE_HODLER\u003c/a\u003e for more information.\u003c/p\u003e
\u003ch3 id="separate-files"\u003eSeparate Files\u003c/h3\u003e
\u003cp\u003eA single global configuration, called \u003ccode\u003etrueBlocks.toml\u003c/code\u003e, is stored at the root of the configuration folder.\u003c/p\u003e
\u003cp\u003eIn addition, each individual tool has its own configuration file with items peculuar to that tool. If a configuration item is found in a particular file, it applies only to that tool.\u003c/p\u003e
\u003cp\u003eIf, however, one of the items documented below under \u003ccode\u003etrueBlocks.toml\u003c/code\u003e is found in a tool\u0026rsquo;s individual config, it will override that value for that tool only.\u003c/p\u003e
\u003cp\u003eFor historical reasons, the configuration files are names based on old tool names. Please see the table below for the name of each tool\u0026rsquo;s config file.\u003c/p\u003e
\u003ch3 id="multichain"\u003eMultichain\u003c/h3\u003e
\u003cp\u003eIf you\u0026rsquo;re running against mutliple chains, you may place any of these files in the root of the chain\u0026rsquo;s configuration folder, and the values found there will replace any values found at the top level. In this way, you may configure all chains for certain values, but customize your configuration per chain.\u003c/p\u003e
\u003ch3 id="configuration-files"\u003eConfiguration Files\u003c/h3\u003e
\u003cdiv style="padding:2px;padding-left:10px;background-color:green;color:white"\u003etrueBlocks.toml (all tools)\u003c/div\u003e
\u003ctable\u003e
\u003cthead\u003e
\u003ctr\u003e
\u003cth\u003eItem\u003c/th\u003e
\u003cth\u003eDescription / Default\u003c/th\u003e
\u003c/tr\u003e
\u003c/thead\u003e
\u003ctbody\u003e
\u003ctr\u003e
\u003ctd\u003e\u003c/td\u003e
\u003ctd\u003e\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003e[settings]\u003c/td\u003e
\u003ctd\u003e\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003erpcProvider\u003c/td\u003e
\u003ctd\u003eThe RPC endpoint (required)\u003cbr /\u003ehttp://localhost:8545\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003ecachePath\u003c/td\u003e
\u003ctd\u003eLocation of binary cache\u003cbr /\u003e\$CONFIG/cache/\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eindexPath\u003c/td\u003e
\u003ctd\u003eLocation of unchained index\u003cbr /\u003e\$CONFIG/unchained/\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eetherscan_key\u003c/td\u003e
\u003ctd\u003eAPI key for EtherScan (optional)\u003cbr/\u003eempty\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003e\u003c/td\u003e
\u003ctd\u003e\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003e[dev]\u003c/td\u003e
\u003ctd\u003e\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003edebug_curl\u003c/td\u003e
\u003ctd\u003eIncreases log level for curl commands\u003cbr /\u003efalse\u003c/td\u003e
\u003c/tr\u003e
\u003c/tbody\u003e
\u003c/table\u003e
\u003cdiv style="padding:2px;padding-left:10px;background-color:green;color:white"\u003eAll tools (in each file)\u003c/div\u003e
\u003ctable\u003e
\u003cthead\u003e
\u003ctr\u003e
\u003cth\u003eItem/Default\u003c/th\u003e
\u003cth\u003eDescription\u003c/th\u003e
\u003c/tr\u003e
\u003c/thead\u003e
\u003ctbody\u003e
\u003ctr\u003e
\u003ctd\u003e[display]\u003c/td\u003e
\u003ctd\u003e\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eformat\u003c/td\u003e
\u003ctd\u003eCustomizes default output of tool\u003cbr/\u003eempty\u003c/td\u003e
\u003c/tr\u003e
\u003c/tbody\u003e
\u003c/table\u003e
\u003cdiv style="padding:2px;padding-left:10px;background-color:green;color:white"\u003eacctExport.toml for chifra export\u003c/div\u003e
\u003ctable\u003e
\u003cthead\u003e
\u003ctr\u003e
\u003cth\u003eItem/Default\u003c/th\u003e
\u003cth\u003eDescription\u003c/th\u003e
\u003c/tr\u003e
\u003c/thead\u003e
\u003ctbody\u003e
\u003ctr\u003e
\u003ctd\u003e\u003c/td\u003e
\u003ctd\u003e\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003e[settings]\u003c/td\u003e
\u003ctd\u003e\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003ecache\u003c/td\u003e
\u003ctd\u003eIf true, queried transactions are cached\u003cbr /\u003efalse\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003ecache_traces\u003c/td\u003e
\u003ctd\u003eIf true, queried traces are cached\u003cbr /\u003efalse\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003emax_slow_queries\u003c/td\u003e
\u003ctd\u003eIn API mode only, if transactions do not reconcile, only produce this many results per page\u003cbr /\u003e13\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eether_rounding\u003c/td\u003e
\u003ctd\u003eWhen doing reconciliations, round to this number of decimals places\u003cbr /\u003e18\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003estart_when_deployed\u003c/td\u003e
\u003ctd\u003eFor smart contracts only, if \u003ccode\u003etrue\u003c/code\u003e, start scan when contract is first deployed. If \u003ccode\u003efalse\u003c/code\u003e, scan entire history (slower)\u003cbr /\u003etrue\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003emax_traces\u003c/td\u003e
\u003ctd\u003eFor any given transaction, limit number of traces to this number\u003cbr /\u003e250\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eskip_ddos\u003c/td\u003e
\u003ctd\u003eSkip over 2016 dDos attacks\u003cbr /\u003etrue\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003e\u003c/td\u003e
\u003ctd\u003e\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003e[display]\u003c/td\u003e
\u003ctd\u003e\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eformat\u003c/td\u003e
\u003ctd\u003eDisplay format when exporting transactions (search source code)\u003cbr /\u003eSTR_DISPLAY_TRANSACTION\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003ereceipt\u003c/td\u003e
\u003ctd\u003eDisplay format when exporting receipts\u003cbr /\u003eSTR_DISPLAY_RECEIPT\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003elog\u003c/td\u003e
\u003ctd\u003eDisplay format when exporting logs\u003cbr /\u003eSTR_DISPLAY_LOGENTRY\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003etrace\u003c/td\u003e
\u003ctd\u003eDisplay format when exporting traces\u003cbr /\u003eSTR_DISPLAY_TRACE\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eappearances\u003c/td\u003e
\u003ctd\u003eDisplay format when exporting appearances\u003cbr /\u003eSTR_DISPLAY_APPEARANCEDISPLAY\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eneighbor\u003c/td\u003e
\u003ctd\u003eDisplay format when exporting neighbors\u003cbr /\u003eSTR_DISPLAY_APPEARANCE\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003estatement\u003c/td\u003e
\u003ctd\u003eDisplay format when exporting statements\u003cbr /\u003eSTR_DISPLAY_RECONCILIATION\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003e\u003c/td\u003e
\u003ctd\u003e\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003e[exclusions]\u003c/td\u003e
\u003ctd\u003e\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eenabled\u003c/td\u003e
\u003ctd\u003eIf \u003ccode\u003etrue\u003c/code\u003e, exclude addresses in \u003ccode\u003elist\u003c/code\u003e from extractions\u003cbr /\u003efalse\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003elist\u003c/td\u003e
\u003ctd\u003eIf \u003ccode\u003e[exclusions]enabled\u003c/code\u003e is \u003ccode\u003etrue\u003c/code\u003e, exclude this list of addresses from extractions\u003cbr /\u003eempty\u003c/td\u003e
\u003c/tr\u003e
\u003c/tbody\u003e
\u003c/table\u003e
\u003cp\u003e\u003ca href="#C4"\u003e\u003c/a\u003e\u003c/p\u003e
\u003cdiv style="padding:2px;padding-left:10px;background-color:green;color:white"\u003eblockScrape.toml for chifra scrape\u003c/div\u003e
\u003ctable\u003e
\u003cthead\u003e
\u003ctr\u003e
\u003cth\u003eItem/Default\u003c/th\u003e
\u003cth\u003eDescription\u003c/th\u003e
\u003c/tr\u003e
\u003c/thead\u003e
\u003ctbody\u003e
\u003ctr\u003e
\u003ctd\u003e\u003c/td\u003e
\u003ctd\u003e\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003e[settings]\u003c/td\u003e
\u003ctd\u003e\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eblock_cnt\u003c/td\u003e
\u003ctd\u003eThe number of blocks to process with each round of the scraper\u003cbr /\u003e2000\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eblock_chan_cnt\u003c/td\u003e
\u003ctd\u003eThe number of go routines to devote to block processors\u003cbr /\u003e10\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eaddr_chan_cnt\u003c/td\u003e
\u003ctd\u003eThe number of go routines to devote to address processors\u003cbr /\u003e20\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003en_blocks_fallback\u003c/td\u003e
\u003ctd\u003eThe number of blocks to process during dDos or other busy block ranges\u003cbr /\u003e500\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eapps_per_chunk\u003c/td\u003e
\u003ctd\u003ethe number of appearances to build into a chunk before consolidating it\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eunripe_dist\u003c/td\u003e
\u003ctd\u003eThe distance (in blocks) from the front of the chain under which (inclusive) a block is considered unripe\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003esnap_to_grid\u003c/td\u003e
\u003ctd\u003eAn override to apps_per_chunk to snap-to-grid at every modulo of this value, this allows easier corrections to the index\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003efirst_snap\u003c/td\u003e
\u003ctd\u003eThe first block at which snap_to_grid is enabled\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eallow_missing\u003c/td\u003e
\u003ctd\u003eDo not report errors for blockchain that contain blocks with zero addresses\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003en_test_runs\u003c/td\u003e
\u003ctd\u003eIn live testing mode, the number of test runs to process before quitting\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003epinata_api_key\u003c/td\u003e
\u003ctd\u003eIf \u0026ndash;pin is on, the key to Pinata at which to pin\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003epinata_secret_api_key\u003c/td\u003e
\u003ctd\u003eIf \u0026ndash;pin is on, the secret key to Pinata at which to pin\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003e\u003c/td\u003e
\u003ctd\u003e\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003e[requires]\u003c/td\u003e
\u003ctd\u003e(this section will be removed when full multi-chain support is finished)\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003etracing\u003c/td\u003e
\u003ctd\u003eIf true, require the node to be able to produce traces\u003cbr /\u003etrue\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003earchive\u003c/td\u003e
\u003ctd\u003eIf true, require the node to be an archive node\u003cbr /\u003etrue\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eparity\u003c/td\u003e
\u003ctd\u003eIf true, require the node to be parity (deprecated)\u003cbr /\u003etrue\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003e\u003c/td\u003e
\u003ctd\u003e\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003e[dev]\u003c/td\u003e
\u003ctd\u003e(this section will be removed when full multi-chain support is finished)\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eipfs_gateway\u003c/td\u003e
\u003ctd\u003eThe default IPFS gateway endpoint for \u003ccode\u003echifra init\u003c/code\u003e\u003cbr /\u003ehttps://ipfs.unchainedindex.io/ipfs/\u003c/td\u003e
\u003c/tr\u003e
\u003c/tbody\u003e
\u003c/table\u003e
\u003cdiv style="padding:2px;padding-left:10px;background-color:green;color:white"\u003echunkMan.toml for chifra chunks\u003c/div\u003e
\u003ctable\u003e
\u003cthead\u003e
\u003ctr\u003e
\u003cth\u003eItem/Default\u003c/th\u003e
\u003cth\u003eDescription\u003c/th\u003e
\u003c/tr\u003e
\u003c/thead\u003e
\u003ctbody\u003e
\u003ctr\u003e
\u003ctd\u003e\u003c/td\u003e
\u003ctd\u003e\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003e[enabled]\u003c/td\u003e
\u003ctd\u003e\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003edownload_manifest\u003c/td\u003e
\u003ctd\u003eIf true, download the index manifest prior to processing\u003cbr /\u003etrue\u003c/td\u003e
\u003c/tr\u003e
\u003c/tbody\u003e
\u003c/table\u003e
\u003cdiv style="padding:2px;padding-left:10px;background-color:green;color:white"\u003egetTraces.toml for chifra traces\u003c/div\u003e
\u003ctable\u003e
\u003cthead\u003e
\u003ctr\u003e
\u003cth\u003eItem/Default\u003c/th\u003e
\u003cth\u003eDescription\u003c/th\u003e
\u003c/tr\u003e
\u003c/thead\u003e
\u003ctbody\u003e
\u003ctr\u003e
\u003ctd\u003e\u003c/td\u003e
\u003ctd\u003e\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003e[settings]\u003c/td\u003e
\u003ctd\u003e\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eskip_ddos\u003c/td\u003e
\u003ctd\u003eIf true, skip over September 2016 dDos transactions\u003cbr /\u003etrue\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003emax\u003c/td\u003e
\u003ctd\u003eIf \u003ccode\u003eskip_ddos\u003c/code\u003e is \u003ccode\u003etrue\u003c/code\u003e, this number of traces defines a \u0026lsquo;dDos\u0026rsquo; transaction\u003cbr /\u003e250\u003c/td\u003e
\u003c/tr\u003e
\u003c/tbody\u003e
\u003c/table\u003e
\u003cdiv style="padding:2px;padding-left:10px;background-color:green;color:white"\u003eethslurp.toml for chifra slurp\u003c/div\u003e
\u003cp\u003e\u003cem\u003eSee the source code for information on customizing this tool \u0026ndash; this legacy code does not comply with other tools.\u003c/em\u003e\u003c/p\u003e
\u003ch3 id="other-tools"\u003eOther tools\u003c/h3\u003e
\u003cp\u003eThe following tools are documented, but customizing them is not supported. If you change something here, and you break your installation, please don\u0026rsquo;t tell us we didn\u0026rsquo;t warn you.\u003c/p\u003e
\u003cdiv style="padding:2px;padding-left:10px;background-color:green;color:white"\u003etestRunner.toml for testRunner\u003c/div\u003e
\u003ctable\u003e
\u003cthead\u003e
\u003ctr\u003e
\u003cth\u003eItem/Default\u003c/th\u003e
\u003cth\u003eDescription\u003c/th\u003e
\u003c/tr\u003e
\u003c/thead\u003e
\u003ctbody\u003e
\u003ctr\u003e
\u003ctd\u003e\u003c/td\u003e
\u003ctd\u003e\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003e[settings]\u003c/td\u003e
\u003ctd\u003e\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eapi_provider\u003c/td\u003e
\u003ctd\u003eThe location of the API endpoint gotten from \u003ccode\u003echifra serve\u003c/code\u003e\u003cbr /\u003ehttp://localhost:8080\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003erun_local\u003c/td\u003e
\u003ctd\u003eIf true, run tests labeled as \u003ccode\u003elocal\u003c/code\u003e (most will fail)\u003cbr /\u003efalse\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003ejson_pretty_print\u003c/td\u003e
\u003ctd\u003ePost processor for API test cases (formats output to verify valid JSON production)\u003cbr /\u003ejq .\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003etest_epoch\u003c/td\u003e
\u003ctd\u003eThe epoch to report in the performance testing tool - usually tracks current version\u003cbr /\u003eE-\u0026lt;VERSION_MINOR\u0026gt;\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003ecopy_path\u003c/td\u003e
\u003ctd\u003eAn alternate path to which to copy performance results\u003c/td\u003e
\u003c/tr\u003e
\u003c/tbody\u003e
\u003c/table\u003e
\u003cdiv style="padding:2px;padding-left:10px;background-color:green;color:white"\u003emakeClass.toml for makeClass\u003c/div\u003e
\u003ctable\u003e
\u003cthead\u003e
\u003ctr\u003e
\u003cth\u003eItem/Default\u003c/th\u003e
\u003cth\u003eDescription\u003c/th\u003e
\u003c/tr\u003e
\u003c/thead\u003e
\u003ctbody\u003e
\u003ctr\u003e
\u003ctd\u003e\u003c/td\u003e
\u003ctd\u003e\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003e[settings]\u003c/td\u003e
\u003ctd\u003e\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003edisabled\u003c/td\u003e
\u003ctd\u003eIf true, makeClass is enabled. Be warned \u0026ndash; this will overwrite source code file if improperly configured\u003cbr /\u003efalse\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003elast_format\u003c/td\u003e
\u003ctd\u003eThe timestamp at date the makeClass formatter was run\u003cbr /\u003e0\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003elast_lint\u003c/td\u003e
\u003ctd\u003eThe timestamp at the date the makeClass linter was run\u003cbr /\u003e0\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003e\u003c/td\u003e
\u003ctd\u003e\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003e[enabled]\u003c/td\u003e
\u003ctd\u003e\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eauto_format\u003c/td\u003e
\u003ctd\u003eIf true, run the auto-formatter\u003cbr /\u003efalse\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003egenerate\u003c/td\u003e
\u003ctd\u003eIf true, run the auto-code generator\u003cbr /\u003efalse\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003ereadmes\u003c/td\u003e
\u003ctd\u003eIf true, generate README files with \u003ccode\u003emake generate\u003c/code\u003e\u003cbr /\u003efalse\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003elint_all\u003c/td\u003e
\u003ctd\u003eIf true, run the linter when doing \u003ccode\u003emake finish\u003c/code\u003e\u003cbr /\u003efalse\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003etsx\u003c/td\u003e
\u003ctd\u003e(deprecated)\u003cbr /\u003efalse\u003c/td\u003e
\u003c/tr\u003e
\u003c/tbody\u003e
\u003c/table\u003e
\u003cp\u003eThe follow values are defined for each classDefinition file\u003c/p\u003e
\u003ctable\u003e
\u003cthead\u003e
\u003ctr\u003e
\u003cth\u003eItem/Default\u003c/th\u003e
\u003cth\u003eDescription\u003c/th\u003e
\u003c/tr\u003e
\u003c/thead\u003e
\u003ctbody\u003e
\u003ctr\u003e
\u003ctd\u003e\u003c/td\u003e
\u003ctd\u003e\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003e[settings]\u003c/td\u003e
\u003ctd\u003e\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eclass\u003c/td\u003e
\u003ctd\u003eThe name of the C++ class\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003ebase_class\u003c/td\u003e
\u003ctd\u003eThe baseclass for class\u003cbr /\u003eCBaseNode\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003efields\u003c/td\u003e
\u003ctd\u003eThe name of the file holding the field definitions for the class\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eincludes\u003c/td\u003e
\u003ctd\u003eThe include files for the class\u0026rsquo;s header file\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003ecpp_includes\u003c/td\u003e
\u003ctd\u003eThe include files for the class\u0026rsquo;s c++ file\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003esort\u003c/td\u003e
\u003ctd\u003eIf true, add sorting function to the class\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eequals\u003c/td\u003e
\u003ctd\u003eIf true, add equality function to the class\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003econtained_by\u003c/td\u003e
\u003ctd\u003eIf present, the name of the class that contains items of this type\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003edoc_producer\u003c/td\u003e
\u003ctd\u003eThe name of the chifra tool that produces this type of data\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003etsx\u003c/td\u003e
\u003ctd\u003e(deprecated)\u003cbr /\u003efalse\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003edoc_group\u003c/td\u003e
\u003ctd\u003eThe documentation group this class belongs to\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003edoc_descr\u003c/td\u003e
\u003ctd\u003eThe description of the class for the documentation\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003edoc_api\u003c/td\u003e
\u003ctd\u003eThe API something or other for something or other\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eforce_objget\u003c/td\u003e
\u003ctd\u003eSome flag for some reason\u003cbr /\u003efalse\u003c/td\u003e
\u003c/tr\u003e
\u003c/tbody\u003e
\u003c/table\u003e
`}).add({id:21,href:"/docs/chifra/",title:"Chifra",description:"The TrueBlocks CLI",content:""}).add({id:22,href:"/docs/prologue/",title:"Prologue",description:"Prologue Doks.",content:""}),userinput.addEventListener("input",n,!0),suggestions.addEventListener("click",s,!0);function n(){var n,r=this.value,o=e.search(r,{limit:5,index:["content"],enrich:!0}),i=suggestions.childNodes,s=0,c=o.length;for(suggestions.classList.remove("d-none"),o.forEach(function(e){n=document.createElement("div"),n.innerHTML="<a href><span></span><span></span></a>",a=n.querySelector("a"),t=n.querySelector("span:first-child"),d=n.querySelector("span:nth-child(2)"),a.href=e.result[s].doc.href,t.textContent=e.result[s].doc.title,d.textContent=e.result[s].doc.description,suggestions.appendChild(n)});i.length>c;)suggestions.removeChild(i[s])}function s(){for(;suggestions.lastChild;)suggestions.removeChild(suggestions.lastChild);return!1}})()