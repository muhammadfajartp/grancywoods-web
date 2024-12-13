import React, { useRef, useEffect, useState } from "react";
import TimelineDotUI from "../atoms/TimelineDotUI";

const CircleTimeline = ({ timelineDots, onDotClick }) => {
   const circleRef = useRef(null); // Reference to the circle container
   const [radius, setRadius] = useState(380); // Initial radius value

   const updateRadius = () => {
      if (circleRef.current) {
         const size = circleRef.current.offsetWidth;
         setRadius(size / 2 - 10); // Adjust radius based on container size
      }
   };

   useEffect(() => {
      updateRadius();
      window.addEventListener("resize", updateRadius);
      return () => {
         window.removeEventListener("resize", updateRadius);
      };
   }, []);

   const positionAngles = [-90, -45, 0, 45, 90]; // Angles for each position

   const getDotPosition = (angle) => {
      const offsetX = -118; // Adjust offset to move dots slightly to the left
      const radian = (angle * Math.PI) / 180; // Convert angle to radians
      const x = radius * Math.cos(radian) + offsetX; // X-coordinate with offset
      const y = radius * Math.sin(radian); // Y-coordinate
      return { x, y };
   };

   return (
      <div className="relative flex justify-center items-center h-full w-full right-1/2 ">
         <div ref={circleRef} className="absolute max-w-[790px] max-h-[700px] px-0 mx-0 w-screen h-full border-8 border-white rounded-full overflow-visible bg-gradient-to-r from-black to-transparent">
            {timelineDots.map((dot) => {
               const { x, y } = getDotPosition(positionAngles[dot.position]);
               return (
                  <div
                     key={dot.id}
                     className="absolute transition-transform duration-700"
                     style={{
                        transform: `translate(${x}px, ${y}px)`,
                        top: "48%",
                        left: "50%",
                     }}
                     onClick={() => onDotClick(dot)} // Pass clicked dot to handler
                  >
                     <TimelineDotUI data={dot.id} active={dot.position === 2} />
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default CircleTimeline;
