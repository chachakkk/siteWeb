import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/liens")({
  head: () => ({
    meta: [
      { title: "Liens — Votre Nom" },
      { name: "description", content: "Mes liens et réseaux professionnels." },
      { property: "og:title", content: "Liens — Votre Nom" },
      { property: "og:description", content: "Mes liens et réseaux professionnels." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Liens,
});

// ── PERSONNALISEZ ICI ──────────────────────────────────────────────
// Remplacez les "#" par vos vraies adresses (LinkedIn, GitHub, mail…).
// ────────────────────────────────────────────────────────────────────

const liens = [
  { href: "#", label: "LinkedIn", detail: "Votre profil LinkedIn" },
  { href: "#", label: "GitHub / GitLab", detail: "Vos dépôts de code" },
  { href: "mailto:votre@email.fr", label: "Email", detail: "votre@email.fr" },
  { href: "#", label: "Autre site", detail: "Un autre lien utile" },
];

function Liens() {
  return (
    <div className="animate-rise">
      <p className="page-kicker">Chapitre 04 — Ailleurs</p>
      <h1 className="page-title">
        Mes <em>liens</em>
      </h1>

      <p className="prose-edito mb-8 max-w-xl">
        Retrouvez-moi sur mes réseaux et plateformes :
      </p>

      <div className="border-t-[1.5px] border-ink">
        {liens.map(({ href, label, detail }, i) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" className="link-row">
            <span className="link-row-label">{label}</span>
            <span className="link-row-meta">
              <span>
                <span className="mr-2 text-vermillon">0{i + 1}</span>
                {detail}
              </span>
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
