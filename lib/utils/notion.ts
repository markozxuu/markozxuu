// Packages
import fetch from 'isomorphic-fetch';

export async function getSlugNotion() {
  const res = await fetch(
    `https://notion-api.splitbee.io/v1/table/${process.env.NOTION_TABLE}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
      },
    }
  );
  const data = await res.json();
  return data.map((item: any) => {
    return {
      params: {
        slug: item.Slug.toString(),
      },
    };
  });
}

export async function getNotion() {
  const res = await fetch(
    `https://notion-api.splitbee.io/v1/table/${process.env.NOTION_TABLE}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
      },
    }
  );
  const data = await res.json();
  return data;
}

export async function getBlogIndex(id: any) {
  const res = await fetch(
    `https://notion-api.splitbee.io/v1/table/${process.env.NOTION_TABLE}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
      },
    }
  );
  const data = await res.json();
  return data.filter((item: any) => {
    const { Slug } = item;
    const slug = Slug.toString();
    return slug === id;
  });
}

export async function getContentNotion(id: any) {
  const res = await fetch(`https://notion-api.splitbee.io/v1/page/${id}`, {
    headers: {
      Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
    },
  });
  const data = await res.json();
  return data;
}
