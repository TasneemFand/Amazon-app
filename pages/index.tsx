import { Box, Card, styled } from '@mui/material';
import { createContext } from 'react';

import Head from 'next/head';

import Hero from 'src/content/Overview/Hero';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import PageHeader from '@/content/Overview/Hero/PageHeader';
import SidebarLayout from '@/layouts/SidebarLayout';
import { getItems } from '../src/services/index';
import { item } from '@/types';

const HeaderWrapper = styled(Card)(
  ({ theme }) => `
  width: 100%;
  display: flex;
  align-items: center;
  height: ${theme.spacing(10)};
  margin-bottom: ${theme.spacing(10)};
`
);

// const OverviewWrapper = styled(Box)(
//   ({ theme }) => `
//     overflow: auto;
//     background: ${theme.palette.common.white};
//     flex: 1;
//     overflow-x: hidden;
// `
// );

type props = {
  res: item[];
};

type OverviewContext = {
  items: item[];
};

export const OverviewContext = createContext<OverviewContext>(
  {} as OverviewContext
);

const Overview = (props: props) => {
  return (
    <OverviewContext.Provider value={{ items: props.res }}>
      <Box>
        <Head>
          <title>Amazon App</title>
        </Head>

        <PageTitleWrapper>
          <PageHeader />
        </PageTitleWrapper>

        <Hero />
      </Box>
    </OverviewContext.Provider>
  );
};

export default Overview;
Overview.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export async function getServerSideProps() {
  const res = await getItems();
  return {
    props: {
      res
    }
  };
}
