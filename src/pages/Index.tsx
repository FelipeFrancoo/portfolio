import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import CustomCursor from "@/components/CustomCursor";
import VantaWaves from "@/components/VantaWaves";
import { useState } from "react";

const Index = () => {
  const [cursorEnabled, setCursorEnabled] = useState(true);

  return (
    <PageTransition>
      {cursorEnabled && <CustomCursor />}
      <VantaWaves />
      <div className={`min-h-screen text-foreground ${cursorEnabled ? 'cursor-none' : ''} relative z-10`}>
        <Header cursorEnabled={cursorEnabled} setCursorEnabled={setCursorEnabled} />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
