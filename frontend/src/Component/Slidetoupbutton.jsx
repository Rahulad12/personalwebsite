import React from "react";
import { BsArrowUpSquareFill } from "react-icons/bs";
import { useState, useEffect } from "react";

const style = {
  color: "green",
  borderradius: "50%",
  fontSize: "50px",
  position: "fixed",
  bottom: "20px",
  right: "20px",
  cursor: "pointer",
};

const Slidetoupbutton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  return (
    <div className="scroll-to-top">
      {visible && (
        <div style={style} onClick={scrollToTop}>
          <BsArrowUpSquareFill />
        </div>
      )}
    </div>
  );
};

export default Slidetoupbutton;
