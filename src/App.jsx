import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
// import CallForPapers from "./pages/CallForPapers"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/call-for-papers" element={<CallForPapers />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
