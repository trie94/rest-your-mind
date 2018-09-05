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
            <li><Link to='/world1'>to the world1</Link></li>
            </div>
        )
    }
}

export default Home;
