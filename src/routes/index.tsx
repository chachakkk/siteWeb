import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Accueil — Votre Nom" },
      { name: "description", content: "Page d'accueil de mon site personnel : présentation et parcours." },
      { property: "og:title", content: "Accueil — Votre Nom" },
      { property: "og:description", content: "Page d'accueil de mon site personnel : présentation et parcours." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Accueil,
});

// ── PERSONNALISEZ ICI ──────────────────────────────────────────────
// Remplacez les textes ci-dessous par votre propre présentation.
// Pour la photo : déposez votre image dans public/ (ex: public/moi.png)
// puis remplacez le bloc "Votre photo" par :
//   <img src="/moi.png" alt="Votre nom" className="photo-circle" />
// ────────────────────────────────────────────────────────────────────

function Accueil() {
  return (
    <div className="animate-rise">
      <p className="page-kicker">Chapitre 01 — Présentation</p>
      <h1 className="page-title">
        Bonjour,
        <br />
        moi c'est <em>Votre Nom</em>.
      </h1>

      <div className="flex flex-col-reverse items-start gap-12 sm:flex-row sm:items-center">
        <div className="prose-edito flex-1">
          <p>
            Je suis <strong>[votre statut]</strong> — étudiant·e,
            développeur·se, artiste… décrivez-vous en une phrase.
          </p>
          <p>
            Racontez ici votre parcours : vos études, votre activité actuelle,
            ce qui vous anime au quotidien.
          </p>
          <p>
            Ce site me sert de support pour présenter mes projets et mon
            parcours.
          </p>
          <p>
            Ajoutez vos passions, vos activités en dehors du travail, ou toute
            information que vous souhaitez partager.
          </p>
          <p className="note-placeholder">
            Modèle vierge : remplacez ces textes par vos propres informations.
          </p>
        </div>

        <div className="photo-wrap">
          <div className="photo-circle">
            Votre
            <br />
            photo
          </div>
        </div>
      </div>
    </div>
  );
}
