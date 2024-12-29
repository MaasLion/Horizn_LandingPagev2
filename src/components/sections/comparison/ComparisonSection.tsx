import { motion } from 'framer-motion';
import { Language } from '../../../types/language';
import { DashboardPreview } from './DashboardPreview';
import { ComparisonMatrix } from './ComparisonMatrix';

interface Props {
  currentLang: Language;
}

export const ComparisonSection = ({ currentLang }: Props) => {
  return (
    <section className="py-24 bg-[#E2E6E7]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center text-[#091235] mb-16"
        >
          {currentLang === 'en' 
            ? 'Transform Your Career Journey'
            : 'Bringe deine Karriere auf das nächste Level'}
        </motion.h2>

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <DashboardPreview currentLang={currentLang} />
          </div>
          <div className="lg:col-span-7">
            <ComparisonMatrix currentLang={currentLang} />
          </div>
        </div>
      </div>
    </section>
  );
};