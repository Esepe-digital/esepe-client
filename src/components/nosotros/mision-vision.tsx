import Image from 'next/image';

interface MisionVisionProps {
  texto: string;
  imagen: string;
}

export default function MisionVision({ texto, imagen }: MisionVisionProps) {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full">
        <Image
          src={imagen}
          alt="Family in a living room with children drawing"
          fill
          className="object-cover brightness-50 opacity-80"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl text-white text-center px-4 max-w-6xl">
            &ldquo;{texto}&rdquo;
          </h1>
        </div>
      </div>
    </div>
  );
}
