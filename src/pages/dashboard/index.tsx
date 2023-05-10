import { Layout } from '@/layouts/Layout';
import { checkAuth } from '@/utils/checkAuth';
import { GetServerSidePropsContext, NextPage } from 'next';
import { ReactNode } from 'react';
import styles from '@/styles/Home.module.scss';
import { Menu } from 'antd';
import { DeleteOutlined, FileImageOutlined, FileOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { UploadButton } from '@/components/UploadButton';
import * as Api from '@/api';
import { IFileItem } from '@/api/dto/files.dto';
import { FileList } from '@/components/FileList';

interface Props {
  items: IFileItem[];
}

const DashboardPage: NextPage<Props> = ({ items }) => {
  const router = useRouter();
  const selectedMenu = router.pathname;
  return (
    <main className={styles.dashboardContainer}>
      <div className={styles.sidebar}>
        <UploadButton />
        <Menu
          className={styles.menu}
          mode="inline"
          selectedKeys={[selectedMenu]}
          items={[
            {
              key: `/dashboard`,
              icon: <FileOutlined />,
              label: `Файлы`,
              onClick: () => router.push('/dashboard'),
            },
            {
              key: `/dashboard/photos`,
              icon: <FileImageOutlined />,
              label: `Фото`,
              onClick: () => router.push('/dashboard/photos'),
            },
            {
              key: `/dashboard/trash`,
              icon: <DeleteOutlined />,
              label: `Корзина`,
              onClick: () => router.push('/dashboard/trash'),
            },
          ]}
        />
      </div>
      <div className="container">
        <h1><FileList items={items} /></h1>
      </div>
    </main>
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
