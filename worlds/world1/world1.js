import React from 'react';
import Unity, { UnityContent, UnityVersion } from 'react-unity-webgl';

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

        this.unityContent.on("loaded", message =>{
            console.log("unity on!", message);
        });
    }

    render(){
        console.log("unity content", this.unityContent);
        
        return(
            <div className="world1">
            <Unity unityContent={this.unityContent}/>
            </div>
        )
    }
}
export default World1;