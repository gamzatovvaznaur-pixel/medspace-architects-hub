// Runs before `vite dev` and `vite build` (predev/prebuild); writes public/sitemap.xml.
import { writeFileSync, readFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://medspace-architects-hub.lovable.app";
const today = new Date().toISOString().slice(0, 10);

interface Entry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
  lastmod?: string;
}

const staticEntries: Entry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/overview", changefreq: "monthly", priority: "0.9" },
  { path: "/services", changefreq: "monthly", priority: "0.9" },
  { path: "/licensing", changefreq: "monthly", priority: "0.9" },
  { path: "/about", changefreq: "monthly", priority: "0.7" },
  { path: "/contacts", changefreq: "yearly", priority: "0.6" },
  { path: "/documents", changefreq: "yearly", priority: "0.5" },
  { path: "/blog", changefreq: "weekly", priority: "0.9" },
  { path: "/cases/iris-krasnodar", changefreq: "yearly", priority: "0.7" },
  { path: "/cases/iris-makhachkala", changefreq: "yearly", priority: "0.7" },
  { path: "/privacy", changefreq: "yearly", priority: "0.3" },
];

const serviceSlugs = [
  "consultation","design","supervision","equipment","furniture","approval",
  "stomatology","multidisciplinary","cosmetology","laboratory",
  "procedure-rooms","hospital","mri","xray","ophthalmology",
];

const serviceEntries: Entry[] = serviceSlugs.map((slug) => ({
  path: `/services/${slug}`,
  changefreq: "monthly",
  priority: "0.8",
}));

// Extract blog slugs from data files (regex — avoids TS import in script)
const blogRaw =
  readFileSync(resolve("src/data/blogPosts.ts"), "utf-8") +
  readFileSync(resolve("src/data/blogPostsExtra.ts"), "utf-8");
const blogSlugs = Array.from(
  blogRaw.matchAll(/"?slug"?:\s*"([^"]+)"/g),
).map((m) => m[1]);
const blogEntries: Entry[] = blogSlugs.map((slug) => ({
  path: `/blog/${slug}`,
  changefreq: "monthly",
  priority: "0.7",
  lastmod: today,
}));

const entries = [...staticEntries, ...serviceEntries, ...blogEntries];

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...entries.map((e) =>
    [
      "  <url>",
      `    <loc>${BASE_URL}${e.path}</loc>`,
      `    <lastmod>${e.lastmod || today}</lastmod>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : "",
      e.priority ? `    <priority>${e.priority}</priority>` : "",
      "  </url>",
    ]
      .filter(Boolean)
      .join("\n"),
  ),
  "</urlset>",
].join("\n");

writeFileSync(resolve("public/sitemap.xml"), xml);
console.log(`sitemap.xml written (${entries.length} entries)`);
