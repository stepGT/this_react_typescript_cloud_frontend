import { checkAuth } from '@/utils/checkAuth';
import { GetServerSidePropsContext, NextPage } from 'next';

const DashboardPage: NextPage = () => {
  return (
    <main>
      <h1>Dashboard Page</h1>
    </main>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const authProps = await checkAuth(ctx);

  if ('redirect' in authProps) {
    return authProps;
  }

  try {
    return {
      props: {},
    };
  } catch (err) {
    console.log(err);
    return {
      props: {},
    };
  }
};

export default DashboardPage;
