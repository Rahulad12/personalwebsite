import React from "react";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Slidetoupbutton from "./Component/Slidetoupbutton";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Header />

      <Outlet />
      <Slidetoupbutton />
      <Footer />

      <ToastContainer />
    </>
  );
};

export default App;
