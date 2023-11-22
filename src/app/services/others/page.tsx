"use client";
import BreadCrumb from "@/app/lib/BreadCrumb";
import { Avatar, Card, Menu, MenuProps } from "antd";
import React, { useState } from "react";

import { otherList } from "./OtherList";
import Image from "next/image";
const { Meta } = Card;
const page = () => {
  const pageTitle = `Others`;
  return (
    <div className="overflow-hidden ">
      <div>
        <BreadCrumb
          items={[{ title: "Services" }, { title: pageTitle }]}
          title={pageTitle}
        />
      </div>

      <div className="px-10 py-10">
        <ul className=" grid lg:grid-cols-4 sm:grid-cols-2  gap-5">
          {otherList.map((list) => (
            <li key={list.id}>
              <Card
                style={{ width: 300 }}
                cover={
                  <Image
                    alt={list.alt}
                    src={list.src}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-full object-contain"
                  />
                }
              >
                <Meta title={list.title} description={list.description} />
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default page;
