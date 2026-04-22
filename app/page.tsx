import Link from "next/link";

const highlights = [
  { icon: "☕", text: "Café a partir de €0.90" },
  { icon: "🥐", text: "Pastel de nata fresco todos os dias" },
  { icon: "📍", text: "Em frente à estação de comboios Guimarães" }
];

const openingHours = [
  { day: "Segunda a Sexta", time: "07:00 – 19:00" },
  { day: "Sábado", time: "08:00 – 20:00" },
  { day: "Domingo", time: "Fechado" }
];

export default function HomePage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-espresso">
        {/* Deep coffee gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#110500] via-espresso to-mocha" />
        {/* Warm glow orbs */}
        <div className="absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-amber-700/20 blur-[130px]" />
        <div className="absolute -bottom-40 -left-40 h-[480px] w-[480px] rounded-full bg-amber-500/10 blur-[110px]" />

        <div className="relative mx-auto max-w-5xl px-4 py-28 sm:px-6 sm:py-40">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-amber-400">
            ✦ &nbsp; Guimarães, Portugal
          </p>
          <h1 className="mt-5 font-serif text-6xl font-bold leading-[1.08] text-white sm:text-7xl lg:text-8xl">
            Amora
            <br />
            <span className="text-amber-300">Café</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-amber-100/70 sm:text-lg">
            Café artesanal, pastelaria fresca e pequenos-almoços acolhedores no
            coração de Guimarães.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2.5 rounded-full bg-amber-400 px-8 py-4 text-sm font-bold text-stone-900 shadow-xl shadow-amber-900/30 transition-all duration-200 hover:scale-105 hover:bg-amber-300"
            >
              Ver Menu completo
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="https://wa.me/351910000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              Fazer pedido
            </a>
          </div>
        </div>
      </section>

      {/* ── Highlights ── */}
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-3">
          {highlights.map((h) => (
            <article
              key={h.text}
              className="section-card flex items-center gap-4 px-6 py-5"
            >
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-xl dark:bg-amber-900/20"
                aria-hidden="true"
              >
                {h.icon}
              </span>
              <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                {h.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Info ── */}
      <section className="mx-auto grid max-w-5xl gap-6 px-4 pb-20 sm:grid-cols-2 sm:px-6">
        {/* Hours */}
        <article className="section-card p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 dark:bg-amber-900/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-coffee dark:text-amber-400"
                aria-hidden="true"
              >
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
              </svg>
            </div>
            <h2 className="font-serif text-xl font-bold text-zinc-900 dark:text-zinc-50">
              Horário
            </h2>
          </div>
          <ul className="space-y-3">
            {openingHours.map((entry) => (
              <li
                key={entry.day}
                className="flex items-center justify-between gap-3 text-sm"
              >
                <span className="text-zinc-500 dark:text-zinc-400">
                  {entry.day}
                </span>
                <span className="font-semibold tabular-nums text-zinc-900 dark:text-zinc-100">
                  {entry.time}
                </span>
              </li>
            ))}
          </ul>
          <div className="my-6 h-px bg-gradient-to-r from-amber-100 via-amber-50 to-transparent dark:from-zinc-700 dark:via-zinc-800" />
          <a
            href="https://wa.me/351910000000"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-coffee px-6 py-3 text-sm font-semibold text-white transition hover:bg-mocha dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
          >
            Fazer pedido →
          </a>
        </article>

        {/* Map */}
        <article className="section-card overflow-hidden p-2">
          <iframe
            title="Localização Amora Café"
            src="https://www.google.com/maps?q=41.4356749,-8.2949616&z=17&output=embed"
            loading="lazy"
            className="h-full min-h-72 w-full rounded-xl border-0"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </article>
      </section>
    </main>
  );
}
