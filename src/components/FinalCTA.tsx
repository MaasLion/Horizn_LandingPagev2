import { motion } from 'framer-motion';
import { Language } from '../types/language';
import { CTAButton } from './common/CTAButton';

interface Props {
  currentLang: Language;
}

export const FinalCTA = ({ currentLang }: Props) => {
  return (
    <section className="py-16 bg-[#E2E6E7]">
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-[#091235] mb-12"
        >
          {currentLang === 'en' 
            ? 'Start Your Career Transformation Today'
            : 'Starte heute deine Karriere-Transformation'
          }
        </motion.h2>
        
        <CTAButton variant="primary" currentLang={currentLang} />
      </div>
    </section>
  );
};