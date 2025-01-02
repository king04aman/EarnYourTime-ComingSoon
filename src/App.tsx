import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Herosection";
import FeaturesSection from "./components/FeaturesSection";
import StatsSection from "./components/StatsSection";
import ProductivityScoreSection from "./components/ProductivityScoreSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";


const App: React.FC = () => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "light"
  );
  const [scrolled, setScrolled] = useState(0);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled((position / height) * 100);
      setScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} scroll={scroll} scrolled={scrolled} />
      <HeroSection theme={theme} />
      <FeaturesSection theme={theme} />
      <StatsSection theme={theme} />
      <ProductivityScoreSection theme={theme} />
      <CTASection theme={theme} />
      <Footer theme={theme} />
    </div>
  );
};

export default App;
