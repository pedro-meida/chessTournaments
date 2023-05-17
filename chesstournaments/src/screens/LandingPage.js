import './LandingPage.css';
import logo from '../imgs/ChessLogo.png'
import ImageSlider from '../Components/ImageSlider'
import { useNavigate } from 'react-router-dom';
import { SliderData } from '../Components/SliderData';

function LandingPage() {
    const navigate = useNavigate();
    const handleGoToLogin = () => navigate("./Login");

    return (
        <>
            <div className='baseLandingPage'>
                <header className="header">
                    <h1 className="txtlogo">Chess Tournaments</h1>
                    <img className='imgChessLogoLandingPage' alt='Imagem da Página do Landing Page' src={logo} />
                    <button className="btntoLogin" onClick={handleGoToLogin}>Login</button>
                </header>
                <div className="slick-track" >
                    <ImageSlider slides={SliderData} />
                </div>
            </div>
        </>
    );
}

export default LandingPage;