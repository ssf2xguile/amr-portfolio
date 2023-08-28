import { FC } from 'react';
import { WorkImage } from '@/types/portfolio';
import { Box, Heading, Text } from '@chakra-ui/react';

type Props = {
  contentWork: WorkImage;
};

const WorkIntroduce: FC<Props> = ({ contentWork }) => {
  return (
    <Box>
      <Heading as="h3" mb={4}>
        DESCRIPTTION
      </Heading>
      <Box>
        <Text>{contentWork.description}</Text>
      </Box>
    </Box>
  );
};

export default WorkIntroduce;
