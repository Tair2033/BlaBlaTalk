import React from "react";
import TheCompanion from "./companion/TheCompanion";
import "./informbox.css";

const TheInformBox = () => {
  return (
    <div className="inform-wrapper">
      <div className="inform">
        <TheCompanion />
      </div>
    </div>
  );
};

export default TheInformBox;
