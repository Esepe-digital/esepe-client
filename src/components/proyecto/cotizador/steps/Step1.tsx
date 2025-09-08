import Image from 'next/image';
import { Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { formatPrice } from '@/lib/utils';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select';
import { Step1Props } from '@/interfaces/cotizador';

export const Step1 = ({
  formData,
  handleChange,
  data,
}: Step1Props & { proyecto: string }) => {
  const selectedModel = data.find((model) => model.nombre === formData.modelo);

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-6">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Elija un modelo
          </label>
          <div className="grid grid-cols-3 gap-3">
            {data.map((modelo, index) => (
              <button
                key={index}
                type="button"
                onClick={() => {
                  handleChange('modelo', modelo.nombre);
                  handleChange('proyecto', modelo.proyecto);
                }}
                className={`flex items-center justify-center py-3 px-4 rounded-md ${
                  formData.modelo === modelo.nombre
                    ? 'bg-[#5B7AAC] text-white'
                    : 'bg-[#EBEBEB] text-gray-700'
                }`}
              >
                {formData.modelo === modelo.nombre && (
                  <Check className="w-4 h-4 mr-1" />
                )}
                {modelo.nombre}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Valor reserva
            </label>
            <Select
              value={formData.pie}
              onValueChange={(value) => handleChange('pie', value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecciona porcentaje" />
              </SelectTrigger>
              <SelectContent>
                {['10%', '15%', '20%', '25%', '30%'].map((value, index) => (
                  <SelectItem key={index} value={value}>
                    {value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div> */}

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Precio desde
            </label>
            <Input
              value={`${
                selectedModel?.precio
                  ? 'UF ' + formatPrice(selectedModel?.precio)
                  : 'No disponible'
              }`}
              className="bg-[#EBEBEB]"
              readOnly
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center lg:justify-end">
        <Card className="w-full max-w-[500px] h-full rounded-[16px] flex items-center justify-center border border-[#C1C1C1]">
          <CardContent className="p-4">
            <div className="grid h-full grid-cols-3 gap-4 sm:gap-8">
              <div className="flex items-center justify-center col-span-1 bg-gray-100 rounded-lg">
                <Image
                  src={selectedModel?.imagenes[0] || '/placeholder'}
                  alt={`Plano del proyecto ${selectedModel?.nombre}`}
                  width={1000}
                  height={1000}
                  objectFit="cover"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center col-span-2">
                <div className="space-y-2">
                  <div>
                    <p className="text-sm text-gray-500">Modelo</p>
                    <p className="font-medium">{selectedModel?.nombre}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Precio desde</p>
                    <p className="text-xl font-bold">
                      {selectedModel?.precio
                        ? 'UF ' + formatPrice(selectedModel?.precio)
                        : 'No disponible'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
