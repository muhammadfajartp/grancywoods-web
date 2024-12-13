import React from "react";

const TitleSectionUI = (props) => {
   const { title } = props;
   return (
      <React.Fragment>
         <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase font-bold px-4 sm:px-8 md:px-16 pb-8 sm:pb-12 md:pb-16">{title}</h2>
      </React.Fragment>
   );
};

export default TitleSectionUI;
