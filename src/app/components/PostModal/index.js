'use client'
import React, { useState } from 'react';
import { FaPhotoVideo, FaRegSmile } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg mx-4 sm:mx-auto">
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Create Post</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
            <AiOutlineClose size={24} />
          </button>
        </div>
        <div className="p-4">
          <div className="flex items-center mb-4">
            <img
              src="/male-avatar-placeholder.webp"
              alt="Avatar"
              className="w-12 h-12 rounded-full object-cover"
            />
            <span className="ml-3 text-lg font-semibold">{localStorage.getItem('name')}</span>
          </div>
          <textarea
            placeholder="What do you want to talk about?"
            className="w-full h-32 border border-gray-300 rounded-lg p-2 resize-none mb-4"
          />
          <div className="flex gap-4 mb-4">
            <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
              <FaPhotoVideo size={20} />
              <span>Photo</span>
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
              <FaRegSmile size={20} />
              <span>Emojis</span>
            </button>
          </div>
          <button
            onClick={onClose}
            className="w-full py-2 bg-red-600 text-white rounded-lg hover:bg-blue-700"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
