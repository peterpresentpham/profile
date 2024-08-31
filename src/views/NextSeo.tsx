/* eslint-disable @next/next/no-head-element */
import IconImg from 'public/star.svg';

interface Props {
  title?: string;
  url?: string;
  description?: string;
  preview?: string;
  timestamp?: string;
  keywords?: string;
}

export default function NextSeo(params: Props) {
  const { title = 'My Profile', url = '', description = '', preview, timestamp, keywords } = params;

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
      <meta property="og:site_name" content="Movementum Accelerator" />
      <meta name="application-name" content="Movementum Accelerator" />
      {preview && <meta property="og:image" content={preview} key="ogimage" />}
      {preview && <meta name="twitter:image" content={preview} key="twitterimage" />}
      {preview && <meta name="twitter:image:alt" content="cover image" key="twitteralt" />}
      <meta name="twitter:site" content="https://x.com/AptosMovementum" key="twittersite" />
      <meta
        name="twitter:card"
        content={preview ? 'summary_large_image' : 'summary'}
        key="twittercard"
      />
      <meta name="twitter:title" content={title} key="twittertitle" />
      <meta name="twitter:description" content={description} key="twitterdescription" />
      {timestamp && <meta name="revised" content={timestamp} key="timestamp" />}
      <meta name="keywords" key="keywords" content={keywords} />
    </head>
  );
}
