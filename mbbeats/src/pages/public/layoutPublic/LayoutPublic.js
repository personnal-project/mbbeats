import React from "react";
import Navigation from "../../../components/public/navigation/Navigation";
import Home from "../home/Home";
import './layoutpublic.scss'


function LayoutPublic(){
    return(
        <div className="LayoutPublic">
            <Navigation/>
            <Home/>
        </div>
    );
}

export default LayoutPublic;