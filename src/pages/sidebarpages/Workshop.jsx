import React from "react";

function Workshop() {
  return (
    <div className="text-justify">
      <h1 className="text-[20px] font-bold mb-4 pt-4">Workshops</h1>
      <p className="text-black text-[13px] mb-3">
        The purpose of workshops is to provide a more interactive and focused
        platform for presenting and discussing new and emerging ideas. The
        format of paper presentations may include oral presentations, poster
        presentations, keynote lectures and panels. Depending on the number of
        presentations, workshops can be scheduled for 1 day or 2 days. All
        accepted papers will be published in a special section of the conference
        proceedings book, under an ISBN reference, and on digital support. All
        papers presented at the conference venue will be available at the{" "}
        <span className="text-orange-700 cursor-pointer hover:underline">
          {" "}
          SCITEPRESS Digital Library
        </span>
        . SCITEPRESS is a member of <span className="text-orange-700 cursor-pointer hover:underline">CrossRef</span> and every paper is given a DOI
        (Digital Object Identifier). The proceedings are submitted for
        indexation by SCOPUS, Google Scholar, DBLP, Semantic Scholar, EI and Web
        of Science / Conference Proceedings Citation Index.
      </p>
      <h2 className="text-black font-bold text-[15px] mb-10">
        Workshop proposals are accepted until: October 16, 2026
      </h2>
      <p className="text-[13px]">
        If you wish to propose a new Workshop please kindly fill out and submit
        this{" "}
        <span className="text-orange-700 font-bold cursor-pointer underline">
          Expression of Interest{" "}
        </span>
        form.{" "}
      </p>
    </div>
  );
}

export default Workshop;
