import React, { useState } from "react";

const RoleDice = ({ currentDice, roleDice }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-20 mb-5 gap-4">
        <img
          onClick={roleDice}
          className="cursor-pointer"
          src={`./images/dice/dice_${currentDice}.png`}
          alt="dice 1"
        />
        <p className="text-2xl font-medium my-4">Click on Dice to roll</p>
      </div>
    </>
  );
};

export default RoleDice;
