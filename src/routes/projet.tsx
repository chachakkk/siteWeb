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
// Dupliquez un bloc « placeholder-box » pour chaque projet.
// ────────────────────────────────────────────────────────────────────

function Projets() {
  return (
    <div className="animate-rise">
      <p className="page-kicker">Chapitre 02 — Réalisations</p>
      <h1 className="page-title">
        Mes <em>projets</em>
      </h1>

      <p className="prose-edito mb-10 max-w-xl">
        Présentez ici vos projets universitaires et personnels : objectifs,
        technologies, ce que vous en avez appris.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="placeholder-box">
          <span className="placeholder-tag">À remplir</span>
          <h3 className="mb-2 font-display text-2xl font-bold">Projet n°1</h3>
          <p className="text-muted-foreground">
            Titre de votre projet, sa description, les technologies utilisées.
            Vous pouvez aussi intégrer une démo, une image ou une vidéo.
          </p>
        </div>

        <div className="placeholder-box">
          <span className="placeholder-tag">À remplir</span>
          <h3 className="mb-2 font-display text-2xl font-bold">Projet n°2</h3>
          <p className="text-muted-foreground">
            Dupliquez ce bloc autant de fois que nécessaire pour chacun de vos
            projets.
          </p>
        </div>

        <div className="placeholder-box md:col-span-2">
          <span className="placeholder-tag">À remplir</span>
          <h3 className="mb-2 font-display text-2xl font-bold">Votre code en ligne</h3>
          <p className="text-muted-foreground">
            Ajoutez un lien vers votre GitHub, GitLab ou portfolio.
          </p>
        </div>
      </div>
    </div>
  );
}
