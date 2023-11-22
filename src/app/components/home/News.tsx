import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { news } from "../NewsList";

export const News = () => {
  const [selectedNews, setselectedNews] = useState<{
    id: number;
    src: string;
    alt: string;
    title: string;
    description: string;
  } | null>(null);
  const handleClick = (id: number) => {
    const selected = news.find((list) => list.id === id);
    setselectedNews(selected ? selected : null);
  };
  return (
    <div className="px-5 mt-10">
      <div className="flex flex-col text-center mb-3">
        <div>BETTER INFORMATION BETTER HEALTH</div>
        <div className="text-[#0000e6] text-2xl">News & Events</div>
      </div>

      <div className="md:grid grid-cols-2 ">
        <div>
          <div>
            <Image
              src="/news.jpg"
              alt="METRO LEMERY MEDICAL CENTER"
              width={0}
              height={0}
              sizes="100vw"
              className="h-96 w-full object-contain "
            />
          </div>

          <div className="pt-3 text-gray-400">December 20, 1873</div>
          <div className="text-3xl">Replacement Surgery Procedure</div>
          <p className=" font-normal">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sed
            exercitationem eligendi, quis in, mollitia explicabo consequatur
            veritatis porro magni aliquam veniam commodi excepturi amet nihil
            neque quas maxime dignissimos?
          </p>
          <Link href="/news" className="text-blue-600">
            Read more
          </Link>
        </div>

        <div>
          <div className="grid mt-5 max-w-full m-auto md:grid-cols-1  grid-cols-2  gap-5 ">
            {news.map((list) => (
              <div key={list.id} onClick={() => handleClick(list.id)}>
                <Image
                  src={list.src}
                  alt={list.alt}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className=" h-full w-full object-contain md:hidden"
                />
                <div className="hidden md:block ">
                  <div className="flex flex-row gap-5">
                    <Image
                      src={list.src}
                      alt={list.alt}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-20 h-20 object-contain"
                    />
                    <div className=" just">
                      <div className="text-2xl">{list.title}</div>
                      <p className="font-normal  w-64 truncate">
                        {list.description}
                      </p>
                      <Link href="/news" className="text-blue-600">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 md:hidden">
            {selectedNews && (
              <ul className="text-center">
                <li className="text-2xl">{selectedNews.title}</li>
                <p className="font-normal">{selectedNews.description}</p>
                <Link href="/news" className="text-blue-600">
                  Read more
                </Link>
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="text-center">
        <Link
          href="/news"
          className="inline-flex items-center h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-blue-700 rounded-lg focus:shadow-outline hover:bg-blue-800"
        >
          View All
        </Link>
      </div>
    </div>
  );
};
