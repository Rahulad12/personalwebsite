import React from "react";
import { MdConstruction } from "react-icons/md";
const BlogScreen = () => {
  return (
    <div
      className="Container"
      style={{
        marginTop: "5rem",
        display: "flex",
        justifyContent: "center",
        flexDirection:"column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div className="icon-container mb-4">
        <MdConstruction className="lock-icon text-warning " 
        style={{ fontSize: "5rem" }}
        />
      </div>
      <h1 className="display-4">Under Construction</h1>
      <h2 className="mb-4">This page is under construction</h2>
      <p className="lead">
        Sorry, this page is currently under construction. Please check back
        later.
      </p>
    </div>
  );
};

export default BlogScreen;
