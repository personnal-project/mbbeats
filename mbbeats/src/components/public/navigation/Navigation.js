import React from "react";
import './navigation.scss'

function Navigation(){
    return(
        <div className="Navigation">
            <figure className="logoHome">LOGO</figure>
            <nav className="navbar">
                <li className="is_active">Accueil</li>
                <li>Musique</li>
                <li>Beats</li>
                <li>Contact</li>
            </nav>
        </div>
    )
}

export default Navigation;