import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Episodes from "./components/Episodes/Episodes";
import About from "./components/About/About";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Episodes />
      <About />
    </div>
  );
};

export default App;
