import React, { useState } from "react";

const TimelineDotUI = (props) => {
   const { active } = props;

   return (
      <div className="flex flex-row justify-center items-center">
         <p className={` text-white ${active ? "text-xl font-bold" : "text-md font-normal"} `}>
            3312 <span className={` font-light ${active ? " text-base" : "text-xs"} `}>R.G.E</span>
         </p>
         <div className={`h-10 w-10 mx-4 rounded-full ${active ? "bg-red-500 border-2 border-solid border-white" : "bg-white border border-solid border-white h-5 w-5"}`}></div>
         <div className="border border-solid border-white h-5 w-5 bg-white rounded-full mx-4"></div>
      </div>
   );
};

export default TimelineDotUI;
