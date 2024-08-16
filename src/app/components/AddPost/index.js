'use client'
import React, { useState } from 'react';
import { FaUserCircle, FaNewspaper } from 'react-icons/fa';
import { AiOutlinePicture, AiOutlineVideoCamera } from 'react-icons/ai';
import PostModal from './../PostModal';

const AddPost = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-white mx-auto max-w-[700px] shadow-md rounded-lg p-4 grid grid-cols-12 mt-2">
      
      <div className="col-span-1">
        <img
          src="/male-avatar-placeholder.webp"
          alt="Avatar"
          className="w-12 h-12 rounded-full object-cover"
        />
      </div>
      
      <div className="col-span-11 ms-3">
        <textarea
          placeholder="What do you want to talk about?"
          className="w-full h-[42px] border border-gray-300 rounded-lg p-2 resize-none mb-2 bg-gray-100 text-gray-600"
          style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
          onClick={openModal}
        />
        
        <div className="flex items-center gap-3">
          <button className="flex flex-wrap text-xs font-semibold items-center gap-2 text-gray-600 bg-white border border-gray-300 hover:text-red-500 hover:bg-gray-100 rounded-md py-2 px-4 md:py-3 md:px-6 lg:py-2 lg:px-8 cursor-pointer">
            <AiOutlinePicture size={20} color="red"/>
            <span>Photo</span>
          </button>

          <button className="flex flex-wrap text-xs font-semibold items-center gap-2 text-gray-600 bg-white border border-gray-300 hover:text-green-500 hover:bg-gray-100 rounded-md py-2 px-4 md:py-3 md:px-6 lg:py-2 lg:px-8 cursor-pointer">
            <AiOutlineVideoCamera size={20} color="green" />
            <span>Video</span>
          </button>

          <button className="flex flex-wrap text-xs font-semibold items-center gap-2 text-gray-600 bg-white border border-gray-300 hover:text-red-500 hover:bg-gray-100 rounded-md py-2 px-4 md:py-3 md:px-6 lg:py-2 lg:px-8 cursor-pointer">
            <FaNewspaper size={20} color="#FF474C"/>
            <span>Write Article</span>
          </button>
        </div>
      </div>

      <PostModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default AddPost;
