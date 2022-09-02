import React from 'react';

import {
  AiOutlineSetting,
  AiFillCaretDown,
  AiOutlineSearch,
  AiTwotoneBulb,
  AiOutlineClose,
  AiOutlineCheckCircle,
  AiTwotonePushpin,
  AiTwotoneTag,
  AiOutlineCloseCircle,
} from 'react-icons/ai';

import { HiOutlineUserAdd } from 'react-icons/hi';

const MembersList = () => {
  return (
    <>
      <div>
        <div className="m-10 lg:ml-0">
          {/* FIXME:
           menu navigation  */}
          <div className="mt-8 lg:flex lg:justify-between">
            <div className=" bg-[#ffffff00]   sm:ml-0 sm: mt-4 lg:ml-4 lg:mt-0">
              {/* search box */}
              <div className="mx-4 lg:mx-2 ">
                <div className="lg:flex lg:justify-between lg:px-2">
                  <div className="border border-[#9f9f9f] rounded  px-4 py-2 flex justify-between items-center lg:w-full lg:mr-2">
                    <button className="text-sm text-[#aaa]">All Networks</button>
                    <AiFillCaretDown />
                  </div>
                  <div className="border border-[#9f9f9f] rounded px-4 py-2 flex justify-between items-center  lg:w-full lg:mr-2  mt-2 lg:mt-0">
                    <button className="text-sm text-[#aaa]">All Industries</button>
                    <AiFillCaretDown />
                  </div>

                  <div className="border border-[#9f9f9f] rounded px-4 py-2 flex justify-between items-center  lg:w-full lg:mr-2  mt-2 lg:mt-0">
                    <button className="text-sm text-[#aaa]">All Countries</button>
                    <AiFillCaretDown />
                  </div>
                  <div className="border border-[#9f9f9f] rounded lg:px-1 px-4 py-2  lg:mr-2 lg:w-30 mt-2 lg:mt-0">
                    <input
                      className="text-sm text-[#aaa] w-28"
                      type="text"
                      placeholder="Enter Profile ID"
                    />
                  </div>
                  <div
                    className="border px-4 py-2 mt-2 lg:mt-0 flex justify-center items-center lg:w-30 
                  
                   bg-[#17a2b8]  border-[#17a2b8] rounded text-sm text-[#fff] 
                  
                  "
                  >
                    <AiOutlineSearch className="mr-2" />
                    <button>Search</button>
                  </div>
                </div>
              </div>
              {/* purple banner My Website Network */}

              <div className="flex justify-left items-center bg-[#7867a7] text-white font-normal text-lg py-2 pl-5 my-5 mx-4 rounded">
                <AiTwotoneBulb className="mr-3 text-3xl" /> My Website Network
              </div>

              {/* each user */}
              <div className=" bg-[#ffffff] m-1 mx-4 rounded-tr-md rounded-tl-md mb-5 border border-[#bebebe] ">
                <div className="bg-[#ededed] rounded-tr rounded-tl px-2 py-3 flex justify-between items-center  ">
                  <div className="text-lg font-bold">
                    Duis aute irure dolor in reprehenderit <span>X</span>
                  </div>
                  <button className="bg-[#ff1717] text-white p-2 rounded ">
                    <AiOutlineClose />
                  </button>
                </div>
                <div className="lg:flex lg:justify-between px-3   mt-8">
                  <div className="  ">
                    <p className="text-center text-sm text-[#969696]">PROFILE ID: 89149</p>
                    <div className="flex m-2 p-2 border w-40  lg:w-36 mx-auto">
                      <img src="https://i.imgur.com/1Ge7acx.png" alt="" />
                    </div>
                    <div className="flex justify-center items-center">
                      <div className="flex flex-col m-0.5">
                        <HiOutlineUserAdd className="text-xl hover:text-xl hover:text-[#ffad41]" />

                        <AiOutlineCheckCircle />
                      </div>
                      <div className="flex flex-col m-0.5">
                        <AiOutlineSetting className="mb-0.5" />
                        <AiOutlineCheckCircle />
                      </div>
                      <div className="flex flex-col m-0.5">
                        <AiOutlineSetting className="mb-0.5" />
                        <AiOutlineCheckCircle />
                      </div>
                      <div className="flex flex-col m-0.5">
                        <AiOutlineSetting className="mb-0.5" />
                        <AiOutlineCheckCircle />
                      </div>
                      <div className="flex flex-col m-0.5">
                        <AiOutlineSetting className="mb-0.5" />
                        <AiOutlineCheckCircle />
                      </div>
                    </div>
                  </div>
                  <div className="lg:ml-4">
                    <div className="lg:flex lg:justify-between">
                      <div>
                        <div className="flex justify-center items-center text-center text-sm mt-2 lg:mt-0 text-[#969696] lg:flex lg:justify-start ">
                          <div className="pr-2 ">JOSH A.</div>
                          <AiTwotonePushpin />
                          <div className="pl-1">TEXAS, UNITED STATES</div>
                        </div>

                        <div className="lg:flex lg:justify-between">
                          <div className="flex  justify-center lg:flex lg:justify-start">
                            <button className="bg-[#f0ad4e] px-3 py-2 rounded mt-3 mr-2 text-white text-sm">
                              STARTUP
                            </button>
                            <button className="bg-[#dc3545] px-3 py-2 rounded mt-3 text-white text-sm">
                              FUNDING NEEDED $512K
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="flex  justify-center lg:flex lg:flex-col lg:w-32">
                        <button className="bg-[#ffc107] px-3 py-2 rounded mt-3 mr-2 lg:m-0 text-white text-sm">
                          Send Message
                        </button>
                        <button className="bg-[#007bff] px-3 py-2 rounded mt-3 text-white text-sm">
                          Update to View
                        </button>
                      </div>
                    </div>

                    {/* paragraph about the company */}
                    <div>
                      <div className="h-5 border-b-2 border-[#b4b4b4] text-center text-2xl "></div>
                      <p className="text-center lg:text-left mt-2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam perferendis
                        facere ea ipsa possimus officiis eius voluptates provident libero
                        reprehenderit dignissimos aspernatur...
                        <span className="font-semibold text-[#17a2b8]">view more </span>
                      </p>
                      <div className="h-5 border-b-2 border-[#b4b4b4] text-center text-2xl "></div>

                      <div className="lg:flex lg:justify-between">
                        <div className="flex justify-start mt-3">
                          <p className="mr-8">
                            <span className="font-bold">INVESTOR TYPE:</span> Venture open
                          </p>
                          <p>
                            <span className="font-bold">INDUSTRY:</span> Computers open
                          </p>
                        </div>
                        <div className="flex justify-center items-center bg-[#0C0] text-white text-center my-3  py-3 font-semibold lg:bg-[#fff0] lg:text-[#0C0] lg:text-xl lg:semi-bold lg:my-0 lg:py-0 lg:text-left">
                          <div className="pr-1">
                            <AiOutlineCheckCircle />
                          </div>
                          <div>ID VERIFIED</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center pb-3 lg:justify-start lg:mt-2 px-3">
                  <button className="flex justify-center items-center bg-[#17a2b8] text-white text-xs font-semibold pl-1 pr-2 py-0.5 rounded mr-1 mt-1">
                    <AiTwotoneTag />
                    <p className="ml-1">IT Consulting</p>
                  </button>
                  <button className="flex justify-center items-center bg-[#17a2b8] text-white text-xs font-semibold pl-1 pr-2 py-0.5 rounded mr-1 mt-1">
                    <AiTwotoneTag />
                    <p className="ml-1">IT Consulting</p>
                  </button>
                  <button className="flex justify-center items-center bg-[#17a2b8] text-white text-xs font-semibold pl-1 pr-2 py-0.5 rounded mr-1 mt-1">
                    <AiTwotoneTag />
                    <p className="ml-1">IT Consulting</p>
                  </button>
                  <button className="flex justify-center items-center bg-[#17a2b8] text-white text-xs font-semibold pl-1 pr-2 py-0.5 rounded mr-1 mt-1">
                    <AiTwotoneTag />
                    <p className="ml-1">IT Consulting</p>
                  </button>
                  <button className="flex justify-center items-center bg-[#17a2b8] text-white text-xs font-semibold pl-1 pr-2 py-0.5 rounded mr-1 mt-1">
                    <AiTwotoneTag />
                    <p className="ml-1">IT Consulting</p>
                  </button>
                  <button className="flex justify-center items-center bg-[#17a2b8] text-white text-xs font-semibold pl-1 pr-2 py-0.5 rounded mr-1 mt-1">
                    <AiTwotoneTag />
                    <p className="ml-1">IT Consulting</p>
                  </button>
                  <button className="flex justify-center items-center bg-[#17a2b8] text-white text-xs font-semibold pl-1 pr-2 py-0.5 rounded mr-1 mt-1">
                    <AiTwotoneTag />
                    <p className="ml-1">IT Consulting</p>
                  </button>
                  <button className="flex justify-center items-center bg-[#17a2b8] text-white text-xs font-semibold pl-1 pr-2 py-0.5 rounded mr-1 mt-1">
                    <AiTwotoneTag />
                    <p className="ml-1">IT Consulting</p>
                  </button>
                  <button className="flex justify-center items-center bg-[#17a2b8] text-white text-xs font-semibold pl-1 pr-2 py-0.5 rounded mr-1 mt-1">
                    <AiTwotoneTag />
                    <p className="ml-1">IT Consulting</p>
                  </button>
                  <button className="flex justify-center items-center bg-[#17a2b8] text-white text-xs font-semibold pl-1 pr-2 py-0.5 rounded mr-1 mt-1">
                    <AiTwotoneTag />
                    <p className="ml-1">IT Consulting</p>
                  </button>
                  <button className="flex justify-center items-center bg-[#17a2b8] text-white text-xs font-semibold pl-1 pr-2 py-0.5 rounded mr-1 mt-1">
                    <AiTwotoneTag />
                    <p className="ml-1">IT Consulting</p>
                  </button>
                  <button className="flex justify-center items-center bg-[#17a2b8] text-white text-xs font-semibold pl-1 pr-2 py-0.5 rounded mr-1 mt-1">
                    <AiTwotoneTag />
                    <p className="ml-1">IT Consulting</p>
                  </button>
                </div>
              </div>
              {/* second user */}
              <div className=" bg-[#ffffff] m-1 mx-4 rounded-tr-md rounded-tl-md mb-5 border border-[#bebebe] ">
                <div className="bg-[#ededed] rounded-tr rounded-tl px-2 py-3 flex justify-between items-center  ">
                  <div className="text-lg font-bold">
                    Duis aute irure dolor in reprehenderit <span>X</span>
                  </div>
                  <button className="bg-[#ff1717] text-white p-2 rounded ">
                    <AiOutlineClose />
                  </button>
                </div>
                <div className="lg:flex lg:justify-between px-3   mt-8">
                  <div className="  ">
                    <p className="text-center text-sm text-[#969696]">PROFILE ID: 89149</p>
                    <div className="flex m-2 p-2 border w-40  lg:w-36 mx-auto">
                      <img src="https://i.imgur.com/1Ge7acx.png" alt="" />
                    </div>
                    <div className="flex justify-center items-center">
                      <div className="flex flex-col m-0.5">
                        <AiOutlineSetting className="mb-0.5" />
                        <AiOutlineCheckCircle />
                      </div>
                      <div className="flex flex-col m-0.5">
                        <AiOutlineSetting className="mb-0.5" />
                        <AiOutlineCheckCircle />
                      </div>
                      <div className="flex flex-col m-0.5">
                        <AiOutlineSetting className="mb-0.5" />
                        <AiOutlineCheckCircle />
                      </div>
                      <div className="flex flex-col m-0.5">
                        <AiOutlineSetting className="mb-0.5" />
                        <AiOutlineCheckCircle />
                      </div>
                      <div className="flex flex-col m-0.5">
                        <AiOutlineSetting className="mb-0.5" />
                        <AiOutlineCheckCircle />
                      </div>
                    </div>
                  </div>
                  <div className="lg:ml-4">
                    <div className="lg:flex lg:justify-between">
                      <div>
                        <div className="flex justify-center items-center text-center text-sm mt-2 lg:mt-0 text-[#969696] lg:flex lg:justify-start ">
                          <div className="pr-2 ">JOSH A.</div>
                          <AiTwotonePushpin />
                          <div className="pl-1">TEXAS, UNITED STATES</div>
                        </div>

                        <div className="lg:flex lg:justify-between">
                          <div className="flex  justify-center lg:flex lg:justify-start">
                            <button className="bg-[#5cb85c] px-3 py-2 rounded mt-3 mr-2 text-white text-sm">
                              INVESTOR
                            </button>
                            <button className="bg-[#17a2b8] px-3 py-2 rounded mt-3 text-white text-sm">
                              AVAILABLE CAPITAL $23M
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="flex  justify-center lg:flex lg:flex-col lg:w-32">
                        <button className="bg-[#ffc107] px-3 py-2 rounded mt-3 mr-2 lg:m-0 text-white text-sm">
                          Send Message
                        </button>
                        <button className="bg-[#007bff] px-3 py-2 rounded mt-3 text-white text-sm">
                          Update to View
                        </button>
                      </div>
                    </div>

                    {/* paragraph about the company */}
                    <div>
                      <div className="h-5 border-b-2 border-[#b4b4b4] text-center text-2xl "></div>
                      <p className="text-center lg:text-left mt-2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam perferendis
                        facere ea ipsa possimus officiis eius voluptates provident libero
                        reprehenderit dignissimos aspernatur...
                        <span className="font-semibold text-[#17a2b8]">view more </span>
                      </p>
                      <div className="h-5 border-b-2 border-[#b4b4b4] text-center text-2xl "></div>

                      <div className="lg:flex lg:justify-between">
                        <div className="flex justify-start mt-3">
                          <p className="mr-8">
                            <span className="font-bold">INVESTOR TYPE:</span> Venture open
                          </p>
                          <p>
                            <span className="font-bold">INDUSTRY:</span> Computers open
                          </p>
                        </div>
                        <div className="flex justify-center items-center bg-[#ff0000] text-white text-center my-3  py-3 font-semibold lg:bg-[#fff0] lg:text-[#ff0000] lg:text-xl lg:semi-bold lg:my-0 lg:py-0 lg:text-left">
                          <div className="pr-1 ">
                            <AiOutlineCloseCircle />
                          </div>
                          <div>ID NOT VERIFIED</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center pb-3 lg:justify-start lg:mt-2 px-3">
                  <button className="flex justify-center items-center bg-[#17a2b8] text-white text-xs font-semibold pl-1 pr-2 py-0.5 rounded mr-1 mt-1">
                    <AiTwotoneTag />
                    <p className="ml-1">IT Consulting</p>
                  </button>
                  <button className="flex justify-center items-center bg-[#17a2b8] text-white text-xs font-semibold pl-1 pr-2 py-0.5 rounded mr-1 mt-1">
                    <AiTwotoneTag />
                    <p className="ml-1">IT Consulting</p>
                  </button>
                  <button className="flex justify-center items-center bg-[#17a2b8] text-white text-xs font-semibold pl-1 pr-2 py-0.5 rounded mr-1 mt-1">
                    <AiTwotoneTag />
                    <p className="ml-1">IT Consulting</p>
                  </button>
                  <button className="flex justify-center items-center bg-[#17a2b8] text-white text-xs font-semibold pl-1 pr-2 py-0.5 rounded mr-1 mt-1">
                    <AiTwotoneTag />
                    <p className="ml-1">IT Consulting</p>
                  </button>
                  <button className="flex justify-center items-center bg-[#17a2b8] text-white text-xs font-semibold pl-1 pr-2 py-0.5 rounded mr-1 mt-1">
                    <AiTwotoneTag />
                    <p className="ml-1">IT Consulting</p>
                  </button>
                  <button className="flex justify-center items-center bg-[#17a2b8] text-white text-xs font-semibold pl-1 pr-2 py-0.5 rounded mr-1 mt-1">
                    <AiTwotoneTag />
                    <p className="ml-1">IT Consulting</p>
                  </button>
                  <button className="flex justify-center items-center bg-[#17a2b8] text-white text-xs font-semibold pl-1 pr-2 py-0.5 rounded mr-1 mt-1">
                    <AiTwotoneTag />
                    <p className="ml-1">IT Consulting</p>
                  </button>
                  <button className="flex justify-center items-center bg-[#17a2b8] text-white text-xs font-semibold pl-1 pr-2 py-0.5 rounded mr-1 mt-1">
                    <AiTwotoneTag />
                    <p className="ml-1">IT Consulting</p>
                  </button>
                  <button className="flex justify-center items-center bg-[#17a2b8] text-white text-xs font-semibold pl-1 pr-2 py-0.5 rounded mr-1 mt-1">
                    <AiTwotoneTag />
                    <p className="ml-1">IT Consulting</p>
                  </button>
                  <button className="flex justify-center items-center bg-[#17a2b8] text-white text-xs font-semibold pl-1 pr-2 py-0.5 rounded mr-1 mt-1">
                    <AiTwotoneTag />
                    <p className="ml-1">IT Consulting</p>
                  </button>
                  <button className="flex justify-center items-center bg-[#17a2b8] text-white text-xs font-semibold pl-1 pr-2 py-0.5 rounded mr-1 mt-1">
                    <AiTwotoneTag />
                    <p className="ml-1">IT Consulting</p>
                  </button>
                  <button className="flex justify-center items-center bg-[#17a2b8] text-white text-xs font-semibold pl-1 pr-2 py-0.5 rounded mr-1 mt-1">
                    <AiTwotoneTag />
                    <p className="ml-1">IT Consulting</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MembersList;
