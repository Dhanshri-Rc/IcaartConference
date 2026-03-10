import Navbar from "../components/Navbar"

function Home() {
  return (
    <>
      <Navbar />
      <div className="p-10">
        <h1 className="text-4xl font-bold">
          ICAART Conference
        </h1>

        <p className="mt-4">
          International Conference on Agents and Artificial Intelligence
        </p>
      </div>
    </>
  )
}

export default Home