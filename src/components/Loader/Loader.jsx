import React from "react";
import LoaderImg from "../../images/loader.svg";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader">
        <img src={LoaderImg} alt="loader" />
        <div className="loader-text">
          please wait while we're registering you
        </div>
      </div>
    </div>
  );
};

export default Loader;
