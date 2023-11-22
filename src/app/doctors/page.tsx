"use client";
import BreadCrumb from "@/app/lib/BreadCrumb";
import { List, Row } from "antd";
import Image from "next/image";

import React from "react";
const data = Array.from({ length: 23 }).map((_, i) => ({
  title: `Manalo, Celeste Cordova ${i}`,
  description: "specialty",
  skill: "PEDEATRICS",
  schedule: "Schedule",
  date: " MONDAY TO SATURDAY EXCEPT THURSDAY 10:00AM TO 2:00PM",
  content:
    "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
}));

// ... (imports remain the same)

const page = () => {
  const pageTitle = `Doctors`;
  return (
    <div className="overflow-hidden">
      <div>{/* ... */}</div>
      <section className="sm:px-44 sm:py-10 py-3">
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 3,
          }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item key={item.title}>
              <div className="flex">
                <div className="w-full md:w-1/2 h-60 bg-gray-50 relative md:h-full  grid justify-center items-center">
                  <Image
                    alt="logo"
                    src="/beach.jpg"
                    width={350}
                    height={200}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{
                      objectFit: "contain",
                      objectPosition: "center",
                      width: "100%", // Ensure the image takes 100% of its container width
                      height: "100%", // Ensure the image takes 100% of its container height
                      borderRadius: "8px", // Optional: add rounded corners
                    }}
                    quality={50}
                  />
                </div>
                <div className="bg-gray-200 px-3 py-3 rounded md:w-1/2 grid grid-cols-1 lg:grid-cols-2">
                  <div>
                    <List.Item.Meta
                      title={item.title}
                      description={item.description}
                    />
                    <div>{item.skill}</div>
                    <div>{item.schedule}</div>
                    <div>{item.date}</div>
                  </div>
                  <div>{item.content}</div>
                </div>
              </div>
            </List.Item>
          )}
        />
      </section>
    </div>
  );
};
export default page;
