
import Imgbox from '../../../components/Imgbox';
import Ticklist from '../../../components/Ticklist';
import HowITWorkData from '../../../constant/HowITWorkData';
import Send from "../../../assets/images/send.svg";

const HowITWork = () => {
  return (
    <section className='px-[10px] py-[40px] md:py-[80px]'>
      <div className='container'>
        <div className='flex flex-col md:flex-row gap-[30px] md:gap-[75px]'>
          
          <div className='w-full md:w-[53%]'>
            <div className='bg__border flex flex-col gap-[20px]'>
              <div className='flex self-start'>
                <Imgbox data={[{
                  title: 'Upload Receipt',
                  para: 'Simply scan or photograph your receipts and upload them to our secure platform.',
                  img: Send
                }]} />
              </div>
              <div className='flex self-end'>
                <Imgbox data={[{
                  title: 'Approved & Paid',
                  para: 'Invite other ESA parents and earn free months — unlimited referrals.',
                  img: ''
                }]} />
              </div>
            </div>
          </div>

          <div className='w-full md:w-[47%] text-center md:text-left'>
            <h3 className='mb-[15px]'>How it works?</h3>
            <Ticklist items={HowITWorkData} bgColor={true} listPadding='pb-[20px]'/>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HowITWork;
