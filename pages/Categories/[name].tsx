import React from 'react';

import { getCategories, getCategoryItem } from '../../src/services/index';
import { Box, Container, Grid, Typography } from '@mui/material';
import { item } from '@/types';
import Categoryitem from '@/content/Categories/categoryItem';
import SidebarLayout from '@/layouts/SidebarLayout';
import Head from 'next/head';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import PageHeader from '@/content/Overview/Hero/PageHeader';
import { useRouter } from 'next/router';
import Loader from '@/components/Loader';
import NextLink from 'next/link';

type Props = {
  items?: Array<item>;
};
const Categoryitems = (props: Props) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Items</title>
      </Head>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Box p={3}>
        <Box
          sx={{
            pb: 3
          }}
        >
          <Box display="flex" alignItems="center">
            <Typography variant="h3">Items</Typography>

            {/* <LocalFireDepartmentIcon fill="#ffa500" /> */}
          </Box>
        </Box>
        {router.isFallback ? (
          <Loader />
        ) : (
          <Container maxWidth="lg">
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="stretch"
              spacing={props.items?.length}
            >
              {props.items?.map((item) => (
                <Grid item key={item.name} xs={12}>
                  <NextLink
                    href={`/Categories/${item.category}/${item.name}`}
                    shallow
                    passHref
                  >
                    {/* <Button
                      className={
                        currentRoute === '="/' || currentRoute === item.href
                          ? 'active'
                          : ''
                      }
                      disableRipple
                      component="a"
                      onClick={closeSidebar}
                      // startIcon={<BrightnessLowTwoToneIcon />}
                    >
                      {item.title}
                    </Button> */}
                    <Categoryitem item={item} />
                  </NextLink>
                </Grid>
              ))}
            </Grid>
          </Container>
        )}
      </Box>
    </>
  );
};

Categoryitems.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;
export default Categoryitems;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const items = await getCategoryItem(params.name);
  return {
    props: { items }
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map((item) => item.name),
    fallback: true
  };
}
