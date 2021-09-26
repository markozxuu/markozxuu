import { useState } from 'react';
import { motion } from 'framer-motion';
import useSound from 'use-sound';
import cx from 'clsx';

import { LIMIT_LIKES } from '@lib/utils/const';
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
  const GLUG_SOUND = '/sounds/glug-a.mp3';

  const [playbackRate, setPlaybackRate] = useState(0.75);
  const [glugSound, { stop: glugOff }] = useSound(GLUG_SOUND, {
    playbackRate,
    volume: 0.5,
  });
  const { isSound } = useSettings();
  const { likesUser, totalLikesPost, increment, isLoading } = usePostLike(slug);

  const handleClick = () => {
    if (!isSound) {
      return glugOff();
    }

    if (likesUser >= LIMIT_LIKES) {
      return glugOff();
    }

    setPlaybackRate(playbackRate + 0.1);
    glugSound();
    increment();
  };

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
      <motion.div
        className="absolute w-full text-2xl text-center"
        animate={likesUser >= LIMIT_LIKES ? 'visible' : 'hidden'}
        variants={{
          hidden: { translateY: -80, opacity: 0 },
          visible: {
            translateY: [0, -50, -60],
            opacity: [0, 1, 0],
          },
        }}
        initial="hidden"
      >
        🎉
      </motion.div>
      <button aria-label="Like button" onClick={handleClick}>
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
