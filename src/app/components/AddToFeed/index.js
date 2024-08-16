import React from 'react';

const profiles = [
  { name: 'Yasir', image: '/male-avatar-placeholder.webp' },
  { name: 'Shaheer Ahmad', image: '/male-avatar-placeholder.webp' },
  { name: 'Demo', image: '/male-avatar-placeholder.webp' },
  { name: 'Sajidhgn', image: '/male-avatar-placeholder.webp' },
  { name: 'Bilal Ahmed', image: '/male-avatar-placeholder.webp' },
  { name: 'Sajid Ali', image: '/male-avatar-placeholder.webp' },
];

const AddToFeed = () => {
  return (
    <div className="w-full mx-auto max-w-[350px] p-4 border border-gray-300 shadow-lg rounded-lg mt-5">
      <h2 className="text-md font-bold mb-4">Add to your feed</h2>
      <div className="space-y-4">
        {profiles.map((profile, index) => (
          <div key={index} className="flex flex-col lg:flex-row items-center justify-between p-3">
            <div className="flex items-center gap-3 w-full text-sm font-bold">
              <img
                src={profile.image}
                alt={profile.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <span className="text-gray-800 font-extrabold truncate w-[150px]">{profile.name}</span>
            </div>
            <button className="rounded-md border border-gray-300 px-4 py-1 text-sm hover:bg-gray-100 hover:text-red-500">
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddToFeed;
