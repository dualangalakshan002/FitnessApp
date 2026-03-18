import { useEffect } from "react";
import Cursor    from "./components/Cursor";
import Navbar    from "./components/Navbar";
import Hero      from "./components/Hero";
import Marquee   from "./components/Marquee";
import About     from "./section/About";
import Services  from "./section/Services";
import Plans     from "./section/Plans";
import Trainers  from "./section/Trainers";
import Contact   from "./section/Contact";
import Footer    from "./components/Footer";

export default function App() {
  // Scroll-reveal observer (re-register after any DOM changes)
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        }),
      { threshold: 0.1 }
    );
    const run = () =>
      document.querySelectorAll(".reveal, .reveal-l, .reveal-r").forEach((el) => obs.observe(el));
    run();
    // Slight delay to catch dynamically rendered elements
    const tid = setTimeout(run, 200);
    return () => { obs.disconnect(); clearTimeout(tid); };
  }, []);

  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Plans />
        <Trainers />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
