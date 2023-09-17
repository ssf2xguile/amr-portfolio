import { FC } from 'react';
import { WorkImage } from '@/types/portfolio';
import {
  VStack,
  Heading,
  Text,
  Flex,
  Spacer,
  Divider,
  Link,
} from '@chakra-ui/react';
import { CalendarIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { SkillIcon } from '@/components/SkillIcon';
import { GithubIcon } from '@/components/GithubIcon';
import Moment from 'react-moment';

type Props = {
  contentWork: WorkImage;
  isMobile: boolean | undefined;
};

const WorkSkills: FC<Props> = ({ contentWork, isMobile }) => {
  return (
    <VStack align="stretch" spacing={4}>
      {/* ここにはalign='stretch'を入れないと、子要素の幅が親要素(VStack)の幅に合わない */}
      <Heading as="h4" fontSize="2xl">
        Information
      </Heading>
      {isMobile ? (
        <>
          <Flex alignItems="center" gridGap={2}>
            <SkillIcon w={6} h={6} />
            <Heading as="h5" fontSize="xl">
              Skills:{' '}
            </Heading>
            {contentWork.tag.map((tag) => (
              <Text key={tag.id}>{tag.name} </Text>
            ))}
          </Flex>
          <Divider />
          <Flex alignItems="center" gridGap={2}>
            <GithubIcon w={6} h={6} />
            <Heading as="h5" fontSize="xl">
              Github:{' '}
            </Heading>
            <Text>
              {typeof contentWork.github_url === 'undefined' ? (
                'None'
              ) : (
                <Link
                  href={contentWork.github_url}
                  rel="noopener noreferrer"
                  isExternal
                >
                  Link <ExternalLinkIcon mx="2px" />
                </Link>
              )}
            </Text>
          </Flex>
          <Divider />
          <Flex alignItems="center" gridGap={2}>
            <CalendarIcon w={6} h={6} />
            <Heading as="h5" fontSize="xl">
              Created At:{' '}
            </Heading>
            <Text>
              <Moment format="YYYY/MM/DD">{contentWork.created_at}</Moment>
            </Text>
          </Flex>
          <Divider />
        </>
      ) : (
        <>
          <Flex>
            <Flex alignItems="center" gridGap={2}>
              <SkillIcon w={6} h={6} />
              <Heading as="h5" fontSize="xl">
                Skills:{' '}
              </Heading>
              {contentWork.tag.map((tag) => (
                <Text key={tag.id}>{tag.name} </Text>
              ))}
            </Flex>
            <Spacer />
            <Flex alignItems="center" gridGap={2}>
              <GithubIcon w={6} h={6} />
              <Heading as="h5" fontSize="xl">
                Github:{' '}
              </Heading>
              <Text>
                {typeof contentWork.github_url === 'undefined' ? (
                  'None'
                ) : (
                  <Link
                    href={contentWork.github_url}
                    rel="noopener noreferrer"
                    isExternal
                  >
                    Link <ExternalLinkIcon mx="2px" />
                  </Link>
                )}
              </Text>
            </Flex>
            <Spacer />
            <Flex alignItems="center" gridGap={2}>
              <CalendarIcon w={6} h={6} />
              <Heading as="h5" fontSize="xl">
                Created At:{' '}
              </Heading>
              <Text>
                <Moment format="YYYY/MM/DD">{contentWork.created_at}</Moment>
              </Text>
            </Flex>
          </Flex>
          <Divider />
        </>
      )}
    </VStack>
  );
};

export default WorkSkills;
