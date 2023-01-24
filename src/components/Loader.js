import React from "react";
import GridLoader from "react-spinners/GridLoader";
import "./Loader.css"


function Loader() {
  

  return (

      <div className="loader fixed h-screen w-full bg-gray-800 z-50 m-0">
        <div className="flex justify-center items-center h-full w-full bg-gray-800 m-0">
          <GridLoader
            color="#41659e"
            size={30}
            speedMultiplier={1}
          />
        </div>
      
    </div>
 
  );
}

export default Loader;