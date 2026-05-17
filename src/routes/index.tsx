import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import procleanImg from "@/assets/proclean-stj.png";
import alloNuisibleImg from "@/assets/allo-nuisible.png";
import lesBonsBiensImg from "@/assets/les-bons-biens.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Partenariat Digital X — Programme partenaire pour experts-comptables" },
      {
        name: "description",
        content:
          "Devenez le conseiller digital de référence de vos clients TPE/PME. Recommandez, nous livrons — et vous êtes rémunéré à chaque mission signée.",
      },
      { property: "og:title", content: "Partenariat Digital X" },
      {
        property: "og:description",
        content:
          "Programme partenariat pour experts-comptables — sites web, SEO local, Google Ads pour vos clients TPE/PME.",
      },
    ],
  }),
});

const BOOK_URL = "https://epdigitalx.fillout.com/geraldine-rdv";

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 h-[72px] bg-white/80 backdrop-blur-md border-b border-[#E8ECFF]">
      <div className="mx-auto max-w-7xl h-full px-5 sm:px-8 flex items-center justify-between">
        <Logo />
        <a
          href={BOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-sm font-medium text-white shadow-brand-sm transition hover:brightness-110"
        >
          Réserver un échange <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen pt-[140px] pb-24 overflow-hidden">
      <div className="absolute inset-0 hero-grid-bg" />
      <div
        className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full opacity-60"
        style={{ background: "radial-gradient(circle, rgba(7,64,249,0.25), transparent 60%)" }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-[520px] h-[520px] rounded-full opacity-60"
        style={{ background: "radial-gradient(circle, rgba(18,183,106,0.22), transparent 60%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-3.5 py-1.5 text-xs font-medium text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" /> Programme Partenariat Digital X
          </span>
          <h1 className="mt-6 text-[clamp(2rem,5vw,3.25rem)] leading-[1.05] text-ink">
            Vos clients ont besoin du digital.
            <br />
            Vous avez la <span className="text-brand">réponse.</span>
          </h1>
          <p className="mt-6 text-[18px] leading-relaxed text-slate max-w-xl">
            En travaillant avec nous, vous devenez le conseiller digital de référence pour vos
            clients TPE/PME — et vous êtes rémunéré à chaque mission signée.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#comment"
              className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-medium text-white shadow-brand transition hover:brightness-110"
            >
              Découvrir le partenariat <span aria-hidden>→</span>
            </a>
            <a
              href="#comment"
              className="inline-flex items-center gap-2 rounded-xl border border-[#E8ECFF] bg-white px-6 py-3.5 text-sm font-medium text-ink transition hover:bg-brand-tint"
            >
              Comment ça marche
            </a>
          </div>
        </div>

        <div
          className="animate-fade-up rounded-[20px] bg-white border border-[#E8ECFF] p-7 shadow-brand"
          style={{ animationDelay: "0.15s" }}
        >
          <p className="text-[12px] font-semibold uppercase tracking-wider text-slate">
            Ce que vous apportez à vos clients
          </p>
          <div className="mt-6 space-y-5">
            {[
              {
                icon: "🌐",
                title: "Sites web",
                desc: "Création & refonte professionnelle, livrés en 4 à 6 semaines",
              },
              {
                icon: "📍",
                title: "Référencement local",
                desc: "Google Maps, SEO local, être trouvé par les bons clients",
              },
              {
                icon: "📣",
                title: "Google Ads",
                desc: "Campagnes pilotées pour générer des contacts qualifiés rapidement",
              },
            ].map((s) => (
              <div key={s.title} className="flex gap-4">
                <div className="flex-none h-11 w-11 rounded-xl bg-brand-soft flex items-center justify-center text-xl">
                  {s.icon}
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-ink">{s.title}</h3>
                  <p className="mt-0.5 text-sm text-slate leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-7 rounded-xl bg-success-bg px-4 py-3.5 text-sm font-medium text-ink">
            <span className="text-success mr-1.5">✅</span>
            Aucun effort de votre part. Vous recommandez, nous livrons.
          </div>
        </div>
      </div>
    </section>
  );
}

function Section({
  id,
  bg,
  label,
  title,
  subtitle,
  children,
}: {
  id?: string;
  bg?: "white" | "alt" | "soft";
  label: string;
  title: React.ReactNode;
  subtitle: string;
  children: React.ReactNode;
}) {
  const bgClass =
    bg === "alt" ? "bg-surface-alt" : bg === "soft" ? "bg-[#FAFBFC]" : "bg-white";
  return (
    <section id={id} className={`py-24 ${bgClass}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-[12px] font-semibold uppercase tracking-wider text-brand">{label}</p>
          <h2 className="mt-3 text-[clamp(1.875rem,4vw,2.625rem)] leading-tight text-ink">
            {title}
          </h2>
          <p className="mt-4 text-[17px] text-slate leading-relaxed">{subtitle}</p>
        </div>
        {children}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      icon: "🤝",
      title: "Vous identifiez le besoin",
      text: "Un client vous parle de son site vieillissant, de sa visibilité sur Google, ou de trouver de nouveaux clients. Vous avez désormais une réponse concrète à lui donner.",
    },
    {
      n: "02",
      icon: "📩",
      title: "Vous nous transmettez le contact",
      text: "Un simple message ou un email suffit. Nous prenons le relais immédiatement — audit offert, devis sous 48h, suivi complet. Votre client est entre de bonnes mains.",
    },
    {
      n: "03",
      icon: "💶",
      title: "Vous êtes rémunéré à la signature",
      text: "Dès que le devis est signé par votre client, vous recevez votre contrepartie. Forfait fixe ou avoir sur vos propres services — vous choisissez ce qui vous convient.",
    },
  ];
  return (
    <Section
      id="comment"
      bg="alt"
      label="Le processus"
      title="3 étapes, zéro complexité"
      subtitle="Vous faites ce que vous faites déjà : conseiller vos clients. On s'occupe du reste."
    >
      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((s) => (
          <div
            key={s.n}
            className="card-hover rounded-2xl bg-white border border-[#E8ECFF] p-7"
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex h-9 px-3 items-center rounded-full bg-brand-soft text-brand text-xs font-bold tracking-wider">
                {s.n}
              </span>
              <span className="text-3xl">{s.icon}</span>
            </div>
            <h3 className="mt-6 text-xl font-bold text-ink">{s.title}</h3>
            <p className="mt-3 text-[15px] text-slate leading-relaxed">{s.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Remuneration() {
  return (
    <Section
      label="Votre rémunération"
      title="Vous choisissez la formule qui vous convient"
      subtitle="Deux options pensées pour s'adapter à votre logique cabinet."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {/* Featured */}
        <div className="card-hover rounded-2xl bg-brand text-white p-9 shadow-brand">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-medium">
            ⭐ Le plus choisi
          </span>
          <div className="mt-7">
            <p className="text-5xl font-extrabold tracking-tight">150 – 300€</p>
            <p className="mt-2 text-sm text-white/75">
              par mission signée • versement immédiat
            </p>
          </div>
          <ul className="mt-8 space-y-3.5">
            {[
              "Forfait fixe, prévisible et transparent",
              "Versé dès la signature du devis",
              "Aucun plafond — autant de recommandations que vous voulez",
              "Pas de conditions ni d'engagement",
            ].map((t) => (
              <li key={t} className="flex gap-3 text-[15px]">
                <span className="flex-none mt-0.5 h-5 w-5 rounded-full bg-white text-brand flex items-center justify-center text-xs font-bold">
                  ✓
                </span>
                <span className="text-white/95">{t}</span>
              </li>
            ))}
          </ul>
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-brand transition hover:bg-brand-soft"
          >
            Choisir cette option <span aria-hidden>→</span>
          </a>
        </div>

        {/* Standard */}
        <div className="card-hover rounded-2xl bg-surface-alt border border-[#E8ECFF] p-9">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium"
            style={{ background: "var(--warn-bg)", color: "var(--warn)" }}
          >
            💡 Alternative avantageuse
          </span>
          <div className="mt-7">
            <p className="text-5xl font-extrabold tracking-tight text-ink">Avoir services</p>
            <p className="mt-2 text-sm text-slate">
              réduction sur vos propres prestations EP Digital X
            </p>
          </div>
          <ul className="mt-8 space-y-3.5">
            {[
              "Valeur directe sur votre site ou votre visibilité",
              "Réduction appliquée sur la prochaine prestation",
              "Cumulable sur plusieurs recommandations",
              "Idéal si vous souhaitez aussi renforcer votre image digitale",
            ].map((t) => (
              <li key={t} className="flex gap-3 text-[15px]">
                <span className="flex-none mt-0.5 h-5 w-5 rounded-full bg-brand text-white flex items-center justify-center text-xs font-bold">
                  ✓
                </span>
                <span className="text-ink">{t}</span>
              </li>
            ))}
          </ul>
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110"
          >
            Choisir cette option <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </Section>
  );
}

function References() {
  const cases = [
    {
      tag: "Google Ads · GMB",
      name: "Proclean STJ",
      site: "proclean-stj.fr",
      sector: "Nettoyage professionnel · Normandie",
      image: procleanImg,
      stats: [
        ["Délai de résultats", "2 mois"],
        ["Appels entrants", "+65% en 8 semaines"],
        ["Coût par lead", "Divisé par 2"],
      ],
    },
    {
      tag: "SEO Local · Fiche Google",
      name: "Les Bons Biens",
      site: "lesbonsbiens.com",
      sector: "Immobilier · Référencement local",
      image: lesBonsBiensImg,
      stats: [
        ["Visibilité Google Maps", "Top 3 local"],
        ["Trafic organique", "+80% en 4 mois"],
        ["Avis Google", "×3 en volume"],
      ],
    },
    {
      tag: "SEO · Référencement",
      name: "Allo Nuisible Caen",
      site: "allo-nuisible-caen.fr",
      sector: "Dératisation · Services urgents",
      image: alloNuisibleImg,
      stats: [
        ["Positionnement", "N°1 sur \"Nuisibles Caen\""],
        ["Demandes en ligne", "+120% en 6 mois"],
        ["Visibilité régionale", "Top 3 Calvados"],
      ],
    },
  ];
  return (
    <Section
      bg="alt"
      label="Nos réalisations"
      title="Des résultats concrets pour des TPE comme les vôtres"
      subtitle="Création de site, SEO local, Google Ads — voici ce que nous livrons pour vos clients."
    >
      <div className="grid md:grid-cols-3 gap-6">
        {cases.map((c) => (
          <article
            key={c.name}
            className="card-hover rounded-2xl bg-white border border-[#E8ECFF] overflow-hidden flex flex-col"
          >
            <div className="relative">
              <img
                src={c.image}
                alt={`Site web ${c.name} réalisé par EP Digital X`}
                loading="lazy"
                className="w-full aspect-[16/10] object-cover object-top"
              />
              <div className="absolute bottom-3 left-3 right-3 inline-flex items-center gap-2 rounded-lg bg-white/95 backdrop-blur px-3 py-2 text-[12px] font-semibold text-ink shadow-brand-sm">
                <span className="text-success">✅</span>
                Site web réalisé par EP Digital X
              </div>
            </div>
            <div className="p-7 flex-1 flex flex-col">
              <span className="inline-flex self-start items-center rounded-full bg-brand-soft px-3 py-1 text-[11px] font-semibold text-brand uppercase tracking-wider">
                {c.tag}
              </span>
              <h3 className="mt-5 text-xl font-bold text-ink">{c.name}</h3>
              <p className="mt-1 text-sm text-brand font-medium">{c.site}</p>
              <p className="mt-1 text-sm text-slate">{c.sector}</p>
              <div className="mt-6 pt-6 border-t border-[#E8ECFF] space-y-3.5">
                {c.stats.map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between gap-4">
                    <span className="text-[13px] text-slate">{label}</span>
                    <span
                      className="text-[13px] font-bold px-2.5 py-1 rounded-md"
                      style={{ background: "var(--success-bg)", color: "var(--success)" }}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function WhyUs() {
  const items = [
    {
      icon: "🏆",
      title: "Agence spécialisée TPE/PME",
      text: "Nous travaillons exclusivement avec des entreprises locales. Nous connaissons leurs contraintes, leur budget, leurs enjeux concrets.",
    },
    {
      icon: "📊",
      title: "Résultats mesurables",
      text: "Chaque mission inclut un reporting clair. Vos clients voient la progression — et vous aussi. Pas de promesses floues.",
    },
    {
      icon: "⚡",
      title: "Réactivité garantie",
      text: "Devis sous 48h, démarrage rapide, interlocuteur unique. Vos clients sont pris en charge sérieusement dès le premier contact.",
    },
    {
      icon: "🔒",
      title: "Aucun engagement de votre côté",
      text: "Pas de contrat, pas d'exclusivité, pas de quota. Vous recommandez quand vous le jugez utile. La relation reste simple et saine.",
    },
  ];
  return (
    <Section
      label="Pourquoi EP Digital X"
      title="Votre réputation est notre priorité"
      subtitle="Quand vous recommandez quelqu'un à vos clients, vous engagez votre image. Voici pourquoi vous pouvez le faire sereinement avec nous."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((i) => (
          <div
            key={i.title}
            className="card-hover rounded-2xl bg-white border border-[#E8ECFF] p-7 flex gap-5"
          >
            <div className="flex-none h-12 w-12 rounded-xl bg-brand-soft flex items-center justify-center text-2xl">
              {i.icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-ink">{i.title}</h3>
              <p className="mt-2 text-[15px] text-slate leading-relaxed">{i.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

type Testimonial =
  | {
      type: "text";
      name: string;
      meta: string;
      initial: string;
      color: string;
      text: string;
      date: string;
    }
  | {
      type: "video";
      videoId: string;
      name: string;
      activity: string;
    };

function VideoEmbed({ videoId, name }: { videoId: string; name: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="relative w-full bg-black" style={{ paddingBottom: "56.25%" }}>
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=1`}
          title={`Témoignage vidéo — ${name}`}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 block w-full overflow-hidden"
          aria-label={`Lire le témoignage vidéo de ${name}`}
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt={`Témoignage vidéo — ${name}`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <span
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.45) 100%)" }}
          />
          <span className="absolute inset-0 flex items-center justify-center" aria-hidden>
            <span className="h-16 w-16 rounded-full bg-white/95 flex items-center justify-center shadow-brand transition group-hover:scale-110">
              <svg viewBox="0 0 24 24" className="h-7 w-7 ml-1 fill-[#FF0000]">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        </button>
      )}
    </div>
  );
}

function WallOfLove() {
  const textReviews: Testimonial[] = [
    {
      type: "text",
      name: "Gregory Polosecki",
      meta: "Local Guide · 16 avis",
      initial: "G",
      color: "#0740F9",
      text: "J'ai eu une expérience exceptionnelle avec EP Digital en tant que client. Le délai de livraison a toujours été respecté, ce qui est essentiel pour moi. De plus, l'écoute et la réactivité des responsables, Daniel Ferras et Géraldine Smorloz, sont tout simplement impressionnantes. Ils sont toujours disponibles pour répondre à mes questions et traiter mes besoins. Enfin, le rapport qualité-prix est excellent et équitable, sans abus. Je recommande chaleureusement EP Digital pour leurs services de qualité et leur engagement envers leurs clients.",
      date: "Novembre 2023",
    },
    {
      type: "text",
      name: "Nelly Chaillot",
      meta: "6 avis",
      initial: "N",
      color: "#E84393",
      text: "EP Digital, un Duo de choc à l'écoute qui aime partager son savoir avec générosité ! Des conseils avisés pour une meilleure visibilité sur le web. Merci Géraldine et Daniel. 🙏",
      date: "Mai 2022",
    },
    {
      type: "text",
      name: "Cryo Danjou",
      meta: "6 avis · 1 photo",
      initial: "C",
      color: "#2DD4A8",
      text: "Merci à EP Digital pour leur remarquable travail dans la réalisation de notre site internet CryoDanjou à Caen. Leur expertise en création de site web a été remarquable. Ils ont rapidement compris notre univers traduisant parfaitement notre image de marque. Recommandation incontestable pour leur professionnalisme et leur engagement envers la satisfaction client !",
      date: "Mars 2024",
    },
    {
      type: "text",
      name: "Shanel Roger-Lombard",
      meta: "4 avis",
      initial: "S",
      color: "#F79009",
      text: "J'ai récemment collaboré avec l'agence EP DIGITAL pour la création de mon site web et je suis extrêmement satisfait des résultats. Dès le premier contact, l'équipe s'est montrée professionnelle, réactive et à l'écoute de mes besoins. Ils ont su transformer mes idées en un site web attractif, moderne et parfaitement adapté à ma stratégie de communication. Leur expertise en marketing digital est indéniable !",
      date: "Février 2025",
    },
    {
      type: "text",
      name: "Ayoub",
      meta: "1 avis",
      initial: "A",
      color: "#0740F9",
      text: "Une excellente expérience avec EP Digital ! L'équipe est ultra professionnelle, réactive et force de proposition. Grâce à leur expertise, mon site web a été optimisé et notre visibilité en ligne augmente. Leur approche personnalisée et leur souci du détail font toute la différence. Si vous cherchez une agence web sérieuse et efficace à Caen, je recommande EP Digital les yeux fermés !",
      date: "Février 2025",
    },
    {
      type: "text",
      name: "Marie Lemonnier",
      meta: "3 avis",
      initial: "M",
      color: "#12B76A",
      text: "Super expérience avec Géraldine, une femme très professionnelle pour la création de mon site internet ! Merci à son agence de Caen.",
      date: "Février 2025",
    },
    {
      type: "text",
      name: "Olivier Boullen",
      meta: "Local Guide · 12 avis",
      initial: "O",
      color: "#E84393",
      text: "Je recommande EP digital, une agence web comme on les aime. Ils nous ont accompagnés dans la création de notre site internet dans une ambiance professionnelle et décontractée. Je remercie tout particulièrement Daniel toujours disponible, toujours à l'écoute et de très bons conseils pour la gestion de notre site internet.",
      date: "Mars 2025",
    },
    {
      type: "text",
      name: "Veragrow Dev",
      meta: "1 avis",
      initial: "V",
      color: "#7B9FFF",
      text: "Un grand merci à EP Digital pour leur accompagnement sur le référencement naturel et le web design. Grâce à leur intervention, nous avons nettement gagné en visibilité et amélioré notre taux de conversion. Merci à Daniel, dont l'écoute, la disponibilité et l'expertise nous ont permis de monter en compétences en webmarketing. Nous recommandons vivement cette agence web !",
      date: "Mai 2025",
    },
  ];

  const videoReviews: Testimonial[] = [
    { type: "video", videoId: "oEh0sTJnbkU", name: "Les Bons Biens", activity: "Site e-commerce" },
    { type: "video", videoId: "ad3vIFlBa8o", name: "Julien — OKOLO", activity: "Création de site web" },
    { type: "video", videoId: "VmoRPkJ90mw", name: "Carla & Jana — LBB", activity: "Site vitrine" },
    { type: "video", videoId: "pnTX4G9IMVU", name: "Quentin — Vagabondage Dégustation", activity: "Formation Google My Business" },
    { type: "video", videoId: "t6WE_F3S2Go", name: "Formation GMB EP Digital", activity: "Formation digitale" },
  ];

  // Interleave videos every ~2-3 cards for a balanced masonry mix
  const testimonials: Testimonial[] = [];
  let vi = 0;
  let ti = 0;
  const pattern = [0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1];
  for (const p of pattern) {
    if (p === 1 && vi < videoReviews.length) {
      testimonials.push(videoReviews[vi++]);
    } else if (ti < textReviews.length) {
      testimonials.push(textReviews[ti++]);
    }
  }
  while (vi < videoReviews.length) testimonials.push(videoReviews[vi++]);
  while (ti < textReviews.length) testimonials.push(textReviews[ti++]);

  const stars = (
    <div className="flex gap-0.5" aria-label="5 étoiles sur 5">
      {Array.from({ length: 5 }).map((_, idx) => (
        <svg key={idx} viewBox="0 0 20 20" className="h-4 w-4 fill-[#F79009]">
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1 1 5.8L10 14.77l-5.21 2.74 1-5.8-4.21-4.1 5.82-.85L10 1.5Z" />
        </svg>
      ))}
    </div>
  );

  return (
    <Section
      bg="soft"
      label="Témoignages"
      title="Ils nous font confiance"
      subtitle="Découvrez leurs témoignages en vidéo et par écrit."
    >
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
        {testimonials.map((t, i) => {
          const animStyle = { animationDelay: `${Math.min(i * 0.05, 0.4)}s` };

          if (t.type === "video") {
            return (
              <figure
                key={`v-${t.videoId}`}
                className="card-hover mb-6 break-inside-avoid rounded-2xl bg-white border border-[#E8ECFF] overflow-hidden animate-fade-up"
                style={animStyle}
              >
                <VideoEmbed videoId={t.videoId} name={t.name} />
                <div className="p-5">
                  {stars}
                  <p className="mt-3 text-sm font-bold text-ink leading-tight">{t.name}</p>
                  <p className="mt-0.5 text-[12px] text-slate">{t.activity}</p>
                </div>
              </figure>
            );
          }

          return (
            <figure
              key={`t-${t.name}`}
              className="card-hover mb-6 break-inside-avoid rounded-2xl bg-white border border-[#E8ECFF] p-6 animate-fade-up"
              style={animStyle}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="h-10 w-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{ background: t.color }}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-ink leading-tight">{t.name}</p>
                    <p className="text-[12px] text-slate">{t.meta}</p>
                  </div>
                </div>
                <svg viewBox="0 0 24 24" className="h-5 w-5 flex-none" aria-label="Avis Google">
                  <path fill="#4285F4" d="M22.5 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.76h3.56c2.08-1.92 3.22-4.74 3.22-8.09Z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.76c-.99.66-2.25 1.06-3.72 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z" />
                  <path fill="#FBBC05" d="M5.84 14.11A6.6 6.6 0 0 1 5.5 12c0-.73.13-1.45.34-2.11V7.05H2.18A11 11 0 0 0 1 12c0 1.78.43 3.46 1.18 4.95l3.66-2.84Z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38Z" />
                </svg>
              </div>
              <div className="mt-4">{stars}</div>
              <blockquote className="mt-4 text-[14.5px] text-ink leading-relaxed">
                {t.text}
              </blockquote>
              <figcaption className="mt-4 text-[12px] text-slate">Visité en {t.date}</figcaption>
            </figure>
          );
        })}
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href="https://share.google/QCNAhYpNvCCAvEHKB"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border-2 border-brand bg-white px-6 py-3.5 text-sm font-semibold text-brand transition hover:bg-brand-tint hover:shadow-brand-sm"
        >
          ⭐ Voir tous nos avis Google
        </a>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, idx) => (
              <svg key={idx} viewBox="0 0 20 20" className="h-5 w-5 fill-[#F79009]">
                <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1 1 5.8L10 14.77l-5.21 2.74 1-5.8-4.21-4.1 5.82-.85L10 1.5Z" />
              </svg>
            ))}
          </div>
          <span className="text-sm font-semibold text-ink">5,0 sur Google</span>
          <span className="text-sm text-slate">· des dizaines d'avis vérifiés</span>
        </div>
      </div>
    </Section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-28">
      <div
        className="absolute inset-x-0 top-0 h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(7,64,249,0.35), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-5 sm:px-8 text-center">
        <h2 className="text-white text-[clamp(1.875rem,4.5vw,2.75rem)] leading-tight">
          Prêt à devenir <span style={{ color: "#7B9FFF" }}>partenaire digital de référence</span>{" "}
          pour vos clients ?
        </h2>
        <p className="mt-5 text-[17px]" style={{ color: "rgba(255,255,255,0.6)" }}>
          Un échange de 20 minutes suffit pour voir si le partenariat vous correspond.
        </p>
        <a
          href={BOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex items-center gap-2 rounded-xl bg-brand px-9 py-[18px] text-sm font-semibold text-white shadow-brand transition hover:brightness-110"
        >
          📅 Réserver un échange gratuit
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#111316" }} className="py-10">
      <div
        className="mx-auto max-w-7xl px-5 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-5 border-t pt-10"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <Logo variant="dark" />
        <p className="text-center text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
          © 2025 EP Digital X · Agence web & marketing digital · Caen, Normandie
        </p>
        <div className="hidden md:block w-[140px]" />
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="bg-white text-ink">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Remuneration />
      <References />
      <WhyUs />
      <WallOfLove />
      <FinalCTA />
      <Footer />
    </main>
  );
}
