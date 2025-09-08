export type SaleStatus = 'en-venta' | 'vendidos';
export type PropertyType = 'casas' | 'departamentos' | 'ambos';

export interface Region {
  value: string;
  label: string;
}

export interface ProyectosFilterProps {
  saleStatus: SaleStatus;
  setSaleStatus: (status: SaleStatus) => void;
  propertyType: PropertyType;
  setPropertyType: (type: PropertyType) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  selectedRegions: string[];
  handleRegionSelect: (value: string) => void;
  getSelectedRegionsLabel: () => string;
  regions: Region[];
}
