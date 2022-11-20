export default function (props: { header: string }) {
  return (
    <>
      <link rel="stylesheet" href="/styles/headerNav.css" />
      <header>
        <h1>{props.header ? <>{props.header}</> : null}</h1>
      </header>
      <nav>
        <a href="/">Tentang</a>
        <a href="/contact">Kontak</a>
      </nav>
    </>
  )
}