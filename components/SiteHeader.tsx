import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/30 bg-white/40 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/55">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-wide text-coffee dark:text-amber-200"
        >
          Amora Café
        </Link>
        <div className="flex items-center gap-3">
          <ul className="flex items-center gap-5 text-sm font-medium text-zinc-700 dark:text-zinc-200">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  className="transition hover:text-coffee dark:hover:text-amber-200"
                  href={link.href}
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
