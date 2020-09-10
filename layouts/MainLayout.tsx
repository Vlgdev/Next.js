import Link from 'next/link'
import Head from 'next/head'

export function MainLayout({ children, title = 'App' }) {
  return (
    <>
      <Head>
        <title>{title} | Next Course</title>
        <meta charSet="utf-8" />
        <meta name="keywords" content="next.js, javascript, react" />
        <meta name="description" content="It is the next.js course" />
      </Head>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </nav>
      <main>{children}</main>
      <style jsx>{`
        nav {
          height: 60px;
          background: darkblue;
          padding: 0 1rem;
          display: flex;
          align-items: center;
          width: 100%;
        }
        a {
          display: inline-block;
          color: white;
          text-decoration: none;
          font-size: 20px;
        }
        a + a {
          margin-left: 30px;
        }
        main {
          padding: 10px 15px 0;
        }
      `}</style>
    </>
  )
}
