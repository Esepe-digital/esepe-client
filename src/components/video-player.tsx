'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import Video from '@/assets/images/esepe-video-corporativo.png';

export default function VideoPlayer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
        }
      },
      {
        rootMargin: '100px',
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-white p-6 md:p-8 lg:p-10 rounded-lg shadow-sm">
      <div
        ref={containerRef}
        className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg"
      >
        {!isPlaying ? (
          <div className="relative w-full h-0 pb-[56.25%] bg-gray-100">
            <Image
              src={Video}
              alt="Preview del video"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <button
                onClick={handlePlay}
                className="group relative flex items-center justify-center w-20 h-20 rounded-full bg-white/90 hover:bg-white transition-colors"
                aria-label="Reproducir video"
              >
                <Play className="w-8 h-8 text-gray-900 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        ) : (
          <div className="relative w-full h-0 pb-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://s3.amazonaws.com/esepe-cl-prod/ESEPE%20-%20Videos/ESEPE%20Video%20Corporativo.mp4"
              title="30 años Esepe - Un bien para tu Vida"
              frameBorder="0"
              allow="accelerometer; 
              autoplay; 
              clipboard-write; 
              encrypted-media; 
              gyroscope; 
              picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        )}

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1
            className="text-5xl md:text-7xl font-bold text-white tracking-wider"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
          ></h1>
        </div>
      </div>
    </div>
  );
}
