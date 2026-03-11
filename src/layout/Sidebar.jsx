import insticc from "../assets/sidebar1.png";
import fipa from "../assets/sidebar2.png";
import omg from "../assets/sidebar3.png";
import scitevents from "../assets/sidebar4.png";

export default function Sidebar() {
  return (
    <div className="w-[200px] bg-white border-r border-gray-400 border-dashed p-4 text-[12px]">
 
      {/* INFORMATION */}
      <h1 className="font-bold text-black ">Information</h1>
      <h3 className="font-bold text-black mx-2">Conference Details</h3>
      <ul className="text-[#a05000] mx-4">
       
        <li>Important Dates</li>
        <li>Event Chairs</li>
        <li>Keynote Lectures</li>
        <li>Best Paper Awards</li>
      </ul>

      {/* SATELLITE EVENTS */}
      <h3 className="font-bold text-black mx-2">Satellite Events</h3>

      <ul className="text-[#a05000] mx-4">
        <li>Workshops</li>
        <li>Special Sessions</li>
        <li>Tutorials</li>
        <li>Demos</li>
        <li>Panels</li>
      </ul>

      {/* PARTNERS */}
      <h3 className="font-bold text-black mx-2">Partners</h3>

      <ul className="text-[#a05000]  mx-4">
        <li>Academic Partners</li>
        <li>Industrial Partners</li>
        <li>Institutional Partners</li>
        <li>Media Partners</li>
        <li>Partner Events</li>
        <li>Publication Partners</li>
      </ul>

      {/* PREVIOUS CONFERENCES */}
      <h3 className="font-bold text-black mx-2">Previous Conferences</h3>

      <ul className="text-[#e67505]  mb-16 mx-4">
        <li>Websites</li>
        <li>Abstracts</li>
        <li>Invited Speakers</li>
        <li>Awards</li>
        <li>Books Published</li>
      </ul>

      {/* SPONSORED */}
      <p className="font-semibold text-center mb-6">Sponsored by:</p>
      <img src={insticc} className="mx-auto mb-6 w-[140px]" />

      {/* MEMBER */}
      <p className="font-semibold text-center mb-6">INSTICC is Member of:</p>

      <img src={fipa} className="mx-auto mb-6 w-[80px]" />
      <img src={omg} className="mx-auto mb-6 w-[120px]" />

      {/* LOGISTICS */}
      <p className="font-semibold text-center mb-6">Logistics:</p>
      <img src={scitevents} className="mx-auto w-[150px] mb-[650px]" />

    </div>


  );
}