import { useState } from "react";
import Logo from "../../assets/images/logo.svg";
import Button from "../../components/Button";
import Menu from "../../components/Menu";
import ThreeLines from "../../assets/images/three lines.svg";
import Close from "../../assets/images/close.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="px-[10px] absolute w-full z-10 pt-[10px] lg:pt-[0px] md:pt-[0px]">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link to={"/"}>
             <img
              src={Logo}
              alt="Logo"
              className="w-[150px] lg:w-[268px] md:w-[180px]"
            />
            </Link>
           
          </div>

          <div className="hidden lg:flex flex-1 justify-center">
            <Menu />
          </div>

          <div className="flex items-center gap-2">
            <div className="lg:hidden flex items-center order-1">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                <img
                  className="w-[30px] h-[30px] cursor-pointer"
                  src={menuOpen ? Close : ThreeLines}
                  alt=""
                />
              </button>
            </div>

            <Button
              text="Get started"
              bgColor="bg-[#2F3554]"
              minHeight="min-h-[40px] md:min-h-[48px]"
              minWidth="min-w-[135px] lg:min-w-[162px]"
            />
          </div>
        </div>

        <div
          className={`lg:hidden mt-3 bg-white absolute w-full left-0 
    overflow-hidden transition-all duration-300 ease-in-out 
    ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
        >
          <Menu
            display="block w-full"
            padding="py-[10px] text-center hover:bg-[linear-gradient(93.86deg,#0EA5E9_5.07%,#458FE3_51.04%,#2D71E6_98.81%)] hover:text-white"
            linkWidth="w-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
