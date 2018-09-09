import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './worlds/index/index';
import World0 from './worlds/world0/world0';

import './style.scss';

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
            <p><a href="/world0">GO TO THE WORLD0</a></p>
            </div>
        )
    }
}

export default Index;

ReactDom.render(
    <BrowserRouter>
    <Switch>
        <Route exact path ='/' component={Home}/>
        <Route path = '/world0' component={World0}/>
    </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
