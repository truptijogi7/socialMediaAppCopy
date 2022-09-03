import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import showPwdImg from '../svg/show-password.svg';
import hidePwdImg from '../svg/hide-password.svg';

import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { db } from '../lib/firebase';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import * as ROUTES from '../constants/routes';
import Footer from '../components/Layout/footer';
import { createUser } from '../services/RegisterService';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
  });
  const { name, email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const isInvalid = password === '' || email === '';

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      // const auth = getAuth();
      // const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // const user = userCredential.user;
      // updateProfile(auth.currentUser, { displayName: name });
      // const formDataCopy = { ...formData };
      // delete formDataCopy.password;
      // formDataCopy.timestamp = serverTimestamp();
      // await setDoc(doc(db, 'users', user.uid), formDataCopy);
      // navigate('/register-steps');
      // alert('Signup Success');
      const data = { ...formData };
      data.username = data.name;
      let registeredUser = await createUser(data);
      // sessionStorage.setItem('token', registeredUser.data.token);
      // sessionStorage.setItem('_id', registeredUser.data._id);
      alert('Signup Success');
      navigate('/signup1', { state: { id: registeredUser.data._id } });      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <div className=" m-auto w-screen h-[180px] z-10  bg-[url('https://i.imgur.com/6ZyzH0D.png')] drop-shadow-lg relative">
          <h1 className="text-white text-4xl font-semibold absolute top-20 left-40">
            Create Account
          </h1>
        </div>
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
          <div className="flex flex-col w-4/5 mx-auto">
            <div className="flex flex-col items-center bg-white p-4 px-16 rounded border border-gray-primary mb-4">
              <h1 className="flex justify-left font-medium w-full text-2xl py-6">Register</h1>

              <button
                className="flex justify-center items-center  text-black border bg-transparent border-[black]
            rounded-sm w-full h-10 mb-5"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                  alt=""
                  className="w-5"
                />{' '}
                <span className="pl-3 text-sm">Register with Google</span>{' '}
              </button>
              <p className="mb-5 text-[#8f8f8f]">----- or Register with Email -----</p>
              <form onSubmit={onSubmitHandler} method="POST" className="w-full">
                <input
                  type="text"
                  value={name}
                  id="name"
                  onChange={onChange}
                  aria-label="Enter your full name"
                  placeholder="Full Name"
                  className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-4"
                />

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
                  Register
                </button>
              </form>
            </div>
            <div className="flex justify-center items-center flex-col w-full bg-white p-4 border rounded border-gray-primary">
              <p className="text-sm">
                Already have an account?
                {` `}
                <Link to={ROUTES.LOGIN} className="underline">
                  Log in
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

export default SignUp;
