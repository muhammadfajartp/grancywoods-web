import React from "react";
import TitleSection from "../atoms/TitleSection";
import TimelineDotUI from "../atoms/TimelineDotUI";

const Timeline = () => {
   return (
      <section className=" container pt-16">
         <TitleSection />
         <div className="flex flex-row min-h-96 border border-solid border-white border-x-0 bg-[url('/map.jpg')] bg-cover bg-center w-screen relative ">
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>
            <div className="relative z-10">
               <TimelineDotUI active={true} />
               <TimelineDotUI />
            </div>
         </div>
      </section>
   );
};

export default Timeline;
