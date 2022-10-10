import React from "react";
import './contact.scss';

function Contact(){
    return(
        <div className="Contact">
            <figure className="titleContact">
                <h1>Vous avez une question? une Collab ?</h1>
            </figure>
            <figure className="contentContact">
                <form action="POST">
                    <div className="containerField">
                        <input className="fieldsContact" type="text" placeholder="Nom et Prenom" />                       
                    </div>

                    <div className="containerField">
                        <input className="fieldsContact" type="email" placeholder="Adresse mail"/>
                    </div>

                    <div className="containerTextarea">
                        <textarea placeholder="Ecrivez votre message"></textarea>
                    </div>

                    <div className="containersubmit">
                        <input type="submit" value="Envoyer" />
                    </div>

                </form>
                
            </figure>
        </div>
    )
}

export default Contact;