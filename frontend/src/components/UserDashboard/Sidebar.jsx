import React from 'react';

import {
  AiOutlineInfoCircle,
  AiOutlineUser,
  AiOutlineEye,
  AiOutlineHdd,
  AiOutlineLaptop,
  AiOutlineSetting,
  AiOutlineStar,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Sidebar = () => {
  return (
    <>
      <div>
        <div className="m-10 lg:mr-0">
          {/* FIXME:
           menu navigation  */}
          <div className="mt-8 lg:flex lg:justify-between">
            <div className="lg:flex lg:justify-start ">
              <ul className="flex flex-col divide-y divide-[#dadada] border border-[#b4b4b4] rounded  lg:w-max lg:h-fit	">
                <div className="flex justify-between items-center p-3 hover:bg-[#7867a7] hover:text-[#fff] cursor-pointer">
                  <li className="text-base">
                    <Link to={ROUTES.USER_DASHBOARD}>Browse Network</Link>
                  </li>
                  <div className="flex ">
                    <div className="px-2 ">
                      <AiOutlineUser />
                    </div>
                    <AiOutlineInfoCircle />
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 hover:bg-[#7867a7] hover:text-[#fff] cursor-pointer">
                  <li className="text-base">View my Ad</li>
                  <div className="flex ">
                    <div className="px-2 ">
                      <AiOutlineEye />
                    </div>
                    <AiOutlineInfoCircle />
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 hover:bg-[#7867a7] hover:text-[#fff] cursor-pointer">
                  <li className="text-base">Resolution Center</li>
                  <div className="flex ">
                    <div className="px-2 ">
                      <AiOutlineHdd />
                    </div>
                    <AiOutlineInfoCircle />
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 hover:bg-[#7867a7] hover:text-[#fff] cursor-pointer">
                  <li className="text-base">Support</li>
                  <div className="flex ">
                    <div className="px-2 ">
                      <AiOutlineLaptop />
                    </div>
                    <AiOutlineInfoCircle />
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 hover:bg-[#7867a7] hover:text-[#fff] cursor-pointer">
                  <li className="text-base">Account Settings</li>
                  <div className="flex ">
                    <div className="px-2 ">
                      <AiOutlineSetting />
                    </div>
                    <AiOutlineInfoCircle />
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 hover:bg-[#7867a7] hover:text-[#fff] cursor-pointer">
                  <li className="text-base">Upgrade Account</li>
                  <div className="flex ">
                    <div className="px-2 ">
                      <AiOutlineStar />
                    </div>
                    <AiOutlineInfoCircle />
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
