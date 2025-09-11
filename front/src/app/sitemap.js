export default async function sitemap() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://Hermeco.co.uk";
  
    // Static main pages
    const staticPages = [
      "",
      "/about",
      "/contact",
      "/services",
      "/faq",
      "/blog",
      "/projects",
    ].map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
    }));
  
    // Sub-services
    const subServices = [
      "/services/renovations",
      "/services/electrical",
      "/services/plumbing",
      "/services/painting",
      "/services/gardening",
      "/services/landscaping",
    ].map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
    }));
  
    // Dynamic blog posts
    const { getPostsFromDB } = await import("@/lib/blog");
    const posts = await getPostsFromDB();
    const postUrls = posts
      .filter(post => post.slug) // skip missing slugs
      .map(post => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.updatedAt || new Date().toISOString(),
      }));
  
    return [...staticPages, ...subServices, ...postUrls];
  }
  