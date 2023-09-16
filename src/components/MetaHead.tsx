import Head from 'next/head';
import { FC } from 'react';

type Props = {
  title?: string;
  description?: string;
};

const MetaHead: FC<Props> = ({ title = 'A.M.R Portfolio', description = 'A.M.Rによるポートフォリオ'}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} key={title} />
      <meta property="og:title" content={title} key={title} />
      <meta property="og:description" content={description} key={title} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/images/ogpImage.jpg" />
    </Head>
  );
};

export default MetaHead;
