import Header from "../layout/Header"
import { Outlet } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";

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