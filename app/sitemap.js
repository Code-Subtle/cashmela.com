import { getBlogPosts } from './lib/getBlogPosts';

export default function sitemap() {
  const baseUrl = 'https://cashmela.com';

  const baseRoutes = [
    '',
    '/personal-loan',
    '/debt-consolidation',
    '/business-loan',
    '/overdraft',
    '/calculators',
    '/calculators/loan-eligibility-calculator',
    '/calculators/personal-loan-calculator',
    '/calculators/smart-tax-planner',
    '/credit-score',
    '/blogs',
    '/about',
    '/contact',
    '/faq',
    '/responsible-lending',
    '/privacy-policy',
    '/terms-and-conditions',
    '/cookie-policy',
    '/disclaimer',
    '/refund-policy',
  ];

  const routes = baseRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  const blogPosts = getBlogPosts();
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

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
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    });
    cityRoutes.push({
      url: `${baseUrl}/debt-consolidation/${city}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    });
  });

  return [...routes, ...blogRoutes, ...cityRoutes];
}
