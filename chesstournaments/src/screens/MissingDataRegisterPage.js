import React, { useState } from 'react';
import './MissingDataRegisterPage.css';
import logo from '../imgs/ChessLogo.png';
import { useLocation, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function MissingDataRegisterPage() {
    const location = useLocation();
    const initialInfo = location.state.info;
    const [info, setInfo] = useState(initialInfo);

    const [isEmployee, setIsEmployee] = useState(info.IsEmployee);

    const handleInputIsEmployee = (event) => {
        setIsEmployee(event.target.value);
        setInfo({ ...info, IsEmployee: event.target.value });
    };

    const [DateOfBirth, setDateOfBirth] = useState(info.DateOfBirth);
    const handleInputBirthDate = (date) => {
        setDateOfBirth(date);
        setInfo({ ...info, DateOfBirth: date.toLocaleDateString('en-GB') });
    };

    const [Gender, setGender] = useState(info.Gender);

    const handleInputSexo = (event) => {
        setGender(event.target.value);
        setInfo({ ...info, Gender: event.target.value });
    };

    const [Nationality, setNationality] = useState(info.Nationality);

    const handleInputNacionalidade = (event) => {
        setNationality(event.target.value);
        setInfo({ ...info, Nationality: event.target.value });
    };

    const [Address, setAddress] = useState(info.Address);

    const handleInputAddress = (event) => {
        setAddress(event.target.value);
        setInfo({ ...info, Address: event.target.value });
    };

    const [PostalCode, setPostalCode] = useState(info.PostalCode);

    const handleInputPostalCode = (event) => {
        setPostalCode(event.target.value);
        setInfo({ ...info, PostalCode: event.target.value });
    };

    const [Score, setScore] = useState(info.Score);

    const handleInputScore = (event) => {
        setScore(event.target.value);
        setInfo({ ...info, Score: event.target.value });
    };

    const handleInputPhoto = (event) => {
        const selectedPhoto = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setInfo({ ...info, ImagePath: reader.result });
        };

        if (selectedPhoto) {
            reader.readAsDataURL(selectedPhoto);
        }
    };

    function convertDateFormat(dateString) {
        const [day, month, year] = dateString.split('/');

        const convertedDate = `${year}-${month}-${day}`;

        return convertedDate;
    }

    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();

        if (
            !isEmployee ||
            !DateOfBirth ||
            !Gender ||
            !Nationality ||
            !Address ||
            !PostalCode ||
            !Score
        ) {
            alert('Campos Vazios');
        }

        const emailRegex = /[a-z._0-9]+@gmail.com/;
        const phoneRegex = /9[1236][0-9]{7}/;
        const postalCodeRegex = /[1-9][0-9]{3}-[0-9]{3} [A-ZÇÁÉÍÓÚÊÂÎÔÛÀÃÕ ]+/;

        if (!emailRegex.test(info.Email)) {
            alert('O Email tem de ser do gmail');
            return;
        }

        if (!phoneRegex.test(info.PhoneNumber)) {
            alert(
                'O número de telemóvel deve começar por 91, 92, 93 ou 96 e ter 9 dígitos'
            );
            return;
        }

        if (!postalCodeRegex.test(info.PostalCode)) {
            alert(
                'O Código Postal tem de ser da forma XXXX-XXX LOCALIDADE'
            );
            return;
        }

        const data = {
            ...info,
            DateOfBirth: convertDateFormat(DateOfBirth.toLocaleDateString('pt-PT')),
            Gender: Gender
        };

        try {
            const response = await fetch('https://localhost:7270/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert('User registered successfully');
                navigate('/Login');
            } else {
                alert('Error occurred while registering');
                console.log(response);
            }
        } catch (error) {
            console.error(error);
            alert('Error occurred while registering');
        }
    };

    return (
        <>
            <div className='baseMissingData'>
                <div className='ContainerMissingData'>
                    <img
                        className='imgChessLogoMissingData'
                        alt='Imagem da Página Missing Data'
                        src={logo}
                    />
                    <div className='ContainerMissingData_Form'>
                        <h1 style={{ color: 'white' }}>Missing Data</h1>
                        <form>
                            <select
                                className='SelectMissingData'
                                value={isEmployee}
                                onChange={handleInputIsEmployee}
                            >
                                <option value=''>--Employee?--</option>
                                <option value='S'>Yes</option>
                                <option value='N'>No</option>
                            </select>
                            <DatePicker
                                className='InputsMissingData'
                                selected={DateOfBirth}
                                onChange={handleInputBirthDate}
                                placeholderText='Birth Date'
                                maxDate={new Date()}
                                showMonthDropdown
                                showYearDropdown
                                scrollableMonthYearDropdown
                                dateFormat='dd/MM/yyyy'
                                closeOnScroll={true}
                                closeOnSelect={true}
                            />
                            <select
                                className='SelectMissingData'
                                value={Gender}
                                onChange={handleInputSexo}
                            >
                                <option value=''>--What's your sex--</option>
                                <option value='M'>Male</option>
                                <option value='F'>Female</option>
                            </select>
                            <input
                                className='InputsMissingData'
                                type='text'
                                value={Nationality}
                                onChange={handleInputNacionalidade}
                                placeholder='Nacionalidade'
                            />
                            <input
                                className='InputsMissingData'
                                type='text'
                                value={Address}
                                onChange={handleInputAddress}
                                placeholder='Morada'
                            />
                            <input
                                className='InputsMissingData'
                                type='text'
                                value={PostalCode}
                                onChange={handleInputPostalCode}
                                placeholder='Código Postal'
                                pattern='[1-9][0-9]{3}-[0-9]{3} [A-ZÇÁÉÍÓÚÊÂÎÔÛÀÃÕ ]+'
                                title='O Código Postal tem de ser da forma XXXX-XXX LOCALIDADE'
                            />
                            <input
                                className='InputsMissingData'
                                type='text'
                                value={Score}
                                onChange={handleInputScore}
                                placeholder='Elo'
                            />
                            <input
                                className='InputsMissingData'
                                type='file'
                                accept='image/png, image/jpg'
                                onChange={handleInputPhoto}
                                placeholder='Foto'
                            />
                            <button className='btnMissingData' onClick={handleRegister}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MissingDataRegisterPage;
