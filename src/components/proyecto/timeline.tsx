import { TimelineItem, TimelineProps } from '@/interfaces/proyectos/timeline';
import { Check } from 'lucide-react';

const items: TimelineItem[] = [
  { label: 'Prelanzamiento', status: 'completed' },
  { label: 'Lanzamiento', status: 'completed' },
  { label: 'Venta en blanco', status: 'completed' },
  { label: 'Venta en verde', status: 'completed' },
  { label: 'Piloto', status: 'completed' },
  { label: 'Espacios comunes', status: 'completed' },
  { label: 'Pronta entrega', status: 'current', number: 7 },
  { label: 'Entrega', status: 'upcoming', number: 1 },
];

export default function Timeline({
  title = 'Avances de la obra',
}: TimelineProps) {
  const row1 = items.slice(0, 3);
  const row2 = items.slice(3, 6);
  const row3 = items.slice(6, 8);

  return (
    <div className="w-full px-4 py-8 mx-auto max-w-7xl" id="avances">
      {title && (
        <div className="flex items-center justify-center mb-20 sm:mb-28">
          <div className="flex-grow h-px bg-gray-300" />
          <h2 className="px-4 text-2xl font-bold text-gray-800">{title}</h2>
          <div className="flex-grow h-px bg-gray-300" />
        </div>
      )}

      <div className="space-y-14 sm:space-y-0 sm:relative sm:pb-4">
        {/* Línea horizontal en desktop */}
        <div className="hidden sm:block absolute left-0 right-0 h-[2px] bg-[#88A7D7] top-5" />

        {/* MOBILE layout */}
        <div className="sm:hidden space-y-14">
          {/* Fila 1 */}
          <div className="relative grid grid-cols-3 gap-x-4 px-2">
            <div className="absolute top-5 left-0 right-0 h-[2px] bg-[#88A7D7] z-0" />
            {row1.map((item, index) => (
              <TimelineDot item={item} key={`row1-${index}`} />
            ))}
          </div>

          {/* Fila 2 */}
          <div className="relative grid grid-cols-3 gap-x-4 px-2">
            <div className="absolute top-5 left-0 right-0 h-[2px] bg-[#88A7D7] z-0" />
            {row2.map((item, index) => (
              <TimelineDot item={item} key={`row2-${index}`} />
            ))}
          </div>

          {/* Fila 3 (centrados) */}
          <div className="relative grid grid-cols-3 px-2">
            <div className="absolute top-5 left-0 right-0 h-[2px] bg-[#88A7D7] z-0" />
            <div className="col-span-3 flex justify-center gap-8 relative z-10">
              {row3.map((item, index) => (
                <TimelineDot key={`row3-${index}`} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* DESKTOP layout */}
        <div className="hidden sm:grid sm:grid-cols-8 gap-x-4 px-4">
          {items.map((item, index) => (
            <TimelineDot item={item} key={`desktop-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TimelineDot({
  item,
  className = '',
}: {
  item: TimelineItem;
  className?: string;
}) {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center z-10 mb-2 ${
          item.status === 'completed'
            ? 'bg-[#88A7D7] text-white'
            : item.status === 'current'
              ? 'bg-gray-700 text-white'
              : 'bg-gray-200 text-gray-500'
        }`}
      >
        {item.status === 'completed' ? (
          <Check className="w-5 h-5" />
        ) : (
          <span className="font-medium">{item.number}</span>
        )}
      </div>
      <span className="text-xs sm:text-sm text-gray-700 max-w-[80px] sm:max-w-[100px]">
        {item.label}
      </span>
    </div>
  );
}
