import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownToLine } from "lucide-react";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "CV — Votre Nom" },
      { name: "description", content: "Mon curriculum vitae à consulter et télécharger." },
      { property: "og:title", content: "CV — Votre Nom" },
      { property: "og:description", content: "Mon curriculum vitae à consulter et télécharger." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: CV,
});

// ── PERSONNALISEZ ICI ──────────────────────────────────────────────
// Déposez votre CV en PDF dans le dossier public/ (ex: public/cv.pdf).
// L'aperçu et le bouton ci-dessous fonctionneront automatiquement.
// ────────────────────────────────────────────────────────────────────

function CV() {
  return (
    <div className="animate-rise">
      <p className="page-kicker">Chapitre 03 — Parcours</p>
      <h1 className="page-title">
        Mon <em>CV</em>
      </h1>

      {/* Décommentez ce bloc une fois votre cv.pdf ajouté dans public/ :
      <iframe
        src="/cv.pdf"
        title="Mon CV"
        className="mb-10 h-[800px] w-full border-2 border-ink"
      />
      */}

      <div className="placeholder-box mb-10 flex min-h-64 flex-col items-center justify-center text-center">
        <span className="placeholder-tag">À remplir</span>
        <p className="max-w-md text-muted-foreground">
          Déposez votre fichier <strong>cv.pdf</strong> dans le dossier
          <strong> public/</strong> : l'aperçu de votre CV s'affichera ici.
        </p>
      </div>

      <div className="text-center">
        <a href="/cv.pdf" target="_blank" rel="noreferrer" className="btn-download">
          <ArrowDownToLine className="h-4 w-4" />
          Télécharger mon CV
        </a>
      </div>
    </div>
  );
}
