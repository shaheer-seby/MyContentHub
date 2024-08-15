import React from "react";
import LoginImgIcon from "./icons/LoginImgIcon";
import LoginForm from "./components/LoginForm";

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="hidden lg:flex lg:w-1/2 bg-red-600 items-center justify-center">
        <LoginImgIcon />
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div className="w-[453px] h-auto">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
