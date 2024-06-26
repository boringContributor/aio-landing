import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components/layout'
import { Provider } from 'react-wrap-balancer'
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Provider>
        <Component {...pageProps} /> 
        <Analytics/>
      </Provider>
    </Layout>
  )
}
