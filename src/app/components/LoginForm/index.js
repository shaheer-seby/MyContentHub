'use client'
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation';
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function LoginForm() {
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [nameError, setNameError] = useState('');

  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    let isValid = true;
    setEmailError('');
    setPasswordError('');
    setNameError('');

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Email is invalid');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    }

    if (isSignup && !name) {
      setNameError('Name is required');
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const company_id = '1';
        const url = isSignup ? process.env.NEXT_PUBLIC_REGISTER_API_URL : process.env.NEXT_PUBLIC_LOGIN_API_URL;
        const data = isSignup ? { name, email, password, company_id } : { email, password, company_id };

        const response = await axios.post(url, data, {
          headers: {
            'Content-Type': 'application/json',
            'os': 'chrome',
            'device': 'Desktop',
          },
        });

        if (response.data.status) {
          const { name, email: userEmail, _id: id } = response.data.data.user;
          const { token } = response.data.data;

          localStorage.setItem('name', name);
          localStorage.setItem('email', userEmail);
          localStorage.setItem('id', id);
          localStorage.setItem('token', token);

          toast.success(response.data.message);

          router.push('/pages/Feed');
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error('An error occurred');
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <ToastContainer />
      <h2 className="my-4 font-bold text-2xl">{isSignup ? 'Create an account' : 'Sign in to continue'}</h2>
      <p className="mb-4 text-sm">
        {isSignup ? (
          <>
            Already have an account? <a href="#" onClick={() => setIsSignup(false)} className="text-red-600 no-underline">Sign in</a>
          </>
        ) : (
          <>
            New user? <a href="#" onClick={() => setIsSignup(true)} className="text-red-600 no-underline">Create an account</a>
          </>
        )}
      </p>

      <form className="w-full" onSubmit={handleSubmit}>
        {isSignup && (
          <div className="mb-4">
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full p-2 border ${nameError ? 'border-red-500' : 'border-gray-300'} rounded`}
            />
            {nameError && <p className="text-red-500 text-xs mt-1">{nameError}</p>}
          </div>
        )}

        <div className="mb-4">
          <label className="block text-sm mb-1">Email Address</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full p-2 border ${emailError ? 'border-red-500' : 'border-gray-300'} rounded`}
          />
          {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full p-2 border ${passwordError ? 'border-red-500' : 'border-gray-300'} rounded`}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              {showPassword ? <AiFillEyeInvisible className="text-gray-600" /> : <AiFillEye className="text-gray-600" />}
            </button>
            {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
          </div>
        </div>

        {!isSignup && (
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                className="mr-2"
              />
              <label htmlFor="rememberMe" className="text-sm">Remember me</label>
            </div>
            <a href="/" className="text-red-600 text-sm">Forgot Password?</a>
          </div>
        )}

        <button className="w-full py-2 bg-red-600 text-white rounded" type="submit">
          {isSignup ? 'Sign up' : 'Sign in'}
        </button>

        {!isSignup && (
          <>
            <div className="text-center my-3">
              <span className="text-gray-500">OR</span>
            </div>

            <div className="flex flex-col">
              <button className="w-full py-2 border border-gray-300 rounded mb-2 flex items-center justify-center text-gray-700">
                <FaGoogle className="mr-2" /> Sign in with Google
              </button>
              <button className="w-full py-2 border border-gray-300 rounded flex items-center justify-center text-gray-700">
                <FaFacebook className="mr-2" /> Sign in with Facebook
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
