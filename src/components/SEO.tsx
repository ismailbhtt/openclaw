import React from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  schema?: any;
}

export const SEO: React.FC<SEOProps> = ({ title, description, canonical, schema }) => {
  React.useEffect(() => {
    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    if (schema) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
      return () => {
        document.head.removeChild(script);
      };
    }

    if (canonical) {
      let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
      if (link) {
        link.setAttribute('href', canonical);
      } else {
        link = document.createElement('link');
        link.rel = 'canonical';
        link.href = canonical;
        document.head.appendChild(link);
      }
    }
  }, [title, description, schema, canonical]);

  return null;
};
