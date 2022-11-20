import Link from "next/link";

export default function (props: { header: string }) {
  return (
    <>
      <link rel="stylesheet" href="/styles/headerNav.css" />
      <header>
        <h1>{props.header ? <>{props.header}</> : <></>}</h1>
      </header>
      <nav>
        <Link href={'/'}>Tentang</Link>
        <Link href={'/contact'}>Kontak</Link>
        {/* <a href="https://medium.com/@haikalrowi" target="_blank">At Medium.com</a> */}
      </nav>
      <hr />
    </>
  )
}