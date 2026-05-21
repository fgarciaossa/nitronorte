import {
  Outlet,
  Link,
  createRootRoute,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "google-site-verification", content: "-PbEBT0RK21y8VvPCDPz-Ii4k6f4AexckIopPYstHCM" },
      { title: "Nitronorte | Urea 46% N — Fertilizante en Colombia" },
      { name: "description", content: "Nitronorte distribuye urea agrícola 46% N a granel y en sacos de 50 kg para palma, arroz, maíz, café, caña, banano y ganadería en Colombia." },
      { name: "author", content: "Nitronorte" },
      { property: "og:title", content: "Nitronorte | Urea 46% N — Fertilizante en Colombia" },
      { property: "og:description", content: "Nitronorte distribuye urea agrícola 46% N a granel y en sacos de 50 kg para palma, arroz, maíz, café, caña, banano y ganadería en Colombia." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Nitronorte" },
      { name: "twitter:title", content: "Nitronorte | Urea 46% N — Fertilizante en Colombia" },
      { name: "twitter:description", content: "Nitronorte distribuye urea agrícola 46% N a granel y en sacos de 50 kg para palma, arroz, maíz, café, caña, banano y ganadería en Colombia." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e200b1a8-253c-4d6d-9eaa-c360b4db1758/id-preview-e5c95e62--b02b606d-d005-47c2-8751-f52d94b64ae0.lovable.app-1779310517564.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e200b1a8-253c-4d6d-9eaa-c360b4db1758/id-preview-e5c95e62--b02b606d-d005-47c2-8751-f52d94b64ae0.lovable.app-1779310517564.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@600;700;800&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://nitronorte.lovable.app/#organization",
              name: "Nitronorte",
              url: "https://nitronorte.lovable.app/",
              logo: "https://nitronorte.lovable.app/favicon.ico",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "sales",
                  email: "cotizaciones@nitronorte.com",
                  telephone: "+57 312 345 6789",
                  areaServed: "CO",
                  availableLanguage: ["Spanish"],
                },
              ],
            },
            {
              "@type": "Product",
              name: "Urea agrícola 46% N",
              brand: { "@id": "https://nitronorte.lovable.app/#organization" },
              description:
                "Fertilizante nitrogenado granulado al 46% N. Disponible en bultos de 50 kg y big bags de 1.000 kg.",
              category: "Fertilizante nitrogenado",
            },
            {
              "@type": "LocalBusiness",
              name: "Nitronorte — Oficina principal Bogotá",
              address: { "@type": "PostalAddress", addressLocality: "Bogotá", addressCountry: "CO" },
            },
            {
              "@type": "LocalBusiness",
              name: "Nitronorte — Centro logístico Cartagena",
              address: { "@type": "PostalAddress", addressLocality: "Cartagena", addressCountry: "CO" },
            },
            {
              "@type": "LocalBusiness",
              name: "Nitronorte — Centro logístico Buenaventura",
              address: { "@type": "PostalAddress", addressLocality: "Buenaventura", addressCountry: "CO" },
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
