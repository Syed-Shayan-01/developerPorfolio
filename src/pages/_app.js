import '@/styles/globals.css'

import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  })
  return <Component {...pageProps} />;
}
export default App;