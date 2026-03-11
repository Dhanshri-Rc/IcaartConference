import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-black border-b ">
      <div className="w-full flex justify-end pr-4 text-white text-[13px] gap-4 font-bold">

        <Link to="/" className="border-b-2 border-transparent hover:border-white">
          Home
        </Link>

        {/* <Link to="/login" className="border-b-2 border-transparent hover:border-white">
          Log In
        </Link> */}
         <a
          href="https://www.insticc.org/Primoris/Default.aspx/"
          target="_blank"
          className="border-b-2 border-transparent hover:border-white"
        >
          Log In
        </a>

        <Link to="/contact" className="border-b-2 border-transparent hover:border-white">
          Contacts
        </Link>

        <Link to="/faq" className="border-b-2 border-transparent hover:border-white">
          FAQs
        </Link>

        <a
          href="https://portal.insticc.org/"
          target="_blank"
          className="border-b-2 border-transparent hover:border-white"
        >
          INSTICC Portal
        </a>

      </div>
    </div>
  );
}