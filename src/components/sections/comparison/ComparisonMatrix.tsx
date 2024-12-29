import { motion } from 'framer-motion';
import { Language } from '../../../types/language';

interface Props {
  currentLang: Language;
}

const comparisonData = [
  {
    challengeEmoji: '💔',
    challenge: {
      en: "Feeling stuck in your current role with no clear path forward",
      de: "Festgefahren in der aktuellen Position ohne klaren Weg nach vorne"
    },
    solutionEmoji: '🎯',
    solution: {
      en: "AI-powered career roadmap with clear milestones and actionable steps",
      de: "KI-gestützte Karriere-Roadmap mit klaren Meilensteinen und umsetzbaren Schritten"
    }
  },
  {
    challengeEmoji: '⚡',
    challenge: {
      en: "Overwhelmed by conflicting career advice and information overload",
      de: "Überfordert durch widersprüchliche Karriereratschläge und Informationsüberflutung"
    },
    solutionEmoji: '🤖',
    solution: {
      en: "Personalized guidance filtered and prioritized for your specific situation",
      de: "Personalisierte Beratung, gefiltert und priorisiert für deine spezifische Situation"
    }
  },
  {
    challengeEmoji: '🥀',
    challenge: {
      en: "Difficulty accessing meaningful mentorship and industry connections",
      de: "Schwieriger Zugang zu bedeutungsvollem Mentoring und Branchenkontakten"
    },
    solutionEmoji: '🤝',
    solution: {
      en: "Direct access to curated network of industry experts and mentors",
      de: "Direkter Zugang zu kuratierten Netzwerk von Branchenexperten und Mentoren"
    }
  }
];

export const ComparisonMatrix = ({ currentLang }: Props) => {
  return (
    <div className="flex flex-col justify-between h-[600px]">
      {comparisonData.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="grid md:grid-cols-2 gap-4"
        >
          <div className="bg-white p-8 rounded-xl shadow-sm flex items-center gap-4">
            <span className="text-2xl" role="img" aria-label="Challenge emoji">
              {item.challengeEmoji}
            </span>
            <p className="text-black font-medium text-lg">{item.challenge[currentLang]}</p>
          </div>
          <div className="bg-[#B68D40] p-8 rounded-xl shadow-sm flex items-center gap-4">
            <span className="text-2xl" role="img" aria-label="Solution emoji">
              {item.solutionEmoji}
            </span>
            <p className="text-[#091235] text-lg font-bold">{item.solution[currentLang]}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};