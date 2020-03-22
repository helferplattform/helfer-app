(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{323:function(e,t,n){"use strict";var r,a=n(0),l=n.n(a),i=n(4),c=n(612),o=n(307),s=n(7),u=n.n(s),f=n(6),d=n.n(f),m=n(9),h=n.n(m),p=n(3),y=n.n(p),g=n(8),E=n.n(g),v=n(24),x=n.n(v),k=n(14),b=n(2),R=n(67),C=n(315),w=n.n(C),S=n(43),H=n.n(S),q=n(16),D=n.n(q),j=n(308),I=n.n(j),O=function(){function e(t=new P){u()(this,e),this.service=t}return d()(e,[{key:"createHelper",value:function(e){return this.service.createHelper(e)}},{key:"createHelpRequest",value:function(e){return this.service.createHelpRequest(e)}},{key:"findHelpers",value:function(e){return this.service.findHelpers(e)}},{key:"notifyHelpers",value:function(e){return this.service.notifyHelpers(e)}},{key:"getHelpRequests",value:function(){return this.service.getHelpRequests()}}]),e}();!function(e){e.Helper="helper",e.HelpRequest="HelpRequest"}(r||(r={}));var P=function(){function e(){u()(this,e)}return d()(e,[{key:"createHelper",value:function(e){return this.post(r.Helper,e)}},{key:"createHelpRequest",value:function(e){return this.post(r.HelpRequest,e)}},{key:"findHelpers",value:function(e){var t=52.5186,n=13.3761,r=Math.floor(1e4*e.latitude)/1e4,a=Math.floor(1e4*e.longitude)/1e4,l=t==r&&n==a?12:7;return Promise.resolve({count:l,skills:[{skill:{id:4,name:"Erste Hilfe"},count:2},{skill:{id:2,name:"Altenpflege"},count:1}]})}},{key:"notifyHelpers",value:function(e){return Promise.resolve()}},{key:"mockHelper",value:function(e){return{id:e.integer({min:1,max:1e5}),name:e.name(),email:e.email(),phone:e.phone({country:"uk",mobile:!0}),postcode:e.postcode()}}},{key:"mockHelpers",value:function(){for(var e=new I.a,t=e.integer({min:2,max:20}),n=new Array(t),r=0;r<t;++r)n[r]=this.mockHelper(e);return n}},{key:"getHelpRequests",value:function(){var e=[{id:1,name:"Am Tannenbusch 13",created_at:"22.03.2020 17:12 Uhr",date_start:"23.03.2020 14:00 Uhr",roles:[],skills:[],helpers:this.mockHelpers()},{id:2,name:"Rapsacker 27",created_at:"22.03.2020 17:12 Uhr",date_start:"23.03.2020 14:00 Uhr",roles:[],skills:[],helpers:this.mockHelpers()},{id:3,name:"Am Teich 4",created_at:"22.03.2020 17:12 Uhr",date_start:"23.03.2020 14:00 Uhr",roles:[],skills:[],helpers:this.mockHelpers()},{id:4,name:"Unter den Linden 27",created_at:"22.03.2020 17:12 Uhr",date_start:"23.03.2020 14:00 Uhr",roles:[],skills:[],helpers:this.mockHelpers()}];return this.get(r.HelpRequest,e)}},{key:"get",value:function(e,t){return Promise.resolve(t)}},{key:"post",value:function(e,t){var n=D()({},t);return n.id=1,Promise.resolve(n)}}]),e}();P.HOST="http://127.0.0.1/",P.ENDPOINT_PREFIX="api/v1/";var z=O;function A(e){var t=Object(a.useState)(0),n=x()(t,2),r=n[0],i=n[1],c=Object(a.useState)(e.helpRequest),o=x()(c,2),s=o[0],u=(o[1],new z);return Object(a.useEffect)((function(){!function(){var t,n;H.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.helpRequest,r.next=3,H.a.awrap(u.findHelpers({longitude:0,latitude:0,requiredSkills:t.skills}));case 3:n=r.sent,void 0===t.skills||0==t.skills.length?i(n.count):t.skills.length>=2?i(1):i(2);case 5:case"end":return r.stop()}}),null,null,null,Promise)}()}),[s.skills]),l.a.createElement(k.a,{style:{fontSize:e.fontSize}},r)}function _(e){return l.a.createElement(b.a,{style:{flex:1,justifyContent:"flex-start",alignItems:"center",padding:5}},l.a.createElement(b.a,{style:{backgroundColor:"grey",width:100,height:100,borderRadius:50,borderWidth:3,justifyContent:"center",alignItems:"center"}},l.a.createElement(A,{helpRequest:e.helpRequest,render:e.render,fontSize:75})))}var T=n(41);function U(e){return l.a.createElement(k.a,{style:{flex:3}},"Melde dich jetzt bei"," ",l.a.createElement(A,{helpRequest:e.helpRequest,fontSize:30})," ","potentiellen Helfern in deiner N\xe4he. Beschreibe in deiner Nachricht den Einsatz m\xf6glichst genau.")}var W=n(110);function N(e){var t=Object(a.useState)([{role:{id:0,name:"Pfleger*in"},checked:!1},{role:{id:1,name:"Reinigungskraft"},checked:!1},{role:{id:2,name:"Sanit\xe4ter"},checked:!1},{role:{id:3,name:"Noch mehr"},checked:!1}]),n=x()(t,2),r=n[0],i=n[1],c=function(){var t=r.filter((function(e){return!0===e.checked})).map((function(e,t){return e.role})),n=e.helpRequest;n.roles=t,e.setHelpRequest(n)};return l.a.createElement(b.a,{style:{flex:1,backgroundColor:"white"}},l.a.createElement(b.a,{style:{flex:1,justifyContent:"flex-start",alignItems:"flex-start"}},l.a.createElement(k.a,null,"Rollen")),l.a.createElement(b.a,{style:{flex:10}},l.a.createElement(T.b,{data:r,renderItem:function(e){var t=e.item;return l.a.createElement(b.a,{style:{flex:1,flexDirection:"row",padding:5}},l.a.createElement(W.a,{value:t.checked,style:{marginRight:5},onValueChange:function(e){!function(e,t){var n=r.slice();n[e.role.id].checked=t,i(n),c()}(t,e)}}),l.a.createElement(k.a,null,t.role.name))}})))}function B(e){var t=Object(a.useState)([{skill:{id:0,name:"Erste Hilfe"},checked:!1},{skill:{id:1,name:"Altenpflege"},checked:!1},{skill:{id:2,name:"Noch mehr"},checked:!1}]),n=x()(t,2),r=n[0],i=n[1],c=function(){var t=r.filter((function(e){return!0===e.checked})).map((function(e,t){return e.skill})),n=e.helpRequest;n.skills=t,e.setHelpRequest(n)};return l.a.createElement(b.a,{style:{flex:1,backgroundColor:"white"}},l.a.createElement(b.a,{style:{flex:1,justifyContent:"flex-start",alignItems:"flex-start"}},l.a.createElement(k.a,null,"Skills")),l.a.createElement(b.a,{style:{flex:10}},l.a.createElement(T.b,{data:r,renderItem:function(e){var t=e.item;return l.a.createElement(b.a,{style:{flex:1,flexDirection:"row",padding:5}},l.a.createElement(W.a,{value:t.checked,style:{marginRight:5},onValueChange:function(e){!function(e,t){var n=r.slice();n[e.skill.id].checked=t,i(n),c()}(t,e)}}),l.a.createElement(k.a,null,t.skill.name))}})))}function L(e){return l.a.createElement(b.a,{style:{flex:1,justifyContent:"center",alignItems:"flex-start"}},l.a.createElement(k.a,{style:{fontSize:30}},e.children))}var M=n(39);function V(e){return l.a.createElement(b.a,{style:J.container},l.a.createElement(b.a,{style:{flex:1}},l.a.createElement(k.a,{style:{flex:1}},e.heading)),l.a.createElement(b.a,{style:{flex:1}},l.a.createElement(M.a,{onChangeText:function(t){return e.onChangeText(t)},style:{borderRadius:2,borderWidth:3,padding:5},placeholder:e.placeholder})))}var J=i.a.create({container:{flex:1,padding:5,flexDirection:"column",backgroundColor:"#fff"}}),F=n(613),Y=n(227),G=n.n(Y),X=n(229);function K(e){var t=Object(a.useState)({lat:42,lng:.8}),n=x()(t,2),r=n[0],i=n[1];return Object(a.useEffect)((function(){var t;t=e.adressString,H.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:X.a.from(t).then((function(e){var t=e.results[0].geometry.location;console.log(t),i(t)})).catch((function(e){return console.warn(e)}));case 1:case"end":return e.stop()}}),null,null,null,Promise)}),[e.adressString]),l.a.createElement(G.a,{style:{position:"absolute",top:0,left:0,right:0,bottom:0},initialRegion:{latitude:r.lat,longitude:r.lng,latitudeDelta:.0922,longitudeDelta:.0421},region:{latitude:r.lat,longitude:r.lng,latitudeDelta:.0922,longitudeDelta:.0421}},l.a.createElement(G.a.Marker,{coordinate:{latitude:r.lat,longitude:r.lng},title:e.adressString,description:"This is your location"}))}function Q(e){var t=Object(a.useState)({id:3,name:"Babuschka Boi",roles:[],skills:[]}),n=x()(t,2),r=n[0],i=n[1],c=Object(a.useState)(!1),o=x()(c,2),s=o[0],u=o[1],f=Object(a.useState)(),d=x()(f,2),m=d[0],h=d[1],p=function(e){i(e),u(!s),console.log(e)};return l.a.createElement(b.a,{style:Z.container},l.a.createElement("script",{src:"https://maps.googleapis.com/maps/api/js?key=<YOUR_GOOGLE_API_KEY>"}),e.modalCloseComponent,l.a.createElement(b.a,{style:{flex:1,flexDirection:"row"}},l.a.createElement(L,null,"1. Daten eingeben"),l.a.createElement(L,null,"2. Verf\xfcgbare Helfer")),l.a.createElement(b.a,{style:{flex:10,flexDirection:"row"}},l.a.createElement(b.a,{style:{flex:1}},l.a.createElement(b.a,{style:{flex:1,flexDirection:"column"}},l.a.createElement(b.a,{style:{flex:1,backgroundColor:"white",justifyContent:"center"}},l.a.createElement(b.a,{style:{flex:1,flexDirection:"row"}},l.a.createElement(b.a,{style:{flex:1}},l.a.createElement(V,{heading:"Titel",placeholder:"Titel"}),l.a.createElement(V,{heading:"Ort",placeholder:"Ort",onChangeText:h})),l.a.createElement(b.a,{style:{flex:1}},l.a.createElement(V,{heading:"Datum",placeholder:"Datum"}),l.a.createElement(b.a,{style:{flex:1,padding:5,justifyContent:"center"}},l.a.createElement(k.a,{style:{}},"Dauer vor. X Stunden")))),l.a.createElement(b.a,{style:{flex:1,flexDirection:"row",backgroundColor:"white",justifyContent:"center",alignItems:"center"}},l.a.createElement(K,{adressString:m,helpRequest:r,updateHelpRequest:p}))),l.a.createElement(b.a,{style:{flex:1,justifyContent:"center"}},l.a.createElement(k.a,null,"Placeholder")))),l.a.createElement(b.a,{style:{flex:1,flexDirection:"column"}},l.a.createElement(b.a,{style:{flex:2}},l.a.createElement(b.a,{style:{flex:3,flexDirection:"row"}},l.a.createElement(_,{helpRequest:r,render:s}),l.a.createElement(N,{helpRequest:r,setHelpRequest:i}),l.a.createElement(B,{helpRequest:r,setHelpRequest:p}))),l.a.createElement(b.a,{style:{flex:2}},l.a.createElement(b.a,{style:{flex:5,flexDirection:"row"}},l.a.createElement(b.a,{style:{flex:1,backgroundColor:"white"}},l.a.createElement(b.a,{style:{flex:1,alignContent:"center"}},l.a.createElement(k.a,{style:{alignContent:"center",fontSize:30}},"Helfer anfordern")),l.a.createElement(U,{helpRequest:r}),l.a.createElement(T.g,{onPress:function(){return alert("submit")}},l.a.createElement(F.a,{start:[0,.5],end:[1,.5],colors:["#000","red"],style:{borderRadius:5}},l.a.createElement(b.a,{style:{margin:1,backgroundColor:"white",borderRadius:5}},l.a.createElement(k.a,{style:{margin:4,paddingHorizontal:6,textAlign:"center",backgroundColor:"white",color:"#000",fontSize:30}},"Jetzt anfordern"))))))))))}X.a.init("AIzaSyC9cFDJwcroS2OcOO19SVJdYN9OQ6RYBWI");var Z=i.a.create({container:{flex:1,maxWidth:1024,flexDirection:"column",backgroundColor:"white"}});function $(e){var t=Object(a.useState)(!0),n=x()(t,2),r=n[0],i=n[1],c=function(e,t){return l.a.createElement(R.a,{onPress:t},l.a.createElement(b.a,{style:{flex:1,backgroundColor:"lightblue",padding:12,margin:16,justifyContent:"center",alignItems:"center",borderRadius:4,borderColor:"rgba(0, 0, 0, 0.1)"}},l.a.createElement(k.a,null,e)))};return l.a.createElement(b.a,{style:ee.container},l.a.createElement(b.a,{style:ee.leftContainer},e.leftContent,c("+",(function(){i(!0)})),l.a.createElement(w.a,{isVisible:r},l.a.createElement(b.a,{style:{flex:1,backgroundColor:"white",padding:22,borderRadius:4,borderColor:"rgba(0, 0, 0, 0.1)"}},l.a.createElement(Q,{modalCloseComponent:c("Close",(function(){i(!1)}))})))),l.a.createElement(b.a,{style:ee.midContainer},e.midContent))}var ee=i.a.create({container:{flex:1,flexDirection:"row"},leftContainer:{flex:1,borderRightWidth:1,borderRightColor:"#00000000d3"},midContainer:{flex:4,flexDirection:"column"},rightContainer:{flex:1}}),te=n(85);function ne(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var re=function(e){E()(r,e);var t,n=(t=r,function(){var e,n=y()(t);if(ne()){var r=y()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return h()(this,e)});function r(e){var t;return u()(this,r),(t=n.call(this,e)).state={loading:!1,dataSource:[]},t}return d()(r,[{key:"componentDidMount",value:function(){this.loadHelpRequests()}},{key:"selectItem",value:function(e){var t=this.state.dataSource.map((function(t){return t.isSelected=t.request.id==e.item.request.id,t}));this.setState({dataSource:t}),this.props.selectItem(e.item.request)}},{key:"renderItem",value:function(e){var t=this,n=e.item.isSelected?ae.selectedItem:{};return l.a.createElement(R.a,{onPress:function(){return t.selectItem(e)}},l.a.createElement(b.a,{style:{padding:8,paddingLeft:16}},l.a.createElement(k.a,{style:n},e.item.request.name),l.a.createElement(k.a,{style:n},e.item.request.created_at)))}},{key:"render",value:function(){var e=this;return l.a.createElement(te.a,{data:this.state.dataSource,renderItem:function(t){return e.renderItem(t)}})}},{key:"loadHelpRequests",value:function(){var e=this;this.setState({loading:!0}),this.props.repository.getHelpRequests().then((function(t){return e.setState({loading:!1,dataSource:t.map((function(e){return{request:e,isSelected:!1}}))})}))}}]),r}(a.Component),ae={selectedItem:{fontWeight:"bold"}},le=n(136),ie=n(135),ce=n(121);function oe(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var se=function(e){E()(r,e);var t,n=(t=r,function(){var e,n=y()(t);if(oe()){var r=y()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return h()(this,e)});function r(e){var t;return u()(this,r),(t=n.call(this,e)).state={data:null},t}return d()(r,[{key:"setHelpRequest",value:function(e){this.setState({data:e})}}]),d()(r,[{key:"render",value:function(){var e=this.state;if(null==e||null==e.data)return l.a.createElement(b.a,{style:ue.container},l.a.createElement(k.a,{style:ue.title},"Hey! Bitte w\xe4hle links ein Hilfegesuch aus"),l.a.createElement(k.a,null,"Die Daten werden dann hier angezeigt"));var t=e.data.helpers.map((function(e){return[e.email,e.phone]}));return l.a.createElement(b.a,{style:ue.container},l.a.createElement(k.a,{style:ue.title},this.state.data.name),l.a.createElement(k.a,null,this.state.data.date_start),l.a.createElement(b.a,{style:ue.buttonContainer},l.a.createElement(le.a,{title:"Download PDF",onPress:function(){return ie.a.alert("Left button pressed")}}),l.a.createElement(b.a,{style:{width:16}}),l.a.createElement(le.a,{title:"Download CSV",onPress:function(){return ie.a.alert("Right button pressed")}})),l.a.createElement(k.a,{style:{paddingTop:16,paddingBottom:16}},"Es haben sich ",e.data.helpers.length," potenzielle Helfer:innen auf dein Gesuch gemeldet"),l.a.createElement(ce.d,{borderStyle:{borderWidth:1}},l.a.createElement(ce.b,{data:["Name","E-Mail","Telefon"],flexArr:[1,1,1],style:ue.head,textStyle:ue.text}),l.a.createElement(ce.e,{style:ue.wrapper},l.a.createElement(ce.a,{data:e.data.helpers.map((function(e){return e.name})),style:ue.title,heightArr:[28,28],textStyle:ue.text}),l.a.createElement(ce.c,{data:t,flexArr:[1,1],style:ue.row,textStyle:ue.text}))))}}]),r}(a.Component),ue={container:{flex:1,paddingLeft:16,paddingRight:16},title:{fontSize:48,fontWeight:"bold"},buttonContainer:{flexDirection:"row"},helperListItem:{flexDirection:"row",justifyContent:"space-between"},head:{height:40},wrapper:{flexDirection:"row"},tableTitle:{flex:1,backgroundColor:"#f6f8fa"},row:{height:28},text:{textAlign:"center"}};function fe(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var de=new z,me=function(e){E()(r,e);var t,n=(t=r,function(){var e,n=y()(t);if(fe()){var r=y()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return h()(this,e)});function r(){var e;u()(this,r);for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return(e=n.call.apply(n,[this].concat(a))).leftContent=l.a.createElement(re,{repository:de,selectItem:function(t){return e.selectItem(t)}}),e.midContent=l.a.createElement(se,{initialState:{data:null},ref:function(t){return e.details=t}}),e}return d()(r,[{key:"selectItem",value:function(e){this.details.setHelpRequest(e)}},{key:"render",value:function(){return l.a.createElement($,{leftContent:this.leftContent,midContent:this.midContent})}}]),r}(a.Component),he=Object(c.a)({"Medstaff+":me}),pe=Object(o.createBrowserApp)(he);function ye(){return l.a.createElement(pe,null)}n.d(t,"a",(function(){return ye}));i.a.create({container:{flex:1,flexDirection:"row"},leftContainer:{flex:1},midContainer:{flex:2},rightContainer:{flex:1}})},324:function(e,t,n){n(325),e.exports=n(593)},325:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/helfer-app/expo-service-worker.js",{scope:"/helfer-app/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))}},[[324,1,2]]]);
//# sourceMappingURL=app.c212cafe.chunk.js.map