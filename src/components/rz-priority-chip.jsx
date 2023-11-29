import {
  ChevronDoubleUpIcon,
  ChevronDoubleDownIcon,
  Bars3Icon,
  RssIcon,
} from "@heroicons/react/24/outline";

const RzPriorityChip = ({ highPriority, lowPriority, mediumPriority }) => {
  let icon, bgColor, textColor;

  switch (true) {
    case highPriority:
      icon = <ChevronDoubleUpIcon />;
      bgColor = "#E3384326";
      textColor = "#E33843";
      break;
    case mediumPriority:
      icon = <Bars3Icon />;
      bgColor = "#FEBA3126";
      textColor = "#FEBA31";
      break;
    case lowPriority:
      icon = <ChevronDoubleDownIcon />;
      bgColor = "#2AC76926";
      textColor = "#2AC769";
      break;
    default:
      icon = <RssIcon />;
      bgColor = "#CCCCCC";
      textColor = "#000000";
      break;
  }

  return (
    <div
      className="w-[31px] h-[31px] rounded-full p-2"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {icon}
    </div>
  );
};

export default RzPriorityChip;
