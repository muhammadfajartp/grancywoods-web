import React, { useState } from "react";

const TimelineDotUI = (props) => {
   const { active, data } = props;

   return (
      <div className="flex flex-row justify-center items-center">
         <p className={` text-white font-bold ${active ? "text-xl font-bold" : "text-md font-normal"} `}>
            {data} <span className={` font-light ${active ? " text-base" : "text-xs"} `}>R.G.E</span>
         </p>
         <div className={`h-10 w-10 mx-4 rounded-full ${active ? "bg-red-500 border-2 border-solid border-white" : "bg-white border border-solid border-white h-5 w-5"}`}></div>
      </div>
   );
};

export default TimelineDotUI;
