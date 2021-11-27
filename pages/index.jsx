import BaseLayout from '../components/BaseLayout'
import Image from 'next/image'

export default function Home() {
  return (
    <BaseLayout title="TOKUKAS | Toko Buku Bekas">
      <h1>Hello</h1>
      <button className="btn btn-primary">Click Me</button>
      <Image src="/assets/brand.svg" alt="Logo" width={120} height={80} />
      <i className="fas fa-envelope"></i>
      <i className="material-icons">arrow_back</i>
    </BaseLayout>
  )
}
