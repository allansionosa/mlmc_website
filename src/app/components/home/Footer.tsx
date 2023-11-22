import Image from "next/image";
const Footer = () => {
  return (
    <div>
      <div className=" bg-blue-800 text-white sm:flex justify-center  gap-20 py-10 flex-1 text-center">
        <div className="font-sans grid grid-cols-1 justify-items-center">
          <Image
            src="/logo.jpg"
            alt="mlmc image"
            width={0}
            height={0}
            sizes="100vw"
            className=" w-20  shrink-0"
          />

          <p>Commited to Excellence in Total Healthcare</p>
          <p>Email Address</p>
          <p>customerservice@mlmc.com.ph</p>
        </div>
        <div>
          <p>About MLMC</p>
          <ul className=" font-light">
            <li>History</li>
            <li>Vission/Mission</li>
            <li>Company Profile</li>
            <li>Officers and Board Directors</li>
            <li>HMO</li>
          </ul>
        </div>
        <div>
          <p>HMO Approval</p>
          <ul className=" font-light">
            <li>Services</li>
            <li>Online Results</li>
            <li>Patients Portal</li>
            <li>Doctors Portal</li>
          </ul>
        </div>
        <div>
          <p>Doctors</p>
          <ul className=" font-light">
            <li>News & Events</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>
      <div className="bg-yellow-400 flex justify-center">
        <p className=" font-normal text-blue-700 py-3 text-sm px-4">
          2023 METRO LEMERY MEDICAL CENTER ALL RIGHTS RESERVED | TERMS AND
          CONDITION | PRIVACY POLICY
        </p>
      </div>
    </div>
  );
};

export default Footer;
