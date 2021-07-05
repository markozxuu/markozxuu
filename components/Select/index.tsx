import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import useSound from 'use-sound';
import cx from 'clsx';

import Moon from '@components/icons/Moon';
import Soun from '@components/icons/Sun';
import System from '@components/icons/System';

import s from './select.module.css';

interface SelectProps {
  isSound: boolean;
}

const Select = ({ isSound }: SelectProps) => {
  const { theme, setTheme } = useTheme();
  const [play, { stop }] = useSound('/sounds/bleep.mp3', { volume: 0.25 });
  const [mounted, setMounted] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value: valueSelect } = event.target;
    setTheme(valueSelect);
    if (!isSound) {
      return stop();
    }
    play();
  };

  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return null;
  }

  return (
    <div
      className={cx(
        s.root,
        'dark:border-accent-2 hover:border-black-vercel dark:hover:border-accent-3'
      )}
    >
      <span className="inline-flex absolute -ml-2">
        {theme === 'light' ? <Soun /> : null}
        {theme === 'dark' ? <Moon /> : null}
        {theme === 'system' ? <System /> : null}
      </span>
      <select
        className={cx(s.select, 'dark:text-white')}
        onChange={handleChange}
        value={theme}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="system">System</option>
      </select>
    </div>
  );
};

export default Select;
