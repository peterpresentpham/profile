import { IMAGES } from 'src/configs/images';
import { siteMetadata } from 'src/configs/siteMetadata';
import Room from 'src/views/room/Room';
import RoomSeo from 'src/views/room/RoomSeo';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteMetadata.origin}#website`,
      url: siteMetadata.origin,
      name: siteMetadata.siteName,
      description: siteMetadata.description,
      inLanguage: 'en',
    },
    {
      '@type': 'Person',
      '@id': `${siteMetadata.origin}#person`,
      name: 'Peter Present',
      alternateName: 'Peter',
      url: siteMetadata.origin,
      image: new URL(IMAGES.apple, siteMetadata.url).toString(),
      jobTitle: 'Software Developer',
      knowsAbout: [
        'Web development',
        'TypeScript',
        'React',
        'Next.js',
        'Blockchain',
        'ERC-4337',
        'Zero-knowledge proofs',
        'Procedural generation',
      ],
      sameAs: Object.values(siteMetadata.links),
    },
  ],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <RoomSeo />
      <Room />
    </main>
  );
}
