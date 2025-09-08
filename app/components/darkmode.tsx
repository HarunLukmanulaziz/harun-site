const mode = () => {
  const dark = document.getElementById("app");
  return dark?.setAttribute("class", "bg-[#000]");
};

export default mode;
