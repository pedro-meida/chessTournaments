import React from 'react'
import './HeaderLandingPage.css'
import logo from '../imgs/ChessLogo.png'
import { useNavigate } from 'react-router-dom';

function HeadearLandingPage() {
    const navigate = useNavigate();
    const handleGoToLogin = () => navigate("./Login");

    return (
        <header className="header">
            <h1 className="txtlogo">Chess Tournaments</h1>
            <img className='imgChessLogoLandingPage' alt='Imagem da Página do Landing Page' src={logo} />
            <div class="menuUrls">
                <ul className='ulHeader'>
                    <li><a href="">Chess Info</a></li>
                    <li><a href="">Chess Ranking</a></li>
                    <li><a href="">Chess Tournaments</a></li>
                    <li><a href="">REVIEWS HARDWARE</a></li>
                    <li><a href="">ARTIGOS</a></li>
                    <li><a href="">SOBRE NÓS</a></li>
                    <li><a href="">CONTACTOS</a></li>
                </ul>
            </div>
            <button className="btntoLogin" onClick={handleGoToLogin}>Login</button>
        </header>
    )
}

export default HeadearLandingPage