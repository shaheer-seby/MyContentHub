'use client'
import React, { useState, useEffect } from 'react';
import { AiOutlineComment, AiOutlineLike, AiOutlineRedo, AiOutlineShareAlt } from 'react-icons/ai';
import { FaCircle, FaGlobeEurope, FaEllipsisH } from 'react-icons/fa';

const Post = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClickOutside = (event) => {
    if (!event.target.closest('.dropdown-menu') && !event.target.closest('.dropdown-toggle')) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="w-full mx-auto max-w-[700px] bg-white border border-gray-200 rounded-lg shadow-md mb-2 overflow-hidden mt-5">
      
      <div className="flex items-center p-4">
        <img
          src="/male-avatar-placeholder.webp"
          alt="Profile"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="ml-3">
          <h2 className="font-semibold">{localStorage.getItem('name')}</h2>
          <p className="text-gray-500 text-sm">Public</p>

          <div className="flex items-center gap-1">
            <p className="text-gray-500 text-sm">12th August, 2024</p>
            <FaCircle size={5} />
            <FaGlobeEurope />
          </div>
        </div>

        <div className="ml-auto relative">
          <div
            className="dropdown-toggle flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 cursor-pointer"
            onClick={toggleDropdown}
          >
            <FaEllipsisH size={12} className="text-gray-600" />
          </div>
          {isDropdownOpen && (
            <ul className="dropdown-menu absolute right-0 mt-2 w-48 bg-white text-black border border-gray-300 rounded-lg shadow-lg">
              <li className="px-4 py-2 hover:bg-gray-100">
                <button className="w-full text-left">Save as Bookmark</button>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <button className="w-full text-left">Copy link to post</button>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <button className="w-full text-left">Unfollow</button>
              </li>
            </ul>
          )}
        </div>
      </div>

      <div className="px-4 py-2">
        <p className="text-gray-800">
          Sample Text for a Post
        </p>
      </div>

      <div className="flex items-center justify-around p-4 border-t border-gray-200 mt-5">
        <button className="flex items-center gap-1 text-gray-600 hover:text-blue-600">
          <AiOutlineLike size={20} />
          <span>Like</span>
        </button>
        <button className="flex items-center gap-1 text-gray-600 hover:text-blue-600">
          <AiOutlineComment size={20} />
          <span>Comment</span>
        </button>
        <button className="flex items-center gap-1 text-gray-600 hover:text-blue-600">
          <AiOutlineRedo size={20} />
          <span>Repost</span>
        </button>
        <button className="flex items-center gap-1 text-gray-600 hover:text-blue-600">
          <AiOutlineShareAlt size={20} />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

export default Post;
