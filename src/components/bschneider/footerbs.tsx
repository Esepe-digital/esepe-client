import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MailIcon from '@/assets/icons/mail.svg';
import PhoneIcon from '@/assets/icons/smartphone-device.svg';
import LocationIcon from '@/assets/icons/pin.svg';
import Logo from '@/assets/logos/bscheider-logo.png';

export default function FooterBschneider(): React.ReactElement {
  return (
    <footer className="bg-[#302F36] text-white w-full py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-6 flex flex-col">
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-10 lg:gap-[40px]">
          {/* Company Info Column */}
          <div className="space-y-6 md:space-y-8 md:w-1/3">
            <div className="flex flex-col">
              <div className="flex items-center">
                <Link href="/">
                  <div className="bg-white p-2 rounded-lg">
                    <Image
                      src={Logo}
                      alt="Bschneider Logo"
                      className="w-[150px] h-[34px]"
                    />
                  </div>
                </Link>
              </div>
            </div>
            <div className="max-w-md space-y-6 md:space-y-8">
              <p className="font-sans text-sm md:text-base leading-relaxed text-justify mb-8">
                Combinamos décadas de experiencia con una visión innovadora para
                transformar ideas en espacios significativos. A lo largo de los
                años, hemos desarrollado proyectos emblemáticos que han
                contribuido al crecimiento y la identidad urbana de la ciudad
                consolidándonos como un referente en el diseño arquitectónico
                contemporáneo.
              </p>
            </div>
          </div>

          {/* Contact Column */}
          <div className="space-y-4 md:space-y-6 mt-8 sm:mt-0 md:w-1/4">
            <h3 className="text-lg md:text-xl font-semibold md:mb-6 mb-12">
              Contacto
            </h3>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start ">
                <MailIcon className="w-[24px] h-[24px] [&_path]:stroke-white" />
                <Link
                  href="mailto:esepe@esepe.cl?subject=Consulta%20ESEPE"
                  className="ml-3 text-sm md:text-base hover:text-[#ADCAF9] transition-colors"
                >
                  info@bschneider.cl
                </Link>
              </div>
              <div className="flex items-start">
                <PhoneIcon className="w-[24px] h-[24px] [&_path]:stroke-white" />
                <Link
                  href="tel:(+562) 2371 2969"
                  className="ml-3 text-sm md:text-base hover:text-[#ADCAF9] transition-colors"
                >
                  (+562) 2371 2969
                </Link>
              </div>
              <div className="flex items-start">
                <LocationIcon className="w-[26px] h-[26px] [&_path]:stroke-white" />
                <span className="ml-3 text-sm md:text-base">
                  Alcántara 656, Las Condes, Santiago
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-4 md:space-y-6 mt-8 md:mt-0 md:w-1/4">
            <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">
              Navegación
            </h3>
            <nav className="space-y-2 md:space-y-3">
              <Link
                href="/proyectos"
                className="block text-sm md:text-base text-[#ADCAF9] hover:opacity-80 transition-opacity"
              >
                Servicios
              </Link>
              <Link
                href="/promociones"
                className="block text-sm md:text-base text-[#ADCAF9] hover:opacity-80 transition-opacity"
              >
                Proyectos
              </Link>
              <Link
                href="/nosotros"
                className="block text-sm md:text-base text-[#ADCAF9] hover:opacity-80 transition-opacity"
              >
                Metodología
              </Link>
              <Link
                href="/arquitectura"
                className="block text-sm md:text-base text-[#ADCAF9] hover:opacity-80 transition-opacity"
              >
                Equipo
              </Link>
            </nav>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="w-full border-t border-[#3A3941] py-3 text-center">
          <div className="flex flex-row items-center justify-center space-x-4">
            <p className="text-xs text-gray-400 m-0 leading-none">
              B|Schneider ©2025. Todos los derechos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
