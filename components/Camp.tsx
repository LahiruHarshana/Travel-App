import React from 'react';
import Button from './Button';
import Image from 'next/image';

const Camp = () => {
  return (
    <section className='relative flex flex-col justify-center gap-10 px-4 py-20 md:px-8 md:py-24 lg:px-16 lg:py-32 xl:flex-row xl:gap-20'>
      <div className="flex-1 flex flex-col justify-center" id='text'>
        <div className="max-w-lg mx-auto">
          <h1 className='text-black text-3xl md:text-4xl lg:text-5xl font-bold mb-6'>About Sri Lanka</h1>
          <p className="text-gray-700 text-lg md:text-xl mb-6">Learn about the history and culture of Sri Lanka, spanning thousands of years and shaped by various civilizations.</p>
          <p className="text-gray-700 text-lg md:text-xl mb-6">Explore the geography and climate of Sri Lanka, featuring tropical forests, misty mountains, and idyllic coastlines.</p>
          <p className="text-gray-700 text-lg md:text-xl mb-8">Discover the unique wildlife of Sri Lanka, including elephants, leopards, and rare bird species found in its national parks and reserves.</p>
          <Button type='button' title='Learn More' variant='btn_dark_green' />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center" id='img'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-lg mx-auto">
          <div>
            <Image src="/about_1.jpg" alt='logo' width={500} height={300} className="rounded-lg" />
          </div>
          <div>
            <Image src="/about_2.jpg" alt='logo' width={500} height={300} style={{position:'relative',bottom:'60px'}} className="rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Camp;
