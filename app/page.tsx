import Header from "./components/Header";
import Slider from "./components/Slider";
import "./style.css";
import AboutSection from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
export default function Home() {
  return (
    <>
      <div className="openSans">
        <Header />
        <Slider />
        <AboutSection/>
        <Contact/>
        <Footer/>
        
      </div>
    </>
  );
}
