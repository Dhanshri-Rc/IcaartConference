import React from "react";

function Panel() {
  return (
    <div className="text-justify">
      <h1 className="text-[20px] font-bold mb-4 pt-4">Panel</h1>
      <p className="text-black text-[13px] mb-6">
        A panel is basically a one and a half hour to 2 hours session in which
        four to six speakers - distinguished members of the scientific and/or
        enterprise community, briefly present different perspectives/opinions on
        key issues with the goal of stimulating a lively, controversial, and
        provocative discussion. Panelists are expected to actively debate one
        another and engage the audience to help broaden understanding of the
        technologies and issues. Two types of panels are to be considered:
        Research Panels, oriented to the academic community and focused on the
        discussion of research topics; and Industrial Panels, oriented to
        promote knowledge exchanges between academia and industry.
      </p>
      <h2 className="text-black font-bold text-[15px] mb-10">
        Panel proposals are accepted until: January 12, 2027
      </h2>
      <p className="text-[13px] ">
        If you wish to propose a new Workshop please kindly fill out and submit
        this{" "}
        <span className="text-orange-700 font-bold cursor-pointer underline">
          Expression of Interest{" "}
        </span>
        form.{" "}
      </p>

      <hr className="border-t-2 border-gray-900 my-6" />
    </div>
  );
}

export default Panel;
