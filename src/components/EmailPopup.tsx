




import { useState } from "react";
import Document from "../assets/images/document.svg";
import Button from "./Button";
import Ticklist from "../components/Ticklist";
import ESAStarterData from "../constant/ESAStarterData";
import Thankyou from "./Thankyou";

interface HideData {
  action?: boolean;
  inputAction?: boolean;
}

const EmailPopup: React.FC<HideData> = ({ inputAction = true }) => {
  const [email, setEmail] = useState("");
  const [showThankyou, setShowThankyou] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setShowThankyou(true);
      setError("");
    } else {
      setError("Please enter a valid email address");
    }
  };


  if (showThankyou) {
    return (
      <div className="fixed inset-0 bg-[#00000080] z-50 flex justify-center items-center px-4">
        <Thankyou />
      </div>
    );
  }

  return (
    <section className="px-[10px] py-[50px] lg:py-[80px]">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-[30px] md:gap-[50px]">
          <div className="w-full md:w-[50%] lg:max-w-[560px] text-center md:text-left">
            <h3 className="mb-[12px] text-start">
              New to ESA? Get Your FREE ESA Parent Starter Pack
            </h3>
            <p className="text-[#4A4A4A] leading-[1.7] text-start">
              Quick tips, compliant item checklist, and expert do's & don'ts — everything you need to stay stress-free and 100% compliant.
            </p>
            <h2 className="text-[20px] font-semibold mt-[18px] mb-[7px] text-start lg:text-[24px]">
              What's Included in the Starter Pack
            </h2>
            <Ticklist items={ESAStarterData} />
          </div>
          <div className="w-full md:w-[50%]">
            <div className="bg-[#E4F1FF] p-[24px] md:p-[32px] rounded-[24px] text-center">
              <h3 className="max-w-[457px] text-center mx-auto mb-[12px]">
                Enter your email and get instant access
              </h3>
              <p className="mb-[20px] md:mb-[25px]">
                Everything you need to stay stress-free and 100% compliant.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-[16px] md:gap-[20px]">
                  {inputAction && (
                    <input
                      className="bg-white rounded-[100px] p-[14px] md:p-[16px] outline-0"
                      type="text"
                      placeholder="Full name"
                    />
                  )}
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white rounded-[100px] p-[14px] md:p-[16px] outline-0"
                    placeholder="Enter email address"
                  />
                  {error && <p className="text-red-500 text-[14px]">{error}</p>}
                  <button type="submit">
                    <Button
                      text="Get my free starter pack"
                      minHeight="min-h-[60px]"
                      minWidth="min-w-full"
                      icon={Document}
                      iconalignment="left"
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailPopup;
