import Link from 'next/link';
import cx from 'clsx';

import s from './blog_preview.module.css';

interface Props {
  slug: string;
  title: string;
  description: string;
}

const BlogPreview = ({ slug, title, description }: Props) => {
  return (
    <>
      <Link href={`/blog/${slug}`}>
        <a className="block">
          <h2 className={cx(s.title, 'text-black dark:text-white')}>{title}</h2>
          <p
            className={cx(s.description, 'text-[#212121] dark:text-[#eaeaea]')}
          >
            {description}
          </p>
        </a>
      </Link>
    </>
  );
};

export default BlogPreview;
