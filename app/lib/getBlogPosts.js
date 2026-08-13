import { blogData } from '../data/blogs/blogData';

export function getBlogPosts() {
  return blogData;
}

export function getPostBySlug(slug) {
  const posts = getBlogPosts();
  let found = posts.find(post => post.slug === slug);
  if (!found && slug === 'personal-loan-eligibility-guide') {
    found = posts.find(post => post.slug === 'apply-personal-loan-online-guide');
  }
  return found;
}
