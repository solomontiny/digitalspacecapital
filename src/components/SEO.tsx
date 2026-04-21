import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://digitalspacecapital.com";
const DEFAULT_IMAGE = "https://digitalspacecapital.com/og-image.jpg";
const SITE_NAME = "Digital Space Capital Group";

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  breadcrumbs?: BreadcrumbItem[];
  keywords?: string;
  locale?: string;
}

/**
 * Auto-derive breadcrumbs from a pathname when none are explicitly provided.
 * e.g. /subsidiaries/easy-pay -> Home > Subsidiaries > Easy Pay
 */
const deriveBreadcrumbs = (pathname: string): BreadcrumbItem[] => {
  if (pathname === "/" || pathname === "") return [];
  const segments = pathname.split("/").filter(Boolean);
  const crumbs: BreadcrumbItem[] = [{ name: "Home", path: "/" }];
  let acc = "";
  segments.forEach((seg) => {
    acc += `/${seg}`;
    const name = seg
      .split("-")
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join(" ");
    crumbs.push({ name, path: acc });
  });
  return crumbs;
};

const SEO = ({
  title,
  description,
  image = DEFAULT_IMAGE,
  type = "website",
  noindex = false,
  jsonLd,
  breadcrumbs,
  keywords,
  locale = "en_NG",
}: SEOProps) => {
  const { pathname } = useLocation();
  const url = `${SITE_URL}${pathname}`;
  const fullTitle = title.includes("Digital Space Capital")
    ? title
    : `${title} | ${SITE_NAME}`;

  const crumbs = breadcrumbs ?? deriveBreadcrumbs(pathname);

  // Build JSON-LD array: BreadcrumbList (if any) + page-specific
  const ldArray: Record<string, unknown>[] = [];

  if (crumbs.length > 1) {
    ldArray.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: `${SITE_URL}${c.path}`,
      })),
    });
  }

  if (jsonLd) {
    if (Array.isArray(jsonLd)) ldArray.push(...jsonLd);
    else ldArray.push(jsonLd);
  }

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      )}

      {/* hreflang — single English (Nigeria) site, with x-default fallback */}
      <link rel="alternate" hrefLang="en" href={url} />
      <link rel="alternate" hrefLang="en-NG" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={locale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={fullTitle} />

      {ldArray.length > 0 && (
        <script type="application/ld+json">{JSON.stringify(ldArray)}</script>
      )}
    </Helmet>
  );
};

export default SEO;
