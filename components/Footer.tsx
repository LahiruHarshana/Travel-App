import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center">
        <div className="text-center mb-6 md:mb-0">
          <img src="/logo.png" alt="Your Logo" className="w-16 h-16 mb-4 mx-auto" />
          <h2 className="text-2xl font-bold">Get in Touch</h2>
          <p className="mt-4">Developed by: Lahiru Harshana</p>
          <p>Phone: 0782902200</p>
          <p>Email: lharshana2002@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
