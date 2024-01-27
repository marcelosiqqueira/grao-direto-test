import { MenuItem } from "./menu-item.model";

export interface Restaurant {
  id: number;
  name: string;
  logoImage: string;
  bannerImage: string;
  rating: number; // avaliação
  deliveryTime: string; // tempo de entrega
  deliveryFee: number; // valor da entrega
  distance: string; // distância
  menuItems: MenuItem[];
}
