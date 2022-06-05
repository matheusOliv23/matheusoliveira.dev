import { ThemeProvider } from 'styled-components';
import NextProgress from 'nextjs-progressbar';
import GlobalStyles from '../styles/global';
import '../styles/global.css';
import theme from '../styles/theme';
import { Toaster } from 'react-hot-toast';
import { AnimatePresence } from 'framer-motion/dist/framer-motion';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <NextProgress
          color={theme.primary}
          startPosition={0.3}
          stopDelayMs={200}
          height={5}
          showOnShallow
        />
        <Toaster position="bottom-right" />
        <Component {...pageProps} />
        <GlobalStyles />
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default MyApp;
