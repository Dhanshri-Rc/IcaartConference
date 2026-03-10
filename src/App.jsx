import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import FAQ from "./pages/FAQ.jsx";

function App() {
  return (
    <div className="bg-black min-h-screen flex justify-center">
      <div className="w-[950px] bg-white">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="faq" element={<FAQ />} />
          </Route>
        </Routes>

        <hr className="my-6 border-dashed border-gray-400 " />
        <p className="text-[12px] text-black text-end">
          © 2026 <span className="text-[#a05000]">INSTICC</span>{" "}
        </p>
      </div>
    </div>
  );
}

export default App;
