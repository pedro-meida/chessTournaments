import './UserPage.css';
import Header from '../Components/HeaderLandingPage'
import InfoProfile from '../Components/infoProfile'

function LandingPage() {

    return (
        <>
            <div className='baseUserPage'>
                <Header />

                <div className='infoProfile'>
                    <InfoProfile />
                </div>

                <div className='otherInformations'>

                </div>
            </div>
        </>
    );
}

export default LandingPage;