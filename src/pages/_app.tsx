import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      {/* ラップされたアプリケーションのコンポーネントを表示する */}
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
