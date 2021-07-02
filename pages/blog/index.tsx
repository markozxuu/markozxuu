import { GetStaticProps } from 'next/types';
import Link from 'next/link';

import Layout from '@components/Layout';
import DisplayDate from '@components/Date';

import { getPostList } from '@lib/utils/notion';

type NotionData = {
  id: string;
  Published: boolean | undefined;
  Slug: string[];
  Date: string;
  Page: string;
  Authors: any;
};

interface Props {
  sortPosts: NotionData[];
  preview: boolean;
}

const Blog = ({ sortPosts, preview }: Props) => {
  if (!sortPosts.length) {
    return (
      <Layout>
        <div className="max-w-xl p-4 mx-auto">
          <h1 className="text-3xl font-semibold mb-12">
            There are no posts yet :(
          </h1>
        </div>
      </Layout>
    );
  }
  return (
    <Layout>
      {preview && (
        <div className="max-w-xl p-4 mx-auto">
          <div className="flex flex-col items-start">
            <span className="mb-5 font-medium">Preview mode enable</span>
            <Link href="/api/clear-preview" passHref>
              <button className="rounded-md dark:bg-yellow-600 bg-yellow-500 text-white transition-colors duration-200 p-2 w-28 capitalize font-semibold">
                Exit preview
              </button>
            </Link>
          </div>
        </div>
      )}
      <div className="max-w-3xl px-4 lg:px-0 pb-32 mx-auto">
        <h2 className="text-4xl font-extrabold mb-12">Posts</h2>
        <div className="border-b border-accent-3 dark:border-accent-2">
          {sortPosts.map((post) => (
            <div
              key={post.id}
              className="border-t border-accent-3 dark:border-accent-2"
            >
              <Link href="/blog/[slug]" as={`/blog/${post.Slug}`}>
                <a className="block py-3 sm:py-4">
                  <div className="flex flex-col md:flex-row md:items-center items-start">
                    <DisplayDate date={post.Date} />
                    <span className="font-semibold hover:underline">
                      {post.Page}
                    </span>
                    {!post.Published && (
                      <span className="dark:text-red-dark text-red-light md:ml-10 font-bold">
                        Draft
                      </span>
                    )}
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ preview }) => {
  const data: NotionData[] = await getPostList();
  const posts = preview ? data : data.filter((post) => Boolean(post.Published));
  const sortPosts = posts.sort(
    (a, b) => new Date(b.Date).getTime() - new Date(a.Date).getTime()
  );

  return {
    props: {
      sortPosts,
      preview: preview ?? false,
    },
    revalidate: 1,
  };
};

export default Blog;
