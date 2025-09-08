export interface GalleryImage {
  src: string;
  alt: string;
  type?: 'image' | 'video';
  thumbnail?: string;
}

export interface ImageGalleryProps {
  images: GalleryImage[];
}
