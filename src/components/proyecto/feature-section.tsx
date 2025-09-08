import KitchenIcon from '@/assets/icons/cook-icon.svg';
import WindowIcon from '@/assets/icons/window-icon.svg';
import BedIcon from '@/assets/icons/bed-icon.svg';
import BathIcon from '@/assets/icons/bath-icon.svg';
import HomeIcon from '@/assets/icons/houses-icon2.svg';
import CasitaIcon from '@/assets/icons/casita.svg';
import EdificioIcon from '@/assets/icons/edificio.svg';
import M2Icon from '@/assets/icons/m2.svg';
import Mixer from '@/assets/icons/mixer.svg';

import { FeatureSection as FeatureSectionType } from '@/interfaces/proyectos/featureSection';
interface FeatureItemProps {
  feature: {
    icon: React.ReactNode;
    title: string;
  };
}
const getPropertyIcon = (tipo: string) => {
  const tipoLower = tipo.toLowerCase();
  if (tipoLower === 'departamento')
    return <EdificioIcon className="w-30 h-30" />;

  return <CasitaIcon className="w-35 h-35" />;
};
function FeatureItem({ feature }: FeatureItemProps) {
  return (
    <div className="flex flex-col items-center justify-start w-full max-w-[235px] min-h-[150px] p-4 text-center">
      <div className="flex items-center justify-center w-32 h-32 mb-4 bg-[#F5F8FF] rounded-full overflow-hidden">
        {feature.icon}
      </div>
      <p className="text-gray-600 text-md">{feature.title}</p>
    </div>
  );
}
export default function FeatureSectionComponent({
  data,
}: {
  data: FeatureSectionType;
}) {
  const {
    title,
    modelsDescription,
    kitchenDescription,
    luxuryDescription,
    amenitiesDescription,
    floorplansDescription,
    terrainDescription,
    generalDescription,
    tipoPropiedad,
    materialConstruction,
  } = data;

  const features = [
    {
      icon: getPropertyIcon(tipoPropiedad?.[0] || ''),
      title: modelsDescription,
    },
    {
      icon: <KitchenIcon className="w-30 h-30" />,
      title: kitchenDescription,
    },
    {
      icon: <WindowIcon className="w-30 h-30" />,
      title: luxuryDescription,
    },
    {
      icon: <Mixer className="w-30 h-30" />,
      title: materialConstruction,
    },
    {
      icon: <BedIcon className="w-30 h-30" />,
      title: amenitiesDescription,
    },
    {
      icon: <BathIcon className="w-30 h-30" />,
      title: floorplansDescription,
    },
    {
      icon: <M2Icon className="w-30 h-30" />,
      title: terrainDescription,
    },
    {
      icon: <HomeIcon className="w-30 h-30" />,
      title: generalDescription,
    },
  ].filter((feature) => feature.title);
  return (
    <section
      className="px-4 py-16 mx-auto bg-white md:py-24 max-w-7xl"
      id="descripcion"
    >
      <h2 className="flex items-center justify-center gap-4 mb-12 text-2xl font-bold text-center md:text-3xl lg:text-4xl md:mb-16">
        <span className="hidden w-16 h-px bg-gray-300 md:block lg:w-32"></span>
        Que bien hace vivir en {title}
        <span className="hidden w-16 h-px bg-gray-300 md:block lg:w-32"></span>
      </h2>

      <div className="flex flex-col items-center space-y-12">
        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(
            (feature, index) =>
              feature.title && (
                <div
                  key={index}
                  className={`flex justify-center ${
                    index >= 4 && features.length % 4 !== 0
                      ? 'lg:col-span-1'
                      : ''
                  }`}
                >
                  <FeatureItem feature={feature} />
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
}
