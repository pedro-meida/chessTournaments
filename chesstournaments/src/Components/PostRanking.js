import React, { useState } from 'react'
import InfoPopup from '../Components/InfoPopup';

function PostRanking({ profiles, loading }) {
    const [popup, setPopup] = useState(false);
    const [ProfilePopup, setProfilePopup] = useState('');

    const popupFunction = (valuePlayer) => {
        setPopup(true);
        valuePlayer = valuePlayer - 1;
        setProfilePopup(profiles[valuePlayer]);
    }

    if (loading) {
        return <h2>Loading...</h2>;
    }
    return (
        <>
            <div className='baseLeaderboardItem'>
                {profiles.map((profile) => (
                    <div className='leaderboardItem' onClick={() => popupFunction(profile.id)} key={profile.id}>
                        <div className='itemRanking'>
                            <h3>{profile.id}</h3>
                        </div>
                        <img
                            className='itemImage'
                            src={profile.image}
                            style={{ width: '55px', height: '55px' }}
                            alt='imagem do perfil'
                        />
                        <div className='itemName'>
                            <h3>{profile.firstName} {profile.lastName}</h3>
                        </div>
                        <div className='itemScore'>
                            <h3>{profile.score}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <InfoPopup trigger={popup} setTrigger={setPopup}>
                <h2 className='txtChessPopupTitle'>{ProfilePopup.firstName} {ProfilePopup.lastName}</h2>
                <img
                    src={ProfilePopup.image}
                    style={{ width: '200px', height: '200px', borderRadius: '50%', margin: '50px 0 0 50px' }}
                    alt='Imagem do Jogador'
                    className='imgChessPopup' />
                <div className='txtChessPopupDescription'>
                    <h3 className='txtChessPopupDescriptionScore'>Score: {ProfilePopup.score}</h3>
                    <p className='txtChessPopupDescriptionTeam'>Team: FC Porto</p>
                    <p className='txtChessPopupDescriptionAge'>Age: 21</p>
                    <p className='txtChessPopupDescriptionTournaments'>Torneios que Participou: </p>
                </div>
            </InfoPopup>
        </>
    );
}

export default PostRanking