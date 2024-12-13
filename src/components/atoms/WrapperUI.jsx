import React from "react";

const WrapperUI = (props) => {
   const { bgColor = "transparent", children } = props;
   return (
      <div style={{ backgroundColor: bgColor }} className=" p-8 lg:p-16 border-0 rounded-lg text-white">
         {children}
      </div>
   );
};

export default WrapperUI;
