// Packages
import { useEffect } from 'react';
import swr from 'swr';

// Lib
import fetcher from '@lib/fetcher';

// Utils
import formatNumber from '@lib/utils/number-format';

interface Props {
  slug: string;
}

const ViewCounter = ({ slug }: Props) => {
  const { data } = swr(`/api/views/${slug}`, fetcher);
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
