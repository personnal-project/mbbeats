import React from "react";
import { Link } from 'react-router-dom';
import './beats.scss';

function Beats(){
    return(
        <div className="Beats">
            <figure className="titleBeats">
                <h1>BEATS</h1>
            </figure>
            <figure className="contentBeats">

                <div><Link className="previewBtn" to="/beatpreview">Preview beat</Link></div>
                <div><figure>Preview beat</figure></div>
                <div><figure>Preview beat</figure></div>
                <div><figure>Preview beat</figure></div>
                <div><figure>Preview beat</figure></div>


                <div><figure>Preview beat</figure></div>
                <div><figure>Preview beat</figure></div>
                <div><figure>Preview beat</figure></div>
                <div><figure>Preview beat</figure></div>
                <div><figure>Preview beat</figure></div>
                
            </figure>
        </div>
    )
}

export default Beats;