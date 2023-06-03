import React, { useState } from 'react'
import InfoPopup from '../Components/InfoPopup';

function PostRanking({ teams, loading }) {
    const [popup, setPopup] = useState(false);
    const [TeamPopup, setTeamPopup] = useState('');

    const popupFunction = (valueTeam) => {
        setPopup(true);
        valueTeam = valueTeam - 1;
        setTeamPopup(teams[valueTeam]);
    }

    if (loading) {
        return <h2>Loading...</h2>;
    }
    return (
        <>
            <div className='baseTeamsItem'>
                {teams.map((team) => (
                    <div className='teamsItem' onClick={() => popupFunction(team.id)} key={team.id}>
                        <div className='itemTeamId'>
                            <h3>{team.id}</h3>
                        </div>
                        <img
                            className='itemTeamImage'
                            src={team.image}
                            style={{ width: '55px', height: '55px' }}
                            alt='imagem da equipa'
                        />
                        <div className='itemTeamName'>
                            <h3>{team.Name}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <InfoPopup trigger={popup} setTrigger={setPopup}>
                <h2 className='txtChessPopupTitle'>{TeamPopup.Name}</h2>
                <img
                    src={TeamPopup.image}
                    style={{ width: '200px', height: '200px', borderRadius: '50%', margin: '50px 0 0 50px' }}
                    alt='Imagem da Equipa'
                    className='imgChessPopup' />
                <div className='txtChessPopupDescription'>
                    <h3 className='txtChessPopupDescriptionPlayers'>Players</h3>
                    <p className='txtChessPopupDescriptionAge'></p>
                    <p className='txtChessPopupDescriptionTournaments'></p>
                </div>
            </InfoPopup>
        </>
    );
}

export default PostRanking