
import Quote from "../assets/images/quotes.svg";
import Star from "../assets/images/stars.svg";

interface Review {
  name: string;
  position: string;
  para: string;
  img: string;
}

interface IProps {
  data: Review[];
}

const Testimonials: React.FC<IProps> = ({ data }) => {
  return (
    <div className="flex gap-4">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow rounded-[24px] p-[24px] w-full relative lg:ml-[16px]"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <img
                src={item.img}
                alt={item.name}
                className="w-[47px] h-[47px] rounded-full object-cover"
              />
              <div>
                <h2 className="text-[20px] font-semibold">{item.name}</h2>
                <p className="text-[16px] text-[#4A4A4A]">{item.position}</p>
              </div>
            </div>
            <div className="flex">
              <img src={Star} alt="" className="w-0 lg:w-[142px] md:w-[142px] sm:w-[142px] h-[25px] object-cover" />
            </div>
          </div>
          <p className="text-[#4A4A4A] mb-[16px] line-clamp-3">{item.para}</p>
          <div>
            <img
              src={Quote}
              alt="quote"
              className="w-[52px] h-[48px] object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
