import React from 'react'

const Cart = () => {
    return (
        <div  className='flex justify-center items-center min-h-screen'>
        <div className=' ml 12 max-w-md '>
            <h1 className='text-2xl font-bold mb-4'>Add Edit/Vehicles</h1>

            <div className="flex">
    <span className="font-semibold w-1/2 pb-4 mb-3">
        <span className="border-b border-black hover:border-blue-500">
            Car Name/Company
        </span>
    </span>
    <span className="font-semibold w-1/2 pb-4 mb-3">
        <span className="border-b border-black hover:border-red-500">
            Car Model No
        </span>
    </span>
</div>



    <div className="img-box">
        <img
        src="https://cdn.pixabay.com/photo/2016/04/01/12/16/car-1300629_960_720.png"
        alt="car"
        className="rounded-lg"
       />
    </div>

   <div className="car-details margin: 3px ">

   <div className="flex-div">
   <div className="flex-item">
    <p className='car-detail font-bold pt-3 pb-2 relative flex items-center'>
        Add More Details
        <div className="ml-auto">
            <i className="fa-solid fa-caret-up mr-4"></i>
        </div>
    </p>
    <hr className="w-full border-b border-black my-1" />
   </div>

    <div>
        <div className="flex">
    <span className="font-semibold w-1/2">
        <span class="fa fa-solid fa-i text-black text-small mr-2 text-xs"></span> 
        Distance
    </span>
    <p className="w-1/2">Kilometers</p>
    <div className="flex-item p-3">
        <i className="fa-solid fa-caret-up text-xs mr-1"></i> 
    </div>
        </div>
        
        <div className="flex">
            <span className="font-semibold w-1/2">
            <span class="fa fa-solid fa-i text-black text-small mr-2 text-xs"></span> 
             Entering the Mileage
            </span>
            <p className="w-1/2">Odometer</p>
            <div className="flex-item p-4">
            <i className="fa-solid fa-caret-up text-xs"></i>
            </div>
        </div>

        <div className="flex">
            <span className="font-semibold w-1/2">
             <span class="fa fa-solid fa-i text-black text-small mr-2 text-xs"></span> 
             Fuel
            </span>
            <p className="w-1/2">Liters</p>
            <div className="flex-item p-4">
            <i className="fa-solid fa-caret-up text-xs text-xs"></i>
            </div>
        </div>

        <div className="flex">
            <span className="font-semibold w-1/2">
            <span class="fa fa-solid fa-i text-black text-small mr-2 text-xs"></span> 
             Consumption
            </span>
            <p className="w-1/2">1/100km</p>
            <div className="flex-item p-4">
            <i className="fa-solid fa-caret-up text-xs"></i>
             </div>
        </div>
        
        <div className="flex">
            <span className="font-semibold w-1/2">
            <span class="fa fa-solid fa-i text-black mr-3 text-xs"></span>
             Currency
           </span>
            <p className="w-1/2">INR.</p>
            <div className="flex-item p-4">
            <i className="fa-solid fa-caret-up text-xs"></i>
          </div>
        </div>
    </div>
  </div>
    
  <div className="flex-div">
  <div className="flex-item">
    <p className='car-detail font-bold pt-3 pb-2 relative flex items-center'>
        Car Description
        <div className="ml-auto">
            <i className="fa-solid fa-caret-up mr-4"></i>
        </div>
    </p>
    <hr className="w-full border-b border-black my-1" />
    <p class="text-black">
    This is a trip to Mathura, always a great place to visit.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Sed ac tincidunt quam. Nullam non metus in sem iaculis elementum.
</p>

   </div>
  </div>

    <div className="flex-div">
    <div className="flex-item">
    <p className='car-detail font-bold pt-3 pb-2 relative flex items-center'>
        Car Optional Details
        <div className="ml-auto">
            <i className="fa-solid fa-caret-up mr-4"></i>
        </div>
    </p>
        <hr className="w-full border-b border-black my-1" />
    </div>
    <div>
        <div className="flex">
            <span className="font-semibold w-1/2">
            <span class="fa fa-solid fa-i text-black text-small mr-2 text-xs"></span> 
                Manufacture</span>
            <p className="w-1/2">Lorem ISPU</p>
            <div className="flex-item p-4">
             <i className="fa-solid fa-caret-up text-xs"></i>
             </div>
        </div>

        <div className="flex">
            <span className="font-semibold w-1/2">
            <span class="fa fa-solid fa-i text-black text-small mr-2 text-xs"></span> 
                License Plate</span>
            <p className="w-1/2">LAU 4589</p>
            <div className="flex-item p-4">
            <i className="fa-solid fa-caret-up text-xs"></i>
              </div>
        </div>

        <div className="flex">
            <span className="font-semibold w-1/2">
            <span class="fa fa-solid fa-i text-black text-small mr-2 text-xs"></span>    
                VIN</span>
            <p className="w-1/2">012345678</p>
            <div className="flex-item p-4">
             <i className="fa-solid fa-caret-up text-xs"></i>
              </div>
        </div>

        <div className="flex">
            <span className="font-semibold w-1/2">
            <span class="fa fa-solid fa-i text-black text-small mr-2 text-xs"></span>  
                Displacement</span>
            <p className="w-1/2">XYZ km</p>
            <div className="flex-item p-4">
            <i className="fa-solid fa-caret-up text-xs"></i>
             </div>
        </div>

        <div className="flex">
            <span className="font-semibold w-1/2">
            <span class="fa fa-solid fa-i text-black text-small mr-2 text-xs"></span>    
                Purchase Date</span>
            <p className="w-1/2">12/09/2023
            </p>
            <div className="flex-item p-4">
            <i className="fa-solid fa-caret-up text-xs"></i>
             </div>
        </div>

    </div>
  </div>

    <div className='font-semibold pt-[20px]'>
         <button className="w-full bg-slate-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
        CONTINUE
       </button>
       </div>
   </div>

        </div>
        </div>
    )
}

export default Cart