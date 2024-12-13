import React, { useRef, useEffect, useState } from "react";
import TimelineDotUI from "../atoms/TimelineDotUI";

const CircleTimeline = ({ timelineDots, onDotClick, smallScreenOffset = 0 }) => {
   const circleRef = useRef(null); // Reference to the circle container
   const [radius, setRadius] = useState(380); // Initial radius value
   const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 440); // Track screen size

   const updateRadius = () => {
      if (circleRef.current) {
         const size = circleRef.current.offsetWidth;
         const currentIsSmallScreen = window.innerWidth < 440; // Check for small screen (440px breakpoint)
         setIsSmallScreen(currentIsSmallScreen);

         const adjustedRadius = currentIsSmallScreen ? size / 2.2 - 10 : size / 2 - 10; // Adjusted radius for small screens
         setRadius(adjustedRadius);
      }
   };

   useEffect(() => {
      updateRadius(); // Update radius on mount
      window.addEventListener("resize", updateRadius); // Listen for resize events
      return () => {
         window.removeEventListener("resize", updateRadius);
      };
   }, []);

   const positionAngles = [-90, -45, 0, 45, 90]; // Angles for each position

   const getDotPosition = (angle) => {
      const offsetX = isSmallScreen ? smallScreenOffset : -128; // Use dynamic offset for small screens
      const radian = (angle * Math.PI) / 180; // Convert angle to radians
      const adjustment = isSmallScreen ? 1.3 : 1; // Adjust radius multiplier for small screens
      const x = radius * adjustment * Math.cos(radian) + offsetX; // X-coordinate with offset
      const y = radius * adjustment * Math.sin(radian); // Y-coordinate
      return { x, y };
   };

   return (
      <div className="relative flex justify-center items-center h-full w-full right-1/2">
         <div ref={circleRef} className={`absolute px-0 mx-0 w-screen h-full border-8 border-white rounded-full overflow-visible bg-gradient-to-r from-black to-transparent ${isSmallScreen ? "max-w-[400px] max-h-[350px]" : "max-w-[790px] max-h-[700px]"}`}>
            {timelineDots.map((dot) => {
               const { x, y } = getDotPosition(positionAngles[dot.position]);
               return (
                  <div
                     key={dot.id}
                     className="absolute transition-transform duration-700"
                     style={{
                        transform: `translate(${x}px, ${y}px)`,
                        top: "48%", // Adjust position for centering
                        left: "52%",
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
