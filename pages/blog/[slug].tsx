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

const Post = ({ notionData, author, title, preview, published }: Props) => {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      {preview && (
        <div>
          <span>Preview mode enable</span>
          <Link href="/api/clear-preview">
            <button>Exit preview</button>
          </Link>
        </div>
      )}
      {!published && <span style={{ color: 'red' }}>Draft</span>}
      <Author {...author} />
      <NotionRenderer blockMap={notionData} />
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
