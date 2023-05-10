import { Layout } from '@/layouts/Layout';
import { checkAuth } from '@/utils/checkAuth';
import { GetServerSidePropsContext, NextPage } from 'next';
import { ReactNode } from 'react';
import * as Api from '@/api';
import { IFileItem } from '@/api/dto/files.dto';
import { FileList } from '@/components/FileList';
import { DashboardLayout } from '@/layouts/DashboardLayout';

interface IProps {
  items: IFileItem[];
}

const DashboardPage: NextPage<IProps> = ({ items }) => {
  return (
    <DashboardLayout>
      <FileList items={items} />
    </DashboardLayout>
  );
};

DashboardPage.getLayout = (page: ReactNode) => {
  return <Layout title="Dashboard / Главная">{page}</Layout>;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const authProps = await checkAuth(ctx);

  if ('redirect' in authProps) {
    return authProps;
  }

  try {
    const items = await Api.files.getAll();
    //
    return {
      props: {
        items,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: { items: [] },
    };
  }
};

export default DashboardPage;
