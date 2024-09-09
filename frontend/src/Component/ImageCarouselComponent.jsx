import React from "react";
import { Image } from "react-bootstrap";

const style = {
  height: "600px",
  width: "100%",
};
const ImageCarouselComponent = ({ altText }) => {
  return (
    <div>
      <Image src="/image/1.png" alt={altText} style={style} />
    </div>
  );
};

export default ImageCarouselComponent;
