import {
  Box,
  Flex,
  Text,
  Container,
  Heading,
  useColorMode,
  useColorModeValue,
  Button,
  IconButton,
  Collapse,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons';
import { FC, useState } from 'react';
import NextLink from 'next/link';

const Header: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Container maxW="container.lg">
        <Flex
          as="header"
          py="4"
          justifyContent="space-between"
          alignItems="center"
        >
          <NextLink href="/" passHref>
            <Heading
              as="h1"
              fontSize="2xl"
              cursor="pointer"
              color={useColorModeValue('gray.600', 'white')}
            >
              A.M.R
            </Heading>
          </NextLink>
          <Flex alignItems="center">
            <Flex
              display={{ base: 'none', md: 'flex' }}
              justifyContent="flex-end"
              alignItems="center"
            >
              <NextLink href="/about">
                <Heading fontSize="xl" cursor="pointer" mr="4">
                  about
                </Heading>
              </NextLink>
              <NextLink href="/work">
                <Heading fontSize="xl" cursor="pointer" mr="4">
                  work
                </Heading>
              </NextLink>
              <NextLink href="/contact">
                <Heading fontSize="xl" cursor="pointer" mr="4">
                  contact
                </Heading>
              </NextLink>
              <Button size="lg" onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Flex>
            <IconButton
              aria-label="Toggle Menu"
              icon={<HamburgerIcon />}
              display={{ base: 'block', md: 'none' }}
              onClick={handleToggle}
            />
          </Flex>
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <Flex
            direction="column"
            alignItems="flex-end"
            p="4"
            bgColor={useColorModeValue('gray.100', 'gray.900')}
          >
            <NextLink href="/about">
              <Text fontSize="xl" cursor="pointer" mb="2">
                about
              </Text>
            </NextLink>
            <NextLink href="/work">
              <Text fontSize="xl" cursor="pointer" mb="2">
                work
              </Text>
            </NextLink>
            <NextLink href="/contact">
              <Text fontSize="xl" cursor="pointer" mb="2">
                contact
              </Text>
            </NextLink>
            <Button size="lg" onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
        </Collapse>
      </Container>
    </Box>
  );
};

export default Header;

// 後で消す。ヘッダーの作り方(https://chakra-ui-git-fix-typescript-autocomplete.chakra-ui.vercel.app/docs/layout/flex)
