(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{234:function(t,e,n){},235:function(t,e,n){},241:function(t,e){},242:function(t,e){},250:function(t,e){},255:function(t,e,n){"use strict";n.r(e);var i,a,o,r,c,s,l,u,d,f,h,v,p,m,g,y,b,j,x,w,O,D,E=n(79),P=n.n(E),S=n(208),k=n.n(S),I=(n(234),n(235),n(8)),L=n.n(I),A=n(12),C=n(228),F=(n(254),n.p+"static/media/background.ce91d2ae.jpg"),T=function(){i=document.getElementById("myCanvas"),a=i.getContext("2d"),o=10,r=i.width/2,c=i.height-30,s=2,l=-2,u=10,d=75,f=(i.width-d)/2,h=!1,v=!1,p=7,m=3,g=75,y=20,b=10,x=30,j=30,w=0,O=3,D=[];for(var t=0;t<m;t++){D[t]=[];for(var e=0;e<p;e++)D[t][e]={x:0,y:0,status:1}}document.addEventListener("keydown",(function(t){}),!1),document.addEventListener("keyup",(function(t){}),!1),document.addEventListener("mousemove",(function(t){}),!1)};var B=new Image;function M(){a.clearRect(0,0,i.width,i.height),a.drawImage(B,0,0),function(){for(var t=0;t<m;t++)for(var e=0;e<p;e++)if(1==D[t][e].status){var n=e*(g+b)+j,i=t*(y+b)+x;D[t][e].x=n,D[t][e].y=i,a.beginPath(),a.rect(n,i,g,y),a.fillStyle="#0095DD",a.fill(),a.closePath()}}(),a.beginPath(),a.arc(r,c,o,0,2*Math.PI),a.fillStyle="#0095DD",a.fill(),a.closePath(),a.beginPath(),a.rect(f,i.height-u,d,u),a.fillStyle="#0095DD",a.fill(),a.closePath(),a.font="16px Arial",a.fillStyle="#0095DD",a.fillText("Score: "+w,8,20),a.font="16px Arial",a.fillStyle="#0095DD",a.fillText("Lives: "+O,i.width-65,20),function(){for(var t=0;t<m;t++)for(var e=0;e<p;e++){var n=D[t][e];1==n.status&&r>n.x&&r<n.x+g&&c>n.y&&c<n.y+y&&(l=-l,n.status=0,++w==p*m&&(alert("YOU WIN, CONGRATS!"),document.location.reload()))}}(),(r+s>i.width-o||r+s<o)&&(s=-s),c+l<o?l=-l:c+l>i.height-o&&(r>f&&r<f+d?l=-l:--O?(r=i.width/2,c=i.height-30,s=2,l=-2,f=(i.width-d)/2):(alert("GAME OVER"),document.location.reload())),h&&f<i.width-d?f+=7:v&&f>0&&(f-=7),r+=s,c+=l,N().then((function(t){t.keypoints[0].score>.6&&(f=2*t.keypoints[0].position.x)})),requestAnimationFrame(M)}B.src=F;var N,R=n(46),G=void 0,J=function(){return Object(E.useEffect)((function(){var t=!1;function e(){return(e=Object(A.a)(L.a.mark((function e(){var n,i;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("start"),e.next=3,Object(C.a)();case 3:n=e.sent,i=document.getElementById("video"),navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then((function(t){i.srcObject=t,i.play()})).catch((function(t){console.log("An error occurred: "+t)})),i.addEventListener("canplay",(function(e){t||(console.log("canplay"),t=!0,N=function(){var t=Object(A.a)(L.a.mark((function t(){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.estimateSinglePose(i,{flipHorizontal:!0});case 2:return G=t.sent,console.log(G),t.abrupt("return",G);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),T(),M())}),!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}window.addEventListener("load",(function(){return e.apply(this,arguments)}),!1)}),[]),Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("div",{className:"camera",children:Object(R.jsx)("video",{id:"video",width:"240",style:{transform:"scaleX(-1)"},children:"Video stream not available."})}),Object(R.jsx)("canvas",{id:"myCanvas",width:"480",height:"320"})]})};var U=function(){return Object(R.jsx)("div",{className:"App",children:Object(R.jsx)(J,{})})},V=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,257)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),i(t),a(t),o(t),r(t)}))};k.a.render(Object(R.jsx)(P.a.StrictMode,{children:Object(R.jsx)(U,{})}),document.getElementById("root")),V()}},[[255,1,2]]]);
//# sourceMappingURL=main.9b76445b.chunk.js.map