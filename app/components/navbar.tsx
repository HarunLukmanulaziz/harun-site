const Navbar = () => {
  return (
    <div className="navbar flex items-center  justify-between ">
      <div className="logo">
        <h1 className="text-3xl font-bold bg-white rounded-xs p-1 md:text-[#000] text-black md:bg-transparent ">
          Portofolio.
        </h1>
      </div>

      <ul className="menu  flex z-40 items-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0  md:opacity-100 bg-white/15 backdrop-blur-md p-4 rounded-b-xl transition-all md:transition-none md:text-[#121212] ">
        <li className="">
          <a
            href="#home"
            className="font-semibold sm:text-1l text-base hover:text-[#eee] "
          >
            <p className="bg-[#eee] hover:bg-[#121212] px-4 py-2 rounded-xl">
              Home
            </p>
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="font-semibold sm:text-1l text-base hover:text-[#eee] "
          >
            <p className="bg-[#eee] hover:bg-[#121212] px-4 py-2 rounded-xl">
              About
            </p>
          </a>
        </li>
        <li>
          <a
            href="#project"
            className="font-semibold sm:text-1l text-base hover:text-[#eee] "
          >
            <p className="bg-[#eee] hover:bg-[#121212] px-4 py-2 rounded-xl">
              Project
            </p>
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="font-semibold sm:text-1l text-base hover:text-[#eee] "
          >
            <p className="bg-[#eee] hover:bg-[#121212] px-4 py-2 rounded-xl">
              Contact
            </p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
