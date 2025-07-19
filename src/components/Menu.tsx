
import { Link } from "react-router-dom";
import MenuItem from "../constant/MenuItem";

interface MenuItems {
  display?: string;
  padding?:string;
  linkWidth?:string;
}


const Menu: React.FC<MenuItems> = ({ display = "flex",padding,linkWidth }) => {
  return (
    <nav>
      <ul className={`${display} justify-center gap-[40px]`}>
        {MenuItem.map((item, index) => (
          <li key={index} className={`${padding}`}>
            <Link className={`${linkWidth}`} to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
