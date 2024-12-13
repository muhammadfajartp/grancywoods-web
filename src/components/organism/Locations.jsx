import React, { useState, useEffect } from "react";
import TitleSectionUI from "../atoms/TitleSectionUI";
import WrapperUI from "../atoms/WrapperUI";
import ButtonUI from "../atoms/ButtonUI";
import Modal from "react-modal";
import ImageCarousel from "../molecules/ImageCarousel";

const Locations = () => {
   // State to control modal visibility
   const [isModalOpen, setIsModalOpen] = useState(false);
   // State to store the currently selected image
   const [imageSrc, setImageSrc] = useState("");

   // Function to open the modal
   const openModal = () => setIsModalOpen(true);

   // Function to close the modal
   const closeModal = () => setIsModalOpen(false);

   // Function to handle image selection from the carousel
   const handleImageSelect = (src) => {
      console.log("Image selected in Locations:", src); // Debug: log the selected image path
      setImageSrc(src); // Update the selected image source
   };

   // useEffect to track image selection and modal status
   useEffect(() => {
      // This effect runs when the modal is opened or when the image is selected
      if (isModalOpen && !imageSrc) {
         console.log("No image selected yet.");
      } else if (imageSrc) {
         console.log("Image selected in the modal:", imageSrc);
      }
   }, [isModalOpen, imageSrc]); // This runs when either `isModalOpen` or `imageSrc` changes

   return (
      <section className="container pt-16 max-w-full">
         <TitleSectionUI title="LOCATIONS" />
         <div className="relative max-w-full flex flex-wrap lg:flex-nowrap justify-between">
            <div className="px-8 lg:ps-16">
               {/* ImageCarousel */}
               <ImageCarousel onImageSelect={handleImageSelect} />
            </div>

            <div className="flex justify-end items-end w-full lg:w-3/4 mt-8 lg:mt-0">
               <div className="w-3/4 bg-[#3A3A3A] border-0 rounded-l-3xl">
                  <WrapperUI>
                     <ButtonUI onClick={openModal} />
                  </WrapperUI>
               </div>
            </div>
         </div>

         <div className="w-full flex justify-end lg:-mt-24 -mt-12 -z-10">
            <div className="w-full lg:w-3/4">
               <WrapperUI bgColor="#4D73B6">
                  <div className="pt-6 sm:pt-12 lg:px-24">
                     <h2 className="text-2xl sm:text-3xl md:text-4xl">Towers of Dawn</h2>
                     <br />
                     <p className="text-lg sm:text-xl md:text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tempore placeat ex mollitia voluptatum porro ipsa natus doloribus accusamus adipisci excepturi laboriosam quis suscipit, quisquam laborum iusto tempora! Officia, molestias?</p>
                  </div>
               </WrapperUI>
            </div>
         </div>

         {/* Modal with Image */}
         <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Image Carousel Modal" ariaHideApp={false} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
            <div className="relative w-full h-full flex items-center justify-center">
               <button onClick={closeModal} className="absolute top-4 right-4 text-white text-2xl z-10">
                  ×
               </button>

               {/* Image displayed in the modal */}
               {imageSrc ? <img src={imageSrc} alt="Selected image" className="object-contain w-full h-full p-6 border-0 rounded-3xl" /> : <div className="text-white">No image selected</div>}
            </div>
         </Modal>
      </section>
   );
};

export default Locations;
