// Components
import Header from '@components/Header';
import Footer from '@components/Footer';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="min-h-screen container mx-auto">
        <Header />
        <div>{children}</div>
      </div>
      <div className="my-10">
        <Footer />
      </div>
    </>
  );
};

export default Layout;
