import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Leaf, Truck, Sprout, Mail } from "lucide-react";
import logoImg from "@/assets/nitronorte-logo.webp";
import bagImg from "@/assets/nitronorte-bag-hero.webp";
import bigBagImg from "@/assets/nitronorte-bigbag.webp";
import cropsImg from "@/assets/cultivos-cana.webp";
import logisticsImg from "@/assets/cobertura-logistica.webp";

export const Route = createFileRoute("/")({
  component: Index,
});

const HERO_IMG =
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=80";

const crops = [
  "Palma de aceite",
  "Arroz",
  "Maíz",
  "Café",
  "Caña de azúcar",
  "Banano",
];

const logistics = [
  { city: "Bogotá", role: "Oficina principal" },
  { city: "Cartagena", role: "Centro logístico" },
  { city: "Buenaventura", role: "Centro logístico" },
];

function Nav() {
  const links = [
    ["#top", "Inicio"],
    ["#producto", "Fertilizantes"],
    ["#cultivos", "Cultivos"],
    ["#contacto", "Contacto"],
  ];
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-8 px-6 py-6 lg:px-12">
        <div className="flex items-center gap-10">
          <a href="#top" className="flex items-center gap-3">
            <img
              src={logoImg}
              alt="Nitronorte — Fertilizantes Nitrogenados"
              width={160}
              height={160}
              className="h-11 w-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]"
            />
          </a>
          <nav className="hidden items-center gap-7 sm:flex lg:gap-9">
            {links.map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-[13px] font-medium tracking-wide text-background/75 transition-colors hover:text-background"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
        <a
          href="#contacto"
          className="hidden rounded-full bg-primary px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground shadow-[var(--shadow-soft)] transition-colors hover:bg-primary-deep lg:inline-block"
        >
          Solicitar cotización
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden bg-[oklch(0.18_0.04_150)]">
      <img
        src={HERO_IMG}
        alt="Campo agrícola colombiano al amanecer"
        width={2000}
        height={1333}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.18_0.04_150)]/90 via-[oklch(0.18_0.04_150)]/55 to-[oklch(0.18_0.04_150)]/40" />
      <Nav />
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1280px] flex-col justify-center px-6 py-32 lg:px-12 lg:py-40">
        <div className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-background/20 bg-background/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-background/85 backdrop-blur">
          <Sprout className="h-3.5 w-3.5" />
          Fertilizante nitrogenado
        </div>
        <h1 className="max-w-5xl text-balance text-[2.75rem] font-bold leading-[1.02] text-background sm:text-6xl lg:text-[5.75rem]">
          Urea agrícola para el campo colombiano
        </h1>
        <div className="mt-10 flex flex-col gap-8">
          <p className="max-w-xl text-base leading-relaxed text-background/80 lg:text-lg">
            Disponible en big bags y bultos de 50 kg. Cobertura nacional con centros logísticos en Cartagena y Buenaventura.
          </p>
          <a
            href="#contacto"
            className="group inline-flex w-fit items-center gap-2 rounded-full bg-primary px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-[var(--shadow-soft)] transition-colors hover:bg-primary-deep"
          >
            Solicitar cotización
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Product() {
  return (
    <section id="producto" className="relative overflow-hidden bg-background py-28 lg:py-40">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="mx-auto max-w-[1200px] px-6 text-center lg:px-12">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
          <Leaf className="h-3.5 w-3.5" />
          Producto
        </div>
        <h2 className="mx-auto mt-6 max-w-3xl text-balance text-[2.5rem] font-bold leading-[1] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[4rem]">
          Urea agrícola <span className="text-primary">46% N</span>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
          Fertilizante nitrogenado granulado. Disponible en bultos de 50 kg y big bags de 1.000 kg.
        </p>

        <div className="mt-20 grid gap-12">
          <figure className="group relative flex flex-col items-center p-6 lg:p-10">
            <div className="flex h-[340px] w-full items-center justify-center sm:h-[400px] lg:h-[460px]">
              <img
                src={bagImg}
                alt="Saco Nitronorte de Urea 46% N de 50 kg"
                width={1024}
                height={1408}
              loading="lazy"
              decoding="async"
                className="h-full w-auto object-contain transition-transform duration-500 group-hover:-translate-y-1"
              />
            </div>
            <figcaption className="mt-6 text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
              Bulto · <span className="text-foreground">50 kg</span>
            </figcaption>
          </figure>

          <figure className="group relative flex flex-col items-center p-6 lg:p-10">
            <div className="flex h-[340px] w-full items-center justify-center sm:h-[400px] lg:h-[460px]">
              <img
                src={bigBagImg}
                alt="Big bag Nitronorte de Urea 46% N de 1.000 kg"
                width={1024}
                height={1408}
              loading="lazy"
              decoding="async"
                className="h-full w-auto object-contain transition-transform duration-500 group-hover:-translate-y-1"
              />
            </div>
            <figcaption className="mt-6 text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
              Big bag · <span className="text-foreground">1.000 kg</span>
            </figcaption>
          </figure>
        </div>

        <a
          href="#contacto"
          className="group mt-20 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-[var(--shadow-soft)] transition-colors hover:bg-primary-deep"
        >
          Solicitar cotización
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </section>
  );
}

