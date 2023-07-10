import './LoginPage.css';
import logo from '../imgs/ChessLogo.png'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const handleGoToHome = () => navigate("../");

    const { setUser, setIsLoggedIn } = useAuth();

    /*const handleLogin = async () => {
        try {
            console.log(email, password)
            if (email === '' || password === '') {
                alert('Dados em falta');
            }
            else {
                const response = await fetch('http://youthere.pythonanywhere.com/auth/' + email + '/' + password, {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                });
                if (response.status === 404) {
                    alert('Utilizador não encontrado');
                } else if (response.status === 401) {
                    alert('A password está incorreta');
                } else {
                    const data = await response.json();
                    if (data != null) {
                        setUser(data);
                        setIsLoggedIn(true);
                        navigate("../userPage")
                    }
                }
            }
        } catch (error) {
            console.error(error);
        }

    }*/

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        setIsLoggedIn(true);
        setUser({
            email: email,
            password: password
        })
        navigate("../userPage")
    };

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
                        <form onSubmit={handleSubmit}>
                            <input
                                className='InputsLogin'
                                type='text'
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                className='InputsLogin'
                                type='password'
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button className='btnLogin'>Login</button>
                        </form>
                        <a className='AnchorLogin' href='../CriarConta'>Don't have an account?</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;