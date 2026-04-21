/**
 * Build-time sitemap generator.
 * Keeps public/sitemap.xml in sync with the canonical route list.
 * Run automatically by the Vite plugin in vite.config.ts.
 */
import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const SITE_URL = "https://digitalspacecapital.com";

type Route = {
  path: string;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
};

const ROUTES: Route[] = [
  { path: "/", changefreq: "weekly", priority: 1.0 },
  { path: "/about", changefreq: "monthly", priority: 0.9 },
  { path: "/what-we-do", changefreq: "monthly", priority: 0.9 },
  { path: "/directors", changefreq: "monthly", priority: 0.7 },
  { path: "/team", changefreq: "monthly", priority: 0.7 },
  { path: "/subsidiaries", changefreq: "monthly", priority: 0.8 },
  { path: "/subsidiaries/digital-space-capital", changefreq: "monthly", priority: 0.8 },
  { path: "/subsidiaries/dsc-asset-management", changefreq: "monthly", priority: 0.8 },
  { path: "/subsidiaries/dsc-microfinance-bank", changefreq: "monthly", priority: 0.8 },
  { path: "/subsidiaries/naingate-insurance", changefreq: "monthly", priority: 0.8 },
  { path: "/subsidiaries/emison-real-estate", changefreq: "monthly", priority: 0.8 },
  { path: "/subsidiaries/easy-pay", changefreq: "monthly", priority: 0.8 },
  { path: "/subsidiaries/digikolo", changefreq: "monthly", priority: 0.8 },
  { path: "/testimonials", changefreq: "monthly", priority: 0.6 },
  { path: "/contact", changefreq: "monthly", priority: 0.9 },
  { path: "/careers", changefreq: "weekly", priority: 0.7 },
  { path: "/blog", changefreq: "weekly", priority: 0.8 },
  { path: "/investor-relations", changefreq: "monthly", priority: 0.8 },
  { path: "/faq", changefreq: "monthly", priority: 0.6 },
  { path: "/legal", changefreq: "yearly", priority: 0.4 },
  { path: "/privacy-policy", changefreq: "yearly", priority: 0.4 },
  { path: "/terms-of-service", changefreq: "yearly", priority: 0.4 },
];

export function buildSitemap(today = new Date().toISOString().slice(0, 10)): string {
  const urls = ROUTES.map(
    (r) => `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority.toFixed(1)}</priority>
  </url>`
  ).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

// Allow running directly: `tsx scripts/generate-sitemap.ts`
const isDirect =
  typeof process !== "undefined" &&
  process.argv[1] &&
  fileURLToPath(import.meta.url) === resolve(process.argv[1]);

if (isDirect) {
  const out = resolve(dirname(fileURLToPath(import.meta.url)), "..", "public", "sitemap.xml");
  writeFileSync(out, buildSitemap(), "utf8");
  // eslint-disable-next-line no-console
  console.log(`✓ Sitemap written to ${out}`);
}
