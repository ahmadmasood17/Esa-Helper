
import MenKid from "../../../assets/images/menkids.png"
import Ticklist from "../../../components/Ticklist";
import Button from "../../../components/Button";
import ESATakeData from "../../../constant/ESATakeData";

const ESATake = () => {
  return (
    <section className="px-[10px] py-[40px] md:py-[60px] lg:py-[75px]">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-[30px] md:gap-[50px] lg:gap-[70px]">
          
          <div className="w-full md:w-[55%]">
            <img className="w-full h-auto object-cover rounded-[24px]" src={MenKid} alt="" />
          </div>
          
          <div className="w-full md:w-[45%] flex flex-col gap-[6px] text-center md:text-left">
            <h3 className="mb-[5px] text-start lg:max-w-[482px]  md:mx-0">Already Have an ESA? We’ll Take It From Here.</h3>
            <p className="text-[#4A4A4A] leading-relaxed mb-[8px] text-start">
              Whether you're struggling with reimbursements, curriculum compliance, or purchase approvals — ESAHelper simplifies everything after enrollment.
            </p>
            <div className="mb-[12px] mt-[5px]">
              <Ticklist items={ESATakeData}/>
            </div>
            <div className="mb-[4px] flex justify-start">
              <Button 
                text="Get Help Now"
                minHeight="min-h-[50px] md:min-h-[60px]"
                minWidth="min-w-[200px] md:min-w-[289px]"
              />
            </div>
            <p className="text-[#4A4A4A] text-start">No more confusion. Just peace of mind.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ESATake;
