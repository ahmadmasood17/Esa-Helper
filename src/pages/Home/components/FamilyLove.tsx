
import Slider from "react-slick";
import Testimonials from '../../../components/Testmonials';
import TestmonialsData from "../../../constant/TestmonialsData";

const FamilyLove = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="px-[10px] py-[50px] esa-question rounded-[24px] mx-[20px] lg:py-[80px]">
      <div className='container'>
        <h3 className="mb-[30px] text-center lg:mb-[50px] lg:ml-[20px] lg:text-start">Why Families Love Us?</h3>
        <Slider 
          {...settings}
          className="gap-[20px]" 
        >
          {TestmonialsData.map((item, index) => (
            <div key={index} className=" lg:px-[10px]"> 
              <Testimonials data={[item]} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default FamilyLove;
