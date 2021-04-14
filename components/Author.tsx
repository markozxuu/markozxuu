// Components
import Date from '@components/Date';
import ViewCounter from '@components/ViewConter';

// Icons
import Divider from '@components/icons/Divider';

type AuthorData = {
  firstName: string;
  fullName: string;
  id: string;
  lastLame: string;
  profilePhoto: string;
};

interface Props {
  date: string;
  authorData: AuthorData;
  slugPage: string;
  title: string;
}

const Author = ({ date, authorData, slugPage, title }: Props) => {
  const { firstName, profilePhoto } = authorData;
  return (
    <>
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
        {title}
      </h1>
      <div className="flex items-center mb-3 justify-between">
        <div className="flex items-center">
          <a
            className="flex items-center"
            href="https://twitter.com/markozxuu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="rounded-full w-7 h-7 inline-flex mr-2"
              src={profilePhoto}
            />
            <span className="font-semibold">{firstName}</span>
          </a>
          <span className="dark:text-accent-3 text-accent-5 flex items-center mx-1">
            <Divider />
          </span>
          <span>
            <Date date={date} />
          </span>
        </div>
        <div
          className="flex items-center"
          style={{ fontVariantNumeric: 'tabular-nums' }}
        >
          <span
            style={{ fontSize: 14 }}
            className="font-medium dark:text-accent-3 text-accent-5"
          >
            <ViewCounter slug={slugPage} />
          </span>
        </div>
      </div>
    </>
  );
};

export default Author;
