import Image from "next/image";

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
  </section>
);

export default Hero;
