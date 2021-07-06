import Head from '@components/Head';
import Layout from '@components/Layout';

import Vercel from '@components/icons/Vercel';

import s from './error.module.css';

interface Props {
  status: number;
}

const Error = ({ status }: Props) => (
  <Layout>
    <Head>
      <title>404 — Markoz Peña</title>
      <meta name="robots" content="noindex" />
    </Head>
    {status === 404 ? (
      <div className="max-w-3xl p-4 mt-20 mx-auto">
        <h1 className="text-4xl font-bold mb-7">This page cannot be found.</h1>
        <p>
          <blockquote
            className={`${s.blockquote} dark:border-line-gray-dark border-line-gray-light`}
            cite="https://sites.ed.gov/whhbcu/multimedia/everyone-in-this-country-should-learn-how-to-program-because-it-teaches-you-how-to-think-steve-jobs/"
          >
            <p className={s.paragraph}>
              Everybody in this country should learn how to program a
              computer... Because it teaches you how to Think.
            </p>

            <footer className="flex justify-end mt-3">
              <span className="text-xl">— Steve Jobs</span>
            </footer>
          </blockquote>
        </p>
      </div>
    ) : (
      <div className="max-w-xl p-4 mt-20 mx-auto">
        <section className="flex flex-col items-center">
          <div>
            <Vercel />
          </div>
          <h1 className="text-5xl font-bold mb-5 tracking-wider">
            {status ?? '?'}
          </h1>
          <p className="text-xl font-medium">An error occurred on server.</p>
        </section>
      </div>
    )}
  </Layout>
);

export default Error;
