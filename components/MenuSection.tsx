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

export function MenuSection({ name, items }: MenuSectionProps) {
  return (
    <section aria-label={name} className="space-y-4">
      <h2 className="text-2xl font-bold text-coffee dark:text-amber-300">{name}</h2>
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
