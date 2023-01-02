"use client"
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useServerInsertedHTML } from "next/navigation"
import { NextUIProvider, CssBaseline } from "@nextui-org/react"
export default function App({ Component, pageProps }: AppProps) {
  useServerInsertedHTML(() => {
    return <>{CssBaseline.flush()}</>
  })
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
