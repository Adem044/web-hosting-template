import "./App.css";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import GetInTouch from "./components/GetInTouch";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import WhoWeAre from "./components/WhoWeAre";
import WhyUs from "./components/WhyUs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Services />
      <Benefits />
      <Pricing />
      <WhoWeAre />
      <WhyUs />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;
