import { motion } from 'framer-motion';
import { Language } from '../../../types/language';

interface Props {
  currentLang: Language;
}

export const DashboardPreview = ({ currentLang }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="sticky top-24"
    >
      <div className="relative max-w-sm mx-auto h-[600px]">
        <img
          src={`/images/${currentLang === 'en' ? 'Dashboard.png' : 'Dashboard_DE.png'}`}
          alt={currentLang === 'en' ? 'Horizn Dashboard' : 'Horizn Dashboard'}
          className="w-full h-full object-contain rounded-2xl"
        />
        <div className="absolute inset-0 rounded-2xl pointer-events-none border border-white/10" />
      </div>
    </motion.div>
  );
};