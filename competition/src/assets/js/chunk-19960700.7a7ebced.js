(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19960700"],{"1b8a":function(t,e,n){"use strict";var s=n("47c2"),d=n("8555").find,r=n("3592"),i=n("4686"),o="find",a=!0,c=i(o);o in[]&&Array(1)[o]((function(){a=!1})),s({target:"Array",proto:!0,forced:a||!c},{find:function(t){return d(this,t,arguments.length>1?arguments[1]:void 0)}}),r(o)},ae54:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:t.$route.name,"left-text":"返回","left-arrow":""},on:{"click-left":function(e){return t.$router.go(-1)}}}),n("van-address-list",{attrs:{list:t.list,"default-tag-text":"默认"},on:{add:t.onAdd,edit:t.onEdit,select:t.onSelect},model:{value:t.chosenAddressId,callback:function(e){t.chosenAddressId=e},expression:"chosenAddressId"}})],1)},d=[],r=(n("1b8a"),n("6f80")),i={data:function(){return{chosenAddressId:"1",list:[]}},methods:{onAdd:function(){this.$router.push("/addressAdd")},onEdit:function(t){this.$router.push({path:"/addressEdit",query:{id:t.id}})},onSelect:function(t){this.$store.commit("address/editId",t.id),this.$router.go(-1)}},created:function(){this.list=this.$store.state.address.lists||[];try{this.chosenAddressId=this.list.find((function(t){return t.isDefault})).id}catch(t){Object(r["a"])("没有地址数据")}},beforeRouteLeave:function(t,e,n){"/my"==t.path&&(this.$store.state.vanTabbar=!0),n()}},o=i,a=n("c701"),c=Object(a["a"])(o,s,d,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-19960700.7a7ebced.js.map