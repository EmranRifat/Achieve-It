import careerBanner from '../../assets/Career/careerBanner.jpg'
import CareerSection from './CareerSection';
import CurrentJobOpenings from './CurrentJobOpenings';
const Career = () => {
    return (
        <div>
            <div className='md:bg-black  px-5 md:px-0 mt-2 md:mt-0'>
                <img className='opacity-80 w-full h-64 md:h-[450px] ' src={careerBanner} alt="" />
            </div>
            <CareerSection></CareerSection>
            <CurrentJobOpenings></CurrentJobOpenings>
        </div>
    );
};

export default Career;