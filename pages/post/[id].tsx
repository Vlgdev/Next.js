import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { MainLayout } from '../../layouts/MainLayout'
import { NextPageContext } from 'next'
import MyPost from '../../interfaces/MyPost'

interface PostProps {
  post: MyPost
}

const DB_URL = process.env.DB_URL

export default function Post({ post: serverPost }: PostProps) {
  const [post, setPost] = useState(serverPost)
  const router = useRouter()

  useEffect(() => {
    async function load() {
      const response = await fetch(
        `${DB_URL}/posts/${router.query.id}`
      )
      const post = await response.json()

      setPost(post)
    }

    if (!serverPost) load()
  }, [])

  return (
    <MainLayout>
      {!post ? (
        <p>Loading, please wait</p>
      ) : (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </>
      )}
    </MainLayout>
  )
}

interface PostNextContext extends NextPageContext {
  query: {
    id: string
  }
}

Post.getInitialProps = async (ctx: PostNextContext) => {
  if (!ctx.req) {
    return { post: null }
  }

  const response = await fetch(`${DB_URL}/posts/${ctx.query.id}`)
  const post: MyPost = await response.json()

  return {
    post,
  }
}

// export async function getServerSideProps(ctx) {
//   const response = await fetch(`http://localhost:4200/posts/${ctx.query.id}`)
//   const json = await response.json()

//   return {
//     props: {
//       post: json
//     }
//   }
// }
