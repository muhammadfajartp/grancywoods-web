import React from "react";
import TitleSectionUI from "../atoms/TitleSectionUI";
import TimelineDotUI from "../atoms/TimelineDotUI";
import ButtonArrowUI from "../atoms/ButtonArrowUI";
import ImageUI from "../atoms/ImageUI";
import WrapperUI from "../atoms/WrapperUI";
import CircleTimeline from "../molecules/CircleTimeline";

const Timeline = () => {
   return (
      <section className=" container pt-16">
         <TitleSectionUI />
         <div className="flex flex-row min-h-[600px] border border-solid border-white border-x-0 bg-[url('/map.jpg')] bg-cover bg-center w-screen relative ">
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>
            <div className="relative z-10 w-full flex flex-row ">
               <div className="relative w-1/2 h-screen flex justify-center items-center my-6">
                  <CircleTimeline />
               </div>
               <div className=" w-1/2 h-full flex justify-center items-center px-22">
                  <div className="pe-24 text-white">
                     <h2 className="text-3xl">Golgarian War</h2>
                     <br />
                     <br />
                     <br />
                     <p className=" text-2xl">
                        Vega Cho Hun Gan I expands his direct rule over Golgariacand requests more power over Karawoodand Ambros.
                        <br />
                        <br />
                        Tera Alexandria and LusasLe Vunresist Vegas expansion and declare war on the Sages.
                        <br />
                        <br /> Kruk and the Cretans remain neutral and act as an intermediary within the conflict. Garousbegin to appear on the islands of Kyreenin large numbers.
                     </p>
                  </div>
               </div>
            </div>
         </div>
         {/* <ImageUI /> */}
         <div className=" w-2/5">
            <WrapperUI bgColor="#476BA8">
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tempore placeat ex mollitia voluptatum porro ipsa natus doloribus accusamus adipisci excepturi laboriosam quis suscipit, quisquam laborum iusto tempora! Officia, molestias?</p>
            </WrapperUI>
         </div>
      </section>
   );
};

export default Timeline;
