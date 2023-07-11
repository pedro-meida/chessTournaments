import React, { useState } from 'react';
import './RegisterPage.css';
import logo from '../imgs/ChessLogo.png'
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
    const navigate = useNavigate();

    const [info, setInfo] = useState({
        FirstName: '',
        LastName: '',
        DateOfBirth: '',
        Gender: '',
        Nationality: '',
        Email: '',
        PhoneNumber: '',
        Address: '',
        PostalCode: '',
        IsEmployee: '',
        Score: '',
        ImagePath: '',
        Password: ''
    });

    const handleInputFirstName = (event) => {
        setInfo({ ...info, FirstName: event.target.value });
    }

    const handleInputLastName = (event) => {
        setInfo({ ...info, LastName: event.target.value });
    }

    const handleInputEmail = (event) => {
        setInfo({ ...info, Email: event.target.value });
    }

    const handleInputPhoneNumber = (event) => {
        setInfo({ ...info, PhoneNumber: event.target.value });
    }

    const handleInputPassword = (event) => {
        setInfo({ ...info, Password: event.target.value });
    }

    const [confirmPassword, setConfirmPassword] = useState('');

    const handleInputConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    }

    const handleGoToMissingData = () => {
        if (info.FirstName === '' || info.LastName === '' || info.Email === '' || info.PhoneNumber === '' || info.Password === '' || confirmPassword === '') {
            alert('Preencha todos os campos');
        } else {
            if (info.Password === confirmPassword) {
                navigate(
                    "../CriarConta/DadosEmFalta",
                    { state: { info: info } }
                );
            } else {
                alert('As passwords não coincidem');
            }
        }
    }

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
                            <input className='InputsRegister' type='text' value={info.FirstName} onChange={handleInputFirstName} placeholder='First Name' />
                            <input className='InputsRegister' type='text' value={info.LastName} onChange={handleInputLastName} placeholder='Last Name' />
                            <input className='InputsRegister' type='text' value={info.Email} onChange={handleInputEmail} placeholder='Email' />
                            <input className='InputsRegister' type='text' value={info.PhoneNumber} onChange={handleInputPhoneNumber} placeholder='Phone Number' />
                            <input className='InputsRegister' type='password' value={info.Password} onChange={handleInputPassword} placeholder='Password' />
                            <input className='InputsRegister' type='password' value={confirmPassword} onChange={handleInputConfirmPassword} placeholder='Confirm Password' />
                            <button className='btnRegister' onClick={handleGoToMissingData}>Sign Up</button>
                            <a className='AnchorRegister' href='../Login'>Already have an account?</a>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RegisterPage;