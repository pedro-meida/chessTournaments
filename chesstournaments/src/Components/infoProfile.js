import React from 'react'
import foto from '../imgs/Colaborador2.png'
import { useAuth } from '../utils/AuthContext';

function InfoProfile() {
    const { user } = useAuth();
    return (
        <>
            <div className='profileName'>
                <h1 className='nameProfile'>Pedro Almeida</h1>
            </div>
            <div className='profilePicture'>
                <img className='imgProfilePicture' alt='Imagem do Perfil' src={foto} />

                <div className='profilePictureButtons'>
                    <button className='btnChangeProfilePicture'>Change</button>
                </div>
            </div>
            <div className='profileInfo'>
                <h3 className='profileInfoTitle'>Email: </h3>
                <h3 className='profileInfoTitle'>Birth Date: </h3>
                <h3 className='profileInfoTitle'>Gender: </h3>
                <h3 className='profileInfoTitle'>Nacionalidade: </h3>
                <h3 className='profileInfoTitle'>Elo: </h3>
            </div>
        </>
    )
}

export default InfoProfile