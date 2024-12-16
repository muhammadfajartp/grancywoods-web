import React from "react";

// ButtonUI component with an onClick prop to trigger actions like opening a modal
const ButtonUI = ({ onClick }) => {
   return (
      <button
         className="border-2 border-solid border-red-600 px-12 py-2 rounded-full text-red-600 hover:bg-red-100 transition duration-300 font-medium text-lg"
         onClick={onClick} // Attach onClick handler here
      >
         View Map
      </button>
   );
};

export default ButtonUI;
