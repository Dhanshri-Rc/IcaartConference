export default function Navbar() {
  return (
    <div className="bg-black border-b">
      <div className="w-full flex justify-end pr-10 pb-2 text-white text-xs gap-4 font-bold">

        <a
          href="/"
          className="cursor-pointer border-b-2 border-transparent hover:border-white"
        >
          Home
        </a>

        <a
          href="/login.html"
          className="cursor-pointer border-b-2 border-transparent hover:border-white"
        >
          Log In
        </a>

        <a
          href="/contacts.html"
          className="cursor-pointer border-b-2 border-transparent hover:border-white"
        >
          Contacts
        </a>

        <a
          href="/faqs.html"
          className="cursor-pointer border-b-2 border-transparent hover:border-white"
        >
          FAQs
        </a>

        <a
          href="https://www.insticc.org"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer border-b-2 border-transparent hover:border-white"
        >
          INSTICC Portal
        </a>

      </div>
    </div>
  );
}