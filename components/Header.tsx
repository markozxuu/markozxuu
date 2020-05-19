// Packages
import Link from 'next/link';
import { useState, useEffect } from 'react';

// Components
import Logo from './icons/Logo';
import Moon from './icons/Moon';
import Sun from './icons/Sun';

// Hooks
import { useTheme } from '../hooks/useTheme';

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, memoizedTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
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
            <p onClick={memoizedTheme}>
              {mounted ? theme === 'light' ? <Moon /> : <Sun /> : null}
            </p>
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
