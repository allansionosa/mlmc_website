import Image from "next/image";

const STYLE = {
  portal:
    "flex justify-center flex-wrap sm:flex-nowrap h-24 sm:justify-between  text-indigo-100 transition-colors duration-150 bg-[#0000e6] rounded-lg focus:shadow-outline hover:bg-blue-700 sm:gap-5 sm:px-10 ",
};

export const Hero = () => (
  <section>
    <div className="bg-slate-200 h-[644px] md:h-[430px] lg:h-[630px] w-full relative">
      <Image
        src="/hospital.jpg"
        blurDataURL={"/hospital.jpg"}
        placeholder="blur"
        fill
        sizes="100vw"
        loading="lazy"
        className="absolute w-full h-full object-cover bg-transparent"
        alt="Metro Lemery Medical Center"
      />
      <div className="absolute bottom-0 right-0 left-0 top-0 overlay md:px-12">
        <div className="container grid items-center content-center h-full w-full text-center text-white md:text-left">
          <h2 className=" text-yellow-400 uppercase font-semibold tracking-widest text-xl drop-shadow lg:text-2xl">
            STRIVE FOR EXCELLENCE
          </h2>
          <h1 className=" md:text-5xl lg:text-6xl  font-medium lg:w-[60%] font-corsiva text-blue-600 py-8 ">
            Committed to Excellence in Total Healthcare
          </h1>
          <a href="/">Learn more</a>
        </div>
      </div>
    </div>
    {/* <div className="absolute top-[430px] sm:top-[500px] left-2 right-2 flex justify-center font-sans gap-10 sm:mx-44">
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
    </div> */}
  </section>
);

export default Hero;
