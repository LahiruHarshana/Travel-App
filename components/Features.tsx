import React from 'react';

const Features = () => {
  return (
    <section className='relative flex flex-col justify-center items-center py-10 pb-32 md:gap-20 lg:py-20' style={{minHeight: '100vh', backgroundImage: `url('/pricing.webp')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800'>Packages</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center'>
        <div className='flex-1' style={{width:'300px'}}>
          <div className='flex flex-col items-center justify-center px-8 py-6 bg-white bg-opacity-70 rounded-lg shadow-lg'>
            <h2 className="text-2xl font-bold mb-2">Basic</h2>
            <p className="text-lg mb-2">$10</p>
            <ul className="list-disc mb-4">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <p className="text-lg mb-4">Our basic package offers a selection of essential features to get you started on your Sri Lanka adventure.</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-green-600 transition-colors">Book Now</button>
          </div>
        </div>
        <div className='flex-1' style={{width:'300px'}}>
          <div className='flex flex-col items-center justify-center px-8 py-6 bg-white bg-opacity-70 rounded-lg shadow-lg'>
            <h2 className="text-2xl font-bold mb-2">Standard</h2>
            <p className="text-lg mb-2">$15</p>
            <ul className="list-disc mb-4">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <p className="text-lg mb-4">Our standard package includes additional features for a more comprehensive Sri Lanka experience. nice it</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-green-600 transition-colors">Book Now</button>
          </div>
        </div>
        <div className='flex-1' style={{width:'300px'}}>
          <div className='flex flex-col items-center justify-center px-8 py-6 bg-white bg-opacity-70 rounded-lg shadow-lg'>
            <h2 className="text-2xl font-bold mb-2">Premium</h2>
            <p className="text-lg mb-2">$20</p>
            <ul className="list-disc mb-4">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <p className="text-lg mb-4">Our premium package offers the ultimate Sri Lanka experience with exclusive features and added luxury.</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-green-600 transition-colors">Book Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
