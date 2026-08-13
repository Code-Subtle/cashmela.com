import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { getAuthors, getAuthorBySlug, getArticlesByAuthor } from '../../lib/getAuthors';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { 
  FaLinkedin, 
  FaTwitter, 
  FaInstagram, 
  FaEnvelope, 
  FaGithub, 
  FaQuoteLeft, 
  FaAward, 
  FaBookOpen, 
  FaArrowLeft,
  FaShieldHalved,
  FaArrowRight,
  FaBriefcase,
  FaUsers,
  FaCheck
} from 'react-icons/fa6';

export async function generateStaticParams() {
  const authors = getAuthors();
  return authors.map((author) => ({
    slug: author.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) return { title: 'Author Not Found | CashMela' };

  const url = `https://cashmela.com/authors/${slug}`;
  const imageUrl = `https://cashmela.com${author.image}`;

  return {
    title: `${author.name} — ${author.role} | CashMela`,
    description: `${author.bio.slice(0, 155)}... Read articles and guides by ${author.name} at CashMela.com.`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${author.name} — ${author.role} | CashMela`,
      description: author.bio,
      url: url,
      siteName: 'CashMela',
      type: 'profile',
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 800,
          alt: author.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${author.name} — ${author.role} | CashMela`,
      description: author.bio,
      images: [imageUrl],
    },
  };
}

export default async function AuthorProfilePage({ params }) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    notFound();
  }

  const articles = getArticlesByAuthor(slug);
  const authorUrl = `https://cashmela.com/authors/${slug}`;
  const imageUrl = `https://cashmela.com${author.image}`;

  // JSON-LD Person Schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": author.name,
    "jobTitle": author.role,
    "worksFor": {
      "@type": "Organization",
      "name": "CashMela",
      "url": "https://cashmela.com"
    },
    "image": imageUrl,
    "description": author.bio,
    "url": authorUrl,
    "sameAs": [
      author.socials.linkedin,
      author.socials.twitter,
      author.socials.instagram,
      author.socials.github
    ].filter(Boolean)
  };

  return (
    <>
      <Script
        id="author-person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <Navbar />

      <main className="w-full bg-[#fbfaf5] text-slate-900 min-h-screen pt-4 sm:pt-6 lg:pt-8 pb-16 sm:pb-24 selection:bg-indigo-600 selection:text-white">
        
        {/* Main Outer Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Breadcrumbs & Directory Link */}
          <div className="mb-6 sm:mb-8 pt-2 sm:pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
            <nav aria-label="Breadcrumb" className="text-xs sm:text-sm text-slate-500 flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-indigo-600">Home</Link>
              <span>/</span>
              <Link href="/authors" className="hover:text-indigo-600">Authors</Link>
              <span>/</span>
              <span className="text-slate-800 font-bold">{author.name}</span>
            </nav>
            <Link
              href="/authors"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-indigo-600 hover:text-indigo-800 transition-colors shrink-0"
            >
              <FaArrowLeft className="w-3.5 h-3.5" /> Team Directory
            </Link>
          </div>

          {/* Hero Profile Split Header */}
          <section className="bg-white rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-8 lg:p-12 border border-slate-200/80 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06)] mb-8 sm:mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
              
              {/* Left Column - Large Portrait Card */}
              <div className="lg:col-span-5 relative max-w-md mx-auto lg:max-w-none w-full">
                <div className="relative aspect-[4/4.8] w-full rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden border-2 border-slate-100 shadow-xl bg-slate-100">
                  <Image
                    src={author.image}
                    alt={author.name}
                    fill
                    priority
                    unoptimized
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>

              {/* Right Column - Details & Socials */}
              <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
                <div className="space-y-2 sm:space-y-3">
                  <span className="inline-block px-3.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100 text-xs font-bold uppercase tracking-wider">
                    {author.company} Leader
                  </span>
                  
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                    {author.name}
                  </h1>

                  <p className="text-indigo-600 text-base sm:text-xl lg:text-2xl font-bold">
                    {author.role}
                  </p>
                </div>

                <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
                  {author.bio}
                </p>

                {/* Social Channels */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-2">
                  {author.socials.linkedin && (
                    <a
                      href={author.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-md"
                    >
                      <FaLinkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> LinkedIn
                    </a>
                  )}
                  {author.socials.twitter && (
                    <a
                      href={author.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-md"
                    >
                      <FaTwitter className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Twitter / X
                    </a>
                  )}
                  {author.socials.instagram && (
                    <a
                      href={author.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-pink-600 hover:bg-pink-700 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-md"
                    >
                      <FaInstagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Instagram
                    </a>
                  )}
                  {author.socials.github && (
                    <a
                      href={author.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-md"
                    >
                      <FaGithub className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> GitHub
                    </a>
                  )}
                  {author.socials.email && (
                    <a
                      href={author.socials.email}
                      className="px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-md"
                    >
                      <FaEnvelope className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Email
                    </a>
                  )}
                </div>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-slate-100">
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/60 text-center">
                    <div className="text-2xl sm:text-3xl font-black text-indigo-600">{author.stats.experience}</div>
                    <div className="text-slate-500 text-xs font-semibold mt-1">Domain Experience</div>
                  </div>
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/60 text-center">
                    <div className="text-2xl sm:text-3xl font-black text-blue-600">{author.stats.borrowersHelped}</div>
                    <div className="text-slate-500 text-xs font-semibold mt-1">Borrowers Guided</div>
                  </div>
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/60 text-center">
                    <div className="text-2xl sm:text-3xl font-black text-emerald-600">{articles.length}</div>
                    <div className="text-slate-500 text-xs font-semibold mt-1">Authored Guides</div>
                  </div>
                </div>

              </div>

            </div>
          </section>

          {/* Body Section Grid */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Main Column (8 Cols) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Leadership Vision Quote Card */}
              {author.quote && (
                <div className="bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white rounded-[2.5rem] p-8 sm:p-10 shadow-xl relative overflow-hidden border border-slate-800">
                  <FaQuoteLeft className="w-12 h-12 text-indigo-500/20 absolute top-6 left-6 pointer-events-none" />
                  <p className="text-lg sm:text-2xl font-bold italic relative z-10 leading-relaxed text-indigo-100">
                    "{author.quote}"
                  </p>
                  <div className="mt-6 text-xs sm:text-sm font-extrabold text-indigo-400 uppercase tracking-widest relative z-10">
                    — {author.name}, {author.role}
                  </div>
                </div>
              )}

              {/* Authored Guides Section */}
              <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                    <FaBookOpen className="text-indigo-600" /> Authored Articles & Research Guides
                  </h2>
                  <span className="text-xs font-extrabold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
                    {articles.length} Guides
                  </span>
                </div>

                <div className="space-y-4">
                  {articles.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blogs/${post.slug}`}
                      className="block p-5 sm:p-6 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-indigo-50/50 hover:border-indigo-200 transition-all group shadow-sm"
                    >
                      <div className="flex items-center justify-between text-xs text-indigo-600 font-extrabold mb-2 uppercase tracking-wider">
                        <span>{post.category || "FINANCE"} • {post.date}</span>
                        <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1">Read Guide <FaArrowRight className="w-3 h-3"/></span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-indigo-700 transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                        {post.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar Column (4 Cols) */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Expertise Tag Box */}
              <div className="bg-white rounded-[2.5rem] p-6 sm:p-7 shadow-sm border border-slate-200/80 space-y-4">
                <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                  <FaBriefcase className="text-indigo-600" /> Domain Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {author.expertise.map((item, idx) => (
                    <span
                      key={idx}
                      className="bg-indigo-50 text-indigo-700 text-xs font-bold px-3 py-1.5 rounded-xl border border-indigo-100/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Loan Application CTA Card */}
              <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 shadow-sm border border-slate-200/80 text-center space-y-4">
                <h4 className="text-xl font-extrabold text-slate-900">Ready to consolidate your debts?</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Compare personalized personal loan and debt consolidation offers from 40+ RBI-regulated lenders.
                </p>
                <Link
                  href="/apply"
                  className="block w-full py-4 bg-indigo-600 text-white font-extrabold rounded-2xl text-xs sm:text-sm shadow-lg hover:bg-indigo-700 transition-all"
                >
                  Check Your Loan Offers
                </Link>
              </div>

            </div>

          </section>

        </div>

      </main>

      <Footer />
    </>
  );
}
