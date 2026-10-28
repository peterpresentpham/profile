import type { MetadataRoute } from 'next';
import { siteMetadata } from 'src/configs/siteMetadata';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteMetadata.url, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
  ];
}
