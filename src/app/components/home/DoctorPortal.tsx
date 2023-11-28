import React from "react";
import { BsPerson } from "react-icons/bs";
import { FaUserDoctor } from "react-icons/fa6";
import { LiaNotesMedicalSolid } from "react-icons/lia";

const DoctorPortal = () => {
  return (
    <section className="grid divide-y divide-slate-200 md:container md:grid-cols-3 md:divide-none md:gap-x-5 md:-translate-y-2/4 m-auto ">
      <a
        className="px-5 py-4 md:py-3 flex justify-between items-center bg-blue-900 text-white md:rounded-md cursor-pointer hover:bg-blue-950"
        href="/"
      >
        <p className="text-xl font-medium md:text-base">Doctor Portal</p>
        <div className="h-16 aspect-square  hidden md:block relative">
          <FaUserDoctor size={60} />
        </div>
      </a>
      <a
        className="px-5 py-4 md:py-3 flex justify-between items-center bg-blue-900 text-white md:rounded-md cursor-pointer hover:bg-blue-950"
        href="/"
      >
        <p className="text-xl font-medium md:text-base">Patient Portal</p>
        <div className="h-16 aspect-square  hidden md:block relative">
          <BsPerson size={60} />
        </div>
      </a>
      <a
        className="px-5 py-4 md:py-3 flex justify-between items-center bg-blue-900 text-white md:rounded-md cursor-pointer hover:bg-blue-950"
        href="/"
      >
        <p className="text-xl font-medium md:text-base">HMO Portal</p>
        <div className="h-16 aspect-square  hidden md:block relative">
          <LiaNotesMedicalSolid size={60} />
        </div>
      </a>
    </section>
  );
};

export default DoctorPortal;
