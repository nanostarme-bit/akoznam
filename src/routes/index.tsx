import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-father-child.jpg";
import familyImg from "@/assets/family-together.jpg";
import justiceImg from "@/assets/justice-scale.jpg";
import silhouetteImg from "@/assets/silhouette.jpg";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Roditeljski Front — Pravo da budete roditelj ne sme zavisiti od pola" },
      {
        name: "description",
        content:
          "Besplatna pravna pomoć i podrška roditeljima — prvenstveno očevima — koji se bore za pravo da viđaju svoju decu.",
      },
      { property: "og:title", content: "Roditeljski Front" },
      {
        property: "og:description",
        content: "Borba za jednaka roditeljska prava u Srbiji.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="grain min-h-screen overflow-x-clip bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <Marquee />
      <Problem />
      <Manifest />
      <Work />
      <LegalTips />
      <Stats />
      <Goal />
      <Testimonial />
      <CTA />
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section id="pocetna" className="relative pt-20 overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-3xl float-slow" />
      <div aria-hidden className="pointer-events-none absolute top-40 -right-24 h-[24rem] w-[24rem] rounded-full bg-moss/15 blur-3xl float-slower" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 pt-16 lg:pt-24 pb-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-7 reveal">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground mb-8">
              <span className="h-px w-12 bg-foreground" />
              Roditeljski Front · roditeljskifront.org
            </div>
            <h1 className="font-display text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.95] tracking-[-0.03em] text-balance">
              <span className="shimmer">Pravo da budete</span>{" "}
              <span className="italic font-light text-accent">roditelj</span>
              <br />
              ne sme zavisiti{" "}
              <span className="italic font-light">od pola.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
              Pomažemo roditeljima — prvenstveno očevima — koji su žrtve
              zastarelog pravnog sistema. Kada vaš bivši partner koristi decu
              kao oružje, mi smo tu da se borimo za vaša prava.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#pomoc"
                className="group inline-flex items-center gap-3 rounded-full bg-foreground text-background pl-7 pr-3 py-3 text-sm font-medium hover:bg-accent transition-colors"
              >
                Traži Pomoć
                <span className="grid place-items-center h-8 w-8 rounded-full bg-background text-foreground group-hover:translate-x-0.5 transition-transform">
                  →
                </span>
              </a>
              <a
                href="#o-nama"
                className="inline-flex items-center gap-2 text-sm font-medium border-b border-foreground/40 pb-1 hover:border-accent hover:text-accent transition-colors"
              >
                Saznaj više o našoj borbi
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 reveal">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted">
              <img
                src={heroImg}
                alt="Otac drži dete za ruku"
                width={1600}
                height={1920}
                className="ken h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-background">
                <div className="text-[10px] uppercase tracking-[0.3em] opacity-80">
                  N° 01 — Manifest
                </div>
                <div className="font-display italic text-xl mt-1">
                  „Otac nije posetilac."
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
              <span>Est. 2014</span>
              <span className="h-px flex-1 mx-4 bg-border" />
              <span>Beograd · Novi Sad · Niš</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Besplatna pravna pomoć",
    "Zajedničko starateljstvo",
    "Psihološka podrška",
    "Zaštita od manipulacije",
    "Roditeljstvo bez pola",
  ];
  return (
    <div className="border-y border-border bg-foreground text-background overflow-hidden">
      <div className="flex marquee whitespace-nowrap py-5">
        {[...items, ...items, ...items, ...items].map((t, i) => (
          <span
            key={i}
            className="font-display italic text-2xl px-8 flex items-center gap-8"
          >
            {t}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Problem() {
  const cards = [
    {
      n: "01",
      title: "Zastareli Zakoni",
      body: "Porodični zakon u Srbiji datira iz drugog vremena i automatski favorizuje majke u sporovima za starateljstvo, bez obzira na okolnosti.",
    },
    {
      n: "02",
      title: "Otuđivanje Dece",
      body: "Mnogi očevi mesecima ili godinama ne mogu da vide svoju decu jer sistem dozvoljava zloupotrebu pravnog procesa.",
    },
    {
      n: "03",
      title: "Neravnopravnost",
      body: "Čak i kada je otac bolji roditelj, sudovi često donose odluke bazirane na stereotipima, a ne na činjenicama.",
    },
  ];
  return (
    <section id="o-nama" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4">
              ▍Problem
            </div>
            <h2 className="font-display text-5xl lg:text-7xl leading-[0.95] tracking-tight">
              Sistem koji je{" "}
              <span className="italic font-light">zakazao.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 flex items-end">
            <p className="text-lg lg:text-xl leading-relaxed text-muted-foreground max-w-2xl text-pretty">
              U Srbiji, hiljade očeva svake godine gubi kontakt sa svojom
              decom — ne zato što su loši roditelji, već zato što ih zakon i
              sistem ne štite.
            </p>
          </div>
        </div>

        <div className="mb-16 grid lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 border border-border bg-card p-8 lg:p-10 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
            <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4">
              ▍Osnivači
            </div>
            <h3 className="font-display text-3xl lg:text-4xl leading-tight mb-4 text-pretty">
              Pokret je osnovan od strane{" "}
              <span className="italic font-light">roditelja, za roditelje.</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed text-pretty mb-6 max-w-2xl">
              Roditeljski Front kao nevladina organizacija nastala je iz lične borbe i potrebe da se sistem promeni. Među osnivačima ove organizacije su:
            </p>
            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                { name: "Nenad Pagonis", role: "Suosnivač" },
                { name: "Dušan Kaljević", role: "Suosnivač" },
              ].map((f) => (
                <li key={f.name} className="flex items-center gap-4 border-t border-border pt-4">
                  <span className="grid place-items-center h-12 w-12 rounded-full bg-foreground text-background font-display text-lg">
                    {f.name.split(" ").map((p) => p[0]).join("")}
                  </span>
                  <div>
                    <div className="font-display text-xl leading-tight">{f.name}</div>
                    <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">{f.role}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5 bg-foreground text-background p-8 lg:p-10 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
            <div className="relative">
              <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4">
                ▍Naša misija
              </div>
              <p className="font-display text-2xl lg:text-3xl leading-snug text-pretty">
                „Niko ko se bori za svoje dete ne sme da ostane sam pred sistemom."
              </p>
            </div>
            <div className="relative mt-8">
              <div className="h-px w-12 bg-accent" />
              <div className="mt-4 text-sm text-background/70">Pokret Roditeljski Front · Srbija</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-px bg-border">
          {cards.map((c) => (
            <article
              key={c.n}
              className="group relative bg-background p-8 lg:p-10 hover:bg-secondary transition-colors"
            >
              <div className="flex items-start justify-between mb-12">
                <span className="font-display text-6xl text-accent/80">
                  {c.n}
                </span>
                <span className="text-2xl opacity-40 group-hover:opacity-100 group-hover:rotate-45 transition-all">
                  ↗
                </span>
              </div>
              <h3 className="font-display text-2xl mb-3">{c.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                {c.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Manifest() {
  return (
    <section className="relative py-28 lg:py-36 bg-foreground text-background overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={familyImg}
                alt="Otac se igra sa decom"
                loading="lazy"
                width={1400}
                height={1600}
                className="h-full w-full object-cover grayscale-[20%] contrast-110"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-background/10" />
            </div>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="text-xs uppercase tracking-[0.25em] text-accent mb-6">
              ▍Zašto je vreme za promenu
            </div>
            <h2 className="font-display text-5xl lg:text-6xl leading-[1] tracking-tight mb-10">
              Deca imaju pravo{" "}
              <span className="italic font-light text-accent">
                na oba roditelja.
              </span>
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-background/80">
              <p>
                Kada se roditelji razvedu, deca ne bi trebalo da izgube jednog
                roditelja. Nažalost, u našem sistemu, deca najčešće ostaju sa
                majkom — čak i kada postoje ozbiljni razlozi da to ne bude
                slučaj.
              </p>
              <p>
                Mnoge majke koriste decu kao sredstvo pritiska, ucene ili
                osvete. Očevi se bore mesecima ili godinama samo da bi videli
                svoju decu, dok sistem gleda u drugu stranu.
              </p>
              <p className="font-display italic text-2xl text-background pt-2 border-l-2 border-accent pl-6">
                Mi verujemo da to mora da se promeni.
              </p>
            </div>
            <a
              href="#nas-rad"
              className="mt-10 inline-flex items-center gap-3 text-sm border-b border-background/40 pb-1 hover:border-accent hover:text-accent transition-colors"
            >
              Kako pomažemo
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Work() {
  const items = [
    {
      title: "Pravna Pomoć",
      body: "Besplatna pravna podrška i saveti za očeve koji se suočavaju sa nepravdom u sudskim postupcima.",
      icon: "§",
    },
    {
      title: "Zajedničko Starateljstvo",
      body: "Zalaganje da zajedničko starateljstvo bude pravilo, a ne izuzetak u našem pravnom sistemu.",
      icon: "⚖",
    },
    {
      title: "Psihološka Podrška",
      body: "Grupe podrške i individualno savetovanje za roditelje koji prolaze kroz teške situacije.",
      icon: "❋",
    },
    {
      title: "Zaštita od Zloupotrebe",
      body: "Borba protiv manipulacije decom i lažnih optužbi koje se koriste kao oružje u brakorazvodnim parnicama.",
      icon: "✕",
    },
  ];
  return (
    <section id="nas-rad" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4">
            ▍Kako pomažemo
          </div>
          <h2 className="font-display text-5xl lg:text-7xl leading-[0.95] tracking-tight">
            Podrška kada{" "}
            <span className="italic font-light">vam je najpotrebnija.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((it, idx) => (
            <article
              key={it.title}
              className="group relative border border-border bg-card p-8 lg:p-12 hover:border-foreground transition-all hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-10">
                <span className="font-display text-5xl text-accent">
                  {it.icon}
                </span>
                <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  0{idx + 1} / 04
                </span>
              </div>
              <h3 className="font-display text-3xl mb-4">{it.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                {it.body}
              </p>
              <div className="mt-8 pt-6 border-t border-border flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Saznaj više</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { n: "85%", l: "Starateljstava dodeljeno majkama" },
    { n: "70%", l: "Očeva koji prijavljuju otežano viđanje" },
    { n: "5000+", l: "Porodica kojima smo pomogli" },
    { n: "10+", l: "Godina borbe za promene" },
  ];
  return (
    <section className="relative py-24 bg-secondary border-y border-border">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-px bg-border">
        {stats.map((s) => (
          <div
            key={s.l}
            className="bg-secondary p-8 lg:p-12 flex flex-col gap-3"
          >
            <div className="font-display text-6xl lg:text-7xl tracking-tight text-foreground">
              {s.n}
            </div>
            <div className="text-sm text-muted-foreground max-w-[18ch] leading-snug">
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Goal() {
  const points = [
    "Zajedničko starateljstvo kao polazna tačka, ne izuzetak",
    "Kazne za roditelje koji onemogućavaju kontakt sa decom",
    "Brzi sudski postupci za porodične sporove",
    "Zaštita od lažnih optužbi i manipulacije",
  ];
  return (
    <section id="pomoc" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={justiceImg}
                alt="Vaga pravde"
                loading="lazy"
                width={1400}
                height={1600}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7 lg:pl-8">
            <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4">
              ▍Naš cilj
            </div>
            <h2 className="font-display text-5xl lg:text-7xl leading-[0.95] tracking-tight mb-8">
              Promena zakona{" "}
              <span className="italic font-light">i svesti.</span>
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl mb-10">
              Zakon ne bi trebalo da pretpostavlja da je majka automatski
              bolji roditelj. Borimo se za sistem koji gleda činjenice, a ne
              stereotipe.
            </p>
            <ul className="space-y-1">
              {points.map((p, i) => (
                <li
                  key={p}
                  className="group flex items-baseline gap-6 py-5 border-t border-border last:border-b"
                >
                  <span className="font-display text-sm text-accent w-8 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-xl lg:text-2xl flex-1 text-pretty">
                    {p}
                  </span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="relative py-28 lg:py-36 bg-foreground text-background overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-4">
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src={silhouetteImg}
              alt="Marko"
              loading="lazy"
              width={1200}
              height={1500}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-8">
          <div className="text-xs uppercase tracking-[0.25em] text-accent mb-8">
            ▍Priča iz prve ruke
          </div>
          <blockquote className="font-display text-3xl lg:text-5xl leading-[1.15] tracking-tight text-balance">
            <span className="text-accent text-6xl align-top mr-2">„</span>
            Dve godine nisam video svoju decu. Bivša supruga je koristila svaki
            trik da me drži podalje od njih. Roditeljski Front mi je pomogao
            da se izborim za svoja prava. Danas imam{" "}
            <span className="italic">redovan kontakt sa decom.</span>
          </blockquote>
          <div className="mt-10 flex items-center gap-4 text-sm">
            <div className="h-px w-12 bg-accent" />
            <div>
              <div className="font-medium">Marko, 42</div>
              <div className="text-background/60">Beograd</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="ukljuci" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Contact block */}
        <div className="relative overflow-hidden border border-border bg-card p-10 lg:p-20 text-center mb-8">
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-moss/10 blur-3xl" />
          <div className="relative">
            <div className="text-xs uppercase tracking-[0.25em] text-accent mb-6">
              ▍Kontakt
            </div>
            <h2 className="font-display text-5xl lg:text-8xl leading-[0.95] tracking-tight max-w-4xl mx-auto text-balance">
              Niste sami u{" "}
              <span className="italic font-light">ovoj borbi.</span>
            </h2>
            <p className="mt-8 max-w-2xl mx-auto text-lg leading-relaxed text-muted-foreground text-pretty">
              Ako vam je onemogućen kontakt sa decom, ako se suočavate sa
              nepravdom u sudskom postupku, ili ako vam jednostavno treba neko
              da vas sasluša — mi smo tu za vas.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:pomoc@roditeljskifront.org"
                className="group inline-flex items-center gap-3 rounded-full bg-foreground text-background pl-7 pr-3 py-3 text-sm font-medium hover:bg-accent transition-colors"
              >
                Kontaktiraj Nas
                <span className="grid place-items-center h-8 w-8 rounded-full bg-background text-foreground group-hover:translate-x-0.5 transition-transform">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Donation block */}
        <div className="relative overflow-hidden border border-border bg-foreground text-background p-10 lg:p-16">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-moss/20 blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4">
                ▍Podrška
              </div>
              <h3 className="font-display text-4xl lg:text-5xl leading-[0.95] tracking-tight mb-6">
                Podržite našu{" "}
                <span className="italic font-light">borbu.</span>
              </h3>
              <p className="text-lg leading-relaxed text-background/80 max-w-xl text-pretty">
                Svaka donacija pomaže da nastavimo pružanje besplatne pravne
                pomoći, edukaciju roditelja i borbu za promenu zakona. Bez vas,
                ne možemo dalje.
              </p>
            </div>
            <div className="bg-background/10 backdrop-blur-sm border border-background/20 rounded-sm p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="grid place-items-center h-10 w-10 rounded-full bg-accent text-background">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                </span>
                <div>
                  <div className="font-display text-lg">Pokret Roditeljski Front</div>
                  <div className="text-sm text-background/60">Donacije</div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-background/50 mb-1">
                    Broj računa
                  </div>
                  <div className="font-mono text-xl lg:text-2xl tracking-wider">
                    155-0000000995748-80
                  </div>
                </div>
                <div className="pt-4 border-t border-background/20">
                  <p className="text-sm italic text-background/70 leading-relaxed">
                    „Hvala svima koji podržavaju borbu za našu decu i njihovo
                    pravo na oba roditelja. Vaš Roditeljski Front."
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText('155-0000000995748-80');
                }}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-accent text-background py-3 text-sm font-medium hover:bg-accent/90 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                Kopiraj broj računa
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LegalTips() {
  const tips = [
    {
      n: "01",
      law: "Porodični zakon RS · čl. 6, 60–61",
      title: "Dete ima pravo na oba roditelja",
      body:
        "Zakon izričito kaže da dete ima pravo na održavanje ličnih odnosa sa roditeljem sa kojim ne živi. Onemogućavanje viđanja je kršenje prava deteta — ne samo roditelja. Tražite pismeno obrazloženje svakog odbijanja.",
    },
    {
      n: "02",
      law: "Zakon o izvršenju · čl. 367–375",
      title: "Izvršenje viđanja je obavezno",
      body:
        "Ako druga strana ne poštuje sudsku odluku o viđanju, podnesite predlog za izvršenje. Sud može izreći novčane kazne (do 200.000 RSD po prekršaju) ili promeniti model staranja u korist roditelja koji ne opstruira.",
    },
    {
      n: "03",
      law: "Porodični zakon · čl. 75–77",
      title: "Zajedničko vršenje roditeljskog prava",
      body:
        "Roditelji mogu sporazumno tražiti zajedničko vršenje roditeljskog prava. Sporazum se overava i podnosi sudu — ovo je najbrži i najjeftiniji put do pravičnog modela.",
    },
    {
      n: "04",
      law: "Praktičan savet",
      title: "Dokumentujte sve — pisano i datumski",
      body:
        "Vodite dnevnik: svaki pokušaj viđanja, SMS, poziv, email. Snimci i poruke su validan dokaz na sudu. Bez dokumentacije, vaša priča je samo reč protiv reči.",
    },
    {
      n: "05",
      law: "Krivični zakonik · čl. 191",
      title: "Oduzimanje maloletnog lica",
      body:
        "Zadržavanje deteta od strane jednog roditelja protivno sudskoj odluci je krivično delo — zaprećena kazna do 3 godine zatvora. Lažne prijave o nasilju takođe su krivično delo (čl. 334 KZ).",
    },
    {
      n: "06",
      law: "Besplatna pravna pomoć",
      title: "Imate pravo na advokata bez naknade",
      body:
        "Zakon o besplatnoj pravnoj pomoći (2019) garantuje pristup advokatu građanima sa nižim primanjima. Prijava se podnosi opštini. Mi vam pomažemo da popunite zahtev i pronađete advokata u vašem gradu.",
    },
  ];
  return (
    <section id="saveti" className="relative py-28 lg:py-36 bg-secondary border-y border-border">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4">
              ▍Pravni saveti
            </div>
            <h2 className="font-display text-5xl lg:text-7xl leading-[0.95] tracking-tight">
              Zakon je{" "}
              <span className="italic font-light">na vašoj strani</span> —
              naučite kako da ga koristite.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
              Šest stvari koje svaki roditelj u Srbiji mora da zna pre nego što
              uđe u sudnicu. Ovo nije zamena za advokata — već prva mapa kroz
              sistem.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {tips.map((t) => (
            <article
              key={t.n}
              className="group bg-secondary p-8 lg:p-10 hover:bg-background transition-colors"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="font-display text-5xl text-accent/80">{t.n}</span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground text-right max-w-[12ch] leading-snug">
                  {t.law}
                </span>
              </div>
              <h3 className="font-display text-2xl mb-3 text-pretty">{t.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-pretty text-sm">
                {t.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 text-sm">
          <p className="text-muted-foreground italic max-w-2xl">
            Napomena: Saveti su informativnog karaktera. Za konkretan slučaj
            uvek konsultujte advokata — možemo vam pomoći da pronađete pravog.
          </p>
          <a
            href="#pomoc"
            className="inline-flex items-center gap-2 border-b border-foreground/40 pb-1 hover:border-accent hover:text-accent transition-colors"
          >
            Tražite besplatnu pomoć →
          </a>
        </div>
      </div>
    </section>
  );
}
