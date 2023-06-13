import React, { useState } from 'react'
import './MissingDataRegisterPage.css';
import logo from '../imgs/ChessLogo.png'
//import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function MissingDataRegisterPage() {

    const [startDate, setStartDate] = useState(null);
    const today = new Date();

    //const navigate = useNavigate();

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
                            <input className='InputsMissingData' type='text' placeholder='Username' />
                            <DatePicker
                                className='InputsMissingData'
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                                dateFormatCalendar='dd/MM/yyyy' placeholderText='Birth Date'
                                maxDate={today}
                                showMonthDropdown
                                showYearDropdown
                                scrollableMonthYearDropdown
                            />
                            <select className='SelectMissingData'>
                                <option value="">--What's your sex--</option>
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                            </select>
                            <input className='InputsMissingData' type='text' placeholder='Nacionalidade' />
                            <input className='InputsMissingData' type='text' placeholder='Morada' />
                            <input className='InputsMissingData' type='text' placeholder='Código Postal' />
                            <input className='InputsMissingData' type='file' accept='image/png , image/jpg' placeholder='Foto' />
                            <button className='btnMissingData'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MissingDataRegisterPage