import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import ReactMarkdown from 'react-markdown';
import { getBlogPosts, getPostBySlug } from '../../lib/getBlogPosts';
import { getAuthorBySlug } from '../../lib/getAuthors';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { FaLinkedin, FaTwitter, FaInstagram, FaArrowRight, FaShieldAlt, FaBookOpen } from 'react-icons/fa';

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Post Not Found | CashMela' };
  
  const author = getAuthorBySlug(post.authorSlug);
  const postUrl = `https://cashmela.com/blogs/${slug}`;
  const imageUrl = post.image?.startsWith('http') ? post.image : `https://cashmela.com${post.image || '/logo.webp'}`;

  const pageTitle = post.metaTitle || post.title;

  return {
    title: `${pageTitle} | CashMela`,
    description: post.description || `Read about ${post.title} on CashMela. Compare personal loan options and debt consolidation strategies in India.`,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: `${pageTitle} | CashMela`,
      description: post.description,
      url: postUrl,
      siteName: 'CashMela',
      type: 'article',
      publishedTime: post.date,
      authors: author ? [author.name] : ['CashMela Editorial Team'],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | CashMela`,
      description: post.description,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const author = getAuthorBySlug(post.authorSlug) || {
    name: "Adil Patel",
    role: "Founder",
    slug: "adil-patel",
    image: "/authors/adil-patel.webp",
    bio: "Founder of Cashmela.com. Expert in Indian debt consolidation and personal loan comparison."
  };

  const allPosts = getBlogPosts();
  const recommendedPosts = allPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  const postUrl = `https://cashmela.com/blogs/${slug}`;
  const imageUrl = post.image?.startsWith('http') ? post.image : `https://cashmela.com${post.image || '/logo.webp'}`;

  // JSON-LD Article Schema with Author EEAT
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "image": imageUrl,
    "datePublished": post.date ? new Date(post.date).toISOString() : new Date().toISOString(),
    "dateModified": post.date ? new Date(post.date).toISOString() : new Date().toISOString(),
    "author": {
      "@type": "Person",
      "name": author.name,
      "jobTitle": author.role,
      "url": `https://cashmela.com/authors/${author.slug}`,
      "worksFor": {
        "@type": "Organization",
        "name": "CashMela",
        "url": "https://cashmela.com"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "CashMela",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cashmela.com/logo.webp"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": postUrl
    }
  };

  // Custom components for ReactMarkdown
  const components = {
    h1: ({node, ...props}) => <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 my-8 tracking-tight" {...props} />,
    h2: ({node, ...props}) => <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-12 mb-5 tracking-tight border-b border-slate-200/80 pb-3" {...props} />,
    h3: ({node, ...props}) => <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mt-8 mb-4 tracking-tight" {...props} />,
    p: ({node, ...props}) => <p className="text-base sm:text-lg leading-relaxed text-slate-700 mb-6" {...props} />,
    ul: ({node, ...props}) => <ul className="mb-6 pl-6 text-base sm:text-lg leading-relaxed text-slate-700 list-disc space-y-2" {...props} />,
    ol: ({node, ...props}) => <ol className="mb-6 pl-6 text-base sm:text-lg leading-relaxed text-slate-700 list-decimal space-y-2" {...props} />,
    li: ({node, ...props}) => <li className="pl-1" {...props} />,
    a: ({node, ...props}) => <a className="text-indigo-600 font-semibold underline underline-offset-4 hover:text-indigo-800 transition-colors" {...props} />,
    blockquote: ({node, ...props}) => (
      <blockquote className="border-l-4 border-indigo-600 bg-indigo-50/60 p-6 my-8 italic text-slate-800 rounded-r-2xl shadow-sm text-base sm:text-lg" {...props} />
    ),
    table: ({node, ...props}) => (
      <div className="overflow-x-auto my-8 border border-slate-200 rounded-2xl shadow-sm bg-white">
        <table className="w-full border-collapse text-left" {...props} />
      </div>
    ),
    th: ({node, ...props}) => <th className="bg-slate-100 font-bold p-4 border-b border-slate-200 text-slate-900 text-xs sm:text-sm uppercase tracking-wider" {...props} />,
    td: ({node, ...props}) => <td className="p-4 border-b border-slate-100 text-slate-700 text-xs sm:text-sm" {...props} />,
    img: ({node, ...props}) => (
      <span className="block my-8 overflow-hidden rounded-3xl shadow-lg border border-slate-200/80 bg-slate-50 p-2 sm:p-4 text-center">
        <img className="w-full h-auto max-h-[550px] object-contain mx-auto rounded-2xl" {...props} />
      </span>
    ),
  };

  return (
    <>
      <Script
        id="blog-posting-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <Navbar />

      <main className="w-full bg-[#fbfaf5] text-slate-900 min-h-screen pt-24 pb-20">
        {/* Article Container */}
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Tag */}
          <div className="mb-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full border border-indigo-100">
              {post.category || "FINANCIAL GUIDES"}
            </span>
          </div>

          {/* Article Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-8 max-w-5xl">
            {post.title}
          </h1>

          {/* Top Hero & Summary Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
            
            {/* Left Summary & Author Metadata Box */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              
              {/* Takeaways Callout Box */}
              <div className="bg-[#eef2eb] border border-emerald-200/80 rounded-2xl p-6 shadow-sm">
                <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 mb-3 flex items-center gap-2">
                  <FaShieldAlt className="text-emerald-600" /> Key Takeaways
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-800 leading-relaxed">
                  {(post.summary || [
                    "Compare offers across 40+ RBI-regulated lenders in one place.",
                    "Save up to 45% on monthly EMIs through debt consolidation.",
                    "100% digital e-KYC approval without branch visits."
                  ]).map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold shrink-0">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Author Header Bar */}
              <div className="flex items-center gap-4 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-sm">
                <Link href={`/authors/${author.slug}`} className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shadow border-2 border-indigo-500 shrink-0">
                  <Image
                    src={author.image}
                    alt={author.name}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </Link>
                <div>
                  <div className="flex items-center gap-2">
                    <Link href={`/authors/${author.slug}`} className="text-sm sm:text-base font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                      {author.name}
                    </Link>
                    <span className="text-[10px] font-semibold bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full border border-indigo-100">
                      {author.role}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Published on {post.date} • {post.readTime || "6 min read"}
                  </div>
                </div>
              </div>

            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-50 p-2 sm:p-3">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                unoptimized
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>

          </div>

          {/* Main Content & Sidebar Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-slate-200/80 pt-10">
            
            {/* Desktop Left Sticky Navigation / Sidebar */}
            <aside className="hidden lg:block lg:col-span-3 sticky top-28 space-y-8">
              {/* Quick Navigation Card */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                  <FaBookOpen className="text-indigo-600" /> Article Overview
                </h3>
                <nav className="space-y-2 text-xs font-semibold text-slate-600">
                  <a href="#article-body" className="block hover:text-indigo-600 transition-colors py-1">1. Full Article Guide</a>
                  <a href="#author-bio" className="block hover:text-indigo-600 transition-colors py-1">2. Author & Verification</a>
                  <a href="#recommended" className="block hover:text-indigo-600 transition-colors py-1">3. Recommended Reading</a>
                </nav>
              </div>

              {/* Sticky Apply CTA Box */}
              <div className="bg-gradient-to-br from-indigo-600 to-blue-600 rounded-2xl p-6 text-white shadow-lg space-y-4">
                <p className="text-xs font-bold uppercase tracking-wider text-indigo-200">Free Calculator</p>
                <h4 className="text-lg font-bold leading-snug">Turn your financial stress into peace of mind.</h4>
                <p className="text-xs text-indigo-100 leading-relaxed">Check your debt consolidation & loan eligibility in 60 seconds.</p>
                <Link
                  href="/apply"
                  className="block w-full text-center py-3 bg-white text-indigo-900 font-bold rounded-xl text-xs hover:bg-slate-100 transition-all shadow-md"
                >
                  Apply Now &rarr;
                </Link>
              </div>
            </aside>

            {/* Right Main Content Column */}
            <div id="article-body" className="lg:col-span-9 max-w-3xl">
              
              {/* Markdown Content */}
              <div className="prose prose-lg max-w-none">
                <ReactMarkdown components={components}>
                  {post.content}
                </ReactMarkdown>
              </div>

              {/* Author EEAT Card at Bottom of Article */}
              <div id="author-bio" className="mt-14 p-6 sm:p-8 bg-white border border-slate-200/80 rounded-3xl shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <Link href={`/authors/${author.slug}`} className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shadow-md border-2 border-indigo-500 shrink-0">
                  <Image
                    src={author.image}
                    alt={author.name}
                    fill
                    className="object-cover"
                  />
                </Link>
                <div className="flex-1 text-center sm:text-left space-y-2">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <h4 className="text-xl font-bold text-slate-900">{author.name}</h4>
                    <span className="text-xs font-semibold bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded-full border border-indigo-100">
                      {author.role}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-slate-500">Author & Financial Analyst at CashMela.com</p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {author.bio}
                  </p>
                  <div className="pt-2 flex items-center justify-center sm:justify-start gap-4">
                    <Link
                      href={`/authors/${author.slug}`}
                      className="text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
                    >
                      View Full Author Profile &rarr;
                    </Link>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </article>

        {/* "Read Next" / Suggested Blogs Section */}
        <section id="recommended" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-12 border-t border-slate-200/80">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Read next
            </h2>
            <Link href="/blogs" className="text-xs sm:text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors">
              View all guides &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recommendedPosts.map((recPost) => {
              const recAuthor = getAuthorBySlug(recPost.authorSlug) || author;
              return (
                <Link
                  key={recPost.slug}
                  href={`/blogs/${recPost.slug}`}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200/70 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
                >
                  <div className="relative aspect-[16/10] w-full bg-slate-50 border-b border-slate-100 overflow-hidden p-1 sm:p-2">
                    <Image
                      src={recPost.image}
                      alt={recPost.title}
                      fill
                      unoptimized
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  <div className="p-6 flex flex-col justify-between grow space-y-4">
                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
                        {recPost.category || "FINANCE"}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 mt-3 group-hover:text-indigo-600 transition-colors line-clamp-2 leading-snug">
                        {recPost.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3 pt-4 border-t border-slate-100 text-xs text-slate-500">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden border border-indigo-400 shrink-0">
                        <Image
                          src={recAuthor.image}
                          alt={recAuthor.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-slate-800">{recAuthor.name}</p>
                        <p className="text-[10px] text-slate-400">{recPost.date}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Bottom Full-Width CTA Banner */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 rounded-3xl p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left relative z-10 max-w-2xl">
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Turn every financial interaction into impact.
              </h2>
              <p className="text-indigo-100 text-sm sm:text-lg">
                Consolidate high-interest credit cards and multiple loan EMIs into one simple, low-interest repayment plan.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 relative z-10 shrink-0 w-full sm:w-auto">
              <Link
                href="/apply"
                className="px-6 sm:px-8 py-3.5 sm:py-4 bg-white hover:bg-slate-100 text-indigo-900 font-extrabold rounded-2xl shadow-xl transition-all text-center text-sm sm:text-base whitespace-nowrap inline-flex items-center justify-center gap-2"
              >
                Apply Now <FaArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/calculators/loan-eligibility-calculator"
                className="px-6 sm:px-8 py-3.5 sm:py-4 bg-indigo-950/80 hover:bg-indigo-900 border border-indigo-400/40 text-white font-bold rounded-2xl transition-all text-center text-sm sm:text-base whitespace-nowrap inline-flex items-center justify-center gap-2"
              >
                Check Eligibility
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
