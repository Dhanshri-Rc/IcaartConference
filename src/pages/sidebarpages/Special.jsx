import React from "react";

function Special() {
  return (
    <div className="text-justify">
      <h1 className="text-[20px] font-bold mb-4 pt-4">Special Sessions</h1>
      <p className="text-black text-[13px] mb-6">
        Special sessions are very small and specialized events to be held during
        the conference as a set of oral and poster presentations that are highly
        specialized in some particular theme or consisting of the works of some
        particular international project. The goal of special sessions (minimum
        4 papers; maximum 9) is to provide a focused discussion on innovative
        topics. All accepted papers will be published in a special section of
        the conference proceedings book, under an ISBN reference, and on digital
        support. All papers presented at the conference venue will be available
        at the{" "}
        <span className="text-orange-700 cursor-pointer hover:underline">
          {" "}
          SCITEPRESS Digital Library
        </span>
        . SCITEPRESS is a member of{" "}
        <span className="text-orange-700 cursor-pointer hover:underline">
          CrossRef
        </span>{" "}
        and every paper is given a DOI (Digital Object Identifier). The
        proceedings are submitted for indexation by SCOPUS, Google Scholar,
        DBLP, Semantic Scholar, EI and Web of Science / Conference Proceedings
        Citation Index.
      </p>
      <h2 className="text-black font-bold text-[15px] mb-10">
      Symposia proposals are accepted until: October 16, 2026
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

export default Special;
