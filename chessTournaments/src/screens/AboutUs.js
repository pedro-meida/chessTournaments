import React from 'react'
import './AboutUs.css'
import Colaborador1 from '../imgs/Colaborador1.png'
import Colaborador2 from '../imgs/Colaborador2.png'
import imgAboutUs from '../imgs/AboutUsImage.png'
import Header from '../Components/HeaderLandingPage'

function AboutUs() {
    return (
        <>
            <div className='baseAboutUs'>
                <Header />
                <div className='aboutUsContent'>
                    <div className='txtaboutUs'>
                        <h1>About Us</h1>
                        <p>The application developed for the Web Development Subject has as its main objective to facilitate the creation and management of chess tournaments, in addition to managing the users involved in these tournaments. This application offers a platform for chess players to create and participate in tournaments, as well as interact with other players.</p>
                        <img src={imgAboutUs}
                            style={{ width: "400px", height: "250px", borderRadius: "10px" }}
                            alt="Imagem de uma Partida de Xadrez" />
                    </div>
                    <div className='txtOurTeam'>
                        <h1>Our Team</h1>
                        <div className='collaborators'>
                            <img src={Colaborador1}
                                style={{ width: "200px", height: "250px", borderRadius: "10px" }}
                                alt="Foto do João Vieira" />
                            <p>João Vieira</p>
                            <p>From Entroncamento, Portugal</p>
                            <p>2nd Year of Computer Engineering</p>
                        </div>
                        <div className='collaborators'>
                            <img src={Colaborador2}
                                style={{ width: "200px", height: "250px", borderRadius: "10px" }}
                                alt="Foto do Pedro Almeida" />
                            <p>Pedro Almeida</p>
                            <p>From Porto, Portugal</p>
                            <p>2nd Year of Computer Engineering</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs