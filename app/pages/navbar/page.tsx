import React from "react";
import avatar from "../../images/avatar.png";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      {" "}
      <section>
        <div className="w-[100%] lg:w-[100%]  mt-8 md:mt-0 h-fit flex flex-col md:flex-row justify-between shadow-xl">
          <div className="p-5 flex items-center gap-9 px-9">
            <FaSearch className="text-xl" />
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:px-36 p-2.5"
              type="text"
              placeholder="Search Patients here..."
            />
          </div>
          <div className="flex items-center gap-8 p-5">
            <div>
              <CiMail className="text-2xl" />
            </div>
            <div className="flex items-center gap-9">
              <Image src={avatar} alt="avatar" className="w-10" />
              <p>Dr. John Doe</p>
              <FaChevronDown />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
