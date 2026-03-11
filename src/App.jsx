import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <div className="bg-black min-h-screen flex justify-center pb-4">
      <div className="w-[980px] bg-white rounded-b-xl overflow-hidden">
        
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            {/* <Route path="login" element={<Login />} /> */}
            <Route path="faq" element={<FAQ />} />
          </Route>
        </Routes>

        <hr className="my-2 border-dashed border-gray-400 " />
        <p className="text-[12px] text-black text-end px-4 pb-2">
          © 2026 <span className="text-[#a05000]">INSTICC</span>{" "}
        </p>
      </div>
    </div>
  );
}

export default App;
