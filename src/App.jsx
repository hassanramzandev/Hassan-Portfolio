import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Project";
import Contact from "./Pages/Contact";
import FloatingButton from "./Components/FloatingButton";

// Framer Motion aur React Router hooks
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation(); // Ab ye bilkul sahi kaam karega

  return (
    <>
      <Navbar />

      {/* mode="wait" se transition smooth hogi */}
      <AnimatePresence mode="wait">
        {/* location aur unique key dena lazmi hai transition ke liye */}
        <Routes location={location} key={location.pathname}>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* About Page */}
          <Route path="/about" element={<About />} />

          {/* Skills Page (Duplicate route hata diya hai) */}
          <Route path="/skills" element={<Skills />} />

          {/* Projects Page */}
          <Route path="/projects" element={<Projects />} />

          {/* Contact Page */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>

      <Footer />
      <FloatingButton />
    </>
  );
}

export default App;