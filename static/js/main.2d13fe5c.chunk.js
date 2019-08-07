(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(38)},27:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),i=a(3),r=a.n(i),l=(a(27),a(7)),s=a(6),c=a(17),h=a(20),d=a(18),u=a(1),m=a(21),v=a(19),f=(a(37),function e(t){Object(s.a)(this,e);var a=t.toString(),o=new Blob(["("+a+")()"]);return new Worker(URL.createObjectURL(o))}),g=function(){self.addEventListener("message",function(e){if(e){var t=2*Math.PI,a=e.data,o=a.cells,n=a.food,i=a.uv,r=a.canvasWidth,l=a.canvasHeight,s=a.foodCycle,c=a.foodAmount,h=a.cellsLimit,d={},u=[];0===s&&(n=c,s=20);var m=o.map(function(e,a){if(e.cyclesAlive++,e.repCycle++,(e=function e(a,o,n){Math.random()<.5&&(a.heading+=.8*Math.random()-.4),a.heading>=t&&(a.heading-=t),a.heading<0&&(a.heading=t+a.heading);var i=Math.floor(8*Math.random()),r=2*a.speed/a.scale,l=i*Math.cos(a.heading),s=i*Math.sin(a.heading),c=Math.floor(a.position[0]+l*r),h=Math.floor(a.position[1]-s*r);return c>20&&h>20&&c<o-20&&h<n-20?(a.position[0]=c,a.position[1]=h,a.energy-=i/10,a.scale-=i/100,a.scale<1&&(a.scale=1)):(a.heading+=Math.PI,a.heading>t&&(a.heading-=t),e(a,o,n)),a}(e,r,l)).nucleus=v(e),Math.random()<n/100&&(e.energy+=1,e.scale+=.1,e.scale>10&&(e.scale=10),e.energy>100&&(e.energy=100),n-=.1),Math.random()<i/2e4){var s=Math.floor(3*Math.random());e.color[s]=Math.floor(256*Math.random()),e.color=e.color.map(function(e){return e>255&&(e=255),e})}if(Math.random()<i/2e4){var c=Math.floor(3*Math.random());e.nucleusColor[c]=Math.floor(256*Math.random()),e.nucleusColor=e.nucleusColor.map(function(e){return e>255&&(e=255),e})}return o.forEach(function(n,i){var r,l,s,c;if(o.length<h&&e.id!==n.id&&i>a&&e.repCycle>100&&n.repCycle>100&&e.energy>50&&n.energy>50&&Math.random()>.5&&(r=e.position[0],l=n.position[0],s=e.position[1],c=n.position[1],Math.sqrt(Math.pow(Math.abs(r-l),2)+Math.pow(Math.abs(s-c),2)))<2*(e.scale+n.scale)+5){var d={energy:50,speed:Math.random()>.5?e.speed:n.speed,scale:5,color:Math.random()>.5?e.color:n.color,nucleusColor:Math.random()>.5?e.nucleusColor:n.nucleusColor,cyclesAlive:0,repCycle:0,position:[Math.abs((e.position[0]+n.position[0])/2),Math.abs((e.position[1]+n.position[1])/2)],heading:Math.random()*t};e.energy-=30,n.energy-=30,e.repCycle=0,n.repCycle=0,d.nucleus=v(d),u.push(d)}}),e});return m=(m=m.filter(function(e){return e.energy>0&&e.cyclesAlive<800})).concat(u),d.cells=m,d.food=n,d.foodCycle=s-1,postMessage(d)}function v(e){var t=-1*e.scale/3,a=t*Math.cos(e.heading),o=t*Math.sin(e.heading);return[Math.floor(e.position[0]+a),Math.floor(e.position[1]-o)]}})},p=[{name:"Facial Recognition Demo",description:"Python, React, & MongoDB powered facial recognition app. Train a user-unique system to recognize faces within a photo.",code:n.a.createElement("a",{href:""},"Code"),live:n.a.createElement("a",{href:""},"Live"),image:n.a.createElement("img",{src:""})},{name:"Parent2PI",description:"React, Node, Paypal, & MongoDB powered booking/customer outreach app for Parenting To Promote Independence &trade;",code:n.a.createElement("a",{href:""},"Code"),live:n.a.createElement("a",{href:""},"Live"),image:n.a.createElement("img",{src:""})},{name:"React Etsy Store",description:"React, Node, Etsy, & MongoDB powered custom Etsy storefront.",code:n.a.createElement("a",{href:""},"Code"),live:n.a.createElement("a",{href:""},"Live"),image:n.a.createElement("img",{src:""})}];var M=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={canvas:null,ctx:null,cells:[],food:null,foodAmount:100,foodCycle:30,uv:10,cellCount:null,simSpeed:50,cellsLimit:null,hovers:{bannerArrow:!1}},a.worker=new f(g),a.updateSimulation=a.updateSimulation.bind(Object(u.a)(a)),a.updateCanvas=a.updateCanvas.bind(Object(u.a)(a)),a.handleCanvasClick=a.handleCanvasClick.bind(Object(u.a)(a)),a.toggleHover=a.toggleHover.bind(Object(u.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.initCanvas()}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.timer),this.worker.terminate()}},{key:"initCanvas",value:function(){var e=this,t=this.refs.canvas,a=t.getContext("2d");this.setState({ctx:a,canvas:t,timer:setInterval(this.updateSimulation,this.state.simSpeed),cells:this.seedCells(this.state.cellCount,t.width,t.height),canvasWidth:t.width,canvasHeight:t.height,food:this.state.foodAmount,cellCount:Math.floor(t.width*t.height/8e4),cellsLimit:Math.floor(t.width*t.height/5e3)}),this.worker.addEventListener("message",function(a){a&&(a=a.data,e.setState(a),e.updateCanvas(a),0===a.cells.length&&e.setState({cells:e.seedCells(e.state.cellCount,t.width,t.height)}))})}},{key:"updateSimulation",value:function(){var e={food:this.state.food,cells:this.state.cells,uv:this.state.uv,canvasWidth:this.state.canvasWidth,canvasHeight:this.state.canvasHeight,foodCycle:this.state.foodCycle,foodAmount:this.state.foodAmount,cellsLimit:this.state.cellsLimit};this.worker.postMessage(e)}},{key:"updateCanvas",value:function(e){var t=this.state,a=t.ctx,o=t.canvas;a.clearRect(0,0,o.width,o.height);var n=a.createRadialGradient(o.width/2,o.height/2,0,o.width/2,o.height/2,.5*Math.max(o.width,o.height));n.addColorStop(0,"rgba(255, 255, 0, 0.05)"),n.addColorStop(1,"rgba(0, 0, 0, 0.05)"),a.fillStyle=n,a.fillRect(0,0,o.width,o.height);var i=o.width/2,r=o.height/2,l=Math.min(i,r)/6;a.strokeStyle="rgba(0, 0, 0, 0.3)",a.beginPath(),a.moveTo(o.width/2,0),a.lineTo(o.width/2,o.height),a.stroke(),a.beginPath(),a.moveTo(0,o.height/2),a.lineTo(o.width,o.height/2),a.stroke();for(var s=0;s<2;s++)for(var c=1;c<=4;c++)if(a.strokeStyle=4===c?"rgba(0, 0, 0, 0.3)":"rgba(0, 0, 0, 0.1)",0===s){var h=i+l*c,d=i-l*c;a.beginPath(),a.moveTo(h,0),a.lineTo(h,o.height),a.stroke(),a.beginPath(),a.moveTo(d,0),a.lineTo(d,o.height),a.stroke()}else{var u=r+l*c,m=r-l*c;a.beginPath(),a.moveTo(0,u),a.lineTo(o.width,u),a.stroke(),a.beginPath(),a.moveTo(0,m),a.lineTo(o.width,m),a.stroke()}e.cells.forEach(function(e){a.strokeStyle="rgba(0, 0, 0, 0.5)",a.beginPath(),a.arc(e.position[0],e.position[1],2*e.scale,0,2*Math.PI),a.fillStyle="rgba(".concat(e.color[0],", ").concat(e.color[1],", ").concat(e.color[2],", 0.8)"),a.stroke(),a.fill(),a.closePath(),a.beginPath(),a.arc(e.nucleus[0],e.nucleus[1],e.scale/2,0,2*Math.PI),a.fillStyle="rgba(".concat(e.nucleusColor[0],", ").concat(e.nucleusColor[1],", ").concat(e.nucleusColor[2],", 0.7)"),a.fill(),a.stroke(),a.closePath()})}},{key:"seedCells",value:function(e,t,a){for(var o=[],n=0;n<e;n++){var i={energy:50,speed:Math.floor(4*Math.random()+3),scale:5,color:Object(l.a)(Array(3)).map(function(e){return Math.floor(266*Math.random())}),nucleusColor:Object(l.a)(Array(3)).map(function(e){return Math.floor(266*Math.random())}),cyclesAlive:0,repCycle:0,position:[Math.floor(Math.random()*(t-20-20)+20),Math.floor(Math.random()*(a-20-20)+20)],heading:2*Math.random()*Math.PI,id:Object(l.a)(Array(10)).map(function(e){return Math.floor(10*Math.random())}).join("")+n};o.push(i)}return o}},{key:"handleCanvasClick",value:function(e){var t=e.nativeEvent,a=[t.offsetX,t.offsetY],o=this.state.cells;this.setState({cells:o.filter(function(e){return t=e.position[0],o=a[0],n=e.position[1],i=a[1],Math.sqrt(Math.pow(Math.abs(t-o),2)+Math.pow(Math.abs(n-i),2))>3*e.scale;var t,o,n,i})})}},{key:"toggleHover",value:function(e){var t=this.state.hovers;t[e]=!t[e],console.log(t),this.setState(t)}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"App"},n.a.createElement("div",{id:"banner-container"},n.a.createElement("div",{id:"banner"},"Hello, I'm Kyle"),n.a.createElement("div",{className:"arrow-down",onMouseEnter:function(){return e.toggleHover("bannerArrow")},onMouseLeave:function(){return e.toggleHover("bannerArrow")},onClick:function(){return v.animateScroll.scrollTo(1e3)}},n.a.createElement("div",{className:"arrowL "+(this.state.hovers.bannerArrow?"hover":"")}),n.a.createElement("div",{className:"arrowR "+(this.state.hovers.bannerArrow?"hover":"")}))),n.a.createElement("div",{id:"about-me"},"A full-stack web developer and scientist. I am passionate about designing web applications. Biology is another passion of mine, as such I hope you enjoy the Cell Simulation. Below you can find some of my strengths and other works."),n.a.createElement("div",{id:"strengths"},"Icons!!!"),n.a.createElement("div",{id:"works"},p.map(function(e){return n.a.createElement("div",{className:"work"},n.a.createElement("h2",null,e.name),e.image,n.a.createElement("p",null,e.description),e.live,e.code)})),n.a.createElement("div",{id:"resume"}),n.a.createElement("div",{id:"simulation-container"},n.a.createElement("canvas",{ref:"canvas",width:window.innerWidth,height:window.innerHeight,onClick:this.handleCanvasClick})))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.2d13fe5c.chunk.js.map