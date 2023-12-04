import "../styles/rz-pulse-animation.css";
const PulseAnimationButton = () => {
  return (
    <>
      <div className="flex justify-between">
        <button className="pulse-animation-button">Processing...</button>
        <button className="pulse-green-button">Processing...</button>
      </div>
      <div className="flex justify-between mt-36">
        <button className="pulse-red-button">Processing...</button>
        <button className="pulse-gray-button">Processing...</button>
      </div>
    </>
  );
};
export default PulseAnimationButton;
