import { Link, Outlet } from "@tanstack/react-router";

// ── PERSONNALISEZ ICI ──────────────────────────────────────────────
// Changez le nom affiché dans l'en-tête et le pied de page.
export const SITE_NAME = "Votre Nom";
export const SITE_TAGLINE = "Votre slogan ou statut ici";
export const FOOTER_LINE = "© 2026 Votre Nom | Votre statut";
// ────────────────────────────────────────────────────────────────────

const navItems = [
  { to: "/", label: "Accueil" },
  { to: "/projet", label: "Projet" },
  { to: "/cv", label: "CV" },
  { to: "/liens", label: "Liens" },
] as const;

export function SiteLayout() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <h1 className="site-title">{SITE_NAME}</h1>
        <p className="site-subtitle">{SITE_TAGLINE}</p>
        <nav>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="nav-link"
                  activeOptions={{ exact: true }}
                  activeProps={{ className: "nav-link nav-link-active" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>{FOOTER_LINE}</p>
        <p>Dernière mise à jour : -- / -- / ----</p>
      </footer>
    </div>
  );
}
