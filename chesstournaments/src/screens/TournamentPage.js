import React from 'react'
import './TournamentPage.css'
import Header from '../Components/HeaderLandingPage.js'
import CalendarTournament from '../Components/CalendarTournament.js'

function TournamentPage() {
    return (
        <>
            <div className='baseTournamentPage'>
                <Header />
                <CalendarTournament />
            </div>
        </>
    )
}

export default TournamentPage