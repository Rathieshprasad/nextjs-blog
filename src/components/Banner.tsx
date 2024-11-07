
function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl">Rathiesh's Daily Blog</h1>
        <h2 className="mt-5 md:mt-0">
          Welcome to{" "}
          <span className="underline decoration-4 decoration-[#f7ab0a]">
            {" "}
            Every Developers{" "}
          </span>{" "}
          favourite blog in the devosphere
        </h2>
      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        My Projects | Daily DSA Practise | Learnings and Lot more !
      </p>
    </div>
  );
}

export default Banner