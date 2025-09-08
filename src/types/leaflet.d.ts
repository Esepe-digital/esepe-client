declare module 'leaflet' {
  export class Icon {
    constructor(options: {
      iconUrl: string;
      iconSize: [number, number];
      iconAnchor: [number, number];
      popupAnchor: [number, number];
    });
  }

  export interface TileLayerOptions {
    url: string;
    attribution?: string;
  }

  export interface MapOptions {
    center: [number, number];
    zoom: number;
    style?: { [key: string]: string };
  }

  export interface MarkerOptions {
    position: [number, number];
    icon?: Icon;
  }
}
