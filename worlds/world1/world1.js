import React from 'react';
import Unity, { UnityContent, UnityVersion } from 'react-unity-webgl';
import { Link } from 'react-router-dom';

class World1 extends React.Component {
    constructor(props){
        super(props);
        this.state = {};

        this.unityContent = new UnityContent(
            "worlds/world1/Build/Build.json",
            "worlds/world1/Build/UnityLoader.js", {
                unityVersion: UnityVersion.UNITY_2018
            }
        );

        this.unityContent.on("loaded", message => {
            console.log("unity on!", message);
        });
    }

    render(){
        return(
            <div className="world1">
            world1
            <Unity unityContent={this.unityContent}/>
            <li><Link to='/'>back to the landing page</Link></li>
            </div>
        )
    }
}
export default World1;