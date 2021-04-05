const Footer = () => {
  return (
    <footer className="px-2">
      <hr className="w-full border-t border-accent-3 dark:border-accent-2 mb-8" />
      <div className="flex justify-between">
        <span className="capitalize text-sm font-medium">©Markoz peña</span>
        <a href="/atom.xml" className="underline text-sm font-medium block">
          RSS
        </a>
      </div>
      <style jsx>{`
        @media (min-width: 500px) {
          footer {
            max-width: 42rem;
            margin: auto;
            padding: 20px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
