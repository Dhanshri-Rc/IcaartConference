import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Contact from "../components/Contact";
import Header from "../components/Header";

export default function Contactpage() {
  return (
    <div >
      <Header />
      <Navbar />

      <div className="flex">
        <Sidebar />
        <Contact />
      </div>
    </div>
  );
}