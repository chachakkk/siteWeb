import { Link, Outlet } from "@tanstack/react-router";

// ── PERSONNALISEZ ICI ──────────────────────────────────────────────
// Changez le nom affiché dans la barre du haut et le pied de page.
export const SITE_NAME = "Votre Nom";
export const FOOTER_LINE = "© 2026 Votre Nom";
// ────────────────────────────────────────────────────────────────────

const navItems = [
  { to: "/", label: "Accueil", num: "01" },
  { to: "/projet", label: "Projet", num: "02" },
  { to: "/cv", label: "CV", num: "03" },
  { to: "/liens", label: "Liens", num: "04" },
] as const;

export function SiteLayout() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <Link to="/" className="brand">
          {SITE_NAME}
        </Link>
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
                  <span className="nav-num">{item.num}</span>
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
        <div className="footer-inner">
          <p className="footer-name">{SITE_NAME}</p>
          <p>{FOOTER_LINE} — Dernière mise à jour : -- / -- / ----</p>
        </div>
      </footer>
    </div>
  );
}
