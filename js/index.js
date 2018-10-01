// import './style.scss';
import SceneManager from './SceneManager';

if (process.env.NODE_ENV !== 'production') { console.log("dev mode"); }
let basename = process.env.NODE_ENV == 'production' ? "/rest-your-mind" : "/";

if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => {
        const oldRootElem = document.querySelector('body');
        const newRootElem = oldRootElem.cloneNode(false);
        oldRootElem.parentNode.insertBefore(newRootElem, oldRootElem);
        oldRootElem.parentNode.removeChild(oldRootElem);
    });
} else {
    enableProdMode();
}

const canvas = document.createElement('canvas');
canvas.id = 'canvas';
document.body.appendChild(canvas);

const sceneManager = new SceneManager(canvas);

bindEventListeners();
render();

function bindEventListeners() {
	window.onresize = resizeCanvas;
	resizeCanvas();	
}

function resizeCanvas() {
	canvas.style.width = '100%';
	canvas.style.height= '100%';
	
	canvas.width  = canvas.offsetWidth;
	canvas.height = canvas.offsetHeight;
    
    sceneManager.onWindowResize();
}

function render() {
    requestAnimationFrame(render);
    // sceneManager.update();
}