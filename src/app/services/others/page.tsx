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
    <div className="overflow-hidden">
      <div>
        <BreadCrumb
          items={[{ title: "Services" }, { title: pageTitle }]}
          title={pageTitle}
        />
      </div>

      <section className="container my-20 lg:px-48">
        <ul className="flex justify-center  gap-5 flex-wrap ">
          {otherList.map((list) => (
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
                <Meta title={list.title} description={list.description} />
              </Card>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default page;
