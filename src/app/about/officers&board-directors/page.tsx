"use client";
import BreadCrumb from "@/app/lib/BreadCrumb";
import { Menu, MenuProps } from "antd";
import React, { useState } from "react";
import { items } from "../page";

const page = () => {
  const [current, setCurrent] = useState("/about/officers&board-directors");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const pageTitle = `Officers and Board Directors`;
  return (
    <div className="overflow-hidden">
      <div>
        <BreadCrumb
          items={[{ title: "About" }, { title: pageTitle }]}
          title={pageTitle}
        />
      </div>
      <div className=" bg-gray-300 py-3 ">
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
          className="bg-gray-300flex justify-center"
        />
      </div>
      <div className="grid justify-items-center sm:grid-cols-2 gap-5 my-20 mx-10">
        <div>
          <h1 className="font-semibold text-lg">Board of Directors</h1>
          <ul>
            <li>• Mr. Patron</li>
            <li>• Lily B. Macalalad, MD</li>
            <li>• Angelita Jude F. Datingaling, MD</li>
            <li>• Celeste C. Manalo, MD</li>
            <li>• Yvette M. Aguila, RPh</li>
            <li>• Eric B. Barret. MD</li>
            <li>• Ricardo A. Batac, MD</li>
            <li>• Antero C. Datingaling, MD</li>
            <li>• Ernesto Vincent Flores II, MD</li>
            <li>• Vanessa Caroline P. Guce</li>
            <li>• Edwin C. Manuel, MD</li>
            <li>• Ervenilda P. Monfero</li>
            <li>• German Noche, MD</li>
            <li>• Babylyn Palanca</li>
            <li>• Cesar N. Reyes Jr., MD</li>
          </ul>
        </div>
        <div>
          <h1 className="font-semibold text-lg">Officers</h1>
          <ul>
            <li>• President - Mr. Patron</li>
            <li>• Vice President - Lily B. Macalalad, MD</li>
            <li>•Secretary - Celeste C. Manalo, MD</li>
            <li>• Treasurer - Angelita Jude F. Datingaling, MD</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
