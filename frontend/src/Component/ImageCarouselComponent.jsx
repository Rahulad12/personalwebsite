import React from "react";
import { Image } from "react-bootstrap";


const ImageCarouselComponent = ({ altText }) => {
  return (
    <div>
      <Image src="/image/2.png" alt={altText} style={{width:"100%"}}/>
    </div>
  );
};

export default ImageCarouselComponent;
