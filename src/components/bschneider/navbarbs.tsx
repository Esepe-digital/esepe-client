'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import LogoNav from '@/assets/logos/logo-bschneider.svg';
import { useState } from 'react';

export function NavbarBschneider() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
              <NavigationMenuItem className="">
                <Link href="#servicios" legacyBehavior passHref>
                  <NavigationMenuLink className="text-base p-2 px-3 transition-all border-b-2 border-transparent hover:text-[#4A6793] hover:border-[#4A6793]">
                    Servicios
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* Nosotros Dropdown */}
              <div className="hidden md:flex flex-1 items-center justify-center relative">
                <NavigationMenu className="mx-auto">
                  <NavigationMenuList className="relative flex items-center justify-center gap-6 mx-auto">
                    <NavigationMenuItem className="">
                      <Link href="#proyectos" legacyBehavior passHref>
                        <NavigationMenuLink className="text-base p-2 px-3 transition-all border-b-2 border-transparent hover:text-[#4A6793] hover:border-[#4A6793]">
                          Proyectos
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>

              <NavigationMenuItem className="">
                <Link href="#metodologia" legacyBehavior passHref>
                  <NavigationMenuLink className="text-base p-2 px-3  transition-all border-b-2 border-transparent hover:text-[#4A6793] hover:border-[#4A6793]">
                    Metodología
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem className="">
                <Link href="#equipo" legacyBehavior passHref>
                  <NavigationMenuLink className="text-base p-2 px-3  transition-all border-b-2 border-transparent hover:text-[#4A6793] hover:border-[#4A6793]">
                    Equipo
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

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
                href="#servicios"
                className="text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="#proyectos"
                className="text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Proyectos
              </Link>
              <Link
                href="#metodologia"
                className="text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Metodología
              </Link>
              <Link
                href="#equipo"
                className="text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Equipo
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
