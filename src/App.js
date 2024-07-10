import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Author from "./components/Author";
import Project from "./components/Project";
import Research from "./components/Research";
import Photos from "./components/Photos";
import Publications from "./components/Publications";
import News from "./components/News";
import Students from "./components/Students";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Author />
      <Project />
      {/* <Research /> */}
      {/* <Photos /> */}
      <Publications />
      {/* <News /> */}
      {/* <Students /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
