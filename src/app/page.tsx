"use client";

import { Hero } from "./components/home/Hero";
import { News } from "./components/home/News";
import { Services } from "./components/home/Services";
import { Faq } from "./components/home/Faq";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <News />
      <Faq />
    </>
  );
}
