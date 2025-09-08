'use client';

import * as React from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import {
  PropertyType,
  ProyectosFilterProps,
} from '@/interfaces/proyectos/filters';

export function ProyectosFilter({
  saleStatus,
  setSaleStatus,
  propertyType,
  setPropertyType,
  open,
  setOpen,
  selectedRegions,
  handleRegionSelect,
  getSelectedRegionsLabel,
  regions,
}: ProyectosFilterProps) {
  return (
    <div className="w-full shadow-[0px_2px_3px_0px_#00000014]">
      <div className="max-w-6xl px-4 py-6 mx-auto">
        <div className="flex flex-col gap-6">
          {/* Header + Filtros principales */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-center">
            <h2 className="font-bold text-xl md:text-[1.25rem] leading-[140%] tracking-[0px] text-[#262626] font-primary">
              Proyectos
            </h2>

            <div className="flex flex-col flex-wrap gap-4 sm:flex-row sm:items-center">
              {/* Filtro "En venta / Vendidos" */}
              <div className="flex max-w-xs sm:max-w-none border border-[#D8D8D8] rounded-[12px] p-[2px] gap-2 w-full sm:w-auto">
                <button
                  onClick={() => setSaleStatus('en-venta')}
                  className={`w-full sm:w-[100px] h-[44px] px-4 py-3 rounded-[12px] transition-all duration-300 flex items-center justify-center text-center whitespace-normal font-normal text-sm ${
                    saleStatus === 'en-venta'
                      ? 'bg-[#D4E5FF] text-[#123752]'
                      : 'bg-transparent text-[#262626]'
                  }`}
                >
                  En venta
                </button>
                <button
                  onClick={() => setSaleStatus('vendidos')}
                  className={`w-full sm:w-[88px] h-[44px] px-4 py-3 rounded-[12px] transition-all duration-300 flex items-center justify-center text-center whitespace-normal font-normal text-sm ${
                    saleStatus === 'vendidos'
                      ? 'bg-[#D4E5FF] text-[#123752]'
                      : 'bg-transparent text-[#262626]'
                  }`}
                >
                  Vendidos
                </button>
              </div>

              {/* Separador */}
              <div className="hidden sm:block h-11 w-[1px] bg-[#D8D8D8]" />

              {/* Tipos de propiedad */}
              <div className="flex flex-wrap gap-2">
                {(['casas', 'departamentos', 'ambos'] as PropertyType[]).map(
                  (type, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      onClick={() => setPropertyType(type)}
                      className={cn(
                        'min-w-[120px] sm:w-[171px] h-[44px] rounded-[12px] transition-colors font-normal text-sm',
                        propertyType === type
                          ? 'bg-[#6785B5] text-white hover:bg-[#6785B5]/90 border-[#6785B5]'
                          : 'bg-[#EEEEF0] hover:bg-[#EEEEF0]/90 border-[#EEEEF0]'
                      )}
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </Button>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Comuna selector */}
          <div className="flex flex-col items-center justify-center w-full gap-2 text-center sm:flex-row sm:gap-4">
            <span className="text-sm font-medium text-[#5C5C5C]">Comuna:</span>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-full sm:w-[278px] h-[49px] justify-between border-[#D8D8D8] gap-1 font-normal text-sm"
                >
                  {getSelectedRegionsLabel()}
                  <ChevronDown
                    className={`ml-2 h-4 w-4 shrink-0 transition-transform ${
                      open ? 'rotate-180 text-black' : 'text-gray-400'
                    }`}
                  />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full sm:w-[278px] p-0" align="start">
                <Command>
                  <CommandList>
                    <CommandGroup>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2">
                        {regions.map((region, index) => (
                          <CommandItem
                            key={index}
                            value={region.value}
                            onSelect={() => handleRegionSelect(region.value)}
                            className={cn(
                              'flex items-center gap-2 py-2 px-4 font-normal',
                              selectedRegions.includes(region.value) &&
                                'bg-[#D4E5FF]'
                            )}
                          >
                            {selectedRegions.includes(region.value) && (
                              <Check className="w-4 h-4 text-blue-600" />
                            )}
                            <span
                              className={
                                selectedRegions.includes(region.value)
                                  ? 'ml-0'
                                  : 'ml-6'
                              }
                            >
                              {region.label}
                            </span>
                          </CommandItem>
                        ))}
                      </div>
                    </CommandGroup>
                  </CommandList>
                  <Separator />
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
}
