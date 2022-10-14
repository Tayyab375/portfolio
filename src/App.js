import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import AboutMe from "./Components/About Me/AboutMe";
import Projects from "./Components/Projects/Projects";
import ContactMe from "./Components/Contact Me/ContactMe";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <AboutMe />
      <Projects />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
