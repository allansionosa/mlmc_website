"use client";
import { Hero } from "./components/home/Hero";
import { News } from "./components/home/News";
import { Services } from "./components/home/Services";
import { Faq } from "./components/home/Faq";
import DoctorPortal from "./components/home/DoctorPortal";

export default function Home() {
  return (
    <>
      <Hero />
      <DoctorPortal />
      <Services />
      <News />
      <Faq />
    </>
  );
}
