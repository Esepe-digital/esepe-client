export interface HeroBanner {
  media: Media;
  title: string;
  description: string;
  price: string;
  commune: string;
  projectColor: string;
  avance_de_obra: string[];
}

interface Media {
  type: string;
  url: string;
}
