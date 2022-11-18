import Head from "next/head";

import HeaderNav from "./components/headerNav";

export default function () {
  return (
    <>
      <Head><title>Haikal Rowi &ndash; Kontak</title></Head>
      <HeaderNav name="Kontak" />
      <table>
        <tbody>
          <tr>
            <td>Email</td>
            <td>:</td>
            <td><a href="mailto:haikalbintang27@gmail.com">haikalbintang27@gmail.com</a></td>
          </tr>
          <tr>
            <td>WhatsApp</td>
            <td>:</td>
            <td><a href="https://wa.me/6282257799522">wa.me/6282257799522</a></td>
          </tr>
        </tbody>
      </table>
    </>
  )
}