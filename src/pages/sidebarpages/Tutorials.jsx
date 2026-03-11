import React from "react";

function Tutorials() {
  return (
    <div className="text-justify">
      <h1 className="text-[20px] font-bold mb-4 pt-4">Tutorials</h1>
      <p className="text-black text-[13px] mb-6">
        The role of the tutorials is to provide a platform for a more intensive
        scientific exchange amongst researchers interested in a particular topic
        and as a meeting point for the community. Tutorials complement the
        depth-oriented technical sessions by providing participants with broad
        overviews of emerging fields. A tutorial can be scheduled for 1.5 or 3
        hours.
      </p>
      <h2 className="text-black font-bold text-[15px] mb-10">
      Tutorial proposals are accepted until: January 12, 2027
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

export default Tutorials;
