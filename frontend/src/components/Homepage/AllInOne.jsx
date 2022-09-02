import React from 'react';
import { CheckIcon } from '@heroicons/react/outline';

const AllInOne = () => {
  return (
    <div name="platforms" className="w-full  bg-[#553e94]">
      <div className="max-w-[1240px] mx-auto text-white px-10 py-14">
        <h2 className="text-4xl font-bold text-center mb-6">
          Join thousands of FundsGo users around the World
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Notifications</h3>
              <p className="text-lg pt-2 pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores maxime deserunt
                voluptatibus consequatur similique voluptates!
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Notifications</h3>
              <p className="text-lg pt-2 pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores maxime deserunt
                voluptatibus consequatur similique voluptates!
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Notifications</h3>
              <p className="text-lg pt-2 pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores maxime deserunt
                voluptatibus consequatur similique voluptates!
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Notifications</h3>
              <p className="text-lg pt-2 pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores maxime deserunt
                voluptatibus consequatur similique voluptates!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllInOne;
