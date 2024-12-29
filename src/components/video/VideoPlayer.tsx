import { useEffect, useRef, useState } from 'react';
import { VideoControls } from './VideoControls';
import { Language } from '../../types/language';

interface Props {
  autoPlay?: boolean;
  currentLang?: Language;
}

export const VideoPlayer = ({ autoPlay = false, currentLang = 'en' }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    if (videoRef.current && autoPlay) {
      videoRef.current.play().catch(() => setIsPlaying(false));
    }
  }, [autoPlay]);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (value: number) => {
    if (videoRef.current) {
      videoRef.current.volume = value;
      setVolume(value);
      setIsMuted(value === 0);
    }
  };

  const videoSrc = currentLang === 'de' 
    ? '/images/Horizn_Marketing_DE1.mp4'
    : '/images/Horizn_Marketing.mp4';

  return (
    <div className="relative aspect-video bg-black rounded-xl overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-full"
        muted={isMuted}
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      
      <VideoControls
        isPlaying={isPlaying}
        isMuted={isMuted}
        volume={volume}
        onPlayPause={handlePlayPause}
        onMute={handleMute}
        onVolumeChange={handleVolumeChange}
      />
    </div>
  );
};