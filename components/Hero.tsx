import React from 'react';
import Button from './Button';

const Hero = () => {
  return (
    <section className='relative flex flex-col justify-center items-center gap-20 py-10 pb-32 md:gap-20 lg:py-20 xl:flex-row' style={{minHeight: '100vh'}}>
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img src="/pattern-bg.jpg" alt="Hero Map" className="object-cover w-full h-full" />
      </div>
      <div className="text-center z-10 flex flex-col justify-center items-center" style={{width:'70vw'}}>
        <h1 className="text-white text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4" style={{marginBottom: '40px'}}>Experience the Magic of Sri Lanka</h1>
        <p style={{marginBottom:'30px'}} className="text-white">Discover the enchanting allure of Sri Lanka, where ancient wonders meet breathtaking landscapes. Explore vibrant markets, relax on palm-fringed beaches, and wander through lush tea plantations. With rich history, warm hospitality, and endless adventures, Sri Lanka awaits your discovery.</p>
        <div className="mt-4">
          <Button
            type='button'
            title='Explore Sri Lanka'
            variant='btn_dark_green'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
