import React, { useState/*, useEffect*/ } from 'react'
import './LeaderboardProfile.css'
import Colaborador1 from '../imgs/Colaborador1.png'
import Colaborador2 from '../imgs/Colaborador2.png'
import Default from '../imgs/imagemPerfilDefault.png'
import PostRanking from './PostRanking.js'
import Pagination from './Pagination.js'

function LeaderboardProfile() {
    /*const [posts, setPosts] = useState([]);*/
    const [loading, /*setLoading*/] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);


    const profiles = [
        { id: 1, firstName: 'Pedro', lastName: 'Almeida', image: Colaborador2, score: 4200 },
        { id: 2, firstName: 'João', lastName: 'Vieira', image: Colaborador1, score: 3900 },
        { id: 3, firstName: 'Gonçalo', lastName: 'Costa', image: Default, score: 3870 },
        { id: 4, firstName: 'Rafael', lastName: 'Rodrigues', image: Default, score: 100 },
        { id: 5, firstName: 'António', lastName: 'Fialho', image: Default, score: 3900 },
        { id: 6, firstName: 'João', lastName: 'Vieira', image: Default, score: 3900 },
        { id: 7, firstName: 'Henrique', lastName: 'Nascimento', image: Default, score: 3870 },
        { id: 8, firstName: 'Rafael', lastName: 'Rodrigues', image: Default, score: 100 },
        { id: 9, firstName: 'António', lastName: 'Fialho', image: Default, score: 3900 },
        { id: 10, firstName: 'João', lastName: 'Vieira', image: Default, score: 3900 },
        { id: 11, firstName: 'Henrique', lastName: 'Nascimento', image: Default, score: 3870 },
        { id: 12, firstName: 'Rafael', lastName: 'Rodrigues', image: Default, score: 100 },
        { id: 13, firstName: 'António', lastName: 'Fialho', image: Default, score: 3900 },
        { id: 14, firstName: 'João', lastName: 'Vieira', image: Default, score: 3900 },
        { id: 15, firstName: 'Henrique', lastName: 'Nascimento', image: Default, score: 3870 },
        { id: 16, firstName: 'Rafael', lastName: 'Rodrigues', image: Default, score: 100 },
        { id: 17, firstName: 'António', lastName: 'Fialho', image: Default, score: 3900 },
        { id: 18, firstName: 'João', lastName: 'Vieira', image: Default, score: 3900 },
        { id: 19, firstName: 'Henrique', lastName: 'Nascimento', image: Default, score: 3870 },
        { id: 20, firstName: 'Rafael', lastName: 'Rodrigues', image: Default, score: 100 },
        { id: 21, firstName: 'António', lastName: 'Fialho', image: Default, score: 3900 },
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
    const currentProfiles = profiles.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <>
            <div id='baseLeaderboardProfile'>
                <PostRanking profiles={currentProfiles} loading={loading} />
                <Pagination postPerPage={postsPerPage} totalPosts={profiles.length} paginate={paginate} />
            </div>
        </>
    )
}


export default LeaderboardProfile