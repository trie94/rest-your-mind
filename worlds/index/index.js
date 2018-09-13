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
            <p>Welcome to the Rest Your Mind! This is the landing page</p>
            <p><Link to='/world1'>to the world</Link></p>
            </div>
        )
    }
}

export default Home;
