/** @type {import('next-sitemap').IConfig} */
export const siteUrl = "hermeco.co.uk";
export const generateRobotsTxt = true;
export const sitemapSize = 7000;
export const exclude = ["/admin/*", "/dashboard/*"];
export async function transform(config, path) {
    return {
        loc: path, // default
        changefreq: "weekly",
        priority: path === "/" ? 1.0 : 0.7,
        lastmod: new Date().toISOString(),
    };
}
  