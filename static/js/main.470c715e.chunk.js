(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},239:function(e,t,a){},240:function(e,t,a){},241:function(e,t,a){},242:function(e,t,a){},243:function(e,t,a){"use strict";a.r(t);a(83),a(84);var n=a(0),r=a.n(n),l=a(49),i=a.n(l),o=a(4),s=a(5),c=a(7),m=a(6),u=a(8),d=a(244),h=a(246),p=a(81),b=(a(91),a(75)),f=a.n(b),g=a(76),v=a.n(g),E=(a(98),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",menuOpen:!1},a.handleStateChange=function(e){a.setState({menuOpen:e.isOpen})},a.closeMenu=function(){a.setState({menuOpen:!1})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"navlink-row"},r.a.createElement("div",{className:"burger-and-logo"},r.a.createElement("div",{className:"burger"},r.a.createElement(v.a,{isOpen:this.state.menuOpen,onStateChange:function(t){return e.handleStateChange(t)},disableOverlayClick:!1,pageWrapId:"main-container",outerContainerId:"app"},r.a.createElement(d.a,{id:"index",className:"menu-item",to:"/",onClick:function(){return e.closeMenu()}},"Index"),r.a.createElement(d.a,{id:"research",className:"menu-item",to:"/research",onClick:function(){return e.closeMenu()}},"Research"),r.a.createElement(d.a,{id:"membership",className:"menu-item",to:"/membership",onClick:function(){return e.closeMenu()}},"Membership"),r.a.createElement(d.a,{id:"about",className:"menu-item",to:"/about",onClick:function(){return e.closeMenu()}},"About"))),r.a.createElement("div",{className:"nav-logo"},"IIMI")),r.a.createElement("div",{className:"navlinks"},r.a.createElement(d.a,{to:"/",exact:!0,className:"navlink",activeClassName:"navlink-active"},"Index"),r.a.createElement(d.a,{to:"/research",exact:!0,className:"navlink",activeClassName:"navlink-active"},"Research"),r.a.createElement(d.a,{to:"/membership",exact:!0,className:"navlink",activeClassName:"navlink-active"},"Membership"),r.a.createElement(d.a,{to:"/about",exact:!0,className:"navlink",activeClassName:"navlink-active"},"About")),r.a.createElement("div",{className:"social"},r.a.createElement("a",{href:"https://www.youtube.com/channel/UCdYYpmoBD3rVXmOlTtOn4ww",target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:"/images/icon_youtube.jpg",className:"social-link",alt:"youtube"})),r.a.createElement("a",{href:"https://iimemeindex.libsyn.com/",target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:"/images/icon_podcast.jpg",className:"social-link",alt:"podcast"})),r.a.createElement("a",{href:"https://www.instagram.com/iimemeindex/",target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:"/images/icon_instagram.jpg",className:"social-link",alt:"instagram"})),r.a.createElement("a",{href:"https://twitter.com/iimemeindex",target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:"/images/icon_twitter.jpg",className:"social-link",alt:"twitter"}))))}}]),t}(r.a.Component)),y=a(50),k=(a(100),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={display:"top20",header:"20 most prominent image memes",order:"rank",descend:!0,memp100:[],families:[],bonus:[]},a.sortMemes=function(e,t){switch(a.state.order){case"name":return e.displayname.localeCompare(t.displayname);case"current":return t.current-e.current;case"average":return t.mean-e.mean;case"max":return t.max-e.max;case"trend":return t.trend-e.trend;default:var n=e.rank;"F"===n[0]&&(n=n.substring(1));var r=t.rank;return"F"===r[0]&&(r=r.substring(1)),parseInt(n)-parseInt(r)}},a.renderTable=function(){var e;e="top20"===a.state.display?a.state.memp100.slice(0,20):a.state[a.state.display];var t=a.state.descend?1:-1;return e.sort(function(e,n){return a.sortMemes(e,n)*t}),e.map(function(e){return r.a.createElement("tr",{key:e.name},r.a.createElement("td",{className:"col-rank"},e.rank),r.a.createElement("td",{className:"col-img"},r.a.createElement("img",{className:"thumb",src:"images/".concat(e.thumb),alt:"thumbnail"})),r.a.createElement("td",{className:"col-name"},r.a.createElement(y.a,{to:"memes/".concat(e.name)},e.displayname)),r.a.createElement("td",{className:"col-stat"},e.current),r.a.createElement("td",{className:"col-stat"},e.mean),r.a.createElement("td",{className:"col-stat"},e.max),r.a.createElement("td",{className:"col-stat"},e.trend))})},a.changeOrder=function(e){var t=a.state,n=t.order,r=t.descend;n===e.target.value?a.setState({descend:!r}):a.setState({order:e.target.value,descend:!0})},a.changeDisplay=function(e){var t;switch(e.target.value){case"memp100":t="100 most prominent image memes";break;case"bonus":t="30 notable image memes outside the top 100";break;case"families":t="Top 20 image meme families";break;default:t="20 most prominent image memes"}a.setState({display:e.target.value,header:t})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("data/splash_main.json").then(function(e){return e.json()}).then(function(t){return e.setState({memp100:t})}),fetch("data/splash_family.json").then(function(e){return e.json()}).then(function(t){return e.setState({families:t})}),fetch("data/splash_bonus.json").then(function(e){return e.json()}).then(function(t){return e.setState({bonus:t})}),document.title="Meme Trends | Internet Meme Image Index",window.scrollTo(0,0)}},{key:"render",value:function(){var e=this.state,t=e.order,a=e.descend,n=String.fromCharCode(9660),l=String.fromCharCode(9650);return r.a.createElement("div",{className:"index-container"},r.a.createElement("div",{className:"sticky-index-header"},r.a.createElement("div",{className:"index-header"},r.a.createElement("span",{className:"header-tag"},this.state.header),r.a.createElement("select",{onChange:this.changeDisplay,defaultValue:"top20"},r.a.createElement("option",{value:"top20"},"Top 20"),r.a.createElement("option",{value:"memp100"},"Top 100"),r.a.createElement("option",{value:"bonus"},"Bonus Memes"),r.a.createElement("option",{value:"families"},"Families"))),r.a.createElement("table",{className:"index-table table-header"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{rowSpan:2,className:"col-rank"},r.a.createElement("button",{className:"rank"===t?"text-link text-link-active":"text-link",value:"rank",onClick:this.changeOrder},"#",r.a.createElement("span",{className:"arrow"},"rank"===t&&(a?n:l)))),r.a.createElement("th",{rowSpan:2,className:"col-img"}),r.a.createElement("th",{rowSpan:2,className:"col-name",style:{borderRight:"0"}},r.a.createElement("button",{className:"name"===t?"text-link text-link-active":"text-link",value:"name",onClick:this.changeOrder},"families"===this.state.display?"Meme Family Name":"Meme Name",r.a.createElement("span",{className:"arrow"},"name"===t&&(a?n:l)))),r.a.createElement("th",{className:"col-stat"},r.a.createElement("button",{className:"current"===t?"text-link text-link-active":"text-link",value:"current",onClick:this.changeOrder},"Last",r.a.createElement("span",{class:"arrow"},"current"===t&&(a?n:l))," ","MEMP")),r.a.createElement("th",{className:"col-stat"},r.a.createElement("button",{className:"average"===t?"text-link text-link-active":"text-link",value:"average",onClick:this.changeOrder},"Avg",r.a.createElement("span",{class:"arrow"},"average"===t&&(a?n:l))," ","MEMP")),r.a.createElement("th",{className:"col-stat"},r.a.createElement("button",{className:"max"===t?"text-link text-link-active":"text-link",value:"max",onClick:this.changeOrder},"Max",r.a.createElement("span",{class:"arrow"},"max"===t&&(a?n:l))," ","MEMP")),r.a.createElement("th",{className:"col-stat"},r.a.createElement("button",{className:"trend"===t?"text-link text-link-active":"text-link",value:"trend",onClick:this.changeOrder},"Trend",r.a.createElement("span",{class:"arrow"},"trend"===t&&(a?n:l))," ","MEMP"))),r.a.createElement("tr",{className:"note"},r.a.createElement("td",null,"Dec 2018"),r.a.createElement("td",null,"Jan-Dec 2018"),r.a.createElement("td",null,"Jan-Dec 2018"),r.a.createElement("td",null,"Nov-Dec 2018"))))),r.a.createElement("table",{className:"index-table table-body"},r.a.createElement("tbody",null,this.state.memp100&&this.renderTable()),r.a.createElement("tfoot",null,r.a.createElement("tr",null,r.a.createElement("td",{colSpan:7,className:"footer"},"The calculation of rank and MEMP are explained on the research page and"," ",r.a.createElement("a",{href:"https://www.scribd.com/document/401528221/Quantifying-Meme-Prominence",target:"_blank",rel:"noreferrer noopener"},"in this report"))))))}}]),t}(r.a.Component)),w=a(13),N=a(78),x=(a(239),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={meme:!1,compare:!1,series:"m3"},a.switchActive=function(e){a.props.history.push("/memes/"+e.target.value)},a.switchCompare=function(e){var t=e.target.value;a.state[t]?a.setState({compare:a.state[t]}):fetch("/data/series/"+t+".json").then(function(e){return e.json()}).then(function(e){return a.setState(Object(w.a)({compare:e},t,e))})},a.changeSeries=function(e){a.setState({series:e.target.value})},a.compareData=function(){return a.state.compare[a.state.series]},a.memeData=function(){return a.state.meme[a.state.series]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.meme;fetch("/data/series/"+t+".json").then(function(e){return e.json()}).then(function(a){return e.setState(Object(w.a)({meme:a},t,a),function(){return document.title=a.display+" | Internet Meme Image Index(IIMI)"})}),fetch("/data/every.json").then(function(e){return e.json()}).then(function(t){return e.setState({every:t})}),fetch("/data/labels.json").then(function(e){return e.json()}).then(function(t){return e.setState({labels:t})})}},{key:"componentWillReceiveProps",value:function(e){var t=this,a=e.match.params.meme;a!==this.props.match.params.meme&&(this.state[a]?this.setState({meme:this.state[a]}):("compare"===a&&(a="advice_mallard"),fetch("/data/series/"+a+".json").then(function(e){return e.json()}).then(function(e){return t.setState(Object(w.a)({meme:e},a,e),function(){return document.title=e.display+" | Internet Meme Image Index(IIMI)"})})))}},{key:"render",value:function(){var e,t=this.state,a=t.meme,n=t.every,l=t.labels,i=t.series,o=t.compare;return a&&n&&l&&i&&(e={labels:this.state.labels[this.state.series],options:{maintainAspectRatio:!1,scales:{yAxes:[{ticks:{min:0,fontSize:11},scaleLabel:{display:!0,labelString:"Prominence (MEMP)",fontSize:12},gridLines:{lineWidth:2},stacked:!1}],xAxes:[{ticks:{maxTicksLimit:11,minTicksLimit:9,fontSize:10,maxRotation:65,minRotation:65},scaleLabel:{display:!0,labelString:"Date",fontSize:12},gridLines:{lineWidth:1}}]}},datasets:[{label:this.state.meme.display,fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:this.memeData()}]},o&&e.datasets.push({label:this.state.compare.display,fill:!1,lineTension:.1,backgroundColor:"rgba(207,97,97,0.4)",borderColor:"rgba(207,97,97,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(207,97,97,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(207,97,97,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:this.compareData()})),r.a.createElement("div",{className:"col-container"},r.a.createElement("div",{className:"col-left"},r.a.createElement("div",{className:"left-selector"},r.a.createElement("select",{onChange:this.switchActive,value:this.props.match.params.meme},n&&n.map(function(e){var t=Object.keys(e)[0];return r.a.createElement("option",{value:e[t],key:t},t)}))),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"main-box"},r.a.createElement("div",{className:"meme-info"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:"/images/".concat(a.thumb),alt:"thumbnail"})),r.a.createElement("h1",{className:"meme-header"},a.display),r.a.createElement("div",{className:"meme-desc"},a.description))),r.a.createElement("div",{className:"section"},r.a.createElement("span",{className:"label"},"IIMI rating:",r.a.createElement(y.a,{to:"../tags/".concat(a.rating)},a.rating))),r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"label"},"Trivia"),r.a.createElement("li",null,a.trivia1),r.a.createElement("li",null,a.trivia2)),a.tags&&r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"label"},"Tags: "),r.a.createElement("div",{className:"tag"},a.tags.map(function(e){return r.a.createElement(y.a,{to:"../tags/".concat(e),key:e},e)}))),a.urls&&r.a.createElement("div",{className:"section buttons"},a.urls.map(function(e,t){return r.a.createElement("a",{href:e,target:"_blank",rel:"noreferrer noopener",key:t},r.a.createElement("button",{className:"button"},"Example"))})))),r.a.createElement("div",{className:"col-right"},r.a.createElement("div",{className:"right-selector"},r.a.createElement("div",{className:"compare-selector"},r.a.createElement("span",{className:"label"},"Compare:"),r.a.createElement("select",{onChange:this.switchCompare},r.a.createElement("option",{value:!1},"SELECT MEME TO COMPARE"),n&&n.map(function(e){var t=Object.keys(e)[0];return r.a.createElement("option",{value:e[t],key:t},t)}))),r.a.createElement("div",{className:"m-selector"},r.a.createElement("button",{className:"m1"===i?"text-link text-link-active":"text-link",value:"m1",onClick:this.changeSeries},"1"),"  |",r.a.createElement("button",{className:"m3"===i?"text-link text-link-active":"text-link",value:"m3",onClick:this.changeSeries},"3"),"  |",r.a.createElement("button",{className:"m9"===i?"text-link text-link-active":"text-link",value:"m9",onClick:this.changeSeries},"9"),"m",r.a.createElement("span",{className:"months-extra"},"onths"))),r.a.createElement("div",{className:"chart card"},e&&r.a.createElement(N.a,{data:e,options:e.options,key:i}))))}}]),t}(r.a.Component)),j=(a(240),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={tag:null},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/data/tags.json").then(function(e){return e.json()}).then(function(t){var a=e.props.match.params.tag;e.setState({tags:t,tag:a})})}},{key:"componentWillReceiveProps",value:function(e){console.log("props");var t=e.match.params.tag;this.setState({tag:t})}},{key:"render",value:function(){var e=this,t=this.state,a=t.tag,n=t.tags;return r.a.createElement("div",{className:"tag-container"},r.a.createElement("div",null,"Tag:",r.a.createElement("select",{onChange:function(t){return e.props.history.push("/tags/"+t.target.value)},value:this.props.match.params.tag},n&&Object.keys(n).sort().map(function(e){return r.a.createElement("option",{value:e,key:e},e)}))),r.a.createElement("h1",{style:{fontWeight:"normal"}},"Memes tagged ",r.a.createElement("u",null,a),":"),r.a.createElement("ul",null,n&&n[a].map(function(e){for(var t in e)return r.a.createElement("li",{key:t},r.a.createElement(y.a,{to:"/memes/".concat(t)},e[t]))})))}}]),t}(r.a.Component)),C=(a(241),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={email:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{width:"100%"}},r.a.createElement("form",{action:"https://iimemeindex.us7.list-manage.com/subscribe/post?u=b2263447e37156f61869cbd15&id=840ba62408",method:"post",target:"_blank",noValidate:!0,onSubmit:function(){return setTimeout(function(){return e.setState({email:""})},10)}},r.a.createElement("div",{className:"email-signup"},r.a.createElement("label",{htmlFor:"email-input",className:"email-label"},"Memesletter: "),r.a.createElement("input",{type:"email",name:"EMAIL",value:this.state.email,className:"email-input",placeholder:"email address",onChange:function(t){return e.setState({email:t.target.value})},required:!0}),r.a.createElement("div",{style:{position:"absolute",left:"-5000px"},"aria-hidden":"true"},r.a.createElement("input",{type:"text",name:"b_b2263447e37156f61869cbd15_840ba62408",tabIndex:"-1",defaultValue:""})),r.a.createElement("input",{type:"submit",value:"Subscribe!",name:"subscribe",className:"button"}))))}}]),t}(r.a.Component)),O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={display:a.props.showThanks?"flex":"none"},a.handleClick=function(e){a.setState({display:"none"})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=this;e.showThanks&&this.setState({display:"flex"},function(){document.addEventListener("mousedown",t.handleClick),setTimeout(function(){return t.setState({display:"none"})},1500)})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClick)}},{key:"render",value:function(){return r.a.createElement("div",{className:"login-window"},r.a.createElement("div",{className:"thanks"},r.a.createElement("img",{src:"/images/harold.jpg",alt:"Thank you from Harold",className:"thanks-img"})),r.a.createElement("style",null,"\n          .login-window {\n            display: ".concat(this.state.display,";\n            position: fixed;\n            z-index: 1000;\n            left: 0;\n            top: 0;\n            width: 100%;\n            height: 100%;\n            background-color: rgb(0,0,0); /* Fallback color */\n            background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n          }\n\n          .thanks {\n            position: relative;\n            -webkit-animation-name: animatetop;\n            -webkit-animation-duration: 0.6s;\n            animation-name: animatetop;\n            animation-duration: 0.6s;\n            margin: auto;\n          }\n\n          .thanks-img {\n            min-width: 50vw;\n            max-width: 70vw;\n            height: auto;\n            max-height: 90vh;\n            border: 1px solid grey;\n          }\n\n          @-webkit-keyframes animatetop {\n            from {top:-400px; opacity:0} \n            to {top:0; opacity:1}\n          }\n          @keyframes animatetop {\n            from {top:-400px; opacity:0}\n            to {top:0; opacity:1}\n          }\n\n        ")))}}]),t}(r.a.Component),M=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",name:"",subject:"",message:"",thanks:!1},a.submitForm=function(e){e.preventDefault();var t,n=[],r=a.state,l=r.name,i=r.email,o=r.subject,s=r.message;n.push(encodeURIComponent("name")+"="+encodeURIComponent(l)),n.push(encodeURIComponent("email")+"="+encodeURIComponent(i)),n.push(encodeURIComponent("subject")+"="+encodeURIComponent(o)),n.push(encodeURIComponent("message")+"="+encodeURIComponent(s)),t=n.join("&").replace(/%20/g,"+"),fetch("https://liveformhq.com/form/8f1ff4c4-fa92-4ba2-a7f8-585f4bc3aea7?_noredirect",{body:t,method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(){return a.setState({thanks:!0},function(){return setTimeout(a.clearForm,1500)})}).catch(function(e){return alert("Something went wrong submitting form - please try again")})},a.handleInput=function(e){a.setState(Object(w.a)({},e.target.name,e.target.value))},a.clearForm=function(){a.setState({email:"",name:"",subject:"",message:"",thanks:!1})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.title="Research | Internet Meme Image Index(IIMI)",window.scrollTo(0,0)}},{key:"render",value:function(){var e=this.state,t=e.email,a=e.name,n=e.subject,l=e.message,i=e.thanks;return r.a.createElement("div",{className:"col-container"},r.a.createElement(O,{showThanks:i}),r.a.createElement("div",{className:"info-col-left"},r.a.createElement("div",{className:"col-header"},r.a.createElement("h1",null,"RESEARCH")),r.a.createElement("p",null),r.a.createElement("p",null,"Our landmark study Quantifying Meme Prominence reveals many findings about the image memes of 2018. ",r.a.createElement("a",{href:"https://www.scribd.com/document/401528221/Quantifying-Meme-Prominence",target:"_blank",rel:"noreferrer noopener"},"View or download the full report here"),"."),r.a.createElement("p",null,"More in-depth explanations of the results, as well as additional graphics, can be found at our various social medias, links at the top of the page."),r.a.createElement("p",null,"If you have any ",r.a.createElement("strong",null,"questions")," or ",r.a.createElement("strong",null,"feedback")," please use this form:"),r.a.createElement("form",{onSubmit:this.submitForm,className:"feedback-form"},r.a.createElement("input",{type:"hidden",name:"_utf8",value:"\u2713"}),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"label",htmlFor:"email",required:!0},"Email"),r.a.createElement("input",{type:"email",id:"email",name:"email",value:t,onChange:this.handleInput})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"label",htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",id:"name",name:"name",value:a,onChange:this.handleInput})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"label",htmlFor:"subject"},"Subject"),r.a.createElement("input",{type:"text",id:"subject",name:"subject",value:n,onChange:this.handleInput})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"label",htmlFor:"message"},"Message"),r.a.createElement("textarea",{id:"message",required:!0,name:"message",rows:5,value:l,onChange:this.handleInput})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"submit",className:"button"},"Submit")))),r.a.createElement("div",{className:"info-col-right"},r.a.createElement(C,null),r.a.createElement("div",null,r.a.createElement("h2",null,"F.A.Q")),r.a.createElement("div",null,r.a.createElement("h3",null,"What is a MEMP?"),"It is a new unit of measurement used to quantify the prominence of a meme in the collective consciousness of society. Basically the more a meme has been viewed recently the higher the MEMP level. It stands for Magnitude Estimation of Meme Prominence.\xa0"),r.a.createElement("div",null,r.a.createElement("h3",null,"How do you determine where a meme is placed in the ranking?"),"A formula based on the average and peak MEMP levels during 2018."),r.a.createElement("div",null,r.a.createElement("h3",null,"Each meme has an IIMI rating, how do you determine those?"),"Right now they are purely editorial decisions, but they might get upgraded to an automated mathematical formula if we get time."),r.a.createElement("div",null,r.a.createElement("h3",null,"Why would you do this research and make this website?"),"The founder is a peculiar fellow with a background in data science and time series modelling who thinks it is important to further human understanding of the poorly understood art form of memes."),r.a.createElement("div",null,r.a.createElement("h3",null,"How was this all funded?"),"Out of the founder's pocket. If you appreciate our work please consider supporting us by ",r.a.createElement(d.a,{to:"/membership"},"becoming a member")," or spreading the word about what we do.")))}}]),t}(r.a.Component),I=(a(242),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.title="Membership | Internet Meme Image Index(IIMI)",window.scrollTo(0,0)}},{key:"render",value:function(){return r.a.createElement("div",{className:"col-container"},r.a.createElement("div",{className:"info-col-left"},r.a.createElement("div",{className:"col-header"},r.a.createElement("h1",null,"MEMBERSHIP")),r.a.createElement("p",null),r.a.createElement("p",null,"There are a lot of costs involved in running this website and the research underpinning it."),r.a.createElement("p",null,"If you have the money to spare ",r.a.createElement("strong",null,"please consider becoming a member")," - it will ensure this vital work can continue and expand \u2013 plus there are rewards!"),r.a.createElement("p",null,"You can also help by spreading the word or subscribing to our newsletter and various social medias."),r.a.createElement("div",{className:"pay-membership"},r.a.createElement("form",{action:"https://www.paypal.com/cgi-bin/webscr",method:"post",target:"_top"},r.a.createElement("input",{type:"hidden",name:"cmd",value:"_s-xclick"}),r.a.createElement("input",{type:"hidden",name:"hosted_button_id",value:"ECYZQSJR6SU46"}),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("input",{type:"hidden",name:"on0",value:""}))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("div",{className:"pay-select"},r.a.createElement("select",{name:"os0"},r.a.createElement("option",{value:"Full Memeber"},"Full Memeber : $1.00 / month"),r.a.createElement("option",{value:"Triple Memeber"},"Triple Memeber : $3.00 / month"),r.a.createElement("option",{value:"Meme Scientist"},"Meme Scientist : $10.00 / month"),r.a.createElement("option",{value:"Meme Executive"},"Meme Executive : $25.00 / month"),r.a.createElement("option",{value:"Board Memeber"},"Board Memeber : $100.00 / month"))))))),r.a.createElement("input",{type:"hidden",name:"currency_code",value:"USD"}),r.a.createElement("input",{className:"pay-submit",type:"image",src:"https://www.paypalobjects.com/en_US/GB/i/btn/btn_subscribeCC_LG.gif",border:"0",name:"submit",alt:"PayPal \u2013 The safer, easier way to pay online!"}),r.a.createElement("img",{alt:"",border:"0",src:"https://www.paypalobjects.com/en_GB/i/scr/pixel.gif",width:"1",height:"1"})))),r.a.createElement("div",{className:"info-col-right"},r.a.createElement(C,null),r.a.createElement("div",null,r.a.createElement("h2",null,"REWARDS")),r.a.createElement("div",null,r.a.createElement("h3",null,"Full Memeber"),"Access to our exclusive discussion group, a hotline to ask questions, plus voting rights on our steering committee so you can have your say in what direction we take."),r.a.createElement("div",null,r.a.createElement("h3",null,"Triple Memeber"),"Triple the membership, so triple the voting rights. Also access to download exclusive data sets."),r.a.createElement("div",null,r.a.createElement("h3",null,"Meme Scientist"),"As someone who is serious about meme science you will have a say in what data sets we make available. Plus access to the coveted inner circle."),r.a.createElement("div",null,r.a.createElement("h3",null,"Meme Executive"),"We would be foolish to ignore the opinion of anyone with $25 to spare, so you will be invited to our regular executive meetings so we can get your input on all our plans for the future.\xa0"),r.a.createElement("div",null,r.a.createElement("h3",null,"Board Memeber?"),"Anyone displaying this level of plutocratic clout will be given a place on the iiMemeIndex Board of Directors and gain unrivalled influence over this institution (without taking on any legal liability).")))}}]),t}(r.a.Component)),S=a(80),T=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={formData:{email:"",name:"",org:"",position:"",website:"",subject:"",message:""},thanks:!1},a.handleSubmit=function(e){e.preventDefault();var t,n=[],r=a.state.formData;for(var l in r)n.push(encodeURIComponent(l)+"="+encodeURIComponent(r[l]));t=n.join("&").replace(/%20/g,"+"),fetch("https://liveformhq.com/form/bd9507ec-7848-4e31-b40c-281e1329abf5?_noredirect",{body:t,method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(){return a.setState({thanks:!0},function(){return setTimeout(a.clearForm,1500)})}).catch(function(e){return alert("Something went wrong submitting form - please try again")})},a.handleInput=function(e){a.setState({formData:Object(S.a)({},a.state.formData,Object(w.a)({},e.target.name,e.target.value))})},a.clearForm=function(){a.setState({formData:{email:"",name:"",org:"",position:"",website:"",subject:"",message:""},thanks:!1})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.title="About | Internet Meme Image Index(IIMI)",window.scrollTo(0,0)}},{key:"render",value:function(){var e=this.state.formData,t=e.email,a=e.name,n=e.org,l=e.position,i=e.website,o=e.subject,s=e.message,c=this.state.thanks;return r.a.createElement("div",{className:"col-container"},r.a.createElement(O,{showThanks:c}),r.a.createElement("div",{style:{fontSize:"1.1rem",margin:"0 10px",padding:"20px",paddingTop:"10px",textAlign:"justify",maxWidth:"720px",lineHeight:"1.3rem"}},r.a.createElement("h1",{style:{fontSize:"1.8rem",marginTop:0}},"ABOUT"),r.a.createElement("p",null,"The Internet Image Meme Index conducts quantitative research to further human understanding of memes. To sustain this unprofitable work ",r.a.createElement("strong",null,"we provide business-consulting services relating to data analytics and digital strategy"),"."),r.a.createElement("p",null,"Our founder has ",r.a.createElement("strong",null,"extensive experience developing data driven solutions for public and private organisations"),". If your business is looking for assistance, or to advertise on this site, ",r.a.createElement("strong",null,"please use the form below")," to make an inquiry. You will be indirectly supporting vital meme research."),r.a.createElement("div",null,r.a.createElement("form",{className:"feedback-form",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"hidden",name:"_utf8",value:"\u2713"}),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"label",htmlFor:"email"},"Email"),r.a.createElement("input",{required:!0,type:"email",id:"email",name:"email",value:t,onChange:this.handleInput})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"label",htmlFor:"name"},"Name"),r.a.createElement("input",{required:!0,type:"text",id:"name",name:"name",value:a,onChange:this.handleInput})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"label",htmlFor:"org"},"Org."),r.a.createElement("input",{type:"text",id:"org",name:"org",value:n,onChange:this.handleInput})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"label",htmlFor:"position"},"Position"),r.a.createElement("input",{type:"text",id:"position",name:"position",value:l,onChange:this.handleInput})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"label",htmlFor:"website"},"Website"),r.a.createElement("input",{type:"text",id:"website",name:"website",value:i,onChange:this.handleInput})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"label",htmlFor:"subject"},"Subject"),r.a.createElement("input",{className:"form-control",type:"text",id:"subject",value:o,onChange:this.handleInput,name:"subject"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"label",htmlFor:"message"},"Message"),r.a.createElement("textarea",{required:!0,className:"form-control",id:"message",name:"message",rows:5,value:s,onChange:this.handleInput})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"submit",className:"button"},"Submit"))))))}}]),t}(r.a.Component),R=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app",id:"app"},r.a.createElement("div",{className:"header"},r.a.createElement(d.a,{to:"/",className:"banner-link"},r.a.createElement("img",{className:"banner",src:f.a,alt:"banner"}))),r.a.createElement(E,null),r.a.createElement("div",{className:"main-container",id:"main-container"},r.a.createElement(h.a,null,r.a.createElement(p.a,{exact:!0,path:"/",component:k}),r.a.createElement(p.a,{path:"/memes/:meme",render:function(e){return r.a.createElement(x,e)}}),r.a.createElement(p.a,{path:"/tags/:tag",render:function(e){return r.a.createElement(j,e)}}),r.a.createElement(p.a,{exact:!0,path:"/research",render:function(e){return r.a.createElement(M,e)}}),r.a.createElement(p.a,{exact:!0,path:"/about",render:function(e){return r.a.createElement(T,e)}}),r.a.createElement(p.a,{exact:!0,path:"/membership",render:function(e){return r.a.createElement(I,e)}}))))}}]),t}(n.Component),D=a(245),A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(r.a.createElement(D.a,null,r.a.createElement(R,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");A?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):_(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker.")})):_(t,e)})}}()},75:function(e,t,a){e.exports=a.p+"static/media/banner_image.dd7e9b5a.jpg"},82:function(e,t,a){e.exports=a(243)},91:function(e,t,a){},98:function(e,t,a){}},[[82,1,2]]]);
//# sourceMappingURL=main.470c715e.chunk.js.map