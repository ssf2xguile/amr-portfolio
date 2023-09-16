import { NextPage } from 'next';
import MetaHead from '@/components/MetaHead';
import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { Box, Container, Heading, useBreakpointValue } from '@chakra-ui/react';

const Contact: NextPage = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <MetaHead title="Contact | A.M.R Portfolio" />
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Header isMobile={isMobile} />
        <Container as="main" maxW="container.lg">
          <Heading as="h3" fontSize="2xl" my={5}>
            Contact
          </Heading>
          <ContactForm />
        </Container>
        <Footer />
      </Box>
    </>
  );
};

export default Contact;
