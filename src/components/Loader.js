import React from "react";
import GridLoader from "react-spinners/GridLoader";



function Loader() {
  

  return (

      <div className="fixed h-full w-full bg-gray-800 z-50 top-0 m-0">
        <div className="flex justify-center items-center h-full w-full bg-gray-800 m-0">
          <GridLoader
            color="#36d7b7"
            size={30}
            speedMultiplier={1}
          />
        </div>
      
    </div>
 
  );
}

export default Loader;