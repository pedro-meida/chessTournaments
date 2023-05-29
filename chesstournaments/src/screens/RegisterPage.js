import './RegisterPage.css';
import logo from '../imgs/ChessLogo.png'
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
    const navigate = useNavigate();
    const handleGoToHome = () => navigate("../");

    return (
        <>
            <div className='baseRegister'>
                <div className='ContainerRegister'>
                    <img
                        className='imgChessLogoRegister'
                        onClick={handleGoToHome}
                        alt='Imagem da Página Register'
                        src={logo} />
                    <div className='ContainerRegister_Form'>
                        <h1 style={{ color: 'white' }}>Create Account</h1>
                        <form>
                            <input className='InputsRegister' type='text' placeholder='First Name' />
                            <input className='InputsRegister' type='text' placeholder='Last Name' />
                            <input className='InputsRegister' type='text' placeholder='Email' />
                            <input className='InputsRegister' type='text' placeholder='Phone Number' />
                            <input className='InputsRegister' type='password' placeholder='Password' />
                            <input className='InputsRegister' type='password' placeholder='Confirm Password' />
                            <button className='btnRegister'>Sign Up</button>
                            <a className='AnchorRegister' href='../Login'>Already have an account?</a>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RegisterPage;