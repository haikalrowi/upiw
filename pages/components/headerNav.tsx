export default function (props: { name: string }) {
  return (
    <>
      <header>
        <h1>{props.name ? <>{props.name}</> : null}</h1>
      </header>
      <nav style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', marginLeft: 'auto' }}>
        <a href="/" style={{ marginLeft: 'auto' }}>Tentang</a>
        <a href="/contact">Kontak</a>
      </nav>
    </>
  )
}