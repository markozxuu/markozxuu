// Packages
import Link from 'next/link';

// Icons
import Logo from '@components/icons/Logo';

// Components
import Select from '@components/Select';

const Header = () => {
  return (
    <header>
      <Link href="/">
        <a href="/">
          <Logo />
        </a>
      </Link>
      <nav>
        <ul className="space-x-4 flex items-center justify-center">
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <a
              className="bg-black-vercel rounded-md p-2 capitalize text-white dark:bg-white dark:text-black-vercel font-semibold"
              href="https://twitter.com/markozxuu"
            >
              follow me
            </a>
          </li>
          <li>
            <Select />
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
