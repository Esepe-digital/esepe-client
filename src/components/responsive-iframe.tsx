'use client';

import { useState, useEffect } from 'react';
import { useMediaQuery } from '@/hooks/use-mobile';

export default function ResponsiveIframe({
  url,
  isZoomable = false,
  height = {
    desktop: '70vh',
    mobile: '80vh',
  },
}: {
  url: string;
  isZoomable?: boolean;
  height?: {
    desktop: string;
    mobile: string;
  };
}) {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [iframeHeight, setIframeHeight] = useState(height.desktop);

  useEffect(() => {
    if (isMobile) {
      setIframeHeight(height.mobile);
    } else {
      setIframeHeight(height.desktop);
    }
  }, [isMobile, height.mobile, height.desktop]);

  return (
    <div className="w-full md:container mx-auto h-full flex flex-col my-8 md:my-20">
      <div
        className="relative w-full overflow-hidden rounded-2xl shadow-lg"
        style={{ height: iframeHeight }}
      >
        <iframe
          src={url}
          className="absolute top-0 left-0 w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Esepe Drone View"
          loading="lazy"
        />
      </div>

      {isMobile && isZoomable && (
        <div className="mt-2 p-3 text-center text-sm text-gray-600 bg-gray-100 rounded-md">
          <p>Desliza con dos dedos para navegar y pellizca para hacer zoom</p>
        </div>
      )}
    </div>
  );
}
