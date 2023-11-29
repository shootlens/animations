import { useState, useEffect } from "react";

const RzAvatar = ({ imgUrl, firstName }) => {
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

  return (
    <div>
      <div
        className={`h-8 w-8 rounded-full flex items-center justify-center`}
        style={{
          backgroundColor: imgUrl & !imgError ? "transparent" : randomColor,
        }}
      >
        {imgUrl && !imgError ? (
          <img
            className="h-9 w-9 rounded-full"
            src={imgUrl}
            alt=""
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="text-center capitalize flex text-white">
            {firstName !== null ? firstName.charAt(0) : ""}
          </div>
        )}
      </div>
    </div>
  );
};

export default RzAvatar;
