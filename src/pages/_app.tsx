import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/libs/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      {/* ラップされたアプリケーションのコンポーネントを表示する */}
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
