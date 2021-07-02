import Header from '@components/Header';
import Footer from '@components/Footer';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <div className="max-w-4xl mx-auto mt-16 antialiased">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
