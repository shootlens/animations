import { useState, useEffect } from "react";

const RzAvatar = ({
  imgUrl,
  firstName,
  customRadius,
  isSingleLetter,
  showOverlayDot,
}) => {
  const [randomColor, setRandomColor] = useState(generateRandomColor());
  const [imgError, setImgError] = useState(false);

  function generateRandomColor() {
    const isWhite = (color) => /^#ffffff$/i.test(color);
    let color;
    do {
      color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    } while (isWhite(color));
    return color;
  }

  useEffect(() => {
    setRandomColor(generateRandomColor());
  }, [imgUrl, imgError]);

  const overlayDotSize = customRadius ? customRadius * 0.2 : 3;

  return (
    <div>
      <div
        className={`rounded-full flex items-center justify-center relative`}
        style={{
          backgroundColor: imgUrl & !imgError ? "transparent" : randomColor,
          width: customRadius ? customRadius : "32px",
          height: customRadius ? customRadius : "32px",
        }}
      >
        {imgUrl && !imgError ? (
          <>
            {" "}
            <img
              className="h-9 w-9 rounded-full"
              src={imgUrl}
              alt=""
              onError={() => setImgError(true)}
              style={{ objectFit: "cover", height: "100%", width: "100%" }}
            />
            {showOverlayDot && (
              <div
                className="absolute  block rounded-full bg-gray-300 ring-2 ring-white"
                style={{
                  transform: "translate(50%, -50%)",
                  height: `${overlayDotSize}px`,
                  width: `${overlayDotSize}px`,
                  top: `${overlayDotSize / 1.9}px`,
                  right: `${overlayDotSize / 1.2}px`
                }}
              />
            )}
          </>
        ) : (
          <div className="text-center uppercase  flex text-white">
            {firstName !== null
              ? isSingleLetter
                ? firstName.charAt(0)
                : firstName.substring(0, 2)
              : ""}
          </div>
        )}
      </div>
    </div>
  );
};

export default RzAvatar;
