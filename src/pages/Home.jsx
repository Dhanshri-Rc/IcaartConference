import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import Header from "../components/Header";

export default function Home() {
  return (
    <div >
      <Header />
      <Navbar />

      <div className="max-w-6xl mx-auto flex">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}