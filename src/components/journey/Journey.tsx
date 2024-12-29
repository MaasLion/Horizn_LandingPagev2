import { motion } from 'framer-motion';
import { Language } from '../../types/language';
import { Upload, Target, Rocket } from 'lucide-react';
import { JourneyStep } from './JourneyStep';

interface Props {
  currentLang: Language;
}

export const Journey = ({ currentLang }: Props) => {
  const steps = [
    {
      icon: Upload,
      title: {
        en: 'Connect Your Professional Profile',
        de: 'Verbinde dein berufliches Profil'
      }
    },
    {
      icon: Target,
      title: {
        en: 'Define Your Career Aspirations',
        de: 'Definiere deine Karriereziele'
      }
    },
    {
      icon: Rocket,
      title: {
        en: 'Launch Your Success Journey',
        de: 'Starte deine Erfolgsreise'
      }
    }
  ];

  return (
    <section className="py-16 bg-[#E2E6E7]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting line with adjusted position */}
          <div className="absolute top-[3.75rem] left-1/2 -translate-x-1/2 h-0.5 
                        bg-[#B68D40] w-[calc(100%-100px)] hidden md:block" />
          
          {steps.map((step, index) => (
            <JourneyStep
              key={index}
              index={index}
              icon={step.icon}
              title={step.title}
              currentLang={currentLang}
            />
          ))}
        </div>
      </div>
    </section>
  );
};