"use client";
import BreadCrumb from "@/app/lib/BreadCrumb";
import { Collapse, CollapseProps } from "antd";

import { radioList } from "./RadiologyList";

const item: CollapseProps["items"] = radioList.map((item) => ({
  key: 1,
  label: "C-arm / Fluroscopy",
  children: (
    <ul key={item.id} className="list-disc ml-3">
      <li> {item.content.first}</li>
      <li>{item.content.second}</li>
      <li>{item.content.third}</li>
      <li>{item.content.fourth}</li>
    </ul>
  ),
}));
const page = () => {
  const onChange = (key: string | string[]) => {
    // console.log(key);
  };
  const pageTitle = `Radiology & Diagnostic Procedures`;
  return (
    <section className="overflow-hidden">
      <div>
        <BreadCrumb
          items={[{ title: "Services" }, { title: pageTitle }]}
          title={pageTitle}
        />
      </div>

      <div className="max-w-screen-md m-auto my-20 font-sans px-5 flex flex-col gap-5">
        <div className="flex bg-blue-800 h-12 rounded items-center pl-3 text-white text-sm">
          General Radiology
        </div>
        <div className="flex bg-blue-800 h-12 rounded items-center pl-3 text-white text-sm">
          Mobile/Portable Radiolography
        </div>
        <Collapse
          items={item}
          // defaultActiveKey={["1"]}
          onChange={onChange}
          expandIconPosition="end"
        />
      </div>
    </section>
  );
};

export default page;
