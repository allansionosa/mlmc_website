import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import { lists } from "../ServiceList";
export const Services = () => {
  return (
    <section className=" bg-gray-100 py-10">
      <div className="grid justify-items-center">
        <span className="font-serif">CARE YOU BELIEVE IN</span>
        <span className="text-[#0000e6] text-2xl font-serif">Our Services</span>
      </div>
      <div className="grid md:grid-cols-2 mt-5 justify-items-center">
        <div>
          <ul className=" mx-5 py-8 text-blue-500 font-sans px-2 bg-white  sm:w-96 ">
            <li>Pharmacy Services</li>
            <li>Emergency Room</li>
            <li className="flex justify-between">
              Laboratory Services <AiOutlineArrowRight />
            </li>
            <li className="grid grid-cols-2 justify-items-end">
              Radiology and Diagnostic Procedures <AiOutlineArrowRight />
            </li>
            <li className="flex justify-between">
              Out-Patient Department <AiOutlineArrowRight />
            </li>
          </ul>
        </div>
        <div>
          <ul className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  m-auto mt-3 font-sans text-blue-700 gap-5 mx-5">
            {lists.map((list) => (
              <li key={list.id}>
                <Image
                  src={list.src}
                  alt={list.alt}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-20 h-20 object-contain"
                />
                <span>{list.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
