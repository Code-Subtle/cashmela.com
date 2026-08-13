import { authorData } from '../data/authors/authorData';
import { blogData } from '../data/blogs/blogData';

export function getAuthors() {
  return authorData;
}

export function getAuthorBySlug(slug) {
  const authors = getAuthors();
  return authors.find(author => author.slug === slug);
}

export function getArticlesByAuthor(authorSlug) {
  // Map articles to authors based on domain match or index cycle
  const author = getAuthorBySlug(authorSlug);
  if (!author) return [];

  // Match or assign articles to authors for complete rich rendering
  return blogData.filter(post => {
    if (post.authorSlug) {
      return post.authorSlug === authorSlug;
    }
    // Default fallback distribution if not explicitly specified
    return true;
  });
}
