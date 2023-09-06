/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-css-tags */
import '@/styles/globals.css'
function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />;
    </>
  )
}
export default App;