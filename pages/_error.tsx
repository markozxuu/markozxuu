// Packages
import { NextPageContext } from 'next';

// Components
import Error from '@components/error';

interface Props {
  statusCode: number;
}

const E = ({ statusCode }: Props) => {
  return <Error status={statusCode} />;
};

export const getServerSideProps = async ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 500;
  return {
    props: {
      statusCode,
    },
  };
};

export default E;
