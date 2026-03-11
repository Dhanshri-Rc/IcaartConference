import Header from "../Layout/Header"
import { Outlet } from "react-router-dom";
import Navbar from "../Layout/Navbar";
import Sidebar from "../Layout/Sidebar";

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