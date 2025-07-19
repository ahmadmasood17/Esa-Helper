
import Card from '../../../components/Card'
import TrustComplianceCard from "../../../constant/TrustComplianceCard"

const TrustCompliance = () => {
  return (
     <section className="px-[10px] mx-[10px] py-[50px] esa-question lg:mx-[20px] rounded-[24px] lg:py-[80px]">   
      <div className="container">
          <div className="flex flex-col">
            <h3 className='mb-[30px] text-center '>Trust & Compliance</h3>
            <Card data={TrustComplianceCard} defaultIcon={false} imgHeight='h-[40px]' imgWidth='w-[40px]' textAlignment='text-left'  bgPadding='py-[27px] px-[20px]' bgBorder='border-none rounded-[16px] ' bgColor='bg-white' bgHeight='h-[138px]' imgMargin='mb-[5px]'/>
          </div>
        </div>
    </section>
  )
}

export default TrustCompliance