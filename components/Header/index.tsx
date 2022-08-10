import { useState, useEffect } from 'react';
import Link from 'next/link';
import cx from 'clsx';
import throttle from 'lodash.throttle';

import ToggleSound from '@components/ToggleSound';
import Logo from '@components/icons/Logo';
import Twitter from '@components/icons/Twitter';
import GitHub from '@components/icons/GitHub';

import Select from '@components/Select';

import s from './header.module.css';

const Header = () => {
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScrolled = throttle(() => {
      const offset = 0;
      const { scrollTop } = document.documentElement;
      const scrolled = scrollTop > offset;
      if (scrolled !== isScrolled) {
        setScrolled(scrolled);
      }
    }, 200);
    document.addEventListener('scroll', handleScrolled);
    return () => {
      document.removeEventListener('scroll', handleScrolled);
    };
  }, [isScrolled]);

  return (
    <nav
      className={cx(s.root, 'bg-white dark:bg-black-vercel', {
        [(s.scrollNavbar, 'shadow-magical dark:shadow-magical-dark')]:
          isScrolled,
      })}
    >
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
          <Select />
          <ToggleSound />
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
