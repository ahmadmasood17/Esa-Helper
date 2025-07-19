// import RoundArrow from "../assets/images/round-green.svg";
// import Arrow from "../assets/images/arrow-white.svg";
// import Button from "./Button";

// const Thankyou = () => {

//   const handleGoHome = () => {
//     window.location.href = "/"; 

//   };

//   return (
//     <div className="bg-white rounded-[32px] p-[111px] mx-[50px] w-full flex flex-col gap-[24px] justify-center items-center text-center">
//       <img src={RoundArrow} className="w-[150px] h-[150px] object-cover" alt="" />
//       <h2 className="text-[28px] md:text-[38px] font-semibold text-[#000000]">👋 Thank you for your email!</h2>
//       <p className="max-w-[418px] text-[#4A4A4A]">
//         You will receive your custom curriculum once it’s ready. Thank you for your patience.
//       </p>
//       <div onClick={handleGoHome}>
//         <Button
//           text="Go to homepage"
//           minWidth="min-w-[246px]"
//           icon={Arrow}
//         />
//       </div>
//     </div>
//   );
// };

// export default Thankyou;



import RoundArrow from "../assets/images/round-green.svg";
import Arrow from "../assets/images/arrow-white.svg";
import Button from "./Button";

const Thankyou = () => {
  const handleGoHome = () => {
    window.location.href = "/"; 
  };

  return (
    <div className="bg-white rounded-[32px] px-6 py-10 sm:px-8 sm:py-14 md:px-[50px] md:py-[80px] lg:px-[80px] lg:py-[111px] mx-4 sm:mx-[30px] md:mx-[50px] w-full  flex flex-col gap-[24px] justify-center items-center text-center">
      <img src={RoundArrow} className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] object-cover" alt="" />
      <h2 className="text-[22px] md:text-[28px] lg:text-[38px] font-semibold text-[#000000]">👋 Thank you for your email!</h2>
      <p className="max-w-[418px] text-[#4A4A4A] text-[14px] md:text-[16px]">
        You will receive your custom curriculum once it’s ready. Thank you for your patience.
      </p>
      <div onClick={handleGoHome}>
        <Button
          text="Go to homepage"
          minWidth="min-w-[246px]"
          icon={Arrow}
        />
      </div>
    </div>
  );
};

export default Thankyou;
