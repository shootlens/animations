import React from "react";
import RZRadioButton from "../../components/atoms/radio-button";

const RadioButtonCardList = ({ cards }) => {
  const cardCount = cards.length;

  return (
    <div>
      {cards.map((card, index) => (
        <div
          key={index}
          className={`max-w-xl flex items-start border p-[17px] ${
            index === 0 ? "rounded-t-lg" : ""
          } ${index === cardCount - 1 ? "rounded-b-lg border-[#E5E7EB]" : ""} ${
            index !== 0 && index !== cardCount - 1
              ? "border-t-0 border-b-0 border-[#E5E7EB]"
              : ""
          }`}
        >
          <RZRadioButton />
          <div>
            <div>{card.title}</div>
            <div className="text-sm text-[#6B7280] not-italic font-normal leading-5">
              {card.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RadioButtonCardList;
