import { Description } from 'src/configs/siteMetadata';

export interface Props {
  title?: string;
  description?: string;
}

export default function AppNextSeo(props: Props) {
  const { title = 'Peter - Software Developer', description = Description } = props;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} key="description" />
      <meta property="og:title" content={title} key="title" />
      <meta property="og:description" content={description} key="ogdescription" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="My Next App" />
      <meta name="application-name" content="My Next App" />
    </>
  );
}
