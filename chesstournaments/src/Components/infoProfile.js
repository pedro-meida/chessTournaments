import React from 'react'
import foto from '../imgs/Colaborador2.png'
import { useAuth } from '../utils/AuthContext';

function InfoProfile() {
    const { user } = useAuth();

    console.log(user);

    const formataData = (data) => {
        const dataSplit = data.split('T');
        const dataFormatada = dataSplit[0].split('-');
        return `${dataFormatada[2]}/${dataFormatada[1]}/${dataFormatada[0]}`;
    }

    return (
        <>
            <div className='profileName'>
                <h1 className='nameProfile'>{user.person.primeiro_Nome} {user.person.ultimo_Nome}</h1>
            </div>
            <div className='profilePicture'>
                <img className='imgProfilePicture' alt='Imagem do Perfil' src={foto} />

                <div className='profilePictureButtons'>
                    <button className='btnChangeProfilePicture'>Change</button>
                </div>
            </div>
            <div className='profileInfo'>
                <h3 className='profileInfoTitle'>Email: {user.person.email}</h3>
                <h3 className='profileInfoTitle'>Birth Date: {formataData(user.person.dataNascimento)}</h3>
                <h3 className='profileInfoTitle'>Gender: {user.person.sexo}</h3>
                <h3 className='profileInfoTitle'>Nacionalidade: {user.person.nacionalidade}</h3>
                <h3 className='profileInfoTitle'>Elo: {user.person.score}</h3>
            </div>
        </>
    )
}

export default InfoProfile