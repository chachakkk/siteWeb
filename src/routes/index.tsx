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
    <section>
      <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
        <div className="photo-circle">
          Votre
          <br />
          photo
        </div>

        <div className="flex-1">
          <h2 className="section-title">Bienvenue</h2>

          <p className="mb-4">
            Bonjour ! Je m'appelle <strong>Votre Nom</strong>,<br />
            je suis [votre statut : étudiant·e, développeur·se, etc.].
          </p>

          <p className="mb-4">
            Décrivez ici votre parcours, vos études ou votre activité
            actuelle.
          </p>

          <p className="mb-4">
            Ce site me sert de support pour présenter mes projets et mon
            parcours.
          </p>

          <p className="mb-4">
            Ajoutez ici vos passions, vos activités ou toute information que
            vous souhaitez partager.
          </p>

          <p className="mb-4 text-muted-foreground">
            Cette page est un modèle vierge : remplacez ces textes par vos
            propres informations.
          </p>
        </div>
      </div>
    </section>
  );
}
