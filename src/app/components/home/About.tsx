import React from "react";
import YouTubePlayer from "../YouTubePlayer";

const About = () => {
  return (
    <section className="my-20 text-center container max-w-screen-lg m-auto">
      <div>
        <h3 className=" font-semibold ">
          WELCOME TO METRO LEMERY MEDICAL CENTER
        </h3>
        <h2 className="text-2xl sm:text-4xl text-[#0000e6] sm:mb-5 font-corsiva">
          Commited to Making Lives More Comfortable
        </h2>
        <p className=" font-normal px-4  text-lg">
          Metro Lemery Medical Center(MLMC) is a level 2 hospital in Lemery
          Batangas, establish in 2005. It's accredited by the philippine Health
          Insurance, recognized as a Center of Excellence, and offers a range of
          medical specialties. Over the years, MLMC has expanded it's
          facilities, upgraded equipment, and continued to serve the community
          despite challenges like the Taal Volcano eruption and COVID-19
          pandemic.
        </p>
        <div className="flex justify-center mt-5">
          <YouTubePlayer videoId="TJzhCIttF0U" />
        </div>
      </div>
    </section>
  );
};

export default About;
