export default function Navbar() {
  return (
    <div className="bg-black border-b">
    <div className="w-full flex justify-end pr-10 pb-2 text-white text-xs gap- font-semibold">
        <a className="hover:text-yellow-400 cursor-pointer">Home</a>
        <a className="hover:text-yellow-400 cursor-pointer">Log In</a>
        <a className="hover:text-yellow-400 cursor-pointer">Contacts</a>
        <a className="hover:text-border-white cursor-pointer">FAQs</a>
        <a className=" cursor-pointer">INSTICC Portal</a>
      </div>
    </div>
  );
}