import Image from "next/image";
import { FaRegEnvelope } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white">
      <div className=" container py-16 grid gap-5 items-start md:grid-cols-2 lg:grid-cols-5 max-w-screen-xl m-auto">
        <div className="grid gap-y-10 lg:col-span-2">
          <a href="/">
            <Image
              src="/mlmc-logo.png"
              alt="mlmc image"
              width={280}
              height={0}
            />
          </a>
          <h3 className="text-lg lg:text-base italic font-semibold">
            Commited to Excellence in Total Healthcare
          </h3>
          <div className="text-lg lg:text-base">
            <div className="flex items-center gap-x-1">
              <FaRegEnvelope />
              Email Address
            </div>
            <a
              href="mailto:customerservice@mlmc.com.ph"
              target="blank"
              className="underline underline-offset-1 lg:text-sm"
            >
              customerservice@mlmc.com.ph
            </a>
          </div>
        </div>
        <div>
          <ul className="grid gap-y-5">
            <li>
              <span className="text-lg font-medium lg:text-base">About</span>
              <ul className="md:text-sm">
                <li>
                  {" "}
                  <a href="/about">History</a>
                </li>
                <li>
                  {" "}
                  <a href="/about/Vission&Mission">Vission/Mission</a>
                </li>
                <li>
                  <a href="/about/company-profile">Company Profile</a>
                </li>
                <li>
                  <a href="/about/officers&board-directors">
                    Officers and Board Directors
                  </a>
                </li>
                <li>
                  <a href="/about/hmo">HMO</a>
                </li>
              </ul>
            </li>
            <li className="text-lg font-medium lg:text-base">
              <a href="/hmo/approval">HMO Approval</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="grid gap-y-5">
            <li>
              <span className="text-lg font-medium lg:text-base">Services</span>
              <ul className="md:text-sm">
                <li>
                  <a href="/services">Laboratory</a>
                </li>
                <li>
                  <a href="/services/radiology">
                    Radiology & Diagnostic Procedures
                  </a>
                </li>
                <li>
                  <a href="/services">Out-Patient Department</a>
                </li>
                <li>
                  <a href="/services/others">Others</a>
                </li>
              </ul>
            </li>
            <li>
              <span className="text-lg font-medium lg:text-base">
                Online Results
              </span>
              <ul className="md:text-sm">
                <li>
                  <a href="/">Patients Portal</a>
                </li>
                <li>
                  {" "}
                  <a href="/">Doctors Portal</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <ul className="grid gap-y-5">
            <li className="text-lg font-medium lg:text-base">
              <a href="/doctors">Doctors</a>
            </li>
            <li className="text-lg font-medium lg:text-base">
              {" "}
              <a href="/news">News & Events</a>
            </li>
            <li lang="text-lg font-medium lg:text-base">
              {" "}
              <a href="/careers">Careers</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-yellow-300 flex justify-center">
        <p className=" font-normal text-blue-700 py-3 text-sm px-4">
          2023 METRO LEMERY MEDICAL CENTER ALL RIGHTS RESERVED | TERMS AND
          CONDITION | PRIVACY POLICY
        </p>
      </div>
    </footer>
  );
};

export default Footer;
