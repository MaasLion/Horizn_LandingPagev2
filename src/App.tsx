import { useState } from 'react';
import { Language } from './types/language';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { ComparisonSection } from './components/sections/comparison/ComparisonSection';
import { Journey } from './components/journey/Journey';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/layout/Footer';

function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');

  return (
    <div className="relative">
      <Navbar currentLang={currentLang} onLanguageToggle={setCurrentLang} />
      <HeroSection currentLang={currentLang} />
      <ComparisonSection currentLang={currentLang} />
      <Journey currentLang={currentLang} />
      <FinalCTA currentLang={currentLang} />
      <Footer currentLang={currentLang} />
    </div>
  );
}

export default App;