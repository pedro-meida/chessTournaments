import React, { useState } from 'react'
import './MissingDataRegisterPage.css';
import logo from '../imgs/ChessLogo.png'
import { useLocation, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function MissingDataRegisterPage() {
    const location = useLocation();
    const initialInfo = location.state.info;
    const [info, setInfo] = useState(initialInfo);

    const [username, setUsername] = useState(info.username);

    const handleInputUsername = (event) => {
        setUsername(event.target.value);
        setInfo({ ...info, username: event.target.value });
    }

    const [birthDate, setBirthDate] = useState(info.birthDate);
    const handleInputBirthDate = (date) => {
        setBirthDate(date);
        setInfo({ ...info, birthDate: date.toLocaleDateString('pt-PT') });
    }

    const [sexo, setSexo] = useState(info.sex)

    const handleInputSexo = (event) => {
        setSexo(event.target.value);
        setInfo({ ...info, sex: event.target.value })
    }

    const [nacionalidade, setNacionalidade] = useState(info.nacionalidade);

    const handleInputNacionalidade = (event) => {
        setNacionalidade(event.target.value);
        setInfo({ ...info, nacionality: event.target.value });
    }

    const [address, setAddress] = useState(info.address);

    const handleInputAddress = (event) => {
        setAddress(event.target.value);
        setInfo({ ...info, address: event.target.value });
    }

    const [postalCode, setPostalCode] = useState(info.postalCode);

    const handleInputPostalCode = (event) => {
        setPostalCode(event.target.value);
        setInfo({ ...info, postalCode: event.target.value });
    }

    const handleInputPhoto = (event) => {
        const selectedPhoto = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setInfo({ ...info, photo: reader.result });
        };

        if (selectedPhoto) {
            reader.readAsDataURL(selectedPhoto);
        }

    }

    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();
        if (username === '' || birthDate === '' || sexo === '' || nacionalidade === '' || address === '' || postalCode === '') {
            alert('Preencha todos os campos');
            navigate('/');
        } else {
            const response = await fetch('https://localhost:7159/Pessoa/Create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(info)
            });
            console.log(response);
            if (response.status === 201) {
                console.log("criado");
                navigate('/Login');
            } else {
                alert('Erro ao Criar Conta');
                navigate('/');
            }
        }
    }

    /*const handleSubmit = (event) => {
        event.preventDefault();
        if (username === '' || birthDate === '' || sexo === '' || nacionalidade === '' || address === '' || postalCode === '') {
            alert('Preencha todos os campos');
            navigate('/');
        } else {
            navigate("../Login");
            alert('Conta Criadada com Sucesso');
        }
    }*/


    return (
        <>
            <div className='baseMissingData'>
                <div className='ContainerMissingData'>
                    <img
                        className='imgChessLogoMissingData'
                        alt='Imagem da Página Missing Data'
                        src={logo} />
                    <div className='ContainerMissingData_Form'>
                        <h1 style={{ color: 'white' }}>Missing Data</h1>
                        <form>
                            <input className='InputsMissingData' type='text' value={username} onChange={handleInputUsername} placeholder='Username' />
                            <DatePicker
                                className='InputsMissingData'
                                selected={birthDate}
                                onChange={handleInputBirthDate}
                                placeholderText='Birth Date'
                                maxDate={new Date()}
                                showMonthDropdown
                                showYearDropdown
                                scrollableMonthYearDropdown
                                dateFormat="dd/MM/yyyy"
                                closeOnScroll={true}
                                closeOnSelect={true}
                            />
                            <select className='SelectMissingData' value={sexo} onChange={handleInputSexo}>
                                <option value="">--What's your sex--</option>
                                <option value='M' >Male</option>
                                <option value='F' >Female</option>
                            </select>
                            <input className='InputsMissingData' type='text' value={nacionalidade} onChange={handleInputNacionalidade} placeholder='Nacionalidade' />
                            <input className='InputsMissingData' type='text' value={address} onChange={handleInputAddress} placeholder='Morada' />
                            <input className='InputsMissingData' type='text' value={postalCode} onChange={handleInputPostalCode} placeholder='Código Postal' />
                            <input
                                className='InputsMissingData'
                                type="file"
                                accept="image/png, image/jpg"
                                onChange={handleInputPhoto}
                                placeholder='Foto' />
                            <button className='btnMissingData' onClick={handleRegister}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MissingDataRegisterPage