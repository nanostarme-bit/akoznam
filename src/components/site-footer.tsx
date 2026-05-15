import { nav } from "./site-header";

const FB = "https://www.facebook.com/profile.php?id=61576966274664";
const IG = "https://www.instagram.com/roditeljski_front";
const YT = "https://youtube.com/@zabranjeniroditelj";

export function SiteFooter() {
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
          <div className="mt-6 flex items-center gap-3">
            <a
              href={FB}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="grid place-items-center h-10 w-10 rounded-full border border-border hover:border-foreground hover:bg-foreground hover:text-background transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.4V13h2.7v8h3.4z"/></svg>
            </a>
            <a
              href={IG}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid place-items-center h-10 w-10 rounded-full border border-border hover:border-foreground hover:bg-foreground hover:text-background transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
            </a>
            <a
              href={YT}
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="grid place-items-center h-10 w-10 rounded-full border border-border hover:border-foreground hover:bg-foreground hover:text-background transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M21.6 7.2s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C15.9 4 12 4 12 4s-3.9 0-6.8.3c-.4.1-1.2.1-2 .9-.6.6-.8 2-.8 2S2.2 8.8 2.2 10.4v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.3.9 1.7.2 6.5.3 6.5.3s3.9 0 6.8-.3c.4-.1 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5c0-1.6-.2-3.2-.2-3.2zM10 14.5v-5l5 2.5-5 2.5z"/></svg>
            </a>
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
            Navigacija
          </div>
          <ul className="space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.label}>
                <a
                  href={"to" in n ? n.to : n.href}
                  className="hover:text-accent transition-colors"
                >
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
          <div className="font-display italic">„Otac nije posetilac. Otac je roditelj."</div>
        </div>
      </div>
    </footer>
  );
}
