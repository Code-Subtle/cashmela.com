import Link from 'next/link';
import Image from 'next/image';
import { getBlogPosts } from '../lib/getBlogPosts';
import { getAuthorBySlug } from '../lib/getAuthors';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { FaShieldAlt, FaArrowRight, FaBookOpen } from 'react-icons/fa';

export const metadata = {
  title: 'Financial Insights & Loan Guides | CashMela Blog',
  description: 'Expert financial advice, debt consolidation guides, personal loan comparison, and CIBIL score optimization tips by CashMela domain experts.',
  alternates: {
    canonical: 'https://cashmela.com/blogs',
  },
};

export default function BlogsPage() {
  const posts = getBlogPosts();
  const featuredPost = posts[1] || posts[0];
  const gridPosts = posts.filter(p => p.slug !== featuredPost.slug);

  return (
    <>
      <Navbar />
      <main className="w-full bg-[#fbfaf5] text-slate-900 min-h-screen pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <header className="text-center mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100 text-xs font-bold uppercase tracking-wider mb-4">
              <FaBookOpen /> Financial Literacy & Insights
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Smart Financial Guides
            </h1>
            <p className="text-slate-600 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Domain expertise on debt consolidation, credit score optimization, and loan comparison written by CashMela leaders.
            </p>
          </header>

          {/* Featured Post Card */}
          {featuredPost && (() => {
            const featuredAuthor = getAuthorBySlug(featuredPost.authorSlug) || {
              name: "Adil Patel",
              role: "Founder",
              slug: "adil-patel",
              image: "/authors/adil-patel.webp"
            };

            return (
              <div className="mb-16">
                <Link
                  href={`/blogs/${featuredPost.slug}`}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group p-4 sm:p-6"
                >
                  <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 p-1 sm:p-2">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      priority
                      unoptimized
                      className="object-contain group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                  </div>
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-5 p-2 sm:p-4">
                    <div>
                      <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-md">
                        FEATURED • {featuredPost.category || "GUIDE"}
                      </span>
                      <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-4 leading-tight group-hover:text-indigo-600 transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed line-clamp-3">
                        {featuredPost.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-indigo-500 shrink-0">
                        <Image
                          src={featuredAuthor.image}
                          alt={featuredAuthor.name}
                          fill
                          unoptimized
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">{featuredAuthor.name}</p>
                        <p className="text-xs text-slate-500">{featuredPost.date} • {featuredPost.readTime || "6 min read"}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })()}

          {/* Grid of Articles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {gridPosts.map((post) => {
              const author = getAuthorBySlug(post.authorSlug) || {
                name: "Adil Patel",
                role: "Founder",
                slug: "adil-patel",
                image: "/authors/adil-patel.webp"
              };

              return (
                <Link
                  href={`/blogs/${post.slug}`}
                  key={post.slug}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200/70 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative aspect-[16/10] w-full bg-slate-50 border-b border-slate-100 overflow-hidden p-1 sm:p-2">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        unoptimized
                        className="object-contain group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
                        {post.category || "FINANCE"}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 mt-3 group-hover:text-indigo-600 transition-colors leading-snug line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm mt-3 line-clamp-3 leading-relaxed">
                        {post.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                      <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-indigo-400 shrink-0">
                        <Image
                          src={author.image}
                          alt={author.name}
                          fill
                          unoptimized
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900">{author.name}</p>
                        <p className="text-[10px] text-slate-400">{post.date} • {post.readTime || "5 min read"}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
