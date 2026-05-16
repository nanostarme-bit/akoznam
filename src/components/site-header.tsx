import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/85 border-b border-border/60 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10 h-20 lg:h-24 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 group shrink-0"
          aria-label="Roditeljski Front — Početna"
          onClick={() => setOpen(false)}
        >
          <img
            src={logo}
            alt="Roditeljski Front logo"
            width={320}
            height={96}
            className="h-12 sm:h-14 lg:h-16 w-auto drop-shadow-sm"
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

        <div className="flex items-center gap-2">
          <a
            href="/#ukljuci"
            className="glow-ring group hidden sm:inline-flex items-center gap-2 rounded-full bg-foreground text-background pl-5 pr-2 py-2 text-sm hover:bg-accent transition-colors"
          >
            Podrži Nas
            <span className="grid place-items-center h-7 w-7 rounded-full bg-background text-foreground group-hover:rotate-45 transition-transform duration-500">
              →
            </span>
          </a>

          <button
            type="button"
            aria-label={open ? "Zatvori meni" : "Otvori meni"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid place-items-center h-11 w-11 rounded-full border border-border bg-background/80 text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-5 pb-6 pt-2 border-t border-border/60 bg-background/95 backdrop-blur-md flex flex-col">
          {nav.map((n) =>
            "to" in n ? (
              <Link
                key={n.label}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-lg font-display border-b border-border/40 text-foreground hover:text-accent transition-colors"
              >
                {n.label}
              </Link>
            ) : (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-3 text-lg font-display border-b border-border/40 text-foreground hover:text-accent transition-colors"
              >
                {n.label}
              </a>
            ),
          )}
          <a
            href="/#ukljuci"
            onClick={() => setOpen(false)}
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-base hover:bg-accent transition-colors"
          >
            Podrži Nas →
          </a>
        </nav>
      </div>
    </header>
  );
}
