import { MenuItem } from "./menu-item.model";

export interface Restaurant {
  id: number;
  name: string;
  logoImage: string;
  bannerImage: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: number;
  distance: string;
  address: string,
  phone: string
  menuItems?: MenuItem[];
}
