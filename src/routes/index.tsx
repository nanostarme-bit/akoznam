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
    <section id="pocetna" className="relative pt-16 overflow-hidden">
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
        <div className="relative overflow-hidden border border-border bg-card p-10 lg:p-20 text-center">
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
              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-full border border-foreground/30 pl-7 pr-3 py-3 text-sm font-medium hover:border-foreground transition-colors"
              >
                Podrži Nas
                <span className="grid place-items-center h-8 w-8 rounded-full bg-foreground text-background">
                  ♥
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <div className="font-display text-3xl tracking-tight">
            Roditeljski<span className="text-accent">.</span>Front
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Podržavamo oba roditelja</strong>
            , ali se fokusiramo na pomoć očevima jer su oni najčešće žrtve
            sistemske diskriminacije u porodičnim sporovima.
          </p>
        </div>
        <div className="lg:col-span-2">
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
            Navigacija
          </div>
          <ul className="space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-accent transition-colors">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-2">
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
            Kontakt
          </div>
          <ul className="space-y-2 text-sm">
            <li>pomoc@roditeljskifront.org</li>
            <li>+381 11 000 000</li>
            <li>Beograd, Srbija</li>
          </ul>
        </div>
        <div className="lg:col-span-3">
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
            Bilten
          </div>
          <form className="flex border-b border-foreground/40 pb-2">
            <input
              type="email"
              placeholder="vaša@adresa.rs"
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
            <button
              type="button"
              className="text-sm hover:text-accent transition-colors"
            >
              →
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Roditeljski Front. Sva prava zadržana.</div>
          <div className="font-display italic">
            „Otac nije posetilac. Otac je roditelj."
          </div>
        </div>
      </div>
    </footer>
  );
}
