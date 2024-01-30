import { MenuItem } from "./menu-item.model";
import { Restaurant } from "./restaurant.model";


export interface SearchResult {
  restaurants: Restaurant[],
  menuItems: MenuItem[]
}
