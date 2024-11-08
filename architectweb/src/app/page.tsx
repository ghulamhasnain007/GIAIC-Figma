import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Navbar from "./components/Navbar";
import SampleProjects from "./components/SampleProjects";

export default function Home() {
  return (
    <>
     {/* <Navbar/> */}
     {/* <div className="text-2xl bg-gray-500">This is Test</div> */}
     <Hero/>
     <About/>
     <Mission/>
     <SampleProjects/>
     <ContactUs/>
     {/* <Footer/> */}
    </>
  );
}
