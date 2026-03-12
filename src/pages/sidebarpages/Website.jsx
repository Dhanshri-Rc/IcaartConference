import React from "react";
import Icart1 from "../../assets/Icart1.png";
import Icart2 from "../../assets/Icart2.png";
import Icart3 from "../../assets/Icart3.png";

const conferences = [
  { year: 2026, img: Icart1 },
  { year: 2025, img: Icart2 },
  { year: 2024, img: Icart3 },
  { year: 2023, img: Icart1 },
  { year: 2022, img: Icart2 },
  { year: 2021, img: Icart3 },
  { year: 2020, img: Icart1 },
  { year: 2019, img: Icart2 },
  { year: 2018, img: Icart3 },
  { year: 2017, img: Icart1 },
  { year: 2016, img: Icart2 },
  { year: 2015, img: Icart3 },
  { year: 2014, img: Icart1 },
  { year: 2013, img: Icart2 },
  { year: 2012, img: Icart3 },
  { year: 2011, img: Icart1 },
  { year: 2010, img: Icart2 },
  { year: 2009, img: Icart3 }
];

export default function Website() {
  return (
    <div className="max-w-7xl mx-auto p-1">
      <h1 className="text-[22px] font-bold mb-6">
        Previous Conferences - Websites
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {conferences.map((conf) => (
          <div key={conf.year} className="flex flex-col gap-2">
            <h2 className="font-bold text-[14px]">ICAART {conf.year}</h2>

            <div className="w-full h-30 overflow-hidden shadow-md bg-gray-100">
              <img
                src={conf.img}
                alt={`ICAART ${conf.year}`}
                className=" object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}