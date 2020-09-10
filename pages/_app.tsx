import NextNprogress from 'nextjs-progressbar'
import '../styles/global.scss'
import { AppPropsType } from 'next/dist/next-server/lib/utils'

export default function MyApp({ Component, pageProps }: AppPropsType) {
  return (
    <>
      <NextNprogress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Component {...pageProps} />
    </>
  )
}
