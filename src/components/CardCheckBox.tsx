import { useState } from "react";
import Card from "../components/Card";
import CardsCheckBoxData from "../constant/CardCheckBoxData";
import Button from "./Button";
import EmailPopup from "./EmailPopup";

const CardCheckBox = () => {
  const [popup, setPopup] = useState(false);
  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    Array(CardsCheckBoxData.length).fill(false)
  );

  const handleCheck = (index: number, checked: boolean) => {
    const updated = [...checkedItems];
    updated[index] = checked;
    setCheckedItems(updated);
  };

  const anyChecked = checkedItems.some((item) => item);

  return (
    <section className="py-[40px] md:py-[60px] lg:py-[80px]">
      <div className="mx-4 sm:mx-[20px] md:mx-[40px] lg:mx-[100px] bg-white mt-[30px] md:-mt-[60px] lg:-mt-[164px] z-20 relative pt-[30px] md:pt-[50px] lg:pt-[80px] rounded-[24px] px-4 sm:px-[16px]         md:px-[20px] lg:px-[30px] mb-[20px] md:mb-[30px] lg:mb-[40px]">
        <div className="max-w-[1240px] flex flex-col md:flex-row items-center justify-between gap-4 mx-auto text-center md:text-left">
          <div>
            <h3 className="text-[18px] md:text-[20px] lg:text-[24px] font-semibold">
              Need a compliant curriculum for this item?
            </h3>
            <p className="text-[#4A4A4A] text-[14px] md:text-[16px] max-w-[500px] md:max-w-full">
              Invite other ESA parents and earn free months — unlimited referrals.
            </p>
          </div>
          <div
            className="w-full md:w-auto mt-4 md:mt-0"
            onClick={() => anyChecked && setPopup(true)}
          >
            <Button
              text="request a free curriculum"
              minHeight="min-h-[50px] md:min-h-[60px]"
              minWidth="w-full md:min-w-[300px] lg:min-w-[364px]"
              bgColor={anyChecked ? undefined : "bg-gray-400 "}
              cursor={anyChecked ? undefined : "cursor-defualt"}
            />
          </div>
        </div>
      </div>

      <div className="container">
        <Card
          data={CardsCheckBoxData}
          checkbox={true}
          bgBorder="border border-gray-200 rounded-[24px]"
          flexDirection="flex-row justify-between"
          alignSelf="self-start"
          checkedItems={checkedItems}
          onCheck={handleCheck}
        />

        {popup && (
          <>
            <div
              className="fixed inset-0 bg-[#00000066] z-40"
              onClick={() => setPopup(false)}
            />
            <div className="
                fixed inset-0 z-50 flex justify-center items-center 
                px-4 sm:px-6 
                overflow-y-auto sm:overflow-visible
              ">
              <div className="
                bg-white rounded-[32px] 
                px-4 py-6 
                sm:px-6 md:px-[40px] lg:px-[65px] 
                w-full max-w-full 
                sm:max-w-[600px] 
                lg:max-w-[1300px] 
                md:max-w-[900px]
                my-10 sm:my-0
              ">
                <EmailPopup action={true} inputAction={false} />
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default CardCheckBox;
