import { InmuebleBackend, LoteConCoord } from '@/interfaces/cotizador';
import { PropertyCardInterface } from '@/interfaces/proyectos/model-card';

export function convertToInmuebleBackend(
  props: PropertyCardInterface[]
): InmuebleBackend[] {
  return props.map((prop) => ({
    id: prop.id,
    nombre: prop.nombre,
    modelo: prop.modelo,
    tipo: prop.tipo,
    etapa: prop.etapa,
    precio: prop.precio ?? '',
    region: prop.region ?? '',
    comuna: prop.comuna ?? '',
    NRO_INMUEBLE: prop.id,
  }));
}
export function mapInmueblesToLotes(
  data: InmuebleBackend[],
  lotesCoords: Record<string, { top: number; left: number }>
): LoteConCoord[] {
  return data
    .map((item) => {
      const key = Object.keys(lotesCoords).find((k) =>
        item.nombre.startsWith(k)
      );
      if (!key) {
        return null;
      }
      const coords = lotesCoords[key];

      return {
        ID_INMUEBLE: key,
        NRO_INMUEBLE: item.nombre,
        MODELO: item.modelo,
        PRECIO_LISTA: String(item.precio),
        ORIENTACION: item.orientacion || 'N/A',
        SUPERFICIE_TOTAL: item.superficie_total || 'N/A',
        top: coords.top,
        left: coords.left,
        etapa: item.etapa || '',
      };
    })
    .filter((item): item is LoteConCoord => item !== null);
}
