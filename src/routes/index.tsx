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

function Accueil() {
  return (
    <div className="animate-rise">
      <p className="page-kicker">Chapitre 01 — Présentation</p>
      <h1 className="page-title">
        Bonjour,
        <br />
        moi c'est <em>Sacha Dugendre Monmarthe</em>.
      </h1>

      <div className="flex flex-col-reverse items-start gap-12 sm:flex-row sm:items-center">
        <div className="prose-edito flex-1">
          <p>
            Je suis étudiant deuxième année de license informatique à Paris 8.
          </p>
          <p>
            J'ai eu mon bac général au Lycée Jules Ferry avec maths et NSI spé. 
          </p>
          <p>
            Ce site me sert de support pour présenter mes projets, mon cv et mes liens pratiques.
          </p>
        </div>

        <div className="photo-wrap">
          <div className="photo-circle">
             <img src="/photo_profil.jpeg" alt="Votre nom" className="photo-circle" />
          </div>
        </div>
      </div>
    </div>
  );
}
