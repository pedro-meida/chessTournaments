import React from 'react'
import './HeaderLandingPage.css'
import logo from '../imgs/ChessLogo.png'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';

function HeadearLandingPage() {
    const navigate = useNavigate();
    const handleGoToLogin = () => navigate("../Login");

    const { isLoggedIn, setIsLoggedIn, setUser } = useAuth();

    console.log(isLoggedIn);

    const handleGoToLogut = () => {
        setIsLoggedIn(false);
        setUser(null);
    }

    return (
        <header className="header">
            <h1 className="txtlogo">Chess Tournaments</h1>
            <img className='imgChessLogoLandingPage' alt='Imagem da Página do Landing Page' src={logo} />
            <div className="menuUrls">
                <ul className='ulHeader'>
                    {isLoggedIn ? (
                        <li><a href="./UserPage">Profile</a></li>
                    ) : (
                        <li><a href="./">Info</a></li>
                    )}
                    <li><a href="./ChessRanking">Ranking</a></li>
                    <li><a href="./Tournaments">Tournaments</a></li>
                    <li><a href="./Teams">Teams</a></li>
                    <li><a href="./AboutUs">About us</a></li>
                </ul>
            </div>
            {isLoggedIn ? (
                <button className="btntoLogin" onClick={handleGoToLogut} style={{ margin: '0 0 0 3%' }}>Logout</button>
            ) : (
                <button className="btntoLogin" onClick={handleGoToLogin} style={{ margin: '0 0 0 5%' }}>Login</button>
            )}
        </header>
    )
}

export default HeadearLandingPage