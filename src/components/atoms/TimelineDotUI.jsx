import React from "react";

const TimelineDotUI = (props) => {
   const { active, data } = props;

   return (
      <div className="flex flex-row justify-center items-center">
         <p className={`text-white font-bold ${active ? "text-md font-bold md:text-lg lg:text-xl" : "text-xs font-normal md:text-sm lg:text-md"}`}>
            {data} <span className={`font-light ${active ? "text-sm md:text-base" : "text-[10px] md:text-xs"}`}>R.G.E</span>
         </p>
         <div className={`mx-4 rounded-full ${active ? "bg-red-500 border-2 border-solid border-white h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10" : "bg-white border border-solid border-white h-3 w-3 md:h-4 md:w-4 lg:h-6 lg:w-6"}`}></div>
      </div>
   );
};

export default TimelineDotUI;
