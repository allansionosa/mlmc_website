"use client";
import { Menu, MenuProps, Button, Drawer, Affix } from "antd";
import { AiOutlineMenu } from "react-icons/ai";
import React, { useState } from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
const items: MenuProps["items"] = [
  {
    label: <Link href="/">Home</Link>,
    key: "/home",
  },
  {
    label: <Link href="/about">About</Link>,
    key: "/about",
  },
  {
    label: (
      <div className="flex items-center gap-x-1">
        Services <IoIosArrowDown />
      </div>
    ),
    key: "/services",
    children: [
      {
        label: <Link href="/services">Laboratory</Link>,
        key: "/services/laboratory",
      },
      {
        label: (
          <Link href="/services/radiology">
            Radiology & Diagnostic Procedures
          </Link>
        ),
        key: "/services/radiology",
      },
      {
        label: <Link href="/services/others">Others</Link>,
        key: "/services/others",
      },
    ],
  },
  {
    label: <Link href="/doctors">Doctors</Link>,
    key: "/doctors",
  },
  {
    label: <Link href="/result">Online Results</Link>,
    key: "/result",
  },
  {
    label: <Link href="/news">News & Events</Link>,
    key: "/news",
  },
  {
    label: <Link href="/careers">Careers</Link>,
    key: "/careers",
  },
  {
    label: <Link href="/contact">Contact</Link>,
    key: "/contact",
  },
];
export const Nav = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("");

  const showDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  const onClose: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    setOpen(false);
  };

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  return (
    <div>
      <div className="hidden sm:block">
        <Menu
          theme="dark"
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
          className="flex justify-center font-bold"
        />
      </div>
      <Affix>
        <div className="sm:hidden block bg-white ">
          <div className="flex justify-between">
            <div className="">
              <a href="/">
                <Image
                  src="/mlm.PNG"
                  alt="Metro Lemery Medical Center"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className=" w-56"
                />
              </a>
            </div>
            <div>
              <Button onClick={showDrawer}>
                <AiOutlineMenu />
              </Button>
              <Drawer
                size="large"
                placement="right"
                onClose={closeDrawer}
                open={open}
              >
                <Menu
                  onClick={onClose}
                  mode="inline"
                  items={items}
                  selectedKeys={[current]}
                />
              </Drawer>
            </div>
          </div>
        </div>
      </Affix>
    </div>
  );
};
