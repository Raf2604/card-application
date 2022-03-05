import React from "react";
import "./styles.scss";

const Instruction = () => {
  return (
    <div className="instruction-component">
      <p>Press the "Add Card" button to add the new Card.</p>
      <p>Use the "Sort Cards" button to sort the Cards by the increase.</p>
      <p>Press an X icon on the top right to delete them.</p>
    </div>
  );
};

export default Instruction;
