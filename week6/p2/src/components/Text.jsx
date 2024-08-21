/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Inside from "./Inside";

function Text({ texts }) {
  return (
    <div>
      {texts}
      <Inside />
    </div>
  );
}

export default Text;
