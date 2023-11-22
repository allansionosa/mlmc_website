"use client";
import { Input } from "antd";
import BreadCrumb from "../lib/BreadCrumb";
import { useEffect, useState } from "react";
import { data } from "./ServicesList";

type ServiceItem = {
  id: number;
  service: string;
};

const page = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<ServiceItem[]>([]);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);
  };
  useEffect(() => {
    setSearchResults(data);
  }, [data]);
  const pageTitle = `Laboratory`;
  return (
    <div className="overflow-hidden">
      <div>
        <BreadCrumb
          items={[{ title: "Services" }, { title: pageTitle }]}
          title={pageTitle}
        />
      </div>

      <div className="px-10 py-10">
        <div>
          <Input
            value={search}
            placeholder="Search for Laboratory Services"
            onChange={handleInputChange}
          />
        </div>
        <ul className="pt-10">
          {searchResults
            .filter((list) => {
              return search.toLowerCase() === ""
                ? list
                : list.service.toLowerCase().includes(search);
            })
            .map((list) => (
              <li key={list.id}>{list.service}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default page;
