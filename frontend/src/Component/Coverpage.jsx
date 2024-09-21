import React from "react";
// import { useNavigate } from "react-router-dom";
import { Container, Image,Carousel} from "react-bootstrap";
import "../customcss/coverpage.css";
import ImageCarouselComponent from "./ImageCarouselComponent";

const Coverpage = () => {
  // const navigate = useNavigate();
  return (
    <>
      <div style={{marginTop:"3rem"}}>
       <ImageCarouselComponent altText={"Coverpage"} />
      </div>
    </>
  );
};

export default Coverpage;
