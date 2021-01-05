// Components
import Header from './Header';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="container mx-auto">
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
