import useSWR from 'swr';

import { LIMIT_LIKES } from './utils/const';
import fetcher from './fetcher';

async function updatePostLikes(slug: string, totalLikesFromUser: number) {
  await fetch(`/api/likes/${slug}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ slug, likes: totalLikesFromUser }),
  });
}

const usePostLike = (slug: string) => {
  const { data, error, mutate } = useSWR(`/api/likes/${slug}`, fetcher);

  const increment = async () => {
    const incrementLike = data?.currentLikes + 1;

    if (!data || data.currentLikes >= LIMIT_LIKES) return true;

    // Applying local mutation to data with the intention of give him
    // the feel to the user that changes feel faster without the need
    // to wait for the remote source of data.
    mutate(
      {
        currentLikes: incrementLike,
        totalLikesFromPost: data?.totalLikesFromPost + 1,
      },
      false
    );

    // Revalidate of data and getting the values correct database
    mutate(updatePostLikes(slug, incrementLike));
  };

  return {
    increment,
    totalLikesPost: data?.totalLikesFromPost ?? 0,
    likesUser: data?.currentLikes ?? 0,
    isLoading: !error && !data,
    isError: error,
  };
};

export { usePostLike };
