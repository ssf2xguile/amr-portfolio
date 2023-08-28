import { NextPage } from 'next';
import { MetaHead } from '@/components/MetaHead';
import Header from '@/components/Header';
import MainCard from '@/components/MainCard';
import WorkThumbnail from '@/components/WorkThumbnail';
import { Footer } from '@/components/Footer';
import { Box, Container, Heading, useBreakpointValue } from '@chakra-ui/react';
import { MainImage, WorkImage } from '@/types/portfolio';
import { LATEST_WORK_PER_PAGE } from '@/settings/siteSettings';

import { client } from '@/libs/client';

export const getStaticProps = async () => {
  const data1 = await client.getList({ endpoint: 'main_image' });
  const data2 = await client.getList({
    endpoint: 'work_image',
    queries: { limit: LATEST_WORK_PER_PAGE },
  });
  return {
    props: {
      contentsMain: data1.contents,
      contentsWork: data2.contents,
    },
  };
};

type Props = {
  contentsMain: MainImage[];
  contentsWork: WorkImage[];
};

const Home: NextPage<Props> = ({ contentsMain, contentsWork }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <MetaHead />
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Header isMobile={isMobile} />
        <Container as="main" maxW="container.lg">
          <Heading as="h3" fontSize="2xl" my={5}>
            Home
          </Heading>
          <MainCard contents={contentsMain} />
          <Heading as="h3" fontSize="2xl" my={5}>
            Latest Portfolio
          </Heading>
          <WorkThumbnail contents={contentsWork} isMobile={isMobile} />
        </Container>
        <Footer />
      </Box>
    </>
  );
};

export default Home;
