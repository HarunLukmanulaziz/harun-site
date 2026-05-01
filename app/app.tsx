import React from "react";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import { listTools, listProyek } from "./data";
import GradientText from "./components/GradientText/GradientText";
import SpotlightCard from "./components/SpotlightCard/SpotlightCard";
import Image from "next/image";

function app() {
  const green = "[#c6f10e]";

  return (
    <div>
      <div>
        <div>
          <div className="block md:hidden mb-4">
            <img
              src="fotoProfile.png"
              alt="foto profile"
              className="w-32 h-32 mt-10 object-cover  rounded-full mx-auto "
            />
          </div>
          <div
            className=" hero flex item-center justify-between md:grid grid-cols-12"
            id="home"
          >
            <div className=" col-span-6">
              <div className=" animate__animated animate__fadeInUp pt-5  md:mt-20 justify-center ">
                <div className=" items-center gap-3 justify-center  md:w-fit animate__animated animate__fadeInLeft animate__slow">
                  <GradientText
                    colors={[
                      "#929AAB",
                      "#FFFFFFFF",
                      "#929AAB",
                      "#FFFFFFFF",
                      "#929AAB",
                    ]}
                    animationSpeed={2}
                    showBorder={true}
                    className="custom-class p-5 bg-[#12222d]"
                  >
                    <q>kode yang indah, berawal dari ketekunan.</q>
                  </GradientText>
                </div>

                <div className="py-6 text-[#000] flex items-center gap-2">
                  <h1 className="text-4xl font-bold">Hi, I'm Harun.</h1>
                  <RotatingText
                    texts={[
                      "WEB DEVELOPER",
                      "FRONT END DEVELOPER",
                      "ALSO NETWORK ENGINER",
                    ]}
                    mainClassName="text-2xl font-bold bg-[#393E46] text-[#F7F7F7] overflow-hidden inline-flex justify-center rounded-lg transition-all pt-1 px-2 md:px-3"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                  />
                </div>

                <p className="text-[#393E46] mb-6 opacity-90">
                  I have a strong interest in both programming and design,
                  especially in web development. My passion for this field
                  started during my second year of vocational high school, and I
                  have continuously improved my skills while exploring creative
                  and effective ways to deliver engaging digital solutions.
                </p>

                <div className="flex gap-3">
                  <a
                    href="#"
                    className="bg-transparent border border-zinc-600 text-[#000] rounded-xl hover:text-[#eee] hover:bg-[#000] p-3 w-fit animate__animated animate__backInUp "
                  >
                    Download CV <i className="ri-download-line ri-lg"></i>
                  </a>
                  <a
                    href="#project"
                    className="bg-[#393E46] rounded-xl hover:bg-[#929AAB] p-3 w-fit animate__animated animate__backInUp animate__slow"
                  >
                    View Projects <i className="ri-arrow-down-line ri-lg"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className=" col-span-6 hidden md:block">
              <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
            </div>
          </div>
          {/* tentang */}
          <div className="tentang mt-20 py-10" id="about">
            <div
              className=" lg:w-2/3 mx-auto p-4 rounded-xl"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <SpotlightCard
                className="custom-spotlight-card"
                spotlightColor="rgba(255, 255, 255, 0.30)"
              >
                <p className="text-xl">
                  Hello, my name is Harun Lukmanulaziz. I am a Front-End Web
                  Developer with a strong focus on building responsive, modern,
                  and user-friendly web applications. I have experience working
                  with technologies such as HTML, CSS, JavaScript, React,
                  Tailwind CSS, and Next.js. I enjoy transforming ideas into
                  interactive and visually appealing digital experiences, with
                  attention to clean code and performance optimization. I am
                  passionate about continuously learning new technologies and
                  improving my skills to create better and more efficient web
                  solutions.
                </p>
                <div className="grid grid-cols-1 gap-3  md:grid-cols-2 py-8">
                  <Image
                    src="/assets/logo.png"
                    alt="Hero"
                    width={100}
                    height={100}
                    priority
                    className="hidden md:block"
                  />
                  <div className="flex gap-4 font-semibold">
                    <div className=" ">
                      <h1 className="text-4xl mb-1">
                        4<span className="text-[#eee]">+</span>
                      </h1>
                      <p className="opacity-70">Completed Projects</p>
                    </div>
                    <div>
                      <h1 className="text-4xl mb-1">
                        2<span className="text-[#eee]">+</span>
                      </h1>
                      <p className="opacity-70"> Years of Experience</p>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          </div>
          {/* tentang-end */}
          {/* tools */}
          <div className="Tools mt-32 mx-5 ">
            <h1
              className="  text-3xl/tight text-[#000] font-bold mb-4"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-once="true"
            >
              TOOLS I USE
            </h1>
            <p
              className="text-base/loos md:w-2/5 text-[#000] opacity-80"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              Here are some of the tools I use to build and complete my
              projects.
            </p>
            <div className="tools-box mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {listTools.map((tool) => (
                <div
                  className="group flex items-center gap-2 p-3 border border-zinc-600 rounded-md bg-zinc-900 hover:bg-zinc-800"
                  key={tool.id}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-once="true"
                  data-aos-delay={tool.dad}
                >
                  <img
                    src={tool.gambar.src}
                    alt="nama tools"
                    className="w-14  "
                    loading="lazy"
                  />
                  <div>
                    <h1 className="font-bold text-[#393E46">{tool.nama}</h1>
                    <p className="opacity-50 text-[#393E46">{tool.ket}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* tools-end */}
          {/* project */}
          <div className="Proyek mt-32  " id="project">
            <h1
              className="text-center text-[#000] text-4xl/tight font-bold mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              COMPLETED PROJECTS
            </h1>
            <p
              className="text-base/loos text-center text-[#000] opacity-50"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              data-aos-once="true"
            >
              Here are some of the projects I’ve worked on.
            </p>

            <div className="proyek-box mx-5 mt-14 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {listProyek.map((proyek) => (
                <div
                  className="group flex-rows items-center gap-2 p-3 border border-zinc-700 rounded-md bg-zinc-900 "
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-once="true"
                  data-aos-delay={proyek.dad}
                >
                  <div key={proyek.id}>
                    <img
                      src={proyek.gambar.src}
                      alt="nama tools"
                      className=" bg-zinc-800 group-hover:bg-zinc-900 mb-2"
                      loading="lazy"
                    />
                    <div>
                      <h1 className="font-bold mb-1">{proyek.nama}</h1>
                      <p className="text-base  flex-row py-4">{proyek.desk}</p>
                      <div className="flex flex-wrap gap-3">
                        {proyek.tools.map((tool, index) => (
                          <p
                            className="bg-zinc-600  py-1 px-3 font-semibold rounded-md"
                            key={index}
                          >
                            {tool}
                          </p>
                        ))}
                      </div>
                      <div className="mt-8 text-center mb-2">
                        <a
                          href="#"
                          className="bg-[#f7f7f7] text-[#000] hover:bg-[#D4D4D4FF] text-lg p-2 rounded-lg block"
                        >
                          View Website
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* project-end */}
          {/* contact */}
          <div className="mt-32" id="contact">
            <h1
              className="text-center text-[#000000] text-4xl/tight font-bold mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              Contact
            </h1>
            <p
              className="text-base/loos text-center  opacity-50"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              data-aos-once="true"
            >
              Feel free to reach out to me.
            </p>
            <form
              action="https://formsubmit.co/harunlukmanulaziz@gmail.com"
              method="POST"
              className="bg-zinc-900 p-2 sm:p-10 sm:w-fit w-full  rounded-xl mx-auto mt-5"
              autoComplete="off"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
              data-aos-once="true"
            >
              <div className="flex flex-col gap-6 ">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold">Name </label>
                  <input
                    type="text"
                    name="nama"
                    placeholder="nama..."
                    className="border border-zinc-600 text-[#000] bg-[#eee] p-2 rounded-md"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email..."
                    className="border text-[#000] border-zinc-600 bg-[#eee] p-2 rounded-md"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="pesan" className="font-semibold">
                    Message
                  </label>
                  <textarea
                    name="pesan"
                    id="pesan"
                    cols="45"
                    rows="7"
                    placeholder="pessan..."
                    className="border text-[#000] border-zinc-600 p-2 rounded-md bg-[#eee]"
                    required
                  ></textarea>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    type="submit"
                    className="bg-[#f7f7f7f7] hover:bg-[#D4D4D4FF] text-[#000] text-lg p-2 rounded-lg cursor-pointer w-full"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
          {/* contact-end */}
        </div>
      </div>
    </div>
  );
}

export default app;
