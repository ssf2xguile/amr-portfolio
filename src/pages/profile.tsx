import { NextPage } from 'next';
import MetaHead from '@/components/MetaHead';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Box,
  Container,
  Heading,
  Text,
  Divider,
  useBreakpointValue,
  Link,
  Card,
  CardHeader,
  CardBody,
  Image,
  VStack,
  Center,
  HStack, // Centerコンポーネントのインポートを追加
} from '@chakra-ui/react';
import Career from '@/components/Career';
import Education from '@/components/Education';
import Qualification from '@/components/Qualification';
import HavingSkills from '@/components/HavingSkills';
import { GithubIcon } from '@/components/GithubIcon';
import { YouTubeIcon } from '@/components/YouTubeIcon';
import { TwitterIcon } from '@/components/TwitterIcon';

const Profile: NextPage = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <MetaHead title="About | A.M.R Portfolio" />
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Header isMobile={isMobile} />
        <Container as="main" maxW="container.lg">
          <Heading as="h3" fontSize="2xl" my={5}>
            Profile
          </Heading>
          <Center>
            <Card maxW="md" direction="column" mb={4}>
              <CardHeader mx="auto">
                <Image
                  src="/images/ガイルicon.jpg"
                  alt="プロフィール画像"
                  borderRadius="full"
                  objectFit="cover"
                  boxSize="150px"
                />
              </CardHeader>
              <CardBody>
                <VStack>
                  <Heading as="h4" fontSize="xl">
                    A.M.R
                  </Heading>
                  <Text>情報系の大学生</Text>
                  <Text>
                    就職のためにポートフォリオ制作中。
                    受験期にハイスコアガールの影響でスト2にハマり、以来暇さえあれば遊んでいる。
                    持ちキャラは&quot;ガイル&quot;。
                  </Text>
                  <HStack spacing={12}>
                    <Link
                      href="https://www.youtube.com/channel/UCo2YRUQOsNFlQMHJnrR5wdQ"
                      isExternal
                    >
                      <YouTubeIcon w={8} h={8} />
                    </Link>
                    <Link href="https://github.com/ssf2xguile" isExternal>
                      <GithubIcon w={8} h={8} />
                    </Link>
                    <Link href="https://twitter.com/ssf2xguile" isExternal>
                      <TwitterIcon w={8} h={8} />
                    </Link>
                  </HStack>
                </VStack>
              </CardBody>
            </Card>
          </Center>
          <VStack spacing='8'>
            <Career />
            <Education />
            <Qualification />
            <HavingSkills />
          </VStack>
        </Container>
        <Footer />
      </Box>
    </>
  );
};

export default Profile;
