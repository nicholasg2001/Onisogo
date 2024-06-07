import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Testimonials } from "@/components/Testimonials";
import "@/App.css";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Testimonials />
      <ScrollToTop />
    </>
  );
}

export default Home;
