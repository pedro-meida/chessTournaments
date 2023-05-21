import './LandingPage.css';
import Header from '../Components/HeaderLandingPage'
import ImageSlider from '../Components/ImageSlider'
import { SliderData } from '../Components/SliderData';

function LandingPage() {

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