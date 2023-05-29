import React from 'react'

function PostRanking({ profiles, loading }) {
    if (loading) {
        return <h2>Loading...</h2>;
    }
    return (
        <div className='baseLeaderboardItem'>
            {profiles.map((profile) => (
                <div className='leaderboardItem' key={profile.id}>
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
    );
}

export default PostRanking