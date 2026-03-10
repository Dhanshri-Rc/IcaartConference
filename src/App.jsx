// import Home from "./pages/Home";

// function App() {
//   return (
//     <div className="bg-black min-h-screen flex justify-center">
//       {/* Website Container */}
//       <div className="w-[950px] bg-white">
//         <Home />
//       </div>
//     </div>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import FAQ from "./pages/FAQ";

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

      </div>
    </div>
  );
}

export default App;
