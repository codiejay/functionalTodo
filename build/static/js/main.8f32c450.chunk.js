(this.webpackJsonpfunctionltodo=this.webpackJsonpfunctionltodo||[]).push([[0],{27:function(e,t,a){e.exports=a(62)},32:function(e,t,a){},33:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(25),c=a.n(s),i=(a(32),a(5)),o=(a(33),a(2)),u=a.n(o);a(49).config(),console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}));u.a.initializeApp({apiKey:"AIzaSyBR1YAltuzJJP9Czuqo3c5Os1w8NFxJIEY",authDomain:"reactfirestore-79c3c.firebaseapp.com",databaseURL:"https://reactfirestore-79c3c.firebaseio.com",projectId:"reactfirestore-79c3c",storageBucket:"reactfirestore-79c3c.appspot.com",messagingSenderId:"596408967886",appId:"1:596408967886:web:39620bfceac788ee7ae69f",measurementId:"G-6N7YLRY6QT"});var l=a(12),d=a(3),m=(a(52),function(e){return r.a.createElement("form",{id:"userInput",onSubmit:e.taskformSubmitted},r.a.createElement("input",{placeholder:"TYPE HERE TO ADD NEW TASK",onChange:e.userInputChange,value:e.inputValue}),r.a.createElement("button",{id:"addTaskBttn"},"Add Task"))}),p=(a(53),a(54),function(e){return r.a.createElement("div",{id:e.containerId,"data-type":e.uniqueID},r.a.createElement("li",null,e.taskName),r.a.createElement("span",{id:"delBttn",onClick:e.delBttnClicked}),r.a.createElement("span",{id:e.checkBttnId,onClick:e.checkBttnClicked}))}),f=function(e){var t=u.a.auth().currentUser,a=(e.username,function(e){var a=e.target.parentNode;a.setAttribute("style","animation: fadeAway 0.5s 1"),a.addEventListener("animationend",(function(e){e.target.setAttribute("style","display: none")})),function(e){var a=parseInt(e.dataset.type),n=u.a.firestore();n.collection(t.uid).where("uniqueId","==",a).get().then((function(e){var a=[];e.docs.forEach((function(e){a.push(e.id)})),n.collection(t.uid).doc(a[0]).delete()}))}(e.target.parentNode)}),n=function(e){var a=e.target.parentNode;"regularDoneBttn"===e.target.id?(e.target.setAttribute("id","undoBttn"),a.setAttribute("id","individualTaskBlur"),u.a.firestore().collection(t.uid).where("uniqueId","==",parseInt(e.target.parentNode.dataset.type)).get().then((function(e){var a=" ";e.forEach((function(e){a=e.id})),u.a.firestore().collection(t.uid).doc(a).update({done:!0})}))):(e.target.setAttribute("id","regularDoneBttn"),a.setAttribute("id","individualTask"),u.a.firestore().collection(t.uid).where("uniqueId","==",parseInt(e.target.parentNode.dataset.type)).get().then((function(e){var a=" ";e.forEach((function(e){a=e.id})),u.a.firestore().collection(t.uid).doc(a).update({done:!1})})))};return r.a.createElement("ul",{id:"taskList"},r.a.createElement("h1",null,"TODAY'S TASKS"),e.storedTasks.map((function(e,t){return console.log(e),r.a.createElement(p,{key:t,uniqueID:e.uniqueId,taskName:e.taskname,delBttnClicked:a,checkBttnClicked:n,checkBttnId:e.done?"undoBttn":"regularDoneBttn",containerId:e.done?"individualTaskBlur":"individualTask"})})),e.currentTasks.map((function(e,t){return r.a.createElement(p,{key:t,uniqueID:e.uniqueId,taskName:e.userinput,delBttnClicked:a,checkBttnClicked:n,checkBttnId:"regularDoneBttn",containerId:"individualTask"})})))},g=(a(55),function(e){return r.a.createElement("div",{className:"userBar"},r.a.createElement("div",null),r.a.createElement("h1",null,e.username),r.a.createElement("div",{className:"userSign"},r.a.createElement("button",{onClick:e.signoutUser},"Sign Out")))}),E=function(e){var t=u.a.auth().currentUser,a=e.realUserName,s=e.userId;Object(n.useEffect)((function(){var e=[];u.a.firestore().collection(t.uid).orderBy("taskname").get().then((function(t){t.forEach((function(t){e.push(t.data())})),k(O.concat(e))}))}),[]);var c=Object(n.useState)([]),o=Object(i.a)(c,2),l=o[0],d=o[1],p=Object(n.useState)(""),E=Object(i.a)(p,2),h=E[0],b=E[1],v=Object(n.useState)([]),I=Object(i.a)(v,2),O=I[0],k=I[1],j=Object(n.useState)([]),S=Object(i.a)(j,2),w=S[0],N=S[1];return r.a.createElement("div",{id:"container"},r.a.createElement(g,{username:a,signoutUser:e.signoutUser}),r.a.createElement(m,{userInputChange:function(e){b(h=e.target.value)},taskformSubmitted:function(e){(e.preventDefault(),h)&&(N(w=(new Date).getTime()),u.a.firestore().collection("".concat(s)).add({taskname:h,uniqueId:w,done:!1}),d(l.concat({userinput:h,uniqueId:w})),b(""))},inputValue:h}),r.a.createElement(f,{storedTasks:O,currentTasks:l,username:a}))},h=function(e){return e.usersignedIn?r.a.createElement(E,{realUserName:e.username,userId:e.userId,signoutUser:e.signoutUser}):r.a.createElement(d.a,{to:"/signup"})},b=a(7),v=(a(60),function(e){var t,a=Object(n.useState)({username:"",userpassword:""}),s=Object(i.a)(a,2),c=s[0],o=s[1],m=function(){clearInterval(t),h(E="errorBoxHide")},p=function(e){var t=e.target.value;switch(e.target.name){case"username":o(Object(b.a)(Object(b.a)({},c),{},{username:t}));break;case"password":o(Object(b.a)(Object(b.a)({},c),{},{userpassword:t}))}},f=Object(n.useState)("errorBoxHide"),g=Object(i.a)(f,2),E=g[0],h=g[1],v=Object(n.useState)(""),I=Object(i.a)(v,2),O=I[0],k=I[1];return e.usersignedIn?r.a.createElement(d.a,{to:"/"}):r.a.createElement("div",{className:"loginContainer"},r.a.createElement("form",{id:"loginForm",onSubmit:function(a){a.preventDefault(),c.username,c.userpassword&&u.a.auth().signInWithEmailAndPassword(c.username,c.userpassword).then((function(t){!function(t){t.user.uid;e.loginUser(),e.getUserId(t.user.uid),u.a.firestore().collection(t.user.uid).doc("credentials").get().then((function(t){e.setUsername(t.data().username)}))}(t)})).catch((function(e){k(O=e.message.split(".")[0]),h(E="errorBoxShow"),t=setInterval((function(){m()}),2e3)}))}},r.a.createElement("h1",{className:"heading"},"you're logging in"),r.a.createElement("input",{type:"text",placeholder:"Your Email",onChange:p,name:"username"}),r.a.createElement("input",{type:"password",placeholder:"Your Password",onChange:p,name:"password"}),r.a.createElement("button",null,"Login"),r.a.createElement("p",{id:"loginPromptMobile"},"Don't have an account yet?",r.a.createElement(l.b,{to:"./signup"}," Sign Up here")),r.a.createElement("div",{className:E,style:{transition:"all 0.3s"}},r.a.createElement("p",null,O,"."))),r.a.createElement("div",{className:"signupBox"},r.a.createElement("h1",null,"Don't own an accout? "),r.a.createElement(l.b,{to:"/signup"},"Sign Up.")))}),I=(a(61),function(e){var t,a=function(){h(E="errorMessageHide"),clearInterval(t)},s=function(e){var t=e.target.name,a=e.target.value;switch(t){case"username":p(Object(b.a)(Object(b.a)({},m),{},{userfirstName:a}));break;case"userlastname":p(Object(b.a)(Object(b.a)({},m),{},{userLastName:a}));break;case"useremail":p(Object(b.a)(Object(b.a)({},m),{},{userEmail:a}));break;case"userpassword":p(Object(b.a)(Object(b.a)({},m),{},{userPassword:a}))}},c=Object(n.useState)({userfirstName:"",userLastName:"",userEmail:"",userPassword:""}),o=Object(i.a)(c,2),m=o[0],p=o[1],f=Object(n.useState)("errorMessageHide"),g=Object(i.a)(f,2),E=g[0],h=g[1],v=Object(n.useState)(""),I=Object(i.a)(v,2),O=I[0],k=I[1];return e.usersignedIn?r.a.createElement(d.a,{to:"/"}):r.a.createElement("div",{className:"signupcontainer"},r.a.createElement("form",{id:"signForm",onSubmit:function(n){n.preventDefault(),m.userEmail,m.userLastName,m.userfirstName,m.userPassword&&u.a.auth().createUserWithEmailAndPassword(m.userEmail,m.userPassword).then((function(t){var a;a=t.user.uid,u.a.firestore().collection(a).doc("credentials").set({username:m.userfirstName,useremail:m.userEmail,useruid:a}),e.setUsername(m.userfirstName),e.signUserIn(),e.setUserId(a)})).catch((function(e){k(O=e.message),h(E="errorMessageShow"),t=setInterval((function(){a()}),3e3)}))}},r.a.createElement("h1",{className:"heading"},"you're about to SIGN-UP"),r.a.createElement("input",{onChange:s,type:"text",placeholder:"Your First Name",name:"username"}),r.a.createElement("input",{onChange:s,type:"text",placeholder:"Your Last Name",name:"userlastname"}),r.a.createElement("input",{onChange:s,type:"text",placeholder:"Your Email",name:"useremail"}),r.a.createElement("input",{onChange:s,type:"password",placeholder:"Your Password",name:"userpassword"}),r.a.createElement("button",null,"Sign-Up"),r.a.createElement("p",{id:"loginPromptMobile"},"Own an account already?",r.a.createElement(l.b,{to:"./login"}," Login here")),r.a.createElement("div",{className:E,style:{display:"block",transition:"all 2s"}},r.a.createElement("p",null,O))),r.a.createElement("div",{id:"loginBox"},r.a.createElement("h1",null,"own an account already?"),r.a.createElement(l.b,{to:"/login"},"Login")))}),O=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(""),o=Object(i.a)(c,2),m=o[0],p=o[1],f=Object(n.useState)(""),g=Object(i.a)(f,2),E=g[0],b=g[1],O=function(e){p(m=e)},k=function(){s(a=!0)},j=function(e){b(E=e)};u.a.auth().onAuthStateChanged((function(e){e&&(s(a=!0),b(E=e.uid),u.a.firestore().collection(e.uid).doc("credentials").get().then((function(e){p(m=e.data().username)})))}));return r.a.createElement(l.a,null,r.a.createElement(d.b,{exact:!0,path:"/"},r.a.createElement("div",{className:"App"},r.a.createElement(h,{usersignedIn:a,username:m,userId:E,signoutUser:function(){u.a.auth().signOut().then((function(){s(a=!1)}))}}))),r.a.createElement(d.b,{path:"/login"},r.a.createElement(v,{usersignedIn:a,loginUser:k,getUserId:j,setUsername:O})),r.a.createElement(d.b,{path:"/signup"},r.a.createElement(I,{usersignedIn:a,setUsername:O,signUserIn:k,setUserId:j})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.8f32c450.chunk.js.map