import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export const nav = [
  { label: "Početna", href: "/#pocetna" },
  { label: "O Nama", href: "/#o-nama" },
  { label: "Naš Rad", href: "/#nas-rad" },
  { label: "Pravna Pomoć", href: "/#pravna-pomoc" },
  { label: "Saveti", href: "/#saveti" },
  { label: "Događaji", href: "/#dogadjaji" },
  { label: "Svetski Uzor", href: "/#svetski-uzor" },
  { label: "Podcast", to: "/podcast" as const },
  { label: "Pomoć", href: "/#pomoc" },
];

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/85 border-b border-border/60 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group" aria-label="Roditeljski Front — Početna">
          <img
            src={logo}
            alt="Roditeljski Front logo"
            width={220}
            height={64}
            className="h-11 lg:h-12 w-auto drop-shadow-sm"
          />
        </Link>
        <nav className="hidden lg:flex items-center gap-8 text-sm">
          {nav.map((n) =>
            "to" in n ? (
              <Link
                key={n.label}
                to={n.to}
                className="nav-link text-muted-foreground"
                activeProps={{ className: "nav-link text-foreground" }}
              >
                <span className="dot" />
                {n.label}
              </Link>
            ) : (
              <a key={n.label} href={n.href} className="nav-link text-muted-foreground">
                <span className="dot" />
                {n.label}
              </a>
            ),
          )}
        </nav>
        <a
          href="/#ukljuci"
          className="glow-ring group inline-flex items-center gap-2 rounded-full bg-foreground text-background pl-5 pr-2 py-2 text-sm hover:bg-accent transition-colors"
        >
          Podrži Nas
          <span className="grid place-items-center h-7 w-7 rounded-full bg-background text-foreground group-hover:rotate-45 transition-transform duration-500">
            →
          </span>
        </a>
      </div>
    </header>
  );
}
