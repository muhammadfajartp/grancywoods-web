import React, { useState, useEffect } from "react";
import ImageUI from "../atoms/ImageUI";
import ButtonArrowUI from "../atoms/ButtonArrowUI";

// Daftar gambar yang akan ditampilkan
const images = ["/building1.jpg", "/monster1.jpg", "/monster2.jpg", "/building2.jpg"];

const ImageCarousel = ({ onImageSelect }) => {
   const [currentImageIndex, setCurrentImageIndex] = useState(0);
   const [isAnimating, setIsAnimating] = useState(false);

   // Function to go back to the previous image
   const goBack = () => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
   };

   // Function to go to the next image
   const goNext = () => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
   };

   // Handle animation end
   const handleTransitionEnd = () => {
      setIsAnimating(false);
   };

   // Handle image click to select the image
   const handleImageClick = () => {
      const selectedImage = images[currentImageIndex];
      console.log("Image clicked:", selectedImage); // Debugging: Log the selected image
      onImageSelect(selectedImage); // Pass the selected image to parent
   };

   // useEffect to monitor the currently displayed image and log it
   useEffect(() => {
      const selectedImage = images[currentImageIndex];
      console.log("Current image updated:", selectedImage); // This will run every time the image changes

      // Optionally: trigger any other action when the image changes
      // Example: Pass the selected image to the parent component (via `onImageSelect`)
      onImageSelect(selectedImage); // Update the parent with the selected image
   }, [currentImageIndex, onImageSelect]); // Dependencies: runs when `currentImageIndex` changes

   return (
      <div className="relative flex justify-center items-center">
         {/* Image Section */}
         <div className={`transition-all duration-400 ease-linear transform ${isAnimating ? "opacity-90 scale-100" : "opacity-100 scale-100"}`} onTransitionEnd={handleTransitionEnd}>
            <div onClick={handleImageClick}>
               {/* Image click to select */}
               <ImageUI imageSrc={images[currentImageIndex]} />
            </div>
         </div>

         {/* Buttons Section */}
         <div className="absolute -right-6 top-1/4 transform -translate-y-1/2 flex flex-col gap-2">
            <ButtonArrowUI direction="next" onClick={goNext} />
            <ButtonArrowUI direction="back" onClick={goBack} />
         </div>
      </div>
   );
};

export default ImageCarousel;
