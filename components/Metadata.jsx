import Script from 'next/script'


export function generateSEOMetadata({ contentMetadata }) {
    return {
    ...(contentMetadata?.metadataBase && { metadataBase: new URL(contentMetadata?.url)}),
    robots: 'index, follow',
    themeColor: contentMetadata?.siteColor === 'dark' ? '#000000' : '#ffffff',
    canonical: contentMetadata?.url,
    title: contentMetadata?.title,
    description: contentMetadata?.description,
    keywords: contentMetadata?.keywords,
    openGraph: {
      locale: contentMetadata?.locale || 'it_IT',
      type: 'website',
      title: contentMetadata?.title,
      description: contentMetadata?.description,
      url: contentMetadata?.url,
      siteName: contentMetadata?.siteName,
      images: [
        {
          url: contentMetadata?.image,
          width: 1200,
          height: 630,
          alt: contentMetadata?.imageAlt,
          type: 'image/webp',
        },
      ],      
    },
    twitter: {
      card: 'summary_large_image',
      title: contentMetadata?.title,
      description: contentMetadata?.description,
      ...(contentMetadata?.twitterSite && { site: contentMetadata?.twitterSite }),
      ...(contentMetadata?.twitterCreator && { creator: contentMetadata?.twitterCreator }),
          images: [
        contentMetadata?.image,
      ],
    },
  };
}

export function generateStructuredData({ schema }) {
    const base = {
      "@context": "https://schema.org",
      "@type": schema.type,
    };
  
    // Add FAQPage fields
    if (schema.type === "FAQPage") {
      base.mainEntity = schema.mainEntity.map((item) => ({
        "@type": "Question",
        "name": item.name,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer,
        },
      }));
    }
  
    // Add Article-specific fields
    if (schema.type === "Article" || schema.type === "BlogPosting") {
      Object.assign(base, {
        "headline": schema.title,
        "description": schema.description,
        "image": schema.image,
        "author": {
          "@type": schema.authorType,
          "name": schema.authorName,
        },
        "publisher": {
          "@type": schema.publisherType,
          "name": schema.publisherName,
          "logo": {
            "@type": "ImageObject",
            "url": schema.logoUrl,
          },
        },
        "datePublished": schema.creationDate,
        "dateModified": schema.creationDate,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": schema.url,
        },
      });
    }
  
    // Add WebPage (basic) metadata if needed
    if (schema.type === "WebPage") {
      Object.assign(base, {
        "name": schema.title,
        "url": schema.url,
        "description": schema.description,
      });
    }
  
    return (
      <Script
        type="application/ld+json"
        id="structured-data" 
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(base),
        }}
      />
    );
  }
  

// example of main entity configuration
// mainEntity: [
//     {
//       name: "What is your pricing?",
//       answer: "Our pricing starts at $10/month..."
//     },
//     {
//       name: "How do I contact support?",
//       answer: "You can contact support via email at support@example.com"
//     }
//   ]