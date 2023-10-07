
import React from "react";
import Cart from "./Cart"; 

function MdContent() {  
  return (
    <div className="container flex">

        <div className="left-side m-20">

        <div className="mt-12 font-bold">
          <p className="hover:bg-gray-400 hover:text-white inline-block p-3 rounded-md">
            View All Vehicles <i className="fa-solid fa-right-long fa-sm ml-6 font-extrabold"></i>
          </p>
        </div>

        <div className="font-bold">
          <p className="hover:bg-gray-400 hover:text-white inline-block p-3 rounded-md">
            Add/Edit Vehicles <i className="fa-solid fa-right-long fa-sm ml-4"></i>
          </p>
        </div>
        
        <div className="font-bold">
          <p className="hover:bg-gray-400 hover:text-white inline-block p-3 rounded-md">
            Add Fuel Log <i className="fa-solid fa-right-long fa-sm ml-12"></i>
          </p>
        </div>

        <div className="font-bold">
          <p className="hover:bg-gray-400 hover:text-white inline-block p-3 rounded-md">
            View Fuel Log <i className="fa-solid fa-right-long fa-sm ml-10"></i>
          </p>
        </div>
        </div>

        <div className="content m-10">
        <Cart />
        </div>
           
    </div>
  );
}

export default MdContent;
