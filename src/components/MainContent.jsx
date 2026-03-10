import { useState, useEffect } from "react";

import homeimg from "../assets/homeimg.png";
import homeimg1 from "../assets/homeimg1.png";
import homeimg2 from "../assets/homeimg2.png";

import home2 from "../assets/home2.png";
import home3 from "../assets/home3.png";
import home4 from "../assets/home4.png";
import home5 from "../assets/home5.png";
import home6 from "../assets/home6.png";
import home7 from "../assets/home7.png";
import home8 from "../assets/home8.png";
import home9 from "../assets/home9.png";

export default function MainContent() {
  // Image slider array
  const images = [homeimg, homeimg1, homeimg2];

  const [currentImage, setCurrentImage] = useState(0);

  // Change image every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-1 px-[1px] py-6 text-[12px]">
      {/* Top Notice */}
      <div className="text-center mb-12 font-medium">
        <p>
          ICAART 2027 will be held in conjunction with{" "}
          <span className="text-orange-600 font-semibold">ICISSP 2027</span> and{" "}
          <span className="text-orange-600 font-semibold">PHOTOPTICS 2027</span>
          .
        </p>

        <p>
          Registration to ICAART allows free access to the ICISSP and PHOTOPTICS
          conferences (as a non-speaker).
        </p>
      </div>

      {/* Main Description + Image */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start mb-[220px]">
        {/* Text */}
        <div className="text-black text-justify">
          <p>
            The purpose of the International Conference on Agents and Artificial
            Intelligence is to bring together researchers, engineers and
            practitioners interested in the theory and applications in the areas
            of Agents and Artificial Intelligence, covering both applications
            and current (advanced) research work. The scientific goal is to
            stimulate them in developing new ideas for further progress. On one
            side it focuses on Agents, Multi-Agent Systems and Software
            Platforms, and also Distributed Problem Solving. On the other side
            it focuses on Artificial Intelligence, Knowledge Representation,
            Planning, Learning, Scheduling, Perception. Applications are in both
            areas. They are using Natural Language Processing (NLP), Large
            Language Models (LLMs), Legal Technologies and Quantum Computing.
          </p>
        </div>

        {/* Image Slider */}
        <div className="flex justify-center">
          <img
            src={images[currentImage]}
            alt="Conference Location"
            className="shadow-lg rounded w-[320px] transition-opacity duration-700 ease-in-out"
          />
        </div>
      </div>

      <hr className="my-6 border-dashed border-gray-400" />

      {/* Publications */}
      <h2 className="font-bold text-md mb-4">Publications:</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 mb-[100px]">
        <div>
          <img src={home2} className="h-30 mb-4" />

          <p className="text-black text-[10px]">
            All papers presented at the conference venue <br />
            will be available at the
            <span className="text-orange-600">
              {" "}
              SCITEPRESS Digital Library <br />
            </span>
            <span className="italic text-xs">
              (consult SCITEPRESS Ethics of Publication)
            </span>
          </p>
        </div>

        <div>
          <img src={home3} className="h-30 mb-4" />

          <p className="text-black text-[10px]">
            A short list of best papers will be invited <br />
            for a post-conference special issue of the <br />
            <span className="text-orange-600">
              Springer Nature Computer Science Journal
            </span>
          </p>
        </div>
      </div>

      {/* Indexing */}
      <h2 className="font-bold text-md mb-4">
        Proceedings will be submitted for evaluation for indexing by:
      </h2>

      <div className="flex flex-wrap items-center gap-6 mb-[550px]">
        <img src={home4} className="h-10" />
        <img src={home5} className="h-12" />
        <img src={home6} className="h-12" />
        <img src={home7} className="h-10" />
        <img src={home8} className="h-10" />

        <div>
          <img src={home9} className="h-8" />
          <p className="text-[9px] text-[#a05000]">
            Web of Science/Conference Proceedings Citation Index
          </p>
        </div>
      </div>
    </div>
  );
}
