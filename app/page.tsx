import Header from "./components/Header";
import Slider from "./components/Slider";
import "./style.css";
import AboutSection from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Prayer from "./components/Prayer";
import YouTubeSection from "./components/Yt";
import ChurchOffering from "./components/Offering";
export default function Home() {
  return (
    <>
      <div className="openSans">
        <Header />
        <Slider />
        <YouTubeSection/>
        <Contact/>
        <AboutSection/>
        <Prayer/>
        <ChurchOffering/>
        <Footer/>
        
      </div>
    </>
  );
}
