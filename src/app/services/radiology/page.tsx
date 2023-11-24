"use client";
import BreadCrumb from "@/app/lib/BreadCrumb";
import { Collapse, CollapseProps } from "antd";

import { radioList } from "./RadiologyList";

const item: CollapseProps["items"] = radioList.map((item) => ({
  key: `${item.id}`,
  label: ` ${item.label}`,
  children: (
    <p key={item.id} className="">
      {item.content}
    </p>
  ),
}));
const page = () => {
  const onChange = (key: string | string[]) => {
    // console.log(key);
  };
  const pageTitle = `Radiology & Diagnostic Procedures`;
  return (
    <div className="overflow-hidden">
      <div>
        <BreadCrumb
          items={[{ title: "Services" }, { title: pageTitle }]}
          title={pageTitle}
        />
      </div>

      <div className="sm:px-96 py-20 font-sans mx-10">
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
