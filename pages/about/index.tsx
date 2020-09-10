import Link from 'next/link'
import { MainLayout } from '../../layouts/MainLayout'

interface AboutProps {
  title: string
}

const DB_URL = process.env.DB_URL

export default function About({title}: AboutProps) {
  return (
    <MainLayout title={'About'}>
      <h1>{title}</h1>
      <Link href="/about/author">
        <a className="btn-link">Author page</a>
      </Link>
    </MainLayout>
  )
}

About.getInitialProps = async () => {
  const response = await fetch(`${DB_URL}/about`)
  const data: AboutProps = await response.json()

  return {
    title: data.title
  }
}
