import Link from 'next/link'
import { MainLayout } from '../layouts/MainLayout'
import classes from '../styles/error.module.scss'

export default function Error404() {
  return (
    <MainLayout>
      <h1 className={classes.error}>Error 404</h1>
      <p>Page not found. <Link href="/"><a className="btn-link">Go to home page</a></Link></p>
    </MainLayout>
  )
}