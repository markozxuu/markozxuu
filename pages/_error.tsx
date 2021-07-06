import { NextPageContext } from 'next';

import Error from '@components/error';

interface Props {
  statusCode: number;
}

const E = ({ statusCode }: Props) => <Error status={statusCode} />;

E.getInitialProps = async ({ res }: NextPageContext) => {
  const statusCode = res ? res.statusCode : 500;
  return { statusCode };
};

export default E;
