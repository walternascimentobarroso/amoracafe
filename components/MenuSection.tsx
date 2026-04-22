import { MenuItem } from "@/components/MenuItem";

interface MenuCategoryItem {
  name: string;
  price: number;
  description?: string;
}

interface MenuSectionProps {
  name: string;
  items: MenuCategoryItem[];
}

const categoryConfig: Record<string, { emoji: string; description: string }> = {
  "Cafetaria": { emoji: "☕", description: "Bebidas quentes artesanais" },
  "Padaria & Pastelaria": { emoji: "🥐", description: "Frescos todos os dias" },
  "Lanches": { emoji: "🥪", description: "Para qualquer hora do dia" },
  "Bebidas Frias": { emoji: "🥤", description: "Sumos e refrigerantes" },
  "Menus": { emoji: "⭐", description: "Combinações com valor" },
  "Extra": { emoji: "✨", description: "Opções especiais" }
};

export function MenuSection({ name, items }: MenuSectionProps) {
  const config = categoryConfig[name] ?? { emoji: "🍽️", description: "" };

  return (
    <section aria-label={name}>
      {/* Section heading */}
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-xl shadow-sm dark:bg-amber-900/20">
          <span aria-hidden="true">{config.emoji}</span>
        </div>
        <div>
          <h2 className="font-serif text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            {name}
          </h2>
          {config.description ? (
            <p className="text-xs text-zinc-400 dark:text-zinc-500">
              {config.description}
            </p>
          ) : null}
        </div>
        <div className="hidden h-px flex-1 bg-gradient-to-r from-amber-100 to-transparent dark:from-zinc-700 sm:block" />
      </div>

      {/* Items grid */}
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <MenuItem
            key={`${name}-${item.name}`}
            name={item.name}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
