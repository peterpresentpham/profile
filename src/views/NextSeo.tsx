/* eslint-disable @next/next/no-head-element */
/* eslint-disable quotes */
import Script from 'next/script';
import IconImg from 'public/star.svg';
import ThumbImg from 'public/thumbnail.webp';

const Description =
  "I am a full-stack developer with over three years of experience in building, optimizing, and deploying web applications. I specialize in front-end technologies such as HTML, CSS, JavaScript, and TypeScript, and have hands-on experience with frameworks like React.js, Next.js, and Vue.js. On the backend, I work with Node.js and Python to create robust and scalable solutions. I'm seeking a dynamic and collaborative environment where I can continuously expand my skill set, contribute effectively to team goals, and help drive innovation across projects.";

interface Props {
  title?: string;
  url?: string;
  description?: string;
  preview?: string;
  timestamp?: string;
  keywords?: string;
}

export default function NextSeo(params: Props) {
  const {
    title = 'Peter - Fullstack Developer',
    url = 'https://peter-present.xyz/',
    description = Description,
    preview = ThumbImg.src,
    timestamp,
    keywords,
  } = params;

  return (
    <head>
      <title>{title}</title>
      <meta property="og:type" content="website" />
      <link rel="icon" href={IconImg.src} />
      {url && <meta property="og:url" content={url} />}
      <meta name="description" content={description} key="description" />
      <meta property="og:title" content={title} key="title" />
      <meta property="og:description" content={description} key="ogdescription" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="My Personal Profile" />
      <meta name="application-name" content="My Personal Profile" />
      {preview && <meta property="og:image" content={preview} key="ogimage" />}
      {preview && <meta name="twitter:image" content={preview} key="twitterimage" />}
      {preview && <meta name="twitter:image:alt" content="cover image" key="twitteralt" />}
      <meta name="twitter:site" content="https://x.com/PhamHon08928762" key="twittersite" />
      <meta
        name="twitter:card"
        content={preview ? 'summary_large_image' : 'summary'}
        key="twittercard"
      />
      <meta name="twitter:title" content={title} key="twittertitle" />
      <meta name="twitter:description" content={description} key="twitterdescription" />
      {timestamp && <meta name="revised" content={timestamp} key="timestamp" />}
      <meta name="keywords" key="keywords" content={keywords} />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-W6VHX4S7');
  `,
        }}
      />
    </head>
  );
}
