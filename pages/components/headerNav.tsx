export default function (props: { name: string }) {
  return (
    <>
      <link rel="stylesheet" href="/styles/headerNav.css" />
      <header>
        <h1>{props.name ? <>{props.name}</> : null}</h1>
      </header>
      <nav>
        <a href="/">Tentang</a>
        <a href="/contact">Kontak</a>
      </nav>
    </>
  )
}