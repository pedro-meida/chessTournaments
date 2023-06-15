import React, { useState } from 'react';
import './RegisterPage.css';
import logo from '../imgs/ChessLogo.png'
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
    const navigate = useNavigate();

    const [info, setInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        username: '',
        birthDate: '',
        sex: '',
        nacionality: '',
        address: '',
        postalCode: '',
        photo: ''
    });

    const [firstNome, setfirstNome] = useState(info.firstName);

    const handleInputFirstName = (event) => {
        setfirstNome(event.target.value);
        setInfo({ ...info, firstName: event.target.value });
    }

    const [lastName, setLastName] = useState(info.lastName);

    const handleInputLastName = (event) => {
        setLastName(event.target.value);
        setInfo({ ...info, lastName: event.target.value });
    }

    const [email, setEmail] = useState(info.email);

    const handleInputEmail = (event) => {
        setEmail(event.target.value);
        setInfo({ ...info, email: event.target.value });
    }

    const [phoneNumber, setPhoneNumber] = useState(info.phoneNumber);

    const handleInputPhoneNumber = (event) => {
        setPhoneNumber(event.target.value);
        setInfo({ ...info, phoneNumber: event.target.value });
    }

    const [password, setPassword] = useState(info.password);

    const handleInputPassword = (event) => {
        setPassword(event.target.value);
        setInfo({ ...info, password: event.target.value });
    }

    const [ConfirmPassword, setConfirmPassword] = useState(info.ConfirmPassword);

    const handleInputConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    }

    const handleGoToMissingData = () => {
        if (firstNome === '' || lastName === '' || email === '' || phoneNumber === '' || password === '' || ConfirmPassword === '') {
            alert('Preencha todos os campos');
        } else {
            if (password === ConfirmPassword) {
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
                            <input className='InputsRegister' type='text' value={firstNome} onChange={handleInputFirstName} placeholder='First Name' />
                            <input className='InputsRegister' type='text' value={lastName} onChange={handleInputLastName} placeholder='Last Name' />
                            <input className='InputsRegister' type='text' value={email} onChange={handleInputEmail} placeholder='Email' />
                            <input className='InputsRegister' type='text' value={phoneNumber} onChange={handleInputPhoneNumber} placeholder='Phone Number' />
                            <input className='InputsRegister' type='password' value={password} onChange={handleInputPassword} placeholder='Password' />
                            <input className='InputsRegister' type='password' value={ConfirmPassword} onChange={handleInputConfirmPassword} placeholder='Confirm Password' />
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