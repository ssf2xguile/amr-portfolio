import { FC } from 'react';
import { WorkImage } from '@/types/portfolio';
import {
  Box,
  Stack,
  VStack,
  StackDivider,
  Heading,
  Text,
} from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';
import { SkillIcon } from '@/components/SkillIcon';
import { GithubIcon } from '@/components/GithubIcon';
import Moment from 'react-moment';

type Props = {
  contentWork: WorkImage;
};

const WorkSkills: FC<Props> = ({ contentWork }) => {
  return (
    <Box>
      <Heading as="h3" mb={4}>
        INFORMATION
      </Heading>
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
      >
        <Stack direction="row" alignItems="center">
          <SkillIcon boxSize={6} />
          <Heading as="h5" fontSize="xl">
            Skills:{' '}
          </Heading>
          <Text>
            {contentWork.tag.map((tag) => (
              <Text key={tag.id}>{tag.name} </Text>
            ))}
          </Text>
        </Stack>
        <Stack direction="row">
          <GithubIcon boxSize={6} />
          <Heading as="h5" fontSize="xl">
            Github:{' '}
          </Heading>
          <Text>
            {contentWork.tag.map((tag) => (
              <Text key={tag.id}>{tag.name} </Text>
            ))}
          </Text>
        </Stack>
        <Stack direction="row">
          <CalendarIcon boxSize={6} />
          <Heading as="h5" fontSize="xl">
            Created At:{' '}
          </Heading>
          <Text>
            <Moment format="YYYY/MM/DD">{contentWork.created_at}</Moment>
          </Text>
        </Stack>
      </VStack>
    </Box>
  );
};

export default WorkSkills;
