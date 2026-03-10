import Header from "../Layout/Header.jsx"
import { Outlet } from "react-router-dom";
import Navbar from "../Layout/Navbar.jsx";
import Sidebar from "../Layout/Sidebar.jsx";

export default function Layout() {
  return (
    <div>
      <Header />
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}