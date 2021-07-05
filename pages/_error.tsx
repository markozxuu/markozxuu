// Packages
import { NextPageContext } from 'next';

// Components
import Error from '@components/Error';

interface Props {
  statusCode: number;
}

const E = ({ statusCode }: Props) => {
  return <Error status={statusCode} />;
};

E.getInitialProps = async ({ res }: NextPageContext) => {
  const statusCode = res ? res.statusCode : 500;
  return { statusCode };
};

export default E;
