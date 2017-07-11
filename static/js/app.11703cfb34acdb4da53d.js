webpackJsonp([1],Array(36).concat([function(t,e,n){"use strict";var a=n(6),s=n(134),r=n(122),i=n.n(r),o=n(121),l=n.n(o),u=n(119),d=n.n(u),c=n(116),p=n.n(c);a.default.use(s.a),e.a=new s.a({base:"/technology-radar-ui",mode:"history",routes:[{path:"/",name:"HomePage",component:d.a},{path:"/:spreadsheetId",name:"RadarHomePage",component:l.a,props:!0},{path:"/:spreadsheetId/:snapshotId",name:"SnapshotPage",component:i.a,props:!0},{path:"/:spreadsheetId/blip/:blipId",name:"BlipPage",component:p.a,props:!0}]})},function(t,e,n){"use strict";var a=n(6),s=n(5),r=n(45),i=n(46);a.default.use(s.b);var o={spreadsheetId:null,radarDetails:{tittle:"Technology Radar"},loaders:{},loadersBlip:null,blipDetails:{},snapshotsPanel:{isOpen:!0},detailsPanel:{isOpen:!1},currentSnapshot:{},snapshots:null,allBlips:[]};e.a=new s.b.Store({state:o,actions:r,mutations:i})},function(t,e,n){function a(t){n(111)}var s=n(0)(n(47),n(130),a,null,null);t.exports=s.exports},,,,function(t,e,n){"use strict";n.d(e,"a",function(){return v});var a=n(65),s=n.n(a),r=n(66),i=n.n(r),o=n(60),l=n.n(o),u=n(62),d=n.n(u),c=n(63),p=n.n(c),f=n(64),h=n.n(f),m=n(104),_=(n.n(m),["#537D8D","#4FB286","#918B76","#595959"]),g=3.14159,v=function(){function t(e,n,a){return p()(this,t),this.chartInit(e,n,a),e}return h()(t,[{key:"drawChart",value:function(t,e,n){console.log("raw data",e.items.filter(function(t){return!!t.history}));var a=m.select(t),s=this.getConfig(a,e.items,e.statuses,n);if(!s)return console.warn("No data to generate radar.",e),!1;var r=a.append("g").attr("transform","translate("+s.center.x+", "+s.center.y+")");this.drawLegend(r,e,s),this.drawItemsLines(r,e,s),this.drawItemLabels(r,e.items,s),this.drawAreaLebels(r,e,s),this.drawItems(r,e,s)}},{key:"drawItemLabels",value:function(t,e,n){var a=this,s=t.select("g.itemsLabels").empty()?t.append("g"):t.select("g.itemsLabels"),r=m.arc().outerRadius(n.radiusMax).innerRadius(n.radiusMax).startAngle(function(t){return n.scaleRadialPosition(t)}).endAngle(function(t){return n.scaleRadialPosition(t)});s.selectAll(".itemLabel").data(e).enter().append("text").attr("class","itemLabel").attr("alignment-baseline","middle").attr("transform",function(t,e){var s=n.scaleRadialPosition(e);return"translate("+r.centroid(e)[0]+", "+r.centroid(e)[1]+") rotate("+(a.rad2deg(s)-90)+") rotate("+(s>g?-180:0)+")"}).attr("text-anchor",function(t,e){return n.scaleRadialPosition(e)<=g?"start":"end"}).on("click",n.clickHandler).text(function(t){return(t._isNew?"* ":"")+" "+t.name})}},{key:"drawAreaLebels",value:function(t,e,n){var a=t.select("g.areaLabels").empty()?t.append("g"):t.select("g.areaLabels"),s=d()(e.areas).map(function(t){return l()(e.areas[t],{name:t})}).map(function(t,e,a){return t.startAngle=n.scaleRadialPosition(a.reduce(function(t,n,a){return a<e?t+n.count:t},0)),t.endAngle=n.scaleRadialPosition(a.reduce(function(t,n,a){return a<e?t+n.count:t},-1)+t.count),t}),r=m.arc().innerRadius(n.radiusMin-23).outerRadius(n.radiusMin-20).startAngle(function(t){return t.startAngle}).endAngle(function(t){return t.endAngle});a.selectAll(".areaLine").data(s).enter().append("path").attr("class","areaLine").attr("fill",function(t){return t.color}).attr("d",r);var i=n.radiusMin-21.5;a.selectAll(".areaLabelArc").data(s).enter().append("path").attr("id",function(t,e){return"areaLabelPath_"+e}).attr("class","areaLabelArc").attr("d",function(t,e){var a=t.startAngle-n.baseAngle,s=t.endAngle-n.baseAngle,r=(t.startAngle+t.endAngle)/2,o=[i*Math.cos(a),i*Math.sin(a)],l=[i*Math.cos(s),i*Math.sin(s)];return r<g/2||r>1.5*g?"M "+o[0]+", "+o[1]+" A "+i+", "+i+" 0 0 1 "+l[0]+", "+l[1]:"M "+l[0]+", "+l[1]+" A "+i+", "+i+" 0 0 0 "+o[0]+", "+o[1]}),a.selectAll(".areaLabelDebug").data(s).enter().append("text").attr("class",function(t,e){return"areaLabelDebug #areaLabel_"+e}).attr("x",0).attr("dy",5).attr("text-anchor","middle").append("textPath").attr("xlink:href",function(t,e){return"#areaLabelPath_"+e}).attr("startOffset","50%").text(function(t){return t.name});var o=n.radiusMin-21.5+15,u=n.radiusMin-21.5-15,c=m.selectAll(".areaLabelDebug").nodes().map(function(t,e){var n=t.getComputedTextLength(),a=(s[e].startAngle+s[e].endAngle)/2,r=s[e].startAngle,o=s[e].endAngle,l=2*g*i,u=n/2/l*2*g;return{color:s[e].color,startAngle:r,endAngle:o,midAngle:a,offsetAngle:u,offsetSide:.03}});a.selectAll(".areaLabelTag").data(c).enter().insert("path").attr("fill",function(t){return t.color}).attr("stroke",function(t){return t.color}).attr("stroke-width",3).attr("class","areaLabelTag").attr("d",function(t,e){var a=[o*Math.cos(t.midAngle-n.baseAngle-t.offsetAngle),o*Math.sin(t.midAngle-n.baseAngle-t.offsetAngle)],s=[o*Math.cos(t.midAngle-n.baseAngle+t.offsetAngle),o*Math.sin(t.midAngle-n.baseAngle+t.offsetAngle)],r=[i*Math.cos(t.midAngle-n.baseAngle+t.offsetAngle+t.offsetSide),i*Math.sin(t.midAngle-n.baseAngle+t.offsetAngle+t.offsetSide)],l=[u*Math.cos(t.midAngle-n.baseAngle+t.offsetAngle),u*Math.sin(t.midAngle-n.baseAngle+t.offsetAngle)],d=[u*Math.cos(t.midAngle-n.baseAngle-t.offsetAngle),u*Math.sin(t.midAngle-n.baseAngle-t.offsetAngle)],c=[i*Math.cos(t.midAngle-n.baseAngle-t.offsetAngle-t.offsetSide),i*Math.sin(t.midAngle-n.baseAngle-t.offsetAngle-t.offsetSide)];return"\n        M "+a[0]+", "+a[1]+" A "+o+", "+o+" 0 0 1 "+s[0]+", "+s[1]+" L "+r[0]+", "+r[1]+" L "+l[0]+", "+l[1]+" A "+u+", "+u+" 0 0 0 "+d[0]+",\n"+d[1]+" L "+c[0]+", "+c[1]+" L "+a[0]+", "+a[1]}),a.selectAll(".areaLabelDebug").remove(),a.selectAll(".areaLabel").data(s).enter().append("text").attr("class",function(t,e){return"areaLabel #areaLabel_"+e}).attr("x",0).attr("dy",5).attr("text-anchor","middle").append("textPath").attr("xlink:href",function(t,e){return"#areaLabelPath_"+e}).attr("startOffset","50%").text(function(t){return t.name})}},{key:"drawItemsLines",value:function(t,e,n){var a=t.select("g.itemsLines").empty()?t.append("g"):t.select("g.itemsLines"),s=e.items.map(function(t){var e=n.scaleRadialPositionWithBaseShift(t._pos);return[[n.radiusMin*Math.cos(e),n.radiusMin*Math.sin(e)],[n.radiusMaxLine*Math.cos(e),n.radiusMaxLine*Math.sin(e)]]}),r=m.line().x(function(t){return t[0]}).y(function(t){return t[1]});a.selectAll(".itemLine").data(s).enter().append("path").attr("class","itemLine").attr("fill","none").attr("stroke","none").attr("stroke-width",.5).attr("stroke-dasharray","3 5").attr("d",r).transition().delay(function(t,e){return 10*e}).attr("stroke",n.colors.lineLight)}},{key:"drawLegend",value:function(t,e,n){var a=d()(n.statuses).map(function(t,e){return{idx:e,name:t,step:n.statuses[t]}}),s=function(t){var e=n.radiusMaxLine-(t.step+.125)*(n.radiusMaxLine-n.radiusMin-n.buffer),a=n.radiusMaxLine-(t.step-.125)*(n.radiusMaxLine-n.radiusMin-n.buffer);return m.arc().innerRadius(e+2).outerRadius(a-2).cornerRadius(10).startAngle(-(2*g-n.angleEnd)-n.angleStep/2).endAngle(n.angleStart-n.angleStep/2)()},r=function(t){var e=n.radiusMaxLine-t.step*(n.radiusMaxLine-n.radiusMin-n.buffer);return m.arc().innerRadius(e).outerRadius(e+1).startAngle(2*g-n.angleEnd-n.angleStep).endAngle(n.angleStart)()},i=function(t){var e=n.radiusMaxLine-(t.step+.125)*(n.radiusMaxLine-n.radiusMin-n.buffer),a=n.radiusMaxLine-(t.step-.125)*(n.radiusMaxLine-n.radiusMin-n.buffer);return m.arc().innerRadius(e+2).outerRadius(a-2).cornerRadius(10).startAngle(n.angleStart-n.angleStep/2).endAngle(n.angleEnd-n.angleStep/2)()};t.selectAll(".legendArcBg").data(a).enter().append("path").attr("class","legendArcBg").attr("d",function(t){return s(t)}),t.selectAll(".legendArcOuter").data(a).enter().append("path").attr("class","legendArcOuter").attr("fill","#f7f7f7").attr("d",function(t){return i(t)}),t.selectAll(".legendArcInnerPath").data(a).enter().append("path").attr("id",function(t){return"legendArcInnerPath_"+t.idx}).attr("class","legendArcInnerPath").attr("fill","none").attr("stroke","none").attr("d",function(t){return r(t).split("L")[0]}),t.selectAll(".legendLabel").data(a).enter().append("text").attr("class",function(t,e){return"legendLabel"}).attr("x",0).attr("dy",8).attr("text-anchor","left").append("textPath").attr("xlink:href",function(t,e){return"#legendArcInnerPath_"+e}).attr("startOffset","0%").text(function(t){return t.name})}},{key:"drawItems",value:function(t,e,n){var a=this,s=this,r=m.symbol().type(m.symbolTriangle),i=e.items.map(function(t,s,r){var i=n.radiusMin-100*Math.random(),o=n.radiusMaxLine-n.buffer,l=n.radiusMaxLine-n.statuses[t.status]*(n.radiusMaxLine-n.radiusMin-n.buffer),u=n.scaleRadialPositionWithBaseShift(t._pos),d=[i*Math.cos(u),i*Math.sin(u)],c=[o*Math.cos(u),o*Math.sin(u)],p=[l*Math.cos(u),l*Math.sin(u)],f=null,h=0;if(t.history&&t.history.length>0){var m=n.radiusMaxLine-n.statuses[t.history[0].status]*(n.radiusMaxLine-n.radiusMin-n.buffer);f=[[l*Math.cos(u),l*Math.sin(u)],[m*Math.cos(u),m*Math.sin(u)]],d=f[0],c=f[1],h=m<l?-1:1}var _=t.history?[d,c]:a.createJaggedPoints(d,c,15,30),g=e.areas[t.section].color;return{angle:u,isNew:t._isNew,destination:c,origin:d,pos:p,historyLine:f,historyDirection:h,path:_,color:g,section:t.section}}),o=m.line().x(function(t){return t[0]}).y(function(t){return t[1]});t.selectAll(".itemHistoryLine").data(i.filter(function(t){return!!t.historyLine})).enter().append("path").attr("class","itemHistoryLine").attr("fill","none").attr("stroke",function(t){return 1===t.historyDirection?t.color:"#7a7a7a"}).attr("stroke-width",1.5).attr("stroke-dasharray","2 3").attr("d",function(t){return o(t.historyLine)}),t.selectAll(".itemOld").data(i.filter(function(t){return!t.isNew})).enter().append("circle").attr("class","item itemOld").attr("fill","transparent").attr("stroke",function(t){return t.color}).attr("stroke-width",1.5).attr("cx",function(t){return t.origin[0]}).attr("cy",function(t){return t.origin[1]}).attr("r",4).call(s.animate),t.selectAll(".itemNew").data(i.filter(function(t){return t.isNew})).enter().append("path").attr("class","item itemNew").attr("fill","none").attr("stroke","none").attr("stroke-width",1.5).attr("d",r.size(40)).attr("transform",function(t){return"translate("+t.pos[0]+", "+t.pos[1]+") rotate("+(a.rad2deg(t.angle)-90)+")"}).transition().delay(function(t,e){return 100*e}).attr("fill","transparent").attr("stroke",function(t){return e.areas[t.section].color})}},{key:"processData",value:function(t){var e={areas:{}};return e.items=[].concat(i()((t.blips||[]).map(function(t){return t.section=t.section.trim(),t}))).sort(function(t,e){return m.ascending(t.section.toLowerCase(),e.section.toLowerCase())||m.ascending(t.name.toLowerCase(),e.name.toLowerCase())}).map(function(t,e){return t._pos=e,"CHANGED"===t.state&&(t.history=[{action:"CHANGE_STATUS",status:t.previousStatus}]),"NEW"===t.state&&(t._isNew=!0),t}),e.items.map(function(t){return t.section.trim()}).filter(function(t,e,n){return n.indexOf(t)===e}).forEach(function(t,n){e.areas[t]={idx:n,color:_[n],count:e.items.filter(function(e){return e.section===t}).length}}),e.statuses=t.statuses,e}},{key:"getTextLength",value:function(t,e){var n=e.append("text").attr("x",100).attr("y",100).attr("class","itemLabel").text(t),a=n.node().getComputedTextLength();return n.remove(),a}},{key:"rad2deg",value:function(t){return t*(180/g)}},{key:"deg2rad",value:function(t){return t*(g/180)}},{key:"getConfig",value:function(t,e,n,a){var s=e.length,r=Math.min(1e3,1e3),i={x:500,y:500},o={lineLight:"#c2c2c2"};if(!n)return console.warn("Statuses are not definded!"),!1;var l={},u=1/n.length;for(var d in n.reverse()){l[n[d].name]=u-1/n.length/2,u+=1/n.length}console.log("statuses",l);var c=e.map(function(t){return t.name}).sort(function(t,e){return t.length-e.length}).reverse()[0],p=this.getTextLength(c,t),f=.425*(r-p),h=f-10,_=this.deg2rad(15),g=this.deg2rad(355),v=(g-_)/e.length;this.deg2rad(10);return{buffer:0,baseAngle:1.570795,colors:o,count:s,radiusMax:f,radiusMaxLine:h,radiusMin:200,center:i,scaleRadialPosition:m.scaleLinear().range([_,g]).domain([0,e.length]),scaleRadialPositionWithBaseShift:m.scaleLinear().range([_-1.570795,g-1.570795]).domain([0,e.length]),angleStart:_,angleEnd:g,angleStep:v,statuses:l,clickHandler:a}}},{key:"createJaggedPoints",value:function(t,e,n,a){var r=this,i=!1;if(t[0]>e[0]){var o=t;t=e,e=o,i=!0}var l=t,u=s()(l,2),d=u[0],c=u[1],p=e,f=s()(p,2),h=f[0],m=f[1],_=[t],g=m-c,v=h-d,b=-Math.atan(g/v),A=Math.sqrt(Math.pow(h-d,2)+Math.pow(m-c,2));a||(a=.05*A);for(var S=this.rotate(t,e,b),L=s()(S,2),I=L[0],E=L[1],P=d;P<I-a;){var M=Math.min(P+a+Math.random()*a,I-a),x=n*(Math.random()-.5)+c;_.push([M,x]),P=M}_.push([I,E]);var y=_.map(function(n,a){return 0===a?t:a===_.length-1?e:r.rotate(t,n,-b)});return i?y.reverse():y}},{key:"rotate",value:function(t,e,n){var a=s()(t,2),r=a[0],i=a[1],o=s()(e,2),l=o[0],u=o[1];return[r+(l-r)*Math.cos(n)-(u-i)*Math.sin(n),i+(l-r)*Math.sin(n)+(u-i)*Math.cos(n)]}},{key:"animate",value:function(t){function e(t,e){0===t.size()&&e();var n=0;t.each(function(){++n}).on("end",function(){--n||e.apply(this,arguments)})}function n(t){var e=t.length-1,n=1/e;return function(s){var r=Math.floor(s*e),i=Math.ceil(s*e),o=(s-n*r)/n,l=a(t[r],t[i],o);return"translate("+(l[0]-t[0][0])+", "+(l[1]-t[0][1])+")"}}function a(t,e,n){return[t[0]+(e[0]-t[0])*n,t[1]+(e[1]-t[1])*n]}t.transition().duration(1500).ease(m.easeBounceOut).attrTween("transform",function(t){return n(t.path)}).call(e,function(){t.transition().duration(1500).ease(m.easeCubicIn).attr("transform",function(t){return"translate("+(t.pos[0]-t.origin[0])+", "+(t.pos[1]-t.origin[1])+")"})})}},{key:"chartInit",value:function(t,e,n){this.drawChart(t,this.processData(e),n)}}]),t}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(6),s=n(40),r=n(39),i=n.n(r),o=n(38),l=n.n(o),u=n(36),d=n(37),c=n(41);n.n(c);a.default.config.productionTip=!1,a.default.use(s.a),a.default.use(i.a),n.i(c.sync)(d.a,u.a),a.default.material.registerTheme("default",{primary:{color:"orange",hue:700,textColor:"#333"},accent:"red",warn:"red",background:"white"}),new a.default({el:"#app",router:u.a,store:d.a,template:"<App/>",components:{App:l.a}})},function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i}),n.d(e,"d",function(){return o}),n.d(e,"c",function(){return l}),n.d(e,"e",function(){return u});var a="https://techradar-api.pgs-soft.com/api/radars",s=function(t){return fetch(t).then(function(t){return t.json()}).catch(function(t){return console.warn(t)})},r=function(t){return s(a+"/"+t)},i=function(t){return s(a+"/"+t+"/snapshots")},o=function(t,e){return s(a+"/"+t+"/blips")},l=function(t,e){return s(a+"/"+t+"/snapshots/"+e)},u=function(t,e){return s(a+"/"+t+"/blips/"+e)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"setSpreadsheetId",function(){return s}),n.d(e,"openPanel",function(){return r}),n.d(e,"closePanel",function(){return i}),n.d(e,"togglePanel",function(){return o}),n.d(e,"getRadarDetails",function(){return l}),n.d(e,"getSnapshots",function(){return u}),n.d(e,"getSnapshot",function(){return d}),n.d(e,"getAllBlips",function(){return c}),n.d(e,"getBlipDetails",function(){return p});var a=n(44),s=function(t,e){(0,t.commit)("SET_SPREADSHEET_ID",{spreadsheetId:e})},r=function(t,e){(0,t.commit)("OPEN_PANEL",{panelName:e})},i=function(t,e){(0,t.commit)("CLOSE_PANEL",{panelName:e})},o=function(t,e){(0,t.commit)("TOGGLE_PANEL",{panelName:e})},l=function(t,e){var s=t.commit;return s("GET_RADAR_DETAILS_REQUEST"),n.i(a.a)(e).then(function(t){s("GET_RADAR_DETAILS_SUCCESS",{response:t})}).catch(function(t){s("GET_RADAR_DETAILS_FAIL",{error:t})})},u=function(t,e){var s=t.commit;return s("GET_SNAPSHOTS_REQUEST"),n.i(a.b)(e).then(function(t){s("GET_SNAPSHOTS_SUCCESS",{response:t})}).catch(function(t){s("GET_SNAPSHOTS_FAIL",{error:t})})},d=function(t,e){var s=t.commit,r=e.spreadsheetId,i=e.snapshotId;return s("GET_SNAPSHOT_REQUEST"),n.i(a.c)(r,i).then(function(t){s("GET_SNAPSHOT_SUCCESS",{response:t})}).catch(function(t){s("GET_SNAPSHOT_FAIL",{error:t})})},c=function(t,e){var s=t.commit;return s("GET_BLIPS_REQUEST"),n.i(a.d)(e).then(function(t){s("GET_BLIPS_SUCCESS",{response:t})}).catch(function(t){s("GET_BLIPS_FAIL",{error:t})})},p=function(t,e){var s=t.commit,r=e.spreadsheetId,i=e.blipId;return s("GET_BLIP_REQUEST"),n.i(a.e)(r,i).then(function(t){s("GET_BLIP_SUCCESS",{response:t})}).catch(function(t){s("GET_BLIP_FAIL",{error:t})})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"OPEN_PANEL",function(){return s}),n.d(e,"CLOSE_PANEL",function(){return r}),n.d(e,"TOGGLE_PANEL",function(){return i}),n.d(e,"GET_RADAR_DETAILS_REQUEST",function(){return o}),n.d(e,"GET_RADAR_DETAILS_SUCCESS",function(){return l}),n.d(e,"GET_RADAR_DETAILS_FAIL",function(){return u}),n.d(e,"GET_SNAPSHOTS_REQUEST",function(){return d}),n.d(e,"GET_SNAPSHOTS_SUCCESS",function(){return c}),n.d(e,"GET_SNAPSHOTS_FAIL",function(){return p}),n.d(e,"GET_BLIPS_REQUEST",function(){return f}),n.d(e,"GET_BLIPS_SUCCESS",function(){return h}),n.d(e,"GET_BLIPS_FAIL",function(){return m}),n.d(e,"GET_SNAPSHOT_REQUEST",function(){return _}),n.d(e,"GET_SNAPSHOT_SUCCESS",function(){return g}),n.d(e,"GET_SNAPSHOT_FAIL",function(){return v}),n.d(e,"GET_BLIP_REQUEST",function(){return b}),n.d(e,"GET_BLIP_SUCCESS",function(){return A}),n.d(e,"GET_BLIP_FAIL",function(){return S});var a=n(6),s=function(t,e){var n=e.panelName;a.default.set(t[n],"isOpen",!0)},r=function(t,e){var n=e.panelName;a.default.set(t[n],"isOpen",!1)},i=function(t,e){var n=e.panelName;a.default.set(t[n],"isOpen",!t[n].isOpen)},o=function(t){a.default.set(t.loaders,"radarDetails",!0),a.default.set(t,"radarDetails",!1)},l=function(t,e){var n=e.response;a.default.set(t.loaders,"radarDetails",!1),a.default.set(t,"radarDetails",n)},u=function(t,e){e.response;a.default.set(t.loaders,"radarDetails",!1),a.default.set(t,"radarDetails",!1)},d=function(t){a.default.set(t.loaders,"snapshots",!0),a.default.set(t,"snapshots",[])},c=function(t,e){var n=e.response;a.default.set(t.loaders,"snapshots",!1),a.default.set(t,"snapshots",n)},p=function(t,e){e.response;a.default.set(t.loaders,"snapshots",!1),a.default.set(t,"snapshots",[])},f=function(t){a.default.set(t.loaders,"blips",!0),a.default.set(t,"allBlips",null)},h=function(t,e){var n=e.response;a.default.set(t.loaders,"blips",!1),a.default.set(t,"allBlips",n)},m=function(t,e){e.response;a.default.set(t.loaders,"blips",!1),a.default.set(t,"allBlips",null)},_=function(t){a.default.set(t.loaders,"snapshot",!0),a.default.set(t,"currentSnapshot",null)},g=function(t,e){var n=e.response;a.default.set(t.loaders,"snapshot",!1),a.default.set(t,"currentSnapshot",n)},v=function(t,e){e.response;a.default.set(t.loaders,"snapshot",!1),a.default.set(t,"currentSnapshot",null)},b=function(t){a.default.set(t.loaders,"blip",!0),a.default.set(t,"blipDetails",null)},A=function(t,e){var n=e.response;a.default.set(t.loaders,"blip",!1),a.default.set(t,"blipDetails",n)},S=function(t,e){e.response;a.default.set(t.loaders,"blip",!1),a.default.set(t,"blipDetails",null)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(5),s=n(115),r=n.n(s),i=n(123),o=n.n(i),l=n(118),u=n.n(l);e.default={name:"app",components:{AppHeader:r.a,SnapshotsPanel:o.a,DetailsPanel:u.a},computed:n.i(a.a)({spreadsheetId:function(t){return t.route.params.spreadsheetId},snapshotId:function(t){return t.route.params.snapshotId},radarName:function(t){return t.radarDetails.tittle},loaders:function(t){return t.loaders},snapshots:function(t){return t.snapshots},blipDetails:function(t){return t.blipDetails}}),mounted:function(){this.spreadsheetId&&(this.$store.dispatch("getRadarDetails",this.spreadsheetId),this.$store.dispatch("getSnapshots",this.spreadsheetId))},watch:{spreadsheetId:function(t){this.$store.dispatch("getRadarDetails",t),this.$store.dispatch("getSnapshots",t)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"appHeader",props:["radarName","spreadsheetId","snapshotId"],methods:{toggleSnapshotsPanel:function(){this.$store.dispatch("togglePanel","snapshotsPanel")}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(5);e.default={name:"blipPage",props:["spreadsheetId","blipId"],computed:n.i(a.a)({blipDetails:"blipDetails",loader:function(t){return t.loaders.blip}}),mounted:function(){console.info("mounted, getBlipDetails"),this.$store.dispatch("getBlipDetails",{spreadsheetId:this.spreadsheetId,blipId:this.blipId})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"blipsTable",props:["blips","spreadsheetId"]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={name:"detailsPanel",props:["isOpen","name","status","previousStatus","section","description","history"],methods:{togglePanel:function(){this.$store.dispatch("togglePanel","detailsPanel")}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"homePage",data:function(){return{msg:"Welcome to Technology Radar App",inputSpreadsheetId:"11IUPvEX2RJ_ZoNMQeSVo7ghj2-BpeTCUIG3KoMf7Ifc",spreasheetTemplateURL:"https://docs.google.com/spreadsheets/d/18Wg-5N7qOnEr1sbSx2f_Yh90kTYNAxnpW7ZHE_9orQg/edit?usp=sharing"}},methods:{submit:function(){this.$router.push({name:"RadarHomePage",params:{spreadsheetId:this.inputSpreadsheetId}})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(42);e.default={name:"radar",props:["radarData","spreadsheetId"],data:function(){return{}},methods:{onBlipClick:function(t){var e=this.spreadsheetId,n=t.name;this.$router.push({name:"BlipPage",params:{spreadsheetId:e,blipId:n}})}},mounted:function(){var t=new a.a(this.$el,this.radarData,this.onBlipClick);console.log(t)},watch:{radarData:function(){this.$el.innerHTML="";var t=new a.a(this.$el,this.radarData,this.onBlipClick);console.log(t)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(5);e.default={name:"radarHomePage",props:["spreadsheetId"],computed:n.i(a.a)({snapshots:function(t){return t.snapshots},radarName:function(t){return t.radarDetails.tittle}})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(5),s=n(117),r=n.n(s),i=n(120),o=n.n(i);e.default={name:"snapshotPage",components:{blipsTable:r.a,radar:o.a},props:["spreadsheetId","snapshotId"],computed:n.i(a.a)({loader:function(t){return t.loaders.snapshot},currentSnapshot:function(t){return t.currentSnapshot}}),mounted:function(){this.$store.dispatch("getSnapshot",{spreadsheetId:this.spreadsheetId,snapshotId:this.snapshotId})},watch:{snapshotId:function(){this.$store.dispatch("getSnapshot",{spreadsheetId:this.spreadsheetId,snapshotId:this.snapshotId})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(5);e.default={name:"snapshotsPanel",props:["isLoading","snapshots","spreadsheetId"],data:function(){return{isPanelSwipeable:!0}},computed:n.i(a.a)({snapshotsPanelIsOpen:function(t){return t.snapshotsPanel.isOpen}}),methods:{closePanel:function(){this.$store.dispatch("closePanel","snapshotsPanel")}},watch:{snapshotsPanelIsOpen:function(t){this.$refs.leftSidenav.toggle()}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){function a(t){n(105)}var s=n(0)(n(48),n(124),a,"data-v-0ad80ce1",null);t.exports=s.exports},function(t,e,n){function a(t){n(107)}var s=n(0)(n(49),n(126),a,"data-v-244c8f1d",null);t.exports=s.exports},function(t,e,n){function a(t){n(112)}var s=n(0)(n(50),n(131),a,"data-v-7cb94009",null);t.exports=s.exports},function(t,e,n){function a(t){n(108)}var s=n(0)(n(51),n(127),a,"data-v-67dabf5f",null);t.exports=s.exports},function(t,e,n){function a(t){n(114)}var s=n(0)(n(52),n(133),a,"data-v-f94cf1ea",null);t.exports=s.exports},function(t,e,n){function a(t){n(106)}var s=n(0)(n(53),n(125),a,null,null);t.exports=s.exports},function(t,e,n){function a(t){n(109)}var s=n(0)(n(54),n(128),a,"data-v-6ac844f2",null);t.exports=s.exports},function(t,e,n){function a(t){n(110)}var s=n(0)(n(55),n(129),a,"data-v-6d8e7870",null);t.exports=s.exports},function(t,e,n){function a(t){n(113)}var s=n(0)(n(56),n(132),a,null,null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-toolbar",[t.spreadsheetId?n("md-button",{staticClass:"md-icon-button",on:{click:t.toggleSnapshotsPanel}},[n("md-icon",[t._v("menu")])],1):t._e(),t._v(" "),n("router-link",{staticClass:"md-title",staticStyle:{flex:"1"},attrs:{to:"/"+t.spreadsheetId,tag:"h2"}},[t._v("\n    "+t._s(t.radarName)+" "),t.snapshotId?n("span",{staticClass:"snapshotName"},[t._v(" / "+t._s(t.snapshotId))]):t._e()]),t._v(" "),t.spreadsheetId?n("md-button",{on:{click:t.toggleSnapshotsPanel}},[t._v("Snapshots")]):t._e()],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("svg",{staticClass:"scaling-svg",attrs:{id:"radar",viewBox:"0 0 1000 1000"}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",{staticClass:"name"},[t._v(t._s(t.blipId))]),t._v(" "),t.loader&&!t.blipDetails?n("md-spinner",{attrs:{"md-indeterminate":""}}):t._e(),t._v(" "),t.blipDetails&&!t.loader?n("div",[n("h3",{staticClass:"section"},[t._v(t._s(t.blipDetails.section))]),t._v(" "),n("h4",{staticClass:"status"},[t._v(t._s(t.blipDetails.status))]),t._v(" "),t.blipDetails.description?n("p",{staticClass:"description"},[t._v(t._s(t.blipDetails.description))]):t._e(),t._v(" "),t.blipDetails.history?n("div",{staticClass:"history"},[n("ul",t._l(t.blipDetails.history,function(e,a){return n("li",{key:a},[n("router-link",{staticClass:"history-link",attrs:{to:"/"+t.spreadsheetId+"/"+e.snapshotName}},[n("span",{staticClass:"history-status"},[t._v(t._s(e.newStatus))]),t._v(" "),n("span",{staticClass:"history-snapshot"},[t._v(t._s(e.snapshotName))])])],1)}))]):t._e()]):t._e()],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{class:{"is-open":t.isOpen}},[n("article",[n("header",[t._v(t._s(t.name))]),t._v(" "),n("div",[t._v(t._s(t.section))]),t._v(" "),n("p",[t._v(t._s(t.description))])]),t._v(" "),n("div",[n("ul",t._l(t.history,function(e){return n("li",[t._v(t._s(e))])}))]),t._v(" "),n("button",{on:{click:t.togglePanel}},[t._v(" <<")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v(t._s(t.radarName))]),t._v(" "),n("div",{staticClass:"snapshots"},t._l(t.snapshots,function(e){return n("router-link",{key:e.name,attrs:{to:"/"+t.spreadsheetId+"/"+e.name,tag:"md-button"}},[t._v("\n      "+t._s(e.name)+"\n    ")])}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("md-tabs",{staticClass:"md-transparent",attrs:{"md-fixed":""}},[n("md-tab",{attrs:{id:"chart","md-label":"Chart"}},[t.currentSnapshot&&t.currentSnapshot.blips?n("radar",{attrs:{"radar-data":t.currentSnapshot,"spreadsheet-id":t.spreadsheetId}}):t._e()],1),t._v(" "),n("md-tab",{attrs:{id:"table","md-label":"Table"}},[t.currentSnapshot&&t.currentSnapshot.blips?n("blips-table",{attrs:{blips:t.currentSnapshot.blips,"spreadsheet-id":t.spreadsheetId}}):t._e()],1)],1),t._v(" "),t.loader?n("md-spinner",{attrs:{"md-indeterminate":""}}):t._e()],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("app-header",{attrs:{"radar-name":t.radarName,"spreadsheet-id":t.spreadsheetId,"snapshot-id":t.snapshotId}}),t._v(" "),n("div",[n("aside",[t.spreadsheetId?n("snapshots-panel",{attrs:{"spreadsheet-id":t.spreadsheetId,snapshots:t.snapshots,"is-loading":t.loaders.snapshots}}):t._e()],1),t._v(" "),n("main",[n("router-view")],1)]),t._v(" "),n("aside")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.blips?n("md-whiteframe",{staticClass:"tableContainer"},[n("md-table",[n("md-table-header",[n("md-table-row",[n("md-table-head",[t._v("Name")]),t._v(" "),n("md-table-head",[t._v("Section")]),t._v(" "),n("md-table-head",[t._v("Status")]),t._v(" "),n("md-table-head",[t._v("Previous")]),t._v(" "),n("md-table-head",[t._v("State")])],1)],1),t._v(" "),n("md-table-body",t._l(t.blips,function(e){return n("md-table-row",{key:e.name},[n("md-table-cell",[n("router-link",{attrs:{to:"/"+t.spreadsheetId+"/blip/"+e.name}},[t._v(t._s(e.name))])],1),t._v(" "),n("md-table-cell",[t._v(t._s(e.section))]),t._v(" "),n("md-table-cell",[t._v(t._s(e.status))]),t._v(" "),n("md-table-cell",[t._v(t._s(e.previousStatus))]),t._v(" "),n("md-table-cell",[t._v(t._s(e.state))])],1)}))],1)],1):t._e()},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-sidenav",{ref:"leftSidenav",staticClass:"md-left",attrs:{"md-swipeable":t.isPanelSwipeable}},[n("md-toolbar",[n("div",{staticClass:"md-toolbar-container"},[n("h3",{staticClass:"md-title"},[t._v("Snapshots")])])]),t._v(" "),t.isLoading?n("p",[t._v("Loading ...")]):t._e(),t._v(" "),!1===t.snapshots?n("p",[t._v("Cannot load snapshots :(")]):t._e(),t._v(" "),n("nav",[n("md-list",t._l(t.snapshots,function(e){return n("router-link",{key:e.name,attrs:{to:"/"+t.spreadsheetId+"/"+e.name,tag:"md-list-item"}},[t._v("\n        "+t._s(e.name)+"\n      ")])}))],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Visualize Your Technology Radar")]),t._v(" "),n("div",{staticClass:"u-center"},[n("form",{attrs:{novalidate:""},on:{submit:function(e){e.stopPropagation(),e.preventDefault(),t.submit(e)}}},[n("md-input-container",[n("label",[t._v("Enter Google Spreadsheet ID")]),t._v(" "),n("md-input",{model:{value:t.inputSpreadsheetId,callback:function(e){t.inputSpreadsheetId=e},expression:"inputSpreadsheetId"}})],1),t._v(" "),n("md-button",{staticClass:"md-primary md-raised",attrs:{type:"submit"}},[t._v("\n        OPEN RADAR\n      ")])],1),t._v(" "),n("div",{staticClass:"template"},[n("h3",[t._v("Don't have spreadsheet yet?")]),t._v(" "),n("p",[t._v("You can use "),n("a",{attrs:{href:t.spreasheetTemplateURL,target:"_blank"}},[t._v("this template")]),t._v(" to create your own")])]),t._v(" "),n("div",{staticClass:"examples"},[n("p",[t._v("Or try sample radars:")]),t._v(" "),n("router-link",{attrs:{to:"/11IUPvEX2RJ_ZoNMQeSVo7ghj2-BpeTCUIG3KoMf7Ifc/",tag:"md-button"}},[t._v("Frontend Radar")]),t._v(" "),n("router-link",{attrs:{to:"/18Wg-5N7qOnEr1sbSx2f_Yh90kTYNAxnpW7ZHE_9orQg/",tag:"md-button"}},[t._v(".NET Radar")])],1)])])},staticRenderFns:[]}},,,,function(t,e){}]),[43]);
//# sourceMappingURL=app.11703cfb34acdb4da53d.js.map