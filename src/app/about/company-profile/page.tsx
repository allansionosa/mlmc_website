"use client";
import React, { useState } from "react";
import BreadCrumb from "@/app/lib/BreadCrumb";

import { Menu, MenuProps } from "antd";
import { MenuItems } from "@/app/components/MenuItems";
const page = () => {
  const [current, setCurrent] = useState("/about/company-profile");
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const pageTitle = `Company Profile`;
  return (
    <div className="overflow-hidden">
      <div>
        <BreadCrumb
          items={[{ title: "About" }, { title: pageTitle }]}
          title={pageTitle}
        />
      </div>
      <div>
        <MenuItems current={current} onClick={onClick} />
      </div>
      <div className="sm:mx-20 mx-10 my-20 ">
        <div className="grid gap-5">
          <span className="text-lg font-medium">Establishment</span>
          <p>
            The Metro Lemery Medical Center Expansion Project is a 3-storey
            building with 72 - bed capacity within a total land area of Three
            Thousand Two Hundred Sixty Two(3262) square meter of leased property
            embraced by OCT No. p3551 located at Barangay Palanas, Lemery,
            Batangas with the following facilities: Emergency Room, Laboratory,
            Private and Semi - Private Rooms, Pharmacy Nursery, Stockroom,
            Radiology, Clinic Rooms, Conference Room, Operating Room,
            Administrative Office, Canteen and other service facilities/
            utilities.
          </p>
        </div>
        <div className="grid gap-5 pt-5">
          <span className="text-lg font-medium">Personnel</span>
          <p>
            The Metro Lemery Medical Center Expansion Project is a 3-storey
            building with 72 - bed capacity within a total land area of Three
            Thousand Two Hundred Sixty Two(3262) square meter of leased property
            embraced by OCT No. p3551 located at Barangay Palanas, Lemery,
            Batangas with the following facilities: Emergency Room, Laboratory,
            Private and Semi - Private Rooms, Pharmacy Nursery, Stockroom,
            Radiology, Clinic Rooms, Conference Room, Operating Room,
            Administrative Office, Canteen and other service facilities/
            utilities.
          </p>
        </div>
      </div>
    </div>
  );
};
export default page;
