"use client";
import React, { useEffect, useState } from "react";
import BreadCrumb from "../lib/BreadCrumb";
import { Input } from "antd";
import { careerList } from "./CareerList";

interface CareersItem {
  id: number;
  slots: string;
  job_title: string;
  date_posted: string;
}

const page = () => {
  const pageTitle = "Careers";
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<CareersItem[]>([]);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);
  };
  useEffect(() => {
    setSearchResults(careerList);
  }, [careerList]);
  return (
    <div className="overflow-hidden">
      <div>
        <BreadCrumb items={[{ title: "Careers" }]} title={pageTitle} />
      </div>
      <section className="container my-20 max-w-[1150px] m-auto px-5">
        <div className="mb-10">
          <Input
            placeholder="Search for Job's title"
            size="large"
            value={search}
            onChange={handleInputChange}
          />
        </div>

        <div className="grid gap-y-5">
          {searchResults
            .filter((list) => {
              return search.toLowerCase() === ""
                ? list
                : list.job_title.toLowerCase().includes(search.toLowerCase());
            })
            .map((list) => (
              <div className="flex flex-col lg:flex-row" key={list.id}>
                <div className="py-5 px-4 grow rounded bg-gray-100">
                  <div>
                    <h2 className="text-primary font-semibold text-xl pb-5 uppercase">
                      {list.job_title}
                    </h2>
                    <div className="flex gap-x-5">
                      <div className="flex flex-col gap-y-1">
                        <label className="font-medium">Slots</label>
                        <span>{list.slots}</span>
                      </div>
                      <div className="flex flex-col gap-y-1">
                        <label className="font-medium">Date Posted</label>
                        <span>{list.date_posted}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  className="grid justify-center py-3 border-2 bg-gray-100  hover:bg-gray-200 flex-shrink-0 lg:border-0 items-center lg:px-5 rounded"
                  href="/careers"
                >
                  <span className="group-hover:underline underline-offset-2 group-hover:text-primary">
                    View Details
                  </span>
                </a>
              </div>
            ))}
        </div>
      </section>
      <div className="mb-28 max-w-[1120px] m-auto ">
        <div className="md:container">
          <div className=" bg-center bg-cover bg-[url('/building.jpg')] ">
            <div className=" bg-blue-800 opacity-80 py-6 px-5 my-10 text-white ">
              <h5 className="text-lg font-medium uppercase ">Contact Us</h5>
              <ul className="pt-3 grid gap-y-1">
                <li>
                  Adress:
                  <span className="font-medium">
                    llustre Ave., Brgy. Palanas, Lemery Batangas
                  </span>
                </li>
                <li>
                  Email:
                  <span className="font-medium">
                    customerservice@mlmc.com.ph
                  </span>
                </li>
                <li>
                  Contact No.: <span className="font-medium">0917-509-048</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
