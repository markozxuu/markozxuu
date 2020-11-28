// Packages
import { GetStaticProps } from 'next/types';
import Link from 'next/link';

// Components
import Layout from '@components/Layout';
import Date from '@components/Date';

// Utils
import { getPostList } from '../../lib/utils/notion';

type NotionData = {
  id: string;
  Published: boolean | undefined;
  Slug: string[];
  Date: string;
  Page: string;
  Authors: any;
};

interface Props {
  posts: NotionData[];
  preview: boolean;
}

const Blog = ({ posts, preview }: Props) => {
  if (!posts.length) {
    return (
      <div>
        <h1>There are no posts yet</h1>
      </div>
    );
  }
  return (
    <Layout>
      {preview && (
        <div>
          <span>Preview mode enable</span>
          <Link href="/api/clear-preview">
            <button>Exit preview</button>
          </Link>
        </div>
      )}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <span>
              <Date dateStirng={post.Date} isUpperCase />
            </span>
            <Link href="/blog/[slug]" as={`/blog/${post.Slug}`}>
              <a>
                {!post.Published && <span style={{ color: 'red' }}>Draft</span>}
                {post.Page}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        ul {
          list-style: none;
        }
        ul li {
          padding: 10px 15px;
        }
        ul li span {
          display: block;
          font-size: 13px;
        }
        ul li a {
          text-decoration: none;
        }
        span {
          font-weight: 600;
        }
        @media (min-width: 500px) {
          ul {
            padding: 20px 0;
            max-width: 42rem;
            margin: auto;
          }
          ul li {
            padding-left: 0;
          }
          ul li a {
            padding: 10px 15px;
            transition: 150ms background-color ease-in;
          }
          ul li a:hover {
            border-radius: 0.25rem;
          }
          ul li span {
            display: inline-block;
            width: 160px;
            padding-right: 10px;
            text-align: right;
            font-size: inherit;
          }
        }
      `}</style>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ preview }) => {
  const data: NotionData[] = await getPostList();
  const posts = preview ? data : data.filter((post) => Boolean(post.Published));
  return {
    props: {
      posts,
      preview: preview ?? false,
    },
    revalidate: 1,
  };
};

export default Blog;
