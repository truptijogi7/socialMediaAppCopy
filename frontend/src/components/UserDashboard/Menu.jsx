import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Menu = () => {
  return (
    <>
      <div>
        <div className="m-10">
          <div className="text-3xl ">
            <h1>Network</h1>
          </div>
          <div>
            <ul className="flex px-2 text-center items-center justify-end mt-10 ">
              <li className=" bg-[#e8e7e779] hover:bg-[#949494] cursor-pointer  font-normal hover:text-blue py-2 px-4  hover:border-transparent rounded-l-lg">
                My Friends <span className="bg-[#ffc107] py-1 px-2 rounded-full">0</span>
              </li>

              <li className=" bg-[#e8e7e779] hover:bg-[#949494] cursor-pointer  font-normal hover:text-blue py-2 px-4  hover:border-transparent">
                Friend Requests <span className="bg-[#ffc107] py-1 px-2 rounded-full">2</span>
              </li>
              <li className=" bg-[#e8e7e779] hover:bg-[#949494] cursor-pointer  font-normal hover:text-blue py-2 px-4  hover:border-transparent ">
                My Notes <span className="bg-[#ffc107] py-1 px-2 rounded-full">12</span>
              </li>
              <li className=" bg-[#e8e7e779] hover:bg-[#949494] cursor-pointer  font-normal hover:text-blue py-2 px-4  hover:border-transparent ">
                My Favorites <span className="bg-[#ffc107] py-1 px-2 rounded-full">3</span>
              </li>
              <li className=" bg-[#e8e7e779] hover:bg-[#949494] cursor-pointer font-normal hover:text-blue py-2 px-4  hover:border-transparent rounded-r-lg">
                <Link to={ROUTES.INBOX}>
                  Inbox <span className="bg-[#ffc107] py-1 px-2 rounded-full">6</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="h-5 border-b-2 border-[#b4b4b4] text-center text-2xl "></div>
        </div>
      </div>
    </>
  );
};

export default Menu;
