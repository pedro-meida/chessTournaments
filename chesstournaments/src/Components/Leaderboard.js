import React, { useState, useEffect } from 'react';
import './Leaderboard.css';
import PostRanking from './PostRanking.js';
import Pagination from './Pagination.js';

function Leaderboard() {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };
        fetch('api/PessoaJson', requestOptions)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setPosts(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentProfiles = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <div className='leaderboard'>
                <h1 className='txtLeaderboard'>Leaderboard</h1>
                <div className='baseLeaderboardProfile'>
                    <PostRanking profiles={currentProfiles} currentPage={currentPage} postsPerPage={postsPerPage} />
                    <Pagination postPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
                </div>
            </div>
        </>
    );
}

export default Leaderboard;
