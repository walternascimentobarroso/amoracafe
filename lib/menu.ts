import menuData from "@/data/menu.json";

export interface MenuItemData {
  name: string;
  price: number;
  description?: string;
}

export interface MenuCategory {
  name: string;
  items: MenuItemData[];
}

interface MenuPayload {
  categories: MenuCategory[];
}

export function getMenuCategories(): MenuCategory[] {
  const payload = menuData as MenuPayload;
  return payload.categories;
}
