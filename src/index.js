import React, { useState } from "react";
import ReactDOM from "react-dom";

const Alert = () => {
  const colorClasses = {
    orange: "", // comment this, uncomment next
    // orange: "warning",
    red: "danger",
    text4Red: "OMG! Something really bad has happended!",
    text4Orange: "Well, it is not that bad after all!",
  };

  return (
    <div
      class={`alert alert-${colorClasses.orange ? "warning" : "danger"}`}
      role="alert"
    >
      {colorClasses.orange ? colorClasses.text4Orange : colorClasses.text4Red}
    </div>
  );
};

ReactDOM.render(<Alert />, document.getElementById("root"));
