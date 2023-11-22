import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BiPhoneCall } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";

export const Top = () => {
  return (
    <div className=" md:py-5 py-0 ">
      <div className="flex justify-between">
        <div className="ml-32 hidden sm:block  shrink-0">
          <Link href="/">
            <Image
              src="/mlm.PNG"
              alt="Metro Lemery Medical Center"
              width={0}
              height={0}
              sizes="100vw"
              className=" w-56  shrink-0 "
            />
          </Link>
        </div>
        <div className="hidden sm:block pr-10">
          <div className="flex flex-row justify-end">
            <div className="flex flex-row ">
              <div className="">
                <BiPhoneCall size={40} color={"blue"} />
              </div>
              <div>
                <div className="text-blue-700 ">EMERGENCY</div>
                <div className=" text-red-600 font-sans">
                  (043) 409-0480 LOC. 107
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              <div>
                <SlLocationPin size={30} color={"blue"} />
              </div>
              <div>
                <div className="text-blue-700">ADDRESS</div>
                <div className=" text-red-600 font-sans">
                  ILLUSTRE AVE., BRGY. PALANAS, LEMERY BATANGAS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
