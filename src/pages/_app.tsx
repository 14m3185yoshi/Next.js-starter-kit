import { CacheProvider, EmotionCache } from '@emotion/react';

import { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';

import { store } from '@store/store';
import createEmotionCache from '~/utils/createEmotionCache';

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }: MyAppProps) {
  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>

        <Component {...pageProps} />
      </CacheProvider>
    </Provider>
  );
}
export default MyApp;
