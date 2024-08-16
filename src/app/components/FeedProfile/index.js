'use client'
import React from 'react';
import { FaBookmark } from 'react-icons/fa';

const ProfileFeed = () => {
  return (
    <div className="relative mx-auto w-full max-w-[350px] h-[331px] bg-white text-black shadow-lg rounded-lg overflow-hidden mt-2">
      
      <div className="w-full h-[100px]">
        <img src="/feedbgimg.webp" alt="Profile Banner" className="w-full h-full object-cover" />
      </div>
      
      <div className="absolute top-[60px] left-1/2 transform -translate-x-1/2 w-[100px] h-[100px] bg-gray-600 rounded-full border-4 border-white z-10">
        <img src="/male-avatar-placeholder.webp" alt="Profile Avatar" className="w-full h-full object-cover rounded-full" />
      </div>
      
      <div className="absolute top-[160px] left-1/2 transform -translate-x-1/2 text-center">
        <h2 className="text-lg font-bold">{localStorage.getItem('name')}</h2>
      </div>
      
      <div className="absolute bottom-0 w-full px-5 py-4">
        <hr className="my-2 border-gray-300" />
        <div className="flex flex-col gap-3 text-sm text-gray-600">
          <div className='flex justify-between'>
            <p>Following</p>
            <p>0</p>
          </div>

          <div className='flex justify-between'>
            <p>Followers</p>
            <p>0</p>
          </div>
        </div>
        <hr className="my-2 border-gray-300" />
        <div className="flex items-center gap-1 text-sm py-1">
          <FaBookmark className="text-gray-500" />
          <a href="#" className="text-gray-500 hover:underline">Bookmark</a>
        </div>
      </div>
    </div>
  );
};

export default ProfileFeed;
