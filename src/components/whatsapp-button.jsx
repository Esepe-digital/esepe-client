import React from 'react';
import Image from 'next/image';
import whatsapp from '@/assets/images/whatsapp.svg';

const WhatsappButton = () => {
  return (
    <a
      href=" https://wa.me/+56952281689"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-[101] flex p-4 bottom-4 right-4 hover:bg-whiteBiosfera bg-white text-primary hover:text-primary rounded-full font-bold"
      size="lg"
    >
      {whatsapp && (
        <Image src={whatsapp} alt="Whatsapp" width={24} height={24} />
      )}
      <span className="hidden md:flex pl-2">HABLEMOS</span>
    </a>
  );
};

export default WhatsappButton;
