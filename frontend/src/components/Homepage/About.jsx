import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full my-10">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-semibold py-10">
            Over $1Billion Invested in Startups Through FundsGo
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
          <div className=" py-8  ">
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-20  text-[#6f42c1]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-xl font-bold text-indigo-600">Instant Chat Messenger</p>
            <p className="text-gray-400 mt-2 mb-4">
              Pitch Investors Live in Real-Time. Upload your Documents, Videos, Pics, & more!
            </p>
            <button className="text-gray-400 mt-2 border py-2 px-2 rounded ">
              Got Questions? (206) 337-0277
            </button>
          </div>
          <div className=" py-8  ">
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-20  text-[#6f42c1]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
              </svg>
            </div>
            <p className="text-xl font-bold text-indigo-600">Find Investment Capital</p>
            <p className="text-gray-400 mt-2 mb-4">
              Connect with Funding Partners. Need Private Investors, Angels, VC's, Equity Funding?
            </p>
            <button className="text-gray-400 mt-2 border py-2 px-2 rounded ">
              Got Questions? (206) 337-0277
            </button>
          </div>
          <div className=" py-8  ">
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-20  text-[#6f42c1]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-xl font-bold text-indigo-600">Finance Social Network</p>
            <p className="text-gray-400 mt-2 mb-4">
              We have quality funding resources and investors looking for their next opportunity!
            </p>
            <button className="text-gray-400 mt-2 border py-2 px-2 rounded ">
              Got Questions? (206) 337-0277
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
