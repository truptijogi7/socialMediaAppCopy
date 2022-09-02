import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import showPwdImg from '../svg/show-password.svg';
import hidePwdImg from '../svg/hide-password.svg';

import { getAuth, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { db } from '../lib/firebase';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import * as ROUTES from '../constants/routes';
import Footer from '../components/Layout/footer';

const Login1 = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const isInvalid = password === '' || email === '';

  //loginHandler
  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      if (userCredential.user) {
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <div className=" m-auto w-screen h-[180px] z-10  bg-[url('https://i.imgur.com/6ZyzH0D.png')] drop-shadow-lg relative">
          <h1 className="text-white text-4xl font-semibold absolute top-20 left-40">Login</h1>
        </div>
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
          <div className="flex flex-col w-4/5 mx-auto">
            <div className="flex flex-col items-center bg-white p-4 px-16 rounded border border-gray-primary mb-4">
              <h1 className="flex justify-left font-medium w-full text-2xl py-6">
                Sign in to your account
              </h1>

              <button
                className="flex justify-center items-center  text-black border bg-transparent border-[black]
              rounded-sm w-full h-10 mb-5"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                  alt=""
                  className="w-5"
                />{' '}
                <span className="pl-3 text-sm">Log in with Google</span>{' '}
              </button>
              <p className="mb-5 text-[#8f8f8f]">----- or Login with Email -----</p>
              <form onSubmit={loginHandler} method="POST" className="w-full">
                <input
                  type="email"
                  value={email}
                  id="email"
                  onChange={onChange}
                  aria-label="Enter your email address"
                  placeholder="Email Address"
                  className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-4"
                />
                <div className="relative">
                  <input
                    aria-label="Enter your password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    id="password"
                    onChange={onChange}
                    placeholder="Password"
                    className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded "
                  />
                  <img
                    className="absolute cursor-pointer w-5 right-2 top-3"
                    title={showPassword ? 'Hide password' : 'Show password'}
                    src={showPassword ? hidePwdImg : showPwdImg}
                    onClick={() => setShowPassword((prevState) => !prevState)}
                    alt="img"
                  />
                </div>
                <p className="my-4 text-sm flex justify-end underline">Forgot Password?</p>
                <button
                  disabled={isInvalid}
                  type="submit"
                  className={`bg-blue-medium mb-3 text-white w-full rounded h-8 font-bold ${
                    isInvalid && `opacity-50`
                  }`}
                >
                  Login
                </button>
              </form>
            </div>
            <div className="flex justify-center items-center flex-col w-full bg-white p-4 border rounded border-gray-primary">
              <p className="text-sm">
                Not registered?
                {` `}
                <Link to={ROUTES.LOGIN} className="underline">
                  Create Account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login1;

// bg-[url('https://i.imgur.com/6ZyzH0D.png')] bg-cover bg-center
