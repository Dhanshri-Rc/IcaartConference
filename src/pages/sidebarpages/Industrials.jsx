import React from "react";
import Sidebar5 from "../../assets/sidebar5.png";
import Sidebar6 from "../../assets/sidebar6.png";
import Sidebar7 from "../../assets/sidebar7.png";

function Industrials() {
  return (
    <div className="text-justify">
      <h1 className="text-[20px] font-bold mb-4 pt-4">
        Industrial Partners, Sponsors and Professional Networks
      </h1>
      <p className="text-black text-[13px] mb-2">
        On behalf of the organizing committee and partners, INSTICC has a great
        pleasure{" "}
        <span className="font-bold">
          {" "}
          in inviting you to attend the 19th International Conference on Agents
          and Artificial Intelligence,{" "}
        </span>{" "}
        to be held on 23-25 February, 2027 in Valletta, Malta, which is
        integrated in a set of related events that will gather{" "}
        <span className="font-bold"> more than 1800 delegates. </span>
      </p>
      <p className="text-black  text-[13px] mb-2">
        We aim at an{" "}
        <span className="font-bold"> extensive and exciting program,</span> to
        be centered around the theme “Intelligent Agents and Artificial
        Intelligence”, spanning a broad range of topics related to this theme,
        including distributed intelligence, related to multi-agent systems and
        software platforms, distributed problem solving and distributed AI in
        general, as well as traditional AI topics such as knowledge
        representation, planning, learning, scheduling, perception amongst
        others.
      </p>

      <p className="text-black text-[13px] mb-20">
        ICAART 2027 <span className="font-bold"> will bring together </span>{" "}
        engineers, computer scientists and{" "}
        <span className="font-bold">
          {" "}
          world renowned experts and researchers,
        </span>{" "}
        providing a{" "}
        <span className="font-bold">
          {" "}
          privileged forum for showcasing your organization{" "}
        </span>{" "}
        to an audience that is highly focused on your field of work. INSTICC
        offers a set of{" "}
        <span className="font-bold">
          {" "}
          opportunities designed to support your marketing{" "}
        </span>{" "}
        objectives, including an exhibition and demonstration area, speaker
        slots, and publishing materials as advertising packs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 mb-10">
        {/* Text */}
        <div className="">
          <img src={Sidebar6} alt="Sidebar 5" />
          <img className="mt-2" src={Sidebar6} alt="Sidebar 5" />
          <img className="mt-2" src={Sidebar6} alt="Sidebar 5" />
          <img className="mt-2" src={Sidebar6} alt="Sidebar 5" />
          <img className="mt-2" src={Sidebar6} alt="Sidebar 5" />
        </div>

        {/* Image Slider */}
        <div className="flex">
          <img
            src={Sidebar5}
            alt="Conference Location"
            className=" w-[450px] "
          />
        </div>
      </div>

      <p className="text-[13px] mb-12">
        To find out more information, select one the items above, or{" "}
        <span className="text-orange-700 cursor-pointer underline">
          contact us{" "}
        </span>{" "}
      </p>

      <div>
        <h1 className="font-bold mb-6">Current Industrial Partners:</h1>
        <p className="font-bold  mb-4 ml-64 text-[15px]">Science and Technology Events, Lda</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img src={Sidebar7} alt="Science and Technology Events, Lda" />
        <p className="text-[13px] text-black mb-2">
          {" "}
          SCITEVENTS is a professional conference organizer focused on
          international events in the areas of Science and Technology. As a
          logistics partner, the main goal of SCITEVENTS is to offer its
          clockwork experience in organizing everything, from dissemination to
          submission, from reviewing to registration, from defining the
          technical program to all details of venue management, thus allowing
          the hosts of scientific events to concentrate on gathering inspiration
          for future research, enjoying the event they have conceived and taking
          full advantage of the networking opportunities it entails. 
        <span className="font-bold text-orange-800 text-[13px] underline mt-6"> http://www.scitevents.com </span>
        </p>
        </div>
      </div>
      <hr className="border-t-2 border-gray-900 my-6" />
    </div>
  );
}

export default Industrials;
