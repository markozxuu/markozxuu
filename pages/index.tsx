// Components
import Layout from '@components/Layout';
import Content from '@components/Content';

const Index = () => (
  <Layout>
    <h1 style={{ fontSize: '2.5rem', fontWeight: 600 }}>Markoz Peña</h1>
    <Content>
      <p>
        Started programming in late 2015 on his own. Markoz has no college
        degree, he is a strong believer in the idea that you can learn a lot
        about programming through blog readings and online courses. He created a
        couple of <b>games</b> in unity3d and I also create some{' '}
        <b>applications </b>
        for the Android operating system that were published in Google play. In
        his spare time he practices photography like skateboarding.
      </p>
      <p>Experiencie</p>
      <ul>
        <li>
          Developed the search engine to find plugins and themes for{' '}
          <a href="https://hyper.is" target="_blank" rel="noopener noreferrer">
            hyper.is
          </a>{' '}
          a product of{' '}
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            vercel.com
          </a>{' '}
        </li>
      </ul>
      <p>Develpment</p>
      <ul>
        <li>
          {' '}
          <a
            href="https://apkpure.com/es/photo-mark/merix.selfidix"
            rel="noopener noreferrer"
            target="_blank"
          >
            <em>Photo Mark</em>
          </a>{' '}
          an application of photography developed in Java
        </li>
        <li>
          <a
            href="https://play.google.com/store/apps/details?id=com.expresoStudy"
            rel="noopener noreferrer"
            target="_blank"
          >
            <em>Jumper Man</em>
          </a>{' '}
          a game developed in C# using Unity3d
        </li>
        <li>
          <a
            href="https://apkpure.com/es/material-timer/merix.cronometro3"
            rel="noopener noreferrer"
            target="_blank"
          >
            <em>Material cronometro</em>
          </a>{' '}
          an application developed in Java
        </li>
      </ul>
    </Content>
  </Layout>
);

export default Index;
