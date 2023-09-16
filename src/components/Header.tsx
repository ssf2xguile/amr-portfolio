import {
  Box,
  Flex,
  Text,
  Container,
  Heading,
  useColorMode,
  useColorModeValue,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons';
import { FC, useRef } from 'react';
import NextLink from 'next/link';

interface Props {
  isMobile: boolean | undefined;
}

const Header: FC<Props> = ({ isMobile }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

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
          <Flex>
            {isMobile ? (
              <>
                <Button ref={btnRef} onClick={onOpen}>
                  <HamburgerIcon />
                </Button>
                <Drawer
                  isOpen={isOpen}
                  placement="right"
                  onClose={onClose}
                  finalFocusRef={btnRef}
                >
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Menu</DrawerHeader>
                    <DrawerBody>
                      <NextLink href="/">
                        <Heading fontSize="xl" cursor="pointer" mb="4">
                          Home
                        </Heading>
                      </NextLink>
                      <NextLink href="/profile">
                        <Heading fontSize="xl" cursor="pointer" mb="4">
                          Profile
                        </Heading>
                      </NextLink>
                      <NextLink href="/works">
                        <Heading fontSize="xl" cursor="pointer" mb="4">
                          Works
                        </Heading>
                      </NextLink>
                      <NextLink href="/contact">
                        <Heading fontSize="xl" cursor="pointer" mb="4">
                          Contact
                        </Heading>
                      </NextLink>
                      <Button size="md" onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                      </Button>
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
              </>
            ) : (
              <>
                <Flex
                  display="flex"
                  justifyContent="flex-end"
                  alignItems="center"
                >
                  <NextLink href="/">
                    <Heading fontSize="xl" cursor="pointer" mr="4">
                      Home
                    </Heading>
                  </NextLink>
                  <NextLink href="/profile">
                    <Heading fontSize="xl" cursor="pointer" mr="4">
                    Profile
                    </Heading>
                  </NextLink>
                  <NextLink href="/works">
                    <Heading fontSize="xl" cursor="pointer" mr="4">
                      Works
                    </Heading>
                  </NextLink>
                  <NextLink href="/contact">
                    <Heading fontSize="xl" cursor="pointer" mr="4">
                      Contact
                    </Heading>
                  </NextLink>
                  <Button size="md" onClick={toggleColorMode}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                  </Button>
                </Flex>
              </>
            )}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;

// 後で消す。ヘッダーの作り方(https://chakra-ui-git-fix-typescript-autocomplete.chakra-ui.vercel.app/docs/layout/flex)
