(this.webpackJsonptemplate_react=this.webpackJsonptemplate_react||[]).push([[0],{55:function(t,e,r){},56:function(t,e,r){},64:function(t,e,r){"use strict";r.r(e);var n=r(2),a=r.n(n),i=r(39),c=r.n(i),s=(r(55),r(56),r(4)),o=r.n(s),u=r(14),l=r(6),j=r(7),p=r(44),x=r(43),v=r(88),f=r(86),b=r(90),h=r(87),d=r(91),O=r(92),m=r(93),y=r(89),k=r(24),g=r(26),w=function(){function t(){Object(l.a)(this,t)}return Object(j.a)(t,null,[{key:"get",value:function(){var t=Object(u.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"/railway_lk_app/data/railway_lk.train_list.tsv",t.next=3,g.b.tsv("/railway_lk_app/data/railway_lk.train_list.tsv");case 3:return e=t.sent,t.abrupt("return",e.map((function(t){return{trainNo:t.train_no,name:t.name}})));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}]),t}(),A=function(){function t(){Object(l.a)(this,t)}return Object(j.a)(t,null,[{key:"get",value:function(){var t=Object(u.a)(o.a.mark((function t(e){var r,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="/railway_lk_app/data/railway_lk.train.".concat(e,".stop_list.tsv"),t.next=3,g.b.tsv(r);case 3:return n=t.sent,t.abrupt("return",n.map((function(t){return{stationName:t.station_name,timeArrive:parseInt(t.time_arrive),timeDepart:parseInt(t.time_depart)}})));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}]),t}();function D(){return(g.a.getUnixTime()+19800)%86400}var N=function(){function t(){Object(l.a)(this,t)}return Object(j.a)(t,null,[{key:"getTrainListExtended",value:function(){var e=Object(u.a)(o.a.mark((function e(r){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.get();case 2:return n=e.sent,e.next=5,Promise.all(n.map(function(){var t=Object(u.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.get(e.trainNo);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 5:return a=e.sent,e.abrupt("return",n.map((function(e,r){var n=a[r],i=t.getCurrentStops(n),c=Object(k.a)(i,2),s=c[0],o=c[1];return Object.assign({},e,{stopList:n,stopLastDepart:s,stopNextArrive:o})})).filter((function(t){return t.stopLastDepart&&t.stopNextArrive&&t.stopNextArrive.stationName.includes(r)})).sort((function(t,e){return t.stopNextArrive.timeDepart-e.stopNextArrive.timeDepart})));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCurrentStops",value:function(t){var e=D();return t.reduce((function(r,n,a){var i=Object(k.a)(r,2),c=i[0],s=i[1];if(a>0){var o=t[a-1],u=t[a];if(o.timeArrive<=e+60&&u.timeDepart>=e)return[o,u]}return[c,s]}),[void 0,void 0])}}]),t}(),_=r(94),L=r(95),S=r(0),I="white",C="black",T="middle",W=300;function F(t){var e=t.t;if(!e)return"";var r=parseInt(e/3600),n=parseInt(e/60)%60;return"".concat(String(r).padStart(2,"0"),":").concat(String(n).padStart(2,"0"))}function E(t){var e=t.x,r=t.y,n=t.width,a=t.color;return Object(S.jsx)("line",{x1:e,y1:r,x2:e+n,y2:r,fill:null,stroke:a,strokeWidth:4})}function M(t){var e=t.x,r=t.y,n=t.width,a=t.color;return Object(S.jsx)("line",{x1:e,y1:r,x2:e+n,y2:r,fill:null,stroke:a,strokeWidth:4,strokeDasharray:"".concat(5,",").concat(5)})}function P(t){var e=t.x,r=t.y;return Object(S.jsx)("g",{children:Object(S.jsx)("circle",{cx:e,cy:r,r:6,fill:I,stroke:"black",strokeWidth:3,strokeOpacity:.5})})}function B(t){var e=t.x,r=t.y,n=t.stop,a=t.color,i=n.stationName,c=n.timeArrive,s=n.timeDepart;return Object(S.jsxs)("g",{children:[Object(S.jsx)("circle",{cx:e,cy:r,r:6,fill:I,stroke:a,strokeWidth:3}),Object(S.jsx)("text",{x:e,y:r+24,fill:C,stroke:null,textAnchor:T,fontWeight:"bold",children:i}),Object(S.jsx)("text",{x:e,y:r+42,fill:C,stroke:null,textAnchor:T,children:Object(S.jsx)(F,{t:c})}),Object(S.jsx)("text",{x:e,y:r+60,fill:C,stroke:null,textAnchor:T,children:Object(S.jsx)(F,{t:s})})]})}function J(t){var e=t.trainNo,r=t.stopList;if(r.length<4)return"-";var n=50,a=30,i=e,c=N.getCurrentStops(r),s=Object(k.a)(c,2),o=s[0],u=s[1];if(!o||!o)return"-";var l,j=D(),p=u.timeDepart-j;l=p<0?"gray":p<120?"red":p<600?"orange":"green";var x=0;j<u.timeArrive?x=(u.timeArrive-j)/(u.timeArrive-o.timeDepart):j>u.timeDepart&&(x=-(j-u.timeDepart)/(u.timeArrive-o.timeDepart));var v=n+W*(2-x);return Object(S.jsxs)("svg",{height:100,width:1e3,color:l,children:[Object(S.jsx)(M,{x:n,y:a,width:W,color:l}),Object(S.jsx)(E,{x:350,y:a,width:W,color:l}),Object(S.jsx)(M,{x:650,y:a,width:W,color:l}),Object(S.jsx)(B,{x:n,y:a,stop:r[0],color:l},"station-".concat(i,"-0")),Object(S.jsx)(B,{x:350,y:a,stop:o,color:l},"station-".concat(i,"-lastDepart")),Object(S.jsx)(B,{x:650,y:a,stop:u,color:l},"station-".concat(i,"-nextArrive")),Object(S.jsx)(B,{x:950,y:a,stop:r.slice(-1)[0],color:l},"station-".concat(i,"-l0")),Object(S.jsx)(P,{x:v,y:a})]})}function U(t){var e=t.trainNo,r=t.name;return Object(S.jsxs)(f.a,{children:[Object(S.jsx)(h.a,{variant:"caption"}),e,Object(S.jsx)(h.a,{variant:"subtitle1",children:r})]})}function G(t){var e,r=t.train,n=r.trainNo,a=r.name,i=r.stopList,c=r.stopNextArrive,s=D();if(c.timeArrive>s){var o=c.timeArrive-s;e=Object(S.jsxs)("div",{children:["Arriving at ",Object(S.jsx)("div",{children:Object(S.jsx)("strong",{children:c.stationName})})," in ",o,"s"]})}else if(c.timeDepart>s){var u=c.timeDepart-s;e=Object(S.jsxs)("div",{children:["Departing ",Object(S.jsx)("div",{children:Object(S.jsx)("strong",{children:c.stationName})})," in ",u,"s"]})}return Object(S.jsxs)(_.a,{children:[Object(S.jsx)(L.a,{children:Object(S.jsx)(U,{trainNo:n,name:a})}),Object(S.jsx)(L.a,{children:e}),Object(S.jsx)(L.a,{children:Object(S.jsx)(J,{trainNo:n,stopList:i})})]})}var R=function(t){Object(p.a)(r,t);var e=Object(x.a)(r);function r(t){var n;return Object(l.a)(this,r),(n=e.call(this,t)).state={filterText:"M",trainInfoList:[]},n}return Object(j.a)(r,[{key:"componentDidMount",value:function(){var t=Object(u.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=this.state.filterText,this.interval=setInterval(Object(u.a)(o.a.mark((function t(){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.getTrainListExtended(e);case 2:r=t.sent,this.setState({time:Date.now(),trainList:r});case 4:case"end":return t.stop()}}),t,this)}))).bind(this),1e3);case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var t=this.state,e=t.trainList,r=t.time;if(!e)return"Loading...";var n="table-".concat(r);return Object(S.jsxs)(f.a,{sx:{flexGrow:1},children:[Object(S.jsx)(v.a,{position:"static",color:"transparent",children:Object(S.jsx)(b.a,{children:Object(S.jsx)(h.a,{variant:"h6",children:"\ud83c\uddf1\ud83c\uddf0 Railways"})})}),Object(S.jsx)(d.a,{component:y.a,children:Object(S.jsx)(O.a,{sx:{minWidth:650},"aria-label":"simple table",children:Object(S.jsx)(m.a,{children:e.map((function(t){return Object(S.jsx)(G,{train:t},"train-info-".concat(t.trainNo))}))},n)})})]})}}]),r}(n.Component);var q=function(){return Object(S.jsx)(R,{})},z=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,96)).then((function(e){var r=e.getCLS,n=e.getFID,a=e.getFCP,i=e.getLCP,c=e.getTTFB;r(t),n(t),a(t),i(t),c(t)}))};c.a.render(Object(S.jsx)(a.a.StrictMode,{children:Object(S.jsx)(q,{})}),document.getElementById("root")),z()}},[[64,1,2]]]);
//# sourceMappingURL=main.50692c18.chunk.js.map