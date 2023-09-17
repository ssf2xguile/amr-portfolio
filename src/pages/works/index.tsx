import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import MetaHead from '@/components/MetaHead';
import Header from '@/components/Header';
import { WorkImage } from '@/types/portfolio';
import Footer from '@/components/Footer';
import WorkThumbnail from '@/components/WorkThumbnail';
import { Box, Container, Heading, useBreakpointValue } from '@chakra-ui/react';
import { WORK_PER_PAGE } from '@/settings/siteSettings';
import Pagination from '@/components/Pagination';

import { client } from '@/libs/client';

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.getList({
    endpoint: 'work_image',
    queries: {
      limit: WORK_PER_PAGE,
      orders: '-created_at',
    },
  });
  return {
    props: {
      contentsWork: data.contents,
      totalCount: data.totalCount,
    },
  };
};

type Props = {
  contentsWork: WorkImage[];
  totalCount: number;
  currentPageNumber?: number;
};

const Works: NextPage<Props> = ({
  contentsWork,
  totalCount,
  currentPageNumber,
}) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <MetaHead title="Works | A.M.R Portfolio" />
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Header isMobile={isMobile} />
        <Container as="main" maxW="container.lg">
          <Heading as="h3" fontSize="2xl" my={5}>
            Works
          </Heading>
          <WorkThumbnail contents={contentsWork} isMobile={isMobile} />
          <Pagination
            maxPageNumber={Math.ceil(totalCount / WORK_PER_PAGE)}
            currentPageNumber={1}
          />
        </Container>
        <Footer />
      </Box>
    </>
  );
};

export default Works;
