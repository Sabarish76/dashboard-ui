import React from "react";
import image from "../../images/bg2.png";
import avatar from "../../images/avatar.png";
import Image from "next/image";
import { MdSpaceDashboard, MdOutlineSettings } from "react-icons/md";
import { IoManSharp, IoChatbubblesOutline } from "react-icons/io5";

import { IoIosLogOut } from "react-icons/io";
import { SlCalender } from "react-icons/sl";

const SideNav = () => {
  return (
    <div>
      {" "}
      <header>
        <div className="bg-white shadow-md  md:w-2/3 min-h-screen  relative">
          <h1 className="font-bold text-center py-2">Smart Care</h1>
          <div className=" relative">
            <Image src={image} alt="img" />
            <p className="text-center absolute top-40 left-16 text-white text-2xl  ">
              Good Morning
              <br />
              <span className="font-bold"> Dr. john Doe</span>
            </p>
          </div>
          <div>
            <div className="flex items-center gap-6 py-3 mx-4">
              <MdSpaceDashboard />
              <p>Dashboard</p>
            </div>
            <div className="flex items-center gap-6 py-3 mx-4">
              <IoManSharp />
              <p>Patient</p>
            </div>
            <div className="flex items-center gap-6 py-3 mx-4">
              <SlCalender />
              <p>Calender</p>
            </div>
            <div className="flex items-center gap-6 py-3 mx-4">
              <MdOutlineSettings />
              <p>Settings</p>
            </div>
            <div className="flex items-center gap-6 py-3 mx-4">
              <IoChatbubblesOutline />
              <p>Support</p>
            </div>
          </div>
          <div className="absolute bottom-10 ">
            <h1 className="flex items-center gap-6 py-3 mx-4">
              <IoIosLogOut />
              Log Out
            </h1>
          </div>
        </div>
      </header>
    </div>
  );
};

export default SideNav;
