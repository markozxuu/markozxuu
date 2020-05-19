// Packages
import { GetStaticPaths, GetStaticProps } from 'next/types';
import { NotionRenderer, BlockMapType } from 'react-notion';
import Head from 'next/head';

// Utils
import {
  getSlugNotion,
  getContentNotion,
  getBlogIndex,
} from '../../lib/utils/notion';

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

interface PostProps {
  notionData: BlockMapType;
  author: Author;
  title: string;
}

const Post = (props: PostProps) => {
  const { notionData, author, title } = props;
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = await getBlogIndex(params?.slug);
  const author = { date: page[0].Date, authorData: page[0].Authors[0] };
  const title = page[0].Page;
  const content = await getContentNotion(page[0].id);
  console.log(page);
  return {
    props: {
      notionData: content,
      author,
      title,
    },
    // eslint-disable-next-line @typescript-eslint/camelcase
    unstable_revalidate: 1,
  };
};

export default Post;
