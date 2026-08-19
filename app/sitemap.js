import { getBlogPosts } from './lib/getBlogPosts';
import { getAuthors } from './lib/getAuthors';

export default function sitemap() {
  const baseUrl = 'https://cashmela.com';

  // Use a realistic fixed date for static pages (update this when content actually changes)
  const staticLastModified = new Date('2026-08-14');

  const baseRoutes = [
    { path: '', changeFrequency: 'daily', priority: 1.0 },
    { path: '/personal-loan', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/debt-consolidation', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/business-loan', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/overdraft', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/calculators', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/calculators/loan-eligibility-calculator', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/calculators/personal-loan-calculator', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/calculators/smart-tax-planner', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/credit-score', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/blogs', changeFrequency: 'daily', priority: 0.8 },
    { path: '/about', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/faq', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/authors', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/responsible-lending', changeFrequency: 'monthly', priority: 0.4 },
    { path: '/privacy-policy', changeFrequency: 'monthly', priority: 0.3 },
    { path: '/terms-and-conditions', changeFrequency: 'monthly', priority: 0.3 },
    { path: '/cookie-policy', changeFrequency: 'monthly', priority: 0.3 },
    { path: '/disclaimer', changeFrequency: 'monthly', priority: 0.3 },
    { path: '/refund-policy', changeFrequency: 'monthly', priority: 0.3 },
  ];

  const routes = baseRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: staticLastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // Author profile pages
  const authors = getAuthors();
  const authorRoutes = authors.map((author) => ({
    url: `${baseUrl}/authors/${author.slug}`,
    lastModified: staticLastModified,
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  // Blog posts (use actual publish dates)
  const blogPosts = getBlogPosts();
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : staticLastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // City-specific pages
  const cities = [
    "mumbai",
    "delhi",
    "bangalore",
    "hyderabad",
    "chennai",
    "pune",
    "kolkata",
    "ahmedabad",
    "jaipur"
  ];

  const cityRoutes = [];
  cities.forEach((city) => {
    cityRoutes.push({
      url: `${baseUrl}/personal-loan/${city}`,
      lastModified: staticLastModified,
      changeFrequency: 'weekly',
      priority: 0.6,
    });
    cityRoutes.push({
      url: `${baseUrl}/debt-consolidation/${city}`,
      lastModified: staticLastModified,
      changeFrequency: 'weekly',
      priority: 0.6,
    });
  });

  return [...routes, ...authorRoutes, ...blogRoutes, ...cityRoutes];
}
