import './LandingPage.css';
import Header from '../Components/HeaderLandingPage'
import ImageSlider from '../Components/ImageSlider'
import { SliderData } from '../utils/SliderData';
import { useAuth } from '../utils/AuthContext';

function LandingPage() {
    const { isLoggedIn } = useAuth();

    console.log(isLoggedIn);

    return (
        <>
            <div className='baseLandingPage'>
                <Header />
                <div className="slick-track" >
                    <ImageSlider slides={SliderData} />
                </div>
            </div>
        </>
    );
}

export default LandingPage;