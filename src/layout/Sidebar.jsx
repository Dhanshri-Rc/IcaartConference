import insticc from "../assets/sidebar1.png";
import fipa from "../assets/sidebar2.png";
import omg from "../assets/sidebar3.png";
import scitevents from "../assets/sidebar4.png";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-[200px] bg-white border-r border-gray-400 border-dashed p-3 text-[13px] mt-6">
 
      {/* INFORMATION */}
      <h1 className="font-bold text-black text-[15px]">Information</h1>
      <h3 className="font-bold text-black mx-2 text-[14px]">Conference Details</h3>
      <ul className="text-[#a05000] mx-4">
       
        <Link to="/important-dates" className="hover:underline">
          Important Dates
        </Link>
        <li>  <Link to="/event-chairs" className="hover:underline">
          Event Chairs
        </Link></li>
      
        <Link to="/keynote-lectures" className="hover:underline">
          Keynote Lectures
        </Link>
        <li>  <Link to="/best-paper-awards" className="hover:underline">
          Best Paper Awards
        </Link></li>
      </ul>

      {/* SATELLITE EVENTS */}
      <h3 className="font-bold text-black mx-2 text-[14px]">Satellite Events</h3>

      <ul className="text-[#a05000] mx-4">
        <li>  <Link to="/workshops" className="hover:underline">
          Workshops
        </Link></li>
        <li>  <Link to="/special-sessions" className="hover:underline">
          Special Sessions
        </Link></li>
        <li>  <Link to="/tutorials" className="hover:underline">
          Tutorials
        </Link></li>
        <li>  <Link to="/demos" className="hover:underline">
          Demos
        </Link></li>
        <li>  <Link to="/panels" className="hover:underline">
          Panels
        </Link></li>
      </ul>

      {/* PARTNERS */}
      <h3 className="font-bold text-black mx-2 text-[14px]">Partners</h3>

      <ul className="text-[#a05000]  mx-4">
        <li> <Link to="/academic-partners" className="hover:underline">
          Academic Partners
        </Link></li>
        <li> <Link to="/industrial-partners" className="hover:underline">
          Industrial Partners
        </Link></li>
        <li> <Link to="/institutional-partners" className="hover:underline">
          Institutional Partners
        </Link></li>
        <li> <Link to="/media-partners" className="hover:underline">
          Media Partners
        </Link></li>
        <li> <Link to="/partner-events" className="hover:underline">
          Partner Events
        </Link></li>
        <li> <Link to="/publication-partners" className="hover:underline">
          Publication Partners
        </Link></li>
      </ul>

      {/* PREVIOUS CONFERENCES */}
      <h3 className="font-bold text-black mx-2 text-[14px]">Previous Conferences</h3>

      <ul className="text-[#a05000] mb-16 mx-4">
        <li>Websites</li>
        <li>Abstracts</li>
        <li>Invited Speakers</li>
        <li>Awards</li>
        <li>Books Published</li>
      </ul>

      {/* SPONSORED */}
      <p className="font-semibold text-center mb-6 text-[14px]">Sponsored by:</p>
      <img src={insticc} className="mx-auto mb-6 w-[140px]" />

      {/* MEMBER */}
      <p className="font-semibold text-center mb-6 text-[14px]">INSTICC is Member of:</p>

      <img src={fipa} className="mx-auto mb-6 w-[80px]" />
      <img src={omg} className="mx-auto mb-6 w-[120px]" />

      {/* LOGISTICS */}
      <p className="font-semibold text-center mb-6 text-[14px]">Logistics:</p>
      <img src={scitevents} className="mx-auto w-[150px] mb-[650px]" />

    </div>


  );
}