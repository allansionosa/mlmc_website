"use client";
import BreadCrumb from "../lib/BreadCrumb";
import { Menu, MenuProps } from "antd";
import Link from "next/link";
import { useState } from "react";
export const items: MenuProps["items"] = [
  {
    label: <Link href="/about">History</Link>,
    key: "/about",
  },
  {
    label: <Link href="/about/Vission&Mission">Vision/Mision</Link>,
    key: "/about/Vission&Mission",
  },
  {
    label: <Link href="/about/company-profile">Company Profile</Link>,
    key: "/about/company-profile",
  },
  {
    label: (
      <Link href="/about/officers&board-directors">
        Officers and Board Directors
      </Link>
    ),
    key: "/about/officers&board-directors",
  },
  {
    label: <Link href="/about/hmo">HMO</Link>,
    key: "/about/hmo",
  },
];
const page = () => {
  const [current, setCurrent] = useState("/about");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const pageTitle = `History`;
  return (
    <div className="overflow-hidden">
      <div>
        <BreadCrumb
          items={[{ title: "About" }, { title: pageTitle }]}
          title={pageTitle}
        />
      </div>
      <div className="">
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
          className="flex justify-center "
        />
      </div>
      <div className="grid grid-cols-1  gap-5 sm:mx-36 mx-10 my-20 indent-10 text-slate-950 text-[18px] ">
        <p>
          Metro Lemery Medical Center is a level 2 hospital situated at Palanas,
          Lemery Batangas. It was establish on May 25, 2005 and is owned by
          Saint Thomas Aquinas Hospital Corporation
        </p>
        <p>
          It is a duly licensed hospital of the department of Health and is
          accredited by the Philippine Health Insurance with a 72-bed capacity.
          It is also a member of the Philippines Hospital Association and
          Private Hospital Association of the Philippines. Its roster of medical
          specialist ranges from a wide variety of specialization and continues
          to broaden the field to povide a complete and holistic management to
          our clientele. We cater to Class A to Class C Clientele which mostly
          coms from the first congressional district of Batangas or the Western
          Batangas Region though we also cater to as far as Cavite, Laguna and
          Batangas City.
        </p>
        <p>
          Metro Lemery Medical Center has been awarded as a Center of Excellence
          on the Sixth Year for the period of May 1, 2010 to April 30, 2013 by
          the Phil. Health Insurance (Philhealth). As a Center of Excellence,
          the hospital has upheld and continues to uphold the standards of
          quality health care as articulated in the Bench book on Performance
          Improvement of Health Services.
        </p>
        <p>
          On 2011, MLMC upgraded its conventional CT scan acquired since 2005 to
          a 16-slice CT Scan. in the same year, it ventured to a major
          investment, and acquired an MRI, the firt of its kind in the hospitals
          in Lemery.
        </p>
        <p>
          On our 7th Year ,2012, the new Medical Arts Building (MAB) was opened
          to service our Out-Patient consultations. It aimed to house
          multi-specialty clinics for the convenience of our clientele. Major
          renovation of the lobby has been made to provide an admitting section
          making for a more spacious entrance. Kaleidoscope, a center of therapy
          for the challenged children, was the arm taht provided assistance to
          our special children.
        </p>
        <p>
          For the year 2013, we continued to make our services better and have
          opened doors to new specialties: Pediatric's Neonatology and
          Developmental and Behavioral Pediatrics. We continued to upgrade our
          equipment's, a 2D Echo was acquired, seek more specialties in the
          health filed to complete our roster of medical consulants giving our
          clientele a holistic approach in their management.
        </p>
        <p>
          The 9th year of MLMC, year 2014, the Stone Center was opened. a FIRSTS
          in the whole of the Western Batangas area, being the hospital chosen
          by our urologist to house this service. A more spacious business
          office to house the increasing demands of our hospital; a new OR
          theater for our opththalmology cases, an additional wing in the
          hospital to house the chapel, waiting room and Oncology Unit were
          constructed. MLMC continues to grow and under construction is the new
          Dialysis area to accomodate our increasing number of clienteles. The
          9th year of MLMC, year 2014, the Stone Center was opened, a FIRSTS in
          the whole of the Western Batangas area, being the hospital chosen by
          our urologist to house this service. A more spacious business office
          to house the increasing demands of our hospital; a new OR theater for
          our opththalmology cases, an additional wing in the hospital to house
          the chapel, waiting room and Oncology Unit were constructed. MLMC
          continues to grow and under construction is the new Dialysis area to
          accomodate our increasing number of clienteles.
        </p>
        <p>
          Year 2015 is a milestone for the hospital, MARKING ITS 10TH year. Our
          new Dialysis Unit was opened and the FOLLOWING RENVOATED: Nursery and
          NICU with a new entrance; a bigger and better Emergency Room with a
          Minor OR and an isolation area; the Oncology Unit, Pharamcy and I.T
          Office now more spacious and a bigger Pediatric Ward. We continue to
          grow as we desire to continue to give excellence in total healthcare.
        </p>
        <p>
          For the Year 2016, MLMC continued to improve its service by providing
          a new wing both in the second and third floor to house new private
          rooms. Expansion was done at the 3rd floor to house a new conference
          room and Board room. A new MEdical Director's Office and the business
          office was renovated to become more functional and to house a bigger
          vault.
        </p>
        <p>
          On its twelfth year, 2017, MLMC has upgraded its radiologic services
          to a K-PACS system with Computed Radiography. A Treadmill was acquired
          to complete our services for our cardiac patients, and a future major
          project is the expansion of the Hearth Station. We continue to update
          our facilities and repainting's are done in the second and third
          floor. Growth is definitely in the forefront of our future.
        </p>
        <p>
          MLMC continued to open new facilities on its thirteenth year, YEar
          2018. A Drug testing Room was installed as we adhered with the
          government's desire to monitor and help eliminate drug addiction.
          Facilities for the staff's locker room was transferred to give space
          for the said room. A main investment was the upgrade of the HIMS
          server to facilitate fast and more efficient paper works including
          E-claims to our growing Philhealth transactions.
        </p>
        <p>
          For 2019, major breakthroughs were accomplished. The new east win of
          the hospital was completed that housed a bigger heart station, a more
          modern Radiology Department and Dental X-Ray. A major investment
          procured was the 32 slice CT-scan. The 14th year of MLMC indeed made
          history in our community making a mark with this new development and
          partnering with the Municipality of Lemery in various community work.
          BY the end 2019, still ongoing construction were being done for the
          improvement of our facilities.
        </p>
        <p>
          As 2020 opened we were faced with the Taal Volcano eruption that
          affected not only our institution but everybody and everything.
          Despite this, we surfaced, yet only to be faced with a bigger and
          threatening COVID 19 virus limiting our work and our lives. In spite
          of this, projects envisioned were completed as follows: NEW ICCU, a
          new facade and signage of the hospital and a more spacious nurses'
          station. Ongoing major project is the elevator to faciliate ease and
          transport of our patients. Year 2020 is a year marked by the PANDEMIC.
          It too marked the 15th year of the institution providing work and
          continuously serving the community. The Physical Therapy, Orthopedic
          and Reabilitation (PTOR) Center formally opened on December 17,2020,
          with a soft opening that started October 2020.
        </p>
      </div>
    </div>
  );
};

export default page;
