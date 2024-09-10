/* eslint-disable @next/next/no-head-element */
import IconImg from 'public/star.svg';
import ThumbImg from 'public/thumbnail.png';

const Description =
  'I am a full-stack developer with three years of experience in developing, implementing, and optimizing web applications. Proficient in front-end technologies including HTML, CSS, JavaScript, Typescript, and frameworks such as ReactJs, NextJs, and VueJs as well as backend technologies like Nodejs, Python. I want to find a dynamic environment to continuously improve my knowledge, enabling effective collaboration with team members and achieve project objectives, drive innovation.';

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
    </head>
  );
}
