import Image from 'next/image';
import reserva from '@/assets/images/proceso/reserva.png';
import promesa from '@/assets/images/proceso/promesa.png';
import escritura from '@/assets/images/proceso/firma.png';
import entrega from '@/assets/images/proceso/entrega.png';

export default function ProcesoDeCompra() {
  const steps = [
    {
      number: 1,
      title: 'Reserva',
      description:
        'Elige tu hogar y resérvalo mediante un documento que asegura precio y propiedad.',
      image: reserva.src,
    },
    {
      number: 2,
      title: 'Promesa de compraventa',
      description:
        'Este contrato fija valor, ubicación y forma de pago. En caso de venta en verde incluye póliza de respaldo.',
      image: promesa.src,
    },
    {
      number: 3,
      title: 'Firma de escritura',
      description:
        'Con la recepción lista, firmas escritura ante notario junto a inmobiliaria y entidad financiera.',
      image: escritura.src,
    },
    {
      number: 4,
      title: 'Entrega y Postventa',
      description:
        'Tras la firma, entregamos tu hogar en 15 días y revisamos contigo cada detalle en la postventa.',
      image: entrega.src,
    },
  ];

  return (
    <div className="container max-w-6xl px-4 py-12 mx-auto">
      <div className="mb-24 text-center">
        <h2 className="flex items-center justify-center mb-6 text-3xl font-bold md:text-4xl">
          <span className="hidden w-32 h-px mr-6 text-center bg-gray-300 md:block heading-2"></span>
          Proceso de Compra de tu nuevo hogar
          <span className="hidden w-32 h-px ml-6 bg-gray-300 md:block"></span>
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          Sabemos que <strong>comprar una casa</strong> es una de las decisiones
          más importantes de tu vida, y en ESEPE estamos aquí para hacerlo fácil
          y transparente. Por eso, nuestro asesor te guiará en cada paso del
          proceso, asegurándose de que disfrutes esta experiencia con total
          confianza. ¡Déjanos acompañarte en esta gran etapa!
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 mb-10 md:grid-cols-2 lg:grid-cols-4 ">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="relative mb-4">
              <div className="relative w-48 h-48 overflow-hidden rounded-full">
                <Image
                  src={step.image || '/placeholder.svg'}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute top-0 left-6 w-12 h-12 rounded-full bg-white flex items-center justify-center border-2 border-[#123752] transform -translate-y-1/3">
                <span className="text-xl font-bold text-[#123752]">
                  {step.number}
                </span>
              </div>
            </div>
            <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
            <p className="text-sm text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>

      {/* <div className="flex justify-center">
        <Button
          variant="outline"
          className="rounded-full px-6 border-2 border-[#7E92B2] text-[#7E92B2] hover:bg-[#7E92B2] hover:text-white transition-colors"
        >
          Conoce más
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div> */}
    </div>
  );
}
