import React, { useState } from "react";
import TitleSectionUI from "../atoms/TitleSectionUI";
import CircleTimeline from "../molecules/CircleTimeline";

const Timeline = () => {
   const [timelineDots, setTimelineDots] = useState([
      { id: 1000, position: 0, desc: { title: "Golgarian War", story: "Vega Cho Hun Gan I expands his direct rule over Golgariacand requests more power over Karawoodand Ambros.\n\nTera Alexandria and LusasLe Vunresist Vegas expansion and declare war on the Sages.\n\nKruk and the Cretans remain neutral and act as an intermediary within the conflict. Garousbegin to appear on the islands of Kyreenin large numbers." } },
      { id: 2000, position: 1, desc: { title: "Lorem Ipsum", story: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti optio est, nulla facilis esse quam mollitia dolorum eaque laboriosam nostrum. Voluptatum eum laborum, consectetur rerum itaque eligendi reprehenderit dignissimos aliquid." } },
      { id: 3000, position: 2, desc: { title: "Lorem Ipsum", story: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." } },
      { id: 4000, position: 3, desc: { title: "Lorem Ipsum", story: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, " } },
      { id: 5000, position: 4, desc: { title: "Lorem Ipsum", story: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." } },
   ]);

   const [activeDotId, setActiveDotId] = useState(timelineDots[0].id); // Track the active dot ID

   function formatStoryWithLineBreaks(story) {
      let sentences = story.split(".");
      let formattedStory = sentences
         .map((sentence) => sentence.trim())
         .filter((sentence) => sentence.length > 0)
         .map((sentence) => sentence + ".")
         .join("<br />\n<br />\n");

      return <span dangerouslySetInnerHTML={{ __html: formattedStory }} />;
   }

   const handleDotClick = (clickedDot) => {
      setTimelineDots((prevDots) => {
         const clickedAngle = [-90, -45, 0, 45, 90][clickedDot.position];
         const direction = clickedAngle <= 0 ? 1 : -1;
         return prevDots.map((dot) => ({
            ...dot,
            position: (dot.position + direction + 5) % 5,
         }));
      });
      setActiveDotId(clickedDot.id); // Update the active dot ID
   };

   const activeDot = timelineDots.find((dot) => dot.id === activeDotId);

   return (
      <section className=" container pt-16">
         <TitleSectionUI title="TIMELINE" />
         <div className="flex flex-row min-h-[600px] border border-solid border-white border-x-0 bg-[url('/map.jpg')] bg-cover bg-center w-screen relative ">
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>
            <div className="relative  w-full flex flex-col sm:flex-row">
               <div className="relative w-full sm:w-1/2 h-screen flex justify-center items-center my-6">
                  <CircleTimeline timelineDots={timelineDots} onDotClick={handleDotClick} />
               </div>
               <div className="w-full sm:w-1/2 min-h-96 flex justify-start items-center px-6 sm:px-12 md:px-16 lg:px-22">
                  <div className="text-white">
                     <h2 className="text-2xl sm:text-3xl md:text-4xl">{activeDot?.desc.title}</h2>
                     <br />
                     <p className="text-lg sm:text-xl md:text-2xl">{formatStoryWithLineBreaks(activeDot?.desc.story)}</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Timeline;
