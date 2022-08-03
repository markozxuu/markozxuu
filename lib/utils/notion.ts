import { NOTION_TABLE } from '@lib/utils/const';

import { NotionData } from '@typings/notion';

export async function getSlugNotion() {
  const res = await fetch(
    `https://notion-api.splitbee.io/v1/table/${NOTION_TABLE}`,
    {
      headers: {
        pragma: 'no-cache',
      },
    }
  );
  const data = await res.json();
  console.log('halo');
  console.log(data);
  return data.map((item: any) => {
    return {
      params: {
        slug: String(item.Slug),
      },
    };
  });
}

export async function getPostList() {
  const res = await fetch(
    `https://notion-api.splitbee.io/v1/table/${NOTION_TABLE}`,
    {
      headers: {
        pragma: 'no-cache',
      },
    }
  );
  const data = await res.json();
  return data;
}

export async function getBlogIndex(id: any) {
  const res = await fetch(
    `https://notion-api.splitbee.io/v1/table/${NOTION_TABLE}`,
    {
      headers: {
        pragma: 'no-cache',
      },
    }
  );
  const data = await res.json();
  return data.filter((item: any) => {
    const { Slug } = item;
    const slug = String(Slug);
    return slug === id;
  });
}

export async function getContentNotion(id: any) {
  const res = await fetch(`https://notion-api.splitbee.io/v1/page/${id}`, {
    headers: {
      pragma: 'no-cache',
    },
  });
  const data = await res.json();
  return data;
}

export function onlyShowPublishedPosts(preview = false, posts: NotionData[]) {
  const postsPublished = preview
    ? posts
    : posts.filter((post) => Boolean(post.Published));
  return postsPublished;
}
