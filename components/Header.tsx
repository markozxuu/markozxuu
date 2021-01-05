// Packages
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

// Icons
import Logo from '@components/icons/Logo';
import Moon from '@components/icons/Moon';
import Sun from '@components/icons/Sun';
import System from '@components/icons/System';

const Header = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return null;
  }
  console.log('The value theme is');
  console.log(theme);
  return (
    <header>
      <Link href="/">
        <a href="/">
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <a href="mailto:markdrew53@gmail.com">Email</a>
          </li>
          <li>
            <a href="https://twitter.com/markozxuu">Twitter</a>
          </li>
          <li>
            <a href="https://github.com/markozxuu/markozxuu">Source</a>
          </li>
          <li>
            <button onClick={() => setTheme('dark')}>dark</button>
            <button onClick={() => setTheme('light')}>light</button>
            <button onClick={() => setTheme('system')}>Sytem</button>
          </li>
        </ul>
      </nav>

      <style jsx>{`
        nav {
          padding: 10px 0 10px 5px;
        }
        ul {
          display: flex;
          list-style: none;
          padding: 0;
        }
        a {
          text-decoration: none;
          display: inline-flex;
          transition: 150ms background-color ease;
          padding: 5px;
        }
        p {
          display: inline-flex;
          padding: 5px;
          cursor: pointer;
        }
        ul li a {
          padding: 5px 10px;
        }
        .active a {
          font-weight: bold;
          pointer-events: none;
        }
        @media (min-width: 500px) {
          header {
            max-width: 42rem;
            margin: auto;
            padding: 20px 0;
          }
          a:hover {
            border-radius: 0.25rem;
          }
          header {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          nav {
            padding: 0;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
