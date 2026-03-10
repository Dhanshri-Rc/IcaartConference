import Header from "../layout/Header.jsx"
import { Outlet } from "react-router-dom";

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