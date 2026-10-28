import { siteMetadata } from 'src/configs/siteMetadata';
import Room from 'src/views/room/Room';
import RoomSeo from 'src/views/room/RoomSeo';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteMetadata.url}#website`,
      url: siteMetadata.url,
      name: siteMetadata.siteName,
      description: siteMetadata.description,
      inLanguage: 'en',
    },
    {
      '@type': 'Person',
      '@id': `${siteMetadata.url}#person`,
      name: 'Peter',
      url: siteMetadata.url,
      jobTitle: 'Software Developer',
      homeLocation: { '@type': 'Place', name: 'Hanoi, Vietnam' },
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Hanoi University of Science and Technology',
      },
      knowsAbout: ['Web development', 'Blockchain', 'ERC-4337', 'Zero-knowledge proofs'],
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
