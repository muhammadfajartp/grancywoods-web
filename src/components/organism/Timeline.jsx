import React from "react";
import TitleSection from "../atoms/TitleSection";

const Timeline = () => {
   return (
      <section className=" container pt-16">
         <TitleSection />
         <div className="flex flex-row min-h-96 border border-solid border-white border-x-0 bg-[url('/map.jpg')] bg-cover bg-center w-screen relative ">
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>
         </div>
      </section>
   );
};

export default Timeline;
