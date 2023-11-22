import React from "react";
import BreadCrumb from "../lib/BreadCrumb";
import { Descriptions, DescriptionsProps, Input } from "antd";
const items: DescriptionsProps["items"] = [
  {
    key: "1",
    label: "Slots",
    children: "1",
  },
  {
    key: "2",
    label: "Date Posted",
    children: "November 10, 2023",
  },
];
const page = () => {
  const pageTitle = "Careers";
  return (
    <div className="overflow-hidden">
      <div>
        <BreadCrumb items={[{ title: "Careers" }]} title={pageTitle} />
      </div>
      <section className="container my-20 sm:mx-20 px-5">
        <div className="flex justify-center">
          <Input
            placeholder="Search for Job's title"
            size="large"
            style={{ width: 900 }}
          />
        </div>
        <div className=" grid justify-items-center">
          <div className="bg-gray-200 my-10 border pt-3 rounded ">
            <div className=" flex md:flex-row flex-col">
              <Descriptions
                title="REGISTERED MEDICAL TECHNOLOGIST"
                items={items}
                className="sm:w-[800px] pl-3"
              />
              <div className=" pt-5 pr-3 flex justify-center border border-gray-300 sm:border-none">
                View Details
              </div>
            </div>
          </div>
          <div className="bg-gray-200 my-10 border pt-3 rounded ">
            <div className=" flex md:flex-row flex-col">
              <Descriptions
                title="REGISTERED MEDICAL TECHNOLOGIST"
                items={items}
                className="sm:w-[800px] pl-3"
              />
              <div className=" pt-5 pr-3 flex justify-center border border-gray-300 sm:border-none">
                View Details
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
