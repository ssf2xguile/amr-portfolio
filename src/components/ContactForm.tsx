import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  Textarea,
} from '@chakra-ui/react';
import { FC } from 'react';

const ContactForm: FC = () => {
  return (
    <Flex align={'center'} justify={'center'}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
          お問い合わせフォーム
        </Heading>
        <FormControl id="name" isRequired>
          <FormLabel>名前</FormLabel>
          <Input
            placeholder="John Doe"
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>メールアドレス</FormLabel>
          <Input
            placeholder="your-email@example.com"
            _placeholder={{ color: 'gray.500' }}
            type="email"
          />
        </FormControl>
        <FormControl id="body" isRequired>
          <FormLabel>お問い合わせ内容</FormLabel>
          <Textarea
            placeholder="Here is a sample placeholder"
            _placeholder={{ color: 'gray.500' }}
          />
        </FormControl>
        <Stack spacing={6} direction={['column', 'row']}>
          <Button
            bg={'blue.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'blue.500',
            }}
          >
            送信
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default ContactForm;
