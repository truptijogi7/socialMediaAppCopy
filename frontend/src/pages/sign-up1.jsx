import React, { useState, useEffect, useRef } from 'react';
import { Navigate, NavigationType, useNavigate, useLocation } from 'react-router-dom';

import { getAuth, createUserWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth';
import { db } from '../../src/lib/firebase';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { collection, onSnapshot } from 'firebase/firestore';
import { verifyToken } from '../services/RegisterService';
import { BsHddNetwork, BsClipboard } from 'react-icons/bs';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import axios from 'axios';

const baseURL = 'http://localhost:8800/api/';

export default function RegisterSteps() {
  // const [confirmData, setConfirmData] = useState();
  const [step, setStep] = useState(1);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
    country: '',
    network: '',
    industry: '',
    amount: '',
    amountCategory: '',
    image: '',
    headline: '',
    profile: '',
    isApproved: false,
  });

  const stepMap = {
    1: <StepOne setUserInfo={setUserInfo} userInfo={userInfo} />,
    2: <StepTwo setUserInfo={setUserInfo} userInfo={userInfo} />,
    3: <StepThree setUserInfo={setUserInfo} userInfo={userInfo} step={step} setStep={setStep} />,
    4: <StepFour userInfo={userInfo} />,
  };

  return (
    <div>
      {stepMap[step]}
      {step > 1 && step <= 3 && (
        <button
          className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-96"
          onClick={() => {
            setStep(step - 1);
          }}
        >
          Prev
        </button>
      )}
      {step < 3 ? (
        <button
          className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-96 "
          onClick={() => {
            setStep(step + 1);
          }}
        >
          Next
        </button>
      ) : null}
    </div>
  );
}

