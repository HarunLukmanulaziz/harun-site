const Footer = () => {
  return (
    <div className="mt-32 py-2 px-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center bg-zinc-900 left-0 right-0">
      <h1 className="text-2xl font-semibold">portofolio.</h1>
      <div className="flex gap-7">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#project">Project</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="flex gap-2">
        <a href="https://www.instagram.com/azyz_067/">
          <i className="ri-instagram-fill ri-2x"></i>
        </a>
        <a href="https://github.com/HarunLukmanulaziz/">
          <i className="ri-github-fill ri-2x"></i>
        </a>
        <a href="https://www.youtube.com/@lukmanShort">
          <i className="ri-youtube-fill ri-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
