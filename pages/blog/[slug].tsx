// Packages
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next/types';
import { NotionRenderer, BlockMapType } from 'react-notion';

// Utils
import {
  getSlugNotion,
  getContentNotion,
  getBlogIndex,
} from '@lib/utils/notion';

// Components
import Layout from '@components/Layout';
import Author from '@components/Author';

type AuthorData = {
  firstName: string;
  fullName: string;
  id: string;
  lastLame: string;
  profilePhoto: string;
};

type Author = {
  date: string;
  authorData: AuthorData;
};

interface Props {
  notionData: BlockMapType;
  author: Author;
  title: string;
  preview: boolean;
  published: boolean;
}

const Post = (props: Props) => {
  const { notionData, author, title, preview, published } = props;
  console.log('Published', published);
  return (
    <Layout>
      <div className="max-w-2xl px-4 mx-auto mt-7">
        <Head>
          <title>{title}</title>
        </Head>
        {preview && (
          <div className="flex flex-col">
            <span className="mb-5 font-medium">Preview mode enable</span>
            <Link href="/api/clear-preview">
              <button className="rounded-md dark:bg-yellow-600 bg-yellow-500 text-white transition-colors duration-200 p-2 w-28 capitalize font-semibold mb-5">
                Exit preview
              </button>
            </Link>
          </div>
        )}
        <Author {...author} />
        {!published && (
          <span className="dark:text-red-dark text-red-light font-bold">
            Draft
          </span>
        )}
        <NotionRenderer blockMap={notionData} />
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getSlugNotion();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params, preview }) => {
  const page = await getBlogIndex(params?.slug);
  const author = { date: page[0].Date, authorData: page[0].Authors[0] };
  const title = page[0].Page;
  const content = await getContentNotion(page[0].id);
  console.log('Payload page', page);
  return {
    props: {
      notionData: content,
      author,
      title,
      published: page[0]?.Published ?? false,
      preview: preview ?? false,
    },
    revalidate: 1,
  };
};

export default Post;
