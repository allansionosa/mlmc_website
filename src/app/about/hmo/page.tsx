"use client";
import BreadCrumb from "@/app/lib/BreadCrumb";
import { Menu, MenuProps, Input } from "antd";
import React, { useEffect, useState } from "react";

import { BsArrowRight } from "react-icons/bs";
import { lists } from "./HmoList";
import Image from "next/image";
import { MenuItems } from "@/app/components/MenuItems";
type ListItem = {
  id: number;
  label: string;
  alt: string;
  src: string;
};
const page = () => {
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    setSearchResults(lists);
  }, [lists]);
  const [searchResults, setSearchResults] = useState<ListItem[]>([]);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);

    // const results = lists.filter((item) =>
    //   item.label.toLowerCase().includes(value.toLowerCase())
    // );

    // setSearchResults(results);
  };
  const [current, setCurrent] = useState("/about/hmo");
  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };
  const pageTitle = `HMO Accreditation`;
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
      <section className="container px-10 max-w-screen-md m-auto">
        <div className=" rounded flex justify-between bg-blue-800 text-white h-16 my-10">
          <div className="ml-10 mt-4">HMO Online Approval</div>
          <div className="mr-10 mt-5">
            <BsArrowRight size={30} />
          </div>
        </div>
        <div>
          <Input
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Search for HMO provider"
          />
        </div>
        <ul className="gap-5 flex justify-center my-10 flex-wrap ">
          {searchResults
            .filter((result) => {
              return searchTerm.toLowerCase() === ""
                ? result
                : result.label.toLowerCase().includes(searchTerm);
            })
            .map((result) => (
              <li key={result.id}>
                <Image
                  src={result.src}
                  alt=""
                  width={300}
                  priority
                  height={0}
                  className="h-[200px]"
                />
                <title> {result.label}</title>
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
};

export default page;
