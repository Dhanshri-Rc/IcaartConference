import React from "react";

function Demo() {
  return (
    <div className="text-justify">
      <h1 className="text-[20px] font-bold mb-4 pt-4">Demos</h1>
      <p className="text-black text-[13px] mb-3">
        {" "}
        <span className="font-bold"> Demonstrations </span>
        provide researchers and practitioners with an exciting and interactive
        opportunity to present their systems, artifacts and/or research
        prototypes, either at a regular session or at the technical exhibition.
        In any case, it is required to avoid a commercial format, even if the
        demo consists of presenting a business product or service. Instead, the
        presentation should focus on technical aspects. <br /> Any written
        support materials may be distributed locally but not published in the
        proceedings. Authors who already present a paper at the conference may
        apply for a demonstration, to complement but not to replace their paper
        presentation. Demonstrations can also be made by sponsor companies or as
        a mixed initiative involving researchers and industrial partners. <br />
        Demonstrations are based on an informal setting that encourages
        presenters and participants to engage in discussions about the presented
        work. This is an opportunity for the participants to disseminate
        practical results of their research and to network with other applied
        researchers or business partners.
      </p>
      <h2 className="text-black font-bold text-[15px] mb-6">
        Demonstration proposals are accepted until: January 12, 2027
      </h2>

      <p className="text-black text-[13px] mb-2">
        Concerning the format of the demo, we can accommodate it either as a
        demonstration in a booth (physical area of 4 sq. meter, with a table and
        2 chairs) at the exhibition area, as a poster or as a 20 min oral
        presentation at a session especially set up for demonstrations. It is
        also possible to organize the presentation of the same demo in more than
        one format. Please contact the event secretariat.
      </p>

     <p className="text-black text-[13px] ">
       In the Expression of Interest Form you should specify:
      </p>

      <ul className="list-[square] ml-6 mb-10 text-black text-[13px]">
        <li>What exactly will be demonstrated: a system, an artifact, a research prototype, other?</li>
        <li>What is the theoretical background and application possibilities of the object of demonstration?</li>
        <li>What exactly will a participant learn from the demonstration?</li>
      </ul>

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

export default Demo;
