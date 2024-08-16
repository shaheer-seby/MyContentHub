import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '@/app/components/Navbar';
import FeedProfile from '@/app/components/FeedProfile';
import AddPost from './../../components/AddPost';
import DisplayAd from '@/app/components/DisplayAd';
import Post from '@/app/components/Post';
import Trending from '@/app/components/Trending';
import AddToFeed from '@/app/components/AddToFeed';

const Page = () => {
  return (
<>
<ToastContainer />
      <Navbar />
      <div className='max-w-[1600px] mx-auto py-3 px-10'>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="hidden lg:block lg:col-span-3">
            <FeedProfile />
            <Trending />
            <DisplayAd />
          </div>
          <div className="col-span-1 lg:col-span-6">
            <AddPost />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
          <div className="hidden lg:block lg:col-span-3">
            <DisplayAd />
            <AddToFeed />
          </div>
        </div>
      </div>
      <ToastContainer />

    </>
  );
};

export default Page;
