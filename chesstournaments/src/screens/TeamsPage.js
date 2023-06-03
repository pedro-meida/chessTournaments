import React from 'react'
import './TeamsPage.css'
import Header from '../Components/HeaderLandingPage.js'
import Teams from '../Components/Teams.js'

function TeamsPage() {
    return (
        <>
            <div className='baseTeamsPage'>
                <Header />
                <Teams />
            </div>
        </>
    )
}

export default TeamsPage