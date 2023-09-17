import { NextPage } from 'next';
import MetaHead from '@/components/MetaHead';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Box, Container, Text, Link, useBreakpointValue } from '@chakra-ui/react';

const Error404: NextPage = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <MetaHead title="Contact | A.M.R Portfolio" />
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Header isMobile={isMobile} />
        <Container as="main" maxW="container.lg">
          <Text fontSize="2xl" my={5}>
            404 - 指定したページが見つかりませんでした
          </Text>
          <Link href="/">ホームへ戻る</Link>
        </Container>
        <Footer />
      </Box>
    </>
  );
};

export default Error404;
