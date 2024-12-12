import React from "react";
import { MdArrowForward, MdArrowBack } from "react-icons/md";

const ButtonArrowUI = (props) => {
   const { direction } = props;
   return <div className="border-0 rounded-full w-14 h-14 bg-red-600 flex justify-center items-center">{direction === "next" ? <MdArrowForward size={32} color="white" /> : <MdArrowBack size={32} color="white" />} </div>;
};

export default ButtonArrowUI;
