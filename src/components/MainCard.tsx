import { Card, CardBody, Image, Box, Text, useColorModeValue } from '@chakra-ui/react';
import { FC } from 'react';
import { MainImage } from '@/types/portfolio';

type Props = {
  contents: MainImage[];
};

const MainCard: FC<Props> = ({ contents }) => {
  return (
    <Card my={6}>
      <CardBody position="relative" p={3}>
        <Image
          src={contents[0].mainImage.url} // ここを修正
          alt="main image"
          borderRadius="lg"
          loading='lazy'
        />
        <Box position="absolute" bottom="20px" left="20px" color={useColorModeValue('white', 'black')} >
          <Text fontSize="xl">A.M.R portfolio</Text>
          <Text>created by Next.js 12 & Chakra UI</Text>
        </Box>
      </CardBody>
    </Card>
  );
};

export default MainCard;
