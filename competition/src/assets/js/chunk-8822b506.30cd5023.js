(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8822b506"],{"273d":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("van-nav-bar",{attrs:{title:e.$route.name,"left-text":"返回","left-arrow":""},on:{"click-left":e.getmy}}),a("van-form",{on:{submit:e.onSubmit}},[a("van-field",{attrs:{name:"username",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),a("van-field",{attrs:{type:"password",name:"password",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("div",{staticStyle:{margin:"16px"}},[a("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v(" 提交 ")])],1)],1),a("h1",{staticClass:"zc",on:{click:e.getregister}},[e._v("前往注册")])],1)},r=[],n=a("6f80"),o={data:function(){return{username:"",password:"",item:this.$route.query.item}},methods:{getmy:function(){this.$router.push("/my"),this.$store.state.active=3},onSubmit:function(e){var t=this,a=t.$route.query.path;this.$axios.get("login",{params:e}).then((function(e){console.log(e),"200"==e.data?Object(n["a"])({message:"登陆成功",onOpened:function(){t.$store.state.username=t.username,t.$route.query.path?t.$router.push({path:a,query:{item:t.item}}):t.$router.push("/my")}}):Object(n["a"])("登陆失败")}))},getregister:function(){this.$router.push("/register")}}},u=o,i=(a("5650"),a("c701")),c=Object(i["a"])(u,s,r,!1,null,"6bc38a82",null);t["default"]=c.exports},5650:function(e,t,a){"use strict";a("a7b2")},a7b2:function(e,t,a){}}]);
//# sourceMappingURL=chunk-8822b506.30cd5023.js.map