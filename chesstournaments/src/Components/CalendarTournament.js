import React, { useState } from 'react';
import InfoPopup from '../Components/InfoPopup';

function CalendarTournament() {
    const [popup, setPopup] = useState(false);
    const [TournamentsPopup, setTournamentsPopup] = useState('');

    const popupFunction = (month, year) => {
        setPopup(true);
        setTournamentsPopup(month + ' ' + year);
    }

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const calendarElements = [];

    for (let i = -3; i <= 6; i++) {
        let month = currentMonth + i;
        let year = currentYear;

        if (month <= 0) {
            month += 12;
            year--;
        } else if (month > 12) {
            month -= 12;
            year++;
        }

        const monthName = months[month - 1];

        calendarElements.push(
            <div className='monthItem' onClick={() => popupFunction(monthName, year)} key={i} >
                <h4 className='txtMonth'>
                    {monthName} {year}
                </h4>
                <p className='txtMore'>
                    +
                </p>
            </div >
        );
    }

    return (
        <>
            <div className='containerItems'>
                {calendarElements}
            </div>

            <InfoPopup trigger={popup} setTrigger={setPopup}>
                <h2 className='txtChessPopupTitle'>{TournamentsPopup}</h2>
                <div className='txtChessPopupDescription'>
                </div>
            </InfoPopup>
        </>
    )
}

export default CalendarTournament;
