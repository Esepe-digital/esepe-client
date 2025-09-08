'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Filter } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';

import modeloa from '@/assets/proyecto-ph/modeloa.jpg';
import modeloa1 from '@/assets/proyecto-ph/modeloa1.jpg';
import modeloa2 from '@/assets/proyecto-ph/modeloa2.jpg';
import modeloa3 from '@/assets/proyecto-ph/modeloa3.jpg';
import modeloa4 from '@/assets/proyecto-ph/modeloa4.jpg';
import modeloa5 from '@/assets/proyecto-ph/modeloa5.jpg';
import modeloa6 from '@/assets/proyecto-ph/modeloa6.jpg';
import modelob from '@/assets/proyecto-ph/modelob.jpg';

import AngleIcon from '@/assets/icons/angle-tool.svg';
import BathIcon from '@/assets/icons/bathroom.svg';
import RoomIcon from '@/assets/icons/bedroom.svg';
import FrameIcon from '@/assets/icons/frame.svg';

// Define the model type
interface ModeloProps {
  id: string;
  nombre: string;
  precio: string;
  dormitorios: string;
  banos: string;
  metrosCuadrados: string;
  metrosCuadradosAlt?: string;
  imagen: string;
}

// Sample data for the models
const modelos: ModeloProps[] = [
  {
    id: 'a',
    nombre: 'Modelo A',
    precio: 'UF 3.066',
    dormitorios: '1 a 3',
    banos: '1 a 2',
    metrosCuadrados: '112 a 140 m²',
    metrosCuadradosAlt: '112 a 140 m²',
    imagen: modeloa.src,
  },
  {
    id: 'a1',
    nombre: 'Modelo A1',
    precio: 'UF 3.358',
    dormitorios: '1 a 3',
    banos: '1 a 2',
    metrosCuadrados: '112 a 140 m²',
    metrosCuadradosAlt: '112 a 140 m²',
    imagen: modeloa1.src,
  },
  {
    id: 'a2',
    nombre: 'Modelo A2',
    precio: 'UF 3.547',
    dormitorios: '1 a 3',
    banos: '1 a 2',
    metrosCuadrados: '112 a 140 m²',
    metrosCuadradosAlt: '112 a 140 m²',
    imagen: modeloa2.src,
  },
  {
    id: 'a3',
    nombre: 'Modelo A3',
    precio: 'UF 3.547',
    dormitorios: '1 a 3',
    banos: '1 a 2',
    metrosCuadrados: '112 a 140 m²',
    metrosCuadradosAlt: '112 a 140 m²',
    imagen: modeloa3.src,
  },
  {
    id: 'a4',
    nombre: 'Modelo A4',
    precio: 'UF 3.547',
    dormitorios: '1 a 3',
    banos: '1 a 2',
    metrosCuadrados: '112 a 140 m²',
    metrosCuadradosAlt: '112 a 140 m²',
    imagen: modeloa4.src,
  },
  {
    id: 'a5',
    nombre: 'Modelo A5',
    precio: 'UF 3.547',
    dormitorios: '1 a 3',
    banos: '1 a 2',
    metrosCuadrados: '112 a 140 m²',
    metrosCuadradosAlt: '112 a 140 m²',
    imagen: modeloa5.src,
  },
  {
    id: 'a6',
    nombre: 'Modelo A6',
    precio: 'UF 3.547',
    dormitorios: '1 a 3',
    banos: '1 a 2',
    metrosCuadrados: '112 a 140 m²',
    metrosCuadradosAlt: '112 a 140 m²',
    imagen: modeloa6.src,
  },
  {
    id: 'b',
    nombre: 'Modelo B',
    precio: 'UF 3.547',
    dormitorios: '1 a 3',
    banos: '1 a 2',
    metrosCuadrados: '112 a 140 m²',
    metrosCuadradosAlt: '112 a 140 m²',
    imagen: modelob.src,
  },
  {
    id: 'b',
    nombre: 'Modelo B',
    precio: 'UF 3.547',
    dormitorios: '1 a 3',
    banos: '1 a 2',
    metrosCuadrados: '112 a 140 m²',
    metrosCuadradosAlt: '112 a 140 m²',
    imagen: modelob.src,
  },
];

// Model card component
function ModeloCard({ modelo }: { modelo: ModeloProps }) {
  return (
    <Card className="overflow-hidden border-0 shadow-sm">
      <div className="p-4 flex justify-center h-[400px]">
        <Image
          src={modelo.imagen || '/placeholder.svg'}
          alt={modelo.nombre}
          width={800}
          height={900}
          className="object-cover w-full h-full rounded-t-lg"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="mb-1 text-xl font-semibold">{modelo.nombre}</h3>
        <p className="mb-2 text-sm text-muted-foreground">Desde</p>
        <p className="mb-4 text-lg font-bold">{modelo.precio}</p>

        <div className="grid grid-cols-2 gap-2 mb-2">
          <div className="flex items-center gap-2">
            <RoomIcon className="text-gray-500 h-7 w-7" />
            <span className="text-sm">{modelo.dormitorios}</span>
          </div>
          <div className="flex items-center gap-2">
            <BathIcon className="text-gray-500 h-7 w-7" />
            <span className="text-sm">{modelo.banos}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center gap-2">
            <AngleIcon className="text-gray-500 h-7 w-7" />
            <span className="text-sm">{modelo.metrosCuadrados}</span>
          </div>
          <div className="flex items-center gap-2">
            <FrameIcon className="text-gray-500 h-7 w-7" />
            <span className="text-sm">{modelo.metrosCuadradosAlt}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="gap-2 p-4 pt-0">
        <Button variant="outline" className="w-full rounded-full">
          Cotizar
        </Button>
        <Button className="w-full bg-[#1e3a5c] hover:bg-[#152a42] rounded-full">
          Reservar
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function ModelosDisponibles() {
  const [tipoModelo, setTipoModelo] = useState<string>('');

  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="mb-10 text-center">
        <div className="flex items-center justify-center mb-10">
          <div className="w-8 h-px bg-gray-300 md:w-16"></div>
          <h2 className="mx-6 text-3xl font-bold">Modelos disponibles</h2>
          <div className="w-8 h-px bg-gray-300 md:w-16"></div>
        </div>

        <div className="max-w-xs mx-auto mb-8">
          <Label htmlFor="tipo-modelo" className="block mb-2 text-left">
            Tipo de Modelo
          </Label>
          <Select value={tipoModelo} onValueChange={setTipoModelo}>
            <SelectTrigger id="tipo-modelo" className="w-full">
              <div className="flex items-center">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Elije una opción" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos los modelos</SelectItem>
              <SelectItem value="a">Modelo A</SelectItem>
              <SelectItem value="a1">Modelo A1</SelectItem>
              <SelectItem value="a2">Modelo A2</SelectItem>
              <SelectItem value="a3">Modelo A3</SelectItem>
              <SelectItem value="a4">Modelo A4</SelectItem>
              <SelectItem value="a5">Modelo A5</SelectItem>
              <SelectItem value="a6">Modelo A6</SelectItem>
              <SelectItem value="b">Modelo B</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {modelos
          .filter(
            (modelo) =>
              !tipoModelo || tipoModelo === 'todos' || modelo.id === tipoModelo
          )
          .map((modelo, index) => (
            <ModeloCard key={index} modelo={modelo} />
          ))}
      </div>
    </div>
  );
}
