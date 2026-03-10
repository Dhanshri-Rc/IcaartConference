
import Home from "./pages/Home";
import Contactpage from "./pages/Contactpage"

function App() {
  return (
    <div className="bg-black min-h-screen flex justify-center">
      
      {/* Website Container */}
      <div className="w-[950px] bg-white">
        <Home />

      </div>
       <div className="w-[950px] bg-white">
        <Contactpage />

      </div>

    </div>
  );
}

export default App;