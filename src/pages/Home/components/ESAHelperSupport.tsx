


import ParentKid from "../../../assets/images/prents-kid.png";
import Ticklist from "../../../components/Ticklist";
import Button from "../../../components/Button";
import ESATakeData from "../../../constant/ESATakeData";

const ESAHelperSupport = () => {
  return (
    <section className="px-[10px] py-[75px]">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-[30px] md:gap-[70px]">
          
          <div className="order-2 md:order-1 w-full md:w-[50%] flex flex-col gap-[6px] text-center md:text-left">
            <h3 className="mb-[5px] max-w-[482px] lg  md:mx-0 text-start">How ESA Helper Supports You</h3>
            <p className="text-[#4A4A4A] leading-relaxed text-start">No paperwork headaches. No curriculum confusion. Just support.</p>
            <div className="mt-[5px]">
              <Ticklist items={ESATakeData} />
            </div>
            <p className="text-[#4A4A4A] mb-[12px] text-start">Let ESA Helper handle the stress — so you don’t have to.</p>
            <div className="mb-[4px] text-start">
              <Button 
                text="Get Help Now"
                minHeight="min-h-[60px]"
                minWidth="min-w-[289px]"
              />
            </div>
          </div>

          <div className="order-1 md:order-2 w-full md:w-[50%]">
            <img className="w-full max-w-[633px] h-auto object-cover rounded-[24px] mx-auto md:mx-0" src={ParentKid} alt="" />
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default ESAHelperSupport;
