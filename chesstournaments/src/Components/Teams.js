import React, { useState, useEffect } from 'react'
import './Leaderboard.css'
import PostTeams from './PostTeams.js'
import Pagination from './Pagination.js'

function Teams() {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    useEffect(() => {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch("api/EquipaJson", requestOptions)
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
    const currentTeams = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <>
            <div className='teams'>
                <h1 className='txtTeams'>Teams</h1>
                <div className='baseTeams'>
                    <PostTeams teams={currentTeams} />
                    <Pagination postPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
                </div>
            </div>
        </>
    )
}

export default Teams