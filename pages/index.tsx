import Head from "next/head";
import Image from "next/image";

import HeaderNav from "../components/headerNav";
import cert1 from "../public/images/index/-certificates-abc2a3234903.png";
import profilePic from "../public/images/index/agfpa2fscm93aq.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Haikal Rowi &ndash; Portofolio</title>
      </Head>
      <HeaderNav header='Haikal Rowi' />
      <link rel="stylesheet" href="/styles/index.css" />
      <article>
        <div style={{ textAlign: 'center' }}>
          <Image
            src={profilePic}
            alt='Foto Haikal Rowi'
            loading="eager"
            style={{
              borderRadius: '50%',
              width: '100%',
              maxWidth: '12rem',
              height: 'auto',
            }}
          />
        </div>
        <p>Halo, saya seorang mahasiswa STIKOM PGRI Banyuwangi, jurusan S1 Teknik Informatika. Saya suka belajar tentang apa saja di sisi <i>server</i>.</p>
        <h2>Skill</h2>
        <div className="skill">
          <h3>Bahasa Pemrograman</h3>
          <div className="skill__type">
            <span className="skill__self"><img src="/images/index/python.svg" alt="python" /><span>Python</span></span>
            <span className="skill__self"><img src="/images/index/javascript.svg" alt="javascript" /><span>JavaScript</span></span>
          </div>
          <h3>Kantor</h3>
          <div className="skill__type">
            <span className="skill__self"><img src="/images/index/microsoft_word_2019.svg" alt="word" /><span>Word</span></span>
            <span className="skill__self"><img src="/images/index/microsoft_excel_2019.svg" alt="excel" /><span>Excel</span></span>
            <span className="skill__self"><img src="/images/index/microsoft_powerpoint_2019.svg" alt="powerpoint" /><span>PowerPoint</span></span>
          </div>
        </div>
        <h2>Sertifikat</h2>
        <div className="certificate">
          <a href="https://www.hackerrank.com/certificates/abc2a3234903" target={'_blank'}>
            <Image
              src={cert1}
              alt='hackerrank'
              loading="eager"
              style={{
                width: '100%',
                maxWidth: '12rem',
                height: 'auto',
              }}
            />
          </a>
        </div>
        <p style={{ marginTop: '2rem', color: 'gray' }}>Portofolio ini dibuat menggunakan <a href="https://nextjs.org/" target={'_blank'}>Next.js</a>, Framework <a href="https://reactjs.org/" target={'_blank'}>React</a> yang memberikan kemudahan dalam membangun aplikasi.</p>
      </article>
    </>
  )
}