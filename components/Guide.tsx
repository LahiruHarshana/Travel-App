import React from 'react';
import Image from 'next/image';

const Guide = () => {
  return (
    <section className='relative px-4 py-20 md:px-8 md:py-24 lg:px-16 lg:py-32 xl:px-20 xl:py-40 bg-gray-100'>
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">Our Services</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col items-center bg-white rounded-lg p-6">
          <Image src="/service-1.jpg" alt='service_1' width={300} height={300} />
          <h2 className="text-xl font-bold mt-4">Tailored Tour Packages</h2>
          <p className="text-lg mt-2 text-gray-700">Tailored tour packages offering exclusive guided excursions to Sri Lanka's top destinations, including Colombo, Kandy, Sigiriya, and Galle.</p>
          <button className="bg-black text-white px-4 py-2 rounded-lg mt-4 hover:bg-gray-800 transition-colors" style={{position:'relative',bottom:'-15px'}}>Book Now</button>
        </div>

        <div className="flex flex-col items-center bg-white rounded-lg p-6">
          <Image src="/service-2.jpg" alt='service_2' width={300} height={300} />
          <h2 className="text-xl font-bold mt-4">Accommodation Booking</h2>
          <p className="text-lg mt-2 text-gray-700">Accommodation booking services, ranging from luxury beach resorts to eco-friendly boutique hotels and charming guesthouses.</p>
          <button className="bg-black text-white px-4 py-2 rounded-lg mt-4 hover:bg-gray-800 transition-colors">Book Now</button>
        </div>

        <div className="flex flex-col items-center bg-white rounded-lg p-6">
          <Image src="/service-3.jpg" alt='service_3' width={300} height={300} />
          <h2 className="text-xl font-bold mt-4">Transportation Assistance</h2>
          <p className="text-lg mt-2 text-gray-700">Transportation assistance, including airport transfers, private car rentals, and scenic train journeys across the island.</p>
          <button className="bg-black text-white px-4 py-2 rounded-lg mt-4 hover:bg-gray-800 transition-colors">Book Now</button>
        </div>
      </div>
    </section>
  );
};

export default Guide;
