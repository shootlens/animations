import "../styles/rz-pulse-animation.css";
const PulseAnimationButton = ({ title }) => {
  return (
    <>
      <div class="button1">
        <div class="circle-ripple"></div>
        <div className="text-xs not-italic font-normal text-[#6B7280]">
          {title || "buttonText"}
        </div>
      </div>
    </>
  );
};
export default PulseAnimationButton;
