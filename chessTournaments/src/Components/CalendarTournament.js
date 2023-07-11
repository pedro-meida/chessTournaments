import React, { useState } from 'react';
import InfoPopup from '../Components/InfoPopup';
import { useEffect } from 'react';

function CalendarTournament() {
    const [popup, setPopup] = useState(false);
    const [tournamentPopup, setTournamentPopup] = useState([]);
    const [tournaments, setTournaments] = useState([]);

    const DataFormat = (data) => {
        const date = new Date(data);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const popupFunction = (month, year) => {
        setPopup(true);
        const tournamentsPopup = tournaments.filter((tournament) => {
            const tournamentDate = new Date(tournament.dataInicio);
            return (
                tournamentDate.getMonth() === month - 1 &&
                tournamentDate.getFullYear() === year
            );
        });
        setTournamentPopup(tournamentsPopup);
    };


    useEffect(() => {
        fetch('api/TorneioJson')
            .then((res) => res.json())
            .then((data) => {
                setTournaments(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
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
            <div
                className='monthItem'
                onClick={() => popupFunction(month, year)}
                key={i}
            >
                <h4 className='txtMonth'>
                    {monthName} {year}
                </h4>
                <p className='txtMore'>+</p>
            </div>
        );
    }

    return (
        <>
            <div className='containerItems'>{calendarElements}</div>

            <InfoPopup trigger={popup} setTrigger={setPopup}>
                <h2 className='txtChessPopupTitle'>
                    {tournamentPopup.length > 0 ? DataFormat(tournamentPopup[0].dataInicio) : ''}
                </h2>
                <div className='txtChessPopupDescription'>
                    {tournamentPopup.map((tournament) => (
                        <div key={tournament.id}>
                            <h3>{tournament.nome}</h3>
                            <p>{tournament.descricao}</p>
                            <p>
                                Start Date:{' '}
                                {new Date(tournament.dataInicio).toLocaleDateString()}
                            </p>
                            <p>
                                End Date:{' '}
                                {new Date(tournament.dataFim).toLocaleDateString()}
                            </p>
                            <p>Location: {tournament.local}</p>
                            <p>Organizer: {tournament.organizacao.nome}</p>
                            <p>Prize: {tournament.valorPremio}</p>
                            <p>
                                Website: <a href={tournament.website}>{tournament.website}</a>
                            </p>
                        </div>
                    ))}
                </div>
            </InfoPopup>
        </>
    );
}

export default CalendarTournament;
