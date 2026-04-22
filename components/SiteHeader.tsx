import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { href: "/", label: "Início" },
  { href: "/menu", label: "Menu" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-amber-100/70 bg-white/90 backdrop-blur-xl transition-colors duration-300 hover:border-amber-100/40 hover:bg-white/35 dark:border-white/8 dark:bg-zinc-950/90 dark:hover:border-white/10 dark:hover:bg-zinc-950/35">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3.5 sm:px-6">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <span
            className="flex h-8 w-8 items-center justify-center rounded-xl bg-coffee text-base shadow-sm transition-colors group-hover:bg-mocha"
            aria-hidden="true"
          >
            ☕
          </span>
          <span className="font-serif text-lg font-bold tracking-wide text-espresso dark:text-amber-100">
            Amora Café
          </span>
        </Link>

        {/* Nav + toggle */}
        <div className="flex items-center gap-2">
          <ul className="flex items-center gap-1 text-sm font-medium">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-full px-4 py-2 text-zinc-600 transition-colors hover:bg-amber-50 hover:text-coffee dark:text-zinc-400 dark:hover:bg-zinc-800/60 dark:hover:text-amber-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
