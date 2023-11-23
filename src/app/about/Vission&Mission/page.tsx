"use client";
import BreadCrumb from "@/app/lib/BreadCrumb";
import React, { useState } from "react";
// import { items } from "../page";
import { Menu, MenuProps } from "antd";
import Image from "next/image";
import { MenuItems } from "@/app/components/MenuItems";
const page = () => {
  const [current, setCurrent] = useState("/about/Vission&Mission");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const pageTitle = `Vission/Mission`;
  return (
    <div className="overflow-hidden ">
      <div>
        <BreadCrumb
          items={[{ title: "About" }, { title: pageTitle }]}
          title={pageTitle}
        />
      </div>
      <div>
        <MenuItems current={current} onClick={onClick} />
      </div>
      <div className="flex justify-center flex-wrap text-2xl my-20 text-blue-800 gap-5 text-center font-semibold px-5 ">
        <section className="relative">
          VISION
          <Image src="/beach.jpg" alt="" width={500} priority height={0} />
          <strong className="absolute sm:top-32 top-20 left-3 text-white text-base font-bold">
            "To be Batangas' Premiere Provider of excellent healthcare"
          </strong>
        </section>
        <section className="relative">
          MISSION
          <Image
            src="/farm.jpg"
            alt=""
            width={500}
            priority
            height={0}
            className="h-[250px]"
          />
          <div className="absolute sm:top-32 top-20 left-3 text-white text-base font-bold">
            "To promote, restore and maintain the health of all people we serve"
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
