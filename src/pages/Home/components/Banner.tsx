import { useState } from "react";
import Button from "../../../components/Button";
import Search from "../../../assets/images/search.svg";
import BlueArrow from "../../../assets/images/blue-arrow.svg";

type BannerProps = {
  onShowCard: () => void;
};

const Banner: React.FC<BannerProps> = ({ onShowCard }) => {
  const [inputValue, setInputValue] = useState("");
  const [searched, setSearched] = useState(false);

  const handleClick = () => {
    if (inputValue.trim() !== "") {
      onShowCard();
      setSearched(true);
    }
  };

  return (
    <>
      <section
        className="px-[10px] before-img w-full
        bg-[linear-gradient(135deg,rgba(255,255,255,1)_0%,rgba(216,240,255,1)_50%,rgba(178,216,255,1)_100%)]
        pt-[110px] md:pt-[100px] lg:pt-[130px] pb-[60px] md:pb-[90px] lg:pb-[125px] min-h-[578px]"
      >
        <div className="container lg:px-4">
          <div className="flex flex-col justify-center items-center">
            {searched ? (
              <h1 className="max-w-[707px] text-center text-[20px] md:text-[28px] lg:text-[36px] font-semibold leading-tight mb-4">
                <span className="block mb-[10px]">🥳🎉</span>
                 Congratulations. Your searched product is available in ESA
                handbook
              </h1>
            ) : (
              <h1 className="max-w-[1056px] text-center text-[20px] md:text-[28px] lg:text-[36px] font-semibold leading-tight mb-4">
                Check eligibility, generate compliant curriculum, and Easily
                Process ESA Debit Charges and Reimbursements with Just a Few
                Clicks
              </h1>
            )}

            {searched ? (
              " "
            ) : (
              <p className="text-[#4A4A4A] pb-[14px] md:pb-[18px] lg:pb-[20px] text-[14px] md:text-[16px] max-w-[1079px] text-center">
                Save hours each month by automating your ESA debit purchases and
                reimbursements while staying fully compliant.
              </p>
            )}

            <div className="flex flex-col md:flex-row relative items-center gap-[5px] max-w-[727px] w-full overflow-hidden py-[8px] px-[10px] md:py-[10px] md:px-[10px] mb-4">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your item or question..."
                className="w-full outline-none placeholder-black bg-white rounded-[1000px] pr-[10px] py-[14px] md:py-[27px] pl-[20px] md:pl-[34px] text-[14px] md:text-[16px]"
              />
              <div
                className="w-full md:w-auto md:absolute md:right-[18px] mt-2 md:mt-0"
                onClick={handleClick}
              >
                <Button
                  text="check eligibility"
                  minHeight="min-h-[50px] md:min-h-[60px]"
                  minWidth="w-full md:min-w-[229px]"
                  icon={Search}
                  iconalignment="right"
                />
              </div>
            </div>

            <div className="max-w-[918px] pt-[5px] flex flex-col justify-center text-center">
              {searched ? (
                <h2 className="mb-[16px] md:mb-[22px] text-[16px] md:text-[18px] font-medium z-30 text-center">
                   results found for your search “{inputValue}”
                </h2>
              ) : (
                <h2 className="mb-[16px] md:mb-[22px] text-[16px] md:text-[18px] font-medium z-30">
                  Did you know ESA can cover your ESA Helper subscription? With
                  a single click, we handle reimbursement for you each month,
                  making ESA Helper $0 out-of-pocket.
                </h2>
              )}

              {searched ? (
                " "
              ) : (
                <div className="gradient-border w-full md:w-fit flex self-center p-[10px] lg:p-[0] md:p-[0]">
                  <Button
                    text="Learn How It Works"
                    bgColor="bg-[#FFFFFF66]"
                    minHeight="min-h-[34px] md:min-h-[46px]"
                    minWidth="w-full md:min-w-[238px]"
                    textColor="bg-[linear-gradient(93.86deg,#0EA5E9_5.07%,#458FE3_51.04%,#2D71E6_98.81%)] bg-clip-text text-transparent"
                    icon={BlueArrow}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
