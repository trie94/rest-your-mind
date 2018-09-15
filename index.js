import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Home from './worlds/index/index';
import World1 from './worlds/world1';
import World2 from './worlds/world2';

import './style.scss';

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

ReactDom.render(
    <BrowserRouter basename={basename}>
    <Switch>
        <Route exact path ='/' component={Home}/>
        <Route path = '/world1' component={World1}/>
        <Route path = '/world2' component={World2}/>
    </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
