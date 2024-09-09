import React from "react";
// import { useNavigate } from "react-router-dom";
import { Container, Image,Carousel} from "react-bootstrap";
import "../customcss/coverpage.css";
import ImageCarouselComponent from "./ImageCarouselComponent";

const Coverpage = () => {
  // const navigate = useNavigate();
  return (
    <>
      <Container fluid style={{marginTop:"3rem"}}>
       <ImageCarouselComponent altText={"Coverpage"} />
      </Container>
    </>
  );
};

export default Coverpage;
