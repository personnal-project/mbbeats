import React from "react";
import Navigation from "../../../components/public/navigation/Navigation";
import './layoutpublic.scss';
import { RouterView } from "react-view-router";


function LayoutPublic(){

    return(
        <div className="LayoutPublic">
            <Navigation/>
            <RouterView/>
        </div>
    );

}

export default LayoutPublic;