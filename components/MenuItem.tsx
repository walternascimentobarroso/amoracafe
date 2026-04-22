interface MenuItemProps {
  name: string;
  price: number;
  description?: string;
}

function formatPrice(price: number): string {
  return `€${price.toFixed(2)}`;
}

export function MenuItem({ name, price, description }: MenuItemProps) {
  return (
    <article className="menu-card group flex items-start justify-between gap-4 p-5">
      <div className="min-w-0 flex-1">
        <h3 className="text-[15px] font-semibold leading-snug text-zinc-900 dark:text-zinc-100">
          {name}
        </h3>
        {description ? (
          <p className="mt-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            {description}
          </p>
        ) : null}
      </div>
      <div className="shrink-0 rounded-xl bg-amber-50 px-3 py-1.5 ring-1 ring-amber-100 dark:bg-amber-900/15 dark:ring-amber-900/30">
        <p className="text-xl font-extrabold tabular-nums text-coffee dark:text-amber-400">
          {formatPrice(price)}
        </p>
      </div>
    </article>
  );
}
