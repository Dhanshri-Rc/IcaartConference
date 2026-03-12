import React from "react";
import  Home2 from "../../assets/home2.png";
import  Home3 from "../../assets/home3.png";



function Publication() {
  return (
    <div className="text-justify">
      <h1 className="text-[20px] font-bold mb-4 pt-4">Publication Partners</h1>
      <p className="text-black text-[13px] mb-20">
        Publishers interested in an agreement with ICAART, concerning the
        publication of the proceedings or the post-publication of selected
        papers in journals or books, can contact the event secretariat to
        suggest a partnership or propose a publication service. ICAART is ready
        to collaborate with publishers that provide a wide and prestigious
        dissemination of the scientific and technical work presented at the
        event, including facilitating the presence of those publishers at the
        venue.
      </p>

      <div>
        <p className="font-bold  mb-4 ml-28 text-[15px]">
          Science and Technology Publications, Lda
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src={Home2} alt="Science and Technology Events, Lda" />
          <p className="text-[13px] text-black mb-2">
            {" "}
            SCITEPRESS publishes a wide variety of high quality scientific and
            technical publications in various areas of knowledge, mainly in the
            form of conference and workshop proceedings, tutorials, journals,
            e-books and on-line courses. SCITEPRESS focuses on empowering each
            researcher with the keys to have her/his work recognized worldwide.
            SCITEPRESS DLIB publications are equipped with ISBN, ISSN, DOI as
            appropriate, indexed in Scopus; EI Engineering Index; Google
            Scholar; DBLP; Semantic Scholar, Microsoft Academic and also
            submitted for the inclusion in ISI Proceedings.
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
          Springer Nature Computer Science
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src={Home3} alt="Science and Technology Events, Lda" />
          <p className="text-[13px] text-black mb-2">
            {" "}
            A short list of best papers will be invited for a post-conference
            special issue of the Springer Nature Computer Science Journal.
            <span className="font-bold text-orange-800 text-[13px] underline mt-10">
              {" "}
             https://www.springer.com/journal/42979/{" "}
            </span>
          </p>
        </div>
      </div>
      <hr className="border-t-2 border-gray-900 my-2" />

     
    </div>
  );
}

export default Publication;
