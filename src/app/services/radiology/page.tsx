"use client";
import BreadCrumb from "@/app/lib/BreadCrumb";
import { Collapse, CollapseProps, Menu, MenuProps } from "antd";

import { useState } from "react";
import { radioList } from "./RadiologyList";
import { items } from "@/app/about/page";

const item: CollapseProps["items"] = radioList.map((item) => ({
  key: `${item.id}`,
  label: ` ${item.label}`,
  children: <p key={item.id}>{item.content}</p>,
}));
const page = () => {
  const onChange = (key: string | string[]) => {
    // console.log(key);
  };
  const [current, setCurrent] = useState("/services/radiology");

  const onClick: MenuProps["onClick"] = (e) => {
    // console.log("click ", e);
    setCurrent(e.key);
  };
  const pageTitle = `Radiology and Diagnostic Procedures`;
  return (
    <div className="overflow-hidden">
      <div>
        <BreadCrumb
          items={[{ title: "Services" }, { title: pageTitle }]}
          title={pageTitle}
        />
      </div>
      <div className="">
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
          className="flex justify-center "
        />
      </div>
      <div className="px-20 py-20 bg-transparent">
        <Collapse
          items={item}
          defaultActiveKey={["1"]}
          onChange={onChange}
          accordion={true}
        />
      </div>
    </div>
  );
};

export default page;
