import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { VideoPlayer } from './VideoPlayer';
import { Language } from '../../types/language';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const VideoModal = ({ isOpen, onClose, currentLang }: Props) => {
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

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm"
      onClick={(e) => e.target === modalRef.current && onClose()}
      ref={modalRef}
    >
      <div className="relative w-full max-w-4xl mx-4">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-[#B68D40] transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>
        <VideoPlayer autoPlay currentLang={currentLang} />
      </div>
    </div>
  );
};