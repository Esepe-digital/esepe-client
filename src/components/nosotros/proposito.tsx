interface PropositoProps {
  proposito: {
    titulo: string;
    descripcion: string;
  };
  vision: {
    titulo: string;
    descripcion: string;
  };
}

export default function Proposito({ proposito, vision }: PropositoProps) {
  return (
    <section className="w-full md:h-[271px] bg-[#F5F5F5] mt-6">
      <div className="px-4 py-12 w-full">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-40 w-full">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              {proposito.titulo}
            </h2>
            <p className="text-gray-600 max-w-md text-center h-[100px]">
              {proposito.descripcion}
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              {vision.titulo}
            </h2>
            <p className="text-gray-600 max-w-md text-center h-[100px]">
              {vision.descripcion}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
