import React from 'react'
import './ChessRankingPage.css'
import Header from '../Components/HeaderLandingPage.js'
import Leaderboard from '../Components/Leaderboard'

function ChessRankingPage() {
    return (
        <>
            <div className='baseChessRankingPage'>
                <Header />
                <Leaderboard />
            </div>
        </>
    )
}

export default ChessRankingPage