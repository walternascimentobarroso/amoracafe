import { MenuItem } from "@/components/MenuItem";

interface MenuCategoryItem {
  name: string;
  translatedName?: string;
  price: number;
  description?: string;
}

interface MenuSectionProps {
  id: string;
  emoji: string;
  name: string;
  description: string;
  items: MenuCategoryItem[];
}

export function MenuSection({ id, emoji, name, description, items }: MenuSectionProps) {
  return (
    <section aria-label={name} id={id}>
      {/* Section heading */}
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-xl shadow-sm dark:bg-amber-900/20">
          <span aria-hidden="true">{emoji}</span>
        </div>
        <div>
          <h2 className="font-serif text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            {name}
          </h2>
          {description ? (
            <p className="text-xs text-zinc-400 dark:text-zinc-500">
              {description}
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
            translatedName={item.translatedName}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
