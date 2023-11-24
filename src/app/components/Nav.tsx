"use client";
import { Menu, MenuProps, Button, Drawer, Affix } from "antd";
import { AiOutlineMenu } from "react-icons/ai";
import React, { useState } from "react";

import Image from "next/image";
import { items } from "./NavItems";

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
    <section>
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
    </section>
  );
};
