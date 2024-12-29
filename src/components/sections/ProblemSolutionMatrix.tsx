import { motion } from 'framer-motion';
import { Language } from '../../types/language';
import { MapPin, Brain, Users } from 'lucide-react';

interface Props {
  currentLang: Language;
}

export const ProblemSolutionMatrix = ({ currentLang }: Props) => {
  const matrix = [
    {
      problem: {
        icon: MapPin,
        title: currentLang === 'en' ? 'Stuck without clear direction' : 'Keine klare Richtung',
        description: currentLang === 'en' 
          ? 'Feeling lost in your career path'
          : 'Sich im Karriereweg verloren fühlen'
      },
      solution: {
        title: currentLang === 'en' ? 'Custom Roadmap' : 'Individuelle Roadmap',
        description: currentLang === 'en'
          ? 'Get a personalized career plan'
          : 'Erhalte einen personalisierten Karriereplan'
      }
    },
    {
      problem: {
        icon: Brain,
        title: currentLang === 'en' ? 'Overwhelmed by generic advice' : 'Überfordert von allgemeinen Ratschlägen',
        description: currentLang === 'en'
          ? 'Too much noise, no clear answers'
          : 'Zu viel Lärm, keine klaren Antworten'
      },
      solution: {
        title: currentLang === 'en' ? 'AI Mentor Interface' : 'KI-Mentor Interface',
        description: currentLang === 'en'
          ? 'Tailored guidance just for you'
          : 'Maßgeschneiderte Beratung nur für dich'
      }
    },
    {
      problem: {
        icon: Users,
        title: currentLang === 'en' ? 'Lacking personalized mentorship' : 'Fehlende persönliche Betreuung',
        description: currentLang === 'en'
          ? 'No access to industry experts'
          : 'Kein Zugang zu Branchenexperten'
      },
      solution: {
        title: currentLang === 'en' ? 'Expert Network' : 'Experten-Netzwerk',
        description: currentLang === 'en'
          ? 'Connect with industry leaders'
          : 'Verbinde dich mit Branchenführern'
      }
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Problems Column */}
          <div className="space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-[#091235] mb-8"
            >
              {currentLang === 'en' ? 'Common Career Challenges' : 'Häufige Karriere-Herausforderungen'}
            </motion.h2>
            
            {matrix.map((item, index) => (
              <motion.div
                key={`problem-${index}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#E2E6E7] p-6 rounded-xl"
              >
                <item.problem.icon className="w-8 h-8 text-[#B68D40] mb-4" />
                <h3 className="text-xl font-semibold text-[#091235] mb-2">{item.problem.title}</h3>
                <p className="text-[#88A9C3]">{item.problem.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Solutions Column */}
          <div className="space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-[#091235] mb-8"
            >
              {currentLang === 'en' ? 'Horizn Solutions' : 'Horizn Lösungen'}
            </motion.h2>
            
            {matrix.map((item, index) => (
              <motion.div
                key={`solution-${index}`}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#E2E6E7] p-6 rounded-xl border border-[#B68D40]/20"
              >
                <h3 className="text-xl font-semibold text-[#B68D40] mb-2">{item.solution.title}</h3>
                <p className="text-[#88A9C3]">{item.solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};