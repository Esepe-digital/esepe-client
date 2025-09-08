'use client';

import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import React from 'react';
import modelob from '@/assets/proyecto-ph/modelob.jpg';
import Link from 'next/link';

export default function CotizarForm() {
  const [currentStep] = React.useState(3);

  return (
    <div className="w-full p-6 mx-auto bg-white shadow-sm max-w-7xl rounded-xl">
      <h1 className="mb-16 text-3xl font-bold text-center md:text-4xl">
        Cotizar
      </h1>

      <div className="relative mb-20">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          <div className="absolute top-6 left-[calc(16.67%+12px)] right-[calc(16.67%+12px)] h-[2px] bg-[#dfe3ed]"></div>

          <div className="z-10 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg bg-[#88A7D7] text-white">
              <Check className="w-6 h-6" />
            </div>
            <span className="mt-2 text-sm text-gray-500">
              Ingresa pie y plazo
            </span>
          </div>

          <div className="z-10 flex flex-col items-center">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center text-lg ${
                currentStep >= 2
                  ? 'bg-[#88A7D7] text-white'
                  : 'bg-[#dfe3ed] text-gray-400'
              }`}
            >
              <Check className="w-6 h-6" />
            </div>
            <span
              className={`mt-2 text-sm ${currentStep === 2 ? 'font-medium text-gray-900' : 'text-gray-500'}`}
            >
              Selecciona tu casa
            </span>
          </div>

          <div className="z-10 flex flex-col items-center">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center text-lg ${
                currentStep >= 3
                  ? 'bg-[#4a5d87] text-white'
                  : 'bg-[#dfe3ed] text-gray-400'
              }`}
            >
              3
            </div>
            <span
              className={`mt-2 text-sm ${currentStep === 3 ? 'font-medium text-gray-900' : 'text-gray-500'}`}
            >
              Tus datos
            </span>
          </div>
        </div>
      </div>

      <h2 className="mb-16 text-2xl font-bold text-center md:text-3xl">
        Ingresa tus datos
      </h2>

      <div className="flex flex-col gap-12 px-4 lg:flex-row md:px-12">
        {/* Form Column */}
        <div className="flex-1">
          <form className="space-y-4">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
              <div className="space-y-0.5">
                <Label htmlFor="apellido" className="text-base">
                  Apellido
                </Label>
                <div className="w-[264px]">
                  <Input id="apellido" placeholder="" className="w-full h-10" />
                </div>
              </div>

              <div className="space-y-0.5">
                <Label htmlFor="nombre" className="text-base">
                  Nombre
                </Label>
                <div className="w-[264px]">
                  <Input id="nombre" placeholder="" className="w-full h-10" />
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <Label htmlFor="rut" className="text-base">
                RUT
              </Label>
              <div className="w-[264px]">
                <Input id="rut" placeholder="" className="w-full h-10" />
              </div>
            </div>

            <div className="space-y-1">
              <Label htmlFor="email" className="text-base">
                Email
              </Label>
              <div className="w-[552px]">
                <Input
                  id="email"
                  type="email"
                  placeholder=""
                  className="w-full h-10"
                />
              </div>
            </div>

            <div className="space-y-1">
              <Label htmlFor="celular" className="text-base font-bold">
                Celular
              </Label>
              <div className="w-[264px]">
                <Input id="celular" placeholder="+56" className="w-full h-10" />
              </div>
            </div>

            <div className="flex items-start pt-4 space-x-3">
              <Checkbox id="terms" className="mt-1" />
              <Label htmlFor="terms" className="text-base font-normal">
                He leído y acepto los{' '}
                <Link href="/legales" className="underline">
                  términos y condiciones
                </Link>
              </Label>
            </div>

            <div className="flex flex-col gap-6 pt-6 sm:flex-row">
              <Button className="bg-[#123752] hover:bg-[#0e2c42] text-white rounded-full w-[197px] h-[48px] px-[24px] py-[12px]">
                <div className="flex items-center gap-[8px]">
                  <ArrowRight className="w-5 h-5" />
                  <span>Generar cotizacion</span>
                </div>
              </Button>
              <Button
                variant="outline"
                className="rounded-[9999px] border-[#123752] text-[#123752] hover:bg-[#123752]/10 h-12 px-6"
              >
                Cancelar
              </Button>
            </div>
          </form>
        </div>

        {/* Property Card Column  */}
        <div className="lg:pt-16">
          <div
            className="rounded-[16px] border bg-[#f8fafc] overflow-hidden"
            style={{
              width: '500px',
              height: '362px',
              paddingTop: '24px',
              paddingLeft: '24px',
              paddingRight: '24px',
              paddingBottom: '36px',
              borderColor: '#ADCAF9',
              borderWidth: '1px',
            }}
          >
            <div className="flex flex-row h-full gap-8">
              <div className="flex-shrink-0">
                <div className="relative w-[170px] h-[170px]">
                  <Image
                    src={modelob}
                    alt="Imagen de la propiedad"
                    fill
                    className="object-cover rounded-[8px]"
                  />
                </div>
              </div>

              <div className="flex-1 space-y-3 min-w-[250px]">
                <div>
                  <p className="text-sm text-gray-500">Proyecto</p>
                  <p className="font-medium text-gray-800">
                    Barrio Viña Carmen
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Modelo</p>
                  <p className="font-medium text-gray-800">Barreno</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Propiedad</p>
                  <p className="font-medium text-gray-800">BVC2-D05</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Etapa</p>
                  <p className="font-medium text-gray-800">2</p>
                </div>

                <div className="pb-6 rounded-md">
                  <p className="text-sm text-gray-500">Precio</p>
                  <p className="font-medium text-gray-800">UF 3.352</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
