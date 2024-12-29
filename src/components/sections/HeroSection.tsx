import { motion } from 'framer-motion';
import { Target, Bot, Users } from 'lucide-react';
import { Language } from '../../types/language';
import { QuizModal } from '../Quiz/QuizModal';
import { useState } from 'react';

interface Props {
  currentLang: Language;
}

const features = [
  {
    icon: Target,
    title: {
      en: 'Personalized Career Roadmaps',
      de: 'Personalisierte Karriere-Roadmaps'
    }
  },
  {
    icon: Bot,
    title: {
      en: 'AI-Powered Mentorship',
      de: 'KI-gestütztes Mentoring'
    }
  },
  {
    icon: Users,
    title: {
      en: 'Access to Real Industry Experts',
      de: 'Zugang zu echten Branchenexperten'
    }
  }
];

export const HeroSection = ({ currentLang }: Props) => {
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <section className="min-h-[80vh] bg-[#E2E6E7] relative overflow-hidden pt-32">
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#091235]">
              {currentLang === 'en' 
                ? 'Unlock Your Dream Career with Horizn'
                : 'Erreiche deine Traumkarriere mit Horizn'
              }
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="group bg-[#091235] hover:bg-[#B68D40] p-6 rounded-xl shadow-lg
                          transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <feature.icon className="w-8 h-8 text-white" />
                  <h3 className="text-white font-semibold">
                    {feature.title[currentLang]}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative mx-auto w-full h-[600px]"
          >
            <img
              src={currentLang === 'en' ? '/images/start2.png' : '/images/start1_DE.png'}
              alt={currentLang === 'en' ? 'Horizn App Preview' : 'Horizn App Vorschau'}
              className="w-full h-full object-contain rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-[#091235] mb-4">
            {currentLang === 'en' 
              ? 'Find Your Career Path with Horizn'
              : 'Finde deinen Karriereweg mit Horizn'
            }
          </h2>
          <p className="text-lg text-[#88A9C3] mb-8">
            {currentLang === 'en'
              ? 'Take our quick quiz to discover how Horizn can help you achieve your career goals.'
              : 'Mache unseren kurzen Test und erfahre, wie Horizn dir helfen kann, deine Karriereziele zu erreichen.'
            }
          </p>
          <motion.button
            onClick={() => setShowQuiz(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#B68D40] text-white px-8 py-4 rounded-full text-lg font-medium
                      shadow-lg hover:bg-[#B68D40]/90 hover:shadow-xl
                      transition-all duration-300 focus:outline-none focus:ring-2
                      focus:ring-[#B68D40] focus:ring-offset-2"
          >
            {currentLang === 'en' ? 'Discover Your Potential' : 'Entdecke dein Potenzial'}
          </motion.button>
        </motion.div>
      </div>

      <QuizModal 
        isOpen={showQuiz}
        onClose={() => setShowQuiz(false)}
        currentLang={currentLang}
      />
    </section>
  );
};