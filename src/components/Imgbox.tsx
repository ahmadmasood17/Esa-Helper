
import Tick from "../assets/images/tick-circle.svg";

interface BoxData {
  img?: string; 
  title: string;
  para: string;
}

interface IPROPS {
  data: BoxData[];
}

const Imgbox: React.FC<IPROPS> = ({ data }) => {
  return (
    <div className="flex flex-col gap-[20px]">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow rounded-[24px] w-full max-w-[498px] p-[24px] flex flex-col gap-[8px]"
        >
          <img
            className="w-[34px] h-[34px] object-cover"
            src={item.img ? item.img : Tick}
            alt={item.title}
          />
          <h2 className="text-[20px] font-semibold text-black">{item.title}</h2>
          <p className="text-[#4A4A4A]">{item.para}</p>
        </div>
      ))}
    </div>
  );
};

export default Imgbox;

