import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/podcast-hero.jpg";
import ytPreviewImg from "@/assets/youtube-channel-preview.jpg";

export const Route = createFileRoute("/podcast")({
  head: () => ({
    meta: [
      { title: "Podcast Zabranjeni Roditelj — Razgovori o roditeljskim pravima | Roditeljski Front" },
      {
        name: "description",
        content:
          "Podcast Zabranjeni Roditelj — iskreni razgovori o očinstvu, pravima roditelja, srpskim zakonima i borbi za decu. Epizode sa advokatima, psiholozima i roditeljima. Slušajte na YouTube kanalu @zabranjeniroditelj",
      },
      { name: "keywords", content: "podcast, zabranjeni roditelj, roditeljska prava, očinstvo, pravna pomoć, Srbija" },
      { property: "og:title", content: "Podcast Zabranjeni Roditelj — Razgovori o roditeljskim pravima" },
      {
        property: "og:description",
        content: "Iskreni razgovori sa stručnjacima i roditeljima. Pravo, psihologija, lična svedočanstva o borbi za decu.",
      },
      { property: "og:image", content: heroImg },
      { property: "og:url", content: "https://nanoestate.me/podcast" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Podcast Zabranjeni Roditelj" },
      { name: "twitter:description", content: "Iskreni razgovori sa stručnjacima i roditeljima o roditeljskim pravima." },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: PodcastPage,
});

const YT_CHANNEL = "https://youtube.com/@zabranjeniroditelj";
const YT_EMBED = "https://www.youtube.com/embed?listType=user_uploads&list=zabranjeniroditelj";

function PodcastPage() {
  return (
    <div className="grain min-h-screen overflow-x-clip bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section className="relative pt-16 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-3xl float-slow" />
        <div aria-hidden className="pointer-events-none absolute top-40 -right-24 h-[24rem] w-[24rem] rounded-full bg-moss/15 blur-3xl float-slower" />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 pt-16 lg:pt-24 pb-16">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7 reveal">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground mb-8">
                <span className="h-px w-12 bg-foreground" />
                Podcast · Epizode &amp; razgovori
              </div>
              <h1 className="font-display text-[clamp(2rem,6.5vw,6rem)] leading-[0.95] tracking-[-0.03em] text-balance">
                <span className="shimmer">Zabranjeni</span>{" "}
                <span className="italic font-light text-accent">Roditelj</span>
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
                Iskreni razgovori o roditeljstvu, pravu, psihologiji i borbi
                koja se vodi iza zatvorenih sudskih vrata. Glasovi roditelja,
                advokata i stručnjaka — bez filtera.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={YT_CHANNEL}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full bg-foreground text-background pl-7 pr-3 py-3 text-sm font-medium hover:bg-accent transition-colors"
                >
                  Otvori YouTube kanal
                  <span className="grid place-items-center h-8 w-8 rounded-full bg-background text-foreground group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </a>
                <a
                  href="#epizode"
                  className="inline-flex items-center gap-2 text-sm font-medium border-b border-foreground/40 pb-1 hover:border-accent hover:text-accent transition-colors"
                >
                  Pogledaj epizode
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 reveal">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted">
                <img
                  src={heroImg}
                  alt="Studio mikrofon"
                  width={1600}
                  height={1200}
                  className="ken h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-background">
                  <div className="text-[10px] uppercase tracking-[0.3em] opacity-80">
                    N° 02 — Glas
                  </div>
                  <div className="font-display italic text-xl mt-1">
                    „Kada sistem ćuti, mi govorimo."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manifest strip */}
      <div className="border-y border-border bg-foreground text-background overflow-hidden">
        <div className="flex marquee whitespace-nowrap py-5">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="font-display italic text-2xl px-8 flex items-center gap-8">
              Zabranjeni Roditelj
              <span className="text-accent">✦</span>
              Novi razgovori svake nedelje
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Video / Channel embed */}
      <section id="epizode" className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 mb-12">
            <div className="lg:col-span-5">
              <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4">
                ▍Najnovije epizode
              </div>
              <h2 className="font-display text-5xl lg:text-6xl leading-[0.95] tracking-tight">
                Slušajte. Pitajte.{" "}
                <span className="italic font-light">Govorite.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-end">
              <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
                Svaka epizoda donosi temu koja pogađa pravo u srž — od člana 77
                Porodičnog zakona, do iskustava očeva koji su godinama čekali
                prvi susret sa svojim detetom.
              </p>
            </div>
          </div>

          <a
            href={YT_CHANNEL}
            target="_blank"
            rel="noreferrer"
            className="group relative aspect-video overflow-hidden border border-border bg-foreground block"
          >
            <img
              src={ytPreviewImg}
              alt="Zabranjeni Roditelj — YouTube kanal"
              loading="lazy"
              width={1600}
              height={900}
              className="h-full w-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid place-items-center h-16 w-16 rounded-full bg-accent/90 text-background group-hover:scale-110 transition-transform duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-4">
              <div className="flex items-center gap-2 text-sm text-background">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M21.6 7.2s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C15.9 4 12 4 12 4s-3.9 0-6.8.3c-.4.1-1.2.1-2 .9-.6.6-.8 2-.8 2S2.2 8.8 2.2 10.4v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.3.9 1.7.2 6.5.3 6.5.3s3.9 0 6.8-.3c.4-.1 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5c0-1.6-.2-3.2-.2-3.2zM10 14.5v-5l5 2.5-5 2.5z"/></svg>
                <span className="font-medium">@zabranjeniroditelj</span>
                <span className="opacity-70">— Kliknite da posetite kanal</span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Topics */}
      <section className="relative py-24 lg:py-32 bg-secondary border-y border-border">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="max-w-3xl mb-14">
            <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4">
              ▍O čemu razgovaramo
            </div>
            <h2 className="font-display text-5xl lg:text-6xl leading-[0.95] tracking-tight">
              Teme koje sistem{" "}
              <span className="italic font-light">izbegava.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {[
              {
                n: "01",
                t: "Porodični zakon iznutra",
                b: "Advokati objašnjavaju ključne članove — starateljstvo, viđanje, alimentaciju — jezikom koji svako razume.",
              },
              {
                n: "02",
                t: "Manipulacija i otuđenje",
                b: "Šta je sindrom otuđenja deteta (PAS), kako ga prepoznati i šta zakon zaista predviđa.",
              },
              {
                n: "03",
                t: "Priče očeva",
                b: "Lična svedočanstva — od prvog ročišta do trenutka kada su ponovo zagrlili svoje dete.",
              },
            ].map((c) => (
              <article
                key={c.n}
                className="group bg-secondary p-8 lg:p-10 hover:bg-background transition-colors"
              >
                <div className="flex items-start justify-between mb-10">
                  <span className="font-display text-5xl text-accent/80">{c.n}</span>
                  <span className="text-xl opacity-40 group-hover:opacity-100 group-hover:rotate-45 transition-all">
                    ↗
                  </span>
                </div>
                <h3 className="font-display text-2xl mb-3">{c.t}</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">{c.b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="relative overflow-hidden border border-border bg-card p-10 lg:p-16 text-center">
            <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
            <h2 className="font-display text-4xl lg:text-6xl leading-[0.95] tracking-tight max-w-3xl mx-auto text-balance">
              Imate priču koju treba{" "}
              <span className="italic font-light">čuti?</span>
            </h2>
            <p className="mt-6 max-w-xl mx-auto text-muted-foreground">
              Pišite nam — anonimno ili pod imenom. Vaš glas može pomoći nekome
              ko upravo sada prolazi kroz isto.
            </p>
            <a
              href="mailto:podcast@roditeljskifront.org"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-foreground text-background pl-7 pr-3 py-3 text-sm font-medium hover:bg-accent transition-colors"
            >
              podcast@roditeljskifront.org
              <span className="grid place-items-center h-8 w-8 rounded-full bg-background text-foreground">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
