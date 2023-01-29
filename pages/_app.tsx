import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import "../styles/homepage.css"
import { PeerProvider } from './providers/Peer'
import { SocketProvider } from './providers/Socket'

export default function App({ Component, pageProps }: AppProps) {
  return <SocketProvider><Component {...pageProps} /></SocketProvider>
}
