import RzButtonGroup from "../../components/atoms/rz-button-group";

const ButtonGroupPage = () => {
  const buttons = [
    { text: "Button 1", type: "secondary", size: "lg" },
    { text: "Button 2", type: "secondary", size: "lg" },
    { text: "Button 3", type: "secondary", size: "lg" },
    { text: "Button 1", type: "secondary", size: "lg" },
    { text: "Button 2", type: "secondary", size: "lg" },
    { text: "Button 3", type: "secondary", size: "lg" },
  ];
  const Disabledbuttons = [
    { text: "Button 1", type: "disabled", size: "lg" },
    { text: "Button 2", type: "disabled", size: "lg" },
    { text: "Button 3", type: "disabled", size: "lg" },
  ];
  return (
    <>
      <div className="bg-gray-100 h-screen w-full overflow-auto ">
        <div className=" max-w-5xl mx-auto w-full my-9">
          <div className="text-lg font-bold text-gray-700 py-9">
            Button Group Page
            <div className="py-9 flex justify-evenly">
              <RzButtonGroup buttons={buttons} />
              <RzButtonGroup buttons={Disabledbuttons} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtonGroupPage;
