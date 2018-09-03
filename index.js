import React from 'react';
import ReactDom from 'react-dom';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Unity, { UnityContent } from 'react-unity-webgl';
import World1 from './worlds/world1/world1';

if (process.env.NODE_ENV !== 'production') { console.log("dev mode"); }

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

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div>
            hi from index
            < World1 />
            </div>
        )
    }
}

export default Index;

ReactDom.render(
    <Index/>,
    document.getElementById('root')
);
