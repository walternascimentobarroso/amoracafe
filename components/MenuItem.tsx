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
    <article className="glass-card rounded-xl p-4 transition hover:-translate-y-0.5 hover:shadow-xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">{name}</h3>
          {description ? (
            <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              {description}
            </p>
          ) : null}
        </div>
        <p className="shrink-0 text-2xl font-extrabold text-coffee dark:text-amber-200">
          {formatPrice(price)}
        </p>
      </div>
    </article>
  );
}
