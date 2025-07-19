
import Accordion from "../../../components/Accordion";
import AccordionData from "../../../constant/AccordionData";
import Camera from "../../../assets/images/camera.svg";
import Amazon from "../../../assets/images/amazon.svg";
import Tick from "../../../assets/images/tick-circle.svg";

const ESAQuestion = () => {
  return (
    <section className="px-[10px] esa-question mx-[10px] lg:mx-[20px] py-[50px] md:py-[80px] rounded-[24px]">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-[30px] md:gap-[50px] lg:gap-[73px]">
          
          <div className="w-full md:w-[50%] flex flex-col gap-[20px] md:gap-[25px] text-center md:text-left">
            <h3>Recent Questions from ESA Parents</h3>
            <div>
              <Accordion items={AccordionData} />
            </div>
            <div className="max-w-[511px] mx-auto md:mx-0">
              <h3 className="leading-tight pb-[5px]">ESA covers your ESA Helper subscription</h3>
              <p className="text-[#4A4A4A]">Pay with ESA funds, and we’ll handle reimbursement each month, making ESA Helper cost you nothing out-of-pocket</p>
            </div>
          </div>

          <div className="w-full md:w-[50%] relative flex flex-col gap-[20px] mt-6 md:mt-0">
            <div className="bg-white shadow md:absolute md:left-0 rounded-[24px] w-full lg:w-[379px] h-[180px] md:h-[224px] flex flex-col items-center justify-center gap-[16px] md:gap-[24px]">
              <img src={Camera} alt="" />
              <img src={Amazon} alt="" />
            </div>

            <div className="px-[20px] bg-white shadow md:absolute md:right-0 md:top-0 md:bottom-0 md:my-auto z-40 rounded-[24px] w-full lg:w-[248px] h-[160px] md:h-[198px] flex flex-col justify-center">
              <h2 className="text-[24px] md:text-[32px] font-extrabold">$120</h2>
              <h2 className="text-[16px] md:text-[20px] font-semibold text-black">Upload Receipt</h2>
              <p className="text-[#4A4A4A] text-[14px] md:text-[16px]">Simply scan or photograph your receipts and upload them to our secure platform.</p>
            </div>

            <div className="bg-white w-full shadow md:absolute md:bottom-[25px] rounded-[24px]  lg:w-[498px]   h-[140px] md:h-[168px] p-[16px] md:p-[24px]">
              <img className="w-[28px] md:w-[34px] h-[28px] md:h-[34px] object-cover" src={Tick} alt="" />
              <h2 className="text-[18px] md:text-[20px] font-semibold text-black">Approved & Paid</h2>
              <p className="text-[#4A4A4A] text-[14px] md:text-[16px]">Invite other ESA parents and earn free months — unlimited referrals.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ESAQuestion;




