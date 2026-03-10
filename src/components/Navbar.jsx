import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-black border-b">
      <div className="w-full flex justify-end pr-10 pb-2 text-white text-xs gap-4 font-bold">

        <Link
          to="/"
          className="cursor-pointer border-b-2 border-transparent hover:border-white"
        >
          Home
        </Link>

        <Link
          to="/login"
          className="cursor-pointer border-b-2 border-transparent hover:border-white"
        >
          Log In
        </Link>

        <Link
          to="/contacts"
          className="cursor-pointer border-b-2 border-transparent hover:border-white"
        >
          Contacts
        </Link>

        <Link
          to="/faqs"
          className="cursor-pointer border-b-2 border-transparent hover:border-white"
        >
          FAQs
        </Link>

        <Link
      to="/"
          className="cursor-pointer border-b-2 border-transparent hover:border-white"
        >
          INSTICC Portal
        </Link>

      </div>
    </div>
  );
}