import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Language } from '../../types/language';
import { Quiz } from './index';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const QuizModal = ({ isOpen, onClose, currentLang }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4"
          onClick={(e) => e.target === modalRef.current && onClose()}
          ref={modalRef}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-4xl bg-[#091235] rounded-2xl shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/60 hover:text-white
                       transition-colors duration-200 p-2 rounded-full
                       hover:bg-white/10"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
            <div className="p-8">
              <Quiz currentLang={currentLang} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};