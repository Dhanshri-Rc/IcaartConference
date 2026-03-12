import React from "react";
import Women1 from "../../assets/women1.png";

function Previous() {
  return (
    <div className="previous-container">
      <h1 className="title font-bold text-[22px] mb-6">
        Previous Invited Speakers
      </h1>

      <p className="subtitle mx-10 mb-6 text-sm ">
        The researchers below were distinguished invited speakers at previous
        ICAART conferences.
        <br />
        We are indebted to them for their contribution to heighten the
        conference level.
      </p>

      <div className="years text-orange-800 text-xs mx-12 mb-4">
        2026 | 2025 | 2024 | 2023 | 2022 | 2021 | 2020 | 2019 | 2018 | 2017 |
        2016 | 2015 | 2014 | 2013 | 2012 | 2011 | 2010 | 2009
      </div>

      {/* 2026 Section */}
      <h2 className="year-heading font-bold text-orange-800 text-sm mb-4">
        2026
      </h2>

      <div className="speaker">
        <img src={Women1} alt="sarita" className="h-14 w-14" />
        <div className="text-sm font-bold">
          <h3>
            Smarter Together? Assisting Humans in a World of Intelligent Agents
          </h3>
          <p>
            {" "}
            <span className="hover:underline text-orange-800 font-bold">
              Sarit Kraus
            </span>
            , Bar-Ilan University, Israel
          </p>
        </div>
      </div>

      <div className="speaker">
        {/* <img src={} alt="frank" /> */}
        <div className="text-sm mb-4">
          <h3>
            Loosely Coupled Architectures for Neuro-symbolic Systems: Combining
            Learning and Reasoning
          </h3>
          <p>
            {" "}
            <span className="hover:underline text-orange-800 font-bold">
              Frank van Harmelen
            </span>
            , Vrije Universiteit Amsterdam, Netherlands
          </p>
        </div>
      </div>

      <div className="speaker">
        {/* <img src={Luc} alt="luc" /> */}
        <div className="text-sm mb-4">
          <h3>
            Alter3’s Inner Voices: Identity and Self-Awareness in Embodied AI
          </h3>
          <p>
            Luc Steels, Free University of Brussels, VUB AI Lab, Brussels,
            Belgium
          </p>
        </div>
      </div>

      <hr />

      {/* 2025 Section */}
      {/* <h2 className="year-heading">2025</h2> */}

      <div className="speaker">
        {/* <img src={Pavan} alt="pavan" /> */}
        {/* <div>
          <h3>
            How India Navigates Between Binding Government Regulation and
            Self-Regulation
          </h3>
          <p>
            Pavan Duggal, Advocate, Supreme Court of India, Chairman,
            International Commission on Cyber Security Law India, and Chief
            Executive, Artificial Intelligence Law Hub, India
          </p>
        </div> */}
      </div>

      <div className="speaker">
        {/* <img src={Inge} alt="inge" /> */}
        {/* <div>
          <h3>Rethinking our Defensive Strategy</h3>
          <p>
            Inge Bryan, Chair of the Dutch Institute for Vulnerability
            Disclosure, Netherlands
          </p>
        </div> */}
      </div>

      <div className="speaker">
        {/* <img src={Paul} alt="paul" /> */}
        {/* <div>
          <h3>
            Rules for AI, Governability and the Common Interest of States to
            Create an International Artificial Intelligence Agency
          </h3>
          <p>
            Paul Nemitz, Principal Adviser European Commission, Belgium
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Previous;
