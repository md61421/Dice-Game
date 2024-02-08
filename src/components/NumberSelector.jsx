import React, { useState } from "react";

const NumberSelector = ({ error, setError, selectedNumber, setSelectedNumber }) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelector = (value) => {
    setSelectedNumber(value);
    setError("");
  }

  return (
    <div className="flex flex-col items-end gap-4 max-md:items-center">
      <p className="text-red-600">{error}</p>
      <div className="flex justify-center items-center gap-2">
        {arrNumber.map((value, i) => (
          <button
            onClick={()=> numberSelector(value)}
            key={i}
            className={`${
              value === selectedNumber
                ? "bg-slate-900 text-white"
                : "bg-white text-slate-900"
            }  text-slate-900 px-6 py-3 rounded font-medium hover:bg-slate-900 hover:text-white border-2 border-slate-900 hover:border-2 hover:border-slate-900 transition-all`}
          >
            {value}
          </button>
        ))}
      </div>
      <p className="text-xl">Select Number</p>
    </div>
  );
};

export default NumberSelector;
