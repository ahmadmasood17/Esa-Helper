
import Button from "./Button";
import SportMan from "../assets/images/baketballplayer.png";

const Cta = () => {
  return (
    <section className="px-[10px]">
      <div className="container">
        <div className="flex  ct-img flex-col md:flex-row items-center pb-[60px] pt-[30px] px-[20px] md:px-[40px] lg:px-[60px] rounded-[24px] relative">
          
          <div className="max-w-[677px] text-white text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-[28px] md:text-[36px] lg:text-[50px] font-semibold leading-tight mb-[5px]">
              Need a compliant curriculum for this item?
            </h2>
            <p className="pb-[20px] md:pb-[25px] lg:pb-[33px] text-[14px] md:text-[16px]">
              Invite other ESA parents and earn free months — unlimited referrals.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button
                text="Sign Up to Build Yours Instantly"
                minHeight="min-h-[50px] md:min-h-[60px]"
                minWidth="min-w-[100%] md:min-w-[300px] lg:min-w-[364px]"
              />
            </div>
          </div>

          <div className="relative  md:absolute bottom-[-60px] md:right-0 md:bottom-0 w-full md:w-auto max-w-[300px] md:max-w-none">
            <img src={SportMan} alt="" className="w-full h-auto object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
