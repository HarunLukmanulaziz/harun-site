import Image from "next/image";
import App from "./app";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "animate.css";

export default function Home() {
  return (
    <>
      <div className="min-h-screen font-poppins overflow-x-hidden bg-[#eee]">
        <div className="container  mx-auto px-4 ">
          <Navbar />
          <App />
        </div>
        <Footer />
      </div>
    </>
  );
}
