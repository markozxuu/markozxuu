const Footer = () => {
  return (
    <footer className="px-2">
      <span className="capitalize text-sm font-medium">©Markoz peña</span>
      <a href="/atom.xml" className="underline text-sm font-medium">
        RSS
      </a>
      <style jsx>{`
        @media (min-width: 500px) {
          footer {
            max-width: 42rem;
            margin: auto;
            padding: 20px;
            display: flex;
          }
        }
        footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
