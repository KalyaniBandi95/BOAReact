import React from "react";
import Demo from "./Demo";
import LocalStorage from "./LocalStorage";
import MainApp from './MainApp';

function Welcome() {
    return (
        <div className="container">            
            <p><b>Hi Kalyani,</b> Welcome to React</p>

            {/* <MainApp/> */}
            
            <LocalStorage/>
        </div>
    )
}

export default Welcome;