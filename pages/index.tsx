import Layout from '@components/Layout';
import About from '@components/About';
import RecentPosts from '@components/RecentPosts';

const Index = () => (
  <Layout>
    <div className="lg:space-y-24 space-y-14">
      <main>
        <About />
      </main>
      <RecentPosts />
    </div>
  </Layout>
);

export default Index;
