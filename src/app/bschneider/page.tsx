import BschneiderBanner from '@/components/bschneider/banner';
import AlgunosProyectos from '@/components/bschneider/projects-grid';
import Metodologia from '@/components/bschneider/metodologia';
import NuestroEquipo from '@/components/bschneider/equipo';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function Page() {
  return (
    <section>
      <BschneiderBanner />
      <AlgunosProyectos />
      <div className="bg-[#F5F5F5]">
        <Metodologia />
      </div>
      <NuestroEquipo />
    </section>
  );
}
