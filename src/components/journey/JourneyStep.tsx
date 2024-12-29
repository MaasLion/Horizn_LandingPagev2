import { useState } from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Language } from '../../types/language';
import { VideoModal } from '../video/VideoModal';

interface Props {
  index: number;
  icon: LucideIcon;
  title: {
    en: string;
    de: string;
  };
  currentLang: Language;
}

export const JourneyStep = ({ index, icon: Icon, title, currentLang }: Props) => {
  const [showVideo, setShowVideo] = useState(false);
  const isLastStep = index === 2;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2 }}
        className="relative flex flex-col items-center text-center"
      >
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#091235] 
                      rounded-full flex items-center justify-center border-2 border-[#B68D40] z-10">
          <span className="text-white font-bold">{index + 1}</span>
        </div>
        
        <div className="w-16 h-16 bg-[#B68D40] rounded-full flex items-center justify-center mb-6 mt-6">
          <Icon className="w-8 h-8 text-white" />
        </div>
        
        {isLastStep ? (
          <button
            onClick={() => setShowVideo(true)}
            className="text-xl font-semibold text-[#091235] underline decoration-[#B68D40] 
                     hover:text-[#B68D40] transition-colors focus:outline-none focus:ring-2 
                     focus:ring-[#B68D40] focus:ring-offset-2 rounded-lg px-2"
          >
            {title[currentLang]}
          </button>
        ) : (
          <h3 className="text-xl font-semibold text-[#091235]">{title[currentLang]}</h3>
        )}
      </motion.div>

      <VideoModal 
        isOpen={showVideo} 
        onClose={() => setShowVideo(false)}
        currentLang={currentLang}
      />
    </>
  );
};