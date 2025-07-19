


import Logo from "../../assets/images/logo.svg";
import Menu from "../../components/Menu";
import FooterHeading from "./Components/FooterHeading";
import IconBox from "../../components/IconBox";
import Facebook from "../../assets/images/facebook.svg";
import Instagram from "../../assets/images/instagram.svg";
import Sms from "../../assets/images/sms.svg";

const Footer = () => {
  return (
    <footer className="pt-[40px] pb-[20px] px-[10px]">
      <div className="container">
        <div className="flex flex-wrap gap-y-[20px]"> 
          <div className="w-full md:w-1/2 lg:w-[35%]">
            <div className="max-w-[322px]">
              <img src={Logo} alt="" />
              <p>
                Find out what’s allowed and get compliant curriculum instantly —
                save time, avoid mistakes, and stay ESA-compliant.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-[20%]">
            <FooterHeading text="Quick Links" />
            <Menu display="block" padding="pb-[8px]" />
          </div>
          <div className="w-full md:w-1/2 lg:w-[25%]">
            <FooterHeading text="Contact Info" />
            <div className="flex flex-col gap-2.5">
              <IconBox icon={Facebook} iconName="Facebook" email="@esahelper" />
              <IconBox icon={Sms} iconName="Email:" email="info@esahelper.com" />
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-[20%]">
            <FooterHeading text="Social Account" />
            <div className="flex flex-col gap-2.5">
              <IconBox icon={Facebook} iconName="Facebook" email="@esahelper" />
              <IconBox icon={Instagram} iconName="Instagram" email="@esahelper" />
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-[25px] mx-[10px] text-[14px]  lg:mx-[20px] lg:text-[16px] flex justify-center items-center text-white bg-[#2F3554] rounded-[8px] py-[10px]">
        <p>Copyright 2025 ESAhelper. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
