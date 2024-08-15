import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '@/app/components/Navbar';
import FeedProfile from '@/app/components/FeedProfile';
import AddPost from './../../components/AddPost';

const Page = () => {
  return (
    <>
      <Navbar />
      <div className="p-4">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-3">
            <FeedProfile />
          </div>
          <div className="col-span-6">
            <AddPost />
            <FeedProfile />
            <FeedProfile />
            <FeedProfile />
            <FeedProfile />

          </div>
          <div className="col-span-3">
            <FeedProfile />
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Page;


