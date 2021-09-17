import { useEffect } from 'react';
import useSWR from 'swr';

import fetcher from '@lib/fetcher';

import formatNumber from '@lib/utils/number-format';

interface Props {
  slug: string;
}

const ViewCounter = ({ slug }: Props) => {
  const { data } = useSWR(`/api/views/${slug}`, fetcher);
  const views = data?.total;
  useEffect(() => {
    const registerView = () => {
      fetch(`/api/views/${slug}`, {
        method: 'POST',
      });
    };
    registerView();
  }, [slug]);

  return <p>{views ? formatNumber(views) : '–––'} views</p>;
};

export default ViewCounter;
