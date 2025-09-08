'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { Menu, ArrowRight, Loader2, User, ChevronDown } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import LogoNav from '@/assets/logos/logoNav.svg';
import { useState, useEffect, useRef } from 'react';
import { GeneralInfoResponse } from '@/interfaces/api/generalInfoResponse';

const proyectos = {
  locations: [
    {
      commune: 'Puente Alto',
      projects: [
        {
          name: 'Altos del Valle Oriente',
          slug: 'altos-del-valle-oriente',
          id: '6',
        },
        {
          name: 'Altos del Valle',
          slug: 'altos-del-valle',
          id: '2',
        },
        {
          name: 'San Francisco',
          slug: 'san-francisco',
          id: '4',
        },
      ],
    },
    {
      commune: 'Buin',
      projects: [
        {
          name: 'Volare',
          slug: 'volare',
          id: '7',
        },
        {
          name: 'Barrio Viña Carmen',
          slug: 'barrio-vina-carmen',
          id: '3',
        },
      ],
    },
    {
      commune: 'Puerto Montt',
      projects: [
        {
          name: 'Parque Germania',
          slug: 'parque-germania',
          id: '5',
        },
      ],
    },
    {
      commune: 'Santiago',
      projects: [
        {
          name: 'Padre Orellana',
          slug: 'padre-orellana',
          id: '8',
        },
      ],
    },
    // {
    //   commune: 'Vitacura',
    //   projects: [
    //     {
    //       name: 'Marcha Blanca',
    //       slug: 'marcha-blanca',
    //       id: '1',
    //     },
    //   ],
    // },
  ],
  viewAllLink: '/proyectos',
};

export function Navbar() {
  const pathname = usePathname();
  const directoriesToHideNav = ['/bschneider'];
  const hideNav = directoriesToHideNav.some((prefix) =>
    pathname.startsWith(prefix)
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [promocionesText, setPromocionesText] = useState('Promociones');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Obtener información general desde la API
    const fetchGeneralInfo = async () => {
      try {
        const response = await fetch('/api/general-info', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data: GeneralInfoResponse = await response.json();
          if (data.result?.promociones_menu_text) {
            setPromocionesText(data.result.promociones_menu_text);
          }
        }
      } catch (error) {
        console.error('Error al obtener información general:', error);
        // Mantener el texto por defecto en caso de error
      }
    };

    fetchGeneralInfo();
  }, []);

  const handleProjectsClick = () => {
    if (pathname !== '/proyectos') {
      setIsLoading(true);
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  };
  if (hideNav) return null;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background backdrop-blur supports-[backdrop-filter]:bg-background">
      <div className="px-4 min-w-[300px] flex items-center justify-between h-20">
        <Link href="/" className="flex items-center pl-4">
          <div className="p-4 text-[#4A6793] font-bold">
            <LogoNav />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 items-center justify-center">
          <NavigationMenu className="mx-auto">
            <NavigationMenuList className="relative flex items-center justify-center gap-6 mx-auto">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base">
                  Proyectos
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[600px] p-4 rounded-lg">
                    <div className="grid grid-cols-3 gap-4">
                      {proyectos.locations.map((location, index) => (
                        <div key={`topnav-${index}`} className="space-y-2">
                          <h3 className="text-lg font-semibold text-[#1e3a5f]">
                            {location.commune}
                          </h3>
                          <ul className="space-y-1">
                            {location.projects.map((project, index) => (
                              <li key={`botnav-${index}`}>
                                <Link
                                  href={`/proyecto/${project.slug}`}
                                  className="text-[#4A6793] hover:underline"
                                >
                                  {project.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-center mt-5">
                      <Link
                        href="/proyectos"
                        onClick={handleProjectsClick}
                        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#4A6793] text-[#4A6793] hover:bg-[#f0f4f9] transition-colors text-sm ${
                          isLoading && pathname !== '/proyectos'
                            ? 'opacity-50 cursor-not-allowed'
                            : ''
                        }`}
                      >
                        {isLoading && pathname !== '/proyectos' ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <>
                            Ver todos los proyectos
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem className="">
                <Link href="/como-comprar" legacyBehavior passHref>
                  <NavigationMenuLink className="text-base hover:bg-[#f0f4f9] p-2 px-3 rounded-lg transition-all">
                    ¿Cómo comprar?
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              {/* Nosotros Dropdown */}
              <div className="hidden md:flex flex-1 items-center justify-center relative">
                <NavigationMenu className="mx-auto">
                  <NavigationMenuList className="relative flex items-center justify-center gap-6 mx-auto">
                    <div className="relative" ref={dropdownRef}>
                      <button
                        className="text-base flex items-center gap-1 px-3 py-2 rounded-md hover:bg-[#f0f4f9] transition"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      >
                        Nosotros
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                        />
                      </button>

                      {isDropdownOpen && (
                        <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 z-50 bg-white shadow-md rounded-lg w-[200px] p-4">
                          <ul className="space-y-1">
                            <li>
                              <Link
                                href="/nosotros"
                                className="text-[#4A6793] hover:underline"
                                onClick={() => setIsDropdownOpen(false)}
                              >
                                Acerca de Esepe
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/arquitectura"
                                className="text-[#4A6793] hover:underline"
                                onClick={() => setIsDropdownOpen(false)}
                              >
                                Arquitectura
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/blog"
                                className="text-[#4A6793] hover:underline"
                                onClick={() => setIsDropdownOpen(false)}
                              >
                                Novedades
                              </Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>

              <NavigationMenuItem className="">
                <Link href="/promociones" legacyBehavior passHref>
                  <NavigationMenuLink className="text-base hover:bg-[#f0f4f9] p-2 px-3 rounded-lg transition-all">
                    {promocionesText}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Login Button */}
        <Button
          variant="ghost"
          className="hidden md:flex items-center gap-2 text-[#4A6793] text-base hover:bg-[#f0f4f9]"
          asChild
        >
          <Link
            href="https://salavirtual.mobysuite.com/app/esepe/login"
            target="_blank"
          >
            <User className="w-5 h-5" />
            Ingresar
          </Link>
        </Button>

        {/* Mobile Menu Button */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/proyectos"
                className="text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Proyectos
              </Link>
              <Link
                href="/promociones"
                className="text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {promocionesText}
              </Link>
              <Link
                href="/nosotros"
                className="text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Acerca de Esepe
              </Link>
              <Link
                href="/arquitectura"
                className="text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Arquitectura
              </Link>

              <Link
                href="/blog"
                className="text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Novedades
              </Link>
              <Link
                href="https://salavirtual.mobysuite.com/app/esepe/login"
                className="text-lg font-medium flex items-center gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
                target="_blank"
              >
                <User className="w-5 h-5" />
                Ingresar
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
