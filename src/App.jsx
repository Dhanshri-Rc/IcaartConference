import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import FAQ from "./pages/FAQ";
import Important from "./pages/sidebarpages/Important";
import Key from "./pages/sidebarpages/Key";
import Event from "./pages/sidebarpages/Event";
import Best from "./pages/sidebarpages/Best";
import Workshop from "./pages/sidebarpages/Workshop";
import Special from "./pages/sidebarpages/Special";
import Tutorials from "./pages/sidebarpages/Tutorials";
import Demo from "./pages/sidebarpages/Demo";
import Panel from "./pages/sidebarpages/Panel";
import Academic from "./pages/sidebarpages/Academic";
import Industrials from "./pages/sidebarpages/Industrials";
import Institutional from "./pages/sidebarpages/Institutional";
import Media from "./pages/sidebarpages/Media";
import Partner from "./pages/sidebarpages/Partner";
import Publication from "./pages/sidebarpages/Publication";
import Website from "./pages/sidebarpages/Website";
import Abstract from "./pages/sidebarpages/Abstract";

function App() {
  return (
    <div className="bg-black min-h-screen flex justify-center pb-4 pt-2">
      <div className="w-[980px] bg-white rounded-b-xl overflow-hidden">
        
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            {/* <Route path="login" element={<Login />} /> */}
            <Route path="faq" element={<FAQ />} />
            <Route path="important-dates" element={<Important />} />
            <Route path="keynote-lectures" element={<Key />} />
            <Route path="event-chairs" element={<Event />} />
            <Route path="best-paper-awards" element={<Best />} />
            <Route path="workshops" element={<Workshop />} />
            <Route path="special-sessions" element={<Special />} />
            <Route path="tutorials" element={<Tutorials />} />
            <Route path="demos" element={<Demo />} />
            <Route path="panels" element={<Panel />} />
            <Route path="academic-partners" element={<Academic />} />
            <Route path="industrial-partners" element={<Industrials />} />
           <Route path="institutional-partners" element={<Institutional />} />
            <Route path="media-partners" element={<Media />} />
            <Route path="partner-events" element={<Partner />} />
            <Route path="publication-partners" element={<Publication />} /> 
            <Route path="website" element={<Website />} />
            <Route path="abstracts" element={<Abstract />} />



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
