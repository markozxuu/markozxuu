import { useContext } from 'react';
import useSound from 'use-sound';
import cx from 'clsx';

import { ContextSettings } from '@lib/SettingsContext';
import { useSettings } from '@lib/useSettings';

import s from './toggleSound.module.css';

const ToggleSound = () => {
  const { setSound } = useContext(ContextSettings);
  const { isSound } = useSettings();

  const [playOn] = useSound('/sounds/enable-sound.mp3', {
    volume: 0.25,
  });
  const [playOff] = useSound('/sounds/disable-sound.mp3', {
    volume: 0.25,
  });

  const handleClick = () => {
    if (isSound) {
      playOff();
    } else {
      playOn();
    }
    setSound(!isSound);
  };

  return (
    <button
      title={isSound ? 'Disable sounds' : 'Enable sounds'}
      aria-label={isSound ? 'Disable sounds' : 'Enable sounds'}
      className="focus:outline-none focus:ring-0 text-accent-4 hover:text-black-vercel dark:hover:text-accent-3 transition-colors duration-200"
      onClick={handleClick}
    >
      <svg
        className={cx(s.icon, { [s.open]: isSound })}
        viewBox="0 0 24 24"
        width="24"
        height="24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        shapeRendering="geometricPrecision"
      >
        <path d="M11 5L6 9H2v6h4l5 4V5z" />
        <path
          d="M15.54 8.46a5 5 0 010 7.07"
          className={cx(isSound ? s.soundsIsOn : s.sounds)}
        />
        <path
          d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"
          className={cx(isSound ? s.soundsIsOn : s.sounds)}
        />
      </svg>
    </button>
  );
};

export default ToggleSound;
