import React from "react";
import Sidebar1 from "../../assets/sidebar1.png";

import Sidebar2 from "../../assets/sidebar2.png";
import Sidebar3 from "../../assets/sidebar3.png";

function Institutional() {
  return (
    <div className="text-justify">
      <h1 className="text-[20px] font-bold mb-4 pt-4">
        Associations, Federations and Special Interest Groups
      </h1>
      <p className="text-black text-[13px] mb-2">
        Aware of the importance of international cooperation for the advancement
        of science, INSTICC works closely together with several other national
        and international associations and is proud to welcome them as partners
        in its activities or to arrange initiatives in cooperation with them.
      </p>
      <p className="text-black  text-[13px] mb-20">
        While several forms of partnership are welcome, INSTICC places special
        value in "Technical Co-Sponsorships", by means of which both
        associations support each other from a scientific perspective for their
        mutual benefit. Additionally, in this case, members of partner
        organizations benefit from the same registration conditions as INSTICC
        members.
      </p>

      <div>
        <h1 className="font-bold mb-6">Current Industrial Partners:</h1>
        <p className="font-bold  mb-4 ml-28 text-[15px]">
          Institute for Systems and Technologies of Information, Control and
          Communication
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src={Sidebar1} alt="Science and Technology Events, Lda" />
          <p className="text-[13px] text-black mb-2">
            {" "}
            INSTICC is the Institute for Systems and Technologies of
            Information, Control and Communication, a scientific, non-profit,
            association whose main goals are to serve the international
            scientific community by promoting, developing and disseminating
            knowledge in the areas of information systems and technologies,
            control and communication. It has organized hundreds of successful
            scientific conferences across the world since 2003, in collaboration
            with the main international institutions in its areas of interest.
            <span className="font-bold text-orange-800 text-[13px] underline mt-10">
              {" "}
              http://www.insticc.org{" "}
            </span>
          </p>
        </div>
      </div>
      <hr className="border-t-2 border-gray-900 my-2" />

      <div>
        <p className="font-bold  mb-4 ml-52 text-[15px]">
          Foundation for Intelligent Physical Agents
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src={Sidebar2} alt="Science and Technology Events, Lda" />
          <p className="text-[13px] text-black mb-2">
            {" "}
            FIPA is an IEEE Computer Society standards organization that
            promotes agent-based technology and the interoperability of its
            standards with other technologies.
            <span className="font-bold text-orange-800 text-[13px] underline mt-10">
              {" "}
              http://www.fipa.org{" "}
            </span>
          </p>
        </div>
      </div>
      <hr className="border-t-2 border-gray-900 my-2" />

      <div>
        <p className="font-bold  mb-4 ml-56 text-[15px]">
          Object Management Group
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src={Sidebar3} alt="Science and Technology Events, Lda" />
          <p className="text-[13px] text-black mb-2">
            {" "}
            The Object Management Group (OMG) is an international, open
            membership, not-for-profit computer industry standards consortium.
            Founded in 1989, OMG standards are driven by vendors, end-users,
            academic institutions and government agencies.
            <span className="font-bold text-orange-800 text-[13px] underline mt-10">
              {" "}
              http://www.omg.org{" "}
            </span>
          </p>
        </div>
      </div>
      <hr className="border-t-2 border-gray-900 my-6" />
    </div>
  );
}

export default Institutional;
