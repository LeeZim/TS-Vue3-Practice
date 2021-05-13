var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,s=Object.getOwnPropertySymbols,o=Object.prototype.propertyIsEnumerable,a=(t,s,o)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[s]=o,r=(e,r)=>{for(var n in r||(r={}))t.call(r,n)&&a(e,n,r[n]);if(s)for(var n of s(r))o.call(r,n)&&a(e,n,r[n]);return e};import{r as n,o as l,a as i,d as c,w as u,c as d,b as m,e as p,t as g,f as v,g as f,F as b,h,i as y,u as L,j as w,k as C,l as k,m as x,n as R,T as V,p as F,q as A,s as I,v as P,x as _,y as j,z as $,A as U,B as D,C as E,D as M,E as O,G as S,H as z,I as q}from"./vendor.45a51cc1.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(s){const o=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((s,r)=>{const n=new URL(e,o);if(self[t].moduleMap[n])return s(self[t].moduleMap[n]);const l=new Blob([`import * as m from '${n}';`,`${t}.moduleMap['${n}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){r(new Error(`Failed to import: ${e}`)),a(i)},onload(){s(self[t].moduleMap[n]),a(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("assets/");var B=c({props:{user:{type:Object,required:!0}},setup(){const e=n(!1),t=n(null),s=(e=>{const t=n(!0),s=s=>{if(e.value){const o=s.target;t.value=!e.value.contains(o)}};return l((()=>{document.addEventListener("click",s)})),i((()=>{document.removeEventListener("click",s)})),t})(t);u(s,(()=>{s.value&&e.value&&(e.value=!1)}));return{isOpen:e,dropdownRef:t,openTrigger:()=>{e.value=!e.value}}}});const T={class:"dropdown",ref:"dropdownRef"},H={key:0,class:"dropdown-menu",style:{display:"block"}};B.render=function(e,t,s,o,a,r){return h(),d(b,null,[m("div",T,[m("button",{class:"btn btn-outline-light dropdown-toggle",onClick:t[1]||(t[1]=p(((...t)=>e.openTrigger&&e.openTrigger(...t)),["prevent"]))}," 欢迎 "+g(e.user.nickName),1)],512),e.isOpen?(h(),d("ul",H,[v(e.$slots,"default")])):f("",!0)],64)};var Z=c({props:{disabled:{type:Boolean,default:!1}},setup(){}});const N={class:"dropdown-option"};Z.render=function(e,t,s,o,a,r){return h(),d("li",N,[m("a",{class:["dropdown-item",{disabled:e.disabled}],href:"#"},[v(e.$slots,"default")],2)])};var G=c({name:"Header",props:{user:{type:Object,required:!0}},components:{DropdownList:B,DropdownItem:Z},setup(){const e=L(),t=w();return{userInfo:y((()=>t.state.user)),userLogin:()=>{e.push("/login")},userLogout:()=>{t.commit("userLogout"),e.push("/")}}}});const J={class:"navbar navbar-dark bg-primary justify-content-between mb-4 px-4"},K=x("者也专栏"),Q={key:0,class:"list-inline mb-0"},W={class:"list-inline-item"},X=m("li",{class:"list-inline-item"},[m("a",{class:"btn btn-outline-light"},"注册")],-1),Y={key:1,class:"list-inline mb-0"},ee={class:"list-inline-item"},te=x("新建文章"),se=x("我的专栏"),oe=x("退出登录");G.render=function(e,t,s,o,a,r){const n=C("router-link"),l=C("DropdownItem"),i=C("DropdownList");return h(),d("nav",J,[m(n,{to:"/",class:"navbar-brand"},{default:k((()=>[K])),_:1}),e.userInfo.isLogin?(h(),d("ul",Y,[m("li",ee,[m(i,{user:e.user},{default:k((()=>[m(l,null,{default:k((()=>[te])),_:1}),m(l,{disabled:!0},{default:k((()=>[se])),_:1}),m(l,{onClick:p(e.userLogout,["prevent"])},{default:k((()=>[oe])),_:1},8,["onClick"])])),_:1},8,["user"])])])):(h(),d("ul",Q,[m("li",W,[m("a",{class:"btn btn-outline-light",onClick:t[1]||(t[1]=(...t)=>e.userLogin&&e.userLogin(...t))},"登录")]),X]))])};const ae={},re={class:"py-4 bg-light text-center text-secondary mt-6"},ne=R('<small><ul class="list-inline mb-0"><li class="list-inline-item">@ 2020 者也专栏</li><li class="list-inline-item">课程</li><li class="list-inline-item">文档</li><li class="list-inline-item">联系</li><li class="list-inline-item">更多</li></ul></small>',1);ae.render=function(e,t){return h(),d("footer",re,[ne])};var le=c({props:{background:String},setup(){const e=document.createElement("div");e.id="loading",document.body.appendChild(e),i((()=>{document.body.removeChild(e)}))}});const ie=F();A("data-v-71429c3b");const ce=m("div",{class:"spinner-border text-primary",role:"status"},null,-1);I();const ue=ie(((e,t,s,o,a,r)=>(h(),d(V,{to:"#loading"},[m("div",{class:"loading-container d-flex justify-content-center align-items-center h-100 w-100",style:{backgroundColor:e.background||""}},[ce],4)]))));le.render=ue,le.__scopeId="data-v-71429c3b";var de=c({name:"App",components:{Header:G,Footer:ae,Loader:le},setup(){const e=w();return{userInfo:y((()=>e.state.user)),isLoading:y((()=>e.state.isLoading))}}});const me={class:"container"};de.render=function(e,t,s,o,a,r){const n=C("Header"),l=C("Loader"),i=C("router-view"),c=C("Footer");return h(),d("div",me,[m(n,{user:e.userInfo},null,8,["user"]),e.isLoading?(h(),d(l,{key:0})):f("",!0),m(i),m(c)])};const pe=P.create({baseURL:"https://apis.imooc.com/api/",timeout:2e4});pe.interceptors.request.use((e=>(fe.commit("setLoader",!0),"post"===e.method?e.data instanceof FormData?e.data.append("icode","0370D0ADAC459408"):e.data=r(r({},e.data),{icode:"0370D0ADAC459408"}):e.params=r(r({},e.params),{icode:"0370D0ADAC459408"}),e)),(e=>Promise.reject(e))),pe.interceptors.response.use((e=>(fe.commit("setLoader",!1),e)),(e=>(fe.commit("setLoader",!1),Promise.reject(e))));const ge=async(e,t,s,o={method:"get"},a)=>{const{data:r}=await pe(t,o);return s(e,a?{data:r,extraData:a}:r),r},ve={user:{isLogin:!1,nickName:"某某某某",_id:""},columns:{pageSize:3,currentPage:1,list:[],isEnd:!1,loadedPage:0},token:localStorage.getItem("token")||"",isLoading:!1},fe=_({state:()=>ve,mutations:{userLogin(e,t){const{token:s}=t.data;s&&(localStorage.setItem("token",s),e.token=localStorage.getItem("token"),pe.defaults.headers.common.Authorization=`Bearer ${s}`)},userLogout(e){delete pe.defaults.headers.common.Authorization,localStorage.removeItem("token"),e.token="",e.user.isLogin=!1},fetchCurrentUser(e,t){const{data:s}=t;s&&(e.user=r(r({},s),{isLogin:!0}))},getColumns(e,t){const{data:s}=t;e.columns.list?(e.columns.list=e.columns.list.concat(s.list),s.count&&e.columns.list.length>=s.count&&(e.columns.isEnd=!0)):e.columns.list=s.list},getMoreColumns(e){e.columns.currentPage+=1},setLoadedPage(e,t){e.columns.loadedPage=t},setLoader(e,t){e.isLoading=t}},actions:{fetchColumns:({state:e,commit:t})=>e.columns.currentPage>e.columns.loadedPage?(t("setLoadedPage",e.columns.currentPage),ge("getColumns",`/columns?currentPage=${e.columns.currentPage}&pageSize=${e.columns.pageSize}`,t)):Promise.resolve(),login:({commit:e},t)=>ge("userLogin","/user/login",e,t),fetchCurrentUser:({commit:e})=>ge("fetchCurrentUser","/user/current",e),loginAndFetch:({dispatch:e},t)=>e("login",t).then((()=>e("fetchCurrentUser")))},getters:{}});var be=c({setup(){const e=w(),t=y((()=>e.state.columns.list)),s=y((()=>t.value&&t.value.map((e=>(e.avatar&&!e.avatar.url&&(e.avatar=r(r({},e.avatar),{url:"/src/assets/DefaultIcon.jpg"})),e)))));return l((()=>{e.dispatch("fetchColumns")})),{columnsList:s}}});const he=F();A("data-v-26c027ec");const ye={class:"row"},Le={class:"card h-100 shadow-sm"},we={class:"card-body text-center"},Ce={class:"card-title"},ke={class:"card-text text-start mx-4"},xe=m("button",{class:"btn btn-outline-primary"},"进入专栏",-1);I();const Re=he(((e,t,s,o,a,r)=>(h(),d("div",ye,[(h(!0),d(b,null,j(e.columnsList,(e=>(h(),d("div",{key:e,class:"col-4 mb-4"},[m("div",Le,[m("div",we,[m("img",{src:e.avatar.url,class:"rounded-circle border border-light my-3"},null,8,["src"]),m("h5",Ce,g(e.title),1),m("p",ke,g(e.description),1),xe])])])))),128))]))));be.render=Re,be.__scopeId="data-v-26c027ec";var Ve=c({name:"Home",setup(){const e=w();return{getMoreColumns:()=>{e.commit("getMoreColumns"),e.dispatch("fetchColumns")},isEnd:y((()=>e.state.columns.isEnd))}},components:{ColumnList:be}});const Fe={class:"home-page"},Ae=m("section",{class:"py-5 text-center container"},[m("div",{class:"row py-lg-5"},[m("div",{class:"col-lg-6 col-md-8 mx-auto"},[m("img",{src:"./assets/callout.e640eb6c.svg",alt:"callout",class:"w-50"}),m("h2",{class:"font-weight-light"},"随心写作，自由表达"),m("p",null,[m("a",{href:"#",class:"btn btn-primary my-2"},"开始写文章")])])])],-1),Ie=m("h4",{class:"font-weight-bold text-center"},"发现精彩",-1),Pe={class:"d-grid col-6 mx-auto"},_e={key:1,class:"mx-auto w-25 text-center",style:{color:"gray"}};Ve.render=function(e,t,s,o,a,r){const n=C("ColumnList");return h(),d("div",Fe,[Ae,Ie,m(n),m("div",Pe,[e.isEnd?(h(),d("span",_e,"到底啦")):(h(),d("button",{key:0,class:"btn btn-outline-primary mt-2 mb-5 mx-auto w-25",onClick:t[1]||(t[1]=(...t)=>e.getMoreColumns&&e.getMoreColumns(...t))}," 点击加载更多 "))])])};const je=$();var $e=c({emits:["formCommit"],setup(e,t){let s=[];const o=e=>{s.push(e)};return je.on("form-item-created",o),i((()=>{je.off("form-item-created",o),s=[]})),{onFormCommit:()=>{const e=s.map((e=>e())).every((e=>e));t.emit("formCommit",e)}}}});$e.render=function(e,t,s,o,a,r){return h(),d("div",null,[v(e.$slots,"default"),v(e.$slots,"defaultBtn",{},(()=>[m("button",{class:"btn btn-outline-primary w-50 mx-auto",style:{height:"40px"},onClick:t[1]||(t[1]=(...t)=>e.onFormCommit&&e.onFormCommit(...t))}," 确定提交 ")]))])};const Ue={valid:{"is-valid":!0},invalid:{"is-invalid":!0}},De=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;var Ee=c({props:{rules:Array,tag:{type:String,default:"text"},label:{type:String,default:""}},inheritAttrs:!1,setup(e){const t=n(),s=n("参数错误"),o=U({value:"",error:null,errorMsg:"参数错误"}),a=()=>{if(e.rules){const t=e.rules.every((e=>{let t=!0;if(e.rule)switch(o.errorMsg=e.message,e.rule){case"required":t=""!==o.value.trim();break;case"email":""!==o.value&&(t=De.test(o.value));break;case"password":""!==o.value&&(t=o.value.length>=(e.min?e.min:6),t||(o.errorMsg=`密码不能少于${e.min?e.min:6}位`));break;case"custom":t=!e.func||e.func()}return t}));return o.error=t?Ue.valid:Ue.invalid,t}return!0};return l((()=>{je.emit("form-item-created",a)})),{isValid:t,msg:s,validRef:o,loseFocus:a}}});const Me={class:"col-md-10 mx-auto"},Oe={key:0,class:"form-label"},Se={class:"invalid-feedback"};Ee.render=function(e,t,s,o,a,r){return h(),d("div",Me,[e.label?(h(),d("label",Oe,g(e.label),1)):f("",!0),"text"===e.tag?D((h(),d("input",M({key:1,class:["form-control",e.validRef.error]},e.$attrs,{"onUpdate:modelValue":t[1]||(t[1]=t=>e.validRef.value=t),onBlur:t[2]||(t[2]=(...t)=>e.loseFocus&&e.loseFocus(...t))}),null,16)),[[E,e.validRef.value]]):D((h(),d("textarea",M({key:2,class:["form-control",e.validRef.error]},e.$attrs,{"onUpdate:modelValue":t[3]||(t[3]=t=>e.validRef.value=t),onBlur:t[4]||(t[4]=(...t)=>e.loseFocus&&e.loseFocus(...t))}),null,16)),[[O,e.validRef.value]]),m("div",Se,g(e.validRef.errorMsg),1)])};var ze=c({props:{message:{type:String,required:!0},type:{type:String,default:"default"}},setup:()=>({alertType:{success:"alert-success",error:"alert-danger",default:"alert-info"}})});const qe=F();A("data-v-58c2d0b3");const Be={class:"mx-auto"};I();const Te=qe(((e,t,s,o,a,r)=>(h(),d("div",{class:["alert w-50 position-absolute top-50 start-50 translate-middle",e.alertType[e.type]]},[m("strong",Be,g(e.message),1)],2))));ze.render=Te,ze.__scopeId="data-v-58c2d0b3";const He=(e,t)=>{const s=S(ze,{message:e,type:t}),o=document.createElement("div");document.body.appendChild(o),s.mount(o),setTimeout((()=>{s.unmount(),document.body.removeChild(o)}),2e3)};var Ze=c({name:"Login",setup(){const e=L(),t=w(),s=n(""),o=n("");return{onFormCommit:a=>{if(a){const a={method:"post",data:{email:s.value,password:o.value}};t.dispatch("loginAndFetch",a).then((()=>{He("登陆成功","success"),setTimeout((()=>{e.push("/")}),2500)})).catch((e=>{const t=e.response.data.error;He(t,"error")}))}},mailValidRule:[{rule:"email",message:"请输入有效的邮箱地址"},{rule:"required",message:"邮箱地址不能为空"}],pwdValidRule:[{rule:"password",min:6},{rule:"required",message:"密码不能为空"}],emailVal:s,pwdVal:o}},components:{ValidInput:Ee,ValidForm:$e}});const Ne={class:"container"},Ge={class:"row"},Je=m("div",{class:"col-6"},[m("img",{src:"./assets/loginLogo.4b2a2911.png",class:"h-120"})],-1);Ze.render=function(e,t,s,o,a,r){const n=C("ValidInput"),l=C("ValidForm");return h(),d("div",Ne,[m("div",Ge,[Je,m(l,{class:"h-120 shadow-sm card col-6 py-5 mb-4 d-grid gap-4",onFormCommit:e.onFormCommit},{defaultBtn:k((()=>[])),default:k((()=>[m(n,{rules:e.mailValidRule,placeholder:"请输入邮箱",label:"邮箱地址：",modelValue:e.emailVal,"onUpdate:modelValue":t[1]||(t[1]=t=>e.emailVal=t)},null,8,["rules","modelValue"]),m(n,{rules:e.pwdValidRule,placeholder:"请输入密码",type:"password",label:"密码：",modelValue:e.pwdVal,"onUpdate:modelValue":t[2]||(t[2]=t=>e.pwdVal=t)},null,8,["rules","modelValue"])])),_:1},8,["onFormCommit"])])])};const Ke=[{path:"/",name:"Home",component:Ve},{path:"/login",name:"Login",component:Ze,meta:{isRedirectLogin:!0}}],Qe=z({history:q(),routes:Ke});Qe.beforeEach(((e,t,s)=>{const{isRedirectLogin:o,isRequireLogin:a}=e.meta,{token:r,user:n}=fe.state;n.isLogin?o?s("/"):s():r?(pe.defaults.headers.common.Authorization=`Bearer ${r}`,fe.dispatch("fetchCurrentUser").then((()=>{o?s("/"):s()})).catch((()=>{fe.commit("userLogout"),a?s("/login"):s()}))):a?s("/login"):s()}));const We=S(de);We.use(fe),We.use(Qe),We.mount("#app");
