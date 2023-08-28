import Head from 'next/head';
import { FC } from 'react';

type Meta = {
  title?: string;
  description?: string;
};

export const MetaHead: FC<Meta> = ({
  title = 'A.M.R Portfolio',
  description = 'A.M.Rのポートフォリオサイト',
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="A.M.R Portfolio" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/images/myportfolioOGP.jpg" />
    </Head>
  );
};
