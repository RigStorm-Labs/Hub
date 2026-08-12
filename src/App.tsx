import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect, createContext } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Companies from './pages/Companies';
import CompanyDetail from './pages/CompanyDetail';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

export const StormModeContext = createContext<{
  stormMode: boolean;
  toggleStormMode: () => void;
}>({ stormMode: false, toggleStormMode: () => {} });

function App() {
  const [stormMode, setStormMode] = useState(false);
  const location = useLocation();

  const toggleStormMode = () => setStormMode(prev => !prev);

  // Secret storm mode: press 'S' three times rapidly
  useEffect(() => {
    let pressCount = 0;
    let timer: ReturnType<typeof setTimeout>;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 's' || e.key === 'S') {
        pressCount++;
        clearTimeout(timer);
        timer = setTimeout(() => { pressCount = 0; }, 800);
        if (pressCount >= 3) {
          toggleStormMode();
          pressCount = 0;
        }
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <StormModeContext.Provider value={{ stormMode, toggleStormMode }}>
      <div className={`min-h-screen bg-storm-900 text-storm-100 ${stormMode ? 'storm-mode' : ''}`}>
        <ScrollToTop />
        <Navbar />
        <main key={location.pathname} className="animate-fade-in-up">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/labs" element={<CompanyDetail companyId="labs" />} />
            <Route path="/sitemarket" element={<CompanyDetail companyId="sitemarket" />} />
            <Route path="/skyed" element={<CompanyDetail companyId="skyed" />} />
            <Route path="/landaura" element={<CompanyDetail companyId="landaura" />} />
            <Route path="/zeyora" element={<CompanyDetail companyId="zeyora" />} />
            <Route path="/adstorm" element={<CompanyDetail companyId="adstorm" />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </StormModeContext.Provider>
  );
}

export default App;
