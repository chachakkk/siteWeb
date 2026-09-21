import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projet")({
  head: () => ({
    meta: [
      { title: "Projets — Votre Nom" },
      { name: "description", content: "Mes projets universitaires et personnels." },
      { property: "og:title", content: "Projets — Votre Nom" },
      { property: "og:description", content: "Mes projets universitaires et personnels." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Projets,
});

// ── PERSONNALISEZ ICI ──────────────────────────────────────────────
// Présentez vos projets : titre, description, liens, captures d'écran…
// ────────────────────────────────────────────────────────────────────

function Projets() {
  return (
    <section>
      <h2 className="section-title">Mes Projets</h2>

      <p className="mb-6">
        Présentez ici vos projets universitaires et personnels.
      </p>

      <div className="placeholder-box mb-6">
        <strong className="mb-2 block text-foreground">Projet n°1 — Titre de votre projet</strong>
        Décrivez votre projet ici : objectif, technologies utilisées, ce que
        vous avez appris…
        <br />
        Vous pouvez aussi intégrer une démo, une image ou une vidéo.
      </div>

      <div className="placeholder-box">
        <strong className="mb-2 block text-foreground">Votre code en ligne</strong>
        Ajoutez un lien vers votre GitHub, GitLab ou portfolio.
      </div>
    </section>
  );
}
