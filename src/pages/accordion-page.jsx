import {
  PencilSquareIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import RzAccordion from "../components/rz-accordion";

const AccordionPage = () => {
  const accordionItems = [
    {
      title: "Do you know other chatbots?",
      description: (
        <div className="bg-[#F8F9FD] rounded-[10px] p-4">
          <div className="flex justify-between">
            <div className="text-base font-medium mb-4">Question Variants:</div>
            <PencilSquareIcon className="w-4 h-4" />
          </div>
          <ul>
            <li>Do you know Alexa?</li>
            <li>Do you know Alexa?</li>
            <li>Do you know Alexa?</li>
            <li>Do you know Alexa?</li>
            <li>Do you know Alexa?</li>
          </ul>
        </div>
      ),
      titleIcon: (
        <div className="p-1 bg-[#F7E9CE] rounded-lg">
          <QuestionMarkCircleIcon className="text-[#E79B04] w-6 h-6" />
        </div>
      ),
    },
    {
      title: "Do you know other chatbots?",
      description: (
        <div className="bg-[#F8F9FD] rounded-[10px] p-4">
          <div className="flex justify-between">
            <div className="text-base font-medium mb-4">Question Variants:</div>
            <PencilSquareIcon className="w-4 h-4" />
          </div>
          <ul>
            <li>Do you know Alexa?</li>
            <li>Do you know Alexa?</li>
            <li>Do you know Alexa?</li>
            <li>Do you know Alexa?</li>
            <li>Do you know Alexa?</li>
          </ul>
        </div>
      ),
      titleIcon: (
        <div className="p-1 bg-[#F7E9CE] rounded-lg">
          <QuestionMarkCircleIcon className="text-[#E79B04] w-6 h-6" />
        </div>
      ),
    },
    {
      title: "Do you know other chatbots?",
      description: (
        <div className="bg-[#F8F9FD] rounded-[10px] p-4">
          <div className="flex justify-between">
            <div className="text-base font-medium mb-4">Question Variants:</div>
            <PencilSquareIcon className="w-4 h-4" />
          </div>
          <ul>
            <li>Do you know Alexa?</li>
            <li>Do you know Alexa?</li>
            <li>Do you know Alexa?</li>
            <li>Do you know Alexa?</li>
            <li>Do you know Alexa?</li>
          </ul>
        </div>
      ),
      titleIcon: (
        <div className="p-1 bg-[#F7E9CE] rounded-lg">
          <QuestionMarkCircleIcon className="text-[#E79B04] w-6 h-6" />
        </div>
      ),
    },
    {
      title: "Do you know other chatbots?",
      description: (
        <div className="bg-[#F8F9FD] rounded-[10px] p-4">
          <div className="flex justify-between">
            <div className="text-base font-medium mb-4">Question Variants:</div>
            <PencilSquareIcon className="w-4 h-4" />
          </div>
          <ul>
            <li>Do you know Alexa?</li>
            <li>Do you know Alexa?</li>
            <li>Do you know Alexa?</li>
            <li>Do you know Alexa?</li>
            <li>Do you know Alexa?</li>
          </ul>
        </div>
      ),
      titleIcon: (
        <div className="p-1 bg-[#F7E9CE] rounded-lg">
          <QuestionMarkCircleIcon className="text-[#E79B04] w-6 h-6" />
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="bg-gray-100 h-screen w-full overflow-auto">
        <div className=" max-w-4xl mx-auto w-full my-9">
          <div className="text-lg font-bold text-gray-700 py-9">Accordion</div>
          <RzAccordion items={accordionItems} />
        </div>
      </div>
    </>
  );
};
export default AccordionPage;
