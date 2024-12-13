import React from "react";
import { MdArrowForward, MdArrowBack } from "react-icons/md";

const ButtonArrowUI = (props) => {
   const { direction, onClick } = props;
   return (
      <div onClick={onClick} className="border-0 rounded-full w-10 h-10 sm:w-14 sm:h-14 bg-red-500 flex justify-center items-center">
         {direction === "next" ? <MdArrowForward size={24} color="white" /> : <MdArrowBack size={24} color="white" />}
      </div>
   );
};

export default ButtonArrowUI;
