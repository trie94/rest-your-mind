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
            Welcome to the Rest Your Mind!
            <li><Link to='/world0'>to the world0</Link></li>
            </div>
        )
    }
}

export default Home;
