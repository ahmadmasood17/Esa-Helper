
import Card from "../../../components/Card";
import Button from "../../../components/Button";
import CardsData from "../../../constant/CardsItemsData";


const CardItems: React.FC = () => {
  return (


    <section className="pb-[60px] md:pb-[80px] lg:pb-[105px]">
  <div className="mx-4 md:mx-[40px] lg:mx-[100px] bg-white -mt-[40px] md:-mt-[60px] lg:-mt-[84px] z-20 relative pt-[40px] md:pt-[60px] lg:pt-[80px] rounded-[24px] px-4 md:px-[20px] lg:px-[30px] mb-[30px] md:mb-[40px]">
    <div className="max-w-[1240px] flex flex-col md:flex-row items-center justify-between gap-4 mx-auto text-center md:text-left">
      <div>
        <h3 className="text-[18px] md:text-[20px] lg:text-[24px] font-semibold">Need a compliant curriculum for this item?</h3>
        <p className="text-[#4A4A4A] text-[14px] md:text-[16px] max-w-[500px] md:max-w-full">
          Invite other ESA parents and earn free months — unlimited referrals.
        </p>
      </div>
      <div className="w-full md:w-auto mt-4 md:mt-0">
        <Button
          text="Sign Up to Build Yours Instantly"
          minHeight="min-h-[50px] md:min-h-[60px]"
          minWidth="w-full md:min-w-[300px] lg:min-w-[364px]"
        />
      </div>
    </div>
  </div>

  <div className="container">
    <div >
      <Card data={CardsData} bgBorder="border border-gray-200 rounded-[24px]" />
    </div>
  </div>
</section>

  );
};

export default CardItems;
