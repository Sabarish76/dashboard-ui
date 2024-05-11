import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoMdPulse } from "react-icons/io";
import { FaWeight } from "react-icons/fa";
import avatar from "../../../images/avatar.png";
import graph1 from "../../../images/graph1.png";
import graph2 from "../../../images/graph2.png";
import Image from "next/image";

const Patient = () => {
  return (
    <div className="p-7">
      <div className="flex gap-4 items-center">
        <p>Patients</p>
        <FaChevronRight />
        <p>Mr. Jesse wynn</p>
      </div>

      <div className="p-3 py-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-16">
        <div>
          <Image src={avatar} alt="avatar" className="w-40" />
        </div>
        <div className="leading-10">
          <h1 className="font-bold text-2xl">Patient</h1>
          <p className="text-3xl">Mr. Jesse wynn</p>
          <button className="p-1 rounded-md bg-slate-100">View Profile</button>
        </div>
        <div>
          <p className="py-1">Sex : Male</p>
          <p className="py-1">Age : 32</p>
          <p className="py-1">Blood : B+</p>
        </div>
        <div>
          <p className="py-1">Checkin : 24 Feb,2020</p>
          <p className="py-1">Dept : Cardiology</p>
          <p className="py-1">Bed# : 0747</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 md:pl-10 gap-20">
        <div className="grid grid-cols-3 gap-2">
          <div className="h-fit bg-black text-white p-3 border-slate-300 border-2  rounded-lg">
            <div className="flex items-center justify-between">
              <p>SYS</p>
              <FaRegHeart />
            </div>
            <div className="py-3 flex items-center gap-2">
              <h1 className="text-3xl">123</h1>{" "}
              <p className="text-slate-100 text-sm">mmHg</p>
            </div>
            <div className="text-slate-100 text-sm relative">
              <p className="py-2">160</p>
              <p className="py-2">140</p>
              <p className="py-2">120</p>
              <Image
                src={graph1}
                alt="graph"
                className="w-28 absolute top-2 left-5"
              />
            </div>
          </div>
          <div>
            <div className="h-fit bg-white text-black p-3 border-slate-300 border-2  rounded-lg">
              <div className="flex items-center justify-between">
                <p>DIA</p>
                <FaRegHeart />
              </div>
              <div className="py-3 flex items-center gap-2">
                <h1 className="text-3xl">79</h1>{" "}
                <p className="text-slate-800 text-sm">mmHg</p>
              </div>
              <div className="text-slate-800 text-sm relative">
                <p className="py-2">160</p>
                <p className="py-2">140</p>
                <p className="py-2">120</p>
                <Image
                  src={graph1}
                  alt="graph"
                  className="w-28 absolute top-2 left-5"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div className="h-fit bg-white text-black p-3 border-slate-300 border-2  rounded-lg">
              <div className="flex items-center justify-between">
                <p>Pulse</p>
                <IoMdPulse />
              </div>
              <div className="py-2 flex items-center gap-2">
                <h1 className="text-3xl">122</h1>{" "}
                <p className="text-slate-800 text-sm">BPM</p>
              </div>
            </div>
            <div className="h-fit mt-3  bg-white text-black p-3 border-slate-300 border-2  rounded-lg">
              <div className="flex items-center justify-between">
                <p>Weight</p>
                <FaWeight />
              </div>
              <div className="py-2 flex items-center gap-2">
                <h1 className="text-3xl">80.0</h1>{" "}
                <p className="text-slate-800 text-sm">kgs</p>
              </div>
            </div>
          </div>
          <div></div>
        </div>

        <div>
          <h1>Systolic Analysis</h1>
          <div className="flex gap-10">
            <div className="py-1">
              <p className="py-2">60</p>
              <p className="py-2">40</p>
              <p className="py-2">20</p>
              <p className="py-1">0</p>
            </div>
            <div className="flex gap-5">
              <div className="bg-orange-500 h-16 w-16 mt-20 "></div>
              <div className="bg-blue-800 h-20 w-16 mt-16 "></div>
              <div className="bg-slate-400 h-28 w-16 mt-8 "></div>
              <div className="bg-red-300 h-20 w-16 mt-16 "></div>
            </div>
          </div>
          <div className="flex">
            <p className="pl-16">0-89</p>
            <p className="pl-12">90-119</p>
            <p className="pl-10">140-159</p>
            <p className="pl-8">150-500</p>
          </div>
        </div>
      </div>

      <div className="md:pl-10 py-3">
        <h1>ECG Data</h1>
        <Image src={graph2} alt="graph2" className="w-[70%]" />
      </div>
    </div>
  );
};

export default Patient;
