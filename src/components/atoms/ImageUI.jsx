import React from "react";

const ImageUI = ({ imageSrc, altText = "Image" }) => {
   return <img src={imageSrc} alt={altText} loading="lazy" className="max-w-[1201px] max-h-[781px] h-full w-full aspect-[16/9] border-0 rounded-3xl" />;
};

export default ImageUI;
