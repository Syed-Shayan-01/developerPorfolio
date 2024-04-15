/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-css-tags */
import '@/styles/globals.css'
import { NextUIProvider } from '@nextui-org/react';
function App({ Component, pageProps }) {
  return (
    <>
      <NextUIProvider>
        <Component {...pageProps} />;
      </NextUIProvider>
    </>
  )
}
export default App;