function StepOne(props) {
  // const navigate = useNavigate();
  const network = useRef('');
  const industry = useRef('');
  const amount = useRef('');

  const [id, setId] = useState();

  useEffect(() => {
    if (props.userInfo.name) {
      network.current.value = props.userInfo.network;
    }
    if (props.userInfo.email) {
      industry.current.value = props.userInfo.industry;
    }
    if (props.userInfo.country) {
      amount.current.value = props.userInfo.amount;
    }
  }, []);

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  const { state } = useLocation();
  useEffect(() => {
    if (state) {
      console.log(state);
      if (state.id) {
        setId(state.id);
      }
    }
  },[]);

  // useEffect(() => {
  //   // const token = sessionStorage.getItem('token');
  //   verifyToken()
  //     .then((resp) => console.log(resp))
  //     .catch((err) => navigate('/login'));
  // }, []);
  // FIXME: the userInfo is outside this function
  const uploadDetails = () => {
    fetch(`http://localhost:8800/api/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        network: 'dsklfj',
      }),
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  const networkChange = (event) => {
    props.setUserInfo({
      ...props.userInfo,
      network: event.target.value,
    });
  };
  const industryChange = (event) => {
    props.setUserInfo({
      ...props.userInfo,
      industry: event.target.value,
    });
  };
  const amountCategoryChange = (event) => {
    props.setUserInfo({
      ...props.userInfo,
      amountCategory: event.target.value,
    });
  };
  const amountChange = (event) => {
    props.setUserInfo({
      ...props.userInfo,
      amount: event.target.value,
    });
  };

  return (
    <div className="bg-[url('https://stack.angellist.com/assets/screenshots/cap-table-blur-4c0c6ad6cdea11bf93c3c7843ba0453e78e5e35932d9a91126d526e898b662f8.png')] bg-cover	">
      <div className=" w-full lg:w-4/6 h-screen bg-white flex justify-center items-center">
        <div className=" w-5/6">
          <div>
            <a href="/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png"
                alt=""
                className="w-24"
              />
            </a>
            <nav className="my-5">
              <ol className="flex">
                <li className="flex justify-start items-center text-[#109cf1]">
                  <BsHddNetwork className="mr-2" />
                  <div>Industry Preference</div>
                </li>
                <li className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>{' '}
                  <div className="flex justify-start items-center">
                    <HiOutlinePencilAlt className="mr-2" />
                    <div>Financial Network Posts</div>
                  </div>
                </li>
                <li className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>{' '}
                  <div className="flex justify-start items-center">
                    <BsClipboard className="mr-2" />
                    <div>Your Account</div>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div className="my-5">
            <h2 className="text-4xl font-semibold py-2">Get Started</h2>
            <h6 className="text-[#384c74] text-lg">What's your business?</h6>
          </div>
          <form action="">
            <div className="flex">
              <div className="mb-2 mr-2 w-5/12">
                <label for="network" className=" text-gray-900 dark:text-gray-400">
                  <p className="pb-2">Network</p>
                </label>
                <select
                  id="network"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  onChange={networkChange}
                >
                  <option selected>Choose a category</option>
                  <option value="US">Startups & Funding Needed</option>
                  <option value="CA">Business & Private Investors</option>
                  <option value="FR">Incubators</option>
                  <option value="DE">Accelerators</option>
                </select>
              </div>
              <div className="w-5/12">
                <label for="industry" className=" text-gray-900 dark:text-gray-400">
                  <p className="pb-2"> Industry Preference</p>
                </label>
                <select
                  id="industry"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  onChange={industryChange}
                >
                  <option selected>Choose a category</option>
                  <option value="US">Aerospace</option>
                  <option value="CA">Agriculture</option>
                  <option value="FR">Biotechnology</option>
                  <option value="DE">Business Products</option>
                  <option value="DE">Business Services</option>
                  <option value="DE">Chemicals and Chemical Products</option>
                </select>
              </div>
            </div>
            <div className="flex my-5">
              <div className="mr-2">
                <label for="last_name" className=" text-gray-900 dark:text-gray-300">
                  <p className="pb-2"> Investment Amount</p>
                </label>
                <div className="flex justify-start items-center">
                  <div className="px-1 py-2.5 bg-[#ddd] text-sm border border-[#000]">US$</div>
                  <input
                    type="text"
                    id="number"
                    className="bg-gray-50 border border-gray-300 w-4/12 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block p-2.5 mr-2"
                    placeholder="500"
                    onChange={amountChange}
                  />
                  <select
                    id="amount"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    onChange={amountCategoryChange}
                  >
                    <option selected>Choose a category</option>
                    <option value="US">Hundred</option>
                    <option value="CA">Thousand</option>
                    <option value="FR">Million</option>
                  </select>
                </div>
              </div>
            </div>
            {/* FIXME: the onClick */}
            <button
              className="px-4 py-3 cursor-pointer text-white border bg-[#109cf1] border-[#109cf1] w-full
              rounded 
                hover:bg-transparent hover:text-indigo-600"
              onClick={uploadDetails}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function StepTwo(props) {
  // const navigate = useNavigate();
  const network = useRef('');
  const industry = useRef('');
  const amount = useRef('');

  useEffect(() => {
    if (props.userInfo.network) {
      network.current.value = props.userInfo.network;
    }
    if (props.userInfo.industry) {
      industry.current.value = props.userInfo.industry;
    }
    if (props.userInfo.amount) {
      amount.current.value = props.userInfo.amount;
    }
  }, []);
  return (
    <div className="bg-[url('https://stack.angellist.com/assets/screenshots/cap-table-blur-4c0c6ad6cdea11bf93c3c7843ba0453e78e5e35932d9a91126d526e898b662f8.png')] bg-cover	">
      <div className=" w-full lg:w-4/6 h-screen bg-white flex justify-center items-center">
        <div className=" w-5/6">
          <div>
            <a href="/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png"
                alt=""
                className="w-24"
              />
            </a>
            <nav className="my-5">
              <ol className="flex">
                <li className="flex justify-start items-center ">
                  <BsHddNetwork className="mr-2" />
                  <div>Industry Preference</div>
                </li>
                <li className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>{' '}
                  <div className="flex justify-start items-center text-[#109cf1]">
                    <HiOutlinePencilAlt className="mr-2" />
                    <div>Financial Network Posts</div>
                  </div>
                </li>
                <li className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>{' '}
                  <div className="flex justify-start items-center">
                    <BsClipboard className="mr-2" />
                    <div>Your Account</div>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div className="my-5">
            <h2 className="text-4xl font-semibold py-2">Get Started</h2>
            <h6 className="text-[#384c74] text-lg">What's your business?</h6>
          </div>
          <form action="">
            <div className="w-full">
              <label className="text-gray-900 " htmlFor="file_input">
                Upload Avatar
              </label>
              <input
                className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input"
                type="file"
              />
              <div className="py-3">
                <label htmlFor="first_name" className="text-gray-900">
                  Ad Headline
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="John"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="text-gray-900">
                  Profile Ad
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Your message..."
                  defaultValue={''}
                />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <button
                className="px-4 py-3 cursor-pointer text-white border bg-[#109cf1] border-[#109cf1] w-full mr-2
              rounded 
                hover:bg-transparent hover:text-indigo-600 "
              >
                Prev
              </button>
              <button
                className="px-4 py-3 cursor-pointer text-white border bg-[#109cf1] border-[#109cf1] w-full
              rounded 
                hover:bg-transparent hover:text-indigo-600 "
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function StepThree(props) {
  const { name, email, password } = props.userInfo;

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      console.log(userCredential, props.userInfo);

      const user = userCredential.user;

      updateProfile(auth.currentUser, { displayName: name });
      const formDataCopy = { ...props.userInfo };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();
      await setDoc(doc(db, 'user', user.uid), formDataCopy);
      // navigate('/');
      // alert('Signup Success');
      props.setStep(props.step + 1);
    } catch (error) {
      console.log(error);
    }
  };

  const image = useRef('');
  const headline = useRef('');
  const profile = useRef('');

  useEffect(() => {
    if (props.userInfo.image) {
      image.current.value = props.userInfo.image;
    }
    if (props.userInfo.headline) {
      headline.current.value = props.userInfo.headline;
    }
    if (props.userInfo.profile) {
      profile.current.value = props.userInfo.profile;
    }
  }, []);

  return (
    <div className="bg-[url('https://stack.angellist.com/assets/screenshots/cap-table-blur-4c0c6ad6cdea11bf93c3c7843ba0453e78e5e35932d9a91126d526e898b662f8.png')] bg-cover	">
      <div className=" w-full lg:w-4/6 h-screen bg-white flex justify-center items-center">
        <div className=" w-5/6">
          <div>
            <a href="/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png"
                alt=""
                className="w-24"
              />
            </a>
            <nav className="my-5">
              <ol className="flex">
                <li className="flex justify-start items-center ">
                  <BsHddNetwork className="mr-2" />
                  <div>Industry Preference</div>
                </li>
                <li className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>{' '}
                  <div className="flex justify-start items-center">
                    <HiOutlinePencilAlt className="mr-2" />
                    <div className="">Financial Network Posts</div>
                  </div>
                </li>
                <li className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>{' '}
                  <div className="flex justify-start items-center text-[#109cf1]">
                    <BsClipboard className="mr-2" />
                    <div>Your Account</div>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div className="my-5">
            <h2 className="text-4xl font-semibold py-2">Get Started</h2>
            <h6 className="text-[#384c74] text-lg">What's your business?</h6>
          </div>
          <form action="">
            <div className="w-full">
              <div className="py-3">
                <label htmlFor="first_name" className="text-gray-900">
                  Full Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="John"
                  required
                />
              </div>
              <div className="py-3">
                <label htmlFor="first_name" className="text-gray-900">
                  Email
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="John"
                  required
                />
              </div>

              <div className="py-3">
                <label htmlFor="first_name" className="text-gray-900">
                  Your Phone Number (Verification Required)
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="John"
                  required
                />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <button
                className="px-4 py-3 cursor-pointer text-white border bg-[#109cf1] border-[#109cf1] w-full mr-2
            rounded 
              hover:bg-transparent hover:text-indigo-600 "
              >
                Prev
              </button>
              <button
                className="px-4 py-3 cursor-pointer text-white border bg-[#109cf1] border-[#109cf1] w-full
            rounded 
              hover:bg-transparent hover:text-indigo-600 "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function StepFour(props) {
  console.log(props.userInfo.name);
  const [user, setUser] = useState([]);
  const auth = getAuth();

  useEffect(() => {
    // fetchUsers();
    onSnapshot(collection(db, 'user'), (snapshot) =>
      setUser(
        snapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }))
          .filter((u) => u.id === auth.currentUser.uid)[0]
      )
    );
  }, []);
  console.log('Logged:', user.isApproved);
  const navigate = useNavigate();
  const handleConfirm = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        alert('User signed out ');
        navigate('/signin', { state: { name: user.name } });
      })

      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      <h1 className="flex justify-center text-3xl">Step 4</h1>
      <div className="flex justify-center">
        <ul className="bg-white rounded-lg w-96 text-gray-900">
          <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
            <strong>Name: </strong>
            {user.name}
          </li>
          <li className="px-6 py-2 border-b border-gray-200 w-full">
            <strong>Email: </strong>
            {user.email}
          </li>

          <li className="px-6 py-2 border-b border-gray-200 w-full">
            <strong>Country: </strong>
            {user.country}
          </li>

          <li className="px-6 py-2 border-b border-gray-200 w-full">
            <strong>Password: </strong>
            {user.password}
          </li>

          <li className="px-6 py-2 border-b border-gray-200 w-full">
            <strong>Network: </strong>
            {user.network}
          </li>

          <li className="px-6 py-2 border-b border-gray-200 w-full">
            <strong>Industry: </strong>
            {user.industry}
          </li>

          <li className="px-6 py-2 border-b border-gray-200 w-full">
            <strong>Amount: </strong>
            {user.amount}
          </li>
          <li className="px-6 py-2 border-b border-gray-200 w-full">
            <strong>Image: </strong>
            {user.image}
          </li>
          <li className="px-6 py-2 border-b border-gray-200 w-full">
            <strong>Headline: </strong>
            {user.headline}
          </li>
          <li className="px-6 py-2 border-b border-gray-200 w-full">
            <strong>Profile: </strong>
            {user.profile}
          </li>
          <li className="px-6 py-2 w-full rounded-b-lg">
            <strong>Profile: </strong>
            {user.profile}
          </li>
        </ul>
      </div>
      <div className="flex justify-center">
        <button onClick={handleConfirm}>Confirm</button>
      </div>
    </>
  );
}
