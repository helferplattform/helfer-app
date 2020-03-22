(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{322:function(e,t,n){"use strict";var a,r=n(0),l=n.n(r),i=n(4),c=n(607),o=n(307),s=n(7),u=n.n(s),f=n(6),d=n.n(f),m=n(9),h=n.n(m),p=n(3),y=n.n(p),g=n(8),E=n.n(g),v=n(24),x=n.n(v),k=n(14),b=n(2),R=n(67),C=n(314),S=n.n(C),w=n(43),H=n.n(w),q=n(16),D=n.n(q),j=function(){function e(t=new I){u()(this,e),this.service=t}return d()(e,[{key:"createHelper",value:function(e){return this.service.createHelper(e)}},{key:"createHelpRequest",value:function(e){return this.service.createHelpRequest(e)}},{key:"findHelpers",value:function(e){return this.service.findHelpers(e)}},{key:"notifyHelpers",value:function(e){return this.service.notifyHelpers(e)}},{key:"getHelpRequests",value:function(){return this.service.getHelpRequests()}}]),e}();!function(e){e.Helper="helper",e.HelpRequest="HelpRequest"}(a||(a={}));var I=function(){function e(){u()(this,e)}return d()(e,[{key:"createHelper",value:function(e){return this.post(a.Helper,e)}},{key:"createHelpRequest",value:function(e){return this.post(a.HelpRequest,e)}},{key:"findHelpers",value:function(e){return Promise.resolve({count:3,skills:[{skill:{id:4,name:"Erste Hilfe"},count:2},{skill:{id:2,name:"Altenpflege"},count:1}]})}},{key:"notifyHelpers",value:function(e){return Promise.resolve()}},{key:"getHelpRequests",value:function(){var e=[{id:1,name:"Hans Gustafson",email:"hans@gustafson.de",phone:"0151 / 472254841",postcode:"23560"},{id:2,name:"Ali Yang\xfcrk",email:"ali.yang\xfcrk@gmail.com",phone:"0176 / 572121244",postcode:"23558"},{id:3,name:"Tanja Toasterhausen",email:"toastertanne@web.de",phone:"0162 / 1745124",postcode:"23558"},{id:4,name:"Sarah Saarhusen",email:"sarah@saarhusen.de",phone:"0162 / 2451845",postcode:"22574"}],t=[{id:1,name:"Am Tannenbusch 13",created_at:"22.03.2020 17:12 Uhr",date_start:"23.03.2020 14:00 Uhr",roles:[],skills:[],helpers:e},{id:2,name:"Rapsacker 27",created_at:"22.03.2020 17:12 Uhr",date_start:"23.03.2020 14:00 Uhr",roles:[],skills:[],helpers:e},{id:3,name:"Am Teich 4",created_at:"22.03.2020 17:12 Uhr",date_start:"23.03.2020 14:00 Uhr",roles:[],skills:[],helpers:e},{id:4,name:"Unter den Linden 27",created_at:"22.03.2020 17:12 Uhr",date_start:"23.03.2020 14:00 Uhr",roles:[],skills:[],helpers:e}];return this.get(a.HelpRequest,t)}},{key:"get",value:function(e,t){return Promise.resolve(t)}},{key:"post",value:function(e,t){var n=D()({},t);return n.id=1,Promise.resolve(n)}}]),e}();I.HOST="http://127.0.0.1/",I.ENDPOINT_PREFIX="api/v1/";var O=j;function P(e){var t=Object(r.useState)(0),n=x()(t,2),a=n[0],i=n[1],c=Object(r.useState)(e.helpRequest),o=x()(c,2),s=o[0],u=(o[1],new O);return Object(r.useEffect)((function(){!function(){var t,n;H.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.helpRequest,a.next=3,H.a.awrap(u.findHelpers({longitude:0,latitude:0,requiredSkills:t.skills}));case 3:n=a.sent,void 0===t.skills||0==t.skills.length?i(n.count):t.skills.length>=2?i(1):i(2);case 5:case"end":return a.stop()}}),null,null,null,Promise)}()}),[s.skills]),l.a.createElement(k.a,{style:{fontSize:e.fontSize}},a)}function z(e){return l.a.createElement(b.a,{style:{flex:1,justifyContent:"flex-start",alignItems:"center",padding:5}},l.a.createElement(b.a,{style:{backgroundColor:"grey",width:100,height:100,borderRadius:50,borderWidth:3,justifyContent:"center",alignItems:"center"}},l.a.createElement(P,{helpRequest:e.helpRequest,render:e.render,fontSize:75})))}var T=n(41);function A(e){return l.a.createElement(k.a,{style:{flex:3}},"Melde dich jetzt bei"," ",l.a.createElement(P,{helpRequest:e.helpRequest,fontSize:30})," ","potentiellen Helfern in deiner N\xe4he. Beschreibe in deiner Nachricht den Einsatz m\xf6glichst genau.")}var _=n(110);function U(e){var t=Object(r.useState)([{role:{id:0,name:"Pfleger*in"},checked:!1},{role:{id:1,name:"Reinigungskraft"},checked:!1},{role:{id:2,name:"Sanit\xe4ter"},checked:!1},{role:{id:3,name:"Noch mehr"},checked:!1}]),n=x()(t,2),a=n[0],i=n[1],c=function(){var t=a.filter((function(e){return!0===e.checked})).map((function(e,t){return e.role})),n=e.helpRequest;n.roles=t,e.setHelpRequest(n)};return l.a.createElement(b.a,{style:{flex:1,backgroundColor:"white"}},l.a.createElement(b.a,{style:{flex:1,justifyContent:"flex-start",alignItems:"flex-start"}},l.a.createElement(k.a,null,"Rollen")),l.a.createElement(b.a,{style:{flex:10}},l.a.createElement(T.b,{data:a,renderItem:function(e){var t=e.item;return l.a.createElement(b.a,{style:{flex:1,flexDirection:"row",padding:5}},l.a.createElement(_.a,{value:t.checked,style:{marginRight:5},onValueChange:function(e){!function(e,t){var n=a.slice();n[e.role.id].checked=t,i(n),c()}(t,e)}}),l.a.createElement(k.a,null,t.role.name))}})))}function W(e){var t=Object(r.useState)([{skill:{id:0,name:"Erste Hilfe"},checked:!1},{skill:{id:1,name:"Altenpflege"},checked:!1},{skill:{id:2,name:"Noch mehr"},checked:!1}]),n=x()(t,2),a=n[0],i=n[1],c=function(){var t=a.filter((function(e){return!0===e.checked})).map((function(e,t){return e.skill})),n=e.helpRequest;n.skills=t,e.setHelpRequest(n)};return l.a.createElement(b.a,{style:{flex:1,backgroundColor:"white"}},l.a.createElement(b.a,{style:{flex:1,justifyContent:"flex-start",alignItems:"flex-start"}},l.a.createElement(k.a,null,"Skills")),l.a.createElement(b.a,{style:{flex:10}},l.a.createElement(T.b,{data:a,renderItem:function(e){var t=e.item;return l.a.createElement(b.a,{style:{flex:1,flexDirection:"row",padding:5}},l.a.createElement(_.a,{value:t.checked,style:{marginRight:5},onValueChange:function(e){!function(e,t){var n=a.slice();n[e.skill.id].checked=t,i(n),c()}(t,e)}}),l.a.createElement(k.a,null,t.skill.name))}})))}function N(e){return l.a.createElement(b.a,{style:{flex:1,justifyContent:"center",alignItems:"flex-start"}},l.a.createElement(k.a,{style:{fontSize:30}},e.children))}var B=n(39);function L(e){return l.a.createElement(b.a,{style:V.container},l.a.createElement(b.a,{style:{flex:1}},l.a.createElement(k.a,{style:{flex:1}},e.heading)),l.a.createElement(b.a,{style:{flex:1}},l.a.createElement(B.a,{onChangeText:function(t){return e.onChangeText(t)},style:{borderRadius:2,borderWidth:3,padding:5},placeholder:e.placeholder})))}var V=i.a.create({container:{flex:1,padding:5,flexDirection:"column",backgroundColor:"#fff"}}),J=n(608),M=n(227),Y=n.n(M),F=n(229);function G(e){var t=Object(r.useState)({lat:42,lng:.8}),n=x()(t,2),a=n[0],i=n[1];return Object(r.useEffect)((function(){var t;t=e.adressString,H.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:F.a.from(t).then((function(e){var t=e.results[0].geometry.location;console.log(t),i(t)})).catch((function(e){return console.warn(e)}));case 1:case"end":return e.stop()}}),null,null,null,Promise)}),[e.adressString]),l.a.createElement(Y.a,{style:{position:"absolute",top:0,left:0,right:0,bottom:0},initialRegion:{latitude:a.lat,longitude:a.lng,latitudeDelta:.0922,longitudeDelta:.0421},region:{latitude:a.lat,longitude:a.lng,latitudeDelta:.0922,longitudeDelta:.0421}},l.a.createElement(Y.a.Marker,{coordinate:{latitude:a.lat,longitude:a.lng},title:e.adressString,description:"This is your location"}))}function X(e){var t=Object(r.useState)({id:3,name:"Babuschka Boi",roles:[],skills:[]}),n=x()(t,2),a=n[0],i=n[1],c=Object(r.useState)(!1),o=x()(c,2),s=o[0],u=o[1],f=Object(r.useState)(),d=x()(f,2),m=d[0],h=d[1],p=function(e){i(e),u(!s),console.log(e)};return l.a.createElement(b.a,{style:K.container},l.a.createElement("script",{src:"https://maps.googleapis.com/maps/api/js?key=<YOUR_GOOGLE_API_KEY>"}),e.modalCloseComponent,l.a.createElement(b.a,{style:{flex:1,flexDirection:"row"}},l.a.createElement(N,null,"1. Daten eingeben"),l.a.createElement(N,null,"2. Verf\xfcgbare Helfer")),l.a.createElement(b.a,{style:{flex:10,flexDirection:"row"}},l.a.createElement(b.a,{style:{flex:1}},l.a.createElement(b.a,{style:{flex:1,flexDirection:"column"}},l.a.createElement(b.a,{style:{flex:1,backgroundColor:"white",justifyContent:"center"}},l.a.createElement(b.a,{style:{flex:1,flexDirection:"row"}},l.a.createElement(b.a,{style:{flex:1}},l.a.createElement(L,{heading:"Titel",placeholder:"Titel"}),l.a.createElement(L,{heading:"Ort",placeholder:"Ort",onChangeText:h})),l.a.createElement(b.a,{style:{flex:1}},l.a.createElement(L,{heading:"Datum",placeholder:"Datum"}),l.a.createElement(b.a,{style:{flex:1,padding:5,justifyContent:"center"}},l.a.createElement(k.a,{style:{}},"Dauer vor. X Stunden")))),l.a.createElement(b.a,{style:{flex:1,flexDirection:"row",backgroundColor:"white",justifyContent:"center",alignItems:"center"}},l.a.createElement(G,{adressString:m,helpRequest:a,updateHelpRequest:p}))),l.a.createElement(b.a,{style:{flex:1,justifyContent:"center"}},l.a.createElement(k.a,null,"Placeholder")))),l.a.createElement(b.a,{style:{flex:1,flexDirection:"column"}},l.a.createElement(b.a,{style:{flex:2}},l.a.createElement(b.a,{style:{flex:3,flexDirection:"row"}},l.a.createElement(z,{helpRequest:a,render:s}),l.a.createElement(U,{helpRequest:a,setHelpRequest:i}),l.a.createElement(W,{helpRequest:a,setHelpRequest:p}))),l.a.createElement(b.a,{style:{flex:2}},l.a.createElement(b.a,{style:{flex:5,flexDirection:"row"}},l.a.createElement(b.a,{style:{flex:1,backgroundColor:"white"}},l.a.createElement(b.a,{style:{flex:1,alignContent:"center"}},l.a.createElement(k.a,{style:{alignContent:"center",fontSize:30}},"Helfer anfordern")),l.a.createElement(A,{helpRequest:a}),l.a.createElement(T.g,{onPress:function(){return alert("submit")}},l.a.createElement(J.a,{start:[0,.5],end:[1,.5],colors:["#000","red"],style:{borderRadius:5}},l.a.createElement(b.a,{style:{margin:1,backgroundColor:"white",borderRadius:5}},l.a.createElement(k.a,{style:{margin:4,paddingHorizontal:6,textAlign:"center",backgroundColor:"white",color:"#000",fontSize:30}},"Jetzt anfordern"))))))))))}F.a.init("AIzaSyC9cFDJwcroS2OcOO19SVJdYN9OQ6RYBWI");var K=i.a.create({container:{flex:1,maxWidth:1024,flexDirection:"column",backgroundColor:"white"}});function Q(e){var t=Object(r.useState)(!0),n=x()(t,2),a=n[0],i=n[1],c=function(e,t){return l.a.createElement(R.a,{onPress:t},l.a.createElement(b.a,{style:{flex:1,backgroundColor:"lightblue",padding:12,margin:16,justifyContent:"center",alignItems:"center",borderRadius:4,borderColor:"rgba(0, 0, 0, 0.1)"}},l.a.createElement(k.a,null,e)))};return l.a.createElement(b.a,{style:Z.container},l.a.createElement(b.a,{style:Z.leftContainer},e.leftContent,c("+",(function(){i(!0)})),l.a.createElement(S.a,{isVisible:a},l.a.createElement(b.a,{style:{flex:1,backgroundColor:"white",padding:22,borderRadius:4,borderColor:"rgba(0, 0, 0, 0.1)"}},l.a.createElement(X,{modalCloseComponent:c("Close",(function(){i(!1)}))})))),l.a.createElement(b.a,{style:Z.midContainer},e.midContent))}var Z=i.a.create({container:{flex:1,flexDirection:"row"},leftContainer:{flex:1,borderRightWidth:1,borderRightColor:"#00000000d3"},midContainer:{flex:4,flexDirection:"column",justifyContent:"center",alignItems:"center"},rightContainer:{flex:1}}),$=n(85);function ee(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var te=function(e){E()(a,e);var t,n=(t=a,function(){var e,n=y()(t);if(ee()){var a=y()(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return h()(this,e)});function a(e){var t;return u()(this,a),(t=n.call(this,e)).state={loading:!1,dataSource:[]},t}return d()(a,[{key:"componentDidMount",value:function(){this.loadHelpRequests()}},{key:"selectItem",value:function(e){var t=this.state.dataSource.map((function(t){return t.isSelected=t.request.id==e.item.request.id,t}));this.setState({dataSource:t}),this.props.selectItem(e.item.request)}},{key:"renderItem",value:function(e){var t=this,n=e.item.isSelected?ne.selectedItem:{};return l.a.createElement(R.a,{onPress:function(){return t.selectItem(e)}},l.a.createElement(b.a,{style:{padding:8,paddingLeft:16}},l.a.createElement(k.a,{style:n},e.item.request.name),l.a.createElement(k.a,{style:n},e.item.request.created_at)))}},{key:"render",value:function(){var e=this;return l.a.createElement($.a,{data:this.state.dataSource,renderItem:function(t){return e.renderItem(t)}})}},{key:"loadHelpRequests",value:function(){var e=this;this.setState({loading:!0}),this.props.repository.getHelpRequests().then((function(t){return e.setState({loading:!1,dataSource:t.map((function(e){return{request:e,isSelected:!1}}))})}))}}]),a}(r.Component),ne={selectedItem:{fontWeight:"bold"}},ae=n(136),re=n(135),le=n(121);function ie(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var ce=function(e){E()(a,e);var t,n=(t=a,function(){var e,n=y()(t);if(ie()){var a=y()(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return h()(this,e)});function a(e){var t;return u()(this,a),(t=n.call(this,e)).state={data:null},t}return d()(a,[{key:"setHelpRequest",value:function(e){this.setState({data:e})}}]),d()(a,[{key:"render",value:function(){var e=this.state;if(null==e||null==e.data)return l.a.createElement(b.a,{style:oe.container},l.a.createElement(k.a,{style:oe.title},"Hey! Bitte w\xe4hle links ein Hilfegesuch aus"),l.a.createElement(k.a,null,"Die Daten werden dann hier angezeigt"));var t=e.data.helpers.map((function(e){return[e.email,e.phone]}));return l.a.createElement(b.a,{style:oe.container},l.a.createElement(k.a,{style:oe.title},this.state.data.name),l.a.createElement(k.a,null,this.state.data.date_start),l.a.createElement(b.a,{style:oe.buttonContainer},l.a.createElement(ae.a,{title:"Download PDF",onPress:function(){return re.a.alert("Left button pressed")}}),l.a.createElement(b.a,{style:{width:16}}),l.a.createElement(ae.a,{title:"Download CSV",onPress:function(){return re.a.alert("Right button pressed")}})),l.a.createElement(k.a,{style:{paddingTop:16,paddingBottom:16}},"Es haben sich 4 potenzielle Helfer:innen auf dein Gesuch gemeldet"),l.a.createElement(le.d,{borderStyle:{borderWidth:1}},l.a.createElement(le.b,{data:["Name","E-Mail","Telefon"],flexArr:[1,1,1],style:oe.head,textStyle:oe.text}),l.a.createElement(le.e,{style:oe.wrapper},l.a.createElement(le.a,{data:e.data.helpers.map((function(e){return e.name})),style:oe.title,heightArr:[28,28],textStyle:oe.text}),l.a.createElement(le.c,{data:t,flexArr:[1,1],style:oe.row,textStyle:oe.text}))))}}]),a}(r.Component),oe={container:{flex:1},title:{fontSize:48,fontWeight:"bold"},buttonContainer:{flexDirection:"row"},helperListItem:{flexDirection:"row",justifyContent:"space-between"},head:{height:40},wrapper:{flexDirection:"row"},tableTitle:{flex:1,backgroundColor:"#f6f8fa"},row:{height:28},text:{textAlign:"center"}};function se(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var ue=new O,fe=function(e){E()(a,e);var t,n=(t=a,function(){var e,n=y()(t);if(se()){var a=y()(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return h()(this,e)});function a(){var e;u()(this,a);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).leftContent=l.a.createElement(te,{repository:ue,selectItem:function(t){return e.selectItem(t)}}),e.midContent=l.a.createElement(ce,{initialState:{data:null},ref:function(t){return e.details=t}}),e}return d()(a,[{key:"selectItem",value:function(e){this.details.setHelpRequest(e)}},{key:"render",value:function(){return l.a.createElement(Q,{leftContent:this.leftContent,midContent:this.midContent})}}]),a}(r.Component),de=Object(c.a)({"Medstaff+":fe}),me=Object(o.createBrowserApp)(de);function he(){return l.a.createElement(me,null)}n.d(t,"a",(function(){return he}));i.a.create({container:{flex:1,flexDirection:"row"},leftContainer:{flex:1},midContainer:{flex:2},rightContainer:{flex:1}})},323:function(e,t,n){n(324),e.exports=n(588)},324:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/helfer-app/expo-service-worker.js",{scope:"/helfer-app/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))}},[[323,1,2]]]);
//# sourceMappingURL=app.6f71eae6.chunk.js.map