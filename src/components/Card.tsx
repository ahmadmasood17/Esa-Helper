
import Amazon from "../assets/images/amazon.svg";
import { Link } from "react-router-dom";

interface CardData {
  cardImg?: string;
  title?: string;
  price?: string;
  para?: string;
  cardWidth?: string;
  link?: string;
  extraImg?: string;
  extraHeight?: string;
}

interface CardListProps {
  data: CardData[];
  defaultIcon?: boolean;
  paraColor?: string;
  paraWeight?: string;
  imgWidth?: string;
  imgHeight?: string;
  textAlignment?: string;
  bgColor?: string;
  bgPadding?: string;
  bgBorder?: string;
  bgHeight?: string;
  imgMargin?: string;
  checkbox?: boolean;
  flexDirection?: string;
  cardPara?: boolean;
  alignSelf?: string;

 
  checkedItems?: boolean[]; 
  onCheck?: (index: number, checked: boolean) => void;
}

const CardList: React.FC<CardListProps> = ({
  data,
  imgWidth = "w-full",
  imgHeight,
  defaultIcon = true,
  paraColor = "text-black",
  paraWeight = "font-medium",
  textAlignment = "text-center",
  bgColor = "bg-[#F9F9F9]",
  bgPadding = "px-[20px] pt-[20px] pb-[24px]",
  bgBorder = "border border-gray-200 rounded-[24px]",
  bgHeight = "h-full",
  imgMargin = "mb-4",
  checkbox = false,
  flexDirection = "flex-col",
  cardPara = true,
  alignSelf = "self-center",

  checkedItems = [],
  onCheck
}) => {
  const isThreeItems = data.length === 3;
  const isFourItems = data.length === 4;

  return (
    <div
      className={`
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        ${
          isThreeItems
            ? "lg:grid-cols-3"
            : isFourItems
            ? "lg:grid-cols-4"
            : "lg:grid-cols-3"
        } 
        gap-[16px]
      `}
    >
      {data.map((item, index) => {
        const {
          cardImg,
          title,
          price,
          para,
          link = "#",
          extraImg,
          extraHeight
        } = item;

        const checked = checkedItems[index] || false;

        return (
          <div
            key={index}
            className={`${bgColor} ${bgBorder} ${bgHeight} ${bgPadding} flex flex-col`}
          >
            {checkbox && (
              <div className="pb-[13px]">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => onCheck && onCheck(index, e.target.checked)}
                    className="cursor-pointer appearance-none w-[28px] h-[28px] border bg-white border-[#D5D7DA] rounded-[4px]
                      checked:bg-[#1FAC4B] checked:border-[#1FAC4B]"
                  />
                  {checked && (
                    <svg
                      className="absolute left-0 top-0 w-[28px] h-[28px] text-white p-[4px]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </label>
              </div>
            )}

            <Link to={link}>
              {cardImg && (
                <img
                  src={cardImg}
                  alt={title}
                  className={`${imgWidth} ${imgHeight} object-cover h-auto rounded-[20px] ${imgMargin}`}
                />
              )}
              {extraImg && (
                <img
                  src={extraImg}
                  alt=""
                  className={`${extraHeight} object-cover h-auto`}
                />
              )}
            </Link>

            {(title || price) && (
              <div className={`flex ${flexDirection} text-center`}>
                {title && (
                  <Link to={link}>
                    <h2 className="text-[20px] md:text-[22px] font-semibold">
                      {title}
                    </h2>
                  </Link>
                )}
                {price && (
                  <span className="text-[24px] md:text-[28px]">{price}</span>
                )}
              </div>
            )}

            {cardPara && (
              <p className={`text-[14px] md:text-[16px] flex-1 ${textAlignment} ${paraColor} ${paraWeight}`}>
                {para}
              </p>
            )}

            {defaultIcon && (
              <div className={`mt-4 ${alignSelf}`}>
                <img
                  src={Amazon}
                  alt="icon"
                  className="w-[89px] h-[30px] object-cover"
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CardList;



