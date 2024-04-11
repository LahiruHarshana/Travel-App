import React from 'react';

const Guide = () => {
  return (
    <section className='relative flex flex-col justify-center gap-10 px-4 py-20 md:px-8 md:py-24 lg:px-16 lg:py-32 xl:flex-col xl:gap-20'>
      <div className="flex justify-center" id='Header'>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">Our Services</h1>
      </div>

      <div className="flex flex-col items-center" id='content-service'>
        <div id='service-1' className="text-center mb-6">
          <p className="text-lg md:text-xl lg:text-lg xl:text-xl">Tailored tour packages offering guided excursions to Sri Lanka's top destinations, including Colombo, Kandy, Sigiriya, and Galle.</p>
        </div>
        <div id='service-2' className="text-center mb-6">
          <p className="text-lg md:text-xl lg:text-lg xl:text-xl">Accommodation booking services, ranging from luxury beach resorts to eco-friendly boutique hotels and charming guesthouses.</p>
        </div>
        <div id='service-3' className="text-center">
          <p className="text-lg md:text-xl lg:text-lg xl:text-xl">Transportation assistance, including airport transfers, private car rentals, and scenic train journeys across the island.</p>
        </div>
      </div>
    </section>
  );
};

export default Guide;
