import { createFileRoute } from "@tanstack/react-router";
import { Globe, Linkedin, Github, Mail } from "lucide-react";

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
  { href: "#", label: "LinkedIn", detail: "Votre profil LinkedIn", Icon: Linkedin },
  { href: "#", label: "GitHub / GitLab", detail: "Vos dépôts de code", Icon: Github },
  { href: "mailto:votre@email.fr", label: "Email", detail: "votre@email.fr", Icon: Mail },
  { href: "#", label: "Autre site", detail: "Un autre lien utile", Icon: Globe },
];

function Liens() {
  return (
    <section>
      <h2 className="section-title">Liens</h2>

      <p className="mb-6">Retrouvez-moi sur mes réseaux et plateformes :</p>

      <div className="flex flex-col gap-3">
        {liens.map(({ href, label, detail, Icon }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" className="link-card">
            <Icon className="h-5 w-5 text-muted-foreground" />
            <span>
              {label}
              <span className="block text-sm font-normal text-muted-foreground">{detail}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
