import React from 'react'
import './Leaderboard.css'
import LeaderboardProfile from './LeaderboardProfile.js'

function Leaderboard() {
    return (
        <>
            <div className='leaderboard'>
                <h1 className='txtLeaderboard'>Leaderboard</h1>
                <LeaderboardProfile />
            </div>
        </>
    )
}

export default Leaderboard