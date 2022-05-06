import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../components/';
import { getPosts } from '../services';
import { FeaturedPosts } from '../sections';


export default function Home({ posts }) {
  return (
    <div className="container mx-auto sm:px-5 md:px-10 mb-8">
      <Head>
        <title>Dev Blog</title>
        <meta name="description" content="Dev blog written with Next.js and GraphQL" />
        <meta property="og:url" content="https://dev-blog-delta.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Dev Blog by greenfructose"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="Dev blog written with Next.js and GraphQL, styled with TailwindCSS and hosted on Vercel"
        />
        <meta property="og:image" content="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post) => (
            <PostCard post={post.node} key={post.title} />
          ))}
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky realative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>

    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}