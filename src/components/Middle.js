import React from 'react';

const StatsComponent = () => {
  return (
    <div className="flex justify-center items-center bg-slate-700"> 
      <div className="rounded-lg p-8 shadow-md flex">
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-4 m-5 text-white"> Newsletter</h1> 
        </div>
        
      <div className="flex justify-center items-center "> 
      <div className=" p-0 flex">
        <div className="flex-1 relative"> 
          <input
            className="w-full bg-slate-700 hover:bg-black text-white font-bold py-2 px-4 border rounded-full "
            type="email"
            placeholder="your email"
          />
          <span className="absolute inset-y-0 right-8 flex items-center text-[#cfd8e7]">
          <i class="fa-solid fa-envelope"></i>
          </span>
        </div>
      </div>
    </div>

        </div>
      </div>
    
  );
};

export default StatsComponent;
