import React from 'react'
import './PageNotFound.css'

function PageNotFound() {

    const handleGoToLandingPage = () => {
        window.location.href = '/';
    }

    return (
        <>
            <div onClick={handleGoToLandingPage} className='pageNotFound'>
                <h1>404</h1>
                <h2>Page not found</h2>
            </div>
        </>
    )
}

export default PageNotFound