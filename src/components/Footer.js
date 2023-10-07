import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8 mt-50">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between">

        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
          <h3 className="text-xl font-semibold mb-4">VAHAN+</h3>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
          <p>Hello, We are ABC ,trying to make an effort
            to put the right people for you to get the best results,just insight
          </p>
          <div className="mt-4 flex items-center">
            <span>(123)456-7890</span>
          </div>
          <div className="mt-4 flex items-center">
            <span>ABC@gmail.com</span>
          </div>
          <div className="ml-auto ">
          <i class="fa-brands fa-github m-2"></i>
          <i class="fa-brands fa-linkedin m-3"></i>
          <i class="fa-brands fa-facebook m-3"></i>
          <i class="fa-brands fa-twitter"></i>
        </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
          <h3 className="text-xl font-semibold mb-4">Features</h3>
          <p>Add Your Car</p>
          <p>Know Your Vahan</p>
          <p>Fuel Maintenanece</p>
          <p>CAr Wash</p>
          <p>Car Maintenanece</p>
          <p>Contact</p>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
          <h3 className="text-xl font-semibold mb-4">Explore</h3>
          <p>Resources</p>
          <p>Blog</p>
          <p>Documents</p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
