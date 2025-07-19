

interface ButtonData {
  text: string;
  textColor?:string;
  bgColor?: string;
  icon?: string;
  iconalignment?: "left" | "right";
  padding?:string;
  minHeight?:string;
  minWidth?:string;
  cursor?:string;
}

const Button: React.FC<ButtonData> = ({
  text,
  icon,
  iconalignment = "right",
  bgColor="bg-[linear-gradient(93.86deg,#0EA5E9_5.07%,#458FE3_51.04%,#2D71E6_98.81%)] shadow-[inset_2px_4px_14px_0px_#C1ECFF]",
  minWidth = "min-w-[162px]",
  minHeight = "min-h-[60px]",
  textColor = "text-white",
  cursor = "cursor-pointer",

}) => {
  return (
    <button  
      className={`inline-flex justify-center font-extrabold ${cursor} uppercase items-center gap-2 rounded-[1000px]  text-white  ${bgColor} ${minWidth} ${minHeight}`}
    >
      {icon && iconalignment === "left" && (
        <img src={icon} alt="" className="w-[24px] h-[24px] object-cover" />
      )}
      <span className={`text-[14px] lg:text-[16px] md:text-[16px] ${textColor}`}>{text}</span>
      {icon && iconalignment === "right" && (
        <img src={icon} alt="" className="w-[24px] h-[24px] object-cover" />
      )}
    </button>
  );
};

export default Button;
