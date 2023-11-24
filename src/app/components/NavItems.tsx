import { MenuProps } from "antd";
import Link from "next/link";

export const items: MenuProps["items"] = [
  {
    label: <Link href="/">Home</Link>,
    key: "/home",
  },
  {
    label: <div>About</div>,
    key: "/history",
    children: [
      {
        label: <Link href="/about">History</Link>,
        key: "/about/history",
      },
      {
        label: <Link href="/about/Vission&Mission">Vission/Mission</Link>,
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
    ],
  },

  {
    label: <div>Services</div>,
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
