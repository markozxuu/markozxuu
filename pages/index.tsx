// Components
import Layout from '@components/Layout';

const Index = () => (
  <Layout>
    <main className="p-4 mx-auto">
      <h1 className="text-4xl font-semibold mb-8">Markoz Peña</h1>
      <p className="text-lg leading-loose">
        Started programming in late 2015 on his own. Markoz has no college
        degree, he is a strong believer in the idea that you can learn a lot
        about programming through blog readings and online courses. He created a
        couple of <b>games</b> in unity3d and also created some{' '}
        <b>applications </b>
        for the Android operating system that were published in Google play. In
        his spare time he practices photography like skateboarding.
      </p>
      <p className="text-lg mt-5">Experience</p>
      <ul className="list-disc px-10 text-lg mt-4">
        <li className="mt-5">
          Developed the search engine to find plugins and themes for{' '}
          <a
            href="https://hyper.is"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-vercel dark:hover:text-gray-vercel"
          >
            hyper.is
          </a>{' '}
          a product by{' '}
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-vercel dark:hover:text-gray-vercel"
          >
            Vercel
          </a>{' '}
        </li>
        <li className="mt-5">
          Developed an{' '}
          <a
            href="https://amua.com.mx"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-vercel dark:hover:text-gray-vercel"
          >
            e-commerce
          </a>{' '}
          store for a company with a headless approach, with the help of Shopify
          for data consumption and Next.js to create an incredible SSG
          application, when it is necessary to use{' '}
          <em className="font-medium not-italic">
            Incremental Static Regeneration
          </em>
        </li>
        <li className="mt-5">
          I am an active contributor to ▲Vercel OSS projects like{' '}
          <a
            href="https://github.com/vercel/ncc"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-vercel dark:hover:text-gray-vercel"
          >
            ncc
          </a>
          ,{' '}
          <a
            href="https://github.com/vercel/vercel"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-vercel dark:hover:text-gray-vercel"
          >
            vercel-cli
          </a>{' '}
          and{' '}
          <a
            href="https://github.com/vercel/next.js"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-vercel dark:hover:text-gray-vercel"
          >
            next.js
          </a>
        </li>
        <li className="mt-5">
          Added the
          <a
            href="https://github.com/vercel/vercel/pull/4947"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-vercel dark:hover:text-gray-vercel mx-1"
          >
            res.redirect
          </a>
          helper method to the Next.js API and{' '}
          <a
            href="https://github.com/vercel/next.js/pull/15844"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-vercel dark:hover:text-gray-vercel mx-1"
          >
            improved the error messages
          </a>
        </li>
      </ul>
      <p className="text-lg mt-5">Development</p>
      <ul className="list-disc px-10 text-lg mt-4">
        <li className="mt-5">
          {' '}
          <a
            href="https://apkpure.com/es/photo-mark/merix.selfidix"
            rel="noopener noreferrer"
            target="_blank"
            className="underline hover:text-gray-vercel dark:hover:text-gray-vercel"
          >
            <em>Photo Mark</em>
          </a>{' '}
          an application for photography
        </li>
        <li className="mt-5">
          <a
            href="https://play.google.com/store/apps/details?id=com.expresoStudy"
            rel="noopener noreferrer"
            target="_blank"
            className="underline hover:text-gray-vercel dark:hover:text-gray-vercel"
          >
            <em>Jumper Man</em>
          </a>{' '}
          a game
        </li>
        <li className="mt-5">
          <a
            href="https://apkpure.com/es/material-timer/merix.cronometro3"
            rel="noopener noreferrer"
            target="_blank"
            className="underline hover:text-gray-vercel dark:hover:text-gray-vercel"
          >
            <em>Chronometer material</em>
          </a>{' '}
          an application
        </li>
      </ul>
    </main>
  </Layout>
);

export default Index;
