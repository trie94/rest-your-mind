import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div>
            this is my landing page
            <p><a href="/world0">GO TO THE WORLD0</a></p>
            </div>
        )
    }
}

export default Home;
