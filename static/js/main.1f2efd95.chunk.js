(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(16),r=n.n(s),i=n(10),o=n(4),l=n(3),d=n.n(l),u=n(7),h=n(2),j=n(5),b=Object(o.b)({key:"data",default:{status:"NO_DATA",all:[],undone:[],done:[]}}),p="a72dccbb572f8052c337da5c29c96abfe9096b6207999d422cc88b28ec6e55a9";function O(){return(O=Object(u.a)(d.a.mark((function e(t){var n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,c=n.json(),e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return(m=Object(u.a)(d.a.mark((function e(t){var n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"DELETE",headers:{Authorization:"Bearer ".concat(p)}});case 2:return n=e.sent,c=n.json(),e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return(x=Object(u.a)(d.a.mark((function e(t,n,c){var a,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:n,headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(p)},body:JSON.stringify(c)});case 2:return a=e.sent,s=a.json(),e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f={fetchGET:function(e){return O.apply(this,arguments)},fetchPOST:function(e,t,n){return x.apply(this,arguments)},fetchDELETE:function(e){return m.apply(this,arguments)},accessToken:p};function v(){return(v=Object(u.a)(d.a.mark((function e(){var t,n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("id"in localStorage)){e.next=2;break}return e.abrupt("return",JSON.parse(localStorage.getItem("id")));case 2:return t=Math.random().toString(20).substr(2,20),n={name:t,gender:"Male",email:"".concat(t,"@what.com"),status:"Active"},e.next=6,f.fetchPOST("https://gorest.co.in/public-api/users/","POST",n);case 6:return c=e.sent,localStorage.setItem("id",JSON.stringify(c.data.id)),e.abrupt("return",c.data.id);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g=Object(o.b)({key:"User ID info",default:function(){return v.apply(this,arguments)}()}),k=n(0);var N=function(e){var t=Object(c.useState)(0),n=Object(h.a)(t,2),a=n[0],s=n[1],r=Object(o.e)(b),l=Object(o.d)(g),j=Object(c.useState)(""),p=Object(h.a)(j,2),O=p[0],m=p[1],x=document.getElementById("loading"),v=document.getElementById("finished");function N(){return(N=Object(u.a)(d.a.mark((function t(){var n,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(a>200)){t.next=5;break}return e.onInfo("It's soooo many letters! I'm not sure I can handle it :("),t.abrupt("return");case 5:if(!(a<5)){t.next=8;break}return e.onInfo("Oh, come on! Don't give me empty task! At least 5 characters would be nice :)"),t.abrupt("return");case 8:return x.classList.remove("invis"),n={user_id:l,title:document.getElementById("title").value,completed:!1},t.prev=10,t.next=13,f.fetchPOST("https://gorest.co.in/public-api/users/".concat(l,"/todos"),"POST",n);case 13:return c=t.sent,m("New task added succesfully!"),r(),t.abrupt("return",c);case 19:t.prev=19,t.t0=t.catch(10),m("Ooops, something bad happened to the Internet! Try again later :/");case 22:return t.prev=22,v.classList.remove("invis"),x.classList.add("invis"),s(0),t.finish(22);case 27:case"end":return t.stop()}}),t,null,[[10,19,22,27]])})))).apply(this,arguments)}return Object(k.jsxs)("div",{className:"add",children:[Object(k.jsx)("div",{className:"add-title",children:Object(k.jsx)("h1",{children:"Let's add some new challenges!"})}),Object(k.jsxs)("div",{className:"add-form",children:[Object(k.jsx)("p",{children:Object(k.jsxs)("b",{children:[a," / ",Object(k.jsx)("span",{id:"maxValue",children:"200"})]})}),Object(k.jsx)("textarea",{id:"title",onChange:function(e){s(e.target.value.length),setTimeout((function(){a>200?document.getElementById("maxValue").classList.add("red"):a<=200&&document.getElementById("maxValue").classList.contains("red")&&document.getElementById("maxValue").classList.remove("red")}),200)}}),Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),Object(k.jsx)("button",{className:"btn g m-r",onClick:function(){!function(){N.apply(this,arguments)}()},children:"Add new note!"}),Object(k.jsx)(i.b,{to:"/",children:Object(k.jsx)("button",{className:"btn r",children:"Go back to list!"})})]}),Object(k.jsx)("div",{id:"finished",className:"invis",children:Object(k.jsxs)("span",{children:[Object(k.jsx)("h2",{children:O}),Object(k.jsx)(i.b,{to:"/",children:Object(k.jsx)("button",{className:"btn g",onClick:function(){return v.classList.add("invis")},children:"Let's go back to work!"})})]})})]})},y=Object(o.b)({key:"search temp data",default:{keyword:"",data:[]}});var E=function(){var e=Object(o.d)(b),t=Object(o.c)(y),n=Object(h.a)(t,2),c=n[0],s=n[1];function r(){var e=document.getElementById("search").classList;e.contains("invis-hide")||e.add("invis-hide")}return Object(k.jsxs)(a.a.Fragment,{children:[Object(k.jsxs)("div",{className:"main-title",children:[Object(k.jsx)("h1",{children:"Hello! I hope you're feeling great today!"}),Object(k.jsx)("h2",{children:"Here's some of your tasks!"})]}),Object(k.jsxs)("div",{className:"main-counter",children:[Object(k.jsx)("span",{className:"count m-r",children:"Filter by"}),Object(k.jsx)(i.b,{className:"m-t",to:"/",children:Object(k.jsxs)("span",{className:"count h m-r",onClick:function(){return r()},children:[Object(k.jsx)("i",{className:"bi bi-card-checklist green"})," All tasks: ",e.all.length]})}),Object(k.jsx)(i.b,{className:"m-t",to:"/done",children:Object(k.jsxs)("span",{className:"count h m-r",onClick:function(){return r()},children:[Object(k.jsx)("i",{className:"bi bi-check-square green"})," Tasks done: ",e.done.length>0?e.done.length:0]})}),Object(k.jsx)(i.b,{className:"m-t",to:"/undone",children:Object(k.jsxs)("span",{className:"count h m-r",onClick:function(){return r()},children:[Object(k.jsx)("i",{className:"bi bi-x-square red"})," Tasks undone: ",e.undone.length>0?e.undone.length:0]})}),Object(k.jsx)(i.b,{to:"/add",children:Object(k.jsx)("div",{id:"add",children:Object(k.jsx)("i",{className:"bi bi-plus-lg"})})}),Object(k.jsx)(i.b,{className:"m-t",to:"/search",children:Object(k.jsx)("span",{className:"count h",onClick:function(){var e=document.getElementById("search").classList;e.contains("invis-hide")?e.remove("invis-hide"):e.add("invis-hide")},children:Object(k.jsx)("i",{className:"bi bi-search"})})}),Object(k.jsx)("div",{className:"invis-hide",id:"search",children:Object(k.jsx)("input",{type:"text",placeholder:c.keyword,onChange:function(t){var n=e.all.filter((function(e){return e.title.includes(t.target.value)}));s({keyword:t.target.value,data:n})}})})]})]})};var w=function(e){var t=Object(c.useState)(0),n=Object(h.a)(t,2),s=n[0],r=n[1],i=e.nr,o=e.txt,l=e.item;return Object(k.jsxs)(a.a.Fragment,{children:[Object(k.jsxs)("div",{className:"editing-txt",children:[Object(k.jsx)("textarea",{name:"edit",placeholder:o,id:"edited".concat(i),onChange:function(e){return r(e.target.value.length)}}),Object(k.jsxs)("p",{children:[s," / 200"]})]}),Object(k.jsx)("button",{className:"btn g",onClick:function(){var t=document.getElementById("edited".concat(i)).value;e.onUpdate("EDITED",l,t)},children:"Save"})]})};var I=function(e){var t=e.item,n=e.nr,c=t.completed,a=t.title,s=t.created_at,r=t.updated_at;return Object(k.jsxs)("div",{className:"main-list_item",children:[Object(k.jsxs)("span",{className:"marked",children:[c?Object(k.jsx)("h2",{children:Object(k.jsx)("i",{className:"bi bi-check-lg green"})}):Object(k.jsx)("h2",{children:Object(k.jsx)("i",{className:"bi bi-x-lg red"})}),Object(k.jsxs)("h2",{children:["ToDo #",n]})]}),Object(k.jsxs)("span",{className:"text",children:[Object(k.jsx)("p",{className:"point",onClick:function(){return function(e){var t=document.getElementById("info".concat(e)).classList;t.contains("show")?t.remove("show"):t.add("show")}(n)},children:a}),Object(k.jsxs)("div",{className:"text-info fade",id:"info".concat(n),children:[Object(k.jsxs)("span",{children:["Created at: ",s]}),Object(k.jsxs)("span",{children:["Last update: ",r]})]}),Object(k.jsx)("div",{className:"editing invis-hide",id:"edit".concat(n),children:Object(k.jsx)(w,{nr:n,txt:a,item:t,onUpdate:function(t,n,c){return e.onUpdate(t,n,c)}})})]}),Object(k.jsxs)("span",{className:"options",children:[c?Object(k.jsx)("h2",{onClick:function(){return e.onInfo("Firstly you need to undone the task!")},children:Object(k.jsx)("i",{className:"bi bi-pencil edit"})}):Object(k.jsx)("h2",{onClick:function(){return function(e){var t=document.getElementById("edit".concat(e)).classList;t.contains("invis-hide")?t.remove("invis-hide"):t.add("invis-hide")}(n)},children:Object(k.jsx)("i",{className:"bi bi-pencil edit"})}),c?Object(k.jsx)("h2",{onClick:function(){return e.onUpdate("UNDONE",t)},children:Object(k.jsx)("i",{className:"bi bi-x-lg undone"})}):Object(k.jsx)("h2",{onClick:function(){document.querySelectorAll(".editing").forEach((function(e){e.classList.contains("invis-hide")||e.classList.add("invis-hide")})),e.onUpdate("DONE",t)},children:Object(k.jsx)("i",{className:"bi bi-check-lg done"})}),Object(k.jsx)("h2",{onClick:function(){return e.onDelete(t)},children:Object(k.jsx)("i",{className:"bi bi-trash trash"})})]})]})};var L=function(e){var t=e.info;return Object(k.jsx)("div",{id:"info",className:"invis",children:Object(k.jsxs)("span",{children:[Object(k.jsx)("h2",{children:t}),Object(k.jsx)("button",{className:"btn g",onClick:function(){return document.getElementById("info").classList.add("invis")},children:"Okay!"})]})})},T=Object(o.b)({key:"info",default:""});var C=function(e){var t=Object(o.d)(b),n=Object(o.e)(b),c=Object(o.d)(y),a=Object(o.c)(T),s=Object(h.a)(a,2),r=s[0],i=s[1],l=document.getElementById("loading"),j=f.fetchDELETE,p=f.fetchPOST;function O(t){return t.length>200?(e.showInfo("Too many characters! I can't handle it! :("),!1):!(t.length<5)||(e.showInfo("Even a small task need some words to describe. Try at least 5 characters! :)"),!1)}function m(){return(m=Object(u.a)(d.a.mark((function e(t,c,a){var s,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s={},e.t0=t,e.next="DONE"===e.t0?4:"UNDONE"===e.t0?6:"EDITED"===e.t0?8:12;break;case 4:return s={completed:!0},e.abrupt("break",13);case 6:return s={completed:!1},e.abrupt("break",13);case 8:if(O(a)){e.next=10;break}return e.abrupt("return");case 10:return s={title:a},e.abrupt("break",13);case 12:return e.abrupt("return");case 13:return l.classList.remove("invis"),e.next=17,p("https://gorest.co.in/public-api/todos/".concat(c.id),"PATCH",s);case 17:return r=e.sent,n(),l.classList.add("invis"),e.abrupt("return",r);case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return(x=Object(u.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(!1===t.completed?window.confirm("Do you reaaally want to delete this task? It seems it's not done yet :/"):window.confirm("Do you really want to delete this task? It's done, so no problem ;)"))){e.next=9;break}return l.classList.remove("invis"),e.next=5,j("https://gorest.co.in/public-api/todos/".concat(t.id));case 5:return c=e.sent,n(),l.classList.add("invis"),e.abrupt("return",c);case 9:case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(k.jsxs)("div",{className:"main",children:[Object(k.jsx)(E,{}),Object(k.jsx)(L,{info:r}),function(e){var n;switch(e){case"FILTER_UNDONE":n=t.undone;break;case"FILTER_DONE":n=t.done;break;case"FILTER_SEARCH":n=c.data;break;default:n=t.all}switch(t.status){case"NO_DATA":return Object(k.jsx)("div",{id:"loading",children:Object(k.jsxs)("h2",{children:["Loading...",Object(k.jsx)("svg",{id:"pencil",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-pencil",viewBox:"0 0 16 16",children:Object(k.jsx)("path",{d:"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"})})]})});case"NO_TASKS":return Object(k.jsx)("div",{className:"result",children:"Looks like there are no tasks available. Beer and chill? \ud83c\udf7a\ud83d\ude0e"});case"CONNECTION_ERR":return Object(k.jsx)("div",{className:"result",children:"Oh no, something bad happened to the internet! \ud83d\ude28 Check your connection or try again later! \ud83d\ude09"});default:var a=0;if(0===n.length){var s;switch(e){case"FILTER_SEARCH":s=Object(k.jsx)("p",{children:"Looking for something particular? Let me help you! \ud83d\ude0e"});break;case"FILTER_DONE":s=Object(k.jsx)("p",{children:"Looks like there are no tasks available. What about adding some new challenges? \ud83d\ude0e"});break;case"FILTER_UNDONE":s=Object(k.jsx)("p",{children:"Looks like there are no tasks available. Beer and chill? \ud83c\udf7a\ud83d\ude0e"});break;default:s=Object(k.jsx)("p",{children:"Looks like there are no tasks available. Beer and chill? \ud83c\udf7a\ud83d\ude0e"})}return Object(k.jsx)("div",{className:"result",children:s})}return n.map((function(e){return a++,Object(k.jsx)(I,{item:e,nr:a,onDelete:function(e){return function(e){return x.apply(this,arguments)}(e)},onInfo:function(e){return i(e),void document.getElementById("info").classList.remove("invis")},onUpdate:function(e,t,n){return function(e,t,n){return m.apply(this,arguments)}(e,t,n)}},e.id)}))}}(e.type)]})};var D=function(){var e=Object(o.c)(b),t=Object(h.a)(e,2),n=t[0],c=t[1],s=Object(o.d)(g),r=f.fetchGET,i=f.accessToken;function l(){r("https://gorest.co.in/public-api/users/".concat(s,"/todos?access-token=").concat(i)).then((function(e){200===e.code&&0===e.data.length?m("NO_TASKS"):e.code>=400?m("CONNECTION_ERR"):200===e.code&&e.data.length>0&&m("READY",e.data,e.data.filter((function(e){return!1===e.completed})),e.data.filter((function(e){return!0===e.completed})))})).catch((function(e){m("CONNECTION_ERR"),console.log("I detected some pointless and unwanted errors! Have a nice tea! ".concat(e))}))}function p(){return O.apply(this,arguments)}function O(){return(O=Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r("https://gorest.co.in/public-api/users/".concat(s,"?access-token=").concat(i));case 2:404===e.sent.code?p():l();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"NO_DATA",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];c({status:e,all:t,undone:n,done:a})}return"NO_DATA"===n.status&&p(),Object(k.jsx)(a.a.Fragment,{children:Object(k.jsxs)(j.c,{children:[Object(k.jsx)(j.a,{exact:!0,path:"/",children:Object(k.jsx)(C,{})}),Object(k.jsx)(j.a,{path:"/undone",children:Object(k.jsx)(C,{type:"FILTER_UNDONE"})}),Object(k.jsx)(j.a,{path:"/done",children:Object(k.jsx)(C,{type:"FILTER_DONE"})}),Object(k.jsx)(j.a,{path:"/add",children:Object(k.jsx)(N,{})}),Object(k.jsx)(j.a,{path:"/search",children:Object(k.jsx)(C,{type:"FILTER_SEARCH"})})]})})};var A=function(){return Object(k.jsx)("div",{id:"loading",className:"invis",children:Object(k.jsxs)("h2",{children:["Loading...",Object(k.jsx)("svg",{id:"pencil",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-pencil",viewBox:"0 0 16 16",children:Object(k.jsx)("path",{d:"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"})})]})})};var S=function(){return Object(k.jsx)("div",{className:"footer",children:Object(k.jsx)("p",{children:"\xae Copyright 2021 - Daniel Krawczyk"})})};var B=function(){return Object(k.jsxs)(o.a,{children:[Object(k.jsx)(D,{}),Object(k.jsx)(A,{}),Object(k.jsx)(S,{})]})};n(36);r.a.render(Object(k.jsx)(i.a,{basename:"/TodoApp",children:Object(k.jsx)(c.Suspense,{fallback:Object(k.jsx)(A,{}),children:Object(k.jsx)(B,{})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.1f2efd95.chunk.js.map