import React, { useState /*,useEffect*/ } from 'react'
import './Leaderboard.css'
import Colaborador1 from '../imgs/Colaborador1.png'
import Colaborador2 from '../imgs/Colaborador2.png'
import Default from '../imgs/imagemPerfilDefault.png'
import PostTeams from './PostTeams.js'
import Pagination from './Pagination.js'

function Teams() {
    /*const [posts, setPosts] = useState([]);*/
    const [loading, /*setLoading*/] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);


    const teams = [
        { id: 1, Name: 'FC Porto', image: Colaborador2 },
        { id: 2, Name: 'SL Benfica', image: Colaborador1 },
        { id: 3, Name: 'SC Sporting', image: Default },
        { id: 4, Name: 'Boavista FC', image: Default },
        { id: 5, Name: 'FC Famalicão', image: Default },
        { id: 6, Name: 'FC Paços de Ferreira', image: Default },
        { id: 7, Name: 'FC Rio Ave', image: Default },
        { id: 8, Name: 'FC Gil Vicente', image: Default },
        { id: 9, Name: 'FC Moreirense', image: Default },
        { id: 10, Name: 'FC Marítimo', image: Default },
        { id: 11, Name: 'FC Vitória SC', image: Default },
        { id: 12, Name: 'FC Santa Clara', image: Default },
        { id: 13, Name: 'FC Belenenses', image: Default },
        { id: 14, Name: 'FC Tondela', image: Default },
        { id: 15, Name: 'FC Portimonense', image: Default },
        { id: 17, Name: 'FC Farense', image: Default },
        { id: 18, Name: 'FC Nacional', image: Default },
    ];

    /*useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const posts = await res.json();
            setPosts(posts);
            setLoading(false);
        };
 
        fetchPosts();
    }, []);*/

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentTeams = teams.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <>
            <div className='teams'>
                <h1 className='txtTeams'>Teams</h1>
                <div className='baseTeams'>
                    <PostTeams teams={currentTeams} loading={loading} />
                    <Pagination postPerPage={postsPerPage} totalPosts={teams.length} paginate={paginate} />
                </div>
            </div>
        </>
    )
}

export default Teams