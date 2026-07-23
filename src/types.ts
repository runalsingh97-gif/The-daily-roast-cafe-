export type CategoryType = 'all' | 'hot-coffee' | 'cold-brews' | 'artisanal-tea' | 'fresh-bakery' | 'snacks';

export interface MenuItem {
  id: string;
  title: string;
  description: string;
  category: CategoryType;
  price: number;
  image: string;
  isVeg: boolean;
  isVegan: boolean;
  isGlutenFree?: boolean;
  isBestseller?: boolean;
  calories?: string;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  specialNotes?: string;
}

export interface ReservationData {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  occasion: string;
  specialRequest?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  caption: string;
}
