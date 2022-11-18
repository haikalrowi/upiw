import Head from "next/head";

import HeaderNav from "./components/headerNav";

export default function () {
  return (
    <div style={{ margin: 'auto 1rem' }}>
      <Head><title>Haikal Rowi &ndash; Kontak</title></Head>
      <HeaderNav name="Kontak" />
      <div>Contact</div>
    </div>
  )
}