import React from 'react';

const Footer = () => {
  return (
    <div className="  w-full h-full  m-auto bg-[#252525]">
      <div className="flex justify-between items-center px-32 py-5 text-[#bfbfbf]">
        <div className="flex justify-left items-center ">
          <div className="mr-10">Terms of agreement</div>
          <div>Privacy policy</div>
        </div>
        <button
          className="px-3 py-2  text-base text-[#000000] border bg-[#ffffff] border-[#ffffff]
            rounded-md"
        >
          Register Today
        </button>
      </div>
    </div>
  );
};
export default Footer;
