import React, { useState } from "react";
import Dropdown from "../assets/images/drpdown.svg";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-4 cursor-pointer"
          onClick={() => toggleItem(index)}
        >
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-start">{item.question}</h2>
            <img
              className={`w-5 h-5 transition-transform duration-300 ${
                activeIndex === index ? "rotate-180" : ""
              }`}
              src={Dropdown}
              alt=""
            />
          </div>

          <div
            className={`overflow-hidden transition-all duration-500 ${
              activeIndex === index ? "max-h-40 mt-2" : "max-h-0"
            }`}
          >
            <p className="text-sm text-[#4A4A4A] text-start">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
