const Footer = () => {
  return (
    <footer className="mt-24 pb-36">
      <div className="max-w-4xl px-4 mx-auto">
        <div className="pb-8 mb-2 border-t-2 border-accent-3 dark:border-accent-2" />
        <div className="flex flex-col justify-between lg:flex-row">
          <p>Thanks for reading! :)</p>
          <div className="pt-2 space-x-6 font-medium lg:pt-0">
            <a
              href="https://twitter.com/markozxuu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://github.com/markozxuu"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/markozpena/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
            <a
              href="https://www.markozxuu.com/atom.xml"
              target="_blank"
              rel="noopener noreferrer"
            >
              RSS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
