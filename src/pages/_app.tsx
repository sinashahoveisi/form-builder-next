import 'assets/styles/main.scss'
import type { AppProps } from 'next/app'
import MainConfig from "@/config/Main";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <MainConfig>
        <Component {...pageProps} />
      </MainConfig>
  )
}

export default MyApp
