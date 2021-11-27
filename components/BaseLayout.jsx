import Head from 'next/head'

const BaseLayout = ({title = 'TOKUKAS', description = 'Toko Buku Bekas', children}) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <title>{title}</title>
      </Head>
      {children}
    </>
  )
}

export default BaseLayout;
