
import { Link } from 'react-router-dom';

interface Icon{
  icon:string;
  iconName:string;
  email:string;
  path?:any;
}


const IconBox: React.FC<Icon> = ({icon,iconName,email,path}) => {
  return (
    <Link to={path}> 
    <div className="flex items-center gap-2.5">
      <img src={icon} alt="Facebook" className="w-[40px] h-[40px]" />
      <div className="flex flex-col leading-tight">
        <span className="text-[14px] text-[#010101]">{iconName}</span>
        <span className="font-700 text-[#010101]">{email}</span>
      </div>
    </div>
    </Link>
  );
};

export default IconBox;
