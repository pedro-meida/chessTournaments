import './LoginPage.css';
import logo from '../imgs/ChessLogo.png'
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const navigate = useNavigate();
    const handleGoToHome = () => navigate("../");

    return (
        <>
            <div className='baseLogin'>
                <div className='ContainerLogin'>
                    <img
                        className='imgChessLogoLogin'
                        onClick={handleGoToHome}
                        alt='Imagem da Página Login'
                        src={logo} />
                    <div className='ContainerLogin_Form'>
                        <h1 style={{ color: 'white' }}>Login</h1>
                        <form>
                            <input className='InputsLogin' type='text' placeholder='Email or phone number' />
                            <input className='InputsLogin' type='password' placeholder='Password' />
                            <button className='btnLogin'>Login</button>
                            <a className='AnchorLogin' href='../CriarConta'>Ainda não tem Conta?</a>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;