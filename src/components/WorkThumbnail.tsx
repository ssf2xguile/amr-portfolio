import { FC } from 'react';
import Image from 'next/image';
import {
  Box,
  Grid,
  Card,
  CardBody,
  AspectRatio,
} from '@chakra-ui/react';
import { WorkImage } from '@/types/portfolio';
import NextLink from 'next/link';

type Props = {
  contents: WorkImage[];
};

interface WorkThumbnailProps {
  isMobile: boolean | undefined;
}

const WorkThumbnail: FC<Props & WorkThumbnailProps> = ({
  contents,
  isMobile,
}) => {
  return (
    <>
      <Grid
        templateColumns={isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)'}
        gap={isMobile ? '3' : '5'}
      >
        {contents.map((content) => (
          <Box key={content.id}>
            <NextLink href={`/work/${content.id}`} passHref>
              <Card mb={6} cursor="pointer">
                <CardBody padding={3}>
                  <AspectRatio ratio={1}>
                    <Image
                      src={content.workImage.url}
                      alt="Image"
                      layout='fill'
                      objectFit="cover"
                      loading='lazy'
                      quality={10}
                    />
                  </AspectRatio>
                </CardBody>
              </Card>
            </NextLink>
          </Box>
        ))}
      </Grid>
    </>
  );
};

export default WorkThumbnail;
