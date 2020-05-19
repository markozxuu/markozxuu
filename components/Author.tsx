// Components
import Date from './Date';

type AuthorData = {
  firstName: string;
  fullName: string;
  id: string;
  lastLame: string;
  profilePhoto: string;
};

interface AuthorProps {
  date: string;
  authorData: AuthorData;
}

const Author = (props: AuthorProps) => {
  const { date, authorData } = props;
  return (
    <span className="meta">
      <a
        className="author"
        href="https://twitter.com/markozxuu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={authorData.profilePhoto} />
        {authorData.firstName}
      </a>
      <p className="date">
        <span className="sep" />
        <Date dateStirng={date} isUpperCase={false} />
      </p>
      <style jsx>{`
        .meta {
          display: flex;
          font-weight: 500;
          align-items: center;
        }
        .meta .date.loading {
          opacity: 0;
          pointer-events: none;
        }
        .meta .date {
          display: flex;
          align-items: center;
        }
        .meta .date .full {
          display: none;
        }
        .meta .date .sep {
          background: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNLjUgMTUuNWw3LTE1IiBzdHJva2U9IiNDOEM4QzgiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIvPjwvc3ZnPg==);
          width: 8px;
          height: 16px;
          margin-right: 10px;
        }
        .meta .author {
          display: flex;
          align-items: center;
          padding-right: 10px;
          text-decoration: none;
        }
        .meta .author img {
          width: 28px;
          height: 28px;
          border-radius: 100%;
          margin-right: 5px;
        }
        a {
          font-weight: 600;
        }
        a:hover {
          background: none;
          color: var(--color-author);
        }
      `}</style>
    </span>
  );
};

export default Author;
