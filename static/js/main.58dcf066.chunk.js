(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{106:function(e,t,n){},252:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(19),s=n.n(r),o=(n(105),n(106),n(13)),i=n.n(o),l=n(23),u=n(11),j=n(1),d=function(){var e=localStorage.getItem("username");return Object(j.jsx)("div",{children:Object(j.jsxs)("h2",{children:[e,"'s Expense Tracker"]})})},b=n(12),p=n(14),h=function(e,t){switch(t.type){case f.GET_TRANSACTION:return Object(p.a)(Object(p.a)({},e),{},{loading:!1,transactions:t.payload});case f.DELETE_TRANSACTION:return Object(p.a)(Object(p.a)({},e),{},{transactions:e.transactions.filter((function(e){return e.id!==t.payload}))});case f.ADD_TRANSACTION:return Object(p.a)(Object(p.a)({},e),{},{transactions:[].concat(Object(b.a)(e.transactions),[t.payload])});case f.ERROR_TRANSACTION:return Object(p.a)(Object(p.a)({},e),{},{error:t.payload});default:return e}},O=n(27),x=n.n(O),m={transactions:[],error:null,loading:!0},f={DELETE_TRANSACTION:"delete_transaction",ADD_TRANSACTION:"add_transaction",GET_TRANSACTION:"get_transaction",ERROR_TRANSACTION:"error_transaction"},v=Object(a.createContext)(m),g=function(e){var t=e.children,n=Object(a.useReducer)(h,m),c=Object(u.a)(n,2),r=c[0],s=c[1];function o(){return(o=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("https://expensetrackerbytim.herokuapp.com/expensetracker/".concat(t));case 3:n=e.sent,s({type:f.GET_TRANSACTION,payload:n.data.transaction}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),s({type:f.ERROR_TRANSACTION,payload:e.t0.res});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function d(){return(d=Object(l.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("id"),a=t.id,e.prev=2,e.next=5,x.a.delete("https://expensetrackerbytim.herokuapp.com/expensetracker/deletetransaction/".concat(n),{headers:{"Content-Type":"application/json"},data:{transaction:{id:t.id,transactionAmount:"".concat(t.transactionAmount),transactionType:"".concat(t.transactionType),date:"".concat(t.date),source:"".concat(t.source)}}}).then((function(e){console.log(e)})).catch((function(e){console.err(e)}));case 5:s({type:f.DELETE_TRANSACTION,payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),s({type:f.ERROR_TRANSACTION,payload:e.t0.res});case 11:case"end":return e.stop()}}),e,null,[[2,8]])})))).apply(this,arguments)}function b(){return(b=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("id"),e.prev=1,e.next=4,x.a.post("https://expensetrackerbytim.herokuapp.com/expensetracker/addtransaction/".concat(n),{transaction:{id:t.id,transactionAmount:t.transactionAmount,transactionType:t.transactionType,date:t.date,source:t.source}},{headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e)})).catch((function(e){console.error(e)}));case 4:s({type:f.ADD_TRANSACTION,payload:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),s({type:f.ERROR_TRANSACTION,payload:e.t0.res});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(j.jsx)(v.Provider,{value:{transactions:r.transactions,deleteTransaction:function(e){return d.apply(this,arguments)},addTransaction:function(e){return b.apply(this,arguments)},getTransactions:function(e){return o.apply(this,arguments)},error:r.error,loading:r.loading},children:t})};function y(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}var N=function(){var e=Object(a.useContext)(v).transactions.map((function(e){return JSON.parse(e.transactionAmount)})).reduce((function(e,t){return e+t}),0).toFixed(2);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h4",{children:"Your balance"}),Object(j.jsxs)("h1",{children:["$",y(e)]})]})},T=function(){var e=Object(a.useContext)(v).transactions.map((function(e){return JSON.parse(e.transactionAmount)})),t=e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0).toFixed(2),n=t.substring(1),c=t<0?n:t,r=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2);return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"inc-exp-container",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:"Income"}),Object(j.jsxs)("p",{className:"money plus",children:["+$",y(r)]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:"Expense"}),Object(j.jsxs)("p",{className:"money minus",children:["-$",y(c)]})]})]})})},k=function(e){var t=e.transaction,n=Object(a.useContext)(v).deleteTransaction,c=t.transactionAmount<0?"-":"+",r={id:t.id,transactionAmount:"".concat(t.transactionAmount),transactionType:"".concat(t.transactionType),date:"".concat(t.date),source:"".concat(t.source)},s=y(Math.abs(t.transactionAmount));return Object(j.jsxs)("li",{className:t.transactionAmount<0?"minus":"plus",children:[Object(j.jsxs)("span",{children:[c,"$",s]}),Object(j.jsx)("span",{children:t.transactionType}),Object(j.jsx)("span",{children:t.date}),Object(j.jsx)("button",{onClick:function(){return n(r)},className:"delete-btn",children:"x"})]},t.id)},S=n(64),A=function(){var e=Object(a.useContext)(v),t=e.transactions,n=e.getTransactions,c=Object(a.useState)(""),r=Object(u.a)(c,2),s=r[0],o=r[1],i=Object(a.useState)(""),l=Object(u.a)(i,2),d=l[0],b=l[1],p=Object(a.useState)(""),h=Object(u.a)(p,2),O=h[0],x=h[1],m=t.length;Object(a.useEffect)((function(){var e=localStorage.getItem("id");n(e)}),[]);var f=[{value:"01",label:"January"},{value:"02",label:"February"},{value:"03",label:"March"},{value:"04",label:"April"},{value:"05",label:"May"},{value:"06",label:"June"},{value:"07",label:"July"},{value:"08",label:"August"},{value:"09",label:"September"},{value:"10",label:"October"},{value:"11",label:"November"},{value:"12",label:"December"}];return Object(j.jsx)(j.Fragment,{children:m>=6?Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Transactions"}),Object(j.jsx)("input",{type:"text",placeholder:"Search by transaction",onChange:function(e){o(e.target.value)}}),Object(j.jsx)(S.a,{onChange:function(e){x(e),b(e.value)},value:O,options:f,placeholder:"Search by month"}),Object(j.jsx)("ul",{className:"more",children:t.filter((function(e){return""===s||e.transactionType.toLowerCase().includes(s.toLowerCase())?e:void 0})).filter((function(e){return""===d||e.date.substring(0,2)===d?e:void 0})).slice(0).reverse().map((function(e){return Object(j.jsx)(k,{transaction:e},e.id)}))})]}):Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Transactions"}),Object(j.jsx)("input",{type:"text",placeholder:"Search by transaction",onChange:function(e){o(e.target.value)}}),Object(j.jsx)(S.a,{onChange:function(e){x(e),b(e.value)},value:O,options:f,placeholder:"Search by month"}),Object(j.jsx)("ul",{className:"less",children:t.filter((function(e){return""===s||e.transactionType.toLowerCase().includes(s.toLowerCase())?e:void 0})).filter((function(e){return""===d||e.date.substring(0,2)===d?e:void 0})).slice(0).reverse().map((function(e){return Object(j.jsx)(k,{transaction:e},e.id)}))})]})})},C=function(){var e=Object(a.useContext)(v).addTransaction,t=Object(a.useState)(""),n=Object(u.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(""),o=Object(u.a)(s,2),i=o[0],l=o[1],d=Object(a.useState)(""),b=Object(u.a)(d,2),p=b[0],h=b[1],O=document.querySelector(".income"),x=document.querySelector(".expense");return Object(j.jsxs)("div",{className:"add-transaction",children:[Object(j.jsx)("h3",{children:"Add new transaction"}),Object(j.jsxs)("div",{className:"form-control",children:[Object(j.jsx)("label",{htmlFor:"text",children:"Transaction Type"}),Object(j.jsx)("input",{value:c,onChange:function(e){r(e.target.value)},type:"text",id:"text",placeholder:"Enter text..."})]}),Object(j.jsxs)("div",{className:"form-control",children:[Object(j.jsxs)("label",{value:i,htmlFor:"amount",children:["Amount ",Object(j.jsx)("br",{})]}),Object(j.jsx)("button",{className:"expense",onClick:function(){h("expense"),O.classList.remove("selectedIncome"),x.classList.add("selectedExpense")},children:"Expense"}),Object(j.jsx)("button",{className:"income",onClick:function(){h("income"),x.classList.remove("selectedExpense"),O.classList.add("selectedIncome")},children:"Income"}),Object(j.jsx)("input",{type:"float",id:"amount",placeholder:"Enter amount...",onChange:function(e){l(e.target.value)}})]}),Object(j.jsx)("button",{onClick:function(t){t.preventDefault();var n=new Date;function a(e){var t=e.getFullYear();return(1+e.getMonth()).toString().padStart(2,"0")+"/"+e.getDate().toString().padStart(2,"0")+"/"+t}if("expense"===p){var r="-".concat(i),s={id:Math.floor(1e9*Math.random()),transactionType:c,transactionAmount:r,date:a(n),source:p};c.length>=1&&i.length>=1&&e(s)}else{var o={id:Math.floor(1e9*Math.random()),transactionType:c,transactionAmount:i,date:a(n),source:p};p.length>1&&c.length>=1&&i.length>=1&&e(o)}},className:"btn",children:"Add transaction"})]})},w=n(99),I=function(){var e=Object(a.useContext)(v).transactions,t={labels:e.map((function(e){return e.transactionType})),datasets:[{label:"Rainfall",backgroundColor:["#B21F00","#C9DE00","#2FDE00","#00A6B4","#6800B4"],hoverBackgroundColor:["#501800","#4B5000","#175000","#003350","#35014F"],data:e.map((function(e){return JSON.parse(Math.abs(e.transactionAmount))}))}]};return Object(j.jsx)("div",{children:Object(j.jsx)(w.a,{data:t,options:{title:{display:!0,text:"Transactions",fontSize:20},legend:{display:!0,position:"right"}}})})},R=n(254),E=n(255),_=n(256),D=function(){var e=Object(a.useContext)(v).transactions,t=localStorage.getItem("username"),n=localStorage.getItem("password");return Object(j.jsxs)(R.a,{children:[Object(j.jsxs)(E.a,{children:[Object(j.jsx)(_.a,{children:Object(j.jsxs)("div",{className:"profile-header",children:[Object(j.jsx)("h1",{className:"account-info",children:"Account Information"}),Object(j.jsxs)("div",{className:"info",children:[Object(j.jsx)("h3",{className:"username-header",children:"Username"}),Object(j.jsx)("br",{}),Object(j.jsx)("h4",{className:"username",children:t}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("h3",{className:"password-header",children:"Password"}),Object(j.jsx)("br",{}),Object(j.jsx)("h4",{className:"password",children:n})]})]})}),Object(j.jsx)(_.a,{children:e.length>0?Object(j.jsx)(I,{}):Object(j.jsx)("div",{})})]}),Object(j.jsx)(A,{})]})},L=n(257),F=n(258),B=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),s=Object(u.a)(r,2),o=s[0],b=s[1],p=Object(a.useState)(!1),h=Object(u.a)(p,2),O=h[0],m=h[1],f=Object(a.useState)(""),v=Object(u.a)(f,2),y=v[0],k=v[1],S=Object(a.useState)(""),w=Object(u.a)(S,2),I=w[0],E=w[1],_=Object(a.useState)([]),B=Object(u.a)(_,2),M=B[0],J=B[1],P=Object(a.useState)(!1),U=Object(u.a)(P,2),$=U[0],G=U[1],Y=Object(a.useState)(!1),q=Object(u.a)(Y,2),z=q[0],H=q[1];Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://expensetrackerbytim.herokuapp.com/expensetracker/allusers").then((function(e){J(e.data)})).catch((function(e){console.error(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var W=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(y.length>1&&I.length>1)){e.next=12;break}if(n=M.map((function(e){return e.username})),!(n.filter((function(e){return e===y})).length>0)){e.next=8;break}G(!0),e.next=10;break;case 8:return e.next=10,x.a.post("https://expensetrackerbytim.herokuapp.com/expensetracker/user",{name:"".concat(y),password:"".concat(I)}).then((function(e){console.log(e),c(!0),localStorage.setItem("username",e.data.username),localStorage.setItem("id",e.data._id)})).catch((function(e){console.error(e)}));case 10:e.next=14;break;case 12:m(!1),b(!0);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a,r,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(y.length>1&&I.length>1)){e.next=16;break}if(n=M.map((function(e){return e.username})),a=M.map((function(e){return e.password})),r=n.indexOf(y),s=a.indexOf(I),!(r!==s||r<0||s<0)){e.next=10;break}return b(!1),m(!0),e.abrupt("return",console.log("log in failed"));case 10:r===s&&(c(!0),console.log("log in successful")),localStorage.setItem("username",M[r].username),localStorage.setItem("password",M[s].password),localStorage.setItem("id",M[r]._id),e.next=18;break;case 16:b(!1),m(!0);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=$?Object(j.jsx)("h1",{className:"username-taken",children:"Username is already taken"}):Object(j.jsx)("div",{}),V=o?Object(j.jsx)("h1",{className:"too-short",children:"Username and password must be 1 character or more"}):Object(j.jsx)("div",{}),X=O?Object(j.jsx)("h1",{className:"incorrect-info",children:"Incorrect username and password combination"}):Object(j.jsx)("div",{});return Object(j.jsx)(j.Fragment,{children:n?Object(j.jsxs)(g,{children:[Object(j.jsx)(L.a,{collapseOnSelect:!0,expand:"md",variant:"light",className:"navbar",children:Object(j.jsxs)(R.a,{children:[Object(j.jsx)(L.a.Brand,{className:"navbar-expense",href:"#home",children:"Expense Tracker"}),Object(j.jsx)(L.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(j.jsx)(L.a.Collapse,{id:"responsive-navbar-nav",children:Object(j.jsxs)(F.a,{className:"me-auto",children:[Object(j.jsx)(F.a.Link,{className:"nav-link",onClick:function(){H(!1)},href:"#",children:"Home"}),Object(j.jsx)(F.a.Link,{className:"nav-link",onClick:function(){H(!0)},href:"#",children:"Profile"}),Object(j.jsx)(F.a.Link,{target:"_blank",className:"nav-link",href:"https://github.com/TimBTaylor/expense-tracker-app",children:"See Code"}),Object(j.jsx)(F.a.Link,{target:"_blank",className:"nav-link",href:"https://timbtaylor.github.io/personal-portfolio/projects.html",children:"Portfolio"})]})})]})}),z?Object(j.jsx)(D,{}):Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(d,{}),Object(j.jsx)(N,{}),Object(j.jsx)(T,{}),Object(j.jsx)(C,{}),Object(j.jsx)(A,{})]})]}):Object(j.jsxs)("div",{className:"login",children:[Object(j.jsx)("div",{className:"welcome",children:Object(j.jsx)("h1",{children:"Welcome to Expense Tracker by Tim"})}),Object(j.jsxs)("h2",{className:"portfolio-code",children:["You can visit my portfolio"," ",Object(j.jsx)("span",{children:Object(j.jsx)("a",{href:"https://timbtaylor.github.io/personal-portfolio/",children:"here"})}),Object(j.jsx)("br",{}),"as well as the code for this project"," ",Object(j.jsx)("span",{children:Object(j.jsx)("a",{href:"https://github.com/TimBTaylor/expense-tracker-app",children:"here"})})]}),Object(j.jsxs)("div",{className:"login-warnings",children:[Q,V,X]}),Object(j.jsxs)("div",{className:"login-inputs",children:[Object(j.jsx)("input",{className:"username",onChange:function(e){return k(e.target.value)},placeholder:"Username"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"password",className:"password",onChange:function(e){return E(e.target.value)},placeholder:"Password"}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{onClick:W,children:"Register"}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{onClick:K,children:"Log in"})]})]})})};var M=function(){return Object(j.jsx)(B,{})};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(M,{})}),document.getElementById("root"))}},[[252,1,2]]]);
//# sourceMappingURL=main.58dcf066.chunk.js.map