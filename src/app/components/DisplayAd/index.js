import React from 'react';

const DisplayAd = () => {
  return (
    <div
      className="relative mx-auto w-full max-w-[350px] h-[120px] bg-cover bg-center flex items-center justify-center text-white font-semibold rounded-lg overflow-hidden mt-3"
      style={{
        backgroundImage: "url('/ad-bg.webp')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-xs rounded-lg"></div>
      <span className="relative">Advertise with Local Host</span>
    </div>
  );
};

export default DisplayAd;
