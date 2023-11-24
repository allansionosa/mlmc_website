"use client";
import BreadCrumb from "@/app/lib/BreadCrumb";
import { Empty, Input, Pagination, Select } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { doctorsList } from "./DoctorsList";

interface DoctorsList {
  id: number;
  src: string;
  alt: string;
  name: string;
  specialty: string;
  schedule: string;
  sec_name: string;
  sec_number: string;
}
const PAGE_SIZE = 3;
const page = () => {
  const pageTitle = `Doctors`;
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<DoctorsList[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filterBySpecialty, setFilterBySpecialty] = useState<string | null>(
    null
  );

  const indexOfLastItem = currentPage * PAGE_SIZE;
  const indexOfFirstItem = indexOfLastItem - PAGE_SIZE;
  const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem);

  const getFilteredData = (data: DoctorsList[], specialty: string | null) => {
    if (specialty === null) {
      return data;
    }
    if (specialty.includes("pediatrics")) {
      return data.filter(
        (item) =>
          item.specialty === "PEDIATRICS" ||
          item.specialty === "OPHTHALMOLOGIST - PEDIATRICS"
      );
    }
    if (specialty.includes("ophthalmologist")) {
      return data.filter(
        (item) =>
          item.specialty === "OPHTHALMOLOGIST - PEDIATRICS" ||
          item.specialty === "OPHTHALMOLOGIST"
      );
    }
    if (
      specialty.includes("internal_medicine") ||
      specialty.includes("pulmonologist")
    ) {
      return data.filter(
        (item) => item.specialty === "INTERNAL MEDICINE - PULMONOLOGIST"
      );
    }

    return data.filter((item) => item.specialty === specialty);
  };
  const newFilteredData = getFilteredData(currentItems, filterBySpecialty);

  const handleChangeType = (value: {
    value: string;
    label: React.ReactNode;
  }) => {
    setFilterBySpecialty(value ? value.value : null);
  };

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = event.target;
    setSearch(value);
  };

  useEffect(() => {
    const filteredResults = doctorsList.filter((item) =>
      search.toLowerCase() === ""
        ? true
        : item.name.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredResults);
  }, [search, doctorsList]);

  return (
    <div className="overflow-hidden">
      <div>
        <BreadCrumb items={[{ title: "Doctors" }]} title={pageTitle} />
      </div>
      <section className="my-28 container max-w-screen-lg  m-auto px-5">
        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 mb-10">
          <Input
            value={search}
            placeholder="Search for Doctor's Name"
            size="large"
            allowClear
            onChange={onChange}
            className="lg:col-span-2"
          />
          <Select
            placeholder="Specialization"
            labelInValue
            onChange={handleChangeType}
            size="large"
            allowClear
            options={[
              { value: "internal_medicine", label: "Internal Medicine" },
              { value: "pulmonologist", label: " Pulmonologist" },
              { value: "ophthalmologist", label: " Ophthalmologist" },
              { value: "pediatrics", label: " Pediatrics" },
            ]}
          />
        </div>
        <div className="grid gap-y-10 md:gap-y-5">
          {newFilteredData.map((item) => (
            <div key={item.id}>
              <div className="rounded-md overflow-hidden grid md:grid-cols-3 lg:grid-cols-5">
                <div className="w-full h-52 bg-gray-50 relative md:h-full  grid justify-center items-center">
                  <Image
                    alt={item.alt}
                    src={item.src}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{
                      objectFit: "fill",
                      objectPosition: "center",
                    }}
                    quality={50}
                  />
                </div>
                <div className="py-5 px-4 grid gap-5 md:col-span-2 lg:col-span-4 lg:grid-cols-2 bg-gray-200">
                  <div className="flex flex-col gap-y-1 lg:gap-2">
                    <h2 className="text-xl font-medium md:text-lg">
                      {item.name}
                    </h2>
                    <div className="md:text-sm">
                      <label className="block text-slate-600 ">Specialty</label>
                      <span className="uppercase font-medium ">
                        {item.specialty}
                      </span>
                    </div>
                    <div className="md:text-sm">
                      <label className="block text-slate-600">Schedule</label>
                      <span className="uppercase font-medium">
                        {item.schedule}
                      </span>
                    </div>
                  </div>
                  <div className="md:text-sm">
                    <h3>Secretary</h3>
                    <ul>
                      <li className="text-slate-600">
                        Name:
                        <span className="uppercase font-medium text-black">
                          {item.sec_name}
                        </span>
                      </li>
                      <li className="text-slate-600">
                        Contact No.:
                        <span className="uppercase font-medium text-black">
                          {item.sec_number}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-10 flex justify-center">
          <Pagination
            current={currentPage}
            pageSize={PAGE_SIZE}
            total={searchResults.length}
            onChange={(page) => setCurrentPage(page)}
          />
        </div>
      </section>
    </div>
  );
};
export default page;
