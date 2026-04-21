import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { writeFileSync } from "node:fs";
import { componentTagger } from "lovable-tagger";
import { buildSitemap } from "./scripts/generate-sitemap";

// Regenerates public/sitemap.xml on dev start and on production build,
// so search engines always see fresh <lastmod> values.
function sitemapPlugin(): Plugin {
  const write = () => {
    const out = path.resolve(__dirname, "public", "sitemap.xml");
    writeFileSync(out, buildSitemap(), "utf8");
  };
  return {
    name: "dsc-sitemap",
    apply: () => true,
    buildStart() {
      try {
        write();
      } catch (e) {
        this.warn(`Sitemap generation failed: ${(e as Error).message}`);
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/",
  server: {
    host: "::",
    port: 5173,
  },
  plugins: [
    react(),
    sitemapPlugin(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
