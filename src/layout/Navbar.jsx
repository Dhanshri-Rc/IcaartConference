import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-black border-b">
      <div className="w-full flex justify-end pr-10 pb-2 text-white text-xs gap-6 font-semibold">

        <Link to="/" className="border-b-2 border-transparent hover:border-white">
          Home
        </Link>

        <Link to="/login" className="border-b-2 border-transparent hover:border-white">
          Log In
        </Link>

        <Link to="/contact" className="border-b-2 border-transparent hover:border-white">
          Contacts
        </Link>

        <Link to="/faq" className="border-b-2 border-transparent hover:border-white">
          FAQs
        </Link>

        <a
          href="https://www.insticc.org"
          target="_blank"
          className="border-b-2 border-transparent hover:border-white"
        >
          INSTICC Portal
        </a>

      </div>
    </div>
  );
}