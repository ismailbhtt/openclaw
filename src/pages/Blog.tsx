import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowLeft, BookOpen, Clock, Share2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import { blogPosts, BlogPost } from '../data/blogPosts.ts';

const BlogCard = ({ post, index }: { post: BlogPost; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group relative"
  >
    <Link to={`/blog/${post.slug}`} className="block">
      <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-zinc-900 border border-white/5">
        <img
          src={post.image}
          alt={post.altText || post.title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute top-6 left-6">
          <span className="px-4 py-1.5 bg-brand-primary text-black text-[10px] font-mono font-bold uppercase tracking-widest rounded-full">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="mt-8 space-y-4">
        <div className="flex items-center gap-4 text-[10px] font-mono text-white/40 uppercase tracking-widest">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3 h-3" />
            {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span className="flex items-center gap-1.5">
            <Clock className="w-3 h-3" />
            5 min read
          </span>
        </div>
        
        <h3 className="text-2xl font-bold text-white group-hover:text-brand-primary transition-colors leading-tight">
          {post.title}
        </h3>
        
        <p className="text-white/50 text-sm leading-relaxed line-clamp-2 font-light">
          {post.excerpt}
        </p>
        
        <div className="pt-4 flex items-center gap-2 text-brand-primary text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
          Read Article <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  </motion.div>
);

const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const BlogList = () => (
  <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-primary selection:text-black">
    <Helmet>
      <title>Intelligence Journal | OpenClaw Install</title>
      <meta name="description" content="Deep dives into local AI deployment, data sovereignty, and the future of autonomous workflows." />
      <meta property="og:title" content="Intelligence Journal | OpenClaw Install" />
      <meta property="og:description" content="Deep dives into local AI deployment, data sovereignty, and the future of autonomous workflows." />
      <meta property="og:type" content="website" />
    </Helmet>
    {/* Background elements */}
    <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-primary/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
    </div>

    <div className="relative max-w-7xl mx-auto px-6 pt-40 pb-32">
      <div className="max-w-3xl mb-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-primary text-[10px] font-mono font-bold uppercase tracking-[0.2em] mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
          Intelligence Journal
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.85] mb-10"
        >
          Insights on <br />
          <span className="text-brand-primary italic font-serif">Private Intelligence.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-white/40 font-light leading-relaxed max-w-xl"
        >
          Deep dives into local AI deployment, data sovereignty, and the future of autonomous workflows.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
        {blogPosts.map((post, i) => (
          <BlogCard key={post.slug} post={post} index={i} />
        ))}
      </div>
    </div>
  </div>
);

const BlogPostDetail = ({ post }: { post: BlogPost }) => (
  <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-primary selection:text-black">
    <Helmet>
      <title>{post.title} | OpenClaw Install</title>
      <meta name="description" content={post.excerpt} />
      <meta property="og:title" content={post.title} />
      <meta property="og:description" content={post.excerpt} />
      <meta property="og:image" content={post.image} />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href={`https://www.openclawinstall.cc/blog/${post.slug}`} />
    </Helmet>
    {/* Progress bar */}
    <motion.div 
      className="fixed top-0 left-0 right-0 h-1 bg-brand-primary z-[60] origin-left"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.5 }}
    />

    <div className="max-w-4xl mx-auto px-6 pt-32 pb-32">
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-white/40 hover:text-brand-primary transition-colors mb-12 group text-[10px] font-mono uppercase tracking-widest"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to Journal
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-12"
      >
        <div className="space-y-6">
          <div className="flex items-center gap-4 text-[10px] font-mono text-brand-primary uppercase tracking-[0.2em]">
            <span className="px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-full">
              {post.category}
            </span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3 h-3" />
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-white">
            {post.title}
          </h1>

          <div className="flex items-center justify-between pt-8 border-t border-white/5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center border border-brand-primary/30">
                <User className="w-6 h-6 text-brand-primary" />
              </div>
              <div>
                <div className="text-sm font-bold">{post.author}</div>
                <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Core Contributor</div>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                <Share2 className="w-4 h-4 text-white/40" />
              </button>
            </div>
          </div>
        </div>

        <div className="relative aspect-[21/9] rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl">
          <img
            src={post.image}
            alt={post.altText || post.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
        </div>

        <div className="prose prose-invert prose-brand max-w-none">
          <div className="markdown-body text-white/70 leading-relaxed font-light text-lg">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw, rehypeSlug]}
              components={{
                blockquote: ({ node, ...props }) => {
                  const content = props.children?.toString() || '';
                  if (content.includes('Key Takeaways')) {
                    return (
                      <div className="my-12 p-8 rounded-3xl bg-brand-primary/5 border border-brand-primary/20 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-primary/20 transition-colors" />
                        <blockquote {...props} className="border-none p-0 m-0 text-white/90 italic font-serif text-xl leading-relaxed" />
                      </div>
                    );
                  }
                  return <blockquote {...props} className="border-l-4 border-brand-primary/30 pl-6 my-8 italic text-white/50" />;
                },
                h2: ({ node, ...props }) => (
                  <h2 {...props} className="text-3xl md:text-4xl font-bold text-white mt-16 mb-8 tracking-tight scroll-mt-24" />
                ),
                h3: ({ node, ...props }) => (
                  <h3 {...props} className="text-2xl font-bold text-white mt-12 mb-6 tracking-tight scroll-mt-24" />
                ),
                a: ({ node, ...props }) => {
                  const isInternal = props.href?.startsWith('/');
                  if (isInternal) {
                    return <Link to={props.href!} className="text-brand-primary hover:underline transition-all underline-offset-4" {...(props as any)}>{props.children}</Link>;
                  }
                  return <a {...props} className="text-brand-primary hover:underline transition-all underline-offset-4" target="_blank" rel="noopener noreferrer" />;
                },
                table: ({ node, ...props }) => (
                  <div className="overflow-x-auto my-12 rounded-2xl border border-white/5">
                    <table {...props} className="w-full text-left border-collapse" />
                  </div>
                ),
                th: ({ node, ...props }) => (
                  <th {...props} className="p-4 bg-white/5 text-brand-primary font-mono text-[10px] uppercase tracking-widest border-b border-white/10" />
                ),
                td: ({ node, ...props }) => (
                  <td {...props} className="p-4 border-b border-white/5 text-sm text-white/60" />
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

export default function Blog() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (slug && !post) {
    return (
      <div className="min-h-screen bg-brand-dark text-white flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold mb-4 tracking-tighter">Journal Entry Not Found</h1>
        <Link to="/blog" className="text-brand-primary hover:underline font-mono text-sm uppercase tracking-widest">Return to Journal</Link>
      </div>
    );
  }

  return slug && post ? <BlogPostDetail post={post} /> : <BlogList />;
}
