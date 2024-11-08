import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import SampleProjects from "./components/SampleProjects";

export default function Home() {
  return (
    <>
     <Hero/>
     <About/>
     <Mission/>
     <SampleProjects/>
<ContactUs/>
    </>
  );
}

