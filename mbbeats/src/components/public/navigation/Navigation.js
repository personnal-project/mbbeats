import React from "react";
import { Link } from "react-router-dom";
import './navigation.scss'

function Navigation(){

    return(
        <div className="Navigation">
            <figure className="logoHome">LOGO</figure>
            <nav className="navbar">
                <Link className="buttonNav" to="/home"><li className="is_active">Accueil</li></Link>
                <Link className="buttonNav" to="/musique"><li>Musique</li></Link>
                <Link className="buttonNav" to="/beats"><li>Beats</li></Link>
                <Link className="buttonNav" to="/contact"><li>Contact</li></Link>
            </nav>
        </div>
    )
}

export default Navigation;