import React from "react";
import Navigation from "./components/nav/Navigation";
import Header from "./components/header/Header";
import About from "./components/main/About";
import Features from "./components/main/Features";
import Team from "./components/main/Team";
import Blog from "./components/main/Blog";
import Contact from "./components/main/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="container">
      <Navigation />
      <Header />
      <About />
      <Features />
      <Team />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
