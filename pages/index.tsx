import Head from "next/head";
import Image from "next/image";

import profilePicture from "../public/agfpa2fscm93aq.jpg";
import HeaderNav from "./components/headerNav";

export default function Home() {
  return (
    <div style={{ margin: '0px 1rem' }}>
      <Head><title>Haikal Rowi &ndash; Portofolio</title></Head>
      <HeaderNav name='Haikal Rowi' />
      <div style={{ textAlign: 'center' }}>
        <Image
          src={profilePicture}
          alt='Foto Haikal Rowi'
          loading="lazy"
          height={256}
          style={{ borderRadius: '50%' }}
        />
      </div>
      <article>
        <p>Halo, saya seorang mahasiswa STIKOM PGRI Banyuwangi, jurusan S1 Teknik Informatika. Saya suka bermain dengan server.</p>
        <p>Portofolio ini dibuat menggunakan <a href="https://nextjs.org/" target={'_blank'}>Next.js</a></p>
      </article>
    </div>
  )
}
