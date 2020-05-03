(function(t){function e(e){for(var o,a,r=e[0],l=e[1],c=e[2],u=0,p=[];u<r.length;u++)a=r[u],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&p.push(n[a][0]),n[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],o=!0,r=1;r<s.length;r++){var l=s[r];0!==n[l]&&(o=!1)}o&&(i.splice(e--,1),t=a(a.s=s[0]))}return t}var o={},n={app:0},i=[];function a(e){if(o[e])return o[e].exports;var s=o[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=o,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(s,o,function(e){return t[e]}.bind(null,o));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=l;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var o=s("85ec"),n=s.n(o);n.a},"54d5":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var o=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",{attrs:{id:"app"}},[s("Toolbar"),s("v-content",{staticClass:"pt-0"},[s("router-view")],1),s("CustomFooter")],1)},i=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{fluid:""}},[s("v-row",{attrs:{justify:"center"}},[s("v-col",{attrs:{md:"8",sm:"12"}},[s("v-app-bar",{staticClass:"pl-0",attrs:{app:"",color:"white",dense:"",elevation:"0"}},[s("span",{staticClass:"grey--text font-weight-black text-none",staticStyle:{"font-size":"1.25rem"},attrs:{text:""}},[t._v("Marco Trentini")]),s("v-spacer"),s("v-btn",{attrs:{color:"grey",text:"",to:"/"}},[t._v("About")]),s("v-btn",{attrs:{color:"grey",text:"",to:"/blog"}},[t._v("Blog")]),s("v-btn",{staticClass:"text-none hidden-sm-and-down pa-0",attrs:{icon:"",color:"grey",href:"https://github.com/divepit",target:"_blank",text:""}},[s("v-icon",[t._v("mdi-github")])],1),s("v-btn",{staticClass:"text-none hidden-sm-and-down pa-0 mr-2",attrs:{icon:"",color:"grey",href:"https://www.linkedin.com/in/marco-t-258240160/",target:"_blank",text:""}},[s("v-icon",[t._v("mdi-linkedin")])],1),t.loggedIn?s("v-btn",{staticClass:"py-0 lighten-2",attrs:{color:"primary",elevation:"0"},on:{click:t.signOut}},[t._v("Sign out")]):t._e()],1)],1)],1)],1)},r=[],l=s("5530"),c=s("59ca"),d=s.n(c),u=(s("e71f"),s("ea7b"),{apiKey:"AIzaSyCRg0055IRCSldOKVhur_ipCAHlJpo155U",authDomain:"divepit-portfolio-ii.firebaseapp.com",databaseURL:"https://divepit-portfolio-ii.firebaseio.com",projectId:"divepit-portfolio-ii",storageBucket:"divepit-portfolio-ii.appspot.com",messagingSenderId:"484711374493",appId:"1:484711374493:web:4e4148e3137b225bdc7e74"});d.a.initializeApp(u);var p=d.a.firestore(),v=d.a.auth(),f=(v.currentUser,s("2f62")),m={name:"Toolbar",computed:Object(l["a"])({},Object(f["b"])(["loggedIn"])),methods:{signOut:function(){v.signOut().then(delete localStorage.loggedIn,this.$store.state.loggedIn=!1)}}},g=m,h=(s("b139"),s("2877")),b=Object(h["a"])(g,a,r,!1,null,null,null),y=b.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-footer",{staticClass:"lighten-3 grey--text opensans mt-12 pb-6 ",attrs:{color:"grey",elevation:"1"}},[s("v-container",{attrs:{fluid:""}},[s("v-row",{attrs:{justify:"center"}},[s("v-col",{attrs:{md:"6",lg:"4",cols:"12",sm:"6"}},[s("span",{staticClass:"font-weight-black",staticStyle:{"font-size":"1.5rem"}},[t._v("Hi, I'm Marco")]),s("br"),t._v(" I'm a Web Developer from Zurich. "),s("br"),t._v(" Do you have a project or idea you'd like to talk about?"),s("br"),t._v(" Let me know! "),s("br"),s("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"mailto:hello@thedivepit.com"}},[t._v("hello@thedivepit.com")])]),s("v-col",{attrs:{md:"6",lg:"4",cols:"12",sm:"6"}},[s("span",{staticClass:"font-weight-black",staticStyle:{"font-size":"1.5rem"}},[t._v("Find me on social media!")]),s("br"),s("v-btn",{staticClass:"grey--text text-none pl-0",staticStyle:{"font-size":"1rem"},attrs:{href:"https://github.com/divepit",text:""}},[s("v-icon",{staticClass:"mr-2"},[t._v("mdi-github")]),t._v(" GitHub ")],1),s("br"),s("v-btn",{staticClass:"grey--text text-none pl-0",staticStyle:{"font-size":"1rem"},attrs:{href:"https://www.linkedin.com/in/marco-t-258240160/",text:""}},[s("v-icon",{staticClass:"mr-2"},[t._v("mdi-linkedin")]),t._v(" LinkedIn ")],1)],1)],1)],1)],1)},w=[],k={name:"CustomFooter"},x=k,C=Object(h["a"])(x,_,w,!1,null,null,null),j=C.exports,P={name:"App",components:{CustomFooter:j,Toolbar:y}},S=P,I=(s("034f"),Object(h["a"])(S,n,i,!1,null,null,null)),O=I.exports,E=s("9483");Object(E["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var z=s("8c4f"),$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("IntroductionCard")],1)},B=[],T=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{attrs:{fluid:""}},[o("v-row",{attrs:{justify:"center",align:"center"}},[o("v-col",{attrs:{md:"12",lg:"4",sm:"12"}},[o("v-card",{staticClass:"lighten-1",attrs:{flat:""}},[o("v-card-title",{staticClass:"font-weight-black grey--text text--darken-2",staticStyle:{"font-size":"2rem"}},[t._v("Hi, I'm Marco ")]),o("v-card-text",{staticClass:"font-weight-regular text--lighten-4",staticStyle:{"font-size":"1rem"}},[t._v(" I'm a Web Developer from Zurich "),o("br"),t._v(" Currently I am working on my Bachelor of Science in Mechanical Engineering at ETH Zurich."),o("br"),t._v(" "),o("br"),t._v(" Clean and simple design patterns are my speciality. I create projects myself and like to engineer them in an intuitive and understandable way. "),o("br"),t._v(" "),o("br"),t._v(" Do you have a project or idea you'd like to talk about? Let me know!"),o("br"),o("br"),o("v-btn",{staticClass:"lighten-1",attrs:{color:"primary",elevation:"0",href:"mailto:hello@thedivepit.com"}},[t._v(" hello@thedivepit.com ")])],1)],1)],1),o("v-col",{attrs:{md:"4",sm:"12"}},[o("v-img",{attrs:{src:s("86f8")}})],1)],1),o("v-row",{attrs:{justify:"center"}},[o("v-col",{attrs:{md:"12",lg:"8",sm:"12"}},[o("v-divider")],1)],1),o("v-row",{staticClass:"mb-6",attrs:{align:"center",justify:"center"}},[o("v-col",{attrs:{md:"12",lg:"8",sm:"12"}},[o("v-card",{attrs:{flat:""}},[o("v-card-title",{staticClass:"font-weight-bold grey--text text--darken-2",staticStyle:{"font-size":"1.75rem"}},[t._v("What am I working on ")]),o("v-card-text",{staticClass:"font-weight-regular text--lighten-4",staticStyle:{"font-size":"1rem"}},[t._v(" Currently I am mainly working on a student learning platform called napoly. "),o("br"),o("br"),t._v(" The goal is to make all relevant learning documents easily available to as many students as possible. This allows them to focus on their studies, making the time spent studying more efficient. ")]),o("v-card-text",{staticStyle:{"font-size":"1.5rem"}},[o("v-card",{staticClass:"pb-2",attrs:{elevation:"8",href:"https://napoly.ch"}},[o("v-card-title",{staticClass:"font-weight-regular napoly--text muli",staticStyle:{"font-size":"1.5rem"}},[t._v("napoly.ch ")]),o("v-card-subtitle",{staticClass:"pb-2 font-weight-light napoly--text text--lighten-1 muli"},[t._v(" Student Document Repository ")])],1)],1)],1)],1)],1),o("v-row",{attrs:{justify:"center"}},[o("v-col",{attrs:{md:"12",lg:"8",sm:"12"}},[o("v-divider")],1)],1),o("v-row",{staticClass:"mt-6",attrs:{justify:"center",align:"center"}},[o("v-col",{attrs:{md:"12",lg:"8",sm:"12"}},[o("v-card",{attrs:{flat:""}},[o("v-card-title",{staticClass:"font-weight-bold grey--text text--darken-2",staticStyle:{"font-size":"1.75rem"}},[t._v("Project Blog ")]),o("v-card-text",{staticClass:"font-weight-regular text--lighten-4",staticStyle:{"font-size":"1rem"}},[t._v(" I often write little code projects where I solve a single problem. However I kept forgetting certain processes or solutions when I only wrote them once and then never used them again. "),o("br"),t._v(" Therefore I decided to start a little project blog where I can document the things I learn and go check them when I need them again! ")]),o("v-card-text",{staticStyle:{"font-size":"1.5rem"}},[o("span",{staticClass:"grey--text text--darken-2 font-weight-medium",staticStyle:{"font-size":"1.5rem"}},[t._v("Recent Posts")]),t._l(t.posts,(function(e){return o("v-card",{key:e.id,staticClass:"mt-6",attrs:{to:"/blog/"+e.id}},[o("v-card-title",{staticClass:"font-weight-black grey--text"},[t._v(t._s(e.title)+" "),o("v-spacer"),o("v-card-subtitle",{staticClass:"pb-2 font-weight-medium grey--text text--lighten-1"},[t._v("Created at: "+t._s(e.date)+" ")])],1)],1)}))],2)],1)],1)],1)],1)},M=[],F=(s("4160"),s("159b"),{name:"IntroductionCard",created:function(){var t=this;p.collection("blogposts").get().then((function(e){e.forEach((function(e){(t.loggedIn||e.data().public)&&t.posts.push(e.data())})),t.posts=t.posts.reverse()}))},data:function(){return{posts:[]}}}),A=F,D=(s("9eb5"),Object(h["a"])(A,T,M,!1,null,null,null)),H=D.exports,L={name:"Home",components:{IntroductionCard:H}},R=L,U=Object(h["a"])(R,$,B,!1,null,null,null),N=U.exports,W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[s("v-card",{staticClass:"mx-auto",attrs:{flat:"",outlined:"",width:"400"}},[s("v-toolbar",{attrs:{color:"primary lighten-2",dark:"",flat:""}},[s("v-card-title",{staticClass:"muli"},[t._v("Sign in")])],1),s("v-card-text",[s("v-text-field",{attrs:{flat:"",label:"E-Mail",outlined:"",solo:"",type:"email"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.signin()}},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),s("v-text-field",{attrs:{flat:"",label:"Password",outlined:"",solo:"",type:"password"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.signin()}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1)],1)},J=[],Z=(s("ac1f"),s("5319"),{name:"Signin",created:function(){localStorage.loggedIn&&this.$router.replace("/")},data:function(){return{email:null,password:null,message:null}},methods:{signin:function(){var t=this;this.email&&this.password&&v.signInWithEmailAndPassword(this.email,this.password).then((function(e){v.currentUser&&(t.$store.state.loggedIn=!0,localStorage.loggedIn=!0,t.$router.replace("/"))}))}}}),K=Z,V=Object(h["a"])(K,W,J,!1,null,"cccf7692",null),q=V.exports,G=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.addingPost?s("v-container",{attrs:{fluid:""}},[s("v-row",{attrs:{justify:"center"}},[s("v-col",{attrs:{md:"12",lg:"12",sm:"12"}},[s("v-btn",{attrs:{color:"primary",outlined:""},on:{click:function(e){t.addingPost=!1,t.editedPost=!1}}},[t._v("Back")])],1)],1),s("BlogpostCreator",{attrs:{editedPost:t.editedPost}})],1):s("v-container",{attrs:{fluid:""}},[s("v-row",{attrs:{justify:"center"}},[s("v-col",{attrs:{md:"12",lg:"8",sm:"12"}},[t.loggedIn?s("v-btn",{attrs:{block:"",color:"primary",elevation:"0"},on:{click:function(e){t.addingPost=!0}}},[t._v("New Post")]):t._e()],1)],1),s("BlogpostList",{on:{editPost:function(e){return t.editPost(e)}}})],1)},Q=[],X=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{fluid:""}},[s("v-row",{attrs:{justify:"center"}},[s("v-col",{attrs:{md:"12",lg:"8",sm:"12"}},[s("span",{staticClass:"grey--text text--darken-2 font-weight-medium",staticStyle:{"font-size":"1.5rem"}},[t._v("Recent Posts")])])],1),t._l(t.posts,(function(e){return s("v-row",{key:e.id,attrs:{justify:"center"}},[s("v-col",{attrs:{md:"12",lg:"8",sm:"12"}},[s("v-card",{attrs:{flat:"",outlined:""}},[s("v-card-title",{staticClass:"font-weight-black grey--text",staticStyle:{"word-break":"keep-all"}},[t._v(t._s(e.title)+" "),s("v-spacer"),s("v-btn",{staticClass:"text-none",attrs:{elevation:"0",color:"primary",to:"/blog/"+e.id}},[t._v("Read")])],1),s("v-card-subtitle",{staticClass:"pb-2 font-weight-medium grey--text text--lighten-1"},[t._v("Created at: "+t._s(e.date)+" ")]),s("v-card-text",{staticClass:"grey--text"},[t._v(t._s(e.content.slice(0,250))+"...")]),t.loggedIn?s("v-card-actions",[s("v-btn",{attrs:{color:"primary",outlined:""},on:{click:function(s){return t.$emit("editPost",e)}}},[t._v("Edit")]),e.public?s("v-btn",{attrs:{color:"success",elevation:"0",outlined:"",rounded:""}},[s("v-icon",[t._v("mdi-check")]),t._v(" Public ")],1):t._e(),s("v-spacer"),t.loggedIn?s("v-btn",{staticClass:"text-none",attrs:{color:"error",text:""},on:{click:function(s){return t.deletePost(e.id)}}},[t._v("Delete post")]):t._e()],1):t._e()],1)],1)],1)}))],2)},Y=[],tt={name:"BlogpostList",created:function(){this.getBlogposts()},computed:Object(l["a"])({},Object(f["b"])(["loggedIn"])),data:function(){return{posts:[]}},methods:{getBlogposts:function(){var t=this;this.posts=[],p.collection("blogposts").get().then((function(e){e.forEach((function(e){(t.loggedIn||e.data().public)&&t.posts.push(e.data())})),t.posts=t.posts.reverse()}))},deletePost:function(t){p.collection("blogposts").doc(t).delete().then(this.getBlogposts())}}},et=tt,st=Object(h["a"])(et,X,Y,!1,null,null,null),ot=st.exports,nt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-row",{attrs:{justify:"center"}},[s("v-col",{attrs:{sm:"12",md:"6",lg:"6"}},[s("v-row",[s("v-col",{attrs:{md:"12",lg:"7",sm:"12",cols:"12"}},[s("v-text-field",{staticStyle:{border:"1px lightgrey solid"},attrs:{flat:"","hide-details":"",label:"Post Title",solo:""},model:{value:t.post.title,callback:function(e){t.$set(t.post,"title",e)},expression:"post.title"}})],1),s("v-col",{staticClass:"pt-2",attrs:{md:"12",lg:"5",sm:"12",cols:"12","align-self":"center"}},[s("v-btn",{staticClass:"mr-2",attrs:{color:"primary",outlined:""},on:{click:t.savePost}},[t._v("Save")]),t.post.public?t._e():s("v-btn",{staticClass:"mr-3",attrs:{color:"success"},on:{click:t.publishPost}},[t._v("Publish")]),t.post.public?s("v-btn",{staticClass:"mr-3",attrs:{color:"error"},on:{click:t.unpublishPost}},[t._v("Unpublish")]):t._e(),t.post.public?s("v-btn",{attrs:{color:"success",elevation:"0",outlined:"",rounded:""}},[s("v-icon",[t._v("mdi-check")]),t._v(" Published ")],1):t._e()],1)],1),s("v-row",{attrs:{justify:"center"}},[s("v-col",{staticClass:"py-0",attrs:{md:"12",lg:"12",sm:"12",cols:"12"}},[s("Editor",{staticClass:"pa-0",attrs:{outline:!0,hint:"Character count: "+t.post.content.length,mode:"editor",nativeEmoji:""},model:{value:t.post.content,callback:function(e){t.$set(t.post,"content",e)},expression:"post.content"}})],1)],1),s("v-row",{attrs:{justify:"center"}},[s("v-col",{staticClass:"pt-2",attrs:{md:"12",lg:"12",sm:"12"}},[s("v-btn",{staticClass:"mr-2",attrs:{color:"primary",outlined:""},on:{click:t.savePost}},[t._v("Save")]),t.post.public?t._e():s("v-btn",{staticClass:"mr-3",attrs:{color:"success"},on:{click:t.publishPost}},[t._v("Publish")]),t.post.public?s("v-btn",{staticClass:"mr-3",attrs:{color:"error"},on:{click:t.unpublishPost}},[t._v("Unpublish")]):t._e(),t.post.public?s("v-btn",{attrs:{color:"success",elevation:"0",outlined:"",rounded:""}},[s("v-icon",[t._v("mdi-check")]),t._v(" Published ")],1):t._e()],1)],1)],1),s("v-col",{staticClass:"px-6 mt-md-12 pt-md-12",attrs:{sm:"12",md:"6",lg:"6",cols:"12"}},[s("v-row",{attrs:{justify:"center"}},[s("v-col",{staticClass:"pb-0",attrs:{md:"12",lg:"12",sm:"12"}},[s("span",{staticClass:"font-weight-black",staticStyle:{"font-size":"2rem"}},[t._v(t._s(t.post.title?t.post.title:"Title"))])])],1),s("v-row",{attrs:{justify:"center"}},[s("v-col",{staticClass:"pt-0",attrs:{md:"12",lg:"12",sm:"12"}},[s("span",{staticClass:"font-weight-black grey--text",staticStyle:{"font-size":"1rem"}},[t._v(t._s(t.post.date)+", by Marco Trentini")])])],1),s("v-row",{attrs:{justify:"center"}},[s("Editor",{staticClass:"pa-0",attrs:{outline:!0,mode:"viewer",nativeEmoji:""},model:{value:t.post.content,callback:function(e){t.$set(t.post,"content",e)},expression:"post.content"}})],1)],1)],1),s("v-snackbar",{attrs:{color:"success",timeout:3e3,top:""},model:{value:t.saved,callback:function(e){t.saved=e},expression:"saved"}},[t._v("Post saved")]),s("v-snackbar",{attrs:{color:"success",timeout:3e3,top:""},model:{value:t.published,callback:function(e){t.published=e},expression:"published"}},[t._v("Post published")]),s("v-snackbar",{attrs:{color:"error",timeout:3e3,top:""},model:{value:t.unpublished,callback:function(e){t.unpublished=e},expression:"unpublished"}},[t._v("Post unpublished")])],1)},it=[],at=s("7c03"),rt=(s("c8b6"),{name:"BlogpostCreator",components:{Editor:at["Editor"]},props:["editedPost"],created:function(){if(this.editedPost){var t=this.editedPost.date;this.post=this.editedPost,this.post.date=t}else{var e=new Date;this.post.date=e.toDateString()}},data:function(){return{post:{id:null,title:"",content:"",public:!1,date:""},saved:!1,published:!1,unpublished:!1}},methods:{makeid:function(t){for(var e="",s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=s.length,n=0;n<t;n++)e+=s.charAt(Math.floor(Math.random()*o));return e},savePost:function(){null===this.post.id&&(this.post.id=this.makeid(10)),p.collection("blogposts").doc(this.post.id).set(this.post).then(this.saved=!0)},publishPost:function(){null===this.post.id&&(this.post.id=this.makeid(10)),this.post.public=!0,p.collection("blogposts").doc(this.post.id).set(this.post).then(this.published=!0)},unpublishPost:function(){null===this.post.id&&(this.post.id=this.makeid(10)),this.post.public=!1,p.collection("blogposts").doc(this.post.id).set(this.post).then(this.unpublished=!0)}}}),lt=rt,ct=Object(h["a"])(lt,nt,it,!1,null,null,null),dt=ct.exports,ut={name:"Blog",components:{BlogpostCreator:dt,BlogpostList:ot},computed:Object(l["a"])({},Object(f["b"])(["loggedIn"])),data:function(){return{addingPost:!1,editedPost:!1}},methods:{editPost:function(t){this.addingPost=!0,this.editedPost=t}}},pt=ut,vt=Object(h["a"])(pt,G,Q,!1,null,null,null),ft=vt.exports,mt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{fluid:""}},[s("v-row",{attrs:{justify:"center"}},[s("v-col",{staticClass:"pb-0",attrs:{md:"12",lg:"8",sm:"12"}},[s("v-btn",{attrs:{color:"primary",outlined:"",to:"/blog"}},[s("v-icon",[t._v("mdi-left")]),t._v(" All posts ")],1)],1)],1),s("v-row",{attrs:{justify:"center"}},[s("v-col",{staticClass:"pb-0 pt-6",attrs:{md:"12",lg:"8",sm:"12"}},[s("span",{staticClass:"font-weight-black",staticStyle:{"font-size":"2rem","word-break":"keep-all"}},[t._v(t._s(t.post.title))])])],1),s("v-row",{attrs:{justify:"center"}},[s("v-col",{staticClass:"py-0",attrs:{md:"12",lg:"8",sm:"12"}},[s("span",{staticClass:"font-weight-black grey--text",staticStyle:{"font-size":"1rem"}},[t._v(t._s(t.post.date)+", by Marco Trentini")])])],1),s("v-row",{attrs:{justify:"center"}},[s("v-col",{staticClass:"py-2",attrs:{md:"12",lg:"8",sm:"12"}},[s("v-divider")],1)],1),s("v-row",{attrs:{justify:"center"}},[s("v-col",{staticClass:"py-0",attrs:{md:"12",lg:"8",sm:"12"}},[s("Editor",{ref:"editor",staticClass:"pa-0",attrs:{outline:!0,hint:"Test",mode:"viewer",nativeEmoji:""},model:{value:t.post.content,callback:function(e){t.$set(t.post,"content",e)},expression:"post.content"}})],1)],1)],1)},gt=[],ht={name:"BlogpostViewer",components:{Editor:at["Editor"]},created:function(){var t=this;p.collection("blogposts").doc(this.$route.params.post_id).get().then((function(e){t.post=e.data()}))},data:function(){return{post:{}}}},bt=ht,yt=Object(h["a"])(bt,mt,gt,!1,null,"7172885a",null),_t=yt.exports;o["default"].use(z["a"]);var wt=[{path:"/",name:"Home",component:N},{path:"/signin",name:"Sign in",component:q},{path:"/blog",name:"Blog",component:ft},{path:"/blog/:post_id",component:_t}],kt=new z["a"]({routes:wt}),xt=kt;o["default"].use(f["a"]);var Ct=new f["a"].Store({state:{loggedIn:localStorage.loggedIn},mutations:{},actions:{},modules:{}}),jt=s("ce5b"),Pt=s.n(jt);s("bf40");o["default"].use(Pt.a);var St=new Pt.a({theme:{options:{customProperties:!0},themes:{light:{primary:"#6a96ff",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#3da4ea",success:"#26de81",warning:"#FFC107",napoly:"#3da4ea"}}}});o["default"].config.productionTip=!1,new o["default"]({router:xt,store:Ct,vuetify:St,render:function(t){return t(O)}}).$mount("#app")},"77fc":function(t,e,s){},"85ec":function(t,e,s){},"86f8":function(t,e,s){t.exports=s.p+"img/undraw_code_thinking_1jeh.556a9b10.svg"},"9eb5":function(t,e,s){"use strict";var o=s("77fc"),n=s.n(o);n.a},b139:function(t,e,s){"use strict";var o=s("54d5"),n=s.n(o);n.a}});
//# sourceMappingURL=app.4c363960.js.map