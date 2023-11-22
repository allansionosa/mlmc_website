import Image from "next/image";
import { FaUserDoctor } from "react-icons/fa6";
import { BsPerson } from "react-icons/bs";
import { LiaNotesMedicalSolid } from "react-icons/lia";

const STYLE = {
  portal:
    "flex justify-center flex-wrap sm:flex-nowrap h-24 sm:justify-between  text-indigo-100 transition-colors duration-150 bg-[#0000e6] rounded-lg focus:shadow-outline hover:bg-blue-700 sm:gap-5 sm:px-10 ",
};

export const Hero = () => (
  <div>
    <div className="relative">
      <div className="">
        <Image
          src="/hospital.jpg"
          blurDataURL={"/hospital.jpg"}
          width={0}
          placeholder="blur"
          height={0}
          sizes="100vw"
          // fill
          className="w-full h-96"
          alt="Metro Lemery Medical Center"
        />
      </div>
      <div className="absolute top-20 left-10 sm:left-60 text-white sm:top-24">
        <span className="text-2xl sm:text-6xl  font-mono text-yellow-300">
          STRIVE FOR EXCELLENCE
        </span>
        <div className=" text-[#0000e6]">
          <p className="text-lg sm:text-3xl  font-serif">
            Commited to Excellence in Total Healthcare
          </p>
          <button className="text-white font-sans font-normal sm:text-lg">
            Learn More
          </button>
        </div>
      </div>
    </div>
    <div className="absolute top-[430px] sm:top-[500px] left-2 right-2 flex justify-center font-sans gap-10 sm:mx-44">
      <button className={STYLE.portal}>
        <div className=" sm:mt-5 ">Doctor Portal</div>
        <div className=" sm:mt-5">
          <FaUserDoctor size={40} />
        </div>
      </button>
      <button className={STYLE.portal}>
        <div className=" sm:mt-5 ">Patient Portal</div>
        <div className=" sm:mt-5">
          <BsPerson size={40} />
        </div>
      </button>
      <button className={STYLE.portal}>
        <div className="mt-0 sm:mt-5 ">HMO Online Approval</div>
        <div className="mt-0 sm:mt-5">
          <LiaNotesMedicalSolid size={40} />
        </div>
      </button>
    </div>
    <div className=" mt-20 grid grid-cols-1  text-center">
      <p className="sm:text-2xl font-sans mx-5">
        WELCOME TO METRO LEMERY MEDICAL CENTER
      </p>
      <p className="text-2xl sm:text-4xl text-[#0000e6] sm:mb-5 font-mono">
        Commited to Making Lives More Comfortable
      </p>
      <p className=" font-normal px-4 sm:px-44">
        Metro Lemery Medical Center(MLMC) is a level 2 hospital in Lemery
        Batangas, establish in 2005. It's accredited by the philippine Health
        Insurance, recognized as a Center of Excellence, and offers a range of
        medical specialties. Over the years, MLMC has expanded it's facilities,
        upgraded equipment, and continued to serve the community despite
        challenges like the Taal Volcano eruption and COVID-19 pandemic.
      </p>
      <div className="flex justify-center mt-5">
        <Image
          src="/about.jpg"
          width={0}
          height={0}
          sizes="100vw"
          className=" h-full w-full sm:h-80 sm:w-[600px]"
          alt="METRO LEMERY MEDICAL CENTER IMAGE"
        />
      </div>
    </div>
  </div>
);

export default Hero;
