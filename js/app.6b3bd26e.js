(function(t){function e(e){for(var r,s,o=e[0],l=e[1],c=e[2],v=0,d=[];v<o.length;v++)s=o[v],n[s]&&d.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},i=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"05b9":function(t,e,a){},"26a7":function(t,e,a){"use strict";var r=a("db17"),n=a.n(r);n.a},"28d0":function(t,e,a){"use strict";var r=a("ad95"),n=a.n(r);n.a},"56d7":function(t,e,a){"use strict";a.r(e);var r=a("2b0e"),n=a("bc3a"),i=a.n(n);let s={};const o=i.a.create(s);o.interceptors.request.use(function(t){return t},function(t){return Promise.reject(t)}),o.interceptors.response.use(function(t){return t},function(t){return Promise.reject(t)}),Plugin.install=function(t,e){t.axios=o,window.axios=o,Object.defineProperties(t.prototype,{axios:{get(){return o}},$axios:{get(){return o}}})},r["a"].use(Plugin);Plugin;var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:""}},[a("v-toolbar-title",{staticClass:"headline text-uppercase"},[a("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:"/movieApiVue",tag:"span"}},[a("span",[t._v(t._s(t.title))])]),a("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:"/movieApiVue/test",tag:"span"}},[a("span",[t._v("Test")])])],1),a("v-spacer"),a("v-flex",{attrs:{xs12:"",sm6:"",md3:""}},[a("v-text-field",{attrs:{label:"Movie Name"},model:{value:t.searchString,callback:function(e){t.searchString=e},expression:"searchString"}})],1),a("v-btn",{attrs:{text:"",disabled:!t.dataAvailable},on:{click:t.searchMovie}},[a("span",{staticClass:"mr-2"},[t._v("Search")])])],1),a("v-content",[a("router-view")],1)],1)},c=[],u={name:"App",components:{},data:()=>({title:"My Movie App",searchString:""}),methods:{searchMovie(){this.$router.push("/search/"+this.searchString),this.searchString=""}},computed:{dataAvailable(){return null!==this.searchString&&""!==this.searchString}}},v=u,d=a("2877"),p=a("6544"),h=a.n(p),g=a("7496"),f=a("40dc"),m=a("8336"),_=a("a75b"),b=a("0e8f"),x=a("2fa4"),V=a("8654"),y=a("2a7f"),w=Object(d["a"])(v,l,c,!1,null,null,null),C=w.exports;h()(w,{VApp:g["a"],VAppBar:f["a"],VBtn:m["a"],VContent:_["a"],VFlex:b["a"],VSpacer:x["a"],VTextField:V["a"],VToolbarTitle:y["a"]});var M=a("8c4f"),S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.loading?a("v-container",[a("div",{staticClass:"text-xs-center"},[a("v-progress-circular",{attrs:{indeterminate:"",size:150,width:8,color:"green"}})],1)]):a("v-container",{attrs:{"grid-list-xl":""}},[a("v-layout",{attrs:{wrap:""}},t._l(t.wholeResponse,function(e,r){return a("v-flex",{key:r,attrs:{xs4:"","mb-2":""}},[a("v-card",[a("v-img",{attrs:{src:e.Poster,"aspect-ratio":"1"}}),a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("h2",[t._v(t._s(e.Title))]),a("div",[t._v("Year: "+t._s(e.Year))]),a("div",[t._v("Type: "+t._s(e.Type))]),a("div",[t._v("IMDB-id: "+t._s(e.imdbID))])])]),a("v-card-actions",{staticClass:"justify-center"},[a("v-btn",{attrs:{text:"",color:"green"},on:{click:function(a){return t.singleMovie(e.imdbID)}}},[t._v("View")])],1)],1)],1)}),1)],1)},T=[],k={fetchMovieCollection(t){return i.a.get("&s="+t).then(t=>{return t.data})},fetchSingleMovie(t){return i.a.get("&i="+t).then(t=>{return t.data})}},j={data(){return{wholeResponse:[],loading:!0}},mounted(){k.fetchMovieCollection("indiana").then(t=>{this.wholeResponse=t.Search,this.loading=!1}).catch(t=>{console.log(t)})},methods:{singleMovie(t){this.$router.push("/movie/"+t)}}},P=j,D=(a("93d8"),a("b0af")),O=a("99d9"),A=a("a523"),R=a("adda"),$=a("a722"),I=a("490a"),B=Object(d["a"])(P,S,T,!1,null,"0f355503",null),E=B.exports;h()(B,{VBtn:m["a"],VCard:D["a"],VCardActions:O["a"],VCardTitle:O["c"],VContainer:A["a"],VFlex:b["a"],VImg:R["a"],VLayout:$["a"],VProgressCircular:I["a"]});var F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.loading?a("v-container",[a("div",{staticClass:"text-xs-center"},[a("v-progress-circular",{attrs:{indeterminate:"",size:150,width:8,color:"green"}})],1)]):a("v-container",[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"","mr-1":"","ml-1":""}},[a("v-card",[a("v-img",{attrs:{src:t.singleMovie.Poster,"aspect-ratio":"2"}}),a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("h2",{staticClass:"headline mb-0"},[t._v(t._s(t.singleMovie.Title)+"-"+t._s(t.singleMovie.Year))]),a("p",[t._v(t._s(t.singleMovie.Plot)+" ")]),a("h3",[t._v("Actors:")]),t._v(t._s(t.singleMovie.Actors)+"\n             "),a("h4",[t._v("Awards:")]),t._v(" "+t._s(t.singleMovie.Awards)+"\n             "),a("p",[t._v("Genre: "+t._s(t.singleMovie.Genre))])])]),a("v-card-actions",[a("v-btn",{attrs:{flat:"",color:"green"},on:{click:t.back}},[t._v("back")])],1)],1)],1)],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("div",{staticClass:"text-xs-center"},[a("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-btn",{attrs:{slot:"activator",color:"green",dark:""},slot:"activator"},[t._v("\n          View Ratings\n        ")]),a("v-card",[a("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[t._v("\n            Ratings\n          ")]),a("v-card-text",[a("table",{staticStyle:{width:"100%"},attrs:{border:"1"}},[a("tr",[a("th",[t._v("Source")]),a("th",[t._v("Ratings")])]),t._l(this.ratings,function(e,r){return a("tr",{key:r},[a("td",{attrs:{align:"center"}},[t._v(t._s(t.ratings[r].Source))]),a("td",{attrs:{align:"center"}},[a("v-rating",{attrs:{"half-increments":!0,value:t.ratings[r].Value}})],1)])})],2)]),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n              OK\n            ")])],1)],1)],1)],1)])],1)],1)},L=[],Y={props:["id"],data(){return{singleMovie:"",loading:!0,dialog:!1,ratings:""}},mounted(){k.fetchSingleMovie(this.id).then(t=>{this.singleMovie=t,this.ratings=this.singleMovie.Ratings,this.ratings.forEach(function(t){t.Value=parseFloat(t.Value.split(/\/|%/)[0]),t.Value=t.Value<=10?t.Value/2:t.Value/20}),this.loading=!1}).catch(t=>{console.log(t)})},methods:{back(){this.$router.push("/")}}},z=Y,G=(a("28d0"),a("169a")),J=a("ce7e"),q=a("1d4d"),K=Object(d["a"])(z,F,L,!1,null,"03a1abc4",null),N=K.exports;h()(K,{VBtn:m["a"],VCard:D["a"],VCardActions:O["a"],VCardText:O["b"],VCardTitle:O["c"],VContainer:A["a"],VDialog:G["a"],VDivider:J["a"],VFlex:b["a"],VImg:R["a"],VLayout:$["a"],VProgressCircular:I["a"],VRating:q["a"],VSpacer:x["a"]});var U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.loading?a("div",[t._v("\n        Loading  \n    ")]):t.error?a("div",[t._v("\n        There is an error  \n    ")]):a("div",[t._v("\n\n        "+t._s(t.testData.Title)+"\n\n    ")])])},H=[],Q={data(){return{loading:!0,error:!1,testData:""}},mounted(){i.a.get("http://www.omdbapi.com/?apikey=d5eaeb65&i=tt0097576&Content-Type=application/json").then(t=>{this.testData=t.data,this.loading=!1}).catch(t=>{console.log(t)})}},W=Q,X=Object(d["a"])(W,U,H,!1,null,null,null),Z=X.exports,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.loading?a("v-container",[a("div",{staticClass:"text-xs-center"},[a("v-progress-circular",{attrs:{indeterminate:"",size:150,width:8,color:"green"}})],1)]):t.noData?a("v-container",[a("div",{staticClass:"text-xs-center"},[t._v('\n      The search for "'+t._s(this.term)+'" returned no results\n    ')])]):a("v-container",{attrs:{"grid-list-xl":""}},[a("v-layout",{attrs:{wrap:""}},t._l(t.movieData,function(e,r){return a("v-flex",{key:r,attrs:{xs4:"","mb-2":""}},[a("v-card",[a("v-img",{attrs:{src:e.Poster,"aspect-ratio":"1"}}),a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("h2",[t._v(t._s(e.Title))]),a("div",[t._v("Year: "+t._s(e.Year))]),a("div",[t._v("Type: "+t._s(e.Type))]),a("div",[t._v("IMDB-id: "+t._s(e.imdbID))])])]),a("v-card-actions",{staticClass:"justify-center"},[a("v-btn",{attrs:{text:"",color:"green"},on:{click:function(a){return t.singleMovie(e.imdbID)}}},[t._v("View")])],1)],1)],1)}),1)],1)},et=[],at={props:["term"],data(){return{movieData:[],loading:!0,noData:!1}},mounted(){this.fetchResult(this.term)},methods:{singleMovie(t){this.$router.push("/movie/"+t)},fetchResult(t){k.fetchMovieCollection(t).then(t=>{"True"===t.Response?(this.movieData=t.Search,this.loading=!1,this.noData=!1):(this.noData=!0,this.loading=!1)}).catch(t=>{console.log(t)})}},watch:{term(t){this.fetchResult(t)}}},rt=at,nt=(a("26a7"),Object(d["a"])(rt,tt,et,!1,null,"2604f180",null)),it=nt.exports;h()(nt,{VBtn:m["a"],VCard:D["a"],VCardActions:O["a"],VCardTitle:O["c"],VContainer:A["a"],VFlex:b["a"],VImg:R["a"],VLayout:$["a"],VProgressCircular:I["a"]}),r["a"].use(M["a"]);var st=new M["a"]({routes:[{path:"/",name:"latestMovies",component:E},{path:"/movie/:id",name:"movie",props:!0,component:N},{path:"/search/:term",name:"search",props:!0,component:it},{path:"/test",name:"test",component:Z}],mode:"history"}),ot=a("f309");r["a"].use(ot["a"]);var lt=new ot["a"]({icons:{iconfont:"mdi"}});r["a"].config.productionTip=!1,i.a.defaults.baseURL="https://www.omdbapi.com/?apikey=b76b385c&page=1&type=movie&Content-Type=application/json",new r["a"]({router:st,vuetify:lt,render:t=>t(C)}).$mount("#app")},"93d8":function(t,e,a){"use strict";var r=a("05b9"),n=a.n(r);n.a},ad95:function(t,e,a){},db17:function(t,e,a){}});
//# sourceMappingURL=app.6b3bd26e.js.map