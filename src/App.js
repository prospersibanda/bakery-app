import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ImproveSection from "./components/ImproveSection";
import QouteSection from "./components/QouteSection";
import ChiefsSection from "./components/ChiefsSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container main">
        <HeroSection/>
        <ImproveSection/>
        <QouteSection/>
        <ChiefsSection/>
      </div>
    </div>
  );
}

export default App;
