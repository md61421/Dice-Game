import React from "react";

const TotalScore = ({ score }) => {
  return (
    <div className="text-center">
      <h1 className="text-8xl font-medium">{score}</h1>
      <p className="text-2xl">Total Score</p>
    </div>
  );
};

export default TotalScore;
