import React, { useState } from "react";
import TimelineDotUI from "../atoms/TimelineDotUI";

const CircleTimeline = () => {
   const [timelineDots, setTimelineDots] = useState([
      { id: 1000, position: 0 },
      { id: 2000, position: 1 },
      { id: 3000, position: 2 },
      { id: 4000, position: 3 },
      { id: 5000, position: 4 },
   ]);

   const handleDotClick = (clickedDot) => {
      setTimelineDots((prevDots) => {
         const clickedAngle = positionAngles[clickedDot.position];
         // Determine the direction based on angle
         const direction = clickedAngle <= 0 ? 1 : -1; // 1 = clockwise, -1 = counterclockwise
         return prevDots.map((dot) => ({
            ...dot,
            position: (dot.position + direction + 5) % 5, // Rotate based on direction
         }));
      });
   };

   // Updated angles for the positions
   const positionAngles = [-90, -45, 0, 45, 90]; // Angles for each dot on the circle

   const getDotPosition = (angle) => {
      const radius = 385; // Adjust the radius to align with the border
      const offsetX = -130; // Adjust offset to move dots slightly to the left
      const radian = (angle * Math.PI) / 180; // Convert angle to radians
      const x = radius * Math.cos(radian) + offsetX; // X-coordinate with offset
      const y = radius * Math.sin(radian); // Y-coordinate
      return { x, y };
   };

   return (
      <div className="relative flex justify-center items-center h-full w-full right-1/2 ">
         <div className="absolute max-w-[700px] max-h-[700px] px-0 mx-0 w-screen h-full border-8 border-white rounded-full overflow-visible bg-gradient-to-r from-black to-transparent">
            {timelineDots.map((dot) => {
               const { x, y } = getDotPosition(positionAngles[dot.position]);
               return (
                  <div
                     key={dot.id}
                     className="absolute transition-transform duration-700"
                     style={{
                        transform: `translate(${x}px, ${y}px)`,
                        top: "48%", // Slight adjustment to vertical position
                        left: "45%", // Slight adjustment to horizontal position
                     }}
                     onClick={() => handleDotClick(dot)} // Pass the clicked dot
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
