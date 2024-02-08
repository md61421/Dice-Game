import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("Please select a number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 6);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(null);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <main className="max-md:flex max-md:flex-col max-md:gap-4 max-md:mt-8">
      <div className="flex justify-between items-end w-3/4 mx-auto my-8 max-md:flex-col max-md:items-center max-md:gap-12">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className="flex flex-col items-center justify-center gap-4">
        <button
          onClick={resetScore}
          className="bg-white text-slate-900 px-16 py-2 rounded font-semibold border-2 border-slate-900 max-md:m-auto"
        >
          Reset Score
        </button>
        <button onClick={() => setShowRules(prev => !prev)} className="bg-slate-900 text-white px-16 py-2 rounded font-semibold border-2 border-slate-900 max-md:m-auto">
          {showRules ? "Hide" : "Show"} Rules
        </button>
      </div>
      {showRules && <Rules />}
    </main>
  );
};

export default GamePlay;
