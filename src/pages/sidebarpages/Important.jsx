import React from "react";

function Important() {
  return (
    <div className="px-1 pb-4 ">
      <h1 className="font-bold text-[24px] mb-4 pt-4">Important Dates</h1>

      <h2 className="font-bold text-[17px] mb-2">Conference</h2>

      <div className="ml-4 mb-3 text-[13px]">
        <h3 className="text-[#a05000] font-bold text-[16px] ">Regular Papers</h3>
        <p>Paper Submission: <b>September 30, 2026</b></p>
        <p>Authors Notification: <b>November 27, 2026</b></p>
        <p>Camera Ready and Registration: <b>December 15, 2026</b></p>
      </div>

      <div className="ml-4 mb-3 text-[13px]">
        <h3 className="text-[#a05000] font-bold text-[16px]">
          Position Papers / Regular Papers
        </h3>
        <p>Paper Submission: <b>November 13, 2026</b></p>
        <p>Authors Notification: <b>December 22, 2026</b></p>
        <p>Camera Ready and Registration: <b>January 6, 2027</b></p>
      </div>

      <div className="ml-4 mb-3 text-[13px]">
        <h3 className="text-[#a05000] font-bold text-[16px]">Workshops</h3>
        <p>Workshop Proposal: <b>October 16, 2026</b></p>
      </div>

      <div className="ml-4 mb-3 text-[13px]">
        <h3 className="text-[#a05000] font-bold text-[16px] ">Special Sessions</h3>
        <p>Special Session Proposal: <b>October 16, 2026</b></p>
      </div>

      <div className="ml-4 mb-3 text-[13px]">
        <h3 className="text-[#a05000] font-bold text-[16px] ">Tutorials</h3>
        <p>Tutorial Proposal: <b>January 12, 2027</b></p>
      </div>

      <div className="ml-4 mb-3 text-[13px]">
        <h3 className="text-[#a05000] font-bold text-[16px]">Demos</h3>
        <p>Demo Proposal: <b>January 12, 2027</b></p>
      </div>

      <div className="ml-4 mb-3 text-[13px]">
        <h3 className="text-[#a05000] font-bold text-[16px]">Panels</h3>
        <p>Panel Proposal: <b>January 12, 2027</b></p>
      </div>

      <div className="mt-6 border-t-2 pt-3 text-[13px]">
        <p>
          Note: All dates refer to{" "}
          <span className="text-[#a05000] underline">AOE</span> time, i.e.
          "Anywhere on Earth"
        </p>
      </div>
    </div>
  );
}

export default Important;