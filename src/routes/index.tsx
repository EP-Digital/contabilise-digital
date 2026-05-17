import { createFileRoute } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";

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
  bg?: "white" | "alt";
  label: string;
  title: React.ReactNode;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`py-24 ${bg === "alt" ? "bg-surface-alt" : "bg-white"}`}
    >
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
            className="card-hover rounded-2xl bg-white border border-[#E8ECFF] p-7"
          >
            <span className="inline-flex items-center rounded-full bg-brand-soft px-3 py-1 text-[11px] font-semibold text-brand uppercase tracking-wider">
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
      <FinalCTA />
      <Footer />
    </main>
  );
}
