import React from 'react';
import { FaUserCircle, FaPhotoVideo, FaPen } from 'react-icons/fa';
import { AiOutlineVideoCamera } from 'react-icons/ai';

const ContentBox = () => {
  return (
    <div className="w-[576px] h-[163px] bg-white shadow-md rounded-lg p-4 flex items-center space-x-4 mt-5" >
      
      <div className="flex-shrink-0">
        <FaUserCircle className="text-gray-600" size={48} />
      </div>
      
      <div className="flex-1">
        <textarea
          placeholder="Write something..."
          className="w-full h-[100px] border border-gray-300 rounded-lg p-2 resize-none"
        />
      </div>
      
      <div className="flex space-x-4">
        <div className="flex items-center space-x-1 text-gray-600">
          <FaPhotoVideo size={24} />
          <span>Photo</span>
        </div>
        <div className="flex items-center space-x-1 text-gray-600">
          <AiOutlineVideoCamera size={24} />
          <span>Video</span>
        </div>
        <div className="flex items-center space-x-1 text-gray-600">
          <FaPen size={24} />
          <span>Article</span>
        </div>
      </div>
    </div>
  );
};

export default ContentBox;
