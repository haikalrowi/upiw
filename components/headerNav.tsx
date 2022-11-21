import Link from "next/link";

export default function (props: { header: string }) {
  return (
    <>
      <header>
        <h1>{props.header ? <>{props.header}</> : <></>}</h1>
      </header>
      <nav>
        <Link href={{ pathname: '/' }}>Tentang</Link>
        <Link href={{ pathname: '/contact' }}>Kontak</Link>
        {/* <a href="https://medium.com/@haikalrowi" target="_blank">At Medium.com</a> */}
      </nav>
      <hr />
    </>
  )
}