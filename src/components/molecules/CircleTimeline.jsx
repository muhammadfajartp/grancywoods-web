import React from "react";
import TimelineDotUI from "../atoms/TimelineDotUI";

const CircleTimeline = () => {
   return (
      <div className="relative flex justify-center items-center h-full w-full right-1/2 ">
         <div className="absolute max-w-[700px] max-h-[700px] px-0 mx-0  w-screen h-full border-8 border-white rounded-full overflow-visible bg-gradient-to-r from-black to-transparent">
            <div className="absolute top-1/6 right-0 translate-x-1/4 -translate-y-1/2 z-10" style={{ transform: "translate(-130%, 75%)" }}>
               <TimelineDotUI data={null} />
            </div>

            {/* TimelineDotUI positioned on the top-right */}
            <div className="absolute top-1/4 right-0 translate-x-1/2 -translate-y-1/2 z-10" style={{ transform: "translate(-10%, -50%)" }}>
               <TimelineDotUI data="2" />
            </div>
            {/* TimelineDotUI positioned on the right edge of the border */}
            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 z-10" style={{ transform: "translate(25%, -50%)" }}>
               <TimelineDotUI active data="3" />
            </div>
            {/* TimelineDotUI positioned on the bottom-right */}
            <div className="absolute bottom-1/4 right-0 translate-x-1/2 -translate-y-1/2 z-10" style={{ transform: "translate(-4%, -50%)" }}>
               <TimelineDotUI data="4" />
            </div>

            <div className="absolute bottom-1/4 right-0 translate-x-1/4 -translate-y-1/2 z-10" style={{ transform: "translate(-130%, 605%)" }}>
               <TimelineDotUI data="5" />
            </div>
         </div>
      </div>
   );
};

export default CircleTimeline;
