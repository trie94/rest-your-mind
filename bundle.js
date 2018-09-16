!function(e){function t(t){for(var r,o,i=t[0],a=t[1],s=t[2],d=0,c=[];d<i.length;d++)o=i[d],P[o]&&c.push(P[o][0]),P[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(G&&G(t);c.length;)c.shift()();return H.push.apply(H,s||[]),n()}function n(){for(var e,t=0;t<H.length;t++){for(var n=H[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==P[i]&&(r=!1)}r&&(H.splice(t--,1),e=k(k.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!_[e]||!g[e])return;for(var n in g[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(m[n]=t[n]);0==--v&&0===y&&O()}(e,t),r&&r(e,t)};var o,i=!0,a="9691bdfd62cd1f351a3c",s=1e4,d={},c=[],l=[];var u=[],h="idle";function f(e){h=e;for(var t=0;t<u.length;t++)u[t].call(null,e)}var p,m,w,v=0,y=0,b={},g={},_={};function M(e){return+e+""===e?+e:e}function j(e){if("idle"!==h)throw new Error("check() is only allowed in idle status");return i=e,f("check"),function(e){return e=e||1e4,new Promise(function(t,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=k.p+""+a+".hot-update.json";r.open("GET",o,!0),r.timeout=e,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)t();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void n(e)}t(e)}}})}(s).then(function(e){if(!e)return f("idle"),null;g={},b={},_=e.c,w=e.h,f("prepare");var t=new Promise(function(e,t){p={resolve:e,reject:t}});for(var n in m={},P)x(n);return"prepare"===h&&0===y&&0===v&&O(),t})}function x(e){_[e]?(g[e]=!0,v++,function(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.charset="utf-8",n.src=k.p+""+e+"."+a+".hot-update.js",t.appendChild(n)}(e)):b[e]=!0}function O(){f("ready");var e=p;if(p=null,e)if(i)Promise.resolve().then(function(){return E(i)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in m)Object.prototype.hasOwnProperty.call(m,n)&&t.push(M(n));e.resolve(t)}}function E(t){if("ready"!==h)throw new Error("apply() is only allowed in ready status");var n,r,o,i,s;function l(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),a=o.id,s=o.chain;if((i=I[a])&&!i.hot._selfAccepted){if(i.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:a};if(i.hot._main)return{type:"unaccepted",chain:s,moduleId:a};for(var d=0;d<i.parents.length;d++){var c=i.parents[d],l=I[c];if(l){if(l.hot._declinedDependencies[a])return{type:"declined",chain:s.concat([c]),moduleId:a,parentId:c};-1===t.indexOf(c)&&(l.hot._acceptedDependencies[a]?(n[c]||(n[c]=[]),u(n[c],[a])):(delete n[c],t.push(c),r.push({chain:s.concat([c]),id:c})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var p={},v=[],y={},b=function(){console.warn("[HMR] unexpected require("+j.moduleId+") to disposed module")};for(var g in m)if(Object.prototype.hasOwnProperty.call(m,g)){var j;s=M(g);var x=!1,O=!1,E=!1,H="";switch((j=m[g]?l(s):{type:"disposed",moduleId:g}).chain&&(H="\nUpdate propagation: "+j.chain.join(" -> ")),j.type){case"self-declined":t.onDeclined&&t.onDeclined(j),t.ignoreDeclined||(x=new Error("Aborted because of self decline: "+j.moduleId+H));break;case"declined":t.onDeclined&&t.onDeclined(j),t.ignoreDeclined||(x=new Error("Aborted because of declined dependency: "+j.moduleId+" in "+j.parentId+H));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(j),t.ignoreUnaccepted||(x=new Error("Aborted because "+s+" is not accepted"+H));break;case"accepted":t.onAccepted&&t.onAccepted(j),O=!0;break;case"disposed":t.onDisposed&&t.onDisposed(j),E=!0;break;default:throw new Error("Unexception type "+j.type)}if(x)return f("abort"),Promise.reject(x);if(O)for(s in y[s]=m[s],u(v,j.outdatedModules),j.outdatedDependencies)Object.prototype.hasOwnProperty.call(j.outdatedDependencies,s)&&(p[s]||(p[s]=[]),u(p[s],j.outdatedDependencies[s]));E&&(u(v,[j.moduleId]),y[s]=b)}var S,D=[];for(r=0;r<v.length;r++)s=v[r],I[s]&&I[s].hot._selfAccepted&&D.push({module:s,errorHandler:I[s].hot._selfAccepted});f("dispose"),Object.keys(_).forEach(function(e){!1===_[e]&&function(e){delete P[e]}(e)});for(var T,G,L=v.slice();L.length>0;)if(s=L.pop(),i=I[s]){var R={},W=i.hot._disposeHandlers;for(o=0;o<W.length;o++)(n=W[o])(R);for(d[s]=R,i.hot.active=!1,delete I[s],delete p[s],o=0;o<i.children.length;o++){var V=I[i.children[o]];V&&((S=V.parents.indexOf(s))>=0&&V.parents.splice(S,1))}}for(s in p)if(Object.prototype.hasOwnProperty.call(p,s)&&(i=I[s]))for(G=p[s],o=0;o<G.length;o++)T=G[o],(S=i.children.indexOf(T))>=0&&i.children.splice(S,1);for(s in f("apply"),a=w,y)Object.prototype.hasOwnProperty.call(y,s)&&(e[s]=y[s]);var z=null;for(s in p)if(Object.prototype.hasOwnProperty.call(p,s)&&(i=I[s])){G=p[s];var A=[];for(r=0;r<G.length;r++)if(T=G[r],n=i.hot._acceptedDependencies[T]){if(-1!==A.indexOf(n))continue;A.push(n)}for(r=0;r<A.length;r++){n=A[r];try{n(G)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:s,dependencyId:G[r],error:e}),t.ignoreErrored||z||(z=e)}}}for(r=0;r<D.length;r++){var C=D[r];s=C.module,c=[s];try{k(s)}catch(e){if("function"==typeof C.errorHandler)try{C.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:n,originalError:e}),t.ignoreErrored||z||(z=n),z||(z=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:s,error:e}),t.ignoreErrored||z||(z=e)}}return z?(f("fail"),Promise.reject(z)):(f("idle"),new Promise(function(e){e(v)}))}var I={},P={0:0},H=[];function k(t){if(I[t])return I[t].exports;var n=I[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:j,apply:E,status:function(e){if(!e)return h;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var t=u.indexOf(e);t>=0&&u.splice(t,1)},data:d[e]};return o=void 0,t}(t),parents:(l=c,c=[],l),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=I[e];if(!t)return k;var n=function(n){return t.hot.active?(I[n]?-1===I[n].parents.indexOf(e)&&I[n].parents.push(e):(c=[e],o=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),c=[]),k(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return k[e]},set:function(t){k[e]=t}}};for(var i in k)Object.prototype.hasOwnProperty.call(k,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(n,i,r(i));return n.e=function(e){return"ready"===h&&f("prepare"),y++,k.e(e).then(t,function(e){throw t(),e});function t(){y--,"prepare"===h&&(b[e]||x(e),0===y&&0===v&&O())}},n.t=function(e,t){return 1&t&&(e=n(e)),k.t(e,-2&t)},n}(t)),n.l=!0,n.exports}k.m=e,k.c=I,k.d=function(e,t,n){k.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},k.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},k.t=function(e,t){if(1&t&&(e=k(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(k.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)k.d(n,r,function(t){return e[t]}.bind(null,r));return n},k.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return k.d(t,"a",t),t},k.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},k.p="/rest-your-mind/",k.h=function(){return a};var S=window.webpackJsonp=window.webpackJsonp||[],D=S.push.bind(S);S.push=t,S=S.slice();for(var T=0;T<S.length;T++)t(S[T]);var G=D;H.push([0,1]),n()}({"./index.js":function(e,t,n){"use strict";var r=c(n("./node_modules/react/index.js")),o=c(n("./node_modules/react-dom/index.js")),i=n("./node_modules/react-router-dom/es/index.js"),a=c(n("./worlds/index/index.js")),s=c(n("./worlds/world1/index.js")),d=c(n("./worlds/world2/index.js"));function c(e){return e&&e.__esModule?e:{default:e}}n("./style.scss");e.hot.accept(),e.hot.dispose(function(){var e=document.querySelector("body"),t=e.cloneNode(!1);e.parentNode.insertBefore(t,e),e.parentNode.removeChild(e)}),o.default.render(r.default.createElement(i.BrowserRouter,{basename:"/rest-your-mind"},r.default.createElement(i.Switch,null,r.default.createElement(i.Route,{exact:!0,path:"/",component:a.default}),r.default.createElement(i.Route,{path:"/world1",component:s.default}),r.default.createElement(i.Route,{path:"/world2",component:d.default}))),document.getElementById("root"))},"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./style.scss":function(e,t,n){(e.exports=n("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,"html {\n  font-family: 'Source Sans Pro', sans-serif; }\n\nbody {\n  margin: 0; }\n\n#root {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: linear-gradient(#fcf8ef, #eceae6); }\n\np {\n  margin: 1.2em; }\n",""])},"./style.scss":function(e,t,n){var r=n("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./style.scss");"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},i=n("./node_modules/style-loader/lib/addStyles.js")(r,o);r.locals&&(e.exports=r.locals),e.hot.accept("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./style.scss",function(){var t=n("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./style.scss");if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");i(t)}),e.hot.dispose(function(){i()})},"./worlds/index/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(n("./node_modules/react/index.js")),i=n("./node_modules/react-router-dom/es/index.js");var a=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"render",value:function(){return o.default.createElement("div",null,o.default.createElement("p",null,"Welcome to the Rest Your Mind! This is the landing page"),o.default.createElement("p",null,o.default.createElement(i.Link,{to:"/world1"},"to the ice world")),o.default.createElement("p",null,o.default.createElement(i.Link,{to:"/world2"},"to the garden")))}}]),t}();t.default=a},"./worlds/world1/elements.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createClouds=function(){console.log("create clouds")},t.createFish=function(){console.log("create fish")};!function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);t.default=e}(n("./node_modules/three/build/three.module.js"))},"./worlds/world1/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=d(n("./node_modules/three/build/three.module.js")),i=function(e){return e&&e.__esModule?e:{default:e}}(n("./node_modules/react/index.js")),a=n("./node_modules/react-router-dom/es/index.js"),s=d(n("./worlds/world1/elements.js"));function d(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}var c=n("./node_modules/three-orbit-controls/index.js")(o),l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.createScene=n.createScene.bind(n),n.createGrid=n.createGrid.bind(n),n.createSea=n.createSea.bind(n),n.createLights=n.createLights.bind(n),n.Island=n.Island.bind(n),n.createIslands=n.createIslands.bind(n),n.createIceberg=n.createIceberg.bind(n),n.createWaves=n.createWaves.bind(n),n.moveWaves=n.moveWaves.bind(n),n.start=n.start.bind(n),n.stop=n.stop.bind(n),n.animate=n.animate.bind(n),n.renderScene=n.renderScene.bind(n),n.windowResize=n.windowResize.bind(n),n.circle,n.controls,n.waves,n.wavesVertex=[],n.pointVertex=[],n.radius=160,n.islandNum=30,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),r(t,[{key:"componentDidMount",value:function(){this.createScene(),this.start()}},{key:"componentWillUnmount",value:function(){this.stop(),this.container.removeChild(this.renderer.domElement)}},{key:"createScene",value:function(){this.WIDTH=window.innerWidth,this.HEIGHT=window.innerHeight,this.scene=new o.Scene,this.scene.fog=new o.Fog(16243114,100,1e3),this.camera=new o.PerspectiveCamera(60,this.WIDTH/this.HEIGHT,1,1e4),this.renderer=new o.WebGLRenderer({alpha:!0,antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio?window.devicePixelRatio:1),this.renderer.setSize(this.WIDTH,this.HEIGHT),this.renderer.shadowMap.enabled=!0,this.container=document.getElementById("world"),this.container.appendChild(this.renderer.domElement),this.camera.position.set(0,150,450),this.camera.lookAt(new o.Vector3(0,0,0)),this.controls=new c(this.camera,this.renderer.domElement),this.controls.target=new o.Vector3(0,15,0),this.controls.maxPolarAngle=Math.PI/2,this.createGrid(),this.createSea(),this.createIceberg(this.islandNum),this.createLights(),this.createWaves(),s.createClouds()}},{key:"createGrid",value:function(){for(var e=100,t=100,n=100,r=100,i="black",a=new o.LineBasicMaterial({color:i,transparent:!0,opacity:0}),s=new o.Object3D,d=new o.Geometry,c=new o.Geometry,l=2*t/r,u=2*e/n,h=-t;h<=t;h+=l)d.vertices.push(new o.Vector3(-e,h,0)),d.vertices.push(new o.Vector3(e,h,0));for(var f=-e;f<=e;f+=u)d.vertices.push(new o.Vector3(f,-t,0)),d.vertices.push(new o.Vector3(f,t,0));var p=new o.LineSegments(d,a);s.add(p),s.rotation.x=Math.PI/2,this.scene.add(s);for(var m=-t;m<=t;m+=l)for(var w=-e;w<=e;w+=u)c.vertices.push(new o.Vector3(m,w,0));for(var v=null,y=0;y<this.islandNum;y++){for(var b=Math.floor(Math.random()*c.vertices.length-1+1);b===v;)b=Math.floor(Math.random()*c.vertices.length-1+1);this.pointVertex[y]=c.vertices[b],v=b}}},{key:"createSea",value:function(){var e=new o.CylinderGeometry(this.radius,this.radius,15,20,10),t=new o.MeshBasicMaterial({color:10484474,transparent:!0,opacity:.7,flatShading:!0}),n=new o.TetrahedronGeometry(170,3),r=new o.MeshBasicMaterial({color:16777215,transparent:!0,opacity:.5}),i=new o.Mesh(e,t);new o.Mesh(n,r);i.position.y=-5,i.receiveShadow=!0,this.scene.add(i)}},{key:"Island",value:function(e,t,n,r,i,a,s){var d=new o.CylinderGeometry(e,t,n,r,i),c=new o.MeshPhongMaterial({color:a,transparent:!1,opacity:s,flatShading:!0});this.mesh=new o.Mesh(d,c)}},{key:"createIslands",value:function(e){for(var t=[16251647,12709119,12698623,9672703,9696767],n=[],r=0,o=0;r<e;r++){var i=Math.floor(10*Math.random())+3,a=i+(Math.floor(10*Math.random())+1),s=i+(Math.floor(15*Math.random())-3),d=Math.floor(10*Math.random())+7,c=Math.floor(15*Math.random())+10,l=.1*(Math.floor(10*Math.random())+7);o<t.length-1?o++:o=0,n[r]=new this.Island(i,a,s,d,c,t[o],l),n[r].mesh.receiveShadow=!0,this.scene.add(n[r].mesh),n[r].mesh.position.x=this.pointVertex[r].x,n[r].mesh.position.y=this.pointVertex[r].z,n[r].mesh.position.z=this.pointVertex[r].y}}},{key:"createIceberg",value:function(e){for(var t=[16251647,12709119,12698623,9672703,9696767],n=new o.Object3D,r=0,i=0;r<e;r++){var a=Math.floor(15*Math.random())+3,s=Math.floor(1.2*Math.random())+1,d=new o.TetrahedronGeometry(a,s),c=new o.MeshPhongMaterial({color:t[i],flatShading:!0});i<t.length-1?i++:i=0;var l=new o.Mesh(d,c);l.position.x=this.pointVertex[r].x,l.position.y=this.pointVertex[r].z,l.position.z=this.pointVertex[r].y,l.rotation.x=Math.floor(Math.random()*Math.PI),l.rotation.y=Math.floor(Math.random()*Math.PI),l.rotation.z=Math.floor(Math.random()*Math.PI),n.add(l)}this.scene.add(n)}},{key:"createWaves",value:function(){var e=new o.RingGeometry(0,this.radius,20,20,20),t=new o.MeshBasicMaterial({color:10484474,transparent:!0,opacity:.7,side:o.DoubleSide,depthWrite:!1}),n=new o.Mesh(e,t);n.rotation.x=Math.PI/2;for(var r=[],i=e.vertices.length,a=0;a<i;a++){var s=e.vertices[a];r.push({y:s.y,x:s.x,z:s.z,ang:Math.random()*Math.PI*2,amp:3+3*Math.random(),speed:.008+.008*Math.random()})}this.wavesVertex=r,this.waves=n,this.scene.add(n)}},{key:"moveWaves",value:function(){for(var e=this.waves.geometry.vertices,t=e.length,n=0;n<t;n++){var r=e[n],o=this.wavesVertex[n];r.x=o.x+Math.cos(o.ang)*o.amp,r.z=o.z+Math.sin(o.ang)*o.amp,o.ang+=o.speed}this.waves.geometry.verticesNeedUpdate=!0,this.waves.rotation.z+=.005}},{key:"createLights",value:function(){var e=new o.AmbientLight(10066329);this.scene.add(e);var t=[];t[0]=new o.DirectionalLight(16777215,1),t[0].position.set(1,0,0),t[1]=new o.DirectionalLight(4650493,1),t[1].position.set(.75,1,.5),t[2]=new o.DirectionalLight(8519881,1),t[2].position.set(-.75,-1,.5),this.scene.add(t[0]),this.scene.add(t[1]),this.scene.add(t[2])}},{key:"windowResize",value:function(){this.HEIGHT=window.innerHeight,this.WIDTH=window.innerWidth,this.renderer.setSize(this.WIDTH,this.HEIGHT),this.camera.aspect=this.WIDTH/this.HEIGHT,this.camera.updateProjectionMatrix()}},{key:"start",value:function(){this.frameId||(this.frameId=requestAnimationFrame(this.animate))}},{key:"stop",value:function(){cancelAnimationFrame(this.frameId)}},{key:"animate",value:function(){this.controls.update(),this.moveWaves(),this.renderScene(),this.frameId=window.requestAnimationFrame(this.animate)}},{key:"renderScene",value:function(){this.renderer.render(this.scene,this.camera)}},{key:"render",value:function(){return window.addEventListener("resize",this.windowResize,!1),i.default.createElement("div",{id:"world"},i.default.createElement("p",null,i.default.createElement(a.Link,{to:"/"},"back to the landing page")))}}]),t}();t.default=l},"./worlds/world2/base.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ground=function(){console.log("create base");var e=new r.CylinderGeometry(160,160,20,15),t=new r.MeshBasicMaterial({color:5200672}),n=new r.Object3D,o=new r.Mesh(e,t);return n.add(o),n},t.tree=function(){console.log("create tree");var e=new r.TetrahedronGeometry(30,2),t=new r.MeshPhongMaterial({color:2919996,flatShading:!0}),n=new r.Mesh(e,t);n.position.y=30;var o=new r.CylinderGeometry(3,7,50,5),i=new r.MeshBasicMaterial({color:4996135,flatShading:!0}),a=new r.Mesh(o,i),s=new r.Object3D;return s.add(n),s.add(a),s.position.y=30,console.log(s),s};var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("./node_modules/three/build/three.module.js"))},"./worlds/world2/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=d(n("./node_modules/three/build/three.module.js")),i=function(e){return e&&e.__esModule?e:{default:e}}(n("./node_modules/react/index.js")),a=n("./node_modules/react-router-dom/es/index.js"),s=d(n("./worlds/world2/base.js"));function d(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}var c=n("./node_modules/three-orbit-controls/index.js")(o),l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.createScene=n.createScene.bind(n),n.createGrid=n.createGrid.bind(n),n.createLights=n.createLights.bind(n),n.start=n.start.bind(n),n.stop=n.stop.bind(n),n.animate=n.animate.bind(n),n.renderScene=n.renderScene.bind(n),n.windowResize=n.windowResize.bind(n),n.controls,n.pointVertex=[],n.radius=160,n.base=s.ground(),n.tree=s.tree(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),r(t,[{key:"componentDidMount",value:function(){this.createScene(),this.start()}},{key:"componentWillUnmount",value:function(){this.stop(),this.container.removeChild(this.renderer.domElement)}},{key:"createScene",value:function(){this.WIDTH=window.innerWidth,this.HEIGHT=window.innerHeight,this.scene=new o.Scene,this.scene.fog=new o.Fog(15250741,100,1e3),this.camera=new o.PerspectiveCamera(60,this.WIDTH/this.HEIGHT,1,1e4),this.renderer=new o.WebGLRenderer({alpha:!0,antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio?window.devicePixelRatio:1),this.renderer.setSize(this.WIDTH,this.HEIGHT),this.renderer.shadowMap.enabled=!0,this.container=document.getElementById("world"),this.container.appendChild(this.renderer.domElement),this.camera.position.set(0,150,450),this.camera.lookAt(new o.Vector3(0,0,0)),this.controls=new c(this.camera,this.renderer.domElement),this.controls.target=new o.Vector3(0,15,0),this.controls.maxPolarAngle=Math.PI/2,this.createGrid(),this.createLights(),this.scene.add(this.base),this.scene.add(this.tree)}},{key:"createGrid",value:function(){for(var e=100,t=100,n=100,r=100,i="black",a=new o.LineBasicMaterial({color:i,transparent:!0,opacity:0}),s=new o.Object3D,d=new o.Geometry,c=new o.Geometry,l=2*t/r,u=2*e/n,h=-t;h<=t;h+=l)d.vertices.push(new o.Vector3(-e,h,0)),d.vertices.push(new o.Vector3(e,h,0));for(var f=-e;f<=e;f+=u)d.vertices.push(new o.Vector3(f,-t,0)),d.vertices.push(new o.Vector3(f,t,0));var p=new o.LineSegments(d,a);s.add(p),s.rotation.x=Math.PI/2,this.scene.add(s);for(var m=-t;m<=t;m+=l)for(var w=-e;w<=e;w+=u)c.vertices.push(new o.Vector3(m,w,0));for(var v=null,y=0;y<this.islandNum;y++){for(var b=Math.floor(Math.random()*c.vertices.length-1+1);b===v;)b=Math.floor(Math.random()*c.vertices.length-1+1);this.pointVertex[y]=c.vertices[b],v=b}}},{key:"createLights",value:function(){var e=new o.AmbientLight(12366257,.8);this.scene.add(e);var t=[];t[0]=new o.DirectionalLight(16766056,.5),t[0].position.set(0,1,0),t[1]=new o.DirectionalLight(48841,1),t[1].position.set(.75,1,.5),t[2]=new o.DirectionalLight(13172859,1),t[2].position.set(-.75,-1,.5),this.scene.add(t[0]),this.scene.add(t[1]),this.scene.add(t[2])}},{key:"windowResize",value:function(){this.HEIGHT=window.innerHeight,this.WIDTH=window.innerWidth,this.renderer.setSize(this.WIDTH,this.HEIGHT),this.camera.aspect=this.WIDTH/this.HEIGHT,this.camera.updateProjectionMatrix()}},{key:"start",value:function(){this.frameId||(this.frameId=requestAnimationFrame(this.animate))}},{key:"stop",value:function(){cancelAnimationFrame(this.frameId)}},{key:"animate",value:function(){this.controls.update(),this.renderScene(),this.frameId=window.requestAnimationFrame(this.animate)}},{key:"renderScene",value:function(){this.renderer.render(this.scene,this.camera)}},{key:"render",value:function(){return window.addEventListener("resize",this.windowResize,!1),i.default.createElement("div",{id:"world"},i.default.createElement("p",null,i.default.createElement(a.Link,{to:"/"},"back to the landing page")))}}]),t}();t.default=l},0:function(e,t,n){e.exports=n("./index.js")}});
//# sourceMappingURL=bundle.js.map