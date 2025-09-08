'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import seal from '@/assets/images/seal.jpg';
import MailIcon from '@/assets/icons/mail.svg';
import PhoneIcon from '@/assets/icons/smartphone-device.svg';
import LocationIcon from '@/assets/icons/pin.svg';
import Logo from '@/assets/logos/esepe-logo.svg';
import FacebookIcon from '@/assets/icons/facebook.svg';
import InstagramIcon from '@/assets/icons/instagram.svg';
import YoutubeIcon from '@/assets/icons/youtube.svg';

export default function Footer(): React.ReactElement {
  const pathname = usePathname();
  const hideFooter = pathname.startsWith('/bschneider');

  if (hideFooter) return <></>;
  return (
    <footer className="bg-[#302F36] text-white w-full py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-6 flex flex-col">
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-10 lg:gap-[40px]">
          {/* Company Info Column */}
          <div className="space-y-6 md:space-y-8 md:w-1/3">
            <div className="flex flex-col">
              <div className="flex items-center">
                <Link href="/">
                  <Logo className="w-[98px] h-[60px] [&_path]:fill-white" />
                </Link>
              </div>
            </div>
            <div className="max-w-md space-y-6 md:space-y-8">
              <p className="font-sans text-sm md:text-base leading-relaxed text-justify">
                Con más de 30 años de experiencia, desarrollamos proyectos
                inmobiliarios de forma integral, abarcando desde viviendas hasta
                industrias y comercios.
              </p>
              <p className="font-sans text-sm md:text-base leading-relaxed text-justify">
                Nuestra sólida trayectoria nos posiciona como una inmobiliaria
                confiable, con diversos proyectos acorde a las necesidades de
                nuestros clientes.
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
                  esepe@esepe.cl
                </Link>
              </div>
              <div className="flex items-start">
                <PhoneIcon className="w-[24px] h-[24px] [&_path]:stroke-white" />
                <Link
                  href="tel:+56223712969"
                  className="ml-3 text-sm md:text-base hover:text-[#ADCAF9] transition-colors"
                >
                  +56 2 2 371 2969
                </Link>
              </div>
              <div className="flex items-start">
                <LocationIcon className="w-[26px] h-[26px] [&_path]:stroke-white" />
                <span className="ml-3 text-sm md:text-base">
                  Alcántara 656, Las Condes, Santiago
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <p className="mb-2 md:mb-3 text-sm">Síguenos</p>
              <div className="flex space-x-6">
                <Link
                  href="https://www.facebook.com/inmobiliariaesepe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#ADCAF9] p-2 rounded-full"
                >
                  <FacebookIcon className="h-5 w-5 text-[#302F36]" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="https://www.instagram.com/inmobiliaria_esepe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#ADCAF9] p-2 rounded-full"
                >
                  <InstagramIcon className="h-5 w-5 text-[#302F36]" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="https://www.youtube.com/@inmobiliariaesepe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#ADCAF9] p-2 rounded-full"
                >
                  <YoutubeIcon className="h-5 w-5 text-[#302F36]" />
                  <span className="sr-only">YouTube</span>
                </Link>
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
                Proyectos
              </Link>
              <Link
                href="/como-comprar"
                className="block text-sm md:text-base text-[#ADCAF9] hover:opacity-80 transition-opacity"
              >
                ¿Cómo comprar?
              </Link>
              <Link
                href="/promociones"
                className="block text-sm md:text-base text-[#ADCAF9] hover:opacity-80 transition-opacity"
              >
                Promociones
              </Link>
              <Link
                href="/nosotros"
                className="block text-sm md:text-base text-[#ADCAF9] hover:opacity-80 transition-opacity"
              >
                Acerca de ESEPE
              </Link>
              <Link
                href="/arquitectura"
                className="block text-sm md:text-base text-[#ADCAF9] hover:opacity-80 transition-opacity"
              >
                Arquitectura
              </Link>
              <Link
                href="/blog"
                className="block text-sm md:text-base text-[#ADCAF9] hover:opacity-80 transition-opacity"
              >
                Novedades
              </Link>
            </nav>
          </div>
        </div>

        {/* CCS Logo */}
        <div className="flex justify-center my-8 md:my-10 lg:my-12">
          <Image
            src={seal}
            alt="CCS Logo"
            width={120}
            height={120}
            className="w-auto h-auto"
          />
        </div>

        {/* Copyright Section */}
        <div className="w-full border-t border-[#3A3941] py-3 text-center">
          <div className="flex flex-row items-center justify-center space-x-4">
            <p className="text-xs text-gray-400 m-0 leading-none">
              ESEPE Inmobiliaria todos los derechos reservados ©2025
            </p>
            <Link
              href="/legales"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#C3DAFF] hover:opacity-80 leading-none"
            >
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
