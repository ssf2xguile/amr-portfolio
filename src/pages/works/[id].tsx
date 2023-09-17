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

export const getStaticPaths: GetStaticPaths = async () => {
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);
  const data = await client.getList({
    endpoint: 'work_image',
  });
  const totalCount = data.totalCount;
  const paths = range(1, Math.ceil(totalCount / WORK_PER_PAGE)).map(
    (number) => `/works/${number}`
  );

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.getList({
    endpoint: 'work_image',
    queries: {
      limit: WORK_PER_PAGE,
      orders: '-created_at',
      offset: (id - 1) * WORK_PER_PAGE,
    },
  });
  return {
    props: {
      contentsWork: data.contents,
      totalCount: data.totalCount,
      currentPageNumber: id,
    },
  };
};

type Props = {
  contentsWork: WorkImage[];
  totalCount: number;
  currentPageNumber?: number;
};

const WorksId: NextPage<Props> = ({
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
            currentPageNumber={currentPageNumber}
          />
        </Container>
        <Footer />
      </Box>
    </>
  );
};

export default WorksId;
