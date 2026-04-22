import { MenuSection } from "@/components/MenuSection";
import { getMenuCategories } from "@/lib/menu";

export default function MenuPage() {
  const categories = getMenuCategories();

  return (
    <main className="mx-auto max-w-5xl px-4 pb-20 pt-10 sm:px-6 sm:pt-14">
      <header className="mb-14">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-coffee dark:text-amber-400">
          Amora Café
        </p>
        <h1 className="mt-2 font-serif text-4xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          Menu
        </h1>
        <p className="mt-3 max-w-md text-base text-zinc-500 dark:text-zinc-400">
          Consulte os preços atualizados da nossa cafetaria e pastelaria.
        </p>
        <div className="mt-6 h-0.5 w-16 rounded-full bg-coffee/25 dark:bg-amber-400/30" />
      </header>

      <div className="space-y-16">
        {categories.map((category) => (
          <MenuSection key={category.name} name={category.name} items={category.items} />
        ))}
      </div>
    </main>
  );
}
