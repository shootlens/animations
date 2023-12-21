import RZRadioButton from "../../components/atoms/radio-button";
import RadioButtonCardList from "./radio-button-list";

const RadioButtonPage = () => {
  const cards = [
    {
      title: "Public access",
      description: "This project would be available to anyone who has the link",
    },
    {
      title: "Private to Project Members",
      description: "Only members of this project would be able to access",
    },
    {
      title: "Private to you",
      description: "You are the only one able to access this project",
    },
  ];

  return (
    <>
      <div className="bg-white h-screen w-full overflow-auto ">
        <div className=" max-w-5xl mx-auto w-full my-9">
          <div className="text-lg font-bold text-gray-700 py-9">
            Radio Buttons
          </div>

          <div className="flex items-center space-x-9">
            <RZRadioButton title="Radio button" />
            <RZRadioButton title="Radio button" />
          </div>
          <div className="flex-col space-y-4 items-center my-9 mx-9">
            <RZRadioButton title="Radio button" />
            <RZRadioButton title="Radio button" />
            <RZRadioButton title="Radio button" />
          </div>
          <div className="my-9">
            <RadioButtonCardList cards={cards} />
          </div>
        </div>
      </div>
    </>
  );
};
export default RadioButtonPage;
