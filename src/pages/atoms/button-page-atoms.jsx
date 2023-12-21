import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import RzButton from "../../components/atoms/rz-button";

const ButtonPageAtoms = () => {
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };
  return (
    <>
      <div className="bg-white h-screen w-full overflow-auto">
        <div className=" max-w-3xl mx-auto w-full my-9">
          <div className="text-lg font-bold text-gray-700 py-9">Buttons</div>
          <div className="primary-buttons pb-20">
            <div className="flex justify-between items-center py-4 ">
              <RzButton
                text="Button Text"
                type="primary"
                size="sm"
                onClick={handleButtonClick}
              />
              <RzButton
                text="Button Text"
                type="primary"
                size="md"
                onClick={handleButtonClick}
              />
              <RzButton
                text="Button Text"
                type="primary"
                size="lg"
                onClick={handleButtonClick}
              />
            </div>
            <div className="flex justify-between items-center py-4">
              <RzButton
                text="Button Text"
                type="disabled"
                size="sm"
                onClick={handleButtonClick}
              />
              <RzButton
                text="Button Text"
                type="disabled"
                size="md"
                onClick={handleButtonClick}
              />
              <RzButton
                text="Button Text"
                type="disabled"
                size="lg"
                onClick={handleButtonClick}
              />
            </div>
            <div className="flex justify-between items-center py-4">
              <RzButton
                text="Button Text"
                type="primary"
                size="sm"
                icon={<WrenchScrewdriverIcon />}
                onClick={handleButtonClick}
              />
              <RzButton
                text="Button Text"
                type="primary"
                size="md"
                icon={<WrenchScrewdriverIcon />}
                onClick={handleButtonClick}
              />
              <RzButton
                text="Button Text"
                type="primary"
                size="lg"
                icon={<WrenchScrewdriverIcon />}
                onClick={handleButtonClick}
              />
            </div>

            <div className="flex justify-between items-center py-7">
              <RzButton
                text="Button Text"
                type="disabled"
                size="sm"
                icon={<WrenchScrewdriverIcon />}
                onClick={handleButtonClick}
              />
              <RzButton
                text="Button Text"
                type="disabled"
                size="md"
                icon={<WrenchScrewdriverIcon />}
                onClick={handleButtonClick}
              />
              <RzButton
                text="Button Text"
                type="disabled"
                size="lg"
                icon={<WrenchScrewdriverIcon />}
                onClick={handleButtonClick}
              />
            </div>
          </div>

          <div className="secondary-buttons pb-20">
            <div className="flex justify-between items-center py-7">
              <RzButton
                text="Button Text"
                type="secondary"
                size="sm"
                onClick={handleButtonClick}
              />
              <RzButton
                text="Button Text"
                type="secondary"
                size="md"
                onClick={handleButtonClick}
              />
              <RzButton
                text="Button Text"
                type="secondary"
                size="lg"
                onClick={handleButtonClick}
              />
            </div>
            <div className="flex justify-between items-center py-7">
              <RzButton
                text="Button Text"
                type="disabled"
                size="sm"
                onClick={handleButtonClick}
              />
              <RzButton
                text="Button Text"
                type="disabled"
                size="md"
                onClick={handleButtonClick}
              />
              <RzButton
                text="Button Text"
                type="disabled"
                size="lg"
                onClick={handleButtonClick}
              />
            </div>
            <div className="flex justify-between items-center py-7">
              <RzButton
                text="Button Text"
                type="secondary"
                size="sm"
                icon={<WrenchScrewdriverIcon />}
                onClick={handleButtonClick}
              />
              <RzButton
                text="Button Text"
                type="secondary"
                size="md"
                icon={<WrenchScrewdriverIcon />}
                onClick={handleButtonClick}
              />
              <RzButton
                text="Button Text"
                type="secondary"
                size="lg"
                icon={<WrenchScrewdriverIcon />}
                onClick={handleButtonClick}
              />
            </div>
            <div className="flex justify-between items-center py-7">
              <RzButton
                text="Button Text"
                type="disabled"
                size="sm"
                icon={<WrenchScrewdriverIcon />}
                onClick={handleButtonClick}
              />
              <RzButton
                text="Button Text"
                type="disabled"
                size="md"
                icon={<WrenchScrewdriverIcon />}
                onClick={handleButtonClick}
              />
              <RzButton
                text="Button Text"
                type="disabled"
                size="lg"
                icon={<WrenchScrewdriverIcon />}
                onClick={handleButtonClick}
              />
            </div>
          </div>
          <div className="tertiary-buttons pb-20">
            <div className="flex justify-between items-center py-7">
              <RzButton
                text="Button Text"
                type="tertiary"
                size="sm"
                onClick={handleButtonClick}
              />
              <RzButton
                text="Button Text"
                type="tertiary"
                size="md"
                onClick={handleButtonClick}
              />
              <RzButton
                text="Button Text"
                type="tertiary"
                size="lg"
                onClick={handleButtonClick}
              />
            </div>
            <div className="flex justify-between items-center py-7">
              <RzButton
                text="Button Text"
                type="tertiary"
                size="sm"
                disabled
                onClick={handleButtonClick}
              />
              <RzButton
                text="Button Text"
                type="tertiary"
                size="md"
                disabled
                onClick={handleButtonClick}
              />
              <RzButton
                text="Button Text"
                type="tertiary"
                size="lg"
                disabled
                onClick={handleButtonClick}
              />
            </div>
            <div className="flex justify-between items-center py-7">
              <RzButton
                text="Button Text"
                type="tertiary"
                size="sm"
                icon={<WrenchScrewdriverIcon />}
                onClick={handleButtonClick}
              />
              <RzButton
                text="Button Text"
                type="tertiary"
                size="md"
                icon={<WrenchScrewdriverIcon />}
                onClick={handleButtonClick}
              />
              <RzButton
                text="Button Text"
                type="tertiary"
                size="lg"
                icon={<WrenchScrewdriverIcon />}
                onClick={handleButtonClick}
              />
            </div>
            <div className="flex justify-between items-center py-7">
              <RzButton
                text="Button Text"
                type="tertiary"
                size="sm"
                disabled
                icon={<WrenchScrewdriverIcon />}
                onClick={handleButtonClick}
              />
              <RzButton
                text="Button Text"
                type="tertiary"
                size="md"
                disabled
                icon={<WrenchScrewdriverIcon />}
                onClick={handleButtonClick}
              />
              <RzButton
                text="Button Text"
                type="tertiary"
                size="lg"
                disabled
                icon={<WrenchScrewdriverIcon />}
                onClick={handleButtonClick}
              />
            </div>
          </div>
          <div className="icon-buttons">
            <div className="flex justify-between items-center py-7">
              <RzButton
                size="sm"
                onClick={handleButtonClick}
                icon={<WrenchScrewdriverIcon />}
              />
              <RzButton
                size="md"
                onClick={handleButtonClick}
                icon={<WrenchScrewdriverIcon />}
              />
              <RzButton
                size="md"
                onClick={handleButtonClick}
                icon={<WrenchScrewdriverIcon />}
              />
            </div>
          </div>
          <div className="icon-buttons">
            <div className="flex justify-between items-center py-7">
              <RzButton
                size="sm"
                disabled
                type="disabled"
                onClick={handleButtonClick}
                icon={<WrenchScrewdriverIcon />}
              />
              <RzButton
                disabled
                size="md"
                type="disabled"
                onClick={handleButtonClick}
                icon={<WrenchScrewdriverIcon />}
              />
              <RzButton
                disabled
                size="md"
                type="disabled"
                onClick={handleButtonClick}
                icon={<WrenchScrewdriverIcon />}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ButtonPageAtoms;
