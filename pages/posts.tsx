import { useEffect, useState } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { NextPageContext } from 'next'
import { MainLayout } from '../layouts/MainLayout'
import MyPost from '../interfaces/MyPost'

interface PostsProps {
  posts: MyPost[]
}

const DB_URL = process.env.DB_URL

export default function Posts({ posts: serverPosts }: PostsProps) {
  const linkClickHandler = () => {
    Router.push('/')
  }

  const [posts, setPosts] = useState(serverPosts)

  useEffect(() => {
    async function load() {
      const response = await fetch(`${DB_URL}/posts`)
      const json = await response.json()
      setPosts(json)
    }

    if (!serverPosts) load()
  }, [])

  if (!posts)
    return (
      <MainLayout>
        <p>Loading ...</p>
      </MainLayout>
    )

  return (
    <>
      <MainLayout title="Posts">
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href="/post/[id]" as={`/post/${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="buttons-wrapper">
          <button onClick={linkClickHandler} className="btn btn-link">
            Go back to home page
          </button>
          <button
            onClick={() => Router.push('/about')}
            className="btn btn-link"
          >
            Go to about
          </button>
        </div>
      </MainLayout>
          <style jsx>{`
            .btn-link + .btn-link {
              margin-left: 20px;
            }
            ul {
              padding: 0;
              list-style: none;
            }
            a {
              color: darkblue;
              text-decoration: none;
            }
          `}</style>
    </>
  )
}

Posts.getInitialProps = async ({ req }: NextPageContext) => {
  if (!req) {
    return { posts: null }
  }

  const response = await fetch(`${DB_URL}/posts`)
  const posts: MyPost[] = await response.json()

  return {
    posts,
  }
}
