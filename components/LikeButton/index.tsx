import cx from 'clsx';

import { useSettings } from '@lib/useSettings';
import { usePostLike } from '@lib/usePostLikes';

import LoadingDots from '../LoadingDots';
import Heart from '../icons/Heart';
import HeartPlaceholder from '../icons/HeartPlaceholder';

import s from './likeButton.module.css';

interface LikeButtonProps {
  slug: string;
}

const LikeButton = ({ slug }: LikeButtonProps) => {
  const { isSound } = useSettings();
  const { likesUser, totalLikesPost, increment, isLoading } = usePostLike(slug);

  if (isLoading) {
    return (
      <div className={s.root}>
        <HeartPlaceholder />
        <span className="ml-3">
          <LoadingDots />
        </span>
      </div>
    );
  }

  return (
    <div className={s.root}>
      <h1>{isSound ? 'true' : 'false'}</h1>
      <button aria-label="Like button" onClick={increment}>
        <Heart likesUser={String(likesUser)} />
      </button>

      <span
        className={cx('ml-3 font-bold text-xl', {
          [s.likeCount]: likesUser > 0,
        })}
      >
        {totalLikesPost}
      </span>
    </div>
  );
};

export default LikeButton;
