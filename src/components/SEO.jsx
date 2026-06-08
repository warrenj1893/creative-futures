import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, type = 'website' }) {
  const siteTitle = title ? `${title} | Creative Futures` : 'Creative Futures | Building Sustainable Ventures';
  const siteDesc = description || "Culture x Design's Creative Futures program empowers creative entrepreneurs to build sustainable, scalable businesses.";

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDesc} />
      
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDesc} />
      <meta property="og:type" content={type} />
      
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
    </Helmet>
  );
}
