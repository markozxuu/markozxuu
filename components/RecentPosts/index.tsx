import BlogPreview from '@components/BlogPreview';

import posts from '@data/blog.json';

import s from './recent_posts.module.css';

const RecentPosts = () => {
  const sortPosts = posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className={s.root}>
      <span className={s.title}>recent posts</span>
      <h4 className="mt-2 text-gray-500 dark:text-[#eaeaea]">
        A collection of things that I&apos;m learning and thoughts.
      </h4>
      <div className="space-y-8 mt-6">
        {sortPosts.map((post, _index) => (
          <BlogPreview
            key={_index}
            title={post.title}
            description={post.description}
            slug={post.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
