import menuData from "@/data/menu.json";
import type { Language } from "@/lib/i18n";

export interface MenuItemData {
  name: string;
  price: number;
  description?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  emoji: string;
  items: MenuItemData[];
}

interface MenuPayload {
  categories: Array<{
    name: string;
    items: MenuItemData[];
  }>;
}

const categoryCatalog: Record<
  string,
  {
    id: string;
    emoji: string;
    label: Record<Language, string>;
    description: Record<Language, string>;
  }
> = {
  "Cafetaria": {
    id: "coffee",
    emoji: "☕",
    label: { pt: "Cafetaria", en: "Coffee" },
    description: {
      pt: "Bebidas quentes artesanais",
      en: "Handcrafted hot beverages"
    }
  },
  "Padaria & Pastelaria": {
    id: "bakery",
    emoji: "🥐",
    label: { pt: "Padaria & Pastelaria", en: "Bakery & Pastry" },
    description: {
      pt: "Frescos todos os dias",
      en: "Fresh every day"
    }
  },
  "Lanches": {
    id: "snacks",
    emoji: "🥪",
    label: { pt: "Lanches", en: "Snacks" },
    description: {
      pt: "Para qualquer hora do dia",
      en: "For any time of day"
    }
  },
  "Bebidas Frias": {
    id: "cold-drinks",
    emoji: "🥤",
    label: { pt: "Bebidas Frias", en: "Cold Drinks" },
    description: {
      pt: "Sumos e refrigerantes",
      en: "Juices and soft drinks"
    }
  },
  "Menus": {
    id: "combos",
    emoji: "⭐",
    label: { pt: "Menus", en: "Combos" },
    description: {
      pt: "Combinações com valor",
      en: "Great-value combinations"
    }
  },
  "Extra": {
    id: "extras",
    emoji: "✨",
    label: { pt: "Extra", en: "Extras" },
    description: {
      pt: "Opções especiais",
      en: "Special options"
    }
  }
};

const fallbackCategory = {
  id: "other",
  emoji: "🍽️",
  label: { pt: "Outros", en: "Other" },
  description: { pt: "", en: "" }
} as const;

export function getMenuCategories(language: Language): MenuCategory[] {
  const payload = menuData as MenuPayload;
  return payload.categories.map((category) => {
    const catalog = categoryCatalog[category.name] ?? fallbackCategory;

    return {
      id: catalog.id,
      name: catalog.label[language],
      description: catalog.description[language],
      emoji: catalog.emoji,
      items: category.items
    };
  });
}
