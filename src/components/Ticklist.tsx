
import Tick from "../assets/images/tick-circle.svg";

interface ListItem {
  text: string;
  img?: string;
}

interface IPROPS {
  items: ListItem[]; 
  imgWidth?: string;
  imgHeight?: string;
  bgColor?: boolean;  
  listPadding?:string;
}

const Ticklist: React.FC<IPROPS> = ({
  items,
  imgWidth = "w-[20px]",
  imgHeight = "h-[20px]",
  bgColor = false,
  listPadding = "pb-[9px]"
}) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={index}
          className={`${listPadding} flex items-center gap-2 text-[#4A4A4A] text-start`}
        >
          <div className={`${bgColor ? 'bg-[#E4F1FF] rounded-[50%] p-[10px]' : ''}`}>
          <img className={`${imgHeight} ${imgWidth}`} src={item.img || Tick} alt="" />
          </div>
          {item.text}
        </li>
      ))}
    </ul>
  );
};

export default Ticklist;
