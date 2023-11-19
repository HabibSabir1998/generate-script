import { ThemeProvider } from '@mui/material'
import customtheme from "../styles/theme";
import '../styles/globals.css'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any
  return <ThemeProvider theme={customtheme}><AnyComponent {...pageProps} /></ThemeProvider>
}
