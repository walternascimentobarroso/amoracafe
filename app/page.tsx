import Link from "next/link";

const highlights = [
  "Café a partir de €0.90",
  "Pastel de nata fresco todos os dias",
  "Em frente à estação rodoviária"
];

const openingHours = [
  { day: "Segunda a Sexta", time: "07:30 - 19:30" },
  { day: "Sábado", time: "08:00 - 18:00" },
  { day: "Domingo", time: "08:00 - 13:00" }
];

export default function HomePage() {
  return (
    <main>
      <section className="mx-auto max-w-5xl px-4 pb-12 pt-16 sm:px-6 sm:pt-24">
        <div className="glass-card rounded-3xl p-8 sm:p-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-coffee dark:text-amber-300">
            Guimarães
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            Amora Café
          </h1>
          <p className="mt-4 max-w-2xl text-base text-zinc-700 dark:text-zinc-300 sm:text-lg">
            Café, pastelaria e pequenos-almoços em Guimarães
          </p>
          <Link
            href="/menu"
            className="mt-8 inline-flex rounded-full bg-coffee px-6 py-3 text-sm font-semibold text-white transition hover:bg-mocha dark:bg-amber-200 dark:text-zinc-900 dark:hover:bg-amber-100"
          >
            Ver Menu
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-12 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-3">
          {highlights.map((highlight) => (
            <article key={highlight} className="glass-card p-5">
              <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{highlight}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-6 px-4 pb-16 sm:grid-cols-2 sm:px-6">
        <article className="glass-card p-6">
          <h2 className="text-xl font-bold text-coffee dark:text-amber-300">Horário</h2>
          <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            {openingHours.map((entry) => (
              <li key={entry.day} className="flex items-center justify-between gap-3">
                <span>{entry.day}</span>
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">{entry.time}</span>
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/351910000000"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full border border-coffee px-4 py-2 text-sm font-semibold text-coffee transition hover:bg-coffee hover:text-white dark:border-amber-300 dark:text-amber-200 dark:hover:bg-amber-200 dark:hover:text-zinc-900"
          >
            Fazer pedido
          </a>
        </article>

        <article className="glass-card overflow-hidden p-2">
          <iframe
            title="Localização Amora Café"
            src="https://www.google.com/maps?q=Guimar%C3%A3es%20Esta%C3%A7%C3%A3o%20Rodovi%C3%A1ria&output=embed"
            loading="lazy"
            className="h-72 w-full rounded-xl border-0"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </article>
      </section>
    </main>
  );
}
