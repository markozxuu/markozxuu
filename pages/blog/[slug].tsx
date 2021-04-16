// Packages
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next/types';
import { NotionRenderer, BlockMapType } from 'react-notion';

// Utils
import {
  getSlugNotion,
  getContentNotion,
  getBlogIndex,
} from '@lib/utils/notion';

import { gettingMetadata } from '@lib/utils/getting-metadata';

// Components
import Layout from '@components/Layout';
import Author from '@components/Author';
import Head from '@components/Head';

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
  slug: string;
}

const Post = ({
  notionData,
  author,
  title,
  preview,
  published,
  slug,
}: Props) => {
  const { isFallback } = useRouter();
  const metadata = gettingMetadata(title);
  if (isFallback) {
    return (
      <Layout>
        <div className="max-w-2xl px-4 mx-auto mt-7">
          <h1 className="font-bold text-4xl tracking-tight text-black dark:text-white">
            Loading...
          </h1>
        </div>
      </Layout>
    );
  }
  return (
    <Layout>
      <Head image={metadata?.og} description={metadata?.description}>
        <title>{title}</title>
      </Head>
      <div className="max-w-2xl px-4 mx-auto mt-7">
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
        <Author {...author} slugPage={slug} title={title} />
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
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params, preview }) => {
  const page = await getBlogIndex(params?.slug);
  const author = { date: page[0].Date, authorData: page[0].Authors[0] };
  const title = page[0].Page;
  const notionData = await getContentNotion(page[0].id);
  return {
    props: {
      notionData,
      author,
      slug: params?.slug,
      title,
      published: page[0]?.Published ?? false,
      preview: preview ?? false,
    },
    revalidate: 1,
  };
};

export default Post;
