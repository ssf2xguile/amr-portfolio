import { NextPage } from 'next';
import MetaHead from '@/components/MetaHead';
import Header from '@/components/Header';
import { WorkImage } from '@/types/portfolio';
import WorkSkills from '@/components/WorkSkills';
import WorkIntroduce from '@/components/WorkIntroduce';
import Footer from '@/components/Footer';
import type { GetStaticPaths, GetStaticProps } from 'next';
import {
  Box,
  VStack,
  Image,
  Container,
  Heading,
  Link,
  useBreakpointValue,
} from '@chakra-ui/react';

import { client } from '@/libs/client';

type Props = {
  contentWork: WorkImage;
};

const Work: NextPage<Props> = ({ contentWork }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <MetaHead
        title={`${contentWork.title} | A.M.R Portfolio`}
        description={contentWork.description}
      />
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Header isMobile={isMobile} />
        <Container as="main" maxW="container.lg">
          <Heading as="h3" fontSize="2xl" my={5}>
            {contentWork.title}
          </Heading>
          <Link href={contentWork.workImage.url} isExternal>
            <Image
              src={contentWork.workImage.url}
              alt="my work"
              width="100"
              mb={5}
              loading='lazy'
            />
          </Link>
          <VStack align="stretch" spacing={4} mb={4}>
            <WorkSkills contentWork={contentWork} isMobile={isMobile} />
            <WorkIntroduce contentWork={contentWork} />
          </VStack>
        </Container>
        <Footer />
      </Box>
    </>
  );
};

export default Work;

export const getStaticPaths: GetStaticPaths = async () => {
  // limitがデフォルトで10なので、記事数が10以上になると古い記事が生成されない
  // そのため、一旦totalCountを取得して、limitに指定してリクエストを投げる。
  const data = await client.getList<WorkImage>({
    endpoint: 'work_image',
    queries: { fields: 'id' },
  });
  const totalCount = data.totalCount;
  const allData = await client.getList<WorkImage>({
    endpoint: 'work_image',
    queries: { limit: totalCount },
  });
  const paths = allData.contents.map((content) => `/work/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async ({
  params,
}) => {
  if (!params) throw new Error('Error Slug Not Found');
  const slug = params.slug;
  const data = await client.getListDetail<WorkImage>({
    endpoint: 'work_image',
    contentId: slug,
  });
  return {
    props: {
      contentWork: data,
    },
  };
};
