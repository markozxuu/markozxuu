import { useState } from 'react';
import Link from 'next/link';
import cx from 'clsx';
import useSound from 'use-sound';

import Logo from '@components/icons/Logo';
import Twitter from '@components/icons/Twitter';
import GitHub from '@components/icons/GitHub';

import Select from '@components/Select';

import s from './header.module.css';

const Header = () => {
  const [isSound, setSound] = useState<boolean>(true);
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
    <nav className={cx(s.root, 'bg-white dark:bg-black-vercel')}>
      <div className={s.container}>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <div className="flex items-center space-x-5 mt-5 md:mt-0">
          <Link href="/blog">
            <a className="mr-2 font-medium">Blog</a>
          </Link>
          <Select isSound={isSound} />
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
          <a
            href="https://twitter.com/markozxuu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 dark:text-white"
          >
            <Twitter fill="currentColor" />
          </a>
          <a
            href="https://github.com/markozxuu/markozxuu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
