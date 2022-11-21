import "../styles/globals.css";
import "../public/styles/headerNav.css";
import "../public/styles/index.css";
import "../public/styles/contact.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}