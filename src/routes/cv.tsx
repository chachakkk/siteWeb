import { createFileRoute } from "@tanstack/react-router";

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
// L'aperçu et le bouton de téléchargement ci-dessous fonctionneront
// automatiquement avec le fichier public/cv.pdf.
// ────────────────────────────────────────────────────────────────────

function CV() {
  return (
    <section>
      <h2 className="section-title">Mon CV</h2>

      <div className="placeholder-box mb-8">
        Déposez votre fichier <strong>cv.pdf</strong> dans le dossier
        <strong> public/</strong> pour afficher l'aperçu ici.
      </div>

      {/* Décommentez ce bloc une fois votre cv.pdf ajouté dans public/ :
      <iframe
        src="/cv.pdf"
        title="Mon CV"
        className="mb-8 h-[800px] w-full rounded-lg border border-border"
      />
      */}

      <div className="text-center">
        <a href="/cv.pdf" target="_blank" rel="noreferrer" className="btn-download">
          Télécharger mon CV
        </a>
      </div>
    </section>
  );
}
