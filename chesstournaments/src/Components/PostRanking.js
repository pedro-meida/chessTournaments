import React, { useState } from 'react';
import InfoPopup from '../Components/InfoPopup';

function PostRanking({ profiles, currentPage, postsPerPage }) {
    const [popup, setPopup] = useState(false);
    const [ProfilePopup, setProfilePopup] = useState('');

    const popupFunction = (valuePlayer) => {
        setPopup(true);
        setProfilePopup(profiles[valuePlayer]);
    };

    const calcAge = (dateString) => {
        var birthday = +new Date(dateString);
        return ~~((Date.now() - birthday) / 31557600000);
    };

    const adjustedCount = (currentPage - 1) * postsPerPage;

    return (
        <>
            <div className='baseLeaderboardItem'>
                {profiles.map((profile, index) => {
                    const count = adjustedCount + index + 1;

                    return (
                        <div className='leaderboardItem' onClick={() => popupFunction(index)} key={profile.id}>
                            <div className='itemRanking'>
                                <h3>{count}</h3>
                            </div>
                            <img
                                className='itemImage'
                                src={'imagens/' + profile.listaFotos[0].nomeFicheiro + ''}
                                style={{ width: '55px', height: '55px' }}
                                alt='imagem do perfil'
                            />
                            <div className='itemName'>
                                <h3>{profile.primeiro_Nome} {profile.ultimo_Nome}</h3>
                            </div>
                            <div className='itemScore'>
                                <h3>{profile.score}</h3>
                            </div>
                        </div>
                    );
                })}
            </div>

            <InfoPopup trigger={popup} setTrigger={setPopup}>
                {ProfilePopup && (
                    <>
                        <h2 className='txtChessPopupTitle'>{ProfilePopup.primeiro_Nome} {ProfilePopup.ultimo_Nome}</h2>
                        {ProfilePopup.listaFotos && ProfilePopup.listaFotos[0] && (
                            <img
                                src={'imagens/' + ProfilePopup.listaFotos[0].nomeFicheiro}
                                style={{ width: '200px', height: '200px', borderRadius: '50%', margin: '50px 0 0 50px' }}
                                alt='Imagem do Jogador'
                                className='imgChessPopup'
                            />
                        )}
                        <div className='txtChessPopupDescription'>
                            <h3 className='txtChessPopupDescriptionScore'>Score: {ProfilePopup.score}</h3>
                            <p className='txtChessPopupDescriptionTeam'>Team: {ProfilePopup.equipa.nome}</p>
                            <p className='txtChessPopupDescriptionAge'>Age: {calcAge(ProfilePopup.dataNascimento)}</p>
                        </div>
                    </>
                )}
            </InfoPopup>
        </>
    );
}

export default PostRanking;
