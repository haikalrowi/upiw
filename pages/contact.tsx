import Head from "next/head";

import HeaderNav from "./components/headerNav";

export default function Contact() {
  return (
    <>
      <link rel="stylesheet" href="/styles/contact.css" />
      <Head>
        <title>Haikal Rowi &ndash; Kontak</title>
      </Head>
      <HeaderNav header="Kontak" />
      <article>
        <p>Saya akan mencoba membalas sesegera mungkin.</p>
        <table>
          <tbody>
            <tr>
              <td>Email</td>
              <td>:</td>
              <td><a href="mailto:haikalbintang27@gmail.com" target={'_blank'}>haikal••••@gmail.com</a></td>
            </tr>
            <tr>
              <td>WhatsApp</td>
              <td>:</td>
              <td><a href="https://wa.me/6282257799522" target={'_blank'}>wa.me/628••••522</a></td>
            </tr>
          </tbody>
        </table>
      </article>
    </>
  )
}