"use client";
import React, { useEffect, useState } from "react";
import BreadCrumb from "../lib/BreadCrumb";
import { Card, Select } from "antd";
import Image from "next/image";
import Meta from "antd/es/card/Meta";
import { newsList } from "./NewsList";
import { BsCheck } from "react-icons/bs";

interface NewsItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  value: string;
  date: string;
  description: string;
}

const Page = () => {
  const pageTitle = `News & Services`;
  const [sortedData, setSortedData] = useState<NewsItem[]>([]);
  const [filterByType, setFilterByType] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState("Ascend");

  useEffect(() => {
    sortData(sortBy);
  }, [sortBy]);
  const getFilteredData = (data: NewsItem[], type: string | null) => {
    if (type === null || type === "All") {
      return data;
    }
    if (type.includes("Event") && type.includes("Promo")) {
      return data.filter(
        (item) => item.value === "Event" || item.value === "Promo"
      );
    }
    return data.filter((item) => item.value === type);
  };

  const sortedAndFilteredData = getFilteredData(sortedData, filterByType);

  const handleChange = (value: { value: string; label: React.ReactNode }) => {
    setSortBy(value.value);
  };

  const sortData = (order: string) => {
    let info = [...newsList];
    if (order === "Ascend") {
      setSortedData(info.sort((a, b) => a.date.localeCompare(b.date)));
    } else {
      setSortedData(info.sort((a, b) => b.date.localeCompare(a.date)));
    }
  };
  const handleChangeType = (value: {
    value: string;
    label: React.ReactNode;
  }) => {
    setFilterByType(value.value);
  };

  return (
    <div className="overflow-hidden">
      <div>
        <BreadCrumb
          items={[{ title: "News" }, { title: pageTitle }]}
          title={pageTitle}
        />
      </div>
      <section className="container my-28 sm:px-20">
        <div className="flex justify-end font-bold gap-x-3 pb-5 font-sans lg:mr-52 mr-5">
          <div>Sort:</div>
          <Select
            labelInValue
            bordered={false}
            placeholder="Date"
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
              { value: "Ascend", label: "Ascend" },
              { value: "Descend", label: "Descend" },
            ]}
          ></Select>
          <Select
            placeholder="Type"
            labelInValue
            bordered={false}
            style={{ width: 120 }}
            onChange={handleChangeType}
            options={[
              { value: "All", label: "All" },
              { value: "News", label: "News" },
              { value: "Event&Promo", label: "Event & Promo" },
            ]}
          ></Select>
        </div>
        <div className="flex justify-center">
          <ul className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {sortedAndFilteredData.map((list) => (
              <li key={list.id}>
                <Card
                  style={{ width: 300 }}
                  cover={
                    <Image
                      alt={list.alt}
                      src={list.src}
                      width={300}
                      priority
                      height={0}
                      className="h-[200px]"
                    />
                  }
                >
                  <div className="absolute top-4 text-yellow-400 border bg-blue-600 h-6 w-12 text-center rounded">
                    {list.value}
                  </div>
                  <div>{list.date}</div>
                  <Meta title={list.title} description={list.description} />
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Page;