function Crops() {
  return (
    <section id="cultivos" className="bg-background py-28 lg:py-40">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <div className="grid gap-16">
          <div className="relative overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]">
            <img
              src={cropsImg}
              alt="Cultivo agrícola colombiano"
              loading="lazy"
              className="h-full max-h-[640px] w-full object-cover"
            />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
              <Sprout className="h-3.5 w-3.5" />
              Cultivos
            </div>
            <h2 className="mt-5 text-balance text-[2.25rem] font-bold leading-[1.05] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-[3.25rem]">
              Para los cultivos que impulsan a Colombia
            </h2>
            <ul className="mt-12 divide-y divide-foreground/10 border-t border-foreground/10">
              {crops.map((c) => (
                <li
                  key={c}
                  className="group flex items-center justify-between gap-4 py-5 text-lg font-medium tracking-tight text-foreground transition-colors hover:text-primary lg:text-xl"
                >
                  <span>{c}</span>
                  <Leaf className="h-4 w-4 text-primary/40 transition-colors group-hover:text-primary" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Locations() {
  return (
    <section id="ubicaciones" className="bg-background py-28 lg:py-40">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <div className="grid gap-16">
          <div className="relative overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]">
            <img
              src={logisticsImg}
              alt="Operación logística industrial"
              loading="lazy"
              className="h-full max-h-[640px] w-full object-cover"
            />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
              <Truck className="h-3.5 w-3.5" />
              Cobertura
            </div>
            <h2 className="mt-5 text-balance text-[2.25rem] font-bold leading-[1.05] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-[3.25rem]">
              Despacho estratégico a nivel nacional
            </h2>
            <ul className="mt-12 divide-y divide-foreground/10 border-t border-foreground/10">
              {logistics.map((l) => (
                <li
                  key={l.city}
                  className="group flex items-center justify-between gap-6 py-5 transition-colors hover:text-primary"
                >
                  <span className="text-lg font-medium tracking-tight text-foreground transition-colors group-hover:text-primary lg:text-xl">
                    {l.city}
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-primary/60 transition-colors group-hover:text-primary">
                    {l.role}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const channels = [
    {
      label: "Correo",
      value: "cotizaciones@nitronorte.com",
      href: "mailto:cotizaciones@nitronorte.com",
    },
    {
      label: "WhatsApp",
      value: "+57 312 345 6789",
      href: "https://wa.me/573123456789",
    },
  ];
  return (
    <section id="contacto" className="bg-background py-28 text-foreground lg:py-40">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
            <Mail className="h-3.5 w-3.5" />
            Contacto
          </div>
          <h2 className="mt-5 text-balance text-[2.25rem] font-bold leading-[1.05] tracking-[-0.02em] sm:text-5xl lg:text-[3.25rem]">
            Solicita una cotización
          </h2>
        </div>
        <ul className="mt-12 divide-y divide-foreground/10 border-t border-foreground/10 lg:mt-16">
          {channels.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between gap-6 py-6 transition-colors hover:text-primary"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                    {c.label}
                  </span>
                  <span className="text-lg font-medium tracking-tight lg:text-xl">
                    {c.value}
                  </span>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background text-muted-foreground">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-4 border-t border-foreground/10 px-6 py-10 text-center lg:px-12">
        <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          © 2026 Nitronorte S.A.S. · Colombia
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main>
      <Hero />
      <Product />
      <Crops />
      <Locations />
      <Contact />
      <Footer />
    </main>
  );
}
