import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { AuthProvider } from '@/lib/auth';
import customTheme from '@/styles/theme';

const App = ({ Component, pageProps }) => (
  <ChakraProvider resetCSS theme={customTheme}>
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  </ChakraProvider>
);

export default App;
