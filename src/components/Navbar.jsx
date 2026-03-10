import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="bg-blue-900 text-white p-4">
      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/call-for-papers">Call for Papers</Link>
        <Link to="/program">Program</Link>
        <Link to="/venue">Venue</Link>
      </div>
    </nav>
  )
}

export default Navbar