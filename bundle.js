!function(e){function t(t){for(var r,o,i=t[0],a=t[1],s=t[2],d=0,c=[];d<i.length;d++)o=i[d],I[o]&&c.push(I[o][0]),I[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(R&&R(t);c.length;)c.shift()();return H.push.apply(H,s||[]),n()}function n(){for(var e,t=0;t<H.length;t++){for(var n=H[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==I[i]&&(r=!1)}r&&(H.splice(t--,1),e=S(S.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!g[e]||!_[e])return;for(var n in _[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(m[n]=t[n]);0==--w&&0===v&&x()}(e,t),r&&r(e,t)};var o,i=!0,a="4bcaf11b49946b7eb67c",s=1e4,d={},c=[],l=[];var u=[],f="idle";function p(e){f=e;for(var t=0;t<u.length;t++)u[t].call(null,e)}var h,m,y,w=0,v=0,b={},_={},g={};function j(e){return+e+""===e?+e:e}function O(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return i=e,p("check"),function(e){return e=e||1e4,new Promise(function(t,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=S.p+""+a+".hot-update.json";r.open("GET",o,!0),r.timeout=e,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)t();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void n(e)}t(e)}}})}(s).then(function(e){if(!e)return p("idle"),null;_={},b={},g=e.c,y=e.h,p("prepare");var t=new Promise(function(e,t){h={resolve:e,reject:t}});for(var n in m={},I)E(n);return"prepare"===f&&0===v&&0===w&&x(),t})}function E(e){g[e]?(_[e]=!0,w++,function(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.charset="utf-8",n.src=S.p+""+e+"."+a+".hot-update.js",t.appendChild(n)}(e)):b[e]=!0}function x(){p("ready");var e=h;if(h=null,e)if(i)Promise.resolve().then(function(){return M(i)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in m)Object.prototype.hasOwnProperty.call(m,n)&&t.push(j(n));e.resolve(t)}}function M(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,r,o,i,s;function l(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),a=o.id,s=o.chain;if((i=P[a])&&!i.hot._selfAccepted){if(i.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:a};if(i.hot._main)return{type:"unaccepted",chain:s,moduleId:a};for(var d=0;d<i.parents.length;d++){var c=i.parents[d],l=P[c];if(l){if(l.hot._declinedDependencies[a])return{type:"declined",chain:s.concat([c]),moduleId:a,parentId:c};-1===t.indexOf(c)&&(l.hot._acceptedDependencies[a]?(n[c]||(n[c]=[]),u(n[c],[a])):(delete n[c],t.push(c),r.push({chain:s.concat([c]),id:c})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var h={},w=[],v={},b=function(){console.warn("[HMR] unexpected require("+O.moduleId+") to disposed module")};for(var _ in m)if(Object.prototype.hasOwnProperty.call(m,_)){var O;s=j(_);var E=!1,x=!1,M=!1,H="";switch((O=m[_]?l(s):{type:"disposed",moduleId:_}).chain&&(H="\nUpdate propagation: "+O.chain.join(" -> ")),O.type){case"self-declined":t.onDeclined&&t.onDeclined(O),t.ignoreDeclined||(E=new Error("Aborted because of self decline: "+O.moduleId+H));break;case"declined":t.onDeclined&&t.onDeclined(O),t.ignoreDeclined||(E=new Error("Aborted because of declined dependency: "+O.moduleId+" in "+O.parentId+H));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(O),t.ignoreUnaccepted||(E=new Error("Aborted because "+s+" is not accepted"+H));break;case"accepted":t.onAccepted&&t.onAccepted(O),x=!0;break;case"disposed":t.onDisposed&&t.onDisposed(O),M=!0;break;default:throw new Error("Unexception type "+O.type)}if(E)return p("abort"),Promise.reject(E);if(x)for(s in v[s]=m[s],u(w,O.outdatedModules),O.outdatedDependencies)Object.prototype.hasOwnProperty.call(O.outdatedDependencies,s)&&(h[s]||(h[s]=[]),u(h[s],O.outdatedDependencies[s]));M&&(u(w,[O.moduleId]),v[s]=b)}var D,k=[];for(r=0;r<w.length;r++)s=w[r],P[s]&&P[s].hot._selfAccepted&&k.push({module:s,errorHandler:P[s].hot._selfAccepted});p("dispose"),Object.keys(g).forEach(function(e){!1===g[e]&&function(e){delete I[e]}(e)});for(var T,R,A=w.slice();A.length>0;)if(s=A.pop(),i=P[s]){var L={},C=i.hot._disposeHandlers;for(o=0;o<C.length;o++)(n=C[o])(L);for(d[s]=L,i.hot.active=!1,delete P[s],delete h[s],o=0;o<i.children.length;o++){var G=P[i.children[o]];G&&((D=G.parents.indexOf(s))>=0&&G.parents.splice(D,1))}}for(s in h)if(Object.prototype.hasOwnProperty.call(h,s)&&(i=P[s]))for(R=h[s],o=0;o<R.length;o++)T=R[o],(D=i.children.indexOf(T))>=0&&i.children.splice(D,1);for(s in p("apply"),a=y,v)Object.prototype.hasOwnProperty.call(v,s)&&(e[s]=v[s]);var z=null;for(s in h)if(Object.prototype.hasOwnProperty.call(h,s)&&(i=P[s])){R=h[s];var W=[];for(r=0;r<R.length;r++)if(T=R[r],n=i.hot._acceptedDependencies[T]){if(-1!==W.indexOf(n))continue;W.push(n)}for(r=0;r<W.length;r++){n=W[r];try{n(R)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:s,dependencyId:R[r],error:e}),t.ignoreErrored||z||(z=e)}}}for(r=0;r<k.length;r++){var q=k[r];s=q.module,c=[s];try{S(s)}catch(e){if("function"==typeof q.errorHandler)try{q.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:n,originalError:e}),t.ignoreErrored||z||(z=n),z||(z=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:s,error:e}),t.ignoreErrored||z||(z=e)}}return z?(p("fail"),Promise.reject(z)):(p("idle"),new Promise(function(e){e(w)}))}var P={},I={0:0},H=[];function S(t){if(P[t])return P[t].exports;var n=P[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:O,apply:M,status:function(e){if(!e)return f;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var t=u.indexOf(e);t>=0&&u.splice(t,1)},data:d[e]};return o=void 0,t}(t),parents:(l=c,c=[],l),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=P[e];if(!t)return S;var n=function(n){return t.hot.active?(P[n]?-1===P[n].parents.indexOf(e)&&P[n].parents.push(e):(c=[e],o=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),c=[]),S(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return S[e]},set:function(t){S[e]=t}}};for(var i in S)Object.prototype.hasOwnProperty.call(S,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(n,i,r(i));return n.e=function(e){return"ready"===f&&p("prepare"),v++,S.e(e).then(t,function(e){throw t(),e});function t(){v--,"prepare"===f&&(b[e]||E(e),0===v&&0===w&&x())}},n.t=function(e,t){return 1&t&&(e=n(e)),S.t(e,-2&t)},n}(t)),n.l=!0,n.exports}S.m=e,S.c=P,S.d=function(e,t,n){S.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},S.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},S.t=function(e,t){if(1&t&&(e=S(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(S.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)S.d(n,r,function(t){return e[t]}.bind(null,r));return n},S.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return S.d(t,"a",t),t},S.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},S.p="/rest-your-mind/",S.h=function(){return a};var D=window.webpackJsonp=window.webpackJsonp||[],k=D.push.bind(D);D.push=t,D=D.slice();for(var T=0;T<D.length;T++)t(D[T]);var R=k;H.push([0,1]),n()}({"./index.js":function(e,t,n){"use strict";var r=d(n("./node_modules/react/index.js")),o=d(n("./node_modules/react-dom/index.js")),i=n("./node_modules/react-router-dom/es/index.js"),a=d(n("./worlds/index/index.js")),s=d(n("./worlds/world1/index.js"));function d(e){return e&&e.__esModule?e:{default:e}}n("./style.scss");e.hot.accept(),e.hot.dispose(function(){var e=document.querySelector("body"),t=e.cloneNode(!1);e.parentNode.insertBefore(t,e),e.parentNode.removeChild(e)}),o.default.render(r.default.createElement(i.BrowserRouter,{basename:"/rest-your-mind"},r.default.createElement(i.Switch,null,r.default.createElement(i.Route,{exact:!0,path:"/",component:a.default}),r.default.createElement(i.Route,{path:"/world1",component:s.default}))),document.getElementById("root"))},"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./style.scss":function(e,t,n){(e.exports=n("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,"html {\n  font-family: 'Source Sans Pro', sans-serif; }\n\nbody {\n  margin: 0; }\n\n#root {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: linear-gradient(#fcf8ef, #eceae6); }\n\np {\n  margin: 1.2em; }\n",""])},"./style.scss":function(e,t,n){var r=n("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./style.scss");"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},i=n("./node_modules/style-loader/lib/addStyles.js")(r,o);r.locals&&(e.exports=r.locals),e.hot.accept("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./style.scss",function(){var t=n("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./style.scss");if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");i(t)}),e.hot.dispose(function(){i()})},"./worlds/index/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(n("./node_modules/react/index.js")),i=n("./node_modules/react-router-dom/es/index.js");var a=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"render",value:function(){return o.default.createElement("div",null,o.default.createElement("p",null,"Welcome to the Rest Your Mind!"),o.default.createElement("p",null,o.default.createElement(i.Link,{to:"/world1"},"to the world")))}}]),t}();t.default=a},"./worlds/world1/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("./node_modules/three/build/three.module.js")),i=function(e){return e&&e.__esModule?e:{default:e}}(n("./node_modules/react/index.js")),a=n("./node_modules/react-router-dom/es/index.js");var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.createScene=n.createScene.bind(n),n.createSea=n.createSea.bind(n),n.createParticles=n.createParticles.bind(n),n.createLights=n.createLights.bind(n),n.Island=n.Island.bind(n),n.createIslands=n.createIslands.bind(n),n.start=n.start.bind(n),n.stop=n.stop.bind(n),n.animate=n.animate.bind(n),n.renderScene=n.renderScene.bind(n),n.windowResize=n.windowResize.bind(n),n.circle,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),r(t,[{key:"componentDidMount",value:function(){this.createScene(),this.start()}},{key:"componentWillUnmount",value:function(){this.stop(),this.container.removeChild(this.renderer.domElement)}},{key:"createScene",value:function(){this.WIDTH=window.innerWidth,this.HEIGHT=window.innerHeight,this.scene=new o.Scene,this.scene.fog=new o.Fog(16243114,100,950),this.camera=new o.PerspectiveCamera(60,this.WIDTH/this.HEIGHT,1,1e4),this.renderer=new o.WebGLRenderer({alpha:!0,antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio?window.devicePixelRatio:1),this.renderer.setSize(this.WIDTH,this.HEIGHT),this.renderer.shadowMap.enabled=!0,this.container=document.getElementById("world"),this.container.appendChild(this.renderer.domElement),this.camera.position.set(0,150,450),this.camera.lookAt(new o.Vector3(0,0,0)),this.createSea(),this.createIslands(20),this.createParticles(),this.createLights()}},{key:"createSea",value:function(){var e=new o.CylinderGeometry(160,160,15,20,10),t=new o.MeshBasicMaterial({color:10484474,transparent:!0,opacity:.7,flatShading:!0}),n=new o.TetrahedronGeometry(170,3),r=new o.MeshBasicMaterial({color:16777215,transparent:!0,opacity:.5}),i=new o.Mesh(e,t);new o.Mesh(n,r);i.position.y=-5,i.receiveShadow=!0,this.scene.add(i)}},{key:"Island",value:function(e,t,n,r,i,a,s){var d=new o.CylinderGeometry(e,t,n,r,i),c=new o.MeshPhongMaterial({color:a,flatShading:!0});this.mesh=new o.Mesh(d,c)}},{key:"createIslands",value:function(e){for(var t=[16251647,12709119,12698623,9672703,9696767],n=[],r=0,o=0;r<=e;r++){var i=Math.round(10*Math.random()),a=i+Math.round(10*Math.random()),s=a-Math.round(.5*Math.round(10*Math.random())),d=.1*(Math.floor(10*Math.random())+7);o<t.length-1?o++:o=0,n[r]=new this.Island(i,a,s,10,10,t[o],d),n[r].mesh.receiveShadow=!0,this.scene.add(n[r].mesh),n[r].mesh.position.x=10*(Math.floor(10*Math.random())+1)*Math.pow(-1,r),n[r].mesh.position.y=10*Math.random(),n[r].mesh.position.z=100*Math.random()}}},{key:"createParticles",value:function(){var e=new o.Object3D,t=new o.TetrahedronGeometry(30,1),n=new o.MeshPhongMaterial({color:16777215,flatShading:!0}),r=new o.Mesh(t,n);r.scale.x=r.scale.y=r.scale.z=.2,r.position.x=r.position.y=0,r.position.z=50,e.add(r),this.scene.add(e),this.circle=e}},{key:"createLights",value:function(){var e=new o.AmbientLight(10066329);this.scene.add(e);var t=[];t[0]=new o.DirectionalLight(16777215,1),t[0].position.set(1,0,0),t[1]=new o.DirectionalLight(4650493,1),t[1].position.set(.75,1,.5),t[2]=new o.DirectionalLight(8519881,1),t[2].position.set(-.75,-1,.5),this.scene.add(t[0]),this.scene.add(t[1]),this.scene.add(t[2])}},{key:"windowResize",value:function(){this.HEIGHT=window.innerHeight,this.WIDTH=window.innerWidth,this.renderer.setSize(this.WIDTH,this.HEIGHT),this.camera.aspect=this.WIDTH/this.HEIGHT,this.camera.updateProjectionMatrix()}},{key:"start",value:function(){this.frameId||(this.frameId=requestAnimationFrame(this.animate))}},{key:"stop",value:function(){cancelAnimationFrame(this.frameId)}},{key:"animate",value:function(){this.circle.rotation.x+=.01,this.circle.rotation.y+=.02,this.circle.rotation.z+=.03,this.renderScene(),this.frameId=window.requestAnimationFrame(this.animate)}},{key:"renderScene",value:function(){this.renderer.render(this.scene,this.camera)}},{key:"render",value:function(){return window.addEventListener("resize",this.windowResize,!1),i.default.createElement("div",{id:"world"},i.default.createElement("p",null,i.default.createElement(a.Link,{to:"/"},"back to the landing page")))}}]),t}();t.default=s},0:function(e,t,n){e.exports=n("./index.js")}});
//# sourceMappingURL=bundle.js.map