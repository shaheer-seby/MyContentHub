import React from 'react';

const Trending = () => {
  return (
    <div className="w-full mx-auto max-w-[350px] h-[120px] bg-white flex flex-col justify-center rounded-lg shadow-md p-5 my-3">
      <h1 className="text-sm font-bold text-gray-800 mb-3">Trending</h1>
      <p className="text-gray-500 text-xs">No trends found</p>
    </div>
  );
};

export default Trending;
