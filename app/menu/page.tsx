import { MenuSection } from "@/components/MenuSection";
import { getMenuCategories } from "@/lib/menu";

export default function MenuPage() {
  const categories = getMenuCategories();

  return (
    <main className="mx-auto max-w-5xl px-4 pb-16 pt-10 sm:px-6 sm:pt-14">
      <header className="glass-card mb-10 p-6 sm:p-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          Menu
        </h1>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300 sm:text-base">
          Consulte os preços atualizados da nossa cafetaria e pastelaria.
        </p>
      </header>

      <div className="space-y-10">
        {categories.map((category) => (
          <MenuSection key={category.name} name={category.name} items={category.items} />
        ))}
      </div>
    </main>
  );
}
