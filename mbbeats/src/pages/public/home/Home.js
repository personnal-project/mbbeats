import React from 'react';
import VinyleHome from '../../../assets/vinyle.jpg'
import './home.scss'

function Home(){
    return(
        <div className='Home'>
            <article className='headerHome'>
                <img src={VinyleHome} alt="vinyle de la page home" />
            </article>
            <article className='containerMusiqueHome'>
                <figure className='titleMusique'>
                    <h1>LEFIEFOIZEFIOZEFIOZEFOIE EOFZIEF</h1>
                </figure>
                <figure className='contentMusiqueHome'>
                    <div className='items'></div>
                    <div className='items'></div>
                    <div className='items'></div>
                    <div className='items'></div>
                </figure>

            </article>

            <article className=''>

            </article>

            <article className='containerBeatsHome'>
                <figure className='titleBeats'>
                    <h1>LEFIEFOIZEFIOZEFIOZEFOIE EOFZIEF</h1>
                </figure>
                <figure className='contentBeatsHome'></figure>
                

            </article>

        </div>

    );
}

export default Home;