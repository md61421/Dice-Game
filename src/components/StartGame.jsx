import React from "react";

const StartGame = ({toggle}) => {
  return (
    <div className="w-3/4 h-screen flex items-center justify-center m-auto max-md:flex-col ">
      <div className=" w-[50vw] flex items-center justify-center max-md:w-full">
        <img src="../images/dices.png" alt="" />
      </div>
      <div className="w-[50vw] flex items-end justify-center flex-col max-md:items-center max-xl:w-full">
        <h1 className="text-slate-900 text-8xl font-bold my-6 max-md:text-5xl max-lg:text-6xl max-xl:text-7xl">Dice Game</h1>
        <button onClick={toggle} className="bg-slate-900 text-white px-20 py-3 rounded font-medium hover:bg-white hover:text-slate-900 border-2 border-slate-900 hover:border-2 hover:border-slate-900
         max-md:m-auto max-md:px-12 max-md:py-2 transition-all">Play Game</button>
      </div>
    </div>
  );
};

export default StartGame;
