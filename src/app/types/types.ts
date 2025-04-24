export interface Flower {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    category: string;
    colors?: string[];
    season?: string;
  }
  
  export interface GalleryImage {
    id: number;
    src: string;
    alt: string;
    title: string;
    category: string;
  }