// Components
import Layout from '@components/Layout';

const Index = () => (
  <Layout>
    <main className="max-w-xl p-4 mx-auto">
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
        <li>
          Developed the search engine to find plugins and themes for{' '}
          <a
            href="https://hyper.is"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-vercel dark:hover:text-gray-vercel"
          >
            hyper.is
          </a>{' '}
          a product of{' '}
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-vercel dark:hover:text-gray-vercel"
          >
            vercel.com
          </a>{' '}
        </li>
      </ul>
      <p className="text-lg mt-5">Development</p>
      <ul className="list-disc px-10 text-lg mt-4">
        <li>
          {' '}
          <a
            href="https://apkpure.com/es/photo-mark/merix.selfidix"
            rel="noopener noreferrer"
            target="_blank"
            className="underline hover:text-gray-vercel dark:hover:text-gray-vercel"
          >
            <em>Photo Mark</em>
          </a>{' '}
          an application of photography
        </li>
        <li>
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
        <li>
          <a
            href="https://apkpure.com/es/material-timer/merix.cronometro3"
            rel="noopener noreferrer"
            target="_blank"
            className="underline hover:text-gray-vercel dark:hover:text-gray-vercel"
          >
            <em>Material cronometro</em>
          </a>{' '}
          an application
        </li>
      </ul>
    </main>
  </Layout>
);

export default Index;
