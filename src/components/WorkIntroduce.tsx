import { FC } from 'react';
import { WorkImage } from '@/types/portfolio';
import { Box, VStack, Heading, Text } from '@chakra-ui/react';

type Props = {
  contentWork: WorkImage;
};

const WorkIntroduce: FC<Props> = ({ contentWork }) => {
  return (
    <VStack align="stretch" spacing={4}>
      <Heading as="h4" fontSize="2xl">
        Description
      </Heading>
      <Text>{contentWork.description}</Text>
    </VStack>
  );
};

export default WorkIntroduce;
