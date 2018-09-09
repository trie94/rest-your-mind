!function(e){function t(t){for(var r,o,i=t[0],a=t[1],c=t[2],s=0,d=[];s<i.length;s++)o=i[s],k[o]&&d.push(k[o][0]),k[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(R&&R(t);d.length;)d.shift()();return D.push.apply(D,c||[]),n()}function n(){for(var e,t=0;t<D.length;t++){for(var n=D[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==k[i]&&(r=!1)}r&&(D.splice(t--,1),e=I(I.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!j[e]||!_[e])return;for(var n in _[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(y[n]=t[n]);0==--b&&0===v&&x()}(e,t),r&&r(e,t)};var o,i=!0,a="474a8c991651d45a35ee",c=1e4,s={},d=[],l=[];var u=[],f="idle";function p(e){f=e;for(var t=0;t<u.length;t++)u[t].call(null,e)}var h,y,m,b=0,v=0,w={},_={},j={};function O(e){return+e+""===e?+e:e}function g(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return i=e,p("check"),function(e){return e=e||1e4,new Promise(function(t,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=I.p+""+a+".hot-update.json";r.open("GET",o,!0),r.timeout=e,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)t();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void n(e)}t(e)}}})}(c).then(function(e){if(!e)return p("idle"),null;_={},w={},j=e.c,m=e.h,p("prepare");var t=new Promise(function(e,t){h={resolve:e,reject:t}});for(var n in y={},k)E(n);return"prepare"===f&&0===v&&0===b&&x(),t})}function E(e){j[e]?(_[e]=!0,b++,function(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.charset="utf-8",n.src=I.p+""+e+"."+a+".hot-update.js",t.appendChild(n)}(e)):w[e]=!0}function x(){p("ready");var e=h;if(h=null,e)if(i)Promise.resolve().then(function(){return P(i)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in y)Object.prototype.hasOwnProperty.call(y,n)&&t.push(O(n));e.resolve(t)}}function P(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,r,o,i,c;function l(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),a=o.id,c=o.chain;if((i=H[a])&&!i.hot._selfAccepted){if(i.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:a};if(i.hot._main)return{type:"unaccepted",chain:c,moduleId:a};for(var s=0;s<i.parents.length;s++){var d=i.parents[s],l=H[d];if(l){if(l.hot._declinedDependencies[a])return{type:"declined",chain:c.concat([d]),moduleId:a,parentId:d};-1===t.indexOf(d)&&(l.hot._acceptedDependencies[a]?(n[d]||(n[d]=[]),u(n[d],[a])):(delete n[d],t.push(d),r.push({chain:c.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var h={},b=[],v={},w=function(){console.warn("[HMR] unexpected require("+g.moduleId+") to disposed module")};for(var _ in y)if(Object.prototype.hasOwnProperty.call(y,_)){var g;c=O(_);var E=!1,x=!1,P=!1,D="";switch((g=y[_]?l(c):{type:"disposed",moduleId:_}).chain&&(D="\nUpdate propagation: "+g.chain.join(" -> ")),g.type){case"self-declined":t.onDeclined&&t.onDeclined(g),t.ignoreDeclined||(E=new Error("Aborted because of self decline: "+g.moduleId+D));break;case"declined":t.onDeclined&&t.onDeclined(g),t.ignoreDeclined||(E=new Error("Aborted because of declined dependency: "+g.moduleId+" in "+g.parentId+D));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(g),t.ignoreUnaccepted||(E=new Error("Aborted because "+c+" is not accepted"+D));break;case"accepted":t.onAccepted&&t.onAccepted(g),x=!0;break;case"disposed":t.onDisposed&&t.onDisposed(g),P=!0;break;default:throw new Error("Unexception type "+g.type)}if(E)return p("abort"),Promise.reject(E);if(x)for(c in v[c]=y[c],u(b,g.outdatedModules),g.outdatedDependencies)Object.prototype.hasOwnProperty.call(g.outdatedDependencies,c)&&(h[c]||(h[c]=[]),u(h[c],g.outdatedDependencies[c]));P&&(u(b,[g.moduleId]),v[c]=w)}var M,S=[];for(r=0;r<b.length;r++)c=b[r],H[c]&&H[c].hot._selfAccepted&&S.push({module:c,errorHandler:H[c].hot._selfAccepted});p("dispose"),Object.keys(j).forEach(function(e){!1===j[e]&&function(e){delete k[e]}(e)});for(var T,R,A=b.slice();A.length>0;)if(c=A.pop(),i=H[c]){var C={},W=i.hot._disposeHandlers;for(o=0;o<W.length;o++)(n=W[o])(C);for(s[c]=C,i.hot.active=!1,delete H[c],delete h[c],o=0;o<i.children.length;o++){var G=H[i.children[o]];G&&((M=G.parents.indexOf(c))>=0&&G.parents.splice(M,1))}}for(c in h)if(Object.prototype.hasOwnProperty.call(h,c)&&(i=H[c]))for(R=h[c],o=0;o<R.length;o++)T=R[o],(M=i.children.indexOf(T))>=0&&i.children.splice(M,1);for(c in p("apply"),a=m,v)Object.prototype.hasOwnProperty.call(v,c)&&(e[c]=v[c]);var q=null;for(c in h)if(Object.prototype.hasOwnProperty.call(h,c)&&(i=H[c])){R=h[c];var B=[];for(r=0;r<R.length;r++)if(T=R[r],n=i.hot._acceptedDependencies[T]){if(-1!==B.indexOf(n))continue;B.push(n)}for(r=0;r<B.length;r++){n=B[r];try{n(R)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:c,dependencyId:R[r],error:e}),t.ignoreErrored||q||(q=e)}}}for(r=0;r<S.length;r++){var U=S[r];c=U.module,d=[c];try{I(c)}catch(e){if("function"==typeof U.errorHandler)try{U.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:n,originalError:e}),t.ignoreErrored||q||(q=n),q||(q=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:c,error:e}),t.ignoreErrored||q||(q=e)}}return q?(p("fail"),Promise.reject(q)):(p("idle"),new Promise(function(e){e(b)}))}var H={},k={0:0},D=[];function I(t){if(H[t])return H[t].exports;var n=H[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:g,apply:P,status:function(e){if(!e)return f;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var t=u.indexOf(e);t>=0&&u.splice(t,1)},data:s[e]};return o=void 0,t}(t),parents:(l=d,d=[],l),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=H[e];if(!t)return I;var n=function(n){return t.hot.active?(H[n]?-1===H[n].parents.indexOf(e)&&H[n].parents.push(e):(d=[e],o=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),d=[]),I(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return I[e]},set:function(t){I[e]=t}}};for(var i in I)Object.prototype.hasOwnProperty.call(I,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(n,i,r(i));return n.e=function(e){return"ready"===f&&p("prepare"),v++,I.e(e).then(t,function(e){throw t(),e});function t(){v--,"prepare"===f&&(w[e]||E(e),0===v&&0===b&&x())}},n.t=function(e,t){return 1&t&&(e=n(e)),I.t(e,-2&t)},n}(t)),n.l=!0,n.exports}I.m=e,I.c=H,I.d=function(e,t,n){I.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},I.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},I.t=function(e,t){if(1&t&&(e=I(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(I.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)I.d(n,r,function(t){return e[t]}.bind(null,r));return n},I.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return I.d(t,"a",t),t},I.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},I.p="./",I.h=function(){return a};var M=window.webpackJsonp=window.webpackJsonp||[],S=M.push.bind(M);M.push=t,M=M.slice();for(var T=0;T<M.length;T++)t(M[T]);var R=S;D.push([0,1]),n()}({"./index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=d(n("./node_modules/react/index.js")),i=d(n("./node_modules/react-dom/index.js")),a=n("./node_modules/react-router-dom/es/index.js"),c=d(n("./worlds/index/index.js")),s=d(n("./worlds/world0/world0.js"));function d(e){return e&&e.__esModule?e:{default:e}}n("./style.scss"),e.hot.accept(),e.hot.dispose(function(){var e=document.querySelector("body"),t=e.cloneNode(!1);e.parentNode.insertBefore(t,e),e.parentNode.removeChild(e)});var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"render",value:function(){return o.default.createElement("div",null,o.default.createElement("p",null,o.default.createElement("a",{href:"/world0"},"GO TO THE WORLD0")))}}]),t}();t.default=l,i.default.render(o.default.createElement(a.BrowserRouter,null,o.default.createElement(a.Switch,null,o.default.createElement(a.Route,{exact:!0,path:"/",component:c.default}),o.default.createElement(a.Route,{path:"/world0",component:s.default}))),document.getElementById("root"))},"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./style.scss":function(e,t,n){(e.exports=n("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,"html {\n  font-family: 'Source Sans Pro', sans-serif; }\n\nbody {\n  margin: 0; }\n\n#root {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  margin: 0;\n  background: linear-gradient(#e4e0ba, #f7d9aa); }\n",""])},"./style.scss":function(e,t,n){var r=n("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./style.scss");"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},i=n("./node_modules/style-loader/lib/addStyles.js")(r,o);r.locals&&(e.exports=r.locals),e.hot.accept("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./style.scss",function(){var t=n("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./style.scss");if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");i(t)}),e.hot.dispose(function(){i()})},"./worlds/index/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(n("./node_modules/react/index.js")),i=n("./node_modules/react-router-dom/es/index.js");var a=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"render",value:function(){return o.default.createElement("div",null,"Welcome to the Rest Your Mind!",o.default.createElement("li",null,o.default.createElement(i.Link,{to:"/world0"},"to the world0")))}}]),t}();t.default=a},"./worlds/world0/world0.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("./node_modules/three/build/three.module.js")),i=function(e){return e&&e.__esModule?e:{default:e}}(n("./node_modules/react/index.js")),a=n("./node_modules/react-router-dom/es/index.js");var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.createScene=n.createScene.bind(n),n.createPlane=n.createPlane.bind(n),n.createCube=n.createCube.bind(n),n.start=n.start.bind(n),n.stop=n.stop.bind(n),n.animate=n.animate.bind(n),n.renderScene=n.renderScene.bind(n),n.windowResize=n.windowResize.bind(n);return n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),r(t,[{key:"componentDidMount",value:function(){this.createScene(),this.start()}},{key:"componentWillUnmount",value:function(){this.stop(),this.container.removeChild(this.renderer.domElement)}},{key:"createScene",value:function(){this.WIDTH=window.innerWidth,this.HEIGHT=window.innerHeight,this.scene=new o.Scene,this.camera=new o.PerspectiveCamera(60,this.WIDTH/this.HEIGHT,1,1e4),this.renderer=new o.WebGLRenderer({alpha:!0,antialias:!0}),this.renderer.setSize(this.WIDTH,this.HEIGHT),this.renderer.shadowMap.enabled=!0,this.container=document.getElementById("world"),this.container.appendChild(this.renderer.domElement),this.camera.position.set(0,7,5),this.camera.lookAt(new o.Vector3(0,0,0)),this.createPlane(),this.createCube()}},{key:"createPlane",value:function(){var e=new o.PlaneGeometry(5,5),t=new o.MeshBasicMaterial({color:65535}),n=new o.Mesh(e,t);n.rotation.x=180,this.scene.add(n),this.plane=n}},{key:"createCube",value:function(){var e=new o.BoxGeometry(1,1,1),t=new o.MeshBasicMaterial({color:16777215}),n=new o.Mesh(e,t);this.scene.add(n),this.cube=n}},{key:"windowResize",value:function(){this.HEIGHT=window.innerHeight,this.WIDTH=window.innerWidth,this.renderer.setSize(this.WIDTH,this.HEIGHT),this.camera.aspect=this.WIDTH/this.HEIGHT,this.camera.updateProjectionMatrix()}},{key:"start",value:function(){this.frameId||(this.frameId=requestAnimationFrame(this.animate))}},{key:"stop",value:function(){cancelAnimationFrame(this.frameId)}},{key:"animate",value:function(){this.cube.rotation.x+=.01,this.cube.rotation.y+=.01,this.renderScene(),this.frameId=window.requestAnimationFrame(this.animate)}},{key:"renderScene",value:function(){this.renderer.render(this.scene,this.camera)}},{key:"render",value:function(){return window.addEventListener("resize",this.windowResize,!1),i.default.createElement("div",{id:"world"},"World0",i.default.createElement("li",null,i.default.createElement(a.Link,{to:"/"},"back to the landing page")))}}]),t}();t.default=c},0:function(e,t,n){e.exports=n("./index.js")}});
//# sourceMappingURL=bundle.js.map