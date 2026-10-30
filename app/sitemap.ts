import type { MetadataRoute } from 'next';
import { siteMetadata } from 'src/configs/siteMetadata';

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteMetadata.origin, lastModified: new Date(siteMetadata.updated) }];
}
