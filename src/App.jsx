import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MobileCTABar from './components/MobileCTABar';
import ProblemSection from './components/ProblemSection';
import FailedSolutions from './components/FailedSolutions';
import Mechanism from './components/Mechanism';
import Capabilities from './components/Capabilities';
import SocialProof from './components/SocialProof';
import Process from './components/Process';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-dark min-h-screen text-primary font-sans relative">
      <Navbar />
      <Hero />
      <div id="content-start">
        <ProblemSection />
        <FailedSolutions />
        <Mechanism />
        <Capabilities />
        <SocialProof />
        <Process />
        <FAQ />
        <FinalCTA />
        <Footer />
      </div>
      <MobileCTABar />
    </div>
  );
}

export default App;
